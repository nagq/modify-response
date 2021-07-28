const __MOCK_API_CONFIG_DATA =(
{
    "template": "zx20-standard",
    "components": {
      "renewal": {
        "enable": true,
        "package": "null"
      },
      "inform": {
        "enable": true,
        "package": "etyw-inform"
      },
      "clause-exemption": {
        "enable": true,
        "package": "etyw-clause-exemption"
      },
      "clause-hint": {
        "enable": true,
        "package": "etyw-clause-hint"
      },
      "segment-form": {
        "enable": false,
        "package": "weimai-segment-form"
      },
      "insured-item-form": {
        "package": "weimai-insured-item-form",
        "enable": true
      },
      "toolbar": {
        "enable": true,
        "package": "etyw-toolbar"
      },
      "insured-list-form": {
        "enable": true,
        "package": "insured-list-form-multiple-with-family"
      },
      "policy-holder-form": {
        "enable": true,
        "package": "policy-holder-form-realName"
      },
      "family-member-list": {
        "enable": true,
        "package": "weimai-family-member-list"
      },
      "insured-list-form-relation-to-PH": {
        "enable": true,
        "package": "insured-list-form-relation-to-PH-for-wechat"
      },
      "home": {
        "enable": true,
        "package": "home-for-wechat"
      },
      "banner": {
        "enable": true,
        "package": "etyw-banner"
      },
      "success-popup": {
        "enable": true,
        "package": "null"
      },
      "plan-auto-down-grade": {
        "enable": true,
        "package": "plan-auto-down-grade"
      }
    },
    "share": {
      "title": "儿童意外保险2021",
      "desc": "为孩子多一分关爱，责任内儿童高发意外均可保！",
      "imgUrl": "https://cdn-health.zhongan.com/magiccube/resource/rl/d-vL7Na5AY.png"
    },
    "data": {
      "showHealth": false,
      "showSupervise": false,
      "intelligencyUnderwrite": false,
      "claimProcessList": [
        {
          "title": "线下理赔",
          "step": [
            {
              "claimContent": "关注众安健康微信公众号",
              "claimTitle": "第1步：报案"
            },
            {
              "claimContent": "使用在线理赔申请服务，根据指引提交理赔申请材料",
              "claimTitle": "第2步：材料提交"
            },
            {
              "claimContent": "保险公司将及时进行审核、调查、反馈结果，并根据情况通知寄送纸质材料",
              "claimTitle": "第3步：审核材料"
            },
            {
              "claimContent": "对属于保险责任的，保险公司会将理赔金直接转账至被保险人/受益人名下的指定账户",
              "claimTitle": "第4步：获得理赔金"
            }
          ]
        }
      ],
      "renewalList": [],
      "keywordList": [],
      "questionList": [
        {
          "category": "",
          "list": [
            {
              "title": "本产品提供了哪些保障？",
              "description": "本产品提供了三项保险保障，包括100种重大疾病、50种轻度疾病和30种特定疾病的保障。保险期间内，被保险人在90天等待期后初次确诊罹患以上疾病，即可按保险合同约定获得赔付。"
            },
            {
              "title": "什么是等待期？",
              "description": "等待期又称观察期，是指需要对被保险人的健康情况观察一小段时间，在这段时间里如果发生保险事故将不会获得赔付。这是为了防止有些人明知马上发生保险事故而投保，比如带病投保，这样将会损害其他被保险人的利益。本产品的的等待期为90天，因意外伤害事故导致罹患本合同约定的疾病的，不受等待期限制。"
            },
            {
              "title": "理赔过还可以续保么？",
              "description": "保险期间内，如果被保险人因轻度疾病发生理赔，仍可以申请续保，但不允许新增加油包。若重大疾病未发生理赔，续保最高可至105周岁。投保人的续保申请须经保险人审核同意。"
            }
          ]
        }
      ],
      "planIndex": 0,
      "planListExtension": [
        {
          "name": "50万保额",
          "paymentTip": "保费与被保人年龄、性别相关",
          "paymentDefaultSavingPremium": "7%",
          "paymentList": [
            {
              "paymentType": "M",
              "default": true,
              "premiumTitleList": [
                "投保年龄",
                "费率"
              ],

              "premium": 1,
              "nextPremium": 35.4,
              "paymentPremiumTitle": "实付保费"
            },
            {
              "paymentType": "Y",
              "premiumTitleList": [
                "投保年龄",
                "费率"
              ],
              "premium": 159,
              "paymentPremiumTitle": "实付保费"
            }
          ],
          "minLength": 1,
          "maxLength": 3
        },
        {
          "name": "20万保额",
          "paymentTip": "保费与被保人年龄、性别相关",
          "paymentDefaultSavingPremium": "7%",
          "paymentList": [
            {
              "paymentType": "M",
              "default": true,
              "premiumTitleList": [
                "投保年龄",
                "费率"
              ],
              "premium": 1,
              "nextPremium": 11.44,
              "paymentPremiumTitle": "实付保费"
            },
            {
              "paymentType": "Y",
              "premiumTitleList": [
                "投保年龄",
                "费率"
              ],
              "premium": 159,
              "paymentPremiumTitle": "实付保费"
            }
          ],
          "minLength": 1,
          "maxLength": 3
        },
        {
          "name": "10万保额",
          "paymentTip": "保费与被保人年龄、性别相关",
          "paymentDefaultSavingPremium": "7%",
          "paymentList": [
            {
              "paymentType": "M",
              "default": true,
              "premiumTitleList": [
                "投保年龄",
                "费率"
              ],
              "premium": 1,
              "nextPremium": 5.72,
              "paymentPremiumTitle": "实付保费"
            },
            {
              "paymentType": "Y",
              "premiumTitleList": [
                "投保年龄",
                "费率"
              ],
              "premium": 159,
              "paymentPremiumTitle": "实付保费"
            }
          ],
          "minLength": 1,
          "maxLength": 3
        }
      ],
      "interface": {
        "home": {
          "banners": [
            {
              "image": "https://cdn-health.zhongan.com/magiccube/resource/rl/tsNVOLyqL8.png"
            }
          ],
          "toolbar": {
            "buttonText": "立即投保"
          },
          "agent": "https://im2.zhongan.io/zaim/?accessId=1621925507920&tenantID=1514946886000043&color=green&themeID=G202105210001&channelId=jkxtb&subject=儿童意外险&biz=健康险投保",
          "poster": "https://cdn-health.zhongan.com/magiccube/resource/rl/WS7t9u4zJz.png"
        },
        "success": {
          "hideHeaderButton": true,
          "images": {
            "common": "https://cdn-health.zhongan.com/magiccube/resource/rl/jbJPG-m8Qo.png",
            "wechat": "https://cdn-health.zhongan.com/magiccube/resource/rl/GJOp1RRQPg.png",
            "footer": "https://cdn-health.zhongan.com/magiccube/resource/rl/x2KgHJ6_y3.png"
          }
        }
      },
      "clauseInfoList": [
        {
          "name": "投保须知",
          "link": "https://nstatic.zhongan.com/hfe-static/goods/G202105210001/投保须知.pdf"
        },
        {
          "name": "个人信息保护政策",
          "link": "https://nstatic.zhongan.com/hfe-static/document/个人信息保护政策.pdf"
        },
        {
          "name": "偿付能力信息披露",
          "link": "https://www.zhongan.com/channel/public/publicInfo_cfnl2018.html"
        }
      ],
      "healthInformPosition": [
        "independent"
      ],
      "supervisePosition": [
        "bubble"
      ],
      "form": {
        "relationList": [
          {
            "value": 3,
            "label": "子女"
          }
        ]
      }
    },
    "theme": {
      "--theme-primary": "#5E78FD",
      "--theme-primary-light": "#97A7FD",
      "--theme-primary-lighter": "#EDF0FF",
      "--banner-recent-policy-background-color": "#3558ED"
    },
    "goods": {
        "id": 100098,
        "goodsCode": "G202106070002",
        "goodsName": "试管婴儿妊娠保险",
        "bizGoodsName": "试管婴儿妊娠保险",
        "planList": [
            {
            "planCode": "T1",
            "planName": "尊享版",
            "id": 100127,
            "goodId": 100098,
            "goodCode": "G202106070002",
            "insuredPeriodValue": 1,
            "insuredPeriodType": "Y",
            "paymentType": "Y",
            "planType": 1,
            "planDesc": null,
            "waitPeriod": "0天",
            "insurePeriod": "1年",
            "insuredAge": "20至40周岁",
            "insuredMinAge": "20$Y",
            "insuredMaxAge": "40$Y",
            "hospitalScope": null,
            "premiumPdfUrl": null,
            "introduction": null,
            "insureArea": "全国",
            "effectiveDay": null,
            "mappingFactor": null,
            "maxInsure": null,
            "maxInsureAmount": null,
            "autoDowngradePlan": null,
            "downgradePriority": null,
            "autoDowngradePlanMessage": null,
            "autoDowngradeRefuelingBagMapping": null,
            "planItemBOList": [
                {
                "goodCode": "G202106070002",
                "planCode": "CJ18",
                "planName": "试管婴儿妊娠保险",
                "itemType": 6,
                "itemList": [
                    {
                    "id": 152882,
                    "goodsCode": "G202106070002",
                    "planCode": "CJ18",
                    "itemType": "6",
                    "itemCode": null,
                    "itemName": "销售费率表",
                    "itemDesc": null,
                    "orderNo": 1,
                    "desc": null,
                    "code": null,
                    "premiumPdfUrl": "https://health.zacdn.cn/static/insurance/apply/h5/feepremium/premiumRate-CJ18_G202106070002.pdf",
                    "clausePdfUrl": null,
                    "amountDesc": null,
                    "paymentType": null,
                    "planFactorNames": null,
                    "occupationCategory": null,
                    "iconUrl": null,
                    "headPicUrl": null,
                    "simpleDesc": null,
                    "clauseLiabilityCode": null,
                    "extAmountDesc": null,
                    "extDesc": null,
                    "checkRules": null,
                    "displayType": 1,
                    "displayCheck": 1,
                    "discounts": null
                    }
                ]
                },
                {
                "goodCode": "G202106070002",
                "planCode": "CJ18",
                "planName": "试管婴儿妊娠保险",
                "itemType": 1,
                "itemList": [
                    {
                    "id": 152881,
                    "goodsCode": "G202106070002",
                    "planCode": "CJ18",
                    "itemType": "1",
                    "itemCode": "483_ZXG224",
                    "itemName": "体外受精-胚胎移植及其衍生技术手术妊娠失败保险金",
                    "itemDesc": null,
                    "orderNo": 1,
                    "desc": "保险期间内，被保险人在本合同指定的医疗机构通过体外受精-胚胎移植及其衍生技术手术，进行可移植胚胎或可移植囊胚的移植，如在同一家医院连续临床妊娠失败的次数达到3次时，保险人按保险单载明的保险金额给付体外受精-胚胎移植及其衍生技术手术妊娠失败保险金。\r\n被保险人于保险期间内接受任意一次胚胎或囊胚移植后，经保险合同约定的医疗机构或保险人认可的医疗机构诊断临床妊娠成功，保险人不再承担保险责任，本合同终止。",
                    "code": null,
                    "premiumPdfUrl": null,
                    "clausePdfUrl": null,
                    "amountDesc": "8万元",
                    "paymentType": null,
                    "planFactorNames": null,
                    "occupationCategory": null,
                    "iconUrl": null,
                    "headPicUrl": null,
                    "simpleDesc": null,
                    "clauseLiabilityCode": null,
                    "extAmountDesc": null,
                    "extDesc": null,
                    "checkRules": null,
                    "displayType": 1,
                    "displayCheck": 1,
                    "discounts": null
                    }
                ]
                }
            ],
            "planItemList": [],
            "clauseList": null,
            "planCodeRequired": null
            },
            {
            "planCode": "T2",
            "planName": "精选版",
            "id": 100127,
            "goodId": 100098,
            "goodCode": "G202106070002",
            "insuredPeriodValue": 1,
            "insuredPeriodType": "Y",
            "paymentType": "Y",
            "planType": 1,
            "planDesc": null,
            "waitPeriod": "0天",
            "insurePeriod": "1年",
            "insuredAge": "20至40周岁",
            "insuredMinAge": "20$Y",
            "insuredMaxAge": "40$Y",
            "hospitalScope": null,
            "premiumPdfUrl": null,
            "introduction": null,
            "insureArea": "全国",
            "effectiveDay": null,
            "mappingFactor": null,
            "maxInsure": null,
            "maxInsureAmount": null,
            "autoDowngradePlan": null,
            "downgradePriority": null,
            "autoDowngradePlanMessage": null,
            "autoDowngradeRefuelingBagMapping": null,
            "planItemBOList": [
                {
                "goodCode": "G202106070002",
                "planCode": "CJ18",
                "planName": "试管婴儿妊娠保险",
                "itemType": 6,
                "itemList": [
                    {
                    "id": 152882,
                    "goodsCode": "G202106070002",
                    "planCode": "CJ18",
                    "itemType": "6",
                    "itemCode": null,
                    "itemName": "销售费率表",
                    "itemDesc": null,
                    "orderNo": 1,
                    "desc": null,
                    "code": null,
                    "premiumPdfUrl": "https://health.zacdn.cn/static/insurance/apply/h5/feepremium/premiumRate-CJ18_G202106070002.pdf",
                    "clausePdfUrl": null,
                    "amountDesc": null,
                    "paymentType": null,
                    "planFactorNames": null,
                    "occupationCategory": null,
                    "iconUrl": null,
                    "headPicUrl": null,
                    "simpleDesc": null,
                    "clauseLiabilityCode": null,
                    "extAmountDesc": null,
                    "extDesc": null,
                    "checkRules": null,
                    "displayType": 1,
                    "displayCheck": 1,
                    "discounts": null
                    }
                ]
                },
                {
                "goodCode": "G202106070002",
                "planCode": "CJ18",
                "planName": "试管婴儿妊娠保险",
                "itemType": 1,
                "itemList": [
                    {
                    "id": 152881,
                    "goodsCode": "G202106070002",
                    "planCode": "CJ18",
                    "itemType": "1",
                    "itemCode": "483_ZXG224",
                    "itemName": "体外受精-胚胎移植及其衍生技术手术妊娠失败保险金",
                    "itemDesc": null,
                    "orderNo": 1,
                    "desc": "保险期间内，被保险人在本合同指定的医疗机构通过体外受精-胚胎移植及其衍生技术手术，进行可移植胚胎或可移植囊胚的移植，如在同一家医院连续临床妊娠失败的次数达到3次时，保险人按保险单载明的保险金额给付体外受精-胚胎移植及其衍生技术手术妊娠失败保险金。\r\n被保险人于保险期间内接受任意一次胚胎或囊胚移植后，经保险合同约定的医疗机构或保险人认可的医疗机构诊断临床妊娠成功，保险人不再承担保险责任，本合同终止。",
                    "code": null,
                    "premiumPdfUrl": null,
                    "clausePdfUrl": null,
                    "amountDesc": "8万元",
                    "paymentType": null,
                    "planFactorNames": null,
                    "occupationCategory": null,
                    "iconUrl": null,
                    "headPicUrl": null,
                    "simpleDesc": null,
                    "clauseLiabilityCode": null,
                    "extAmountDesc": null,
                    "extDesc": null,
                    "checkRules": null,
                    "displayType": 1,
                    "displayCheck": 1,
                    "discounts": null
                    }
                ]
                }
            ],
            "planItemList": [],
            "clauseList": null,
            "planCodeRequired": null
            },
            {
            "planCode": "T3",
            "planName": "优选版",
            "id": 100127,
            "goodId": 100098,
            "goodCode": "G202106070002",
            "insuredPeriodValue": 1,
            "insuredPeriodType": "Y",
            "paymentType": "Y",
            "planType": 1,
            "planDesc": null,
            "waitPeriod": "0天",
            "insurePeriod": "1年",
            "insuredAge": "20至40周岁",
            "insuredMinAge": "20$Y",
            "insuredMaxAge": "40$Y",
            "hospitalScope": null,
            "premiumPdfUrl": null,
            "introduction": null,
            "insureArea": "全国",
            "effectiveDay": null,
            "mappingFactor": null,
            "maxInsure": null,
            "maxInsureAmount": null,
            "autoDowngradePlan": null,
            "downgradePriority": null,
            "autoDowngradePlanMessage": null,
            "autoDowngradeRefuelingBagMapping": null,
            "planItemBOList": [
                {
                "goodCode": "G202106070002",
                "planCode": "CJ18",
                "planName": "试管婴儿妊娠保险",
                "itemType": 6,
                "itemList": [
                    {
                    "id": 152882,
                    "goodsCode": "G202106070002",
                    "planCode": "CJ18",
                    "itemType": "6",
                    "itemCode": null,
                    "itemName": "销售费率表",
                    "itemDesc": null,
                    "orderNo": 1,
                    "desc": null,
                    "code": null,
                    "premiumPdfUrl": "https://health.zacdn.cn/static/insurance/apply/h5/feepremium/premiumRate-CJ18_G202106070002.pdf",
                    "clausePdfUrl": null,
                    "amountDesc": null,
                    "paymentType": null,
                    "planFactorNames": null,
                    "occupationCategory": null,
                    "iconUrl": null,
                    "headPicUrl": null,
                    "simpleDesc": null,
                    "clauseLiabilityCode": null,
                    "extAmountDesc": null,
                    "extDesc": null,
                    "checkRules": null,
                    "displayType": 1,
                    "displayCheck": 1,
                    "discounts": null
                    }
                ]
                },
                {
                "goodCode": "G202106070002",
                "planCode": "CJ18",
                "planName": "试管婴儿妊娠保险",
                "itemType": 1,
                "itemList": [
                    {
                    "id": 152881,
                    "goodsCode": "G202106070002",
                    "planCode": "CJ18",
                    "itemType": "1",
                    "itemCode": "483_ZXG224",
                    "itemName": "体外受精-胚胎移植及其衍生技术手术妊娠失败保险金",
                    "itemDesc": null,
                    "orderNo": 1,
                    "desc": "保险期间内，被保险人在本合同指定的医疗机构通过体外受精-胚胎移植及其衍生技术手术，进行可移植胚胎或可移植囊胚的移植，如在同一家医院连续临床妊娠失败的次数达到3次时，保险人按保险单载明的保险金额给付体外受精-胚胎移植及其衍生技术手术妊娠失败保险金。\r\n被保险人于保险期间内接受任意一次胚胎或囊胚移植后，经保险合同约定的医疗机构或保险人认可的医疗机构诊断临床妊娠成功，保险人不再承担保险责任，本合同终止。",
                    "code": null,
                    "premiumPdfUrl": null,
                    "clausePdfUrl": null,
                    "amountDesc": "8万元",
                    "paymentType": null,
                    "planFactorNames": null,
                    "occupationCategory": null,
                    "iconUrl": null,
                    "headPicUrl": null,
                    "simpleDesc": null,
                    "clauseLiabilityCode": null,
                    "extAmountDesc": null,
                    "extDesc": null,
                    "checkRules": null,
                    "displayType": 1,
                    "displayCheck": 1,
                    "discounts": null
                    }
                ]
                }
            ],
            "planItemList": [],
            "clauseList": null,
            "planCodeRequired": null
            },
            {
            "planCode": "T4",
            "planName": "基础版",
            "id": 100127,
            "goodId": 100098,
            "goodCode": "G202106070002",
            "insuredPeriodValue": 1,
            "insuredPeriodType": "Y",
            "paymentType": "Y",
            "planType": 1,
            "planDesc": null,
            "waitPeriod": "0天",
            "insurePeriod": "1年",
            "insuredAge": "20至40周岁",
            "insuredMinAge": "20$Y",
            "insuredMaxAge": "40$Y",
            "hospitalScope": null,
            "premiumPdfUrl": null,
            "introduction": null,
            "insureArea": "全国",
            "effectiveDay": null,
            "mappingFactor": null,
            "maxInsure": null,
            "maxInsureAmount": null,
            "autoDowngradePlan": null,
            "downgradePriority": null,
            "autoDowngradePlanMessage": null,
            "autoDowngradeRefuelingBagMapping": null,
            "planItemBOList": [
                {
                "goodCode": "G202106070002",
                "planCode": "CJ18",
                "planName": "试管婴儿妊娠保险",
                "itemType": 6,
                "itemList": [
                    {
                    "id": 152882,
                    "goodsCode": "G202106070002",
                    "planCode": "CJ18",
                    "itemType": "6",
                    "itemCode": null,
                    "itemName": "销售费率表",
                    "itemDesc": null,
                    "orderNo": 1,
                    "desc": null,
                    "code": null,
                    "premiumPdfUrl": "https://health.zacdn.cn/static/insurance/apply/h5/feepremium/premiumRate-CJ18_G202106070002.pdf",
                    "clausePdfUrl": null,
                    "amountDesc": null,
                    "paymentType": null,
                    "planFactorNames": null,
                    "occupationCategory": null,
                    "iconUrl": null,
                    "headPicUrl": null,
                    "simpleDesc": null,
                    "clauseLiabilityCode": null,
                    "extAmountDesc": null,
                    "extDesc": null,
                    "checkRules": null,
                    "displayType": 1,
                    "displayCheck": 1,
                    "discounts": null
                    }
                ]
                },
                {
                "goodCode": "G202106070002",
                "planCode": "CJ18",
                "planName": "试管婴儿妊娠保险",
                "itemType": 1,
                "itemList": [
                    {
                    "id": 152881,
                    "goodsCode": "G202106070002",
                    "planCode": "CJ18",
                    "itemType": "1",
                    "itemCode": "483_ZXG224",
                    "itemName": "体外受精-胚胎移植及其衍生技术手术妊娠失败保险金",
                    "itemDesc": null,
                    "orderNo": 1,
                    "desc": "保险期间内，被保险人在本合同指定的医疗机构通过体外受精-胚胎移植及其衍生技术手术，进行可移植胚胎或可移植囊胚的移植，如在同一家医院连续临床妊娠失败的次数达到3次时，保险人按保险单载明的保险金额给付体外受精-胚胎移植及其衍生技术手术妊娠失败保险金。\r\n被保险人于保险期间内接受任意一次胚胎或囊胚移植后，经保险合同约定的医疗机构或保险人认可的医疗机构诊断临床妊娠成功，保险人不再承担保险责任，本合同终止。",
                    "code": null,
                    "premiumPdfUrl": null,
                    "clausePdfUrl": null,
                    "amountDesc": "8万元",
                    "paymentType": null,
                    "planFactorNames": null,
                    "occupationCategory": null,
                    "iconUrl": null,
                    "headPicUrl": null,
                    "simpleDesc": null,
                    "clauseLiabilityCode": null,
                    "extAmountDesc": null,
                    "extDesc": null,
                    "checkRules": null,
                    "displayType": 1,
                    "displayCheck": 1,
                    "discounts": null
                    }
                ]
                }
            ],
            "planItemList": [],
            "clauseList": null,
            "planCodeRequired": null
            }
        ],
        "chargesGoods": null,
        "productLabel": "1",
        "goodsVersionList": [
            {
            "id": 100131,
            "templateCode": "TC2021060702",
            "goodsCode": "G202106070002",
            "templateVersion": "V1",
            "title": "标准无公众号无回退版",
            "remark": null,
            "isDeleted": "N"
            }
        ],
        "productPackageType": "1",
        "isCharged": "Y",
        "isZhongtai": null,
        "isDeleted": "N",
        "extraInfo": null,
        "goodsPremiumDesc": "4000元起",
        "goodsDesc": null,
        "insureArea": "全国",
        "insuredAge": "20-40周岁",
        "ageLimit": null,
        "period": null,
        "publicize": null,
        "effectiveDay": null,
        "insureSuccessUrl": null,
        "insureFailUrl": null,
        "goodsPic": null,
        "chargesGoodsCode": null,
        "needWhileList": null,
        "whileListKey": null,
        "holderCheck": null,
        "insurantCheck": null,
        "packageDefId": null,
        "needLogin": null
        },
        "channelKind": {
        "channelCode": "TP",
        "channelFullName": "非自营"
        }
    }
);
