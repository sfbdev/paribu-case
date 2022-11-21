import PInput from "./PInput.vue";

export default {
  title: "Components/Input",
  component: PInput,
  argTypes: {
    onClick: {},
  },
};

const Template = (args) => ({
  components: { PInput },
  setup() {
    return { args };
  },
  template: '<p-input v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  placeholder: "E-posta adresiniz",
};

export const Outline = Template.bind({});
Outline.args = {
  outline: true,
  palceholder: "E-posta adresiniz",
};
