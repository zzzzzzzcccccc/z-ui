/**
* requestAnimationFrame
* */
import Vue from 'vue'

const isServer = Vue.prototype.$isServer;
let prev = Date.now();

function fallback(fn) {
  const curr = Date.now();
  const ms = Math.max(0, 16 - (curr - prev))
  const id = setTimeout(fn, ms)
  prev = curr + ms

  return id
}

const root = isServer ? global : window;

const iRaf = root.requestAnimationFrame || root.webkitRequestAnimationFrame || fallback;

const iCancel = root.cancelAnimationFrame || root.webkitCancelAnimationFrame || root.clearTimeout;

export function raf(fn) {
  return iRaf.call(root, fn);
}

export function cancel(id) {
  iCancel.call(root, id);
}
