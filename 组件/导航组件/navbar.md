# navbar 组件

`navbar` 是小程序的顶部导航组件，当页面配置`navigationStyle`设置为`custom`的时候可以使用此组件替代原生导航栏。

## 代码引入

在 page.json 中引入组件

```json
{
  "usingComponents": {
    "navbar": "/components/navbar/index"
  }
}
```

## 组件使用

在页面wxml中使用

```xml
<navbar
        hidden="{{!((currentPage&&currentPage.navbar)||scrollTop>=sysInfo.navigationHeight)}}"
        bind:back="goBack"
        back="{{navbar.return}}"
        title="{{currentPage?currentPage.title:''}}"
        loading="{{false}}"
    />
```

> 注意: 该组件为fix定位,默认没有页面占位

## 属性列表

| 属性             | 类型         | 默认值     | 必填 | 说明                                   |
| ---------------- | ------------ | ---------- | ---- | -------------------------------------- |
| title            | String       | 元初科技   | 否   | 页面标题                               |
| back             | boolean      | false      | 否   | 返回箭头                               |
| loading          | boolean      | false      | 否   | 是否显示加载图标                       |
| loadingText      | String       | loading... | 否   | 加载提示信息                           |
| hidden           | boolean      | false      | 否   | 是否隐藏                               |
| statusBarBgColor | String       |            | 否   | 状态栏背景颜色                         |
| bind:back        | eventhandler |            | 否   | 在back为true时，点击back按钮触发此事件 |

## Slot

暂无