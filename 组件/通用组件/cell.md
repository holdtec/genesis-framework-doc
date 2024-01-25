# cell 组件

`cell` 是列表或者是表单的一项，常用于设置页的展示，或者用在表单中，作为表单的每一个要填写的项。

## 代码引入

在 page.json 中引入组件

```json
{
  "usingComponents": {
    "gen-cell": "/components/cell/index"
  }
}
```

## 组件使用

在页面wxml中使用

```xml
<gen-cell
        title="测试"
        show-icon="{{false}}"
        value="textValue"
        desc= "desc default"
        border
        arrow="{{false}}"></gen-cell>

        <gen-cell
        title="测试"
        value="textValue"
        border
        desc= "desc default"
        arrow="{{false}}"></gen-cell>

        <gen-cell
        title="测试"
        border
        show-icon="{{false}}"
        value="textValue"
        desc= "desc default"
        ></gen-cell>

        <gen-cell
        title="测试"
        value="textValue"
        border
        desc= "desc default"
        ></gen-cell>

        <gen-cell
        title="测试"
        value="textValue"
        desc= "desc default"
        ></gen-cell>
```

### 效果如图

<img src="/assets/images/cell-examples.png" alt="image-20240124231815043" style="zoom:67%;" />

## 属性列表

| 属性      | 类型    | 默认值 | 必填 | 说明                                                         |
| --------- | ------- | ------ | ---- | ------------------------------------------------------------ |
| title     | String  | cell   | 否   | 标题                                                         |
| arrow     | Boolean | true   | 否   | 箭头                                                         |
| imageSrc  | String  |        | 否   | 图标图片src,与iconName互斥,                                  |
| iconName  | String  |        | 否   | iconfont图标名称,默认参考[icon组件](./icon.md)               |
| iconBg    | Boolean |        | 否   | 图标背景颜色,iconName有值时生效                              |
| iconColor | String  |        | 否   | 图标颜色,iconName有值时生效                                  |
| showIcon  | Boolean | true   | 否   | 是否显示图标                                                 |
| border    | Boolean | false  | 否   | 底部分割线                                                   |
| value     | String  |        | 否   | 值                                                           |
| valueIcon | String  |        | 否   | 值为图标                                                     |
| desc      | String  |        | 否   | 描述信息                                                     |
| thin      | Boolean | false  | 否   | 小padding                                                    |
| disabled  | Boolean | false  | 否   | 是否禁用                                                     |
| mode      | String  |        | 否   | mode='picker'时,参考[官方picker组件](https://developers.weixin.qq.com/miniprogram/dev/component/picker.html) |
| range     | Array   |        | 否   | mode='picker'时生效                                          |
| rangeKey  | String  |        | 否   | mode='picker'时生效                                          |
|           |         |        |      |                                                              |

## Slot

暂无