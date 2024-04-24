import { b as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import 'vue';
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
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const auth = defineNuxtRouteMiddleware((to, from) => {
  if (to.name == "/about") {
    return navigateTo("/");
  }
});

export { auth as default };
//# sourceMappingURL=auth-DaOWwAmk.mjs.map
