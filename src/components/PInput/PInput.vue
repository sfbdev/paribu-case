<template>
  <input
    :class="classes"
    :value="modelValue"
    @input="updateValue"
    :placeholder="placeholder"
  />
</template>

<script>
import { computed } from "vue";

export default {
  name: "p-input",
  props: {
    // eslint-disable-next-line vue/require-prop-type-constructor
    modelValue: "",
    placeholder: {
      type: String,
      default: "Adınız",
    },
    outline: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, context) {
    const updateValue = (event) => {
      context.emit("update:modelValue", event.target.value);
    };

    return {
      updateValue,

      classes: computed(() => ({
        "p-input": true,
        "p-input--outline": props.outline,
      })),
    };
  },
};
</script>

<style lang="scss" scoped></style>
