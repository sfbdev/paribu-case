import PCard from "./PCard.vue";

export default {
  title: "Example/Button",
  component: PCard,
  argTypes: {
    onClick: {},
  },
};

const Template = (args) => ({
  components: { PCard },
  setup() {
    return { args };
  },
  template: '<p-card v-bind="args" />',
});

export const Primary = Template.bind({});
