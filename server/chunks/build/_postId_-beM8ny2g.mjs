import { ssrInterpolate } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  name: "[postId]"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><p>${ssrInterpolate(_ctx.$route.params.postId)}</p><p>${ssrInterpolate(_ctx.$route.query.name)}</p><p>${ssrInterpolate(_ctx.$route.query.family)}</p><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[postId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _postId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _postId_ as default };
//# sourceMappingURL=_postId_-beM8ny2g.mjs.map
