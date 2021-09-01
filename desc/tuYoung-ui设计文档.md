
## Too young too simple, sometimes naive.

## 关于测试

    BDD（behavior-driven development）行为驱动开发 --对应有mocha库
    TDD（test-driven development）测试驱动开发
Assert 断言：断言就是在判断时是真的就没有什么问题反应，如果是假的就会抛一个错误。如: console.assert(1===1) 无反应 / console.assert(1===2) 报错 --对应有chai库

测试库: chai
cNpm install -D chai

下载自动测试库:
Npm install -D karma karma-chrome-launcher karma-mocha karma-sinon-chai mocha sinon
Sinon-chai karma-chai-spies karma-chai


以上测试库不用下载更换为vue-cli脚手架:

使用vue-cli脚手架的来测试，里面选择mocha（BDD）和chai （断言库）来单元测试（test unit）
mocha负责测试语法编写，chai负责断言。（expect）。

使用vue-cli的官网测试工具，自动化测试。后续使用 travis ci 做持续集成。

Travis CI 是在软件开发领域中的一个在线的，分布式的持续集成服务，用来构建及测试在GitHub托管的代码。

## 一、什么是持续集成？
Travis CI 提供的是持续集成服务（Continuous Integration，简称 CI）。它绑定 Github 上面的项目，只要有新的代码，就会自动抓取。然后，提供一个运行环境，执行测试，完成构建，还能部署到服务器。

持续集成指的是只要代码有变更，就自动运行构建和测试，反馈运行结果。确保符合预期以后，再将新代码"集成"到主干。

持续集成的好处在于，每次代码的小幅变更，就能看到运行结果，从而不断累积小的变更，而不是在开发周期结束时，一下子合并一大块代码。

## 关于github通过ssh克隆包：
1.为了不每次输入密码git push上去代码，我们使用ssh的方式克隆我们的仓库。
2.第一步配置好自己的git账户信息: git config --global user.name=”大冰”,
git config --global user.email=”1021137079@qq.com”。
查看配置信息指令: git config --global -l

3.创建秘钥key
ssh-keygen -t rsa -C “[你的邮箱](mailto:你的邮箱)”
如何不设置push密码的话，一直按enter键就ok

4.把生成的秘钥key添加到github的sshkey上。（步骤可以百度或者Google）
5.测试秘钥key是否设置成功
ssh -T git@github.com
最后输出了: hi 你的github用户名,you ‘ve successfully.... 就是成功了。
接线git push 就可以不用密码直接上传源码

## Npm发布
1.先检查npm config list 查看npm的源是不是官网的，如果是淘宝的就根据目录修改.npmrc配置文件。

2.执行Npm adduser 进行添加我们的npm账户，我的账户是jobin0102
3.执行npm publish 进行发布我们的包

### 快速开发包：
1.使用npm link 本地项目，可以不用发布包就可以得到最新的包。（注意：npm link的项目的当前目录不能有中文名。）
2.在用户的，或者其他demo引入npm link 加我们的包名，就可以连接到我们最新的包。如: npm link tuyoung
3.只要修改开发项目的代码，引用我们包的用户可以立即得到最近的包。






##项目是基于Vue2.X开发。


关于Vue-cli脚手架的命令
1.执行 vue ui 可以调起vue的框架的ui界面
2.执行vue create XX 可以创建一个XX项目
3.


## VScode工具插件:
1.git的话可以结合gitLens插件，就可以在view查看提交的信息，把数据可视化。而且通过ctrl+enter 可以输入commit信息，之后就可以push上去了。
2.Vetur插件，是vue官方提供的插件，可以快速创建vue单文件组件模板。

## 项目流程:
1.单文件组件（vue）
2.初期parcel，中期webpack，后期Vue-cli（打包）
3.单元测试 （{...单元测试块编写...}, {......}）
4.自动化测试（karma， mocha（BDD行为驱动测试），chai（expect断言编写），）
5.持续集成（travis Ci / vue官方用的是Circle Ci）
6.Package.json 发布包，npm publish
7.npm link 开始开发包




## 组件的设计:
### 1.按钮 Button
1.事件的实现，通过@click=”$emit(‘click’)”实现
2.关于属性的实现，通过v-bind方式获取


### 2. 文本框 Input
1. 事件的实现，通过@change=”$emit(‘change’, $event)” 实现
而$event属性是获取元素的当前事件对象。

2. 双向绑定的实现:
Vue早期就已经实现双向绑定，通过一个语法糖(v-bind:value=”变量” 和 @input = “变量 = $event.target.value”)
将value给绑定转化为一个动态的变量，接着监听input事件，让input的处理变成变量去等于事件的值。
相当于一旦变量的值改变了，value的值也就改变了，一旦在input输入值时会触发input事件将变量的值再次改变。

- Value:  Input中的值
- Message: data对象中的变量



### 3.栅格/网格系统 Grid
1.通过display:flex 布局设计，flex布局默认flex-wrap: nowrap 不换行的方式。而宽度默认flex-shark: 1开启，从而不会溢出当前盒子，会自动平均缩小。
2.设计响应式布局: 我们根据屏幕在不同设备的宽度来设计，运用了mobile first 的思维来设计。

3.而响应式设计，要开启flex-wrap: wrap 换行模式。
### 4.默认布局 Layout

1.一个layout布局有: header, content, footer, sider四个部分构成。
2.同样通过flex布局来实现
3.Sider是特别的一部分，当layout下有sider组件布局就要改变为以行的方式排序

### 5.提示 Toast

1.运用插件开发，在body注册一个vue元素
2.



### 6.标签页 Tabs
1.通过provide注册事件总线(eventBus) 进行双向绑定的通知
2.通过:selected.sync的Vue语法糖通知数据更新
3.关于active的属性放在data和props的问题，应选择放在data对象里，因为active不需要开发者自己实现。

### 7.弹出消息 Popover

### 8.折叠面板 Collapse
1.折叠面板的实现核心是利用eventBus（事件总线）和单向数据流


















## 关于vue test测试
1.vue test官方文档有说明,无法测试css样式,只能测试内联样式



2.官方参考连接:
https://vue-test-utils.vuejs.org/zh/guides/#%E5%B8%B8%E7%94%A8%E6%8A%80%E5%B7%A7



## 官网部署
1.安装Vuepress： npm i -D vuepress， 考虑到合作问题，安装到本地。


##　项目部署到Nginx
https://blog.csdn.net/qq_41308489/article/details/109806257?spm=1001.2014.3001.5501



## 参考文献:
1.Travis文献地址:
https://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html
