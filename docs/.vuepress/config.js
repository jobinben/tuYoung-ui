module.exports = {
    head: [
        ["link", { rel: 'icon', href: 'logo.png' }]
    ],
    base: '/tuYoung-ui/',
    title: 'tuYoung UI',
    description: '一个基于Vue.2x的UI框架',
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/guide/introduce/' },
            { text: '组件', link: '/components/button/' },
            { text: '交流', link: 'https://github.com/jobinben/tuYoung-ui' },

        ],
        sidebar: {
            '/guide/': [
                {
                    title: '',
                    collapsable: false,
                    children: [
                        {
                            title: '介绍',
                            collapsable: false,
                            children: [
                                '/guide/introduce/'
                            ]
                        },
                        {
                            title: '指南',
                            collapsable: false,
                            children: [
                                '/guide/get-started/',
                                '/guide/get01/',
                            ]
                        },

                    ]
                }
            ],
            '/components/': [
                {
                    title: '组件',
                    collapsable: false,
                    children: [
                        '/components/button/',
                        '/components/input/',
                        '/components/tabs/',
                        '/components/toast/',
                        '/components/collapse/',
                        '/components/popover/',
                        '/components/grid/',
                        '/components/layout/',
                        '/components/icon/',
                    ],

                }
            ]
        },


    }
}