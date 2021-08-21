# 提示 Toast

就像面包机弹出面包来一样。

## 演示

```demo
basic
```

## Props

### Toast Props

| 名称 | 类型 | 可选值 | 默认值 | 说明 |
| --- | --- | --- |  --- | --- |
| title | `string`| `*`| `''`  | 提示的内容 |
| autoClose | `boolean` |`*`| `true` | 自动关闭提示 |
| showClose| `boolean ` |`true`\| `false`| `false`| 显示关闭按钮 | 
| closeText | `string` |`*` |`关闭` | 关闭按钮文本|
| duration | `number` | `*`|`1500` | 自动关闭时间 `单位:ms` |
| position | `string` |`top` \| `middle` \| `bottom` |`middle` | 提示的位置 |
| callback | `funtion` | `默认第一个参数为toast本身` |`(vm)=>{}` | 关闭后回调函数 |

    