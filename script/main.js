function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

const MOCK_API_RES = {
    rules() {
        return window['__MOCK_API_RULES']
    },
    originalXHR: window.XMLHttpRequest,
    myXHR: function() {
        const modifyResponse = () => {
          MOCK_API_RES.rules().forEach(({match, override, merge}) => {
            if (match && this.responseURL.match(new RegExp(match, 'i'))) {
              let res = override || merge
                ? mergeDeep(JSON.parse(this.responseText), merge)
                : {};

                let txt = JSON.stringify(res);
                this.responseText = txt;
                this.response = txt;
            }
          })
        }

        const xhr = new MOCK_API_RES.originalXHR;
        for (let attr in xhr) {
          if (attr === 'onreadystatechange') {
            xhr.onreadystatechange = (...args) => {
              if (this.readyState == 4) {
                // 请求成功
                modifyResponse();
              }
              this.onreadystatechange && this.onreadystatechange.apply(this, args);
            }
            continue;
          } else if (attr === 'onload') {
            xhr.onload = (...args) => {
              // 请求成功
              modifyResponse();
              this.onload && this.onload.apply(this, args);
            }
            continue;
          }

          if (typeof xhr[attr] === 'function') {
            this[attr] = xhr[attr].bind(xhr);
          } else {
            // responseText和response不是writeable的，但拦截时需要修改它，所以修改就存储在this[`_${attr}`]上
            if (attr === 'responseText' || attr === 'response') {
              Object.defineProperty(this, attr, {
                get: () => this[`_${attr}`] == undefined ? xhr[attr] : this[`_${attr}`],
                set: (val) => this[`_${attr}`] = val,
                enumerable: true
              });
            } else {
              Object.defineProperty(this, attr, {
                get: () => xhr[attr],
                set: (val) => xhr[attr] = val,
                enumerable: true
              });
            }
          }
        }
    },
    originalFetch: window.fetch.bind(window),
    myFetch: function(...args) {
        return MOCK_API_RES.originalFetch(...args).then(async (response) => {
          let matched = MOCK_API_RES.rules().find(({match, enable}) => {
            // if (response.url.indexOf('getFamilyMemberList') >= 0) {
            //   console.log(response.url, match)
            //   console.log(!match && response.url.match(new RegExp(match, 'i')))
            // }
            return enable !== false && match && response.url.match(new RegExp(match, 'i'));
          })

          if (matched) {
            const {enable, override, merge} = matched;
            if (enable === false) {
              return response;
            }
            return (async function() {
              let responseData = await response.clone().json();
              let res = override || (merge
                ? mergeDeep(responseData, merge)
                : undefined)

              let txt = JSON.stringify(res);

              const stream = new ReadableStream({
                start(controller) {
                  controller.enqueue(new TextEncoder().encode(txt));
                  controller.close();
                }
              });

              const newResponse = new Response(stream, {
                headers: response.headers,
                status: response.status,
                statusText: response.statusText,
              });
              const proxy = new Proxy(newResponse, {
                get: function(target, name){
                  switch(name) {
                    case 'ok':
                    case 'redirected':
                    case 'type':
                    case 'url':
                    case 'useFinalURL':
                    case 'body':
                    case 'bodyUsed':
                      return response[name];
                  }
                  return target[name];
                }
              });

              for (let key in proxy) {
                if (typeof proxy[key] === 'function') {
                  proxy[key] = proxy[key].bind(newResponse);
                }
              }
              return proxy;
            })();
          } else {
            return response;
          }
        });
    }
}

window.XMLHttpRequest = MOCK_API_RES.myXHR;
window.fetch = MOCK_API_RES.myFetch;
