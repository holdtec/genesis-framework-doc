# tabbar 组件

Tabbar组件，也可以用来作为小程序的[自定义Tabbar](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)使用

## 代码引入

在 page.json 中引入组件

```json
{
  "usingComponents": {
    "tabbar": "/components/tabbar/index"
  }
}
```

## 属性列表

| 属性       | 类型    | 默认值           | 必填 | 说明                    |
| ---------- | ------- | ---------------- | ---- | ----------------------- |
| show       | boolean | true             | 否   | 是否显示                |
| border     | boolean | false            | 否   | 上边框                  |
| color      | string  | '#c0c0c0'        | 否   | 字体颜色                |
| hoverColor | string  | var(--gui-BRAND) | 否   | 激活颜色                |
| items      | array   |                  | 是   | 项目列表,[参考](#items) |
|            |         |                  |      |                         |
|            |         |                  |      |                         |

### items

| 属性     | 类型    | 默认值 | 必填 | 说明             |
| -------- | ------- | ------ | ---- | ---------------- |
| icon     | string  |        | 是   | iconfont图标名称 |
| dotShow  | boolean | false  | 否   | 红点提示         |
| selected | boolean | false  | 是   | 是否选择         |
| title    | string  |        | 是   | 标题             |
|          |         |        |      |                  |

## Slot

暂无
