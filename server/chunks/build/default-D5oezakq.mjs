import { _ as __nuxt_component_0 } from './nuxt-img-DE2sON3z.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, unref } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from 'vue/server-renderer';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './server.mjs';
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

const _sfc_main$2 = {
  __name: "base",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = resolveComponent("Button");
      const _component_NuxtImg = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "header-base" }, _attrs))}><div class="container mx-auto p-2"><div class="w-full h-auto flex flex-col"><div class="flex flex-row shadow-sm justify-between py-2 items-center w-full"><div class="w-2/12 flex flex-row">`);
      _push(ssrRenderComponent(_component_Button, {
        type: "button",
        class: "bg-white border border-1 border-orange-700 px-4 py-2 font-bold text-orange-700 rounded-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0648\u0631\u0648\u062F`);
          } else {
            return [
              createTextVNode("\u0648\u0631\u0648\u062F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button type="button" class="bg-white text-slate-800 mx-4">\u062B\u0628\u062A \u0646\u0627\u0645</button></div><div class="w-1/12">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/image/logo-delino-new.svg",
        alt: "",
        class: "w-full h-[45px]",
        format: "webp"
      }, null, _parent));
      _push(`</div><div class="w-1/12 justify-end flex flex-row"><button type="button" class="bg-[#ef4123] text-white p-2 rounded-md px-4 py-2">`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: ["fas", "shopping-cart"],
        class: "font-bold text-white"
      }, null, _parent));
      _push(`</button></div></div><div class="flex flex-row shadow-sm py-8 items-center justify-center">`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: ["fas", "map-marker"],
        class: "mx-2 text-orange-400 bg-white"
      }, null, _parent));
      _push(`<p class="font-bold text-[#ef4123]">\u062F\u0631 \u0627\u0631\u0648\u0645\u06CC\u0647</p>`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: ["fas", "angle-down"],
        class: "mx-2 text-orange-400"
      }, null, _parent));
      _push(`</div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/base.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  name: "base",
  components: { FontAwesomeIcon }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtImg = __nuxt_component_0;
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "footer mt-4" }, _attrs))}><div class="container-fluid mx-auto bg-slate-700 p-2"><div class="flex flex-row items-center justify-end my-4"><button type="button" class="text-white px-4 py-2 border border-1 border-slate-400 rounded-md">English</button></div><div class="w-full h-[1px] bg-slate-600"></div><div class="w-full flex flex-row items-center justify-between h-auto p-8"><div class="w-6/12 flex flex-col space-y-4"><div class="flex flex-row items-center">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/logo-delino-new.png",
    alt: "",
    class: "rounded-full w-[50px] h-[50px]"
  }, null, _parent));
  _push(`<ul class="flex flex-row"><li class="text-white p-2 text-[12px]">\u0648\u0628\u0644\u0627\u06AF \u062F\u0644\u06CC\u0646\u0648</li><li class="text-white p-2 text-[12px]">\u062F\u0631\u0628\u0627\u0631\u0647</li><li class="text-white p-2 text-[12px]">\u062A\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627</li><li class="text-white p-2 text-[12px]">\u0642\u0648\u0627\u0646\u06CC\u0646</li><li class="text-white p-2 text-[12px]">\u0633\u0648\u0627\u0644\u0627\u062A \u0645\u062A\u062F\u0627\u0648\u0644</li><li class="text-white p-2 text-[12px]">\u062D\u0631\u06CC\u0645 \u0634\u062E\u0635\u06CC</li><li class="text-white p-2 text-[12px]">\u062B\u0628\u062A \u0646\u0627\u0645 \u0631\u0633\u062A\u0648\u0631\u0627\u0646</li></ul></div><p class="font-bold text-[12px] text-slate-400"> \u062A\u0645\u0627\u0645\u06CC \u0644\u0648\u06AF\u0648\u0647\u0627 \u0648 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0631\u0633\u062A\u0648\u0631\u0627\u0646 \u0647\u0627 \u0628\u0627 \u0627\u062D\u062A\u0631\u0627\u0645 \u0645\u062A\u0639\u0644\u0642 \u0628\u0647 \u0645\u0627\u0644\u06A9\u06CC\u0646 \u0631\u0633\u062A\u0648\u0631\u0627\u0646 \u0647\u0627 \u0627\u0633\u062A \u0648 \u0627\u0645\u062A\u06CC\u0627\u0632 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0627\u06CC\u0646 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u062A\u0646\u0647\u0627 \u0628\u0631\u0627\u06CC \u062F\u0644\u06CC\u0646\u0648 \u0645\u062C\u0627\u0632 \u0627\u0633\u062A </p></div><div class="w-3/12 flex flex-col space-y-4"><div class="flex flex-row">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fab", "linkedin"],
    class: "text-white text-[30px] mx-2 bg-slate-700 p-2 rounded-full"
  }, null, _parent));
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fab", "twitter"],
    class: "text-white text-[30px] mx-2 bg-slate-700 p-2 rounded-full"
  }, null, _parent));
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fab", "facebook"],
    class: "text-white text-[30px] mx-2 bg-slate-700 p-2 rounded-full"
  }, null, _parent));
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fab", "telegram"],
    class: "text-white text-[30px] mx-2 bg-slate-700 p-2 rounded-full"
  }, null, _parent));
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fab", "instagram"],
    class: "text-white text-[30px] mx-2 bg-slate-700 p-2 rounded-full"
  }, null, _parent));
  _push(`</div><div class="flex flex-row justify-around">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/label-app-ios-anardoni.png",
    alt: "",
    class: "border border-1 border-slate-100 rounded-md w-[100px] h-[50px]"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/label-app-ios-sibapp.png",
    alt: "",
    class: "border border-1 border-slate-100 rounded-md w-[100px] h-[50xp]"
  }, null, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer/base.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "default"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderBase = _sfc_main$2;
  const _component_FooterBase = __nuxt_component_1;
  _push(`<!--[--><header>`);
  _push(ssrRenderComponent(_component_HeaderBase, null, null, _parent));
  _push(`</header>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<footer>`);
  _push(ssrRenderComponent(_component_FooterBase, null, null, _parent));
  _push(`</footer><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-D5oezakq.mjs.map
