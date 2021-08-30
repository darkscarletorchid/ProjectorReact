(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),a=n(9),r=n.n(a),o=(n(70),n(39)),s=n(20),l=(n(71),n(128)),u=n(127),d=n(120),j=n(123),h=n(126),m=n(124),f=n(125),b=n(4);var x=function(e){return Object(b.jsxs)(d.a,{children:[Object(b.jsx)(j.a,{children:Object(b.jsxs)(m.a,{onClick:function(){e.onSelect(e.item.id)},children:[Object(b.jsx)(f.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.item.title}),Object(b.jsx)(f.a,{variant:"body2",color:"textSecondary",component:"p",children:function(e,t,n){var i=e;if(t){var c=document.createElement("div");c.innerHTML=e,i=c.textContent}return i?i.length>n?i.substring(0,n)+"...":i:""}(e.item.content,e.item.isHtmlContent,100)})]})}),Object(b.jsx)(h.a,{children:Object(b.jsx)(u.a,{variant:"contained",color:"primary",onClick:function(){e.onDelete(e.item.id)},children:"Delete"})})]})},O=n(131);var v,g=function(e){return Object(b.jsxs)(l.a,{container:!0,xs:12,direction:"column",children:[Object(b.jsxs)(l.a,{container:!0,xs:12,direction:"row",justifyContent:"space-between",style:{padding:"1em"},children:[Object(b.jsx)(f.a,{variant:"h4",children:"Note list"}),Object(b.jsx)(u.a,{variant:"contained",color:"primary",onClick:function(){return e.onCreate()},children:"Create new"})]}),Object(b.jsx)(l.a,{item:!0,xs:12,children:e.items&&e.items.map((function(t){return Object(b.jsx)(O.a,{m:.5,children:Object(b.jsx)(x,{item:t,onSelect:e.onSelect,onUpdate:e.onUpdate,onDelete:e.onDelete})})}))})]})},p=n(50),C=n(51),y=function(){function e(){Object(p.a)(this,e),this.key="notesList",this.notesList=void 0,null!=localStorage.getItem(this.key)?this.notesList=JSON.parse(localStorage.getItem(this.key)||""):this.notesList=[]}return Object(C.a)(e,[{key:"getAll",value:function(){return this.notesList}},{key:"get",value:function(e){return this.notesList.find((function(t){return t.id==e}))||null}},{key:"create",value:function(e){e.id=this.notesList.length>0?this.notesList[this.notesList.length-1].id+1:1,this.notesList.push(e),localStorage.setItem(this.key,JSON.stringify(this.notesList))}},{key:"update",value:function(e){var t=this.notesList.findIndex((function(t){return t.id==e.id}));this.notesList[t]=e,localStorage.setItem(this.key,JSON.stringify(this.notesList))}},{key:"delete",value:function(e){var t=this.notesList.findIndex((function(t){return t.id==e}));this.notesList.splice(t,1),localStorage.setItem(this.key,JSON.stringify(this.notesList))}}]),e}();!function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.Create=2]="Create",e[e.Edit=3]="Edit"}(v||(v={}));var S=n(52);var L=function(e){var t,n,c=["script","iframe"],a={replace:function(e){if(-1!=c.indexOf(e.name))return Object(b.jsx)("div",{})}};return Object(i.useEffect)((function(){document.querySelectorAll("a").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=window.confirm("Are you sure that you want to follow this link?"),n=e.currentTarget.getAttribute("href");t&&n&&window.open(n,"_blank")}))}))}),[e.selectedItem]),Object(b.jsxs)(l.a,{xs:12,container:!0,direction:"column",children:[Object(b.jsx)(O.a,{m:2,children:Object(b.jsx)(f.a,{align:"left",variant:"h4",children:e.selectedItem.title})}),Object(b.jsx)(O.a,{m:2,textAlign:"left",children:(t=e.selectedItem.content,n=e.selectedItem.isHtmlContent,n?Object(S.a)(t,a):t)})]})},k=n(129);var w=function(e){var t=Object(i.useState)({title:"",content:""}),n=Object(s.a)(t,2),c=n[0],a=n[1],r=Object(i.useState)(!1),o=Object(s.a)(r,2),d=o[0],j=o[1];return Object(b.jsxs)(l.a,{container:!0,spacing:3,xs:12,alignItems:"flex-start",children:[Object(b.jsx)(l.a,{item:!0,xs:12,children:Object(b.jsx)(O.a,{m:2,children:Object(b.jsx)(f.a,{variant:"h4",children:"Create new note"})})}),Object(b.jsx)(l.a,{item:!0,xs:12,children:Object(b.jsxs)("form",{autoComplete:"off",children:[Object(b.jsxs)(l.a,{item:!0,xs:12,style:{margin:"1em"},children:[Object(b.jsx)(k.a,{id:"title",label:"Title",type:"text",variant:"outlined",fullWidth:!0,error:d,helperText:d?"You have reached max title length":"",onChange:function(e){e.target.value.length>50?j(!0):j(!1),c.title=e.target.value,a(c)}})," "]}),Object(b.jsx)(l.a,{item:!0,xs:12,style:{margin:"1em"},children:Object(b.jsx)(k.a,{id:"content",label:"Content",variant:"outlined",fullWidth:!0,minRows:20,multiline:!0,maxRows:20,onChange:function(e){var t=function(e){var t=document.createRange().createContextualFragment(e);return t.querySelectorAll("*").forEach((function(e){var t;return null===e||void 0===e||null===(t=e.parentNode)||void 0===t?void 0:t.removeChild(e)})),!(t.textContent||"").trim()}(e.target.value);"insertFromPaste"===e.nativeEvent.inputType&&t&&(c.isHtmlContent=!0),c.content=e.target.value,a(c)}})}),Object(b.jsxs)(l.a,{item:!0,xs:12,justifyContent:"flex-end",container:!0,children:[Object(b.jsx)(u.a,{variant:"contained",style:{margin:"1em"},color:"primary",disabled:d,onClick:function(){return e.onCreate(c)},children:"Create"}),Object(b.jsx)(u.a,{variant:"contained",style:{margin:"1em"},onClick:e.onCancel,children:"Cancel"})]})]})})]})},I=new y;var N=function(){var e=Object(i.useState)(v.None),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(I.getAll()),r=Object(s.a)(a,2),u=r[0],d=r[1],j=Object(i.useState)({}),h=Object(s.a)(j,2),m=h[0],x=h[1];return Object(b.jsx)(O.a,{className:"App",m:3,children:Object(b.jsxs)(l.a,{container:!0,spacing:3,alignItems:"flex-start",children:[Object(b.jsxs)(l.a,{item:!0,xs:6,children:[n===v.None&&Object(b.jsx)(O.a,{m:2,children:Object(b.jsx)(f.a,{variant:"h4",children:"Let's create a note"})}),n===v.View&&Object(b.jsx)(L,{selectedItem:m}),n===v.Create&&Object(b.jsx)(w,{onCancel:function(){c(v.None),x({})},onCreate:function(e){c(v.None),I.create(e),d(Object(o.a)(I.getAll()))}})]}),Object(b.jsx)(l.a,{item:!0,xs:6,children:Object(b.jsx)(g,{items:u,onDelete:function(e){I.delete(e),d(Object(o.a)(I.getAll())),m.id===e&&c(v.None)},onSelect:function(e){c(v.View);var t=I.get(e);t&&x(t)},onCreate:function(){c(v.Create)},onUpdate:function(e){c(v.Edit);var t=I.get(e);t&&x(t)}})})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,134)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),A()}},[[90,1,2]]]);
//# sourceMappingURL=main.26c0d93d.chunk.js.map