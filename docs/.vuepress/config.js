module.exports = {
    base: '/',
    title: 'tuYoung UI',
    description: '一个基于Vue.2x的UI框架',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/guide/' },
            { text: '组件', link: '/components/' },
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
                            title: '快速上手',
                            collapsable: false,
                            children: [
                                '/guide/get-started/',
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
                    ],
    
                }
            ]
            

        },


    }
}