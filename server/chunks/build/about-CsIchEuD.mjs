import { unref, useSSRContext, ref } from 'vue';
import { d as defineStore, u as useHead } from './server.mjs';
import { ssrInterpolate } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

function total() {
  const counter = ref(3);
  const increment = () => {
    counter.value++;
  };
  const decrement = () => {
    counter.value--;
  };
  return { counter, increment, decrement };
}
const totalCounter = defineStore("count", {
  state: () => {
    return {
      nums: 10
    };
  },
  getters: {},
  mutations: {},
  actions: {
    increment(data) {
      this.nums += data;
    },
    decrement(data) {
      this.nums -= data;
    }
  }
});
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const numbers = totalCounter();
    const { counter, decrement, increment } = total();
    useHead({
      title: "about page",
      meta: [
        { name: "keywords", content: "html,css" },
        { name: "description", content: "html,css" }
      ],
      bodyAttrs: { class: "test" }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><p>about page</p><p>${ssrInterpolate(unref(numbers).nums)}</p><button type="button">go home</button><p>${ssrInterpolate(unref(counter))}</p><button type="button">add</button><button type="button">mines</button><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-CsIchEuD.mjs.map
