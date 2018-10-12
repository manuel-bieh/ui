function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}import React from'react';import classNames from'classnames';import css from'./Grid.module.css';// import css from 'css/layout/Grid.scss';
var Column=/*#__PURE__*/function(_React$PureComponent){_inherits(Column,_React$PureComponent);function Column(){_classCallCheck(this,Column);return _possibleConstructorReturn(this,_getPrototypeOf(Column).apply(this,arguments));}_createClass(Column,[{key:"render",value:function render(){var _classNames,_classNames2;var columnClassName=this.context.columnClassName;var _this$props=this.props,alignItems=_this$props.alignItems,box=_this$props.box,className=_this$props.className,children=_this$props.children,justifyContent=_this$props.justifyContent,_this$props$tagName=_this$props.tagName,TagName=_this$props$tagName===void 0?'div':_this$props$tagName,textAlign=_this$props.textAlign,props=_objectWithoutProperties(_this$props,["alignItems","box","className","children","justifyContent","tagName","textAlign"]);var _props$xs=props.xs,xs=_props$xs===void 0?12:_props$xs,sm=props.sm,md=props.md,lg=props.lg,xl=props.xl;var padXs=props['pad-xs'],padSm=props['pad-sm'],padMd=props['pad-md'],padLg=props['pad-lg'],padXl=props['pad-xl'];var sizeClass=classNames((_classNames={},_defineProperty(_classNames,css["colXs".concat(xs)],xs),_defineProperty(_classNames,css["colSm".concat(sm)],sm),_defineProperty(_classNames,css["colMd".concat(md)],md),_defineProperty(_classNames,css["colLg".concat(lg)],lg),_defineProperty(_classNames,css["colXl".concat(xl)],xl),_classNames));var padClass=classNames((_classNames2={},_defineProperty(_classNames2,css["colXsPad".concat(padXs)],typeof padXs!=='undefined'),_defineProperty(_classNames2,css["colSmPad".concat(padSm)],typeof padSm!=='undefined'),_defineProperty(_classNames2,css["colMdPad".concat(padMd)],typeof padMd!=='undefined'),_defineProperty(_classNames2,css["colLgPad".concat(padLg)],typeof padLg!=='undefined'),_defineProperty(_classNames2,css["colXlPad".concat(padXl)],typeof padXl!=='undefined'),_classNames2));return React.createElement(TagName,{className:classNames(css.col,sizeClass,padClass,columnClassName,textAlign&&css["textAlign".concat(textAlign.charAt(0).toUpperCase()).concat(textAlign.slice(1))],alignItems&&css["alignItems".concat(alignItems)],justifyContent&&css["justifyContent".concat(justifyContent)],box&&css.box,className)},children);}}]);return Column;}(React.PureComponent);export{Column as default};