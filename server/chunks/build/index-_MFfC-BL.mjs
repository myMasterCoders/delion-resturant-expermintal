import { _ as __nuxt_component_0$1 } from './nuxt-img-DE2sON3z.mjs';
import { useSSRContext, reactive, mergeProps, resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation } from 'swiper/core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { u as useHead } from './server.mjs';
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

const _sfc_main$7 = {
  name: "city"
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtImg = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "main-city" }, _attrs))}><div class="container mx-auto p-2"><div class="w-full h-auto flex flex-row justify-between items-center"><input type="text" class="w-11/12 bg-white px-2 py-4 outline-none border border-1 border-slate-200 rounded-sm" placeholder="\u062C\u0633\u062A\u062C\u0648\u06CC \u0631\u0633\u062A\u0648\u0631\u0627\u0646 \u06CC\u0627 \u063A\u062F\u0627..."><button type="button" class="bg-[#ef4123] w-1/12 px-2 mx-1 py-4 rounded-md text-white">\u062C\u0633\u062A\u062C\u0648 \u06A9\u0646</button></div><div class="w-full h-auto my-2">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/delino.jpg",
    alt: "",
    class: "w-full h-[450px] rounded-xl"
  }, null, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/city.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$6 = {
  name: "category"
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtImg = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "category" }, _attrs))} data-v-00d6d1a0><div class="container mx-auto p-2" data-v-00d6d1a0><div class="w-full h-auto" data-v-00d6d1a0><h1 class="font-bold text-[35px] text-slate-800" data-v-00d6d1a0>\u062F\u0633\u062A\u0647 \u0647\u0627\u06CC \u0645\u062D\u0628\u0648\u0628</h1></div><div class="grid grid-cols-5 grid-rows-2 gap-2 my-4" data-v-00d6d1a0><div class="col-span-1 row-span-1 rounded-md relative" data-v-00d6d1a0>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/f-1.jpg",
    alt: "",
    class: "w-full h-auto rounded-md"
  }, null, _parent));
  _push(`<div id="img" class="w-full h-[140px] rounded-md absolute top-0" data-v-00d6d1a0></div><p class="font-bold text-white absolute bottom-[20px] right-[20px]" data-v-00d6d1a0>\u067E\u06CC\u062A\u0632\u0627</p></div><div class="col-span-1 row-span-1 rounded-md relative" data-v-00d6d1a0>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/f2.jpg",
    alt: "",
    class: "w-full h-auto rounded-md"
  }, null, _parent));
  _push(`<div id="img" class="w-full h-[140px] rounded-md absolute top-0" data-v-00d6d1a0></div><p class="font-bold text-white absolute bottom-[20px] right-[20px]" data-v-00d6d1a0>\u067E\u06CC\u062A\u0632\u0627</p></div><div class="col-span-1 row-span-1 rounded-md relative" data-v-00d6d1a0>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/f3.jpg",
    alt: "",
    class: "w-full h-auto rounded-md"
  }, null, _parent));
  _push(`<div id="img" class="w-full h-[140px] rounded-md absolute top-0" data-v-00d6d1a0></div><p class="font-bold text-white absolute bottom-[20px] right-[20px]" data-v-00d6d1a0>\u067E\u06CC\u062A\u0632\u0627</p></div><div class="col-span-1 row-span-1 rounded-md relative" data-v-00d6d1a0>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/f4.jpg",
    alt: "",
    class: "w-full h-auto rounded-md"
  }, null, _parent));
  _push(`<div id="img" class="w-full h-[140px] rounded-md absolute top-0" data-v-00d6d1a0></div><p class="font-bold text-white absolute bottom-[20px] right-[20px]" data-v-00d6d1a0>\u067E\u06CC\u062A\u0632\u0627</p></div><div class="col-span-1 row-span-1 rounded-md relative" data-v-00d6d1a0>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/f5.jpg",
    alt: "",
    class: "w-full h-auto rounded-md"
  }, null, _parent));
  _push(`<div id="img" class="w-full h-[140px] rounded-md absolute top-0" data-v-00d6d1a0></div><p class="font-bold text-white absolute bottom-[20px] right-[20px]" data-v-00d6d1a0>\u067E\u06CC\u062A\u0632\u0627</p></div><div class="col-span-1 row-span-1 rounded-md relative" data-v-00d6d1a0>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/f6.jpg",
    alt: "",
    class: "w-full h-auto rounded-md"
  }, null, _parent));
  _push(`<div id="img" class="w-full h-[140px] rounded-md absolute top-0" data-v-00d6d1a0></div><p class="font-bold text-white absolute bottom-[20px] right-[20px]" data-v-00d6d1a0>\u067E\u06CC\u062A\u0632\u0627</p></div><div class="col-span-1 row-span-1 rounded-md relative" data-v-00d6d1a0>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/f7.jpg",
    alt: "",
    class: "w-full h-auto rounded-md"
  }, null, _parent));
  _push(`<div id="img" class="w-full h-[140px] rounded-md absolute top-0" data-v-00d6d1a0></div><p class="font-bold text-white absolute bottom-[20px] right-[20px]" data-v-00d6d1a0>\u067E\u06CC\u062A\u0632\u0627</p></div><div class="col-span-1 row-span-1 rounded-md relative" data-v-00d6d1a0>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/f8.jpg",
    alt: "",
    class: "w-full h-auto rounded-md"
  }, null, _parent));
  _push(`<div id="img" class="w-full h-[140px] rounded-md absolute top-0" data-v-00d6d1a0></div><p class="font-bold text-white absolute bottom-[20px] right-[20px]" data-v-00d6d1a0>\u067E\u06CC\u062A\u0632\u0627</p></div><div class="col-span-1 row-span-1 rounded-md relative" data-v-00d6d1a0>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/f9.jpg",
    alt: "",
    class: "w-full h-auto rounded-md"
  }, null, _parent));
  _push(`<div id="img" class="w-full h-[140px] rounded-md absolute top-0" data-v-00d6d1a0></div><p class="font-bold text-white absolute bottom-[20px] right-[20px]" data-v-00d6d1a0>\u067E\u06CC\u062A\u0632\u0627</p></div><div class="col-span-1 row-span-1 rounded-md relative" data-v-00d6d1a0>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/f-10.jpg",
    alt: "",
    class: "w-full h-auto rounded-md"
  }, null, _parent));
  _push(`<div id="img" class="w-full h-[140px] rounded-md absolute top-0" data-v-00d6d1a0></div><p class="font-bold text-white absolute bottom-[20px] right-[20px]" data-v-00d6d1a0>\u067E\u06CC\u062A\u0632\u0627</p></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/category.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-00d6d1a0"]]);
SwiperCore.use([Navigation]);
const _sfc_main$5 = {
  name: "around",
  components: { FontAwesomeIcon, Swiper, SwiperSlide },
  setup() {
    const list = reactive([
      { id: 1, img: "/image/ban-1.jpg", comment: 23, desc: "\u0628\u0644\u0648\u0627\u0631 \u0627\u0645\u0627\u0645 \u0639\u0644\u06CC", title: "\u0641\u0633\u062A \u0641\u0648\u062F \u0686\u0648\u0628\u06CC\u0646 " },
      { id: 1, img: "/image/ban-2.jpg", comment: 83, desc: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u062D\u0633\u0646\u06CC", title: "\u062A\u0647\u06CC\u0647 \u063A\u0630\u0627\u06CC \u0633\u0631\u0622\u0634\u067E\u0632 \u0627\u0631\u0648\u0645\u06CC\u0647  " },
      { id: 1, img: "/image/ban-3.jpg", comment: 283, desc: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u0622\u0647\u0646\u062F\u0648\u0633\u062A", title: "\u0631\u0633\u062A\u0648\u0631\u0627\u0646 \u0627\u06A9\u0628\u0631 \u062C\u0648\u062C\u0647  " },
      { id: 1, img: "/image/ban-4.jpg", comment: 883, desc: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u0627\u0645\u06CC\u0646", title: "\u0631\u0633\u062A\u0648\u0631\u0627\u0646 \u063A\u0630\u0627\u06CC \u062A\u0631\u06A9\u06CC \u0647\u0644\u0627\u0644  " },
      { id: 1, img: "/image/ban-5.jpg", comment: 433, desc: "\u0628\u0644\u0648\u0627\u0631 \u0648\u0627\u0644\u0641\u062C\u0631\u060C \u0646\u0628\u0634 \u06A9\u0648\u06CC 3", title: "\u062A\u0647\u06CC\u0647 \u063A\u0630\u0627\u06CC \u0628\u0631\u06CC\u0627\u0646\u06A9  " }
    ]);
    return {
      list,
      modules: [Navigation]
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_NuxtImg = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "around" }, _attrs))} data-v-9f36fc64><div class="container mx-auto p-2" data-v-9f36fc64><div class="w-full h-auto flex flex-row justify-between items-center" data-v-9f36fc64><div data-v-9f36fc64><h1 class="font-bold text-slate-800 text-[35px]" data-v-9f36fc64>\u0627\u0637\u0631\u0627\u0641 \u0645\u0646</h1></div><div class="flex flex-row items-center" data-v-9f36fc64><p class="text-[#ef4123] mx-2" data-v-9f36fc64>\u0631\u0633\u062A\u0648\u0631\u0627\u0646 \u0647\u0627\u06CC \u0628\u06CC\u0634\u062A\u0631</p>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fas", "angle-left"],
    class: "text-orange-600 mx-2"
  }, null, _parent));
  _push(`</div></div><div class="w-full flex flex-row items-center justify-between my-4" data-v-9f36fc64><div class="swiper-wrapper" data-v-9f36fc64>`);
  _push(ssrRenderComponent(_component_swiper, {
    modules: $setup.modules,
    "space-between": 20,
    "slides-per-view": 3,
    navigation: true
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($setup.list, (food) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: food.id,
            class: "relative"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="flex flex-col" data-v-9f36fc64${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_NuxtImg, {
                  src: `${food.img}`,
                  alt: "",
                  class: "w-full h-[170px] rounded-md"
                }, null, _parent3, _scopeId2));
                _push3(`<div id="img2" class="absolute top-0 w-full h-[170px] rounded-md" data-v-9f36fc64${_scopeId2}></div><div class="bg-white rounded-full text-center px-2 py-2 text-slate-800 w-[100px] font-bold h-[50px] absolute left-[10px] bottom-[50px]" data-v-9f36fc64${_scopeId2}> 15-30 <br data-v-9f36fc64${_scopeId2}><b data-v-9f36fc64${_scopeId2}>\u062F\u0642\u06CC\u0642\u0647</b></div><p class="font-bold text-slate-800 my-4" data-v-9f36fc64${_scopeId2}>${ssrInterpolate(food.title)}</p><div class="flex flex-row items-center justify-between" data-v-9f36fc64${_scopeId2}><div class="text-[12px] text-slate-500" data-v-9f36fc64${_scopeId2}>${ssrInterpolate(food.desc)}</div><div class="text-[12px] text-slate-500" data-v-9f36fc64${_scopeId2}>${ssrInterpolate(food.comment)}\u0646\u0638\u0631</div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode(_component_NuxtImg, {
                      src: `${food.img}`,
                      alt: "",
                      class: "w-full h-[170px] rounded-md"
                    }, null, 8, ["src"]),
                    createVNode("div", {
                      id: "img2",
                      class: "absolute top-0 w-full h-[170px] rounded-md"
                    }),
                    createVNode("div", { class: "bg-white rounded-full text-center px-2 py-2 text-slate-800 w-[100px] font-bold h-[50px] absolute left-[10px] bottom-[50px]" }, [
                      createTextVNode(" 15-30 "),
                      createVNode("br"),
                      createVNode("b", null, "\u062F\u0642\u06CC\u0642\u0647")
                    ]),
                    createVNode("p", { class: "font-bold text-slate-800 my-4" }, toDisplayString(food.title), 1),
                    createVNode("div", { class: "flex flex-row items-center justify-between" }, [
                      createVNode("div", { class: "text-[12px] text-slate-500" }, toDisplayString(food.desc), 1),
                      createVNode("div", { class: "text-[12px] text-slate-500" }, toDisplayString(food.comment) + "\u0646\u0638\u0631", 1)
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($setup.list, (food) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: food.id,
              class: "relative"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode(_component_NuxtImg, {
                    src: `${food.img}`,
                    alt: "",
                    class: "w-full h-[170px] rounded-md"
                  }, null, 8, ["src"]),
                  createVNode("div", {
                    id: "img2",
                    class: "absolute top-0 w-full h-[170px] rounded-md"
                  }),
                  createVNode("div", { class: "bg-white rounded-full text-center px-2 py-2 text-slate-800 w-[100px] font-bold h-[50px] absolute left-[10px] bottom-[50px]" }, [
                    createTextVNode(" 15-30 "),
                    createVNode("br"),
                    createVNode("b", null, "\u062F\u0642\u06CC\u0642\u0647")
                  ]),
                  createVNode("p", { class: "font-bold text-slate-800 my-4" }, toDisplayString(food.title), 1),
                  createVNode("div", { class: "flex flex-row items-center justify-between" }, [
                    createVNode("div", { class: "text-[12px] text-slate-500" }, toDisplayString(food.desc), 1),
                    createVNode("div", { class: "text-[12px] text-slate-500" }, toDisplayString(food.comment) + "\u0646\u0638\u0631", 1)
                  ])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/around.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-9f36fc64"]]);
SwiperCore.use([Navigation]);
const _sfc_main$4 = {
  name: "offer",
  components: { SwiperSlide, Swiper },
  setup() {
    const list2 = reactive([
      { id: 1, img: "/image/of-1.jpg", comment: 23, desc: "\u0628\u0644\u0648\u0627\u0631 \u0627\u0645\u0627\u0645 \u0639\u0644\u06CC", title: " \u0641\u0633\u062A \u0641\u0648\u062F \u0648 \u062A\u0647\u06CC\u0647 \u063A\u0630\u0627\u06CC \u0686\u0627\u0634\u0646\u06CC  " },
      { id: 1, img: "/image/of-2.jpg", comment: 83, desc: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u062D\u0633\u0646\u06CC", title: "\u062A\u0647\u06CC\u0647 \u063A\u0630\u0627\u06CC \u0634\u0627\u0644\u06CC\u0632   " },
      { id: 1, img: "/image/of-3.jpg", comment: 283, desc: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u0622\u0647\u0646\u062F\u0648\u0633\u062A", title: "\u063A\u0630\u0627\u06CC \u062E\u0627\u0646\u06AF\u06CC \u0635\u0628\u062D\u0627\u0646\u0647 \u0644\u0627\u06A9\u0686\u0631\u06CC   " },
      { id: 1, img: "/image/of-4.jpg", comment: 883, desc: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u0627\u0645\u06CC\u0646", title: "\u0631\u0633\u062A\u0648\u0631\u0627\u0646 \u067E\u06CC\u062A\u0632\u0627 \u0645\u062F\u0644\u06CC\u0646   " },
      { id: 1, img: "/image/of-5.jpg", comment: 433, desc: "\u0628\u0644\u0648\u0627\u0631 \u0648\u0627\u0644\u0641\u062C\u0631\u060C \u0646\u0628\u0634 \u06A9\u0648\u06CC 3", title: "\u062A\u0647\u06CC\u0647 \u063A\u0630\u0627\u06CC \u0628\u0631\u06CC\u0627\u0646\u06A9  " }
    ]);
    return {
      list2,
      modules: [Navigation]
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_NuxtImg = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "around" }, _attrs))} data-v-8cb5097b><div class="container mx-auto p-2" data-v-8cb5097b><div class="w-full h-auto flex flex-row justify-between items-center" data-v-8cb5097b><div data-v-8cb5097b><h1 class="font-bold text-slate-800 text-[35px]" data-v-8cb5097b>\u062A\u062E\u0641\u06CC\u0641 \u062F\u0627\u0631\u0647\u0627</h1></div><div class="flex flex-row items-center" data-v-8cb5097b><p class="text-[#ef4123] mx-2" data-v-8cb5097b>\u0631\u0633\u062A\u0648\u0631\u0627\u0646 \u0647\u0627\u06CC \u0628\u06CC\u0634\u062A\u0631</p>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fas", "angle-left"],
    class: "text-orange-600 mx-2"
  }, null, _parent));
  _push(`</div></div><div class="w-full flex flex-row items-center justify-between my-4" data-v-8cb5097b><div class="swiper-wrapper" data-v-8cb5097b>`);
  _push(ssrRenderComponent(_component_swiper, {
    modules: $setup.modules,
    "space-between": 20,
    "slides-per-view": 3,
    navigation: true
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($setup.list2, (food) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: food.id,
            class: "relative"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="flex flex-col" data-v-8cb5097b${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_NuxtImg, {
                  src: `${food.img}`,
                  alt: "",
                  class: "w-full h-[170px] rounded-md"
                }, null, _parent3, _scopeId2));
                _push3(`<div id="img2" class="absolute top-0 w-full h-[170px] rounded-md" data-v-8cb5097b${_scopeId2}></div><div class="bg-white rounded-full text-center px-2 py-2 text-slate-800 w-[100px] font-bold h-[50px] absolute left-[10px] bottom-[50px]" data-v-8cb5097b${_scopeId2}> 15-30 <br data-v-8cb5097b${_scopeId2}><b data-v-8cb5097b${_scopeId2}>\u062F\u0642\u06CC\u0642\u0647</b></div><p class="font-bold text-slate-800 my-4" data-v-8cb5097b${_scopeId2}>${ssrInterpolate(food.title)}</p><div class="flex flex-row items-center justify-between" data-v-8cb5097b${_scopeId2}><div class="text-[12px] text-slate-500" data-v-8cb5097b${_scopeId2}>${ssrInterpolate(food.desc)}</div><div class="text-[12px] text-slate-500" data-v-8cb5097b${_scopeId2}>${ssrInterpolate(food.comment)}\u0646\u0638\u0631</div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode(_component_NuxtImg, {
                      src: `${food.img}`,
                      alt: "",
                      class: "w-full h-[170px] rounded-md"
                    }, null, 8, ["src"]),
                    createVNode("div", {
                      id: "img2",
                      class: "absolute top-0 w-full h-[170px] rounded-md"
                    }),
                    createVNode("div", { class: "bg-white rounded-full text-center px-2 py-2 text-slate-800 w-[100px] font-bold h-[50px] absolute left-[10px] bottom-[50px]" }, [
                      createTextVNode(" 15-30 "),
                      createVNode("br"),
                      createVNode("b", null, "\u062F\u0642\u06CC\u0642\u0647")
                    ]),
                    createVNode("p", { class: "font-bold text-slate-800 my-4" }, toDisplayString(food.title), 1),
                    createVNode("div", { class: "flex flex-row items-center justify-between" }, [
                      createVNode("div", { class: "text-[12px] text-slate-500" }, toDisplayString(food.desc), 1),
                      createVNode("div", { class: "text-[12px] text-slate-500" }, toDisplayString(food.comment) + "\u0646\u0638\u0631", 1)
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($setup.list2, (food) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: food.id,
              class: "relative"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode(_component_NuxtImg, {
                    src: `${food.img}`,
                    alt: "",
                    class: "w-full h-[170px] rounded-md"
                  }, null, 8, ["src"]),
                  createVNode("div", {
                    id: "img2",
                    class: "absolute top-0 w-full h-[170px] rounded-md"
                  }),
                  createVNode("div", { class: "bg-white rounded-full text-center px-2 py-2 text-slate-800 w-[100px] font-bold h-[50px] absolute left-[10px] bottom-[50px]" }, [
                    createTextVNode(" 15-30 "),
                    createVNode("br"),
                    createVNode("b", null, "\u062F\u0642\u06CC\u0642\u0647")
                  ]),
                  createVNode("p", { class: "font-bold text-slate-800 my-4" }, toDisplayString(food.title), 1),
                  createVNode("div", { class: "flex flex-row items-center justify-between" }, [
                    createVNode("div", { class: "text-[12px] text-slate-500" }, toDisplayString(food.desc), 1),
                    createVNode("div", { class: "text-[12px] text-slate-500" }, toDisplayString(food.comment) + "\u0646\u0638\u0631", 1)
                  ])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/offer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-8cb5097b"]]);
SwiperCore.use([Navigation]);
const _sfc_main$3 = {
  name: "seller",
  components: { SwiperSlide, Swiper },
  setup() {
    const list3 = reactive([
      { id: 1, img: "/image/se-1.jpg", comment: 23, desc: "\u0628\u0644\u0648\u0627\u0631 \u0627\u0645\u0627\u0645 \u0639\u0644\u06CC", title: " \u0641\u0633\u062A \u0641\u0648\u062F \u0634\u0647\u0631 \u0633\u0648\u062E\u0627\u0631\u06CC   " },
      { id: 1, img: "/image/se-2.jpg", comment: 83, desc: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u062D\u0633\u0646\u06CC", title: "\u062A\u0647\u06CC\u0647 \u063A\u0630\u0627\u06CC \u0634\u0627\u0644\u06CC\u0632    " },
      { id: 1, img: "/image/se-3.jpg", comment: 283, desc: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u0622\u0647\u0646\u062F\u0648\u0633\u062A", title: "\u062A\u0647\u06CC\u0647 \u063A\u0630\u0627\u06CC \u0628\u0647\u0627\u0631    " },
      { id: 1, img: "/image/se-4.jpg", comment: 883, desc: "\u062E\u06CC\u0627\u0628\u0627\u0646 \u0627\u0645\u06CC\u0646", title: "\u0641\u0633\u062A \u0641\u0648\u062F \u062E\u0648\u0634 \u062E\u0648\u0631\u0627\u06A9    " },
      { id: 1, img: "/image/se-5.jpg", comment: 433, desc: "\u0628\u0644\u0648\u0627\u0631 \u0648\u0627\u0644\u0641\u062C\u0631\u060C \u0646\u0628\u0634 \u06A9\u0648\u06CC 3", title: "\u062A\u0647\u06CC\u0647 \u063A\u0630\u0627\u06CC \u0633\u0631\u0622\u0634\u067E\u0632 \u0627\u0631\u0648\u0645\u06CC\u0647   " }
    ]);
    return {
      list3,
      modules: [Navigation]
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_NuxtImg = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "around" }, _attrs))} data-v-6f20f4ec><div class="container mx-auto p-2" data-v-6f20f4ec><div class="w-full h-auto flex flex-row justify-between items-center" data-v-6f20f4ec><div data-v-6f20f4ec><h1 class="font-bold text-slate-800 text-[35px]" data-v-6f20f4ec>\u067E\u0631\u0633\u0641\u0627\u0631\u0634 \u062A\u0631\u06CC\u0646 \u0647\u0627</h1></div><div class="flex flex-row items-center" data-v-6f20f4ec><p class="text-[#ef4123] mx-2" data-v-6f20f4ec>\u0631\u0633\u062A\u0648\u0631\u0627\u0646 \u0647\u0627\u06CC \u0628\u06CC\u0634\u062A\u0631</p>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fas", "angle-left"],
    class: "text-orange-600 mx-2"
  }, null, _parent));
  _push(`</div></div><div class="w-full flex flex-row items-center justify-between my-4" data-v-6f20f4ec><div class="swiper-wrapper" data-v-6f20f4ec>`);
  _push(ssrRenderComponent(_component_swiper, {
    modules: $setup.modules,
    "space-between": 20,
    "slides-per-view": 3,
    navigation: true
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($setup.list3, (food) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: food.id,
            class: "relative"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="flex flex-col" data-v-6f20f4ec${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_NuxtImg, {
                  src: `${food.img}`,
                  alt: "",
                  class: "w-full h-[170px] rounded-md"
                }, null, _parent3, _scopeId2));
                _push3(`<div id="img2" class="absolute top-0 w-full h-[170px] rounded-md" data-v-6f20f4ec${_scopeId2}></div><div class="bg-white rounded-full text-center px-2 py-2 text-slate-800 w-[100px] font-bold h-[50px] absolute left-[10px] bottom-[50px]" data-v-6f20f4ec${_scopeId2}> 15-30 <br data-v-6f20f4ec${_scopeId2}><b data-v-6f20f4ec${_scopeId2}>\u062F\u0642\u06CC\u0642\u0647</b></div><p class="font-bold text-slate-800 my-4" data-v-6f20f4ec${_scopeId2}>${ssrInterpolate(food.title)}</p><div class="flex flex-row items-center justify-between" data-v-6f20f4ec${_scopeId2}><div class="text-[12px] text-slate-500" data-v-6f20f4ec${_scopeId2}>${ssrInterpolate(food.desc)}</div><div class="text-[12px] text-slate-500" data-v-6f20f4ec${_scopeId2}>${ssrInterpolate(food.comment)}\u0646\u0638\u0631</div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode(_component_NuxtImg, {
                      src: `${food.img}`,
                      alt: "",
                      class: "w-full h-[170px] rounded-md"
                    }, null, 8, ["src"]),
                    createVNode("div", {
                      id: "img2",
                      class: "absolute top-0 w-full h-[170px] rounded-md"
                    }),
                    createVNode("div", { class: "bg-white rounded-full text-center px-2 py-2 text-slate-800 w-[100px] font-bold h-[50px] absolute left-[10px] bottom-[50px]" }, [
                      createTextVNode(" 15-30 "),
                      createVNode("br"),
                      createVNode("b", null, "\u062F\u0642\u06CC\u0642\u0647")
                    ]),
                    createVNode("p", { class: "font-bold text-slate-800 my-4" }, toDisplayString(food.title), 1),
                    createVNode("div", { class: "flex flex-row items-center justify-between" }, [
                      createVNode("div", { class: "text-[12px] text-slate-500" }, toDisplayString(food.desc), 1),
                      createVNode("div", { class: "text-[12px] text-slate-500" }, toDisplayString(food.comment) + "\u0646\u0638\u0631", 1)
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($setup.list3, (food) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: food.id,
              class: "relative"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode(_component_NuxtImg, {
                    src: `${food.img}`,
                    alt: "",
                    class: "w-full h-[170px] rounded-md"
                  }, null, 8, ["src"]),
                  createVNode("div", {
                    id: "img2",
                    class: "absolute top-0 w-full h-[170px] rounded-md"
                  }),
                  createVNode("div", { class: "bg-white rounded-full text-center px-2 py-2 text-slate-800 w-[100px] font-bold h-[50px] absolute left-[10px] bottom-[50px]" }, [
                    createTextVNode(" 15-30 "),
                    createVNode("br"),
                    createVNode("b", null, "\u062F\u0642\u06CC\u0642\u0647")
                  ]),
                  createVNode("p", { class: "font-bold text-slate-800 my-4" }, toDisplayString(food.title), 1),
                  createVNode("div", { class: "flex flex-row items-center justify-between" }, [
                    createVNode("div", { class: "text-[12px] text-slate-500" }, toDisplayString(food.desc), 1),
                    createVNode("div", { class: "text-[12px] text-slate-500" }, toDisplayString(food.comment) + "\u0646\u0638\u0631", 1)
                  ])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/seller.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-6f20f4ec"]]);
const _sfc_main$2 = {
  name: "banner"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtImg = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "banner" }, _attrs))}><div class="container mx-auto p-2"><div class="w-full h-auto"><div class="w-full flex flex-row items-center justify-center bg-[#ddf0e2]"><div class="w-6/12 flex flex-col items-center justify-center"><h2 class="font-bold text-[35px] text-slate-900 my-2">\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0645\u0648\u0628\u0627\u06CC\u0644 \u062F\u0644\u06CC\u0646\u0648</h2><p class="text-slate-800 text-md">\u0628\u0631\u0627\u06CC \u062F\u0631\u06CC\u0627\u0641\u062A \u0644\u06CC\u0646\u06A9 \u062F\u0627\u0646\u0644\u0648\u062F \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u062F\u0644\u06CC\u0646\u0648\u060C \u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644\u062A \u0631\u0648 \u0648\u0627\u0631\u062F \u06A9\u0646</p><div class="flex flex-row w-full items-center justify-between my-4"><input type="text" class="w-9/12 bg-white outline-none border border-1 p-4 border-slate-200 p-2" placeholder="0912xxxxxx"><button type="button" class="w-3/12 bg-[#ef4123] text-white rounded-tl-lg p-4 rounded-bl-lg">\u062F\u0631\u06CC\u0627\u0641\u062A \u0644\u06CC\u0646\u06A9 \u062F\u0627\u0646\u0644\u0648\u062F</button></div><div class="grid grid-cols-3 grid-rows-2 gap-2"><div class="bg-slate-900 rounded-lg col-span-1 row-span-1">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/label-app-ios-sibapp.png",
    alt: "",
    class: "w-full h-[50px]"
  }, null, _parent));
  _push(`</div><div class="bg-slate-900 rounded-lg col-span-1 row-span-1">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/label-app-ios-sibapp.png",
    alt: "",
    class: "w-full h-[50px]"
  }, null, _parent));
  _push(`</div><div class="bg-slate-900 rounded-lg col-span-1 row-span-1">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/label-app-ios-anardoni.png",
    alt: "",
    class: "w-full h-[50px]"
  }, null, _parent));
  _push(`</div><div class="bg-slate-900 rounded-lg col-span-1 row-span-1">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/label-app-android-myket.png",
    alt: "",
    class: "w-full h-[50px]"
  }, null, _parent));
  _push(`</div><div class="bg-slate-900 rounded-lg col-span-1 row-span-1">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/label-app-android-direct.png",
    alt: "",
    class: "w-full h-[50px]"
  }, null, _parent));
  _push(`</div><div class="bg-slate-900 rounded-lg col-span-1 row-span-1">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/label-app-android-bazaar.png",
    alt: "",
    class: "w-full h-[50px]"
  }, null, _parent));
  _push(`</div></div></div><div class="w-4/12">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/fig-iphone.png",
    alt: "",
    class: "w-full h-auto"
  }, null, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/banner.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  name: "orders"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtImg = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "orders" }, _attrs))}><div class="container mx-auto p-2"><div class="w-full h-auto"><div class="flex flex-col w-full space-y-2"><div class="w-8/12 mx-auto mb-4"><h1 class="font-bold text-[35px] text-slate-900 my-4">\u0633\u0641\u0627\u0631\u0634 \u0622\u0646\u0644\u0627\u06CC\u0646 \u063A\u0630\u0627 \u0627\u0632 \u0628\u0647\u062A\u0631\u06CC\u0646 \u0631\u0633\u062A\u0648\u0631\u0627\u0646\u200C\u200C\u0647\u0627 \u0648 \u0641\u0633\u062A\u200C\u0641\u0648\u062F\u200C\u200C\u0647\u0627</h1><p class="text-sm text-slate-800" style="${ssrRenderStyle({ "line-height": "25px" })}"> \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0648\u0628\u0633\u0627\u06CC\u062A \u0648 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0633\u0641\u0627\u0631\u0634 \u0622\u0646\u0644\u0627\u06CC\u0646 \u063A\u0630\u0627\u06CC \u062F\u0644\u06CC\u0646\u0648 \u0634\u0645\u0627 \u0645\u06CC\u062A\u0648\u0646\u06CC\u062F \u0628\u0647 \u0631\u0627\u062D\u062A\u06CC \u0648 \u062F\u0631 \u0633\u0631\u06CC\u0639 \u062A\u0631\u06CC\u0646 \u0632\u0645\u0627\u0646 \u0645\u0645\u06A9\u0646 \u063A\u0630\u0627\u06CC \u0645\u0648\u0631\u062F \u0639\u0644\u0627\u0642\u0647\u200C\u06CC \u062E\u0648\u062F\u062A\u0648\u0646 \u0631\u0648 \u0627\u0632 \u0628\u0647\u062A\u0631\u06CC\u0646 \u0631\u0633\u062A\u0648\u0631\u0627\u0646\u200C\u0647\u0627 \u0648 \u0641\u0633\u062A \u0641\u0648\u062F\u200C\u0647\u0627\u06CC \u062A\u0647\u0631\u0627\u0646\u060C \u0642\u0645\u060C \u06A9\u0631\u062C\u060C \u06AF\u0631\u06AF\u0627\u0646\u060C \u06CC\u0632\u062F\u060C \u0627\u0631\u0648\u0645\u06CC\u0647 \u0648 \u0633\u0627\u06CC\u0631 \u0634\u0647\u0631\u0647\u0627\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0633\u0641\u0627\u0631\u0634 \u0628\u062F\u06CC\u0646. </p></div><div class="w-8/12 flex flex-row justify-between items-center mx-auto mt-8"><div class="w-4/12 flex flex-row">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/logo-kasbokar.png",
    alt: "",
    class: "w-[100px] h-[100px]"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/logo-kasbokar.png",
    alt: "",
    class: "w-[100px] h-[100px]"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/logo-kasbokar.png",
    alt: "",
    class: "w-[100px] h-[100px]"
  }, null, _parent));
  _push(`</div><div class="w-8/12"><p class="text-slate-400 text-sm font-bold">\u062A\u0645\u0627\u0645\u06CC \u06A9\u0627\u0644\u0627\u0647\u0627 \u0648 \u062E\u062F\u0645\u0627\u062A \u0627\u06CC\u0646 \u0633\u0627\u06CC\u062A\u060C \u062F\u0627\u0631\u0627\u06CC \u0645\u062C\u0648\u0632\u0647\u0627\u06CC \u0644\u0627\u0632\u0645 \u0627\u0632 \u0645\u0631\u0627\u062C\u0639 \u0645\u0631\u0628\u0648\u0637\u0647 \u0645\u06CC\u200C\u0628\u0627\u0634\u0646\u062F \u0648 \u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627\u06CC \u0627\u06CC\u0646 \u0633\u0627\u06CC\u062A \u062A\u0627\u0628\u0639 \u0642\u0648\u0627\u0646\u06CC\u0646 \u0648 \u0645\u0642\u0631\u0631\u0627\u062A \u062C\u0645\u0647\u0648\u0631\u06CC \u0627\u0633\u0644\u0627\u0645\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0627\u0633\u062A.</p></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/orders.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home page",
      meta: [
        { name: "keywords", content: "html,css" },
        { name: "description", content: "html,css" }
      ],
      bodyAttrs: { class: "test" }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainCity = __nuxt_component_0;
      const _component_MainCategory = __nuxt_component_1;
      const _component_MainAround = __nuxt_component_2;
      const _component_MainOffer = __nuxt_component_3;
      const _component_MainSeller = __nuxt_component_4;
      const _component_MainBanner = __nuxt_component_5;
      const _component_MainOrders = __nuxt_component_6;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_MainCity, null, null, _parent));
      _push(ssrRenderComponent(_component_MainCategory, { class: "my-8" }, null, _parent));
      _push(ssrRenderComponent(_component_MainAround, { class: "my-8" }, null, _parent));
      _push(ssrRenderComponent(_component_MainOffer, { class: "my-8" }, null, _parent));
      _push(ssrRenderComponent(_component_MainSeller, { class: "my-8" }, null, _parent));
      _push(ssrRenderComponent(_component_MainBanner, null, null, _parent));
      _push(ssrRenderComponent(_component_MainOrders, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-_MFfC-BL.mjs.map
