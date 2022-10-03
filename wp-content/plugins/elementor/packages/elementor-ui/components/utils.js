export const getStyle=(styles,props,type)=>{if(!styles){return '';}
if('string'===typeof styles){return styles;}
const config=props?.theme?.config||{variants:{}},style={shared:'',unique:'',};const themeVariants=Object.keys(config.variants).filter((key)=>config.variants[key]),addStyle=(data,keys=[])=>{if('string'===typeof data&&'unique'!==type){style.shared+=data;return;}
Object.values(keys).forEach((key)=>{const styleObjKey='shared'!==key?'unique':'shared';if(!type||styleObjKey===type){style[styleObjKey]+=data[key]||'';}});};themeVariants.unshift('base');themeVariants.forEach((key)=>{const themeVariant=styles[key];if(themeVariant){addStyle(themeVariant,['shared']);const styledProps=getStyledProps(props);Object.entries(styledProps).forEach(([propName,propValue])=>{const styleData=themeVariant[propName];if(styleData&&propValue){addStyle(styleData,['shared',propValue]);}});}});return style.shared+style.unique;};const getStyledProps=(props)=>{const styledProps={...props};['className','children','tag','as','theme'].forEach((prop)=>delete styledProps[prop]);return styledProps;};