function y(){}function w(t,n){for(const e in n)t[e]=n[e];return t}function v(t){return t()}function D(){return Object.create(null)}function j(t){t.forEach(v)}function E(t){return typeof t=="function"}function F(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function M(t){return Object.keys(t).length===0}function m(t,...n){if(t==null){for(const o of n)o(void 0);return y}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function S(t){let n;return m(t,e=>n=e)(),n}function A(t,n,e){t.$$.on_destroy.push(m(n,e))}function B(t,n,e,o){if(t){const r=x(t,n,e,o);return t[0](r)}}function x(t,n,e,o){return t[1]&&o?w(e.ctx.slice(),t[1](o(n))):e.ctx}function G(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],_=Math.max(n.dirty.length,r.length);for(let u=0;u<_;u+=1)l[u]=n.dirty[u]|r[u];return l}return n.dirty|r}return n.dirty}function H(t,n,e,o,r,l){if(r){const _=x(n,e,o,l);t.p(_,r)}}function P(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function U(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function I(t,n){const e={};n=new Set(n);for(const o in t)!n.has(o)&&o[0]!=="$"&&(e[o]=t[o]);return e}function J(t,n,e){return t.set(e),n}function K(t){return t&&E(t.destroy)?t.destroy:y}let f;function d(t){f=t}function i(){if(!f)throw new Error("Function called outside component initialization");return f}function L(t){i().$$.on_mount.push(t)}function N(t){i().$$.after_update.push(t)}function Q(t){i().$$.on_destroy.push(t)}function R(t,n){return i().$$.context.set(t,n),n}function T(t){return i().$$.context.get(t)}const a=[],g=[];let c=[];const b=[],k=Promise.resolve();let p=!1;function C(){p||(p=!0,k.then(q))}function V(){return C(),k}function O(t){c.push(t)}const h=new Set;let s=0;function q(){if(s!==0)return;const t=f;do{try{for(;s<a.length;){const n=a[s];s++,d(n),z(n.$$)}}catch(n){throw a.length=0,s=0,n}for(d(null),a.length=0,s=0;g.length;)g.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];h.has(e)||(h.add(e),e())}c.length=0}while(a.length);for(;b.length;)b.pop()();p=!1,h.clear(),d(t)}function z(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function W(t){const n=[],e=[];c.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),c=n}export{T as A,S as B,K as C,i as D,I as E,w as F,U as G,J as H,m as a,B as b,A as c,G as d,N as e,g as f,P as g,D as h,E as i,q as j,M as k,O as l,W as m,y as n,L as o,f as p,d as q,j as r,F as s,V as t,H as u,v,a as w,C as x,R as y,Q as z};
