if("__TAURI__"in window){var __TAURI_PLUGIN_UPLOAD__=function(t){"use strict";function e(t,e,n,o){if("a"===n&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!o:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?o:"a"===n?o.call(t):o?o.value:e.get(t)}function n(t,e,n,o,s){if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(t,n),n}var o,s,r;"function"==typeof SuppressedError&&SuppressedError;const i="__TAURI_TO_IPC_KEY__";class a{constructor(){this.__TAURI_CHANNEL_MARKER__=!0,o.set(this,(()=>{})),s.set(this,0),r.set(this,{}),this.id=function(t,e=!1){return window.__TAURI_INTERNALS__.transformCallback(t,e)}((({message:t,id:i})=>{if(i===e(this,s,"f")){n(this,s,i+1),e(this,o,"f").call(this,t);const a=Object.keys(e(this,r,"f"));if(a.length>0){let t=i+1;for(const n of a.sort()){if(parseInt(n)!==t)break;{const s=e(this,r,"f")[n];delete e(this,r,"f")[n],e(this,o,"f").call(this,s),t+=1}}n(this,s,t)}}else e(this,r,"f")[i.toString()]=t}))}set onmessage(t){n(this,o,t)}get onmessage(){return e(this,o,"f")}[(o=new WeakMap,s=new WeakMap,r=new WeakMap,i)](){return`__CHANNEL__:${this.id}`}toJSON(){return this[i]()}}async function _(t,e={},n){return window.__TAURI_INTERNALS__.invoke(t,e,n)}return t.download=async function(t,e,n,o,s){const r=new Uint32Array(1);window.crypto.getRandomValues(r);const i=r[0],c=new a;n&&(c.onmessage=n),await _("plugin:upload|download",{id:i,url:t,filePath:e,headers:o??{},onProgress:c,body:s})},t.upload=async function(t,e,n,o){const s=new Uint32Array(1);window.crypto.getRandomValues(s);const r=s[0],i=new a;return n&&(i.onmessage=n),await _("plugin:upload|upload",{id:r,url:t,filePath:e,headers:o??{},onProgress:i})},t}({});Object.defineProperty(window.__TAURI__,"upload",{value:__TAURI_PLUGIN_UPLOAD__})}
