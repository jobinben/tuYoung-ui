# 栅格/网格布局 Grid

可以解决大部分布局问题

## 演示

```demo
basic
```

## Props

### Row Props

| 名称 | 类型 | 可选值 | 默认值 | 说明 |
| --- | --- | ---| --- | --- |
| gutter |  `number`  | `*`| `0`  | 	栅格间隔 |
| align |  `string`  |`left` \| `right` \| `center` | `undefined`  | 栅格`t-col`的垂直排列方式 |
### Col Props

| 名称 | 类型 | 可选值 |默认值 | 说明 |
| --- | --- | --- | --- | --- |
| span |  `number`  |`1~24` |`undefined`  | 栅格占据的列数 |
| offset | `number`| `*` |`0` | 栅格左侧的间隔格数 |

    