const loadScript = src => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.onload = resolve
    script.onerror = reject
    script.src = chrome.extension.getURL(src)
    document.documentElement.appendChild(script)
  })
}

Promise.all([
  loadScript('script/api_config.js'),
  loadScript('script/data.js'),
]).then(() => {
  loadScript('script/main.js');
}).catch(console.log)
