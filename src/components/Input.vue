<template>
  <div class="wrapper">
      <input :value="value"
       :placeholder="placeholder"
       :disabled="disabled"
        :type="type" >
  </div>
</template>

<script>
export default {
    name: "tuYoungInput",

    props: {
        value: {
            type: String
        },

        placeholder: {
            type: String
        },

        disabled: {
            type: Boolean,
            default: false
        },

        type: {
            type: String,
            default: 'text',
            validator: (val) => ['text', 'password', 'number', 'textarea'].indexOf(val) !== -1
        }


    }

}
</script>

<style lang="less" scoped>

@height: 32px;
@border-color: #BBB;
@border-color-hover: #666;
@border-color-focus: rgba(0, 0, 0, 0.5);
@font-size: 12px;
.wrapper {
    font-size: @font-size;
    >input {
        height: 32px;
        border: 1px solid @border-color;
        border-radius: 4px;
        padding: 0 8px;
        font-size: inherit;
        &:hover {
            border-color: @border-color-hover;
        }
        &:focus {
            box-shadow: 0 1px 3px @border-color-focus;
            outline: none;
        }
        &[disabled] {
            border-color: @border-color;
            cursor: not-allowed;
        }
    }
}

</style>