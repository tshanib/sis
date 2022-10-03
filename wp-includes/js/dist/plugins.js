(function(){var __webpack_modules__=({9756:(function(module){function memize(fn,options){var size=0;var head;var tail;options=options||{};function memoized(){var node=head,len=arguments.length,args,i;searchCache:while(node){if(node.args.length!==arguments.length){node=node.next;continue;}
for(i=0;i<len;i++){if(node.args[i]!==arguments[i]){node=node.next;continue searchCache;}}
if(node!==head){if(node===tail){tail=node.prev;}
(node.prev).next=node.next;if(node.next){node.next.prev=node.prev;}
node.next=head;node.prev=null;(head).prev=node;head=node;}
return node.val;}
args=new Array(len);for(i=0;i<len;i++){args[i]=arguments[i];}
node={args:args,val:fn.apply(null,args),};if(head){head.prev=node;node.next=head;}else{tail=node;}
if(size===(options).maxSize){tail=(tail).prev;(tail).next=null;}else{size++;}
head=node;return node.val;}
memoized.clear=function(){head=null;tail=null;size=0;};if(false){}
return memoized;}
module.exports=memize;})});var __webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(cachedModule!==undefined){return cachedModule.exports;}
var module=__webpack_module_cache__[moduleId]={exports:{}};__webpack_modules__[moduleId](module,module.exports,__webpack_require__);return module.exports;}
!function(){__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module['default'];}:function(){return module;};__webpack_require__.d(getter,{a:getter});return getter;};}();!function(){__webpack_require__.d=function(exports,definition){for(var key in definition){if(__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)){Object.defineProperty(exports,key,{enumerable:true,get:definition[key]});}}};}();!function(){__webpack_require__.o=function(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop);}}();!function(){__webpack_require__.r=function(exports){if(typeof Symbol!=='undefined'&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});}
Object.defineProperty(exports,'__esModule',{value:true});};}();var __webpack_exports__={};!function(){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{"PluginArea":function(){return plugin_area;},"getPlugin":function(){return getPlugin;},"getPlugins":function(){return getPlugins;},"registerPlugin":function(){return registerPlugin;},"unregisterPlugin":function(){return unregisterPlugin;},"withPluginContext":function(){return withPluginContext;}});;var external_wp_element_namespaceObject=window["wp"]["element"];;var external_lodash_namespaceObject=window["lodash"];var memize=__webpack_require__(9756);var memize_default=__webpack_require__.n(memize);;var external_wp_hooks_namespaceObject=window["wp"]["hooks"];;function _extends(){_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}
return target;};return _extends.apply(this,arguments);};var external_wp_compose_namespaceObject=window["wp"]["compose"];;const{Consumer,Provider}=(0,external_wp_element_namespaceObject.createContext)({name:null,icon:null});const withPluginContext=mapContextToProps=>(0,external_wp_compose_namespaceObject.createHigherOrderComponent)(OriginalComponent=>{return props=>(0,external_wp_element_namespaceObject.createElement)(Consumer,null,context=>(0,external_wp_element_namespaceObject.createElement)(OriginalComponent,_extends({},props,mapContextToProps(context,props))));},'withPluginContext');;class PluginErrorBoundary extends external_wp_element_namespaceObject.Component{constructor(props){super(props);this.state={hasError:false};}
static getDerivedStateFromError(){return{hasError:true};}
componentDidCatch(error){const{name,onError}=this.props;if(onError){onError(name,error);}}
render(){if(!this.state.hasError){return this.props.children;}
return null;}};var external_wp_primitives_namespaceObject=window["wp"]["primitives"];;const plugins=(0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.Path,{d:"M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"}));var library_plugins=(plugins);;const api_plugins={};function registerPlugin(name,settings){if(typeof settings!=='object'){console.error('No settings object provided!');return null;}
if(typeof name!=='string'){console.error('Plugin name must be string.');return null;}
if(!/^[a-z][a-z0-9-]*$/.test(name)){console.error('Plugin name must include only lowercase alphanumeric characters or dashes, and start with a letter. Example: "my-plugin".');return null;}
if(api_plugins[name]){console.error(`Plugin "${name}" is already registered.`);}
settings=(0,external_wp_hooks_namespaceObject.applyFilters)('plugins.registerPlugin',settings,name);const{render,scope}=settings;if(!(0,external_lodash_namespaceObject.isFunction)(render)){console.error('The "render" property must be specified and must be a valid function.');return null;}
if(scope){if(typeof scope!=='string'){console.error('Plugin scope must be string.');return null;}
if(!/^[a-z][a-z0-9-]*$/.test(scope)){console.error('Plugin scope must include only lowercase alphanumeric characters or dashes, and start with a letter. Example: "my-page".');return null;}}
api_plugins[name]={name,icon:library_plugins,...settings};(0,external_wp_hooks_namespaceObject.doAction)('plugins.pluginRegistered',settings,name);return settings;}
function unregisterPlugin(name){if(!api_plugins[name]){console.error('Plugin "'+name+'" is not registered.');return;}
const oldPlugin=api_plugins[name];delete api_plugins[name];(0,external_wp_hooks_namespaceObject.doAction)('plugins.pluginUnregistered',oldPlugin,name);return oldPlugin;}
function getPlugin(name){return api_plugins[name];}
function getPlugins(scope){return Object.values(api_plugins).filter(plugin=>plugin.scope===scope);};class PluginArea extends external_wp_element_namespaceObject.Component{constructor(){super(...arguments);this.setPlugins=this.setPlugins.bind(this);this.memoizedContext=memize_default()((name,icon)=>{return{name,icon};});this.state=this.getCurrentPluginsState();}
getCurrentPluginsState(){return{plugins:(0,external_lodash_namespaceObject.map)(getPlugins(this.props.scope),_ref=>{let{icon,name,render}=_ref;return{Plugin:render,context:this.memoizedContext(name,icon)};})};}
componentDidMount(){(0,external_wp_hooks_namespaceObject.addAction)('plugins.pluginRegistered','core/plugins/plugin-area/plugins-registered',this.setPlugins);(0,external_wp_hooks_namespaceObject.addAction)('plugins.pluginUnregistered','core/plugins/plugin-area/plugins-unregistered',this.setPlugins);}
componentWillUnmount(){(0,external_wp_hooks_namespaceObject.removeAction)('plugins.pluginRegistered','core/plugins/plugin-area/plugins-registered');(0,external_wp_hooks_namespaceObject.removeAction)('plugins.pluginUnregistered','core/plugins/plugin-area/plugins-unregistered');}
setPlugins(){this.setState(this.getCurrentPluginsState);}
render(){return(0,external_wp_element_namespaceObject.createElement)("div",{style:{display:'none'}},(0,external_lodash_namespaceObject.map)(this.state.plugins,_ref2=>{let{context,Plugin}=_ref2;return(0,external_wp_element_namespaceObject.createElement)(Provider,{key:context.name,value:context},(0,external_wp_element_namespaceObject.createElement)(PluginErrorBoundary,{name:context.name,onError:this.props.onError},(0,external_wp_element_namespaceObject.createElement)(Plugin,null)));}));}}
var plugin_area=(PluginArea);;;}();(window.wp=window.wp||{}).plugins=__webpack_exports__;})();