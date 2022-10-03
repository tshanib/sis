(function(){"use strict";var __webpack_require__={};!function(){__webpack_require__.d=function(exports,definition){for(var key in definition){if(__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)){Object.defineProperty(exports,key,{enumerable:true,get:definition[key]});}}};}();!function(){__webpack_require__.o=function(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop);}}();!function(){__webpack_require__.r=function(exports){if(typeof Symbol!=='undefined'&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});}
Object.defineProperty(exports,'__esModule',{value:true});};}();var __webpack_exports__={};__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{"store":function(){return store;}});var actions_namespaceObject={};__webpack_require__.r(actions_namespaceObject);__webpack_require__.d(actions_namespaceObject,{"createErrorNotice":function(){return createErrorNotice;},"createInfoNotice":function(){return createInfoNotice;},"createNotice":function(){return createNotice;},"createSuccessNotice":function(){return createSuccessNotice;},"createWarningNotice":function(){return createWarningNotice;},"removeNotice":function(){return removeNotice;}});var selectors_namespaceObject={};__webpack_require__.r(selectors_namespaceObject);__webpack_require__.d(selectors_namespaceObject,{"getNotices":function(){return getNotices;}});;var external_wp_data_namespaceObject=window["wp"]["data"];;var external_lodash_namespaceObject=window["lodash"];;const onSubKey=actionProperty=>reducer=>function(){let state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};let action=arguments.length>1?arguments[1]:undefined;const key=action[actionProperty];if(key===undefined){return state;}
const nextKeyState=reducer(state[key],action);if(nextKeyState===state[key]){return state;}
return{...state,[key]:nextKeyState};};var on_sub_key=(onSubKey);;const notices=on_sub_key('context')(function(){let state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];let action=arguments.length>1?arguments[1]:undefined;switch(action.type){case 'CREATE_NOTICE':return[...(0,external_lodash_namespaceObject.reject)(state,{id:action.notice.id}),action.notice];case 'REMOVE_NOTICE':return(0,external_lodash_namespaceObject.reject)(state,{id:action.id});}
return state;});var reducer=(notices);;const DEFAULT_CONTEXT='global';const DEFAULT_STATUS='info';;function createNotice(){let status=arguments.length>0&&arguments[0]!==undefined?arguments[0]:DEFAULT_STATUS;let content=arguments.length>1?arguments[1]:undefined;let options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};const{speak=true,isDismissible=true,context=DEFAULT_CONTEXT,id=(0,external_lodash_namespaceObject.uniqueId)(context),actions=[],type='default',__unstableHTML,icon=null,explicitDismiss=false,onDismiss}=options;content=String(content);return{type:'CREATE_NOTICE',context,notice:{id,status,content,spokenMessage:speak?content:null,__unstableHTML,isDismissible,actions,type,icon,explicitDismiss,onDismiss}};}
function createSuccessNotice(content,options){return createNotice('success',content,options);}
function createInfoNotice(content,options){return createNotice('info',content,options);}
function createErrorNotice(content,options){return createNotice('error',content,options);}
function createWarningNotice(content,options){return createNotice('warning',content,options);}
function removeNotice(id){let context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:DEFAULT_CONTEXT;return{type:'REMOVE_NOTICE',id,context};};const DEFAULT_NOTICES=[];function getNotices(state){let context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:DEFAULT_CONTEXT;return state[context]||DEFAULT_NOTICES;};const store=(0,external_wp_data_namespaceObject.createReduxStore)('core/notices',{reducer:reducer,actions:actions_namespaceObject,selectors:selectors_namespaceObject});(0,external_wp_data_namespaceObject.register)(store);;(window.wp=window.wp||{}).notices=__webpack_exports__;})();