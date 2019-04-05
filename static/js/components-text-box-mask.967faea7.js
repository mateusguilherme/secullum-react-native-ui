(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"./docs/components/TextBoxMask.mdx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),u=n("./node_modules/docz/dist/index.m.js"),l=n("./node_modules/react-native-masked-text/dist/index.js"),i=n("./src/components/TextBox.tsx");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,m(t).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r["Component"]),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.type,n=e.options,o=s(e,["type","options"]);return r.createElement(i.a,Object.assign({},o,{renderInput:function(e){var o=e.ref,a=s(e,["ref"]);return r.createElement(l.TextInputMask,Object.assign({},a,{refInput:o,type:t,options:n}))}}))}}])&&d(n.prototype,o),a&&d(n,a),t}();try{f.displayName="TextBoxMask",f.__docgenInfo={description:"",displayName:"TextBoxMask",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"TextInputMaskTypeProp"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"TextInputMaskOptionProp"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: string) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"() => void"}},renderInput:{defaultValue:null,description:"",name:"renderInput",required:!1,type:{name:"(props: TextBoxInputProps) => Element"}},onSubmitEditing:{defaultValue:null,description:"",name:"onSubmitEditing",required:!1,type:{name:"() => void"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"(value: TextInput) => void"}},secureTextEntry:{defaultValue:null,description:"",name:"secureTextEntry",required:!1,type:{name:"boolean"}},multiline:{defaultValue:null,description:"",name:"multiline",required:!1,type:{name:"boolean"}},keyboardType:{defaultValue:null,description:"",name:"keyboardType",required:!1,type:{name:"KeyboardType"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:"StyleProp<TextStyle>"}},inputStyle:{defaultValue:null,description:"",name:"inputStyle",required:!1,type:{name:"StyleProp<TextStyle>"}},editable:{defaultValue:null,description:"",name:"editable",required:!1,type:{name:"boolean"}},autoCorrect:{defaultValue:null,description:"",name:"autoCorrect",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},autoCapitalize:{defaultValue:null,description:"",name:"autoCapitalize",required:!1,type:{name:'"none" | "sentences" | "words" | "characters"'}},returnKeyType:{defaultValue:null,description:"",name:"returnKeyType",required:!1,type:{name:"ReturnKeyTypeOptions"}},blurOnSubmit:{defaultValue:null,description:"",name:"blurOnSubmit",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextBoxMask.tsx#TextBoxMask"]={docgenInfo:f.__docgenInfo,name:"TextBoxMask",path:"src/components/TextBoxMask.tsx#TextBoxMask"})}catch(e){}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=function(e){var t=e.components,n=b(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"textboxmask"}},"TextBoxMask"),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"properties"}},"Properties"),o.a.createElement(u.PropsTable,{of:f}),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),o.a.createElement(u.Playground,{__position:1,__code:'<TextBoxMask label="Zip Code" value="93700-000" type="zip-code" />',__scope:{props:n,TextBoxMask:f}},o.a.createElement(f,{label:"Zip Code",value:"93700-000",type:"zip-code"})))}}}]);