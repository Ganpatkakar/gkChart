!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}({4:function(t,e){t.exports=function(){var t,e,n=(t=document.createElement("canvas"),{canvas:!!(e=t.getContext("2d")),imageData:!!e.getImageData,dataURL:!!t.toDataURL,btoa:!!window.btoa});function r(t,e,n){var r=t.width,a=t.height;null==e&&(e=r),null==n&&(n=a);var o=document.createElement("canvas"),i=o.getContext("2d");return o.width=e,o.height=n,i.drawImage(t,0,0,r,a,0,0,e,n),o}function a(t,e,n,a){return(t=r(t,n,a)).toDataURL(e)}function o(t){document.location.href=t}function i(t){return"image/"+(t=t.toLowerCase().replace(/jpg/i,"jpeg")).match(/png|jpeg|bmp|gif/)[0]}function u(t){if(!window.btoa)throw"btoa undefined";var e="";if("string"==typeof t)e=t;else for(var n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function f(t){var e=t.width,n=t.height;return t.getContext("2d").getImageData(0,0,e,n)}function c(t,e){return"data:"+e+";base64,"+t}var d=function(t){var e=t.width,n=t.height,r=e*n*3,a=r+54,o=[66,77,255&a,a>>8&255,a>>16&255,a>>24&255,0,0,0,0,54,0,0,0],i=[40,0,0,0,255&e,e>>8&255,e>>16&255,e>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255,1,0,24,0,0,0,0,0,255&r,r>>8&255,r>>16&255,r>>24&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],f=(4-3*e%4)%4,c=t.data,d="",l=e<<2,g=n,s=String.fromCharCode;do{for(var p=l*(g-1),m="",v=0;v<e;v++){var b=v<<2;m+=s(c[p+b+2])+s(c[p+b+1])+s(c[p+b])}for(var h=0;h<f;h++)m+=String.fromCharCode(0);d+=m}while(--g);return u(o.concat(i))+u(d)},l=function(t,e,u,l){if(n.canvas&&n.dataURL)if("string"==typeof t&&(t=document.getElementById(t)),null==l&&(l="png"),l=i(l),/bmp/.test(l)){var g=f(r(t,e,u));o(c(d(g),"image/octet-stream"))}else{o(a(t,l,e,u).replace(l,"image/octet-stream"))}};return{saveAsImage:l,saveAsPNG:function(t,e,n){return l(t,e,n,"png")},saveAsJPEG:function(t,e,n){return l(t,e,n,"jpeg")}}}}});