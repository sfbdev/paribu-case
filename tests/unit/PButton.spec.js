import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import PButton from "@/components/PButton/PButton.vue";

describe("PButton.vue", () => {
  it("renders props.label when passed", () => {
    const label = "TestLabel";
    const wrapper = shallowMount(PButton, {
      props: { label },
    });
    expect(wrapper.text()).to.include(label);
  });
});
