import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import PButton from "@/components/PButton/Pbutton.vue";

describe("PButton.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(PButton, {
      props: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
