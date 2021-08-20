# 提示 Toast

就像面包机弹出面包来一样。

## 演示

```demo
basic
```

## Props

### Toast Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | `string`| `''`  | 提示的内容 |
| autoClose | `boolean` | `true` | 自动关闭提示 |
| showClose| `boolean ` | `false`| 显示关闭按钮 | 
| closeText | `string` | `关闭` | 关闭按钮文本|
| duration | `number` | `1500` | 自动关闭时间 `单位:ms` |
| callback | `funtion` | `(vm)=>{}` | 关闭后回调函数，默认第一个参数为`Toast`本身 |
    