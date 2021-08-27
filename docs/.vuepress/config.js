module.exports = {
    title: 'tuYoung-UI',
    description: '一个基于Vue.2x的UI框架',
    themeConfig: {
        // nav: [
        //     { text: '主页', link: '/' },
        //     { text: '文档', link: '/' },
        //     { text: '组件', link: '/' },
        //     { text: '交流', link: '/' },

        // ],
        sidebar: [
            '/introduce/',
            '/install/',
            '/get-started/',
            {
                title: '组件',
                children: [
                    '/components/button'
                ]
            }
        ]
    }
}