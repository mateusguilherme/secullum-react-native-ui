(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./docs/components/Header.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),r=t.n(o),a=t("./node_modules/@mdx-js/tag/dist/index.js"),l=t("./node_modules/docz/dist/index.m.js"),s=t("./src/components/Header.tsx");function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}n.default=function(e){var n=e.components,t=p(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:n},r.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"header"}},"Header"),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"properties"}},"Properties"),r.a.createElement(l.PropsTable,{of:s.a}),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"example"}},"Example"),r.a.createElement(l.Playground,{__position:1,__code:"<Header\n  title=\"App Title\"\n  leftButton={{\n    icon: 'arrow-left',\n    onPress: () => alert('left'),\n  }}\n  rightButton={{\n    icon: 'bell',\n    disabled: true,\n  }}\n/>",__scope:{props:t,Header:s.a}},r.a.createElement(s.a,{title:"App Title",leftButton:{icon:"arrow-left",onPress:function(){return alert("left")}},rightButton:{icon:"bell",disabled:!0}})))}}}]);