(this["webpackJsonpdisplaying-github-repository"]=this["webpackJsonpdisplaying-github-repository"]||[]).push([[0],{66:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(8),a=n.n(o),s=(n(66),n(27)),i=n(28),u=n(34),l=n(33),d=n(31),j=n(109),p=n(108),b=n(112),h=n(113),m=n(110),f=n(111),O=function(e){return{PENDING:"".concat(e,"_PENDING"),SUCCESS:"".concat(e,"_SUCCESS"),ERROR:"".concat(e,"_ERROR")}},g=function(e){return{pending:function(){return{type:e.PENDING}},success:function(t){return{type:e.SUCCESS,payload:t}},error:function(t){return{type:e.ERROR,payload:t}}}},y=O("GET_REPOSITORY"),R=g(y),v=O("RESET_REPOSITORY"),x=g(v);var S=n(103),E=n(107),C=n(4),I=n(7),N=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){console.log("masuk");var e=this.props,t=e.repository,n=e.classes;return Object(I.jsx)(S.a,{className:n.root,children:Object(I.jsxs)(E.a,{children:[Object(I.jsx)(p.a,{className:n.title,color:"primary",gutterBottom:!0,children:t.name}),Object(I.jsx)(p.a,{className:n.pos,color:"textSecondary",children:t.ssh_url}),Object(I.jsx)(p.a,{variant:"body2",component:"p",children:t.language})]})})}}]),n}(c.a.Component),T=Object(C.a)((function(e){return{root:{minWidth:350},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:18},pos:{fontSize:10,marginBottom:12}}}))(N),U=n(51),D=n.n(U),B=(n(73),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).errorAlert=function(e){"object"===typeof e&&(e=e.join(" ")),D.a.fire({title:"Error",text:e,icon:"error",showConfirmButton:!1,timer:3e3})},e.submited=function(t){t.preventDefault();var n=e.props.getRepositoryUser,r=document.getElementById("user-id");if(r&&r instanceof HTMLInputElement){var c=r.value;c?n(c):e.errorAlert("Please fill in.")}},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.userRepositoryData,n=e.errorRepositoryData,r=e.resetRepositoryUser,c=e.classes;return Object(I.jsx)("div",{className:"App",children:Object(I.jsxs)(j.a,{spacing:5,container:!0,direction:"column",justify:"center",alignItems:"center",children:[Object(I.jsxs)(j.a,{item:!0,children:[Object(I.jsx)(p.a,{color:"primary",gutterBottom:!0,variant:"h3",children:"ReactJs Technical Test"}),Object(I.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:this.submited,children:[Object(I.jsx)(b.a,{className:c.textField,id:"user-id",label:"Github User Id"}),Object(I.jsx)(h.a,{variant:"contained",color:"primary",className:c.button,startIcon:Object(I.jsx)(m.a,{}),onClick:this.submited,children:"Search"}),Object(I.jsx)(h.a,{variant:"contained",color:"secondary",className:c.button,startIcon:Object(I.jsx)(f.a,{}),onClick:function(){document.getElementById("user-id").value="",r()},children:"Reset"})]})]}),Object(I.jsxs)(j.a,{container:!0,spacing:2,direction:"row",alignItems:"center",justify:"space-evenly",children:[t?t.map((function(e,t){return Object(I.jsx)(j.a,{item:!0,pacing:3,children:Object(I.jsx)(T,{repository:e})},t)})):null,n?Object(I.jsx)(p.a,{className:c.title,color:"textSecondary",gutterBottom:!0,children:n}):null]})]})})}}]),n}(c.a.Component)),P={getRepositoryUser:function(e){return function(t){t(R.pending()),fetch("".concat("https://api.github.com/","users/").concat(e,"/repos"),{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Request-Headers":"*","Access-Control-Request-Method":"*"}}).then((function(e){return e.json()})).then((function(e){console.log(e),e.message||0==e.length?t(R.error({msg:e.message?e.message:"Undefined"})):t(R.success(e))})).catch((function(e){t(R.error(e))}))}},resetRepositoryUser:function(){return function(e){e(x.success())}}},k=Object(C.a)((function(e){return{button:{margin:e.spacing(1)},title:{marginTop:15,fontSize:14},textField:{width:300}}}))(Object(d.b)((function(e){var t=e.data;return{userRepositoryData:t&&t.data,errorRepositoryData:t&&t.error}}),P)(B)),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,115)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),o(e),a(e)}))},G=n(18),A=n(52),F=n(14),_=Object(G.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case y.PENDING:return Object(F.a)(Object(F.a)({},e),{},{error:"",data:""});case y.SUCCESS:return Object(F.a)(Object(F.a)({},e),{},{data:n});case y.ERROR:return Object(F.a)(Object(F.a)({},e),{},{error:n.msg});case v.SUCCESS:return Object(F.a)(Object(F.a)({},e),{},{data:""});default:return e}}});a.a.render(Object(I.jsx)(d.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(G.d)(_,e,Object(G.a)(A.a))}(),children:Object(I.jsx)(k,{})}),document.getElementById("root")),w()}},[[74,1,2]]]);
//# sourceMappingURL=main.4e620d5a.chunk.js.map