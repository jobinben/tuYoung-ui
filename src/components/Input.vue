<template>
  <div class="wrapper" :class="{ error, success }">
    <input
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :type="type"
      @change="$emit('change', $event)"
    />
    <template v-if="error && !success">
      <t-icon name="error" class="icon-err"></t-icon>
      <span class="errMsg">{{ error }}</span>
    </template>

    <template v-if="success">
      <t-icon name="success" class="icon-success"></t-icon>
      <span class="successMsg">{{ success }}</span>
    </template>
  </div>
</template>

<script>
import TIcon from "./Icon.vue";
export default {
  components: {
    TIcon,
  },

  name: "tuYoungInput",

  props: {
    value: {
      type: String,
    },

    placeholder: {
      type: String,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    error: {
      type: String,
    },

    success: {
      type: String,
    },

    type: {
      type: String,
      default: "text",
      validator: (val) =>
        ["text", "password", "number", "textarea"].indexOf(val) !== -1,
    },
  },
};
</script>

<style lang="less" scoped>
@height: 32px;
@border-color: #bbb;
@border-color-hover: #666;
@border-color-focus: rgba(0, 0, 0, 0.5);
@error-bg: #d03050;
@success-bg: #18a058;
@font-size: 12px;
.wrapper {
  font-size: @font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
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

  &.error {
    > input {
      border-color: @error-bg;
    }

    .icon-err {
      fill: @error-bg;
    }

    .errMsg {
      color: @error-bg;
    }
  }

  &.success {
    > input {
      border-color: @success-bg;
    }

    .icon-success {
      fill: @success-bg;
    }

    .successMsg {
      color: @success-bg;
    }
  }
}
</style>