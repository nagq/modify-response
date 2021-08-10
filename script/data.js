const ApiList = {
    // config 配置
    config: '/api/pocket/v2/goods/config',
    // 投保人数
    policyCount: '/api/whale/v1/H5/policy/query/stats',
    // banner 位
    redirect: '/api/whale/goods/v2/auth/redirect',
    // 华为
    healthInfo: '/v1/health/get/order/by/openId',

    // 微信小程序
    // 获取实名信息
    getBaseInfo4wx: '/v1/wechatApplet/h5/getBaseInfo4wx',
    getFamilyMemberList: '/api/whale/v1/wechatApplet/h5/getFamilyMemberList',
    checkPolicy: '/api/whale/v1/insure/personal/checkPolicy',

    validateSmsCode: '/api/whale/v1/H5/insureOrder/personal/message/validateSmsCode'
};

window['__MOCK_API_RULES'] = [
    {
        match: ApiList.config,
        merge: {
            "code": "0",
            "message": null,
            "result": {
                "template": "zx20-standard",
                "components": {
                  "inform": {
                    "enable": true,
                    "package": "zx-2021-multiple-inform"
                  },
                  "clause-exemption": {
                    "enable": true,
                    "package": "2021-clause-exemption"
                  },
                  "clause-hint": {
                    "enable": true,
                    "package": "jzx-ehy-G202101250001-clause-hint"
                  },
                //   "form": {
                //     enable: true,
                //     package: "dyzb-form-bak"
                //   }
                },
                "data": {
                    "autoSubmit": false,
                    "healthInformPosition": [ "popup"]
                }
              }
        }
    },

    {
        match: ApiList.healthInfo,
        enable: false,
        override: {
            "code": "0",
            "message": null,
            "result": {
                "applicantCertNo": "411422198305130097",
                "applicantPhone": "18121104433",
                "applicantName": "烧烤工具",
                "selfHavePolicy": true
            }
        }
    },

    {
        match: ApiList.validateSmsCode,
        override: {
            "code": "0",
            "message": "成功",
        }
    },
    {
        match: ApiList.getBaseInfo4wx,
        enable: false,
        override:  {
            "code": "0",
            "message": null,
            "result":
            {
                "name": "孔振群",
                "phone": "18317857608",
                "certNo": "150100198701248792",
                "realName": true,
                "accountId": 210200079
            }}
    },
    {
        match: ApiList.getBaseInfo4wx,
        override:  {
            "code": "0",
            "message": null,
            "result": {
                "name": "张老三",
                "phone": "18317857608",
                "certNo": "110101197907298992",
                "realName": true,
                "accountId": "210402355"
            }}
    },
    {
        match: ApiList.getFamilyMemberList,
        enable: false,
        override: {
            "code": "0",
            "message":null,
            "result":[
                {"id":null,"accountId":210200079,"name":"孔振群","certType":"I","certNo":"150100198701248792","phone":"18317857608","relationToPH":"1","hasSocialInsurance":null,"hasSmoke":null},
                {"id":280008,"accountId":210200079,"name":"张老四","certType":"I","certNo":"110101198608026246","phone":null,"relationToPH":"2","hasSocialInsurance":"Y","hasSmoke":null},
                {"id":240018,"accountId":210200079,"name":"张三","certType":"I","certNo":"110101198006216915","phone":null,"relationToPH":"3","hasSocialInsurance":"Y","hasSmoke":null},
                {"id":240019,"accountId":210200079,"name":"嗷嗷","certType":"I","certNo":"110101198006216210","phone":null,"relationToPH":"3","hasSocialInsurance":"N","hasSmoke":null},
                {"id":280006,"accountId":210200079,"name":"李四","certType":"I","certNo":"110101201007319056","phone":null,"relationToPH":"3","hasSocialInsurance":"Y","hasSmoke":null},
                {"id":240017,"accountId":210200079,"name":"张三","certType":"I","certNo":"36010019710517025X","phone":null,"relationToPH":"4","hasSocialInsurance":"Y","hasSmoke":null}
            ]
        }
    },
    {
        match: ApiList.checkPolicy,
        enable: false,
        override: {
            "code":"0",
            "message":null,
            "result":{
                "policyHolder":{
                    "channelUserNo":null,"applyNo":null,"policyNo":null,"name":"孔振群","gender":null,"certType":"I","certNo":"150100198701248792","birthday":null,"age":null,"phone":"18317857608","email":null,"totalPremium":null,"premium":null,"monthlyPayPremium":null,"nextPremium":null,"savingPremiumYearly":null,"relationToPH":null,"hasSocialInsurance":null,"hasSmoke":null,"hasHealthInform":null,"needIntelligenceUw":null,"questionnaireId":null,"masterCertType":null,"masterCertNo":null,"applyNum":null,"isAutoRenewal":null,"uwConclusionCode":null,"uwConclusionDesc":null,"userSelectProductCode":null,"productCode":null,"chargesProductCode":null,"uwResult":null,"refuelingBagIds":null,"userSelectRefuelingBagIds":null,"smsCode":null,"policyStatus":null,"extraCharge":null,"extraChargeRate":null,"realName":null,"accountId":null,"healthScore":null,"effectAge":null,"hospital":null,"airline":null,"drugProductId":null,"effectiveTime":null
                },
                "insuredList":[
                    {"channelUserNo":null,"applyNo":null,"policyNo":null,"name":"张老四","gender":null,"certType":"I","certNo":"110101198608026246","birthday":null,"age":null,"phone":null,"email":null,"totalPremium":null,"premium":null,"monthlyPayPremium":null,"nextPremium":null,"savingPremiumYearly":null,"relationToPH":"2","hasSocialInsurance":"Y","hasSmoke":null,"hasHealthInform":null,"needIntelligenceUw":null,"questionnaireId":null,"masterCertType":null,"masterCertNo":null,"applyNum":null,"isAutoRenewal":null,"uwConclusionCode":null,"uwConclusionDesc":null,"userSelectProductCode":null,"productCode":null,"chargesProductCode":null,"uwResult":null,"refuelingBagIds":null,"userSelectRefuelingBagIds":null,"smsCode":null,"policyStatus":null,"extraCharge":null,"extraChargeRate":null,"realName":null,"accountId":null,"healthScore":null,"effectAge":null,"hospital":null,"airline":null,"drugProductId":null,"effectiveTime":null},
                    {"channelUserNo":null,"applyNo":null,"policyNo":null,"name":"张三","gender":null,"certType":"I","certNo":"36010019710517025X","birthday":null,"age":null,"phone":null,"email":null,"totalPremium":null,"premium":null,"monthlyPayPremium":null,"nextPremium":null,"savingPremiumYearly":null,"relationToPH":"4","hasSocialInsurance":"Y","hasSmoke":null,"hasHealthInform":null,"needIntelligenceUw":null,"questionnaireId":null,"masterCertType":null,"masterCertNo":null,"applyNum":null,"isAutoRenewal":null,"uwConclusionCode":null,"uwConclusionDesc":null,"userSelectProductCode":null,"productCode":null,"chargesProductCode":null,"uwResult":null,"refuelingBagIds":null,"userSelectRefuelingBagIds":null,"smsCode":null,"policyStatus":null,"extraCharge":null,"extraChargeRate":null,"realName":null,"accountId":null,"healthScore":null,"effectAge":null,"hospital":null,"airline":null,"drugProductId":null,"effectiveTime":null},
                    {"channelUserNo":null,"applyNo":null,"policyNo":null,"name":"李四","gender":null,"certType":"I","certNo":"110101201007319056","birthday":null,"age":null,"phone":null,"email":null,"totalPremium":null,"premium":null,"monthlyPayPremium":null,"nextPremium":null,"savingPremiumYearly":null,"relationToPH":"3","hasSocialInsurance":"Y","hasSmoke":null,"hasHealthInform":null,"needIntelligenceUw":null,"questionnaireId":null,"masterCertType":null,"masterCertNo":null,"applyNum":null,"isAutoRenewal":null,"uwConclusionCode":null,"uwConclusionDesc":null,"userSelectProductCode":null,"productCode":null,"chargesProductCode":null,"uwResult":null,"refuelingBagIds":null,"userSelectRefuelingBagIds":null,"smsCode":null,"policyStatus":null,"extraCharge":null,"extraChargeRate":null,"realName":null,"accountId":null,"healthScore":null,"effectAge":null,"hospital":null,"airline":null,"drugProductId":null,"effectiveTime":null},
                    {"channelUserNo":null,"applyNo":null,"policyNo":null,"name":"孔振群","gender":null,"certType":"I","certNo":"150100198701248792","birthday":null,"age":null,"phone":null,"email":null,"totalPremium":null,"premium":null,"monthlyPayPremium":null,"nextPremium":null,"savingPremiumYearly":null,"relationToPH":"1","hasSocialInsurance":"Y","hasSmoke":null,"hasHealthInform":null,"needIntelligenceUw":null,"questionnaireId":null,"masterCertType":null,"masterCertNo":null,"applyNum":null,"isAutoRenewal":null,"uwConclusionCode":null,"uwConclusionDesc":null,"userSelectProductCode":null,"productCode":null,"chargesProductCode":null,"uwResult":null,"refuelingBagIds":null,"userSelectRefuelingBagIds":null,"smsCode":null,"policyStatus":null,"extraCharge":null,"extraChargeRate":null,"realName":null,"accountId":null,"healthScore":null,"effectAge":null,"hospital":null,"airline":null,"drugProductId":null,"effectiveTime":null}
                ]}}
    },
    {
        match: ApiList.getFamilyMemberList,
        override:  {
            "code": "0",
            "message": null,
            "result": [{
                "id": null,
                "accountId": 210402355,
                "name": "张老三",
                "certType": "I",
                "certNo": "110101197907298992",
                "phone": "18317857608",
                "relationToPH": "1",
                "hasSocialInsurance": null,
                "hasSmoke": null
            },
            {
                "id": 2800051,
                "accountId": 2104023551,
                "name": "张老婆",
                "certType": "I",
                "certNo": "110101197910296760",
                "phone": null,
                "relationToPH": "2",
                "hasSocialInsurance": null,
                "hasSmoke": null
            },
            {
                "id": 2800052,
                "accountId": 2104023552,
                "name": "张小四",
                "certType": "I",
                "certNo": "110101200008279207",
                "phone": null,
                "relationToPH": "4",
                "hasSocialInsurance": null,
                "hasSmoke": null
            },
            {
                "id": 2800053,
                "accountId": 2104023553,
                "name": "张小五",
                "certType": "I",
                "certNo": "11010120000927722X",
                "phone": null,
                "relationToPH": "3",
                "hasSocialInsurance": null,
                "hasSmoke": null
            },
            {
                "id": 2800054,
                "accountId": 2104023554,
                "name": "张他爹",
                "certType": "I",
                "certNo": "110101196309299413",
                "phone": null,
                "relationToPH": "4",
                "hasSocialInsurance": null,
                "hasSmoke": null
            },
            {
                "id": 2800055,
                "accountId": 2104023555,
                "name": "张他娘",
                "certType": "I",
                "certNo": "110101196310299787",
                "phone": null,
                "relationToPH": "4",
                "hasSocialInsurance": null,
                "hasSmoke": null
            }, {
                "id": 2800056,
                "accountId": 2104023556,
                "name": "张三十天",
                "certType": "I",
                "certNo": "110101202107019397",
                "phone": null,
                "relationToPH": "3",
                "hasSocialInsurance": null,
                "hasSmoke": null
            }]}
    }
]
