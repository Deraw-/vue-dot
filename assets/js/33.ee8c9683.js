(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{341:function(n,a,e){"use strict";function r(n){for(var a=arguments,e=1;e<arguments.length;e++)for(var r in arguments[e])n[r]=a[e][r];return n}var o={functional:!0,props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},render:function(n,a){var e=a.props.code||(a.children&&a.children.length>0?a.children[0].text:""),o=a.props.inline,s=a.props.language,t=Prism.languages[s],i="language-"+s;return o?n("code",r({},a.data,{class:[a.data.class,i],domProps:r({},a.data.domProps,{innerHTML:Prism.highlight(e,t)})})):n("pre",r({},a.data,{class:[a.data.class,i]}),[n("code",{class:i,domProps:{innerHTML:Prism.highlight(e,t)}})])}};n.exports=o}}]);