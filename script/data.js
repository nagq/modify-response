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
};

window['__MOCK_API_RULES'] = [
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
        match: ApiList.getBaseInfo4wx,
        override:  {
            "code": "0",
            "message": null,
            "result": {
                "name": "张老三",
                "phone": "18317867508",
                "certNo": "620100198505207574",
                "realName": true,
                "accountId": "210402355"
            }}
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
                "certNo": "620100198505207574",
                "phone": "18317867508",
                "relationToPH": "1",
                "hasSocialInsurance": null,
                "hasSmoke": null
            },
            {
                "id": 280005,
                "accountId": 210402355,
                "name": "张老婆",
                "certType": "I",
                "certNo": "110101198007278448",
                "phone": null,
                "relationToPH": "2",
                "hasSocialInsurance": null,
                "hasSmoke": null
            },
            {
                "id": 280003,
                "accountId": 210402355,
                "name": "张小四",
                "certType": "I",
                "certNo": "110101200008279207",
                "phone": null,
                "relationToPH": "3",
                "hasSocialInsurance": null,
                "hasSmoke": null
            },
            {
                "id": 280004,
                "accountId": 210402355,
                "name": "张小五",
                "certType": "I",
                "certNo": "11010120000927722X",
                "phone": null,
                "relationToPH": "3",
                "hasSocialInsurance": null,
                "hasSmoke": null
            },
            {
                "id": 280001,
                "accountId": 210402355,
                "name": "张他爹",
                "certType": "I",
                "certNo": "110101196007277438",
                "phone": null,
                "relationToPH": "4",
                "hasSocialInsurance": null,
                "hasSmoke": null
            },
            {
                "id": 280002,
                "accountId": 210402355,
                "name": "张他娘",
                "certType": "I",
                "certNo": "110101196007279249",
                "phone": null,
                "relationToPH": "4",
                "hasSocialInsurance": null,
                "hasSmoke": null
            }]}
    }
]
