const headConfig = require("../config/headConfig.js");
const navConfig = require("../config/navConfig.js");
const sidebarConfig = require("../config/sideBarConfig/index.js");

module.exports = {
    base: "/docs-zzy/",
    title: "南城花开zy",
    description: "乘风破浪会有时！",
    author: "南城花开zy",
    head: headConfig,
    locales: {
        "/": {
            lang: "zh-CN", // 设置语言
        },
    },
    theme: "reco", //主题
    themeConfig: {
        type: "blog",
        huawei: true,
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // 最后更新时间
        lastUpdated: "Last Updated",
        // 作者
        author: "南城花开zy",
        // 项目开始时间
        startYear: "2020",
        /**
         * 密钥 (if your blog is private)
         */
        // sidebar: "auto", //在所有页面中启用自动生成侧栏
        logo: "/images/logo.jpg",
        authorAvatar: "/images/logo.jpg",
        nav: navConfig,
        sidebar: sidebarConfig,
        // 备案
        recordLink: "Inc.All Rights Reserved",
        // cyberSecurityRecord: "",
        cyberSecurityLink: "Inc.All Rights Reserved",
        // 备案号
        record: "Inc.All Rights Reserved",
        // 项目开始时间，只填写年份
        // 博客配置
        blogConfig: {
            category: {
                location: 5, // 在导航栏菜单中所占的位置，默认2
                text: "分类", // 默认文案 “分类”
            },
            tag: {
                location: 6, // 在导航栏菜单中所占的位置，默认3
                text: "标签", // 默认文案 “标签”
            },
        },
        friendLink: [
            {
                title: "vuepress-theme-reco",
                desc: "A simple and beautiful vuepress Blog & Doc theme.",
                logo:
                    "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: "https://vuepress-theme-reco.recoluan.com",
            },
            {
                title: "午后南杂",
                desc: "Enjoy when you can, and endure when you must.",
                email: "recoluan@qq.com",
                link: "https://www.recoluan.com",
            },
        ],
        repo: "https://github.com/zzy11027",
        repoLabel: "Github",
        docsRepo: "vuejs/vuepress",
        docsDir: "docs",
        docsBranch: "master",
        editLinks: true,
        editLinkText: "帮助我们改善此页面！",
    },
    // plugins:plugins,
    markdown: {
        lineNumbers: false,
        anchor: {
            permalink: true,
            permalinkBefore: true,
            permalinkSymbol: "🌙",
        },
    },
    plugins: [
        [
            require("./plugins/meting/index"),
            {
                meting: {
                    server: "netease",
                    type: "playlist",
                    mid: "60198",
                },
                aplayer: {
                    lrcType: 0,
                },
            },
        ],
    ],
};
