(function(){"use strict";var __webpack_require__={};!function(){__webpack_require__.d=function(exports,definition){for(var key in definition){if(__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)){Object.defineProperty(exports,key,{enumerable:true,get:definition[key]});}}};}();!function(){__webpack_require__.o=function(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop);}}();!function(){__webpack_require__.r=function(exports){if(typeof Symbol!=='undefined'&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});}
Object.defineProperty(exports,'__esModule',{value:true});};}();var __webpack_exports__={};__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{"ReusableBlocksMenuItems":function(){return reusable_blocks_menu_items;},"store":function(){return store;}});var actions_namespaceObject={};__webpack_require__.r(actions_namespaceObject);__webpack_require__.d(actions_namespaceObject,{"__experimentalConvertBlockToStatic":function(){return __experimentalConvertBlockToStatic;},"__experimentalConvertBlocksToReusable":function(){return __experimentalConvertBlocksToReusable;},"__experimentalDeleteReusableBlock":function(){return __experimentalDeleteReusableBlock;},"__experimentalSetEditingReusableBlock":function(){return __experimentalSetEditingReusableBlock;}});var selectors_namespaceObject={};__webpack_require__.r(selectors_namespaceObject);__webpack_require__.d(selectors_namespaceObject,{"__experimentalIsEditingReusableBlock":function(){return __experimentalIsEditingReusableBlock;}});;var external_wp_data_namespaceObject=window["wp"]["data"];;var external_lodash_namespaceObject=window["lodash"];;var external_wp_blockEditor_namespaceObject=window["wp"]["blockEditor"];;var external_wp_blocks_namespaceObject=window["wp"]["blocks"];;var external_wp_i18n_namespaceObject=window["wp"]["i18n"];;const __experimentalConvertBlockToStatic=clientId=>_ref=>{let{registry}=_ref;const oldBlock=registry.select(external_wp_blockEditor_namespaceObject.store).getBlock(clientId);const reusableBlock=registry.select('core').getEditedEntityRecord('postType','wp_block',oldBlock.attributes.ref);const newBlocks=(0,external_wp_blocks_namespaceObject.parse)((0,external_lodash_namespaceObject.isFunction)(reusableBlock.content)?reusableBlock.content(reusableBlock):reusableBlock.content);registry.dispatch(external_wp_blockEditor_namespaceObject.store).replaceBlocks(oldBlock.clientId,newBlocks);};const __experimentalConvertBlocksToReusable=(clientIds,title)=>async _ref2=>{let{registry,dispatch}=_ref2;const reusableBlock={title:title||(0,external_wp_i18n_namespaceObject.__)('Untitled Reusable block'),content:(0,external_wp_blocks_namespaceObject.serialize)(registry.select(external_wp_blockEditor_namespaceObject.store).getBlocksByClientId(clientIds)),status:'publish'};const updatedRecord=await registry.dispatch('core').saveEntityRecord('postType','wp_block',reusableBlock);const newBlock=(0,external_wp_blocks_namespaceObject.createBlock)('core/block',{ref:updatedRecord.id});registry.dispatch(external_wp_blockEditor_namespaceObject.store).replaceBlocks(clientIds,newBlock);dispatch.__experimentalSetEditingReusableBlock(newBlock.clientId,true);};const __experimentalDeleteReusableBlock=id=>async _ref3=>{let{registry}=_ref3;const reusableBlock=registry.select('core').getEditedEntityRecord('postType','wp_block',id);if(!reusableBlock){return;}
const allBlocks=registry.select(external_wp_blockEditor_namespaceObject.store).getBlocks();const associatedBlocks=allBlocks.filter(block=>(0,external_wp_blocks_namespaceObject.isReusableBlock)(block)&&block.attributes.ref===id);const associatedBlockClientIds=associatedBlocks.map(block=>block.clientId);if(associatedBlockClientIds.length){registry.dispatch(external_wp_blockEditor_namespaceObject.store).removeBlocks(associatedBlockClientIds);}
await registry.dispatch('core').deleteEntityRecord('postType','wp_block',id);};function __experimentalSetEditingReusableBlock(clientId,isEditing){return{type:'SET_EDITING_REUSABLE_BLOCK',clientId,isEditing};};function isEditingReusableBlock(){let state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};let action=arguments.length>1?arguments[1]:undefined;if((action===null||action===void 0?void 0:action.type)==='SET_EDITING_REUSABLE_BLOCK'){return{...state,[action.clientId]:action.isEditing};}
return state;}
var reducer=((0,external_wp_data_namespaceObject.combineReducers)({isEditingReusableBlock}));;function __experimentalIsEditingReusableBlock(state,clientId){return state.isEditingReusableBlock[clientId];};const STORE_NAME='core/reusable-blocks';const store=(0,external_wp_data_namespaceObject.createReduxStore)(STORE_NAME,{actions:actions_namespaceObject,reducer:reducer,selectors:selectors_namespaceObject});(0,external_wp_data_namespaceObject.register)(store);;var external_wp_element_namespaceObject=window["wp"]["element"];;var external_wp_components_namespaceObject=window["wp"]["components"];;var external_wp_primitives_namespaceObject=window["wp"]["primitives"];;const symbol=(0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,external_wp_element_namespaceObject.createElement)(external_wp_primitives_namespaceObject.Path,{d:"M21.3 10.8l-5.6-5.6c-.7-.7-1.8-.7-2.5 0l-5.6 5.6c-.7.7-.7 1.8 0 2.5l5.6 5.6c.3.3.8.5 1.2.5s.9-.2 1.2-.5l5.6-5.6c.8-.7.8-1.9.1-2.5zm-1 1.4l-5.6 5.6c-.1.1-.3.1-.4 0l-5.6-5.6c-.1-.1-.1-.3 0-.4l5.6-5.6s.1-.1.2-.1.1 0 .2.1l5.6 5.6c.1.1.1.3 0 .4zm-16.6-.4L10 5.5l-1-1-6.3 6.3c-.7.7-.7 1.8 0 2.5L9 19.5l1.1-1.1-6.3-6.3c-.2 0-.2-.2-.1-.3z"}));var library_symbol=(symbol);;var external_wp_notices_namespaceObject=window["wp"]["notices"];;var external_wp_coreData_namespaceObject=window["wp"]["coreData"];;function ReusableBlockConvertButton(_ref){let{clientIds,rootClientId}=_ref;const[isModalOpen,setIsModalOpen]=(0,external_wp_element_namespaceObject.useState)(false);const[title,setTitle]=(0,external_wp_element_namespaceObject.useState)('');const canConvert=(0,external_wp_data_namespaceObject.useSelect)(select=>{var _getBlocksByClientId;const{canUser}=select(external_wp_coreData_namespaceObject.store);const{getBlocksByClientId,canInsertBlockType}=select(external_wp_blockEditor_namespaceObject.store);const blocks=(_getBlocksByClientId=getBlocksByClientId(clientIds))!==null&&_getBlocksByClientId!==void 0?_getBlocksByClientId:[];const isReusable=blocks.length===1&&blocks[0]&&(0,external_wp_blocks_namespaceObject.isReusableBlock)(blocks[0])&&!!select(external_wp_coreData_namespaceObject.store).getEntityRecord('postType','wp_block',blocks[0].attributes.ref);const _canConvert=!isReusable&&canInsertBlockType('core/block',rootClientId)&&blocks.every(block=>!!block&&block.isValid&&(0,external_wp_blocks_namespaceObject.hasBlockSupport)(block.name,'reusable',true))&&!!canUser('create','blocks');return _canConvert;},[clientIds]);const{__experimentalConvertBlocksToReusable:convertBlocksToReusable}=(0,external_wp_data_namespaceObject.useDispatch)(store);const{createSuccessNotice,createErrorNotice}=(0,external_wp_data_namespaceObject.useDispatch)(external_wp_notices_namespaceObject.store);const onConvert=(0,external_wp_element_namespaceObject.useCallback)(async function(reusableBlockTitle){try{await convertBlocksToReusable(clientIds,reusableBlockTitle);createSuccessNotice((0,external_wp_i18n_namespaceObject.__)('Reusable block created.'),{type:'snackbar'});}catch(error){createErrorNotice(error.message,{type:'snackbar'});}},[clientIds]);if(!canConvert){return null;}
return(0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.BlockSettingsMenuControls,null,_ref2=>{let{onClose}=_ref2;return(0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment,null,(0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.MenuItem,{icon:library_symbol,onClick:()=>{setIsModalOpen(true);}},(0,external_wp_i18n_namespaceObject.__)('Add to Reusable blocks')),isModalOpen&&(0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Modal,{title:(0,external_wp_i18n_namespaceObject.__)('Create Reusable block'),closeLabel:(0,external_wp_i18n_namespaceObject.__)('Close'),onRequestClose:()=>{setIsModalOpen(false);setTitle('');},overlayClassName:"reusable-blocks-menu-items__convert-modal"},(0,external_wp_element_namespaceObject.createElement)("form",{onSubmit:event=>{event.preventDefault();onConvert(title);setIsModalOpen(false);setTitle('');onClose();}},(0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.TextControl,{label:(0,external_wp_i18n_namespaceObject.__)('Name'),value:title,onChange:setTitle}),(0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Flex,{className:"reusable-blocks-menu-items__convert-modal-actions",justify:"flex-end"},(0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.FlexItem,null,(0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button,{variant:"tertiary",onClick:()=>{setIsModalOpen(false);setTitle('');}},(0,external_wp_i18n_namespaceObject.__)('Cancel'))),(0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.FlexItem,null,(0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.Button,{variant:"primary",type:"submit"},(0,external_wp_i18n_namespaceObject.__)('Save')))))));});};var external_wp_url_namespaceObject=window["wp"]["url"];;function ReusableBlocksManageButton(_ref){let{clientId}=_ref;const{canRemove,isVisible}=(0,external_wp_data_namespaceObject.useSelect)(select=>{const{getBlock,canRemoveBlock}=select(external_wp_blockEditor_namespaceObject.store);const{canUser}=select(external_wp_coreData_namespaceObject.store);const reusableBlock=getBlock(clientId);return{canRemove:canRemoveBlock(clientId),isVisible:!!reusableBlock&&(0,external_wp_blocks_namespaceObject.isReusableBlock)(reusableBlock)&&!!canUser('update','blocks',reusableBlock.attributes.ref)};},[clientId]);const{__experimentalConvertBlockToStatic:convertBlockToStatic}=(0,external_wp_data_namespaceObject.useDispatch)(store);if(!isVisible){return null;}
return(0,external_wp_element_namespaceObject.createElement)(external_wp_blockEditor_namespaceObject.BlockSettingsMenuControls,null,(0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.MenuItem,{href:(0,external_wp_url_namespaceObject.addQueryArgs)('edit.php',{post_type:'wp_block'})},(0,external_wp_i18n_namespaceObject.__)('Manage Reusable blocks')),canRemove&&(0,external_wp_element_namespaceObject.createElement)(external_wp_components_namespaceObject.MenuItem,{onClick:()=>convertBlockToStatic(clientId)},(0,external_wp_i18n_namespaceObject.__)('Convert to regular blocks')));}
var reusable_blocks_manage_button=(ReusableBlocksManageButton);;function ReusableBlocksMenuItems(_ref){let{clientIds,rootClientId}=_ref;return(0,external_wp_element_namespaceObject.createElement)(external_wp_element_namespaceObject.Fragment,null,(0,external_wp_element_namespaceObject.createElement)(ReusableBlockConvertButton,{clientIds:clientIds,rootClientId:rootClientId}),clientIds.length===1&&(0,external_wp_element_namespaceObject.createElement)(reusable_blocks_manage_button,{clientId:clientIds[0]}));}
var reusable_blocks_menu_items=((0,external_wp_data_namespaceObject.withSelect)(select=>{const{getSelectedBlockClientIds}=select(external_wp_blockEditor_namespaceObject.store);return{clientIds:getSelectedBlockClientIds()};})(ReusableBlocksMenuItems));;;(window.wp=window.wp||{}).reusableBlocks=__webpack_exports__;})();