---
title: 文本框 Input
---
# 文本框 Input

很多年前，人们还在用打孔纸卡输入。


## 基础用法

<ClientOnly>
<Input-demo/>
</ClientOnly>

```vue
<t-input placeholder="支持 placeholder"></t-input>
<t-input value="支持 value"></t-input>
```

## 禁用状态

<ClientOnly>
<Input-demo-disabled/>
</ClientOnly>

```vue
 <t-input placeholder="禁用状态" disabled></t-input>
```

## 数据双向绑定

<ClientOnly>
<Input-demo-binding/>
</ClientOnly>

```vue
<t-input placeholder="输入点东西试试" v-model="msg"></t-input>
<p>{{ msg }}</p>
```

## 类型
文本框的 `type` 分别为 `text`、`number`、`password`、`textarea`。

<ClientOnly>
<Input-demo-type/>
</ClientOnly>

```vue
<t-input placeholder="支持 text" type="text"></t-input>
<t-input placeholder="支持 number" type="number"></t-input>
<t-input placeholder="支持 password" type="password"></t-input>
<t-input placeholder="支持 textarea" type="textarea"></t-input>
 ```   

## 状态提示

<ClientOnly>
<Input-demo-status/>
</ClientOnly>

```vue
<t-input placeholder="Error Input" error="tips of error." ></t-input> 
<t-input placeholder="Success Input" success="tips of success."></t-input>
```

## Props

### Input Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | `text` \| `password` \| `number` \| `textarea`| `text`  | 输入框类型 |
| value | `string` | `undefiend` | 文本输入的值 |
| placeholder| `string ` | `undefiend`| 文本输入的占位符 | 
| disabled | `boolean` | `false` | 是否禁用|
| error | `string` | `undefiend` | 输入错误提示 |
| success | `string` | `undefiend` | 输入正确提示 |