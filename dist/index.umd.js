!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("isomorphic-unfetch"),require("uuid")):"function"==typeof define&&define.amd?define(["isomorphic-unfetch","uuid"],n):(t||self).rampsdk=n(t.isomorphicUnfetch,t.uuid)}(this,function(t,n){function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=/*#__PURE__*/i(t);function o(){return o=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var e in i)({}).hasOwnProperty.call(i,e)&&(t[e]=i[e])}return t},o.apply(null,arguments)}function r(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,u(t,n)}function u(t,n){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},u(t,n)}var c=/*#__PURE__*/function(){function t(t){this.apiKey=void 0,this.baseUrl=void 0,this.apiKey=t.apiKey,this.baseUrl=t.baseUrl||"https://api.ramp.com/developer/v1/"}return t.prototype.invoke=function(t,n){var i=""+this.baseUrl+t,r=o({},n,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+this.apiKey,Accept:"application/json"}});return e.default(i,r).then(function(t){return console.log(t.body),t.json()})},t}(),s=/*#__PURE__*/function(t){function n(){return t.apply(this,arguments)||this}r(n,t);var i=n.prototype;return i.getBills=function(t){return this.invoke("bills",t)},i.getBillById=function(t){return this.invoke("bills/"+t)},n}(c);function a(t){var n=new URLSearchParams,i=function(i){if(t.hasOwnProperty(i)){var e=t[i];null!=e&&(Array.isArray(e)?e.forEach(function(t){return n.append(i,e.toString())}):n.append(i,e.toString()))}};for(var e in t)i(e);return n.toString()}var p,f=/*#__PURE__*/function(t){function i(){return t.apply(this,arguments)||this}r(i,t);var e=i.prototype;return e.getAccountingOptions=function(t,n,i,e){var o=a({field_id:t,page_size:i,start:n,is_active:e});return this.invoke("accounting/field-options?"+o)},e.postNewAccountingFieldOptions=function(t){var i=n.v4(),e={method:"POST",body:JSON.stringify({field_id:i,options:t})};return this.invoke("accounting/field-options",e)},e.getCustomAccountingOption=function(t){return this.invoke("accounting/field-options/"+t)},e.updateCustomAccountingOption=function(t,n,i){var e={method:"PATCH",body:JSON.stringify({reactivate:n,value:i})};return this.invoke("accounting/field-options/"+t,e)},e.deleteCustomAccountingFieldOption=function(t){return this.invoke("accounting/field-options/"+t)},e.listCustomAccountingFields=function(t,n,i){var e=a({start:t,page_size:n,is_active:i});return this.invoke("accounting/fields?"+e)},e.createCustomAccountingField=function(t,n,i,e){if("BOOLEAN"!==n||"FREE_FORM_TEXT"!==n||"SINGLE_CHOICE"!==n)throw new Error("The input type can only be SINGLE_CHOICE, BOOLEAN or FREE_FORM_TEXT.");var o={method:"POST",body:JSON.stringify({id:t,input_type:n,name:i,is_splittable:e})};return this.invoke("accounting/fields",o)},e.getCustomAccountingField=function(t){return this.invoke("accounting/fields/"+t)},e.updateCustomAccountingField=function(t,n,i){return JSON.stringify({reactivate:n,value:i}),this.invoke("accounting/fields/"+t)},e.deleteCustomAccountingField=function(t){return this.invoke("accounting/fields/"+t,{method:"DELETE"})},i}(c),l=/*#__PURE__*/function(t){function n(){return t.apply(this,arguments)||this}return r(n,t),n}(c);return p=l,[s,f].forEach(function(t){Object.getOwnPropertyNames(t.prototype).forEach(function(n){Object.defineProperty(p.prototype,n,Object.getOwnPropertyDescriptor(t.prototype,n)||Object.create(null))})}),l});
