(self.webpackChunksc33n3=self.webpackChunksc33n3||[]).push([[846],{6725:function(e,t,r){const o=r(3395);e.exports={MDXRenderer:o}},3395:function(e,t,r){var o=r(9213),n=r(3515),u=r(8416),s=r(215);const p=["scope","children"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const a=r(7294),{mdx:i}=r(4983),{useMDXScope:f}=r(9480);e.exports=function(e){let{scope:t,children:r}=e,u=s(e,p);const l=f(t),x=a.useMemo((()=>{if(!r)return null;const e=c({React:a,mdx:i},l),t=Object.keys(e),u=t.map((t=>e[t]));return n(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(o(u)))}),[r,t]);return a.createElement(x,c({},u))}},6591:function(e,t,r){"use strict";r.r(t);var o=r(7294),n=r(6725),u=r(4254),s=r(3846);t.default=e=>{let{data:t}=e;const r=t.mdx.frontmatter.featureImage.childImageSharp.fixed,p=t.mdx.frontmatter.featureImage.publicURL;return o.createElement(s.W2,null,o.createElement(s.pQ,{title:t.mdx.frontmatter.title,image:p,description:t.mdx.frontmatter.excerpt}),o.createElement(s.$s,{fixed:r}),o.createElement(s.SO,null,o.createElement(u.H1,{margin:"0 0 2rem 0"},t.mdx.frontmatter.title),o.createElement(n.MDXRenderer,null,t.mdx.body)))}},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,r){var o=r(3897);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,r){var o=r(6015),n=r(9617);e.exports=function(e,t,r){if(n())return Reflect.construct.apply(null,arguments);var u=[null];u.push.apply(u,t);var s=new(e.bind.apply(e,u));return r&&o(s,r.prototype),s},e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e,t,r){var o=r(4062);e.exports=function(e,t,r){return(t=o(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},9617:function(e){function t(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(r){}return(e.exports=t=function(){return!!r},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},215:function(e,t,r){var o=r(7071);e.exports=function(e,t){if(null==e)return{};var r,n,u=o(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(u[r]=e[r])}return u},e.exports.__esModule=!0,e.exports.default=e.exports},9213:function(e,t,r){var o=r(3405),n=r(9498),u=r(6116),s=r(2281);e.exports=function(e){return o(e)||n(e)||u(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,r){var o=r(8698).default;e.exports=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,r){var o=r(8698).default,n=r(5036);e.exports=function(e){var t=n(e,"string");return"symbol"==o(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,r){var o=r(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-single-post-js-efa1137321a05e3a280a.js.map