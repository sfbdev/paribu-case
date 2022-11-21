import PButton from "./PButton.vue";

export default {
  title: "Components/Button",
  component: PButton,
  argTypes: {
    onClick: {},
  },
};

const Template = (args) => ({
  components: { PButton },
  setup() {
    return { args };
  },
  template: '<p-button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  label: "Button",
};
