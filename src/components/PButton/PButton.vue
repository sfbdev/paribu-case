<template>
  <button :class="classes" type="button" @click="onClick">
    {{ label }}
  </button>
</template>

<script>
import { reactive, computed } from "vue";
import "../../assets/scss/main.scss";

export default {
  name: "p-button",

  props: {
    label: {
      type: String,
      required: true,
    },
    secondary: {
      type: Boolean,
      default: true,
    },
  },

  emits: ["click"],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        "p-button": true,
        "p-button--primary": !props.seceondary,
        "p-button--secondary": props.secondary,
      })),

      onClick() {
        emit("click");
      },
    };
  },
};
</script>
