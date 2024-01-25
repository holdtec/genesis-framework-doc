//book.js
module.exports={

    root:".", //根目录
    "language": "zh-hans",
    "title" : "元初框架",
    "author" : "John Wu",
    "description" : "官方文档",
    "theme-default": {
        "showLevel": true
    },
    "label": {
        "en": "Edit This Page",
        "zh-cn": "编辑本页"
    },

    // 在左侧导航栏添加链接信息
    "links" : {
        "sidebar" : {
            // "元初官网" : "#",

        }
    },
    
        // Plugins list, can contain "-name" for removing default plugins
        "plugins": [
            "-highlight",//替换官方插件
            "prism", //代码着色
            "prism-themes",

            "github", //链接到github仓库
            "sharing-plus",  //分享增强
            "-lunr",
            "-search",
            "-sharing",
            "search-pro", //增强中文搜索
            "chapter-fold",//导航折叠插件
            "splitter", //菜单动态伸缩.
            "back-to-top-button",
            // "theme-fexa",
            "code", //代码行号、复制
            "tbfed-pagefooter",
            "editlink",
            "todo",
            "codetabs",
            "donate",
            "theme-comscore", //多彩主题插件
            "favicon", //网站的小图标
            "versions-select" //多版本选择
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
            },
            "sharing": {
                // "douban": true,
                // "facebook": true,
                // "google": true,
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
                "alipayText": "",
                "wechatText": ""
            },
            //多版本选择
            // "versions":{
            //     "options": [
            //         {
            //           "value": "",
            //           "text": "Theme API"
            //         },
            //         {
            //           "value": "",
            //           "text": "Theme comscore",
            //           "selected": true
            //         }
            //       ]
            // },
            "favicon": {
                "shortcut": "favicon.ico",
                "bookmark": "favicon.ico",
                "appleTouch": "assets/delta-logo.png",
                "appleTouchMore": {
                    "120x120": "assets/delta-logo.png",
                    "180x180": "assets/delta-logo.png"
                }
            }

        },
}
