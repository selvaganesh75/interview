(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[5],{542:function(e,t,n){"use strict";n.r(t);var a=n(114),r=n(115),o=n(171),l=n(170),i=n(2),c=n.n(i),s=n(169),u=function(e){var t=e.heading,n=e.content,a=e.onClose,r=void 0===a?function(){}:a;return c.a.createElement("div",{className:"border-bottom p-2 animated fadeIn"},c.a.createElement("button",{type:"button",className:"close float-right m-1 p-1",onClick:r},c.a.createElement("span",null,"\xd7")),c.a.createElement("h4",{className:"text-dark"},t),c.a.createElement("p",{className:"text-muted"},n))},m=n(433);function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(c){r=!0,o=c}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=function(e){var t=e.handleSubmit,n=void 0===t?function(){}:t,a=f(Object(i.useState)(""),2),r=a[0],o=a[1],l=f(Object(i.useState)(""),2),s=l[0],u=l[1],m=window.innerHeight>600?10:4,d=function(e){if(e.preventDefault(),!r||!s)return alert("All field required...");n({title:r,content:s}),o(""),u("")};return c.a.createElement("form",{className:"myForm animated fadeIn",onSubmit:d},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"title",className:"text-dark"},"Title:"),c.a.createElement("input",{className:"form-control input-lg",type:"text",name:"title",id:"text",placeholder:"",onChange:function(e){var t=e.target;return o(t.value)},value:r})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"text-area",className:"text-dark"},"Body:"),c.a.createElement("textarea",{rows:m,className:"form-control input-lg",name:"text-area",placeholder:"",onChange:function(e){var t=e.target;return u(t.value)},value:s})),c.a.createElement("div",{className:"form-group d-flex justify-content-end"},c.a.createElement("input",{type:"submit",name:"submit",className:"btn btn-primary btn-lg ",onClick:d,value:"Save"})))},v=function(e){var t=e.children;return c.a.createElement("div",{className:"bg-secondary py-3 text-white"},t)},h=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={showNote:!1},e.rootEl=Object(i.createRef)(null),e.addNote=function(t){var n=t.title,a=t.content,r=e.props.notes;if(console.log(r,e.props),Array.isArray(r)){var o=r.slice();o.unshift({title:n,content:a,key:Date.now()}),e.props.addNote(o)}},e.removeNote=function(t){var n=e.props.notes;if(Array.isArray(n)){var a=n.slice();a=a.filter((function(e){return e.key!==t})),e.props.removeNote(a)}},e.toggleAddNote=function(){e.setState({showNote:!e.state.showNote})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this.rootEl;e&&e.current&&(e.current.style.height=window.innerHeight-e.current.getBoundingClientRect().top+"px")}},{key:"render",value:function(){var e=this,t=this.props.notes;return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(v,null,"G notes"),c.a.createElement("div",{className:"row d-flex ",ref:this.rootEl},c.a.createElement("div",{className:"col-sm-4 border overflow-auto"},t.length?t.map((function(t){return c.a.createElement(u,{heading:t.title,content:t.content,onClose:function(){return e.removeNote(t.key)}})})):c.a.createElement("div",{className:"d-flex justify-content-center align-items-center text-dark h-100"},"No notes available")),c.a.createElement("div",{className:"col-sm-8 p-4"},c.a.createElement("div",{className:" mt-2 form-group d-flex justify-content-end"},c.a.createElement("input",{type:"submit",name:"submit",className:"btn btn-outline-secondary ",onClick:this.toggleAddNote,value:this.state.showNote?"Hide note":"+ Add Note"})),this.state.showNote?c.a.createElement(p,{handleSubmit:this.addNote}):c.a.createElement("div",{className:"d-flex justify-content-center align-items-center text-dark h-100"},"Create Notes"))))}}]),n}(i.Component),y={addNote:m.a.addNote,removeNote:m.a.removeNote};t.default=Object(s.b)((function(e){return e.main}),y)(h)}}]);
//# sourceMappingURL=5.718b86c6.chunk.js.map