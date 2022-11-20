<template>
  <button class="p-button" type="button" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "p-button",

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: true,
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ["click"],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        "storybook-button": true,
        "storybook-button--primary": !props.seceondary,
        "storybook-button--secondary": props.secondary,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit("click");
      },
    };
  },
};
</script>
