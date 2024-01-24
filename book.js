//book.js
module.exports={

    "title" : "元初框架",
    "author" : "John Wu",
    "description" : "官方文档",

    "label": {
        "en": "Edit This Page",
        "zh-cn": "编辑本页"
    },

    // 在左侧导航栏添加链接信息
    "links" : {
        "sidebar" : {
            // "Home" : "#",

        }
    },
        // Plugins list, can contain "-name" for removing default plugins
        "plugins": [
            "-highlight",//替换官方插件
            "prism",
            "prism-themes",

            "github",
            "sharing-plus",
            "-lunr",
            "-search",
            "-sharing",
            "search-pro",
            "chapter-fold",
            "splitter",
            "back-to-top-button",
            "theme-fexa",
            "code",
            "tbfed-pagefooter",
            "editlink",
            "todo",
            "codetabs",
            "donate"
        ],
        "variables": {
            "themeFexa":{
                "nav":[
                    {
                        "url":"#",
                        "target":"_self",
                        "name": "官方文档"
                    }
                ]
            },
        },

        // Global configuration for plugins
        "pluginsConfig": {
            "github": {
                "url": "https://github.com/holdtec/notebook"
            },
            "prism": {
                "css": [
                    "prism-themes/themes/prism-gruvbox-light.css"
                ]
            },
            "theme-fexa":{
                "search-placeholder":"输入关键字搜索", //搜索框提示信息
                "logo":"assets/delta-logo.png", //logo地址
                "favicon": "./favicon.ico" //ico地址
            },
            "tbfed-pagefooter": {
                "copyright":"Genesis Framework",
                "modify_label": "该文件最后修改时间：",
                "modify_format": "YYYY-MM-DD HH:mm:ss",
                "modify_copy": "Powered by Genesis"
            },
            "sharing": {
                // "douban": true,
                // "facebook": true,
                "google": true,
                // "twitter": true,
                // "whatsapp": true,
                // "all": [
                //     "hatenaBookmark",
                //     "instapaper",
                //     "line",
                //     "linkedin",
                //     "messenger",
                //     "pocket",
                //     "qq",
                //     "qzone",
                //     "stumbleupon",
                //     "viber",
                //     "vk",
                //     "weibo"
                // ]
            },
            "editlink": {
                "base": "https://github.com/alibroDeveloper/PersonalWiki.git",
                "label": "Edit This Page",
                "multilingual": false
              },
            "donate": {
                "wechat": "/assets/wechat_qr.png",
                "alipay": "/assets/alipay_qr.png",
                "title": "给作者买杯奶茶",
                "button": "支持",
                "alipayText": "支付宝",
                "wechatText": "微信"
            }

        },
}
