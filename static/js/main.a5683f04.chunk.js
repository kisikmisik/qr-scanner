(this["webpackJsonpqr-code"]=this["webpackJsonpqr-code"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var s=n(2),c=n.n(s),a=n(13),o=n.n(a),r=(n(25),n(14)),i=n(15),u=n(20),d=n(19),l=(n(26),n(16)),h=n.n(l),f=n(18),g=n.n(f),j=n(1),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={result:null,infoMessage:"Scanning qr-code..."},e.handleScan=function(t){t&&t!==e.state.result&&e.setState({result:t})},e.handleError=function(e){console.error(e)},e.sendQrCode=function(){e.state.result?g.a.post("http://hq.apps-garden.com:2345/api/cavca-token",{cavcaToken:e.state.result}).then((function(t){e.setState({infoMessage:"QR-code successfully sent."}),setTimeout((function(){e.setState({infoMessage:"Scanning qr-code..."})}),5e3)}),(function(t){e.setState({infoMessage:"Error occured while sending qr-code."}),setTimeout((function(){e.setState({infoMessage:"Scanning qr-code..."})}),5e3)})):(e.setState({infoMessage:"No QR-code found"}),setTimeout((function(){e.setState({infoMessage:"Scanning qr-code..."})}),5e3))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)("p",{children:this.state.infoMessage})}),Object(j.jsxs)("main",{children:[Object(j.jsx)(h.a,{delay:300,onError:this.handleError,onScan:this.handleScan,facingMode:"environment",style:{width:"70%"}}),Object(j.jsx)("p",{className:"result",children:this.state.result||"No result yet"}),Object(j.jsx)("button",{onClick:function(){e.sendQrCode()},className:"btn",children:"Send qr-code"})]})]})}}]),n}(c.a.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),a(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),b()}},[[54,1,2]]]);
//# sourceMappingURL=main.a5683f04.chunk.js.map