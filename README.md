# 元初框架文档

**元初小程序框架**是一个全新的小程序原生,面向组件的**SPA单页面开发框架**,具有以下优点:

- 简单易用,迅速上手
- 基于框架的单页面程序
- 面向组件开发,[官方组件](./组件/index.md),完美契合
- 多主题、国际化,适配简单
- 动态路由,集客户端与管理端一体化,**小程序中的wordpress**
- 工具齐全(路由、日志、模拟数据,本地模拟与服务器数据一键切换)
- 开箱即用(不依赖第三方插件及程序,上手简单)
- 摆脱官方各种限制(tab限制,路由限制等等)

## 文档部署

```bash
#克隆文档
git clone https://github.com/holdtec/genesis-framework-doc.git
#安装依赖 注意使用node 6版本 高版本不支持
cd genesis-framework-doc
nvm use 6
npm install
gitbook install
#本地运行
npm run serve
#打包编译
npm run build

```
