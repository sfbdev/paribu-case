<template>
  <input class="p-input" :value="modelValue" @input="updateValue" />
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-prop-type-constructor
    modelValue: "",
  },

  setup(props, context) {
    const updateValue = (event) => {
      context.emit("update:modelValue", event.target.value);
    };

    return { updateValue };
  },
};
</script>

<style lang="scss" scoped></style>
