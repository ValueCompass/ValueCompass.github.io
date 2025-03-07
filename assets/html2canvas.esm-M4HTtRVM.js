import{bF as Oh,v as Ph,bG as Gh,k as la,l as vo,bv as fc,d as Nr,a4 as po,s as ua,r as pt,B as YA,n as mo,aO as hc,a as dc,c as gc,G as vc,u as AA,H as Vh,I as pc,aW as ca,bH as Kh,bI as zh,z as Cn,o as mc,aP as kh,h as He,W as Qi,bJ as Wh,b7 as Xh,a0 as Yh,bp as Li,a8 as Zh,E as bs,bK as Jh,aV as Xo,T as jh,m as qh,aR as $h,bL as Yo,a9 as ed,ac as td,L as Ad,a2 as rd,P as nd,J as id,ab as ad,bM as sd}from"./index-DbUWBpCz.js";import{t as _o,U as _c}from"./base-BXyXsCXi.js";import{f as od}from"./vnode-DyAxa56f.js";import{e as ld}from"./common-Bo2YOXD3.js";import{c as ud,a as cd,e as fd,g as hd,m as dd,A as gd,b as vd,n as pd,M as Tr,u as et,d as md,f as _d,h as Bd,j as Xt,k as Zo,l as wd,L as yd,p as Bc,R as wc,o as xd,r as Qs,q as Yt,s as Cd,t as Ed,v as Td,w as Fd,Z as Ud,C as Hr,x as he,y as SA,z as Sd,B as yc,D as Oi,E as Pi,F as Hn,G as xc,H as Cc,I as Ec,J as fa,K as ha,O as bd,N as Qd,P as Ld,Q as Ls,S as On,T as Zt,U as Bo,V as Id,W as Dd,X as Jo,Y as Md,_ as Rd,$ as Nd,a0 as Br,a1 as jo,a2 as Hd,a3 as Od,a4 as Pd,a5 as Tc,a6 as Nt,a7 as Ht,a8 as Gd,a9 as Vd,aa as Xn,ab as Kd,ac as zd,ad as Fc,ae as kd,af as Wd,ag as qo,ah as $o,ai as el}from"./index-UsLizYbu.js";const _A=e=>Oh(e),Xd=(e,t,A)=>od(e.subTree).filter(i=>{var a;return Gh(i)&&((a=i.type)==null?void 0:a.name)===t&&!!i.component}).map(i=>i.component.uid).map(i=>A[i]).filter(i=>!!i),Yd=(e,t)=>{const A={},r=Ph([]);return{children:r,addChild:a=>{A[a.uid]=a,r.value=Xd(e,t,A)},removeChild:a=>{delete A[a],r.value=r.value.filter(s=>s.uid!==a)}}},da=Symbol("tabsRootContextKey"),Zd=la({tabs:{type:vo(Array),default:()=>fc([])}}),Uc="ElTabBar",Jd=Nr({name:Uc}),jd=Nr({...Jd,props:Zd,setup(e,{expose:t}){const A=e,r=ca(),n=po(da);n||_o(Uc,"<el-tabs><el-tab-bar /></el-tabs>");const i=ua("tabs"),a=pt(),s=pt(),o=()=>{let u=0,c=0;const f=["top","bottom"].includes(n.props.tabPosition)?"width":"height",h=f==="width"?"x":"y",d=h==="x"?"left":"top";return A.tabs.every(g=>{var v,p;const m=(p=(v=r.parent)==null?void 0:v.refs)==null?void 0:p[`tab-${g.uid}`];if(!m)return!1;if(!g.active)return!0;u=m[`offset${_A(d)}`],c=m[`client${_A(f)}`];const B=window.getComputedStyle(m);return f==="width"&&(c-=Number.parseFloat(B.paddingLeft)+Number.parseFloat(B.paddingRight),u+=Number.parseFloat(B.paddingLeft)),!1}),{[f]:`${c}px`,transform:`translate${_A(h)}(${u}px)`}},l=()=>s.value=o();return YA(()=>A.tabs,async()=>{await mo(),l()},{immediate:!0}),hc(a,()=>l()),t({ref:a,update:l}),(u,c)=>(dc(),gc("div",{ref_key:"barRef",ref:a,class:vc([AA(i).e("active-bar"),AA(i).is(AA(n).props.tabPosition)]),style:Vh(s.value)},null,6))}});var qd=pc(jd,[["__file","tab-bar.vue"]]);const $d=la({panes:{type:vo(Array),default:()=>fc([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),eg={tabClick:(e,t,A)=>A instanceof Event,tabRemove:(e,t)=>t instanceof Event},tl="ElTabNav",tg=Nr({name:tl,props:$d,emits:eg,setup(e,{expose:t,emit:A}){const r=ca(),n=po(da);n||_o(tl,"<el-tabs><tab-nav /></el-tabs>");const i=ua("tabs"),a=Kh(),s=zh(),o=pt(),l=pt(),u=pt(),c=pt(),f=pt(!1),h=pt(0),d=pt(!1),g=pt(!0),v=Cn(()=>["top","bottom"].includes(n.props.tabPosition)?"width":"height"),p=Cn(()=>({transform:`translate${v.value==="width"?"X":"Y"}(-${h.value}px)`})),m=()=>{if(!o.value)return;const F=o.value[`offset${_A(v.value)}`],S=h.value;if(!S)return;const U=S>F?S-F:0;h.value=U},B=()=>{if(!o.value||!l.value)return;const F=l.value[`offset${_A(v.value)}`],S=o.value[`offset${_A(v.value)}`],U=h.value;if(F-U<=S)return;const I=F-U>S*2?U+S:F-S;h.value=I},_=async()=>{const F=l.value;if(!f.value||!u.value||!o.value||!F)return;await mo();const S=u.value.querySelector(".is-active");if(!S)return;const U=o.value,I=["top","bottom"].includes(n.props.tabPosition),Q=S.getBoundingClientRect(),b=U.getBoundingClientRect(),N=I?F.offsetWidth-b.width:F.offsetHeight-b.height,H=h.value;let V=H;I?(Q.left<b.left&&(V=H-(b.left-Q.left)),Q.right>b.right&&(V=H+Q.right-b.right)):(Q.top<b.top&&(V=H-(b.top-Q.top)),Q.bottom>b.bottom&&(V=H+(Q.bottom-b.bottom))),V=Math.max(V,0),h.value=Math.min(V,N)},x=()=>{var F;if(!l.value||!o.value)return;e.stretch&&((F=c.value)==null||F.update());const S=l.value[`offset${_A(v.value)}`],U=o.value[`offset${_A(v.value)}`],I=h.value;U<S?(f.value=f.value||{},f.value.prev=I,f.value.next=I+U<S,S-I<U&&(h.value=S-U)):(f.value=!1,I>0&&(h.value=0))},y=F=>{const S=F.code,{up:U,down:I,left:Q,right:b}=Li;if(![U,I,Q,b].includes(S))return;const N=Array.from(F.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),H=N.indexOf(F.target);let V;S===Q||S===U?H===0?V=N.length-1:V=H-1:H<N.length-1?V=H+1:V=0,N[V].focus({preventScroll:!0}),N[V].click(),T()},T=()=>{g.value&&(d.value=!0)},E=()=>d.value=!1;return YA(a,F=>{F==="hidden"?g.value=!1:F==="visible"&&setTimeout(()=>g.value=!0,50)}),YA(s,F=>{F?setTimeout(()=>g.value=!0,50):g.value=!1}),hc(u,x),mc(()=>setTimeout(()=>_(),0)),kh(()=>x()),t({scrollToActiveTab:_,removeFocus:E}),YA(()=>e.panes,()=>r.update(),{flush:"post",deep:!0}),()=>{const F=f.value?[He("span",{class:[i.e("nav-prev"),i.is("disabled",!f.value.prev)],onClick:m},[He(Qi,null,{default:()=>[He(Wh,null,null)]})]),He("span",{class:[i.e("nav-next"),i.is("disabled",!f.value.next)],onClick:B},[He(Qi,null,{default:()=>[He(Xh,null,null)]})])]:null,S=e.panes.map((U,I)=>{var Q,b,N,H;const V=U.uid,G=U.props.disabled,j=(b=(Q=U.props.name)!=null?Q:U.index)!=null?b:`${I}`,W=!G&&(U.isClosable||e.editable);U.index=`${I}`;const ne=W?He(Qi,{class:"is-icon-close",onClick:te=>A("tabRemove",U,te)},{default:()=>[He(Yh,null,null)]}):null,ee=((H=(N=U.slots).label)==null?void 0:H.call(N))||U.props.label,ie=!G&&U.active?0:-1;return He("div",{ref:`tab-${V}`,class:[i.e("item"),i.is(n.props.tabPosition),i.is("active",U.active),i.is("disabled",G),i.is("closable",W),i.is("focus",d.value)],id:`tab-${j}`,key:`tab-${V}`,"aria-controls":`pane-${j}`,role:"tab","aria-selected":U.active,tabindex:ie,onFocus:()=>T(),onBlur:()=>E(),onClick:te=>{E(),A("tabClick",U,j,te)},onKeydown:te=>{W&&(te.code===Li.delete||te.code===Li.backspace)&&A("tabRemove",U,te)}},[ee,ne])});return He("div",{ref:u,class:[i.e("nav-wrap"),i.is("scrollable",!!f.value),i.is(n.props.tabPosition)]},[F,He("div",{class:i.e("nav-scroll"),ref:o},[He("div",{class:[i.e("nav"),i.is(n.props.tabPosition),i.is("stretch",e.stretch&&["top","bottom"].includes(n.props.tabPosition))],ref:l,style:p.value,role:"tablist",onKeydown:y},[e.type?null:He(qd,{ref:c,tabs:[...e.panes]},null),S])])])}}}),Ag=la({type:{type:String,values:["card","border-card",""],default:""},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:vo(Function),default:()=>!0},stretch:Boolean}),Da=e=>jh(e)||qh(e),rg={[_c]:e=>Da(e),tabClick:(e,t)=>t instanceof Event,tabChange:e=>Da(e),edit:(e,t)=>["remove","add"].includes(t),tabRemove:e=>Da(e),tabAdd:()=>!0},ng=Nr({name:"ElTabs",props:Ag,emits:rg,setup(e,{emit:t,slots:A,expose:r}){var n;const i=ua("tabs"),a=Cn(()=>["left","right"].includes(e.tabPosition)),{children:s,addChild:o,removeChild:l}=Yd(ca(),"ElTabPane"),u=pt(),c=pt((n=e.modelValue)!=null?n:"0"),f=async(v,p=!1)=>{var m,B,_;if(!(c.value===v||Xo(v)))try{await((m=e.beforeLeave)==null?void 0:m.call(e,v,c.value))!==!1&&(c.value=v,p&&(t(_c,v),t("tabChange",v)),(_=(B=u.value)==null?void 0:B.removeFocus)==null||_.call(B))}catch{}},h=(v,p,m)=>{v.props.disabled||(f(p,!0),t("tabClick",v,m))},d=(v,p)=>{v.props.disabled||Xo(v.props.name)||(p.stopPropagation(),t("edit",v.props.name,"remove"),t("tabRemove",v.props.name))},g=()=>{t("edit",void 0,"add"),t("tabAdd")};return YA(()=>e.modelValue,v=>f(v)),YA(c,async()=>{var v;await mo(),(v=u.value)==null||v.scrollToActiveTab()}),Zh(da,{props:e,currentName:c,registerPane:o,unregisterPane:l}),r({currentName:c}),()=>{const v=A["add-icon"],p=e.editable||e.addable?He("div",{class:[i.e("new-tab"),a.value&&i.e("new-tab-vertical")],tabindex:"0",onClick:g,onKeydown:_=>{_.code===Li.enter&&g()}},[v?bs(A,"add-icon"):He(Qi,{class:i.is("icon-plus")},{default:()=>[He(Jh,null,null)]})]):null,m=He("div",{class:[i.e("header"),a.value&&i.e("header-vertical"),i.is(e.tabPosition)]},[He(tg,{ref:u,currentName:c.value,editable:e.editable,type:e.type,panes:s.value,stretch:e.stretch,onTabClick:h,onTabRemove:d},null),p]),B=He("div",{class:i.e("content")},[bs(A,"default")]);return He("div",{class:[i.b(),i.m(e.tabPosition),{[i.m("card")]:e.type==="card",[i.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[m,B]:[B,m]])}}}),ig=la({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),ag=["id","aria-hidden","aria-labelledby"],Sc="ElTabPane",sg=Nr({name:Sc}),og=Nr({...sg,props:ig,setup(e){const t=e,A=ca(),r=$h(),n=po(da);n||_o(Sc,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const i=ua("tab-pane"),a=pt(),s=Cn(()=>t.closable||n.props.closable),o=Yo(()=>{var h;return n.currentName.value===((h=t.name)!=null?h:a.value)}),l=pt(o.value),u=Cn(()=>{var h;return(h=t.name)!=null?h:a.value}),c=Yo(()=>!t.lazy||l.value||o.value);YA(o,h=>{h&&(l.value=!0)});const f=ed({uid:A.uid,slots:r,props:t,paneName:u,active:o,index:a,isClosable:s});return mc(()=>{n.registerPane(f)}),td(()=>{n.unregisterPane(f.uid)}),(h,d)=>AA(c)?Ad((dc(),gc("div",{key:0,id:`pane-${AA(u)}`,class:vc(AA(i).b()),role:"tabpanel","aria-hidden":!AA(o),"aria-labelledby":`tab-${AA(u)}`},[bs(h.$slots,"default")],10,ag)),[[rd,AA(o)]]):nd("v-if",!0)}});var bc=pc(og,[["__file","tab-pane.vue"]]);const TC=id(ng,{TabPane:bc}),FC=ad(bc);function lg(e){return ud(null,e)}var wo={isDimensionStacked:cd,enableDataStack:fd,getStackedDimension:hd};function yo(e,t){var A=t;t instanceof Tr||(A=new Tr(t));var r=vd(A);return r.setExtent(e[0],e[1]),pd(r,A),r}function ug(e){dd(e,gd)}const cg=e=>{const t=ld.create({baseURL:"/api",timeout:12e4,...e});return t.interceptors.request.use(A=>A,A=>Promise.reject(A)),t.interceptors.response.use(function(A){return A},function(A){console.log("响应拦截器response error:",A);let r="";return A&&A.response?(console.log(A.message),A.response.data?(console.log(A.response.data),r=A.response.status+": "+JSON.stringify(A.response.data)):r=A.response.status+": "+A.message):A.code==="ECONNABORTED"&&A.message.indexOf("timeout")!==-1?r="服务器响应超时 code: "+A.code+", message: "+A.message:r="连接服务器失败 code: "+A.code+", message: "+A.message,console.log(r),sd.error(r),Promise.reject(A)}),t},Qc=cg({baseURL:"https://tab2024.valuecompass.site"}),UC=e=>Qc.post("/api/calculate_human_value",e),SC=e=>Qc.post("/api/calculate_model_value",e);et([md,_d]);et(Bd);function Al(e,t,A){typeof t=="object"&&(A=t,t=null);var r=this,n;if(!(e instanceof Function)){n=[];for(var i in e)e.hasOwnProperty(i)&&n.push(i)}var a=function(o){if(r.apply(this,arguments),e instanceof Function?rl(this,e.call(this,o)):fg(this,e,n),this.constructor===a)for(var l=a.__initializers__,u=0;u<l.length;u++)l[u].apply(this,arguments)};a.__super__=r,r.__initializers__?a.__initializers__=r.__initializers__.slice():a.__initializers__=[],t&&a.__initializers__.push(t);var s=function(){};return s.prototype=r.prototype,a.prototype=new s,a.prototype.constructor=a,rl(a.prototype,A),a.extend=r.extend,a.derive=r.extend,a}function rl(e,t){if(t)for(var A in t)t.hasOwnProperty(A)&&(e[A]=t[A])}function fg(e,t,A){for(var r=0;r<A.length;r++){var n=A[r];e[n]=t[n]}}const hg={extend:Al,derive:Al};function dg(e,t){this.action=e,this.context=t}var xo={trigger:function(e){if(this.hasOwnProperty("__handlers__")&&this.__handlers__.hasOwnProperty(e)){var t=this.__handlers__[e],A=t.length,r=-1,n=arguments;switch(n.length){case 1:for(;++r<A;)t[r].action.call(t[r].context);return;case 2:for(;++r<A;)t[r].action.call(t[r].context,n[1]);return;case 3:for(;++r<A;)t[r].action.call(t[r].context,n[1],n[2]);return;case 4:for(;++r<A;)t[r].action.call(t[r].context,n[1],n[2],n[3]);return;case 5:for(;++r<A;)t[r].action.call(t[r].context,n[1],n[2],n[3],n[4]);return;default:for(;++r<A;)t[r].action.apply(t[r].context,Array.prototype.slice.call(n,1));return}}},on:function(e,t,A){if(!(!e||!t)){var r=this.__handlers__||(this.__handlers__={});if(!r[e])r[e]=[];else if(this.has(e,t))return;var n=new dg(t,A||this);return r[e].push(n),this}},once:function(e,t,A){if(!e||!t)return;var r=this;function n(){r.off(e,n),t.apply(this,arguments)}return this.on(e,n,A)},before:function(e,t,A){if(!(!e||!t))return e="before"+e,this.on(e,t,A)},after:function(e,t,A){if(!(!e||!t))return e="after"+e,this.on(e,t,A)},success:function(e,t){return this.once("success",e,t)},error:function(e,t){return this.once("error",e,t)},off:function(e,t){var A=this.__handlers__||(this.__handlers__={});if(!t){A[e]=[];return}if(A[e]){for(var r=A[e],n=[],i=0;i<r.length;i++)t&&r[i].action!==t&&n.push(r[i]);A[e]=n}return this},has:function(e,t){var A=this.__handlers__;if(!A||!A[e])return!1;for(var r=A[e],n=0;n<r.length;n++)if(r[n].action===t)return!0}},gg=0,vg=Array.prototype,pg=vg.forEach,be={genGUID:function(){return++gg},relative2absolute:function(e,t){if(!t||e.match(/^\//))return e;for(var A=e.split("/"),r=t.split("/"),n=A[0];n==="."||n==="..";)n===".."&&r.pop(),A.shift(),n=A[0];return r.join("/")+"/"+A.join("/")},extend:function(e,t){if(t)for(var A in t)t.hasOwnProperty(A)&&(e[A]=t[A]);return e},defaults:function(e,t){if(t)for(var A in t)e[A]===void 0&&(e[A]=t[A]);return e},extendWithPropList:function(e,t,A){if(t)for(var r=0;r<A.length;r++){var n=A[r];e[n]=t[n]}return e},defaultsWithPropList:function(e,t,A){if(t)for(var r=0;r<A.length;r++){var n=A[r];e[n]==null&&(e[n]=t[n])}return e},each:function(e,t,A){if(e&&t)if(e.forEach&&e.forEach===pg)e.forEach(t,A);else if(e.length===+e.length)for(var r=0,n=e.length;r<n;r++)t.call(A,e[r],r,e);else for(var i in e)e.hasOwnProperty(i)&&t.call(A,e[i],i,e)},isObject:function(e){return e===Object(e)},isArray:function(e){return Array.isArray(e)},isArrayLike:function(e){return e?e.length===+e.length:!1},clone:function(e){if(be.isObject(e)){if(be.isArray(e))return e.slice();if(be.isArrayLike(e)){for(var t=new e.constructor(e.length),A=0;A<e.length;A++)t[A]=e[A];return t}else return be.extend({},e)}else return e}},tt=function(){this.__uid__=be.genGUID()};tt.__initializers__=[function(e){be.extend(this,e)}];be.extend(tt,hg);be.extend(tt.prototype,xo);var nl=["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear","OES_standard_derivatives","OES_vertex_array_object","OES_element_index_uint","WEBGL_compressed_texture_s3tc","WEBGL_depth_texture","EXT_texture_filter_anisotropic","EXT_shader_texture_lod","WEBGL_draw_buffers","EXT_frag_depth","EXT_sRGB","ANGLE_instanced_arrays"],il=["MAX_TEXTURE_SIZE","MAX_CUBE_MAP_TEXTURE_SIZE"];function mg(e){for(var t={},A={},r=0;r<nl.length;r++){var n=nl[r];a(n)}for(var r=0;r<il.length;r++){var i=il[r];A[i]=e.getParameter(e[i])}this.getExtension=function(s){return s in t||a(s),t[s]},this.getParameter=function(s){return A[s]};function a(s){if(e.getExtension){var o=e.getExtension(s);o||(o=e.getExtension("MOZ_"+s)),o||(o=e.getExtension("WEBKIT_"+s)),t[s]=o}}}const D={DEPTH_BUFFER_BIT:256,STENCIL_BUFFER_BIT:1024,COLOR_BUFFER_BIT:16384,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,ZERO:0,ONE:1,SRC_COLOR:768,ONE_MINUS_SRC_COLOR:769,SRC_ALPHA:770,ONE_MINUS_SRC_ALPHA:771,DST_ALPHA:772,ONE_MINUS_DST_ALPHA:773,DST_COLOR:774,ONE_MINUS_DST_COLOR:775,SRC_ALPHA_SATURATE:776,FUNC_ADD:32774,BLEND_EQUATION:32777,BLEND_EQUATION_RGB:32777,BLEND_EQUATION_ALPHA:34877,FUNC_SUBTRACT:32778,FUNC_REVERSE_SUBTRACT:32779,BLEND_DST_RGB:32968,BLEND_SRC_RGB:32969,BLEND_DST_ALPHA:32970,BLEND_SRC_ALPHA:32971,CONSTANT_COLOR:32769,ONE_MINUS_CONSTANT_COLOR:32770,CONSTANT_ALPHA:32771,ONE_MINUS_CONSTANT_ALPHA:32772,BLEND_COLOR:32773,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,ARRAY_BUFFER_BINDING:34964,ELEMENT_ARRAY_BUFFER_BINDING:34965,STREAM_DRAW:35040,STATIC_DRAW:35044,DYNAMIC_DRAW:35048,BUFFER_SIZE:34660,BUFFER_USAGE:34661,CURRENT_VERTEX_ATTRIB:34342,FRONT:1028,BACK:1029,FRONT_AND_BACK:1032,CULL_FACE:2884,BLEND:3042,DITHER:3024,STENCIL_TEST:2960,DEPTH_TEST:2929,SCISSOR_TEST:3089,POLYGON_OFFSET_FILL:32823,SAMPLE_ALPHA_TO_COVERAGE:32926,SAMPLE_COVERAGE:32928,NO_ERROR:0,INVALID_ENUM:1280,INVALID_VALUE:1281,INVALID_OPERATION:1282,OUT_OF_MEMORY:1285,CW:2304,CCW:2305,LINE_WIDTH:2849,ALIASED_POINT_SIZE_RANGE:33901,ALIASED_LINE_WIDTH_RANGE:33902,CULL_FACE_MODE:2885,FRONT_FACE:2886,DEPTH_RANGE:2928,DEPTH_WRITEMASK:2930,DEPTH_CLEAR_VALUE:2931,DEPTH_FUNC:2932,STENCIL_CLEAR_VALUE:2961,STENCIL_FUNC:2962,STENCIL_FAIL:2964,STENCIL_PASS_DEPTH_FAIL:2965,STENCIL_PASS_DEPTH_PASS:2966,STENCIL_REF:2967,STENCIL_VALUE_MASK:2963,STENCIL_WRITEMASK:2968,STENCIL_BACK_FUNC:34816,STENCIL_BACK_FAIL:34817,STENCIL_BACK_PASS_DEPTH_FAIL:34818,STENCIL_BACK_PASS_DEPTH_PASS:34819,STENCIL_BACK_REF:36003,STENCIL_BACK_VALUE_MASK:36004,STENCIL_BACK_WRITEMASK:36005,VIEWPORT:2978,SCISSOR_BOX:3088,COLOR_CLEAR_VALUE:3106,COLOR_WRITEMASK:3107,UNPACK_ALIGNMENT:3317,PACK_ALIGNMENT:3333,MAX_TEXTURE_SIZE:3379,MAX_VIEWPORT_DIMS:3386,SUBPIXEL_BITS:3408,RED_BITS:3410,GREEN_BITS:3411,BLUE_BITS:3412,ALPHA_BITS:3413,DEPTH_BITS:3414,STENCIL_BITS:3415,POLYGON_OFFSET_UNITS:10752,POLYGON_OFFSET_FACTOR:32824,TEXTURE_BINDING_2D:32873,SAMPLE_BUFFERS:32936,SAMPLES:32937,SAMPLE_COVERAGE_VALUE:32938,SAMPLE_COVERAGE_INVERT:32939,COMPRESSED_TEXTURE_FORMATS:34467,DONT_CARE:4352,FASTEST:4353,NICEST:4354,GENERATE_MIPMAP_HINT:33170,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DEPTH_COMPONENT:6402,ALPHA:6406,RGB:6407,RGBA:6408,LUMINANCE:6409,LUMINANCE_ALPHA:6410,UNSIGNED_SHORT_4_4_4_4:32819,UNSIGNED_SHORT_5_5_5_1:32820,UNSIGNED_SHORT_5_6_5:33635,FRAGMENT_SHADER:35632,VERTEX_SHADER:35633,MAX_VERTEX_ATTRIBS:34921,MAX_VERTEX_UNIFORM_VECTORS:36347,MAX_VARYING_VECTORS:36348,MAX_COMBINED_TEXTURE_IMAGE_UNITS:35661,MAX_VERTEX_TEXTURE_IMAGE_UNITS:35660,MAX_TEXTURE_IMAGE_UNITS:34930,MAX_FRAGMENT_UNIFORM_VECTORS:36349,SHADER_TYPE:35663,DELETE_STATUS:35712,LINK_STATUS:35714,VALIDATE_STATUS:35715,ATTACHED_SHADERS:35717,ACTIVE_UNIFORMS:35718,ACTIVE_ATTRIBUTES:35721,SHADING_LANGUAGE_VERSION:35724,CURRENT_PROGRAM:35725,NEVER:512,LESS:513,EQUAL:514,LEQUAL:515,GREATER:516,NOTEQUAL:517,GEQUAL:518,ALWAYS:519,KEEP:7680,REPLACE:7681,INCR:7682,DECR:7683,INVERT:5386,INCR_WRAP:34055,DECR_WRAP:34056,VENDOR:7936,RENDERER:7937,VERSION:7938,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,TEXTURE_2D:3553,TEXTURE:5890,TEXTURE_CUBE_MAP:34067,TEXTURE_BINDING_CUBE_MAP:34068,TEXTURE_CUBE_MAP_POSITIVE_X:34069,TEXTURE_CUBE_MAP_NEGATIVE_X:34070,TEXTURE_CUBE_MAP_POSITIVE_Y:34071,TEXTURE_CUBE_MAP_NEGATIVE_Y:34072,TEXTURE_CUBE_MAP_POSITIVE_Z:34073,TEXTURE_CUBE_MAP_NEGATIVE_Z:34074,MAX_CUBE_MAP_TEXTURE_SIZE:34076,TEXTURE0:33984,TEXTURE1:33985,TEXTURE2:33986,TEXTURE3:33987,TEXTURE4:33988,TEXTURE5:33989,TEXTURE6:33990,TEXTURE7:33991,TEXTURE8:33992,TEXTURE9:33993,TEXTURE10:33994,TEXTURE11:33995,TEXTURE12:33996,TEXTURE13:33997,TEXTURE14:33998,TEXTURE15:33999,TEXTURE16:34e3,TEXTURE17:34001,TEXTURE18:34002,TEXTURE19:34003,TEXTURE20:34004,TEXTURE21:34005,TEXTURE22:34006,TEXTURE23:34007,TEXTURE24:34008,TEXTURE25:34009,TEXTURE26:34010,TEXTURE27:34011,TEXTURE28:34012,TEXTURE29:34013,TEXTURE30:34014,TEXTURE31:34015,ACTIVE_TEXTURE:34016,REPEAT:10497,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,INT_VEC2:35667,INT_VEC3:35668,INT_VEC4:35669,BOOL:35670,BOOL_VEC2:35671,BOOL_VEC3:35672,BOOL_VEC4:35673,FLOAT_MAT2:35674,FLOAT_MAT3:35675,FLOAT_MAT4:35676,SAMPLER_2D:35678,SAMPLER_CUBE:35680,VERTEX_ATTRIB_ARRAY_ENABLED:34338,VERTEX_ATTRIB_ARRAY_SIZE:34339,VERTEX_ATTRIB_ARRAY_STRIDE:34340,VERTEX_ATTRIB_ARRAY_TYPE:34341,VERTEX_ATTRIB_ARRAY_NORMALIZED:34922,VERTEX_ATTRIB_ARRAY_POINTER:34373,VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:34975,COMPILE_STATUS:35713,LOW_FLOAT:36336,MEDIUM_FLOAT:36337,HIGH_FLOAT:36338,LOW_INT:36339,MEDIUM_INT:36340,HIGH_INT:36341,FRAMEBUFFER:36160,RENDERBUFFER:36161,RGBA4:32854,RGB5_A1:32855,RGB565:36194,DEPTH_COMPONENT16:33189,STENCIL_INDEX:6401,STENCIL_INDEX8:36168,DEPTH_STENCIL:34041,RENDERBUFFER_WIDTH:36162,RENDERBUFFER_HEIGHT:36163,RENDERBUFFER_INTERNAL_FORMAT:36164,RENDERBUFFER_RED_SIZE:36176,RENDERBUFFER_GREEN_SIZE:36177,RENDERBUFFER_BLUE_SIZE:36178,RENDERBUFFER_ALPHA_SIZE:36179,RENDERBUFFER_DEPTH_SIZE:36180,RENDERBUFFER_STENCIL_SIZE:36181,FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE:36048,FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:36049,FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL:36050,FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE:36051,COLOR_ATTACHMENT0:36064,DEPTH_ATTACHMENT:36096,STENCIL_ATTACHMENT:36128,DEPTH_STENCIL_ATTACHMENT:33306,NONE:0,FRAMEBUFFER_COMPLETE:36053,FRAMEBUFFER_INCOMPLETE_ATTACHMENT:36054,FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:36055,FRAMEBUFFER_INCOMPLETE_DIMENSIONS:36057,FRAMEBUFFER_UNSUPPORTED:36061,FRAMEBUFFER_BINDING:36006,RENDERBUFFER_BINDING:36007,MAX_RENDERBUFFER_SIZE:34024,INVALID_FRAMEBUFFER_OPERATION:1286,UNPACK_FLIP_Y_WEBGL:37440,UNPACK_PREMULTIPLY_ALPHA_WEBGL:37441,CONTEXT_LOST_WEBGL:37442,UNPACK_COLORSPACE_CONVERSION_WEBGL:37443,BROWSER_DEFAULT_WEBGL:37444};function _g(e){var t=new XMLHttpRequest;t.open("get",e.url),t.responseType=e.responseType||"text",e.onprogress&&(t.onprogress=function(A){if(A.lengthComputable){var r=A.loaded/A.total;e.onprogress(r,A.loaded,A.total)}else e.onprogress(null)}),t.onload=function(A){t.status>=400?e.onerror&&e.onerror():e.onload&&e.onload(t.response)},e.onerror&&(t.onerror=e.onerror),t.send(null)}const Bg={get:_g};var Ma,ue={};ue.supportWebGL=function(){if(Ma==null)try{var e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");if(!t)throw new Error}catch{Ma=!1}return Ma};ue.Int8Array=typeof Int8Array>"u"?Array:Int8Array;ue.Uint8Array=typeof Uint8Array>"u"?Array:Uint8Array;ue.Uint16Array=typeof Uint16Array>"u"?Array:Uint16Array;ue.Uint32Array=typeof Uint32Array>"u"?Array:Uint32Array;ue.Int16Array=typeof Int16Array>"u"?Array:Int16Array;ue.Float32Array=typeof Float32Array>"u"?Array:Float32Array;ue.Float64Array=typeof Float64Array>"u"?Array:Float64Array;var zA={};typeof window<"u"?zA=window:typeof global<"u"&&(zA=global);ue.requestAnimationFrame=zA.requestAnimationFrame||zA.msRequestAnimationFrame||zA.mozRequestAnimationFrame||zA.webkitRequestAnimationFrame||function(e){setTimeout(e,16)};ue.createCanvas=function(){return document.createElement("canvas")};ue.createImage=function(){return new zA.Image};ue.request={get:Bg.get};ue.addEventListener=function(e,t,A,r){e.addEventListener(t,A,r)};ue.removeEventListener=function(e,t,A){e.removeEventListener(t,A)};var Ze=function(){this.head=null,this.tail=null,this._length=0};Ze.prototype.insert=function(e){var t=new Ze.Entry(e);return this.insertEntry(t),t};Ze.prototype.insertAt=function(e,t){if(!(e<0)){for(var A=this.head,r=0;A&&r!=e;)A=A.next,r++;if(A){var n=new Ze.Entry(t),i=A.prev;i?(i.next=n,n.prev=i):this.head=n,n.next=A,A.prev=n}else this.insert(t)}};Ze.prototype.insertBeforeEntry=function(e,t){var A=new Ze.Entry(e),r=t.prev;r?(r.next=A,A.prev=r):this.head=A,A.next=t,t.prev=A,this._length++};Ze.prototype.insertEntry=function(e){this.head?(this.tail.next=e,e.prev=this.tail,this.tail=e):this.head=this.tail=e,this._length++};Ze.prototype.remove=function(e){var t=e.prev,A=e.next;t?t.next=A:this.head=A,A?A.prev=t:this.tail=t,e.next=e.prev=null,this._length--};Ze.prototype.removeAt=function(e){if(!(e<0)){for(var t=this.head,A=0;t&&A!=e;)t=t.next,A++;if(t)return this.remove(t),t.value}};Ze.prototype.getHead=function(){if(this.head)return this.head.value};Ze.prototype.getTail=function(){if(this.tail)return this.tail.value};Ze.prototype.getAt=function(e){if(!(e<0)){for(var t=this.head,A=0;t&&A!=e;)t=t.next,A++;return t.value}};Ze.prototype.indexOf=function(e){for(var t=this.head,A=0;t;){if(t.value===e)return A;t=t.next,A++}};Ze.prototype.length=function(){return this._length};Ze.prototype.isEmpty=function(){return this._length===0};Ze.prototype.forEach=function(e,t){for(var A=this.head,r=0,n=typeof t<"u";A;)n?e.call(t,A.value,r):e(A.value,r),A=A.next,r++};Ze.prototype.clear=function(){this.tail=this.head=null,this._length=0};Ze.Entry=function(e){this.value=e,this.next=null,this.prev=null};var Ar=function(e){this._list=new Ze,this._map={},this._maxSize=e||10};Ar.prototype.setMaxSize=function(e){this._maxSize=e};Ar.prototype.put=function(e,t){if(!this._map.hasOwnProperty(e)){var A=this._list.length();if(A>=this._maxSize&&A>0){var r=this._list.head;this._list.remove(r),delete this._map[r.key]}var n=this._list.insert(t);n.key=e,this._map[e]=n}};Ar.prototype.get=function(e){var t=this._map[e];if(this._map.hasOwnProperty(e))return t!==this._list.tail&&(this._list.remove(t),this._list.insertEntry(t)),t.value};Ar.prototype.remove=function(e){var t=this._map[e];typeof t<"u"&&(delete this._map[e],this._list.remove(t))};Ar.prototype.clear=function(){this._list.clear(),this._map={}};var Ce={},al={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function Mt(e){return e=Math.round(e),e<0?0:e>255?255:e}function wg(e){return e=Math.round(e),e<0?0:e>360?360:e}function En(e){return e<0?0:e>1?1:e}function Ra(e){return e.length&&e.charAt(e.length-1)==="%"?Mt(parseFloat(e)/100*255):Mt(parseInt(e,10))}function Fr(e){return e.length&&e.charAt(e.length-1)==="%"?En(parseFloat(e)/100):En(parseFloat(e))}function Na(e,t,A){return A<0?A+=1:A>1&&(A-=1),A*6<1?e+(t-e)*A*6:A*2<1?t:A*3<2?e+(t-e)*(2/3-A)*6:e}function BA(e,t,A){return e+(t-e)*A}function It(e,t,A,r,n){return e[0]=t,e[1]=A,e[2]=r,e[3]=n,e}function Is(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}var Lc=new Ar(20),Yn=null;function rr(e,t){Yn&&Is(Yn,t),Yn=Lc.put(e,Yn||t.slice())}Ce.parse=function(e,t){if(e){t=t||[];var A=Lc.get(e);if(A)return Is(t,A);e=e+"";var r=e.replace(/ /g,"").toLowerCase();if(r in al)return Is(t,al[r]),rr(e,t),t;if(r.charAt(0)==="#"){if(r.length===4){var n=parseInt(r.substr(1),16);if(!(n>=0&&n<=4095)){It(t,0,0,0,1);return}return It(t,(n&3840)>>4|(n&3840)>>8,n&240|(n&240)>>4,n&15|(n&15)<<4,1),rr(e,t),t}else if(r.length===7){var n=parseInt(r.substr(1),16);if(!(n>=0&&n<=16777215)){It(t,0,0,0,1);return}return It(t,(n&16711680)>>16,(n&65280)>>8,n&255,1),rr(e,t),t}return}var i=r.indexOf("("),a=r.indexOf(")");if(i!==-1&&a+1===r.length){var s=r.substr(0,i),o=r.substr(i+1,a-(i+1)).split(","),l=1;switch(s){case"rgba":if(o.length!==4){It(t,0,0,0,1);return}l=Fr(o.pop());case"rgb":if(o.length!==3){It(t,0,0,0,1);return}return It(t,Ra(o[0]),Ra(o[1]),Ra(o[2]),l),rr(e,t),t;case"hsla":if(o.length!==4){It(t,0,0,0,1);return}return o[3]=Fr(o[3]),Ds(o,t),rr(e,t),t;case"hsl":if(o.length!==3){It(t,0,0,0,1);return}return Ds(o,t),rr(e,t),t;default:return}}It(t,0,0,0,1)}};Ce.parseToFloat=function(e,t){if(t=Ce.parse(e,t),!!t)return t[0]/=255,t[1]/=255,t[2]/=255,t};function Ds(e,t){var A=(parseFloat(e[0])%360+360)%360/360,r=Fr(e[1]),n=Fr(e[2]),i=n<=.5?n*(r+1):n+r-n*r,a=n*2-i;return t=t||[],It(t,Mt(Na(a,i,A+1/3)*255),Mt(Na(a,i,A)*255),Mt(Na(a,i,A-1/3)*255),1),e.length===4&&(t[3]=e[3]),t}function yg(e){if(e){var t=e[0]/255,A=e[1]/255,r=e[2]/255,n=Math.min(t,A,r),i=Math.max(t,A,r),a=i-n,s=(i+n)/2,o,l;if(a===0)o=0,l=0;else{s<.5?l=a/(i+n):l=a/(2-i-n);var u=((i-t)/6+a/2)/a,c=((i-A)/6+a/2)/a,f=((i-r)/6+a/2)/a;t===i?o=f-c:A===i?o=1/3+u-f:r===i&&(o=2/3+c-u),o<0&&(o+=1),o>1&&(o-=1)}var h=[o*360,l,s];return e[3]!=null&&h.push(e[3]),h}}Ce.lift=function(e,t){var A=Ce.parse(e);if(A){for(var r=0;r<3;r++)t<0?A[r]=A[r]*(1-t)|0:A[r]=(255-A[r])*t+A[r]|0;return Ce.stringify(A,A.length===4?"rgba":"rgb")}};Ce.toHex=function(e){var t=Ce.parse(e);if(t)return((1<<24)+(t[0]<<16)+(t[1]<<8)+ +t[2]).toString(16).slice(1)};Ce.fastLerp=function(e,t,A){if(!(!(t&&t.length)||!(e>=0&&e<=1))){A=A||[];var r=e*(t.length-1),n=Math.floor(r),i=Math.ceil(r),a=t[n],s=t[i],o=r-n;return A[0]=Mt(BA(a[0],s[0],o)),A[1]=Mt(BA(a[1],s[1],o)),A[2]=Mt(BA(a[2],s[2],o)),A[3]=En(BA(a[3],s[3],o)),A}};Ce.fastMapToColor=Ce.fastLerp;Ce.lerp=function(e,t,A){if(!(!(t&&t.length)||!(e>=0&&e<=1))){var r=e*(t.length-1),n=Math.floor(r),i=Math.ceil(r),a=Ce.parse(t[n]),s=Ce.parse(t[i]),o=r-n,l=Ce.stringify([Mt(BA(a[0],s[0],o)),Mt(BA(a[1],s[1],o)),Mt(BA(a[2],s[2],o)),En(BA(a[3],s[3],o))],"rgba");return A?{color:l,leftIndex:n,rightIndex:i,value:r}:l}};Ce.mapToColor=Ce.lerp;Ce.modifyHSL=function(e,t,A,r){if(e=Ce.parse(e),e)return e=yg(e),t!=null&&(e[0]=wg(t)),A!=null&&(e[1]=Fr(A)),r!=null&&(e[2]=Fr(r)),Ce.stringify(Ds(e),"rgba")};Ce.modifyAlpha=function(e,t){if(e=Ce.parse(e),e&&t!=null)return e[3]=En(t),Ce.stringify(e,"rgba")};Ce.stringify=function(e,t){if(!(!e||!e.length)){var A=e[0]+","+e[1]+","+e[2];return(t==="rgba"||t==="hsva"||t==="hsla")&&(A+=","+e[3]),t+"("+A+")"}};var xg=Ce.parseToFloat,Ha={};function sl(e){var t=Object.keys(e);t.sort();for(var A=[],r=0;r<t.length;r++){var n=t[r],i=e[n];i===null?A.push(n):A.push(n+" "+i.toString())}return A.join(`
`)}function Cg(e,t,A){A.sort();for(var r=[],n=0;n<A.length;n++){var i=A[n];r.push(i)}var a=sl(e)+`
`+sl(t)+`
`+r.join(`
`);if(Ha[a])return Ha[a];var s=be.genGUID();return Ha[a]=s,s}var St=tt.extend(function(){return{name:"",depthTest:!0,depthMask:!0,transparent:!1,blend:null,autoUpdateTextureStatus:!0,uniforms:{},vertexDefines:{},fragmentDefines:{},_textureStatus:{},_enabledUniforms:null}},function(){this.name||(this.name="MATERIAL_"+this.__uid__),this.shader&&this.attachShader(this.shader,!0)},{precision:"highp",setUniform:function(e,t){t===void 0&&console.warn('Uniform value "'+e+'" is undefined');var A=this.uniforms[e];A&&(typeof t=="string"&&(t=xg(t)||t),A.value=t,this.autoUpdateTextureStatus&&A.type==="t"&&(t?this.enableTexture(e):this.disableTexture(e)))},setUniforms:function(e){for(var t in e){var A=e[t];this.setUniform(t,A)}},isUniformEnabled:function(e){return this._enabledUniforms.indexOf(e)>=0},getEnabledUniforms:function(){return this._enabledUniforms},getTextureUniforms:function(){return this._textureUniforms},set:function(e,t){if(typeof e=="object")for(var A in e){var r=e[A];this.setUniform(A,r)}else this.setUniform(e,t)},get:function(e){var t=this.uniforms[e];if(t)return t.value},attachShader:function(e,t){var A=this.uniforms;this.uniforms=e.createUniforms(),this.shader=e;var r=this.uniforms;this._enabledUniforms=Object.keys(r),this._enabledUniforms.sort(),this._textureUniforms=this._enabledUniforms.filter(function(l){var u=this.uniforms[l].type;return u==="t"||u==="tv"},this);var n=this.vertexDefines,i=this.fragmentDefines;if(this.vertexDefines=be.clone(e.vertexDefines),this.fragmentDefines=be.clone(e.fragmentDefines),t){for(var a in A)r[a]&&(r[a].value=A[a].value);be.defaults(this.vertexDefines,n),be.defaults(this.fragmentDefines,i)}var s={};for(var o in e.textures)s[o]={shaderType:e.textures[o].shaderType,type:e.textures[o].type,enabled:t&&this._textureStatus[o]?this._textureStatus[o].enabled:!1};this._textureStatus=s,this._programKey=""},clone:function(){var e=new this.constructor({name:this.name,shader:this.shader});for(var t in this.uniforms)e.uniforms[t].value=this.uniforms[t].value;return e.depthTest=this.depthTest,e.depthMask=this.depthMask,e.transparent=this.transparent,e.blend=this.blend,e.vertexDefines=be.clone(this.vertexDefines),e.fragmentDefines=be.clone(this.fragmentDefines),e.enableTexture(this.getEnabledTextures()),e.precision=this.precision,e},define:function(e,t,A){var r=this.vertexDefines,n=this.fragmentDefines;e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<3&&(A=t,t=e,e="both"),A=A??null,(e==="vertex"||e==="both")&&r[t]!==A&&(r[t]=A,this._programKey=""),(e==="fragment"||e==="both")&&n[t]!==A&&(n[t]=A,e!=="both"&&(this._programKey=""))},undefine:function(e,t){e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<2&&(t=e,e="both"),(e==="vertex"||e==="both")&&this.isDefined("vertex",t)&&(delete this.vertexDefines[t],this._programKey=""),(e==="fragment"||e==="both")&&this.isDefined("fragment",t)&&(delete this.fragmentDefines[t],e!=="both"&&(this._programKey=""))},isDefined:function(e,t){switch(e){case"vertex":return this.vertexDefines[t]!==void 0;case"fragment":return this.fragmentDefines[t]!==void 0}},getDefine:function(e,t){switch(e){case"vertex":return this.vertexDefines[t];case"fragment":return this.fragmentDefines[t]}},enableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.enableTexture(e[t]);return}var A=this._textureStatus[e];if(A){var r=A.enabled;r||(A.enabled=!0,this._programKey="")}},enableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!0;this._programKey=""},disableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.disableTexture(e[t]);return}var A=this._textureStatus[e];if(A){var r=!A.enabled;r||(A.enabled=!1,this._programKey="")}},disableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!1;this._programKey=""},isTextureEnabled:function(e){var t=this._textureStatus;return!!t[e]&&t[e].enabled},getEnabledTextures:function(){var e=[],t=this._textureStatus;for(var A in t)t[A].enabled&&e.push(A);return e},dirtyDefines:function(){this._programKey=""},getProgramKey:function(){return this._programKey||(this._programKey=Cg(this.vertexDefines,this.fragmentDefines,this.getEnabledTextures())),this._programKey}}),Ii=1e-6,At=Array,wr=Math.random,O={};O.create=function(){var e=new At(2);return e[0]=0,e[1]=0,e};O.clone=function(e){var t=new At(2);return t[0]=e[0],t[1]=e[1],t};O.fromValues=function(e,t){var A=new At(2);return A[0]=e,A[1]=t,A};O.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e};O.set=function(e,t,A){return e[0]=t,e[1]=A,e};O.add=function(e,t,A){return e[0]=t[0]+A[0],e[1]=t[1]+A[1],e};O.subtract=function(e,t,A){return e[0]=t[0]-A[0],e[1]=t[1]-A[1],e};O.sub=O.subtract;O.multiply=function(e,t,A){return e[0]=t[0]*A[0],e[1]=t[1]*A[1],e};O.mul=O.multiply;O.divide=function(e,t,A){return e[0]=t[0]/A[0],e[1]=t[1]/A[1],e};O.div=O.divide;O.min=function(e,t,A){return e[0]=Math.min(t[0],A[0]),e[1]=Math.min(t[1],A[1]),e};O.max=function(e,t,A){return e[0]=Math.max(t[0],A[0]),e[1]=Math.max(t[1],A[1]),e};O.scale=function(e,t,A){return e[0]=t[0]*A,e[1]=t[1]*A,e};O.scaleAndAdd=function(e,t,A,r){return e[0]=t[0]+A[0]*r,e[1]=t[1]+A[1]*r,e};O.distance=function(e,t){var A=t[0]-e[0],r=t[1]-e[1];return Math.sqrt(A*A+r*r)};O.dist=O.distance;O.squaredDistance=function(e,t){var A=t[0]-e[0],r=t[1]-e[1];return A*A+r*r};O.sqrDist=O.squaredDistance;O.length=function(e){var t=e[0],A=e[1];return Math.sqrt(t*t+A*A)};O.len=O.length;O.squaredLength=function(e){var t=e[0],A=e[1];return t*t+A*A};O.sqrLen=O.squaredLength;O.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e};O.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e};O.normalize=function(e,t){var A=t[0],r=t[1],n=A*A+r*r;return n>0&&(n=1/Math.sqrt(n),e[0]=t[0]*n,e[1]=t[1]*n),e};O.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]};O.cross=function(e,t,A){var r=t[0]*A[1]-t[1]*A[0];return e[0]=e[1]=0,e[2]=r,e};O.lerp=function(e,t,A,r){var n=t[0],i=t[1];return e[0]=n+r*(A[0]-n),e[1]=i+r*(A[1]-i),e};O.random=function(e,t){t=t||1;var A=GLMAT_RANDOM()*2*Math.PI;return e[0]=Math.cos(A)*t,e[1]=Math.sin(A)*t,e};O.transformMat2=function(e,t,A){var r=t[0],n=t[1];return e[0]=A[0]*r+A[2]*n,e[1]=A[1]*r+A[3]*n,e};O.transformMat2d=function(e,t,A){var r=t[0],n=t[1];return e[0]=A[0]*r+A[2]*n+A[4],e[1]=A[1]*r+A[3]*n+A[5],e};O.transformMat3=function(e,t,A){var r=t[0],n=t[1];return e[0]=A[0]*r+A[3]*n+A[6],e[1]=A[1]*r+A[4]*n+A[7],e};O.transformMat4=function(e,t,A){var r=t[0],n=t[1];return e[0]=A[0]*r+A[4]*n+A[12],e[1]=A[1]*r+A[5]*n+A[13],e};O.forEach=function(){var e=O.create();return function(t,A,r,n,i,a){var s,o;for(A||(A=2),r||(r=0),n?o=Math.min(n*A+r,t.length):o=t.length,s=r;s<o;s+=A)e[0]=t[s],e[1]=t[s+1],i(e,e,a),t[s]=e[0],t[s+1]=e[1];return t}}();var J=function(e,t){e=e||0,t=t||0,this.array=O.fromValues(e,t),this._dirty=!0};J.prototype={constructor:J,add:function(e){return O.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t){return this.array[0]=e,this.array[1]=t,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this._dirty=!0,this},clone:function(){return new J(this.x,this.y)},copy:function(e){return O.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return O.cross(e.array,this.array,t.array),e._dirty=!0,this},dist:function(e){return O.dist(this.array,e.array)},distance:function(e){return O.distance(this.array,e.array)},div:function(e){return O.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return O.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return O.dot(this.array,e.array)},len:function(){return O.len(this.array)},length:function(){return O.length(this.array)},lerp:function(e,t,A){return O.lerp(this.array,e.array,t.array,A),this._dirty=!0,this},min:function(e){return O.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return O.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return O.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return O.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return O.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return O.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return O.random(this.array,e),this._dirty=!0,this},scale:function(e){return O.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return O.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return O.sqrDist(this.array,e.array)},squaredDistance:function(e){return O.squaredDistance(this.array,e.array)},sqrLen:function(){return O.sqrLen(this.array)},squaredLength:function(){return O.squaredLength(this.array)},sub:function(e){return O.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return O.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat2:function(e){return O.transformMat2(this.array,this.array,e.array),this._dirty=!0,this},transformMat2d:function(e){return O.transformMat2d(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return O.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return O.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};if(Object.defineProperty){var ol=J.prototype;Object.defineProperty(ol,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Object.defineProperty(ol,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}})}J.add=function(e,t,A){return O.add(e.array,t.array,A.array),e._dirty=!0,e};J.set=function(e,t,A){return O.set(e.array,t,A),e._dirty=!0,e};J.copy=function(e,t){return O.copy(e.array,t.array),e._dirty=!0,e};J.cross=function(e,t,A){return O.cross(e.array,t.array,A.array),e._dirty=!0,e};J.dist=function(e,t){return O.distance(e.array,t.array)};J.distance=J.dist;J.div=function(e,t,A){return O.divide(e.array,t.array,A.array),e._dirty=!0,e};J.divide=J.div;J.dot=function(e,t){return O.dot(e.array,t.array)};J.len=function(e){return O.length(e.array)};J.lerp=function(e,t,A,r){return O.lerp(e.array,t.array,A.array,r),e._dirty=!0,e};J.min=function(e,t,A){return O.min(e.array,t.array,A.array),e._dirty=!0,e};J.max=function(e,t,A){return O.max(e.array,t.array,A.array),e._dirty=!0,e};J.mul=function(e,t,A){return O.multiply(e.array,t.array,A.array),e._dirty=!0,e};J.multiply=J.mul;J.negate=function(e,t){return O.negate(e.array,t.array),e._dirty=!0,e};J.normalize=function(e,t){return O.normalize(e.array,t.array),e._dirty=!0,e};J.random=function(e,t){return O.random(e.array,t),e._dirty=!0,e};J.scale=function(e,t,A){return O.scale(e.array,t.array,A),e._dirty=!0,e};J.scaleAndAdd=function(e,t,A,r){return O.scaleAndAdd(e.array,t.array,A.array,r),e._dirty=!0,e};J.sqrDist=function(e,t){return O.sqrDist(e.array,t.array)};J.squaredDistance=J.sqrDist;J.sqrLen=function(e){return O.sqrLen(e.array)};J.squaredLength=J.sqrLen;J.sub=function(e,t,A){return O.subtract(e.array,t.array,A.array),e._dirty=!0,e};J.subtract=J.sub;J.transformMat2=function(e,t,A){return O.transformMat2(e.array,t.array,A.array),e._dirty=!0,e};J.transformMat2d=function(e,t,A){return O.transformMat2d(e.array,t.array,A.array),e._dirty=!0,e};J.transformMat3=function(e,t,A){return O.transformMat3(e.array,t.array,A.array),e._dirty=!0,e};J.transformMat4=function(e,t,A){return O.transformMat4(e.array,t.array,A.array),e._dirty=!0,e};var ll=1,ul=2,Oa=3,cl={};function Eg(e){for(var t=e.split(`
`),A=0,r=t.length;A<r;A++)t[A]=A+1+": "+t[A];return t.join(`
`)}function fl(e,t,A){if(!e.getShaderParameter(t,e.COMPILE_STATUS))return[e.getShaderInfoLog(t),Eg(A)].join(`
`)}var hl=new ue.Float32Array(16),Tg=tt.extend({uniformSemantics:{},attributes:{}},function(){this._locations={},this._textureSlot=0,this._program=null},{bind:function(e){this._textureSlot=0,e.gl.useProgram(this._program)},hasUniform:function(e){var t=this._locations[e];return t!=null},useTextureSlot:function(e,t,A){t&&(e.gl.activeTexture(e.gl.TEXTURE0+A),t.isRenderable()?t.bind(e):t.unbind(e))},currentTextureSlot:function(){return this._textureSlot},resetTextureSlot:function(e){this._textureSlot=e||0},takeCurrentTextureSlot:function(e,t){var A=this._textureSlot;return this.useTextureSlot(e,t,A),this._textureSlot++,A},setUniform:function(e,t,A,r){var n=this._locations,i=n[A];if(i==null)return!1;switch(t){case"m4":if(!(r instanceof Float32Array)){for(var a=0;a<r.length;a++)hl[a]=r[a];r=hl}e.uniformMatrix4fv(i,!1,r);break;case"2i":e.uniform2i(i,r[0],r[1]);break;case"2f":e.uniform2f(i,r[0],r[1]);break;case"3i":e.uniform3i(i,r[0],r[1],r[2]);break;case"3f":e.uniform3f(i,r[0],r[1],r[2]);break;case"4i":e.uniform4i(i,r[0],r[1],r[2],r[3]);break;case"4f":e.uniform4f(i,r[0],r[1],r[2],r[3]);break;case"1i":e.uniform1i(i,r);break;case"1f":e.uniform1f(i,r);break;case"1fv":e.uniform1fv(i,r);break;case"1iv":e.uniform1iv(i,r);break;case"2iv":e.uniform2iv(i,r);break;case"2fv":e.uniform2fv(i,r);break;case"3iv":e.uniform3iv(i,r);break;case"3fv":e.uniform3fv(i,r);break;case"4iv":e.uniform4iv(i,r);break;case"4fv":e.uniform4fv(i,r);break;case"m2":case"m2v":e.uniformMatrix2fv(i,!1,r);break;case"m3":case"m3v":e.uniformMatrix3fv(i,!1,r);break;case"m4v":if(Array.isArray(r)&&Array.isArray(r[0])){for(var s=new ue.Float32Array(r.length*16),o=0,a=0;a<r.length;a++)for(var l=r[a],u=0;u<16;u++)s[o++]=l[u];e.uniformMatrix4fv(i,!1,s)}else e.uniformMatrix4fv(i,!1,r);break}return!0},setUniformOfSemantic:function(e,t,A){var r=this.uniformSemantics[t];return r?this.setUniform(e,r.type,r.symbol,A):!1},enableAttributes:function(e,t,A){var r=e.gl,n=this._program,i=this._locations,a;A?a=A.__enabledAttributeList:a=cl[e.__uid__],a||(A?a=A.__enabledAttributeList=[]:a=cl[e.__uid__]=[]);for(var s=[],o=0;o<t.length;o++){var l=t[o];if(!this.attributes[l]){s[o]=-1;continue}var u=i[l];if(u==null){if(u=r.getAttribLocation(n,l),u===-1){s[o]=-1;continue}i[l]=u}s[o]=u,a[u]?a[u]=ul:a[u]=ll}for(var o=0;o<a.length;o++)switch(a[o]){case ll:r.enableVertexAttribArray(o),a[o]=Oa;break;case ul:a[o]=Oa;break;case Oa:r.disableVertexAttribArray(o),a[o]=0;break}return s},getAttribLocation:function(e,t){var A=this._locations,r=A[t];return r==null&&(r=e.getAttribLocation(this._program,t),A[t]=r),r},buildProgram:function(e,t,A,r){var n=e.createShader(e.VERTEX_SHADER),i=e.createProgram();e.shaderSource(n,A),e.compileShader(n);var a=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(a,r),e.compileShader(a);var s=fl(e,n,A);if(s||(s=fl(e,a,r),s))return s;if(e.attachShader(i,n),e.attachShader(i,a),t.attributeSemantics.POSITION)e.bindAttribLocation(i,0,t.attributeSemantics.POSITION.symbol);else{var o=Object.keys(this.attributes);e.bindAttribLocation(i,0,o[0])}if(e.linkProgram(i),e.deleteShader(n),e.deleteShader(a),this._program=i,this.vertexCode=A,this.fragmentCode=r,!e.getProgramParameter(i,e.LINK_STATUS))return`Could not link program
`+e.getProgramInfoLog(i);for(var l=0;l<t.uniforms.length;l++){var u=t.uniforms[l];this._locations[u]=e.getUniformLocation(i,u)}}}),Fg=/for\s*?\(int\s*?_idx_\s*\=\s*([\w-]+)\;\s*_idx_\s*<\s*([\w-]+);\s*_idx_\s*\+\+\s*\)\s*\{\{([\s\S]+?)(?=\}\})\}\}/g;function dl(e,t,A){function r(a,s,o,l){var u="";isNaN(s)&&(s in t?s=t[s]:s=n[s]),isNaN(o)&&(o in t?o=t[o]:o=n[o]);for(var c=parseInt(s);c<parseInt(o);c++)u+="{"+l.replace(/float\s*\(\s*_idx_\s*\)/g,c.toFixed(1)).replace(/_idx_/g,c)+"}";return u}var n={};for(var i in A)n[i+"_COUNT"]=A[i];return e.replace(Fg,r)}function Pa(e,t,A){var r=[];if(t)for(var n in t){var i=t[n];i>0&&r.push("#define "+n.toUpperCase()+"_COUNT "+i)}if(A)for(var a=0;a<A.length;a++){var s=A[a];r.push("#define "+s.toUpperCase()+"_ENABLED")}for(var s in e){var o=e[s];o===null?r.push("#define "+s):r.push("#define "+s+" "+o.toString())}return r.join(`
`)}function Ug(e){for(var t=[],A=0;A<e.length;A++)t.push("#extension GL_"+e[A]+" : enable");return t.join(`
`)}function Sg(e){return["precision",e,"float"].join(" ")+`;
`+["precision",e,"int"].join(" ")+`;
`+["precision",e,"sampler2D"].join(" ")+`;
`}function Ic(e){this._renderer=e,this._cache={}}Ic.prototype.getProgram=function(e,t,A){var r=this._cache,n=e.isSkinnedMesh&&e.isSkinnedMesh(),i=e.isInstancedMesh&&e.isInstancedMesh(),a="s"+t.shader.shaderID+"m"+t.getProgramKey();A&&(a+="se"+A.getProgramKey(e.lightGroup)),n&&(a+=",sk"+e.joints.length),i&&(a+=",is");var _=r[a];if(_)return _;var s=A?A.getLightsNumbers(e.lightGroup):{},o=this._renderer,l=o.gl,u=t.getEnabledTextures(),c="";if(n){var f={SKINNING:null,JOINT_COUNT:e.joints.length};e.joints.length>o.getMaxJointNumber()&&(f.USE_SKIN_MATRICES_TEXTURE=null),c+=`
`+Pa(f)+`
`}i&&(c+=`
#define INSTANCING
`);var h=c+Pa(t.vertexDefines,s,u),d=c+Pa(t.fragmentDefines,s,u),g=h+`
`+t.shader.vertex,v=["OES_standard_derivatives","EXT_shader_texture_lod"].filter(function(y){return o.getGLExtension(y)!=null});v.indexOf("EXT_shader_texture_lod")>=0&&(d+=`
#define SUPPORT_TEXTURE_LOD`),v.indexOf("OES_standard_derivatives")>=0&&(d+=`
#define SUPPORT_STANDARD_DERIVATIVES`);var p=Ug(v)+`
`+Sg(t.precision)+`
`+d+`
`+t.shader.fragment,m=dl(g,t.vertexDefines,s),B=dl(p,t.fragmentDefines,s),_=new Tg;_.uniformSemantics=t.shader.uniformSemantics,_.attributes=t.shader.attributes;var x=_.buildProgram(l,t.shader,m,B);return _.__error=x,r[a]=_,_};var gl=/uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g,bg=/attribute\s+(float|int|vec2|vec3|vec4)\s+([\s\S]*?);/g,vl=/#define\s+(\w+)?(\s+[\d-.]+)?\s*;?\s*\n/g,Qg={bool:"1i",int:"1i",sampler2D:"t",samplerCube:"t",float:"1f",vec2:"2f",vec3:"3f",vec4:"4f",ivec2:"2i",ivec3:"3i",ivec4:"4i",mat2:"m2",mat3:"m3",mat4:"m4"};function qt(e){for(var t=[],A=0;A<e;A++)t[A]=0;return t}var pl={bool:function(){return!0},int:function(){return 0},float:function(){return 0},sampler2D:function(){return null},samplerCube:function(){return null},vec2:function(){return qt(2)},vec3:function(){return qt(3)},vec4:function(){return qt(4)},ivec2:function(){return qt(2)},ivec3:function(){return qt(3)},ivec4:function(){return qt(4)},mat2:function(){return qt(4)},mat3:function(){return qt(9)},mat4:function(){return qt(16)},array:function(){return[]}},Ms=["POSITION","NORMAL","BINORMAL","TANGENT","TEXCOORD","TEXCOORD_0","TEXCOORD_1","COLOR","JOINT","WEIGHT"],Dc=["SKIN_MATRIX","VIEWPORT_SIZE","VIEWPORT","DEVICEPIXELRATIO","WINDOW_SIZE","NEAR","FAR","TIME"],Mc=["WORLD","VIEW","PROJECTION","WORLDVIEW","VIEWPROJECTION","WORLDVIEWPROJECTION","WORLDINVERSE","VIEWINVERSE","PROJECTIONINVERSE","WORLDVIEWINVERSE","VIEWPROJECTIONINVERSE","WORLDVIEWPROJECTIONINVERSE","WORLDTRANSPOSE","VIEWTRANSPOSE","PROJECTIONTRANSPOSE","WORLDVIEWTRANSPOSE","VIEWPROJECTIONTRANSPOSE","WORLDVIEWPROJECTIONTRANSPOSE","WORLDINVERSETRANSPOSE","VIEWINVERSETRANSPOSE","PROJECTIONINVERSETRANSPOSE","WORLDVIEWINVERSETRANSPOSE","VIEWPROJECTIONINVERSETRANSPOSE","WORLDVIEWPROJECTIONINVERSETRANSPOSE"],Lg={vec4:4,vec3:3,vec2:2,float:1},Ga={},Rc={};function Ig(e,t){var A="vertex:"+e+"fragment:"+t;if(Ga[A])return Ga[A];var r=be.genGUID();return Ga[A]=r,Rc[r]={vertex:e,fragment:t},r}function ml(e){return e.replace(/[ \t]*\/\/.*\n/g,"").replace(/[ \t]*\/\*[\s\S]*?\*\//g,"")}function nr(){console.error("Wrong uniform/attributes syntax")}function _l(e,t){for(var A=/[,=\(\):]/,r=t.replace(/:\s*\[\s*(.*)\s*\]/g,"="+e+"($1)").replace(/\s+/g,"").split(/(?=[,=\(\):])/g),n=[],i=0;i<r.length;i++)r[i].match(A)?n.push(r[i].charAt(0),r[i].slice(1)):n.push(r[i]);r=n;var a=0,s=1,o=2,l=3,u=4,c=5,f=a,h={},d=null,g;v(r[0]);function v(B){B||nr();var _=B.match(/\[(.*?)\]/);g=B.replace(/\[(.*?)\]/,""),h[g]={},_&&(h[g].isArray=!0,h[g].arraySize=_[1])}for(var i=1;i<r.length;i++){var p=r[i];if(p){if(p==="="){if(f!==a&&f!==l){nr();break}f=s;continue}else if(p===":"){f=u;continue}else if(p===","){if(f===o){if(!(d instanceof Array)){nr();break}d.push(+r[++i])}else f=c;continue}else if(p===")"){h[g].value=new ue.Float32Array(d),d=null,f=c;continue}else if(p==="("){if(f!==o){nr();break}if(!(d instanceof Array)){nr();break}d.push(+r[++i]);continue}else if(p.indexOf("vec")>=0){if(f!==s&&f!==u){nr();break}f=o,d=[];continue}else if(f===s){e==="bool"?h[g].value=p==="true":h[g].value=parseFloat(p),d=null;continue}else if(f===u){var m=p;Ms.indexOf(m)>=0||Dc.indexOf(m)>=0||Mc.indexOf(m)>=0?h[g].semantic=m:m==="ignore"||m==="unconfigurable"?h[g].ignore=!0:e==="bool"?h[g].value=m==="true":h[g].value=parseFloat(m);continue}v(p),f=a}}return h}function K(e,t){typeof e=="object"&&(t=e.fragment,e=e.vertex),e=ml(e),t=ml(t),this._shaderID=Ig(e,t),this._vertexCode=K.parseImport(e),this._fragmentCode=K.parseImport(t),this.attributeSemantics={},this.matrixSemantics={},this.uniformSemantics={},this.matrixSemanticKeys=[],this.uniformTemplates={},this.attributes={},this.textures={},this.vertexDefines={},this.fragmentDefines={},this._parseAttributes(),this._parseUniforms(),this._parseDefines()}K.prototype={constructor:K,createUniforms:function(){var e={};for(var t in this.uniformTemplates){var A=this.uniformTemplates[t];e[t]={type:A.type,value:A.value()}}return e},_parseImport:function(){this._vertexCode=K.parseImport(this.vertex),this._fragmentCode=K.parseImport(this.fragment)},_addSemanticUniform:function(e,t,A){if(Ms.indexOf(A)>=0)this.attributeSemantics[A]={symbol:e,type:t};else if(Mc.indexOf(A)>=0){var r=!1,n=A;A.match(/TRANSPOSE$/)&&(r=!0,n=A.slice(0,-9)),this.matrixSemantics[A]={symbol:e,type:t,isTranspose:r,semanticNoTranspose:n}}else Dc.indexOf(A)>=0&&(this.uniformSemantics[A]={symbol:e,type:t})},_addMaterialUniform:function(e,t,A,r,n,i){i[e]={type:A,value:n?pl.array:r||pl[t],semantic:null}},_parseUniforms:function(){var e={},t=this,A="vertex";this._uniformList=[],this._vertexCode=this._vertexCode.replace(gl,n),A="fragment",this._fragmentCode=this._fragmentCode.replace(gl,n),t.matrixSemanticKeys=Object.keys(this.matrixSemantics);function r(i){return i!=null?function(){return i}:null}function n(i,a,s){var o=_l(a,s),l=[];for(var u in o){var c=o[u],f=c.semantic,h=u,d=Qg[a],g=r(o[u].value);o[u].isArray&&(h+="["+o[u].arraySize+"]",d+="v"),l.push(h),t._uniformList.push(u),c.ignore||((a==="sampler2D"||a==="samplerCube")&&(t.textures[u]={shaderType:A,type:a}),f?t._addSemanticUniform(u,d,f):t._addMaterialUniform(u,a,d,g,o[u].isArray,e))}return l.length>0?"uniform "+a+" "+l.join(",")+`;
`:""}this.uniformTemplates=e},_parseAttributes:function(){var e={},t=this;this._vertexCode=this._vertexCode.replace(bg,A);function A(r,n,i){var a=_l(n,i),s=Lg[n]||1,o=[];for(var l in a){var u=a[l].semantic;if(e[l]={type:"float",size:s,semantic:u||null},u){if(Ms.indexOf(u)<0)throw new Error('Unkown semantic "'+u+'"');t.attributeSemantics[u]={symbol:l,type:n}}o.push(l)}return"attribute "+n+" "+o.join(",")+`;
`}this.attributes=e},_parseDefines:function(){var e=this,t="vertex";this._vertexCode=this._vertexCode.replace(vl,A),t="fragment",this._fragmentCode=this._fragmentCode.replace(vl,A);function A(r,n,i){var a=t==="vertex"?e.vertexDefines:e.fragmentDefines;return a[n]||(i==="false"?a[n]=!1:i==="true"?a[n]=!0:a[n]=i?isNaN(parseFloat(i))?i.trim():parseFloat(i):null),""}},clone:function(){var e=Rc[this._shaderID],t=new K(e.vertex,e.fragment);return t}};Object.defineProperty&&(Object.defineProperty(K.prototype,"shaderID",{get:function(){return this._shaderID}}),Object.defineProperty(K.prototype,"vertex",{get:function(){return this._vertexCode}}),Object.defineProperty(K.prototype,"fragment",{get:function(){return this._fragmentCode}}),Object.defineProperty(K.prototype,"uniforms",{get:function(){return this._uniformList}}));var Dg=/(@import)\s*([0-9a-zA-Z_\-\.]*)/g;K.parseImport=function(e){return e=e.replace(Dg,function(n,A,r){var n=K.source(r);return n?K.parseImport(n):(console.error('Shader chunk "'+r+'" not existed in library'),"")}),e};var Mg=/(@export)\s*([0-9a-zA-Z_\-\.]*)\s*\n([\s\S]*?)@end/g;K.import=function(e){e.replace(Mg,function(t,A,r,i){var i=i.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+\x24)/g,"");if(i){for(var a=r.split("."),s=K.codes,o=0,l;o<a.length-1;)l=a[o++],s[l]||(s[l]={}),s=s[l];l=a[o],s[l]=i}return i})};K.codes={};K.source=function(e){for(var t=e.split("."),A=K.codes,r=0;A&&r<t.length;){var n=t[r++];A=A[n]}return typeof A!="string"?(console.error('Shader "'+e+'" not existed in library'),""):A};const Nc=`@export clay.prez.vertex
uniform mat4 WVP : WORLDVIEWPROJECTION;
attribute vec3 pos : POSITION;
attribute vec2 uv : TEXCOORD_0;
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec2 v_Texcoord;
void main()
{
 vec4 P = vec4(pos, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = WVP * P;
 v_Texcoord = uv * uvRepeat + uvOffset;
}
@end
@export clay.prez.fragment
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
varying vec2 v_Texcoord;
void main()
{
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
 gl_FragColor = vec4(0.0,0.0,0.0,1.0);
}
@end`;var R={};R.create=function(){var e=new At(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};R.clone=function(e){var t=new At(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t};R.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};R.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};R.transpose=function(e,t){if(e===t){var A=t[1],r=t[2],n=t[3],i=t[6],a=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=A,e[6]=t[9],e[7]=t[13],e[8]=r,e[9]=i,e[11]=t[14],e[12]=n,e[13]=a,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e};R.invert=function(e,t){var A=t[0],r=t[1],n=t[2],i=t[3],a=t[4],s=t[5],o=t[6],l=t[7],u=t[8],c=t[9],f=t[10],h=t[11],d=t[12],g=t[13],v=t[14],p=t[15],m=A*s-r*a,B=A*o-n*a,_=A*l-i*a,x=r*o-n*s,y=r*l-i*s,T=n*l-i*o,E=u*g-c*d,F=u*v-f*d,S=u*p-h*d,U=c*v-f*g,I=c*p-h*g,Q=f*p-h*v,b=m*Q-B*I+_*U+x*S-y*F+T*E;return b?(b=1/b,e[0]=(s*Q-o*I+l*U)*b,e[1]=(n*I-r*Q-i*U)*b,e[2]=(g*T-v*y+p*x)*b,e[3]=(f*y-c*T-h*x)*b,e[4]=(o*S-a*Q-l*F)*b,e[5]=(A*Q-n*S+i*F)*b,e[6]=(v*_-d*T-p*B)*b,e[7]=(u*T-f*_+h*B)*b,e[8]=(a*I-s*S+l*E)*b,e[9]=(r*S-A*I-i*E)*b,e[10]=(d*y-g*_+p*m)*b,e[11]=(c*_-u*y-h*m)*b,e[12]=(s*F-a*U-o*E)*b,e[13]=(A*U-r*F+n*E)*b,e[14]=(g*B-d*x-v*m)*b,e[15]=(u*x-c*B+f*m)*b,e):null};R.adjoint=function(e,t){var A=t[0],r=t[1],n=t[2],i=t[3],a=t[4],s=t[5],o=t[6],l=t[7],u=t[8],c=t[9],f=t[10],h=t[11],d=t[12],g=t[13],v=t[14],p=t[15];return e[0]=s*(f*p-h*v)-c*(o*p-l*v)+g*(o*h-l*f),e[1]=-(r*(f*p-h*v)-c*(n*p-i*v)+g*(n*h-i*f)),e[2]=r*(o*p-l*v)-s*(n*p-i*v)+g*(n*l-i*o),e[3]=-(r*(o*h-l*f)-s*(n*h-i*f)+c*(n*l-i*o)),e[4]=-(a*(f*p-h*v)-u*(o*p-l*v)+d*(o*h-l*f)),e[5]=A*(f*p-h*v)-u*(n*p-i*v)+d*(n*h-i*f),e[6]=-(A*(o*p-l*v)-a*(n*p-i*v)+d*(n*l-i*o)),e[7]=A*(o*h-l*f)-a*(n*h-i*f)+u*(n*l-i*o),e[8]=a*(c*p-h*g)-u*(s*p-l*g)+d*(s*h-l*c),e[9]=-(A*(c*p-h*g)-u*(r*p-i*g)+d*(r*h-i*c)),e[10]=A*(s*p-l*g)-a*(r*p-i*g)+d*(r*l-i*s),e[11]=-(A*(s*h-l*c)-a*(r*h-i*c)+u*(r*l-i*s)),e[12]=-(a*(c*v-f*g)-u*(s*v-o*g)+d*(s*f-o*c)),e[13]=A*(c*v-f*g)-u*(r*v-n*g)+d*(r*f-n*c),e[14]=-(A*(s*v-o*g)-a*(r*v-n*g)+d*(r*o-n*s)),e[15]=A*(s*f-o*c)-a*(r*f-n*c)+u*(r*o-n*s),e};R.determinant=function(e){var t=e[0],A=e[1],r=e[2],n=e[3],i=e[4],a=e[5],s=e[6],o=e[7],l=e[8],u=e[9],c=e[10],f=e[11],h=e[12],d=e[13],g=e[14],v=e[15],p=t*a-A*i,m=t*s-r*i,B=t*o-n*i,_=A*s-r*a,x=A*o-n*a,y=r*o-n*s,T=l*d-u*h,E=l*g-c*h,F=l*v-f*h,S=u*g-c*d,U=u*v-f*d,I=c*v-f*g;return p*I-m*U+B*S+_*F-x*E+y*T};R.multiply=function(e,t,A){var r=t[0],n=t[1],i=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],c=t[8],f=t[9],h=t[10],d=t[11],g=t[12],v=t[13],p=t[14],m=t[15],B=A[0],_=A[1],x=A[2],y=A[3];return e[0]=B*r+_*s+x*c+y*g,e[1]=B*n+_*o+x*f+y*v,e[2]=B*i+_*l+x*h+y*p,e[3]=B*a+_*u+x*d+y*m,B=A[4],_=A[5],x=A[6],y=A[7],e[4]=B*r+_*s+x*c+y*g,e[5]=B*n+_*o+x*f+y*v,e[6]=B*i+_*l+x*h+y*p,e[7]=B*a+_*u+x*d+y*m,B=A[8],_=A[9],x=A[10],y=A[11],e[8]=B*r+_*s+x*c+y*g,e[9]=B*n+_*o+x*f+y*v,e[10]=B*i+_*l+x*h+y*p,e[11]=B*a+_*u+x*d+y*m,B=A[12],_=A[13],x=A[14],y=A[15],e[12]=B*r+_*s+x*c+y*g,e[13]=B*n+_*o+x*f+y*v,e[14]=B*i+_*l+x*h+y*p,e[15]=B*a+_*u+x*d+y*m,e};R.multiplyAffine=function(e,t,A){var r=t[0],n=t[1],i=t[2],a=t[4],s=t[5],o=t[6],l=t[8],u=t[9],c=t[10],f=t[12],h=t[13],d=t[14],g=A[0],v=A[1],p=A[2];return e[0]=g*r+v*a+p*l,e[1]=g*n+v*s+p*u,e[2]=g*i+v*o+p*c,g=A[4],v=A[5],p=A[6],e[4]=g*r+v*a+p*l,e[5]=g*n+v*s+p*u,e[6]=g*i+v*o+p*c,g=A[8],v=A[9],p=A[10],e[8]=g*r+v*a+p*l,e[9]=g*n+v*s+p*u,e[10]=g*i+v*o+p*c,g=A[12],v=A[13],p=A[14],e[12]=g*r+v*a+p*l+f,e[13]=g*n+v*s+p*u+h,e[14]=g*i+v*o+p*c+d,e};R.mul=R.multiply;R.mulAffine=R.multiplyAffine;R.translate=function(e,t,A){var r=A[0],n=A[1],i=A[2],a,s,o,l,u,c,f,h,d,g,v,p;return t===e?(e[12]=t[0]*r+t[4]*n+t[8]*i+t[12],e[13]=t[1]*r+t[5]*n+t[9]*i+t[13],e[14]=t[2]*r+t[6]*n+t[10]*i+t[14],e[15]=t[3]*r+t[7]*n+t[11]*i+t[15]):(a=t[0],s=t[1],o=t[2],l=t[3],u=t[4],c=t[5],f=t[6],h=t[7],d=t[8],g=t[9],v=t[10],p=t[11],e[0]=a,e[1]=s,e[2]=o,e[3]=l,e[4]=u,e[5]=c,e[6]=f,e[7]=h,e[8]=d,e[9]=g,e[10]=v,e[11]=p,e[12]=a*r+u*n+d*i+t[12],e[13]=s*r+c*n+g*i+t[13],e[14]=o*r+f*n+v*i+t[14],e[15]=l*r+h*n+p*i+t[15]),e};R.scale=function(e,t,A){var r=A[0],n=A[1],i=A[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*i,e[9]=t[9]*i,e[10]=t[10]*i,e[11]=t[11]*i,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};R.rotate=function(e,t,A,r){var n=r[0],i=r[1],a=r[2],s=Math.sqrt(n*n+i*i+a*a),o,l,u,c,f,h,d,g,v,p,m,B,_,x,y,T,E,F,S,U,I,Q,b,N;return Math.abs(s)<Ii?null:(s=1/s,n*=s,i*=s,a*=s,o=Math.sin(A),l=Math.cos(A),u=1-l,c=t[0],f=t[1],h=t[2],d=t[3],g=t[4],v=t[5],p=t[6],m=t[7],B=t[8],_=t[9],x=t[10],y=t[11],T=n*n*u+l,E=i*n*u+a*o,F=a*n*u-i*o,S=n*i*u-a*o,U=i*i*u+l,I=a*i*u+n*o,Q=n*a*u+i*o,b=i*a*u-n*o,N=a*a*u+l,e[0]=c*T+g*E+B*F,e[1]=f*T+v*E+_*F,e[2]=h*T+p*E+x*F,e[3]=d*T+m*E+y*F,e[4]=c*S+g*U+B*I,e[5]=f*S+v*U+_*I,e[6]=h*S+p*U+x*I,e[7]=d*S+m*U+y*I,e[8]=c*Q+g*b+B*N,e[9]=f*Q+v*b+_*N,e[10]=h*Q+p*b+x*N,e[11]=d*Q+m*b+y*N,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)};R.rotateX=function(e,t,A){var r=Math.sin(A),n=Math.cos(A),i=t[4],a=t[5],s=t[6],o=t[7],l=t[8],u=t[9],c=t[10],f=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=i*n+l*r,e[5]=a*n+u*r,e[6]=s*n+c*r,e[7]=o*n+f*r,e[8]=l*n-i*r,e[9]=u*n-a*r,e[10]=c*n-s*r,e[11]=f*n-o*r,e};R.rotateY=function(e,t,A){var r=Math.sin(A),n=Math.cos(A),i=t[0],a=t[1],s=t[2],o=t[3],l=t[8],u=t[9],c=t[10],f=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=i*n-l*r,e[1]=a*n-u*r,e[2]=s*n-c*r,e[3]=o*n-f*r,e[8]=i*r+l*n,e[9]=a*r+u*n,e[10]=s*r+c*n,e[11]=o*r+f*n,e};R.rotateZ=function(e,t,A){var r=Math.sin(A),n=Math.cos(A),i=t[0],a=t[1],s=t[2],o=t[3],l=t[4],u=t[5],c=t[6],f=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=i*n+l*r,e[1]=a*n+u*r,e[2]=s*n+c*r,e[3]=o*n+f*r,e[4]=l*n-i*r,e[5]=u*n-a*r,e[6]=c*n-s*r,e[7]=f*n-o*r,e};R.fromRotationTranslation=function(e,t,A){var r=t[0],n=t[1],i=t[2],a=t[3],s=r+r,o=n+n,l=i+i,u=r*s,c=r*o,f=r*l,h=n*o,d=n*l,g=i*l,v=a*s,p=a*o,m=a*l;return e[0]=1-(h+g),e[1]=c+m,e[2]=f-p,e[3]=0,e[4]=c-m,e[5]=1-(u+g),e[6]=d+v,e[7]=0,e[8]=f+p,e[9]=d-v,e[10]=1-(u+h),e[11]=0,e[12]=A[0],e[13]=A[1],e[14]=A[2],e[15]=1,e};R.fromQuat=function(e,t){var A=t[0],r=t[1],n=t[2],i=t[3],a=A+A,s=r+r,o=n+n,l=A*a,u=r*a,c=r*s,f=n*a,h=n*s,d=n*o,g=i*a,v=i*s,p=i*o;return e[0]=1-c-d,e[1]=u+p,e[2]=f-v,e[3]=0,e[4]=u-p,e[5]=1-l-d,e[6]=h+g,e[7]=0,e[8]=f+v,e[9]=h-g,e[10]=1-l-c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};R.frustum=function(e,t,A,r,n,i,a){var s=1/(A-t),o=1/(n-r),l=1/(i-a);return e[0]=i*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=i*2*o,e[6]=0,e[7]=0,e[8]=(A+t)*s,e[9]=(n+r)*o,e[10]=(a+i)*l,e[11]=-1,e[12]=0,e[13]=0,e[14]=a*i*2*l,e[15]=0,e};R.perspective=function(e,t,A,r,n){var i=1/Math.tan(t/2),a=1/(r-n);return e[0]=i/A,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=i,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(n+r)*a,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*n*r*a,e[15]=0,e};R.ortho=function(e,t,A,r,n,i,a){var s=1/(t-A),o=1/(r-n),l=1/(i-a);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*o,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*l,e[11]=0,e[12]=(t+A)*s,e[13]=(n+r)*o,e[14]=(a+i)*l,e[15]=1,e};R.lookAt=function(e,t,A,r){var n,i,a,s,o,l,u,c,f,h,d=t[0],g=t[1],v=t[2],p=r[0],m=r[1],B=r[2],_=A[0],x=A[1],y=A[2];return Math.abs(d-_)<Ii&&Math.abs(g-x)<Ii&&Math.abs(v-y)<Ii?R.identity(e):(u=d-_,c=g-x,f=v-y,h=1/Math.sqrt(u*u+c*c+f*f),u*=h,c*=h,f*=h,n=m*f-B*c,i=B*u-p*f,a=p*c-m*u,h=Math.sqrt(n*n+i*i+a*a),h?(h=1/h,n*=h,i*=h,a*=h):(n=0,i=0,a=0),s=c*a-f*i,o=f*n-u*a,l=u*i-c*n,h=Math.sqrt(s*s+o*o+l*l),h?(h=1/h,s*=h,o*=h,l*=h):(s=0,o=0,l=0),e[0]=n,e[1]=s,e[2]=u,e[3]=0,e[4]=i,e[5]=o,e[6]=c,e[7]=0,e[8]=a,e[9]=l,e[10]=f,e[11]=0,e[12]=-(n*d+i*g+a*v),e[13]=-(s*d+o*g+l*v),e[14]=-(u*d+c*g+f*v),e[15]=1,e)};R.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2)+Math.pow(e[9],2)+Math.pow(e[10],2)+Math.pow(e[11],2)+Math.pow(e[12],2)+Math.pow(e[13],2)+Math.pow(e[14],2)+Math.pow(e[15],2))};var C={};C.create=function(){var e=new At(3);return e[0]=0,e[1]=0,e[2]=0,e};C.clone=function(e){var t=new At(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t};C.fromValues=function(e,t,A){var r=new At(3);return r[0]=e,r[1]=t,r[2]=A,r};C.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};C.set=function(e,t,A,r){return e[0]=t,e[1]=A,e[2]=r,e};C.add=function(e,t,A){return e[0]=t[0]+A[0],e[1]=t[1]+A[1],e[2]=t[2]+A[2],e};C.subtract=function(e,t,A){return e[0]=t[0]-A[0],e[1]=t[1]-A[1],e[2]=t[2]-A[2],e};C.sub=C.subtract;C.multiply=function(e,t,A){return e[0]=t[0]*A[0],e[1]=t[1]*A[1],e[2]=t[2]*A[2],e};C.mul=C.multiply;C.divide=function(e,t,A){return e[0]=t[0]/A[0],e[1]=t[1]/A[1],e[2]=t[2]/A[2],e};C.div=C.divide;C.min=function(e,t,A){return e[0]=Math.min(t[0],A[0]),e[1]=Math.min(t[1],A[1]),e[2]=Math.min(t[2],A[2]),e};C.max=function(e,t,A){return e[0]=Math.max(t[0],A[0]),e[1]=Math.max(t[1],A[1]),e[2]=Math.max(t[2],A[2]),e};C.scale=function(e,t,A){return e[0]=t[0]*A,e[1]=t[1]*A,e[2]=t[2]*A,e};C.scaleAndAdd=function(e,t,A,r){return e[0]=t[0]+A[0]*r,e[1]=t[1]+A[1]*r,e[2]=t[2]+A[2]*r,e};C.distance=function(e,t){var A=t[0]-e[0],r=t[1]-e[1],n=t[2]-e[2];return Math.sqrt(A*A+r*r+n*n)};C.dist=C.distance;C.squaredDistance=function(e,t){var A=t[0]-e[0],r=t[1]-e[1],n=t[2]-e[2];return A*A+r*r+n*n};C.sqrDist=C.squaredDistance;C.length=function(e){var t=e[0],A=e[1],r=e[2];return Math.sqrt(t*t+A*A+r*r)};C.len=C.length;C.squaredLength=function(e){var t=e[0],A=e[1],r=e[2];return t*t+A*A+r*r};C.sqrLen=C.squaredLength;C.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e};C.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e};C.normalize=function(e,t){var A=t[0],r=t[1],n=t[2],i=A*A+r*r+n*n;return i>0&&(i=1/Math.sqrt(i),e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i),e};C.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]};C.cross=function(e,t,A){var r=t[0],n=t[1],i=t[2],a=A[0],s=A[1],o=A[2];return e[0]=n*o-i*s,e[1]=i*a-r*o,e[2]=r*s-n*a,e};C.lerp=function(e,t,A,r){var n=t[0],i=t[1],a=t[2];return e[0]=n+r*(A[0]-n),e[1]=i+r*(A[1]-i),e[2]=a+r*(A[2]-a),e};C.random=function(e,t){t=t||1;var A=wr()*2*Math.PI,r=wr()*2-1,n=Math.sqrt(1-r*r)*t;return e[0]=Math.cos(A)*n,e[1]=Math.sin(A)*n,e[2]=r*t,e};C.transformMat4=function(e,t,A){var r=t[0],n=t[1],i=t[2],a=A[3]*r+A[7]*n+A[11]*i+A[15];return a=a||1,e[0]=(A[0]*r+A[4]*n+A[8]*i+A[12])/a,e[1]=(A[1]*r+A[5]*n+A[9]*i+A[13])/a,e[2]=(A[2]*r+A[6]*n+A[10]*i+A[14])/a,e};C.transformMat3=function(e,t,A){var r=t[0],n=t[1],i=t[2];return e[0]=r*A[0]+n*A[3]+i*A[6],e[1]=r*A[1]+n*A[4]+i*A[7],e[2]=r*A[2]+n*A[5]+i*A[8],e};C.transformQuat=function(e,t,A){var r=t[0],n=t[1],i=t[2],a=A[0],s=A[1],o=A[2],l=A[3],u=l*r+s*i-o*n,c=l*n+o*r-a*i,f=l*i+a*n-s*r,h=-a*r-s*n-o*i;return e[0]=u*l+h*-a+c*-o-f*-s,e[1]=c*l+h*-s+f*-a-u*-o,e[2]=f*l+h*-o+u*-s-c*-a,e};C.rotateX=function(e,t,A,r){var n=[],i=[];return n[0]=t[0]-A[0],n[1]=t[1]-A[1],n[2]=t[2]-A[2],i[0]=n[0],i[1]=n[1]*Math.cos(r)-n[2]*Math.sin(r),i[2]=n[1]*Math.sin(r)+n[2]*Math.cos(r),e[0]=i[0]+A[0],e[1]=i[1]+A[1],e[2]=i[2]+A[2],e};C.rotateY=function(e,t,A,r){var n=[],i=[];return n[0]=t[0]-A[0],n[1]=t[1]-A[1],n[2]=t[2]-A[2],i[0]=n[2]*Math.sin(r)+n[0]*Math.cos(r),i[1]=n[1],i[2]=n[2]*Math.cos(r)-n[0]*Math.sin(r),e[0]=i[0]+A[0],e[1]=i[1]+A[1],e[2]=i[2]+A[2],e};C.rotateZ=function(e,t,A,r){var n=[],i=[];return n[0]=t[0]-A[0],n[1]=t[1]-A[1],n[2]=t[2]-A[2],i[0]=n[0]*Math.cos(r)-n[1]*Math.sin(r),i[1]=n[0]*Math.sin(r)+n[1]*Math.cos(r),i[2]=n[2],e[0]=i[0]+A[0],e[1]=i[1]+A[1],e[2]=i[2]+A[2],e};C.forEach=function(){var e=C.create();return function(t,A,r,n,i,a){var s,o;for(A||(A=3),r||(r=0),n?o=Math.min(n*A+r,t.length):o=t.length,s=r;s<o;s+=A)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],i(e,e,a),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}}();C.angle=function(e,t){var A=C.fromValues(e[0],e[1],e[2]),r=C.fromValues(t[0],t[1],t[2]);C.normalize(A,A),C.normalize(r,r);var n=C.dot(A,r);return n>1?0:Math.acos(n)};K.import(Nc);var ye=R.create,Bl={};function wl(e){return e.material}function Rg(e,t,A){return t.uniforms[A].value}function Ng(e,t,A,r){return A!==r}function Hg(e){return!0}function yl(){}var xl={float:D.FLOAT,byte:D.BYTE,ubyte:D.UNSIGNED_BYTE,short:D.SHORT,ushort:D.UNSIGNED_SHORT};function Og(e,t,A){this.availableAttributes=e,this.availableAttributeSymbols=t,this.indicesBuffer=A,this.vao=null}function Pg(e){var t,A;this.bind=function(r){t||(t=ue.createCanvas(),t.width=t.height=1,t.getContext("2d"));var n=r.gl,i=!A;i&&(A=n.createTexture()),n.bindTexture(n.TEXTURE_2D,A),i&&n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t)},this.unbind=function(r){r.gl.bindTexture(r.gl.TEXTURE_2D,null)},this.isRenderable=function(){return!0}}var bt=tt.extend(function(){return{canvas:null,_width:100,_height:100,devicePixelRatio:typeof window<"u"&&window.devicePixelRatio||1,clearColor:[0,0,0,0],clearBit:17664,alpha:!0,depth:!0,stencil:!1,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!1,throwError:!0,gl:null,viewport:{},maxJointNumber:20,__currentFrameBuffer:null,_viewportStack:[],_clearStack:[],_sceneRendering:null}},function(){this.canvas||(this.canvas=ue.createCanvas());var e=this.canvas;try{var t={alpha:this.alpha,depth:this.depth,stencil:this.stencil,antialias:this.antialias,premultipliedAlpha:this.premultipliedAlpha,preserveDrawingBuffer:this.preserveDrawingBuffer};if(this.gl=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),!this.gl)throw new Error;this._glinfo=new mg(this.gl),this.gl.targetRenderer&&console.error("Already created a renderer"),this.gl.targetRenderer=this,this.resize()}catch(A){throw"Error creating WebGL Context "+A}this._programMgr=new Ic(this),this._placeholderTexture=new Pg},{resize:function(e,t){var A=this.canvas,r=this.devicePixelRatio;e!=null?(A.style&&(A.style.width=e+"px",A.style.height=t+"px"),A.width=e*r,A.height=t*r,this._width=e,this._height=t):(this._width=A.width/r,this._height=A.height/r),this.setViewport(0,0,this._width,this._height)},getWidth:function(){return this._width},getHeight:function(){return this._height},getViewportAspect:function(){var e=this.viewport;return e.width/e.height},setDevicePixelRatio:function(e){this.devicePixelRatio=e,this.resize(this._width,this._height)},getDevicePixelRatio:function(){return this.devicePixelRatio},getGLExtension:function(e){return this._glinfo.getExtension(e)},getGLParameter:function(e){return this._glinfo.getParameter(e)},setViewport:function(e,t,A,r,n){if(typeof e=="object"){var i=e;e=i.x,t=i.y,A=i.width,r=i.height,n=i.devicePixelRatio}n=n||this.devicePixelRatio,this.gl.viewport(e*n,t*n,A*n,r*n),this.viewport={x:e,y:t,width:A,height:r,devicePixelRatio:n}},saveViewport:function(){this._viewportStack.push(this.viewport)},restoreViewport:function(){this._viewportStack.length>0&&this.setViewport(this._viewportStack.pop())},saveClear:function(){this._clearStack.push({clearBit:this.clearBit,clearColor:this.clearColor})},restoreClear:function(){if(this._clearStack.length>0){var e=this._clearStack.pop();this.clearColor=e.clearColor,this.clearBit=e.clearBit}},bindSceneRendering:function(e){this._sceneRendering=e},render:function(e,t,A,r){var n=this.gl,i=this.clearColor;if(this.clearBit){n.colorMask(!0,!0,!0,!0),n.depthMask(!0);var a=this.viewport,s=!1,o=a.devicePixelRatio;(a.width!==this._width||a.height!==this._height||o&&o!==this.devicePixelRatio||a.x||a.y)&&(s=!0,n.enable(n.SCISSOR_TEST),n.scissor(a.x*o,a.y*o,a.width*o,a.height*o)),n.clearColor(i[0],i[1],i[2],i[3]),n.clear(this.clearBit),s&&n.disable(n.SCISSOR_TEST)}if(A||e.update(!1),e.updateLights(),t=t||e.getMainCamera(),!t){console.error("Can't find camera in the scene.");return}t.update();var l=e.updateRenderList(t,!0);this._sceneRendering=e;var u=l.opaque,c=l.transparent,f=e.material;e.trigger("beforerender",this,e,t,l),r?(this.renderPreZ(u,e,t),n.depthFunc(n.LEQUAL)):n.depthFunc(n.LESS);for(var h=ye(),d=C.create(),g=0;g<c.length;g++){var v=c[g];R.multiplyAffine(h,t.viewMatrix.array,v.worldTransform.array),C.transformMat4(d,v.position.array,h),v.__depth=d[2]}this.renderPass(u,t,{getMaterial:function(p){return f||p.material},sortCompare:this.opaqueSortCompare}),this.renderPass(c,t,{getMaterial:function(p){return f||p.material},sortCompare:this.transparentSortCompare}),e.trigger("afterrender",this,e,t,l),this._sceneRendering=null},getProgram:function(e,t,A){return t=t||e.material,this._programMgr.getProgram(e,t,A)},validateProgram:function(e){if(e.__error){var t=e.__error;if(Bl[e.__uid__])return;if(Bl[e.__uid__]=!0,this.throwError)throw new Error(t);this.trigger("error",t)}},updatePrograms:function(e,t,A){var r=A&&A.getMaterial||wl;t=t||null;for(var n=0;n<e.length;n++){var i=e[n],a=r.call(this,i);if(n>0){var s=e[n-1],o=s.joints?s.joints.length:0,l=i.joints?i.joints.length:0;if(l===o&&i.material===s.material&&i.lightGroup===s.lightGroup){i.__program=s.__program;continue}}var u=this._programMgr.getProgram(i,a,t);this.validateProgram(u),i.__program=u}},renderPass:function(e,t,A){this.trigger("beforerenderpass",this,e,t,A),A=A||{},A.getMaterial=A.getMaterial||wl,A.getUniform=A.getUniform||Rg,A.isMaterialChanged=A.isMaterialChanged||Ng,A.beforeRender=A.beforeRender||yl,A.afterRender=A.afterRender||yl;var r=A.ifRender||Hg;this.updatePrograms(e,this._sceneRendering,A),A.sortCompare&&e.sort(A.sortCompare);var n=this.viewport,i=n.devicePixelRatio,a=[n.x*i,n.y*i,n.width*i,n.height*i],s=this.devicePixelRatio,o=this.__currentFrameBuffer?[this.__currentFrameBuffer.getTextureWidth(),this.__currentFrameBuffer.getTextureHeight()]:[this._width*s,this._height*s],l=[a[2],a[3]],u=Date.now();t?(R.copy(we.VIEW,t.viewMatrix.array),R.copy(we.PROJECTION,t.projectionMatrix.array),R.copy(we.VIEWINVERSE,t.worldTransform.array)):(R.identity(we.VIEW),R.identity(we.PROJECTION),R.identity(we.VIEWINVERSE)),R.multiply(we.VIEWPROJECTION,we.PROJECTION,we.VIEW),R.invert(we.PROJECTIONINVERSE,we.PROJECTION),R.invert(we.VIEWPROJECTIONINVERSE,we.VIEWPROJECTION);for(var c=this.gl,f=this._sceneRendering,h,d,g,v,p,m,B,_,x,y,T,E,F=null,S=0;S<e.length;S++){var U=e[S],I=U.worldTransform!=null,Q;if(r(U)){I&&(Q=U.isSkinnedMesh&&U.isSkinnedMesh()?U.offsetMatrix?U.offsetMatrix.array:we.IDENTITY:U.worldTransform.array);var b=U.geometry,N=A.getMaterial.call(this,U),H=U.__program,V=N.shader,G=b.__uid__+"-"+H.__uid__,j=G!==y;y=G,j&&F&&F.bindVertexArrayOES(null),I&&(R.copy(we.WORLD,Q),R.multiply(we.WORLDVIEWPROJECTION,we.VIEWPROJECTION,Q),R.multiplyAffine(we.WORLDVIEW,we.VIEW,Q),(V.matrixSemantics.WORLDINVERSE||V.matrixSemantics.WORLDINVERSETRANSPOSE)&&R.invert(we.WORLDINVERSE,Q),(V.matrixSemantics.WORLDVIEWINVERSE||V.matrixSemantics.WORLDVIEWINVERSETRANSPOSE)&&R.invert(we.WORLDVIEWINVERSE,we.WORLDVIEW),(V.matrixSemantics.WORLDVIEWPROJECTIONINVERSE||V.matrixSemantics.WORLDVIEWPROJECTIONINVERSETRANSPOSE)&&R.invert(we.WORLDVIEWPROJECTIONINVERSE,we.WORLDVIEWPROJECTION)),U.beforeRender&&U.beforeRender(this),A.beforeRender.call(this,U,N,h);var W=H!==d;W?(H.bind(this),H.setUniformOfSemantic(c,"VIEWPORT",a),H.setUniformOfSemantic(c,"WINDOW_SIZE",o),t&&(H.setUniformOfSemantic(c,"NEAR",t.near),H.setUniformOfSemantic(c,"FAR",t.far)),H.setUniformOfSemantic(c,"DEVICEPIXELRATIO",i),H.setUniformOfSemantic(c,"TIME",u),H.setUniformOfSemantic(c,"VIEWPORT_SIZE",l),f&&f.setLightUniforms(H,U.lightGroup,this)):H=d,(W||A.isMaterialChanged(U,g,N,h))&&(N.depthTest!==v&&(N.depthTest?c.enable(c.DEPTH_TEST):c.disable(c.DEPTH_TEST),v=N.depthTest),N.depthMask!==p&&(c.depthMask(N.depthMask),p=N.depthMask),N.transparent!==x&&(N.transparent?c.enable(c.BLEND):c.disable(c.BLEND),x=N.transparent),N.transparent&&(N.blend?N.blend(c):(c.blendEquationSeparate(c.FUNC_ADD,c.FUNC_ADD),c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA))),E=this._bindMaterial(U,N,H,g||null,h||null,d||null,A.getUniform),h=N);var ne=V.matrixSemanticKeys;if(I)for(var ee=0;ee<ne.length;ee++){var ie=ne[ee],te=V.matrixSemantics[ie],q=we[ie];if(te.isTranspose){var Be=we[te.semanticNoTranspose];R.transpose(q,Be)}H.setUniform(c,te.type,te.symbol,q)}U.cullFace!==B&&(B=U.cullFace,c.cullFace(B)),U.frontFace!==_&&(_=U.frontFace,c.frontFace(_)),U.culling!==m&&(m=U.culling,m?c.enable(c.CULL_FACE):c.disable(c.CULL_FACE)),this._updateSkeleton(U,H,E),j&&(T=this._bindVAO(F,V,b,H)),this._renderObject(U,T,H),A.afterRender(this,U),U.afterRender&&U.afterRender(this),d=H,g=U}}this.trigger("afterrenderpass",this,e,t,A)},getMaxJointNumber:function(){return this.maxJointNumber},_updateSkeleton:function(e,t,A){var r=this.gl,n=e.skeleton;if(n)if(n.update(),e.joints.length>this.getMaxJointNumber()){var i=n.getSubSkinMatricesTexture(e.__uid__,e.joints);t.useTextureSlot(this,i,A),t.setUniform(r,"1i","skinMatricesTexture",A),t.setUniform(r,"1f","skinMatricesTextureSize",i.width)}else{var a=n.getSubSkinMatrices(e.__uid__,e.joints);t.setUniformOfSemantic(r,"SKIN_MATRIX",a)}},_renderObject:function(e,t,A){var r=this.gl,n=e.geometry,i=e.mode;i==null&&(i=4);var a=null,s=e.isInstancedMesh&&e.isInstancedMesh();if(s&&(a=this.getGLExtension("ANGLE_instanced_arrays"),!a)){console.warn("Device not support ANGLE_instanced_arrays extension");return}var o;if(s&&(o=this._bindInstancedAttributes(e,A,a)),t.indicesBuffer){var l=this.getGLExtension("OES_element_index_uint"),u=l&&n.indices instanceof Uint32Array,c=u?r.UNSIGNED_INT:r.UNSIGNED_SHORT;s?a.drawElementsInstancedANGLE(i,t.indicesBuffer.count,c,0,e.getInstanceCount()):r.drawElements(i,t.indicesBuffer.count,c,0)}else s?a.drawArraysInstancedANGLE(i,0,n.vertexCount,e.getInstanceCount()):r.drawArrays(i,0,n.vertexCount);if(s)for(var f=0;f<o.length;f++)r.disableVertexAttribArray(o[f])},_bindInstancedAttributes:function(e,t,A){for(var r=this.gl,n=e.getInstancedAttributesBuffers(this),i=[],a=0;a<n.length;a++){var s=n[a],o=t.getAttribLocation(r,s.symbol);if(!(o<0)){var l=xl[s.type]||r.FLOAT;r.enableVertexAttribArray(o),r.bindBuffer(r.ARRAY_BUFFER,s.buffer),r.vertexAttribPointer(o,s.size,l,!1,0,0),A.vertexAttribDivisorANGLE(o,s.divisor),i.push(o)}}return i},_bindMaterial:function(e,t,A,r,n,i,a){for(var s=this.gl,o=i===A,l=A.currentTextureSlot(),u=t.getEnabledUniforms(),c=t.getTextureUniforms(),f=this._placeholderTexture,h=0;h<c.length;h++){var d=c[h],g=a(e,t,d),v=t.uniforms[d].type;if(v==="t"&&g)g.__slot=-1;else if(v==="tv")for(var p=0;p<g.length;p++)g[p]&&(g[p].__slot=-1)}f.__slot=-1;for(var h=0;h<u.length;h++){var d=u[h],m=t.uniforms[d],g=a(e,t,d),v=m.type,B=v==="t";if(B&&(!g||!g.isRenderable())&&(g=f),n&&o){var _=a(r,n,d);if(B&&(!_||!_.isRenderable())&&(_=f),_===g){if(B)A.takeCurrentTextureSlot(this,null);else if(v==="tv"&&g)for(var p=0;p<g.length;p++)A.takeCurrentTextureSlot(this,null);continue}}if(g!=null)if(B)if(g.__slot<0){var x=A.currentTextureSlot(),y=A.setUniform(s,"1i",d,x);y&&(A.takeCurrentTextureSlot(this,g),g.__slot=x)}else A.setUniform(s,"1i",d,g.__slot);else if(Array.isArray(g)){if(g.length===0)continue;if(v==="tv"){if(!A.hasUniform(d))continue;for(var T=[],p=0;p<g.length;p++){var E=g[p];if(E.__slot<0){var x=A.currentTextureSlot();T.push(x),A.takeCurrentTextureSlot(this,E),E.__slot=x}else T.push(E.__slot)}A.setUniform(s,"1iv",d,T)}else A.setUniform(s,m.type,d,g)}else A.setUniform(s,m.type,d,g)}var F=A.currentTextureSlot();return A.resetTextureSlot(l),F},_bindVAO:function(e,t,A,r){var n=!A.dynamic,i=this.gl,a=this.__uid__+"-"+r.__uid__,s=A.__vaoCache[a];if(!s){var o=A.getBufferChunks(this);if(!o||!o.length)return;for(var l=o[0],u=l.attributeBuffers,_=l.indicesBuffer,B=[],c=[],f=0;f<u.length;f++){var h=u[f],d=h.name,g=h.semantic,v;if(g){var p=t.attributeSemantics[g];v=p&&p.symbol}else v=d;v&&r.attributes[v]&&(B.push(h),c.push(v))}s=new Og(B,c,_),n&&(A.__vaoCache[a]=s)}var m=!0;e&&n&&(s.vao==null?s.vao=e.createVertexArrayOES():m=!1,e.bindVertexArrayOES(s.vao));var B=s.availableAttributes,_=s.indicesBuffer;if(m){for(var x=r.enableAttributes(this,s.availableAttributeSymbols,e&&n&&s),f=0;f<B.length;f++){var y=x[f];if(y!==-1){var h=B[f],T=h.buffer,E=h.size,F=xl[h.type]||i.FLOAT;i.bindBuffer(i.ARRAY_BUFFER,T),i.vertexAttribPointer(y,E,F,!1,0,0)}}A.isUseIndices()&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,_.buffer)}return s},renderPreZ:function(e,t,A){var r=this.gl,n=this._prezMaterial||new St({shader:new K(K.source("clay.prez.vertex"),K.source("clay.prez.fragment"))});this._prezMaterial=n,r.colorMask(!1,!1,!1,!1),r.depthMask(!0),this.renderPass(e,A,{ifRender:function(i){return!i.ignorePreZ},isMaterialChanged:function(i,a){var s=i.material,o=a.material;return s.get("diffuseMap")!==o.get("diffuseMap")||(s.get("alphaCutoff")||0)!==(o.get("alphaCutoff")||0)},getUniform:function(i,a,s){if(s==="alphaMap")return i.material.get("diffuseMap");if(s==="alphaCutoff"){if(i.material.isDefined("fragment","ALPHA_TEST")&&i.material.get("diffuseMap")){var o=i.material.get("alphaCutoff");return o||0}return 0}else return s==="uvRepeat"?i.material.get("uvRepeat"):s==="uvOffset"?i.material.get("uvOffset"):a.get(s)},getMaterial:function(){return n},sort:this.opaqueSortCompare}),r.colorMask(!0,!0,!0,!0),r.depthMask(!0)},disposeScene:function(e){this.disposeNode(e,!0,!0),e.dispose()},disposeNode:function(e,t,A){e.getParent()&&e.getParent().remove(e);var r={};e.traverse(function(n){var i=n.material;if(n.geometry&&t&&n.geometry.dispose(this),A&&i&&!r[i.__uid__]){for(var a=i.getTextureUniforms(),s=0;s<a.length;s++){var o=a[s],l=i.uniforms[o].value,u=i.uniforms[o].type;if(l){if(u==="t")l.dispose&&l.dispose(this);else if(u==="tv")for(var c=0;c<l.length;c++)l[c]&&l[c].dispose&&l[c].dispose(this)}}r[i.__uid__]=!0}n.dispose&&n.dispose(this)},this)},disposeGeometry:function(e){e.dispose(this)},disposeTexture:function(e){e.dispose(this)},disposeFrameBuffer:function(e){e.dispose(this)},dispose:function(){},screenToNDC:function(e,t,A){A||(A=new J),t=this._height-t;var r=this.viewport,n=A.array;return n[0]=(e-r.x)/r.width,n[0]=n[0]*2-1,n[1]=(t-r.y)/r.height,n[1]=n[1]*2-1,A}});bt.opaqueSortCompare=bt.prototype.opaqueSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.renderOrder-t.renderOrder};bt.transparentSortCompare=bt.prototype.transparentSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__depth===t.__depth?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.__depth-t.__depth:e.renderOrder-t.renderOrder};var we={IDENTITY:ye(),WORLD:ye(),VIEW:ye(),PROJECTION:ye(),WORLDVIEW:ye(),VIEWPROJECTION:ye(),WORLDVIEWPROJECTION:ye(),WORLDINVERSE:ye(),VIEWINVERSE:ye(),PROJECTIONINVERSE:ye(),WORLDVIEWINVERSE:ye(),VIEWPROJECTIONINVERSE:ye(),WORLDVIEWPROJECTIONINVERSE:ye(),WORLDTRANSPOSE:ye(),VIEWTRANSPOSE:ye(),PROJECTIONTRANSPOSE:ye(),WORLDVIEWTRANSPOSE:ye(),VIEWPROJECTIONTRANSPOSE:ye(),WORLDVIEWPROJECTIONTRANSPOSE:ye(),WORLDINVERSETRANSPOSE:ye(),VIEWINVERSETRANSPOSE:ye(),PROJECTIONINVERSETRANSPOSE:ye(),WORLDVIEWINVERSETRANSPOSE:ye(),VIEWPROJECTIONINVERSETRANSPOSE:ye(),WORLDVIEWPROJECTIONINVERSETRANSPOSE:ye()};bt.COLOR_BUFFER_BIT=D.COLOR_BUFFER_BIT;bt.DEPTH_BUFFER_BIT=D.DEPTH_BUFFER_BIT;bt.STENCIL_BUFFER_BIT=D.STENCIL_BUFFER_BIT;var L=function(e,t,A){e=e||0,t=t||0,A=A||0,this.array=C.fromValues(e,t,A),this._dirty=!0};L.prototype={constructor:L,add:function(e){return C.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,A){return this.array[0]=e,this.array[1]=t,this.array[2]=A,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this._dirty=!0,this},clone:function(){return new L(this.x,this.y,this.z)},copy:function(e){return C.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return C.cross(this.array,e.array,t.array),this._dirty=!0,this},dist:function(e){return C.dist(this.array,e.array)},distance:function(e){return C.distance(this.array,e.array)},div:function(e){return C.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return C.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return C.dot(this.array,e.array)},len:function(){return C.len(this.array)},length:function(){return C.length(this.array)},lerp:function(e,t,A){return C.lerp(this.array,e.array,t.array,A),this._dirty=!0,this},min:function(e){return C.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return C.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return C.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return C.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return C.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return C.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return C.random(this.array,e),this._dirty=!0,this},scale:function(e){return C.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return C.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return C.sqrDist(this.array,e.array)},squaredDistance:function(e){return C.squaredDistance(this.array,e.array)},sqrLen:function(){return C.sqrLen(this.array)},squaredLength:function(){return C.squaredLength(this.array)},sub:function(e){return C.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return C.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return C.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return C.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return C.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},applyProjection:function(e){var t=this.array;if(e=e.array,e[15]===0){var A=-1/t[2];t[0]=e[0]*t[0]*A,t[1]=e[5]*t[1]*A,t[2]=(e[10]*t[2]+e[14])*A}else t[0]=e[0]*t[0]+e[12],t[1]=e[5]*t[1]+e[13],t[2]=e[10]*t[2]+e[14];return this._dirty=!0,this},eulerFromQuat:function(e,t){L.eulerFromQuat(this,e,t)},eulerFromMat3:function(e,t){L.eulerFromMat3(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Zn=Object.defineProperty;if(Zn){var Va=L.prototype;Zn(Va,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Zn(Va,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),Zn(Va,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}})}L.add=function(e,t,A){return C.add(e.array,t.array,A.array),e._dirty=!0,e};L.set=function(e,t,A,r){C.set(e.array,t,A,r),e._dirty=!0};L.copy=function(e,t){return C.copy(e.array,t.array),e._dirty=!0,e};L.cross=function(e,t,A){return C.cross(e.array,t.array,A.array),e._dirty=!0,e};L.dist=function(e,t){return C.distance(e.array,t.array)};L.distance=L.dist;L.div=function(e,t,A){return C.divide(e.array,t.array,A.array),e._dirty=!0,e};L.divide=L.div;L.dot=function(e,t){return C.dot(e.array,t.array)};L.len=function(e){return C.length(e.array)};L.lerp=function(e,t,A,r){return C.lerp(e.array,t.array,A.array,r),e._dirty=!0,e};L.min=function(e,t,A){return C.min(e.array,t.array,A.array),e._dirty=!0,e};L.max=function(e,t,A){return C.max(e.array,t.array,A.array),e._dirty=!0,e};L.mul=function(e,t,A){return C.multiply(e.array,t.array,A.array),e._dirty=!0,e};L.multiply=L.mul;L.negate=function(e,t){return C.negate(e.array,t.array),e._dirty=!0,e};L.normalize=function(e,t){return C.normalize(e.array,t.array),e._dirty=!0,e};L.random=function(e,t){return C.random(e.array,t),e._dirty=!0,e};L.scale=function(e,t,A){return C.scale(e.array,t.array,A),e._dirty=!0,e};L.scaleAndAdd=function(e,t,A,r){return C.scaleAndAdd(e.array,t.array,A.array,r),e._dirty=!0,e};L.sqrDist=function(e,t){return C.sqrDist(e.array,t.array)};L.squaredDistance=L.sqrDist;L.sqrLen=function(e){return C.sqrLen(e.array)};L.squaredLength=L.sqrLen;L.sub=function(e,t,A){return C.subtract(e.array,t.array,A.array),e._dirty=!0,e};L.subtract=L.sub;L.transformMat3=function(e,t,A){return C.transformMat3(e.array,t.array,A.array),e._dirty=!0,e};L.transformMat4=function(e,t,A){return C.transformMat4(e.array,t.array,A.array),e._dirty=!0,e};L.transformQuat=function(e,t,A){return C.transformQuat(e.array,t.array,A.array),e._dirty=!0,e};function Ct(e,t,A){return e<t?t:e>A?A:e}var pe=Math.atan2,Et=Math.asin,ir=Math.abs;L.eulerFromQuat=function(e,t,f){e._dirty=!0,t=t.array;var r=e.array,n=t[0],i=t[1],a=t[2],s=t[3],o=n*n,l=i*i,u=a*a,c=s*s,f=(f||"XYZ").toUpperCase();switch(f){case"XYZ":r[0]=pe(2*(n*s-i*a),c-o-l+u),r[1]=Et(Ct(2*(n*a+i*s),-1,1)),r[2]=pe(2*(a*s-n*i),c+o-l-u);break;case"YXZ":r[0]=Et(Ct(2*(n*s-i*a),-1,1)),r[1]=pe(2*(n*a+i*s),c-o-l+u),r[2]=pe(2*(n*i+a*s),c-o+l-u);break;case"ZXY":r[0]=Et(Ct(2*(n*s+i*a),-1,1)),r[1]=pe(2*(i*s-a*n),c-o-l+u),r[2]=pe(2*(a*s-n*i),c-o+l-u);break;case"ZYX":r[0]=pe(2*(n*s+a*i),c-o-l+u),r[1]=Et(Ct(2*(i*s-n*a),-1,1)),r[2]=pe(2*(n*i+a*s),c+o-l-u);break;case"YZX":r[0]=pe(2*(n*s-a*i),c-o+l-u),r[1]=pe(2*(i*s-n*a),c+o-l-u),r[2]=Et(Ct(2*(n*i+a*s),-1,1));break;case"XZY":r[0]=pe(2*(n*s+i*a),c-o+l-u),r[1]=pe(2*(n*a+i*s),c+o-l-u),r[2]=Et(Ct(2*(a*s-n*i),-1,1));break;default:console.warn("Unkown order: "+f)}return e};L.eulerFromMat3=function(e,t,d){var r=t.array,n=r[0],i=r[3],a=r[6],s=r[1],o=r[4],l=r[7],u=r[2],c=r[5],f=r[8],h=e.array,d=(d||"XYZ").toUpperCase();switch(d){case"XYZ":h[1]=Et(Ct(a,-1,1)),ir(a)<.99999?(h[0]=pe(-l,f),h[2]=pe(-i,n)):(h[0]=pe(c,o),h[2]=0);break;case"YXZ":h[0]=Et(-Ct(l,-1,1)),ir(l)<.99999?(h[1]=pe(a,f),h[2]=pe(s,o)):(h[1]=pe(-u,n),h[2]=0);break;case"ZXY":h[0]=Et(Ct(c,-1,1)),ir(c)<.99999?(h[1]=pe(-u,f),h[2]=pe(-i,o)):(h[1]=0,h[2]=pe(s,n));break;case"ZYX":h[1]=Et(-Ct(u,-1,1)),ir(u)<.99999?(h[0]=pe(c,f),h[2]=pe(s,n)):(h[0]=0,h[2]=pe(-i,o));break;case"YZX":h[2]=Et(Ct(s,-1,1)),ir(s)<.99999?(h[0]=pe(-l,o),h[1]=pe(-u,n)):(h[0]=0,h[1]=pe(a,f));break;case"XZY":h[2]=Et(-Ct(i,-1,1)),ir(i)<.99999?(h[0]=pe(c,o),h[1]=pe(a,n)):(h[0]=pe(-l,f),h[1]=0);break;default:console.warn("Unkown order: "+d)}return e._dirty=!0,e};Object.defineProperties(L,{POSITIVE_X:{get:function(){return new L(1,0,0)}},NEGATIVE_X:{get:function(){return new L(-1,0,0)}},POSITIVE_Y:{get:function(){return new L(0,1,0)}},NEGATIVE_Y:{get:function(){return new L(0,-1,0)}},POSITIVE_Z:{get:function(){return new L(0,0,1)}},NEGATIVE_Z:{get:function(){return new L(0,0,-1)}},UP:{get:function(){return new L(0,1,0)}},ZERO:{get:function(){return new L}}});var Ka=1e-5,ZA=function(e,t){this.origin=e||new L,this.direction=t||new L};ZA.prototype={constructor:ZA,intersectPlane:function(e,t){var A=e.normal.array,r=e.distance,n=this.origin.array,i=this.direction.array,a=C.dot(A,i);if(a===0)return null;t||(t=new L);var s=(C.dot(A,n)-r)/a;return C.scaleAndAdd(t.array,n,i,-s),t._dirty=!0,t},mirrorAgainstPlane:function(e){var t=C.dot(e.normal.array,this.direction.array);C.scaleAndAdd(this.direction.array,this.direction.array,e.normal.array,-t*2),this.direction._dirty=!0},distanceToPoint:function(){var e=C.create();return function(t){C.sub(e,t,this.origin.array);var A=C.dot(e,this.direction.array);if(A<0)return C.distance(this.origin.array,t);var r=C.lenSquared(e);return Math.sqrt(r-A*A)}}(),intersectSphere:function(){var e=C.create();return function(t,A,r){var n=this.origin.array,i=this.direction.array;t=t.array,C.sub(e,t,n);var a=C.dot(e,i),s=C.squaredLength(e),o=s-a*a,l=A*A;if(!(o>l)){var u=Math.sqrt(l-o),c=a-u,f=a+u;return r||(r=new L),c<0?f<0?null:(C.scaleAndAdd(r.array,n,i,f),r):(C.scaleAndAdd(r.array,n,i,c),r)}}}(),intersectBoundingBox:function(e,t){var A=this.direction.array,r=this.origin.array,n=e.min.array,i=e.max.array,a=1/A[0],s=1/A[1],o=1/A[2],l,u,c,f,h,d;if(a>=0?(l=(n[0]-r[0])*a,u=(i[0]-r[0])*a):(u=(n[0]-r[0])*a,l=(i[0]-r[0])*a),s>=0?(c=(n[1]-r[1])*s,f=(i[1]-r[1])*s):(f=(n[1]-r[1])*s,c=(i[1]-r[1])*s),l>f||c>u||((c>l||l!==l)&&(l=c),(f<u||u!==u)&&(u=f),o>=0?(h=(n[2]-r[2])*o,d=(i[2]-r[2])*o):(d=(n[2]-r[2])*o,h=(i[2]-r[2])*o),l>d||h>u)||((h>l||l!==l)&&(l=h),(d<u||u!==u)&&(u=d),u<0))return null;var g=l>=0?l:u;return t||(t=new L),C.scaleAndAdd(t.array,r,A,g),t},intersectTriangle:function(){var e=C.create(),t=C.create(),A=C.create(),r=C.create();return function(n,i,a,s,o,l){var u=this.direction.array,c=this.origin.array;n=n.array,i=i.array,a=a.array,C.sub(e,i,n),C.sub(t,a,n),C.cross(r,t,u);var f=C.dot(e,r);if(s){if(f>-Ka)return null}else if(f>-Ka&&f<Ka)return null;C.sub(A,c,n);var h=C.dot(r,A)/f;if(h<0||h>1)return null;C.cross(r,e,A);var d=C.dot(u,r)/f;if(d<0||d>1||h+d>1)return null;C.cross(r,e,t);var g=-C.dot(A,r)/f;return g<0?null:(o||(o=new L),l&&L.set(l,1-h-d,h,d),C.scaleAndAdd(o.array,c,u,g),o)}}(),applyTransform:function(e){L.add(this.direction,this.direction,this.origin),L.transformMat4(this.origin,this.origin,e),L.transformMat4(this.direction,this.direction,e),L.sub(this.direction,this.direction,this.origin),L.normalize(this.direction,this.direction)},copy:function(e){L.copy(this.origin,e.origin),L.copy(this.direction,e.direction)},clone:function(){var e=new ZA;return e.copy(this),e}};var M={};M.create=function(){var e=new At(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e};M.clone=function(e){var t=new At(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};M.fromValues=function(e,t,A,r){var n=new At(4);return n[0]=e,n[1]=t,n[2]=A,n[3]=r,n};M.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};M.set=function(e,t,A,r,n){return e[0]=t,e[1]=A,e[2]=r,e[3]=n,e};M.add=function(e,t,A){return e[0]=t[0]+A[0],e[1]=t[1]+A[1],e[2]=t[2]+A[2],e[3]=t[3]+A[3],e};M.subtract=function(e,t,A){return e[0]=t[0]-A[0],e[1]=t[1]-A[1],e[2]=t[2]-A[2],e[3]=t[3]-A[3],e};M.sub=M.subtract;M.multiply=function(e,t,A){return e[0]=t[0]*A[0],e[1]=t[1]*A[1],e[2]=t[2]*A[2],e[3]=t[3]*A[3],e};M.mul=M.multiply;M.divide=function(e,t,A){return e[0]=t[0]/A[0],e[1]=t[1]/A[1],e[2]=t[2]/A[2],e[3]=t[3]/A[3],e};M.div=M.divide;M.min=function(e,t,A){return e[0]=Math.min(t[0],A[0]),e[1]=Math.min(t[1],A[1]),e[2]=Math.min(t[2],A[2]),e[3]=Math.min(t[3],A[3]),e};M.max=function(e,t,A){return e[0]=Math.max(t[0],A[0]),e[1]=Math.max(t[1],A[1]),e[2]=Math.max(t[2],A[2]),e[3]=Math.max(t[3],A[3]),e};M.scale=function(e,t,A){return e[0]=t[0]*A,e[1]=t[1]*A,e[2]=t[2]*A,e[3]=t[3]*A,e};M.scaleAndAdd=function(e,t,A,r){return e[0]=t[0]+A[0]*r,e[1]=t[1]+A[1]*r,e[2]=t[2]+A[2]*r,e[3]=t[3]+A[3]*r,e};M.distance=function(e,t){var A=t[0]-e[0],r=t[1]-e[1],n=t[2]-e[2],i=t[3]-e[3];return Math.sqrt(A*A+r*r+n*n+i*i)};M.dist=M.distance;M.squaredDistance=function(e,t){var A=t[0]-e[0],r=t[1]-e[1],n=t[2]-e[2],i=t[3]-e[3];return A*A+r*r+n*n+i*i};M.sqrDist=M.squaredDistance;M.length=function(e){var t=e[0],A=e[1],r=e[2],n=e[3];return Math.sqrt(t*t+A*A+r*r+n*n)};M.len=M.length;M.squaredLength=function(e){var t=e[0],A=e[1],r=e[2],n=e[3];return t*t+A*A+r*r+n*n};M.sqrLen=M.squaredLength;M.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e};M.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e};M.normalize=function(e,t){var A=t[0],r=t[1],n=t[2],i=t[3],a=A*A+r*r+n*n+i*i;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a,e[3]=t[3]*a),e};M.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]};M.lerp=function(e,t,A,r){var n=t[0],i=t[1],a=t[2],s=t[3];return e[0]=n+r*(A[0]-n),e[1]=i+r*(A[1]-i),e[2]=a+r*(A[2]-a),e[3]=s+r*(A[3]-s),e};M.random=function(e,t){return t=t||1,e[0]=wr(),e[1]=wr(),e[2]=wr(),e[3]=wr(),M.normalize(e,e),M.scale(e,e,t),e};M.transformMat4=function(e,t,A){var r=t[0],n=t[1],i=t[2],a=t[3];return e[0]=A[0]*r+A[4]*n+A[8]*i+A[12]*a,e[1]=A[1]*r+A[5]*n+A[9]*i+A[13]*a,e[2]=A[2]*r+A[6]*n+A[10]*i+A[14]*a,e[3]=A[3]*r+A[7]*n+A[11]*i+A[15]*a,e};M.transformQuat=function(e,t,A){var r=t[0],n=t[1],i=t[2],a=A[0],s=A[1],o=A[2],l=A[3],u=l*r+s*i-o*n,c=l*n+o*r-a*i,f=l*i+a*n-s*r,h=-a*r-s*n-o*i;return e[0]=u*l+h*-a+c*-o-f*-s,e[1]=c*l+h*-s+f*-a-u*-o,e[2]=f*l+h*-o+u*-s-c*-a,e};M.forEach=function(){var e=M.create();return function(t,A,r,n,i,a){var s,o;for(A||(A=4),r||(r=0),n?o=Math.min(n*A+r,t.length):o=t.length,s=r;s<o;s+=A)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],e[3]=t[s+3],i(e,e,a),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3];return t}}();var Z={};Z.create=function(){var e=new At(9);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};Z.fromMat4=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e};Z.clone=function(e){var t=new At(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t};Z.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};Z.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};Z.transpose=function(e,t){if(e===t){var A=t[1],r=t[2],n=t[5];e[1]=t[3],e[2]=t[6],e[3]=A,e[5]=t[7],e[6]=r,e[7]=n}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e};Z.invert=function(e,t){var A=t[0],r=t[1],n=t[2],i=t[3],a=t[4],s=t[5],o=t[6],l=t[7],u=t[8],c=u*a-s*l,f=-u*i+s*o,h=l*i-a*o,d=A*c+r*f+n*h;return d?(d=1/d,e[0]=c*d,e[1]=(-u*r+n*l)*d,e[2]=(s*r-n*a)*d,e[3]=f*d,e[4]=(u*A-n*o)*d,e[5]=(-s*A+n*i)*d,e[6]=h*d,e[7]=(-l*A+r*o)*d,e[8]=(a*A-r*i)*d,e):null};Z.adjoint=function(e,t){var A=t[0],r=t[1],n=t[2],i=t[3],a=t[4],s=t[5],o=t[6],l=t[7],u=t[8];return e[0]=a*u-s*l,e[1]=n*l-r*u,e[2]=r*s-n*a,e[3]=s*o-i*u,e[4]=A*u-n*o,e[5]=n*i-A*s,e[6]=i*l-a*o,e[7]=r*o-A*l,e[8]=A*a-r*i,e};Z.determinant=function(e){var t=e[0],A=e[1],r=e[2],n=e[3],i=e[4],a=e[5],s=e[6],o=e[7],l=e[8];return t*(l*i-a*o)+A*(-l*n+a*s)+r*(o*n-i*s)};Z.multiply=function(e,t,A){var r=t[0],n=t[1],i=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],c=t[8],f=A[0],h=A[1],d=A[2],g=A[3],v=A[4],p=A[5],m=A[6],B=A[7],_=A[8];return e[0]=f*r+h*a+d*l,e[1]=f*n+h*s+d*u,e[2]=f*i+h*o+d*c,e[3]=g*r+v*a+p*l,e[4]=g*n+v*s+p*u,e[5]=g*i+v*o+p*c,e[6]=m*r+B*a+_*l,e[7]=m*n+B*s+_*u,e[8]=m*i+B*o+_*c,e};Z.mul=Z.multiply;Z.translate=function(e,t,A){var r=t[0],n=t[1],i=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],c=t[8],f=A[0],h=A[1];return e[0]=r,e[1]=n,e[2]=i,e[3]=a,e[4]=s,e[5]=o,e[6]=f*r+h*a+l,e[7]=f*n+h*s+u,e[8]=f*i+h*o+c,e};Z.rotate=function(e,t,A){var r=t[0],n=t[1],i=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],c=t[8],f=Math.sin(A),h=Math.cos(A);return e[0]=h*r+f*a,e[1]=h*n+f*s,e[2]=h*i+f*o,e[3]=h*a-f*r,e[4]=h*s-f*n,e[5]=h*o-f*i,e[6]=l,e[7]=u,e[8]=c,e};Z.scale=function(e,t,A){var r=A[0],n=A[1];return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=n*t[3],e[4]=n*t[4],e[5]=n*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};Z.fromMat2d=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e};Z.fromQuat=function(e,t){var A=t[0],r=t[1],n=t[2],i=t[3],a=A+A,s=r+r,o=n+n,l=A*a,u=r*a,c=r*s,f=n*a,h=n*s,d=n*o,g=i*a,v=i*s,p=i*o;return e[0]=1-c-d,e[3]=u-p,e[6]=f+v,e[1]=u+p,e[4]=1-l-d,e[7]=h-g,e[2]=f-v,e[5]=h+g,e[8]=1-l-c,e};Z.normalFromMat4=function(e,t){var A=t[0],r=t[1],n=t[2],i=t[3],a=t[4],s=t[5],o=t[6],l=t[7],u=t[8],c=t[9],f=t[10],h=t[11],d=t[12],g=t[13],v=t[14],p=t[15],m=A*s-r*a,B=A*o-n*a,_=A*l-i*a,x=r*o-n*s,y=r*l-i*s,T=n*l-i*o,E=u*g-c*d,F=u*v-f*d,S=u*p-h*d,U=c*v-f*g,I=c*p-h*g,Q=f*p-h*v,b=m*Q-B*I+_*U+x*S-y*F+T*E;return b?(b=1/b,e[0]=(s*Q-o*I+l*U)*b,e[1]=(o*S-a*Q-l*F)*b,e[2]=(a*I-s*S+l*E)*b,e[3]=(n*I-r*Q-i*U)*b,e[4]=(A*Q-n*S+i*F)*b,e[5]=(r*S-A*I-i*E)*b,e[6]=(g*T-v*y+p*x)*b,e[7]=(v*_-d*T-p*B)*b,e[8]=(d*y-g*_+p*m)*b,e):null};Z.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2))};var k={};k.create=function(){var e=new At(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};k.rotationTo=function(){var e=C.create(),t=C.fromValues(1,0,0),A=C.fromValues(0,1,0);return function(r,n,i){var a=C.dot(n,i);return a<-.999999?(C.cross(e,t,n),C.length(e)<1e-6&&C.cross(e,A,n),C.normalize(e,e),k.setAxisAngle(r,e,Math.PI),r):a>.999999?(r[0]=0,r[1]=0,r[2]=0,r[3]=1,r):(C.cross(e,n,i),r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=1+a,k.normalize(r,r))}}();k.setAxes=function(){var e=Z.create();return function(t,A,r,n){return e[0]=r[0],e[3]=r[1],e[6]=r[2],e[1]=n[0],e[4]=n[1],e[7]=n[2],e[2]=-A[0],e[5]=-A[1],e[8]=-A[2],k.normalize(t,k.fromMat3(t,e))}}();k.clone=M.clone;k.fromValues=M.fromValues;k.copy=M.copy;k.set=M.set;k.identity=function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};k.setAxisAngle=function(e,t,A){A=A*.5;var r=Math.sin(A);return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=Math.cos(A),e};k.add=M.add;k.multiply=function(e,t,A){var r=t[0],n=t[1],i=t[2],a=t[3],s=A[0],o=A[1],l=A[2],u=A[3];return e[0]=r*u+a*s+n*l-i*o,e[1]=n*u+a*o+i*s-r*l,e[2]=i*u+a*l+r*o-n*s,e[3]=a*u-r*s-n*o-i*l,e};k.mul=k.multiply;k.scale=M.scale;k.rotateX=function(e,t,A){A*=.5;var r=t[0],n=t[1],i=t[2],a=t[3],s=Math.sin(A),o=Math.cos(A);return e[0]=r*o+a*s,e[1]=n*o+i*s,e[2]=i*o-n*s,e[3]=a*o-r*s,e};k.rotateY=function(e,t,A){A*=.5;var r=t[0],n=t[1],i=t[2],a=t[3],s=Math.sin(A),o=Math.cos(A);return e[0]=r*o-i*s,e[1]=n*o+a*s,e[2]=i*o+r*s,e[3]=a*o-n*s,e};k.rotateZ=function(e,t,A){A*=.5;var r=t[0],n=t[1],i=t[2],a=t[3],s=Math.sin(A),o=Math.cos(A);return e[0]=r*o+n*s,e[1]=n*o-r*s,e[2]=i*o+a*s,e[3]=a*o-i*s,e};k.calculateW=function(e,t){var A=t[0],r=t[1],n=t[2];return e[0]=A,e[1]=r,e[2]=n,e[3]=Math.sqrt(Math.abs(1-A*A-r*r-n*n)),e};k.dot=M.dot;k.lerp=M.lerp;k.slerp=function(e,t,A,r){var n=t[0],i=t[1],a=t[2],s=t[3],o=A[0],l=A[1],u=A[2],c=A[3],f,h,d,g,v;return h=n*o+i*l+a*u+s*c,h<0&&(h=-h,o=-o,l=-l,u=-u,c=-c),1-h>1e-6?(f=Math.acos(h),d=Math.sin(f),g=Math.sin((1-r)*f)/d,v=Math.sin(r*f)/d):(g=1-r,v=r),e[0]=g*n+v*o,e[1]=g*i+v*l,e[2]=g*a+v*u,e[3]=g*s+v*c,e};k.invert=function(e,t){var A=t[0],r=t[1],n=t[2],i=t[3],a=A*A+r*r+n*n+i*i,s=a?1/a:0;return e[0]=-A*s,e[1]=-r*s,e[2]=-n*s,e[3]=i*s,e};k.conjugate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e};k.length=M.length;k.len=k.length;k.squaredLength=M.squaredLength;k.sqrLen=k.squaredLength;k.normalize=M.normalize;k.fromMat3=function(e,t){var A=t[0]+t[4]+t[8],r;if(A>0)r=Math.sqrt(A+1),e[3]=.5*r,r=.5/r,e[0]=(t[5]-t[7])*r,e[1]=(t[6]-t[2])*r,e[2]=(t[1]-t[3])*r;else{var n=0;t[4]>t[0]&&(n=1),t[8]>t[n*3+n]&&(n=2);var i=(n+1)%3,a=(n+2)%3;r=Math.sqrt(t[n*3+n]-t[i*3+i]-t[a*3+a]+1),e[n]=.5*r,r=.5/r,e[3]=(t[i*3+a]-t[a*3+i])*r,e[i]=(t[i*3+n]+t[n*3+i])*r,e[a]=(t[a*3+n]+t[n*3+a])*r}return e};var z=function(){this._axisX=new L,this._axisY=new L,this._axisZ=new L,this.array=R.create(),this._dirty=!0};z.prototype={constructor:z,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return R.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new z().copy(this)},copy:function(e){return R.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return R.determinant(this.array)},fromQuat:function(e){return R.fromQuat(this.array,e.array),this._dirty=!0,this},fromRotationTranslation:function(e,t){return R.fromRotationTranslation(this.array,e.array,t.array),this._dirty=!0,this},fromMat2d:function(e){return z.fromMat2d(this,e),this},frustum:function(e,t,A,r,n,i){return R.frustum(this.array,e,t,A,r,n,i),this._dirty=!0,this},identity:function(){return R.identity(this.array),this._dirty=!0,this},invert:function(){return R.invert(this.array,this.array),this._dirty=!0,this},lookAt:function(e,t,A){return R.lookAt(this.array,e.array,t.array,A.array),this._dirty=!0,this},mul:function(e){return R.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return R.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return R.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return R.multiply(this.array,e.array,this.array),this._dirty=!0,this},ortho:function(e,t,A,r,n,i){return R.ortho(this.array,e,t,A,r,n,i),this._dirty=!0,this},perspective:function(e,t,A,r){return R.perspective(this.array,e,t,A,r),this._dirty=!0,this},rotate:function(e,t){return R.rotate(this.array,this.array,e,t.array),this._dirty=!0,this},rotateX:function(e){return R.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return R.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return R.rotateZ(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return R.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return R.translate(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return R.transpose(this.array,this.array),this._dirty=!0,this},decomposeMatrix:function(){var e=C.create(),t=C.create(),A=C.create(),r=Z.create();return function(n,i,a){var s=this.array;C.set(e,s[0],s[1],s[2]),C.set(t,s[4],s[5],s[6]),C.set(A,s[8],s[9],s[10]);var o=C.length(e),l=C.length(t),u=C.length(A),c=this.determinant();c<0&&(o=-o),n&&n.set(o,l,u),a.set(s[12],s[13],s[14]),Z.fromMat4(r,s),r[0]/=o,r[1]/=o,r[2]/=o,r[3]/=l,r[4]/=l,r[5]/=l,r[6]/=u,r[7]/=u,r[8]/=u,k.fromMat3(i.array,r),k.normalize(i.array,i.array),i._dirty=!0,a._dirty=!0}}(),toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Jn=Object.defineProperty;if(Jn){var za=z.prototype;Jn(za,"z",{get:function(){var e=this.array;return this._axisZ.set(e[8],e[9],e[10]),this._axisZ},set:function(e){var t=this.array;e=e.array,t[8]=e[0],t[9]=e[1],t[10]=e[2],this._dirty=!0}}),Jn(za,"y",{get:function(){var e=this.array;return this._axisY.set(e[4],e[5],e[6]),this._axisY},set:function(e){var t=this.array;e=e.array,t[4]=e[0],t[5]=e[1],t[6]=e[2],this._dirty=!0}}),Jn(za,"x",{get:function(){var e=this.array;return this._axisX.set(e[0],e[1],e[2]),this._axisX},set:function(e){var t=this.array;e=e.array,t[0]=e[0],t[1]=e[1],t[2]=e[2],this._dirty=!0}})}z.adjoint=function(e,t){return R.adjoint(e.array,t.array),e._dirty=!0,e};z.copy=function(e,t){return R.copy(e.array,t.array),e._dirty=!0,e};z.determinant=function(e){return R.determinant(e.array)};z.identity=function(e){return R.identity(e.array),e._dirty=!0,e};z.ortho=function(e,t,A,r,n,i,a){return R.ortho(e.array,t,A,r,n,i,a),e._dirty=!0,e};z.perspective=function(e,t,A,r,n){return R.perspective(e.array,t,A,r,n),e._dirty=!0,e};z.lookAt=function(e,t,A,r){return R.lookAt(e.array,t.array,A.array,r.array),e._dirty=!0,e};z.invert=function(e,t){return R.invert(e.array,t.array),e._dirty=!0,e};z.mul=function(e,t,A){return R.mul(e.array,t.array,A.array),e._dirty=!0,e};z.multiply=z.mul;z.fromQuat=function(e,t){return R.fromQuat(e.array,t.array),e._dirty=!0,e};z.fromRotationTranslation=function(e,t,A){return R.fromRotationTranslation(e.array,t.array,A.array),e._dirty=!0,e};z.fromMat2d=function(r,A){r._dirty=!0;var A=A.array,r=r.array;return r[0]=A[0],r[4]=A[2],r[12]=A[4],r[1]=A[1],r[5]=A[3],r[13]=A[5],r};z.rotate=function(e,t,A,r){return R.rotate(e.array,t.array,A,r.array),e._dirty=!0,e};z.rotateX=function(e,t,A){return R.rotateX(e.array,t.array,A),e._dirty=!0,e};z.rotateY=function(e,t,A){return R.rotateY(e.array,t.array,A),e._dirty=!0,e};z.rotateZ=function(e,t,A){return R.rotateZ(e.array,t.array,A),e._dirty=!0,e};z.scale=function(e,t,A){return R.scale(e.array,t.array,A.array),e._dirty=!0,e};z.transpose=function(e,t){return R.transpose(e.array,t.array),e._dirty=!0,e};z.translate=function(e,t,A){return R.translate(e.array,t.array,A.array),e._dirty=!0,e};var fe=function(e,t,A,r){e=e||0,t=t||0,A=A||0,r=r===void 0?1:r,this.array=k.fromValues(e,t,A,r),this._dirty=!0};fe.prototype={constructor:fe,add:function(e){return k.add(this.array,this.array,e.array),this._dirty=!0,this},calculateW:function(){return k.calculateW(this.array,this.array),this._dirty=!0,this},set:function(e,t,A,r){return this.array[0]=e,this.array[1]=t,this.array[2]=A,this.array[3]=r,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new fe(this.x,this.y,this.z,this.w)},conjugate:function(){return k.conjugate(this.array,this.array),this._dirty=!0,this},copy:function(e){return k.copy(this.array,e.array),this._dirty=!0,this},dot:function(e){return k.dot(this.array,e.array)},fromMat3:function(e){return k.fromMat3(this.array,e.array),this._dirty=!0,this},fromMat4:function(){var e=Z.create();return function(t){return Z.fromMat4(e,t.array),Z.transpose(e,e),k.fromMat3(this.array,e),this._dirty=!0,this}}(),identity:function(){return k.identity(this.array),this._dirty=!0,this},invert:function(){return k.invert(this.array,this.array),this._dirty=!0,this},len:function(){return k.len(this.array)},length:function(){return k.length(this.array)},lerp:function(e,t,A){return k.lerp(this.array,e.array,t.array,A),this._dirty=!0,this},mul:function(e){return k.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return k.multiply(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return k.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return k.multiply(this.array,e.array,this.array),this._dirty=!0,this},normalize:function(){return k.normalize(this.array,this.array),this._dirty=!0,this},rotateX:function(e){return k.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return k.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return k.rotateZ(this.array,this.array,e),this._dirty=!0,this},rotationTo:function(e,t){return k.rotationTo(this.array,e.array,t.array),this._dirty=!0,this},setAxes:function(e,t,A){return k.setAxes(this.array,e.array,t.array,A.array),this._dirty=!0,this},setAxisAngle:function(e,t){return k.setAxisAngle(this.array,e.array,t),this._dirty=!0,this},slerp:function(e,t,A){return k.slerp(this.array,e.array,t.array,A),this._dirty=!0,this},sqrLen:function(){return k.sqrLen(this.array)},squaredLength:function(){return k.squaredLength(this.array)},fromEuler:function(e,t){return fe.fromEuler(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Xr=Object.defineProperty;if(Xr){var jn=fe.prototype;Xr(jn,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Xr(jn,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),Xr(jn,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),Xr(jn,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}fe.add=function(e,t,A){return k.add(e.array,t.array,A.array),e._dirty=!0,e};fe.set=function(e,t,A,r,n){k.set(e.array,t,A,r,n),e._dirty=!0};fe.copy=function(e,t){return k.copy(e.array,t.array),e._dirty=!0,e};fe.calculateW=function(e,t){return k.calculateW(e.array,t.array),e._dirty=!0,e};fe.conjugate=function(e,t){return k.conjugate(e.array,t.array),e._dirty=!0,e};fe.identity=function(e){return k.identity(e.array),e._dirty=!0,e};fe.invert=function(e,t){return k.invert(e.array,t.array),e._dirty=!0,e};fe.dot=function(e,t){return k.dot(e.array,t.array)};fe.len=function(e){return k.length(e.array)};fe.lerp=function(e,t,A,r){return k.lerp(e.array,t.array,A.array,r),e._dirty=!0,e};fe.slerp=function(e,t,A,r){return k.slerp(e.array,t.array,A.array,r),e._dirty=!0,e};fe.mul=function(e,t,A){return k.multiply(e.array,t.array,A.array),e._dirty=!0,e};fe.multiply=fe.mul;fe.rotateX=function(e,t,A){return k.rotateX(e.array,t.array,A),e._dirty=!0,e};fe.rotateY=function(e,t,A){return k.rotateY(e.array,t.array,A),e._dirty=!0,e};fe.rotateZ=function(e,t,A){return k.rotateZ(e.array,t.array,A),e._dirty=!0,e};fe.setAxisAngle=function(e,t,A){return k.setAxisAngle(e.array,t.array,A),e._dirty=!0,e};fe.normalize=function(e,t){return k.normalize(e.array,t.array),e._dirty=!0,e};fe.sqrLen=function(e){return k.sqrLen(e.array)};fe.squaredLength=fe.sqrLen;fe.fromMat3=function(e,t){return k.fromMat3(e.array,t.array),e._dirty=!0,e};fe.setAxes=function(e,t,A,r){return k.setAxes(e.array,t.array,A.array,r.array),e._dirty=!0,e};fe.rotationTo=function(e,t,A){return k.rotationTo(e.array,t.array,A.array),e._dirty=!0,e};fe.fromEuler=function(e,t,u){e._dirty=!0,t=t.array;var r=e.array,n=Math.cos(t[0]/2),i=Math.cos(t[1]/2),a=Math.cos(t[2]/2),s=Math.sin(t[0]/2),o=Math.sin(t[1]/2),l=Math.sin(t[2]/2),u=(u||"XYZ").toUpperCase();switch(u){case"XYZ":r[0]=s*i*a+n*o*l,r[1]=n*o*a-s*i*l,r[2]=n*i*l+s*o*a,r[3]=n*i*a-s*o*l;break;case"YXZ":r[0]=s*i*a+n*o*l,r[1]=n*o*a-s*i*l,r[2]=n*i*l-s*o*a,r[3]=n*i*a+s*o*l;break;case"ZXY":r[0]=s*i*a-n*o*l,r[1]=n*o*a+s*i*l,r[2]=n*i*l+s*o*a,r[3]=n*i*a-s*o*l;break;case"ZYX":r[0]=s*i*a-n*o*l,r[1]=n*o*a+s*i*l,r[2]=n*i*l-s*o*a,r[3]=n*i*a+s*o*l;break;case"YZX":r[0]=s*i*a+n*o*l,r[1]=n*o*a+s*i*l,r[2]=n*i*l-s*o*a,r[3]=n*i*a-s*o*l;break;case"XZY":r[0]=s*i*a-n*o*l,r[1]=n*o*a-s*i*l,r[2]=n*i*l+s*o*a,r[3]=n*i*a+s*o*l;break}};var cA=C.set,qn=C.copy,$e=function(e,t){this.min=e||new L(1/0,1/0,1/0),this.max=t||new L(-1/0,-1/0,-1/0),this.vertices=null};$e.prototype={constructor:$e,updateFromVertices:function(e){if(e.length>0){var t=this.min,A=this.max,r=t.array,n=A.array;qn(r,e[0]),qn(n,e[0]);for(var i=1;i<e.length;i++){var a=e[i];a[0]<r[0]&&(r[0]=a[0]),a[1]<r[1]&&(r[1]=a[1]),a[2]<r[2]&&(r[2]=a[2]),a[0]>n[0]&&(n[0]=a[0]),a[1]>n[1]&&(n[1]=a[1]),a[2]>n[2]&&(n[2]=a[2])}t._dirty=!0,A._dirty=!0}},union:function(e){var t=this.min,A=this.max;return C.min(t.array,t.array,e.min.array),C.max(A.array,A.array,e.max.array),t._dirty=!0,A._dirty=!0,this},intersection:function(e){var t=this.min,A=this.max;return C.max(t.array,t.array,e.min.array),C.min(A.array,A.array,e.max.array),t._dirty=!0,A._dirty=!0,this},intersectBoundingBox:function(e){var t=this.min.array,A=this.max.array,r=e.min.array,n=e.max.array;return!(t[0]>n[0]||t[1]>n[1]||t[2]>n[2]||A[0]<r[0]||A[1]<r[1]||A[2]<r[2])},containBoundingBox:function(e){var t=this.min.array,A=this.max.array,r=e.min.array,n=e.max.array;return t[0]<=r[0]&&t[1]<=r[1]&&t[2]<=r[2]&&A[0]>=n[0]&&A[1]>=n[1]&&A[2]>=n[2]},containPoint:function(e){var t=this.min.array,A=this.max.array,r=e.array;return t[0]<=r[0]&&t[1]<=r[1]&&t[2]<=r[2]&&A[0]>=r[0]&&A[1]>=r[1]&&A[2]>=r[2]},isFinite:function(){var e=this.min.array,t=this.max.array;return isFinite(e[0])&&isFinite(e[1])&&isFinite(e[2])&&isFinite(t[0])&&isFinite(t[1])&&isFinite(t[2])},applyTransform:function(e){this.transformFrom(this,e)},transformFrom:function(){var e=C.create(),t=C.create(),A=C.create(),r=C.create(),n=C.create(),i=C.create();return function(a,s){var o=a.min.array,l=a.max.array,u=s.array;return e[0]=u[0]*o[0],e[1]=u[1]*o[0],e[2]=u[2]*o[0],t[0]=u[0]*l[0],t[1]=u[1]*l[0],t[2]=u[2]*l[0],A[0]=u[4]*o[1],A[1]=u[5]*o[1],A[2]=u[6]*o[1],r[0]=u[4]*l[1],r[1]=u[5]*l[1],r[2]=u[6]*l[1],n[0]=u[8]*o[2],n[1]=u[9]*o[2],n[2]=u[10]*o[2],i[0]=u[8]*l[2],i[1]=u[9]*l[2],i[2]=u[10]*l[2],o=this.min.array,l=this.max.array,o[0]=Math.min(e[0],t[0])+Math.min(A[0],r[0])+Math.min(n[0],i[0])+u[12],o[1]=Math.min(e[1],t[1])+Math.min(A[1],r[1])+Math.min(n[1],i[1])+u[13],o[2]=Math.min(e[2],t[2])+Math.min(A[2],r[2])+Math.min(n[2],i[2])+u[14],l[0]=Math.max(e[0],t[0])+Math.max(A[0],r[0])+Math.max(n[0],i[0])+u[12],l[1]=Math.max(e[1],t[1])+Math.max(A[1],r[1])+Math.max(n[1],i[1])+u[13],l[2]=Math.max(e[2],t[2])+Math.max(A[2],r[2])+Math.max(n[2],i[2])+u[14],this.min._dirty=!0,this.max._dirty=!0,this}}(),applyProjection:function(e){var t=this.min.array,A=this.max.array,r=e.array,n=t[0],i=t[1],a=t[2],s=A[0],o=A[1],l=t[2],u=A[0],c=A[1],f=A[2];if(r[15]===1)t[0]=r[0]*n+r[12],t[1]=r[5]*i+r[13],A[2]=r[10]*a+r[14],A[0]=r[0]*u+r[12],A[1]=r[5]*c+r[13],t[2]=r[10]*f+r[14];else{var h=-1/a;t[0]=r[0]*n*h,t[1]=r[5]*i*h,A[2]=(r[10]*a+r[14])*h,h=-1/l,A[0]=r[0]*s*h,A[1]=r[5]*o*h,h=-1/f,t[2]=(r[10]*f+r[14])*h}return this.min._dirty=!0,this.max._dirty=!0,this},updateVertices:function(){var e=this.vertices;if(!e){e=[];for(var t=0;t<8;t++)e[t]=C.fromValues(0,0,0);this.vertices=e}var A=this.min.array,r=this.max.array;return cA(e[0],A[0],A[1],A[2]),cA(e[1],A[0],r[1],A[2]),cA(e[2],r[0],A[1],A[2]),cA(e[3],r[0],r[1],A[2]),cA(e[4],A[0],A[1],r[2]),cA(e[5],A[0],r[1],r[2]),cA(e[6],r[0],A[1],r[2]),cA(e[7],r[0],r[1],r[2]),this},copy:function(e){var t=this.min,A=this.max;return qn(t.array,e.min.array),qn(A.array,e.max.array),t._dirty=!0,A._dirty=!0,this},clone:function(){var e=new $e;return e.copy(this),e}};var Gg=0,zt=tt.extend({name:"",position:null,rotation:null,scale:null,worldTransform:null,localTransform:null,autoUpdateLocalTransform:!0,_parent:null,_scene:null,_needsUpdateWorldTransform:!0,_inIterating:!1,__depth:0},function(){this.name||(this.name=(this.type||"NODE")+"_"+Gg++),this.position||(this.position=new L),this.rotation||(this.rotation=new fe),this.scale||(this.scale=new L(1,1,1)),this.worldTransform=new z,this.localTransform=new z,this._children=[]},{target:null,invisible:!1,isSkinnedMesh:function(){return!1},isRenderable:function(){return!1},setName:function(e){var t=this._scene;if(t){var A=t._nodeRepository;delete A[this.name],A[e]=this}this.name=e},add:function(e){var t=e._parent;if(t!==this){t&&t.remove(e),e._parent=this,this._children.push(e);var A=this._scene;A&&A!==e.scene&&e.traverse(this._addSelfToScene,this),e._needsUpdateWorldTransform=!0}},remove:function(e){var t=this._children,A=t.indexOf(e);A<0||(t.splice(A,1),e._parent=null,this._scene&&e.traverse(this._removeSelfFromScene,this))},removeAll:function(){for(var e=this._children,t=0;t<e.length;t++)e[t]._parent=null,this._scene&&e[t].traverse(this._removeSelfFromScene,this);this._children=[]},getScene:function(){return this._scene},getParent:function(){return this._parent},_removeSelfFromScene:function(e){e._scene.removeFromScene(e),e._scene=null},_addSelfToScene:function(e){this._scene.addToScene(e),e._scene=this._scene},isAncestor:function(e){for(var t=e._parent;t;){if(t===this)return!0;t=t._parent}return!1},children:function(){return this._children.slice()},childAt:function(e){return this._children[e]},getChildByName:function(e){for(var t=this._children,A=0;A<t.length;A++)if(t[A].name===e)return t[A]},getDescendantByName:function(e){for(var t=this._children,A=0;A<t.length;A++){var r=t[A];if(r.name===e)return r;var n=r.getDescendantByName(e);if(n)return n}},queryNode:function(e){if(e){for(var t=e.split("/"),A=this,r=0;r<t.length;r++){var n=t[r];if(n){for(var i=!1,a=A._children,s=0;s<a.length;s++){var o=a[s];if(o.name===n){A=o,i=!0;break}}if(!i)return}}return A}},getPath:function(e){if(!this._parent)return"/";for(var t=this._parent,A=this.name;t._parent&&(A=t.name+"/"+A,t._parent!=e);)t=t._parent;return!t._parent&&e?null:A},traverse:function(e,t){e.call(t,this);for(var A=this._children,r=0,n=A.length;r<n;r++)A[r].traverse(e,t)},eachChild:function(e,t){for(var A=this._children,r=0,n=A.length;r<n;r++){var i=A[r];e.call(t,i,r)}},setLocalTransform:function(e){R.copy(this.localTransform.array,e.array),this.decomposeLocalTransform()},decomposeLocalTransform:function(e){var t=e?null:this.scale;this.localTransform.decomposeMatrix(t,this.rotation,this.position)},setWorldTransform:function(e){R.copy(this.worldTransform.array,e.array),this.decomposeWorldTransform()},decomposeWorldTransform:function(){var e=R.create();return function(t){var A=this.localTransform,r=this.worldTransform;this._parent?(R.invert(e,this._parent.worldTransform.array),R.multiply(A.array,e,r.array)):R.copy(A.array,r.array);var n=t?null:this.scale;A.decomposeMatrix(n,this.rotation,this.position)}}(),transformNeedsUpdate:function(){return this.position._dirty||this.rotation._dirty||this.scale._dirty},updateLocalTransform:function(){var e=this.position,t=this.rotation,A=this.scale;if(this.transformNeedsUpdate()){var r=this.localTransform.array;R.fromRotationTranslation(r,t.array,e.array),R.scale(r,r,A.array),t._dirty=!1,A._dirty=!1,e._dirty=!1,this._needsUpdateWorldTransform=!0}},_updateWorldTransformTopDown:function(){var e=this.localTransform.array,t=this.worldTransform.array;this._parent?R.multiplyAffine(t,this._parent.worldTransform.array,e):R.copy(t,e)},updateWorldTransform:function(){for(var e=this;e&&e.getParent()&&e.getParent().transformNeedsUpdate();)e=e.getParent();e.update()},update:function(e){this.autoUpdateLocalTransform?this.updateLocalTransform():e=!0,(e||this._needsUpdateWorldTransform)&&(this._updateWorldTransformTopDown(),e=!0,this._needsUpdateWorldTransform=!1);for(var t=this._children,A=0,r=t.length;A<r;A++)t[A].update(e)},getBoundingBox:function(){function e(n){return!n.invisible&&n.geometry}var t=new $e,A=new z,r=new z;return function(n,i){return i=i||new $e,this._parent?z.invert(r,this._parent.worldTransform):z.identity(r),this.traverse(function(a){a.geometry&&a.geometry.boundingBox&&(t.copy(a.geometry.boundingBox),z.multiply(A,r,a.worldTransform),t.applyTransform(A),i.union(t))},this,e),i}}(),getWorldPosition:function(e){this.transformNeedsUpdate()&&this.updateWorldTransform();var t=this.worldTransform.array;if(e){var A=e.array;return A[0]=t[12],A[1]=t[13],A[2]=t[14],e}else return new L(t[12],t[13],t[14])},clone:function(){var e=new this.constructor,t=this._children;e.setName(this.name),e.position.copy(this.position),e.rotation.copy(this.rotation),e.scale.copy(this.scale);for(var A=0;A<t.length;A++)e.add(t[A].clone());return e},rotateAround:function(){var e=new L,t=new z;return function(A,r,n){e.copy(this.position).subtract(A);var i=this.localTransform;i.identity(),i.translate(A),i.rotate(n,r),t.fromRotationTranslation(this.rotation,e),i.multiply(t),i.scale(this.scale),this.decomposeLocalTransform(),this._needsUpdateWorldTransform=!0}}(),lookAt:function(){var e=new z;return function(t,A){e.lookAt(this.position,t,A||this.localTransform.y).invert(),this.setLocalTransform(e),this.target=t}}()}),ht=zt.extend({material:null,geometry:null,mode:D.TRIANGLES,_renderInfo:null},{__program:null,lightGroup:0,renderOrder:0,culling:!0,cullFace:D.BACK,frontFace:D.CCW,frustumCulling:!0,receiveShadow:!0,castShadow:!0,ignorePicking:!1,ignorePreZ:!1,ignoreGBuffer:!1,isRenderable:function(){return this.geometry&&this.material&&this.material.shader&&!this.invisible&&this.geometry.vertexCount>0},beforeRender:function(e){},afterRender:function(e,t){},getBoundingBox:function(e,t){return t=zt.prototype.getBoundingBox.call(this,e,t),this.geometry&&this.geometry.boundingBox&&t.union(this.geometry.boundingBox),t},clone:function(){var e=["castShadow","receiveShadow","mode","culling","cullFace","frontFace","frustumCulling","renderOrder","lineWidth","ignorePicking","ignorePreZ","ignoreGBuffer"];return function(){var t=zt.prototype.clone.call(this);t.geometry=this.geometry,t.material=this.material;for(var A=0;A<e.length;A++){var r=e[A];t[r]!==this[r]&&(t[r]=this[r])}return t}}()});ht.POINTS=D.POINTS;ht.LINES=D.LINES;ht.LINE_LOOP=D.LINE_LOOP;ht.LINE_STRIP=D.LINE_STRIP;ht.TRIANGLES=D.TRIANGLES;ht.TRIANGLE_STRIP=D.TRIANGLE_STRIP;ht.TRIANGLE_FAN=D.TRIANGLE_FAN;ht.BACK=D.BACK;ht.FRONT=D.FRONT;ht.FRONT_AND_BACK=D.FRONT_AND_BACK;ht.CW=D.CW;ht.CCW=D.CCW;var Co=tt.extend({scene:null,camera:null,renderer:null},function(){this._ray=new ZA,this._ndc=new J},{pick:function(e,t,A){var r=this.pickAll(e,t,[],A);return r[0]||null},pickAll:function(e,t,A,r){return this.renderer.screenToNDC(e,t,this._ndc),this.camera.castRay(this._ndc,this._ray),A=A||[],this._intersectNode(this.scene,A,r||!1),A.sort(this._intersectionCompareFunc),A},_intersectNode:function(e,t,A){e instanceof ht&&e.isRenderable()&&(!e.ignorePicking||A)&&(e.mode===D.TRIANGLES&&e.geometry.isUseIndices()||e.geometry.pickByRay||e.geometry.pick)&&this._intersectRenderable(e,t);for(var r=0;r<e._children.length;r++)this._intersectNode(e._children[r],t,A)},_intersectRenderable:function(){var e=new L,t=new L,A=new L,r=new ZA,n=new z;return function(i,a){var s=i.isSkinnedMesh();r.copy(this._ray),z.invert(n,i.worldTransform),s||r.applyTransform(n);var o=i.geometry,l=s?i.skeleton.boundingBox:o.boundingBox;if(!(l&&!r.intersectBoundingBox(l))){if(o.pick){o.pick(this._ndc.x,this._ndc.y,this.renderer,this.camera,i,a);return}else if(o.pickByRay){o.pickByRay(r,i,a);return}var u=i.cullFace===D.BACK&&i.frontFace===D.CCW||i.cullFace===D.FRONT&&i.frontFace===D.CW,c,f=o.indices,h=o.attributes.position,d=o.attributes.weight,g=o.attributes.joint,v,p=[];if(!(!h||!h.value||!f)){if(s){v=i.skeleton.getSubSkinMatrices(i.__uid__,i.joints);for(var m=0;m<i.joints.length;m++){p[m]=p[m]||[];for(var B=0;B<16;B++)p[m][B]=v[m*16+B]}var _=[],x=[],y=[],T=[],E=[],F=o.attributes.skinnedPosition;(!F||!F.value)&&(o.createAttribute("skinnedPosition","f",3),F=o.attributes.skinnedPosition,F.init(o.vertexCount));for(var m=0;m<o.vertexCount;m++){h.get(m,_),d.get(m,x),g.get(m,y),x[3]=1-x[0]-x[1]-x[2],C.set(T,0,0,0);for(var B=0;B<4;B++)y[B]>=0&&x[B]>1e-4&&(C.transformMat4(E,_,p[y[B]]),C.scaleAndAdd(T,T,E,x[B]));F.set(m,T)}}for(var m=0;m<f.length;m+=3){var S=f[m],U=f[m+1],I=f[m+2],Q=s?o.attributes.skinnedPosition:h;if(Q.get(S,e.array),Q.get(U,t.array),Q.get(I,A.array),u?c=r.intersectTriangle(e,t,A,i.culling):c=r.intersectTriangle(e,A,t,i.culling),c){var b=new L;s?L.copy(b,c):L.transformMat4(b,c,i.worldTransform),a.push(new Co.Intersection(c,b,i,[S,U,I],m/3,L.dist(b,this._ray.origin)))}}}}}}(),_intersectionCompareFunc:function(e,t){return e.distance-t.distance}});Co.Intersection=function(e,t,A,r,n,i){this.point=e,this.pointWorld=t,this.target=A,this.triangle=r,this.triangleIndex=n,this.distance=i};var Yr="__dt__",Ur=function(){this._contextId=0,this._caches=[],this._context={}};Ur.prototype={use:function(e,t){var A=this._caches;A[e]||(A[e]={},t&&(A[e]=t())),this._contextId=e,this._context=A[e]},put:function(e,t){this._context[e]=t},get:function(e){return this._context[e]},dirty:function(e){e=e||"";var t=Yr+e;this.put(t,!0)},dirtyAll:function(e){e=e||"";for(var t=Yr+e,A=this._caches,r=0;r<A.length;r++)A[r]&&(A[r][t]=!0)},fresh:function(e){e=e||"";var t=Yr+e;this.put(t,!1)},freshAll:function(e){e=e||"";for(var t=Yr+e,A=this._caches,r=0;r<A.length;r++)A[r]&&(A[r][t]=!1)},isDirty:function(e){e=e||"";var t=Yr+e,A=this._context;return!A.hasOwnProperty(t)||A[t]===!0},deleteContext:function(e){delete this._caches[e],this._context={}},delete:function(e){delete this._context[e]},clearAll:function(){this._caches={}},getContext:function(){return this._context},eachContext:function(e,t){var A=Object.keys(this._caches);A.forEach(function(r){e&&e.call(t,r)})},miss:function(e){return!this._context.hasOwnProperty(e)}};Ur.prototype.constructor=Ur;var P=tt.extend({width:512,height:512,type:D.UNSIGNED_BYTE,format:D.RGBA,wrapS:D.REPEAT,wrapT:D.REPEAT,minFilter:D.LINEAR_MIPMAP_LINEAR,magFilter:D.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,sRGB:!0,unpackAlignment:4,premultiplyAlpha:!1,dynamic:!1,NPOT:!1,__used:0},function(){this._cache=new Ur},{getWebGLTexture:function(e){var t=e.gl,A=this._cache;return A.use(e.__uid__),A.miss("webgl_texture")&&A.put("webgl_texture",t.createTexture()),this.dynamic?this.update(e):A.isDirty()&&(this.update(e),A.fresh()),A.get("webgl_texture")},bind:function(){},unbind:function(){},dirty:function(){this._cache&&this._cache.dirtyAll()},update:function(e){},updateCommon:function(e){var t=e.gl;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,this.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,this.unpackAlignment),this.format===D.DEPTH_COMPONENT&&(this.useMipmap=!1);var A=e.getGLExtension("EXT_sRGB");this.format===P.SRGB&&!A&&(this.format=P.RGB),this.format===P.SRGB_ALPHA&&!A&&(this.format=P.RGBA),this.NPOT=!this.isPowerOfTwo()},getAvailableWrapS:function(){return this.NPOT?D.CLAMP_TO_EDGE:this.wrapS},getAvailableWrapT:function(){return this.NPOT?D.CLAMP_TO_EDGE:this.wrapT},getAvailableMinFilter:function(){var e=this.minFilter;return this.NPOT||!this.useMipmap?e===D.NEAREST_MIPMAP_NEAREST||e===D.NEAREST_MIPMAP_LINEAR?D.NEAREST:e===D.LINEAR_MIPMAP_LINEAR||e===D.LINEAR_MIPMAP_NEAREST?D.LINEAR:e:e},getAvailableMagFilter:function(){return this.magFilter},nextHighestPowerOfTwo:function(e){--e;for(var t=1;t<32;t<<=1)e=e|e>>t;return e+1},dispose:function(e){var t=this._cache;t.use(e.__uid__);var A=t.get("webgl_texture");A&&e.gl.deleteTexture(A),t.deleteContext(e.__uid__)},isRenderable:function(){},isPowerOfTwo:function(){}});Object.defineProperty(P.prototype,"width",{get:function(){return this._width},set:function(e){this._width=e}});Object.defineProperty(P.prototype,"height",{get:function(){return this._height},set:function(e){this._height=e}});P.BYTE=D.BYTE;P.UNSIGNED_BYTE=D.UNSIGNED_BYTE;P.SHORT=D.SHORT;P.UNSIGNED_SHORT=D.UNSIGNED_SHORT;P.INT=D.INT;P.UNSIGNED_INT=D.UNSIGNED_INT;P.FLOAT=D.FLOAT;P.HALF_FLOAT=36193;P.UNSIGNED_INT_24_8_WEBGL=34042;P.DEPTH_COMPONENT=D.DEPTH_COMPONENT;P.DEPTH_STENCIL=D.DEPTH_STENCIL;P.ALPHA=D.ALPHA;P.RGB=D.RGB;P.RGBA=D.RGBA;P.LUMINANCE=D.LUMINANCE;P.LUMINANCE_ALPHA=D.LUMINANCE_ALPHA;P.SRGB=35904;P.SRGB_ALPHA=35906;P.COMPRESSED_RGB_S3TC_DXT1_EXT=33776;P.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777;P.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778;P.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779;P.NEAREST=D.NEAREST;P.LINEAR=D.LINEAR;P.NEAREST_MIPMAP_NEAREST=D.NEAREST_MIPMAP_NEAREST;P.LINEAR_MIPMAP_NEAREST=D.LINEAR_MIPMAP_NEAREST;P.NEAREST_MIPMAP_LINEAR=D.NEAREST_MIPMAP_LINEAR;P.LINEAR_MIPMAP_LINEAR=D.LINEAR_MIPMAP_LINEAR;P.REPEAT=D.REPEAT;P.CLAMP_TO_EDGE=D.CLAMP_TO_EDGE;P.MIRRORED_REPEAT=D.MIRRORED_REPEAT;var We=ht.extend({skeleton:null,joints:null},function(){this.joints||(this.joints=[])},{offsetMatrix:null,isInstancedMesh:function(){return!1},isSkinnedMesh:function(){return!!(this.skeleton&&this.joints&&this.joints.length>0)},clone:function(){var e=ht.prototype.clone.call(this);return e.skeleton=this.skeleton,this.joints&&(e.joints=this.joints.slice()),e}});We.POINTS=D.POINTS;We.LINES=D.LINES;We.LINE_LOOP=D.LINE_LOOP;We.LINE_STRIP=D.LINE_STRIP;We.TRIANGLES=D.TRIANGLES;We.TRIANGLE_STRIP=D.TRIANGLE_STRIP;We.TRIANGLE_FAN=D.TRIANGLE_FAN;We.BACK=D.BACK;We.FRONT=D.FRONT;We.FRONT_AND_BACK=D.FRONT_AND_BACK;We.CW=D.CW;We.CCW=D.CCW;var Pn={};Pn.isPowerOfTwo=function(e){return(e&e-1)===0};Pn.nextPowerOfTwo=function(e){return e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,e++,e};Pn.nearestPowerOfTwo=function(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))};var Cl=Pn.isPowerOfTwo;function El(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function Vg(e,t){var A=El(e.width),r=El(e.height);t=t||document.createElement("canvas"),t.width=A,t.height=r;var n=t.getContext("2d");return n.drawImage(e.image,0,0,A,r),t}var $=P.extend(function(){return{image:null,pixels:null,mipmaps:[],convertToPOT:!1}},{textureType:"texture2D",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),this.updateCommon(e);var A=this.format,r=this.type,n=!!(this.convertToPOT&&!this.mipmaps.length&&this.image&&(this.wrapS===P.REPEAT||this.wrapT===P.REPEAT)&&this.NPOT);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,n?this.wrapS:this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,n?this.wrapT:this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n?this.magFilter:this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n?this.minFilter:this.getAvailableMinFilter());var i=e.getGLExtension("EXT_texture_filter_anisotropic");if(i&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_2D,i.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),r===36193){var a=e.getGLExtension("OES_texture_half_float");a||(r=D.FLOAT)}if(this.mipmaps.length)for(var s=this.width,o=this.height,l=0;l<this.mipmaps.length;l++){var u=this.mipmaps[l];this._updateTextureData(t,u,l,s,o,A,r,!1),s/=2,o/=2}else this._updateTextureData(t,this,0,this.width,this.height,A,r,n),this.useMipmap&&(!this.NPOT||n)&&t.generateMipmap(t.TEXTURE_2D);t.bindTexture(t.TEXTURE_2D,null)},_updateTextureData:function(e,t,A,r,n,i,a,s){if(t.image){var o=t.image;s&&(this._potCanvas=Vg(this,this._potCanvas),o=this._potCanvas),e.texImage2D(e.TEXTURE_2D,A,i,i,a,o)}else i<=P.COMPRESSED_RGBA_S3TC_DXT5_EXT&&i>=P.COMPRESSED_RGB_S3TC_DXT1_EXT?e.compressedTexImage2D(e.TEXTURE_2D,A,i,r,n,0,t.pixels):e.texImage2D(e.TEXTURE_2D,A,i,r,n,0,i,a,t.pixels)},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_2D))},isPowerOfTwo:function(){return Cl(this.width)&&Cl(this.height)},isRenderable:function(){return this.image?this.image.width>0&&this.image.height>0:!!(this.width&&this.height)},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,null)},load:function(e,t){var A=ue.createImage();t&&(A.crossOrigin=t);var r=this;return A.onload=function(){r.dirty(),r.trigger("success",r)},A.onerror=function(){r.trigger("error",r)},A.src=e,this.image=A,this}});Object.defineProperty($.prototype,"width",{get:function(){return this.image?this.image.width:this._width},set:function(e){this.image?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty($.prototype,"height",{get:function(){return this.image?this.image.height:this._height},set:function(e){this.image?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});function Hc(e){return{byte:ue.Int8Array,ubyte:ue.Uint8Array,short:ue.Int16Array,ushort:ue.Uint16Array}[e]||ue.Float32Array}function ka(e){return"attr_"+e}function Sr(e,t,A,r){switch(this.name=e,this.type=t,this.size=A,this.semantic=r||"",this.value=null,A){case 1:this.get=function(n){return this.value[n]},this.set=function(n,i){this.value[n]=i},this.copy=function(n,i){this.value[n]=this.value[n]};break;case 2:this.get=function(n,i){var a=this.value;return i[0]=a[n*2],i[1]=a[n*2+1],i},this.set=function(n,i){var a=this.value;a[n*2]=i[0],a[n*2+1]=i[1]},this.copy=function(n,i){var a=this.value;i*=2,n*=2,a[n]=a[i],a[n+1]=a[i+1]};break;case 3:this.get=function(n,i){var a=n*3,s=this.value;return i[0]=s[a],i[1]=s[a+1],i[2]=s[a+2],i},this.set=function(n,i){var a=n*3,s=this.value;s[a]=i[0],s[a+1]=i[1],s[a+2]=i[2]},this.copy=function(n,i){var a=this.value;i*=3,n*=3,a[n]=a[i],a[n+1]=a[i+1],a[n+2]=a[i+2]};break;case 4:this.get=function(n,i){var a=this.value,s=n*4;return i[0]=a[s],i[1]=a[s+1],i[2]=a[s+2],i[3]=a[s+3],i},this.set=function(n,i){var a=this.value,s=n*4;a[s]=i[0],a[s+1]=i[1],a[s+2]=i[2],a[s+3]=i[3]},this.copy=function(n,i){var a=this.value;i*=4,n*=4,a[n]=a[i],a[n+1]=a[i+1],a[n+2]=a[i+2],a[n+3]=a[i+3]}}}Sr.prototype.init=function(e){if(!this.value||this.value.length!==e*this.size){var t=Hc(this.type);this.value=new t(e*this.size)}};Sr.prototype.fromArray=function(e){var t=Hc(this.type),A;if(e[0]&&e[0].length){var r=0,n=this.size;A=new t(e.length*n);for(var i=0;i<e.length;i++)for(var a=0;a<n;a++)A[r++]=e[i][a]}else A=new t(e);this.value=A};Sr.prototype.clone=function(e){var t=new Sr(this.name,this.type,this.size,this.semantic);return e&&console.warn("todo"),t};function Oc(e,t,A,r,n){this.name=e,this.type=t,this.buffer=A,this.size=r,this.semantic=n,this.symbol="",this.needsRemove=!1}function Pc(e){this.buffer=e,this.count=0}var dt=tt.extend(function(){return{attributes:{},indices:null,dynamic:!0,_enabledAttributes:null,__used:0}},function(){this._cache=new Ur,this._attributeList=Object.keys(this.attributes),this.__vaoCache={}},{mainAttribute:"",pick:null,pickByRay:null,dirty:function(){for(var e=this.getEnabledAttributes(),t=0;t<e.length;t++)this.dirtyAttribute(e[t]);this.dirtyIndices(),this._enabledAttributes=null,this._cache.dirty("any")},dirtyIndices:function(){this._cache.dirtyAll("indices")},dirtyAttribute:function(e){this._cache.dirtyAll(ka(e)),this._cache.dirtyAll("attributes")},getTriangleIndices:function(e,t){if(e<this.triangleCount&&e>=0){t||(t=[]);var A=this.indices;return t[0]=A[e*3],t[1]=A[e*3+1],t[2]=A[e*3+2],t}},setTriangleIndices:function(e,t){var A=this.indices;A[e*3]=t[0],A[e*3+1]=t[1],A[e*3+2]=t[2]},isUseIndices:function(){return!!this.indices},initIndicesFromArray:function(e){var t,A=this.vertexCount>65535?ue.Uint32Array:ue.Uint16Array;if(e[0]&&e[0].length){var r=0,n=3;t=new A(e.length*n);for(var i=0;i<e.length;i++)for(var a=0;a<n;a++)t[r++]=e[i][a]}else t=new A(e);this.indices=t},createAttribute:function(e,t,A,r){var n=new Sr(e,t,A,r);return this.attributes[e]&&this.removeAttribute(e),this.attributes[e]=n,this._attributeList.push(e),n},removeAttribute:function(e){var t=this._attributeList,A=t.indexOf(e);return A>=0?(t.splice(A,1),delete this.attributes[e],!0):!1},getAttribute:function(e){return this.attributes[e]},getEnabledAttributes:function(){var e=this._enabledAttributes,t=this._attributeList;if(e)return e;for(var A=[],r=this.vertexCount,n=0;n<t.length;n++){var i=t[n],a=this.attributes[i];a.value&&a.value.length===r*a.size&&A.push(i)}return this._enabledAttributes=A,A},getBufferChunks:function(e){var t=this._cache;t.use(e.__uid__);var A=t.isDirty("attributes"),r=t.isDirty("indices");if(A||r){this._updateBuffer(e.gl,A,r);for(var n=this.getEnabledAttributes(),i=0;i<n.length;i++)t.fresh(ka(n[i]));t.fresh("attributes"),t.fresh("indices")}return t.fresh("any"),t.get("chunks")},_updateBuffer:function(e,t,A){var r=this._cache,n=r.get("chunks"),i=!1;n||(n=[],n[0]={attributeBuffers:[],indicesBuffer:null},r.put("chunks",n),i=!0);var a=n[0],s=a.attributeBuffers,o=a.indicesBuffer;if(t||i){var l=this.getEnabledAttributes(),u={};if(!i)for(var c=0;c<s.length;c++)u[s[c].name]=s[c];for(var f=0;f<l.length;f++){var h=l[f],d=this.attributes[h],g;i||(g=u[h]);var v;g?v=g.buffer:v=e.createBuffer(),r.isDirty(ka(h))&&(e.bindBuffer(e.ARRAY_BUFFER,v),e.bufferData(e.ARRAY_BUFFER,d.value,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW)),s[f]=new Oc(h,d.type,v,d.size,d.semantic)}for(var c=f;c<s.length;c++)e.deleteBuffer(s[c].buffer);s.length=f}this.isUseIndices()&&(A||i)&&(o||(o=new Pc(e.createBuffer()),a.indicesBuffer=o),o.count=this.indices.length,e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,o.buffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW))},dispose:function(e){var t=this._cache;t.use(e.__uid__);var A=t.get("chunks");if(A)for(var r=0;r<A.length;r++){for(var n=A[r],i=0;i<n.attributeBuffers.length;i++){var a=n.attributeBuffers[i];e.gl.deleteBuffer(a.buffer)}n.indicesBuffer&&e.gl.deleteBuffer(n.indicesBuffer.buffer)}if(this.__vaoCache){var s=e.getGLExtension("OES_vertex_array_object");for(var o in this.__vaoCache){var l=this.__vaoCache[o].vao;l&&s.deleteVertexArrayOES(l)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});Object.defineProperty&&(Object.defineProperty(dt.prototype,"vertexCount",{enumerable:!1,get:function(){var e=this.attributes[this.mainAttribute];return e||(e=this.attributes[this._attributeList[0]]),!e||!e.value?0:e.value.length/e.size}}),Object.defineProperty(dt.prototype,"triangleCount",{enumerable:!1,get:function(){var e=this.indices;return e?e.length/3:0}}));dt.STATIC_DRAW=D.STATIC_DRAW;dt.DYNAMIC_DRAW=D.DYNAMIC_DRAW;dt.STREAM_DRAW=D.STREAM_DRAW;dt.AttributeBuffer=Oc;dt.IndicesBuffer=Pc;dt.Attribute=Sr;var lt=C.create,ar=C.add,MA=C.set,Vt=dt.Attribute,re=dt.extend(function(){return{attributes:{position:new Vt("position","float",3,"POSITION"),texcoord0:new Vt("texcoord0","float",2,"TEXCOORD_0"),texcoord1:new Vt("texcoord1","float",2,"TEXCOORD_1"),normal:new Vt("normal","float",3,"NORMAL"),tangent:new Vt("tangent","float",4,"TANGENT"),color:new Vt("color","float",4,"COLOR"),weight:new Vt("weight","float",3,"WEIGHT"),joint:new Vt("joint","float",4,"JOINT"),barycentric:new Vt("barycentric","float",3,null)},boundingBox:null}},{mainAttribute:"position",updateBoundingBox:function(){var e=this.boundingBox;e||(e=this.boundingBox=new $e);var t=this.attributes.position.value;if(t&&t.length){var A=e.min,r=e.max,n=A.array,i=r.array;C.set(n,t[0],t[1],t[2]),C.set(i,t[0],t[1],t[2]);for(var a=3;a<t.length;){var s=t[a++],o=t[a++],l=t[a++];s<n[0]&&(n[0]=s),o<n[1]&&(n[1]=o),l<n[2]&&(n[2]=l),s>i[0]&&(i[0]=s),o>i[1]&&(i[1]=o),l>i[2]&&(i[2]=l)}A._dirty=!0,r._dirty=!0}},generateVertexNormals:function(){if(this.vertexCount){var e=this.indices,t=this.attributes,A=t.position.value,r=t.normal.value;if(!r||r.length!==A.length)r=t.normal.value=new ue.Float32Array(A.length);else for(var n=0;n<r.length;n++)r[n]=0;for(var i=lt(),a=lt(),s=lt(),o=lt(),l=lt(),u=lt(),c=e?e.length:this.vertexCount,f,h,d,g=0;g<c;){e?(f=e[g++],h=e[g++],d=e[g++]):(f=g++,h=g++,d=g++),MA(i,A[f*3],A[f*3+1],A[f*3+2]),MA(a,A[h*3],A[h*3+1],A[h*3+2]),MA(s,A[d*3],A[d*3+1],A[d*3+2]),C.sub(o,i,a),C.sub(l,a,s),C.cross(u,o,l);for(var n=0;n<3;n++)r[f*3+n]=r[f*3+n]+u[n],r[h*3+n]=r[h*3+n]+u[n],r[d*3+n]=r[d*3+n]+u[n]}for(var n=0;n<r.length;)MA(u,r[n],r[n+1],r[n+2]),C.normalize(u,u),r[n++]=u[0],r[n++]=u[1],r[n++]=u[2];this.dirty()}},generateFaceNormals:function(){if(this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.indices,t=this.attributes,A=t.position.value,r=t.normal.value,n=lt(),i=lt(),a=lt(),s=lt(),o=lt(),l=lt();r||(r=t.normal.value=new Float32Array(A.length));for(var u=e?e.length:this.vertexCount,c,f,h,d=0;d<u;){e?(c=e[d++],f=e[d++],h=e[d++]):(c=d++,f=d++,h=d++),MA(n,A[c*3],A[c*3+1],A[c*3+2]),MA(i,A[f*3],A[f*3+1],A[f*3+2]),MA(a,A[h*3],A[h*3+1],A[h*3+2]),C.sub(s,n,i),C.sub(o,i,a),C.cross(l,s,o),C.normalize(l,l);for(var g=0;g<3;g++)r[c*3+g]=l[g],r[f*3+g]=l[g],r[h*3+g]=l[g]}this.dirty()}},generateTangents:function(){if(this.vertexCount){var e=this.vertexCount,t=this.attributes;t.tangent.value||(t.tangent.value=new Float32Array(e*4));var A=t.texcoord0.value,r=t.position.value,n=t.tangent.value,i=t.normal.value;if(!A){console.warn("Geometry without texcoords can't generate tangents.");return}for(var a=[],s=[],o=0;o<e;o++)a[o]=[0,0,0],s[o]=[0,0,0];for(var l=[0,0,0],u=[0,0,0],c=this.indices,f=c?c.length:this.vertexCount,h,d,g,o=0;o<f;){c?(h=c[o++],d=c[o++],g=c[o++]):(h=o++,d=o++,g=o++);var v=A[h*2],p=A[d*2],m=A[g*2],B=A[h*2+1],_=A[d*2+1],x=A[g*2+1],y=r[h*3],T=r[d*3],E=r[g*3],F=r[h*3+1],S=r[d*3+1],U=r[g*3+1],I=r[h*3+2],Q=r[d*3+2],b=r[g*3+2],N=T-y,H=E-y,V=S-F,G=U-F,j=Q-I,W=b-I,ne=p-v,ee=m-v,ie=_-B,te=x-B,q=1/(ne*te-ie*ee);l[0]=(te*N-ie*H)*q,l[1]=(te*V-ie*G)*q,l[2]=(te*j-ie*W)*q,u[0]=(ne*H-ee*N)*q,u[1]=(ne*G-ee*V)*q,u[2]=(ne*W-ee*j)*q,ar(a[h],a[h],l),ar(a[d],a[d],l),ar(a[g],a[g],l),ar(s[h],s[h],u),ar(s[d],s[d],u),ar(s[g],s[g],u)}for(var Be=lt(),ge=lt(),Ue=lt(),o=0;o<e;o++){Ue[0]=i[o*3],Ue[1]=i[o*3+1],Ue[2]=i[o*3+2];var rt=a[o];C.scale(Be,Ue,C.dot(Ue,rt)),C.sub(Be,rt,Be),C.normalize(Be,Be),C.cross(ge,Ue,rt),n[o*4]=Be[0],n[o*4+1]=Be[1],n[o*4+2]=Be[2],n[o*4+3]=C.dot(ge,s[o])<0?-1:1}this.dirty()}},isUniqueVertex:function(){return this.isUseIndices()?this.vertexCount===this.indices.length:!0},generateUniqueVertex:function(){if(!(!this.vertexCount||!this.indices)){this.indices.length>65535&&(this.indices=new ue.Uint32Array(this.indices));for(var e=this.attributes,t=this.indices,A=this.getEnabledAttributes(),r={},n=0;n<A.length;n++){var i=A[n];r[i]=e[i].value,e[i].init(this.indices.length)}for(var a=0,s=0;s<t.length;s++){for(var o=t[s],n=0;n<A.length;n++)for(var i=A[n],l=e[i].value,u=e[i].size,c=0;c<u;c++)l[a*u+c]=r[i][o*u+c];t[s]=a,a++}this.dirty()}},generateBarycentric:function(){if(this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.attributes,t=e.barycentric.value,A=this.indices;if(!(t&&t.length===A.length*3)){t=e.barycentric.value=new Float32Array(A.length*3);for(var r=0;r<(A?A.length:this.vertexCount/3);)for(var n=0;n<3;n++){var i=A?A[r++]:r*3+n;t[i*3+n]=1}this.dirty()}}},applyTransform:function(e){var t=this.attributes,A=t.position.value,r=t.normal.value,n=t.tangent.value;e=e.array;var i=R.create();R.invert(i,e),R.transpose(i,i);var a=C.transformMat4,s=C.forEach;s(A,3,0,null,a,e),r&&s(r,3,0,null,a,i),n&&s(n,4,0,null,a,i),this.boundingBox&&this.updateBoundingBox()},dispose:function(e){var t=this._cache;t.use(e.__uid__);var A=t.get("chunks");if(A)for(var r=0;r<A.length;r++){for(var n=A[r],i=0;i<n.attributeBuffers.length;i++){var a=n.attributeBuffers[i];e.gl.deleteBuffer(a.buffer)}n.indicesBuffer&&e.gl.deleteBuffer(n.indicesBuffer.buffer)}if(this.__vaoCache){var s=e.getGLExtension("OES_vertex_array_object");for(var o in this.__vaoCache){var l=this.__vaoCache[o].vao;l&&s.deleteVertexArrayOES(l)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});re.STATIC_DRAW=dt.STATIC_DRAW;re.DYNAMIC_DRAW=dt.DYNAMIC_DRAW;re.STREAM_DRAW=dt.STREAM_DRAW;re.AttributeBuffer=dt.AttributeBuffer;re.IndicesBuffer=dt.IndicesBuffer;re.Attribute=Vt;const Kg=`vec3 calcAmbientSHLight(int idx, vec3 N) {
 int offset = 9 * idx;
 return ambientSHLightCoefficients[0]
 + ambientSHLightCoefficients[1] * N.x
 + ambientSHLightCoefficients[2] * N.y
 + ambientSHLightCoefficients[3] * N.z
 + ambientSHLightCoefficients[4] * N.x * N.z
 + ambientSHLightCoefficients[5] * N.z * N.y
 + ambientSHLightCoefficients[6] * N.y * N.x
 + ambientSHLightCoefficients[7] * (3.0 * N.z * N.z - 1.0)
 + ambientSHLightCoefficients[8] * (N.x * N.x - N.y * N.y);
}`;var Lt="uniform vec3 ",Zr="uniform float ",sr="@export clay.header.",or="@end",je=":unconfigurable;";const zg=[sr+"directional_light",Lt+"directionalLightDirection[DIRECTIONAL_LIGHT_COUNT]"+je,Lt+"directionalLightColor[DIRECTIONAL_LIGHT_COUNT]"+je,or,sr+"ambient_light",Lt+"ambientLightColor[AMBIENT_LIGHT_COUNT]"+je,or,sr+"ambient_sh_light",Lt+"ambientSHLightColor[AMBIENT_SH_LIGHT_COUNT]"+je,Lt+"ambientSHLightCoefficients[AMBIENT_SH_LIGHT_COUNT * 9]"+je,Kg,or,sr+"ambient_cubemap_light",Lt+"ambientCubemapLightColor[AMBIENT_CUBEMAP_LIGHT_COUNT]"+je,"uniform samplerCube ambientCubemapLightCubemap[AMBIENT_CUBEMAP_LIGHT_COUNT]"+je,"uniform sampler2D ambientCubemapLightBRDFLookup[AMBIENT_CUBEMAP_LIGHT_COUNT]"+je,or,sr+"point_light",Lt+"pointLightPosition[POINT_LIGHT_COUNT]"+je,Zr+"pointLightRange[POINT_LIGHT_COUNT]"+je,Lt+"pointLightColor[POINT_LIGHT_COUNT]"+je,or,sr+"spot_light",Lt+"spotLightPosition[SPOT_LIGHT_COUNT]"+je,Lt+"spotLightDirection[SPOT_LIGHT_COUNT]"+je,Zr+"spotLightRange[SPOT_LIGHT_COUNT]"+je,Zr+"spotLightUmbraAngleCosine[SPOT_LIGHT_COUNT]"+je,Zr+"spotLightPenumbraAngleCosine[SPOT_LIGHT_COUNT]"+je,Zr+"spotLightFalloffFactor[SPOT_LIGHT_COUNT]"+je,Lt+"spotLightColor[SPOT_LIGHT_COUNT]"+je,or].join(`
`);K.import(zg);var Rt=zt.extend(function(){return{color:[1,1,1],intensity:1,castShadow:!0,shadowResolution:512,group:0}},{type:"",clone:function(){var e=zt.prototype.clone.call(this);return e.color=Array.prototype.slice.call(this.color),e.intensity=this.intensity,e.castShadow=this.castShadow,e.shadowResolution=this.shadowResolution,e}}),pn=function(e,t){this.normal=e||new L(0,1,0),this.distance=t||0};pn.prototype={constructor:pn,distanceToPoint:function(e){return C.dot(e.array,this.normal.array)-this.distance},projectPoint:function(e,t){t||(t=new L);var A=this.distanceToPoint(e);return C.scaleAndAdd(t.array,e.array,this.normal.array,-A),t._dirty=!0,t},normalize:function(){var e=1/C.len(this.normal.array);C.scale(this.normal.array,e),this.distance*=e},intersectFrustum:function(e){for(var t=e.vertices,A=this.normal.array,r=C.dot(t[0].array,A)>this.distance,n=1;n<8;n++)if(C.dot(t[n].array,A)>this.distance!=r)return!0},intersectLine:function(){var e=C.create();return function(t,A,r){var n=this.distanceToPoint(t),i=this.distanceToPoint(A);if(n>0&&i>0||n<0&&i<0)return null;var a=this.normal.array,s=this.distance,o=t.array;C.sub(e,A.array,t.array),C.normalize(e,e);var l=C.dot(a,e);if(l===0)return null;r||(r=new L);var u=(C.dot(a,o)-s)/l;return C.scaleAndAdd(r.array,o,e,-u),r._dirty=!0,r}}(),applyTransform:function(){var e=R.create(),t=M.create(),A=M.create();return A[3]=1,function(r){r=r.array,C.scale(A,this.normal.array,this.distance),M.transformMat4(A,A,r),this.distance=C.dot(A,this.normal.array),R.invert(e,r),R.transpose(e,e),t[3]=0,C.copy(t,this.normal.array),M.transformMat4(t,t,e),C.copy(this.normal.array,t)}}(),copy:function(e){C.copy(this.normal.array,e.normal.array),this.normal._dirty=!0,this.distance=e.distance},clone:function(){var e=new pn;return e.copy(this),e}};var Se=C.set,Tl=C.copy,Fl=C.transformMat4,Wa=Math.min,Xa=Math.max,ga=function(){this.planes=[];for(var e=0;e<6;e++)this.planes.push(new pn);this.boundingBox=new $e,this.vertices=[];for(var e=0;e<8;e++)this.vertices[e]=C.fromValues(0,0,0)};ga.prototype={setFromProjection:function(e){var t=this.planes,A=e.array,r=A[0],n=A[1],i=A[2],a=A[3],s=A[4],o=A[5],l=A[6],u=A[7],c=A[8],f=A[9],h=A[10],d=A[11],g=A[12],v=A[13],p=A[14],m=A[15];Se(t[0].normal.array,a-r,u-s,d-c),t[0].distance=-(m-g),t[0].normalize(),Se(t[1].normal.array,a+r,u+s,d+c),t[1].distance=-(m+g),t[1].normalize(),Se(t[2].normal.array,a+n,u+o,d+f),t[2].distance=-(m+v),t[2].normalize(),Se(t[3].normal.array,a-n,u-o,d-f),t[3].distance=-(m-v),t[3].normalize(),Se(t[4].normal.array,a-i,u-l,d-h),t[4].distance=-(m-p),t[4].normalize(),Se(t[5].normal.array,a+i,u+l,d+h),t[5].distance=-(m+p),t[5].normalize();var B=this.boundingBox,_=this.vertices;if(m===0){var x=o/r,y=-p/(h-1),T=-p/(h+1),E=-T/o,F=-y/o;B.min.set(-E*x,-E,T),B.max.set(E*x,E,y),Se(_[0],-E*x,-E,T),Se(_[1],-E*x,E,T),Se(_[2],E*x,-E,T),Se(_[3],E*x,E,T),Se(_[4],-F*x,-F,y),Se(_[5],-F*x,F,y),Se(_[6],F*x,-F,y),Se(_[7],F*x,F,y)}else{var S=(-1-g)/r,U=(1-g)/r,I=(1-v)/o,Q=(-1-v)/o,b=(-1-p)/h,N=(1-p)/h;B.min.set(Math.min(S,U),Math.min(Q,I),Math.min(N,b)),B.max.set(Math.max(U,S),Math.max(I,Q),Math.max(b,N));var H=B.min.array,V=B.max.array;Se(_[0],H[0],H[1],H[2]),Se(_[1],H[0],V[1],H[2]),Se(_[2],V[0],H[1],H[2]),Se(_[3],V[0],V[1],H[2]),Se(_[4],H[0],H[1],V[2]),Se(_[5],H[0],V[1],V[2]),Se(_[6],V[0],H[1],V[2]),Se(_[7],V[0],V[1],V[2])}},getTransformedBoundingBox:function(){var e=C.create();return function(t,A){var r=this.vertices,n=A.array,i=t.min,a=t.max,s=i.array,o=a.array,l=r[0];Fl(e,l,n),Tl(s,e),Tl(o,e);for(var u=1;u<8;u++)l=r[u],Fl(e,l,n),s[0]=Wa(e[0],s[0]),s[1]=Wa(e[1],s[1]),s[2]=Wa(e[2],s[2]),o[0]=Xa(e[0],o[0]),o[1]=Xa(e[1],o[1]),o[2]=Xa(e[2],o[2]);return i._dirty=!0,a._dirty=!0,t}}()};var br=zt.extend(function(){return{projectionMatrix:new z,invProjectionMatrix:new z,viewMatrix:new z,frustum:new ga}},function(){this.update(!0)},{update:function(e){zt.prototype.update.call(this,e),z.invert(this.viewMatrix,this.worldTransform),this.updateProjectionMatrix(),z.invert(this.invProjectionMatrix,this.projectionMatrix),this.frustum.setFromProjection(this.projectionMatrix)},setViewMatrix:function(e){z.copy(this.viewMatrix,e),z.invert(this.worldTransform,e),this.decomposeWorldTransform()},decomposeProjectionMatrix:function(){},setProjectionMatrix:function(e){z.copy(this.projectionMatrix,e),z.invert(this.invProjectionMatrix,e),this.decomposeProjectionMatrix()},updateProjectionMatrix:function(){},castRay:function(){var e=M.create();return function(t,A){var r=A!==void 0?A:new ZA,n=t.array[0],i=t.array[1];return M.set(e,n,i,-1,1),M.transformMat4(e,e,this.invProjectionMatrix.array),M.transformMat4(e,e,this.worldTransform.array),C.scale(r.origin.array,e,1/e[3]),M.set(e,n,i,1,1),M.transformMat4(e,e,this.invProjectionMatrix.array),M.transformMat4(e,e,this.worldTransform.array),C.scale(e,e,1/e[3]),C.sub(r.direction.array,e,r.origin.array),C.normalize(r.direction.array,r.direction.array),r.direction._dirty=!0,r.origin._dirty=!0,r}}()}),kg=R.create(),Ul=R.create(),Ya={};function Wg(e){var t=[],A=Object.keys(e);A.sort();for(var r=0;r<A.length;r++){var n=A[r];t.push(n+" "+e[n])}var i=t.join(`
`);if(Ya[i])return Ya[i];var a=be.genGUID();return Ya[i]=a,a}function va(){this.opaque=[],this.transparent=[],this._opaqueCount=0,this._transparentCount=0}va.prototype.startCount=function(){this._opaqueCount=0,this._transparentCount=0};va.prototype.add=function(e,t){t?this.transparent[this._transparentCount++]=e:this.opaque[this._opaqueCount++]=e};va.prototype.endCount=function(){this.transparent.length=this._transparentCount,this.opaque.length=this._opaqueCount};var bA=zt.extend(function(){return{material:null,lights:[],viewBoundingBoxLastFrame:new $e,shadowUniforms:{},_cameraList:[],_lightUniforms:{},_previousLightNumber:{},_lightNumber:{},_lightProgramKeys:{},_nodeRepository:{},_renderLists:new Ar(20)}},function(){this._scene=this},{addToScene:function(e){e instanceof br?(this._cameraList.length>0&&console.warn("Found multiple camera in one scene. Use the fist one."),this._cameraList.push(e)):e instanceof Rt&&this.lights.push(e),e.name&&(this._nodeRepository[e.name]=e)},removeFromScene:function(e){var t;e instanceof br?(t=this._cameraList.indexOf(e),t>=0&&this._cameraList.splice(t,1)):e instanceof Rt&&(t=this.lights.indexOf(e),t>=0&&this.lights.splice(t,1)),e.name&&delete this._nodeRepository[e.name]},getNode:function(e){return this._nodeRepository[e]},setMainCamera:function(e){var t=this._cameraList.indexOf(e);t>=0&&this._cameraList.splice(t,1),this._cameraList.unshift(e)},getMainCamera:function(){return this._cameraList[0]},getLights:function(){return this.lights},updateLights:function(){var e=this.lights;this._previousLightNumber=this._lightNumber;for(var t={},A=0;A<e.length;A++){var r=e[A];if(!r.invisible){var n=r.group;t[n]||(t[n]={}),t[n][r.type]=t[n][r.type]||0,t[n][r.type]++}}this._lightNumber=t;for(var i in t)this._lightProgramKeys[i]=Wg(t[i]);this._updateLightUniforms()},cloneNode:function(e){var t=e.clone(),A={};function r(n,i){A[n.__uid__]=i;for(var a=0;a<n._children.length;a++){var s=n._children[a],o=i._children[a];r(s,o)}}return r(e,t),t.traverse(function(n){n.skeleton&&(n.skeleton=n.skeleton.clone(A)),n.material&&(n.material=n.material.clone())}),t},updateRenderList:function(e,t){var A=e.__uid__,r=this._renderLists.get(A);r||(r=new va,this._renderLists.put(A,r)),r.startCount(),t&&(this.viewBoundingBoxLastFrame.min.set(1/0,1/0,1/0),this.viewBoundingBoxLastFrame.max.set(-1/0,-1/0,-1/0));var n=this.material&&this.material.transparent||!1;return this._doUpdateRenderList(this,e,n,r,t),r.endCount(),r},getRenderList:function(e){return this._renderLists.get(e.__uid__)},_doUpdateRenderList:function(e,t,A,r,n){if(!e.invisible)for(var i=0;i<e._children.length;i++){var a=e._children[i];if(a.isRenderable()){var s=a.isSkinnedMesh()?kg:a.worldTransform.array,o=a.geometry;R.multiplyAffine(Ul,t.viewMatrix.array,s),(n&&!o.boundingBox||!this.isFrustumCulled(a,t,Ul))&&r.add(a,a.material.transparent||A)}a._children.length>0&&this._doUpdateRenderList(a,t,A,r,n)}},isFrustumCulled:function(){var e=new $e,t=new z;return function(A,r,n){var i=A.boundingBox;if(i||(A.skeleton&&A.skeleton.boundingBox?i=A.skeleton.boundingBox:i=A.geometry.boundingBox),!i)return!1;if(t.array=n,e.transformFrom(i,t),A.castShadow&&this.viewBoundingBoxLastFrame.union(e),A.frustumCulling){if(!e.intersectBoundingBox(r.frustum.boundingBox))return!0;t.array=r.projectionMatrix.array,e.max.array[2]>0&&e.min.array[2]<0&&(e.max.array[2]=-1e-20),e.applyProjection(t);var a=e.min.array,s=e.max.array;if(s[0]<-1||a[0]>1||s[1]<-1||a[1]>1||s[2]<-1||a[2]>1)return!0}return!1}}(),_updateLightUniforms:function(){var e=this.lights;e.sort(Xg);var t=this._lightUniforms;for(var A in t)for(var r in t[A])t[A][r].value.length=0;for(var n=0;n<e.length;n++){var i=e[n];if(!i.invisible){var A=i.group;for(var r in i.uniformTemplates){var a=i.uniformTemplates[r],s=a.value(i);if(s!=null){t[A]||(t[A]={}),t[A][r]||(t[A][r]={type:"",value:[]});var o=t[A][r];switch(o.type=a.type+"v",a.type){case"1i":case"1f":case"t":o.value.push(s);break;case"2f":case"3f":case"4f":for(var l=0;l<s.length;l++)o.value.push(s[l]);break;default:console.error("Unkown light uniform type "+a.type)}}}}}},getLightGroups:function(){var e=[];for(var t in this._lightNumber)e.push(t);return e},getNumberChangedLightGroups:function(){var e=[];for(var t in this._lightNumber)this.isLightNumberChanged(t)&&e.push(t);return e},isLightNumberChanged:function(e){var t=this._previousLightNumber,A=this._lightNumber;for(var r in A[e])if(!t[e]||A[e][r]!==t[e][r])return!0;for(var r in t[e])if(!A[e]||A[e][r]!==t[e][r])return!0;return!1},getLightsNumbers:function(e){return this._lightNumber[e]},getProgramKey:function(e){return this._lightProgramKeys[e]},setLightUniforms:function(){function e(t,A,r){for(var n in t){var i=t[n];if(i.type==="tv"){if(!A.hasUniform(n))continue;for(var a=[],s=0;s<i.value.length;s++){var o=i.value[s],l=A.takeCurrentTextureSlot(r,o);a.push(l)}A.setUniform(r.gl,"1iv",n,a)}else A.setUniform(r.gl,i.type,n,i.value)}}return function(t,A,r){e(this._lightUniforms[A],t,r),e(this.shadowUniforms,t,r)}}(),dispose:function(){this.material=null,this._opaqueList=[],this._transparentList=[],this.lights=[],this._lightUniforms={},this._lightNumber={},this._nodeRepository={}}});function Xg(e,t){if(t.castShadow&&!e.castShadow)return!0}var $n=Pn.isPowerOfTwo,Yg=["px","nx","py","ny","pz","nz"],qA=P.extend(function(){return{image:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},pixels:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},mipmaps:[]}},{textureType:"textureCube",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),this.updateCommon(e);var A=this.format,r=this.type;t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_S,this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_T,this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,this.getAvailableMinFilter());var n=e.getGLExtension("EXT_texture_filter_anisotropic");if(n&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),r===36193){var i=e.getGLExtension("OES_texture_half_float");i||(r=D.FLOAT)}if(this.mipmaps.length)for(var a=this.width,s=this.height,o=0;o<this.mipmaps.length;o++){var l=this.mipmaps[o];this._updateTextureData(t,l,o,a,s,A,r),a/=2,s/=2}else this._updateTextureData(t,this,0,this.width,this.height,A,r),!this.NPOT&&this.useMipmap&&t.generateMipmap(t.TEXTURE_CUBE_MAP);t.bindTexture(t.TEXTURE_CUBE_MAP,null)},_updateTextureData:function(e,t,A,r,n,i,a){for(var s=0;s<6;s++){var o=Yg[s],l=t.image&&t.image[o];l?e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+s,A,i,i,a,l):e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+s,A,i,r,n,0,i,a,t.pixels&&t.pixels[o])}},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_CUBE_MAP))},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,null)},isPowerOfTwo:function(){return this.image.px?$n(this.image.px.width)&&$n(this.image.px.height):$n(this.width)&&$n(this.height)},isRenderable:function(){return this.image.px?lr(this.image.px)&&lr(this.image.nx)&&lr(this.image.py)&&lr(this.image.ny)&&lr(this.image.pz)&&lr(this.image.nz):!!(this.width&&this.height)},load:function(e,t){var A=0,r=this;return be.each(e,function(n,i){var a=ue.createImage();t&&(a.crossOrigin=t),a.onload=function(){A--,A===0&&(r.dirty(),r.trigger("success",r))},a.onerror=function(){A--},A++,a.src=n,r.image[i]=a}),this}});Object.defineProperty(qA.prototype,"width",{get:function(){return this.image&&this.image.px?this.image.px.width:this._width},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(qA.prototype,"height",{get:function(){return this.image&&this.image.px?this.image.px.height:this._height},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});function lr(e){return e.width>0&&e.height>0}var ze=br.extend({fov:50,aspect:1,near:.1,far:2e3},{updateProjectionMatrix:function(){var e=this.fov/180*Math.PI;this.projectionMatrix.perspective(e,this.aspect,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array,t=Math.atan(1/e[5])*2;this.fov=t/Math.PI*180,this.aspect=e[5]/e[0],this.near=e[14]/(e[10]-1),this.far=e[14]/(e[10]+1)},clone:function(){var e=br.prototype.clone.call(this);return e.fov=this.fov,e.aspect=this.aspect,e.near=this.near,e.far=this.far,e}}),ei="framebuffer",rA="renderbuffer",Sl=rA+"_width",bl=rA+"_height",Za=rA+"_attached",Ja="depthtexture_attached",RA=D.FRAMEBUFFER,Jr=D.RENDERBUFFER,an=D.DEPTH_ATTACHMENT,Gc=D.COLOR_ATTACHMENT0,Qe=tt.extend({depthBuffer:!0,viewport:null,_width:0,_height:0,_textures:null,_boundRenderer:null},function(){this._cache=new Ur,this._textures={}},{getTextureWidth:function(){return this._width},getTextureHeight:function(){return this._height},bind:function(e){if(e.__currentFrameBuffer){if(e.__currentFrameBuffer===this)return;console.warn("Renderer already bound with another framebuffer. Unbind it first")}e.__currentFrameBuffer=this;var t=e.gl;t.bindFramebuffer(RA,this._getFrameBufferGL(e)),this._boundRenderer=e;var A=this._cache;A.put("viewport",e.viewport);var r=!1,n,i;for(var a in this._textures){r=!0;var s=this._textures[a];s&&(n=s.texture.width,i=s.texture.height,this._doAttach(e,s.texture,a,s.target))}this._width=n,this._height=i,!r&&this.depthBuffer&&console.error("Must attach texture before bind, or renderbuffer may have incorrect width and height."),this.viewport?e.setViewport(this.viewport):e.setViewport(0,0,n,i,1);var o=A.get("attached_textures");if(o){for(var a in o)if(!this._textures[a]){var l=o[a];this._doDetach(t,a,l)}}if(!A.get(Ja)&&this.depthBuffer){A.miss(rA)&&A.put(rA,t.createRenderbuffer());var u=A.get(rA);(n!==A.get(Sl)||i!==A.get(bl))&&(t.bindRenderbuffer(Jr,u),t.renderbufferStorage(Jr,t.DEPTH_COMPONENT16,n,i),A.put(Sl,n),A.put(bl,i),t.bindRenderbuffer(Jr,null)),A.get(Za)||(t.framebufferRenderbuffer(RA,an,Jr,u),A.put(Za,!0))}},unbind:function(e){e.__currentFrameBuffer=null;var t=e.gl;t.bindFramebuffer(RA,null),this._boundRenderer=null,this._cache.use(e.__uid__);var A=this._cache.get("viewport");A&&e.setViewport(A),this.updateMipmap(e)},updateMipmap:function(e){var t=e.gl;for(var A in this._textures){var r=this._textures[A];if(r){var n=r.texture;if(!n.NPOT&&n.useMipmap&&n.minFilter===P.LINEAR_MIPMAP_LINEAR){var i=n.textureType==="textureCube"?D.TEXTURE_CUBE_MAP:D.TEXTURE_2D;t.bindTexture(i,n.getWebGLTexture(e)),t.generateMipmap(i),t.bindTexture(i,null)}}}},checkStatus:function(e){return e.checkFramebufferStatus(RA)},_getFrameBufferGL:function(e){var t=this._cache;return t.use(e.__uid__),t.miss(ei)&&t.put(ei,e.gl.createFramebuffer()),t.get(ei)},attach:function(e,t,A){if(!e.width)throw new Error("The texture attached to color buffer is not a valid.");t=t||Gc,A=A||D.TEXTURE_2D;var r=this._boundRenderer,n=r&&r.gl,i;if(n){var a=this._cache;a.use(r.__uid__),i=a.get("attached_textures")}var s=this._textures[t];if(!(s&&s.target===A&&s.texture===e&&i&&i[t]!=null)){var o=!0;r&&(o=this._doAttach(r,e,t,A),this.viewport||r.setViewport(0,0,e.width,e.height,1)),o&&(this._textures[t]=this._textures[t]||{},this._textures[t].texture=e,this._textures[t].target=A)}},_doAttach:function(e,t,A,r){var n=e.gl,i=t.getWebGLTexture(e),a=this._cache.get("attached_textures");if(a&&a[A]){var s=a[A];if(s.texture===t&&s.target===r)return}A=+A;var o=!0;if(A===an||A===D.DEPTH_STENCIL_ATTACHMENT){var l=e.getGLExtension("WEBGL_depth_texture");if(l||(console.error("Depth texture is not supported by the browser"),o=!1),t.format!==D.DEPTH_COMPONENT&&t.format!==D.DEPTH_STENCIL&&(console.error("The texture attached to depth buffer is not a valid."),o=!1),o){var u=this._cache.get(rA);u&&(n.framebufferRenderbuffer(RA,an,Jr,null),n.deleteRenderbuffer(u),this._cache.put(rA,!1)),this._cache.put(Za,!1),this._cache.put(Ja,!0)}}return n.framebufferTexture2D(RA,A,r,i,0),a||(a={},this._cache.put("attached_textures",a)),a[A]=a[A]||{},a[A].texture=t,a[A].target=r,o},_doDetach:function(e,t,A){e.framebufferTexture2D(RA,t,A,null,0);var r=this._cache.get("attached_textures");r&&r[t]&&(r[t]=null),(t===an||t===D.DEPTH_STENCIL_ATTACHMENT)&&this._cache.put(Ja,!1)},detach:function(e,t){if(this._textures[e]=null,this._boundRenderer){var A=this._cache;A.use(this._boundRenderer.__uid__),this._doDetach(this._boundRenderer.gl,e,t)}},dispose:function(e){var t=e.gl,A=this._cache;A.use(e.__uid__);var r=A.get(rA);r&&t.deleteRenderbuffer(r);var n=A.get(ei);n&&t.deleteFramebuffer(n),A.deleteContext(e.__uid__),this._textures={}}});Qe.DEPTH_ATTACHMENT=an;Qe.COLOR_ATTACHMENT0=Gc;Qe.STENCIL_ATTACHMENT=D.STENCIL_ATTACHMENT;Qe.DEPTH_STENCIL_ATTACHMENT=D.DEPTH_STENCIL_ATTACHMENT;var Zg=["px","nx","py","ny","pz","nz"],Eo=tt.extend(function(){var e={position:new L,far:1e3,near:.1,texture:null,shadowMapPass:null},t=e._cameras={px:new ze({fov:90}),nx:new ze({fov:90}),py:new ze({fov:90}),ny:new ze({fov:90}),pz:new ze({fov:90}),nz:new ze({fov:90})};return t.px.lookAt(L.POSITIVE_X,L.NEGATIVE_Y),t.nx.lookAt(L.NEGATIVE_X,L.NEGATIVE_Y),t.py.lookAt(L.POSITIVE_Y,L.POSITIVE_Z),t.ny.lookAt(L.NEGATIVE_Y,L.NEGATIVE_Z),t.pz.lookAt(L.POSITIVE_Z,L.NEGATIVE_Y),t.nz.lookAt(L.NEGATIVE_Z,L.NEGATIVE_Y),e._frameBuffer=new Qe,e},{getCamera:function(e){return this._cameras[e]},render:function(e,t,A){var r=e.gl;A||t.update();for(var n=this.texture.width,i=2*Math.atan(n/(n-.5))/Math.PI*180,a=0;a<6;a++){var s=Zg[a],o=this._cameras[s];if(L.copy(o.position,this.position),o.far=this.far,o.near=this.near,o.fov=i,this.shadowMapPass){o.update();var l=t.getBoundingBox();l.applyTransform(o.viewMatrix),t.viewBoundingBoxLastFrame.copy(l),this.shadowMapPass.render(e,t,o,!0)}this._frameBuffer.attach(this.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+a),this._frameBuffer.bind(e),e.render(t,o,!0),this._frameBuffer.unbind(e)}},dispose:function(e){this._frameBuffer.dispose(e)}}),pa=re.extend({dynamic:!1,widthSegments:1,heightSegments:1},function(){this.build()},{build:function(){for(var e=this.heightSegments,t=this.widthSegments,A=this.attributes,r=[],n=[],i=[],a=[],s=0;s<=e;s++)for(var o=s/e,l=0;l<=t;l++){var u=l/t;if(r.push([2*u-1,2*o-1,0]),n&&n.push([u,o]),i&&i.push([0,0,1]),l<t&&s<e){var c=l+s*(t+1);a.push([c,c+1,c+t+1]),a.push([c+t+1,c+1,c+t+2])}}A.position.fromArray(r),A.texcoord0.fromArray(n),A.normal.fromArray(i),this.initIndicesFromArray(a),this.boundingBox=new $e,this.boundingBox.min.set(-1,-1,0),this.boundingBox.max.set(1,1,0)}}),Ee=new z,Vc=re.extend({dynamic:!1,widthSegments:1,heightSegments:1,depthSegments:1,inside:!1},function(){this.build()},{build:function(){var e={px:ur("px",this.depthSegments,this.heightSegments),nx:ur("nx",this.depthSegments,this.heightSegments),py:ur("py",this.widthSegments,this.depthSegments),ny:ur("ny",this.widthSegments,this.depthSegments),pz:ur("pz",this.widthSegments,this.heightSegments),nz:ur("nz",this.widthSegments,this.heightSegments)},t=["position","texcoord0","normal"],A=0,r=0;for(var n in e)A+=e[n].vertexCount,r+=e[n].indices.length;for(var i=0;i<t.length;i++)this.attributes[t[i]].init(A);this.indices=new ue.Uint16Array(r);var a=0,s=0;for(var n in e){for(var o=e[n],i=0;i<t.length;i++)for(var l=t[i],u=o.attributes[l].value,c=o.attributes[l].size,f=l==="normal",h=0;h<u.length;h++){var d=u[h];this.inside&&f&&(d=-d),this.attributes[l].value[h+c*s]=d}for(var g=o.indices.length,h=0;h<o.indices.length;h++)this.indices[h+a]=s+o.indices[this.inside?g-h-1:h];a+=o.indices.length,s+=o.vertexCount}this.boundingBox=new $e,this.boundingBox.max.set(1,1,1),this.boundingBox.min.set(-1,-1,-1)}});function ur(e,t,A){Ee.identity();var r=new pa({widthSegments:t,heightSegments:A});switch(e){case"px":z.translate(Ee,Ee,L.POSITIVE_X),z.rotateY(Ee,Ee,Math.PI/2);break;case"nx":z.translate(Ee,Ee,L.NEGATIVE_X),z.rotateY(Ee,Ee,-Math.PI/2);break;case"py":z.translate(Ee,Ee,L.POSITIVE_Y),z.rotateX(Ee,Ee,-Math.PI/2);break;case"ny":z.translate(Ee,Ee,L.NEGATIVE_Y),z.rotateX(Ee,Ee,Math.PI/2);break;case"pz":z.translate(Ee,Ee,L.POSITIVE_Z);break;case"nz":z.translate(Ee,Ee,L.NEGATIVE_Z),z.rotateY(Ee,Ee,Math.PI);break}return r.applyTransform(Ee),r}const Jg=`@export clay.skybox.vertex
#define SHADER_NAME skybox
uniform mat4 world : WORLD;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
varying vec3 v_WorldPosition;
void main()
{
 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end
@export clay.skybox.fragment
#define PI 3.1415926
uniform mat4 viewInverse : VIEWINVERSE;
#ifdef EQUIRECTANGULAR
uniform sampler2D environmentMap;
#else
uniform samplerCube environmentMap;
#endif
uniform float lod: 0.0;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
@import clay.util.srgb
@import clay.util.ACES
void main()
{
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
#ifdef EQUIRECTANGULAR
 float phi = acos(V.y);
 float theta = atan(-V.x, V.z) + PI * 0.5;
 vec2 uv = vec2(theta / 2.0 / PI, phi / PI);
 vec4 texel = decodeHDR(texture2D(environmentMap, fract(uv)));
#else
 #if defined(LOD) || defined(SUPPORT_TEXTURE_LOD)
 vec4 texel = decodeHDR(textureCubeLodEXT(environmentMap, V, lod));
 #else
 vec4 texel = decodeHDR(textureCube(environmentMap, V));
 #endif
#endif
#ifdef SRGB_DECODE
 texel = sRGBToLinear(texel);
#endif
#ifdef TONEMAPPING
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
#ifdef SRGB_ENCODE
 texel = linearTosRGB(texel);
#endif
 gl_FragColor = encodeHDR(vec4(texel.rgb, 1.0));
}
@end`;K.import(Jg);var Tn=We.extend(function(){var e=new K({vertex:K.source("clay.skybox.vertex"),fragment:K.source("clay.skybox.fragment")}),t=new St({shader:e,depthMask:!1});return{scene:null,geometry:new Vc,material:t,environmentMap:null,culling:!1,_dummyCamera:new ze}},function(){var e=this.scene;e&&this.attachScene(e),this.environmentMap&&this.setEnvironmentMap(this.environmentMap)},{attachScene:function(e){this.scene&&this.detachScene(),e.skybox=this,this.scene=e,e.on("beforerender",this._beforeRenderScene,this)},detachScene:function(){this.scene&&(this.scene.off("beforerender",this._beforeRenderScene),this.scene.skybox=null),this.scene=null},dispose:function(e){this.detachScene(),this.geometry.dispose(e)},setEnvironmentMap:function(e){e.textureType==="texture2D"?(this.material.define("EQUIRECTANGULAR"),e.minFilter=P.LINEAR):this.material.undefine("EQUIRECTANGULAR"),this.material.set("environmentMap",e)},getEnvironmentMap:function(){return this.material.get("environmentMap")},_beforeRenderScene:function(e,t,A){this.renderSkybox(e,A)},renderSkybox:function(e,t){var A=this._dummyCamera;A.aspect=e.getViewportAspect(),A.fov=t.fov||50,A.updateProjectionMatrix(),z.invert(A.invProjectionMatrix,A.projectionMatrix),A.worldTransform.copy(t.worldTransform),A.viewMatrix.copy(t.viewMatrix),this.position.copy(t.getWorldPosition()),this.update(),e.gl.disable(e.gl.BLEND),this.material.get("lod")>0?this.material.define("fragment","LOD"):this.material.undefine("fragment","LOD"),e.renderPass([this],A)}}),jg=542327876,qg=131072,$g=512,ev=4;function To(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}var tv=31,Av=To("DXT1"),rv=To("DXT3"),nv=To("DXT5"),iv=0,av=1,sv=2,ov=3,lv=4,uv=7,cv=20,fv=21,hv=28,dv={parse:function(e,t){var A=new Int32Array(e,0,tv);if(A[iv]!==jg||!A(cv)&ev)return null;var r=A(fv),n=A[lv],i=A[ov],a=A[hv]&$g,s=A[sv]&qg,o,l;switch(r){case Av:o=8,l=P.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case rv:o=16,l=P.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case nv:o=16,l=P.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return null}var u=A[av]+4,c=a?6:1,f=1;s&&(f=Math.max(1,A[uv]));for(var h=[],d=0;d<c;d++){var g=n,v=i;h[d]=new $({width:g,height:v,format:l});for(var p=[],m=0;m<f;m++){var B=Math.max(4,g)/4*Math.max(4,v)/4*o,_=new Uint8Array(e,u,B);u+=B,g*=.5,v*=.5,p[m]=_}h[d].pixels=p[0],s&&(h[d].mipmaps=p)}if(t)t.width=h[0].width,t.height=h[0].height,t.format=h[0].format,t.pixels=h[0].pixels,t.mipmaps=h[0].mipmaps;else return h[0]}},Di=String.fromCharCode,gv=8,vv=32767;function pv(e,t,A,r){if(e[3]>0){var n=Math.pow(2,e[3]-128-8+r);t[A+0]=e[0]*n,t[A+1]=e[1]*n,t[A+2]=e[2]*n}else t[A+0]=0,t[A+1]=0,t[A+2]=0;return t[A+3]=1,t}function mv(e,t,A){for(var r="",n=t;n<A;n++)r+=Di(e[n]);return r}function _v(e,t){t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3]}function Ql(e,t,A,r){for(var n=0,i=0,a=r;a>0;)if(e[i][0]=t[A++],e[i][1]=t[A++],e[i][2]=t[A++],e[i][3]=t[A++],e[i][0]===1&&e[i][1]===1&&e[i][2]===1){for(var s=e[i][3]<<n>>>0;s>0;s--)_v(e[i-1],e[i]),i++,a--;n+=8}else i++,a--,n=0;return A}function Bv(e,t,A,r){if(r<gv|r>vv)return Ql(e,t,A,r);var n=t[A++];if(n!=2)return Ql(e,t,A-1,r);if(e[0][1]=t[A++],e[0][2]=t[A++],n=t[A++],(e[0][2]<<8>>>0|n)>>>0!==r)return null;for(var n=0;n<4;n++)for(var i=0;i<r;){var a=t[A++];if(a>128){a=(a&127)>>>0;for(var s=t[A++];a--;)e[i++][n]=s}else for(;a--;)e[i++][n]=t[A++]}return A}var wv={parseRGBE:function(e,t,A){A==null&&(A=0);var r=new Uint8Array(e),n=r.length;if(mv(r,0,2)==="#?"){for(var i=2;i<n&&!(Di(r[i])===`
`&&Di(r[i+1])===`
`);i++);if(!(i>=n)){i+=2;for(var a="";i<n;i++){var s=Di(r[i]);if(s===`
`)break;a+=s}var o=a.split(" "),l=parseInt(o[1]),u=parseInt(o[3]);if(!(!u||!l)){for(var c=i+1,f=[],h=0;h<u;h++){f[h]=[];for(var d=0;d<4;d++)f[h][d]=0}for(var g=new Float32Array(u*l*4),v=0,p=0;p<l;p++){var c=Bv(f,r,c,u);if(!c)return null;for(var h=0;h<u;h++)pv(f[h],g,v,A),v+=4}return t||(t=new $),t.width=u,t.height=l,t.pixels=g,t.type=P.FLOAT,t}}}},parseRGBEFromPNG:function(e){}},kt={loadTexture:function(e,t,A,r){var n;if(typeof t=="function"?(A=t,r=A,t={}):t=t||{},typeof e=="string"){if(e.match(/.hdr$/)||t.fileType==="hdr")return n=new $({width:0,height:0,sRGB:!1}),kt._fetchTexture(e,function(i){wv.parseRGBE(i,n,t.exposure),n.dirty(),A&&A(n)},r),n;e.match(/.dds$/)||t.fileType==="dds"?(n=new $({width:0,height:0}),kt._fetchTexture(e,function(i){dv.parse(i,n),n.dirty(),A&&A(n)},r)):(n=new $,n.load(e),n.success(A),n.error(r))}else typeof e=="object"&&typeof e.px<"u"&&(n=new qA,n.load(e),n.success(A),n.error(r));return n},loadPanorama:function(e,t,A,r,n,i){var a=this;typeof r=="function"?(n=r,i=n,r={}):r=r||{},kt.loadTexture(t,r,function(s){s.flipY=r.flipY||!1,a.panoramaToCubeMap(e,s,A,r),s.dispose(e),n&&n(A)},i)},panoramaToCubeMap:function(e,t,A,r){var n=new Eo,i=new Tn({scene:new bA});return i.setEnvironmentMap(t),r=r||{},r.encodeRGBM&&i.material.define("fragment","RGBM_ENCODE"),A.sRGB=t.sRGB,n.texture=A,n.render(e,i.scene),n.texture=null,n.dispose(e),A},heightToNormal:function(e,t){var A=document.createElement("canvas"),r=A.width=e.width,n=A.height=e.height,i=A.getContext("2d");i.drawImage(e,0,0,r,n),t=t||!1;for(var a=i.getImageData(0,0,r,n),s=i.createImageData(r,n),o=0;o<a.data.length;o+=4){if(t){var l=a.data[o],u=a.data[o+1],c=a.data[o+2],f=Math.abs(l-u)+Math.abs(u-c);if(f>20)return console.warn("Given image is not a height map"),e}var h,d,g,v;o%(r*4)===0?(h=a.data[o],g=a.data[o+4]):o%(r*4)===(r-1)*4?(h=a.data[o-4],g=a.data[o]):(h=a.data[o-4],g=a.data[o+4]),o<r*4?(d=a.data[o],v=a.data[o+r*4]):o>r*(n-1)*4?(d=a.data[o-r*4],v=a.data[o]):(d=a.data[o-r*4],v=a.data[o+r*4]),s.data[o]=h-g+127,s.data[o+1]=d-v+127,s.data[o+2]=255,s.data[o+3]=255}return i.putImageData(s,0,0),A},isHeightImage:function(e,t,A){if(!e||!e.width||!e.height)return!1;var r=document.createElement("canvas"),n=r.getContext("2d"),i=t||32;A=A||20,r.width=r.height=i,n.drawImage(e,0,0,i,i);for(var a=n.getImageData(0,0,i,i),s=0;s<a.data.length;s+=4){var o=a.data[s],l=a.data[s+1],u=a.data[s+2],c=Math.abs(o-l)+Math.abs(l-u);if(c>A)return!1}return!0},_fetchTexture:function(e,t,A){ue.request.get({url:e,responseType:"arraybuffer",onload:t,onerror:A})},createChessboard:function(e,t,A,r){e=e||512,t=t||64,A=A||"black",r=r||"white";var n=Math.ceil(e/t),i=document.createElement("canvas");i.width=e,i.height=e;var a=i.getContext("2d");a.fillStyle=r,a.fillRect(0,0,e,e),a.fillStyle=A;for(var s=0;s<n;s++)for(var o=0;o<n;o++){var l=o%2?s%2:s%2-1;l&&a.fillRect(s*t,o*t,t,t)}var u=new $({image:i,anisotropic:8});return u},createBlank:function(e){var t=document.createElement("canvas");t.width=1,t.height=1;var A=t.getContext("2d");A.fillStyle=e,A.fillRect(0,0,1,1);var r=new $({image:t});return r}},Rs=["mousedown","mouseup","mousemove","mouseover","mouseout","click","dblclick","contextmenu"];function Ns(e){return"_on"+e}var Hs=function(e){var t=this;this._texture=new $({anisotropic:32,flipY:!1,surface:this,dispose:function(A){t.dispose(),$.prototype.dispose.call(this,A)}}),Rs.forEach(function(A){this[Ns(A)]=function(r){r.triangle&&this._meshes.forEach(function(n){this.dispatchEvent(A,n,r.triangle,r.point)},this)}},this),this._meshes=[],e&&this.setECharts(e),this.onupdate=null};Hs.prototype={constructor:Hs,getTexture:function(){return this._texture},setECharts:function(e){this._chart=e;var t=e.getDom();if(!(t instanceof HTMLCanvasElement))console.error("ECharts must init on canvas if it is used as texture."),t=document.createElement("canvas");else{var A=this,r=e.getZr(),n=r.__oldRefreshImmediately||r.refreshImmediately;r.refreshImmediately=function(){n.call(this),A._texture.dirty(),A.onupdate&&A.onupdate()},r.__oldRefreshImmediately=n}this._texture.image=t,this._texture.dirty(),this.onupdate&&this.onupdate()},dispatchEvent:function(){var e=new L,t=new L,A=new L,r=new J,n=new J,i=new J,a=new J,s=new L;return function(o,l,u,c){var f=l.geometry,h=f.attributes.position,d=f.attributes.texcoord0,g=L.dot,v=L.cross;h.get(u[0],e.array),h.get(u[1],t.array),h.get(u[2],A.array),d.get(u[0],r.array),d.get(u[1],n.array),d.get(u[2],i.array),v(s,t,A);var p=g(e,s),m=g(c,s)/p;v(s,A,e);var B=g(c,s)/p;v(s,e,t);var _=g(c,s)/p;J.scale(a,r,m),J.scaleAndAdd(a,a,n,B),J.scaleAndAdd(a,a,i,_);var x=a.x*this._chart.getWidth(),y=a.y*this._chart.getHeight();this._chart.getZr().handler.dispatch(o,{zrX:x,zrY:y})}}(),attachToMesh:function(e){this._meshes.indexOf(e)>=0||(Rs.forEach(function(t){e.on(t,this[Ns(t)],this)},this),this._meshes.push(e))},detachFromMesh:function(e){var t=this._meshes.indexOf(e);t>=0&&this._meshes.splice(t,1),Rs.forEach(function(A){e.off(A,this[Ns(A)])},this)},dispose:function(){this._meshes.forEach(function(e){this.detachFromMesh(e)},this)}};var Qr=br.extend({left:-1,right:1,near:-1,far:1,top:1,bottom:-1},{updateProjectionMatrix:function(){this.projectionMatrix.ortho(this.left,this.right,this.bottom,this.top,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array;this.left=(-1-e[12])/e[0],this.right=(1-e[12])/e[0],this.top=(1-e[13])/e[5],this.bottom=(-1-e[13])/e[5],this.near=-(-1-e[14])/e[10],this.far=-(1-e[14])/e[10]},clone:function(){var e=br.prototype.clone.call(this);return e.left=this.left,e.right=this.right,e.near=this.near,e.far=this.far,e.top=this.top,e.bottom=this.bottom,e}});const yv=`
@export clay.compositor.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
varying vec2 v_Texcoord;
void main()
{
 v_Texcoord = texcoord;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end`;K.import(yv);var xv=new pa,Ll=new We({geometry:xv,frustumCulling:!1}),Cv=new Qr,Me=tt.extend(function(){return{fragment:"",outputs:null,material:null,blendWithPrevious:!1,clearColor:!1,clearDepth:!0}},function(){var e=new K(K.source("clay.compositor.vertex"),this.fragment),t=new St({shader:e});t.enableTexturesAll(),this.material=t},{setUniform:function(e,t){this.material.setUniform(e,t)},getUniform:function(e){var t=this.material.uniforms[e];if(t)return t.value},attachOutput:function(e,t){this.outputs||(this.outputs={}),t=t||D.COLOR_ATTACHMENT0,this.outputs[t]=e},detachOutput:function(e){for(var t in this.outputs)this.outputs[t]===e&&(this.outputs[t]=null)},bind:function(e,t){if(this.outputs)for(var A in this.outputs){var r=this.outputs[A];r&&t.attach(r,A)}t&&t.bind(e)},unbind:function(e,t){t.unbind(e)},render:function(e,t){var A=e.gl;if(t){this.bind(e,t);var r=e.getGLExtension("EXT_draw_buffers");if(r&&this.outputs){var n=[];for(var i in this.outputs)i=+i,i>=A.COLOR_ATTACHMENT0&&i<=A.COLOR_ATTACHMENT0+8&&n.push(i);r.drawBuffersEXT(n)}}this.trigger("beforerender",this,e);var a=this.clearDepth?A.DEPTH_BUFFER_BIT:0;if(A.depthMask(!0),this.clearColor){a=a|A.COLOR_BUFFER_BIT,A.colorMask(!0,!0,!0,!0);var s=this.clearColor;Array.isArray(s)&&A.clearColor(s[0],s[1],s[2],s[3])}A.clear(a),this.blendWithPrevious?(A.enable(A.BLEND),this.material.transparent=!0):(A.disable(A.BLEND),this.material.transparent=!1),this.renderQuad(e),this.trigger("afterrender",this,e),t&&this.unbind(e,t)},renderQuad:function(e){Ll.material=this.material,e.renderPass([Ll],Cv)},dispose:function(e){}});const Ev=`#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform sampler2D normalDistribution;
uniform vec2 viewportSize : [512, 256];
const vec3 N = vec3(0.0, 0.0, 1.0);
const float fSampleNumber = float(SAMPLE_NUMBER);
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
float G_Smith(float roughness, float NoV, float NoL) {
 float k = roughness * roughness / 2.0;
 float G1V = NoV / (NoV * (1.0 - k) + k);
 float G1L = NoL / (NoL * (1.0 - k) + k);
 return G1L * G1V;
}
void main() {
 vec2 uv = gl_FragCoord.xy / viewportSize;
 float NoV = uv.x;
 float roughness = uv.y;
 vec3 V;
 V.x = sqrt(1.0 - NoV * NoV);
 V.y = 0.0;
 V.z = NoV;
 float A = 0.0;
 float B = 0.0;
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(L.z, 0.0, 1.0);
 float NoH = clamp(H.z, 0.0, 1.0);
 float VoH = clamp(dot(V, H), 0.0, 1.0);
 if (NoL > 0.0) {
 float G = G_Smith(roughness, NoV, NoL);
 float G_Vis = G * VoH / (NoH * NoV);
 float Fc = pow(1.0 - VoH, 5.0);
 A += (1.0 - Fc) * G_Vis;
 B += Fc * G_Vis;
 }
 }
 gl_FragColor = vec4(vec2(A, B) / fSampleNumber, 0.0, 1.0);
}
`,Tv=`#define SHADER_NAME prefilter
#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform mat4 viewInverse : VIEWINVERSE;
uniform samplerCube environmentMap;
uniform sampler2D normalDistribution;
uniform float roughness : 0.5;
varying vec2 v_Texcoord;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
void main() {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
 vec3 N = V;
 vec3 prefilteredColor = vec3(0.0);
 float totalWeight = 0.0;
 float fMaxSampleNumber = float(SAMPLE_NUMBER);
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fMaxSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(dot(N, L), 0.0, 1.0);
 if (NoL > 0.0) {
 prefilteredColor += decodeHDR(textureCube(environmentMap, L)).rgb * NoL;
 totalWeight += NoL;
 }
 }
 gl_FragColor = encodeHDR(vec4(prefilteredColor / totalWeight, 1.0));
}
`;var Wt={},ja=["px","nx","py","ny","pz","nz"];Wt.prefilterEnvironmentMap=function(e,t,A,r,n){(!n||!r)&&(r=Wt.generateNormalDistribution(),n=Wt.integrateBRDF(e,r)),A=A||{};var i=A.width||64,a=A.height||64,s=A.type||t.type,o=new qA({width:i,height:a,type:s,flipY:!1,mipmaps:[]});o.isPowerOfTwo()||console.warn("Width and height must be power of two to enable mipmap.");var l=Math.min(i,a),u=Math.log(l)/Math.log(2)+1,c=new St({shader:new K({vertex:K.source("clay.skybox.vertex"),fragment:Tv})});c.set("normalDistribution",r),A.encodeRGBM&&c.define("fragment","RGBM_ENCODE"),A.decodeRGBM&&c.define("fragment","RGBM_DECODE");var f=new bA,h;if(t.textureType==="texture2D"){var d=new qA({width:i,height:a,type:s===P.FLOAT?P.HALF_FLOAT:s});kt.panoramaToCubeMap(e,t,d,{encodeRGBM:A.decodeRGBM}),t=d}h=new Tn({scene:f,material:c}),h.material.set("environmentMap",t);var g=new Eo({texture:o});A.encodeRGBM&&(s=o.type=P.UNSIGNED_BYTE);for(var v=new $({width:i,height:a,type:s}),p=new Qe({depthBuffer:!1}),m=ue[s===P.UNSIGNED_BYTE?"Uint8Array":"Float32Array"],B=0;B<u;B++){o.mipmaps[B]={pixels:{}},h.material.set("roughness",B/(u-1));for(var _=v.width,x=2*Math.atan(_/(_-.5))/Math.PI*180,y=0;y<ja.length;y++){var T=new m(v.width*v.height*4);p.attach(v),p.bind(e);var E=g.getCamera(ja[y]);E.fov=x,e.render(f,E),e.gl.readPixels(0,0,v.width,v.height,P.RGBA,s,T),p.unbind(e),o.mipmaps[B].pixels[ja[y]]=T}v.width/=2,v.height/=2,v.dirty()}return p.dispose(e),v.dispose(e),h.dispose(e),r.dispose(e),{environmentMap:o,brdfLookup:n,normalDistribution:r,maxMipmapLevel:u}};Wt.integrateBRDF=function(e,t){t=t||Wt.generateNormalDistribution();var A=new Qe({depthBuffer:!1}),r=new Me({fragment:Ev}),n=new $({width:512,height:256,type:P.HALF_FLOAT,wrapS:P.CLAMP_TO_EDGE,wrapT:P.CLAMP_TO_EDGE,minFilter:P.NEAREST,magFilter:P.NEAREST,useMipmap:!1});return r.setUniform("normalDistribution",t),r.setUniform("viewportSize",[512,256]),r.attachOutput(n),r.render(e,A),A.dispose(e),n};Wt.generateNormalDistribution=function(A,r){for(var A=A||256,r=r||1024,n=new $({width:A,height:r,type:P.FLOAT,minFilter:P.NEAREST,magFilter:P.NEAREST,wrapS:P.CLAMP_TO_EDGE,wrapT:P.CLAMP_TO_EDGE,useMipmap:!1}),i=new Float32Array(r*A*4),a=[],s=0;s<A;s++){for(var o=s/A,l=o*o,u=0;u<r;u++){var c=(u<<16|u>>>16)>>>0;c=((c&1431655765)<<1|(c&2863311530)>>>1)>>>0,c=((c&858993459)<<2|(c&3435973836)>>>2)>>>0,c=((c&252645135)<<4|(c&4042322160)>>>4)>>>0,c=(((c&16711935)<<8|(c&4278255360)>>>8)>>>0)/4294967296;var f=Math.sqrt((1-c)/(1+(l*l-1)*c));a[u]=f}for(var u=0;u<r;u++){var h=(u*A+s)*4,f=a[u],d=Math.sqrt(1-f*f),g=u/r,v=2*Math.PI*g;i[h]=d*Math.cos(v),i[h+1]=f,i[h+2]=d*Math.sin(v),i[h+3]=1}}return n.pixels=i,n};var Fv=Rt.extend({cubemap:null,castShadow:!1,_normalDistribution:null,_brdfLookup:null},{type:"AMBIENT_CUBEMAP_LIGHT",prefilter:function(e,t){if(!e.getGLExtension("EXT_shader_texture_lod")){console.warn("Device not support textureCubeLodEXT");return}this._brdfLookup||(this._normalDistribution=Wt.generateNormalDistribution(),this._brdfLookup=Wt.integrateBRDF(e,this._normalDistribution));var A=this.cubemap;if(!A.__prefiltered){var r=Wt.prefilterEnvironmentMap(e,A,{encodeRGBM:!0,width:t,height:t},this._normalDistribution,this._brdfLookup);this.cubemap=r.environmentMap,this.cubemap.__prefiltered=!0,A.dispose(e)}},getBRDFLookup:function(){return this._brdfLookup},uniformTemplates:{ambientCubemapLightColor:{type:"3f",value:function(e){var t=e.color,A=e.intensity;return[t[0]*A,t[1]*A,t[2]*A]}},ambientCubemapLightCubemap:{type:"t",value:function(e){return e.cubemap}},ambientCubemapLightBRDFLookup:{type:"t",value:function(e){return e._brdfLookup}}}}),Uv=Rt.extend({castShadow:!1,coefficients:[]},function(){this._coefficientsTmpArr=new ue.Float32Array(9*3)},{type:"AMBIENT_SH_LIGHT",uniformTemplates:{ambientSHLightColor:{type:"3f",value:function(e){var t=e.color,A=e.intensity;return[t[0]*A,t[1]*A,t[2]*A]}},ambientSHLightCoefficients:{type:"3f",value:function(e){for(var t=e._coefficientsTmpArr,A=0;A<e.coefficients.length;A++)t[A]=e.coefficients[A];return t}}}}),Kc={},kA=["px","nx","py","ny","pz","nz"];function Sv(e,t){var A=e[0],r=e[1],n=e[2];return t===0?1:t===1?A:t===2?r:t===3?n:t===4?A*n:t===5?r*n:t===6?A*r:t===7?3*n*n-1:A*A-r*r}var bv={px:[2,1,0,-1,-1,1],nx:[2,1,0,1,-1,-1],py:[0,2,1,1,-1,-1],ny:[0,2,1,1,1,1],pz:[0,1,2,-1,-1,-1],nz:[0,1,2,1,-1,1]};function Qv(e,t,A,r){for(var n=new ue.Float32Array(27),i=C.create(),a=C.create(),s=C.create(),o=0;o<9;o++){for(var l=C.create(),u=0;u<kA.length;u++){for(var c=t[kA[u]],f=C.create(),h=0,d=0,g=bv[kA[u]],v=0;v<r;v++)for(var p=0;p<A;p++){i[0]=p/(A-1)*2-1,i[1]=v/(r-1)*2-1,i[2]=-1,C.normalize(i,i),s[0]=i[g[0]]*g[3],s[1]=i[g[1]]*g[4],s[2]=i[g[2]]*g[5],a[0]=c[d++]/255,a[1]=c[d++]/255,a[2]=c[d++]/255;var m=c[d++]/255*8.12;a[0]*=m,a[1]*=m,a[2]*=m,C.scaleAndAdd(f,f,a,Sv(s,o)*-i[2]),h+=-i[2]}C.scaleAndAdd(l,l,f,1/h)}n[o*3]=l[0]/6,n[o*3+1]=l[1]/6,n[o*3+2]=l[2]/6}return n}Kc.projectEnvironmentMap=function(e,t,A){A=A||{},A.lod=A.lod||0;var r,n=new bA,i=64;t.textureType==="texture2D"?r=new Tn({scene:n,environmentMap:t}):(i=t.image&&t.image.px?t.image.px.width:t.width,r=new Tn({scene:n,environmentMap:t}));var a=Math.ceil(i/Math.pow(2,A.lod)),s=Math.ceil(i/Math.pow(2,A.lod)),o=new $({width:a,height:s}),l=new Qe;r.material.define("fragment","RGBM_ENCODE"),A.decodeRGBM&&r.material.define("fragment","RGBM_DECODE"),r.material.set("lod",A.lod);for(var u=new Eo({texture:o}),c={},f=0;f<kA.length;f++){c[kA[f]]=new Uint8Array(a*s*4);var h=u.getCamera(kA[f]);h.fov=90,l.attach(o),l.bind(e),e.render(n,h),e.gl.readPixels(0,0,a,s,P.RGBA,P.UNSIGNED_BYTE,c[kA[f]]),l.unbind(e)}return r.dispose(e),l.dispose(e),o.dispose(e),Qv(e,c,a,s)};var Ae={firstNotNull:function(){for(var e=0,t=arguments.length;e<t;e++)if(arguments[e]!=null)return arguments[e]},queryDataIndex:function(e,t){if(t.dataIndexInside!=null)return t.dataIndexInside;if(t.dataIndex!=null)return Xt(t.dataIndex)?Zo(t.dataIndex,function(A){return e.indexOfRawIndex(A)}):e.indexOfRawIndex(t.dataIndex);if(t.name!=null)return Xt(t.name)?Zo(t.name,function(A){return e.indexOfName(A)}):e.indexOfName(t.name)}},Lv=re.extend({dynamic:!1,widthSegments:40,heightSegments:20,phiStart:0,phiLength:Math.PI*2,thetaStart:0,thetaLength:Math.PI,radius:1},function(){this.build()},{build:function(){var e=this.heightSegments,t=this.widthSegments,A=this.attributes.position,r=this.attributes.texcoord0,n=this.attributes.normal,i=(t+1)*(e+1);A.init(i),r.init(i),n.init(i);var a=i>65535?Uint32Array:Uint16Array,s=this.indices=new a(t*e*6),o,l,u,c,f,h,d,B=this.radius,g=this.phiStart,v=this.phiLength,p=this.thetaStart,m=this.thetaLength,B=this.radius,_=[],x=[],y=0,T=1/B;for(d=0;d<=e;d++)for(h=0;h<=t;h++)c=h/t,f=d/e,o=-B*Math.cos(g+c*v)*Math.sin(p+f*m),l=B*Math.cos(p+f*m),u=B*Math.sin(g+c*v)*Math.sin(p+f*m),_[0]=o,_[1]=l,_[2]=u,x[0]=c,x[1]=f,A.set(y,_),r.set(y,x),_[0]*=T,_[1]*=T,_[2]*=T,n.set(y,_),y++;var E,F,S,U,I=t+1,Q=0;for(d=0;d<e;d++)for(h=0;h<t;h++)F=d*I+h,E=d*I+h+1,U=(d+1)*I+h+1,S=(d+1)*I+h,s[Q++]=E,s[Q++]=F,s[Q++]=U,s[Q++]=F,s[Q++]=S,s[Q++]=U;this.boundingBox=new $e,this.boundingBox.max.set(B,B,B),this.boundingBox.min.set(-B,-B,-B)}}),Iv=Rt.extend({castShadow:!1},{type:"AMBIENT_LIGHT",uniformTemplates:{ambientLightColor:{type:"3f",value:function(e){var t=e.color,A=e.intensity;return[t[0]*A,t[1]*A,t[2]*A]}}}}),Dv=Rt.extend({shadowBias:.001,shadowSlopeScale:2,shadowCascade:1,cascadeSplitLogFactor:.2},{type:"DIRECTIONAL_LIGHT",uniformTemplates:{directionalLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new L,e.__dir.copy(e.worldTransform.z).normalize().negate().array}},directionalLightColor:{type:"3f",value:function(e){var t=e.color,A=e.intensity;return[t[0]*A,t[1]*A,t[2]*A]}}},clone:function(){var e=Rt.prototype.clone.call(this);return e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}}),Mv=Rt.extend({range:100,castShadow:!1},{type:"POINT_LIGHT",uniformTemplates:{pointLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},pointLightRange:{type:"1f",value:function(e){return e.range}},pointLightColor:{type:"3f",value:function(e){var t=e.color,A=e.intensity;return[t[0]*A,t[1]*A,t[2]*A]}}},clone:function(){var e=Rt.prototype.clone.call(this);return e.range=this.range,e}}),Rv=Rt.extend({range:20,umbraAngle:30,penumbraAngle:45,falloffFactor:2,shadowBias:.001,shadowSlopeScale:2},{type:"SPOT_LIGHT",uniformTemplates:{spotLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},spotLightRange:{type:"1f",value:function(e){return e.range}},spotLightUmbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.umbraAngle*Math.PI/180)}},spotLightPenumbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.penumbraAngle*Math.PI/180)}},spotLightFalloffFactor:{type:"1f",value:function(e){return e.falloffFactor}},spotLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new L,e.__dir.copy(e.worldTransform.z).negate().array}},spotLightColor:{type:"3f",value:function(e){var t=e.color,A=e.intensity;return[t[0]*A,t[1]*A,t[2]*A]}}},clone:function(){var e=Rt.prototype.clone.call(this);return e.range=this.range,e.umbraAngle=this.umbraAngle,e.penumbraAngle=this.penumbraAngle,e.falloffFactor=this.falloffFactor,e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}}),oe=function(e,t,A,r){e=e||0,t=t||0,A=A||0,r=r||0,this.array=M.fromValues(e,t,A,r),this._dirty=!0};oe.prototype={constructor:oe,add:function(e){return M.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,A,r){return this.array[0]=e,this.array[1]=t,this.array[2]=A,this.array[3]=r,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new oe(this.x,this.y,this.z,this.w)},copy:function(e){return M.copy(this.array,e.array),this._dirty=!0,this},dist:function(e){return M.dist(this.array,e.array)},distance:function(e){return M.distance(this.array,e.array)},div:function(e){return M.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return M.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return M.dot(this.array,e.array)},len:function(){return M.len(this.array)},length:function(){return M.length(this.array)},lerp:function(e,t,A){return M.lerp(this.array,e.array,t.array,A),this._dirty=!0,this},min:function(e){return M.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return M.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return M.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return M.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return M.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return M.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return M.random(this.array,e),this._dirty=!0,this},scale:function(e){return M.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return M.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return M.sqrDist(this.array,e.array)},squaredDistance:function(e){return M.squaredDistance(this.array,e.array)},sqrLen:function(){return M.sqrLen(this.array)},squaredLength:function(){return M.squaredLength(this.array)},sub:function(e){return M.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return M.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return M.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return M.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var jr=Object.defineProperty;if(jr){var ti=oe.prototype;jr(ti,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),jr(ti,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),jr(ti,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),jr(ti,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}oe.add=function(e,t,A){return M.add(e.array,t.array,A.array),e._dirty=!0,e};oe.set=function(e,t,A,r,n){M.set(e.array,t,A,r,n),e._dirty=!0};oe.copy=function(e,t){return M.copy(e.array,t.array),e._dirty=!0,e};oe.dist=function(e,t){return M.distance(e.array,t.array)};oe.distance=oe.dist;oe.div=function(e,t,A){return M.divide(e.array,t.array,A.array),e._dirty=!0,e};oe.divide=oe.div;oe.dot=function(e,t){return M.dot(e.array,t.array)};oe.len=function(e){return M.length(e.array)};oe.lerp=function(e,t,A,r){return M.lerp(e.array,t.array,A.array,r),e._dirty=!0,e};oe.min=function(e,t,A){return M.min(e.array,t.array,A.array),e._dirty=!0,e};oe.max=function(e,t,A){return M.max(e.array,t.array,A.array),e._dirty=!0,e};oe.mul=function(e,t,A){return M.multiply(e.array,t.array,A.array),e._dirty=!0,e};oe.multiply=oe.mul;oe.negate=function(e,t){return M.negate(e.array,t.array),e._dirty=!0,e};oe.normalize=function(e,t){return M.normalize(e.array,t.array),e._dirty=!0,e};oe.random=function(e,t){return M.random(e.array,t),e._dirty=!0,e};oe.scale=function(e,t,A){return M.scale(e.array,t.array,A),e._dirty=!0,e};oe.scaleAndAdd=function(e,t,A,r){return M.scaleAndAdd(e.array,t.array,A.array,r),e._dirty=!0,e};oe.sqrDist=function(e,t){return M.sqrDist(e.array,t.array)};oe.squaredDistance=oe.sqrDist;oe.sqrLen=function(e){return M.sqrLen(e.array)};oe.squaredLength=oe.sqrLen;oe.sub=function(e,t,A){return M.subtract(e.array,t.array,A.array),e._dirty=!0,e};oe.subtract=oe.sub;oe.transformMat4=function(e,t,A){return M.transformMat4(e.array,t.array,A.array),e._dirty=!0,e};oe.transformQuat=function(e,t,A){return M.transformQuat(e.array,t.array,A.array),e._dirty=!0,e};var se={};se.create=function(){var e=new At(4);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};se.clone=function(e){var t=new At(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};se.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};se.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};se.transpose=function(e,t){if(e===t){var A=t[1];e[1]=t[2],e[2]=A}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e};se.invert=function(e,t){var A=t[0],r=t[1],n=t[2],i=t[3],a=A*i-n*r;return a?(a=1/a,e[0]=i*a,e[1]=-r*a,e[2]=-n*a,e[3]=A*a,e):null};se.adjoint=function(e,t){var A=t[0];return e[0]=t[3],e[1]=-t[1],e[2]=-t[2],e[3]=A,e};se.determinant=function(e){return e[0]*e[3]-e[2]*e[1]};se.multiply=function(e,t,A){var r=t[0],n=t[1],i=t[2],a=t[3],s=A[0],o=A[1],l=A[2],u=A[3];return e[0]=r*s+i*o,e[1]=n*s+a*o,e[2]=r*l+i*u,e[3]=n*l+a*u,e};se.mul=se.multiply;se.rotate=function(e,t,A){var r=t[0],n=t[1],i=t[2],a=t[3],s=Math.sin(A),o=Math.cos(A);return e[0]=r*o+i*s,e[1]=n*o+a*s,e[2]=r*-s+i*o,e[3]=n*-s+a*o,e};se.scale=function(e,t,A){var r=t[0],n=t[1],i=t[2],a=t[3],s=A[0],o=A[1];return e[0]=r*s,e[1]=n*s,e[2]=i*o,e[3]=a*o,e};se.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2))};se.LDU=function(e,t,A,r){return e[2]=r[2]/r[0],A[0]=r[0],A[1]=r[1],A[3]=r[3]-e[2]*A[1],[e,t,A]};var ft=function(){this.array=se.create(),this._dirty=!0};ft.prototype={constructor:ft,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new ft().copy(this)},copy:function(e){return se.copy(this.array,e.array),this._dirty=!0,this},adjoint:function(){return se.adjoint(this.array,this.array),this._dirty=!0,this},determinant:function(){return se.determinant(this.array)},identity:function(){return se.identity(this.array),this._dirty=!0,this},invert:function(){return se.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return se.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return se.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return se.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return se.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return se.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return se.scale(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return se.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};ft.adjoint=function(e,t){return se.adjoint(e.array,t.array),e._dirty=!0,e};ft.copy=function(e,t){return se.copy(e.array,t.array),e._dirty=!0,e};ft.determinant=function(e){return se.determinant(e.array)};ft.identity=function(e){return se.identity(e.array),e._dirty=!0,e};ft.invert=function(e,t){return se.invert(e.array,t.array),e._dirty=!0,e};ft.mul=function(e,t,A){return se.mul(e.array,t.array,A.array),e._dirty=!0,e};ft.multiply=ft.mul;ft.rotate=function(e,t,A){return se.rotate(e.array,t.array,A),e._dirty=!0,e};ft.scale=function(e,t,A){return se.scale(e.array,t.array,A.array),e._dirty=!0,e};ft.transpose=function(e,t){return se.transpose(e.array,t.array),e._dirty=!0,e};var ce={};ce.create=function(){var e=new At(6);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};ce.clone=function(e){var t=new At(6);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t};ce.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e};ce.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};ce.invert=function(e,t){var A=t[0],r=t[1],n=t[2],i=t[3],a=t[4],s=t[5],o=A*i-r*n;return o?(o=1/o,e[0]=i*o,e[1]=-r*o,e[2]=-n*o,e[3]=A*o,e[4]=(n*s-i*a)*o,e[5]=(r*a-A*s)*o,e):null};ce.determinant=function(e){return e[0]*e[3]-e[1]*e[2]};ce.multiply=function(e,t,A){var r=t[0],n=t[1],i=t[2],a=t[3],s=t[4],o=t[5],l=A[0],u=A[1],c=A[2],f=A[3],h=A[4],d=A[5];return e[0]=r*l+i*u,e[1]=n*l+a*u,e[2]=r*c+i*f,e[3]=n*c+a*f,e[4]=r*h+i*d+s,e[5]=n*h+a*d+o,e};ce.mul=ce.multiply;ce.rotate=function(e,t,A){var r=t[0],n=t[1],i=t[2],a=t[3],s=t[4],o=t[5],l=Math.sin(A),u=Math.cos(A);return e[0]=r*u+i*l,e[1]=n*u+a*l,e[2]=r*-l+i*u,e[3]=n*-l+a*u,e[4]=s,e[5]=o,e};ce.scale=function(e,t,A){var r=t[0],n=t[1],i=t[2],a=t[3],s=t[4],o=t[5],l=A[0],u=A[1];return e[0]=r*l,e[1]=n*l,e[2]=i*u,e[3]=a*u,e[4]=s,e[5]=o,e};ce.translate=function(e,t,A){var r=t[0],n=t[1],i=t[2],a=t[3],s=t[4],o=t[5],l=A[0],u=A[1];return e[0]=r,e[1]=n,e[2]=i,e[3]=a,e[4]=r*l+i*u+s,e[5]=n*l+a*u+o,e};ce.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+1)};var _t=function(){this.array=ce.create(),this._dirty=!0};_t.prototype={constructor:_t,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new _t().copy(this)},copy:function(e){return ce.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return ce.determinant(this.array)},identity:function(){return ce.identity(this.array),this._dirty=!0,this},invert:function(){return ce.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return ce.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return ce.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return ce.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return ce.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return ce.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return ce.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return ce.translate(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};_t.copy=function(e,t){return ce.copy(e.array,t.array),e._dirty=!0,e};_t.determinant=function(e){return ce.determinant(e.array)};_t.identity=function(e){return ce.identity(e.array),e._dirty=!0,e};_t.invert=function(e,t){return ce.invert(e.array,t.array),e._dirty=!0,e};_t.mul=function(e,t,A){return ce.mul(e.array,t.array,A.array),e._dirty=!0,e};_t.multiply=_t.mul;_t.rotate=function(e,t,A){return ce.rotate(e.array,t.array,A),e._dirty=!0,e};_t.scale=function(e,t,A){return ce.scale(e.array,t.array,A.array),e._dirty=!0,e};_t.translate=function(e,t,A){return ce.translate(e.array,t.array,A.array),e._dirty=!0,e};var Ge=function(){this.array=Z.create(),this._dirty=!0};Ge.prototype={constructor:Ge,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return Z.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new Ge().copy(this)},copy:function(e){return Z.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return Z.determinant(this.array)},fromMat2d:function(e){return Z.fromMat2d(this.array,e.array),this._dirty=!0,this},fromMat4:function(e){return Z.fromMat4(this.array,e.array),this._dirty=!0,this},fromQuat:function(e){return Z.fromQuat(this.array,e.array),this._dirty=!0,this},identity:function(){return Z.identity(this.array),this._dirty=!0,this},invert:function(){return Z.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return Z.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return Z.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return Z.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return Z.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return Z.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return Z.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return Z.translate(this.array,this.array,e.array),this._dirty=!0,this},normalFromMat4:function(e){return Z.normalFromMat4(this.array,e.array),this._dirty=!0,this},transpose:function(){return Z.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};Ge.adjoint=function(e,t){return Z.adjoint(e.array,t.array),e._dirty=!0,e};Ge.copy=function(e,t){return Z.copy(e.array,t.array),e._dirty=!0,e};Ge.determinant=function(e){return Z.determinant(e.array)};Ge.identity=function(e){return Z.identity(e.array),e._dirty=!0,e};Ge.invert=function(e,t){return Z.invert(e.array,t.array),e};Ge.mul=function(e,t,A){return Z.mul(e.array,t.array,A.array),e._dirty=!0,e};Ge.multiply=Ge.mul;Ge.fromMat2d=function(e,t){return Z.fromMat2d(e.array,t.array),e._dirty=!0,e};Ge.fromMat4=function(e,t){return Z.fromMat4(e.array,t.array),e._dirty=!0,e};Ge.fromQuat=function(e,t){return Z.fromQuat(e.array,t.array),e._dirty=!0,e};Ge.normalFromMat4=function(e,t){return Z.normalFromMat4(e.array,t.array),e._dirty=!0,e};Ge.rotate=function(e,t,A){return Z.rotate(e.array,t.array,A),e._dirty=!0,e};Ge.scale=function(e,t,A){return Z.scale(e.array,t.array,A.array),e._dirty=!0,e};Ge.transpose=function(e,t){return Z.transpose(e.array,t.array),e._dirty=!0,e};Ge.translate=function(e,t,A){return Z.translate(e.array,t.array,A.array),e._dirty=!0,e};var Nv={_animators:null,getAnimators:function(){return this._animators=this._animators||[],this._animators},animate:function(e,t){this._animators=this._animators||[];var A=this,r;if(e){for(var n=e.split("."),i=A,a=0,s=n.length;a<s;a++)i&&(i=i[n[a]]);i&&(r=i)}else r=A;if(r==null)throw new Error("Target "+e+" not exists");var o=this._animators,l=new wd(r,t),u=this;return l.during(function(){u.__zr&&u.__zr.refresh()}).done(function(){var c=o.indexOf(l);c>=0&&o.splice(c,1)}),o.push(l),this.__zr&&this.__zr.animation.addAnimator(l),l},stopAnimation:function(e){this._animators=this._animators||[];for(var t=this._animators,A=t.length,r=0;r<A;r++)t[r].stop(e);return t.length=0,this},addAnimatorsToZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.addAnimator(this._animators[t])},removeAnimatorsFromZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.removeAnimator(this._animators[t])}};const zc=`
@export clay.util.rand
highp float rand(vec2 uv) {
 const highp float a = 12.9898, b = 78.233, c = 43758.5453;
 highp float dt = dot(uv.xy, vec2(a,b)), sn = mod(dt, 3.141592653589793);
 return fract(sin(sn) * c);
}
@end
@export clay.util.calculate_attenuation
uniform float attenuationFactor : 5.0;
float lightAttenuation(float dist, float range)
{
 float attenuation = 1.0;
 attenuation = dist*dist/(range*range+1.0);
 float att_s = attenuationFactor;
 attenuation = 1.0/(attenuation*att_s+1.0);
 att_s = 1.0/(att_s+1.0);
 attenuation = attenuation - att_s;
 attenuation /= 1.0 - att_s;
 return clamp(attenuation, 0.0, 1.0);
}
@end
@export clay.util.edge_factor
#ifdef SUPPORT_STANDARD_DERIVATIVES
float edgeFactor(float width)
{
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * width, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#else
float edgeFactor(float width)
{
 return 1.0;
}
#endif
@end
@export clay.util.encode_float
vec4 encodeFloat(const in float depth)
{
 const vec4 bitShifts = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);
 const vec4 bit_mask = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);
 vec4 res = fract(depth * bitShifts);
 res -= res.xxyz * bit_mask;
 return res;
}
@end
@export clay.util.decode_float
float decodeFloat(const in vec4 color)
{
 const vec4 bitShifts = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);
 return dot(color, bitShifts);
}
@end
@export clay.util.float
@import clay.util.encode_float
@import clay.util.decode_float
@end
@export clay.util.rgbm_decode
vec3 RGBMDecode(vec4 rgbm, float range) {
 return range * rgbm.rgb * rgbm.a;
}
@end
@export clay.util.rgbm_encode
vec4 RGBMEncode(vec3 color, float range) {
 if (dot(color, color) == 0.0) {
 return vec4(0.0);
 }
 vec4 rgbm;
 color /= range;
 rgbm.a = clamp(max(max(color.r, color.g), max(color.b, 1e-6)), 0.0, 1.0);
 rgbm.a = ceil(rgbm.a * 255.0) / 255.0;
 rgbm.rgb = color / rgbm.a;
 return rgbm;
}
@end
@export clay.util.rgbm
@import clay.util.rgbm_decode
@import clay.util.rgbm_encode
vec4 decodeHDR(vec4 color)
{
#if defined(RGBM_DECODE) || defined(RGBM)
 return vec4(RGBMDecode(color, 8.12), 1.0);
#else
 return color;
#endif
}
vec4 encodeHDR(vec4 color)
{
#if defined(RGBM_ENCODE) || defined(RGBM)
 return RGBMEncode(color.xyz, 8.12);
#else
 return color;
#endif
}
@end
@export clay.util.srgb
vec4 sRGBToLinear(in vec4 value) {
 return vec4(mix(pow(value.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), value.rgb * 0.0773993808, vec3(lessThanEqual(value.rgb, vec3(0.04045)))), value.w);
}
vec4 linearTosRGB(in vec4 value) {
 return vec4(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))), value.w);
}
@end
@export clay.chunk.skinning_header
#ifdef SKINNING
attribute vec3 weight : WEIGHT;
attribute vec4 joint : JOINT;
#ifdef USE_SKIN_MATRICES_TEXTURE
uniform sampler2D skinMatricesTexture : ignore;
uniform float skinMatricesTextureSize: ignore;
mat4 getSkinMatrix(sampler2D tex, float idx) {
 float j = idx * 4.0;
 float x = mod(j, skinMatricesTextureSize);
 float y = floor(j / skinMatricesTextureSize) + 0.5;
 vec2 scale = vec2(skinMatricesTextureSize);
 return mat4(
 texture2D(tex, vec2(x + 0.5, y) / scale),
 texture2D(tex, vec2(x + 1.5, y) / scale),
 texture2D(tex, vec2(x + 2.5, y) / scale),
 texture2D(tex, vec2(x + 3.5, y) / scale)
 );
}
mat4 getSkinMatrix(float idx) {
 return getSkinMatrix(skinMatricesTexture, idx);
}
#else
uniform mat4 skinMatrix[JOINT_COUNT] : SKIN_MATRIX;
mat4 getSkinMatrix(float idx) {
 return skinMatrix[int(idx)];
}
#endif
#endif
@end
@export clay.chunk.skin_matrix
mat4 skinMatrixWS = getSkinMatrix(joint.x) * weight.x;
if (weight.y > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.y) * weight.y;
}
if (weight.z > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.z) * weight.z;
}
float weightW = 1.0-weight.x-weight.y-weight.z;
if (weightW > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.w) * weightW;
}
@end
@export clay.chunk.instancing_header
#ifdef INSTANCING
attribute vec4 instanceMat1;
attribute vec4 instanceMat2;
attribute vec4 instanceMat3;
#endif
@end
@export clay.chunk.instancing_matrix
mat4 instanceMat = mat4(
 vec4(instanceMat1.xyz, 0.0),
 vec4(instanceMat2.xyz, 0.0),
 vec4(instanceMat3.xyz, 0.0),
 vec4(instanceMat1.w, instanceMat2.w, instanceMat3.w, 1.0)
);
@end
@export clay.util.parallax_correct
vec3 parallaxCorrect(in vec3 dir, in vec3 pos, in vec3 boxMin, in vec3 boxMax) {
 vec3 first = (boxMax - pos) / dir;
 vec3 second = (boxMin - pos) / dir;
 vec3 further = max(first, second);
 float dist = min(further.x, min(further.y, further.z));
 vec3 fixedPos = pos + dir * dist;
 vec3 boxCenter = (boxMax + boxMin) * 0.5;
 return normalize(fixedPos - boxCenter);
}
@end
@export clay.util.clamp_sample
vec4 clampSample(const in sampler2D texture, const in vec2 coord)
{
#ifdef STEREO
 float eye = step(0.5, coord.x) * 0.5;
 vec2 coordClamped = clamp(coord, vec2(eye, 0.0), vec2(0.5 + eye, 1.0));
#else
 vec2 coordClamped = clamp(coord, vec2(0.0), vec2(1.0));
#endif
 return texture2D(texture, coordClamped);
}
@end
@export clay.util.ACES
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
@end`,Hv=`
@export ecgl.common.transformUniforms
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
uniform mat4 world : WORLD;
@end

@export ecgl.common.attributes
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 normal : NORMAL;
@end

@export ecgl.common.uv.header
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
uniform vec2 detailUvRepeat : [1.0, 1.0];
uniform vec2 detailUvOffset : [0.0, 0.0];

varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end

@export ecgl.common.uv.main
v_Texcoord = texcoord * uvRepeat + uvOffset;
v_DetailTexcoord = texcoord * detailUvRepeat + detailUvOffset;
@end

@export ecgl.common.uv.fragmentHeader
varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end


@export ecgl.common.albedo.main

 vec4 albedoTexel = vec4(1.0);
#ifdef DIFFUSEMAP_ENABLED
 albedoTexel = texture2D(diffuseMap, v_Texcoord);
 #ifdef SRGB_DECODE
 albedoTexel = sRGBToLinear(albedoTexel);
 #endif
#endif

#ifdef DETAILMAP_ENABLED
 vec4 detailTexel = texture2D(detailMap, v_DetailTexcoord);
 #ifdef SRGB_DECODE
 detailTexel = sRGBToLinear(detailTexel);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, detailTexel.rgb, detailTexel.a);
 albedoTexel.a = detailTexel.a + (1.0 - detailTexel.a) * albedoTexel.a;
#endif

@end

@export ecgl.common.wireframe.vertexHeader

#ifdef WIREFRAME_QUAD
attribute vec4 barycentric;
varying vec4 v_Barycentric;
#elif defined(WIREFRAME_TRIANGLE)
attribute vec3 barycentric;
varying vec3 v_Barycentric;
#endif

@end

@export ecgl.common.wireframe.vertexMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 v_Barycentric = barycentric;
#endif

@end


@export ecgl.common.wireframe.fragmentHeader

uniform float wireframeLineWidth : 1;
uniform vec4 wireframeLineColor: [0, 0, 0, 0.5];

#ifdef WIREFRAME_QUAD
varying vec4 v_Barycentric;
float edgeFactor () {
 vec4 d = fwidth(v_Barycentric);
 vec4 a4 = smoothstep(vec4(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(min(a4.x, a4.y), a4.z), a4.w);
}
#elif defined(WIREFRAME_TRIANGLE)
varying vec3 v_Barycentric;
float edgeFactor () {
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#endif

@end


@export ecgl.common.wireframe.fragmentMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 if (wireframeLineWidth > 0.) {
 vec4 lineColor = wireframeLineColor;
#ifdef SRGB_DECODE
 lineColor = sRGBToLinear(lineColor);
#endif

 gl_FragColor.rgb = mix(gl_FragColor.rgb, lineColor.rgb, (1.0 - edgeFactor()) * lineColor.a);
 }
#endif
@end




@export ecgl.common.bumpMap.header

#ifdef BUMPMAP_ENABLED
uniform sampler2D bumpMap;
uniform float bumpScale : 1.0;


vec3 bumpNormal(vec3 surfPos, vec3 surfNormal, vec3 baseNormal)
{
 vec2 dSTdx = dFdx(v_Texcoord);
 vec2 dSTdy = dFdy(v_Texcoord);

 float Hll = bumpScale * texture2D(bumpMap, v_Texcoord).x;
 float dHx = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdx).x - Hll;
 float dHy = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdy).x - Hll;

 vec3 vSigmaX = dFdx(surfPos);
 vec3 vSigmaY = dFdy(surfPos);
 vec3 vN = surfNormal;

 vec3 R1 = cross(vSigmaY, vN);
 vec3 R2 = cross(vN, vSigmaX);

 float fDet = dot(vSigmaX, R1);

 vec3 vGrad = sign(fDet) * (dHx * R1 + dHy * R2);
 return normalize(abs(fDet) * baseNormal - vGrad);

}
#endif

@end

@export ecgl.common.normalMap.vertexHeader

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.vertexMain

#ifdef NORMALMAP_ENABLED
 if (dot(tangent, tangent) > 0.0) {
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
 }
#endif

@end


@export ecgl.common.normalMap.fragmentHeader

#ifdef NORMALMAP_ENABLED
uniform sampler2D normalMap;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.fragmentMain
#ifdef NORMALMAP_ENABLED
 if (dot(v_Tangent, v_Tangent) > 0.0) {
 vec3 normalTexel = texture2D(normalMap, v_DetailTexcoord).xyz;
 if (dot(normalTexel, normalTexel) > 0.0) { N = normalTexel * 2.0 - 1.0;
 mat3 tbn = mat3(v_Tangent, v_Bitangent, v_Normal);
 N = normalize(tbn * N);
 }
 }
#endif
@end



@export ecgl.common.vertexAnimation.header

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevNormal;
uniform float percent;
#endif

@end

@export ecgl.common.vertexAnimation.main

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 vec3 norm = mix(prevNormal, normal, percent);
#else
 vec3 pos = position;
 vec3 norm = normal;
#endif

@end


@export ecgl.common.ssaoMap.header
#ifdef SSAOMAP_ENABLED
uniform sampler2D ssaoMap;
uniform vec4 viewport : VIEWPORT;
#endif
@end

@export ecgl.common.ssaoMap.main
 float ao = 1.0;
#ifdef SSAOMAP_ENABLED
 ao = texture2D(ssaoMap, (gl_FragCoord.xy - viewport.xy) / viewport.zw).r;
#endif
@end




@export ecgl.common.diffuseLayer.header

#if (LAYER_DIFFUSEMAP_COUNT > 0)
uniform float layerDiffuseIntensity[LAYER_DIFFUSEMAP_COUNT];
uniform sampler2D layerDiffuseMap[LAYER_DIFFUSEMAP_COUNT];
#endif

@end

@export ecgl.common.emissiveLayer.header

#if (LAYER_EMISSIVEMAP_COUNT > 0)
uniform float layerEmissionIntensity[LAYER_EMISSIVEMAP_COUNT];
uniform sampler2D layerEmissiveMap[LAYER_EMISSIVEMAP_COUNT];
#endif

@end

@export ecgl.common.layers.header
@import ecgl.common.diffuseLayer.header
@import ecgl.common.emissiveLayer.header
@end

@export ecgl.common.diffuseLayer.main

#if (LAYER_DIFFUSEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_DIFFUSEMAP_COUNT; _idx_++) {{
 float intensity = layerDiffuseIntensity[_idx_];
 vec4 texel2 = texture2D(layerDiffuseMap[_idx_], v_Texcoord);
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, texel2.rgb * intensity, texel2.a);
 albedoTexel.a = texel2.a + (1.0 - texel2.a) * albedoTexel.a;
 }}
#endif

@end

@export ecgl.common.emissiveLayer.main

#if (LAYER_EMISSIVEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_EMISSIVEMAP_COUNT; _idx_++)
 {{
 vec4 texel2 = texture2D(layerEmissiveMap[_idx_], v_Texcoord) * layerEmissionIntensity[_idx_];
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 float intensity = layerEmissionIntensity[_idx_];
 gl_FragColor.rgb += texel2.rgb * texel2.a * intensity;
 }}
#endif

@end
`,Ov=`@export ecgl.color.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

@import ecgl.common.uv.header

attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 position: POSITION;

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

#ifdef ATMOSPHERE_ENABLED
attribute vec3 normal: NORMAL;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
varying vec3 v_Normal;
#endif

void main()
{
#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 @import ecgl.common.uv.main

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef ATMOSPHERE_ENABLED
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end

@export ecgl.color.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
varying vec3 v_Normal;
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.layers.header

@import ecgl.common.uv.fragmentHeader

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain

}
@end`,Pv=`/**
 * http: */

@export ecgl.lambert.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header


@import ecgl.common.attributes

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif


@import ecgl.common.vertexAnimation.header


varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{
 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main


 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

 @import ecgl.common.wireframe.vertexMain
}

@end


@export ecgl.lambert.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 gl_FragColor *= sRGBToLinear(v_Color);
 #else
 gl_FragColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseColor = vec3(0.0, 0.0, 0.0);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 diffuseColor += ambientLightColor[i] * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseColor += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 vec3 lightColor = directionalLightColor[i];

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 diffuseColor += lightColor * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor.rgb *= diffuseColor;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,Gv=`@export ecgl.realistic.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes


@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@import ecgl.common.vertexAnimation.header

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{

 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef NORMALMAP_ENABLED
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end



@export ecgl.realistic.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0
#define PI 3.14159265358979
#define ROUGHNESS_CHANEL 0
#define METALNESS_CHANEL 1

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;

uniform sampler2D detailMap;
uniform sampler2D metalnessMap;
uniform sampler2D roughnessMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform float metalness : 0.0;
uniform float roughness : 0.5;

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
@import clay.header.ambient_cubemap_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.normalMap.fragmentHeader

@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import clay.util.rgbm

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}

float D_Phong(float g, float ndh) {
 float a = pow(8192.0, g);
 return (a + 2.0) / 8.0 * pow(ndh, a);
}

void main()
{
 vec4 albedoColor = color;

 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);
#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 albedoColor *= sRGBToLinear(v_Color);
 #else
 albedoColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 albedoColor *= albedoTexel;

 float m = metalness;

#ifdef METALNESSMAP_ENABLED
 float m2 = texture2D(metalnessMap, v_DetailTexcoord)[METALNESS_CHANEL];
 m = clamp(m2 + (m - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 baseColor = albedoColor.rgb;
 albedoColor.rgb = baseColor * (1.0 - m);
 vec3 specFactor = mix(vec3(0.04), baseColor, m);

 float g = 1.0 - roughness;

#ifdef ROUGHNESSMAP_ENABLED
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 N = v_Normal;

#ifdef DOUBLE_SIDED
 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

@import ecgl.common.normalMap.fragmentMain

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseTerm = vec3(0.0);
 vec3 specularTerm = vec3(0.0);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 vec3 fresnelTerm = F_Schlick(ndv, specFactor);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += ambientLightColor[_idx_] * ambientFactor * ao;
 }}
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++)
 {{
 vec3 L = -directionalLightDirection[_idx_];
 vec3 lc = directionalLightColor[_idx_];

 vec3 H = normalize(L + V);
 float ndl = clamp(dot(N, normalize(L)), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[_idx_];
 }
#endif

 vec3 li = lc * ndl * shadowContrib;

 diffuseTerm += li;
 specularTerm += li * fresnelTerm * D_Phong(g, ndh);
 }}
#endif


#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
 vec3 L = reflect(-V, N);
 L = vec3(L.x, L[NORMAL_UP_AXIS], L[NORMAL_FRONT_AXIS]);
 float rough2 = clamp(1.0 - g, 0.0, 1.0);
 float bias2 = rough2 * 5.0;
 vec2 brdfParam2 = texture2D(ambientCubemapLightBRDFLookup[0], vec2(rough2, ndv)).xy;
 vec3 envWeight2 = specFactor * brdfParam2.x + brdfParam2.y;
 vec3 envTexel2;
 for(int _idx_ = 0; _idx_ < AMBIENT_CUBEMAP_LIGHT_COUNT; _idx_++)
 {{
 envTexel2 = RGBMDecode(textureCubeLodEXT(ambientCubemapLightCubemap[_idx_], L, bias2), 8.12);
 specularTerm += ambientCubemapLightColor[_idx_] * envTexel2 * envWeight2 * ao;
 }}
#endif

 gl_FragColor.rgb = albedoColor.rgb * diffuseTerm + specularTerm;
 gl_FragColor.a = albedoColor.a;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

#ifdef SRGB_ENCODE
 gl_FragColor = linearTosRGB(gl_FragColor);
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,Vv=`@export ecgl.hatching.vertex

@import ecgl.realistic.vertex

@end


@export ecgl.hatching.fragment

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform vec4 color : [0.0, 0.0, 0.0, 1.0];
uniform vec4 paperColor : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

uniform sampler2D hatch1;
uniform sampler2D hatch2;
uniform sampler2D hatch3;
uniform sampler2D hatch4;
uniform sampler2D hatch5;
uniform sampler2D hatch6;

float shade(in float tone) {
 vec4 c = vec4(1. ,1., 1., 1.);
 float step = 1. / 6.;
 vec2 uv = v_DetailTexcoord;
 if (tone <= step / 2.0) {
 c = mix(vec4(0.), texture2D(hatch6, uv), 12. * tone);
 }
 else if (tone <= step) {
 c = mix(texture2D(hatch6, uv), texture2D(hatch5, uv), 6. * tone);
 }
 if(tone > step && tone <= 2. * step){
 c = mix(texture2D(hatch5, uv), texture2D(hatch4, uv) , 6. * (tone - step));
 }
 if(tone > 2. * step && tone <= 3. * step){
 c = mix(texture2D(hatch4, uv), texture2D(hatch3, uv), 6. * (tone - 2. * step));
 }
 if(tone > 3. * step && tone <= 4. * step){
 c = mix(texture2D(hatch3, uv), texture2D(hatch2, uv), 6. * (tone - 3. * step));
 }
 if(tone > 4. * step && tone <= 5. * step){
 c = mix(texture2D(hatch2, uv), texture2D(hatch1, uv), 6. * (tone - 4. * step));
 }
 if(tone > 5. * step){
 c = mix(texture2D(hatch1, uv), vec4(1.), 6. * (tone - 5. * step));
 }

 return c.r;
}

const vec3 w = vec3(0.2125, 0.7154, 0.0721);

void main()
{
#ifdef SRGB_DECODE
 vec4 inkColor = sRGBToLinear(color);
#else
 vec4 inkColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 inkColor *= sRGBToLinear(v_Color);
 #else
 inkColor *= v_Color;
 #endif
#endif

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float tone = 0.0;

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 tone += dot(ambientLightColor[i], w) * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 tone += dot(calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_], w) * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 float lightTone = dot(directionalLightColor[i], w);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 tone += lightTone * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor = mix(inkColor, paperColor, shade(clamp(tone, 0.0, 1.0)));
 }
@end
`,Kv=`@export ecgl.sm.depth.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;

void main(){

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 v_ViewPosition = worldViewProjection * vec4(pos, 1.0);
 gl_Position = v_ViewPosition;

 v_Texcoord = texcoord;

}
@end



@export ecgl.sm.depth.fragment

@import clay.sm.depth.fragment

@end`;Object.assign(zt.prototype,Nv);K.import(zc);K.import(Nc);K.import(Hv);K.import(Ov);K.import(Pv);K.import(Gv);K.import(Vv);K.import(Kv);function zv(e){return!e||e==="none"}function kc(e){return e instanceof HTMLCanvasElement||e instanceof HTMLImageElement||e instanceof Image}function kv(e){return e.getZr&&e.setOption}var Wv=bA.prototype.addToScene,Xv=bA.prototype.removeFromScene;bA.prototype.addToScene=function(e){if(Wv.call(this,e),this.__zr){var t=this.__zr;e.traverse(function(A){A.__zr=t,A.addAnimatorsToZr&&A.addAnimatorsToZr(t)})}};bA.prototype.removeFromScene=function(e){Xv.call(this,e),e.traverse(function(t){var A=t.__zr;t.__zr=null,A&&t.removeAnimatorsFromZr&&t.removeAnimatorsFromZr(A)})};St.prototype.setTextureImage=function(e,t,A,r){if(this.shader){var n=A.getZr(),i=this,a;return i.autoUpdateTextureStatus=!1,i.disableTexture(e),zv(t)||(a=w.loadTexture(t,A,r,function(s){i.enableTexture(e),n&&n.refresh()}),i.set(e,a)),a}};var w={};w.Renderer=bt;w.Node=zt;w.Mesh=We;w.Shader=K;w.Material=St;w.Texture=P;w.Texture2D=$;w.Geometry=re;w.SphereGeometry=Lv;w.PlaneGeometry=pa;w.CubeGeometry=Vc;w.AmbientLight=Iv;w.DirectionalLight=Dv;w.PointLight=Mv;w.SpotLight=Rv;w.PerspectiveCamera=ze;w.OrthographicCamera=Qr;w.Vector2=J;w.Vector3=L;w.Vector4=oe;w.Quaternion=fe;w.Matrix2=ft;w.Matrix2d=_t;w.Matrix3=Ge;w.Matrix4=z;w.Plane=pn;w.Ray=ZA;w.BoundingBox=$e;w.Frustum=ga;var Ai=null;function Yv(){return Ai!==null||(Ai=kt.createBlank("rgba(255,255,255,0)").image),Ai}function Il(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function Dl(e){if((e.wrapS===P.REPEAT||e.wrapT===P.REPEAT)&&e.image){var t=Il(e.width),A=Il(e.height);if(t!==e.width||A!==e.height){var r=document.createElement("canvas");r.width=t,r.height=A;var n=r.getContext("2d");n.drawImage(e.image,0,0,t,A),e.image=r}}}w.loadTexture=function(e,t,A,r){typeof A=="function"&&(r=A,A={}),A=A||{};for(var n=Object.keys(A).sort(),i="",a=0;a<n.length;a++)i+=n[a]+"_"+A[n[a]]+"_";var s=t.__textureCache=t.__textureCache||new yd(20);if(kv(e)){var o=e.__textureid__,l=s.get(i+o);if(l)l.texture.surface.setECharts(e),r&&r(l.texture);else{var u=new Hs(e);u.onupdate=function(){t.getZr().refresh()},l={texture:u.getTexture()};for(var a=0;a<n.length;a++)l.texture[n[a]]=A[n[a]];o=e.__textureid__||"__ecgl_ec__"+l.texture.__uid__,e.__textureid__=o,s.put(i+o,l),r&&r(l.texture)}return l.texture}else if(kc(e)){var o=e.__textureid__,l=s.get(i+o);if(!l){l={texture:new w.Texture2D({image:e})};for(var a=0;a<n.length;a++)l.texture[n[a]]=A[n[a]];o=e.__textureid__||"__ecgl_image__"+l.texture.__uid__,e.__textureid__=o,s.put(i+o,l),Dl(l.texture),r&&r(l.texture)}return l.texture}else{var l=s.get(i+e);if(l)l.callbacks?l.callbacks.push(r):r&&r(l.texture);else if(e.match(/.hdr$|^data:application\/octet-stream/)){l={callbacks:[r]};var c=kt.loadTexture(e,{exposure:A.exposure,fileType:"hdr"},function(){c.dirty(),l.callbacks.forEach(function(d){d&&d(c)}),l.callbacks=null});l.texture=c,s.put(i+e,l)}else{for(var c=new w.Texture2D({image:new Image}),a=0;a<n.length;a++)c[n[a]]=A[n[a]];l={texture:c,callbacks:[r]};var f=c.image;f.onload=function(){c.image=f,Dl(c),c.dirty(),l.callbacks.forEach(function(g){g&&g(c)}),l.callbacks=null},f.crossOrigin="Anonymous",f.src=e,c.image=Yv(),s.put(i+e,l)}return l.texture}};w.createAmbientCubemap=function(e,t,A,r){e=e||{};var n=e.texture,i=Ae.firstNotNull(e.exposure,1),a=new Fv({intensity:Ae.firstNotNull(e.specularIntensity,1)}),s=new Uv({intensity:Ae.firstNotNull(e.diffuseIntensity,1),coefficients:[.844,.712,.691,-.037,.083,.167,.343,.288,.299,-.041,-.021,-.009,-.003,-.041,-.064,-.011,-.007,-.004,-.031,.034,.081,-.06,-.049,-.06,.046,.056,.05]});return a.cubemap=w.loadTexture(n,A,{exposure:i},function(){a.cubemap.flipY=!1,a.prefilter(t,32),s.coefficients=Kc.projectEnvironmentMap(t,a.cubemap,{lod:1}),r&&r()}),{specular:a,diffuse:s}};w.createBlankTexture=kt.createBlank;w.isImage=kc;w.additiveBlend=function(e){e.blendEquation(e.FUNC_ADD),e.blendFunc(e.SRC_ALPHA,e.ONE)};w.parseColor=function(e,t){return e instanceof Array?(t||(t=[]),t[0]=e[0],t[1]=e[1],t[2]=e[2],e.length>3?t[3]=e[3]:t[3]=1,t):(t=Bc(e||"#000",t)||[0,0,0,0],t[0]/=255,t[1]/=255,t[2]/=255,t)};w.directionFromAlphaBeta=function(e,t){var A=e/180*Math.PI+Math.PI/2,r=-t/180*Math.PI+Math.PI/2,n=[],i=Math.sin(A);return n[0]=i*Math.cos(r),n[1]=-Math.cos(A),n[2]=i*Math.sin(r),n};w.getShadowResolution=function(e){var t=1024;switch(e){case"low":t=512;break;case"medium":break;case"high":t=2048;break;case"ultra":t=4096;break}return t};w.COMMON_SHADERS=["lambert","color","realistic","hatching","shadow"];w.createShader=function(e){e==="ecgl.shadow"&&(e="ecgl.displayShadow");var t=K.source(e+".vertex"),A=K.source(e+".fragment");t||console.error("Vertex shader of '%s' not exits",e),A||console.error("Fragment shader of '%s' not exits",e);var r=new K(t,A);return r.name=e,r};w.createMaterial=function(e,t){t instanceof Array||(t=[t]);var A=w.createShader(e),r=new St({shader:A});return t.forEach(function(n){typeof n=="string"&&r.define(n)}),r};w.setMaterialFromModel=function(e,t,A,r){t.autoUpdateTextureStatus=!1;var n=A.getModel(e+"Material"),i=n.get("detailTexture"),a=Ae.firstNotNull(n.get("textureTiling"),1),s=Ae.firstNotNull(n.get("textureOffset"),0);typeof a=="number"&&(a=[a,a]),typeof s=="number"&&(s=[s,s]);var o=a[0]>1||a[1]>1?w.Texture.REPEAT:w.Texture.CLAMP_TO_EDGE,l={anisotropic:8,wrapS:o,wrapT:o};if(e==="realistic"){var u=n.get("roughness"),c=n.get("metalness");c!=null?isNaN(c)&&(t.setTextureImage("metalnessMap",c,r,l),c=Ae.firstNotNull(n.get("metalnessAdjust"),.5)):c=0,u!=null?isNaN(u)&&(t.setTextureImage("roughnessMap",u,r,l),u=Ae.firstNotNull(n.get("roughnessAdjust"),.5)):u=.5;var f=n.get("normalTexture");t.setTextureImage("detailMap",i,r,l),t.setTextureImage("normalMap",f,r,l),t.set({roughness:u,metalness:c,detailUvRepeat:a,detailUvOffset:s})}else if(e==="lambert")t.setTextureImage("detailMap",i,r,l),t.set({detailUvRepeat:a,detailUvOffset:s});else if(e==="color")t.setTextureImage("detailMap",i,r,l),t.set({detailUvRepeat:a,detailUvOffset:s});else if(e==="hatching"){var h=n.get("hatchingTextures")||[];h.length<6;for(var d=0;d<6;d++)t.setTextureImage("hatch"+(d+1),h[d],r,{anisotropic:8,wrapS:w.Texture.REPEAT,wrapT:w.Texture.REPEAT});t.set({detailUvRepeat:a,detailUvOffset:s})}};w.updateVertexAnimation=function(e,t,A,r){var n=r.get("animation"),i=r.get("animationDurationUpdate"),a=r.get("animationEasingUpdate"),s=A.shadowDepthMaterial;if(n&&t&&i>0&&t.geometry.vertexCount===A.geometry.vertexCount){A.material.define("vertex","VERTEX_ANIMATION"),A.ignorePreZ=!0,s&&s.define("vertex","VERTEX_ANIMATION");for(var o=0;o<e.length;o++)A.geometry.attributes[e[o][0]].value=t.geometry.attributes[e[o][1]].value;A.geometry.dirty(),A.__percent=0,A.material.set("percent",0),A.stopAnimation(),A.animate().when(i,{__percent:1}).during(function(){A.material.set("percent",A.__percent),s&&s.set("percent",A.__percent)}).done(function(){A.ignorePreZ=!1,A.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")}).start(a)}else A.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")};var me=function(e,t){this.id=e,this.zr=t;try{this.renderer=new bt({clearBit:0,devicePixelRatio:t.painter.dpr,preserveDrawingBuffer:!0,premultipliedAlpha:!0}),this.renderer.resize(t.painter.getWidth(),t.painter.getHeight())}catch(r){this.renderer=null,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute; left: 0; top: 0; right: 0; bottom: 0;",this.dom.className="ecgl-nowebgl",this.dom.innerHTML="Sorry, your browser does not support WebGL",console.error(r);return}this.onglobalout=this.onglobalout.bind(this),t.on("globalout",this.onglobalout),this.dom=this.renderer.canvas;var A=this.dom.style;A.position="absolute",A.left="0",A.top="0",this.views=[],this._picking=new Co({renderer:this.renderer}),this._viewsToDispose=[],this._accumulatingId=0,this._zrEventProxy=new wc({shape:{x:-1,y:-1,width:2,height:2},__isGLToZRProxy:!0}),this._backgroundColor=null,this._disposed=!1};me.prototype.setUnpainted=function(){};me.prototype.addView=function(e){if(e.layer!==this){var t=this._viewsToDispose.indexOf(e);t>=0&&this._viewsToDispose.splice(t,1),this.views.push(e),e.layer=this;var A=this.zr;e.scene.traverse(function(r){r.__zr=A,r.addAnimatorsToZr&&r.addAnimatorsToZr(A)})}};function Wc(e){var t=e.__zr;e.__zr=null,t&&e.removeAnimatorsFromZr&&e.removeAnimatorsFromZr(t)}me.prototype.removeView=function(e){if(e.layer===this){var t=this.views.indexOf(e);t>=0&&(this.views.splice(t,1),e.scene.traverse(Wc,this),e.layer=null,this._viewsToDispose.push(e))}};me.prototype.removeViewsAll=function(){this.views.forEach(function(e){e.scene.traverse(Wc,this),e.layer=null,this._viewsToDispose.push(e)},this),this.views.length=0};me.prototype.resize=function(e,t){var A=this.renderer;A.resize(e,t)};me.prototype.clear=function(){var e=this.renderer.gl,t=this._backgroundColor||[0,0,0,0];e.clearColor(t[0],t[1],t[2],t[3]),e.depthMask(!0),e.colorMask(!0,!0,!0,!0),e.clear(e.DEPTH_BUFFER_BIT|e.COLOR_BUFFER_BIT)};me.prototype.clearDepth=function(){var e=this.renderer.gl;e.clear(e.DEPTH_BUFFER_BIT)};me.prototype.clearColor=function(){var e=this.renderer.gl;e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT)};me.prototype.needsRefresh=function(){this.zr.refresh()};me.prototype.refresh=function(e){this._backgroundColor=e?w.parseColor(e):[0,0,0,0],this.renderer.clearColor=this._backgroundColor;for(var t=0;t<this.views.length;t++)this.views[t].prepareRender(this.renderer);this._doRender(!1),this._trackAndClean();for(var t=0;t<this._viewsToDispose.length;t++)this._viewsToDispose[t].dispose(this.renderer);this._viewsToDispose.length=0,this._startAccumulating()};me.prototype.renderToCanvas=function(e){this._startAccumulating(!0),e.drawImage(this.dom,0,0,e.canvas.width,e.canvas.height)};me.prototype._doRender=function(e){this.clear(),this.renderer.saveViewport();for(var t=0;t<this.views.length;t++)this.views[t].render(this.renderer,e);this.renderer.restoreViewport()};me.prototype._stopAccumulating=function(){this._accumulatingId=0,clearTimeout(this._accumulatingTimeout)};var Zv=1;me.prototype._startAccumulating=function(e){var t=this;this._stopAccumulating();for(var A=!1,r=0;r<this.views.length;r++)A=this.views[r].needsAccumulate()||A;if(!A)return;function n(i){if(!(!t._accumulatingId||i!==t._accumulatingId)){for(var a=!0,s=0;s<t.views.length;s++)a=t.views[s].isAccumulateFinished()&&A;a||(t._doRender(!0),e?n(i):Qs(function(){n(i)}))}}this._accumulatingId=Zv++,e?n(t._accumulatingId):this._accumulatingTimeout=setTimeout(function(){n(t._accumulatingId)},50)};me.prototype._trackAndClean=function(){var e=[],t=[];this._textureList&&(Gi(this._textureList),Gi(this._geometriesList));for(var A=0;A<this.views.length;A++)Jv(this.views[A].scene,e,t);this._textureList&&(Vi(this.renderer,this._textureList),Vi(this.renderer,this._geometriesList)),this._textureList=e,this._geometriesList=t};function Gi(e){for(var t=0;t<e.length;t++)e[t].__used__=0}function Vi(e,t){for(var A=0;A<t.length;A++)t[A].__used__||t[A].dispose(e)}function ri(e,t){e.__used__=e.__used__||0,e.__used__++,e.__used__===1&&t.push(e)}function Jv(e,t,A){var r,n;e.traverse(function(a){if(a.isRenderable()){var s=a.geometry,o=a.material;if(o!==r)for(var l=o.getTextureUniforms(),u=0;u<l.length;u++){var c=l[u],f=o.uniforms[c].value;if(f){if(f instanceof P)ri(f,t);else if(f instanceof Array)for(var h=0;h<f.length;h++)f[h]instanceof P&&ri(f[h],t)}}s!==n&&ri(s,A),r=o,n=s}});for(var i=0;i<e.lights.length;i++)e.lights[i].cubemap&&ri(e.lights[i].cubemap,t)}me.prototype.dispose=function(){this._disposed||(this._stopAccumulating(),this._textureList&&(Gi(this._textureList),Gi(this._geometriesList),Vi(this.renderer,this._textureList),Vi(this.renderer,this._geometriesList)),this.zr.off("globalout",this.onglobalout),this._disposed=!0)};me.prototype.onmousedown=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mousedown",e,t),this._dispatchDataEvent("mousedown",e,t)),this._downX=e.offsetX,this._downY=e.offsetY}};me.prototype.onmousemove=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY),A=t&&t.target,r=this._hovered;this._hovered=t,r&&A!==r.target&&(r.relatedTarget=A,this._dispatchEvent("mouseout",e,r),this.zr.setCursorStyle("default")),this._dispatchEvent("mousemove",e,t),t&&(this.zr.setCursorStyle("pointer"),(!r||A!==r.target)&&this._dispatchEvent("mouseover",e,t)),this._dispatchDataEvent("mousemove",e,t)}};me.prototype.onmouseup=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mouseup",e,t),this._dispatchDataEvent("mouseup",e,t)),this._upX=e.offsetX,this._upY=e.offsetY}};me.prototype.onclick=me.prototype.dblclick=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){var t=this._upX-this._downX,A=this._upY-this._downY;if(!(Math.sqrt(t*t+A*A)>20)){e=e.event;var r=this.pickObject(e.offsetX,e.offsetY);r&&(this._dispatchEvent(e.type,e,r),this._dispatchDataEvent(e.type,e,r));var n=this._clickToSetFocusPoint(e);if(n){var i=n.view.setDOFFocusOnPoint(n.distance);i&&this.zr.refresh()}}}};me.prototype._clickToSetFocusPoint=function(e){for(var t=this.renderer,A=t.viewport,r=this.views.length-1;r>=0;r--){var n=this.views[r];if(n.hasDOF()&&n.containPoint(e.offsetX,e.offsetY)){this._picking.scene=n.scene,this._picking.camera=n.camera,t.viewport=n.viewport;var i=this._picking.pick(e.offsetX,e.offsetY,!0);if(i)return i.view=n,i}}t.viewport=A};me.prototype.onglobalout=function(e){var t=this._hovered;t&&this._dispatchEvent("mouseout",e,{target:t.target})};me.prototype.pickObject=function(e,t){for(var A=[],r=this.renderer,n=r.viewport,i=0;i<this.views.length;i++){var a=this.views[i];a.containPoint(e,t)&&(this._picking.scene=a.scene,this._picking.camera=a.camera,r.viewport=a.viewport,this._picking.pickAll(e,t,A))}return r.viewport=n,A.sort(function(s,o){return s.distance-o.distance}),A[0]};me.prototype._dispatchEvent=function(e,t,A){A||(A={});var r=A.target;for(A.cancelBubble=!1,A.event=t,A.type=e,A.offsetX=t.offsetX,A.offsetY=t.offsetY;r&&(r.trigger(e,A),r=r.getParent(),!A.cancelBubble););this._dispatchToView(e,A)};me.prototype._dispatchDataEvent=function(e,t,A){var r=A&&A.target,n=r&&r.dataIndex,i=r&&r.seriesIndex,a=r&&r.eventData,s=!1,o=this._zrEventProxy;o.x=t.offsetX,o.y=t.offsetY,o.update();var l={target:o};const u=xd(o);e==="mousemove"&&(n!=null?n!==this._lastDataIndex&&(parseInt(this._lastDataIndex,10)>=0&&(u.dataIndex=this._lastDataIndex,u.seriesIndex=this._lastSeriesIndex,this.zr.handler.dispatchToElement(l,"mouseout",t)),s=!0):a!=null&&a!==this._lastEventData&&(this._lastEventData!=null&&(u.eventData=this._lastEventData,this.zr.handler.dispatchToElement(l,"mouseout",t)),s=!0),this._lastEventData=a,this._lastDataIndex=n,this._lastSeriesIndex=i),u.eventData=a,u.dataIndex=n,u.seriesIndex=i,(a!=null||parseInt(n,10)>=0&&parseInt(i,10)>=0)&&(this.zr.handler.dispatchToElement(l,e,t),s&&this.zr.handler.dispatchToElement(l,"mouseover",t))};me.prototype._dispatchToView=function(e,t){for(var A=0;A<this.views.length;A++)this.views[A].containPoint(t.offsetX,t.offsetY)&&this.views[A].trigger(e,t)};Object.assign(me.prototype,xo);var jv=["bar3D","line3D","map3D","scatter3D","surface","lines3D","scatterGL","scatter3D"];function sn(e,t){if(e&&e[t]&&(e[t].normal||e[t].emphasis)){var A=e[t].normal,r=e[t].emphasis;A&&(e[t]=A),r&&(e.emphasis=e.emphasis||{},e.emphasis[t]=r)}}function qv(e){sn(e,"itemStyle"),sn(e,"lineStyle"),sn(e,"areaStyle"),sn(e,"label")}function ni(e){e&&(e instanceof Array||(e=[e]),Yt(e,function(t){if(t.axisLabel){var A=t.axisLabel;Object.assign(A,A.textStyle),A.textStyle=null}}))}function $v(e){Yt(e.series,function(t){Cd(jv,t.type)>=0&&(qv(t),t.coordinateSystem==="mapbox"&&(t.coordinateSystem="mapbox3D",e.mapbox3D=e.mapbox))}),ni(e.xAxis3D),ni(e.yAxis3D),ni(e.zAxis3D),ni(e.grid3D),sn(e.geo3D)}function Xc(e){this._layers={},this._zr=e}Xc.prototype.update=function(e,t){var A=this,r=t.getZr();if(!r.getWidth()||!r.getHeight()){console.warn("Dom has no width or height");return}function n(s){r.setSleepAfterStill(0);var o;s.coordinateSystem&&s.coordinateSystem.model,o=s.get("zlevel");var l=A._layers,u=l[o];if(!u){if(u=l[o]=new me("gl-"+o,r),r.painter.isSingleCanvas()){u.virtual=!0;var c=new Ud({z:1e4,style:{image:u.renderer.canvas},silent:!0});u.__hostImage=c,r.add(c)}r.painter.insertLayer(o,u)}return u.__hostImage&&u.__hostImage.setStyle({width:u.renderer.getWidth(),height:u.renderer.getHeight()}),u}function i(s,o){s&&s.traverse(function(l){l.isRenderable&&l.isRenderable()&&(l.ignorePicking=l.$ignorePicking!=null?l.$ignorePicking:o)})}for(var a in this._layers)this._layers[a].removeViewsAll();e.eachComponent(function(s,o){if(s!=="series"){var l=t.getViewOfComponentModel(o),u=o.coordinateSystem;if(l.__ecgl__){var c;if(u){if(!u.viewGL){console.error("Can't find viewGL in coordinateSystem of component "+o.id);return}c=u.viewGL}else{if(!o.viewGL){console.error("Can't find viewGL of component "+o.id);return}c=u.viewGL}var c=u.viewGL,f=n(o);f.addView(c),l.afterRender&&l.afterRender(o,e,t,f),i(l.groupGL,o.get("silent"))}}}),e.eachSeries(function(s){var o=t.getViewOfSeriesModel(s),l=s.coordinateSystem;if(o.__ecgl__){if(l&&!l.viewGL&&!o.viewGL){console.error("Can't find viewGL of series "+o.id);return}var u=l&&l.viewGL||o.viewGL,c=n(s);c.addView(u),o.afterRender&&o.afterRender(s,e,t,c),i(o.groupGL,s.get("silent"))}})};Ed(function(e){var t=e.getZr(),A=t.painter.dispose;t.painter.dispose=function(){typeof this.eachOtherLayer=="function"&&this.eachOtherLayer(function(r){r instanceof me&&r.dispose()}),A.call(this)},t.painter.getRenderedCanvas=function(r){if(r=r||{},this._singleCanvas)return this._layers[0].dom;var n=document.createElement("canvas"),i=r.pixelRatio||this.dpr;n.width=this.getWidth()*i,n.height=this.getHeight()*i;var a=n.getContext("2d");a.dpr=i,a.clearRect(0,0,n.width,n.height),r.backgroundColor&&(a.fillStyle=r.backgroundColor,a.fillRect(0,0,n.width,n.height));var s=this.storage.getDisplayList(!0),o={},l,u=this;function c(g,v){var p=u._zlevelList;g==null&&(g=-1/0);for(var m,B=0;B<p.length;B++){var _=p[B],x=u._layers[_];if(!x.__builtin__&&_>g&&_<v){m=x;break}}m&&m.renderToCanvas&&(a.save(),m.renderToCanvas(a),a.restore())}for(var f={ctx:a},h=0;h<s.length;h++){var d=s[h];d.zlevel!==l&&(c(l,d.zlevel),l=d.zlevel),this._doPaintEl(d,f,!0,null,o)}return c(l,1/0),n}});Td(function(e,t){var A=t.getZr(),r=A.__egl=A.__egl||new Xc(A);r.update(e,t)});Fd($v);const ma={defaultOption:{viewControl:{projection:"perspective",autoRotate:!1,autoRotateDirection:"cw",autoRotateSpeed:10,autoRotateAfterStill:3,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",distance:150,minDistance:40,maxDistance:400,orthographicSize:150,maxOrthographicSize:400,minOrthographicSize:20,center:[0,0,0],alpha:0,beta:0,minAlpha:-90,maxAlpha:90}},setView:function(e){e=e||{},this.option.viewControl=this.option.viewControl||{},e.alpha!=null&&(this.option.viewControl.alpha=e.alpha),e.beta!=null&&(this.option.viewControl.beta=e.beta),e.distance!=null&&(this.option.viewControl.distance=e.distance),e.center!=null&&(this.option.viewControl.center=e.center)}},Or={defaultOption:{postEffect:{enable:!1,bloom:{enable:!0,intensity:.1},depthOfField:{enable:!1,focalRange:20,focalDistance:50,blurRadius:10,fstop:2.8,quality:"medium"},screenSpaceAmbientOcclusion:{enable:!1,radius:2,quality:"medium",intensity:1},screenSpaceReflection:{enable:!1,quality:"medium",maxRoughness:.8},colorCorrection:{enable:!0,exposure:0,brightness:0,contrast:1,saturation:1,lookupTexture:""},edge:{enable:!1},FXAA:{enable:!1}},temporalSuperSampling:{enable:"auto"}}},Pr={defaultOption:{light:{main:{shadow:!1,shadowQuality:"high",color:"#fff",intensity:1,alpha:0,beta:0},ambient:{color:"#fff",intensity:.2},ambientCubemap:{texture:null,exposure:1,diffuseIntensity:.5,specularIntensity:.5}}}};var _a=Hr.extend({type:"grid3D",dependencies:["xAxis3D","yAxis3D","zAxis3D"],defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",boxWidth:100,boxHeight:100,boxDepth:100,axisPointer:{show:!0,lineStyle:{color:"rgba(0, 0, 0, 0.8)",width:1},label:{show:!0,formatter:null,margin:8,textStyle:{fontSize:14,color:"#fff",backgroundColor:"rgba(0,0,0,0.5)",padding:3,borderRadius:3}}},axisLine:{show:!0,lineStyle:{color:"#333",width:2,type:"solid"}},axisTick:{show:!0,inside:!1,length:3,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,margin:8,textStyle:{fontSize:12}},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}},light:{main:{alpha:30,beta:40},ambient:{intensity:.4}},viewControl:{alpha:20,beta:40,autoRotate:!1,distance:200,minDistance:40,maxDistance:400}}});he(_a.prototype,ma);he(_a.prototype,Or);he(_a.prototype,Pr);var qr=Ae.firstNotNull,Ml={left:0,middle:1,right:2};function Rl(e){return e instanceof Array||(e=[e,e]),e}var Gn=tt.extend(function(){return{zr:null,viewGL:null,_center:new L,minDistance:.5,maxDistance:1.5,maxOrthographicSize:300,minOrthographicSize:30,minAlpha:-90,maxAlpha:90,minBeta:-1/0,maxBeta:1/0,autoRotateAfterStill:0,autoRotateDirection:"cw",autoRotateSpeed:60,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",_mode:"rotate",_camera:null,_needsUpdate:!1,_rotating:!1,_phi:0,_theta:0,_mouseX:0,_mouseY:0,_rotateVelocity:new J,_panVelocity:new J,_distance:500,_zoomSpeed:0,_stillTimeout:0,_animators:[]}},function(){["_mouseDownHandler","_mouseWheelHandler","_mouseMoveHandler","_mouseUpHandler","_pinchHandler","_contextMenuHandler","_update"].forEach(function(e){this[e]=this[e].bind(this)},this)},{init:function(){var e=this.zr;e&&(e.on("mousedown",this._mouseDownHandler),e.on("globalout",this._mouseUpHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("pinch",this._pinchHandler),e.animation.on("frame",this._update),e.dom.addEventListener("contextmenu",this._contextMenuHandler))},dispose:function(){var e=this.zr;e&&(e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("pinch",this._pinchHandler),e.off("globalout",this._mouseUpHandler),e.dom.removeEventListener("contextmenu",this._contextMenuHandler),e.animation.off("frame",this._update)),this.stopAllAnimation()},getDistance:function(){return this._distance},setDistance:function(e){this._distance=e,this._needsUpdate=!0},getOrthographicSize:function(){return this._orthoSize},setOrthographicSize:function(e){this._orthoSize=e,this._needsUpdate=!0},getAlpha:function(){return this._theta/Math.PI*180},getBeta:function(){return-this._phi/Math.PI*180},getCenter:function(){return this._center.toArray()},setAlpha:function(e){e=Math.max(Math.min(this.maxAlpha,e),this.minAlpha),this._theta=e/180*Math.PI,this._needsUpdate=!0},setBeta:function(e){e=Math.max(Math.min(this.maxBeta,e),this.minBeta),this._phi=-e/180*Math.PI,this._needsUpdate=!0},setCenter:function(e){this._center.setArray(e)},setViewGL:function(e){this.viewGL=e},getCamera:function(){return this.viewGL.camera},setFromViewControlModel:function(e,t){t=t||{};var A=t.baseDistance||0,r=t.baseOrthoSize||1,n=e.get("projection");n!=="perspective"&&n!=="orthographic"&&n!=="isometric"&&(n="perspective"),this._projection=n,this.viewGL.setProjection(n);var i=e.get("distance")+A,a=e.get("orthographicSize")+r;[["damping",.8],["autoRotate",!1],["autoRotateAfterStill",3],["autoRotateDirection","cw"],["autoRotateSpeed",10],["minDistance",30],["maxDistance",400],["minOrthographicSize",30],["maxOrthographicSize",300],["minAlpha",-90],["maxAlpha",90],["minBeta",-1/0],["maxBeta",1/0],["rotateSensitivity",1],["zoomSensitivity",1],["panSensitivity",1],["panMouseButton","left"],["rotateMouseButton","middle"]].forEach(function(f){this[f[0]]=qr(e.get(f[0]),f[1])},this),this.minDistance+=A,this.maxDistance+=A,this.minOrthographicSize+=r,this.maxOrthographicSize+=r;var s=e.ecModel,o={};["animation","animationDurationUpdate","animationEasingUpdate"].forEach(function(f){o[f]=qr(e.get(f),s&&s.get(f))});var l=qr(t.alpha,e.get("alpha"))||0,u=qr(t.beta,e.get("beta"))||0,c=qr(t.center,e.get("center"))||[0,0,0];o.animation&&o.animationDurationUpdate>0&&this._notFirst?this.animateTo({alpha:l,beta:u,center:c,distance:i,orthographicSize:a,easing:o.animationEasingUpdate,duration:o.animationDurationUpdate}):(this.setDistance(i),this.setAlpha(l),this.setBeta(u),this.setCenter(c),this.setOrthographicSize(a)),this._notFirst=!0,this._validateProperties()},_validateProperties:function(){},animateTo:function(e){var t=this.zr,A=this,r={},n={};return e.distance!=null&&(r.distance=this.getDistance(),n.distance=e.distance),e.orthographicSize!=null&&(r.orthographicSize=this.getOrthographicSize(),n.orthographicSize=e.orthographicSize),e.alpha!=null&&(r.alpha=this.getAlpha(),n.alpha=e.alpha),e.beta!=null&&(r.beta=this.getBeta(),n.beta=e.beta),e.center!=null&&(r.center=this.getCenter(),n.center=e.center),this._addAnimator(t.animation.animate(r).when(e.duration||1e3,n).during(function(){r.alpha!=null&&A.setAlpha(r.alpha),r.beta!=null&&A.setBeta(r.beta),r.distance!=null&&A.setDistance(r.distance),r.center!=null&&A.setCenter(r.center),r.orthographicSize!=null&&A.setOrthographicSize(r.orthographicSize),A._needsUpdate=!0})).start(e.easing||"linear")},stopAllAnimation:function(){for(var e=0;e<this._animators.length;e++)this._animators[e].stop();this._animators.length=0},update:function(){this._needsUpdate=!0,this._update(20)},_isAnimating:function(){return this._animators.length>0},_update:function(e){if(this._rotating){var t=(this.autoRotateDirection==="cw"?1:-1)*this.autoRotateSpeed/180*Math.PI;this._phi-=t*e/1e3,this._needsUpdate=!0}else this._rotateVelocity.len()>0&&(this._needsUpdate=!0);(Math.abs(this._zoomSpeed)>.1||this._panVelocity.len()>0)&&(this._needsUpdate=!0),this._needsUpdate&&(e=Math.min(e,50),this._updateDistanceOrSize(e),this._updatePan(e),this._updateRotate(e),this._updateTransform(),this.getCamera().update(),this.zr&&this.zr.refresh(),this.trigger("update"),this._needsUpdate=!1)},_updateRotate:function(e){var t=this._rotateVelocity;this._phi=t.y*e/20+this._phi,this._theta=t.x*e/20+this._theta,this.setAlpha(this.getAlpha()),this.setBeta(this.getBeta()),this._vectorDamping(t,Math.pow(this.damping,e/16))},_updateDistanceOrSize:function(e){this._projection==="perspective"?this._setDistance(this._distance+this._zoomSpeed*e/20):this._setOrthoSize(this._orthoSize+this._zoomSpeed*e/20),this._zoomSpeed*=Math.pow(this.damping,e/16)},_setDistance:function(e){this._distance=Math.max(Math.min(e,this.maxDistance),this.minDistance)},_setOrthoSize:function(e){this._orthoSize=Math.max(Math.min(e,this.maxOrthographicSize),this.minOrthographicSize);var t=this.getCamera(),A=this._orthoSize,r=A/this.viewGL.viewport.height*this.viewGL.viewport.width;t.left=-r/2,t.right=r/2,t.top=A/2,t.bottom=-A/2},_updatePan:function(e){var t=this._panVelocity,A=this._distance,r=this.getCamera(),n=r.worldTransform.y,i=r.worldTransform.x;this._center.scaleAndAdd(i,-t.x*A/200).scaleAndAdd(n,-t.y*A/200),this._vectorDamping(t,0)},_updateTransform:function(){var e=this.getCamera(),t=new L,A=this._theta+Math.PI/2,r=this._phi+Math.PI/2,n=Math.sin(A);t.x=n*Math.cos(r),t.y=-Math.cos(A),t.z=n*Math.sin(r),e.position.copy(this._center).scaleAndAdd(t,this._distance),e.rotation.identity().rotateY(-this._phi).rotateX(-this._theta)},_startCountingStill:function(){clearTimeout(this._stillTimeout);var e=this.autoRotateAfterStill,t=this;!isNaN(e)&&e>0&&(this._stillTimeout=setTimeout(function(){t._rotating=!0},e*1e3))},_vectorDamping:function(e,t){var A=e.len();A=A*t,A<1e-4&&(A=0),e.normalize().scale(A)},_decomposeTransform:function(){if(this.getCamera()){this.getCamera().updateWorldTransform();var e=this.getCamera().worldTransform.z,t=Math.asin(e.y),A=Math.atan2(e.x,e.z);this._theta=t,this._phi=-A,this.setBeta(this.getBeta()),this.setAlpha(this.getAlpha()),this.getCamera().aspect?this._setDistance(this.getCamera().position.dist(this._center)):this._setOrthoSize(this.getCamera().top-this.getCamera().bottom)}},_mouseDownHandler:function(e){if(!e.target&&!this._isAnimating()){var t=e.offsetX,A=e.offsetY;this.viewGL&&!this.viewGL.containPoint(t,A)||(this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler),e.event.targetTouches?e.event.targetTouches.length===1&&(this._mode="rotate"):e.event.button===Ml[this.rotateMouseButton]?this._mode="rotate":e.event.button===Ml[this.panMouseButton]?this._mode="pan":this._mode="",this._rotateVelocity.set(0,0),this._rotating=!1,this.autoRotate&&this._startCountingStill(),this._mouseX=e.offsetX,this._mouseY=e.offsetY)}},_mouseMoveHandler:function(e){if(!(e.target&&e.target.__isGLToZRProxy)&&!this._isAnimating()){var t=Rl(this.panSensitivity),A=Rl(this.rotateSensitivity);this._mode==="rotate"?(this._rotateVelocity.y=(e.offsetX-this._mouseX)/this.zr.getHeight()*2*A[0],this._rotateVelocity.x=(e.offsetY-this._mouseY)/this.zr.getWidth()*2*A[1]):this._mode==="pan"&&(this._panVelocity.x=(e.offsetX-this._mouseX)/this.zr.getWidth()*t[0]*400,this._panVelocity.y=(-e.offsetY+this._mouseY)/this.zr.getHeight()*t[1]*400),this._mouseX=e.offsetX,this._mouseY=e.offsetY,e.event.preventDefault()}},_mouseWheelHandler:function(e){if(!this._isAnimating()){var t=e.event.wheelDelta||-e.event.detail;this._zoomHandler(e,t)}},_pinchHandler:function(e){this._isAnimating()||(this._zoomHandler(e,e.pinchScale>1?1:-1),this._mode="")},_zoomHandler:function(e,t){if(t!==0){var A=e.offsetX,r=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(A,r))){var n;this._projection==="perspective"?n=Math.max(Math.max(Math.min(this._distance-this.minDistance,this.maxDistance-this._distance))/20,.5):n=Math.max(Math.max(Math.min(this._orthoSize-this.minOrthographicSize,this.maxOrthographicSize-this._orthoSize))/20,.5),this._zoomSpeed=(t>0?-1:1)*n*this.zoomSensitivity,this._rotating=!1,this.autoRotate&&this._mode==="rotate"&&this._startCountingStill(),e.event.preventDefault()}}},_mouseUpHandler:function(){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_isRightMouseButtonUsed:function(){return this.rotateMouseButton==="right"||this.panMouseButton==="right"},_contextMenuHandler:function(e){this._isRightMouseButtonUsed()&&e.preventDefault()},_addAnimator:function(e){var t=this._animators;return t.push(e),e.done(function(){var A=t.indexOf(e);A>=0&&t.splice(A,1)}),e}});Object.defineProperty(Gn.prototype,"autoRotate",{get:function(e){return this._autoRotate},set:function(e){this._autoRotate=e,this._rotating=e}});const Vn={convertToDynamicArray:function(e){e&&this.resetOffset();var t=this.attributes;for(var A in t)e||!t[A].value?t[A].value=[]:t[A].value=Array.prototype.slice.call(t[A].value);e||!this.indices?this.indices=[]:this.indices=Array.prototype.slice.call(this.indices)},convertToTypedArray:function(){var e=this.attributes;for(var t in e)e[t].value&&e[t].value.length>0?e[t].value=new Float32Array(e[t].value):e[t].value=null;this.indices&&this.indices.length>0&&(this.indices=this.vertexCount>65535?new Uint32Array(this.indices):new Uint16Array(this.indices)),this.dirty()}},Le={vec2:O,vec3:C,vec4:M,mat2:se,mat2d:ce,mat3:Z,mat4:R,quat:k};var qa=Le.vec3,Nl=[[0,0],[1,1]],QA=re.extend(function(){return{segmentScale:1,dynamic:!0,useNativeLine:!0,attributes:{position:new re.Attribute("position","float",3,"POSITION"),positionPrev:new re.Attribute("positionPrev","float",3),positionNext:new re.Attribute("positionNext","float",3),prevPositionPrev:new re.Attribute("prevPositionPrev","float",3),prevPosition:new re.Attribute("prevPosition","float",3),prevPositionNext:new re.Attribute("prevPositionNext","float",3),offset:new re.Attribute("offset","float",1),color:new re.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.positionPrev.init(e),t.positionNext.init(e),t.offset.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,A,r){var n=qa.dist(e,t)+qa.dist(A,t)+qa.dist(r,A),i=1/(n+1)*this.segmentScale;return i},getCubicCurveVertexCount:function(e,t,A,r){var n=this._getCubicCurveApproxStep(e,t,A,r),i=Math.ceil(1/n);return this.useNativeLine?i*2:i*2+2},getCubicCurveTriangleCount:function(e,t,A,r){var n=this._getCubicCurveApproxStep(e,t,A,r),i=Math.ceil(1/n);return this.useNativeLine?0:i*2},getLineVertexCount:function(){return this.getPolylineVertexCount(Nl)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(Nl)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var A=typeof e[0]!="number";t=A?e.length:e.length/3}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var A=typeof e[0]!="number";t=A?e.length:e.length/3}return this.useNativeLine?0:Math.max(t-1,0)*2},addCubicCurve:function(e,t,A,r,n,i){i==null&&(i=1);for(var a=e[0],s=e[1],o=e[2],l=t[0],u=t[1],c=t[2],f=A[0],h=A[1],d=A[2],g=r[0],v=r[1],p=r[2],m=this._getCubicCurveApproxStep(e,t,A,r),B=m*m,_=B*m,x=3*m,y=3*B,T=6*B,E=6*_,F=a-l*2+f,S=s-u*2+h,U=o-c*2+d,I=(l-f)*3-a+g,Q=(u-h)*3-s+v,b=(c-d)*3-o+p,N=a,H=s,V=o,G=(l-a)*x+F*y+I*_,j=(u-s)*x+S*y+Q*_,W=(c-o)*x+U*y+b*_,ne=F*T+I*E,ee=S*T+Q*E,ie=U*T+b*E,te=I*E,q=Q*E,Be=b*E,ge=0,Ue=0,rt=Math.ceil(1/m),Je=new Float32Array((rt+1)*3),Je=[],Ke=0,Ue=0;Ue<rt+1;Ue++)Je[Ke++]=N,Je[Ke++]=H,Je[Ke++]=V,N+=G,H+=j,V+=W,G+=ne,j+=ee,W+=ie,ne+=te,ee+=q,ie+=Be,ge+=m,ge>1&&(N=G>0?Math.min(N,g):Math.max(N,g),H=j>0?Math.min(H,v):Math.max(H,v),V=W>0?Math.min(V,p):Math.max(V,p));return this.addPolyline(Je,n,i)},addLine:function(e,t,A,r){return this.addPolyline([e,t],A,r)},addPolyline:function(e,t,A,r,n){if(e.length){var i=typeof e[0]!="number";if(n==null&&(n=i?e.length:e.length/3),!(n<2)){r==null&&(r=0),A==null&&(A=1),this._itemVertexOffsets.push(this._vertexOffset);var i=typeof e[0]!="number",a=i?typeof t[0]!="number":t.length/4===n,s=this.attributes.position,o=this.attributes.positionPrev,l=this.attributes.positionNext,u=this.attributes.color,c=this.attributes.offset,f=this.indices,h=this._vertexOffset,d,g;A=Math.max(A,.01);for(var v=r;v<n;v++){if(i)d=e[v],a?g=t[v]:g=t;else{var p=v*3;if(d=d||[],d[0]=e[p],d[1]=e[p+1],d[2]=e[p+2],a){var m=v*4;g=g||[],g[0]=t[m],g[1]=t[m+1],g[2]=t[m+2],g[3]=t[m+3]}else g=t}if(this.useNativeLine?v>1&&(s.copy(h,h-1),u.copy(h,h-1),h++):(v<n-1&&(o.set(h+2,d),o.set(h+3,d)),v>0&&(l.set(h-2,d),l.set(h-1,d)),s.set(h,d),s.set(h+1,d),u.set(h,g),u.set(h+1,g),c.set(h,A/2),c.set(h+1,-A/2),h+=2),this.useNativeLine)u.set(h,g),s.set(h,d),h++;else if(v>0){var B=this._triangleOffset*3,f=this.indices;f[B]=h-4,f[B+1]=h-3,f[B+2]=h-2,f[B+3]=h-3,f[B+4]=h-1,f[B+5]=h-2,this._triangleOffset+=2}}if(!this.useNativeLine){var _=this._vertexOffset,x=this._vertexOffset+n*2;o.copy(_,_+2),o.copy(_+1,_+3),l.copy(x-1,x-3),l.copy(x-2,x-4)}return this._vertexOffset=h,this._vertexOffset}}},setItemColor:function(e,t){for(var A=this._itemVertexOffsets[e],r=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,n=A;n<r;n++)this.attributes.color.set(n,t);this.dirty("color")},currentTriangleOffset:function(){return this._triangleOffset},currentVertexOffset:function(){return this._vertexOffset}});SA(QA.prototype,Vn);function Ki(e,t,A,r,n,i,a){this._zr=e,this._x=0,this._y=0,this._rowHeight=0,this.width=r,this.height=n,this.offsetX=t,this.offsetY=A,this.dpr=a,this.gap=i}Ki.prototype={constructor:Ki,clear:function(){this._x=0,this._y=0,this._rowHeight=0},add:function(e,t,A){var r=e.getBoundingRect();t==null&&(t=r.width),A==null&&(A=r.height),t*=this.dpr,A*=this.dpr,this._fitElement(e,t,A);var n=this._x,i=this._y,a=this.width*this.dpr,s=this.height*this.dpr,o=this.gap;if(n+t+o>a&&(n=this._x=0,i+=this._rowHeight+o,this._y=i,this._rowHeight=0),this._x+=t+o,this._rowHeight=Math.max(this._rowHeight,A),i+A+o>s)return null;e.x+=this.offsetX*this.dpr+n,e.y+=this.offsetY*this.dpr+i,this._zr.add(e);var l=[this.offsetX/this.width,this.offsetY/this.height],u=[[n/a+l[0],i/s+l[1]],[(n+t)/a+l[0],(i+A)/s+l[1]]];return u},_fitElement:function(e,t,A){var r=e.getBoundingRect(),n=t/r.width,i=A/r.height;e.x=-r.x*n,e.y=-r.y*i,e.scaleX=n,e.scaleY=i,e.update()}};function zi(e){e=e||{},e.width=e.width||512,e.height=e.height||512,e.devicePixelRatio=e.devicePixelRatio||1,e.gap=e.gap==null?2:e.gap;var t=document.createElement("canvas");t.width=e.width*e.devicePixelRatio,t.height=e.height*e.devicePixelRatio,this._canvas=t,this._texture=new $({image:t,flipY:!1});var A=this;this._zr=Sd(t);var r=this._zr.refreshImmediately;this._zr.refreshImmediately=function(){r.call(this),A._texture.dirty(),A.onupdate&&A.onupdate()},this._dpr=e.devicePixelRatio,this._coords={},this.onupdate=e.onupdate,this._gap=e.gap,this._textureAtlasNodes=[new Ki(this._zr,0,0,e.width,e.height,this._gap,this._dpr)],this._nodeWidth=e.width,this._nodeHeight=e.height,this._currentNodeIdx=0}zi.prototype={clear:function(){for(var e=0;e<this._textureAtlasNodes.length;e++)this._textureAtlasNodes[e].clear();this._currentNodeIdx=0,this._zr.clear(),this._coords={}},getWidth:function(){return this._width},getHeight:function(){return this._height},getTexture:function(){return this._texture},getDevicePixelRatio:function(){return this._dpr},getZr:function(){return this._zr},_getCurrentNode:function(){return this._textureAtlasNodes[this._currentNodeIdx]},_expand:function(){if(this._currentNodeIdx++,this._textureAtlasNodes[this._currentNodeIdx])return this._textureAtlasNodes[this._currentNodeIdx];var e=4096/this._dpr,t=this._textureAtlasNodes,A=t.length,r=A*this._nodeWidth%e,n=Math.floor(A*this._nodeWidth/e)*this._nodeHeight;if(!(n>=e)){var i=(r+this._nodeWidth)*this._dpr,a=(n+this._nodeHeight)*this._dpr;try{this._zr.resize({width:i,height:a})}catch{this._canvas.width=i,this._canvas.height=a}var s=new Ki(this._zr,r,n,this._nodeWidth,this._nodeHeight,this._gap,this._dpr);return this._textureAtlasNodes.push(s),s}},add:function(e,t,A){if(this._coords[e.id])return this._coords[e.id];var r=this._getCurrentNode().add(e,t,A);if(!r){var n=this._expand();if(!n)return;r=n.add(e,t,A)}return this._coords[e.id]=r,r},getCoordsScale:function(){var e=this._dpr;return[this._nodeWidth/this._canvas.width*e,this._nodeHeight/this._canvas.height*e]},getCoords:function(e){return this._coords[e]},dispose:function(){this._zr.dispose()}};function FA(){}FA.prototype={constructor:FA,setScene:function(e){this._scene=e,this._skybox&&this._skybox.attachScene(this._scene)},initLight:function(e){this._lightRoot=e,this.mainLight=new w.DirectionalLight({shadowBias:.005}),this.ambientLight=new w.AmbientLight,e.add(this.mainLight),e.add(this.ambientLight)},dispose:function(){this._lightRoot&&(this._lightRoot.remove(this.mainLight),this._lightRoot.remove(this.ambientLight))},updateLight:function(e){var t=this.mainLight,A=this.ambientLight,r=e.getModel("light"),n=r.getModel("main"),i=r.getModel("ambient");t.intensity=n.get("intensity"),A.intensity=i.get("intensity"),t.color=w.parseColor(n.get("color")).slice(0,3),A.color=w.parseColor(i.get("color")).slice(0,3);var a=n.get("alpha")||0,s=n.get("beta")||0;t.position.setArray(w.directionFromAlphaBeta(a,s)),t.lookAt(w.Vector3.ZERO),t.castShadow=n.get("shadow"),t.shadowResolution=w.getShadowResolution(n.get("shadowQuality"))},updateAmbientCubemap:function(e,t,A){var r=t.getModel("light.ambientCubemap"),n=r.get("texture");if(n){this._cubemapLightsCache=this._cubemapLightsCache||{};var i=this._cubemapLightsCache[n];if(!i){var a=this;i=this._cubemapLightsCache[n]=w.createAmbientCubemap(r.option,e,A,function(){a._isSkyboxFromAmbientCubemap&&a._skybox.setEnvironmentMap(i.specular.cubemap),A.getZr().refresh()})}this._lightRoot.add(i.diffuse),this._lightRoot.add(i.specular),this._currentCubemapLights=i}else this._currentCubemapLights&&(this._lightRoot.remove(this._currentCubemapLights.diffuse),this._lightRoot.remove(this._currentCubemapLights.specular),this._currentCubemapLights=null)},updateSkybox:function(e,t,A){var r=t.get("environment"),n=this;function i(){return n._skybox=n._skybox||new Tn,n._skybox}var a=i();if(r&&r!=="none")if(r==="auto")if(this._isSkyboxFromAmbientCubemap=!0,this._currentCubemapLights){var s=this._currentCubemapLights.specular.cubemap;a.setEnvironmentMap(s),this._scene&&a.attachScene(this._scene),a.material.set("lod",3)}else this._skybox&&this._skybox.detachScene();else if(typeof r=="object"&&r.colorStops||typeof r=="string"&&Bc(r)){this._isSkyboxFromAmbientCubemap=!1;var o=new w.Texture2D({anisotropic:8,flipY:!1});a.setEnvironmentMap(o);var l=o.image=document.createElement("canvas");l.width=l.height=16;var u=l.getContext("2d"),c=new wc({shape:{x:0,y:0,width:16,height:16},style:{fill:r}});yc(u,c),a.attachScene(this._scene)}else{this._isSkyboxFromAmbientCubemap=!1;var o=w.loadTexture(r,A,{anisotropic:8,flipY:!1});a.setEnvironmentMap(o),a.attachScene(this._scene)}else this._skybox&&this._skybox.detachScene(this._scene),this._skybox=null;var f=t.coordinateSystem;if(this._skybox)if(f&&f.viewGL&&r!=="auto"&&!(r.match&&r.match(/.hdr$/))){var h=f.viewGL.isLinearSpace()?"define":"undefine";this._skybox.material[h]("fragment","SRGB_DECODE")}else this._skybox.material.undefine("fragment","SRGB_DECODE")}};var NA=Le.vec3,Yc=re.extend(function(){return{segmentScale:1,useNativeLine:!0,attributes:{position:new re.Attribute("position","float",3,"POSITION"),normal:new re.Attribute("normal","float",3,"NORMAL"),color:new re.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setQuadCount:function(e){var t=this.attributes,A=this.getQuadVertexCount()*e,r=this.getQuadTriangleCount()*e;this.vertexCount!==A&&(t.position.init(A),t.normal.init(A),t.color.init(A)),this.triangleCount!==r&&(this.indices=A>65535?new Uint32Array(r*3):new Uint16Array(r*3))},getQuadVertexCount:function(){return 4},getQuadTriangleCount:function(){return 2},addQuad:function(){var e=NA.create(),t=NA.create(),A=NA.create(),r=[0,3,1,3,2,1];return function(n,i){var a=this.attributes.position,s=this.attributes.normal,o=this.attributes.color;NA.sub(e,n[1],n[0]),NA.sub(t,n[2],n[1]),NA.cross(A,e,t),NA.normalize(A,A);for(var l=0;l<4;l++)a.set(this._vertexOffset+l,n[l]),o.set(this._vertexOffset+l,i),s.set(this._vertexOffset+l,A);for(var u=this._faceOffset*3,l=0;l<6;l++)this.indices[u+l]=r[l]+this._vertexOffset;this._vertexOffset+=4,this._faceOffset+=2}}()});SA(Yc.prototype,Vn);var Os=Ae.firstNotNull,ep={x:0,y:2,z:1};function tp(e,t,A,r){var n=[0,0,0],i=r<0?A.getExtentMin():A.getExtentMax();n[ep[A.dim]]=i,e.position.setArray(n),e.rotation.identity(),t.distance=-Math.abs(i),t.normal.set(0,0,0),A.dim==="x"?(e.rotation.rotateY(r*Math.PI/2),t.normal.x=-r):A.dim==="z"?(e.rotation.rotateX(-r*Math.PI/2),t.normal.y=-r):(r>0&&e.rotation.rotateY(Math.PI),t.normal.z=-r)}function Ba(e,t,A){this.rootNode=new w.Node;var r=new w.Mesh({geometry:new QA({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:1}),n=new w.Mesh({geometry:new Yc,material:A,castShadow:!1,culling:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:0});this.rootNode.add(n),this.rootNode.add(r),this.faceInfo=e,this.plane=new w.Plane,this.linesMesh=r,this.quadsMesh=n}Ba.prototype.update=function(e,t,A){var r=e.coordinateSystem,n=[r.getAxis(this.faceInfo[0]),r.getAxis(this.faceInfo[1])],i=this.linesMesh.geometry,a=this.quadsMesh.geometry;i.convertToDynamicArray(!0),a.convertToDynamicArray(!0),this._updateSplitLines(i,n,e,A),this._udpateSplitAreas(a,n,e,A),i.convertToTypedArray(),a.convertToTypedArray();var s=r.getAxis(this.faceInfo[2]);tp(this.rootNode,this.plane,s,this.faceInfo[3])};Ba.prototype._updateSplitLines=function(e,t,A,r){var n=r.getDevicePixelRatio();t.forEach(function(i,a){var s=i.model,o=t[1-a].getExtent();if(!i.scale.isBlank()){var l=s.getModel("splitLine",A.getModel("splitLine"));if(l.get("show")){var u=l.getModel("lineStyle"),c=u.get("color"),f=Os(u.get("opacity"),1),h=Os(u.get("width"),1);c=Xt(c)?c:[c];for(var d=i.getTicksCoords({tickModel:l}),g=0,v=0;v<d.length;v++){var p=d[v].coord,m=w.parseColor(c[g%c.length]);m[3]*=f;var B=[0,0,0],_=[0,0,0];B[a]=_[a]=p,B[1-a]=o[0],_[1-a]=o[1],e.addLine(B,_,m,h*n),g++}}}})};Ba.prototype._udpateSplitAreas=function(e,t,A,r){t.forEach(function(n,i){var a=n.model,s=t[1-i].getExtent();if(!n.scale.isBlank()){var o=a.getModel("splitArea",A.getModel("splitArea"));if(o.get("show")){var l=o.getModel("areaStyle"),u=l.get("color"),c=Os(l.get("opacity"),1);u=Xt(u)?u:[u];for(var f=n.getTicksCoords({tickModel:o,clamp:!0}),h=0,d=[0,0,0],g=[0,0,0],v=0;v<f.length;v++){var p=f[v].coord,m=[0,0,0],B=[0,0,0];if(m[i]=B[i]=p,m[1-i]=s[0],B[1-i]=s[1],v===0){d=m,g=B;continue}var _=w.parseColor(u[h%u.length]);_[3]*=c,e.addQuad([d,m,B,g],_),d=m,g=B,h++}}}})};var Hl=[0,1,2,0,2,3],Zc=re.extend(function(){return{attributes:{position:new re.Attribute("position","float",3,"POSITION"),texcoord:new re.Attribute("texcoord","float",2,"TEXCOORD_0"),offset:new re.Attribute("offset","float",2),color:new re.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setSpriteCount:function(e){this._spriteCount=e;var t=e*4,A=e*2;this.vertexCount!==t&&(this.attributes.position.init(t),this.attributes.offset.init(t),this.attributes.color.init(t)),this.triangleCount!==A&&(this.indices=t>65535?new Uint32Array(A*3):new Uint16Array(A*3))},setSpriteAlign:function(e,t,A,r,n){A==null&&(A="left"),r==null&&(r="top");var i,a,s,o;switch(n=n||0,A){case"left":i=n,s=t[0]+n;break;case"center":case"middle":i=-t[0]/2,s=t[0]/2;break;case"right":i=-t[0]-n,s=-n;break}switch(r){case"bottom":a=n,o=t[1]+n;break;case"middle":a=-t[1]/2,o=t[1]/2;break;case"top":a=-t[1]-n,o=-n;break}var l=e*4,u=this.attributes.offset;u.set(l,[i,o]),u.set(l+1,[s,o]),u.set(l+2,[s,a]),u.set(l+3,[i,a])},addSprite:function(e,t,A,r,n,i){var a=this._vertexOffset;this.setSprite(this._vertexOffset/4,e,t,A,r,n,i);for(var s=0;s<Hl.length;s++)this.indices[this._faceOffset*3+s]=Hl[s]+a;return this._faceOffset+=2,this._vertexOffset+=4,a/4},setSprite:function(e,t,A,r,n,i,a){for(var s=e*4,o=this.attributes,l=0;l<4;l++)o.position.set(s+l,t);var u=o.texcoord;u.set(s,[r[0][0],r[0][1]]),u.set(s+1,[r[1][0],r[0][1]]),u.set(s+2,[r[1][0],r[1][1]]),u.set(s+3,[r[0][0],r[1][1]]),this.setSpriteAlign(e,A,n,i,a)}});SA(Zc.prototype,Vn);const Ap=`@export ecgl.labels.vertex

attribute vec3 position: POSITION;
attribute vec2 texcoord: TEXCOORD_0;
attribute vec2 offset;
#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec2 v_Texcoord;

void main()
{
 vec4 proj = worldViewProjection * vec4(position, 1.0);

 vec2 screen = (proj.xy / abs(proj.w) + 1.0) * 0.5 * viewport.zw;

 screen += offset;

 proj.xy = (screen / viewport.zw - 0.5) * 2.0 * abs(proj.w);
 gl_Position = proj;
#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif
 v_Texcoord = texcoord;
}
@end


@export ecgl.labels.fragment

uniform vec3 color : [1.0, 1.0, 1.0];
uniform float alpha : 1.0;
uniform sampler2D textureAtlas;
uniform vec2 uvScale: [1.0, 1.0];

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif
varying float v_Miter;

varying vec2 v_Texcoord;

void main()
{
 gl_FragColor = vec4(color, alpha) * texture2D(textureAtlas, v_Texcoord * uvScale);
#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif
}

@end`;w.Shader.import(Ap);const Fo=w.Mesh.extend(function(){var e=new Zc({dynamic:!0}),t=new w.Material({shader:w.createShader("ecgl.labels"),transparent:!0,depthMask:!1});return{geometry:e,material:t,culling:!1,castShadow:!1,ignorePicking:!0}});var HA=Ae.firstNotNull,OA={x:0,y:2,z:1};function Uo(e,t){var A=new w.Mesh({geometry:new QA({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,renderOrder:2}),r=new Fo;r.material.depthMask=!1;var n=new w.Node;n.add(A),n.add(r),this.rootNode=n,this.dim=e,this.linesMesh=A,this.labelsMesh=r,this.axisLineCoords=null,this.labelElements=[]}var $a={x:"y",y:"x",z:"y"};Uo.prototype.update=function(e,t,A){var r=e.coordinateSystem,n=r.getAxis(this.dim),i=this.linesMesh.geometry,a=this.labelsMesh.geometry;i.convertToDynamicArray(!0),a.convertToDynamicArray(!0);var s=n.model,o=n.getExtent(),U=A.getDevicePixelRatio(),l=s.getModel("axisLine",e.getModel("axisLine")),u=s.getModel("axisTick",e.getModel("axisTick")),c=s.getModel("axisLabel",e.getModel("axisLabel")),f=l.get("lineStyle.color");if(l.get("show")){var h=l.getModel("lineStyle"),d=[0,0,0],g=[0,0,0],v=OA[n.dim];d[v]=o[0],g[v]=o[1],this.axisLineCoords=[d,g];var p=w.parseColor(f),m=HA(h.get("width"),1),B=HA(h.get("opacity"),1);p[3]*=B,i.addLine(d,g,p,m*U)}if(u.get("show")){var _=u.getModel("lineStyle"),x=w.parseColor(HA(_.get("color"),f)),m=HA(_.get("width"),1);x[3]*=HA(_.get("opacity"),1);for(var y=n.getTicksCoords(),T=u.get("length"),E=0;E<y.length;E++){var F=y[E].coord,d=[0,0,0],g=[0,0,0],v=OA[n.dim],S=OA[$a[n.dim]];d[v]=g[v]=F,g[S]=T,i.addLine(d,g,x,m*U)}}this.labelElements=[];var U=A.getDevicePixelRatio();if(c.get("show"))for(var y=n.getTicksCoords(),I=s.get("data"),Q=c.get("margin"),b=n.getViewLabels(),E=0;E<b.length;E++){var N=b[E].tickValue,H=b[E].formattedLabel,V=b[E].rawLabel,F=n.dataToCoord(N),G=[0,0,0],v=OA[n.dim],S=OA[$a[n.dim]];G[v]=G[v]=F,G[S]=Q;var j=c;I&&I[N]&&I[N].textStyle&&(j=new Tr(I[N].textStyle,c,s.ecModel));var W=HA(j.get("color"),f),ne=new Oi({style:Pi(j,{text:H,fill:typeof W=="function"?W(n.type==="category"?V:n.type==="value"?N+"":N,E):W,verticalAlign:"top",align:"left"})}),ee=t.add(ne),ie=ne.getBoundingRect();a.addSprite(G,[ie.width*U,ie.height*U],ee),this.labelElements.push(ne)}if(s.get("name")){var te=s.getModel("nameTextStyle"),G=[0,0,0],v=OA[n.dim],S=OA[$a[n.dim]],q=HA(te.get("color"),f),Be=te.get("borderColor"),m=te.get("borderWidth");G[v]=G[v]=(o[0]+o[1])/2,G[S]=s.get("nameGap");var ne=new Oi({style:Pi(te,{text:s.get("name"),fill:q,stroke:Be,lineWidth:m})}),ee=t.add(ne),ie=ne.getBoundingRect();a.addSprite(G,[ie.width*U,ie.height*U],ee),ne.__idx=this.labelElements.length,this.nameLabelElement=ne}this.labelsMesh.material.set("textureAtlas",t.getTexture()),this.labelsMesh.material.set("uvScale",t.getCoordsScale()),i.convertToTypedArray(),a.convertToTypedArray()};Uo.prototype.setSpriteAlign=function(e,t,A){for(var r=A.getDevicePixelRatio(),n=this.labelsMesh.geometry,i=0;i<this.labelElements.length;i++){var a=this.labelElements[i],s=a.getBoundingRect();n.setSpriteAlign(i,[s.width*r,s.height*r],e,t)}var o=this.nameLabelElement;if(o){var s=o.getBoundingRect();n.setSpriteAlign(o.__idx,[s.width*r,s.height*r],e,t),n.dirty()}this.textAlign=e,this.textVerticalAlign=t};const wa=`@export ecgl.lines3D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

void main()
{
 gl_Position = worldViewProjection * vec4(position, 1.0);
 v_Color = a_Color;
}

@end

@export ecgl.lines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif
}
@end



@export ecgl.lines3D.clipNear

vec4 clipNear(vec4 p1, vec4 p2) {
 float n = (p1.w - near) / (p1.w - p2.w);
 return vec4(mix(p1.xy, p2.xy, n), -near, near);
}

@end

@export ecgl.lines3D.expandLine
#ifdef VERTEX_ANIMATION
 vec4 prevProj = worldViewProjection * vec4(mix(prevPositionPrev, positionPrev, percent), 1.0);
 vec4 currProj = worldViewProjection * vec4(mix(prevPosition, position, percent), 1.0);
 vec4 nextProj = worldViewProjection * vec4(mix(prevPositionNext, positionNext, percent), 1.0);
#else
 vec4 prevProj = worldViewProjection * vec4(positionPrev, 1.0);
 vec4 currProj = worldViewProjection * vec4(position, 1.0);
 vec4 nextProj = worldViewProjection * vec4(positionNext, 1.0);
#endif

 if (currProj.w < 0.0) {
 if (nextProj.w > 0.0) {
 currProj = clipNear(currProj, nextProj);
 }
 else if (prevProj.w > 0.0) {
 currProj = clipNear(currProj, prevProj);
 }
 }

 vec2 prevScreen = (prevProj.xy / abs(prevProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 currScreen = (currProj.xy / abs(currProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 nextScreen = (nextProj.xy / abs(nextProj.w) + 1.0) * 0.5 * viewport.zw;

 vec2 dir;
 float len = offset;
 if (position == positionPrev) {
 dir = normalize(nextScreen - currScreen);
 }
 else if (position == positionNext) {
 dir = normalize(currScreen - prevScreen);
 }
 else {
 vec2 dirA = normalize(currScreen - prevScreen);
 vec2 dirB = normalize(nextScreen - currScreen);

 vec2 tanget = normalize(dirA + dirB);

 float miter = 1.0 / max(dot(tanget, dirA), 0.5);
 len *= miter;
 dir = tanget;
 }

 dir = vec2(-dir.y, dir.x) * len;
 currScreen += dir;

 currProj.xy = (currScreen / viewport.zw - 0.5) * 2.0 * abs(currProj.w);
@end


@export ecgl.meshLines3D.vertex

attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute vec4 a_Color : COLOR;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevPositionPrev;
attribute vec3 prevPositionNext;
uniform float percent : 1.0;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

varying vec4 v_Color;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain
}
@end


@export ecgl.meshLines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain
}

@end`;var Ol=Ae.firstNotNull;w.Shader.import(wa);var PA={x:0,y:2,z:1};const rp=Hn.extend({type:"grid3D",__ecgl__:!0,init:function(e,t){var A=[["y","z","x",-1,"left"],["y","z","x",1,"right"],["x","y","z",-1,"bottom"],["x","y","z",1,"top"],["x","z","y",-1,"far"],["x","z","y",1,"near"]],r=["x","y","z"],n=new w.Material({shader:w.createShader("ecgl.color"),depthMask:!1,transparent:!0}),i=new w.Material({shader:w.createShader("ecgl.meshLines3D"),depthMask:!1,transparent:!0});n.define("fragment","DOUBLE_SIDED"),n.define("both","VERTEX_COLOR"),this.groupGL=new w.Node,this._control=new Gn({zr:t.getZr()}),this._control.init(),this._faces=A.map(function(s){var o=new Ba(s,i,n);return this.groupGL.add(o.rootNode),o},this),this._axes=r.map(function(s){var o=new Uo(s,i);return this.groupGL.add(o.rootNode),o},this);var a=t.getDevicePixelRatio();this._axisLabelSurface=new zi({width:256,height:256,devicePixelRatio:a}),this._axisLabelSurface.onupdate=function(){t.getZr().refresh()},this._axisPointerLineMesh=new w.Mesh({geometry:new QA({useNativeLine:!1}),material:i,castShadow:!1,ignorePicking:!0,renderOrder:3}),this.groupGL.add(this._axisPointerLineMesh),this._axisPointerLabelsSurface=new zi({width:128,height:128,devicePixelRatio:a}),this._axisPointerLabelsMesh=new Fo({ignorePicking:!0,renderOrder:4,castShadow:!1}),this._axisPointerLabelsMesh.material.set("textureAtlas",this._axisPointerLabelsSurface.getTexture()),this.groupGL.add(this._axisPointerLabelsMesh),this._lightRoot=new w.Node,this._sceneHelper=new FA,this._sceneHelper.initLight(this._lightRoot)},render:function(e,t,A){this._model=e,this._api=A;var r=e.coordinateSystem;r.viewGL.add(this._lightRoot),e.get("show")?r.viewGL.add(this.groupGL):r.viewGL.remove(this.groupGL);var n=this._control;n.setViewGL(r.viewGL);var i=e.getModel("viewControl");n.setFromViewControlModel(i,0),this._axisLabelSurface.clear(),n.off("update"),e.get("show")&&(this._faces.forEach(function(a){a.update(e,t,A)},this),this._axes.forEach(function(a){a.update(e,this._axisLabelSurface,A)},this)),n.on("update",this._onCameraChange.bind(this,e,A),this),this._sceneHelper.setScene(r.viewGL.scene),this._sceneHelper.updateLight(e),r.viewGL.setPostEffect(e.getModel("postEffect"),A),r.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._initMouseHandler(e)},afterRender:function(e,t,A,r){var n=r.renderer;this._sceneHelper.updateAmbientCubemap(n,e,A),this._sceneHelper.updateSkybox(n,e,A)},showAxisPointer:function(e,t,A,r){this._doShowAxisPointer(),this._updateAxisPointer(r.value)},hideAxisPointer:function(e,t,A,r){this._doHideAxisPointer()},_initMouseHandler:function(e){var t=e.coordinateSystem,A=t.viewGL;e.get("show")&&e.get("axisPointer.show")?A.on("mousemove",this._updateAxisPointerOnMousePosition,this):A.off("mousemove",this._updateAxisPointerOnMousePosition)},_updateAxisPointerOnMousePosition:function(e){if(!e.target){for(var t=this._model,A=t.coordinateSystem,r=A.viewGL,n=r.castRay(e.offsetX,e.offsetY,new w.Ray),i,a=0;a<this._faces.length;a++){var s=this._faces[a];if(!s.rootNode.invisible){s.plane.normal.dot(r.camera.worldTransform.z)<0&&s.plane.normal.negate();var o=n.intersectPlane(s.plane);if(o){var l=A.getAxis(s.faceInfo[0]),u=A.getAxis(s.faceInfo[1]),c=PA[s.faceInfo[0]],f=PA[s.faceInfo[1]];l.contain(o.array[c])&&u.contain(o.array[f])&&(i=o)}}}if(i){var h=A.pointToData(i.array,[],!0);this._updateAxisPointer(h),this._doShowAxisPointer()}else this._doHideAxisPointer()}},_onCameraChange:function(e,t){e.get("show")&&(this._updateFaceVisibility(),this._updateAxisLinePosition());var A=this._control;t.dispatchAction({type:"grid3DChangeCamera",alpha:A.getAlpha(),beta:A.getBeta(),distance:A.getDistance(),center:A.getCenter(),from:this.uid,grid3DId:e.id})},_updateFaceVisibility:function(){var e=this._control.getCamera(),t=new w.Vector3;e.update();for(var A=0;A<this._faces.length/2;A++){for(var r=[],n=0;n<2;n++){var i=this._faces[A*2+n];i.rootNode.getWorldPosition(t),t.transformMat4(e.viewMatrix),r[n]=t.z}var a=r[0]>r[1]?0:1,s=this._faces[A*2+a],o=this._faces[A*2+1-a];s.rootNode.invisible=!0,o.rootNode.invisible=!1}},_updateAxisLinePosition:function(){var e=this._model.coordinateSystem,t=e.getAxis("x"),A=e.getAxis("y"),r=e.getAxis("z"),n=r.getExtentMax(),i=r.getExtentMin(),a=t.getExtentMin(),s=t.getExtentMax(),o=A.getExtentMax(),l=A.getExtentMin(),u=this._axes[0].rootNode,c=this._axes[1].rootNode,f=this._axes[2].rootNode,h=this._faces,d=h[4].rootNode.invisible?l:o,g=h[2].rootNode.invisible?n:i,v=h[0].rootNode.invisible?a:s,p=h[2].rootNode.invisible?n:i,m=h[0].rootNode.invisible?s:a,B=h[4].rootNode.invisible?l:o;u.rotation.identity(),c.rotation.identity(),f.rotation.identity(),h[4].rootNode.invisible&&(this._axes[0].flipped=!0,u.rotation.rotateX(Math.PI)),h[0].rootNode.invisible&&(this._axes[1].flipped=!0,c.rotation.rotateZ(Math.PI)),h[4].rootNode.invisible&&(this._axes[2].flipped=!0,f.rotation.rotateY(Math.PI)),u.position.set(0,g,d),c.position.set(v,p,0),f.position.set(m,0,B),u.update(),c.update(),f.update(),this._updateAxisLabelAlign()},_updateAxisLabelAlign:function(){var e=this._control.getCamera(),t=[new w.Vector4,new w.Vector4],A=new w.Vector4;this.groupGL.getWorldPosition(A),A.w=1,A.transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),A.x/=A.w,A.y/=A.w,this._axes.forEach(function(r){var n=r.axisLineCoords;r.labelsMesh.geometry;for(var i=0;i<t.length;i++)t[i].setArray(n[i]),t[i].w=1,t[i].transformMat4(r.rootNode.worldTransform).transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),t[i].x/=t[i].w,t[i].y/=t[i].w;var a=t[1].x-t[0].x,s=t[1].y-t[0].y,o=(t[1].x+t[0].x)/2,l=(t[1].y+t[0].y)/2,u,c;Math.abs(s/a)<.5?(u="center",c=l>A.y?"bottom":"top"):(c="middle",u=o>A.x?"left":"right"),r.setSpriteAlign(u,c,this._api)},this)},_doShowAxisPointer:function(){this._axisPointerLineMesh.invisible&&(this._axisPointerLineMesh.invisible=!1,this._axisPointerLabelsMesh.invisible=!1,this._api.getZr().refresh())},_doHideAxisPointer:function(){this._axisPointerLineMesh.invisible||(this._axisPointerLineMesh.invisible=!0,this._axisPointerLabelsMesh.invisible=!0,this._api.getZr().refresh())},_updateAxisPointer:function(e){var t=this._model.coordinateSystem,A=t.dataToPoint(e),r=this._axisPointerLineMesh,n=r.geometry,i=this._model.getModel("axisPointer"),a=this._api.getDevicePixelRatio();n.convertToDynamicArray(!0);function s(E){return Ae.firstNotNull(E.model.get("axisPointer.show"),i.get("show"))}function o(E){var F=E.model.getModel("axisPointer",i),S=F.getModel("lineStyle"),U=w.parseColor(S.get("color")),I=Ol(S.get("width"),1),Q=Ol(S.get("opacity"),1);return U[3]*=Q,{color:U,lineWidth:I}}for(var l=0;l<this._faces.length;l++){var u=this._faces[l];if(!u.rootNode.invisible){for(var c=u.faceInfo,f=c[3]<0?t.getAxis(c[2]).getExtentMin():t.getAxis(c[2]).getExtentMax(),h=PA[c[2]],d=0;d<2;d++){var g=c[d],v=c[1-d],p=t.getAxis(g),m=t.getAxis(v);if(s(p)){var B=[0,0,0],_=[0,0,0],x=PA[g],y=PA[v];B[x]=_[x]=A[x],B[h]=_[h]=f,B[y]=m.getExtentMin(),_[y]=m.getExtentMax();var T=o(p);n.addLine(B,_,T.color,T.lineWidth*a)}}if(s(t.getAxis(c[2]))){var B=A.slice(),_=A.slice();_[h]=f;var T=o(t.getAxis(c[2]));n.addLine(B,_,T.color,T.lineWidth*a)}}}n.convertToTypedArray(),this._updateAxisPointerLabelsMesh(e),this._api.getZr().refresh()},_updateAxisPointerLabelsMesh:function(e){var t=this._model,A=this._axisPointerLabelsMesh,r=this._axisPointerLabelsSurface,n=t.coordinateSystem,i=t.getModel("axisPointer");A.geometry.convertToDynamicArray(!0),r.clear();var a={x:"y",y:"x",z:"y"};this._axes.forEach(function(s,o){var l=n.getAxis(s.dim),u=l.model,c=u.getModel("axisPointer",i),f=c.getModel("label"),h=c.get("lineStyle.color");if(!(!f.get("show")||!c.get("show"))){var d=e[o],g=f.get("formatter"),v=l.scale.getLabel({value:d});if(g!=null)v=g(v,e);else if(l.scale.type==="interval"||l.scale.type==="log"){var p=xc(l.scale.getTicks()[0]);v=d.toFixed(p+2)}var m=f.get("color"),B=new Oi({style:Pi(f,{text:v,fill:m||h,align:"left",verticalAlign:"top"})}),_=r.add(B),x=B.getBoundingRect(),y=this._api.getDevicePixelRatio(),T=s.rootNode.position.toArray(),E=PA[a[s.dim]];T[E]+=(s.flipped?-1:1)*f.get("margin"),T[PA[s.dim]]=l.dataToCoord(e[o]),A.geometry.addSprite(T,[x.width*y,x.height*y],_,s.textAlign,s.textVerticalAlign)}},this),r.getZr().refreshImmediately(),A.material.set("uvScale",r.getCoordsScale()),A.geometry.convertToTypedArray()},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._axisLabelSurface.dispose(),this._axisPointerLabelsSurface.dispose()}});function Fn(e){Cc.call(this,e),this.type="cartesian3D",this.dimensions=["x","y","z"],this.size=[0,0,0]}Fn.prototype={constructor:Fn,model:null,containPoint:function(e){return this.getAxis("x").contain(e[0])&&this.getAxis("y").contain(e[2])&&this.getAxis("z").contain(e[1])},containData:function(e){return this.getAxis("x").containData(e[0])&&this.getAxis("y").containData(e[1])&&this.getAxis("z").containData(e[2])},dataToPoint:function(e,t,A){return t=t||[],t[0]=this.getAxis("x").dataToCoord(e[0],A),t[2]=this.getAxis("y").dataToCoord(e[1],A),t[1]=this.getAxis("z").dataToCoord(e[2],A),t},pointToData:function(e,t,A){return t=t||[],t[0]=this.getAxis("x").coordToData(e[0],A),t[1]=this.getAxis("y").coordToData(e[2],A),t[2]=this.getAxis("z").coordToData(e[1],A),t}};Ec(Fn,Cc);function ki(e,t,A){fa.call(this,e,t,A)}ki.prototype={constructor:ki,getExtentMin:function(){var e=this._extent;return Math.min(e[0],e[1])},getExtentMax:function(){var e=this._extent;return Math.max(e[0],e[1])},calculateCategoryInterval:function(){return Math.floor(this.scale.count()/8)}};Ec(ki,fa);var Wi=function(){this._pool={},this._allocatedTextures=[]};Wi.prototype={constructor:Wi,get:function(e){var t=Pl(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var A=this._pool[t];if(!A.length){var r=new $(e);return this._allocatedTextures.push(r),r}return A.pop()},put:function(e){var t=Pl(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var A=this._pool[t];A.push(e)},clear:function(e){for(var t=0;t<this._allocatedTextures.length;t++)this._allocatedTextures[t].dispose(e);this._pool={},this._allocatedTextures=[]}};var Jc={width:512,height:512,type:D.UNSIGNED_BYTE,format:D.RGBA,wrapS:D.CLAMP_TO_EDGE,wrapT:D.CLAMP_TO_EDGE,minFilter:D.LINEAR_MIPMAP_LINEAR,magFilter:D.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,unpackAlignment:4,premultiplyAlpha:!1},es=Object.keys(Jc);function Pl(e){be.defaultsWithPropList(e,Jc,es),np(e);for(var t="",A=0;A<es.length;A++){var r=es[A],n=e[r].toString();t+=n}return t}function np(e){var t=ip(e.width,e.height);e.format===D.DEPTH_COMPONENT&&(e.useMipmap=!1),(!t||!e.useMipmap)&&(e.minFilter==D.NEAREST_MIPMAP_NEAREST||e.minFilter==D.NEAREST_MIPMAP_LINEAR?e.minFilter=D.NEAREST:(e.minFilter==D.LINEAR_MIPMAP_LINEAR||e.minFilter==D.LINEAR_MIPMAP_NEAREST)&&(e.minFilter=D.LINEAR)),t||(e.wrapS=D.CLAMP_TO_EDGE,e.wrapT=D.CLAMP_TO_EDGE)}function ip(e,t){return(e&e-1)===0&&(t&t-1)===0}const ap=`@export clay.sm.depth.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
uniform vec2 uvRepeat = vec2(1.0, 1.0);
uniform vec2 uvOffset = vec2(0.0, 0.0);
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
void main(){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 v_ViewPosition = worldViewProjection * P;
 gl_Position = v_ViewPosition;
 v_Texcoord = texcoord * uvRepeat + uvOffset;
}
@end
@export clay.sm.depth.fragment
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
uniform float bias : 0.001;
uniform float slopeScale : 1.0;
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
@import clay.util.encode_float
void main(){
 float depth = v_ViewPosition.z / v_ViewPosition.w;
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
#ifdef USE_VSM
 depth = depth * 0.5 + 0.5;
 float moment1 = depth;
 float moment2 = depth * depth;
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 moment2 += 0.25*(dx*dx+dy*dy);
 #endif
 gl_FragColor = vec4(moment1, moment2, 0.0, 1.0);
#else
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 depth += sqrt(dx*dx + dy*dy) * slopeScale + bias;
 #else
 depth += bias;
 #endif
 gl_FragColor = encodeFloat(depth * 0.5 + 0.5);
#endif
}
@end
@export clay.sm.debug_depth
uniform sampler2D depthMap;
varying vec2 v_Texcoord;
@import clay.util.decode_float
void main() {
 vec4 tex = texture2D(depthMap, v_Texcoord);
#ifdef USE_VSM
 gl_FragColor = vec4(tex.rgb, 1.0);
#else
 float depth = decodeFloat(tex);
 gl_FragColor = vec4(depth, depth, depth, 1.0);
#endif
}
@end
@export clay.sm.distance.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 world : WORLD;
attribute vec3 position : POSITION;
@import clay.chunk.skinning_header
varying vec3 v_WorldPosition;
void main (){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = worldViewProjection * P;
 v_WorldPosition = (world * P).xyz;
}
@end
@export clay.sm.distance.fragment
uniform vec3 lightPosition;
uniform float range : 100;
varying vec3 v_WorldPosition;
@import clay.util.encode_float
void main(){
 float dist = distance(lightPosition, v_WorldPosition);
#ifdef USE_VSM
 gl_FragColor = vec4(dist, dist * dist, 0.0, 0.0);
#else
 dist = dist / range;
 gl_FragColor = encodeFloat(dist);
#endif
}
@end
@export clay.plugin.shadow_map_common
@import clay.util.decode_float
float tapShadowMap(sampler2D map, vec2 uv, float z){
 vec4 tex = texture2D(map, uv);
 return step(z, decodeFloat(tex) * 2.0 - 1.0);
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize, vec2 scale) {
 float shadowContrib = tapShadowMap(map, uv, z);
 vec2 offset = vec2(1.0 / textureSize) * scale;
#ifdef PCF_KERNEL_SIZE
 for (int _idx_ = 0; _idx_ < PCF_KERNEL_SIZE; _idx_++) {{
 shadowContrib += tapShadowMap(map, uv + offset * pcfKernel[_idx_], z);
 }}
 return shadowContrib / float(PCF_KERNEL_SIZE + 1);
#else
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, -offset.y), z);
 return shadowContrib / 9.0;
#endif
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize) {
 return pcf(map, uv, z, textureSize, vec2(1.0));
}
float chebyshevUpperBound(vec2 moments, float z){
 float p = 0.0;
 z = z * 0.5 + 0.5;
 if (z <= moments.x) {
 p = 1.0;
 }
 float variance = moments.y - moments.x * moments.x;
 variance = max(variance, 0.0000001);
 float mD = moments.x - z;
 float pMax = variance / (variance + mD * mD);
 pMax = clamp((pMax-0.4)/(1.0-0.4), 0.0, 1.0);
 return max(p, pMax);
}
float computeShadowContrib(
 sampler2D map, mat4 lightVPM, vec3 position, float textureSize, vec2 scale, vec2 offset
) {
 vec4 posInLightSpace = lightVPM * vec4(position, 1.0);
 posInLightSpace.xyz /= posInLightSpace.w;
 float z = posInLightSpace.z;
 if(all(greaterThan(posInLightSpace.xyz, vec3(-0.99, -0.99, -1.0))) &&
 all(lessThan(posInLightSpace.xyz, vec3(0.99, 0.99, 1.0)))){
 vec2 uv = (posInLightSpace.xy+1.0) / 2.0;
 #ifdef USE_VSM
 vec2 moments = texture2D(map, uv * scale + offset).xy;
 return chebyshevUpperBound(moments, z);
 #else
 return pcf(map, uv * scale + offset, z, textureSize, scale);
 #endif
 }
 return 1.0;
}
float computeShadowContrib(sampler2D map, mat4 lightVPM, vec3 position, float textureSize) {
 return computeShadowContrib(map, lightVPM, position, textureSize, vec2(1.0), vec2(0.0));
}
float computeShadowContribOmni(samplerCube map, vec3 direction, float range)
{
 float dist = length(direction);
 vec4 shadowTex = textureCube(map, direction);
#ifdef USE_VSM
 vec2 moments = shadowTex.xy;
 float variance = moments.y - moments.x * moments.x;
 float mD = moments.x - dist;
 float p = variance / (variance + mD * mD);
 if(moments.x + 0.001 < dist){
 return clamp(p, 0.0, 1.0);
 }else{
 return 1.0;
 }
#else
 return step(dist, (decodeFloat(shadowTex) + 0.0002) * range);
#endif
}
@end
@export clay.plugin.compute_shadow_map
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT) || defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT) || defined(POINT_LIGHT_SHADOWMAP_COUNT)
#ifdef SPOT_LIGHT_SHADOWMAP_COUNT
uniform sampler2D spotLightShadowMaps[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 spotLightMatrices[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float spotLightShadowMapSizes[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#ifdef DIRECTIONAL_LIGHT_SHADOWMAP_COUNT
#if defined(SHADOW_CASCADE)
uniform sampler2D directionalLightShadowMaps[1]:unconfigurable;
uniform mat4 directionalLightMatrices[SHADOW_CASCADE]:unconfigurable;
uniform float directionalLightShadowMapSizes[1]:unconfigurable;
uniform float shadowCascadeClipsNear[SHADOW_CASCADE]:unconfigurable;
uniform float shadowCascadeClipsFar[SHADOW_CASCADE]:unconfigurable;
#else
uniform sampler2D directionalLightShadowMaps[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 directionalLightMatrices[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float directionalLightShadowMapSizes[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#endif
#ifdef POINT_LIGHT_SHADOWMAP_COUNT
uniform samplerCube pointLightShadowMaps[POINT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
uniform bool shadowEnabled : true;
#ifdef PCF_KERNEL_SIZE
uniform vec2 pcfKernel[PCF_KERNEL_SIZE];
#endif
@import clay.plugin.shadow_map_common
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfSpotLights(vec3 position, inout float shadowContribs[SPOT_LIGHT_COUNT] ) {
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < SPOT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 spotLightShadowMaps[_idx_], spotLightMatrices[_idx_], position,
 spotLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = SPOT_LIGHT_SHADOWMAP_COUNT; _idx_ < SPOT_LIGHT_COUNT; _idx_++){{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
#ifdef SHADOW_CASCADE
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float depth = (2.0 * gl_FragCoord.z - gl_DepthRange.near - gl_DepthRange.far)
 / (gl_DepthRange.far - gl_DepthRange.near);
 float shadowContrib;
 shadowContribs[0] = 1.0;
 for (int _idx_ = 0; _idx_ < SHADOW_CASCADE; _idx_++) {{
 if (
 depth >= shadowCascadeClipsNear[_idx_] &&
 depth <= shadowCascadeClipsFar[_idx_]
 ) {
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[0], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[0],
 vec2(1.0 / float(SHADOW_CASCADE), 1.0),
 vec2(float(_idx_) / float(SHADOW_CASCADE), 0.0)
 );
 shadowContribs[0] = shadowContrib;
 }
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#else
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[_idx_], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
#if defined(POINT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfPointLights(vec3 position, inout float shadowContribs[POINT_LIGHT_COUNT] ){
 vec3 lightPosition;
 vec3 direction;
 for(int _idx_ = 0; _idx_ < POINT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 lightPosition = pointLightPosition[_idx_];
 direction = position - lightPosition;
 shadowContribs[_idx_] = computeShadowContribOmni(pointLightShadowMaps[_idx_], direction, pointLightRange[_idx_]);
 }}
 for(int _idx_ = POINT_LIGHT_SHADOWMAP_COUNT; _idx_ < POINT_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
@end`;var fA=["px","nx","py","ny","pz","nz"];K.import(ap);function ts(e,t,A){if(A==="alphaMap")return e.material.get("diffuseMap");if(A==="alphaCutoff"){if(e.material.isDefined("fragment","ALPHA_TEST")&&e.material.get("diffuseMap")){var r=e.material.get("alphaCutoff");return r||0}return 0}else return A==="uvRepeat"?e.material.get("uvRepeat"):A==="uvOffset"?e.material.get("uvOffset"):t.get(A)}function Gl(e,t){var A=e.material,r=t.material;return A.get("diffuseMap")!==r.get("diffuseMap")||(A.get("alphaCutoff")||0)!==(r.get("alphaCutoff")||0)}var Kt=tt.extend(function(){return{softShadow:Kt.PCF,shadowBlur:1,lightFrustumBias:"auto",kernelPCF:new Float32Array([1,0,1,1,-1,1,0,1,-1,0,-1,-1,1,-1,0,-1]),precision:"highp",_lastRenderNotCastShadow:!1,_frameBuffer:new Qe,_textures:{},_shadowMapNumber:{POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},_depthMaterials:{},_distanceMaterials:{},_receivers:[],_lightsCastShadow:[],_lightCameras:{},_lightMaterials:{},_texturePool:new Wi}},function(){this._gaussianPassH=new Me({fragment:K.source("clay.compositor.gaussian_blur")}),this._gaussianPassV=new Me({fragment:K.source("clay.compositor.gaussian_blur")}),this._gaussianPassH.setUniform("blurSize",this.shadowBlur),this._gaussianPassH.setUniform("blurDir",0),this._gaussianPassV.setUniform("blurSize",this.shadowBlur),this._gaussianPassV.setUniform("blurDir",1),this._outputDepthPass=new Me({fragment:K.source("clay.sm.debug_depth")})},{render:function(e,t,A,r){A||(A=t.getMainCamera()),this.trigger("beforerender",this,e,t,A),this._renderShadowPass(e,t,A,r),this.trigger("afterrender",this,e,t,A)},renderDebug:function(e,t){e.saveClear();var A=e.viewport,r=0,n=0,i=t||A.width/4,a=i;this.softShadow===Kt.VSM?this._outputDepthPass.material.define("fragment","USE_VSM"):this._outputDepthPass.material.undefine("fragment","USE_VSM");for(var s in this._textures){var o=this._textures[s];e.setViewport(r,n,i*o.width/o.height,a),this._outputDepthPass.setUniform("depthMap",o),this._outputDepthPass.render(e),r+=i*o.width/o.height}e.setViewport(A),e.restoreClear()},_updateReceivers:function(e,t){if(t.receiveShadow?(this._receivers.push(t),t.material.set("shadowEnabled",1),t.material.set("pcfKernel",this.kernelPCF)):t.material.set("shadowEnabled",0),this.softShadow===Kt.VSM)t.material.define("fragment","USE_VSM"),t.material.undefine("fragment","PCF_KERNEL_SIZE");else{t.material.undefine("fragment","USE_VSM");var A=this.kernelPCF;A&&A.length?t.material.define("fragment","PCF_KERNEL_SIZE",A.length/2):t.material.undefine("fragment","PCF_KERNEL_SIZE")}},_update:function(e,t){var A=this;t.traverse(function(i){i.isRenderable()&&A._updateReceivers(e,i)});for(var r=0;r<t.lights.length;r++){var n=t.lights[r];n.castShadow&&!n.invisible&&this._lightsCastShadow.push(n)}},_renderShadowPass:function(e,t,A,r){for(var n in this._shadowMapNumber)this._shadowMapNumber[n]=0;this._lightsCastShadow.length=0,this._receivers.length=0;var i=e.gl;if(r||t.update(),A&&A.update(),t.updateLights(),this._update(e,t),!this._lightsCastShadow.length&&this._lastRenderNotCastShadow)return;this._lastRenderNotCastShadow=this._lightsCastShadow===0,i.enable(i.DEPTH_TEST),i.depthMask(!0),i.disable(i.BLEND),i.clearColor(1,1,1,1);for(var a=[],s=[],o=[],l=[],u=[],c=[],f,h=0;h<this._lightsCastShadow.length;h++){var d=this._lightsCastShadow[h];if(d.type==="DIRECTIONAL_LIGHT"){if(f){console.warn("Only one direectional light supported with shadow cascade");continue}if(d.shadowCascade>4){console.warn("Support at most 4 cascade");continue}d.shadowCascade>1&&(f=d),this.renderDirectionalLightShadow(e,t,A,d,u,l,o)}else d.type==="SPOT_LIGHT"?this.renderSpotLightShadow(e,t,d,s,a):d.type==="POINT_LIGHT"&&this.renderPointLightShadow(e,t,d,c);this._shadowMapNumber[d.type]++}for(var g in this._shadowMapNumber)for(var v=this._shadowMapNumber[g],p=g+"_SHADOWMAP_COUNT",h=0;h<this._receivers.length;h++){var m=this._receivers[h],B=m.material;B.fragmentDefines[p]!==v&&(v>0?B.define("fragment",p,v):B.isDefined("fragment",p)&&B.undefine("fragment",p))}for(var h=0;h<this._receivers.length;h++){var m=this._receivers[h],B=m.material;f?B.define("fragment","SHADOW_CASCADE",f.shadowCascade):B.undefine("fragment","SHADOW_CASCADE")}var _=t.shadowUniforms;function x(S){return S.height}if(o.length>0){var y=o.map(x);if(_.directionalLightShadowMaps={value:o,type:"tv"},_.directionalLightMatrices={value:l,type:"m4v"},_.directionalLightShadowMapSizes={value:y,type:"1fv"},f){var T=u.slice(),E=u.slice();T.pop(),E.shift(),T.reverse(),E.reverse(),l.reverse(),_.shadowCascadeClipsNear={value:T,type:"1fv"},_.shadowCascadeClipsFar={value:E,type:"1fv"}}}if(a.length>0){var F=a.map(x),_=t.shadowUniforms;_.spotLightShadowMaps={value:a,type:"tv"},_.spotLightMatrices={value:s,type:"m4v"},_.spotLightShadowMapSizes={value:F,type:"1fv"}}c.length>0&&(_.pointLightShadowMaps={value:c,type:"tv"})},renderDirectionalLightShadow:function(){var e=new ga,t=new z,A=new $e,r=new z,n=new z,i=new z,a=new z;return function(s,o,l,u,c,f,h){var d=this._getDepthMaterial(u),g={getMaterial:function(ie){return ie.shadowDepthMaterial||d},isMaterialChanged:Gl,getUniform:ts,ifRender:function(ie){return ie.castShadow},sortCompare:bt.opaqueSortCompare};if(!o.viewBoundingBoxLastFrame.isFinite()){var v=o.getBoundingBox();o.viewBoundingBoxLastFrame.copy(v).applyTransform(l.viewMatrix)}var p=Math.min(-o.viewBoundingBoxLastFrame.min.z,l.far),m=Math.max(-o.viewBoundingBoxLastFrame.max.z,l.near),B=this._getDirectionalLightCamera(u,o,l),_=i.array;a.copy(B.projectionMatrix),R.invert(n.array,B.worldTransform.array),R.multiply(n.array,n.array,l.worldTransform.array),R.multiply(_,a.array,n.array);for(var x=[],y=l instanceof ze,T=(l.near+l.far)/(l.near-l.far),E=2*l.near*l.far/(l.near-l.far),F=0;F<=u.shadowCascade;F++){var S=m*Math.pow(p/m,F/u.shadowCascade),U=m+(p-m)*F/u.shadowCascade,I=S*u.cascadeSplitLogFactor+U*(1-u.cascadeSplitLogFactor);x.push(I),c.push(-(-I*T+E)/-I)}var Q=this._getTexture(u,u.shadowCascade);h.push(Q);var b=s.viewport,N=s.gl;this._frameBuffer.attach(Q),this._frameBuffer.bind(s),N.clear(N.COLOR_BUFFER_BIT|N.DEPTH_BUFFER_BIT);for(var F=0;F<u.shadowCascade;F++){var H=x[F],V=x[F+1];y?R.perspective(t.array,l.fov/180*Math.PI,l.aspect,H,V):R.ortho(t.array,l.left,l.right,l.bottom,l.top,H,V),e.setFromProjection(t),e.getTransformedBoundingBox(A,n),A.applyProjection(a);var G=A.min.array,j=A.max.array;G[0]=Math.max(G[0],-1),G[1]=Math.max(G[1],-1),j[0]=Math.min(j[0],1),j[1]=Math.min(j[1],1),r.ortho(G[0],j[0],G[1],j[1],1,-1),B.projectionMatrix.multiplyLeft(r);var W=u.shadowResolution||512;s.setViewport((u.shadowCascade-F-1)*W,0,W,W,1);var ne=o.updateRenderList(B);s.renderPass(ne.opaque,B,g),this.softShadow===Kt.VSM&&this._gaussianFilter(s,Q,Q.width);var ee=new z;ee.copy(B.viewMatrix).multiplyLeft(B.projectionMatrix),f.push(ee.array),B.projectionMatrix.copy(a)}this._frameBuffer.unbind(s),s.setViewport(b)}}(),renderSpotLightShadow:function(e,t,A,r,n){var i=this._getTexture(A),a=this._getSpotLightCamera(A),s=e.gl;this._frameBuffer.attach(i),this._frameBuffer.bind(e),s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT);var o=this._getDepthMaterial(A),l={getMaterial:function(f){return f.shadowDepthMaterial||o},isMaterialChanged:Gl,getUniform:ts,ifRender:function(f){return f.castShadow},sortCompare:bt.opaqueSortCompare},u=t.updateRenderList(a);e.renderPass(u.opaque,a,l),this._frameBuffer.unbind(e),this.softShadow===Kt.VSM&&this._gaussianFilter(e,i,i.width);var c=new z;c.copy(a.worldTransform).invert().multiplyLeft(a.projectionMatrix),n.push(i),r.push(c.array)},renderPointLightShadow:function(e,t,A,r){var n=this._getTexture(A),i=e.gl;r.push(n);var a=this._getDepthMaterial(A),s={getMaterial:function(m){return m.shadowDepthMaterial||a},getUniform:ts,sortCompare:bt.opaqueSortCompare},o={px:[],py:[],pz:[],nx:[],ny:[],nz:[]},l=new $e,u=A.getWorldPosition().array,c=new $e,f=A.range;c.min.setArray(u),c.max.setArray(u);var h=new L(f,f,f);c.max.add(h),c.min.sub(h);var d={px:!1,py:!1,pz:!1,nx:!1,ny:!1,nz:!1};t.traverse(function(m){if(m.isRenderable()&&m.castShadow){var B=m.geometry;if(!B.boundingBox){for(var _=0;_<fA.length;_++)o[fA[_]].push(m);return}if(l.transformFrom(B.boundingBox,m.worldTransform),!l.intersectBoundingBox(c))return;l.updateVertices();for(var _=0;_<fA.length;_++)d[fA[_]]=!1;for(var _=0;_<8;_++){var x=l.vertices[_],y=x[0]-u[0],T=x[1]-u[1],E=x[2]-u[2],F=Math.abs(y),S=Math.abs(T),U=Math.abs(E);F>S?F>U?d[y>0?"px":"nx"]=!0:d[E>0?"pz":"nz"]=!0:S>U?d[T>0?"py":"ny"]=!0:d[E>0?"pz":"nz"]=!0}for(var _=0;_<fA.length;_++)d[fA[_]]&&o[fA[_]].push(m)}});for(var g=0;g<6;g++){var v=fA[g],p=this._getPointLightCamera(A,v);this._frameBuffer.attach(n,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+g),this._frameBuffer.bind(e),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT),e.renderPass(o[v],p,s)}this._frameBuffer.unbind(e)},_getDepthMaterial:function(e){var t=this._lightMaterials[e.__uid__],A=e.type==="POINT_LIGHT";if(!t){var r=A?"clay.sm.distance.":"clay.sm.depth.";t=new St({precision:this.precision,shader:new K(K.source(r+"vertex"),K.source(r+"fragment"))}),this._lightMaterials[e.__uid__]=t}return e.shadowSlopeScale!=null&&t.setUniform("slopeScale",e.shadowSlopeScale),e.shadowBias!=null&&t.setUniform("bias",e.shadowBias),this.softShadow===Kt.VSM?t.define("fragment","USE_VSM"):t.undefine("fragment","USE_VSM"),A&&(t.set("lightPosition",e.getWorldPosition().array),t.set("range",e.range)),t},_gaussianFilter:function(e,t,A){var r={width:A,height:A,type:P.FLOAT},n=this._texturePool.get(r);this._frameBuffer.attach(n),this._frameBuffer.bind(e),this._gaussianPassH.setUniform("texture",t),this._gaussianPassH.setUniform("textureWidth",A),this._gaussianPassH.render(e),this._frameBuffer.attach(t),this._gaussianPassV.setUniform("texture",n),this._gaussianPassV.setUniform("textureHeight",A),this._gaussianPassV.render(e),this._frameBuffer.unbind(e),this._texturePool.put(n)},_getTexture:function(e,t){var A=e.__uid__,r=this._textures[A],n=e.shadowResolution||512;return t=t||1,r||(e.type==="POINT_LIGHT"?r=new qA:r=new $,r.width=n*t,r.height=n,this.softShadow===Kt.VSM?(r.type=P.FLOAT,r.anisotropic=4):(r.minFilter=D.NEAREST,r.magFilter=D.NEAREST,r.useMipmap=!1),this._textures[A]=r),r},_getPointLightCamera:function(e,t){this._lightCameras.point||(this._lightCameras.point={px:new ze,nx:new ze,py:new ze,ny:new ze,pz:new ze,nz:new ze});var A=this._lightCameras.point[t];switch(A.far=e.range,A.fov=90,A.position.set(0,0,0),t){case"px":A.lookAt(L.POSITIVE_X,L.NEGATIVE_Y);break;case"nx":A.lookAt(L.NEGATIVE_X,L.NEGATIVE_Y);break;case"py":A.lookAt(L.POSITIVE_Y,L.POSITIVE_Z);break;case"ny":A.lookAt(L.NEGATIVE_Y,L.NEGATIVE_Z);break;case"pz":A.lookAt(L.POSITIVE_Z,L.NEGATIVE_Y);break;case"nz":A.lookAt(L.NEGATIVE_Z,L.NEGATIVE_Y);break}return e.getWorldPosition(A.position),A.update(),A},_getDirectionalLightCamera:function(){var e=new z,t=new $e,A=new $e;return function(r,n,i){this._lightCameras.directional||(this._lightCameras.directional=new Qr);var a=this._lightCameras.directional;t.copy(n.viewBoundingBoxLastFrame),t.intersection(i.frustum.boundingBox),a.position.copy(t.min).add(t.max).scale(.5).transformMat4(i.worldTransform),a.rotation.copy(r.rotation),a.scale.copy(r.scale),a.updateWorldTransform(),z.invert(e,a.worldTransform),z.multiply(e,e,i.worldTransform),A.copy(t).applyTransform(e);var s=A.min.array,o=A.max.array;return a.position.set((s[0]+o[0])/2,(s[1]+o[1])/2,o[2]).transformMat4(a.worldTransform),a.near=0,a.far=-s[2]+o[2],isNaN(this.lightFrustumBias)?a.far*=4:a.far+=this.lightFrustumBias,a.left=s[0],a.right=o[0],a.top=o[1],a.bottom=s[1],a.update(!0),a}}(),_getSpotLightCamera:function(e){this._lightCameras.spot||(this._lightCameras.spot=new ze);var t=this._lightCameras.spot;return t.fov=e.penumbraAngle*2,t.far=e.range,t.worldTransform.copy(e.worldTransform),t.updateProjectionMatrix(),R.invert(t.viewMatrix.array,t.worldTransform.array),t},dispose:function(e){var t=e.gl||e;this._frameBuffer&&this._frameBuffer.dispose(t);for(var A in this._textures)this._textures[A].dispose(t);this._texturePool.clear(e.gl),this._depthMaterials={},this._distanceMaterials={},this._textures={},this._lightCameras={},this._shadowMapNumber={POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},this._meshMaterials={};for(var r=0;r<this._receivers.length;r++){var n=this._receivers[r];if(n.material){var i=n.material;i.undefine("fragment","POINT_LIGHT_SHADOW_COUNT"),i.undefine("fragment","DIRECTIONAL_LIGHT_SHADOW_COUNT"),i.undefine("fragment","AMBIENT_LIGHT_SHADOW_COUNT"),i.set("shadowEnabled",0)}}this._receivers=[],this._lightsCastShadow=[]}});Kt.VSM=1;Kt.PCF=2;var Un=tt.extend(function(){return{name:"",inputLinks:{},outputLinks:{},_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},{updateParameter:function(e,t){var A=this.outputs[e],r=A.parameters,n=A._parametersCopy;if(n||(n=A._parametersCopy={}),r)for(var i in r)i!=="width"&&i!=="height"&&(n[i]=r[i]);var a,s;return r.width instanceof Function?a=r.width.call(this,t):a=r.width,r.height instanceof Function?s=r.height.call(this,t):s=r.height,(n.width!==a||n.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t.gl),n.width=a,n.height=s,n},setParameter:function(e,t){},getParameter:function(e){},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},render:function(){},getOutput:function(e,t){if(t==null)return t=e,this._outputTextures[t];var A=this.outputs[t];if(A)return this._rendered?A.outputLastFrame?this._prevOutputTextures[t]:this._outputTextures[t]:this._rendering?(this._prevOutputTextures[t]||(this._prevOutputTextures[t]=this._compositor.allocateTexture(A.parameters||{})),this._prevOutputTextures[t]):(this.render(e),this._outputTextures[t])},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},link:function(e,t,A){this.inputLinks[e]={node:t,pin:A},t.outputLinks[A]||(t.outputLinks[A]=[]),t.outputLinks[A].push({node:this,pin:e}),this.pass.material.enableTexture(e)},clear:function(){this.inputLinks={},this.outputLinks={}},updateReference:function(e){if(!this._rendering){this._rendering=!0;for(var t in this.inputLinks){var A=this.inputLinks[t];A.node.updateReference(A.pin)}this._rendering=!1}e&&this._outputReferences[e]++},beforeFrame:function(){this._rendered=!1;for(var e in this.outputLinks)this._outputReferences[e]=0},afterFrame:function(){for(var e in this.outputLinks)if(this._outputReferences[e]>0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}}}),Vl=tt.extend(function(){return{nodes:[]}},{dirty:function(){this._dirty=!0},addNode:function(e){this.nodes.indexOf(e)>=0||(this.nodes.push(e),this._dirty=!0)},removeNode:function(e){typeof e=="string"&&(e=this.getNodeByName(e));var t=this.nodes.indexOf(e);t>=0&&(this.nodes.splice(t,1),this._dirty=!0)},getNodeByName:function(e){for(var t=0;t<this.nodes.length;t++)if(this.nodes[t].name===e)return this.nodes[t]},update:function(){for(var e=0;e<this.nodes.length;e++)this.nodes[e].clear();for(var e=0;e<this.nodes.length;e++){var t=this.nodes[e];if(t.inputs){for(var A in t.inputs)if(t.inputs[A]){if(t.pass&&!t.pass.material.isUniformEnabled(A)){console.warn("Pin "+t.name+"."+A+" not used.");continue}var r=t.inputs[A],n=this.findPin(r);n?t.link(A,n.node,n.pin):console.warn(typeof r=="string"?"Node "+r+" not exist":"Pin of "+r.node+"."+r.pin+" not exist")}}}},findPin:function(e){var t;if((typeof e=="string"||e instanceof Un)&&(e={node:e}),typeof e.node=="string")for(var A=0;A<this.nodes.length;A++){var r=this.nodes[A];r.name===e.node&&(t=r)}else t=e.node;if(t){var n=e.pin;if(n||t.outputs&&(n=Object.keys(t.outputs)[0]),t.outputs[n])return{node:t,pin:n}}}}),sp=Vl.extend(function(){return{_outputs:[],_texturePool:new Wi,_frameBuffer:new Qe({depthBuffer:!1})}},{addNode:function(e){Vl.prototype.addNode.call(this,e),e._compositor=this},render:function(e,t){if(this._dirty){this.update(),this._dirty=!1,this._outputs.length=0;for(var A=0;A<this.nodes.length;A++)this.nodes[A].outputs||this._outputs.push(this.nodes[A])}for(var A=0;A<this.nodes.length;A++)this.nodes[A].beforeFrame();for(var A=0;A<this._outputs.length;A++)this._outputs[A].updateReference();for(var A=0;A<this._outputs.length;A++)this._outputs[A].render(e,t);for(var A=0;A<this.nodes.length;A++)this.nodes[A].afterFrame()},allocateTexture:function(e){return this._texturePool.get(e)},releaseTexture:function(e){this._texturePool.put(e)},getFrameBuffer:function(){return this._frameBuffer},dispose:function(e){this._texturePool.clear(e)}}),op=Un.extend({name:"scene",scene:null,camera:null,autoUpdateScene:!0,preZ:!1},function(){this.frameBuffer=new Qe},{render:function(e){this._rendering=!0;var t=e.gl;this.trigger("beforerender");var A;if(!this.outputs)A=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ);else{var r=this.frameBuffer;for(var n in this.outputs){var i=this.updateParameter(n,e),a=this.outputs[n],s=this._compositor.allocateTexture(i);this._outputTextures[n]=s;var o=a.attachment||t.COLOR_ATTACHMENT0;typeof o=="string"&&(o=t[o]),r.attach(s,o)}r.bind(e);var l=e.getGLExtension("EXT_draw_buffers");if(l){var u=[];for(var o in this.outputs)o=parseInt(o),o>=t.COLOR_ATTACHMENT0&&o<=t.COLOR_ATTACHMENT0+8&&u.push(o);l.drawBuffersEXT(u)}e.saveClear(),e.clearBit=D.DEPTH_BUFFER_BIT|D.COLOR_BUFFER_BIT,A=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ),e.restoreClear(),r.unbind(e)}this.trigger("afterrender",A),this._rendering=!1,this._rendered=!0}}),lp=Un.extend(function(){return{texture:null,outputs:{color:{}}}},function(){},{getOutput:function(e,t){return this.texture},beforeFrame:function(){},afterFrame:function(){}}),up=Un.extend(function(){return{name:"",inputs:{},outputs:null,shader:"",inputLinks:{},outputLinks:{},pass:null,_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},function(){var e=new Me({fragment:this.shader});this.pass=e},{render:function(e,t){this.trigger("beforerender",e),this._rendering=!0;var A=e.gl;for(var r in this.inputLinks){var n=this.inputLinks[r],i=n.node.getOutput(e,n.pin);this.pass.setUniform(r,i)}if(!this.outputs)this.pass.outputs=null,this._compositor.getFrameBuffer().unbind(e),this.pass.render(e,t);else{this.pass.outputs={};var a={};for(var s in this.outputs){var o=this.updateParameter(s,e);isNaN(o.width)&&this.updateParameter(s,e);var l=this.outputs[s],u=this._compositor.allocateTexture(o);this._outputTextures[s]=u;var c=l.attachment||A.COLOR_ATTACHMENT0;typeof c=="string"&&(c=A[c]),a[c]=u}this._compositor.getFrameBuffer().bind(e);for(var c in a)this._compositor.getFrameBuffer().attach(a[c],c);this.pass.render(e),this._compositor.getFrameBuffer().updateMipmap(e)}for(var r in this.inputLinks){var n=this.inputLinks[r];n.node.removeReference(n.pin)}this._rendering=!1,this._rendered=!0,this.trigger("afterrender",e)},updateParameter:function(e,t){var A=this.outputs[e],r=A.parameters,n=A._parametersCopy;if(n||(n=A._parametersCopy={}),r)for(var i in r)i!=="width"&&i!=="height"&&(n[i]=r[i]);var a,s;return typeof r.width=="function"?a=r.width.call(this,t):a=r.width,typeof r.height=="function"?s=r.height.call(this,t):s=r.height,a=Math.ceil(a),s=Math.ceil(s),(n.width!==a||n.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t),n.width=a,n.height=s,n},setParameter:function(e,t){this.pass.setUniform(e,t)},getParameter:function(e){return this.pass.getUniform(e)},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},define:function(e,t){this.pass.material.define("fragment",e,t)},undefine:function(e){this.pass.material.undefine("fragment",e)},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},clear:function(){Un.prototype.clear.call(this),this.pass.material.disableTexturesAll()}});const cp=`@export clay.compositor.coloradjust
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float exposure : 0.0;
uniform float gamma : 1.0;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = clamp(tex.rgb + vec3(brightness), 0.0, 1.0);
 color = clamp( (color-vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 color = clamp( color * pow(2.0, exposure), 0.0, 1.0);
 color = clamp( pow(color, vec3(gamma)), 0.0, 1.0);
 float luminance = dot( color, w );
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.brightness
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = tex.rgb + vec3(brightness);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.contrast
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float contrast : 1.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = (tex.rgb-vec3(0.5))*contrast+vec3(0.5);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.exposure
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float exposure : 0.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb * pow(2.0, exposure);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.gamma
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float gamma : 1.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = pow(tex.rgb, vec3(gamma));
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.saturation
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb;
 float luminance = dot(color, w);
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end`,jc=`@export clay.compositor.kernel.gaussian_9
float gaussianKernel[9];
gaussianKernel[0] = 0.07;
gaussianKernel[1] = 0.09;
gaussianKernel[2] = 0.12;
gaussianKernel[3] = 0.14;
gaussianKernel[4] = 0.16;
gaussianKernel[5] = 0.14;
gaussianKernel[6] = 0.12;
gaussianKernel[7] = 0.09;
gaussianKernel[8] = 0.07;
@end
@export clay.compositor.kernel.gaussian_13
float gaussianKernel[13];
gaussianKernel[0] = 0.02;
gaussianKernel[1] = 0.03;
gaussianKernel[2] = 0.06;
gaussianKernel[3] = 0.08;
gaussianKernel[4] = 0.11;
gaussianKernel[5] = 0.13;
gaussianKernel[6] = 0.14;
gaussianKernel[7] = 0.13;
gaussianKernel[8] = 0.11;
gaussianKernel[9] = 0.08;
gaussianKernel[10] = 0.06;
gaussianKernel[11] = 0.03;
gaussianKernel[12] = 0.02;
@end
@export clay.compositor.gaussian_blur
#define SHADER_NAME gaussian_blur
uniform sampler2D texture;varying vec2 v_Texcoord;
uniform float blurSize : 2.0;
uniform vec2 textureSize : [512.0, 512.0];
uniform float blurDir : 0.0;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main (void)
{
 @import clay.compositor.kernel.gaussian_9
 vec2 off = blurSize / textureSize;
 off *= vec2(1.0 - blurDir, blurDir);
 vec4 sum = vec4(0.0);
 float weightAll = 0.0;
 for (int i = 0; i < 9; i++) {
 float w = gaussianKernel[i];
 vec4 texel = decodeHDR(clampSample(texture, v_Texcoord + float(i - 4) * off));
 sum += texel * w;
 weightAll += w;
 }
 gl_FragColor = encodeHDR(sum / max(weightAll, 0.01));
}
@end
`,fp=`@export clay.compositor.hdr.log_lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 float luminance = dot(tex.rgb, w);
 luminance = log(luminance + 0.001);
 gl_FragColor = encodeHDR(vec4(vec3(luminance), 1.0));
}
@end
@export clay.compositor.hdr.lum_adaption
varying vec2 v_Texcoord;
uniform sampler2D adaptedLum;
uniform sampler2D currentLum;
uniform float frameTime : 0.02;
@import clay.util.rgbm
void main()
{
 float fAdaptedLum = decodeHDR(texture2D(adaptedLum, vec2(0.5, 0.5))).r;
 float fCurrentLum = exp(encodeHDR(texture2D(currentLum, vec2(0.5, 0.5))).r);
 fAdaptedLum += (fCurrentLum - fAdaptedLum) * (1.0 - pow(0.98, 30.0 * frameTime));
 gl_FragColor = encodeHDR(vec4(vec3(fAdaptedLum), 1.0));
}
@end
@export clay.compositor.lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord );
 float luminance = dot(tex.rgb, w);
 gl_FragColor = vec4(vec3(luminance), 1.0);
}
@end`,qc=`
@export clay.compositor.lut
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform sampler2D lookup;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 float blueColor = tex.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec4 newColor1 = texture2D(lookup, texPos1);
 vec4 newColor2 = texture2D(lookup, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 gl_FragColor = vec4(newColor.rgb, tex.w);
}
@end`,hp=`@export clay.compositor.vignette
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float darkness: 1;
uniform float offset: 1;
@import clay.util.rgbm
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = texel.rgb;
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(offset);
 gl_FragColor = encodeHDR(vec4(mix(texel.rgb, vec3(1.0 - darkness), dot(uv, uv)), texel.a));
}
@end`,$c=`@export clay.compositor.output
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = tex.rgb;
#ifdef OUTPUT_ALPHA
 gl_FragColor.a = tex.a;
#else
 gl_FragColor.a = 1.0;
#endif
 gl_FragColor = encodeHDR(gl_FragColor);
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,ef=`@export clay.compositor.bright
uniform sampler2D texture;
uniform float threshold : 1;
uniform float scale : 1.0;
uniform vec2 textureSize: [512, 512];
varying vec2 v_Texcoord;
const vec3 lumWeight = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
vec4 median(vec4 a, vec4 b, vec4 c)
{
 return a + b + c - min(min(a, b), c) - max(max(a, b), c);
}
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
#ifdef ANTI_FLICKER
 vec3 d = 1.0 / textureSize.xyx * vec3(1.0, 1.0, 0.0);
 vec4 s1 = decodeHDR(texture2D(texture, v_Texcoord - d.xz));
 vec4 s2 = decodeHDR(texture2D(texture, v_Texcoord + d.xz));
 vec4 s3 = decodeHDR(texture2D(texture, v_Texcoord - d.zy));
 vec4 s4 = decodeHDR(texture2D(texture, v_Texcoord + d.zy));
 texel = median(median(texel, s1, s2), s3, s4);
#endif
 float lum = dot(texel.rgb , lumWeight);
 vec4 color;
 if (lum > threshold && texel.a > 0.0)
 {
 color = vec4(texel.rgb * scale, texel.a * scale);
 }
 else
 {
 color = vec4(0.0);
 }
 gl_FragColor = encodeHDR(color);
}
@end
`,tf=`@export clay.compositor.downsample
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
varying vec2 v_Texcoord;
@import clay.util.rgbm
float brightness(vec3 c)
{
 return max(max(c.r, c.g), c.b);
}
@import clay.util.clamp_sample
void main()
{
 vec4 d = vec4(-1.0, -1.0, 1.0, 1.0) / textureSize.xyxy;
#ifdef ANTI_FLICKER
 vec3 s1 = decodeHDR(clampSample(texture, v_Texcoord + d.xy)).rgb;
 vec3 s2 = decodeHDR(clampSample(texture, v_Texcoord + d.zy)).rgb;
 vec3 s3 = decodeHDR(clampSample(texture, v_Texcoord + d.xw)).rgb;
 vec3 s4 = decodeHDR(clampSample(texture, v_Texcoord + d.zw)).rgb;
 float s1w = 1.0 / (brightness(s1) + 1.0);
 float s2w = 1.0 / (brightness(s2) + 1.0);
 float s3w = 1.0 / (brightness(s3) + 1.0);
 float s4w = 1.0 / (brightness(s4) + 1.0);
 float oneDivideSum = 1.0 / (s1w + s2w + s3w + s4w);
 vec4 color = vec4(
 (s1 * s1w + s2 * s2w + s3 * s3w + s4 * s4w) * oneDivideSum,
 1.0
 );
#else
 vec4 color = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 color *= 0.25;
#endif
 gl_FragColor = encodeHDR(color);
}
@end`,Af=`
@export clay.compositor.upsample
#define HIGH_QUALITY
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
uniform float sampleScale: 0.5;
varying vec2 v_Texcoord;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main()
{
#ifdef HIGH_QUALITY
 vec4 d = vec4(1.0, 1.0, -1.0, 0.0) / textureSize.xyxy * sampleScale;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord - d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord - d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord - d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord )) * 4.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 gl_FragColor = encodeHDR(s / 16.0);
#else
 vec4 d = vec4(-1.0, -1.0, +1.0, +1.0) / textureSize.xyxy;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 gl_FragColor = encodeHDR(s / 4.0);
#endif
}
@end`,rf=`@export clay.compositor.hdr.composite
#define TONEMAPPING
uniform sampler2D texture;
#ifdef BLOOM_ENABLED
uniform sampler2D bloom;
#endif
#ifdef LENSFLARE_ENABLED
uniform sampler2D lensflare;
uniform sampler2D lensdirt;
#endif
#ifdef LUM_ENABLED
uniform sampler2D lum;
#endif
#ifdef LUT_ENABLED
uniform sampler2D lut;
#endif
#ifdef COLOR_CORRECTION
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float saturation : 1.0;
#endif
#ifdef VIGNETTE
uniform float vignetteDarkness: 1.0;
uniform float vignetteOffset: 1.0;
#endif
uniform float exposure : 1.0;
uniform float bloomIntensity : 0.25;
uniform float lensflareIntensity : 1;
varying vec2 v_Texcoord;
@import clay.util.srgb
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
float eyeAdaption(float fLum)
{
 return mix(0.2, fLum, 0.5);
}
#ifdef LUT_ENABLED
vec3 lutTransform(vec3 color) {
 float blueColor = color.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec4 newColor1 = texture2D(lut, texPos1);
 vec4 newColor2 = texture2D(lut, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 return newColor.rgb;
}
#endif
@import clay.util.rgbm
void main()
{
 vec4 texel = vec4(0.0);
 vec4 originalTexel = vec4(0.0);
#ifdef TEXTURE_ENABLED
 texel = decodeHDR(texture2D(texture, v_Texcoord));
 originalTexel = texel;
#endif
#ifdef BLOOM_ENABLED
 vec4 bloomTexel = decodeHDR(texture2D(bloom, v_Texcoord));
 texel.rgb += bloomTexel.rgb * bloomIntensity;
 texel.a += bloomTexel.a * bloomIntensity;
#endif
#ifdef LENSFLARE_ENABLED
 texel += decodeHDR(texture2D(lensflare, v_Texcoord)) * texture2D(lensdirt, v_Texcoord) * lensflareIntensity;
#endif
 texel.a = min(texel.a, 1.0);
#ifdef LUM_ENABLED
 float fLum = texture2D(lum, vec2(0.5, 0.5)).r;
 float adaptedLumDest = 3.0 / (max(0.1, 1.0 + 10.0*eyeAdaption(fLum)));
 float exposureBias = adaptedLumDest * exposure;
#else
 float exposureBias = exposure;
#endif
#ifdef TONEMAPPING
 texel.rgb *= exposureBias;
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
 texel = linearTosRGB(texel);
#ifdef LUT_ENABLED
 texel.rgb = lutTransform(clamp(texel.rgb,vec3(0.0),vec3(1.0)));
#endif
#ifdef COLOR_CORRECTION
 texel.rgb = clamp(texel.rgb + vec3(brightness), 0.0, 1.0);
 texel.rgb = clamp((texel.rgb - vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 float lum = dot(texel.rgb, vec3(0.2125, 0.7154, 0.0721));
 texel.rgb = mix(vec3(lum), texel.rgb, saturation);
#endif
#ifdef VIGNETTE
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(vignetteOffset);
 texel.rgb = mix(texel.rgb, vec3(1.0 - vignetteDarkness), dot(uv, uv));
#endif
 gl_FragColor = encodeHDR(texel);
#ifdef DEBUG
 #if DEBUG == 1
 gl_FragColor = encodeHDR(decodeHDR(texture2D(texture, v_Texcoord)));
 #elif DEBUG == 2
 gl_FragColor = encodeHDR(decodeHDR(texture2D(bloom, v_Texcoord)) * bloomIntensity);
 #elif DEBUG == 3
 gl_FragColor = encodeHDR(decodeHDR(texture2D(lensflare, v_Texcoord) * lensflareIntensity));
 #endif
#endif
 if (originalTexel.a <= 0.01 && gl_FragColor.a > 1e-5) {
 gl_FragColor.a = dot(gl_FragColor.rgb, vec3(0.2125, 0.7154, 0.0721));
 }
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,dp=`@export clay.compositor.lensflare
#define SAMPLE_NUMBER 8
uniform sampler2D texture;
uniform sampler2D lenscolor;
uniform vec2 textureSize : [512, 512];
uniform float dispersal : 0.3;
uniform float haloWidth : 0.4;
uniform float distortion : 1.0;
varying vec2 v_Texcoord;
@import clay.util.rgbm
vec4 textureDistorted(
 in vec2 texcoord,
 in vec2 direction,
 in vec3 distortion
) {
 return vec4(
 decodeHDR(texture2D(texture, texcoord + direction * distortion.r)).r,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.g)).g,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.b)).b,
 1.0
 );
}
void main()
{
 vec2 texcoord = -v_Texcoord + vec2(1.0); vec2 textureOffset = 1.0 / textureSize;
 vec2 ghostVec = (vec2(0.5) - texcoord) * dispersal;
 vec2 haloVec = normalize(ghostVec) * haloWidth;
 vec3 distortion = vec3(-textureOffset.x * distortion, 0.0, textureOffset.x * distortion);
 vec4 result = vec4(0.0);
 for (int i = 0; i < SAMPLE_NUMBER; i++)
 {
 vec2 offset = fract(texcoord + ghostVec * float(i));
 float weight = length(vec2(0.5) - offset) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 }
 result *= texture2D(lenscolor, vec2(length(vec2(0.5) - texcoord)) / length(vec2(0.5)));
 float weight = length(vec2(0.5) - fract(texcoord + haloVec)) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 vec2 offset = fract(texcoord + haloVec);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 gl_FragColor = result;
}
@end`,nf=`@export clay.compositor.blend
#define SHADER_NAME blend
#ifdef TEXTURE1_ENABLED
uniform sampler2D texture1;
uniform float weight1 : 1.0;
#endif
#ifdef TEXTURE2_ENABLED
uniform sampler2D texture2;
uniform float weight2 : 1.0;
#endif
#ifdef TEXTURE3_ENABLED
uniform sampler2D texture3;
uniform float weight3 : 1.0;
#endif
#ifdef TEXTURE4_ENABLED
uniform sampler2D texture4;
uniform float weight4 : 1.0;
#endif
#ifdef TEXTURE5_ENABLED
uniform sampler2D texture5;
uniform float weight5 : 1.0;
#endif
#ifdef TEXTURE6_ENABLED
uniform sampler2D texture6;
uniform float weight6 : 1.0;
#endif
varying vec2 v_Texcoord;
@import clay.util.rgbm
void main()
{
 vec4 tex = vec4(0.0);
#ifdef TEXTURE1_ENABLED
 tex += decodeHDR(texture2D(texture1, v_Texcoord)) * weight1;
#endif
#ifdef TEXTURE2_ENABLED
 tex += decodeHDR(texture2D(texture2, v_Texcoord)) * weight2;
#endif
#ifdef TEXTURE3_ENABLED
 tex += decodeHDR(texture2D(texture3, v_Texcoord)) * weight3;
#endif
#ifdef TEXTURE4_ENABLED
 tex += decodeHDR(texture2D(texture4, v_Texcoord)) * weight4;
#endif
#ifdef TEXTURE5_ENABLED
 tex += decodeHDR(texture2D(texture5, v_Texcoord)) * weight5;
#endif
#ifdef TEXTURE6_ENABLED
 tex += decodeHDR(texture2D(texture6, v_Texcoord)) * weight6;
#endif
 gl_FragColor = encodeHDR(tex);
}
@end`,af=`@export clay.compositor.fxaa
uniform sampler2D texture;
uniform vec4 viewport : VIEWPORT;
varying vec2 v_Texcoord;
#define FXAA_REDUCE_MIN (1.0/128.0)
#define FXAA_REDUCE_MUL (1.0/8.0)
#define FXAA_SPAN_MAX 8.0
@import clay.util.rgbm
void main()
{
 vec2 resolution = 1.0 / viewport.zw;
 vec3 rgbNW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbNE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ) ).xyz;
 vec4 rgbaM = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution ) );
 vec3 rgbM = rgbaM.xyz;
 float opacity = rgbaM.w;
 vec3 luma = vec3( 0.299, 0.587, 0.114 );
 float lumaNW = dot( rgbNW, luma );
 float lumaNE = dot( rgbNE, luma );
 float lumaSW = dot( rgbSW, luma );
 float lumaSE = dot( rgbSE, luma );
 float lumaM = dot( rgbM, luma );
 float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );
 float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );
 vec2 dir;
 dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
 dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));
 float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );
 float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );
 dir = min( vec2( FXAA_SPAN_MAX, FXAA_SPAN_MAX),
 max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
 dir * rcpDirMin)) * resolution;
 vec3 rgbA = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 1.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 2.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA *= 0.5;
 vec3 rgbB = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * -0.5 ) ).xyz;
 rgbB += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * 0.5 ) ).xyz;
 rgbB *= 0.25;
 rgbB += rgbA * 0.5;
 float lumaB = dot( rgbB, luma );
 if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) )
 {
 gl_FragColor = vec4( rgbA, opacity );
 }
 else {
 gl_FragColor = vec4( rgbB, opacity );
 }
}
@end`;function gp(e){e.import(cp),e.import(jc),e.import(fp),e.import(qc),e.import(hp),e.import($c),e.import(ef),e.import(tf),e.import(Af),e.import(rf),e.import(dp),e.import(nf),e.import(af)}gp(K);var vp=/^#source\((.*?)\)/;function pp(e,t){var A=new sp;t=t||{};var r={textures:{},parameters:{}},n=function(s,o){for(var l=0;l<e.nodes.length;l++){var u=e.nodes[l],c=mp(u,r,t);c&&A.addNode(c)}};for(var i in e.parameters){var a=e.parameters[i];r.parameters[i]=So(a)}return wp(e,r,t,function(s){r.textures=s,n()}),A}function mp(e,t,A){var r=e.type||"filter",n,i,a;if(r==="filter"){var s=e.shader.trim(),o=vp.exec(s);if(o?n=K.source(o[1].trim()):s.charAt(0)==="#"&&(n=t.shaders[s.substr(1)]),n||(n=s),!n)return}if(e.inputs){i={};for(var l in e.inputs)typeof e.inputs[l]=="string"?i[l]=e.inputs[l]:i[l]={node:e.inputs[l].node,pin:e.inputs[l].pin}}if(e.outputs){a={};for(var l in e.outputs){var u=e.outputs[l];a[l]={},u.attachment!=null&&(a[l].attachment=u.attachment),u.keepLastFrame!=null&&(a[l].keepLastFrame=u.keepLastFrame),u.outputLastFrame!=null&&(a[l].outputLastFrame=u.outputLastFrame),u.parameters&&(a[l].parameters=So(u.parameters))}}var c;if(r==="scene"?c=new op({name:e.name,scene:A.scene,camera:A.camera,outputs:a}):r==="texture"?c=new lp({name:e.name,outputs:a}):c=new up({name:e.name,shader:n,inputs:i,outputs:a}),c){if(e.parameters)for(var l in e.parameters){var f=e.parameters[l];typeof f=="string"?(f=f.trim(),f.charAt(0)==="#"?f=t.textures[f.substr(1)]:c.on("beforerender",yp(l,sf(f)))):typeof f=="function"&&c.on("beforerender",f),c.setParameter(l,f)}if(e.defines&&c.pass)for(var l in e.defines){var f=e.defines[l];c.pass.material.define("fragment",l,f)}}return c}function _p(e,t){return e}function Bp(e,t){return t}function So(e){var t={};if(!e)return t;["type","minFilter","magFilter","wrapS","wrapT","flipY","useMipmap"].forEach(function(r){var n=e[r];n!=null&&(typeof n=="string"&&(n=P[n]),t[r]=n)});var A=e.scale||1;return["width","height"].forEach(function(r){if(e[r]!=null){var n=e[r];typeof n=="string"?(n=n.trim(),t[r]=xp(r,sf(n),A)):t[r]=n}}),t.width||(t.width=_p),t.height||(t.height=Bp),e.useMipmap!=null&&(t.useMipmap=e.useMipmap),t}function wp(e,t,A,r){if(!e.textures){r({});return}var n={},i=0,a=!1,s=A.textureRootPath;be.each(e.textures,function(o,l){var u,c=o.path,f=So(o.parameters);if(Array.isArray(c)&&c.length===6)s&&(c=c.map(function(h){return be.relative2absolute(h,s)})),u=new qA(f);else if(typeof c=="string")s&&(c=be.relative2absolute(c,s)),u=new $(f);else return;u.load(c),i++,u.once("success",function(){n[l]=u,i--,i===0&&(r(n),a=!0)})}),i===0&&!a&&r(n)}function yp(e,t){return function(A){var r=A.getDevicePixelRatio(),n=A.getWidth(),i=A.getHeight(),a=t(n,i,r);this.setParameter(e,a)}}function xp(e,t,A){return A=A||1,function(r){var n=r.getDevicePixelRatio(),i=r.getWidth()*A,a=r.getHeight()*A;return t(i,a,n)}}function sf(e){var t=/^expr\((.*)\)$/.exec(e);if(t)try{var A=new Function("width","height","dpr","return "+t[1]);return A(1,1),A}catch{throw new Error("Invalid expression.")}}function Lr(e,t){for(var A=0,r=1/t,n=e;n>0;)A=A+r*(n%t),n=Math.floor(n/t),r=r/t;return A}const Cp=`@export ecgl.ssao.estimate

uniform sampler2D depthTex;

uniform sampler2D normalTex;

uniform sampler2D noiseTex;

uniform vec2 depthTexSize;

uniform vec2 noiseTexSize;

uniform mat4 projection;

uniform mat4 projectionInv;

uniform mat4 viewInverseTranspose;

uniform vec3 kernel[KERNEL_SIZE];

uniform float radius : 1;

uniform float power : 1;

uniform float bias: 1e-2;

uniform float intensity: 1.0;

varying vec2 v_Texcoord;

float ssaoEstimator(in vec3 originPos, in mat3 kernelBasis) {
 float occlusion = 0.0;

 for (int i = 0; i < KERNEL_SIZE; i++) {
 vec3 samplePos = kernel[i];
#ifdef NORMALTEX_ENABLED
 samplePos = kernelBasis * samplePos;
#endif
 samplePos = samplePos * radius + originPos;

 vec4 texCoord = projection * vec4(samplePos, 1.0);
 texCoord.xy /= texCoord.w;

 vec4 depthTexel = texture2D(depthTex, texCoord.xy * 0.5 + 0.5);

 float sampleDepth = depthTexel.r * 2.0 - 1.0;
 if (projection[3][3] == 0.0) {
 sampleDepth = projection[3][2] / (sampleDepth * projection[2][3] - projection[2][2]);
 }
 else {
 sampleDepth = (sampleDepth - projection[3][2]) / projection[2][2];
 }
 
 float rangeCheck = smoothstep(0.0, 1.0, radius / abs(originPos.z - sampleDepth));
 occlusion += rangeCheck * step(samplePos.z, sampleDepth - bias);
 }
#ifdef NORMALTEX_ENABLED
 occlusion = 1.0 - occlusion / float(KERNEL_SIZE);
#else
 occlusion = 1.0 - clamp((occlusion / float(KERNEL_SIZE) - 0.6) * 2.5, 0.0, 1.0);
#endif
 return pow(occlusion, power);
}

void main()
{

 vec4 depthTexel = texture2D(depthTex, v_Texcoord);

#ifdef NORMALTEX_ENABLED
 vec4 tex = texture2D(normalTex, v_Texcoord);
 if (dot(tex.rgb, tex.rgb) == 0.0) {
 gl_FragColor = vec4(1.0);
 return;
 }
 vec3 N = tex.rgb * 2.0 - 1.0;
 N = (viewInverseTranspose * vec4(N, 0.0)).xyz;

 vec2 noiseTexCoord = depthTexSize / vec2(noiseTexSize) * v_Texcoord;
 vec3 rvec = texture2D(noiseTex, noiseTexCoord).rgb * 2.0 - 1.0;
 vec3 T = normalize(rvec - N * dot(rvec, N));
 vec3 BT = normalize(cross(N, T));
 mat3 kernelBasis = mat3(T, BT, N);
#else
 if (depthTexel.r > 0.99999) {
 gl_FragColor = vec4(1.0);
 return;
 }
 mat3 kernelBasis;
#endif

 float z = depthTexel.r * 2.0 - 1.0;

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * projectedPos;

 vec3 position = p4.xyz / p4.w;

 float ao = ssaoEstimator(position, kernelBasis);
 ao = clamp(1.0 - (1.0 - ao) * intensity, 0.0, 1.0);
 gl_FragColor = vec4(vec3(ao), 1.0);
}

@end


@export ecgl.ssao.blur
#define SHADER_NAME SSAO_BLUR

uniform sampler2D ssaoTexture;

#ifdef NORMALTEX_ENABLED
uniform sampler2D normalTex;
#endif

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

uniform int direction: 0.0;

#ifdef DEPTHTEX_ENABLED
uniform sampler2D depthTex;
uniform mat4 projection;
uniform float depthRange : 0.5;

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(depthTex, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}
#endif

void main()
{
 float kernel[5];
 kernel[0] = 0.122581;
 kernel[1] = 0.233062;
 kernel[2] = 0.288713;
 kernel[3] = 0.233062;
 kernel[4] = 0.122581;

 vec2 off = vec2(0.0);
 if (direction == 0) {
 off[0] = blurSize / textureSize.x;
 }
 else {
 off[1] = blurSize / textureSize.y;
 }

 vec2 coord = v_Texcoord;

 float sum = 0.0;
 float weightAll = 0.0;

#ifdef NORMALTEX_ENABLED
 vec3 centerNormal = texture2D(normalTex, v_Texcoord).rgb * 2.0 - 1.0;
#endif
#if defined(DEPTHTEX_ENABLED)
 float centerDepth = getLinearDepth(v_Texcoord);
#endif

 for (int i = 0; i < 5; i++) {
 vec2 coord = clamp(v_Texcoord + vec2(float(i) - 2.0) * off, vec2(0.0), vec2(1.0));

 float w = kernel[i];
#ifdef NORMALTEX_ENABLED
 vec3 normal = texture2D(normalTex, coord).rgb * 2.0 - 1.0;
 w *= clamp(dot(normal, centerNormal), 0.0, 1.0);
#endif
#ifdef DEPTHTEX_ENABLED
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(centerDepth - d) / depthRange, 0.0, 1.0));
#endif

 weightAll += w;
 sum += texture2D(ssaoTexture, coord).r * w;
 }

 gl_FragColor = vec4(vec3(sum / weightAll), 1.0);
}

@end
`;K.import(Cp);function of(e){for(var t=new Uint8Array(e*e*4),A=0,r=new L,n=0;n<e;n++)for(var i=0;i<e;i++)r.set(Math.random()*2-1,Math.random()*2-1,0).normalize(),t[A++]=(r.x*.5+.5)*255,t[A++]=(r.y*.5+.5)*255,t[A++]=0,t[A++]=255;return t}function Kl(e){return new $({pixels:of(e),wrapS:P.REPEAT,wrapT:P.REPEAT,width:e,height:e})}function Ep(e,t,A){var r=new Float32Array(e*3);t=t||0;for(var n=0;n<e;n++){var i=Lr(n+t,2)*(A?1:2)*Math.PI,a=Lr(n+t,3)*Math.PI,s=Math.random(),o=Math.cos(i)*Math.sin(a)*s,l=Math.cos(a)*s,u=Math.sin(i)*Math.sin(a)*s;r[n*3]=o,r[n*3+1]=l,r[n*3+2]=u}return r}function sA(e){e=e||{},this._ssaoPass=new Me({fragment:K.source("ecgl.ssao.estimate")}),this._blurPass=new Me({fragment:K.source("ecgl.ssao.blur")}),this._framebuffer=new Qe({depthBuffer:!1}),this._ssaoTexture=new $,this._blurTexture=new $,this._blurTexture2=new $,this._depthTex=e.depthTexture,this._normalTex=e.normalTexture,this.setNoiseSize(4),this.setKernelSize(e.kernelSize||12),e.radius!=null&&this.setParameter("radius",e.radius),e.power!=null&&this.setParameter("power",e.power),this._normalTex||(this._ssaoPass.material.disableTexture("normalTex"),this._blurPass.material.disableTexture("normalTex")),this._depthTex||this._blurPass.material.disableTexture("depthTex"),this._blurPass.material.setUniform("normalTex",this._normalTex),this._blurPass.material.setUniform("depthTex",this._depthTex)}sA.prototype.setDepthTexture=function(e){this._depthTex=e};sA.prototype.setNormalTexture=function(e){this._normalTex=e,this._ssaoPass.material[e?"enableTexture":"disableTexture"]("normalTex"),this.setKernelSize(this._kernelSize)};sA.prototype.update=function(e,t,A){var r=e.getWidth(),n=e.getHeight(),i=this._ssaoPass,a=this._blurPass;i.setUniform("kernel",this._kernels[A%this._kernels.length]),i.setUniform("depthTex",this._depthTex),this._normalTex!=null&&i.setUniform("normalTex",this._normalTex),i.setUniform("depthTexSize",[this._depthTex.width,this._depthTex.height]);var s=new z;z.transpose(s,t.worldTransform),i.setUniform("projection",t.projectionMatrix.array),i.setUniform("projectionInv",t.invProjectionMatrix.array),i.setUniform("viewInverseTranspose",s.array);var o=this._ssaoTexture,l=this._blurTexture,u=this._blurTexture2;o.width=r/2,o.height=n/2,l.width=r,l.height=n,u.width=r,u.height=n,this._framebuffer.attach(o),this._framebuffer.bind(e),e.gl.clearColor(1,1,1,1),e.gl.clear(e.gl.COLOR_BUFFER_BIT),i.render(e),a.setUniform("textureSize",[r/2,n/2]),a.setUniform("projection",t.projectionMatrix.array),this._framebuffer.attach(l),a.setUniform("direction",0),a.setUniform("ssaoTexture",o),a.render(e),this._framebuffer.attach(u),a.setUniform("textureSize",[r,n]),a.setUniform("direction",1),a.setUniform("ssaoTexture",l),a.render(e),this._framebuffer.unbind(e);var c=e.clearColor;e.gl.clearColor(c[0],c[1],c[2],c[3])};sA.prototype.getTargetTexture=function(){return this._blurTexture2};sA.prototype.setParameter=function(e,t){e==="noiseTexSize"?this.setNoiseSize(t):e==="kernelSize"?this.setKernelSize(t):e==="intensity"?this._ssaoPass.material.set("intensity",t):this._ssaoPass.setUniform(e,t)};sA.prototype.setKernelSize=function(e){this._kernelSize=e,this._ssaoPass.material.define("fragment","KERNEL_SIZE",e),this._kernels=this._kernels||[];for(var t=0;t<30;t++)this._kernels[t]=Ep(e,t*e,!!this._normalTex)};sA.prototype.setNoiseSize=function(e){var t=this._ssaoPass.getUniform("noiseTex");t?(t.data=of(e),t.width=t.height=e,t.dirty()):(t=Kl(e),this._ssaoPass.setUniform("noiseTex",Kl(e))),this._ssaoPass.setUniform("noiseTexSize",[e,e])};sA.prototype.dispose=function(e){this._blurTexture.dispose(e),this._ssaoTexture.dispose(e),this._blurTexture2.dispose(e)};const Tp=`@export ecgl.ssr.main

#define SHADER_NAME SSR
#define MAX_ITERATION 20;
#define SAMPLE_PER_FRAME 5;
#define TOTAL_SAMPLES 128;

uniform sampler2D sourceTexture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform sampler2D gBufferTexture3;
uniform samplerCube specularCubemap;
uniform float specularIntensity: 1;

uniform mat4 projection;
uniform mat4 projectionInv;
uniform mat4 toViewSpace;
uniform mat4 toWorldSpace;

uniform float maxRayDistance: 200;

uniform float pixelStride: 16;
uniform float pixelStrideZCutoff: 50; 
uniform float screenEdgeFadeStart: 0.9; 
uniform float eyeFadeStart : 0.2; uniform float eyeFadeEnd: 0.8; 
uniform float minGlossiness: 0.2; uniform float zThicknessThreshold: 1;

uniform float nearZ;
uniform vec2 viewportSize : VIEWPORT_SIZE;

uniform float jitterOffset: 0;

varying vec2 v_Texcoord;

#ifdef DEPTH_DECODE
@import clay.util.decode_float
#endif

#ifdef PHYSICALLY_CORRECT
uniform sampler2D normalDistribution;
uniform float sampleOffset: 0;
uniform vec2 normalDistributionSize;

vec3 transformNormal(vec3 H, vec3 N) {
 vec3 upVector = N.y > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
vec3 importanceSampleNormalGGX(float i, float roughness, vec3 N) {
 float p = fract((i + sampleOffset) / float(TOTAL_SAMPLES));
 vec3 H = texture2D(normalDistribution,vec2(roughness, p)).rgb;
 return transformNormal(H, N);
}
float G_Smith(float g, float ndv, float ndl) {
 float roughness = 1.0 - g;
 float k = roughness * roughness / 2.0;
 float G1V = ndv / (ndv * (1.0 - k) + k);
 float G1L = ndl / (ndl * (1.0 - k) + k);
 return G1L * G1V;
}
vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}
#endif

float fetchDepth(sampler2D depthTexture, vec2 uv)
{
 vec4 depthTexel = texture2D(depthTexture, uv);
 return depthTexel.r * 2.0 - 1.0;
}

float linearDepth(float depth)
{
 if (projection[3][3] == 0.0) {
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
 }
 else {
 return (depth - projection[3][2]) / projection[2][2];
 }
}

bool rayIntersectDepth(float rayZNear, float rayZFar, vec2 hitPixel)
{
 if (rayZFar > rayZNear)
 {
 float t = rayZFar; rayZFar = rayZNear; rayZNear = t;
 }
 float cameraZ = linearDepth(fetchDepth(gBufferTexture2, hitPixel));
 return rayZFar <= cameraZ && rayZNear >= cameraZ - zThicknessThreshold;
}


bool traceScreenSpaceRay(
 vec3 rayOrigin, vec3 rayDir, float jitter,
 out vec2 hitPixel, out vec3 hitPoint, out float iterationCount
)
{
 float rayLength = ((rayOrigin.z + rayDir.z * maxRayDistance) > -nearZ)
 ? (-nearZ - rayOrigin.z) / rayDir.z : maxRayDistance;

 vec3 rayEnd = rayOrigin + rayDir * rayLength;

 vec4 H0 = projection * vec4(rayOrigin, 1.0);
 vec4 H1 = projection * vec4(rayEnd, 1.0);

 float k0 = 1.0 / H0.w, k1 = 1.0 / H1.w;

 vec3 Q0 = rayOrigin * k0, Q1 = rayEnd * k1;

 vec2 P0 = (H0.xy * k0 * 0.5 + 0.5) * viewportSize;
 vec2 P1 = (H1.xy * k1 * 0.5 + 0.5) * viewportSize;

 P1 += dot(P1 - P0, P1 - P0) < 0.0001 ? 0.01 : 0.0;
 vec2 delta = P1 - P0;

 bool permute = false;
 if (abs(delta.x) < abs(delta.y)) {
 permute = true;
 delta = delta.yx;
 P0 = P0.yx;
 P1 = P1.yx;
 }
 float stepDir = sign(delta.x);
 float invdx = stepDir / delta.x;

 vec3 dQ = (Q1 - Q0) * invdx;
 float dk = (k1 - k0) * invdx;

 vec2 dP = vec2(stepDir, delta.y * invdx);

 float strideScaler = 1.0 - min(1.0, -rayOrigin.z / pixelStrideZCutoff);
 float pixStride = 1.0 + strideScaler * pixelStride;

 dP *= pixStride; dQ *= pixStride; dk *= pixStride;

 vec4 pqk = vec4(P0, Q0.z, k0);
 vec4 dPQK = vec4(dP, dQ.z, dk);

 pqk += dPQK * jitter;
 float rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);
 float rayZNear;

 bool intersect = false;

 vec2 texelSize = 1.0 / viewportSize;

 iterationCount = 0.0;

 for (int i = 0; i < MAX_ITERATION; i++)
 {
 pqk += dPQK;

 rayZNear = rayZFar;
 rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);

 hitPixel = permute ? pqk.yx : pqk.xy;
 hitPixel *= texelSize;

 intersect = rayIntersectDepth(rayZNear, rayZFar, hitPixel);

 iterationCount += 1.0;

 dPQK *= 1.2;

 if (intersect) {
 break;
 }
 }

 Q0.xy += dQ.xy * iterationCount;
 Q0.z = pqk.z;
 hitPoint = Q0 / pqk.w;

 return intersect;
}

float calculateAlpha(
 float iterationCount, float reflectivity,
 vec2 hitPixel, vec3 hitPoint, float dist, vec3 rayDir
)
{
 float alpha = clamp(reflectivity, 0.0, 1.0);
 alpha *= 1.0 - (iterationCount / float(MAX_ITERATION));
 vec2 hitPixelNDC = hitPixel * 2.0 - 1.0;
 float maxDimension = min(1.0, max(abs(hitPixelNDC.x), abs(hitPixelNDC.y)));
 alpha *= 1.0 - max(0.0, maxDimension - screenEdgeFadeStart) / (1.0 - screenEdgeFadeStart);

 float _eyeFadeStart = eyeFadeStart;
 float _eyeFadeEnd = eyeFadeEnd;
 if (_eyeFadeStart > _eyeFadeEnd) {
 float tmp = _eyeFadeEnd;
 _eyeFadeEnd = _eyeFadeStart;
 _eyeFadeStart = tmp;
 }

 float eyeDir = clamp(rayDir.z, _eyeFadeStart, _eyeFadeEnd);
 alpha *= 1.0 - (eyeDir - _eyeFadeStart) / (_eyeFadeEnd - _eyeFadeStart);

 alpha *= 1.0 - clamp(dist / maxRayDistance, 0.0, 1.0);

 return alpha;
}

@import clay.util.rand

@import clay.util.rgbm

void main()
{
 vec4 normalAndGloss = texture2D(gBufferTexture1, v_Texcoord);

 if (dot(normalAndGloss.rgb, vec3(1.0)) == 0.0) {
 discard;
 }

 float g = normalAndGloss.a;
#if !defined(PHYSICALLY_CORRECT)
 if (g <= minGlossiness) {
 discard;
 }
#endif

 float reflectivity = (g - minGlossiness) / (1.0 - minGlossiness);

 vec3 N = normalize(normalAndGloss.rgb * 2.0 - 1.0);
 N = normalize((toViewSpace * vec4(N, 0.0)).xyz);

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, fetchDepth(gBufferTexture2, v_Texcoord), 1.0);
 vec4 pos = projectionInv * projectedPos;
 vec3 rayOrigin = pos.xyz / pos.w;
 vec3 V = -normalize(rayOrigin);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 float iterationCount;
 float jitter = rand(fract(v_Texcoord + jitterOffset));

#ifdef PHYSICALLY_CORRECT
 vec4 color = vec4(vec3(0.0), 1.0);
 vec4 albedoMetalness = texture2D(gBufferTexture3, v_Texcoord);
 vec3 albedo = albedoMetalness.rgb;
 float m = albedoMetalness.a;
 vec3 diffuseColor = albedo * (1.0 - m);
 vec3 spec = mix(vec3(0.04), albedo, m);

 float jitter2 = rand(fract(v_Texcoord)) * float(TOTAL_SAMPLES);

 for (int i = 0; i < SAMPLE_PER_FRAME; i++) {
 vec3 H = importanceSampleNormalGGX(float(i) + jitter2, 1.0 - g, N);
 vec3 rayDir = normalize(reflect(-V, H));
#else
 vec3 rayDir = normalize(reflect(-V, N));
#endif
 vec2 hitPixel;
 vec3 hitPoint;

 bool intersect = traceScreenSpaceRay(rayOrigin, rayDir, jitter, hitPixel, hitPoint, iterationCount);

 float dist = distance(rayOrigin, hitPoint);

 vec3 hitNormal = texture2D(gBufferTexture1, hitPixel).rgb * 2.0 - 1.0;
 hitNormal = normalize((toViewSpace * vec4(hitNormal, 0.0)).xyz);
#ifdef PHYSICALLY_CORRECT
 float ndl = clamp(dot(N, rayDir), 0.0, 1.0);
 float vdh = clamp(dot(V, H), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);
 vec3 litTexel = vec3(0.0);
 if (dot(hitNormal, rayDir) < 0.0 && intersect) {
 litTexel = texture2D(sourceTexture, hitPixel).rgb;
 litTexel *= pow(clamp(1.0 - dist / 200.0, 0.0, 1.0), 3.0);

 }
 else {
 #ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 litTexel = RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, 0.0), 8.12).rgb * specularIntensity;
#endif
 }
 color.rgb += ndl * litTexel * (
 F_Schlick(ndl, spec) * G_Smith(g, ndv, ndl) * vdh / (ndh * ndv + 0.001)
 );
 }
 color.rgb /= float(SAMPLE_PER_FRAME);
#else
 #if !defined(SPECULARCUBEMAP_ENABLED)
 if (dot(hitNormal, rayDir) >= 0.0) {
 discard;
 }
 if (!intersect) {
 discard;
 }
#endif
 float alpha = clamp(calculateAlpha(iterationCount, reflectivity, hitPixel, hitPoint, dist, rayDir), 0.0, 1.0);
 vec4 color = texture2D(sourceTexture, hitPixel);
 color.rgb *= alpha;

#ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 alpha = alpha * (intersect ? 1.0 : 0.0);
 float bias = (1.0 -g) * 5.0;
 color.rgb += (1.0 - alpha)
 * RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, bias), 8.12).rgb
 * specularIntensity;
#endif

#endif

 gl_FragColor = encodeHDR(color);
}
@end

@export ecgl.ssr.blur

uniform sampler2D texture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform mat4 projection;
uniform float depthRange : 0.05;

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

#ifdef BLEND
 #ifdef SSAOTEX_ENABLED
uniform sampler2D ssaoTex;
 #endif
uniform sampler2D sourceTexture;
#endif

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(gBufferTexture2, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}

@import clay.util.rgbm


void main()
{
 @import clay.compositor.kernel.gaussian_9

 vec4 centerNTexel = texture2D(gBufferTexture1, v_Texcoord);
 float g = centerNTexel.a;
 float maxBlurSize = clamp(1.0 - g, 0.0, 1.0) * blurSize;
#ifdef VERTICAL
 vec2 off = vec2(0.0, maxBlurSize / textureSize.y);
#else
 vec2 off = vec2(maxBlurSize / textureSize.x, 0.0);
#endif

 vec2 coord = v_Texcoord;

 vec4 sum = vec4(0.0);
 float weightAll = 0.0;

 vec3 cN = centerNTexel.rgb * 2.0 - 1.0;
 float cD = getLinearDepth(v_Texcoord);
 for (int i = 0; i < 9; i++) {
 vec2 coord = clamp((float(i) - 4.0) * off + v_Texcoord, vec2(0.0), vec2(1.0));
 float w = gaussianKernel[i]
 * clamp(dot(cN, texture2D(gBufferTexture1, coord).rgb * 2.0 - 1.0), 0.0, 1.0);
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(cD - d) / depthRange, 0.0, 1.0));

 weightAll += w;
 sum += decodeHDR(texture2D(texture, coord)) * w;
 }

#ifdef BLEND
 float aoFactor = 1.0;
 #ifdef SSAOTEX_ENABLED
 aoFactor = texture2D(ssaoTex, v_Texcoord).r;
 #endif
 gl_FragColor = encodeHDR(
 sum / weightAll * aoFactor + decodeHDR(texture2D(sourceTexture, v_Texcoord))
 );
#else
 gl_FragColor = encodeHDR(sum / weightAll);
#endif
}

@end`;K.import(Tp);function oA(e){e=e||{},this._ssrPass=new Me({fragment:K.source("ecgl.ssr.main"),clearColor:[0,0,0,0]}),this._blurPass1=new Me({fragment:K.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blurPass2=new Me({fragment:K.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blendPass=new Me({fragment:K.source("clay.compositor.blend")}),this._blendPass.material.disableTexturesAll(),this._blendPass.material.enableTexture(["texture1","texture2"]),this._ssrPass.setUniform("gBufferTexture1",e.normalTexture),this._ssrPass.setUniform("gBufferTexture2",e.depthTexture),this._blurPass1.setUniform("gBufferTexture1",e.normalTexture),this._blurPass1.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.setUniform("gBufferTexture1",e.normalTexture),this._blurPass2.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.material.define("fragment","VERTICAL"),this._blurPass2.material.define("fragment","BLEND"),this._ssrTexture=new $({type:P.HALF_FLOAT}),this._texture2=new $({type:P.HALF_FLOAT}),this._texture3=new $({type:P.HALF_FLOAT}),this._prevTexture=new $({type:P.HALF_FLOAT}),this._currentTexture=new $({type:P.HALF_FLOAT}),this._frameBuffer=new Qe({depthBuffer:!1}),this._normalDistribution=null,this._totalSamples=256,this._samplePerFrame=4,this._ssrPass.material.define("fragment","SAMPLE_PER_FRAME",this._samplePerFrame),this._ssrPass.material.define("fragment","TOTAL_SAMPLES",this._totalSamples),this._downScale=1}oA.prototype.setAmbientCubemap=function(e,t){this._ssrPass.material.set("specularCubemap",e),this._ssrPass.material.set("specularIntensity",t);var A=e&&t;this._ssrPass.material[A?"enableTexture":"disableTexture"]("specularCubemap")};oA.prototype.update=function(e,t,A,r){var n=e.getWidth(),i=e.getHeight(),a=this._ssrTexture,s=this._texture2,o=this._texture3;a.width=this._prevTexture.width=this._currentTexture.width=n/this._downScale,a.height=this._prevTexture.height=this._currentTexture.height=i/this._downScale,s.width=o.width=n,s.height=o.height=i;var l=this._frameBuffer,u=this._ssrPass,c=this._blurPass1,f=this._blurPass2,h=this._blendPass,d=new z,g=new z;z.transpose(d,t.worldTransform),z.transpose(g,t.viewMatrix),u.setUniform("sourceTexture",A),u.setUniform("projection",t.projectionMatrix.array),u.setUniform("projectionInv",t.invProjectionMatrix.array),u.setUniform("toViewSpace",d.array),u.setUniform("toWorldSpace",g.array),u.setUniform("nearZ",t.near);var v=r/this._totalSamples*this._samplePerFrame;if(u.setUniform("jitterOffset",v),u.setUniform("sampleOffset",r*this._samplePerFrame),c.setUniform("textureSize",[a.width,a.height]),f.setUniform("textureSize",[n,i]),f.setUniform("sourceTexture",A),c.setUniform("projection",t.projectionMatrix.array),f.setUniform("projection",t.projectionMatrix.array),l.attach(a),l.bind(e),u.render(e),this._physicallyCorrect&&(l.attach(this._currentTexture),h.setUniform("texture1",this._prevTexture),h.setUniform("texture2",a),h.material.set({weight1:r>=1?.95:0,weight2:r>=1?.05:1}),h.render(e)),l.attach(s),c.setUniform("texture",this._physicallyCorrect?this._currentTexture:a),c.render(e),l.attach(o),f.setUniform("texture",s),f.render(e),l.unbind(e),this._physicallyCorrect){var p=this._prevTexture;this._prevTexture=this._currentTexture,this._currentTexture=p}};oA.prototype.getTargetTexture=function(){return this._texture3};oA.prototype.setParameter=function(e,t){e==="maxIteration"?this._ssrPass.material.define("fragment","MAX_ITERATION",t):this._ssrPass.setUniform(e,t)};oA.prototype.setPhysicallyCorrect=function(e){e?(this._normalDistribution||(this._normalDistribution=Wt.generateNormalDistribution(64,this._totalSamples)),this._ssrPass.material.define("fragment","PHYSICALLY_CORRECT"),this._ssrPass.material.set("normalDistribution",this._normalDistribution),this._ssrPass.material.set("normalDistributionSize",[64,this._totalSamples])):this._ssrPass.material.undefine("fragment","PHYSICALLY_CORRECT"),this._physicallyCorrect=e};oA.prototype.setSSAOTexture=function(e){var t=this._blurPass2;e?(t.material.enableTexture("ssaoTex"),t.material.set("ssaoTex",e)):t.material.disableTexture("ssaoTex")};oA.prototype.isFinished=function(e){return this._physicallyCorrect?e>this._totalSamples/this._samplePerFrame:!0};oA.prototype.dispose=function(e){this._ssrTexture.dispose(e),this._texture2.dispose(e),this._texture3.dispose(e),this._prevTexture.dispose(e),this._currentTexture.dispose(e),this._frameBuffer.dispose(e)};const zl=[0,0,-.321585265978,-.154972575841,.458126042375,.188473391593,.842080129861,.527766490688,.147304551086,-.659453822776,-.331943915203,-.940619700594,.0479226680259,.54812163202,.701581552186,-.709825561388,-.295436780218,.940589268233,-.901489676764,.237713156085,.973570876096,-.109899459384,-.866792314779,-.451805525005,.330975007087,.800048655954,-.344275183665,.381779221166,-.386139432542,-.437418421534,-.576478634965,-.0148463392551,.385798197415,-.262426961053,-.666302061145,.682427250835,-.628010632582,-.732836215494,.10163141741,-.987658134403,.711995289051,-.320024291314,.0296005138058,.950296523438,.0130612307608,-.351024443122,-.879596633704,-.10478487883,.435712737232,.504254490347,.779203817497,.206477676721,.388264289969,-.896736162545,-.153106280781,-.629203242522,-.245517550697,.657969239148,.126830499058,.26862328493,-.634888119007,-.302301223431,.617074219636,.779817204925],Fp=`@export ecgl.normal.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

@import ecgl.common.normalMap.vertexHeader

@import ecgl.common.vertexAnimation.header

void main()
{

 @import ecgl.common.vertexAnimation.main

 @import ecgl.common.uv.main

 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

 @import ecgl.common.normalMap.vertexMain

 gl_Position = worldViewProjection * vec4(pos, 1.0);

}


@end


@export ecgl.normal.fragment

#define ROUGHNESS_CHANEL 0

uniform bool useBumpMap;
uniform bool useRoughnessMap;
uniform bool doubleSide;
uniform float roughness;

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform mat4 viewInverse : VIEWINVERSE;

@import ecgl.common.normalMap.fragmentHeader
@import ecgl.common.bumpMap.header

uniform sampler2D roughnessMap;

void main()
{
 vec3 N = v_Normal;
 
 bool flipNormal = false;
 if (doubleSide) {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 flipNormal = true;
 }
 }

 @import ecgl.common.normalMap.fragmentMain

 if (useBumpMap) {
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 }

 float g = 1.0 - roughness;

 if (useRoughnessMap) {
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
 }

 if (flipNormal) {
 N = -N;
 }

 gl_FragColor.rgb = (N.xyz + 1.0) * 0.5;
 gl_FragColor.a = g;
}
@end`;K.import(Fp);function As(e,t,A,r,n){var i=e.gl;t.setUniform(i,"1i",A,n),i.activeTexture(i.TEXTURE0+n),r.isRenderable()?r.bind(e):r.unbind(e)}function Up(e,t,A,r,n){var i,a,s,o,l=e.gl;return function(u,c,f){if(!(o&&o.material===u.material)){var h=u.material,d=u.__program,g=h.get("roughness");g==null&&(g=1);var v=h.get("normalMap")||t,p=h.get("roughnessMap"),m=h.get("bumpMap"),B=h.get("uvRepeat"),_=h.get("uvOffset"),x=h.get("detailUvRepeat"),y=h.get("detailUvOffset"),T=!!m&&h.isTextureEnabled("bumpMap"),E=!!p&&h.isTextureEnabled("roughnessMap"),F=h.isDefined("fragment","DOUBLE_SIDED");m=m||A,p=p||r,f!==c?(c.set("normalMap",v),c.set("bumpMap",m),c.set("roughnessMap",p),c.set("useBumpMap",T),c.set("useRoughnessMap",E),c.set("doubleSide",F),B!=null&&c.set("uvRepeat",B),_!=null&&c.set("uvOffset",_),x!=null&&c.set("detailUvRepeat",x),y!=null&&c.set("detailUvOffset",y),c.set("roughness",g)):(d.setUniform(l,"1f","roughness",g),i!==v&&As(e,d,"normalMap",v,0),a!==m&&m&&As(e,d,"bumpMap",m,1),s!==p&&p&&As(e,d,"roughnessMap",p,2),B!=null&&d.setUniform(l,"2f","uvRepeat",B),_!=null&&d.setUniform(l,"2f","uvOffset",_),x!=null&&d.setUniform(l,"2f","detailUvRepeat",x),y!=null&&d.setUniform(l,"2f","detailUvOffset",y),d.setUniform(l,"1i","useBumpMap",+T),d.setUniform(l,"1i","useRoughnessMap",+E),d.setUniform(l,"1i","doubleSide",+F)),i=v,a=m,s=p,o=u}}}function Gr(e){this._depthTex=new $({format:P.DEPTH_COMPONENT,type:P.UNSIGNED_INT}),this._normalTex=new $({type:P.HALF_FLOAT}),this._framebuffer=new Qe,this._framebuffer.attach(this._normalTex),this._framebuffer.attach(this._depthTex,Qe.DEPTH_ATTACHMENT),this._normalMaterial=new St({shader:new K(K.source("ecgl.normal.vertex"),K.source("ecgl.normal.fragment"))}),this._normalMaterial.enableTexture(["normalMap","bumpMap","roughnessMap"]),this._defaultNormalMap=kt.createBlank("#000"),this._defaultBumpMap=kt.createBlank("#000"),this._defaultRoughessMap=kt.createBlank("#000"),this._debugPass=new Me({fragment:K.source("clay.compositor.output")}),this._debugPass.setUniform("texture",this._normalTex),this._debugPass.material.undefine("fragment","OUTPUT_ALPHA")}Gr.prototype.getDepthTexture=function(){return this._depthTex};Gr.prototype.getNormalTexture=function(){return this._normalTex};Gr.prototype.update=function(e,t,A){var r=e.getWidth(),n=e.getHeight(),i=this._depthTex,a=this._normalTex,s=this._normalMaterial;i.width=r,i.height=n,a.width=r,a.height=n;var o=t.getRenderList(A).opaque;this._framebuffer.bind(e),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.gl.disable(e.gl.BLEND),e.renderPass(o,A,{getMaterial:function(){return s},ifRender:function(l){return l.renderNormal},beforeRender:Up(e,this._defaultNormalMap,this._defaultBumpMap,this._defaultRoughessMap,this._normalMaterial),sort:e.opaqueSortCompare}),this._framebuffer.unbind(e)};Gr.prototype.renderDebug=function(e){this._debugPass.render(e)};Gr.prototype.dispose=function(e){this._depthTex.dispose(e),this._normalTex.dispose(e)};function Kn(e){e=e||{},this._edgePass=new Me({fragment:K.source("ecgl.edge")}),this._edgePass.setUniform("normalTexture",e.normalTexture),this._edgePass.setUniform("depthTexture",e.depthTexture),this._targetTexture=new $({type:P.HALF_FLOAT}),this._frameBuffer=new Qe,this._frameBuffer.attach(this._targetTexture)}Kn.prototype.update=function(e,t,A,r){var n=e.getWidth(),i=e.getHeight(),a=this._targetTexture;a.width=n,a.height=i;var s=this._frameBuffer;s.bind(e),this._edgePass.setUniform("projectionInv",t.invProjectionMatrix.array),this._edgePass.setUniform("textureSize",[n,i]),this._edgePass.setUniform("texture",A),this._edgePass.render(e),s.unbind(e)};Kn.prototype.getTargetTexture=function(){return this._targetTexture};Kn.prototype.setParameter=function(e,t){this._edgePass.setUniform(e,t)};Kn.prototype.dispose=function(e){this._targetTexture.dispose(e),this._frameBuffer.dispose(e)};const Sp={type:"compositor",nodes:[{name:"source",type:"texture",outputs:{color:{}}},{name:"source_half",shader:"#source(clay.compositor.downsample)",inputs:{texture:"source"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bright",shader:"#source(clay.compositor.bright)",inputs:{texture:"source_half"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{threshold:2,scale:4,textureSize:"expr([width * 1.0 / 2, height / 2])"}},{name:"bright_downsample_4",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 2, height / 2] )"}},{name:"bright_downsample_8",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 4, height / 4] )"}},{name:"bright_downsample_16",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 8, height / 8] )"}},{name:"bright_downsample_32",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 32)",height:"expr(height * 1.0 / 32)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 16, height / 16] )"}},{name:"bright_upsample_16_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_32"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 32, height / 32] )"}},{name:"bright_upsample_16_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_16_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_8_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_8_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_8_blur_v",texture2:"bright_upsample_16_blur_v"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_4_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_4_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_4_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_4_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_4_blur_v",texture2:"bright_upsample_8_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_2_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_2_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_2_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_2_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_2_blur_v",texture2:"bright_upsample_4_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_full_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_full_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_full_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bloom_composite",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_full_blur_v",texture2:"bright_upsample_2_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"coc",shader:"#source(ecgl.dof.coc)",outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{focalDist:50,focalRange:30}},{name:"dof_far_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"dof_near_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_NEARFIELD:null}},{name:"dof_coc_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"coc"},outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_COC:null}},{name:"dof_composite",shader:"#source(ecgl.dof.composite)",inputs:{original:"source",blurred:"dof_far_blur",nearfield:"dof_near_blur",coc:"coc",nearcoc:"dof_coc_blur"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}}},{name:"composite",shader:"#source(clay.compositor.hdr.composite)",inputs:{texture:"source",bloom:"bloom_composite"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},defines:{}},{name:"FXAA",shader:"#source(clay.compositor.fxaa)",inputs:{texture:"composite"}}]},bp=`@export ecgl.dof.coc

uniform sampler2D depth;

uniform float zNear: 0.1;
uniform float zFar: 2000;

uniform float focalDistance: 3;
uniform float focalRange: 1;
uniform float focalLength: 30;
uniform float fstop: 2.8;

varying vec2 v_Texcoord;

@import clay.util.encode_float

void main()
{
 float z = texture2D(depth, v_Texcoord).r * 2.0 - 1.0;

 float dist = 2.0 * zNear * zFar / (zFar + zNear - z * (zFar - zNear));

 float aperture = focalLength / fstop;

 float coc;

 float uppper = focalDistance + focalRange;
 float lower = focalDistance - focalRange;
 if (dist <= uppper && dist >= lower) {
 coc = 0.5;
 }
 else {
 float focalAdjusted = dist > uppper ? uppper : lower;

 coc = abs(aperture * (focalLength * (dist - focalAdjusted)) / (dist * (focalAdjusted - focalLength)));
 coc = clamp(coc, 0.0, 2.0) / 2.00001;

 if (dist < lower) {
 coc = -coc;
 }
 coc = coc * 0.5 + 0.5;
 }

 gl_FragColor = encodeFloat(coc);
}
@end


@export ecgl.dof.composite

#define DEBUG 0

uniform sampler2D original;
uniform sampler2D blurred;
uniform sampler2D nearfield;
uniform sampler2D coc;
uniform sampler2D nearcoc;
varying vec2 v_Texcoord;

@import clay.util.rgbm
@import clay.util.float

void main()
{
 vec4 blurredColor = texture2D(blurred, v_Texcoord);
 vec4 originalColor = texture2D(original, v_Texcoord);

 float fCoc = decodeFloat(texture2D(coc, v_Texcoord));

 fCoc = abs(fCoc * 2.0 - 1.0);

 float weight = smoothstep(0.0, 1.0, fCoc);
 
#ifdef NEARFIELD_ENABLED
 vec4 nearfieldColor = texture2D(nearfield, v_Texcoord);
 float fNearCoc = decodeFloat(texture2D(nearcoc, v_Texcoord));
 fNearCoc = abs(fNearCoc * 2.0 - 1.0);

 gl_FragColor = encodeHDR(
 mix(
 nearfieldColor, mix(originalColor, blurredColor, weight),
 pow(1.0 - fNearCoc, 4.0)
 )
 );
#else
 gl_FragColor = encodeHDR(mix(originalColor, blurredColor, weight));
#endif

}

@end



@export ecgl.dof.diskBlur

#define POISSON_KERNEL_SIZE 16;

uniform sampler2D texture;
uniform sampler2D coc;
varying vec2 v_Texcoord;

uniform float blurRadius : 10.0;
uniform vec2 textureSize : [512.0, 512.0];

uniform vec2 poissonKernel[POISSON_KERNEL_SIZE];

uniform float percent;

float nrand(const in vec2 n) {
 return fract(sin(dot(n.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

@import clay.util.rgbm
@import clay.util.float


void main()
{
 vec2 offset = blurRadius / textureSize;

 float rnd = 6.28318 * nrand(v_Texcoord + 0.07 * percent );
 float cosa = cos(rnd);
 float sina = sin(rnd);
 vec4 basis = vec4(cosa, -sina, sina, cosa);

#if !defined(BLUR_NEARFIELD) && !defined(BLUR_COC)
 offset *= abs(decodeFloat(texture2D(coc, v_Texcoord)) * 2.0 - 1.0);
#endif

#ifdef BLUR_COC
 float cocSum = 0.0;
#else
 vec4 color = vec4(0.0);
#endif


 float weightSum = 0.0;

 for (int i = 0; i < POISSON_KERNEL_SIZE; i++) {
 vec2 ofs = poissonKernel[i];

 ofs = vec2(dot(ofs, basis.xy), dot(ofs, basis.zw));

 vec2 uv = v_Texcoord + ofs * offset;
 vec4 texel = texture2D(texture, uv);

 float w = 1.0;
#ifdef BLUR_COC
 float fCoc = decodeFloat(texel) * 2.0 - 1.0;
 cocSum += clamp(fCoc, -1.0, 0.0) * w;
#else
 texel = texel;
 #if !defined(BLUR_NEARFIELD)
 float fCoc = decodeFloat(texture2D(coc, uv)) * 2.0 - 1.0;
 w *= abs(fCoc);
 #endif
 texel.rgb *= texel.a;
 color += texel * w;
#endif

 weightSum += w;
 }

#ifdef BLUR_COC
 gl_FragColor = encodeFloat(clamp(cocSum / weightSum, -1.0, 0.0) * 0.5 + 0.5);
#else
 color /= weightSum;
 color.rgb /= (color.a + 0.0001);
 gl_FragColor = color;
#endif
}

@end`,Qp=`@export ecgl.edge

uniform sampler2D texture;

uniform sampler2D normalTexture;
uniform sampler2D depthTexture;

uniform mat4 projectionInv;

uniform vec2 textureSize;

uniform vec4 edgeColor: [0,0,0,0.8];

varying vec2 v_Texcoord;

vec3 packColor(vec2 coord) {
 float z = texture2D(depthTexture, coord).r * 2.0 - 1.0;
 vec4 p = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * p;

 return vec3(
 texture2D(normalTexture, coord).rg,
 -p4.z / p4.w / 5.0
 );
}

void main() {
 vec2 cc = v_Texcoord;
 vec3 center = packColor(cc);

 float size = clamp(1.0 - (center.z - 10.0) / 100.0, 0.0, 1.0) * 0.5;
 float dx = size / textureSize.x;
 float dy = size / textureSize.y;

 vec2 coord;
 vec3 topLeft = packColor(cc+vec2(-dx, -dy));
 vec3 top = packColor(cc+vec2(0.0, -dy));
 vec3 topRight = packColor(cc+vec2(dx, -dy));
 vec3 left = packColor(cc+vec2(-dx, 0.0));
 vec3 right = packColor(cc+vec2(dx, 0.0));
 vec3 bottomLeft = packColor(cc+vec2(-dx, dy));
 vec3 bottom = packColor(cc+vec2(0.0, dy));
 vec3 bottomRight = packColor(cc+vec2(dx, dy));

 vec3 v = -topLeft-2.0*top-topRight+bottomLeft+2.0*bottom+bottomRight;
 vec3 h = -bottomLeft-2.0*left-topLeft+bottomRight+2.0*right+topRight;

 float edge = sqrt(dot(h, h) + dot(v, v));

 edge = smoothstep(0.8, 1.0, edge);

 gl_FragColor = mix(texture2D(texture, v_Texcoord), vec4(edgeColor.rgb, 1.0), edgeColor.a * edge);
}
@end`;K.import(jc);K.import(qc);K.import($c);K.import(ef);K.import(tf);K.import(Af);K.import(rf);K.import(nf);K.import(af);K.import(bp);K.import(Qp);function lf(e,t){return{color:{parameters:{width:e,height:t}}}}var bo=["composite","FXAA"];function ae(){this._width,this._height,this._dpr,this._sourceTexture=new $({type:P.HALF_FLOAT}),this._depthTexture=new $({format:P.DEPTH_COMPONENT,type:P.UNSIGNED_INT}),this._framebuffer=new Qe,this._framebuffer.attach(this._sourceTexture),this._framebuffer.attach(this._depthTexture,Qe.DEPTH_ATTACHMENT),this._normalPass=new Gr,this._compositor=pp(Sp);var e=this._compositor.getNodeByName("source");e.texture=this._sourceTexture;var t=this._compositor.getNodeByName("coc");this._sourceNode=e,this._cocNode=t,this._compositeNode=this._compositor.getNodeByName("composite"),this._fxaaNode=this._compositor.getNodeByName("FXAA"),this._dofBlurNodes=["dof_far_blur","dof_near_blur","dof_coc_blur"].map(function(r){return this._compositor.getNodeByName(r)},this),this._dofBlurKernel=0,this._dofBlurKernelSize=new Float32Array(0),this._finalNodesChain=bo.map(function(r){return this._compositor.getNodeByName(r)},this);var A={normalTexture:this._normalPass.getNormalTexture(),depthTexture:this._normalPass.getDepthTexture()};this._ssaoPass=new sA(A),this._ssrPass=new oA(A),this._edgePass=new Kn(A)}ae.prototype.resize=function(r,n,A){A=A||1;var r=r*A,n=n*A,i=this._sourceTexture,a=this._depthTexture;i.width=r,i.height=n,a.width=r,a.height=n;var s={getWidth:function(){return r},getHeight:function(){return n},getDevicePixelRatio:function(){return A}};function o(l,u){if(typeof l[u]=="function"){var c=l[u].__original||l[u];l[u]=function(f){return c.call(this,s)},l[u].__original=c}}this._compositor.nodes.forEach(function(l){for(var u in l.outputs){var c=l.outputs[u].parameters;c&&(o(c,"width"),o(c,"height"))}for(var f in l.parameters)o(l.parameters,f)}),this._width=r,this._height=n,this._dpr=A};ae.prototype.getWidth=function(){return this._width};ae.prototype.getHeight=function(){return this._height};ae.prototype._ifRenderNormalPass=function(){return this._enableSSAO||this._enableEdge||this._enableSSR};ae.prototype._getPrevNode=function(e){for(var t=bo.indexOf(e.name)-1,A=this._finalNodesChain[t];A&&!this._compositor.getNodeByName(A.name);)t-=1,A=this._finalNodesChain[t];return A};ae.prototype._getNextNode=function(e){for(var t=bo.indexOf(e.name)+1,A=this._finalNodesChain[t];A&&!this._compositor.getNodeByName(A.name);)t+=1,A=this._finalNodesChain[t];return A};ae.prototype._addChainNode=function(e){var t=this._getPrevNode(e),A=this._getNextNode(e);t&&(e.inputs.texture=t.name,A?(e.outputs=lf(this.getWidth.bind(this),this.getHeight.bind(this)),A.inputs.texture=e.name):e.outputs=null,this._compositor.addNode(e))};ae.prototype._removeChainNode=function(e){var t=this._getPrevNode(e),A=this._getNextNode(e);t&&(A?(t.outputs=lf(this.getWidth.bind(this),this.getHeight.bind(this)),A.inputs.texture=t.name):t.outputs=null,this._compositor.removeNode(e))};ae.prototype.updateNormal=function(e,t,A,r){this._ifRenderNormalPass()&&this._normalPass.update(e,t,A)};ae.prototype.updateSSAO=function(e,t,A,r){this._ssaoPass.update(e,A,r)};ae.prototype.enableSSAO=function(){this._enableSSAO=!0};ae.prototype.disableSSAO=function(){this._enableSSAO=!1};ae.prototype.enableSSR=function(){this._enableSSR=!0};ae.prototype.disableSSR=function(){this._enableSSR=!1};ae.prototype.getSSAOTexture=function(){return this._ssaoPass.getTargetTexture()};ae.prototype.getSourceFrameBuffer=function(){return this._framebuffer};ae.prototype.getSourceTexture=function(){return this._sourceTexture};ae.prototype.disableFXAA=function(){this._removeChainNode(this._fxaaNode)};ae.prototype.enableFXAA=function(){this._addChainNode(this._fxaaNode)};ae.prototype.enableBloom=function(){this._compositeNode.inputs.bloom="bloom_composite",this._compositor.dirty()};ae.prototype.disableBloom=function(){this._compositeNode.inputs.bloom=null,this._compositor.dirty()};ae.prototype.enableDOF=function(){this._compositeNode.inputs.texture="dof_composite",this._compositor.dirty()};ae.prototype.disableDOF=function(){this._compositeNode.inputs.texture="source",this._compositor.dirty()};ae.prototype.enableColorCorrection=function(){this._compositeNode.define("COLOR_CORRECTION"),this._enableColorCorrection=!0};ae.prototype.disableColorCorrection=function(){this._compositeNode.undefine("COLOR_CORRECTION"),this._enableColorCorrection=!1};ae.prototype.enableEdge=function(){this._enableEdge=!0};ae.prototype.disableEdge=function(){this._enableEdge=!1};ae.prototype.setBloomIntensity=function(e){this._compositeNode.setParameter("bloomIntensity",e)};ae.prototype.setSSAOParameter=function(e,t){switch(e){case"quality":var A={low:6,medium:12,high:32,ultra:62}[t]||12;this._ssaoPass.setParameter("kernelSize",A);break;case"radius":this._ssaoPass.setParameter(e,t),this._ssaoPass.setParameter("bias",t/200);break;case"intensity":this._ssaoPass.setParameter(e,t);break}};ae.prototype.setDOFParameter=function(e,t){switch(e){case"focalDistance":case"focalRange":case"fstop":this._cocNode.setParameter(e,t);break;case"blurRadius":for(var A=0;A<this._dofBlurNodes.length;A++)this._dofBlurNodes[A].setParameter("blurRadius",t);break;case"quality":var r={low:4,medium:8,high:16,ultra:32}[t]||8;this._dofBlurKernelSize=r;for(var A=0;A<this._dofBlurNodes.length;A++)this._dofBlurNodes[A].pass.material.define("POISSON_KERNEL_SIZE",r);this._dofBlurKernel=new Float32Array(r*2);break}};ae.prototype.setSSRParameter=function(e,t){if(t!=null)switch(e){case"quality":var A={low:10,medium:15,high:30,ultra:80}[t]||20,r={low:32,medium:16,high:8,ultra:4}[t]||16;this._ssrPass.setParameter("maxIteration",A),this._ssrPass.setParameter("pixelStride",r);break;case"maxRoughness":this._ssrPass.setParameter("minGlossiness",Math.max(Math.min(1-t,1),0));break;case"physical":this.setPhysicallyCorrectSSR(t);break;default:console.warn("Unkown SSR parameter "+e)}};ae.prototype.setPhysicallyCorrectSSR=function(e){this._ssrPass.setPhysicallyCorrect(e)};ae.prototype.setEdgeColor=function(e){var t=w.parseColor(e);this._edgePass.setParameter("edgeColor",t)};ae.prototype.setExposure=function(e){this._compositeNode.setParameter("exposure",Math.pow(2,e))};ae.prototype.setColorLookupTexture=function(e,t){this._compositeNode.pass.material.setTextureImage("lut",this._enableColorCorrection?e:"none",t,{minFilter:w.Texture.NEAREST,magFilter:w.Texture.NEAREST,flipY:!1})};ae.prototype.setColorCorrection=function(e,t){this._compositeNode.setParameter(e,t)};ae.prototype.isSSREnabled=function(){return this._enableSSR};ae.prototype.composite=function(e,t,A,r,n){var i=this._sourceTexture,a=i;this._enableEdge&&(this._edgePass.update(e,A,i,n),i=a=this._edgePass.getTargetTexture()),this._enableSSR&&(this._ssrPass.update(e,A,i,n),a=this._ssrPass.getTargetTexture(),this._ssrPass.setSSAOTexture(this._enableSSAO?this._ssaoPass.getTargetTexture():null)),this._sourceNode.texture=a,this._cocNode.setParameter("depth",this._depthTexture);for(var s=this._dofBlurKernel,o=this._dofBlurKernelSize,l=Math.floor(zl.length/2/o),u=n%l,c=0;c<o*2;c++)s[c]=zl[c+u*o*2];for(var c=0;c<this._dofBlurNodes.length;c++)this._dofBlurNodes[c].setParameter("percent",n/30),this._dofBlurNodes[c].setParameter("poissonKernel",s);this._cocNode.setParameter("zNear",A.near),this._cocNode.setParameter("zFar",A.far),this._compositor.render(e,r)};ae.prototype.dispose=function(e){this._sourceTexture.dispose(e),this._depthTexture.dispose(e),this._framebuffer.dispose(e),this._compositor.dispose(e),this._normalPass.dispose(e),this._ssaoPass.dispose(e)};function Ps(e){for(var t=[],A=0;A<30;A++)t.push([Lr(A,2),Lr(A,3)]);this._haltonSequence=t,this._frame=0,this._sourceTex=new $,this._sourceFb=new Qe,this._sourceFb.attach(this._sourceTex),this._prevFrameTex=new $,this._outputTex=new $;var r=this._blendPass=new Me({fragment:K.source("clay.compositor.blend")});r.material.disableTexturesAll(),r.material.enableTexture(["texture1","texture2"]),this._blendFb=new Qe({depthBuffer:!1}),this._outputPass=new Me({fragment:K.source("clay.compositor.output"),blendWithPrevious:!0}),this._outputPass.material.define("fragment","OUTPUT_ALPHA"),this._outputPass.material.blend=function(n){n.blendEquationSeparate(n.FUNC_ADD,n.FUNC_ADD),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA)}}Ps.prototype={constructor:Ps,jitterProjection:function(e,t){var A=e.viewport,r=A.devicePixelRatio||e.getDevicePixelRatio(),n=A.width*r,i=A.height*r,a=this._haltonSequence[this._frame%this._haltonSequence.length],s=new z;s.array[12]=(a[0]*2-1)/n,s.array[13]=(a[1]*2-1)/i,z.mul(t.projectionMatrix,s,t.projectionMatrix),z.invert(t.invProjectionMatrix,t.projectionMatrix)},resetFrame:function(){this._frame=0},getFrame:function(){return this._frame},getSourceFrameBuffer:function(){return this._sourceFb},getOutputTexture:function(){return this._outputTex},resize:function(e,t){this._prevFrameTex.width=e,this._prevFrameTex.height=t,this._outputTex.width=e,this._outputTex.height=t,this._sourceTex.width=e,this._sourceTex.height=t,this._prevFrameTex.dirty(),this._outputTex.dirty(),this._sourceTex.dirty()},isFinished:function(){return this._frame>=this._haltonSequence.length},render:function(e,t,A){var r=this._blendPass;this._frame===0?(r.setUniform("weight1",0),r.setUniform("weight2",1)):(r.setUniform("weight1",.9),r.setUniform("weight2",.1)),r.setUniform("texture1",this._prevFrameTex),r.setUniform("texture2",t||this._sourceTex),this._blendFb.attach(this._outputTex),this._blendFb.bind(e),r.render(e),this._blendFb.unbind(e),A||(this._outputPass.setUniform("texture",this._outputTex),this._outputPass.render(e));var n=this._prevFrameTex;this._prevFrameTex=this._outputTex,this._outputTex=n,this._frame++},dispose:function(e){this._sourceFb.dispose(e),this._blendFb.dispose(e),this._prevFrameTex.dispose(e),this._outputTex.dispose(e),this._sourceTex.dispose(e),this._outputPass.dispose(e),this._blendPass.dispose(e)}};function de(e){e=e||"perspective",this.layer=null,this.scene=new bA,this.rootNode=this.scene,this.viewport={x:0,y:0,width:0,height:0},this.setProjection(e),this._compositor=new ae,this._temporalSS=new Ps,this._shadowMapPass=new Kt;for(var t=[],A=0,r=0;r<30;r++){for(var n=[],i=0;i<6;i++)n.push(Lr(A,2)*4-2),n.push(Lr(A,3)*4-2),A++;t.push(n)}this._pcfKernels=t,this.scene.on("beforerender",function(a,s,o){this.needsTemporalSS()&&this._temporalSS.jitterProjection(a,o)},this)}de.prototype.setProjection=function(e){var t=this.camera;t&&t.update(),e==="perspective"?this.camera instanceof ze||(this.camera=new ze,t&&this.camera.setLocalTransform(t.localTransform)):this.camera instanceof Qr||(this.camera=new Qr,t&&this.camera.setLocalTransform(t.localTransform)),this.camera.near=.1,this.camera.far=2e3};de.prototype.setViewport=function(e,t,A,r,n){this.camera instanceof ze&&(this.camera.aspect=A/r),n=n||1,this.viewport.x=e,this.viewport.y=t,this.viewport.width=A,this.viewport.height=r,this.viewport.devicePixelRatio=n,this._compositor.resize(A*n,r*n),this._temporalSS.resize(A*n,r*n)};de.prototype.containPoint=function(e,t){var A=this.viewport,r=this.layer.renderer.getHeight();return t=r-t,e>=A.x&&t>=A.y&&e<=A.x+A.width&&t<=A.y+A.height};var kl=new J;de.prototype.castRay=function(e,t,A){var r=this.layer.renderer,n=r.viewport;return r.viewport=this.viewport,r.screenToNDC(e,t,kl),this.camera.castRay(kl,A),r.viewport=n,A};de.prototype.prepareRender=function(){this.scene.update(),this.camera.update(),this.scene.updateLights();var e=this.scene.updateRenderList(this.camera);this._needsSortProgressively=!1;for(var t=0;t<e.transparent.length;t++){var A=e.transparent[t],r=A.geometry;r.needsSortVerticesProgressively&&r.needsSortVerticesProgressively()&&(this._needsSortProgressively=!0),r.needsSortTrianglesProgressively&&r.needsSortTrianglesProgressively()&&(this._needsSortProgressively=!0)}this._frame=0,this._temporalSS.resetFrame()};de.prototype.render=function(e,t){this._doRender(e,t,this._frame),this._frame++};de.prototype.needsAccumulate=function(){return this.needsTemporalSS()||this._needsSortProgressively};de.prototype.needsTemporalSS=function(){var e=this._enableTemporalSS;return e==="auto"&&(e=this._enablePostEffect),e};de.prototype.hasDOF=function(){return this._enableDOF};de.prototype.isAccumulateFinished=function(){return this.needsTemporalSS()?this._temporalSS.isFinished():this._frame>30};de.prototype._doRender=function(e,t,A){var r=this.scene,n=this.camera;A=A||0,this._updateTransparent(e,r,n,A),t||(this._shadowMapPass.kernelPCF=this._pcfKernels[0],this._shadowMapPass.render(e,r,n,!0)),this._updateShadowPCFKernel(A);var i=e.clearColor;if(e.gl.clearColor(i[0],i[1],i[2],i[3]),this._enablePostEffect&&(this.needsTemporalSS()&&this._temporalSS.jitterProjection(e,n),this._compositor.updateNormal(e,r,n,this._temporalSS.getFrame())),this._updateSSAO(e,r,n,this._temporalSS.getFrame()),this._enablePostEffect){var a=this._compositor.getSourceFrameBuffer();a.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),e.render(r,n,!0,!0),a.unbind(e),this.needsTemporalSS()&&t?(this._compositor.composite(e,r,n,this._temporalSS.getSourceFrameBuffer(),this._temporalSS.getFrame()),e.setViewport(this.viewport),this._temporalSS.render(e)):(e.setViewport(this.viewport),this._compositor.composite(e,r,n,null,0))}else if(this.needsTemporalSS()&&t){var a=this._temporalSS.getSourceFrameBuffer();a.bind(e),e.saveClear(),e.clearBit=e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT,e.render(r,n,!0,!0),e.restoreClear(),a.unbind(e),e.setViewport(this.viewport),this._temporalSS.render(e)}else e.setViewport(this.viewport),e.render(r,n,!0,!0)};de.prototype._updateTransparent=function(e,t,A,r){for(var n=new L,i=new z,a=A.getWorldPosition(),s=t.getRenderList(A).transparent,o=0;o<s.length;o++){var l=s[o],u=l.geometry;z.invert(i,l.worldTransform),L.transformMat4(n,a,i),u.needsSortTriangles&&u.needsSortTriangles()&&u.doSortTriangles(n,r),u.needsSortVertices&&u.needsSortVertices()&&u.doSortVertices(n,r)}};de.prototype._updateSSAO=function(e,t,A){var r=this._enableSSAO&&this._enablePostEffect;r&&this._compositor.updateSSAO(e,t,A,this._temporalSS.getFrame());for(var n=t.getRenderList(A),i=0;i<n.opaque.length;i++){var a=n.opaque[i];a.renderNormal&&a.material[r?"enableTexture":"disableTexture"]("ssaoMap"),r&&a.material.set("ssaoMap",this._compositor.getSSAOTexture())}};de.prototype._updateShadowPCFKernel=function(e){for(var t=this._pcfKernels[e%this._pcfKernels.length],A=this.scene.getRenderList(this.camera),r=A.opaque,n=0;n<r.length;n++)r[n].receiveShadow&&(r[n].material.set("pcfKernel",t),r[n].material.define("fragment","PCF_KERNEL_SIZE",t.length/2))};de.prototype.dispose=function(e){this._compositor.dispose(e.gl),this._temporalSS.dispose(e.gl),this._shadowMapPass.dispose(e)};de.prototype.setPostEffect=function(e,t){var A=this._compositor;this._enablePostEffect=e.get("enable");var r=e.getModel("bloom"),n=e.getModel("edge"),i=e.getModel("DOF",e.getModel("depthOfField")),a=e.getModel("SSAO",e.getModel("screenSpaceAmbientOcclusion")),s=e.getModel("SSR",e.getModel("screenSpaceReflection")),o=e.getModel("FXAA"),l=e.getModel("colorCorrection");r.get("enable")?A.enableBloom():A.disableBloom(),i.get("enable")?A.enableDOF():A.disableDOF(),s.get("enable")?A.enableSSR():A.disableSSR(),l.get("enable")?A.enableColorCorrection():A.disableColorCorrection(),n.get("enable")?A.enableEdge():A.disableEdge(),o.get("enable")?A.enableFXAA():A.disableFXAA(),this._enableDOF=i.get("enable"),this._enableSSAO=a.get("enable"),this._enableSSAO?A.enableSSAO():A.disableSSAO(),A.setBloomIntensity(r.get("intensity")),A.setEdgeColor(n.get("color")),A.setColorLookupTexture(l.get("lookupTexture"),t),A.setExposure(l.get("exposure")),["radius","quality","intensity"].forEach(function(u){A.setSSAOParameter(u,a.get(u))}),["quality","maxRoughness","physical"].forEach(function(u){A.setSSRParameter(u,s.get(u))}),["quality","focalDistance","focalRange","blurRadius","fstop"].forEach(function(u){A.setDOFParameter(u,i.get(u))}),["brightness","contrast","saturation"].forEach(function(u){A.setColorCorrection(u,l.get(u))})};de.prototype.setDOFFocusOnPoint=function(e){if(this._enablePostEffect)return e>this.camera.far||e<this.camera.near?void 0:(this._compositor.setDOFParameter("focalDistance",e),!0)};de.prototype.setTemporalSuperSampling=function(e){this._enableTemporalSS=e.get("enable")};de.prototype.isLinearSpace=function(){return this._enablePostEffect};de.prototype.setRootNode=function(e){if(this.rootNode!==e){for(var t=this.rootNode.children(),A=0;A<t.length;A++)e.add(t[A]);e!==this.scene&&this.scene.add(e),this.rootNode=e}};de.prototype.add=function(e){this.rootNode.add(e)};de.prototype.remove=function(e){this.rootNode.remove(e)};de.prototype.removeAll=function(e){this.rootNode.removeAll(e)};Object.assign(de.prototype,xo);function Lp(e,t){var A=e.getBoxLayoutParams(),r=ha(A,{width:t.getWidth(),height:t.getHeight()});r.y=t.getHeight()-r.y-r.height,this.viewGL.setViewport(r.x,r.y,r.width,r.height,t.getDevicePixelRatio());var n=e.get("boxWidth"),i=e.get("boxHeight"),a=e.get("boxDepth");this.getAxis("x").setExtent(-n/2,n/2),this.getAxis("y").setExtent(a/2,-a/2),this.getAxis("z").setExtent(-i/2,i/2),this.size=[n,i,a]}function Ip(e,t){var A={};function r(n,i){A[n]=A[n]||[1/0,-1/0],A[n][0]=Math.min(i[0],A[n][0]),A[n][1]=Math.max(i[1],A[n][1])}e.eachSeries(function(n){if(n.coordinateSystem===this){var i=n.getData();["x","y","z"].forEach(function(a){i.mapDimensionsAll(a,!0).forEach(function(s){r(a,i.getDataExtent(s,!0))})})}},this),["xAxis3D","yAxis3D","zAxis3D"].forEach(function(n){e.eachComponent(n,function(i){var a=n.charAt(0),s=i.getReferringComponents("grid3D").models[0],o=s.coordinateSystem;if(o===this){var l=o.getAxis(a);if(!l){var u=yo(A[a]||[1/0,-1/0],i);l=new ki(a,u),l.type=i.get("type");var c=l.type==="category";l.onBand=c&&i.get("boundaryGap"),l.inverse=i.get("inverse"),i.axis=l,l.model=i,l.getLabelModel=function(){return i.getModel("axisLabel",s.getModel("axisLabel"))},l.getTickModel=function(){return i.getModel("axisTick",s.getModel("axisTick"))},o.addAxis(l)}}},this)},this),this.resize(this.model,t)}var Dp={dimensions:Fn.prototype.dimensions,create:function(e,t){var A=[];e.eachComponent("grid3D",function(i){i.__viewGL=i.__viewGL||new de;var a=new Fn;a.model=i,a.viewGL=i.__viewGL,i.coordinateSystem=a,A.push(a),a.resize=Lp,a.update=Ip});var r=["xAxis3D","yAxis3D","zAxis3D"];function n(i,a){return r.map(function(s){var o=i.getReferringComponents(s).models[0];return o==null&&(o=a.getComponent(s)),o})}return e.eachSeries(function(i){if(i.get("coordinateSystem")==="cartesian3D"){var a=i.getReferringComponents("grid3D").models[0];if(a==null){var s=n(i,e),a=s[0].getCoordSysModel();s.forEach(function(u){u.getCoordSysModel()})}var o=a.coordinateSystem;i.coordinateSystem=o}}),A}},uf=Hr.extend({type:"cartesian3DAxis",axis:null,getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid3D",index:this.option.gridIndex,id:this.option.gridId})[0]}});ug(uf);var cf={show:!0,grid3DIndex:0,inverse:!1,name:"",nameLocation:"middle",nameTextStyle:{fontSize:16},nameGap:20,axisPointer:{},axisLine:{},axisTick:{},axisLabel:{},splitArea:{}},Mp=he({boundaryGap:!0,axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"},axisPointer:{label:{show:!1}}},cf),Qo=he({boundaryGap:[0,0],splitNumber:5,axisPointer:{label:{}}},cf),Rp=SA({scale:!0,min:"dataMin",max:"dataMax"},Qo),ff=SA({logBase:10},Qo);ff.scale=!0;const Np={categoryAxis3D:Mp,valueAxis3D:Qo,timeAxis3D:Rp,logAxis3D:ff};var Hp=["value","category","time","log"];function Op(e,t,A,r,n){Hp.forEach(function(i){var a=A.extend({type:t+"Axis3D."+i,__ordinalMeta:null,mergeDefaultAndTheme:function(s,o){var l=o.getTheme();he(s,l.get(i+"Axis3D")),he(s,this.getDefaultOption()),s.type=r(t,s)},optionUpdated:function(){var s=this.option;s.type==="category"&&(this.__ordinalMeta=bd.createByAxisModel(this))},getCategories:function(){if(this.option.type==="category")return this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:he(Qd(Np[i+"Axis3D"]),n||{},!0)});e.registerComponentModel(a)}),e.registerSubTypeDefaulter(t+"Axis3D",Ld(r,t))}function Pp(e,t){return t.type||(t.data?"category":"value")}function Gp(e){e.registerComponentModel(_a),e.registerComponentView(rp),e.registerCoordinateSystem("grid3D",Dp),["x","y","z"].forEach(function(t){Op(e,t,uf,Pp,{name:t.toUpperCase()});const A=e.ComponentView.extend({type:t+"Axis3D"});e.registerComponentView(A)}),e.registerAction({type:"grid3DChangeCamera",event:"grid3dcamerachanged",update:"series:updateCamera"},function(t,A){A.eachComponent({mainType:"grid3D",query:t},function(r){r.setView(t)})}),e.registerAction({type:"grid3DShowAxisPointer",event:"grid3dshowaxispointer",update:"grid3D:showAxisPointer"},function(t,A){}),e.registerAction({type:"grid3DHideAxisPointer",event:"grid3dhideaxispointer",update:"grid3D:hideAxisPointer"},function(t,A){})}et(Gp);const Vr={defaultOption:{shading:null,realisticMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},lambertMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},colorMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},hatchingMaterial:{textureTiling:1,textureOffset:0,paperColor:"#fff"}}},hf={getFilledRegions:function(e,t){var A=(e||[]).slice(),r;if(typeof t=="string"?(t=Ls(t),r=t&&t.geoJson):t&&t.features&&(r=t),!r)return[];for(var n={},i=r.features,a=0;a<A.length;a++)n[A[a].name]=A[a];for(var a=0;a<i.length;a++){var s=i[a].properties.name;n[s]||A.push({name:s})}return A},defaultOption:{show:!0,zlevel:-10,map:"",left:0,top:0,width:"100%",height:"100%",boxWidth:100,boxHeight:10,boxDepth:"auto",regionHeight:3,environment:"auto",groundPlane:{show:!1,color:"#aaa"},shading:"lambert",light:{main:{alpha:40,beta:30}},viewControl:{alpha:40,beta:0,distance:100,orthographicSize:60,minAlpha:5,minBeta:-80,maxBeta:80},label:{show:!1,distance:2,textStyle:{fontSize:20,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:4}},itemStyle:{color:"#fff",borderWidth:0,borderColor:"#333"},emphasis:{itemStyle:{color:"#639fc0"},label:{show:!0}}}};var Kr=Hr.extend({type:"geo3D",layoutMode:"box",coordinateSystem:null,optionUpdated:function(){var e=this.option;e.regions=this.getFilledRegions(e.regions,e.map);var t=On(e.data||[],{coordDimensions:["value"],encodeDefine:this.get("encode"),dimensionsDefine:this.get("dimensions")}),A=new Zt(t,this);A.initData(e.regions);var r={};A.each(function(n){var i=A.getName(n),a=A.getItemModel(n);r[i]=a}),this._regionModelMap=r,this._data=A},getData:function(){return this._data},getRegionModel:function(e){var t=this.getData().getName(e);return this._regionModelMap[t]||new Tr(null,this)},getRegionPolygonCoords:function(e){var t=this.getData().getName(e),A=this.coordinateSystem.getRegion(t);return A?A.geometries:[]},getFormattedLabel:function(e,t){var A=this._data.getName(e),r=this.getRegionModel(e),n=r.get(t==="normal"?["label","formatter"]:["emphasis","label","formatter"]);n==null&&(n=r.get(["label","formatter"]));var i={name:A};if(typeof n=="function")return i.status=t,n(i);if(typeof n=="string"){var a=i.seriesName;return n.replace("{a}",a??"")}else return A},defaultOption:{regions:[]}});he(Kr.prototype,hf);he(Kr.prototype,ma);he(Kr.prototype,Or);he(Kr.prototype,Pr);he(Kr.prototype,Vr);function df(e,t,A){A=A||2;var r=t&&t.length,n=r?t[0]*A:e.length,i=gf(e,0,n,A,!0),a=[];if(!i)return a;var s,o,l,u,c,f,h;if(r&&(i=Wp(e,t,i,A)),e.length>80*A){s=l=e[0],o=u=e[1];for(var d=A;d<n;d+=A)c=e[d],f=e[d+1],c<s&&(s=c),f<o&&(o=f),c>l&&(l=c),f>u&&(u=f);h=Math.max(l-s,u-o)}return bn(i,a,A,s,o,h),a}function gf(e,t,A,r,n){var i,a;if(n===Ks(e,t,A,r)>0)for(i=t;i<A;i+=r)a=Wl(i,e[i],e[i+1],a);else for(i=A-r;i>=t;i-=r)a=Wl(i,e[i],e[i+1],a);return a&&WA(a,a.next)&&(Ln(a),a=a.next),a}function Sn(e,t){if(!e)return e;t||(t=e);var A=e,r;do if(r=!1,!A.steiner&&(WA(A,A.next)||ct(A.prev,A,A.next)===0)){if(Ln(A),A=t=A.prev,A===A.next)return null;r=!0}else A=A.next;while(r||A!==t);return t}function bn(e,t,A,r,n,i,a){if(e){!a&&i&&Jp(e,r,n,i);for(var s=e,o,l;e.prev!==e.next;){if(o=e.prev,l=e.next,i?Kp(e,r,n,i):Vp(e)){t.push(o.i/A),t.push(e.i/A),t.push(l.i/A),Ln(e),e=l.next,s=l.next;continue}if(e=l,e===s){a?a===1?(e=zp(e,t,A),bn(e,t,A,r,n,i,2)):a===2&&kp(e,t,A,r,n,i):bn(Sn(e),t,A,r,n,i,1);break}}}}function Vp(e){var t=e.prev,A=e,r=e.next;if(ct(t,A,r)>=0)return!1;for(var n=e.next.next;n!==e.prev;){if(Xi(t.x,t.y,A.x,A.y,r.x,r.y,n.x,n.y)&&ct(n.prev,n,n.next)>=0)return!1;n=n.next}return!0}function Kp(e,t,A,r){var n=e.prev,i=e,a=e.next;if(ct(n,i,a)>=0)return!1;for(var s=n.x<i.x?n.x<a.x?n.x:a.x:i.x<a.x?i.x:a.x,o=n.y<i.y?n.y<a.y?n.y:a.y:i.y<a.y?i.y:a.y,l=n.x>i.x?n.x>a.x?n.x:a.x:i.x>a.x?i.x:a.x,u=n.y>i.y?n.y>a.y?n.y:a.y:i.y>a.y?i.y:a.y,c=Gs(s,o,t,A,r),f=Gs(l,u,t,A,r),h=e.nextZ;h&&h.z<=f;){if(h!==e.prev&&h!==e.next&&Xi(n.x,n.y,i.x,i.y,a.x,a.y,h.x,h.y)&&ct(h.prev,h,h.next)>=0)return!1;h=h.nextZ}for(h=e.prevZ;h&&h.z>=c;){if(h!==e.prev&&h!==e.next&&Xi(n.x,n.y,i.x,i.y,a.x,a.y,h.x,h.y)&&ct(h.prev,h,h.next)>=0)return!1;h=h.prevZ}return!0}function zp(e,t,A){var r=e;do{var n=r.prev,i=r.next.next;!WA(n,i)&&vf(n,r,r.next,i)&&Qn(n,i)&&Qn(i,n)&&(t.push(n.i/A),t.push(r.i/A),t.push(i.i/A),Ln(r),Ln(r.next),r=e=i),r=r.next}while(r!==e);return r}function kp(e,t,A,r,n,i){var a=e;do{for(var s=a.next.next;s!==a.prev;){if(a.i!==s.i&&$p(a,s)){var o=pf(a,s);a=Sn(a,a.next),o=Sn(o,o.next),bn(a,t,A,r,n,i),bn(o,t,A,r,n,i);return}s=s.next}a=a.next}while(a!==e)}function Wp(e,t,A,r){var n=[],i,a,s,o,l;for(i=0,a=t.length;i<a;i++)s=t[i]*r,o=i<a-1?t[i+1]*r:e.length,l=gf(e,s,o,r,!1),l===l.next&&(l.steiner=!0),n.push(qp(l));for(n.sort(Xp),i=0;i<n.length;i++)Yp(n[i],A),A=Sn(A,A.next);return A}function Xp(e,t){return e.x-t.x}function Yp(e,t){if(t=Zp(e,t),t){var A=pf(t,e);Sn(A,A.next)}}function Zp(e,t){var A=t,r=e.x,n=e.y,i=-1/0,a;do{if(n<=A.y&&n>=A.next.y&&A.next.y!==A.y){var s=A.x+(n-A.y)*(A.next.x-A.x)/(A.next.y-A.y);if(s<=r&&s>i){if(i=s,s===r){if(n===A.y)return A;if(n===A.next.y)return A.next}a=A.x<A.next.x?A:A.next}}A=A.next}while(A!==t);if(!a)return null;if(r===i)return a.prev;var o=a,l=a.x,u=a.y,c=1/0,f;for(A=a.next;A!==o;)r>=A.x&&A.x>=l&&r!==A.x&&Xi(n<u?r:i,n,l,u,n<u?i:r,n,A.x,A.y)&&(f=Math.abs(n-A.y)/(r-A.x),(f<c||f===c&&A.x>a.x)&&Qn(A,e)&&(a=A,c=f)),A=A.next;return a}function Jp(e,t,A,r){var n=e;do n.z===null&&(n.z=Gs(n.x,n.y,t,A,r)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==e);n.prevZ.nextZ=null,n.prevZ=null,jp(n)}function jp(e){var t,A,r,n,i,a,s,o,l=1;do{for(A=e,e=null,i=null,a=0;A;){for(a++,r=A,s=0,t=0;t<l&&(s++,r=r.nextZ,!!r);t++);for(o=l;s>0||o>0&&r;)s!==0&&(o===0||!r||A.z<=r.z)?(n=A,A=A.nextZ,s--):(n=r,r=r.nextZ,o--),i?i.nextZ=n:e=n,n.prevZ=i,i=n;A=r}i.nextZ=null,l*=2}while(a>1);return e}function Gs(e,t,A,r,n){return e=32767*(e-A)/n,t=32767*(t-r)/n,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function qp(e){var t=e,A=e;do t.x<A.x&&(A=t),t=t.next;while(t!==e);return A}function Xi(e,t,A,r,n,i,a,s){return(n-a)*(t-s)-(e-a)*(i-s)>=0&&(e-a)*(r-s)-(A-a)*(t-s)>=0&&(A-a)*(i-s)-(n-a)*(r-s)>=0}function $p(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!em(e,t)&&Qn(e,t)&&Qn(t,e)&&tm(e,t)}function ct(e,t,A){return(t.y-e.y)*(A.x-t.x)-(t.x-e.x)*(A.y-t.y)}function WA(e,t){return e.x===t.x&&e.y===t.y}function vf(e,t,A,r){return WA(e,t)&&WA(A,r)||WA(e,r)&&WA(A,t)?!0:ct(e,t,A)>0!=ct(e,t,r)>0&&ct(A,r,e)>0!=ct(A,r,t)>0}function em(e,t){var A=e;do{if(A.i!==e.i&&A.next.i!==e.i&&A.i!==t.i&&A.next.i!==t.i&&vf(A,A.next,e,t))return!0;A=A.next}while(A!==e);return!1}function Qn(e,t){return ct(e.prev,e,e.next)<0?ct(e,t,e.next)>=0&&ct(e,e.prev,t)>=0:ct(e,t,e.prev)<0||ct(e,e.next,t)<0}function tm(e,t){var A=e,r=!1,n=(e.x+t.x)/2,i=(e.y+t.y)/2;do A.y>i!=A.next.y>i&&A.next.y!==A.y&&n<(A.next.x-A.x)*(i-A.y)/(A.next.y-A.y)+A.x&&(r=!r),A=A.next;while(A!==e);return r}function pf(e,t){var A=new Vs(e.i,e.x,e.y),r=new Vs(t.i,t.x,t.y),n=e.next,i=t.prev;return e.next=t,t.prev=e,A.next=n,n.prev=A,r.next=A,A.prev=r,i.next=r,r.prev=i,r}function Wl(e,t,A,r){var n=new Vs(e,t,A);return r?(n.next=r.next,n.prev=r,r.next.prev=n,r.next=n):(n.prev=n,n.next=n),n}function Ln(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Vs(e,t,A){this.i=e,this.x=t,this.y=A,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}df.deviation=function(e,t,A,r){var n=t&&t.length,i=n?t[0]*A:e.length,a=Math.abs(Ks(e,0,i,A));if(n)for(var s=0,o=t.length;s<o;s++){var l=t[s]*A,u=s<o-1?t[s+1]*A:e.length;a-=Math.abs(Ks(e,l,u,A))}var c=0;for(s=0;s<r.length;s+=3){var f=r[s]*A,h=r[s+1]*A,d=r[s+2]*A;c+=Math.abs((e[f]-e[d])*(e[h+1]-e[f+1])-(e[f]-e[h])*(e[d+1]-e[f+1]))}return a===0&&c===0?0:Math.abs((c-a)/a)};function Ks(e,t,A,r){for(var n=0,i=t,a=A-r;i<A;i+=r)n+=(e[a]-e[i])*(e[i+1]+e[a+1]),a=i;return n}function rs(e,t,A){var r=e[t];e[t]=e[A],e[A]=r}function mf(e,t,A,r,n){var i=A,a=e[t];rs(e,t,r);for(var s=A;s<r;s++)n(e[s],a)<0&&(rs(e,s,i),i++);return rs(e,r,i),i}function Yi(e,t,A,r){if(A<r){var n=Math.floor((A+r)/2),i=mf(e,n,A,r,t);Yi(e,t,A,i-1),Yi(e,t,i+1,r)}}function Ir(){this._parts=[]}Ir.prototype.step=function(e,t,A){var r=e.length;if(A===0){this._parts=[],this._sorted=!1;var n=Math.floor(r/2);this._parts.push({pivot:n,left:0,right:r-1}),this._currentSortPartIdx=0}if(!this._sorted){var i=this._parts;if(i.length===0)return this._sorted=!0,!0;if(i.length<512){for(var a=0;a<i.length;a++)i[a].pivot=mf(e,i[a].pivot,i[a].left,i[a].right,t);for(var s=[],a=0;a<i.length;a++){var o=i[a].left,l=i[a].pivot-1;l>o&&s.push({pivot:Math.floor((l+o)/2),left:o,right:l});var o=i[a].pivot+1,l=i[a].right;l>o&&s.push({pivot:Math.floor((l+o)/2),left:o,right:l})}i=this._parts=s}else for(var a=0;a<Math.floor(i.length/10);a++){var u=i.length-1-this._currentSortPartIdx;if(Yi(e,t,i[u].left,i[u].right),this._currentSortPartIdx++,this._currentSortPartIdx===i.length)return this._sorted=!0,!0}return!1}};Ir.sort=Yi;var Cr=Le.vec3,Xl=Cr.create(),Yl=Cr.create(),Zl=Cr.create();const Lo={needsSortTriangles:function(){return this.indices&&this.sortTriangles},needsSortTrianglesProgressively:function(){return this.needsSortTriangles()&&this.triangleCount>=2e4},doSortTriangles:function(e,t){var A=this.indices;if(t===0){var r=this.attributes.position,e=e.array;(!this._triangleZList||this._triangleZList.length!==this.triangleCount)&&(this._triangleZList=new Float32Array(this.triangleCount),this._sortedTriangleIndices=new Uint32Array(this.triangleCount),this._indicesTmp=new A.constructor(A.length),this._triangleZListTmp=new Float32Array(this.triangleCount));for(var n=0,i,a=0;a<A.length;){r.get(A[a++],Xl),r.get(A[a++],Yl),r.get(A[a++],Zl);var s=Cr.sqrDist(Xl,e),o=Cr.sqrDist(Yl,e),l=Cr.sqrDist(Zl,e),u=Math.min(s,o);u=Math.min(u,l),a===3?(i=u,u=0):u=u-i,this._triangleZList[n++]=u}}for(var c=this._sortedTriangleIndices,a=0;a<c.length;a++)c[a]=a;if(this.triangleCount<2e4)t===0&&this._simpleSort(!0);else for(var a=0;a<3;a++)this._progressiveQuickSort(t*3+a);for(var f=this._indicesTmp,h=this._triangleZListTmp,d=this._triangleZList,a=0;a<this.triangleCount;a++){var g=c[a]*3,v=a*3;f[v++]=A[g++],f[v++]=A[g++],f[v]=A[g],h[a]=d[c[a]]}var p=this._indicesTmp;this._indicesTmp=this.indices,this.indices=p;var p=this._triangleZListTmp;this._triangleZListTmp=this._triangleZList,this._triangleZList=p,this.dirtyIndices()},_simpleSort:function(e){var t=this._triangleZList,A=this._sortedTriangleIndices;function r(n,i){return t[i]-t[n]}e?Array.prototype.sort.call(A,r):Ir.sort(A,r,0,A.length-1)},_progressiveQuickSort:function(e){var t=this._triangleZList,A=this._sortedTriangleIndices;this._quickSort=this._quickSort||new Ir,this._quickSort.step(A,function(r,n){return t[n]-t[r]},e)}};function Am(e){const t=e.getVisual("style");if(t){const A=e.getVisual("drawType");return t[A]}}function rm(e){return e.getVisual("style").opacity}function Ye(e,t){const A=e.getItemVisual(t,"style");if(A){const r=e.getVisual("drawType");return A[r]}}function Xe(e,t){const A=e.getItemVisual(t,"style");return A&&A.opacity}var _f=1,Bf=2;function lA(e,t,A){this._labelsMesh=new Fo,this._labelTextureSurface=new zi({width:512,height:512,devicePixelRatio:A.getDevicePixelRatio(),onupdate:function(){A.getZr().refresh()}}),this._api=A,this._labelsMesh.material.set("textureAtlas",this._labelTextureSurface.getTexture())}lA.prototype.getLabelPosition=function(e,t,A){return[0,0,0]};lA.prototype.getLabelDistance=function(e,t,A){return 0};lA.prototype.getMesh=function(){return this._labelsMesh};lA.prototype.updateData=function(e,t,A){t==null&&(t=0),A==null&&(A=e.count()),(!this._labelsVisibilitiesBits||this._labelsVisibilitiesBits.length!==A-t)&&(this._labelsVisibilitiesBits=new Uint8Array(A-t));for(var r=["label","show"],n=["emphasis","label","show"],i=t;i<A;i++){var a=e.getItemModel(i),s=a.get(r),o=a.get(n);o==null&&(o=s);var l=(s?_f:0)|(o?Bf:0);this._labelsVisibilitiesBits[i-t]=l}this._start=t,this._end=A,this._data=e};lA.prototype.updateLabels=function(e){if(this._data){e=e||[];for(var t=e.length>0,A={},r=0;r<e.length;r++)A[e[r]]=!0;this._labelsMesh.geometry.convertToDynamicArray(!0),this._labelTextureSurface.clear();for(var n=["label"],i=["emphasis","label"],a=this._data.hostModel,s=this._data,o=a.getModel(n),l=a.getModel(i,o),u={left:"right",right:"left",top:"center",bottom:"center"},c={left:"middle",right:"middle",top:"bottom",bottom:"top"},f=this._start;f<this._end;f++){var h=!1;t&&A[f]&&(h=!0);var d=this._labelsVisibilitiesBits[f-this._start]&(h?Bf:_f);if(d){var g=s.getItemModel(f),v=g.getModel(h?i:n,h?l:o),p=v.get("distance")||0,m=v.get("position"),B=this._api.getDevicePixelRatio(),_=a.getFormattedLabel(f,h?"emphasis":"normal");if(_==null||_==="")return;var x=new Oi({style:Pi(v,{text:_,fill:v.get("color")||Ye(s,f)||"#000",align:"left",verticalAlign:"top",opacity:Ae.firstNotNull(v.get("opacity"),Xe(s,f),1)})}),y=x.getBoundingRect(),T=1.2;y.height*=T;var E=this._labelTextureSurface.add(x),F=u[m]||"center",S=c[m]||"bottom";this._labelsMesh.geometry.addSprite(this.getLabelPosition(f,m,p),[y.width*B,y.height*B],E,F,S,this.getLabelDistance(f,m,p)*B)}}this._labelsMesh.material.set("uvScale",this._labelTextureSurface.getCoordsScale()),this._labelTextureSurface.getZr().refreshImmediately(),this._labelsMesh.geometry.convertToTypedArray(),this._labelsMesh.geometry.dirty()}};lA.prototype.dispose=function(){this._labelTextureSurface.dispose()};var gt=Le.vec3;w.Shader.import(wa);function Dr(e){this.rootNode=new w.Node,this._triangulationResults={},this._shadersMap=w.COMMON_SHADERS.filter(function(A){return A!=="shadow"}).reduce(function(A,r){return A[r]=w.createShader("ecgl."+r),A},{}),this._linesShader=w.createShader("ecgl.meshLines3D");var t={};w.COMMON_SHADERS.forEach(function(A){t[A]=new w.Material({shader:w.createShader("ecgl."+A)})}),this._groundMaterials=t,this._groundMesh=new w.Mesh({geometry:new w.PlaneGeometry({dynamic:!0}),castShadow:!1,renderNormal:!0,$ignorePicking:!0}),this._groundMesh.rotation.rotateX(-Math.PI/2),this._labelsBuilder=new lA(512,512,e),this._labelsBuilder.getMesh().renderOrder=100,this._labelsBuilder.getMesh().material.depthTest=!1,this.rootNode.add(this._labelsBuilder.getMesh()),this._initMeshes(),this._api=e}Dr.prototype={constructor:Dr,extrudeY:!0,update:function(e,t,A,r,n){var i=e.getData();r==null&&(r=0),n==null&&(n=i.count()),this._startIndex=r,this._endIndex=n-1,this._triangulation(e,r,n);var a=this._getShader(e.get("shading"));this._prepareMesh(e,a,A,r,n),this.rootNode.updateWorldTransform(),this._updateRegionMesh(e,A,r,n);var s=e.coordinateSystem;s.type==="geo3D"&&this._updateGroundPlane(e,s,A);var o=this;this._labelsBuilder.updateData(i,r,n),this._labelsBuilder.getLabelPosition=function(l,u,c){var f=i.getName(l),h,d=c;if(s.type==="geo3D"){var g=s.getRegion(f);if(!g)return[NaN,NaN,NaN];h=g.getCenter();var v=s.dataToPoint([h[0],h[1],d]);return v}else var p=o._triangulationResults[l-o._startIndex],h=o.extrudeY?[(p.max[0]+p.min[0])/2,p.max[1]+d,(p.max[2]+p.min[2])/2]:[(p.max[0]+p.min[0])/2,(p.max[1]+p.min[1])/2,p.max[2]+d]},this._data=i,this._labelsBuilder.updateLabels(),this._updateDebugWireframe(e),this._lastHoverDataIndex=0},_initMeshes:function(){var e=this;function t(){var n=new w.Mesh({name:"Polygon",material:new w.Material({shader:e._shadersMap.lambert}),geometry:new w.Geometry({sortTriangles:!0,dynamic:!0}),culling:!1,ignorePicking:!0,renderNormal:!0});return Object.assign(n.geometry,Lo),n}var A=t(),r=new w.Mesh({material:new w.Material({shader:this._linesShader}),castShadow:!1,ignorePicking:!0,$ignorePicking:!0,geometry:new QA({useNativeLine:!1})});this.rootNode.add(A),this.rootNode.add(r),A.material.define("both","VERTEX_COLOR"),A.material.define("fragment","DOUBLE_SIDED"),this._polygonMesh=A,this._linesMesh=r,this.rootNode.add(this._groundMesh)},_getShader:function(e){var t=this._shadersMap[e];return t||(t=this._shadersMap.lambert),t.__shading=e,t},_prepareMesh:function(e,t,A,r,n){for(var i=0,a=0,s=0,o=0,l=r;l<n;l++){var u=this._getRegionPolygonInfo(l),c=this._getRegionLinesInfo(l,e,this._linesMesh.geometry);i+=u.vertexCount,a+=u.triangleCount,s+=c.vertexCount,o+=c.triangleCount}var f=this._polygonMesh,h=f.geometry;["position","normal","texcoord0","color"].forEach(function(d){h.attributes[d].init(i)}),h.indices=i>65535?new Uint32Array(a*3):new Uint16Array(a*3),f.material.shader!==t&&f.material.attachShader(t,!0),w.setMaterialFromModel(t.__shading,f.material,e,A),s>0&&(this._linesMesh.geometry.resetOffset(),this._linesMesh.geometry.setVertexCount(s),this._linesMesh.geometry.setTriangleCount(o)),this._dataIndexOfVertex=new Uint32Array(i),this._vertexRangeOfDataIndex=new Uint32Array((n-r)*2)},_updateRegionMesh:function(e,t,A,r){for(var n=e.getData(),i=0,a=0,s=!1,y=this._polygonMesh,o=this._linesMesh,l=A;l<r;l++){var u=e.getRegionModel(l),c=u.getModel("itemStyle"),f=Ae.firstNotNull(Ye(n,l),c.get("color"),"#fff"),h=Ae.firstNotNull(Xe(n,l),c.get("opacity"),1),d=w.parseColor(f),g=w.parseColor(c.get("borderColor"));d[3]*=h,g[3]*=h;var v=d[3]<.99;y.material.set("color",[1,1,1,1]),s=s||v;for(var p=Ae.firstNotNull(u.get("height",!0),e.get("regionHeight")),m=this._updatePolygonGeometry(e,y.geometry,l,p,i,a,d),B=i;B<m.vertexOffset;B++)this._dataIndexOfVertex[B]=l;this._vertexRangeOfDataIndex[(l-A)*2]=i,this._vertexRangeOfDataIndex[(l-A)*2+1]=m.vertexOffset,i=m.vertexOffset,a=m.triangleOffset;var _=c.get("borderWidth"),x=_>0;x&&(_*=t.getDevicePixelRatio(),this._updateLinesGeometry(o.geometry,e,l,p,_,e.coordinateSystem.transform)),o.invisible=!x,o.material.set({color:g})}var y=this._polygonMesh;y.material.transparent=s,y.material.depthMask=!s,y.geometry.updateBoundingBox(),y.frontFace=this.extrudeY?w.Mesh.CCW:w.Mesh.CW,y.material.get("normalMap")&&y.geometry.generateTangents(),y.seriesIndex=e.seriesIndex,y.on("mousemove",this._onmousemove,this),y.on("mouseout",this._onmouseout,this)},_updateDebugWireframe:function(e){var t=e.getModel("debug.wireframe");if(t.get("show")){var A=w.parseColor(t.get("lineStyle.color")||"rgba(0,0,0,0.5)"),r=Ae.firstNotNull(t.get("lineStyle.width"),1),n=this._polygonMesh;n.geometry.generateBarycentric(),n.material.define("both","WIREFRAME_TRIANGLE"),n.material.set("wireframeLineColor",A),n.material.set("wireframeLineWidth",r)}},_onmousemove:function(e){var t=this._dataIndexOfVertex[e.triangle[0]];t==null&&(t=-1),t!==this._lastHoverDataIndex&&(this.downplay(this._lastHoverDataIndex),this.highlight(t),this._labelsBuilder.updateLabels([t])),this._lastHoverDataIndex=t,this._polygonMesh.dataIndex=t},_onmouseout:function(e){e.target&&(this.downplay(this._lastHoverDataIndex),this._lastHoverDataIndex=-1,this._polygonMesh.dataIndex=-1),this._labelsBuilder.updateLabels([])},_updateGroundPlane:function(e,t,A){var r=e.getModel("groundPlane",e);if(this._groundMesh.invisible=!r.get("show",!0),!this._groundMesh.invisible){var n=e.get("shading"),i=this._groundMaterials[n];i||(i=this._groundMaterials.lambert),w.setMaterialFromModel(n,i,r,A),i.get("normalMap")&&this._groundMesh.geometry.generateTangents(),this._groundMesh.material=i,this._groundMesh.material.set("color",w.parseColor(r.get("color"))),this._groundMesh.scale.set(t.size[0],t.size[2],1)}},_triangulation:function(e,t,A){this._triangulationResults=[];for(var r=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0],i=e.coordinateSystem,a=t;a<A;a++){for(var s=[],o=e.getRegionPolygonCoords(a),l=0;l<o.length;l++){var u=o[l].exterior,c=o[l].interiors,f=[],h=[];if(!(u.length<3)){for(var d=0,g=0;g<u.length;g++){var v=u[g];f[d++]=v[0],f[d++]=v[1]}for(var g=0;g<c.length;g++)if(!(c[g].length<3)){for(var p=f.length/2,m=0;m<c[g].length;m++){var v=c[g][m];f.push(v[0]),f.push(v[1])}h.push(p)}for(var B=df(f,h),_=new Float64Array(f.length/2*3),x=[],y=[1/0,1/0,1/0],T=[-1/0,-1/0,-1/0],E=0,g=0;g<f.length;)gt.set(x,f[g++],0,f[g++]),i&&i.transform&&gt.transformMat4(x,x,i.transform),gt.min(y,y,x),gt.max(T,T,x),_[E++]=x[0],_[E++]=x[1],_[E++]=x[2];gt.min(r,r,y),gt.max(n,n,T),s.push({points:_,indices:B,min:y,max:T})}}this._triangulationResults.push(s)}this._geoBoundingBox=[r,n]},_getRegionPolygonInfo:function(e){for(var t=this._triangulationResults[e-this._startIndex],A=0,r=0,n=0;n<t.length;n++)A+=t[n].points.length/3,r+=t[n].indices.length/3;var i=A*2+A*4,a=r*2+A*2;return{vertexCount:i,triangleCount:a}},_updatePolygonGeometry:function(e,t,A,r,n,i,a){var s=e.get("projectUVOnGround"),o=t.attributes.position,l=t.attributes.normal,u=t.attributes.texcoord0,c=t.attributes.color,f=this._triangulationResults[A-this._startIndex],h=c.value&&a,d=t.indices,g=this.extrudeY?1:2,v=this.extrudeY?2:1,p=[this.rootNode.worldTransform.x.len(),this.rootNode.worldTransform.y.len(),this.rootNode.worldTransform.z.len()],m=gt.mul([],this._geoBoundingBox[0],p),B=gt.mul([],this._geoBoundingBox[1],p),_=Math.max(B[0]-m[0],B[2]-m[2]);function x(Ue,rt,Je){for(var Ke=Ue.points,Wr=Ke.length,Re=[],Pt=[],at=0;at<Wr;at+=3)Re[0]=Ke[at],Re[g]=rt,Re[v]=Ke[at+2],Pt[0]=(Ke[at]*p[0]-m[0])/_,Pt[1]=(Ke[at+2]*p[v]-m[2])/_,o.set(n,Re),h&&c.set(n,a),u.set(n++,Pt)}function y(Ue,rt,Je){var Ke=n;x(Ue,rt);for(var Wr=Ue.indices.length,Re=0;Re<Wr;Re++)d[i*3+Re]=Ue.indices[Re]+Ke;i+=Ue.indices.length/3}for(var T=this.extrudeY?[0,1,0]:[0,0,1],E=gt.negate([],T),F=0;F<f.length;F++){var S=n,U=f[F];y(U,0),y(U,r);for(var I=U.points.length/3,Q=0;Q<I;Q++)l.set(S+Q,E),l.set(S+Q+I,T);for(var b=[0,3,1,1,3,2],N=[[],[],[],[]],H=[],V=[],G=[],j=[],W=0,Q=0;Q<I;Q++){for(var ne=(Q+1)%I,ee=(U.points[ne*3]-U.points[Q*3])*p[0],ie=(U.points[ne*3+2]-U.points[Q*3+2])*p[v],te=Math.sqrt(ee*ee+ie*ie),q=0;q<4;q++){var Be=q===0||q===3,ge=(Be?Q:ne)*3;N[q][0]=U.points[ge],N[q][g]=q>1?r:0,N[q][v]=U.points[ge+2],o.set(n+q,N[q]),s?(j[0]=(U.points[ge]*p[0]-m[0])/_,j[1]=(U.points[ge+2]*p[v]-m[v])/_):(j[0]=(Be?W:W+te)/_,j[1]=(N[q][g]*p[g]-m[g])/_),u.set(n+q,j)}gt.sub(H,N[1],N[0]),gt.sub(V,N[3],N[0]),gt.cross(G,H,V),gt.normalize(G,G);for(var q=0;q<4;q++)l.set(n+q,G),h&&c.set(n+q,a);for(var q=0;q<6;q++)d[i*3+q]=b[q]+n;n+=4,i+=2,W+=te}}return t.dirty(),{vertexOffset:n,triangleOffset:i}},_getRegionLinesInfo:function(e,t,A){var r=0,n=0,i=t.getRegionModel(e),a=i.getModel("itemStyle"),s=a.get("borderWidth");if(s>0){var o=t.getRegionPolygonCoords(e);o.forEach(function(l){var u=l.exterior,c=l.interiors;r+=A.getPolylineVertexCount(u),n+=A.getPolylineTriangleCount(u);for(var f=0;f<c.length;f++)r+=A.getPolylineVertexCount(c[f]),n+=A.getPolylineTriangleCount(c[f])},this)}return{vertexCount:r,triangleCount:n}},_updateLinesGeometry:function(e,t,A,r,n,i){function a(l){for(var u=new Float64Array(l.length*3),c=0,f=[],h=0;h<l.length;h++)f[0]=l[h][0],f[1]=r+.1,f[2]=l[h][1],i&&gt.transformMat4(f,f,i),u[c++]=f[0],u[c++]=f[1],u[c++]=f[2];return u}var s=[1,1,1,1],o=t.getRegionPolygonCoords(A);o.forEach(function(l){var u=l.exterior,c=l.interiors;e.addPolyline(a(u),s,n);for(var f=0;f<c.length;f++)e.addPolyline(a(c[f]),s,n)})},highlight:function(e){var t=this._data;if(t){var A=t.getItemModel(e),r=A.getModel(["emphasis","itemStyle"]),n=r.get("color"),i=Ae.firstNotNull(r.get("opacity"),Xe(t,e),1);if(n==null){var a=Ye(t,e);n=Bo(a,-.4)}i==null&&(i=Xe(t,e));var s=w.parseColor(n);s[3]*=i,this._setColorOfDataIndex(t,e,s)}},downplay:function(e){var t=this._data;if(t){var A=t.getItemModel(e),r=Ae.firstNotNull(Ye(t,e),A.get(["itemStyle","color"]),"#fff"),n=Ae.firstNotNull(Xe(t,e),A.get(["itemStyle","opacity"]),1),i=w.parseColor(r);i[3]*=n,this._setColorOfDataIndex(t,e,i)}},dispose:function(){this._labelsBuilder.dispose()},_setColorOfDataIndex:function(e,t,A){if(!(t<this._startIndex&&t>this._endIndex)){t-=this._startIndex;for(var r=this._vertexRangeOfDataIndex[t*2];r<this._vertexRangeOfDataIndex[t*2+1];r++)this._polygonMesh.geometry.attributes.color.set(r,A);this._polygonMesh.geometry.dirty(),this._api.getZr().refresh()}}};const nm=Hn.extend({type:"geo3D",__ecgl__:!0,init:function(e,t){this._geo3DBuilder=new Dr(t),this.groupGL=new w.Node,this._lightRoot=new w.Node,this._sceneHelper=new FA(this._lightRoot),this._sceneHelper.initLight(this._lightRoot),this._control=new Gn({zr:t.getZr()}),this._control.init()},render:function(e,t,A){this.groupGL.add(this._geo3DBuilder.rootNode);var r=e.coordinateSystem;if(!(!r||!r.viewGL)){r.viewGL.add(this._lightRoot),e.get("show")?r.viewGL.add(this.groupGL):r.viewGL.remove(this.groupGL);var n=this._control;n.setViewGL(r.viewGL);var i=e.getModel("viewControl");n.setFromViewControlModel(i,0),this._sceneHelper.setScene(r.viewGL.scene),this._sceneHelper.updateLight(e),r.viewGL.setPostEffect(e.getModel("postEffect"),A),r.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._geo3DBuilder.update(e,t,A,0,e.getData().count());var a=r.viewGL.isLinearSpace()?"define":"undefine";this._geo3DBuilder.rootNode.traverse(function(s){s.material&&s.material[a]("fragment","SRGB_DECODE")}),n.off("update"),n.on("update",function(){A.dispatchAction({type:"geo3DChangeCamera",alpha:n.getAlpha(),beta:n.getBeta(),distance:n.getDistance(),center:n.getCenter(),from:this.uid,geo3DId:e.id})}),n.update()}},afterRender:function(e,t,A,r){var n=r.renderer;this._sceneHelper.updateAmbientCubemap(n,e,A),this._sceneHelper.updateSkybox(n,e,A)},dispose:function(){this._control.dispose(),this._geo3DBuilder.dispose()}});var im={Russia:[100,60],"United States":[-99,38],"United States of America":[-99,38]};function am(e,t){if(e==="world"){var A=im[t.name];if(A){var r=[A[0],A[1]];t.setCenter(r)}}}var sm=Le.vec3,yr=Le.mat4,om=[Dd,am];function Zi(e,t,A,r,n){this.name=e,this.map=t,this.regionHeight=0,this.regions=[],this._nameCoordMap={},this.loadGeoJson(A,r,n),this.transform=yr.identity(new Float64Array(16)),this.invTransform=yr.identity(new Float64Array(16)),this.extrudeY=!0,this.altitudeAxis}Zi.prototype={constructor:Zi,type:"geo3D",dimensions:["lng","lat","alt"],containPoint:function(){},loadGeoJson:function(e,t,A){var r=Jo||Jo;try{this.regions=e?r(e):[]}catch(l){throw`Invalid geoJson format
`+l}t=t||{},A=A||{};for(var n=this.regions,i={},a=0;a<n.length;a++){var s=n[a].name;s=A[s]||s,n[a].name=s,i[s]=n[a],this.addGeoCoord(s,n[a].getCenter());var o=t[s];o&&n[a].transformTo(o.left,o.top,o.width,o.height)}this._regionsMap=i,this._geoRect=null,om.forEach(function(l){l(this)},this)},getGeoBoundingRect:function(){if(this._geoRect)return this._geoRect;for(var e,t=this.regions,A=0;A<t.length;A++){var r=t[A].getBoundingRect();e=e||r.clone(),e.union(r)}return this._geoRect=e||new Id(0,0,0,0)},addGeoCoord:function(e,t){this._nameCoordMap[e]=t},getRegion:function(e){return this._regionsMap[e]},getRegionByCoord:function(e){for(var t=this.regions,A=0;A<t.length;A++)if(t[A].contain(e))return t[A]},setSize:function(e,t,A){this.size=[e,t,A];var r=this.getGeoBoundingRect(),n=e/r.width,i=-A/r.height,a=-e/2-r.x*n,s=A/2-r.y*i,o=this.extrudeY?[a,0,s]:[a,s,0],l=this.extrudeY?[n,1,i]:[n,i,1],u=this.transform;yr.identity(u),yr.translate(u,u,o),yr.scale(u,u,l),yr.invert(this.invTransform,u)},dataToPoint:function(e,t){t=t||[];var A=this.extrudeY?1:2,r=this.extrudeY?2:1,n=e[2];return isNaN(n)&&(n=0),t[0]=e[0],t[r]=e[1],this.altitudeAxis?t[A]=this.altitudeAxis.dataToCoord(n):t[A]=0,t[A]+=this.regionHeight,sm.transformMat4(t,t,this.transform),t},pointToData:function(e,t){}};function lm(e,t){var A=e.getBoxLayoutParams(),r=ha(A,{width:t.getWidth(),height:t.getHeight()});r.y=t.getHeight()-r.y-r.height,this.viewGL.setViewport(r.x,r.y,r.width,r.height,t.getDevicePixelRatio());var n=this.getGeoBoundingRect(),i=n.width/n.height*(e.get("aspectScale")||.75),a=e.get("boxWidth"),s=e.get("boxDepth"),o=e.get("boxHeight");o==null&&(o=5),isNaN(a)&&isNaN(s)&&(a=100),isNaN(s)?s=a/i:isNaN(a)&&(a=s/i),this.setSize(a,o,s),this.regionHeight=e.get("regionHeight"),this.altitudeAxis&&this.altitudeAxis.setExtent(0,Math.max(o-this.regionHeight,0))}function um(e,t){var A=[1/0,-1/0];if(e.eachSeries(function(n){if(n.coordinateSystem===this&&n.type!=="series.map3D"){var i=n.getData(),a=n.coordDimToDataDim("alt"),s=a&&a[0];if(s){var o=i.getDataExtent(s,!0);A[0]=Math.min(A[0],o[0]),A[1]=Math.max(A[1],o[1])}}},this),A&&isFinite(A[1]-A[0])){var r=yo(A,{type:"value",min:"dataMin",max:"dataMax"});this.altitudeAxis=new fa("altitude",r),this.resize(this.model,t)}}var Jl=0,Io={dimensions:Zi.prototype.dimensions,create:function(e,t){var A=[];if(!Ls)throw new Error("geo3D component depends on geo component");function r(n,i){var a=Io.createGeo3D(n);n.__viewGL=n.__viewGL||new de,a.viewGL=n.__viewGL,n.coordinateSystem=a,a.model=n,A.push(a),a.resize=lm,a.resize(n,t),a.update=um}return e.eachComponent("geo3D",function(n,i){r(n)}),e.eachSeriesByType("map3D",function(n,i){var a=n.get("coordinateSystem");a==null&&(a="geo3D"),a==="geo3D"&&r(n)}),e.eachSeries(function(n){if(n.get("coordinateSystem")==="geo3D"){if(n.type==="series.map3D")return;var i=n.getReferringComponents("geo3D").models[0];if(i||(i=e.getComponent("geo3D")),!i)throw new Error('geo "'+Ae.firstNotNull(n.get("geo3DIndex"),n.get("geo3DId"),0)+'" not found');n.coordinateSystem=i.coordinateSystem}}),A},createGeo3D:function(e){var t=e.get("map"),A;return typeof t=="string"?(A=t,t=Ls(t)):t&&t.features&&(t={geoJson:t}),A==null&&(A="GEO_ANONYMOUS_"+Jl++),new Zi(A+Jl++,A,t&&t.geoJson,t&&t.specialAreas,e.get("nameMap"))}};function wf(e){e.registerComponentModel(Kr),e.registerComponentView(nm),e.registerAction({type:"geo3DChangeCamera",event:"geo3dcamerachanged",update:"series:updateCamera"},function(t,A){A.eachComponent({mainType:"geo3D",query:t},function(r){r.setView(t)})}),e.registerCoordinateSystem("geo3D",Io)}et(wf);function jl(e,t){e.id=e.id||e.name||t+""}var $A=Hr.extend({type:"globe",layoutMode:"box",coordinateSystem:null,init:function(){$A.superApply(this,"init",arguments),Yt(this.option.layers,function(e,t){he(e,this.defaultLayerOption),jl(e,t)},this)},mergeOption:function(e){var t=this.option.layers;this.option.layers=null,$A.superApply(this,"mergeOption",arguments);function A(a){return Md(a,function(s,o,l){return jl(o,l),s[o.id]=o,s},{})}if(t&&t.length){var r=A(e.layers),n=A(t);for(var i in r)n[i]?he(n[i],r[i],!0):t.push(e.layers[i]);this.option.layers=t}Yt(this.option.layers,function(a){he(a,this.defaultLayerOption)},this)},optionUpdated:function(){this.updateDisplacementHash()},defaultLayerOption:{show:!0,type:"overlay"},defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",baseColor:"#fff",baseTexture:"",heightTexture:"",displacementTexture:"",displacementScale:0,displacementQuality:"medium",globeRadius:100,globeOuterRadius:150,shading:"lambert",light:{main:{time:""}},atmosphere:{show:!1,offset:5,color:"#ffffff",glowPower:6,innerGlowPower:2},viewControl:{autoRotate:!0,panSensitivity:0,targetCoord:null},layers:[]},setDisplacementData:function(e,t,A){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=A},getDisplacementTexture:function(){return this.get("displacementTexture")||this.get("heightTexture")},getDisplacemenScale:function(){var e=this.getDisplacementTexture(),t=this.get("displacementScale");return(!e||e==="none")&&(t=0),t},hasDisplacement:function(){return this.getDisplacemenScale()>0},_displacementChanged:!0,_displacementScale:0,updateDisplacementHash:function(){var e=this.getDisplacementTexture(),t=this.getDisplacemenScale();this._displacementChanged=this._displacementTexture!==e||this._displacementScale!==t,this._displacementTexture=e,this._displacementScale=t},isDisplacementChanged:function(){return this._displacementChanged}});he($A.prototype,ma);he($A.prototype,Or);he($A.prototype,Pr);he($A.prototype,Vr);var yf=Math.PI,Qt=Math.sin,nA=Math.cos,xf=Math.tan,Cf=Math.asin,Ef=Math.atan2,er=yf/180,cm=1e3*60*60*24,fm=2440588,hm=2451545;function dm(e){return e.valueOf()/cm-.5+fm}function gm(e){return dm(e)-hm}var Ji=er*23.4397;function vm(e,t){return Ef(Qt(e)*nA(Ji)-xf(t)*Qt(Ji),nA(e))}function pm(e,t){return Cf(Qt(t)*nA(Ji)+nA(t)*Qt(Ji)*Qt(e))}function mm(e,t,A){return Ef(Qt(e),nA(e)*Qt(t)-xf(A)*nA(t))}function _m(e,t,A){return Cf(Qt(t)*Qt(A)+nA(t)*nA(A)*nA(e))}function Bm(e,t){return er*(280.16+360.9856235*e)-t}function wm(e){return er*(357.5291+.98560028*e)}function ym(e){var t=er*(1.9148*Qt(e)+.02*Qt(2*e)+3e-4*Qt(3*e)),A=er*102.9372;return e+t+A+yf}function xm(e){var t=wm(e),A=ym(t);return{dec:pm(A,0),ra:vm(A,0)}}var Tf={};Tf.getPosition=function(e,t,A){var r=er*-A,n=er*t,i=gm(e),a=xm(i),s=Bm(i,r)-a.ra;return{azimuth:mm(s,n,a.dec),altitude:_m(s,n,a.dec)}};const Cm=`@export ecgl.atmosphere.vertex
attribute vec3 position: POSITION;
attribute vec3 normal : NORMAL;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 normalMatrix : WORLDINVERSETRANSPOSE;

varying vec3 v_Normal;

void main() {
 v_Normal = normalize((normalMatrix * vec4(normal, 0.0)).xyz);
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end


@export ecgl.atmosphere.fragment
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform float glowPower;
uniform vec3 glowColor;

varying vec3 v_Normal;

void main() {
 float intensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor = vec4(glowColor, intensity * intensity);
}
@end`;w.Shader.import(zc);w.Shader.import(Cm);const Em=Hn.extend({type:"globe",__ecgl__:!0,_displacementScale:0,init:function(e,t){this.groupGL=new w.Node,this._sphereGeometry=new w.SphereGeometry({widthSegments:200,heightSegments:100,dynamic:!0}),this._overlayGeometry=new w.SphereGeometry({widthSegments:80,heightSegments:40}),this._planeGeometry=new w.PlaneGeometry,this._earthMesh=new w.Mesh({renderNormal:!0}),this._atmosphereMesh=new w.Mesh,this._atmosphereGeometry=new w.SphereGeometry({widthSegments:80,heightSegments:40}),this._atmosphereMaterial=new w.Material({shader:new w.Shader(w.Shader.source("ecgl.atmosphere.vertex"),w.Shader.source("ecgl.atmosphere.fragment")),transparent:!0}),this._atmosphereMesh.geometry=this._atmosphereGeometry,this._atmosphereMesh.material=this._atmosphereMaterial,this._atmosphereMesh.frontFace=w.Mesh.CW,this._lightRoot=new w.Node,this._sceneHelper=new FA,this._sceneHelper.initLight(this._lightRoot),this.groupGL.add(this._atmosphereMesh),this.groupGL.add(this._earthMesh),this._control=new Gn({zr:t.getZr()}),this._control.init(),this._layerMeshes={}},render:function(e,t,A){var r=e.coordinateSystem,n=e.get("shading");r.viewGL.add(this._lightRoot),e.get("show")?r.viewGL.add(this.groupGL):r.viewGL.remove(this.groupGL),this._sceneHelper.setScene(r.viewGL.scene),r.viewGL.setPostEffect(e.getModel("postEffect"),A),r.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling"));var i=this._earthMesh;i.geometry=this._sphereGeometry;var a="ecgl."+n;(!i.material||i.material.shader.name!==a)&&(i.material=w.createMaterial(a)),w.setMaterialFromModel(n,i.material,e,A),["roughnessMap","metalnessMap","detailMap","normalMap"].forEach(function(c){var f=i.material.get(c);f&&(f.flipY=!1)}),i.material.set("color",w.parseColor(e.get("baseColor")));var s=r.radius*.99;if(i.scale.set(s,s,s),e.get("atmosphere.show")){i.material.define("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!1,this._atmosphereMaterial.setUniforms({glowPower:e.get("atmosphere.glowPower")||6,glowColor:e.get("atmosphere.color")||"#ffffff"}),i.material.setUniforms({glowPower:e.get("atmosphere.innerGlowPower")||2,glowColor:e.get("atmosphere.color")||"#ffffff"});var o=e.get("atmosphere.offset")||5;this._atmosphereMesh.scale.set(s+o,s+o,s+o)}else i.material.undefine("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!0;var l=i.material.setTextureImage("diffuseMap",e.get("baseTexture"),A,{flipY:!1,anisotropic:8});l&&l.surface&&l.surface.attachToMesh(i);var u=i.material.setTextureImage("bumpMap",e.get("heightTexture"),A,{flipY:!1,anisotropic:8});u&&u.surface&&u.surface.attachToMesh(i),i.material[e.get("postEffect.enable")?"define":"undefine"]("fragment","SRGB_DECODE"),this._updateLight(e,A),this._displaceVertices(e,A),this._updateViewControl(e,A),this._updateLayers(e,A)},afterRender:function(e,t,A,r){var n=r.renderer;this._sceneHelper.updateAmbientCubemap(n,e,A),this._sceneHelper.updateSkybox(n,e,A)},_updateLayers:function(e,t){var A=e.coordinateSystem,r=e.get("layers"),n=A.radius,i=[],a=[],s=[],o=[];Yt(r,function(h){var d=new Tr(h),g=d.get("type"),v=w.loadTexture(d.get("texture"),t,{flipY:!1,anisotropic:8});if(v.surface&&v.surface.attachToMesh(this._earthMesh),g==="blend"){var p=d.get("blendTo"),m=Ae.firstNotNull(d.get("intensity"),1);p==="emission"?(s.push(v),o.push(m)):(i.push(v),a.push(m))}else{var B=d.get("id"),_=this._layerMeshes[B];_||(_=this._layerMeshes[B]=new w.Mesh({geometry:this._overlayGeometry,castShadow:!1,ignorePicking:!0}));var x=d.get("shading");x==="lambert"?(_.material=_.__lambertMaterial||new w.Material({autoUpdateTextureStatus:!1,shader:w.createShader("ecgl.lambert"),transparent:!0,depthMask:!1}),_.__lambertMaterial=_.material):(_.material=_.__colorMaterial||new w.Material({autoUpdateTextureStatus:!1,shader:w.createShader("ecgl.color"),transparent:!0,depthMask:!1}),_.__colorMaterial=_.material),_.material.enableTexture("diffuseMap");var y=d.get("distance"),T=n+(y??A.radius/100);_.scale.set(T,T,T),n=T;var E=this._blankTexture||(this._blankTexture=w.createBlankTexture("rgba(255, 255, 255, 0)"));_.material.set("diffuseMap",E),w.loadTexture(d.get("texture"),t,{flipY:!1,anisotropic:8},function(F){F.surface&&F.surface.attachToMesh(_),_.material.set("diffuseMap",F),t.getZr().refresh()}),d.get("show")?this.groupGL.add(_):this.groupGL.remove(_)}},this);var l=this._earthMesh.material;l.define("fragment","LAYER_DIFFUSEMAP_COUNT",i.length),l.define("fragment","LAYER_EMISSIVEMAP_COUNT",s.length),l.set("layerDiffuseMap",i),l.set("layerDiffuseIntensity",a),l.set("layerEmissiveMap",s),l.set("layerEmissionIntensity",o);var u=e.getModel("debug.wireframe");if(u.get("show")){l.define("both","WIREFRAME_TRIANGLE");var c=w.parseColor(u.get("lineStyle.color")||"rgba(0,0,0,0.5)"),f=Ae.firstNotNull(u.get("lineStyle.width"),1);l.set("wireframeLineWidth",f),l.set("wireframeLineColor",c)}else l.undefine("both","WIREFRAME_TRIANGLE")},_updateViewControl:function(e,t){var A=e.coordinateSystem,r=e.getModel("viewControl");A.viewGL.camera;var n=this;function i(){return{type:"globeChangeCamera",alpha:a.getAlpha(),beta:a.getBeta(),distance:a.getDistance()-A.radius,center:a.getCenter(),from:n.uid,globeId:e.id}}var a=this._control;a.setViewGL(A.viewGL);var s=r.get("targetCoord"),o,l;s!=null&&(l=s[0]+90,o=s[1]),a.setFromViewControlModel(r,{baseDistance:A.radius,alpha:o,beta:l}),a.off("update"),a.on("update",function(){t.dispatchAction(i())})},_displaceVertices:function(e,t){var A=e.get("displacementQuality"),r=e.get("debug.wireframe.show"),n=e.coordinateSystem;if(!(!e.isDisplacementChanged()&&A===this._displacementQuality&&r===this._showDebugWireframe)){this._displacementQuality=A,this._showDebugWireframe=r;var i=this._sphereGeometry,a={low:100,medium:200,high:400,ultra:800}[A]||200,s=a/2;(i.widthSegments!==a||r)&&(i.widthSegments=a,i.heightSegments=s,i.build()),this._doDisplaceVertices(i,n),r&&i.generateBarycentric()}},_doDisplaceVertices:function(e,t){var A=e.attributes.position.value,r=e.attributes.texcoord0.value,n=e.__originalPosition;(!n||n.length!==A.length)&&(n=new Float32Array(A.length),n.set(A),e.__originalPosition=n);for(var i=t.displacementWidth,a=t.displacementHeight,s=t.displacementData,o=0;o<e.vertexCount;o++){var l=o*3,u=o*2,c=n[l+1],f=n[l+2],h=n[l+3],d=r[u++],g=r[u++],v=Math.round(d*(i-1)),p=Math.round(g*(a-1)),m=p*i+v,B=s?s[m]:0;A[l+1]=c+c*B,A[l+2]=f+f*B,A[l+3]=h+h*B}e.generateVertexNormals(),e.dirty(),e.updateBoundingBox()},_updateLight:function(e,t){var A=this._earthMesh;this._sceneHelper.updateLight(e);var r=this._sceneHelper.mainLight,n=e.get("light.main.time")||new Date,i=Tf.getPosition(Rd(n),0,0),a=Math.cos(i.altitude);r.position.y=-a*Math.cos(i.azimuth),r.position.x=Math.sin(i.altitude),r.position.z=a*Math.sin(i.azimuth),r.lookAt(A.getWorldPosition())},dispose:function(e,t){this.groupGL.removeAll(),this._control.dispose()}});var Tm=Le.vec3;function ji(e){this.radius=e,this.viewGL=null,this.altitudeAxis,this.displacementData=null,this.displacementWidth,this.displacementHeight}ji.prototype={constructor:ji,dimensions:["lng","lat","alt"],type:"globe",containPoint:function(){},setDisplacementData:function(e,t,A){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=A},_getDisplacementScale:function(e,t){var A=(e+180)/360*(this.displacementWidth-1),r=(90-t)/180*(this.displacementHeight-1),n=Math.round(A)+Math.round(r)*this.displacementWidth;return this.displacementData[n]},dataToPoint:function(e,t){var A=e[0],r=e[1],n=e[2]||0,i=this.radius;this.displacementData&&(i*=1+this._getDisplacementScale(A,r)),this.altitudeAxis&&(i+=this.altitudeAxis.dataToCoord(n)),A=A*Math.PI/180,r=r*Math.PI/180;var a=Math.cos(r)*i;return t=t||[],t[0]=-a*Math.cos(A+Math.PI),t[1]=Math.sin(r)*i,t[2]=a*Math.sin(A+Math.PI),t},pointToData:function(e,t){var A=e[0],r=e[1],n=e[2],i=Tm.len(e);A/=i,r/=i,n/=i;var a=Math.asin(r),s=Math.atan2(n,-A);s<0&&(s=Math.PI*2+s);var o=a*180/Math.PI,l=s*180/Math.PI-180;return t=t||[],t[0]=l,t[1]=o,t[2]=i-this.radius,this.altitudeAxis&&(t[2]=this.altitudeAxis.coordToData(t[2])),t}};function Fm(e,t){var A=document.createElement("canvas"),r=A.getContext("2d"),n=e.width,i=e.height;A.width=n,A.height=i,r.drawImage(e,0,0,n,i);for(var a=r.getImageData(0,0,n,i).data,s=new Float32Array(a.length/4),o=0;o<a.length/4;o++){var l=a[o*4];s[o]=l/255*t}return{data:s,width:n,height:i}}function Um(e,t){var A=e.getBoxLayoutParams(),r=ha(A,{width:t.getWidth(),height:t.getHeight()});r.y=t.getHeight()-r.y-r.height,this.viewGL.setViewport(r.x,r.y,r.width,r.height,t.getDevicePixelRatio()),this.radius=e.get("globeRadius");var n=e.get("globeOuterRadius");this.altitudeAxis&&this.altitudeAxis.setExtent(0,n-this.radius)}function Sm(e,t){var A=[1/0,-1/0];if(e.eachSeries(function(n){if(n.coordinateSystem===this){var i=n.getData(),a=n.coordDimToDataDim("alt"),s=a&&a[0];if(s){var o=i.getDataExtent(s,!0);A[0]=Math.min(A[0],o[0]),A[1]=Math.max(A[1],o[1])}}},this),A&&isFinite(A[1]-A[0])){var r=yo(A,{type:"value",min:"dataMin",max:"dataMax"});this.altitudeAxis=new fa("altitude",r),this.resize(this.model,t)}}var bm={dimensions:ji.prototype.dimensions,create:function(e,t){var A=[];return e.eachComponent("globe",function(r){r.__viewGL=r.__viewGL||new de;var n=new ji;n.viewGL=r.__viewGL,r.coordinateSystem=n,n.model=r,A.push(n),n.resize=Um,n.resize(r,t),n.update=Sm}),e.eachSeries(function(r){if(r.get("coordinateSystem")==="globe"){var n=r.getReferringComponents("globe").models[0];if(n||(n=e.getComponent("globe")),!n)throw new Error('globe "'+Ae.firstNotNull(r.get("globe3DIndex"),r.get("globe3DId"),0)+'" not found');var i=n.coordinateSystem;r.coordinateSystem=i}}),e.eachComponent("globe",function(r,n){var i=r.coordinateSystem,a=r.getDisplacementTexture(),s=r.getDisplacemenScale();if(r.isDisplacementChanged()){if(r.hasDisplacement()){var o=!0;w.loadTexture(a,t,function(l){var u=l.image,c=Fm(u,s);r.setDisplacementData(c.data,c.width,c.height),o||t.dispatchAction({type:"globeUpdateDisplacment"})}),o=!1}else i.setDisplacementData(null,0,0);i.setDisplacementData(r.displacementData,r.displacementWidth,r.displacementHeight)}}),A}};function Qm(e){e.registerComponentModel($A),e.registerComponentView(Em),e.registerCoordinateSystem("globe",bm),e.registerAction({type:"globeChangeCamera",event:"globecamerachanged",update:"series:updateCamera"},function(t,A){A.eachComponent({mainType:"globe",query:t},function(r){r.setView(t)})}),e.registerAction({type:"globeUpdateDisplacment",event:"globedisplacementupdated",update:"update"},function(t,A){})}et(Qm);var ql=["zoom","center","pitch","bearing"],Do=Hr.extend({type:"mapbox3D",layoutMode:"box",coordinateSystem:null,defaultOption:{zlevel:-10,style:"mapbox://styles/mapbox/light-v9",center:[0,0],zoom:0,pitch:0,bearing:0,light:{main:{alpha:20,beta:30}},altitudeScale:1,boxHeight:"auto"},getMapboxCameraOption:function(){var e=this;return ql.reduce(function(t,A){return t[A]=e.get(A),t},{})},setMapboxCameraOption:function(e){e!=null&&ql.forEach(function(t){e[t]!=null&&(this.option[t]=e[t])},this)},getMapbox:function(){return this._mapbox},setMapbox:function(e){this._mapbox=e}});he(Do.prototype,Or);he(Do.prototype,Pr);function LA(e,t){if(this.id=e,this.zr=t,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute;left:0;right:0;top:0;bottom:0;",!mapboxgl)throw new Error("Mapbox GL library must be included. See https://www.mapbox.com/mapbox-gl-js/api/");this._mapbox=new mapboxgl.Map({container:this.dom}),this._initEvents()}LA.prototype.setUnpainted=function(){};LA.prototype.resize=function(){this._mapbox.resize()};LA.prototype.getMapbox=function(){return this._mapbox};LA.prototype.clear=function(){};LA.prototype.refresh=function(){this._mapbox.resize()};var Ff=["mousedown","mouseup","click","dblclick","mousemove","mousewheel","wheel","touchstart","touchend","touchmove","touchcancel"];LA.prototype._initEvents=function(){var e=this._mapbox.getCanvasContainer();this._handlers=this._handlers||{contextmenu:function(t){return t.preventDefault(),!1}},Ff.forEach(function(t){this._handlers[t]=function(A){var r={};for(var n in A)r[n]=A[n];r.bubbles=!1;var i=new A.constructor(A.type,r);e.dispatchEvent(i)},this.zr.dom.addEventListener(t,this._handlers[t])},this),this.zr.dom.addEventListener("contextmenu",this._handlers.contextmenu)};LA.prototype.dispose=function(){Ff.forEach(function(e){this.zr.dom.removeEventListener(e,this._handlers[e])},this)};const Uf=`
@export ecgl.displayShadow.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_WorldPosition;

varying vec3 v_Normal;

void main()
{
 @import ecgl.common.uv.main
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);

 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}

@end


@export ecgl.displayShadow.fragment

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform float roughness: 0.2;

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.ssaoMap.header

@import clay.plugin.compute_shadow_map

void main()
{
 float shadow = 1.0;

 @import ecgl.common.ssaoMap.main

#if defined(DIRECTIONAL_LIGHT_COUNT) && defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
 for (int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++) {
 shadow = min(shadow, shadowContribsDir[i] * 0.5 + 0.5);
 }
#endif

 shadow *= 0.5 + ao * 0.5;
 shadow = clamp(shadow, 0.0, 1.0);

 gl_FragColor = vec4(vec3(0.0), 1.0 - shadow);
}

@end`;w.Shader.import(Uf);const Lm=Hn.extend({type:"mapbox3D",__ecgl__:!0,init:function(e,t){var A=t.getZr();this._zrLayer=new LA("mapbox3D",A),A.painter.insertLayer(-1e3,this._zrLayer),this._lightRoot=new w.Node,this._sceneHelper=new FA(this._lightRoot),this._sceneHelper.initLight(this._lightRoot);var r=this._zrLayer.getMapbox(),n=this._dispatchInteractAction.bind(this,t,r);["zoom","rotate","drag","pitch","rotate","move"].forEach(function(i){r.on(i,n)}),this._groundMesh=new w.Mesh({geometry:new w.PlaneGeometry,material:new w.Material({shader:new w.Shader({vertex:w.Shader.source("ecgl.displayShadow.vertex"),fragment:w.Shader.source("ecgl.displayShadow.fragment")}),depthMask:!1}),renderOrder:-100,culling:!1,castShadow:!1,$ignorePicking:!0,renderNormal:!0})},render:function(e,t,A){var r=this._zrLayer.getMapbox(),n=e.get("style"),i=JSON.stringify(n);i!==this._oldStyleStr&&n&&r.setStyle(n),this._oldStyleStr=i,r.setCenter(e.get("center")),r.setZoom(e.get("zoom")),r.setPitch(e.get("pitch")),r.setBearing(e.get("bearing")),e.setMapbox(r);var a=e.coordinateSystem;a.viewGL.scene.add(this._lightRoot),a.viewGL.add(this._groundMesh),this._updateGroundMesh(),this._sceneHelper.setScene(a.viewGL.scene),this._sceneHelper.updateLight(e),a.viewGL.setPostEffect(e.getModel("postEffect"),A),a.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._mapbox3DModel=e},afterRender:function(e,t,A,r){var n=r.renderer;this._sceneHelper.updateAmbientCubemap(n,e,A),this._sceneHelper.updateSkybox(n,e,A),e.coordinateSystem.viewGL.scene.traverse(function(i){i.material&&(i.material.define("fragment","NORMAL_UP_AXIS",2),i.material.define("fragment","NORMAL_FRONT_AXIS",1))})},updateCamera:function(e,t,A,r){e.coordinateSystem.setCameraOption(r),this._updateGroundMesh(),A.getZr().refresh()},_dispatchInteractAction:function(e,t,A){e.dispatchAction({type:"mapbox3DChangeCamera",pitch:t.getPitch(),zoom:t.getZoom(),center:t.getCenter().toArray(),bearing:t.getBearing(),mapbox3DId:this._mapbox3DModel&&this._mapbox3DModel.id})},_updateGroundMesh:function(){if(this._mapbox3DModel){var e=this._mapbox3DModel.coordinateSystem,t=e.dataToPoint(e.center);this._groundMesh.position.set(t[0],t[1],-.001);var A=new w.Plane(new w.Vector3(0,0,1),0),r=e.viewGL.camera.castRay(new w.Vector2(-1,-1)),n=e.viewGL.camera.castRay(new w.Vector2(1,1)),i=r.intersectPlane(A),a=n.intersectPlane(A),s=i.dist(a)/e.viewGL.rootNode.scale.x;this._groundMesh.scale.set(s,s,1)}},dispose:function(e,t){this._zrLayer&&this._zrLayer.dispose(),t.getZr().painter.delLayer(-1e3)}});var hA=Le.mat4,$r=512,ns=.6435011087932844,vt=Math.PI,cr=1/10;function Mr(){this.width=0,this.height=0,this.altitudeScale=1,this.boxHeight="auto",this.altitudeExtent,this.bearing=0,this.pitch=0,this.center=[0,0],this._origin,this.zoom=0,this._initialZoom,this.maxPitch=60,this.zoomOffset=0}Mr.prototype={constructor:Mr,dimensions:["lng","lat","alt"],containPoint:function(){},setCameraOption:function(e){this.bearing=e.bearing,this.pitch=e.pitch,this.center=e.center,this.zoom=e.zoom,this._origin||(this._origin=this.projectOnTileWithScale(this.center,$r)),this._initialZoom==null&&(this._initialZoom=this.zoom),this.updateTransform()},updateTransform:function(){if(this.height){var e=.5/Math.tan(ns/2)*this.height*cr,t=Math.max(Math.min(this.pitch,this.maxPitch),0)/180*Math.PI,A=ns/2,r=Math.PI/2+t,n=Math.sin(A)*e/Math.sin(Math.PI-r-A),i=Math.cos(Math.PI/2-t)*n+e,a=i*1.1;this.pitch>50&&(a=1e3);var s=[];hA.perspective(s,ns,this.width/this.height,1,a),this.viewGL.camera.projectionMatrix.setArray(s),this.viewGL.camera.decomposeProjectionMatrix();var s=hA.identity([]),o=this.dataToPoint(this.center);hA.scale(s,s,[1,-1,1]),hA.translate(s,s,[0,0,-e]),hA.rotateX(s,s,t),hA.rotateZ(s,s,-this.bearing/180*Math.PI),hA.translate(s,s,[-o[0]*this.getScale()*cr,-o[1]*this.getScale()*cr,0]),this.viewGL.camera.viewMatrix.array=s;var l=[];hA.invert(l,s),this.viewGL.camera.worldTransform.array=l,this.viewGL.camera.decomposeWorldTransform();var u=$r*this.getScale(),c;if(this.altitudeExtent&&!isNaN(this.boxHeight)){var f=this.altitudeExtent[1]-this.altitudeExtent[0];c=this.boxHeight/f*this.getScale()/Math.pow(2,this._initialZoom-this.zoomOffset)}else c=u/(2*Math.PI*6378e3*Math.abs(Math.cos(this.center[1]*(Math.PI/180))))*this.altitudeScale*cr;this.viewGL.rootNode.scale.set(this.getScale()*cr,this.getScale()*cr,c)}},getScale:function(){return Math.pow(2,this.zoom-this.zoomOffset)},projectOnTile:function(e,t){return this.projectOnTileWithScale(e,this.getScale()*$r,t)},projectOnTileWithScale:function(e,t,A){var r=e[0],n=e[1],i=r*vt/180,a=n*vt/180,s=t*(i+vt)/(2*vt),o=t*(vt-Math.log(Math.tan(vt/4+a*.5)))/(2*vt);return A=A||[],A[0]=s,A[1]=o,A},unprojectFromTile:function(e,t){return this.unprojectOnTileWithScale(e,this.getScale()*$r,t)},unprojectOnTileWithScale:function(e,t,A){var r=e[0],n=e[1],i=r/t*(2*vt)-vt,a=2*(Math.atan(Math.exp(vt-n/t*(2*vt)))-vt/4);return A=A||[],A[0]=i*180/vt,A[1]=a*180/vt,A},dataToPoint:function(e,t){return t=this.projectOnTileWithScale(e,$r,t),t[0]-=this._origin[0],t[1]-=this._origin[1],t[2]=isNaN(e[2])?0:e[2],isNaN(e[2])||(t[2]=e[2],this.altitudeExtent&&(t[2]-=this.altitudeExtent[0])),t}};function In(){Mr.apply(this,arguments)}In.prototype=new Mr;In.prototype.constructor=In;In.prototype.type="mapbox3D";function Sf(e,t,A){function r(i,a){var s=a.getWidth(),o=a.getHeight(),l=a.getDevicePixelRatio();this.viewGL.setViewport(0,0,s,o,l),this.width=s,this.height=o,this.altitudeScale=i.get("altitudeScale"),this.boxHeight=i.get("boxHeight")}function n(i,a){if(this.model.get("boxHeight")!=="auto"){var s=[1/0,-1/0];i.eachSeries(function(o){if(o.coordinateSystem===this){var l=o.getData(),u=o.coordDimToDataDim("alt")[0];if(u){var c=l.getDataExtent(u,!0);s[0]=Math.min(s[0],c[0]),s[1]=Math.max(s[1],c[1])}}},this),s&&isFinite(s[1]-s[0])&&(this.altitudeExtent=s)}}return{dimensions:t.prototype.dimensions,create:function(i,a){var s=[];return i.eachComponent(e,function(o){var l=o.__viewGL;l||(l=o.__viewGL=new de,l.setRootNode(new w.Node));var u=new t;u.viewGL=o.__viewGL,u.resize=r,u.resize(o,a),s.push(u),o.coordinateSystem=u,u.model=o,u.update=n}),i.eachSeries(function(o){if(o.get("coordinateSystem")===e){var l=o.getReferringComponents(e).models[0];if(l||(l=i.getComponent(e)),!l)throw new Error(e+' "'+Ae.firstNotNull(o.get(e+"Index"),o.get(e+"Id"),0)+'" not found');o.coordinateSystem=l.coordinateSystem}}),A&&A(s,i,a),s}}}var Im=Sf("mapbox3D",In,function(e){e.forEach(function(t){t.setCameraOption(t.model.getMapboxCameraOption())})});function Dm(e){e.registerComponentModel(Do),e.registerComponentView(Lm),e.registerCoordinateSystem("mapbox3D",Im),e.registerAction({type:"mapbox3DChangeCamera",event:"mapbox3dcamerachanged",update:"mapbox3D:updateCamera"},function(t,A){A.eachComponent({mainType:"mapbox3D",query:t},function(r){r.setMapboxCameraOption(t)})})}et(Dm);var $l=["zoom","center","pitch","bearing"],Mo=Hr.extend({type:"maptalks3D",layoutMode:"box",coordinateSystem:null,defaultOption:{zlevel:-10,urlTemplate:"http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',center:[0,0],zoom:0,pitch:0,bearing:0,light:{main:{alpha:20,beta:30}},altitudeScale:1,boxHeight:"auto"},getMaptalksCameraOption:function(){var e=this;return $l.reduce(function(t,A){return t[A]=e.get(A),t},{})},setMaptalksCameraOption:function(e){e!=null&&$l.forEach(function(t){e[t]!=null&&(this.option[t]=e[t])},this)},getMaptalks:function(){return this._maptalks},setMaptalks:function(e){this._maptalks=e}});he(Mo.prototype,Or);he(Mo.prototype,Pr);function IA(e,t,A,r){if(this.id=e,this.zr=t,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute;left:0;right:0;top:0;bottom:0;",!maptalks)throw new Error("Maptalks library must be included. See https://maptalks.org");this._maptalks=new maptalks.Map(this.dom,{center:A,zoom:r,doubleClickZoom:!1,fog:!1}),this._initEvents()}IA.prototype.setUnpainted=function(){};IA.prototype.resize=function(){this._maptalks.checkSize()};IA.prototype.getMaptalks=function(){return this._maptalks};IA.prototype.clear=function(){};IA.prototype.refresh=function(){this._maptalks.checkSize()};var bf=["mousedown","mouseup","click","dblclick","mousemove","mousewheel","DOMMouseScroll","touchstart","touchend","touchmove","touchcancel"];IA.prototype._initEvents=function(){var e=this.dom;this._handlers=this._handlers||{contextmenu:function(t){return t.preventDefault(),!1}},bf.forEach(function(t){this._handlers[t]=function(A){var r={};for(var n in A)r[n]=A[n];r.bubbles=!1;var i=new A.constructor(A.type,r);t==="mousewheel"||t==="DOMMouseScroll"?e.dispatchEvent(i):e.firstElementChild.dispatchEvent(i)},this.zr.dom.addEventListener(t,this._handlers[t])},this),this.zr.dom.addEventListener("contextmenu",this._handlers.contextmenu)};IA.prototype.dispose=function(){bf.forEach(function(e){this.zr.dom.removeEventListener(e,this._handlers[e])},this),this._maptalks.remove()};w.Shader.import(Uf);const Mm=Hn.extend({type:"maptalks3D",__ecgl__:!0,init:function(e,t){this._groundMesh=new w.Mesh({geometry:new w.PlaneGeometry,material:new w.Material({shader:new w.Shader({vertex:w.Shader.source("ecgl.displayShadow.vertex"),fragment:w.Shader.source("ecgl.displayShadow.fragment")}),depthMask:!1}),renderOrder:-100,culling:!1,castShadow:!1,$ignorePicking:!0,renderNormal:!0})},_initMaptalksLayer:function(e,t){var A=t.getZr();this._zrLayer=new IA("maptalks3D",A,e.get("center"),e.get("zoom")),A.painter.insertLayer(-1e3,this._zrLayer),this._lightRoot=new w.Node,this._sceneHelper=new FA(this._lightRoot),this._sceneHelper.initLight(this._lightRoot);var r=this._zrLayer.getMaptalks(),n=this._dispatchInteractAction.bind(this,t,r);["zoomend","zooming","zoomstart","dragrotating","pitch","pitchend","movestart","moving","moveend","resize","touchstart","touchmove","touchend","animating"].forEach(function(i){r.on(i,n)})},render:function(e,t,A){this._zrLayer||this._initMaptalksLayer(e,A);var r=this._zrLayer.getMaptalks(),n=e.get("urlTemplate"),i=r.getBaseLayer();n!==this._oldUrlTemplate&&(i?i.setOptions({urlTemplate:n,attribution:e.get("attribution")}):(i=new maptalks.TileLayer("maptalks-echarts-gl-baselayer",{urlTemplate:n,subdomains:["a","b","c"],attribution:e.get("attribution")}),r.setBaseLayer(i))),this._oldUrlTemplate=n,r.setCenter(e.get("center")),r.setZoom(e.get("zoom"),{animation:!1}),r.setPitch(e.get("pitch")),r.setBearing(e.get("bearing")),e.setMaptalks(r);var a=e.coordinateSystem;a.viewGL.scene.add(this._lightRoot),a.viewGL.add(this._groundMesh),this._updateGroundMesh(),this._sceneHelper.setScene(a.viewGL.scene),this._sceneHelper.updateLight(e),a.viewGL.setPostEffect(e.getModel("postEffect"),A),a.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._maptalks3DModel=e},afterRender:function(e,t,A,r){var n=r.renderer;this._sceneHelper.updateAmbientCubemap(n,e,A),this._sceneHelper.updateSkybox(n,e,A),e.coordinateSystem.viewGL.scene.traverse(function(i){i.material&&(i.material.define("fragment","NORMAL_UP_AXIS",2),i.material.define("fragment","NORMAL_FRONT_AXIS",1))})},updateCamera:function(e,t,A,r){e.coordinateSystem.setCameraOption(r),this._updateGroundMesh(),A.getZr().refresh()},_dispatchInteractAction:function(e,t,A){e.dispatchAction({type:"maptalks3DChangeCamera",pitch:t.getPitch(),zoom:Nm(t.getResolution())+1,center:t.getCenter().toArray(),bearing:t.getBearing(),maptalks3DId:this._maptalks3DModel&&this._maptalks3DModel.id})},_updateGroundMesh:function(){if(this._maptalks3DModel){var e=this._maptalks3DModel.coordinateSystem,t=e.dataToPoint(e.center);this._groundMesh.position.set(t[0],t[1],-.001);var A=new w.Plane(new w.Vector3(0,0,1),0),r=e.viewGL.camera.castRay(new w.Vector2(-1,-1)),n=e.viewGL.camera.castRay(new w.Vector2(1,1)),i=r.intersectPlane(A),a=n.intersectPlane(A),s=i.dist(a)/e.viewGL.rootNode.scale.x;this._groundMesh.scale.set(s,s,1)}},dispose:function(e,t){this._zrLayer&&this._zrLayer.dispose(),t.getZr().painter.delLayer(-1e3)}}),Rm=2*6378137*Math.PI/(256*Math.pow(2,20));function Nm(e){return 19-Math.log(e/Rm)/Math.LN2}function Dn(){Mr.apply(this,arguments),this.maxPitch=85,this.zoomOffset=1}Dn.prototype=new Mr;Dn.prototype.constructor=Dn;Dn.prototype.type="maptalks3D";var Hm=Sf("maptalks3D",Dn,function(e){e.forEach(function(t){t.setCameraOption(t.model.getMaptalksCameraOption())})});function Om(e){e.registerComponentModel(Mo),e.registerComponentView(Mm),e.registerCoordinateSystem("maptalks3D",Hm),e.registerAction({type:"maptalks3DChangeCamera",event:"maptalks3dcamerachanged",update:"maptalks3D:updateCamera"},function(t,A){A.eachComponent({mainType:"maptalks3D",query:t},function(r){r.setMaptalksCameraOption(t)})})}et(Om);var Pm=Le.vec3,Gm=wo.isDimensionStacked;function Vm(e){var t=e[0],A=e[1];return!(t>0&&A>0||t<0&&A<0)}function Km(e,t){var A=e.getData(),r=e.get("barSize");if(r==null){var n=t.size,i,a,s=t.getAxis("x"),o=t.getAxis("y");s.type==="category"?i=s.getBandWidth()*.7:i=Math.round(n[0]/Math.sqrt(A.count()))*.6,o.type==="category"?a=o.getBandWidth()*.7:a=Math.round(n[1]/Math.sqrt(A.count()))*.6,r=[i,a]}else Xt(r)||(r=[r,r]);var l=t.getAxis("z").scale.getExtent(),u=Vm(l),c=["x","y","z"].map(function(d){return e.coordDimToDataDim(d)[0]}),f=Gm(A,c[2]),h=f?A.getCalculationInfo("stackResultDimension"):c[2];A.each(c,function(d,g,v,p){var m=A.get(h,p),B=f?m-v:u?0:l[0],_=t.dataToPoint([d,g,B]),x=t.dataToPoint([d,g,m]),y=Pm.dist(_,x),T=[0,x[1]<_[1]?-1:1,0];Math.abs(y)===0&&(y=.1);var E=[r[0],y,r[1]];A.setItemLayout(p,[_,T,E])}),A.setLayout("orient",[1,0,0])}function Ro(e,t,A){for(var r=e.getDataExtent(t),n=e.getDataExtent(A),i=r[1]-r[0]||r[0],a=n[1]-n[0]||n[0],s=50,o=new Uint8Array(s*s),l=0;l<e.count();l++){var u=e.get(t,l),c=e.get(A,l),f=Math.floor((u-r[0])/i*(s-1)),h=Math.floor((c-n[0])/a*(s-1)),d=h*s+f;o[d]=o[d]||1}for(var g=0,l=0;l<o.length;l++)o[l]&&g++;return g/o.length}var eu=Le.vec3,zm=wo.isDimensionStacked;function km(e,t){var A=e.getData(),r=e.get("minHeight")||0,n=e.get("barSize"),i=["lng","lat","alt"].map(function(l){return e.coordDimToDataDim(l)[0]});if(n==null){var a=t.radius*Math.PI,s=Ro(A,i[0],i[1]);n=[a/Math.sqrt(A.count()/s),a/Math.sqrt(A.count()/s)]}else Xt(n)||(n=[n,n]);var o=No(A,i);A.each(i,function(l,u,c,f){var h=A.get(o.dimension,f),d=o.isStacked?h-c:t.altitudeAxis.scale.getExtent()[0],g=Math.max(t.altitudeAxis.dataToCoord(c),r),v=t.dataToPoint([l,u,d]),p=t.dataToPoint([l,u,h]),m=eu.sub([],p,v);eu.normalize(m,m);var B=[n[0],g,n[1]];A.setItemLayout(f,[v,m,B])}),A.setLayout("orient",L.UP.array)}function Wm(e,t){var A=e.getData(),r=e.get("barSize"),n=e.get("minHeight")||0,i=["lng","lat","alt"].map(function(u){return e.coordDimToDataDim(u)[0]});if(r==null){var a=Math.min(t.size[0],t.size[2]),s=Ro(A,i[0],i[1]);r=[a/Math.sqrt(A.count()/s),a/Math.sqrt(A.count()/s)]}else Xt(r)||(r=[r,r]);var o=[0,1,0],l=No(A,i);A.each(i,function(u,c,f,h){var d=A.get(l.dimension,h),g=l.isStacked?d-f:t.altitudeAxis.scale.getExtent()[0],v=Math.max(t.altitudeAxis.dataToCoord(f),n),p=t.dataToPoint([u,c,g]),m=[r[0],v,r[1]];A.setItemLayout(h,[p,o,m])}),A.setLayout("orient",[1,0,0])}function Xm(e,t){var A=e.getData(),r=e.coordDimToDataDim("lng")[0],n=e.coordDimToDataDim("lat")[0],i=e.coordDimToDataDim("alt")[0],a=e.get("barSize"),s=e.get("minHeight")||0;if(a==null){var o=A.getDataExtent(r),l=A.getDataExtent(n),u=t.dataToPoint([o[0],l[0]]),c=t.dataToPoint([o[1],l[1]]),f=Math.min(Math.abs(u[0]-c[0]),Math.abs(u[1]-c[1]))||1,h=Ro(A,r,n);a=[f/Math.sqrt(A.count()/h),f/Math.sqrt(A.count()/h)]}else Xt(a)||(a=[a,a]),a[0]/=t.getScale()/16,a[1]/=t.getScale()/16;var d=[0,0,1],g=[r,n,i],v=No(A,g);A.each(g,function(p,m,B,_){var x=A.get(v.dimension,_),y=v.isStacked?x-B:0,T=t.dataToPoint([p,m,y]),E=t.dataToPoint([p,m,x]),F=Math.max(E[2]-T[2],s),S=[a[0],F,a[1]];A.setItemLayout(_,[T,d,S])}),A.setLayout("orient",[1,0,0])}function No(e,t){var A=zm(e,t[2]);return{dimension:A?e.getCalculationInfo("stackResultDimension"):t[2],isStacked:A}}function Ym(e){e.registerLayout(function(t,A){t.eachSeriesByType("bar3D",function(r){var n=r.coordinateSystem,i=n&&n.type;i==="globe"?km(r,n):i==="cartesian3D"?Km(r,n):i==="geo3D"?Wm(r,n):(i==="mapbox3D"||i==="maptalks3D")&&Xm(r,n)})})}var DA={};DA.getFormattedLabel=function(e,t,A,r,n){A=A||"normal";var i=e.getData(r),a=i.getItemModel(t),s=e.getDataParams(t,r);n!=null&&s.value instanceof Array&&(s.value=s.value[n]);var o=a.get(A==="normal"?["label","formatter"]:["emphasis","label","formatter"]);o==null&&(o=a.get(["label","formatter"]));var l;return typeof o=="function"?(s.status=A,l=o(s)):typeof o=="string"&&(l=Nd(o,s)),l};DA.normalizeToArray=function(e){return e instanceof Array?e:e==null?[]:[e]};function Zm(e,t){var A=[];return Yt(e.dimensions,function(r){var n=e.getDimensionInfo(r),i=n.otherDims,a=i[t];a!=null&&a!==!1&&(A[a]=n.name)}),A}function zn(e,t,A){function r(c){var f=[],h=Zm(n,"tooltip");h.length?Yt(h,function(g){d(n.get(g,t),g)}):Yt(c,d);function d(g,v){var p=n.getDimensionInfo(v);if(!(!p||p.otherDims.tooltip===!1)){var m=p.type,B="- "+(p.tooltipName||p.name)+": "+(m==="ordinal"?g+"":m==="time"?Pd("yyyy/MM/dd hh:mm:ss",g):jo(g));B&&f.push(Br(B))}}return"<br/>"+f.join("<br/>")}var n=e.getData(),i=e.getRawValue(t),a=Xt(i)?r(i):Br(jo(i)),s=n.getName(t),o=Ye(n,t);Hd(o)&&o.colorStops&&(o=(o.colorStops[0]||{}).color),o=o||"transparent";var l=Od(o),u=e.name;return u==="\0-"&&(u=""),u=u?Br(u)+"<br/>":"",u+l+(s?Br(s)+": "+a:a)}function ya(e,t,A){A=A||e.getSource();var r=t||Tc(e.get("coordinateSystem"))||["x","y","z"],n=On(A,{dimensionsDefine:A.dimensionsDefine||e.get("dimensions"),encodeDefine:A.encodeDefine||e.get("encode"),coordDimensions:r.map(function(s){var o=e.getReferringComponents(s+"Axis3D").models[0];return{type:o&&o.get("type")==="category"?"ordinal":"float",name:s}})});e.get("coordinateSystem")==="cartesian3D"&&n.forEach(function(s){if(r.indexOf(s.coordDim)>=0){var o=e.getReferringComponents(s.coordDim+"Axis3D").models[0];o&&o.get("type")==="category"&&(s.ordinalMeta=o.getOrdinalMeta())}});var i=wo.enableDataStack(e,n,{byIndex:!0,stackedCoordDimension:"z"}),a=new Zt(n,e);return a.setCalculationInfo(i),a.initData(A),a}var Qf=Nt.extend({type:"series.bar3D",dependencies:["globe"],visualStyleAccessPathvisu:"itemStyle",getInitialData:function(e,t){return ya(this)},getFormattedLabel:function(e,t,A,r){var n=DA.getFormattedLabel(this,e,t,A,r);return n==null&&(n=this.getData().get("z",e)),n},formatTooltip:function(e){return zn(this,e)},defaultOption:{coordinateSystem:"cartesian3D",globeIndex:0,grid3DIndex:0,zlevel:-10,bevelSize:0,bevelSmoothness:2,onGridPlane:"xy",shading:"color",minHeight:0,itemStyle:{opacity:1},label:{show:!1,distance:2,textStyle:{fontSize:14,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:3}},emphasis:{label:{show:!0}},animationDurationUpdate:500}});he(Qf.prototype,Vr);var Te=Le.vec3,Jm=Le.mat3,Ho=re.extend(function(){return{attributes:{position:new re.Attribute("position","float",3,"POSITION"),normal:new re.Attribute("normal","float",3,"NORMAL"),color:new re.Attribute("color","float",4,"COLOR"),prevPosition:new re.Attribute("prevPosition","float",3),prevNormal:new re.Attribute("prevNormal","float",3)},dynamic:!0,enableNormal:!1,bevelSize:1,bevelSegments:0,_dataIndices:null,_vertexOffset:0,_triangleOffset:0}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0},setBarCount:function(e){var t=this.enableNormal,A=this.getBarVertexCount()*e,r=this.getBarTriangleCount()*e;this.vertexCount!==A&&(this.attributes.position.init(A),t?this.attributes.normal.init(A):this.attributes.normal.value=null,this.attributes.color.init(A)),this.triangleCount!==r&&(this.indices=A>65535?new Uint32Array(r*3):new Uint16Array(r*3),this._dataIndices=new Uint32Array(A))},getBarVertexCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarVertexCount(e):this.enableNormal?24:8},getBarTriangleCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarTriangleCount(e):12},_getBevelBarVertexCount:function(e){return(e+1)*4*(e+1)*2},_getBevelBarTriangleCount:function(e){var t=e*4+3,A=e*2+1;return(t+1)*A*2+4},setColor:function(e,t){for(var A=this.getBarVertexCount(),r=A*e,n=A*(e+1),i=r;i<n;i++)this.attributes.color.set(i,t);this.dirtyAttribute("color")},getDataIndexOfVertex:function(e){return this._dataIndices?this._dataIndices[e]:null},addBar:function(){for(var e=Te.create,t=Te.scaleAndAdd,A=e(),r=e(),n=e(),i=e(),a=e(),s=e(),o=e(),l=[],u=[],c=0;c<8;c++)l[c]=e();for(var f=[[0,1,5,4],[2,3,7,6],[4,5,6,7],[3,2,1,0],[0,4,7,3],[1,2,6,5]],h=[0,1,2,0,2,3],d=[],c=0;c<f.length;c++)for(var g=f[c],v=0;v<2;v++){for(var p=[],m=0;m<3;m++)p.push(g[h[v*3+m]]);d.push(p)}return function(B,_,x,y,T,E){var F=this._vertexOffset;if(this.bevelSize>0&&this.bevelSegments>0)this._addBevelBar(B,_,x,y,this.bevelSize,this.bevelSegments,T);else{Te.copy(n,_),Te.normalize(n,n),Te.cross(i,x,n),Te.normalize(i,i),Te.cross(r,n,i),Te.normalize(i,i),Te.negate(a,r),Te.negate(s,n),Te.negate(o,i),t(l[0],B,r,y[0]/2),t(l[0],l[0],i,y[2]/2),t(l[1],B,r,y[0]/2),t(l[1],l[1],o,y[2]/2),t(l[2],B,a,y[0]/2),t(l[2],l[2],o,y[2]/2),t(l[3],B,a,y[0]/2),t(l[3],l[3],i,y[2]/2),t(A,B,n,y[1]),t(l[4],A,r,y[0]/2),t(l[4],l[4],i,y[2]/2),t(l[5],A,r,y[0]/2),t(l[5],l[5],o,y[2]/2),t(l[6],A,a,y[0]/2),t(l[6],l[6],o,y[2]/2),t(l[7],A,a,y[0]/2),t(l[7],l[7],i,y[2]/2);var S=this.attributes;if(this.enableNormal){u[0]=r,u[1]=a,u[2]=n,u[3]=s,u[4]=i,u[5]=o;for(var U=this._vertexOffset,I=0;I<f.length;I++){for(var Q=this._triangleOffset*3,b=0;b<6;b++)this.indices[Q++]=U+h[b];U+=4,this._triangleOffset+=2}for(var I=0;I<f.length;I++)for(var N=u[I],b=0;b<4;b++){var H=f[I][b];S.position.set(this._vertexOffset,l[H]),S.normal.set(this._vertexOffset,N),S.color.set(this._vertexOffset++,T)}}else{for(var I=0;I<d.length;I++){for(var Q=this._triangleOffset*3,b=0;b<3;b++)this.indices[Q+b]=d[I][b]+this._vertexOffset;this._triangleOffset++}for(var I=0;I<l.length;I++)S.position.set(this._vertexOffset,l[I]),S.color.set(this._vertexOffset++,T)}}for(var V=this._vertexOffset,I=F;I<V;I++)this._dataIndices[I]=E}}(),_addBevelBar:function(){var e=Te.create(),t=Te.create(),A=Te.create(),r=Jm.create(),n=[],i=[1,-1,-1,1],a=[1,1,-1,-1],s=[2,0];return function(o,l,u,c,f,h,d){Te.copy(t,l),Te.normalize(t,t),Te.cross(A,u,t),Te.normalize(A,A),Te.cross(e,t,A),Te.normalize(A,A),r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=t[0],r[4]=t[1],r[5]=t[2],r[6]=A[0],r[7]=A[1],r[8]=A[2],f=Math.min(c[0],c[2])/2*f;for(var g=0;g<3;g++)n[g]=Math.max(c[g]-f*2,0);for(var v=(c[0]-n[0])/2,p=(c[1]-n[1])/2,m=(c[2]-n[2])/2,B=[],_=[],x=this._vertexOffset,y=[],g=0;g<2;g++){y[g]=y[g]=[];for(var T=0;T<=h;T++)for(var E=0;E<4;E++){(T===0&&g===0||g===1&&T===h)&&y[g].push(x);for(var F=0;F<=h;F++){var S=F/h*Math.PI/2+Math.PI/2*E,U=T/h*Math.PI/2+Math.PI/2*g;_[0]=v*Math.cos(S)*Math.sin(U),_[1]=p*Math.cos(U),_[2]=m*Math.sin(S)*Math.sin(U),B[0]=_[0]+i[E]*n[0]/2,B[1]=_[1]+p+s[g]*n[1]/2,B[2]=_[2]+a[E]*n[2]/2,Math.abs(v-p)<1e-6&&Math.abs(p-m)<1e-6||(_[0]/=v*v,_[1]/=p*p,_[2]/=m*m),Te.normalize(_,_),Te.transformMat3(B,B,r),Te.transformMat3(_,_,r),Te.add(B,B,o),this.attributes.position.set(x,B),this.enableNormal&&this.attributes.normal.set(x,_),this.attributes.color.set(x,d),x++}}}for(var I=h*4+3,Q=h*2+1,b=I+1,E=0;E<Q;E++)for(var g=0;g<=I;g++){var N=E*b+g+this._vertexOffset,H=E*b+(g+1)%b+this._vertexOffset,V=(E+1)*b+(g+1)%b+this._vertexOffset,G=(E+1)*b+g+this._vertexOffset;this.setTriangleIndices(this._triangleOffset++,[V,N,H]),this.setTriangleIndices(this._triangleOffset++,[V,G,N])}this.setTriangleIndices(this._triangleOffset++,[y[0][0],y[0][2],y[0][1]]),this.setTriangleIndices(this._triangleOffset++,[y[0][0],y[0][3],y[0][2]]),this.setTriangleIndices(this._triangleOffset++,[y[1][0],y[1][1],y[1][2]]),this.setTriangleIndices(this._triangleOffset++,[y[1][0],y[1][2],y[1][3]]),this._vertexOffset=x}}()});SA(Ho.prototype,Vn);SA(Ho.prototype,Lo);var jm=Le.vec3;const qm=Ht.extend({type:"bar3D",__ecgl__:!0,init:function(e,t){this.groupGL=new w.Node,this._api=t,this._labelsBuilder=new lA(256,256,t);var A=this;this._labelsBuilder.getLabelPosition=function(r,n,i){if(A._data){var a=A._data.getItemLayout(r),s=a[0],o=a[1],l=a[2][1];return jm.scaleAndAdd([],s,o,i+l)}else return[0,0]},this._labelsBuilder.getMesh().renderOrder=100},render:function(e,t,A){var r=this._prevBarMesh;this._prevBarMesh=this._barMesh,this._barMesh=r,this._barMesh||(this._barMesh=new w.Mesh({geometry:new Ho,shadowDepthMaterial:new w.Material({shader:new w.Shader(w.Shader.source("ecgl.sm.depth.vertex"),w.Shader.source("ecgl.sm.depth.fragment"))}),culling:e.coordinateSystem.type==="cartesian3D",renderOrder:10,renderNormal:!0})),this.groupGL.remove(this._prevBarMesh),this.groupGL.add(this._barMesh),this.groupGL.add(this._labelsBuilder.getMesh());var n=e.coordinateSystem;if(this._doRender(e,A),n&&n.viewGL){n.viewGL.add(this.groupGL);var i=n.viewGL.isLinearSpace()?"define":"undefine";this._barMesh.material[i]("fragment","SRGB_DECODE")}this._data=e.getData(),this._labelsBuilder.updateData(this._data),this._labelsBuilder.updateLabels(),this._updateAnimation(e)},_updateAnimation:function(e){w.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevBarMesh,this._barMesh,e)},_doRender:function(e,t){var A=e.getData(),r=e.get("shading"),n=r!=="color",i=this,a=this._barMesh,s="ecgl."+r;(!a.material||a.material.shader.name!==s)&&(a.material=w.createMaterial(s,["VERTEX_COLOR"])),w.setMaterialFromModel(r,a.material,e,t),a.geometry.enableNormal=n,a.geometry.resetOffset();var o=e.get("bevelSize"),l=e.get("bevelSmoothness");a.geometry.bevelSegments=l,a.geometry.bevelSize=o;var u=[],c=new Float32Array(A.count()*4),f=0,v=0,h=!1;A.each(function(m){if(A.hasValue(m)){var B=Ye(A,m),_=Xe(A,m);_==null&&(_=1),w.parseColor(B,u),u[3]*=_,c[f++]=u[0],c[f++]=u[1],c[f++]=u[2],c[f++]=u[3],u[3]>0&&(v++,u[3]<.99&&(h=!0))}}),a.geometry.setBarCount(v);var d=A.getLayout("orient"),g=this._barIndexOfData=new Int32Array(A.count()),v=0;A.each(function(m){if(!A.hasValue(m)){g[m]=-1;return}var B=A.getItemLayout(m),_=B[0],x=B[1],y=B[2],T=m*4;u[0]=c[T++],u[1]=c[T++],u[2]=c[T++],u[3]=c[T++],u[3]>0&&(i._barMesh.geometry.addBar(_,x,d,y,u,m),g[m]=v++)}),a.geometry.dirty(),a.geometry.updateBoundingBox();var p=a.material;p.transparent=h,p.depthMask=!h,a.geometry.sortTriangles=h,this._initHandler(e,t)},_initHandler:function(e,t){var A=e.getData(),r=this._barMesh,n=e.coordinateSystem.type==="cartesian3D";r.seriesIndex=e.seriesIndex;var i=-1;r.off("mousemove"),r.off("mouseout"),r.on("mousemove",function(a){var s=r.geometry.getDataIndexOfVertex(a.triangle[0]);s!==i&&(this._downplay(i),this._highlight(s),this._labelsBuilder.updateLabels([s]),n&&t.dispatchAction({type:"grid3DShowAxisPointer",value:[A.get("x",s),A.get("y",s),A.get("z",s,!0)]})),i=s,r.dataIndex=s},this),r.on("mouseout",function(a){this._downplay(i),this._labelsBuilder.updateLabels(),i=-1,r.dataIndex=-1,n&&t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_highlight:function(e){var t=this._data;if(t){var A=this._barIndexOfData[e];if(!(A<0)){var r=t.getItemModel(e),n=r.getModel("emphasis.itemStyle"),i=n.get("color"),a=n.get("opacity");if(i==null){var s=Ye(t,e);i=Bo(s,-.4)}a==null&&(a=Xe(t,e));var o=w.parseColor(i);o[3]*=a,this._barMesh.geometry.setColor(A,o),this._api.getZr().refresh()}}},_downplay:function(e){var t=this._data;if(t){var A=this._barIndexOfData[e];if(!(A<0)){var r=Ye(t,e),n=Xe(t,e),i=w.parseColor(r);i[3]*=n,this._barMesh.geometry.setColor(A,i),this._api.getZr().refresh()}}},highlight:function(e,t,A,r){this._toggleStatus("highlight",e,t,A,r)},downplay:function(e,t,A,r){this._toggleStatus("downplay",e,t,A,r)},_toggleStatus:function(e,t,A,r,n){var i=t.getData(),a=Ae.queryDataIndex(i,n),s=this;a!=null?Yt(DA.normalizeToArray(a),function(o){e==="highlight"?this._highlight(o):this._downplay(o)},this):i.each(function(o){e==="highlight"?s._highlight(o):s._downplay(o)})},remove:function(){this.groupGL.removeAll()},dispose:function(){this._labelsBuilder.dispose(),this.groupGL.removeAll()}});function $m(e){e.registerChartView(qm),e.registerSeriesModel(Qf),Ym(e),e.registerProcessor(function(t,A){t.eachSeriesByType("bar3d",function(r){var n=r.getData();n.filterSelf(function(i){return n.hasValue(i)})})})}et($m);var e0=Nt.extend({type:"series.line3D",dependencies:["grid3D"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",getInitialData:function(e,t){return ya(this)},formatTooltip:function(e){return zn(this,e)},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,grid3DIndex:0,lineStyle:{width:2},animationDurationUpdate:500}}),t0=Le.vec3;w.Shader.import(wa);const A0=Ht.extend({type:"line3D",__ecgl__:!0,init:function(e,t){this.groupGL=new w.Node,this._api=t},render:function(e,t,A){var r=this._prevLine3DMesh;this._prevLine3DMesh=this._line3DMesh,this._line3DMesh=r,this._line3DMesh||(this._line3DMesh=new w.Mesh({geometry:new QA({useNativeLine:!1,sortTriangles:!0}),material:new w.Material({shader:w.createShader("ecgl.meshLines3D")}),renderOrder:10}),this._line3DMesh.geometry.pick=this._pick.bind(this)),this.groupGL.remove(this._prevLine3DMesh),this.groupGL.add(this._line3DMesh);var n=e.coordinateSystem;if(n&&n.viewGL){n.viewGL.add(this.groupGL);var i=n.viewGL.isLinearSpace()?"define":"undefine";this._line3DMesh.material[i]("fragment","SRGB_DECODE")}this._doRender(e,A),this._data=e.getData(),this._camera=n.viewGL.camera,this.updateCamera(),this._updateAnimation(e)},updateCamera:function(){this._updateNDCPosition()},_doRender:function(e,t){var A=e.getData(),r=this._line3DMesh;r.geometry.resetOffset();var n=A.getLayout("points"),i=[],a=new Float32Array(n.length/3*4),s=0,o=!1;A.each(function(c){var f=Ye(A,c),h=Xe(A,c);h==null&&(h=1),w.parseColor(f,i),i[3]*=h,a[s++]=i[0],a[s++]=i[1],a[s++]=i[2],a[s++]=i[3],i[3]<.99&&(o=!0)}),r.geometry.setVertexCount(r.geometry.getPolylineVertexCount(n)),r.geometry.setTriangleCount(r.geometry.getPolylineTriangleCount(n)),r.geometry.addPolyline(n,a,Ae.firstNotNull(e.get("lineStyle.width"),1)),r.geometry.dirty(),r.geometry.updateBoundingBox();var l=r.material;l.transparent=o,l.depthMask=!o;var u=e.getModel("debug.wireframe");u.get("show")?(r.geometry.createAttribute("barycentric","float",3),r.geometry.generateBarycentric(),r.material.set("both","WIREFRAME_TRIANGLE"),r.material.set("wireframeLineColor",w.parseColor(u.get("lineStyle.color")||"rgba(0,0,0,0.5)")),r.material.set("wireframeLineWidth",Ae.firstNotNull(u.get("lineStyle.width"),1))):r.material.set("both","WIREFRAME_TRIANGLE"),this._points=n,this._initHandler(e,t)},_updateAnimation:function(e){w.updateVertexAnimation([["prevPosition","position"],["prevPositionPrev","positionPrev"],["prevPositionNext","positionNext"]],this._prevLine3DMesh,this._line3DMesh,e)},_initHandler:function(e,t){var A=e.getData(),r=e.coordinateSystem,n=this._line3DMesh,i=-1;n.seriesIndex=e.seriesIndex,n.off("mousemove"),n.off("mouseout"),n.on("mousemove",function(a){var s=r.pointToData(a.point.array),o=A.indicesOfNearest("x",s[0])[0];o!==i&&(t.dispatchAction({type:"grid3DShowAxisPointer",value:[A.get("x",o),A.get("y",o),A.get("z",o)]}),n.dataIndex=o),i=o},this),n.on("mouseout",function(a){i=-1,n.dataIndex=-1,t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_updateNDCPosition:function(){var e=new z,t=this._camera;z.multiply(e,t.projectionMatrix,t.viewMatrix);var A=this._positionNDC,r=this._points,n=r.length/3;(!A||A.length/2!==n)&&(A=this._positionNDC=new Float32Array(n*2));for(var i=[],a=0;a<n;a++){var s=a*3,o=a*2;i[0]=r[s],i[1]=r[s+1],i[2]=r[s+2],i[3]=1,t0.transformMat4(i,i,e.array),A[o]=i[0]/i[3],A[o+1]=i[1]/i[3]}},_pick:function(e,t,A,r,n,i){var a=this._positionNDC,s=this._data.hostModel,o=s.get("lineStyle.width"),l=-1,u=A.viewport.width,c=A.viewport.height,f=u*.5,h=c*.5;e=(e+1)*f,t=(t+1)*h;for(var d=1;d<a.length/2;d++){var g=(a[(d-1)*2]+1)*f,v=(a[(d-1)*2+1]+1)*h,p=(a[d*2]+1)*f,m=(a[d*2+1]+1)*h;if(Gd(g,v,p,m,o,e,t)){var B=(g-e)*(g-e)+(v-t)*(v-t),_=(p-e)*(p-e)+(m-t)*(m-t);l=B<_?d-1:d}}if(l>=0){var x=l*3,y=new L(this._points[x],this._points[x+1],this._points[x+2]);i.push({dataIndex:l,point:y,pointWorld:y.clone(),target:this._line3DMesh,distance:this._camera.getWorldPosition().dist(y)})}},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function r0(e){e.registerChartView(A0),e.registerSeriesModel(e0),e.registerLayout(function(t,A){t.eachSeriesByType("line3D",function(r){var n=r.getData(),i=r.coordinateSystem;if(i){if(i.type!=="cartesian3D")return;var a=new Float32Array(n.count()*3),s=[],o=[],l=i.dimensions,u=l.map(function(c){return r.coordDimToDataDim(c)[0]});i&&n.each(u,function(c,f,h,d){s[0]=c,s[1]=f,s[2]=h,i.dataToPoint(s,o),a[d*3]=o[0],a[d*3+1]=o[1],a[d*3+2]=o[2]}),n.setLayout("points",a)}})})}et(r0);const n0=Nt.extend({type:"series.scatter3D",dependencies:["globe","grid3D","geo3D"],visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,getInitialData:function(e,t){return ya(this)},getFormattedLabel:function(e,t,A,r){var n=DA.getFormattedLabel(this,e,t,A,r);if(n==null){var i=this.getData(),a=i.dimensions[i.dimensions.length-1];n=i.get(a,e)}return n},formatTooltip:function(e){return zn(this,e)},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,progressive:1e5,progressiveThreshold:1e5,grid3DIndex:0,globeIndex:0,symbol:"circle",symbolSize:10,blendMode:"source-over",label:{show:!1,position:"right",distance:5,textStyle:{fontSize:14,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:3}},itemStyle:{opacity:.8},emphasis:{label:{show:!0}},animationDurationUpdate:500}});function is(e,r,A){var r=r||document.createElement("canvas");r.width=e,r.height=e;var n=r.getContext("2d");return A&&A(n),r}function i0(e,t,A,r){Xt(t)||(t=[t,t]);var n=qi.getMarginByStyle(A,r),i=t[0]+n.left+n.right,a=t[1]+n.top+n.bottom,s=Vd(e,0,0,t[0],t[1]),o=Math.max(i,a);s.x=n.left,s.y=n.top,i>a?s.y+=(o-a)/2:s.x+=(o-i)/2;var l=s.getBoundingRect();return s.x-=l.x,s.y-=l.y,s.setStyle(A),s.update(),s.__size=o,s}function a0(e,t,A){var r=t.width,n=t.height,i=e.canvas.width,a=e.canvas.height,s=r/i,o=n/a;function l(p){return p<128?1:-1}function u(p,m){var B=1/0;p=Math.floor(p*s),m=Math.floor(m*o);for(var _=m*r+p,x=t.data[_*4],y=l(x),T=Math.max(m-A,0);T<Math.min(m+A,n);T++)for(var E=Math.max(p-A,0);E<Math.min(p+A,r);E++){var _=T*r+E,F=t.data[_*4],S=l(F),U=E-p,I=T-m;if(y!==S){var Q=U*U+I*I;Q<B&&(B=Q)}}return y*Math.sqrt(B)}for(var c=e.createImageData(i,a),f=0;f<a;f++)for(var h=0;h<i;h++){var d=u(h,f),g=d/A*.5+.5,v=(f*i+h)*4;c.data[v++]=(1-g)*255,c.data[v++]=(1-g)*255,c.data[v++]=(1-g)*255,c.data[v++]=255}return c}var qi={getMarginByStyle:function(e){var t=e.minMargin||0,A=0;e.stroke&&e.stroke!=="none"&&(A=e.lineWidth==null?1:e.lineWidth);var r=e.shadowBlur||0,n=e.shadowOffsetX||0,i=e.shadowOffsetY||0,a={};return a.left=Math.max(A/2,-n+r,t),a.right=Math.max(A/2,n+r,t),a.top=Math.max(A/2,-i+r,t),a.bottom=Math.max(A/2,i+r,t),a},createSymbolSprite:function(e,t,A,r){var n=i0(e,t,A),i=qi.getMarginByStyle(A);return{image:is(n.__size,r,function(a){yc(a,n)}),margin:i}},createSDFFromCanvas:function(e,t,A,r){return is(t,r,function(n){var i=e.getContext("2d"),a=i.getImageData(0,0,e.width,e.height);n.putImageData(a0(n,a,A),0,0)})},createSimpleSprite:function(e,t){return is(e,t,function(A){var r=e/2;A.beginPath(),A.arc(r,r,60,0,Math.PI*2,!1),A.closePath();var n=A.createRadialGradient(r,r,0,r,r,r);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.5,"rgba(255, 255, 255, 0.5)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),A.fillStyle=n,A.fill()})}},tu=Le.vec3;const s0={needsSortVertices:function(){return this.sortVertices},needsSortVerticesProgressively:function(){return this.needsSortVertices()&&this.vertexCount>=2e4},doSortVertices:function(e,t){var A=this.indices,r=tu.create();if(!A){A=this.indices=this.vertexCount>65535?new Uint32Array(this.vertexCount):new Uint16Array(this.vertexCount);for(var n=0;n<A.length;n++)A[n]=n}if(t===0){var i=this.attributes.position,e=e.array,a=0;(!this._zList||this._zList.length!==this.vertexCount)&&(this._zList=new Float32Array(this.vertexCount));for(var s,n=0;n<this.vertexCount;n++){i.get(n,r);var o=tu.sqrDist(r,e);isNaN(o)&&(o=1e7,a++),n===0?(s=o,o=0):o=o-s,this._zList[n]=o}this._noneCount=a}if(this.vertexCount<2e4)t===0&&this._simpleSort(this._noneCount/this.vertexCount>.05);else for(var n=0;n<3;n++)this._progressiveQuickSort(t*3+n);this.dirtyIndices()},_simpleSort:function(e){var t=this._zList,A=this.indices;function r(n,i){return t[i]-t[n]}e?Array.prototype.sort.call(A,r):Ir.sort(A,r,0,A.length-1)},_progressiveQuickSort:function(e){var t=this._zList,A=this.indices;this._quickSort=this._quickSort||new Ir,this._quickSort.step(A,function(r,n){return t[n]-t[r]},e)}},o0=`@export ecgl.sdfSprite.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform float elapsedTime : 0;

attribute vec3 position : POSITION;

#ifdef VERTEX_SIZE
attribute float size;
#else
uniform float u_Size;
#endif

#ifdef VERTEX_COLOR
attribute vec4 a_FillColor: COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute float prevSize;
uniform float percent : 1.0;
#endif


#ifdef POSITIONTEXTURE_ENABLED
uniform sampler2D positionTexture;
#endif

varying float v_Size;

void main()
{

#ifdef POSITIONTEXTURE_ENABLED
 gl_Position = worldViewProjection * vec4(texture2D(positionTexture, position.xy).xy, -10.0, 1.0);
#else

 #ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 #else
 vec3 pos = position;
 #endif
 gl_Position = worldViewProjection * vec4(pos, 1.0);
#endif

#ifdef VERTEX_SIZE
#ifdef VERTEX_ANIMATION
 v_Size = mix(prevSize, size, percent);
#else
 v_Size = size;
#endif
#else
 v_Size = u_Size;
#endif

#ifdef VERTEX_COLOR
 v_Color = a_FillColor;
 #endif

 gl_PointSize = v_Size;
}

@end

@export ecgl.sdfSprite.fragment

uniform vec4 color: [1, 1, 1, 1];
uniform vec4 strokeColor: [1, 1, 1, 1];
uniform float smoothing: 0.07;

uniform float lineWidth: 0.0;

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

varying float v_Size;

uniform sampler2D sprite;

@import clay.util.srgb

void main()
{
 gl_FragColor = color;

 vec4 _strokeColor = strokeColor;

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
 #endif

#ifdef SPRITE_ENABLED
 float d = texture2D(sprite, gl_PointCoord).r;
 gl_FragColor.a *= smoothstep(0.5 - smoothing, 0.5 + smoothing, d);

 if (lineWidth > 0.0) {
 float sLineWidth = lineWidth / 2.0;

 float outlineMaxValue0 = 0.5 + sLineWidth;
 float outlineMaxValue1 = 0.5 + sLineWidth + smoothing;
 float outlineMinValue0 = 0.5 - sLineWidth - smoothing;
 float outlineMinValue1 = 0.5 - sLineWidth;

 if (d <= outlineMaxValue1 && d >= outlineMinValue0) {
 float a = _strokeColor.a;
 if (d <= outlineMinValue1) {
 a = a * smoothstep(outlineMinValue0, outlineMinValue1, d);
 }
 else {
 a = a * smoothstep(outlineMaxValue1, outlineMaxValue0, d);
 }
 gl_FragColor.rgb = mix(gl_FragColor.rgb * gl_FragColor.a, _strokeColor.rgb, a);
 gl_FragColor.a = gl_FragColor.a * (1.0 - a) + a;
 }
 }
#endif

#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(gl_FragColor);
#endif
}
@end`;var as=Le.vec4;w.Shader.import(o0);var l0=w.Mesh.extend(function(){var e=new w.Geometry({dynamic:!0,attributes:{color:new w.Geometry.Attribute("color","float",4,"COLOR"),position:new w.Geometry.Attribute("position","float",3,"POSITION"),size:new w.Geometry.Attribute("size","float",1),prevPosition:new w.Geometry.Attribute("prevPosition","float",3),prevSize:new w.Geometry.Attribute("prevSize","float",1)}});Object.assign(e,s0);var t=new w.Material({shader:w.createShader("ecgl.sdfSprite"),transparent:!0,depthMask:!1});t.enableTexture("sprite"),t.define("both","VERTEX_COLOR"),t.define("both","VERTEX_SIZE");var A=new w.Texture2D({image:document.createElement("canvas"),flipY:!1});return t.set("sprite",A),e.pick=this._pick.bind(this),{geometry:e,material:t,mode:w.Mesh.POINTS,sizeScale:1}},{_pick:function(e,t,A,r,n,i){var a=this._positionNDC;if(a)for(var s=A.viewport,o=2/s.width,l=2/s.height,u=this.geometry.vertexCount-1;u>=0;u--){var c;this.geometry.indices?c=this.geometry.indices[u]:c=u;var f=a[c*2],h=a[c*2+1],d=this.geometry.attributes.size.get(c)/this.sizeScale,g=d/2;if(e>f-g*o&&e<f+g*o&&t>h-g*l&&t<h+g*l){var v=new w.Vector3,p=new w.Vector3;this.geometry.attributes.position.get(c,v.array),w.Vector3.transformMat4(p,v,this.worldTransform),i.push({vertexIndex:c,point:v,pointWorld:p,target:this,distance:p.distance(r.getWorldPosition())})}}},updateNDCPosition:function(e,t,A){var r=this._positionNDC,n=this.geometry;(!r||r.length/2!==n.vertexCount)&&(r=this._positionNDC=new Float32Array(n.vertexCount*2));for(var i=as.create(),a=0;a<n.vertexCount;a++)n.attributes.position.get(a,i),i[3]=1,as.transformMat4(i,i,e.array),as.scale(i,i,1/i[3]),r[a*2]=i[0],r[a*2+1]=i[1]}}),Au=20,ru=-10;function u0(e,t){return e&&t&&e[0]===t[0]&&e[1]===t[1]}function tr(e,t){this.rootNode=new w.Node,this.is2D=e,this._labelsBuilder=new lA(256,256,t),this._labelsBuilder.getMesh().renderOrder=100,this.rootNode.add(this._labelsBuilder.getMesh()),this._api=t,this._spriteImageCanvas=document.createElement("canvas"),this._startDataIndex=0,this._endDataIndex=0,this._sizeScale=1}tr.prototype={constructor:tr,highlightOnMouseover:!0,update:function(e,t,A,r,n){var i=this._prevMesh;this._prevMesh=this._mesh,this._mesh=i;var a=e.getData();if(r==null&&(r=0),n==null&&(n=a.count()),this._startDataIndex=r,this._endDataIndex=n-1,!this._mesh){var s=this._prevMesh&&this._prevMesh.material;this._mesh=new l0({renderOrder:10,frustumCulling:!1}),s&&(this._mesh.material=s)}var s=this._mesh.material,o=this._mesh.geometry,l=o.attributes;this.rootNode.remove(this._prevMesh),this.rootNode.add(this._mesh),this._setPositionTextureToMesh(this._mesh,this._positionTexture);var u=this._getSymbolInfo(e,r,n),c=A.getDevicePixelRatio(),f=e.getModel("itemStyle").getItemStyle(),h=e.get("large"),d=1;u.maxSize>2?(d=this._updateSymbolSprite(e,f,u,c),s.enableTexture("sprite")):s.disableTexture("sprite"),l.position.init(n-r);var g=[];if(h){s.undefine("VERTEX_SIZE"),s.undefine("VERTEX_COLOR");var v=Am(a),p=rm(a);w.parseColor(v,g),g[3]*=p,s.set({color:g,u_Size:u.maxSize*this._sizeScale})}else s.set({color:[1,1,1,1]}),s.define("VERTEX_SIZE"),s.define("VERTEX_COLOR"),l.size.init(n-r),l.color.init(n-r),this._originalOpacity=new Float32Array(n-r);for(var m=a.getLayout("points"),B=l.position.value,_=0;_<n-r;_++){var x=_*3,y=_*2;if(this.is2D?(B[x]=m[y],B[x+1]=m[y+1],B[x+2]=ru):(B[x]=m[x],B[x+1]=m[x+1],B[x+2]=m[x+2]),!h){var v=Ye(a,_),p=Xe(a,_);w.parseColor(v,g),g[3]*=p,l.color.set(_,g),g[3]<.99;var T=a.getItemVisual(_,"symbolSize");T=T instanceof Array?Math.max(T[0],T[1]):T,isNaN(T)&&(T=0),l.size.value[_]=T*d*this._sizeScale,this._originalOpacity[_]=g[3]}}this._mesh.sizeScale=d,o.updateBoundingBox(),o.dirty(),this._updateMaterial(e,f);var E=e.coordinateSystem;if(E&&E.viewGL){var F=E.viewGL.isLinearSpace()?"define":"undefine";s[F]("fragment","SRGB_DECODE")}h||this._updateLabelBuilder(e,r,n),this._updateHandler(e,t,A),this._updateAnimation(e),this._api=A},getPointsMesh:function(){return this._mesh},updateLabels:function(e){this._labelsBuilder.updateLabels(e)},hideLabels:function(){this.rootNode.remove(this._labelsBuilder.getMesh())},showLabels:function(){this.rootNode.add(this._labelsBuilder.getMesh())},dispose:function(){this._labelsBuilder.dispose()},_updateSymbolSprite:function(e,t,A,r){A.maxSize=Math.min(A.maxSize*2,200);var n=[];return A.aspect>1?(n[0]=A.maxSize,n[1]=A.maxSize/A.aspect):(n[1]=A.maxSize,n[0]=A.maxSize*A.aspect),n[0]=n[0]||1,n[1]=n[1]||1,(this._symbolType!==A.type||!u0(this._symbolSize,n)||this._lineWidth!==t.lineWidth)&&(qi.createSymbolSprite(A.type,n,{fill:"#fff",lineWidth:t.lineWidth,stroke:"transparent",shadowColor:"transparent",minMargin:Math.min(n[0]/2,10)},this._spriteImageCanvas),qi.createSDFFromCanvas(this._spriteImageCanvas,Math.min(this._spriteImageCanvas.width,32),Au,this._mesh.material.get("sprite").image),this._symbolType=A.type,this._symbolSize=n,this._lineWidth=t.lineWidth),this._spriteImageCanvas.width/A.maxSize*r},_updateMaterial:function(e,t){var A=e.get("blendMode")==="lighter"?w.additiveBlend:null,r=this._mesh.material;r.blend=A,r.set("lineWidth",t.lineWidth/Au);var n=w.parseColor(t.stroke);r.set("strokeColor",n),r.transparent=!0,r.depthMask=!1,r.depthTest=!this.is2D,r.sortVertices=!this.is2D},_updateLabelBuilder:function(e,a,A){var r=e.getData(),n=this._mesh.geometry,i=n.attributes.position.value,a=this._startDataIndex,s=this._mesh.sizeScale;this._labelsBuilder.updateData(r,a,A),this._labelsBuilder.getLabelPosition=function(o,l,u){var c=(o-a)*3;return[i[c],i[c+1],i[c+2]]},this._labelsBuilder.getLabelDistance=function(o,l,u){var c=n.attributes.size.get(o-a)/s;return c/2+u},this._labelsBuilder.updateLabels()},_updateAnimation:function(e){w.updateVertexAnimation([["prevPosition","position"],["prevSize","size"]],this._prevMesh,this._mesh,e)},_updateHandler:function(e,t,A){var r=e.getData(),n=this._mesh,i=this,a=-1,s=e.coordinateSystem&&e.coordinateSystem.type==="cartesian3D",o;s&&(o=e.coordinateSystem.model),n.seriesIndex=e.seriesIndex,n.off("mousemove"),n.off("mouseout"),n.on("mousemove",function(l){var u=l.vertexIndex+i._startDataIndex;u!==a&&(this.highlightOnMouseover&&(this.downplay(r,a),this.highlight(r,u),this._labelsBuilder.updateLabels([u])),s&&A.dispatchAction({type:"grid3DShowAxisPointer",value:[r.get(e.coordDimToDataDim("x")[0],u),r.get(e.coordDimToDataDim("y")[0],u),r.get(e.coordDimToDataDim("z")[0],u)],grid3DIndex:o.componentIndex})),n.dataIndex=u,a=u},this),n.on("mouseout",function(l){var u=l.vertexIndex+i._startDataIndex;this.highlightOnMouseover&&(this.downplay(r,u),this._labelsBuilder.updateLabels()),a=-1,n.dataIndex=-1,s&&A.dispatchAction({type:"grid3DHideAxisPointer",grid3DIndex:o.componentIndex})},this)},updateLayout:function(e,t,A){var r=e.getData();if(this._mesh){var n=this._mesh.geometry.attributes.position.value,i=r.getLayout("points");if(this.is2D)for(var a=0;a<i.length/2;a++){var s=a*3,o=a*2;n[s]=i[o],n[s+1]=i[o+1],n[s+2]=ru}else for(var a=0;a<i.length;a++)n[a]=i[a];this._mesh.geometry.dirty(),A.getZr().refresh()}},updateView:function(e){if(this._mesh){var t=new z;z.mul(t,e.viewMatrix,this._mesh.worldTransform),z.mul(t,e.projectionMatrix,t),this._mesh.updateNDCPosition(t,this.is2D,this._api)}},highlight:function(e,t){if(!(t>this._endDataIndex||t<this._startDataIndex)){var A=e.getItemModel(t),r=A.getModel("emphasis.itemStyle"),n=r.get("color"),i=r.get("opacity");if(n==null){var a=Ye(e,t);n=Bo(a,-.4)}i==null&&(i=Xe(e,t));var s=w.parseColor(n);s[3]*=i,this._mesh.geometry.attributes.color.set(t-this._startDataIndex,s),this._mesh.geometry.dirtyAttribute("color"),this._api.getZr().refresh()}},downplay:function(e,t){if(!(t>this._endDataIndex||t<this._startDataIndex)){var A=Ye(e,t),r=Xe(e,t),n=w.parseColor(A);n[3]*=r,this._mesh.geometry.attributes.color.set(t-this._startDataIndex,n),this._mesh.geometry.dirtyAttribute("color"),this._api.getZr().refresh()}},fadeOutAll:function(e){if(this._originalOpacity){for(var t=this._mesh.geometry,A=0;A<t.vertexCount;A++){var r=this._originalOpacity[A]*e;t.attributes.color.value[A*4+3]=r}t.dirtyAttribute("color"),this._api.getZr().refresh()}},fadeInAll:function(){this.fadeOutAll(1)},setPositionTexture:function(e){this._mesh&&this._setPositionTextureToMesh(this._mesh,e),this._positionTexture=e},removePositionTexture:function(){this._positionTexture=null,this._mesh&&this._setPositionTextureToMesh(this._mesh,null)},setSizeScale:function(e){if(e!==this._sizeScale){if(this._mesh){var t=this._mesh.material.get("u_Size");this._mesh.material.set("u_Size",t/this._sizeScale*e);var A=this._mesh.geometry.attributes;if(A.size.value)for(var r=0;r<A.size.value.length;r++)A.size.value[r]=A.size.value[r]/this._sizeScale*e}this._sizeScale=e}},_setPositionTextureToMesh:function(e,t){t&&e.material.set("positionTexture",t),e.material[t?"enableTexture":"disableTexture"]("positionTexture")},_getSymbolInfo:function(e,t,A){if(e.get("large")){var r=Ae.firstNotNull(e.get("symbolSize"),1),s,i;return r instanceof Array?(s=Math.max(r[0],r[1]),i=r[0]/r[1]):(s=r,i=1),{maxSize:r,type:e.get("symbol"),aspect:i}}for(var n=e.getData(),i,a=n.getItemVisual(0,"symbol")||"circle",s=0,o=t;o<A;o++){var r=n.getItemVisual(o,"symbolSize"),l=n.getItemVisual(o,"symbol"),u;if(r instanceof Array)u=r[0]/r[1],s=Math.max(Math.max(r[0],r[1]),s);else{if(isNaN(r))continue;u=1,s=Math.max(r,s)}a=l,i=u}return{maxSize:s,type:a,aspect:i}}};const c0=Ht.extend({type:"scatter3D",hasSymbolVisual:!0,__ecgl__:!0,init:function(e,t){this.groupGL=new w.Node,this._pointsBuilderList=[],this._currentStep=0},render:function(e,t,A){if(this.groupGL.removeAll(),!!e.getData().count()){var r=e.coordinateSystem;if(r&&r.viewGL){r.viewGL.add(this.groupGL),this._camera=r.viewGL.camera;var n=this._pointsBuilderList[0];n||(n=this._pointsBuilderList[0]=new tr(!1,A)),this._pointsBuilderList.length=1,this.groupGL.add(n.rootNode),n.update(e,t,A),n.updateView(r.viewGL.camera)}}},incrementalPrepareRender:function(e,t,A){var r=e.coordinateSystem;r&&r.viewGL&&(r.viewGL.add(this.groupGL),this._camera=r.viewGL.camera),this.groupGL.removeAll(),this._currentStep=0},incrementalRender:function(e,t,A,r){if(!(e.end<=e.start)){var n=this._pointsBuilderList[this._currentStep];n||(n=new tr(!1,r),this._pointsBuilderList[this._currentStep]=n),this.groupGL.add(n.rootNode),n.update(t,A,r,e.start,e.end),n.updateView(t.coordinateSystem.viewGL.camera),this._currentStep++}},updateCamera:function(){this._pointsBuilderList.forEach(function(e){e.updateView(this._camera)},this)},highlight:function(e,t,A,r){this._toggleStatus("highlight",e,t,A,r)},downplay:function(e,t,A,r){this._toggleStatus("downplay",e,t,A,r)},_toggleStatus:function(e,t,A,r,n){var i=t.getData(),a=Ae.queryDataIndex(i,n),s=e==="highlight";a!=null?Yt(DA.normalizeToArray(a),function(o){for(var l=0;l<this._pointsBuilderList.length;l++){var u=this._pointsBuilderList[l];s?u.highlight(i,o):u.downplay(i,o)}},this):i.each(function(o){for(var l=0;l<this._pointsBuilderList.length;l++){var u=this._pointsBuilderList[l];s?u.highlight(i,o):u.downplay(i,o)}})},dispose:function(){this._pointsBuilderList.forEach(function(e){e.dispose()}),this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function f0(e){e.registerChartView(c0),e.registerSeriesModel(n0),e.registerLayout({seriesType:"scatter3D",reset:function(t){var A=t.coordinateSystem;if(A){var r=A.dimensions;if(r.length<3)return;var n=r.map(function(s){return t.coordDimToDataDim(s)[0]}),i=[],a=[];return{progress:function(s,o){for(var l=new Float32Array((s.end-s.start)*3),u=s.start;u<s.end;u++){var c=(u-s.start)*3;i[0]=o.get(n[0],u),i[1]=o.get(n[1],u),i[2]=o.get(n[2],u),A.dataToPoint(i,a),l[c]=a[0],l[c+1]=a[1],l[c+2]=a[2]}o.setLayout("points",l)}}}}})}et(f0);var Oe=Le.vec3,nu=Le.vec2,$t=Oe.normalize,ii=Oe.cross,iu=Oe.sub,ss=Oe.add,wA=Oe.create,dA=wA(),yt=wA(),gA=wA(),en=wA(),au=[],su=[];function h0(e,t){nu.copy(au,e[0]),nu.copy(su,e[1]);var A=[],r=A[0]=wA(),n=A[1]=wA(),i=A[2]=wA(),a=A[3]=wA();t.dataToPoint(au,r),t.dataToPoint(su,a),$t(dA,r),iu(yt,a,r),$t(yt,yt),ii(gA,yt,dA),$t(gA,gA),ii(yt,dA,gA),ss(n,dA,yt),$t(n,n),$t(dA,a),iu(yt,r,a),$t(yt,yt),ii(gA,yt,dA),$t(gA,gA),ii(yt,dA,gA),ss(i,dA,yt),$t(i,i),ss(en,r,a),$t(en,en);var s=Oe.dot(r,en),o=Oe.dot(en,n),l=(Math.max(Oe.len(r),Oe.len(a))-s)/o*2;return Oe.scaleAndAdd(n,r,n,l),Oe.scaleAndAdd(i,a,i,l),A}function d0(e,t,A){var r=[],n=r[0]=Oe.create(),i=r[1]=Oe.create(),a=r[2]=Oe.create(),s=r[3]=Oe.create();t.dataToPoint(e[0],n),t.dataToPoint(e[1],s);var o=Oe.dist(n,s);return Oe.lerp(i,n,s,.3),Oe.lerp(a,n,s,.3),Oe.scaleAndAdd(i,i,A,Math.min(o*.1,10)),Oe.scaleAndAdd(a,a,A,Math.min(o*.1,10)),r}function Lf(e,t){for(var A=new Float32Array(e.length*3),r=0,n=[],i=0;i<e.length;i++)t.dataToPoint(e[i],n),A[r++]=n[0],A[r++]=n[1],A[r++]=n[2];return A}function If(e){var t=[];return e.each(function(A){var r=e.getItemModel(A),n=r.option instanceof Array?r.option:r.getShallow("coords",!0);t.push(n)}),{coordsList:t}}function g0(e,t){var A=e.getData(),r=e.get("polyline");A.setLayout("lineType",r?"polyline":"cubicBezier");var n=If(A);A.each(function(i){var a=n.coordsList[i],s=r?Lf:h0;A.setItemLayout(i,s(a,t))})}function ou(e,t,A){var r=e.getData(),n=e.get("polyline"),i=If(r);r.setLayout("lineType",n?"polyline":"cubicBezier"),r.each(function(a){var s=i.coordsList[a],o=n?Lf(s,t):d0(s,t,A);r.setItemLayout(a,o)})}function v0(e,t){e.eachSeriesByType("lines3D",function(A){var r=A.coordinateSystem;r.type==="globe"?g0(A,r):r.type==="geo3D"?ou(A,r,[0,1,0]):(r.type==="mapbox3D"||r.type==="maptalks3D")&&ou(A,r,[0,0,1])})}const p0=Nt.extend({type:"series.lines3D",dependencies:["globe"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",getInitialData:function(e,t){var A=new Zt(["value"],this);return A.hasItemOption=!1,A.initData(e.data,[],function(r,n,i,a){if(r instanceof Array)return NaN;A.hasItemOption=!0;var s=r.value;if(s!=null)return s instanceof Array?s[a]:s}),A},defaultOption:{coordinateSystem:"globe",globeIndex:0,geo3DIndex:0,zlevel:-10,polyline:!1,effect:{show:!1,period:4,trailWidth:4,trailLength:.2,spotIntensity:6},silent:!0,blendMode:"source-over",lineStyle:{width:1,opacity:.5}}}),m0=`@export ecgl.trail2.vertex
attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute float dist;
attribute float distAll;
attribute float start;

attribute vec4 a_Color : COLOR;

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

uniform float speed : 0;
uniform float trailLength: 0.3;
uniform float time;
uniform float period: 1000;

uniform float spotSize: 1;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain

#ifdef CONSTANT_SPEED
 float t = mod((speed * time + start) / distAll, 1. + trailLength) - trailLength;
#else
 float t = mod((time + start) / period, 1. + trailLength) - trailLength;
#endif

 float trailLen = distAll * trailLength;

 v_Percent = (dist - t * distAll) / trailLen;

 v_SpotPercent = spotSize / distAll;

 }
@end


@export ecgl.trail2.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform float spotIntensity: 5;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
 if (v_Percent > 1.0 || v_Percent < 0.0) {
 discard;
 }

 float fade = v_Percent;

#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain

 if (v_Percent > (1.0 - v_SpotPercent)) {
 gl_FragColor.rgb *= spotIntensity;
 }

 gl_FragColor.a *= fade;
}

@end`;var lu=Le.vec3;function _0(e){return e>0?1:-1}w.Shader.import(m0);const B0=w.Mesh.extend(function(){var e=new w.Material({shader:new w.Shader(w.Shader.source("ecgl.trail2.vertex"),w.Shader.source("ecgl.trail2.fragment")),transparent:!0,depthMask:!1}),t=new QA({dynamic:!0});return t.createAttribute("dist","float",1),t.createAttribute("distAll","float",1),t.createAttribute("start","float",1),{geometry:t,material:e,culling:!1,$ignorePicking:!0}},{updateData:function(e,t,A){var r=e.hostModel,n=this.geometry,i=r.getModel("effect"),a=i.get("trailWidth")*t.getDevicePixelRatio(),s=i.get("trailLength"),o=r.get("effect.constantSpeed"),l=r.get("effect.period")*1e3,u=o!=null;u?this.material.set("speed",o/1e3):this.material.set("period",l),this.material[u?"define":"undefine"]("vertex","CONSTANT_SPEED");var c=r.get("polyline");n.trailLength=s,this.material.set("trailLength",s),n.resetOffset(),["position","positionPrev","positionNext"].forEach(function(T){n.attributes[T].value=A.attributes[T].value});var f=["dist","distAll","start","offset","color"];f.forEach(function(T){n.attributes[T].init(n.vertexCount)}),n.indices=A.indices;var h=[],d=i.get("trailColor"),g=i.get("trailOpacity"),v=d!=null,p=g!=null;this.updateWorldTransform();var m=this.worldTransform.x.len(),B=this.worldTransform.y.len(),_=this.worldTransform.z.len(),x=0,y=0;e.each(function(T){var E=e.getItemLayout(T),F=p?g:Xe(e,T),S=Ye(e,T);F==null&&(F=1),h=w.parseColor(v?d:S,h),h[3]*=F;for(var U=c?A.getPolylineVertexCount(E):A.getCubicCurveVertexCount(E[0],E[1],E[2],E[3]),I=0,Q=[],b=[],N=x;N<x+U;N++)n.attributes.position.get(N,Q),Q[0]*=m,Q[1]*=B,Q[2]*=_,N>x&&(I+=lu.dist(Q,b)),n.attributes.dist.set(N,I),lu.copy(b,Q);y=Math.max(y,I);for(var H=Math.random()*(u?I:l),N=x;N<x+U;N++)n.attributes.distAll.set(N,I),n.attributes.start.set(N,H),n.attributes.offset.set(N,_0(A.attributes.offset.get(N))*a/2),n.attributes.color.set(N,h);x+=U}),this.material.set("spotSize",y*.1*s),this.material.set("spotIntensity",i.get("spotIntensity")),n.dirty()},setAnimationTime:function(e){this.material.set("time",e)}});w.Shader.import(wa);function w0(e){return e.radius!=null?e.radius:e.size!=null?Math.max(e.size[0],e.size[1],e.size[2]):100}const y0=Ht.extend({type:"lines3D",__ecgl__:!0,init:function(e,t){this.groupGL=new w.Node,this._meshLinesMaterial=new w.Material({shader:w.createShader("ecgl.meshLines3D"),transparent:!0,depthMask:!1}),this._linesMesh=new w.Mesh({geometry:new QA,material:this._meshLinesMaterial,$ignorePicking:!0}),this._trailMesh=new B0},render:function(e,t,A){this.groupGL.add(this._linesMesh);var r=e.coordinateSystem,n=e.getData();if(r&&r.viewGL){var i=r.viewGL;i.add(this.groupGL),this._updateLines(e,t,A);var a=r.viewGL.isLinearSpace()?"define":"undefine";this._linesMesh.material[a]("fragment","SRGB_DECODE"),this._trailMesh.material[a]("fragment","SRGB_DECODE")}var s=this._trailMesh;if(s.stopAnimation(),e.get("effect.show")){this.groupGL.add(s),s.updateData(n,A,this._linesMesh.geometry),s.__time=s.__time||0;var o=3600*1e3;this._curveEffectsAnimator=s.animate("",{loop:!0}).when(o,{__time:o}).during(function(){s.setAnimationTime(s.__time)}).start()}else this.groupGL.remove(s),this._curveEffectsAnimator=null;this._linesMesh.material.blend=this._trailMesh.material.blend=e.get("blendMode")==="lighter"?w.additiveBlend:null},pauseEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.pause()},resumeEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.resume()},toggleEffect:function(){var e=this._curveEffectsAnimator;e&&(e.isPaused()?e.resume():e.pause())},_updateLines:function(e,t,A){var r=e.getData(),n=e.coordinateSystem,i=this._linesMesh.geometry,a=e.get("polyline");i.expandLine=!0;var s=w0(n);i.segmentScale=s/20;var o="lineStyle.width".split("."),l=A.getDevicePixelRatio();r.each(function(h){var d=r.getItemModel(h),g=d.get(o);g==null&&(g=1),r.setItemVisual(h,"lineWidth",g)}),i.useNativeLine=!1;var u=0,c=0;r.each(function(h){var d=r.getItemLayout(h);a?(u+=i.getPolylineVertexCount(d),c+=i.getPolylineTriangleCount(d)):(u+=i.getCubicCurveVertexCount(d[0],d[1],d[2],d[3]),c+=i.getCubicCurveTriangleCount(d[0],d[1],d[2],d[3]))}),i.setVertexCount(u),i.setTriangleCount(c),i.resetOffset();var f=[];r.each(function(h){var d=r.getItemLayout(h),g=Ye(r,h),v=Xe(r,h),p=r.getItemVisual(h,"lineWidth")*l;v==null&&(v=1),f=w.parseColor(g,f),f[3]*=v,a?i.addPolyline(d,f,p):i.addCubicCurve(d[0],d[1],d[2],d[3],f,p)}),i.dirty()},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function x0(e){e.registerChartView(y0),e.registerSeriesModel(p0),e.registerLayout(v0),e.registerAction({type:"lines3DPauseEffect",event:"lines3deffectpaused",update:"series.lines3D:pauseEffect"},function(){}),e.registerAction({type:"lines3DResumeEffect",event:"lines3deffectresumed",update:"series.lines3D:resumeEffect"},function(){}),e.registerAction({type:"lines3DToggleEffect",event:"lines3deffectchanged",update:"series.lines3D:toggleEffect"},function(){})}et(x0);function uu(e,t){for(var A=[],r=0;r<t.length;r++)A.push(e.dataToPoint(t[r]));return A}var Df=Nt.extend({type:"series.polygons3D",getRegionModel:function(e){return this.getData().getItemModel(e)},getRegionPolygonCoords:function(e){var t=this.coordinateSystem,A=this.getData().getItemModel(e),r=A.option instanceof Array?A.option:A.getShallow("coords");A.get("multiPolygon")||(r=[r]);for(var n=[],i=0;i<r.length;i++){for(var a=[],s=1;s<r[i].length;s++)a.push(uu(t,r[i][s]));n.push({exterior:uu(t,r[i][0]),interiors:a})}return n},getInitialData:function(e){var t=new Zt(["value"],this);return t.hasItemOption=!1,t.initData(e.data,[],function(A,r,n,i){if(A instanceof Array)return NaN;t.hasItemOption=!0;var a=A.value;if(a!=null)return a instanceof Array?a[i]:a}),t},defaultOption:{show:!0,data:null,multiPolygon:!1,progressiveThreshold:1e3,progressive:1e3,zlevel:-10,label:{show:!1,distance:2,textStyle:{fontSize:20,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:4}},itemStyle:{color:"#fff",borderWidth:0,borderColor:"#333"},emphasis:{itemStyle:{color:"#639fc0"},label:{show:!0}}}});he(Df.prototype,Vr);const C0=Ht.extend({type:"polygons3D",__ecgl__:!0,init:function(e,t){this.groupGL=new w.Node,this._geo3DBuilderList=[],this._currentStep=0},render:function(e,t,A){this.groupGL.removeAll();var r=e.coordinateSystem;r&&r.viewGL&&r.viewGL.add(this.groupGL);var n=this._geo3DBuilderList[0];n||(n=new Dr(A),n.extrudeY=r.type!=="mapbox3D"&&r.type!=="maptalks3D",this._geo3DBuilderList[0]=n),this._updateShaderDefines(r,n),n.update(e,t,A),this._geo3DBuilderList.length=1,this.groupGL.add(n.rootNode)},incrementalPrepareRender:function(e,t,A){this.groupGL.removeAll();var r=e.coordinateSystem;r&&r.viewGL&&r.viewGL.add(this.groupGL),this._currentStep=0},incrementalRender:function(e,t,A,r){var n=this._geo3DBuilderList[this._currentStep],i=t.coordinateSystem;n||(n=new Dr(r),n.extrudeY=i.type!=="mapbox3D"&&i.type!=="maptalks3D",this._geo3DBuilderList[this._currentStep]=n),n.update(t,A,r,e.start,e.end),this.groupGL.add(n.rootNode),this._updateShaderDefines(i,n),this._currentStep++},_updateShaderDefines:function(e,t){var A=e.viewGL.isLinearSpace()?"define":"undefine";t.rootNode.traverse(function(r){r.material&&(r.material[A]("fragment","SRGB_DECODE"),(e.type==="mapbox3D"||e.type==="maptalks3D")&&(r.material.define("fragment","NORMAL_UP_AXIS",2),r.material.define("fragment","NORMAL_FRONT_AXIS",1)))})},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll(),this._geo3DBuilderList.forEach(function(e){e.dispose()})}});function E0(e){e.registerChartView(C0),e.registerSeriesModel(Df)}et(E0);var Mf=Nt.extend({type:"series.surface",dependencies:["globe","grid3D","geo3D"],visualStyleAccessPath:"itemStyle",formatTooltip:function(e){return zn(this,e)},getInitialData:function(e,t){var A=e.data;function r(V){return!(isNaN(V.min)||isNaN(V.max)||isNaN(V.step))}function n(V){var G=xc;return Math.max(G(V.min),G(V.max),G(V.step))+1}if(!A)if(e.parametric){var _=e.parametricEquation||{},x=_.u||{},y=_.v||{};["u","v"].forEach(function(G){r(_[G])}),["x","y","z"].forEach(function(G){_[G]});var T=Math.floor((x.max+x.step-x.min)/x.step),E=Math.floor((y.max+y.step-y.min)/y.step);A=new Float32Array(T*E*5);for(var F=n(x),S=n(y),f=0,h=0;h<E;h++)for(var d=0;d<T;d++){var U=d*x.step+x.min,I=h*y.step+y.min,Q=Xn(Math.min(U,x.max),F),b=Xn(Math.min(I,y.max),S),g=_.x(Q,b),v=_.y(Q,b),B=_.z(Q,b);A[f++]=g,A[f++]=v,A[f++]=B,A[f++]=Q,A[f++]=b}}else{var i=e.equation||{},a=i.x||{},s=i.y||{};if(["x","y"].forEach(function(V){r(i[V])}),typeof i.z!="function")return;var o=Math.floor((a.max+a.step-a.min)/a.step),l=Math.floor((s.max+s.step-s.min)/s.step);A=new Float32Array(o*l*3);for(var u=n(a),c=n(s),f=0,h=0;h<l;h++)for(var d=0;d<o;d++){var g=d*a.step+a.min,v=h*s.step+s.min,p=Xn(Math.min(g,a.max),u),m=Xn(Math.min(v,s.max),c),B=i.z(p,m);A[f++]=p,A[f++]=m,A[f++]=B}}var N=["x","y","z"];e.parametric&&N.push("u","v");var H=ya(this,N,A);return H},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,grid3DIndex:0,shading:"lambert",parametric:!1,wireframe:{show:!0,lineStyle:{color:"rgba(0,0,0,0.5)",width:1}},equation:{x:{min:-1,max:1,step:.1},y:{min:-1,max:1,step:.1},z:null},parametricEquation:{u:{min:-1,max:1,step:.1},v:{min:-1,max:1,step:.1},x:null,y:null,z:null},dataShape:null,itemStyle:{},animationDurationUpdate:500}});he(Mf.prototype,Vr);var GA=Le.vec3;function T0(e){return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])}const F0=Ht.extend({type:"surface",__ecgl__:!0,init:function(e,t){this.groupGL=new w.Node},render:function(e,t,A){var r=this._prevSurfaceMesh;this._prevSurfaceMesh=this._surfaceMesh,this._surfaceMesh=r,this._surfaceMesh||(this._surfaceMesh=this._createSurfaceMesh()),this.groupGL.remove(this._prevSurfaceMesh),this.groupGL.add(this._surfaceMesh);var n=e.coordinateSystem,i=e.get("shading"),a=e.getData(),s="ecgl."+i;if((!this._surfaceMesh.material||this._surfaceMesh.material.shader.name!==s)&&(this._surfaceMesh.material=w.createMaterial(s,["VERTEX_COLOR","DOUBLE_SIDED"])),w.setMaterialFromModel(i,this._surfaceMesh.material,e,A),n&&n.viewGL){n.viewGL.add(this.groupGL);var o=n.viewGL.isLinearSpace()?"define":"undefine";this._surfaceMesh.material[o]("fragment","SRGB_DECODE")}var l=e.get("parametric"),u=e.get("dataShape");u||(u=this._getDataShape(a,l));var c=e.getModel("wireframe"),f=c.get("lineStyle.width"),h=c.get("show")&&f>0;this._updateSurfaceMesh(this._surfaceMesh,e,u,h);var d=this._surfaceMesh.material;h?(d.define("WIREFRAME_QUAD"),d.set("wireframeLineWidth",f),d.set("wireframeLineColor",w.parseColor(c.get("lineStyle.color")))):d.undefine("WIREFRAME_QUAD"),this._initHandler(e,A),this._updateAnimation(e)},_updateAnimation:function(e){w.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevSurfaceMesh,this._surfaceMesh,e)},_createSurfaceMesh:function(){var e=new w.Mesh({geometry:new w.Geometry({dynamic:!0,sortTriangles:!0}),shadowDepthMaterial:new w.Material({shader:new w.Shader(w.Shader.source("ecgl.sm.depth.vertex"),w.Shader.source("ecgl.sm.depth.fragment"))}),culling:!1,renderOrder:10,renderNormal:!0});return e.geometry.createAttribute("barycentric","float",4),e.geometry.createAttribute("prevPosition","float",3),e.geometry.createAttribute("prevNormal","float",3),Object.assign(e.geometry,Lo),e},_initHandler:function(e,t){var A=e.getData(),r=this._surfaceMesh,n=e.coordinateSystem;function i(s,o){for(var l=1/0,u=-1,c=[],f=0;f<s.length;f++){r.geometry.attributes.position.get(s[f],c);var h=GA.dist(o.array,c);h<l&&(l=h,u=s[f])}return u}r.seriesIndex=e.seriesIndex;var a=-1;r.off("mousemove"),r.off("mouseout"),r.on("mousemove",function(s){var o=i(s.triangle,s.point);if(o>=0){var l=[];r.geometry.attributes.position.get(o,l);for(var u=n.pointToData(l),c=1/0,f=-1,h=[],d=0;d<A.count();d++){h[0]=A.get("x",d),h[1]=A.get("y",d),h[2]=A.get("z",d);var g=GA.squaredDistance(h,u);g<c&&(f=d,c=g)}f!==a&&t.dispatchAction({type:"grid3DShowAxisPointer",value:u}),a=f,r.dataIndex=f}else r.dataIndex=-1},this),r.on("mouseout",function(s){a=-1,r.dataIndex=-1,t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_updateSurfaceMesh:function(e,t,A,r){var n=e.geometry,i=t.getData(),a=i.getLayout("points"),s=0;i.each(function(Re){i.hasValue(Re)||s++});var o=s||r,l=n.attributes.position,u=n.attributes.normal,c=n.attributes.texcoord0,f=n.attributes.barycentric,h=n.attributes.color,d=A[0],g=A[1],v=t.get("shading"),p=v!=="color";if(o){var m=(d-1)*(g-1)*4;l.init(m),r&&f.init(m)}else l.value=new Float32Array(a);h.init(n.vertexCount),c.init(n.vertexCount);var B=[0,3,1,1,3,2],_=[[1,1,0,0],[0,1,0,1],[1,0,0,1],[1,0,1,0]],x=n.indices=new(n.vertexCount>65535?Uint32Array:Uint16Array)((d-1)*(g-1)*6),y=function(Re,Pt,at){at[1]=Re*g+Pt,at[0]=Re*g+Pt+1,at[3]=(Re+1)*g+Pt+1,at[2]=(Re+1)*g+Pt},T=!1;if(o){var E=[],F=[],S=0;p?u.init(n.vertexCount):u.value=null;for(var U=[[],[],[]],I=[],Q=[],b=GA.create(),N=function(Re,Pt,at){var Ia=Pt*3;return at[0]=Re[Ia],at[1]=Re[Ia+1],at[2]=Re[Ia+2],at},H=new Float32Array(a.length),V=new Float32Array(a.length/3*4),G=0;G<i.count();G++)if(i.hasValue(G)){var Je=w.parseColor(Ye(i,G)),j=Xe(i,G);j!=null&&(Je[3]*=j),Je[3]<.99&&(T=!0);for(var W=0;W<4;W++)V[G*4+W]=Je[W]}for(var ne=[1e7,1e7,1e7],G=0;G<d-1;G++)for(var ee=0;ee<g-1;ee++){var ie=G*(g-1)+ee,te=ie*4;y(G,ee,E);for(var q=!1,W=0;W<4;W++)N(a,E[W],F),T0(F)&&(q=!0);for(var W=0;W<4;W++)q?l.set(te+W,ne):(N(a,E[W],F),l.set(te+W,F)),r&&f.set(te+W,_[W]);for(var W=0;W<6;W++)x[S++]=B[W]+te;if(p&&!q)for(var W=0;W<2;W++){for(var Be=W*3,ge=0;ge<3;ge++){var Ue=E[B[Be]+ge];N(a,Ue,U[ge])}GA.sub(I,U[0],U[1]),GA.sub(Q,U[1],U[2]),GA.cross(b,I,Q);for(var ge=0;ge<3;ge++){var rt=E[B[Be]+ge]*3;H[rt]=H[rt]+b[0],H[rt+1]=H[rt+1]+b[1],H[rt+2]=H[rt+2]+b[2]}}}if(p)for(var G=0;G<H.length/3;G++)N(H,G,b),GA.normalize(b,b),H[G*3]=b[0],H[G*3+1]=b[1],H[G*3+2]=b[2];for(var Je=[],Ke=[],G=0;G<d-1;G++)for(var ee=0;ee<g-1;ee++){var ie=G*(g-1)+ee,te=ie*4;y(G,ee,E);for(var W=0;W<4;W++){for(var ge=0;ge<4;ge++)Je[ge]=V[E[W]*4+ge];h.set(te+W,Je),p&&(N(H,E[W],b),u.set(te+W,b));var Ue=E[W];Ke[0]=Ue%g/(g-1),Ke[1]=Math.floor(Ue/g)/(d-1),c.set(te+W,Ke)}ie++}}else{for(var Ke=[],G=0;G<i.count();G++){Ke[0]=G%g/(g-1),Ke[1]=Math.floor(G/g)/(d-1);var Je=w.parseColor(Ye(i,G)),j=Xe(i,G);j!=null&&(Je[3]*=j),Je[3]<.99&&(T=!0),h.set(G,Je),c.set(G,Ke)}for(var E=[],Wr=0,G=0;G<d-1;G++)for(var ee=0;ee<g-1;ee++){y(G,ee,E);for(var W=0;W<6;W++)x[Wr++]=E[B[W]]}p?n.generateVertexNormals():u.value=null}e.material.get("normalMap")&&n.generateTangents(),n.updateBoundingBox(),n.dirty(),e.material.transparent=T,e.material.depthMask=!T},_getDataShape:function(e,t){for(var A=-1/0,r=0,n=0,i=!1,a=t?"u":"x",s=e.count(),o=0;o<s;o++){var l=e.get(a,o);l<A&&(n=0,r++),A=l,n++}if((!r||n===1)&&(i=!0),!i)return[r+1,n];for(var u=Math.floor(Math.sqrt(s));u>0;){if(Math.floor(s/u)===s/u)return[u,s/u];u--}return u=Math.floor(Math.sqrt(s)),[u,u]},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function U0(e){e.registerChartView(F0),e.registerSeriesModel(Mf),e.registerLayout(function(t,A){t.eachSeriesByType("surface",function(r){var n=r.coordinateSystem;!n||n.type;var i=r.getData(),a=new Float32Array(3*i.count()),s=[NaN,NaN,NaN];if(n&&n.type==="cartesian3D"){var o=n.dimensions,l=o.map(function(u){return r.coordDimToDataDim(u)[0]});i.each(l,function(u,c,f,h){var d;i.hasValue(h)?d=n.dataToPoint([u,c,f]):d=s,a[h*3]=d[0],a[h*3+1]=d[1],a[h*3+2]=d[2]})}i.setLayout("points",a)})})}et(U0);function cu(e,t){for(var A=[],r=0;r<t.length;r++)A.push(e.dataToPoint(t[r]));return A}var zr=Nt.extend({type:"series.map3D",layoutMode:"box",coordinateSystem:null,visualStyleAccessPath:"itemStyle",optionUpdated:function(e){var t=this.get("coordinateSystem");t==null||t==="geo3D"||(this.get("groundPlane.show")&&(this.option.groundPlane.show=!1),this._geo=null)},getInitialData:function(e){e.data=this.getFilledRegions(e.data,e.map);var t=On(e.data,{coordDimensions:["value"]}),A=new Zt(t,this);A.initData(e.data);var r={};return A.each(function(n){var i=A.getName(n),a=A.getItemModel(n);r[i]=a}),this._regionModelMap=r,A},formatTooltip:function(e){return zn(this,e)},getRegionModel:function(e){var t=this.getData().getName(e);return this._regionModelMap[t]||new Tr(null,this)},getRegionPolygonCoords:function(e){var t=this.coordinateSystem,A=this.getData().getName(e);if(t.transform){var r=t.getRegion(A);return r?r.geometries:[]}else{this._geo||(this._geo=Io.createGeo3D(this));for(var r=this._geo.getRegion(A),n=[],i=0;i<r.geometries.length;i++){var a=r.geometries[i],s=[],o=cu(t,a.exterior);if(s&&s.length)for(var l=0;l<a.interiors.length;l++)s.push(cu(t,s[l]));n.push({interiors:s,exterior:o})}return n}},getFormattedLabel:function(e,t){var A=DA.getFormattedLabel(this,e,t);return A==null&&(A=this.getData().getName(e)),A},defaultOption:{coordinateSystem:"geo3D",data:null}});he(zr.prototype,hf);he(zr.prototype,ma);he(zr.prototype,Or);he(zr.prototype,Pr);he(zr.prototype,Vr);const S0=Ht.extend({type:"map3D",__ecgl__:!0,init:function(e,t){this._geo3DBuilder=new Dr(t),this.groupGL=new w.Node},render:function(e,t,A){var r=e.coordinateSystem;if(!(!r||!r.viewGL)){if(this.groupGL.add(this._geo3DBuilder.rootNode),r.viewGL.add(this.groupGL),r.type==="geo3D"){this._sceneHelper||(this._sceneHelper=new FA,this._sceneHelper.initLight(this.groupGL)),this._sceneHelper.setScene(r.viewGL.scene),this._sceneHelper.updateLight(e),r.viewGL.setPostEffect(e.getModel("postEffect"),A),r.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling"));var n=this._control;n||(n=this._control=new Gn({zr:A.getZr()}),this._control.init());var i=e.getModel("viewControl");n.setViewGL(r.viewGL),n.setFromViewControlModel(i,0),n.off("update"),n.on("update",function(){A.dispatchAction({type:"map3DChangeCamera",alpha:n.getAlpha(),beta:n.getBeta(),distance:n.getDistance(),from:this.uid,map3DId:e.id})}),this._geo3DBuilder.extrudeY=!0}else this._control&&(this._control.dispose(),this._control=null),this._sceneHelper&&(this._sceneHelper.dispose(),this._sceneHelper=null),e.getData().getLayout("geo3D"),this._geo3DBuilder.extrudeY=!1;this._geo3DBuilder.update(e,t,A,0,e.getData().count());var a=r.viewGL.isLinearSpace()?"define":"undefine";this._geo3DBuilder.rootNode.traverse(function(s){s.material&&s.material[a]("fragment","SRGB_DECODE")})}},afterRender:function(e,t,A,r){var n=r.renderer,i=e.coordinateSystem;i&&i.type==="geo3D"&&(this._sceneHelper.updateAmbientCubemap(n,e,A),this._sceneHelper.updateSkybox(n,e,A))},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._geo3DBuilder.dispose()}});function b0(e){wf(e),e.registerChartView(S0),e.registerSeriesModel(zr),e.registerAction({type:"map3DChangeCamera",event:"map3dcamerachanged",update:"series:updateCamera"},function(t,A){A.eachComponent({mainType:"series",subType:"map3D",query:t},function(r){r.setView(t)})})}et(b0);const Q0=Nt.extend({type:"series.scatterGL",dependencies:["grid","polar","geo","singleAxis"],visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,getInitialData:function(){return lg(this)},defaultOption:{coordinateSystem:"cartesian2d",zlevel:10,progressive:1e5,progressiveThreshold:1e5,large:!1,symbol:"circle",symbolSize:10,zoomScale:0,blendMode:"source-over",itemStyle:{opacity:.8},postEffect:{enable:!1,colorCorrection:{exposure:0,brightness:0,contrast:1,saturation:1,enable:!0}}}});function uA(e){this.viewGL=e}uA.prototype.reset=function(e,t){this._updateCamera(t.getWidth(),t.getHeight(),t.getDevicePixelRatio()),this._viewTransform=Kd(),this.updateTransform(e,t)};uA.prototype.updateTransform=function(e,t){var A=e.coordinateSystem;A.getRoamTransform&&(zd(this._viewTransform,A.getRoamTransform()),this._setCameraTransform(this._viewTransform),t.getZr().refresh())};uA.prototype.dataToPoint=function(e,t,A){A=e.dataToPoint(t,null,A);var r=this._viewTransform;r&&Fc(A,A,r)};uA.prototype.removeTransformInPoint=function(e){return this._viewTransform&&Fc(e,e,this._viewTransform),e};uA.prototype.getZoom=function(){if(this._viewTransform){var e=this._viewTransform;return 1/Math.max(Math.sqrt(e[0]*e[0]+e[1]*e[1]),Math.sqrt(e[2]*e[2]+e[3]*e[3]))}return 1};uA.prototype._setCameraTransform=function(e){var t=this.viewGL.camera;t.position.set(e[4],e[5],0),t.scale.set(Math.sqrt(e[0]*e[0]+e[1]*e[1]),Math.sqrt(e[2]*e[2]+e[3]*e[3]),1)};uA.prototype._updateCamera=function(e,t,A){this.viewGL.setViewport(0,0,e,t,A);var r=this.viewGL.camera;r.left=r.top=0,r.bottom=t,r.right=e,r.near=0,r.far=100};const L0=Ht.extend({type:"scatterGL",__ecgl__:!0,init:function(e,t){this.groupGL=new w.Node,this.viewGL=new de("orthographic"),this.viewGL.add(this.groupGL),this._pointsBuilderList=[],this._currentStep=0,this._sizeScale=1,this._glViewHelper=new uA(this.viewGL)},render:function(e,t,A){if(this.groupGL.removeAll(),this._glViewHelper.reset(e,A),!!e.getData().count()){var r=this._pointsBuilderList[0];r||(r=this._pointsBuilderList[0]=new tr(!0,A)),this._pointsBuilderList.length=1,this.groupGL.add(r.rootNode),this._removeTransformInPoints(e.getData().getLayout("points")),r.update(e,t,A),this.viewGL.setPostEffect(e.getModel("postEffect"),A)}},incrementalPrepareRender:function(e,t,A){this.groupGL.removeAll(),this._glViewHelper.reset(e,A),this._currentStep=0,this.viewGL.setPostEffect(e.getModel("postEffect"),A)},incrementalRender:function(e,t,A,r){if(!(e.end<=e.start)){var n=this._pointsBuilderList[this._currentStep];n||(n=new tr(!0,r),this._pointsBuilderList[this._currentStep]=n),this.groupGL.add(n.rootNode),this._removeTransformInPoints(t.getData().getLayout("points")),n.setSizeScale(this._sizeScale),n.update(t,A,r,e.start,e.end),r.getZr().refresh(),this._currentStep++}},updateTransform:function(e,t,A){if(e.coordinateSystem.getRoamTransform){this._glViewHelper.updateTransform(e,A);var r=this._glViewHelper.getZoom(),n=Math.max((e.get("zoomScale")||0)*(r-1)+1,0);this._sizeScale=n,this._pointsBuilderList.forEach(function(i){i.setSizeScale(n)})}},_removeTransformInPoints:function(e){if(e)for(var t=[],A=0;A<e.length;A+=2)t[0]=e[A],t[1]=e[A+1],this._glViewHelper.removeTransformInPoint(t),e[A]=t[0],e[A+1]=t[1]},dispose:function(){this.groupGL.removeAll(),this._pointsBuilderList.forEach(function(e){e.dispose()})},remove:function(){this.groupGL.removeAll()}});function I0(e){e.registerChartView(L0),e.registerSeriesModel(Q0),e.registerLayout({seriesType:"scatterGL",reset:function(t){var A=t.coordinateSystem,r=t.getData(),n;if(A){var i=A.dimensions.map(function(s){return r.mapDimension(s)}).slice(0,2),a=[];i.length===1?n=function(s){for(var o=new Float32Array((s.end-s.start)*2),l=s.start;l<s.end;l++){var u=(l-s.start)*2,c=r.get(i[0],l),f=A.dataToPoint(c);o[u]=f[0],o[u+1]=f[1]}r.setLayout("points",o)}:i.length===2&&(n=function(s){for(var o=new Float32Array((s.end-s.start)*2),l=s.start;l<s.end;l++){var u=(l-s.start)*2,c=r.get(i[0],l),f=r.get(i[1],l);a[0]=c,a[1]=f,a=A.dataToPoint(a),o[u]=a[0],o[u+1]=a[1]}r.setLayout("points",o)})}return{progress:n}}})}et(I0);function D0(e,t,A,r,n){for(var i=new Wd(r),a=0;a<e.length;a++)i.addNode(Ae.firstNotNull(e[a].id,e[a].name,a),a);for(var s=[],o=[],l=0,a=0;a<t.length;a++){var u=t[a],c=u.source,f=u.target;i.addEdge(c,f,l)&&(o.push(u),s.push(Ae.firstNotNull(u.id,c+" > "+f)),l++)}var h,d=On(e,{coordDimensions:["value"]});h=new Zt(d,A),h.initData(e);var g=new Zt(["value"],A);return g.initData(o,s),n&&n(h,g),kd({mainData:h,struct:i,structAttr:"graph",datas:{node:h,edge:g},datasAttr:{node:"data",edge:"edgeData"}}),i.update(),i}var on=Nt.extend({type:"series.graphGL",visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,init:function(e){on.superApply(this,"init",arguments),this.legendDataProvider=function(){return this._categoriesData},this._updateCategoriesData()},mergeOption:function(e){on.superApply(this,"mergeOption",arguments),this._updateCategoriesData()},getFormattedLabel:function(e,t,A,r){var n=DA.getFormattedLabel(this,e,t,A,r);if(n==null){var i=this.getData(),a=i.dimensions[i.dimensions.length-1];n=i.get(a,e)}return n},getInitialData:function(e,t){var A=e.edges||e.links||[],r=e.data||e.nodes||[],n=this;if(r&&A)return D0(r,A,this,!0,i).data;function i(a,s){a.wrapMethod("getItemModel",function(c){const f=n._categoriesModels,h=c.getShallow("category"),d=f[h];return d&&(d.parentModel=c.parentModel,c.parentModel=d),c});const o=t.getModel([]).getModel;function l(c,f){const h=o.call(this,c,f);return h.resolveParentPath=u,h}s.wrapMethod("getItemModel",function(c){return c.resolveParentPath=u,c.getModel=l,c});function u(c){if(c&&(c[0]==="label"||c[1]==="label")){const f=c.slice();return c[0]==="label"?f[0]="edgeLabel":c[1]==="label"&&(f[1]="edgeLabel"),f}return c}}},getGraph:function(){return this.getData().graph},getEdgeData:function(){return this.getGraph().edgeData},getCategoriesData:function(){return this._categoriesData},formatTooltip:function(e,t,A){if(A==="edge"){var r=this.getData(),n=this.getDataParams(e,A),i=r.graph.getEdgeByIndex(e),a=r.getName(i.node1.dataIndex),s=r.getName(i.node2.dataIndex),o=[];return a!=null&&o.push(a),s!=null&&o.push(s),o=Br(o.join(" > ")),n.value&&(o+=" : "+Br(n.value)),o}else return on.superApply(this,"formatTooltip",arguments)},_updateCategoriesData:function(){var e=(this.option.categories||[]).map(function(A){return A.value!=null?A:Object.assign({value:0},A)}),t=new Zt(["value"],this);t.initData(e),this._categoriesData=t,this._categoriesModels=t.mapArray(function(A){return t.getItemModel(A,!0)})},setView:function(e){e.zoom!=null&&(this.option.zoom=e.zoom),e.offset!=null&&(this.option.offset=e.offset)},setNodePosition:function(e){for(var t=0;t<e.length/2;t++){var A=e[t*2],r=e[t*2+1],n=this.getData().getRawDataItem(t);n.x=A,n.y=r}},isAnimationEnabled:function(){return on.superCall(this,"isAnimationEnabled")&&!(this.get("layout")==="force"&&this.get("force.layoutAnimation"))},defaultOption:{zlevel:10,z:2,legendHoverLink:!0,layout:"forceAtlas2",forceAtlas2:{initLayout:null,GPU:!0,steps:1,maxSteps:1e3,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,edgeWeightInfluence:1,edgeWeight:[1,4],nodeWeight:[1,4],preventOverlap:!1,gravityCenter:null},focusNodeAdjacency:!0,focusNodeAdjacencyOn:"mouseover",left:"center",top:"center",symbol:"circle",symbolSize:5,roam:!1,center:null,zoom:1,label:{show:!1,formatter:"{b}",position:"right",distance:5,textStyle:{fontSize:14}},itemStyle:{},lineStyle:{color:"#aaa",width:1,opacity:.5},emphasis:{label:{show:!0}},animation:!1}}),Ne=Le.vec2,fu=[[0,0],[1,1]],Oo=re.extend(function(){return{segmentScale:4,dynamic:!0,useNativeLine:!0,attributes:{position:new re.Attribute("position","float",2,"POSITION"),normal:new re.Attribute("normal","float",2),offset:new re.Attribute("offset","float",1),color:new re.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.offset.init(e),t.normal.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,A,r){var n=Ne.dist(e,t)+Ne.dist(A,t)+Ne.dist(r,A),i=1/(n+1)*this.segmentScale;return i},getCubicCurveVertexCount:function(e,t,A,r){var n=this._getCubicCurveApproxStep(e,t,A,r),i=Math.ceil(1/n);return this.useNativeLine?i*2:i*2+2},getCubicCurveTriangleCount:function(e,t,A,r){var n=this._getCubicCurveApproxStep(e,t,A,r),i=Math.ceil(1/n);return this.useNativeLine?0:i*2},getLineVertexCount:function(){return this.getPolylineVertexCount(fu)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(fu)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var A=typeof e[0]!="number";t=A?e.length:e.length/2}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var A=typeof e[0]!="number";t=A?e.length:e.length/2}return this.useNativeLine?0:(t-1)*2},addCubicCurve:function(e,t,A,r,n,i){i==null&&(i=1);for(var a=e[0],s=e[1],o=t[0],l=t[1],u=A[0],c=A[1],f=r[0],h=r[1],d=this._getCubicCurveApproxStep(e,t,A,r),g=d*d,v=g*d,p=3*d,m=3*g,B=6*g,_=6*v,x=a-o*2+u,y=s-l*2+c,T=(o-u)*3-a+f,E=(l-c)*3-s+h,F=a,S=s,U=(o-a)*p+x*m+T*v,I=(l-s)*p+y*m+E*v,Q=x*B+T*_,b=y*B+E*_,N=T*_,H=E*_,V=0,G=0,j=Math.ceil(1/d),W=new Float32Array((j+1)*3),W=[],ne=0,G=0;G<j+1;G++)W[ne++]=F,W[ne++]=S,F+=U,S+=I,U+=Q,I+=b,Q+=N,b+=H,V+=d,V>1&&(F=U>0?Math.min(F,f):Math.max(F,f),S=I>0?Math.min(S,h):Math.max(S,h));this.addPolyline(W,n,i)},addLine:function(e,t,A,r){this.addPolyline([e,t],A,r)},addPolyline:function(){var e=Ne.create(),t=Ne.create(),A=Ne.create(),r=Ne.create(),n=[],i=[],a=[];return function(s,o,l,u,c){if(s.length){var f=typeof s[0]!="number";if(c==null&&(c=f?s.length:s.length/2),!(c<2)){u==null&&(u=0),l==null&&(l=1),this._itemVertexOffsets.push(this._vertexOffset);for(var h=f?typeof o[0]!="number":o.length/4===c,d=this.attributes.position,g=this.attributes.color,v=this.attributes.offset,p=this.attributes.normal,m=this.indices,B=this._vertexOffset,_,x=0;x<c;x++){if(f)n=s[x+u],h?_=o[x+u]:_=o;else{var y=x*2+u;if(n=n||[],n[0]=s[y],n[1]=s[y+1],h){var T=x*4+u;_=_||[],_[0]=o[T],_[1]=o[T+1],_[2]=o[T+2],_[3]=o[T+3]}else _=o}if(this.useNativeLine)x>1&&(d.copy(B,B-1),g.copy(B,B-1),B++);else{var E;if(x<c-1){if(f)Ne.copy(i,s[x+1]);else{var y=(x+1)*2+u;i=i||[],i[0]=s[y],i[1]=s[y+1]}if(x>0){Ne.sub(e,n,a),Ne.sub(t,i,n),Ne.normalize(e,e),Ne.normalize(t,t),Ne.add(r,e,t),Ne.normalize(r,r);var F=l/2*Math.min(1/Ne.dot(e,r),2);A[0]=-r[1],A[1]=r[0],E=F}else Ne.sub(e,i,n),Ne.normalize(e,e),A[0]=-e[1],A[1]=e[0],E=l/2}else Ne.sub(e,n,a),Ne.normalize(e,e),A[0]=-e[1],A[1]=e[0],E=l/2;p.set(B,A),p.set(B+1,A),v.set(B,E),v.set(B+1,-E),Ne.copy(a,n),d.set(B,n),d.set(B+1,n),g.set(B,_),g.set(B+1,_),B+=2}if(this.useNativeLine)g.set(B,_),d.set(B,n),B++;else if(x>0){var S=this._faceOffset*3,m=this.indices;m[S]=B-4,m[S+1]=B-3,m[S+2]=B-2,m[S+3]=B-3,m[S+4]=B-1,m[S+5]=B-2,this._faceOffset+=2}}this._vertexOffset=B}}}}(),setItemColor:function(e,t){for(var A=this._itemVertexOffsets[e],r=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,n=A;n<r;n++)this.attributes.color.set(n,t);this.dirty("color")}});SA(Oo.prototype,Vn);const M0=`@export ecgl.forceAtlas2.updateNodeRepulsion

#define NODE_COUNT 0

uniform sampler2D positionTex;

uniform vec2 textureSize;
uniform float gravity;
uniform float scaling;
uniform vec2 gravityCenter;

uniform bool strongGravityMode;
uniform bool preventOverlap;

varying vec2 v_Texcoord;

void main() {

 vec4 n0 = texture2D(positionTex, v_Texcoord);

 vec2 force = vec2(0.0);
 for (int i = 0; i < NODE_COUNT; i++) {
 vec2 uv = vec2(
 mod(float(i), textureSize.x) / (textureSize.x - 1.0),
 floor(float(i) / textureSize.x) / (textureSize.y - 1.0)
 );
 vec4 n1 = texture2D(positionTex, uv);

 vec2 dir = n0.xy - n1.xy;
 float d2 = dot(dir, dir);

 if (d2 > 0.0) {
 float factor = 0.0;
 if (preventOverlap) {
 float d = sqrt(d2);
 d = d - n0.w - n1.w;
 if (d > 0.0) {
 factor = scaling * n0.z * n1.z / (d * d);
 }
 else if (d < 0.0) {
 factor = scaling * 100.0 * n0.z * n1.z;
 }
 }
 else {
 factor = scaling * n0.z * n1.z / d2;
 }
 force += dir * factor;
 }
 }

 vec2 dir = gravityCenter - n0.xy;
 float d = 1.0;
 if (!strongGravityMode) {
 d = length(dir);
 }

 force += dir * n0.z * gravity / (d + 1.0);

 gl_FragColor = vec4(force, 0.0, 1.0);
}
@end

@export ecgl.forceAtlas2.updateEdgeAttraction.vertex

attribute vec2 node1;
attribute vec2 node2;
attribute float weight;

uniform sampler2D positionTex;
uniform float edgeWeightInfluence;
uniform bool preventOverlap;
uniform bool linLogMode;

uniform vec2 windowSize: WINDOW_SIZE;

varying vec2 v_Force;

void main() {

 vec4 n0 = texture2D(positionTex, node1);
 vec4 n1 = texture2D(positionTex, node2);

 vec2 dir = n1.xy - n0.xy;
 float d = length(dir);
 float w;
 if (edgeWeightInfluence == 0.0) {
 w = 1.0;
 }
 else if (edgeWeightInfluence == 1.0) {
 w = weight;
 }
 else {
 w = pow(weight, edgeWeightInfluence);
 }
 vec2 offset = vec2(1.0 / windowSize.x, 1.0 / windowSize.y);
 vec2 scale = vec2((windowSize.x - 1.0) / windowSize.x, (windowSize.y - 1.0) / windowSize.y);
 vec2 pos = node1 * scale * 2.0 - 1.0;
 gl_Position = vec4(pos + offset, 0.0, 1.0);
 gl_PointSize = 1.0;

 float factor;
 if (preventOverlap) {
 d = d - n1.w - n0.w;
 }
 if (d <= 0.0) {
 v_Force = vec2(0.0);
 return;
 }

 if (linLogMode) {
 factor = w * log(d) / d;
 }
 else {
 factor = w;
 }
 v_Force = dir * factor;
}
@end

@export ecgl.forceAtlas2.updateEdgeAttraction.fragment

varying vec2 v_Force;

void main() {
 gl_FragColor = vec4(v_Force, 0.0, 0.0);
}
@end

@export ecgl.forceAtlas2.calcWeightedSum.vertex

attribute vec2 node;

varying vec2 v_NodeUv;

void main() {

 v_NodeUv = node;
 gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
 gl_PointSize = 1.0;
}
@end

@export ecgl.forceAtlas2.calcWeightedSum.fragment

varying vec2 v_NodeUv;

uniform sampler2D positionTex;
uniform sampler2D forceTex;
uniform sampler2D forcePrevTex;

void main() {
 vec2 force = texture2D(forceTex, v_NodeUv).rg;
 vec2 forcePrev = texture2D(forcePrevTex, v_NodeUv).rg;

 float mass = texture2D(positionTex, v_NodeUv).z;
 float swing = length(force - forcePrev) * mass;
 float traction = length(force + forcePrev) * 0.5 * mass;

 gl_FragColor = vec4(swing, traction, 0.0, 0.0);
}
@end

@export ecgl.forceAtlas2.calcGlobalSpeed

uniform sampler2D globalSpeedPrevTex;
uniform sampler2D weightedSumTex;
uniform float jitterTolerence;

void main() {
 vec2 weightedSum = texture2D(weightedSumTex, vec2(0.5)).xy;
 float prevGlobalSpeed = texture2D(globalSpeedPrevTex, vec2(0.5)).x;
 float globalSpeed = jitterTolerence * jitterTolerence
 * weightedSum.y / weightedSum.x;
 if (prevGlobalSpeed > 0.0) {
 globalSpeed = min(globalSpeed / prevGlobalSpeed, 1.5) * prevGlobalSpeed;
 }
 gl_FragColor = vec4(globalSpeed, 0.0, 0.0, 1.0);
}
@end

@export ecgl.forceAtlas2.updatePosition

uniform sampler2D forceTex;
uniform sampler2D forcePrevTex;
uniform sampler2D positionTex;
uniform sampler2D globalSpeedTex;

varying vec2 v_Texcoord;

void main() {
 vec2 force = texture2D(forceTex, v_Texcoord).xy;
 vec2 forcePrev = texture2D(forcePrevTex, v_Texcoord).xy;
 vec4 node = texture2D(positionTex, v_Texcoord);

 float globalSpeed = texture2D(globalSpeedTex, vec2(0.5)).r;
 float swing = length(force - forcePrev);
 float speed = 0.1 * globalSpeed / (0.1 + globalSpeed * sqrt(swing));

 float df = length(force);
 if (df > 0.0) {
 speed = min(df * speed, 10.0) / df;

 gl_FragColor = vec4(node.xy + speed * force, node.zw);
 }
 else {
 gl_FragColor = node;
 }
}
@end

@export ecgl.forceAtlas2.edges.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec2 node;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

uniform sampler2D positionTex;

void main()
{
 gl_Position = worldViewProjection * vec4(
 texture2D(positionTex, node).xy, -10.0, 1.0
 );
 v_Color = a_Color;
}
@end

@export ecgl.forceAtlas2.edges.fragment
uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
varying vec4 v_Color;
void main() {
 gl_FragColor = color * v_Color;
}
@end`;w.Shader.import(M0);var os={repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null};function Ve(e){var t={type:w.Texture.FLOAT,minFilter:w.Texture.NEAREST,magFilter:w.Texture.NEAREST};this._positionSourceTex=new w.Texture2D(t),this._positionSourceTex.flipY=!1,this._positionTex=new w.Texture2D(t),this._positionPrevTex=new w.Texture2D(t),this._forceTex=new w.Texture2D(t),this._forcePrevTex=new w.Texture2D(t),this._weightedSumTex=new w.Texture2D(t),this._weightedSumTex.width=this._weightedSumTex.height=1,this._globalSpeedTex=new w.Texture2D(t),this._globalSpeedPrevTex=new w.Texture2D(t),this._globalSpeedTex.width=this._globalSpeedTex.height=1,this._globalSpeedPrevTex.width=this._globalSpeedPrevTex.height=1,this._nodeRepulsionPass=new Me({fragment:w.Shader.source("ecgl.forceAtlas2.updateNodeRepulsion")}),this._positionPass=new Me({fragment:w.Shader.source("ecgl.forceAtlas2.updatePosition")}),this._globalSpeedPass=new Me({fragment:w.Shader.source("ecgl.forceAtlas2.calcGlobalSpeed")}),this._copyPass=new Me({fragment:w.Shader.source("clay.compositor.output")});var A=function(r){r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ONE)};this._edgeForceMesh=new w.Mesh({geometry:new w.Geometry({attributes:{node1:new w.Geometry.Attribute("node1","float",2),node2:new w.Geometry.Attribute("node2","float",2),weight:new w.Geometry.Attribute("weight","float",1)},dynamic:!0,mainAttribute:"node1"}),material:new w.Material({transparent:!0,shader:w.createShader("ecgl.forceAtlas2.updateEdgeAttraction"),blend:A,depthMask:!1,depthText:!1}),mode:w.Mesh.POINTS}),this._weightedSumMesh=new w.Mesh({geometry:new w.Geometry({attributes:{node:new w.Geometry.Attribute("node","float",2)},dynamic:!0,mainAttribute:"node"}),material:new w.Material({transparent:!0,shader:w.createShader("ecgl.forceAtlas2.calcWeightedSum"),blend:A,depthMask:!1,depthText:!1}),mode:w.Mesh.POINTS}),this._framebuffer=new Qe({depthBuffer:!1}),this._dummyCamera=new w.OrthographicCamera({left:-1,right:1,top:1,bottom:-1,near:0,far:100}),this._globalSpeed=0}Ve.prototype.updateOption=function(e){for(var t in os)this[t]=os[t];var A=this._nodes.length;if(A>5e4?this.jitterTolerence=10:A>5e3?this.jitterTolerence=1:this.jitterTolerence=.1,A>100?this.scaling=2:this.scaling=10,e)for(var t in os)e[t]!=null&&(this[t]=e[t]);if(this.repulsionByDegree)for(var r=this._positionSourceTex.pixels,n=0;n<this._nodes.length;n++)r[n*4+2]=(this._nodes[n].degree||0)+1};Ve.prototype._updateGravityCenter=function(e){var t=this._nodes,A=this._edges;if(this.gravityCenter)this._gravityCenter=this.gravityCenter;else{for(var r=[1/0,1/0],n=[-1/0,-1/0],i=0;i<t.length;i++)r[0]=Math.min(t[i].x,r[0]),r[1]=Math.min(t[i].y,r[1]),n[0]=Math.max(t[i].x,n[0]),n[1]=Math.max(t[i].y,n[1]);this._gravityCenter=[(r[0]+n[0])*.5,(r[1]+n[1])*.5]}for(var i=0;i<A.length;i++){var a=A[i].node1,s=A[i].node2;t[a].degree=(t[a].degree||0)+1,t[s].degree=(t[s].degree||0)+1}};Ve.prototype.initData=function(e,t){this._nodes=e,this._edges=t,this._updateGravityCenter();var A=Math.ceil(Math.sqrt(e.length)),r=A,n=new Float32Array(A*r*4);this._resize(A,r);for(var i=0,a=0;a<e.length;a++){var s=e[a];n[i++]=s.x||0,n[i++]=s.y||0,n[i++]=s.mass||1,n[i++]=s.size||1}this._positionSourceTex.pixels=n;var o=this._edgeForceMesh.geometry,l=t.length;o.attributes.node1.init(l*2),o.attributes.node2.init(l*2),o.attributes.weight.init(l*2);for(var u=[],a=0;a<t.length;a++){var c=o.attributes,f=t[a].weight;f==null&&(f=1),c.node1.set(a,this.getNodeUV(t[a].node1,u)),c.node2.set(a,this.getNodeUV(t[a].node2,u)),c.weight.set(a,f),c.node1.set(a+l,this.getNodeUV(t[a].node2,u)),c.node2.set(a+l,this.getNodeUV(t[a].node1,u)),c.weight.set(a+l,f)}var h=this._weightedSumMesh.geometry;h.attributes.node.init(e.length);for(var a=0;a<e.length;a++)h.attributes.node.set(a,this.getNodeUV(a,u));o.dirty(),h.dirty(),this._nodeRepulsionPass.material.define("fragment","NODE_COUNT",e.length),this._nodeRepulsionPass.material.setUniform("textureSize",[A,r]),this._inited=!1,this._frame=0};Ve.prototype.getNodes=function(){return this._nodes};Ve.prototype.getEdges=function(){return this._edges};Ve.prototype.step=function(e){this._inited||(this._initFromSource(e),this._inited=!0),this._frame++,this._framebuffer.attach(this._forceTex),this._framebuffer.bind(e);var t=this._nodeRepulsionPass;t.setUniform("strongGravityMode",this.strongGravityMode),t.setUniform("gravity",this.gravity),t.setUniform("gravityCenter",this._gravityCenter),t.setUniform("scaling",this.scaling),t.setUniform("preventOverlap",this.preventOverlap),t.setUniform("positionTex",this._positionPrevTex),t.render(e);var A=this._edgeForceMesh;A.material.set("linLogMode",this.linLogMode),A.material.set("edgeWeightInfluence",this.edgeWeightInfluence),A.material.set("preventOverlap",this.preventOverlap),A.material.set("positionTex",this._positionPrevTex),e.gl.enable(e.gl.BLEND),e.renderPass([A],this._dummyCamera),this._framebuffer.attach(this._weightedSumTex),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT),e.gl.enable(e.gl.BLEND);var r=this._weightedSumMesh;r.material.set("positionTex",this._positionPrevTex),r.material.set("forceTex",this._forceTex),r.material.set("forcePrevTex",this._forcePrevTex),e.renderPass([r],this._dummyCamera),this._framebuffer.attach(this._globalSpeedTex);var n=this._globalSpeedPass;n.setUniform("globalSpeedPrevTex",this._globalSpeedPrevTex),n.setUniform("weightedSumTex",this._weightedSumTex),n.setUniform("jitterTolerence",this.jitterTolerence),e.gl.disable(e.gl.BLEND),n.render(e);var i=this._positionPass;this._framebuffer.attach(this._positionTex),i.setUniform("globalSpeedTex",this._globalSpeedTex),i.setUniform("positionTex",this._positionPrevTex),i.setUniform("forceTex",this._forceTex),i.setUniform("forcePrevTex",this._forcePrevTex),i.render(e),this._framebuffer.unbind(e),this._swapTexture()};Ve.prototype.update=function(e,t,A){t==null&&(t=1),t=Math.max(t,1);for(var r=0;r<t;r++)this.step(e);A&&A()};Ve.prototype.getNodePositionTexture=function(){return this._inited?this._positionPrevTex:this._positionSourceTex};Ve.prototype.getNodeUV=function(e,t){t=t||[];var A=this._positionTex.width,r=this._positionTex.height;return t[0]=e%A/(A-1),t[1]=Math.floor(e/A)/(r-1)||0,t};Ve.prototype.getNodePosition=function(e,t){var A=this._positionArr,r=this._positionTex.width,n=this._positionTex.height,i=r*n;(!A||A.length!==i*4)&&(A=this._positionArr=new Float32Array(i*4)),this._framebuffer.bind(e),this._framebuffer.attach(this._positionPrevTex),e.gl.readPixels(0,0,r,n,e.gl.RGBA,e.gl.FLOAT,A),this._framebuffer.unbind(e),t||(t=new Float32Array(this._nodes.length*2));for(var a=0;a<this._nodes.length;a++)t[a*2]=A[a*4],t[a*2+1]=A[a*4+1];return t};Ve.prototype.getTextureData=function(e,t){var A=this["_"+t+"Tex"],r=A.width,n=A.height;this._framebuffer.bind(e),this._framebuffer.attach(A);var i=new Float32Array(r*n*4);return e.gl.readPixels(0,0,r,n,e.gl.RGBA,e.gl.FLOAT,i),this._framebuffer.unbind(e),i};Ve.prototype.getTextureSize=function(){return{width:this._positionTex.width,height:this._positionTex.height}};Ve.prototype.isFinished=function(e){return this._frame>e};Ve.prototype._swapTexture=function(){var e=this._positionPrevTex;this._positionPrevTex=this._positionTex,this._positionTex=e;var e=this._forcePrevTex;this._forcePrevTex=this._forceTex,this._forceTex=e;var e=this._globalSpeedPrevTex;this._globalSpeedPrevTex=this._globalSpeedTex,this._globalSpeedTex=e};Ve.prototype._initFromSource=function(e){this._framebuffer.attach(this._positionPrevTex),this._framebuffer.bind(e),this._copyPass.setUniform("texture",this._positionSourceTex),this._copyPass.render(e),e.gl.clearColor(0,0,0,0),this._framebuffer.attach(this._forcePrevTex),e.gl.clear(e.gl.COLOR_BUFFER_BIT),this._framebuffer.attach(this._globalSpeedPrevTex),e.gl.clear(e.gl.COLOR_BUFFER_BIT),this._framebuffer.unbind(e)};Ve.prototype._resize=function(e,t){["_positionSourceTex","_positionTex","_positionPrevTex","_forceTex","_forcePrevTex"].forEach(function(A){this[A].width=e,this[A].height=t,this[A].dirty()},this)};Ve.prototype.dispose=function(e){this._framebuffer.dispose(e),this._copyPass.dispose(e),this._nodeRepulsionPass.dispose(e),this._positionPass.dispose(e),this._globalSpeedPass.dispose(e),this._edgeForceMesh.geometry.dispose(e),this._weightedSumMesh.geometry.dispose(e),this._positionSourceTex.dispose(e),this._positionTex.dispose(e),this._positionPrevTex.dispose(e),this._forceTex.dispose(e),this._forcePrevTex.dispose(e),this._weightedSumTex.dispose(e),this._globalSpeedTex.dispose(e),this._globalSpeedPrevTex.dispose(e)};function R0(){var e={create:function(){return new Float32Array(2)},dist:function(o,l){var u=l[0]-o[0],c=l[1]-o[1];return Math.sqrt(u*u+c*c)},len:function(o){var l=o[0],u=o[1];return Math.sqrt(l*l+u*u)},scaleAndAdd:function(o,l,u,c){return o[0]=l[0]+u[0]*c,o[1]=l[1]+u[1]*c,o},scale:function(o,l,u){return o[0]=l[0]*u,o[1]=l[1]*u,o},add:function(o,l,u){return o[0]=l[0]+u[0],o[1]=l[1]+u[1],o},sub:function(o,l,u){return o[0]=l[0]-u[0],o[1]=l[1]-u[1],o},normalize:function(o,l){var u=l[0],c=l[1],f=u*u+c*c;return f>0&&(f=1/Math.sqrt(f),o[0]=l[0]*f,o[1]=l[1]*f),o},negate:function(o,l){return o[0]=-l[0],o[1]=-l[1],o},copy:function(o,l){return o[0]=l[0],o[1]=l[1],o},set:function(o,l,u){return o[0]=l,o[1]=u,o}};function t(){this.subRegions=[],this.nSubRegions=0,this.node=null,this.mass=0,this.centerOfMass=null,this.bbox=new Float32Array(4),this.size=0}var A=t.prototype;A.beforeUpdate=function(){for(var o=0;o<this.nSubRegions;o++)this.subRegions[o].beforeUpdate();this.mass=0,this.centerOfMass&&(this.centerOfMass[0]=0,this.centerOfMass[1]=0),this.nSubRegions=0,this.node=null},A.afterUpdate=function(){this.subRegions.length=this.nSubRegions;for(var o=0;o<this.nSubRegions;o++)this.subRegions[o].afterUpdate()},A.addNode=function(o){if(this.nSubRegions===0)if(this.node==null){this.node=o;return}else this._addNodeToSubRegion(this.node),this.node=null;this._addNodeToSubRegion(o),this._updateCenterOfMass(o)},A.findSubRegion=function(o,l){for(var u=0;u<this.nSubRegions;u++){var c=this.subRegions[u];if(c.contain(o,l))return c}},A.contain=function(o,l){return this.bbox[0]<=o&&this.bbox[2]>=o&&this.bbox[1]<=l&&this.bbox[3]>=l},A.setBBox=function(o,l,u,c){this.bbox[0]=o,this.bbox[1]=l,this.bbox[2]=u,this.bbox[3]=c,this.size=(u-o+c-l)/2},A._newSubRegion=function(){var o=this.subRegions[this.nSubRegions];return o||(o=new t,this.subRegions[this.nSubRegions]=o),this.nSubRegions++,o},A._addNodeToSubRegion=function(o){var l=this.findSubRegion(o.position[0],o.position[1]),u=this.bbox;if(!l){var c=(u[0]+u[2])/2,f=(u[1]+u[3])/2,h=(u[2]-u[0])/2,d=(u[3]-u[1])/2,g=o.position[0]>=c?1:0,v=o.position[1]>=f?1:0,l=this._newSubRegion();l.setBBox(g*h+u[0],v*d+u[1],(g+1)*h+u[0],(v+1)*d+u[1])}l.addNode(o)},A._updateCenterOfMass=function(o){this.centerOfMass==null&&(this.centerOfMass=new Float32Array(2));var l=this.centerOfMass[0]*this.mass,u=this.centerOfMass[1]*this.mass;l+=o.position[0]*o.mass,u+=o.position[1]*o.mass,this.mass+=o.mass,this.centerOfMass[0]=l/this.mass,this.centerOfMass[1]=u/this.mass};function r(){this.position=new Float32Array(2),this.force=e.create(),this.forcePrev=e.create(),this.mass=1,this.inDegree=0,this.outDegree=0}function n(o,l){this.source=o,this.target=l,this.weight=1}function i(){this.autoSettings=!0,this.barnesHutOptimize=!0,this.barnesHutTheta=1.5,this.repulsionByDegree=!0,this.linLogMode=!1,this.strongGravityMode=!1,this.gravity=1,this.scaling=1,this.edgeWeightInfluence=1,this.jitterTolerence=.1,this.preventOverlap=!1,this.dissuadeHubs=!1,this.rootRegion=new t,this.rootRegion.centerOfMass=e.create(),this.nodes=[],this.edges=[],this.bbox=new Float32Array(4),this.gravityCenter=null,this._massArr=null,this._swingingArr=null,this._sizeArr=null,this._globalSpeed=0}var a=i.prototype;a.initNodes=function(o,l,u){var c=l.length;this.nodes.length=0;for(var f=typeof u<"u",h=0;h<c;h++){var d=new r;d.position[0]=o[h*2],d.position[1]=o[h*2+1],d.mass=l[h],f&&(d.size=u[h]),this.nodes.push(d)}this._massArr=l,this._swingingArr=new Float32Array(c),f&&(this._sizeArr=u)},a.initEdges=function(o,l){var u=o.length/2;this.edges.length=0;for(var c=0;c<u;c++){var f=o[c*2],h=o[c*2+1],d=this.nodes[f],g=this.nodes[h];if(!d||!g){console.error("Node not exists, try initNodes before initEdges");return}d.outDegree++,g.inDegree++;var v=new n(d,g);l&&(v.weight=l[c]),this.edges.push(v)}},a.updateSettings=function(){if(this.repulsionByDegree)for(var o=0;o<this.nodes.length;o++){var l=this.nodes[o];l.mass=l.inDegree+l.outDegree+1}else for(var o=0;o<this.nodes.length;o++){var l=this.nodes[o];l.mass=this._massArr[o]}},a.update=function(){var o=this.nodes.length;if(this.updateSettings(),this.updateBBox(),this.barnesHutOptimize){this.rootRegion.setBBox(this.bbox[0],this.bbox[1],this.bbox[2],this.bbox[3]),this.rootRegion.beforeUpdate();for(var l=0;l<o;l++)this.rootRegion.addNode(this.nodes[l]);this.rootRegion.afterUpdate()}for(var l=0;l<o;l++){var u=this.nodes[l];e.copy(u.forcePrev,u.force),e.set(u.force,0,0)}for(var l=0;l<o;l++){var c=this.nodes[l];if(this.barnesHutOptimize)this.applyRegionToNodeRepulsion(this.rootRegion,c);else for(var f=l+1;f<o;f++){var h=this.nodes[f];this.applyNodeToNodeRepulsion(c,h,!1)}this.gravity>0&&(this.strongGravityMode?this.applyNodeStrongGravity(c):this.applyNodeGravity(c))}for(var l=0;l<this.edges.length;l++)this.applyEdgeAttraction(this.edges[l]);for(var d=0,g=0,v=e.create(),l=0;l<o;l++){var u=this.nodes[l],p=e.dist(u.force,u.forcePrev);d+=p*u.mass,e.add(v,u.force,u.forcePrev);var m=e.len(v)*.5;g+=m*u.mass,this._swingingArr[l]=p}var B=this.jitterTolerence*this.jitterTolerence*g/d;this._globalSpeed>0&&(B=Math.min(B/this._globalSpeed,1.5)*this._globalSpeed),this._globalSpeed=B;for(var l=0;l<o;l++){var u=this.nodes[l],p=this._swingingArr[l],_=.1*B/(1+B*Math.sqrt(p)),x=e.len(u.force);x>0&&(_=Math.min(x*_,10)/x,e.scaleAndAdd(u.position,u.position,u.force,_))}},a.applyRegionToNodeRepulsion=function(){var o=e.create();return function(u,c){if(u.node)this.applyNodeToNodeRepulsion(u.node,c,!0);else{e.sub(o,c.position,u.centerOfMass);var f=o[0]*o[0]+o[1]*o[1];if(f>this.barnesHutTheta*u.size*u.size){var h=this.scaling*c.mass*u.mass/f;e.scaleAndAdd(c.force,c.force,o,h)}else for(var d=0;d<u.nSubRegions;d++)this.applyRegionToNodeRepulsion(u.subRegions[d],c)}}}(),a.applyNodeToNodeRepulsion=function(){var o=e.create();return function(u,c,f){if(u!=c){e.sub(o,u.position,c.position);var h=o[0]*o[0]+o[1]*o[1];if(h!==0){var d;if(this.preventOverlap){var g=Math.sqrt(h);if(g=g-u.size-c.size,g>0)d=this.scaling*u.mass*c.mass/(g*g);else if(g<0)d=this.scaling*100*u.mass*c.mass;else return}else d=this.scaling*u.mass*c.mass/h;e.scaleAndAdd(u.force,u.force,o,d),e.scaleAndAdd(c.force,c.force,o,-d)}}}}(),a.applyEdgeAttraction=function(){var o=e.create();return function(u){var c=u.source,f=u.target;e.sub(o,c.position,f.position);var h=e.len(o),d;this.edgeWeightInfluence===0?d=1:this.edgeWeightInfluence===1?d=u.weight:d=Math.pow(u.weight,this.edgeWeightInfluence);var g;this.preventOverlap&&(h=h-c.size-f.size,h<=0)||(this.linLogMode?g=-d*Math.log(h+1)/(h+1):g=-d,e.scaleAndAdd(c.force,c.force,o,g),e.scaleAndAdd(f.force,f.force,o,-g))}}(),a.applyNodeGravity=function(){var o=e.create();return function(l){e.sub(o,this.gravityCenter,l.position);var u=e.len(o);e.scaleAndAdd(l.force,l.force,o,this.gravity*l.mass/(u+1))}}(),a.applyNodeStrongGravity=function(){var o=e.create();return function(l){e.sub(o,this.gravityCenter,l.position),e.scaleAndAdd(l.force,l.force,o,this.gravity*l.mass)}}(),a.updateBBox=function(){for(var o=1/0,l=1/0,u=-1/0,c=-1/0,f=0;f<this.nodes.length;f++){var h=this.nodes[f].position;o=Math.min(o,h[0]),l=Math.min(l,h[1]),u=Math.max(u,h[0]),c=Math.max(c,h[1])}this.bbox[0]=o,this.bbox[1]=l,this.bbox[2]=u,this.bbox[3]=c},a.getGlobalSpeed=function(){return this._globalSpeed};var s=null;self.onmessage=function(o){switch(o.data.cmd){case"init":s=new i,s.initNodes(o.data.nodesPosition,o.data.nodesMass,o.data.nodesSize),s.initEdges(o.data.edges,o.data.edgesWeight);break;case"updateConfig":if(s)for(var l in o.data.config)s[l]=o.data.config[l];break;case"update":var u=o.data.steps;if(s){for(var c=0;c<u;c++)s.update();for(var f=s.nodes.length,h=new Float32Array(f*2),c=0;c<f;c++){var d=s.nodes[c];h[c*2]=d.position[0],h[c*2+1]=d.position[1]}self.postMessage({buffer:h.buffer,globalSpeed:s.getGlobalSpeed()},[h.buffer])}else{var g=new Float32Array;self.postMessage({buffer:g.buffer,globalSpeed:s.getGlobalSpeed()},[g.buffer])}break}}}var ln=R0.toString();ln=ln.slice(ln.indexOf("{")+1,ln.lastIndexOf("}"));var mn={barnesHutOptimize:!0,barnesHutTheta:1.5,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null},Bt=function(e){for(var t in mn)this[t]=mn[t];if(e)for(var t in e)this[t]=e[t];this._nodes=[],this._edges=[],this._disposed=!1,this._positionTex=new $({type:P.FLOAT,flipY:!1,minFilter:P.NEAREST,magFilter:P.NEAREST})};Bt.prototype.initData=function(e,t){var A=new Blob([ln]),r=window.URL.createObjectURL(A);this._worker=new Worker(r),this._worker.onmessage=this._$onupdate.bind(this),this._nodes=e,this._edges=t,this._frame=0;for(var n=e.length,i=t.length,a=new Float32Array(n*2),s=new Float32Array(n),o=new Float32Array(n),l=new Float32Array(i*2),u=new Float32Array(i),c=0;c<e.length;c++){var f=e[c];a[c*2]=f.x,a[c*2+1]=f.y,s[c]=f.mass==null?1:f.mass,o[c]=f.size==null?1:f.size}for(var c=0;c<t.length;c++){var h=t[c],d=h.node1,g=h.node2;l[c*2]=d,l[c*2+1]=g,u[c]=h.weight==null?1:h.weight}var v=Math.ceil(Math.sqrt(e.length)),p=v,m=new Float32Array(v*p*4),B=this._positionTex;B.width=v,B.height=p,B.pixels=m,this._worker.postMessage({cmd:"init",nodesPosition:a,nodesMass:s,nodesSize:o,edges:l,edgesWeight:u}),this._globalSpeed=1/0};Bt.prototype.updateOption=function(e){var t={};for(var A in mn)t[A]=mn[A];var r=this._nodes,n=this._edges,i=r.length;if(i>5e4?t.jitterTolerence=10:i>5e3?t.jitterTolerence=1:t.jitterTolerence=.1,i>100?t.scaling=2:t.scaling=10,i>1e3?t.barnesHutOptimize=!0:t.barnesHutOptimize=!1,e)for(var A in mn)e[A]!=null&&(t[A]=e[A]);if(!t.gravityCenter){for(var a=[1/0,1/0],s=[-1/0,-1/0],o=0;o<r.length;o++)a[0]=Math.min(r[o].x,a[0]),a[1]=Math.min(r[o].y,a[1]),s[0]=Math.max(r[o].x,s[0]),s[1]=Math.max(r[o].y,s[1]);t.gravityCenter=[(a[0]+s[0])*.5,(a[1]+s[1])*.5]}for(var o=0;o<n.length;o++){var l=n[o].node1,u=n[o].node2;r[l].degree=(r[l].degree||0)+1,r[u].degree=(r[u].degree||0)+1}this._worker&&this._worker.postMessage({cmd:"updateConfig",config:t})};Bt.prototype.update=function(e,t,A){t==null&&(t=1),t=Math.max(t,1),this._frame+=t,this._onupdate=A,this._worker&&this._worker.postMessage({cmd:"update",steps:Math.round(t)})};Bt.prototype._$onupdate=function(e){if(!this._disposed){var t=new Float32Array(e.data.buffer);this._globalSpeed=e.data.globalSpeed,this._positionArr=t,this._updateTexture(t),this._onupdate&&this._onupdate()}};Bt.prototype.getNodePositionTexture=function(){return this._positionTex};Bt.prototype.getNodeUV=function(e,t){t=t||[];var A=this._positionTex.width,r=this._positionTex.height;return t[0]=e%A/(A-1),t[1]=Math.floor(e/A)/(r-1),t};Bt.prototype.getNodes=function(){return this._nodes};Bt.prototype.getEdges=function(){return this._edges};Bt.prototype.isFinished=function(e){return this._frame>e};Bt.prototype.getNodePosition=function(e,t){if(t||(t=new Float32Array(this._nodes.length*2)),this._positionArr)for(var A=0;A<this._positionArr.length;A++)t[A]=this._positionArr[A];return t};Bt.prototype._updateTexture=function(e){for(var t=this._positionTex.pixels,A=0,r=0;r<e.length;)t[A++]=e[r++],t[A++]=e[r++],t[A++]=1,t[A++]=1;this._positionTex.dirty()};Bt.prototype.dispose=function(e){this._disposed=!0,this._worker=null};var N0=tt.extend(function(){return{zr:null,viewGL:null,minZoom:.2,maxZoom:5,_needsUpdate:!1,_dx:0,_dy:0,_zoom:1}},function(){this._mouseDownHandler=this._mouseDownHandler.bind(this),this._mouseWheelHandler=this._mouseWheelHandler.bind(this),this._mouseMoveHandler=this._mouseMoveHandler.bind(this),this._mouseUpHandler=this._mouseUpHandler.bind(this),this._update=this._update.bind(this)},{init:function(){var e=this.zr;e.on("mousedown",this._mouseDownHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("globalout",this._mouseUpHandler),e.animation.on("frame",this._update)},setTarget:function(e){this._target=e},setZoom:function(e){this._zoom=Math.max(Math.min(e,this.maxZoom),this.minZoom),this._needsUpdate=!0},setOffset:function(e){this._dx=e[0],this._dy=e[1],this._needsUpdate=!0},getZoom:function(){return this._zoom},getOffset:function(){return[this._dx,this._dy]},_update:function(){if(this._target&&this._needsUpdate){var e=this._target,t=this._zoom;e.position.x=this._dx,e.position.y=this._dy,e.scale.set(t,t,t),this.zr.refresh(),this._needsUpdate=!1,this.trigger("update")}},_mouseDownHandler:function(e){if(!e.target){var t=e.offsetX,A=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(t,A))){this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler);var r=this._convertPos(t,A);this._x=r.x,this._y=r.y}}},_convertPos:function(e,t){var A=this.viewGL.camera,r=this.viewGL.viewport;return{x:(e-r.x)/r.width*(A.right-A.left)+A.left,y:(t-r.y)/r.height*(A.bottom-A.top)+A.top}},_mouseMoveHandler:function(e){var t=this._convertPos(e.offsetX,e.offsetY);this._dx+=t.x-this._x,this._dy+=t.y-this._y,this._x=t.x,this._y=t.y,this._needsUpdate=!0},_mouseUpHandler:function(e){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_mouseWheelHandler:function(e){e=e.event;var t=e.wheelDelta||-e.detail;if(t!==0){var A=e.offsetX,r=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(A,r))){var n=t>0?1.1:.9,i=Math.max(Math.min(this._zoom*n,this.maxZoom),this.minZoom);n=i/this._zoom;var a=this._convertPos(A,r),s=(a.x-this._dx)*(n-1),o=(a.y-this._dy)*(n-1);this._dx-=s,this._dy-=o,this._zoom=i,this._needsUpdate=!0}}},dispose:function(){var e=this.zr;e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("globalout",this._mouseUpHandler),e.animation.off("frame",this._update)}});const H0=`@export ecgl.lines2D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec2 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

#ifdef POSITIONTEXTURE_ENABLED
uniform sampler2D positionTexture;
#endif

void main()
{
 gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);

 v_Color = a_Color;
}

@end

@export ecgl.lines2D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

void main()
{
 gl_FragColor = color * v_Color;
}
@end


@export ecgl.meshLines2D.vertex

attribute vec2 position: POSITION;
attribute vec2 normal;
attribute float offset;
attribute vec4 a_Color : COLOR;

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec4 v_Color;
varying float v_Miter;

void main()
{
 vec4 p2 = worldViewProjection * vec4(position + normal, -10.0, 1.0);
 gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);

 p2.xy /= p2.w;
 gl_Position.xy /= gl_Position.w;

 vec2 N = normalize(p2.xy - gl_Position.xy);
 gl_Position.xy += N * offset / viewport.zw * 2.0;

 gl_Position.xy *= gl_Position.w;

 v_Color = a_Color;
}
@end


@export ecgl.meshLines2D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;
varying float v_Miter;

void main()
{
 gl_FragColor = color * v_Color;
}

@end`;var ai=Le.vec2;w.Shader.import(H0);var O0=1;const P0=Ht.extend({type:"graphGL",__ecgl__:!0,init:function(e,t){this.groupGL=new w.Node,this.viewGL=new de("orthographic"),this.viewGL.camera.left=this.viewGL.camera.right=0,this.viewGL.add(this.groupGL),this._pointsBuilder=new tr(!0,t),this._forceEdgesMesh=new w.Mesh({material:new w.Material({shader:w.createShader("ecgl.forceAtlas2.edges"),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new w.Geometry({attributes:{node:new w.Geometry.Attribute("node","float",2),color:new w.Geometry.Attribute("color","float",4,"COLOR")},dynamic:!0,mainAttribute:"node"}),renderOrder:-1,mode:w.Mesh.LINES}),this._edgesMesh=new w.Mesh({material:new w.Material({shader:w.createShader("ecgl.meshLines2D"),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new Oo({useNativeLine:!1,dynamic:!0}),renderOrder:-1,culling:!1}),this._layoutId=0,this._control=new N0({zr:t.getZr(),viewGL:this.viewGL}),this._control.setTarget(this.groupGL),this._control.init(),this._clickHandler=this._clickHandler.bind(this)},render:function(e,t,A){this.groupGL.add(this._pointsBuilder.rootNode),this._model=e,this._api=A,this._initLayout(e,t,A),this._pointsBuilder.update(e,t,A),this._forceLayoutInstance instanceof Ve||this.groupGL.remove(this._forceEdgesMesh),this._updateCamera(e,A),this._control.off("update"),this._control.on("update",function(){A.dispatchAction({type:"graphGLRoam",seriesId:e.id,zoom:this._control.getZoom(),offset:this._control.getOffset()}),this._pointsBuilder.updateView(this.viewGL.camera)},this),this._control.setZoom(Ae.firstNotNull(e.get("zoom"),1)),this._control.setOffset(e.get("offset")||[0,0]);var r=this._pointsBuilder.getPointsMesh();if(r.off("mousemove",this._mousemoveHandler),r.off("mouseout",this._mouseOutHandler,this),A.getZr().off("click",this._clickHandler),this._pointsBuilder.highlightOnMouseover=!0,e.get("focusNodeAdjacency")){var n=e.get("focusNodeAdjacencyOn");n==="click"?A.getZr().on("click",this._clickHandler):n==="mouseover"&&(r.on("mousemove",this._mousemoveHandler,this),r.on("mouseout",this._mouseOutHandler,this),this._pointsBuilder.highlightOnMouseover=!1)}this._lastMouseOverDataIndex=-1},_clickHandler:function(e){if(!this._layouting){var t=this._pointsBuilder.getPointsMesh().dataIndex;t>=0?this._api.dispatchAction({type:"graphGLFocusNodeAdjacency",seriesId:this._model.id,dataIndex:t}):this._api.dispatchAction({type:"graphGLUnfocusNodeAdjacency",seriesId:this._model.id})}},_mousemoveHandler:function(e){if(!this._layouting){var t=this._pointsBuilder.getPointsMesh().dataIndex;t>=0?t!==this._lastMouseOverDataIndex&&this._api.dispatchAction({type:"graphGLFocusNodeAdjacency",seriesId:this._model.id,dataIndex:t}):this._mouseOutHandler(e),this._lastMouseOverDataIndex=t}},_mouseOutHandler:function(e){this._layouting||(this._api.dispatchAction({type:"graphGLUnfocusNodeAdjacency",seriesId:this._model.id}),this._lastMouseOverDataIndex=-1)},_updateForceEdgesGeometry:function(e,t){var A=this._forceEdgesMesh.geometry,r=t.getEdgeData(),n=0,i=this._forceLayoutInstance,a=r.count()*2;A.attributes.node.init(a),A.attributes.color.init(a),r.each(function(s){var o=e[s];A.attributes.node.set(n,i.getNodeUV(o.node1)),A.attributes.node.set(n+1,i.getNodeUV(o.node2));var l=Ye(r,o.dataIndex),u=w.parseColor(l);u[3]*=Ae.firstNotNull(Xe(r,o.dataIndex),1),A.attributes.color.set(n,u),A.attributes.color.set(n+1,u),n+=2}),A.dirty()},_updateMeshLinesGeometry:function(){var t=this._model.getEdgeData(),e=this._edgesMesh.geometry,t=this._model.getEdgeData(),A=this._model.getData().getLayout("points");e.resetOffset(),e.setVertexCount(t.count()*e.getLineVertexCount()),e.setTriangleCount(t.count()*e.getLineTriangleCount());var r=[],n=[],i=["lineStyle","width"];this._originalEdgeColors=new Float32Array(t.count()*4),this._edgeIndicesMap=new Float32Array(t.count()),t.each(function(a){var s=t.graph.getEdgeByIndex(a),o=s.node1.dataIndex*2,l=s.node2.dataIndex*2;r[0]=A[o],r[1]=A[o+1],n[0]=A[l],n[1]=A[l+1];var u=Ye(t,s.dataIndex),c=w.parseColor(u);c[3]*=Ae.firstNotNull(Xe(t,s.dataIndex),1);var f=t.getItemModel(s.dataIndex),h=Ae.firstNotNull(f.get(i),1)*this._api.getDevicePixelRatio();e.addLine(r,n,c,h);for(var d=0;d<4;d++)this._originalEdgeColors[s.dataIndex*4+d]=c[d];this._edgeIndicesMap[s.dataIndex]=a},this),e.dirty()},_updateForceNodesGeometry:function(e){for(var t=this._pointsBuilder.getPointsMesh(),A=[],r=0;r<e.count();r++)this._forceLayoutInstance.getNodeUV(r,A),t.geometry.attributes.position.set(r,A);t.geometry.dirty("position")},_initLayout:function(e,t,A){var r=e.get("layout"),n=e.getGraph(),i=e.getBoxLayoutParams(),a=ha(i,{width:A.getWidth(),height:A.getHeight()});r==="force"&&(r="forceAtlas2"),this.stopLayout(e,t,A,{beforeLayout:!0});var s=e.getData(),o=e.getData();if(r==="forceAtlas2"){var l=e.getModel("forceAtlas2"),u=this._forceLayoutInstance,c=[],f=[],h=s.getDataExtent("value"),d=o.getDataExtent("value"),g=Ae.firstNotNull(l.get("edgeWeight"),1),v=Ae.firstNotNull(l.get("nodeWeight"),1);typeof g=="number"&&(g=[g,g]),typeof v=="number"&&(v=[v,v]);var p=0,m={},B=new Float32Array(s.count()*2);if(n.eachNode(function(x){var y=x.dataIndex,T=s.get("value",y),E,F;if(s.hasItemOption){var S=s.getItemModel(y);E=S.get("x"),F=S.get("y")}E==null&&(E=a.x+Math.random()*a.width,F=a.y+Math.random()*a.height),B[p*2]=E,B[p*2+1]=F,m[x.id]=p++;var U=qo(T,h,v);isNaN(U)&&(isNaN(v[0])?U=1:U=v[0]),c.push({x:E,y:F,mass:U,size:s.getItemVisual(y,"symbolSize")})}),s.setLayout("points",B),n.eachEdge(function(x){var y=x.dataIndex,T=s.get("value",y),E=qo(T,d,g);isNaN(E)&&(isNaN(g[0])?E=1:E=g[0]),f.push({node1:m[x.node1.id],node2:m[x.node2.id],weight:E,dataIndex:y})}),!u){var _=l.get("GPU");this._forceLayoutInstance&&(_&&!(this._forceLayoutInstance instanceof Ve)||!_&&!(this._forceLayoutInstance instanceof Bt))&&(this._forceLayoutInstanceToDispose=this._forceLayoutInstance),u=this._forceLayoutInstance=_?new Ve:new Bt}u.initData(c,f),u.updateOption(l.option),this._updateForceEdgesGeometry(u.getEdges(),e),this._updatePositionTexture(),A.dispatchAction({type:"graphGLStartLayout",from:this.uid})}else{var B=new Float32Array(s.count()*2),p=0;n.eachNode(function(T){var E=T.dataIndex,F,S;if(s.hasItemOption){var U=s.getItemModel(E);F=U.get("x"),S=U.get("y")}B[p++]=F,B[p++]=S}),s.setLayout("points",B),this._updateAfterLayout(e,t,A)}},_updatePositionTexture:function(){var e=this._forceLayoutInstance.getNodePositionTexture();this._pointsBuilder.setPositionTexture(e),this._forceEdgesMesh.material.set("positionTex",e)},startLayout:function(e,t,i,r){if(!(r&&r.from!=null&&r.from!==this.uid)){var n=this.viewGL,i=this._api,a=this._forceLayoutInstance,s=this._model.getData(),o=this._model.getModel("forceAtlas2");if(a&&(this.groupGL.remove(this._edgesMesh),this.groupGL.add(this._forceEdgesMesh),!!this._forceLayoutInstance)){this._updateForceNodesGeometry(e.getData()),this._pointsBuilder.hideLabels();var l=this,u=this._layoutId=O0++,c=o.getShallow("maxSteps"),f=o.getShallow("steps"),h=0,d=Math.max(f*2,20),g=function(v){if(v===l._layoutId){if(a.isFinished(c)){i.dispatchAction({type:"graphGLStopLayout",from:l.uid}),i.dispatchAction({type:"graphGLFinishLayout",points:s.getLayout("points"),from:l.uid});return}a.update(n.layer.renderer,f,function(){l._updatePositionTexture(),h+=f,h>=d&&(l._syncNodePosition(e),h=0),i.getZr().refresh(),Qs(function(){g(v)})})}};Qs(function(){l._forceLayoutInstanceToDispose&&(l._forceLayoutInstanceToDispose.dispose(n.layer.renderer),l._forceLayoutInstanceToDispose=null),g(u)}),this._layouting=!0}}},stopLayout:function(e,t,A,r){r&&r.from!=null&&r.from!==this.uid||(this._layoutId=0,this.groupGL.remove(this._forceEdgesMesh),this.groupGL.add(this._edgesMesh),this._forceLayoutInstance&&this.viewGL.layer&&(r&&r.beforeLayout||(this._syncNodePosition(e),this._updateAfterLayout(e,t,A)),this._api.getZr().refresh(),this._layouting=!1))},_syncNodePosition:function(e){var t=this._forceLayoutInstance.getNodePosition(this.viewGL.layer.renderer);e.getData().setLayout("points",t),e.setNodePosition(t)},_updateAfterLayout:function(e,t,A){this._updateMeshLinesGeometry(),this._pointsBuilder.removePositionTexture(),this._pointsBuilder.updateLayout(e,t,A),this._pointsBuilder.updateView(this.viewGL.camera),this._pointsBuilder.updateLabels(),this._pointsBuilder.showLabels()},focusNodeAdjacency:function(e,t,A,r){var n=this._model.getData();this._downplayAll();var i=r.dataIndex,a=n.graph,s=[],o=a.getNodeByIndex(i);s.push(o),o.edges.forEach(function(u){u.dataIndex<0||(u.node1!==o&&s.push(u.node1),u.node2!==o&&s.push(u.node2))},this),this._pointsBuilder.fadeOutAll(.05),this._fadeOutEdgesAll(.05),s.forEach(function(u){this._pointsBuilder.highlight(n,u.dataIndex)},this),this._pointsBuilder.updateLabels(s.map(function(u){return u.dataIndex}));var l=[];o.edges.forEach(function(u){u.dataIndex>=0&&(this._highlightEdge(u.dataIndex),l.push(u))},this),this._focusNodes=s,this._focusEdges=l},unfocusNodeAdjacency:function(e,t,A,r){this._downplayAll(),this._pointsBuilder.fadeInAll(),this._fadeInEdgesAll(),this._pointsBuilder.updateLabels()},_highlightEdge:function(e){var t=this._model.getEdgeData().getItemModel(e),A=w.parseColor(t.get("emphasis.lineStyle.color")||t.get("lineStyle.color")),r=Ae.firstNotNull(t.get("emphasis.lineStyle.opacity"),t.get("lineStyle.opacity"),1);A[3]*=r,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],A)},_downplayAll:function(){this._focusNodes&&this._focusNodes.forEach(function(e){this._pointsBuilder.downplay(this._model.getData(),e.dataIndex)},this),this._focusEdges&&this._focusEdges.forEach(function(e){this._downplayEdge(e.dataIndex)},this)},_downplayEdge:function(e){var t=this._getColor(e,[]);this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],t)},_setEdgeFade:function(){var e=[];return function(t,A){this._getColor(t,e),e[3]*=A,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[t],e)}}(),_getColor:function(e,t){for(var A=0;A<4;A++)t[A]=this._originalEdgeColors[e*4+A];return t},_fadeOutEdgesAll:function(e){var t=this._model.getData().graph;t.eachEdge(function(A){this._setEdgeFade(A.dataIndex,e)},this)},_fadeInEdgesAll:function(){this._fadeOutEdgesAll(1)},_updateCamera:function(e,t){this.viewGL.setViewport(0,0,t.getWidth(),t.getHeight(),t.getDevicePixelRatio());for(var A=this.viewGL.camera,r=e.getData(),n=r.getLayout("points"),i=ai.create(1/0,1/0),a=ai.create(-1/0,-1/0),s=[],o=0;o<n.length;)s[0]=n[o++],s[1]=n[o++],ai.min(i,i,s),ai.max(a,a,s);var l=(a[1]+i[1])/2,u=(a[0]+i[0])/2;if(!(u>A.left&&u<A.right&&l<A.bottom&&l>A.top)){var c=Math.max(a[0]-i[0],10),f=c/t.getWidth()*t.getHeight();c*=1.4,f*=1.4,i[0]-=c*.2,A.left=i[0],A.top=l-f/2,A.bottom=l+f/2,A.right=c+i[0],A.near=0,A.far=100}},dispose:function(){var e=this.viewGL.layer.renderer;this._forceLayoutInstance&&this._forceLayoutInstance.dispose(e),this.groupGL.removeAll(),this._layoutId=-1,this._pointsBuilder.dispose()},remove:function(){this.groupGL.removeAll(),this._control.dispose()}});function si(e){return e instanceof Array||(e=[e,e]),e}function G0(e){e.registerChartView(P0),e.registerSeriesModel(on),e.registerVisual(function(A){const r={};A.eachSeriesByType("graphGL",function(n){var i=n.getCategoriesData(),a=n.getData(),s={};i.each(function(o){var l=i.getName(o);s["ec-"+l]=o;var u=i.getItemModel(o),c=u.getModel("itemStyle").getItemStyle();c.fill||(c.fill=n.getColorFromPalette(l,r)),i.setItemVisual(o,"style",c);var f=["symbol","symbolSize","symbolKeepAspect"];for(let d=0;d<f.length;d++){var h=u.getShallow(f[d],!0);h!=null&&i.setItemVisual(o,f[d],h)}}),i.count()&&a.each(function(o){var l=a.getItemModel(o);let u=l.getShallow("category");if(u!=null){typeof u=="string"&&(u=s["ec-"+u]);var c=i.getItemVisual(u,"style"),f=a.ensureUniqueItemVisual(o,"style");$o(f,c);var h=["symbol","symbolSize","symbolKeepAspect"];for(let d=0;d<h.length;d++)a.setItemVisual(o,h[d],i.getItemVisual(u,h[d]))}})})}),e.registerVisual(function(A){A.eachSeriesByType("graphGL",function(r){var n=r.getGraph(),i=r.getEdgeData(),a=si(r.get("edgeSymbol")),s=si(r.get("edgeSymbolSize"));i.setVisual("drawType","stroke"),i.setVisual("fromSymbol",a&&a[0]),i.setVisual("toSymbol",a&&a[1]),i.setVisual("fromSymbolSize",s&&s[0]),i.setVisual("toSymbolSize",s&&s[1]),i.setVisual("style",r.getModel("lineStyle").getLineStyle()),i.each(function(o){var l=i.getItemModel(o),u=n.getEdgeByIndex(o),c=si(l.getShallow("symbol",!0)),f=si(l.getShallow("symbolSize",!0)),h=l.getModel("lineStyle").getLineStyle(),d=i.ensureUniqueItemVisual(o,"style");switch($o(d,h),d.stroke){case"source":{var g=u.node1.getVisual("style");d.stroke=g&&g.fill;break}case"target":{var g=u.node2.getVisual("style");d.stroke=g&&g.fill;break}}c[0]&&u.setVisual("fromSymbol",c[0]),c[1]&&u.setVisual("toSymbol",c[1]),f[0]&&u.setVisual("fromSymbolSize",f[0]),f[1]&&u.setVisual("toSymbolSize",f[1])})})}),e.registerAction({type:"graphGLRoam",event:"graphglroam",update:"series.graphGL:roam"},function(A,r){r.eachComponent({mainType:"series",query:A},function(n){n.setView(A)})});function t(){}e.registerAction({type:"graphGLStartLayout",event:"graphgllayoutstarted",update:"series.graphGL:startLayout"},t),e.registerAction({type:"graphGLStopLayout",event:"graphgllayoutstopped",update:"series.graphGL:stopLayout"},t),e.registerAction({type:"graphGLFocusNodeAdjacency",event:"graphGLFocusNodeAdjacency",update:"series.graphGL:focusNodeAdjacency"},t),e.registerAction({type:"graphGLUnfocusNodeAdjacency",event:"graphGLUnfocusNodeAdjacency",update:"series.graphGL:unfocusNodeAdjacency"},t)}et(G0);const V0=Nt.extend({type:"series.flowGL",dependencies:["geo","grid","bmap"],visualStyleAccessPath:"itemStyle",getInitialData:function(e,t){var A=this.get("coordinateSystem"),r=A==="geo"?["lng","lat"]:Tc(A)||["x","y"];r.push("vx","vy");var n=On(this.getSource(),{coordDimensions:r,encodeDefine:this.get("encode"),dimensionsDefine:this.get("dimensions")}),i=new Zt(n,this);return i.initData(this.getSource()),i},defaultOption:{coordinateSystem:"cartesian2d",zlevel:10,supersampling:1,particleType:"point",particleDensity:128,particleSize:1,particleSpeed:1,particleTrail:2,colorTexture:null,gridWidth:"auto",gridHeight:"auto",itemStyle:{color:"#fff",opacity:.8}}});var K0=re.extend(function(){return{dynamic:!0,attributes:{position:new re.Attribute("position","float",3,"POSITION")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setLineCount:function(e){var t=this.attributes,A=4*e,r=2*e;this.vertexCount!==A&&t.position.init(A),this.triangleCount!==r&&(r===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(r*3):new Uint16Array(r*3))},addLine:function(e){var t=this._vertexOffset;this.attributes.position.set(t,[e[0],e[1],1]),this.attributes.position.set(t+1,[e[0],e[1],-1]),this.attributes.position.set(t+2,[e[0],e[1],2]),this.attributes.position.set(t+3,[e[0],e[1],-2]),this.setTriangleIndices(this._faceOffset++,[t,t+1,t+2]),this.setTriangleIndices(this._faceOffset++,[t+1,t+2,t+3]),this._vertexOffset+=4}});const z0=`@export ecgl.vfParticle.particle.fragment

uniform sampler2D particleTexture;
uniform sampler2D spawnTexture;
uniform sampler2D velocityTexture;

uniform float deltaTime;
uniform float elapsedTime;

uniform float speedScaling : 1.0;

uniform vec2 textureSize;
uniform vec4 region : [0, 0, 1, 1];
uniform float firstFrameTime;

varying vec2 v_Texcoord;


void main()
{
 vec4 p = texture2D(particleTexture, v_Texcoord);
 bool spawn = false;
 if (p.w <= 0.0) {
 p = texture2D(spawnTexture, fract(v_Texcoord + elapsedTime / 10.0));
 p.w -= firstFrameTime;
 spawn = true;
 }
 vec2 v = texture2D(velocityTexture, fract(p.xy * region.zw + region.xy)).xy;
 v = (v - 0.5) * 2.0;
 p.z = length(v);
 p.xy += v * deltaTime / 10.0 * speedScaling;
 p.w -= deltaTime;

 if (spawn || p.xy != fract(p.xy)) {
 p.z = 0.0;
 }
 p.xy = fract(p.xy);

 gl_FragColor = p;
}
@end

@export ecgl.vfParticle.renderPoints.vertex

#define PI 3.1415926

attribute vec2 texcoord : TEXCOORD_0;

uniform sampler2D particleTexture;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

uniform float size : 1.0;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 vec4 p = texture2D(particleTexture, texcoord);

 if (p.w > 0.0 && p.z > 1e-5) {
 gl_Position = worldViewProjection * vec4(p.xy * 2.0 - 1.0, 0.0, 1.0);
 }
 else {
 gl_Position = vec4(100000.0, 100000.0, 100000.0, 1.0);
 }

 v_Mag = p.z;
 v_Uv = p.xy;

 gl_PointSize = size;
}

@end

@export ecgl.vfParticle.renderPoints.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform sampler2D gradientTexture;
uniform sampler2D colorTexture;
uniform sampler2D spriteTexture;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 gl_FragColor = color;
#ifdef SPRITETEXTURE_ENABLED
 gl_FragColor *= texture2D(spriteTexture, gl_PointCoord);
 if (color.a == 0.0) {
 discard;
 }
#endif
#ifdef GRADIENTTEXTURE_ENABLED
 gl_FragColor *= texture2D(gradientTexture, vec2(v_Mag, 0.5));
#endif
#ifdef COLORTEXTURE_ENABLED
 gl_FragColor *= texture2D(colorTexture, v_Uv);
#endif
}

@end

@export ecgl.vfParticle.renderLines.vertex

#define PI 3.1415926

attribute vec3 position : POSITION;

uniform sampler2D particleTexture;
uniform sampler2D prevParticleTexture;

uniform float size : 1.0;
uniform vec4 vp: VIEWPORT;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

varying float v_Mag;
varying vec2 v_Uv;

@import clay.util.rand

void main()
{
 vec4 p = texture2D(particleTexture, position.xy);
 vec4 p2 = texture2D(prevParticleTexture, position.xy);

 p.xy = p.xy * 2.0 - 1.0;
 p2.xy = p2.xy * 2.0 - 1.0;

 if (p.w > 0.0 && p.z > 1e-5) {
 vec2 dir = normalize(p.xy - p2.xy);
 vec2 norm = vec2(dir.y / vp.z, -dir.x / vp.w) * sign(position.z) * size;
 if (abs(position.z) == 2.0) {
 gl_Position = vec4(p.xy + norm, 0.0, 1.0);
 v_Uv = p.xy;
 v_Mag = p.z;
 }
 else {
 gl_Position = vec4(p2.xy + norm, 0.0, 1.0);
 v_Mag = p2.z;
 v_Uv = p2.xy;
 }
 gl_Position = worldViewProjection * gl_Position;
 }
 else {
 gl_Position = vec4(100000.0, 100000.0, 100000.0, 1.0);
 }
}

@end

@export ecgl.vfParticle.renderLines.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform sampler2D gradientTexture;
uniform sampler2D colorTexture;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 gl_FragColor = color;
 #ifdef GRADIENTTEXTURE_ENABLED
 gl_FragColor *= texture2D(gradientTexture, vec2(v_Mag, 0.5));
#endif
#ifdef COLORTEXTURE_ENABLED
 gl_FragColor *= texture2D(colorTexture, v_Uv);
#endif
}

@end
`;K.import(z0);function k0(e){var t=document.createElement("canvas");t.width=t.height=e;var A=t.getContext("2d");return A.fillStyle="#fff",A.arc(e/2,e/2,e/2,0,Math.PI*2),A.fill(),t}var zs=function(){this.motionBlurFactor=.99,this.vectorFieldTexture=new $({type:P.FLOAT,flipY:!1}),this.particleLife=[5,20],this._particleType="point",this._particleSize=1,this.particleColor=[1,1,1,1],this.particleSpeedScaling=1,this._thisFrameTexture=null,this._particlePass=null,this._spawnTexture=null,this._particleTexture0=null,this._particleTexture1=null,this._particlePointsMesh=null,this._surfaceFrameBuffer=null,this._elapsedTime=0,this._scene=null,this._camera=null,this._lastFrameTexture=null,this._supersampling=1,this._downsampleTextures=[],this._width=512,this._height=512,this.init()};zs.prototype={constructor:zs,init:function(){var e={type:P.FLOAT,minFilter:P.NEAREST,magFilter:P.NEAREST,useMipmap:!1};this._spawnTexture=new $(e),this._particleTexture0=new $(e),this._particleTexture1=new $(e),this._frameBuffer=new Qe({depthBuffer:!1}),this._particlePass=new Me({fragment:K.source("ecgl.vfParticle.particle.fragment")}),this._particlePass.setUniform("velocityTexture",this.vectorFieldTexture),this._particlePass.setUniform("spawnTexture",this._spawnTexture),this._downsamplePass=new Me({fragment:K.source("clay.compositor.downsample")});var t=new We({renderOrder:10,material:new St({shader:new K(K.source("ecgl.vfParticle.renderPoints.vertex"),K.source("ecgl.vfParticle.renderPoints.fragment"))}),mode:We.POINTS,geometry:new re({dynamic:!0,mainAttribute:"texcoord0"})}),A=new We({renderOrder:10,material:new St({shader:new K(K.source("ecgl.vfParticle.renderLines.vertex"),K.source("ecgl.vfParticle.renderLines.fragment"))}),geometry:new K0,culling:!1}),r=new We({material:new St({shader:new K(K.source("ecgl.color.vertex"),K.source("ecgl.color.fragment"))}),geometry:new pa});r.material.enableTexture("diffuseMap"),this._particlePointsMesh=t,this._particleLinesMesh=A,this._lastFrameFullQuadMesh=r,this._camera=new Qr,this._thisFrameTexture=new $,this._lastFrameTexture=new $},setParticleDensity:function(e,t){for(var A=e*t,r=new Float32Array(A*4),n=0,i=this.particleLife,a=0;a<e;a++)for(var s=0;s<t;s++,n++){r[n*4]=Math.random(),r[n*4+1]=Math.random(),r[n*4+2]=Math.random();var o=(i[1]-i[0])*Math.random()+i[0];r[n*4+3]=o}this._particleType==="line"?this._setLineGeometry(e,t):this._setPointsGeometry(e,t),this._spawnTexture.width=e,this._spawnTexture.height=t,this._spawnTexture.pixels=r,this._particleTexture0.width=this._particleTexture1.width=e,this._particleTexture0.height=this._particleTexture1.height=t,this._particlePass.setUniform("textureSize",[e,t])},_setPointsGeometry:function(e,t){var A=e*t,r=this._particlePointsMesh.geometry,n=r.attributes;n.texcoord0.init(A);for(var i=0,a=0;a<e;a++)for(var s=0;s<t;s++,i++)n.texcoord0.value[i*2]=a/e,n.texcoord0.value[i*2+1]=s/t;r.dirty()},_setLineGeometry:function(e,t){var A=e*t,r=this._getParticleMesh().geometry;r.setLineCount(A),r.resetOffset();for(var n=0;n<e;n++)for(var i=0;i<t;i++)r.addLine([n/e,i/t]);r.dirty()},_getParticleMesh:function(){return this._particleType==="line"?this._particleLinesMesh:this._particlePointsMesh},update:function(e,t,A,r){var n=this._getParticleMesh(),i=this._frameBuffer,a=this._particlePass;r&&this._updateDownsampleTextures(e,t),n.material.set("size",this._particleSize*this._supersampling),n.material.set("color",this.particleColor),a.setUniform("speedScaling",this.particleSpeedScaling),i.attach(this._particleTexture1),a.setUniform("firstFrameTime",r?(this.particleLife[1]+this.particleLife[0])/2:0),a.setUniform("particleTexture",this._particleTexture0),a.setUniform("deltaTime",A),a.setUniform("elapsedTime",this._elapsedTime),a.render(e,i),n.material.set("particleTexture",this._particleTexture1),n.material.set("prevParticleTexture",this._particleTexture0),i.attach(this._thisFrameTexture),i.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT);var s=this._lastFrameFullQuadMesh;s.material.set("diffuseMap",this._lastFrameTexture),s.material.set("color",[1,1,1,this.motionBlurFactor]),this._camera.update(!0),e.renderPass([s,n],this._camera),i.unbind(e),this._downsample(e),this._swapTexture(),this._elapsedTime+=A},_downsample:function(e){var t=this._downsampleTextures;if(t.length!==0)for(var A=0,r=this._thisFrameTexture,n=t[A];n;)this._frameBuffer.attach(n),this._downsamplePass.setUniform("texture",r),this._downsamplePass.setUniform("textureSize",[r.width,r.height]),this._downsamplePass.render(e,this._frameBuffer),r=n,n=t[++A]},getSurfaceTexture:function(){var e=this._downsampleTextures;return e.length>0?e[e.length-1]:this._lastFrameTexture},setRegion:function(e){this._particlePass.setUniform("region",e)},resize:function(e,t){this._lastFrameTexture.width=e*this._supersampling,this._lastFrameTexture.height=t*this._supersampling,this._thisFrameTexture.width=e*this._supersampling,this._thisFrameTexture.height=t*this._supersampling,this._width=e,this._height=t},setParticleSize:function(e){var t=this._getParticleMesh();if(e<=2){t.material.disableTexture("spriteTexture"),t.material.transparent=!1;return}this._spriteTexture||(this._spriteTexture=new $),(!this._spriteTexture.image||this._spriteTexture.image.width!==e)&&(this._spriteTexture.image=k0(e),this._spriteTexture.dirty()),t.material.transparent=!0,t.material.enableTexture("spriteTexture"),t.material.set("spriteTexture",this._spriteTexture),this._particleSize=e},setGradientTexture:function(e){var t=this._getParticleMesh().material;t[e?"enableTexture":"disableTexture"]("gradientTexture"),t.setUniform("gradientTexture",e)},setColorTextureImage:function(e,t){var A=this._getParticleMesh().material;A.setTextureImage("colorTexture",e,t,{flipY:!0})},setParticleType:function(e){this._particleType=e},clearFrame:function(e){var t=this._frameBuffer;t.attach(this._lastFrameTexture),t.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),t.unbind(e)},setSupersampling:function(e){this._supersampling=e,this.resize(this._width,this._height)},_updateDownsampleTextures:function(e,t){for(var A=this._downsampleTextures,r=Math.max(Math.floor(Math.log(this._supersampling/t.getDevicePixelRatio())/Math.log(2)),0),n=2,i=this._width*this._supersampling,a=this._height*this._supersampling,s=0;s<r;s++)A[s]=A[s]||new $,A[s].width=i/n,A[s].height=a/n,n*=2;for(;s<A.length;s++)A[s].dispose(e);A.length=r},_swapTexture:function(){var e=this._particleTexture0;this._particleTexture0=this._particleTexture1,this._particleTexture1=e;var e=this._thisFrameTexture;this._thisFrameTexture=this._lastFrameTexture,this._lastFrameTexture=e},dispose:function(e){e.disposeFrameBuffer(this._frameBuffer),e.disposeTexture(this.vectorFieldTexture),e.disposeTexture(this._spawnTexture),e.disposeTexture(this._particleTexture0),e.disposeTexture(this._particleTexture1),e.disposeTexture(this._thisFrameTexture),e.disposeTexture(this._lastFrameTexture),e.disposeGeometry(this._particleLinesMesh.geometry),e.disposeGeometry(this._particlePointsMesh.geometry),e.disposeGeometry(this._lastFrameFullQuadMesh.geometry),this._spriteTexture&&e.disposeTexture(this._spriteTexture),this._particlePass.dispose(e),this._downsamplePass.dispose(e),this._downsampleTextures.forEach(function(t){t.dispose(e)})}};const W0=Ht.extend({type:"flowGL",__ecgl__:!0,init:function(e,t){this.viewGL=new de("orthographic"),this.groupGL=new w.Node,this.viewGL.add(this.groupGL),this._particleSurface=new zs;var A=new w.Mesh({geometry:new w.PlaneGeometry,material:new w.Material({shader:new w.Shader({vertex:w.Shader.source("ecgl.color.vertex"),fragment:w.Shader.source("ecgl.color.fragment")}),transparent:!0})});A.material.enableTexture("diffuseMap"),this.groupGL.add(A),this._planeMesh=A},render:function(e,t,A){var r=this._particleSurface;r.setParticleType(e.get("particleType")),r.setSupersampling(e.get("supersampling")),this._updateData(e,A),this._updateCamera(A.getWidth(),A.getHeight(),A.getDevicePixelRatio());var n=Ae.firstNotNull(e.get("particleDensity"),128);r.setParticleDensity(n,n);var i=this._planeMesh,a=+new Date,s=this,o=!0;i.__percent=0,i.stopAnimation(),i.animate("",{loop:!0}).when(1e5,{__percent:1}).during(function(){var c=+new Date,f=Math.min(c-a,20);a=a+f,s._renderer&&(r.update(s._renderer,A,f/1e3,o),i.material.set("diffuseMap",r.getSurfaceTexture())),o=!1}).start();var l=e.getModel("itemStyle"),u=w.parseColor(l.get("color"));u[3]*=Ae.firstNotNull(l.get("opacity"),1),i.material.set("color",u),r.setColorTextureImage(e.get("colorTexture"),A),r.setParticleSize(e.get("particleSize")),r.particleSpeedScaling=e.get("particleSpeed"),r.motionBlurFactor=1-Math.pow(.1,e.get("particleTrail"))},updateTransform:function(e,t,A){this._updateData(e,A)},afterRender:function(e,t,A,r){var n=r.renderer;this._renderer=n},_updateData:function(e,t){var A=e.coordinateSystem,r=A.dimensions.map(function(m){return e.coordDimToDataDim(m)[0]}),n=e.getData(),i=n.getDataExtent(r[0]),a=n.getDataExtent(r[1]),s=e.get("gridWidth"),o=e.get("gridHeight");if(s==null||s==="auto"){var l=(i[1]-i[0])/(a[1]-a[0]);s=Math.round(Math.sqrt(l*n.count()))}(o==null||o==="auto")&&(o=Math.ceil(n.count()/s));var u=this._particleSurface.vectorFieldTexture,c=u.pixels;if(!c||c.length!==o*s*4)c=u.pixels=new Float32Array(s*o*4);else for(var f=0;f<c.length;f++)c[f]=0;var h=0,d=1/0,g=new Float32Array(n.count()*2),v=0,p=[[1/0,1/0],[-1/0,-1/0]];n.each([r[0],r[1],"vx","vy"],function(m,B,_,x){var y=A.dataToPoint([m,B]);g[v++]=y[0],g[v++]=y[1],p[0][0]=Math.min(y[0],p[0][0]),p[0][1]=Math.min(y[1],p[0][1]),p[1][0]=Math.max(y[0],p[1][0]),p[1][1]=Math.max(y[1],p[1][1]);var T=Math.sqrt(_*_+x*x);h=Math.max(h,T),d=Math.min(d,T)}),n.each(["vx","vy"],function(m,B,_){var x=Math.round((g[_*2]-p[0][0])/(p[1][0]-p[0][0])*(s-1)),y=o-1-Math.round((g[_*2+1]-p[0][1])/(p[1][1]-p[0][1])*(o-1)),T=(y*s+x)*4;c[T]=m/h*.5+.5,c[T+1]=B/h*.5+.5,c[T+3]=1}),u.width=s,u.height=o,e.get("coordinateSystem")==="bmap"&&this._fillEmptyPixels(u),u.dirty(),this._updatePlanePosition(p[0],p[1],e,t),this._updateGradientTexture(n.getVisual("visualMeta"),[d,h])},_fillEmptyPixels:function(e){var t=e.pixels,A=e.width,r=e.height;function n(g,v,p){g=Math.max(Math.min(g,A-1),0),v=Math.max(Math.min(v,r-1),0);var m=(v*(A-1)+g)*4;return t[m+3]===0?!1:(p[0]=t[m],p[1]=t[m+1],!0)}function i(g,v,p){p[0]=g[0]+v[0],p[1]=g[1]+v[1]}for(var a=[],s=[],o=[],l=[],u=[],c=0,f=0;f<r;f++)for(var h=0;h<A;h++){var d=(f*(A-1)+h)*4;t[d+3]===0&&(c=a[0]=a[1]=0,n(h-1,f,s)&&(c++,i(s,a,a)),n(h+1,f,o)&&(c++,i(o,a,a)),n(h,f-1,l)&&(c++,i(l,a,a)),n(h,f+1,u)&&(c++,i(u,a,a)),a[0]/=c,a[1]/=c,t[d]=a[0],t[d+1]=a[1]),t[d+3]=1}},_updateGradientTexture:function(e,t){if(!e||!e.length){this._particleSurface.setGradientTexture(null);return}this._gradientTexture=this._gradientTexture||new w.Texture2D({image:document.createElement("canvas")});var A=this._gradientTexture,r=A.image;r.width=200,r.height=1;var n=r.getContext("2d"),i=n.createLinearGradient(0,.5,r.width,.5);e[0].stops.forEach(function(a){var s;t[1]===t[0]?s=0:(s=a.value/t[1],s=Math.min(Math.max(s,0),1)),i.addColorStop(s,a.color)}),n.fillStyle=i,n.fillRect(0,0,r.width,r.height),A.dirty(),this._particleSurface.setGradientTexture(this._gradientTexture)},_updatePlanePosition:function(e,t,A,r){var n=this._limitInViewportAndFullFill(e,t,A,r);e=n.leftTop,t=n.rightBottom,this._particleSurface.setRegion(n.region),this._planeMesh.position.set((e[0]+t[0])/2,r.getHeight()-(e[1]+t[1])/2,0);var i=t[0]-e[0],a=t[1]-e[1];this._planeMesh.scale.set(i/2,a/2,1),this._particleSurface.resize(Math.max(Math.min(i,2048),1),Math.max(Math.min(a,2048),1)),this._renderer&&this._particleSurface.clearFrame(this._renderer)},_limitInViewportAndFullFill:function(e,t,A,r){var n=[Math.max(e[0],0),Math.max(e[1],0)],i=[Math.min(t[0],r.getWidth()),Math.min(t[1],r.getHeight())];if(A.get("coordinateSystem")==="bmap"){var a=A.getData().getDataExtent(A.coordDimToDataDim("lng")[0]),s=Math.floor(a[1]-a[0])>=359;s&&(n[0]>0&&(n[0]=0),i[0]<r.getWidth()&&(i[0]=r.getWidth()))}var o=t[0]-e[0],l=t[1]-e[1],u=i[0]-n[0],c=i[1]-n[1],f=[(n[0]-e[0])/o,1-c/l-(n[1]-e[1])/l,u/o,c/l];return{leftTop:n,rightBottom:i,region:f}},_updateCamera:function(e,t,A){this.viewGL.setViewport(0,0,e,t,A);var r=this.viewGL.camera;r.left=r.bottom=0,r.top=t,r.right=e,r.near=0,r.far=100,r.position.z=10},remove:function(){this._planeMesh.stopAnimation(),this.groupGL.removeAll()},dispose:function(){this._renderer&&this._particleSurface.dispose(this._renderer),this.groupGL.removeAll()}});function X0(e){e.registerChartView(W0),e.registerSeriesModel(V0)}et(X0);var ks=Nt.extend({type:"series.linesGL",dependencies:["grid","geo"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",streamEnabled:!0,init:function(e){var t=this._processFlatCoordsArray(e.data);this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset,t.flatCoords&&(e.data=new Float32Array(t.count)),ks.superApply(this,"init",arguments)},mergeOption:function(e){var t=this._processFlatCoordsArray(e.data);this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset,t.flatCoords&&(e.data=new Float32Array(t.count)),ks.superApply(this,"mergeOption",arguments)},appendData:function(e){var t=this._processFlatCoordsArray(e.data);t.flatCoords&&(this._flatCoords?(this._flatCoords=el(this._flatCoords,t.flatCoords),this._flatCoordsOffset=el(this._flatCoordsOffset,t.flatCoordsOffset)):(this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset),e.data=new Float32Array(t.count)),this.getRawData().appendData(e.data)},_getCoordsFromItemModel:function(e){var t=this.getData().getItemModel(e),A=t.option instanceof Array?t.option:t.getShallow("coords");return A},getLineCoordsCount:function(e){return this._flatCoordsOffset?this._flatCoordsOffset[e*2+1]:this._getCoordsFromItemModel(e).length},getLineCoords:function(e,t){if(this._flatCoordsOffset){for(var A=this._flatCoordsOffset[e*2],r=this._flatCoordsOffset[e*2+1],n=0;n<r;n++)t[n]=t[n]||[],t[n][0]=this._flatCoords[A+n*2],t[n][1]=this._flatCoords[A+n*2+1];return r}else{for(var i=this._getCoordsFromItemModel(e),n=0;n<i.length;n++)t[n]=t[n]||[],t[n][0]=i[n][0],t[n][1]=i[n][1];return i.length}},_processFlatCoordsArray:function(e){var t=0;if(this._flatCoords&&(t=this._flatCoords.length),typeof e[0]=="number"){for(var A=e.length,r=new Uint32Array(A),n=new Float64Array(A),i=0,a=0,s=0,o=0;o<A;){s++;var l=e[o++];r[a++]=i+t,r[a++]=l;for(var u=0;u<l;u++){var c=e[o++],f=e[o++];n[i++]=c,n[i++]=f}}return{flatCoordsOffset:new Uint32Array(r.buffer,0,a),flatCoords:n,count:s}}return{flatCoordsOffset:null,flatCoords:null,count:e.length}},getInitialData:function(e,t){var A=new Zt(["value"],this);return A.hasItemOption=!1,A.initData(e.data,[],function(r,n,i,a){if(r instanceof Array)return NaN;A.hasItemOption=!0;var s=r.value;if(s!=null)return s instanceof Array?s[a]:s}),A},defaultOption:{coordinateSystem:"geo",zlevel:10,progressive:1e4,progressiveThreshold:5e4,blendMode:"source-over",lineStyle:{opacity:.8},postEffect:{enable:!1,colorCorrection:{exposure:0,brightness:0,contrast:1,saturation:1,enable:!0}}}});const Y0=Ht.extend({type:"linesGL",__ecgl__:!0,init:function(e,t){this.groupGL=new w.Node,this.viewGL=new de("orthographic"),this.viewGL.add(this.groupGL),this._glViewHelper=new uA(this.viewGL),this._nativeLinesShader=w.createShader("ecgl.lines3D"),this._meshLinesShader=w.createShader("ecgl.meshLines3D"),this._linesMeshes=[],this._currentStep=0},render:function(e,t,A){this.groupGL.removeAll(),this._glViewHelper.reset(e,A);var r=this._linesMeshes[0];r||(r=this._linesMeshes[0]=this._createLinesMesh(e)),this._linesMeshes.length=1,this.groupGL.add(r),this._updateLinesMesh(e,r,0,e.getData().count()),this.viewGL.setPostEffect(e.getModel("postEffect"),A)},incrementalPrepareRender:function(e,t,A){this.groupGL.removeAll(),this._glViewHelper.reset(e,A),this._currentStep=0,this.viewGL.setPostEffect(e.getModel("postEffect"),A)},incrementalRender:function(e,t,A,r){var n=this._linesMeshes[this._currentStep];n||(n=this._createLinesMesh(t),this._linesMeshes[this._currentStep]=n),this._updateLinesMesh(t,n,e.start,e.end),this.groupGL.add(n),r.getZr().refresh(),this._currentStep++},updateTransform:function(e,t,A){e.coordinateSystem.getRoamTransform&&this._glViewHelper.updateTransform(e,A)},_createLinesMesh:function(e){var t=new w.Mesh({$ignorePicking:!0,material:new w.Material({shader:w.createShader("ecgl.lines3D"),transparent:!0,depthMask:!1,depthTest:!1}),geometry:new Oo({segmentScale:10,useNativeLine:!0,dynamic:!1}),mode:w.Mesh.LINES,culling:!1});return t},_updateLinesMesh:function(e,t,A,r){var n=e.getData();t.material.blend=e.get("blendMode")==="lighter"?w.additiveBlend:null;var i=e.get("lineStyle.curveness")||0,a=e.get("polyline"),s=t.geometry,o=e.coordinateSystem,l=Ae.firstNotNull(e.get("lineStyle.width"),1);l>1?(t.material.shader!==this._meshLinesShader&&t.material.attachShader(this._meshLinesShader),t.mode=w.Mesh.TRIANGLES):(t.material.shader!==this._nativeLinesShader&&t.material.attachShader(this._nativeLinesShader),t.mode=w.Mesh.LINES),A=A||0,r=r||n.count(),s.resetOffset();var u=0,c=0,f=[],h=[],d=[],g=[],v=[],p=.3,m=.7;function B(){h[0]=f[0]*m+g[0]*p-(f[1]-g[1])*i,h[1]=f[1]*m+g[1]*p-(g[0]-f[0])*i,d[0]=f[0]*p+g[0]*m-(f[1]-g[1])*i,d[1]=f[1]*p+g[1]*m-(g[0]-f[0])*i}if(a||i!==0)for(var _=A;_<r;_++)if(a){var x=e.getLineCoordsCount(_);u+=s.getPolylineVertexCount(x),c+=s.getPolylineTriangleCount(x)}else e.getLineCoords(_,v),this._glViewHelper.dataToPoint(o,v[0],f),this._glViewHelper.dataToPoint(o,v[1],g),B(),u+=s.getCubicCurveVertexCount(f,h,d,g),c+=s.getCubicCurveTriangleCount(f,h,d,g);else{var y=r-A;u+=y*s.getLineVertexCount(),c+=y*s.getLineVertexCount()}s.setVertexCount(u),s.setTriangleCount(c);for(var T=A,E=[],_=A;_<r;_++){w.parseColor(Ye(n,T),E);var F=Ae.firstNotNull(Xe(n,T),1);E[3]*=F;for(var x=e.getLineCoords(_,v),S=0;S<x;S++)this._glViewHelper.dataToPoint(o,v[S],v[S]);a?s.addPolyline(v,E,l,0,x):i!==0?(f=v[0],g=v[1],B(),s.addCubicCurve(f,h,d,g,E,l)):s.addPolyline(v,E,l,0,2),T++}},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function Z0(e){e.registerChartView(Y0),e.registerSeriesModel(ks)}et(Z0);/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ws=function(e,t){return Ws=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(A,r){A.__proto__=r}||function(A,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(A[n]=r[n])},Ws(e,t)};function Ot(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Ws(e,t);function A(){this.constructor=e}e.prototype=t===null?Object.create(t):(A.prototype=t.prototype,new A)}var Xs=function(){return Xs=Object.assign||function(t){for(var A,r=1,n=arguments.length;r<n;r++){A=arguments[r];for(var i in A)Object.prototype.hasOwnProperty.call(A,i)&&(t[i]=A[i])}return t},Xs.apply(this,arguments)};function ut(e,t,A,r){function n(i){return i instanceof A?i:new A(function(a){a(i)})}return new(A||(A=Promise))(function(i,a){function s(u){try{l(r.next(u))}catch(c){a(c)}}function o(u){try{l(r.throw(u))}catch(c){a(c)}}function l(u){u.done?i(u.value):n(u.value).then(s,o)}l((r=r.apply(e,[])).next())})}function st(e,t){var A={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,n,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(l){return function(u){return o([l,u])}}function o(l){if(r)throw new TypeError("Generator is already executing.");for(;A;)try{if(r=1,n&&(i=l[0]&2?n.return:l[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,l[1])).done)return i;switch(n=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return A.label++,{value:l[1],done:!1};case 5:A.label++,n=l[1],l=[0];continue;case 7:l=A.ops.pop(),A.trys.pop();continue;default:if(i=A.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){A=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){A.label=l[1];break}if(l[0]===6&&A.label<i[1]){A.label=i[1],i=l;break}if(i&&A.label<i[2]){A.label=i[2],A.ops.push(l);break}i[2]&&A.ops.pop(),A.trys.pop();continue}l=t.call(e,A)}catch(u){l=[6,u],n=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function oi(e,t,A){if(arguments.length===2)for(var r=0,n=t.length,i;r<n;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||t)}var aA=function(){function e(t,A,r,n){this.left=t,this.top=A,this.width=r,this.height=n}return e.prototype.add=function(t,A,r,n){return new e(this.left+t,this.top+A,this.width+r,this.height+n)},e.fromClientRect=function(t,A){return new e(A.left+t.windowBounds.left,A.top+t.windowBounds.top,A.width,A.height)},e.fromDOMRectList=function(t,A){var r=Array.from(A).find(function(n){return n.width!==0});return r?new e(r.left+t.windowBounds.left,r.top+t.windowBounds.top,r.width,r.height):e.EMPTY},e.EMPTY=new e(0,0,0,0),e}(),xa=function(e,t){return aA.fromClientRect(e,t.getBoundingClientRect())},J0=function(e){var t=e.body,A=e.documentElement;if(!t||!A)throw new Error("Unable to get document size");var r=Math.max(Math.max(t.scrollWidth,A.scrollWidth),Math.max(t.offsetWidth,A.offsetWidth),Math.max(t.clientWidth,A.clientWidth)),n=Math.max(Math.max(t.scrollHeight,A.scrollHeight),Math.max(t.offsetHeight,A.offsetHeight),Math.max(t.clientHeight,A.clientHeight));return new aA(0,0,r,n)},Ca=function(e){for(var t=[],A=0,r=e.length;A<r;){var n=e.charCodeAt(A++);if(n>=55296&&n<=56319&&A<r){var i=e.charCodeAt(A++);(i&64512)===56320?t.push(((n&1023)<<10)+(i&1023)+65536):(t.push(n),A--)}else t.push(n)}return t},De=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(String.fromCodePoint)return String.fromCodePoint.apply(String,e);var A=e.length;if(!A)return"";for(var r=[],n=-1,i="";++n<A;){var a=e[n];a<=65535?r.push(a):(a-=65536,r.push((a>>10)+55296,a%1024+56320)),(n+1===A||r.length>16384)&&(i+=String.fromCharCode.apply(String,r),r.length=0)}return i},hu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",j0=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var li=0;li<hu.length;li++)j0[hu.charCodeAt(li)]=li;var du="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",un=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ui=0;ui<du.length;ui++)un[du.charCodeAt(ui)]=ui;var q0=function(e){var t=e.length*.75,A=e.length,r,n=0,i,a,s,o;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(t):new Array(t),u=Array.isArray(l)?l:new Uint8Array(l);for(r=0;r<A;r+=4)i=un[e.charCodeAt(r)],a=un[e.charCodeAt(r+1)],s=un[e.charCodeAt(r+2)],o=un[e.charCodeAt(r+3)],u[n++]=i<<2|a>>4,u[n++]=(a&15)<<4|s>>2,u[n++]=(s&3)<<6|o&63;return l},$0=function(e){for(var t=e.length,A=[],r=0;r<t;r+=2)A.push(e[r+1]<<8|e[r]);return A},e_=function(e){for(var t=e.length,A=[],r=0;r<t;r+=4)A.push(e[r+3]<<24|e[r+2]<<16|e[r+1]<<8|e[r]);return A},JA=5,Po=11,ls=2,t_=Po-JA,Rf=65536>>JA,A_=1<<JA,us=A_-1,r_=1024>>JA,n_=Rf+r_,i_=n_,a_=32,s_=i_+a_,o_=65536>>Po,l_=1<<t_,u_=l_-1,gu=function(e,t,A){return e.slice?e.slice(t,A):new Uint16Array(Array.prototype.slice.call(e,t,A))},c_=function(e,t,A){return e.slice?e.slice(t,A):new Uint32Array(Array.prototype.slice.call(e,t,A))},f_=function(e,t){var A=q0(e),r=Array.isArray(A)?e_(A):new Uint32Array(A),n=Array.isArray(A)?$0(A):new Uint16Array(A),i=24,a=gu(n,i/2,r[4]/2),s=r[5]===2?gu(n,(i+r[4])/2):c_(r,Math.ceil((i+r[4])/4));return new h_(r[0],r[1],r[2],r[3],a,s)},h_=function(){function e(t,A,r,n,i,a){this.initialValue=t,this.errorValue=A,this.highStart=r,this.highValueIndex=n,this.index=i,this.data=a}return e.prototype.get=function(t){var A;if(t>=0){if(t<55296||t>56319&&t<=65535)return A=this.index[t>>JA],A=(A<<ls)+(t&us),this.data[A];if(t<=65535)return A=this.index[Rf+(t-55296>>JA)],A=(A<<ls)+(t&us),this.data[A];if(t<this.highStart)return A=s_-o_+(t>>Po),A=this.index[A],A+=t>>JA&u_,A=this.index[A],A=(A<<ls)+(t&us),this.data[A];if(t<=1114111)return this.data[this.highValueIndex]}return this.errorValue},e}(),vu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",d_=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ci=0;ci<vu.length;ci++)d_[vu.charCodeAt(ci)]=ci;var g_="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",pu=50,v_=1,Nf=2,Hf=3,p_=4,m_=5,mu=7,Of=8,_u=9,yA=10,Ys=11,Bu=12,Zs=13,__=14,cn=15,Js=16,fi=17,tn=18,B_=19,wu=20,js=21,An=22,cs=23,fr=24,wt=25,fn=26,hn=27,hr=28,w_=29,KA=30,y_=31,hi=32,di=33,qs=34,$s=35,eo=36,Mn=37,to=38,Mi=39,Ri=40,fs=41,Pf=42,x_=43,C_=[9001,65288],Gf="!",le="×",gi="÷",Ao=f_(g_),eA=[KA,eo],ro=[v_,Nf,Hf,m_],Vf=[yA,Of],yu=[hn,fn],E_=ro.concat(Vf),xu=[to,Mi,Ri,qs,$s],T_=[cn,Zs],F_=function(e,t){t===void 0&&(t="strict");var A=[],r=[],n=[];return e.forEach(function(i,a){var s=Ao.get(i);if(s>pu?(n.push(!0),s-=pu):n.push(!1),["normal","auto","loose"].indexOf(t)!==-1&&[8208,8211,12316,12448].indexOf(i)!==-1)return r.push(a),A.push(Js);if(s===p_||s===Ys){if(a===0)return r.push(a),A.push(KA);var o=A[a-1];return E_.indexOf(o)===-1?(r.push(r[a-1]),A.push(o)):(r.push(a),A.push(KA))}if(r.push(a),s===y_)return A.push(t==="strict"?js:Mn);if(s===Pf||s===w_)return A.push(KA);if(s===x_)return i>=131072&&i<=196605||i>=196608&&i<=262141?A.push(Mn):A.push(KA);A.push(s)}),[r,A,n]},hs=function(e,t,A,r){var n=r[A];if(Array.isArray(e)?e.indexOf(n)!==-1:e===n)for(var i=A;i<=r.length;){i++;var a=r[i];if(a===t)return!0;if(a!==yA)break}if(n===yA)for(var i=A;i>0;){i--;var s=r[i];if(Array.isArray(e)?e.indexOf(s)!==-1:e===s)for(var o=A;o<=r.length;){o++;var a=r[o];if(a===t)return!0;if(a!==yA)break}if(s!==yA)break}return!1},Cu=function(e,t){for(var A=e;A>=0;){var r=t[A];if(r===yA)A--;else return r}return 0},U_=function(e,t,A,r,n){if(A[r]===0)return le;var i=r-1;if(Array.isArray(n)&&n[i]===!0)return le;var a=i-1,s=i+1,o=t[i],l=a>=0?t[a]:0,u=t[s];if(o===Nf&&u===Hf)return le;if(ro.indexOf(o)!==-1)return Gf;if(ro.indexOf(u)!==-1||Vf.indexOf(u)!==-1)return le;if(Cu(i,t)===Of)return gi;if(Ao.get(e[i])===Ys||(o===hi||o===di)&&Ao.get(e[s])===Ys||o===mu||u===mu||o===_u||[yA,Zs,cn].indexOf(o)===-1&&u===_u||[fi,tn,B_,fr,hr].indexOf(u)!==-1||Cu(i,t)===An||hs(cs,An,i,t)||hs([fi,tn],js,i,t)||hs(Bu,Bu,i,t))return le;if(o===yA)return gi;if(o===cs||u===cs)return le;if(u===Js||o===Js)return gi;if([Zs,cn,js].indexOf(u)!==-1||o===__||l===eo&&T_.indexOf(o)!==-1||o===hr&&u===eo||u===wu||eA.indexOf(u)!==-1&&o===wt||eA.indexOf(o)!==-1&&u===wt||o===hn&&[Mn,hi,di].indexOf(u)!==-1||[Mn,hi,di].indexOf(o)!==-1&&u===fn||eA.indexOf(o)!==-1&&yu.indexOf(u)!==-1||yu.indexOf(o)!==-1&&eA.indexOf(u)!==-1||[hn,fn].indexOf(o)!==-1&&(u===wt||[An,cn].indexOf(u)!==-1&&t[s+1]===wt)||[An,cn].indexOf(o)!==-1&&u===wt||o===wt&&[wt,hr,fr].indexOf(u)!==-1)return le;if([wt,hr,fr,fi,tn].indexOf(u)!==-1)for(var c=i;c>=0;){var f=t[c];if(f===wt)return le;if([hr,fr].indexOf(f)!==-1)c--;else break}if([hn,fn].indexOf(u)!==-1)for(var c=[fi,tn].indexOf(o)!==-1?a:i;c>=0;){var f=t[c];if(f===wt)return le;if([hr,fr].indexOf(f)!==-1)c--;else break}if(to===o&&[to,Mi,qs,$s].indexOf(u)!==-1||[Mi,qs].indexOf(o)!==-1&&[Mi,Ri].indexOf(u)!==-1||[Ri,$s].indexOf(o)!==-1&&u===Ri||xu.indexOf(o)!==-1&&[wu,fn].indexOf(u)!==-1||xu.indexOf(u)!==-1&&o===hn||eA.indexOf(o)!==-1&&eA.indexOf(u)!==-1||o===fr&&eA.indexOf(u)!==-1||eA.concat(wt).indexOf(o)!==-1&&u===An&&C_.indexOf(e[s])===-1||eA.concat(wt).indexOf(u)!==-1&&o===tn)return le;if(o===fs&&u===fs){for(var h=A[i],d=1;h>0&&(h--,t[h]===fs);)d++;if(d%2!==0)return le}return o===hi&&u===di?le:gi},S_=function(e,t){t||(t={lineBreak:"normal",wordBreak:"normal"});var A=F_(e,t.lineBreak),r=A[0],n=A[1],i=A[2];(t.wordBreak==="break-all"||t.wordBreak==="break-word")&&(n=n.map(function(s){return[wt,KA,Pf].indexOf(s)!==-1?Mn:s}));var a=t.wordBreak==="keep-all"?i.map(function(s,o){return s&&e[o]>=19968&&e[o]<=40959}):void 0;return[r,n,a]},b_=function(){function e(t,A,r,n){this.codePoints=t,this.required=A===Gf,this.start=r,this.end=n}return e.prototype.slice=function(){return De.apply(void 0,this.codePoints.slice(this.start,this.end))},e}(),Q_=function(e,t){var A=Ca(e),r=S_(A,t),n=r[0],i=r[1],a=r[2],s=A.length,o=0,l=0;return{next:function(){if(l>=s)return{done:!0,value:null};for(var u=le;l<s&&(u=U_(A,i,n,++l,a))===le;);if(u!==le||l===s){var c=new b_(A,u,o,l);return o=l,{value:c,done:!1}}return{done:!0,value:null}}}},L_=1,I_=2,kn=4,Eu=8,$i=10,Tu=47,_n=92,D_=9,M_=32,vi=34,rn=61,R_=35,N_=36,H_=37,pi=39,mi=40,nn=41,O_=95,mt=45,P_=33,G_=60,V_=62,K_=64,z_=91,k_=93,W_=61,X_=123,_i=63,Y_=125,Fu=124,Z_=126,J_=128,Uu=65533,ds=42,XA=43,j_=44,q_=58,$_=59,Rn=46,eB=0,tB=8,AB=11,rB=14,nB=31,iB=127,Gt=-1,Kf=48,zf=97,kf=101,aB=102,sB=117,oB=122,Wf=65,Xf=69,Yf=70,lB=85,uB=90,ot=function(e){return e>=Kf&&e<=57},cB=function(e){return e>=55296&&e<=57343},dr=function(e){return ot(e)||e>=Wf&&e<=Yf||e>=zf&&e<=aB},fB=function(e){return e>=zf&&e<=oB},hB=function(e){return e>=Wf&&e<=uB},dB=function(e){return fB(e)||hB(e)},gB=function(e){return e>=J_},Bi=function(e){return e===$i||e===D_||e===M_},ea=function(e){return dB(e)||gB(e)||e===O_},Su=function(e){return ea(e)||ot(e)||e===mt},vB=function(e){return e>=eB&&e<=tB||e===AB||e>=rB&&e<=nB||e===iB},mA=function(e,t){return e!==_n?!1:t!==$i},wi=function(e,t,A){return e===mt?ea(t)||mA(t,A):ea(e)?!0:!!(e===_n&&mA(e,t))},gs=function(e,t,A){return e===XA||e===mt?ot(t)?!0:t===Rn&&ot(A):ot(e===Rn?t:e)},pB=function(e){var t=0,A=1;(e[t]===XA||e[t]===mt)&&(e[t]===mt&&(A=-1),t++);for(var r=[];ot(e[t]);)r.push(e[t++]);var n=r.length?parseInt(De.apply(void 0,r),10):0;e[t]===Rn&&t++;for(var i=[];ot(e[t]);)i.push(e[t++]);var a=i.length,s=a?parseInt(De.apply(void 0,i),10):0;(e[t]===Xf||e[t]===kf)&&t++;var o=1;(e[t]===XA||e[t]===mt)&&(e[t]===mt&&(o=-1),t++);for(var l=[];ot(e[t]);)l.push(e[t++]);var u=l.length?parseInt(De.apply(void 0,l),10):0;return A*(n+s*Math.pow(10,-a))*Math.pow(10,o*u)},mB={type:2},_B={type:3},BB={type:4},wB={type:13},yB={type:8},xB={type:21},CB={type:9},EB={type:10},TB={type:11},FB={type:12},UB={type:14},yi={type:23},SB={type:1},bB={type:25},QB={type:24},LB={type:26},IB={type:27},DB={type:28},MB={type:29},RB={type:31},no={type:32},Zf=function(){function e(){this._value=[]}return e.prototype.write=function(t){this._value=this._value.concat(Ca(t))},e.prototype.read=function(){for(var t=[],A=this.consumeToken();A!==no;)t.push(A),A=this.consumeToken();return t},e.prototype.consumeToken=function(){var t=this.consumeCodePoint();switch(t){case vi:return this.consumeStringToken(vi);case R_:var A=this.peekCodePoint(0),r=this.peekCodePoint(1),n=this.peekCodePoint(2);if(Su(A)||mA(r,n)){var i=wi(A,r,n)?I_:L_,a=this.consumeName();return{type:5,value:a,flags:i}}break;case N_:if(this.peekCodePoint(0)===rn)return this.consumeCodePoint(),wB;break;case pi:return this.consumeStringToken(pi);case mi:return mB;case nn:return _B;case ds:if(this.peekCodePoint(0)===rn)return this.consumeCodePoint(),UB;break;case XA:if(gs(t,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(t),this.consumeNumericToken();break;case j_:return BB;case mt:var s=t,o=this.peekCodePoint(0),l=this.peekCodePoint(1);if(gs(s,o,l))return this.reconsumeCodePoint(t),this.consumeNumericToken();if(wi(s,o,l))return this.reconsumeCodePoint(t),this.consumeIdentLikeToken();if(o===mt&&l===V_)return this.consumeCodePoint(),this.consumeCodePoint(),QB;break;case Rn:if(gs(t,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(t),this.consumeNumericToken();break;case Tu:if(this.peekCodePoint(0)===ds)for(this.consumeCodePoint();;){var u=this.consumeCodePoint();if(u===ds&&(u=this.consumeCodePoint(),u===Tu))return this.consumeToken();if(u===Gt)return this.consumeToken()}break;case q_:return LB;case $_:return IB;case G_:if(this.peekCodePoint(0)===P_&&this.peekCodePoint(1)===mt&&this.peekCodePoint(2)===mt)return this.consumeCodePoint(),this.consumeCodePoint(),bB;break;case K_:var c=this.peekCodePoint(0),f=this.peekCodePoint(1),h=this.peekCodePoint(2);if(wi(c,f,h)){var a=this.consumeName();return{type:7,value:a}}break;case z_:return DB;case _n:if(mA(t,this.peekCodePoint(0)))return this.reconsumeCodePoint(t),this.consumeIdentLikeToken();break;case k_:return MB;case W_:if(this.peekCodePoint(0)===rn)return this.consumeCodePoint(),yB;break;case X_:return TB;case Y_:return FB;case sB:case lB:var d=this.peekCodePoint(0),g=this.peekCodePoint(1);return d===XA&&(dr(g)||g===_i)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(t),this.consumeIdentLikeToken();case Fu:if(this.peekCodePoint(0)===rn)return this.consumeCodePoint(),CB;if(this.peekCodePoint(0)===Fu)return this.consumeCodePoint(),xB;break;case Z_:if(this.peekCodePoint(0)===rn)return this.consumeCodePoint(),EB;break;case Gt:return no}return Bi(t)?(this.consumeWhiteSpace(),RB):ot(t)?(this.reconsumeCodePoint(t),this.consumeNumericToken()):ea(t)?(this.reconsumeCodePoint(t),this.consumeIdentLikeToken()):{type:6,value:De(t)}},e.prototype.consumeCodePoint=function(){var t=this._value.shift();return typeof t>"u"?-1:t},e.prototype.reconsumeCodePoint=function(t){this._value.unshift(t)},e.prototype.peekCodePoint=function(t){return t>=this._value.length?-1:this._value[t]},e.prototype.consumeUnicodeRangeToken=function(){for(var t=[],A=this.consumeCodePoint();dr(A)&&t.length<6;)t.push(A),A=this.consumeCodePoint();for(var r=!1;A===_i&&t.length<6;)t.push(A),A=this.consumeCodePoint(),r=!0;if(r){var n=parseInt(De.apply(void 0,t.map(function(o){return o===_i?Kf:o})),16),i=parseInt(De.apply(void 0,t.map(function(o){return o===_i?Yf:o})),16);return{type:30,start:n,end:i}}var a=parseInt(De.apply(void 0,t),16);if(this.peekCodePoint(0)===mt&&dr(this.peekCodePoint(1))){this.consumeCodePoint(),A=this.consumeCodePoint();for(var s=[];dr(A)&&s.length<6;)s.push(A),A=this.consumeCodePoint();var i=parseInt(De.apply(void 0,s),16);return{type:30,start:a,end:i}}else return{type:30,start:a,end:a}},e.prototype.consumeIdentLikeToken=function(){var t=this.consumeName();return t.toLowerCase()==="url"&&this.peekCodePoint(0)===mi?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===mi?(this.consumeCodePoint(),{type:19,value:t}):{type:20,value:t}},e.prototype.consumeUrlToken=function(){var t=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===Gt)return{type:22,value:""};var A=this.peekCodePoint(0);if(A===pi||A===vi){var r=this.consumeStringToken(this.consumeCodePoint());return r.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===Gt||this.peekCodePoint(0)===nn)?(this.consumeCodePoint(),{type:22,value:r.value}):(this.consumeBadUrlRemnants(),yi)}for(;;){var n=this.consumeCodePoint();if(n===Gt||n===nn)return{type:22,value:De.apply(void 0,t)};if(Bi(n))return this.consumeWhiteSpace(),this.peekCodePoint(0)===Gt||this.peekCodePoint(0)===nn?(this.consumeCodePoint(),{type:22,value:De.apply(void 0,t)}):(this.consumeBadUrlRemnants(),yi);if(n===vi||n===pi||n===mi||vB(n))return this.consumeBadUrlRemnants(),yi;if(n===_n)if(mA(n,this.peekCodePoint(0)))t.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),yi;else t.push(n)}},e.prototype.consumeWhiteSpace=function(){for(;Bi(this.peekCodePoint(0));)this.consumeCodePoint()},e.prototype.consumeBadUrlRemnants=function(){for(;;){var t=this.consumeCodePoint();if(t===nn||t===Gt)return;mA(t,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},e.prototype.consumeStringSlice=function(t){for(var A=5e4,r="";t>0;){var n=Math.min(A,t);r+=De.apply(void 0,this._value.splice(0,n)),t-=n}return this._value.shift(),r},e.prototype.consumeStringToken=function(t){var A="",r=0;do{var n=this._value[r];if(n===Gt||n===void 0||n===t)return A+=this.consumeStringSlice(r),{type:0,value:A};if(n===$i)return this._value.splice(0,r),SB;if(n===_n){var i=this._value[r+1];i!==Gt&&i!==void 0&&(i===$i?(A+=this.consumeStringSlice(r),r=-1,this._value.shift()):mA(n,i)&&(A+=this.consumeStringSlice(r),A+=De(this.consumeEscapedCodePoint()),r=-1))}r++}while(!0)},e.prototype.consumeNumber=function(){var t=[],A=kn,r=this.peekCodePoint(0);for((r===XA||r===mt)&&t.push(this.consumeCodePoint());ot(this.peekCodePoint(0));)t.push(this.consumeCodePoint());r=this.peekCodePoint(0);var n=this.peekCodePoint(1);if(r===Rn&&ot(n))for(t.push(this.consumeCodePoint(),this.consumeCodePoint()),A=Eu;ot(this.peekCodePoint(0));)t.push(this.consumeCodePoint());r=this.peekCodePoint(0),n=this.peekCodePoint(1);var i=this.peekCodePoint(2);if((r===Xf||r===kf)&&((n===XA||n===mt)&&ot(i)||ot(n)))for(t.push(this.consumeCodePoint(),this.consumeCodePoint()),A=Eu;ot(this.peekCodePoint(0));)t.push(this.consumeCodePoint());return[pB(t),A]},e.prototype.consumeNumericToken=function(){var t=this.consumeNumber(),A=t[0],r=t[1],n=this.peekCodePoint(0),i=this.peekCodePoint(1),a=this.peekCodePoint(2);if(wi(n,i,a)){var s=this.consumeName();return{type:15,number:A,flags:r,unit:s}}return n===H_?(this.consumeCodePoint(),{type:16,number:A,flags:r}):{type:17,number:A,flags:r}},e.prototype.consumeEscapedCodePoint=function(){var t=this.consumeCodePoint();if(dr(t)){for(var A=De(t);dr(this.peekCodePoint(0))&&A.length<6;)A+=De(this.consumeCodePoint());Bi(this.peekCodePoint(0))&&this.consumeCodePoint();var r=parseInt(A,16);return r===0||cB(r)||r>1114111?Uu:r}return t===Gt?Uu:t},e.prototype.consumeName=function(){for(var t="";;){var A=this.consumeCodePoint();if(Su(A))t+=De(A);else if(mA(A,this.peekCodePoint(0)))t+=De(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(A),t}},e}(),Jf=function(){function e(t){this._tokens=t}return e.create=function(t){var A=new Zf;return A.write(t),new e(A.read())},e.parseValue=function(t){return e.create(t).parseComponentValue()},e.parseValues=function(t){return e.create(t).parseComponentValues()},e.prototype.parseComponentValue=function(){for(var t=this.consumeToken();t.type===31;)t=this.consumeToken();if(t.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(t);var A=this.consumeComponentValue();do t=this.consumeToken();while(t.type===31);if(t.type===32)return A;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},e.prototype.parseComponentValues=function(){for(var t=[];;){var A=this.consumeComponentValue();if(A.type===32)return t;t.push(A),t.push()}},e.prototype.consumeComponentValue=function(){var t=this.consumeToken();switch(t.type){case 11:case 28:case 2:return this.consumeSimpleBlock(t.type);case 19:return this.consumeFunction(t)}return t},e.prototype.consumeSimpleBlock=function(t){for(var A={type:t,values:[]},r=this.consumeToken();;){if(r.type===32||HB(r,t))return A;this.reconsumeToken(r),A.values.push(this.consumeComponentValue()),r=this.consumeToken()}},e.prototype.consumeFunction=function(t){for(var A={name:t.value,values:[],type:18};;){var r=this.consumeToken();if(r.type===32||r.type===3)return A;this.reconsumeToken(r),A.values.push(this.consumeComponentValue())}},e.prototype.consumeToken=function(){var t=this._tokens.shift();return typeof t>"u"?no:t},e.prototype.reconsumeToken=function(t){this._tokens.unshift(t)},e}(),Wn=function(e){return e.type===15},kr=function(e){return e.type===17},_e=function(e){return e.type===20},NB=function(e){return e.type===0},io=function(e,t){return _e(e)&&e.value===t},jf=function(e){return e.type!==31},Rr=function(e){return e.type!==31&&e.type!==4},Jt=function(e){var t=[],A=[];return e.forEach(function(r){if(r.type===4){if(A.length===0)throw new Error("Error parsing function args, zero tokens for arg");t.push(A),A=[];return}r.type!==31&&A.push(r)}),A.length&&t.push(A),t},HB=function(e,t){return t===11&&e.type===12||t===28&&e.type===29?!0:t===2&&e.type===3},UA=function(e){return e.type===17||e.type===15},Pe=function(e){return e.type===16||UA(e)},qf=function(e){return e.length>1?[e[0],e[1]]:[e[0]]},it={type:17,number:0,flags:kn},Go={type:16,number:50,flags:kn},xA={type:16,number:100,flags:kn},dn=function(e,t,A){var r=e[0],n=e[1];return[xe(r,t),xe(typeof n<"u"?n:r,A)]},xe=function(e,t){if(e.type===16)return e.number/100*t;if(Wn(e))switch(e.unit){case"rem":case"em":return 16*e.number;case"px":default:return e.number}return e.number},$f="deg",eh="grad",th="rad",Ah="turn",Ea={name:"angle",parse:function(e,t){if(t.type===15)switch(t.unit){case $f:return Math.PI*t.number/180;case eh:return Math.PI/200*t.number;case th:return t.number;case Ah:return Math.PI*2*t.number}throw new Error("Unsupported angle type")}},rh=function(e){return e.type===15&&(e.unit===$f||e.unit===eh||e.unit===th||e.unit===Ah)},nh=function(e){var t=e.filter(_e).map(function(A){return A.value}).join(" ");switch(t){case"to bottom right":case"to right bottom":case"left top":case"top left":return[it,it];case"to top":case"bottom":return Ft(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[it,xA];case"to right":case"left":return Ft(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[xA,xA];case"to bottom":case"top":return Ft(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[xA,it];case"to left":case"right":return Ft(270)}return 0},Ft=function(e){return Math.PI*e/180},EA={name:"color",parse:function(e,t){if(t.type===18){var A=OB[t.name];if(typeof A>"u")throw new Error('Attempting to parse an unsupported color function "'+t.name+'"');return A(e,t.values)}if(t.type===5){if(t.value.length===3){var r=t.value.substring(0,1),n=t.value.substring(1,2),i=t.value.substring(2,3);return CA(parseInt(r+r,16),parseInt(n+n,16),parseInt(i+i,16),1)}if(t.value.length===4){var r=t.value.substring(0,1),n=t.value.substring(1,2),i=t.value.substring(2,3),a=t.value.substring(3,4);return CA(parseInt(r+r,16),parseInt(n+n,16),parseInt(i+i,16),parseInt(a+a,16)/255)}if(t.value.length===6){var r=t.value.substring(0,2),n=t.value.substring(2,4),i=t.value.substring(4,6);return CA(parseInt(r,16),parseInt(n,16),parseInt(i,16),1)}if(t.value.length===8){var r=t.value.substring(0,2),n=t.value.substring(2,4),i=t.value.substring(4,6),a=t.value.substring(6,8);return CA(parseInt(r,16),parseInt(n,16),parseInt(i,16),parseInt(a,16)/255)}}if(t.type===20){var s=iA[t.value.toUpperCase()];if(typeof s<"u")return s}return iA.TRANSPARENT}},TA=function(e){return(255&e)===0},qe=function(e){var t=255&e,A=255&e>>8,r=255&e>>16,n=255&e>>24;return t<255?"rgba("+n+","+r+","+A+","+t/255+")":"rgb("+n+","+r+","+A+")"},CA=function(e,t,A,r){return(e<<24|t<<16|A<<8|Math.round(r*255)<<0)>>>0},bu=function(e,t){if(e.type===17)return e.number;if(e.type===16){var A=t===3?1:255;return t===3?e.number/100*A:Math.round(e.number/100*A)}return 0},Qu=function(e,t){var A=t.filter(Rr);if(A.length===3){var r=A.map(bu),n=r[0],i=r[1],a=r[2];return CA(n,i,a,1)}if(A.length===4){var s=A.map(bu),n=s[0],i=s[1],a=s[2],o=s[3];return CA(n,i,a,o)}return 0};function vs(e,t,A){return A<0&&(A+=1),A>=1&&(A-=1),A<1/6?(t-e)*A*6+e:A<1/2?t:A<2/3?(t-e)*6*(2/3-A)+e:e}var Lu=function(e,t){var A=t.filter(Rr),r=A[0],n=A[1],i=A[2],a=A[3],s=(r.type===17?Ft(r.number):Ea.parse(e,r))/(Math.PI*2),o=Pe(n)?n.number/100:0,l=Pe(i)?i.number/100:0,u=typeof a<"u"&&Pe(a)?xe(a,1):1;if(o===0)return CA(l*255,l*255,l*255,1);var c=l<=.5?l*(o+1):l+o-l*o,f=l*2-c,h=vs(f,c,s+1/3),d=vs(f,c,s),g=vs(f,c,s-1/3);return CA(h*255,d*255,g*255,u)},OB={hsl:Lu,hsla:Lu,rgb:Qu,rgba:Qu},Bn=function(e,t){return EA.parse(e,Jf.create(t).parseComponentValue())},iA={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},PB={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(e,t){return t.map(function(A){if(_e(A))switch(A.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},GB={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Ta=function(e,t){var A=EA.parse(e,t[0]),r=t[1];return r&&Pe(r)?{color:A,stop:r}:{color:A,stop:null}},Iu=function(e,t){var A=e[0],r=e[e.length-1];A.stop===null&&(A.stop=it),r.stop===null&&(r.stop=xA);for(var n=[],i=0,a=0;a<e.length;a++){var s=e[a].stop;if(s!==null){var o=xe(s,t);o>i?n.push(o):n.push(i),i=o}else n.push(null)}for(var l=null,a=0;a<n.length;a++){var u=n[a];if(u===null)l===null&&(l=a);else if(l!==null){for(var c=a-l,f=n[l-1],h=(u-f)/(c+1),d=1;d<=c;d++)n[l+d-1]=h*d;l=null}}return e.map(function(g,v){var p=g.color;return{color:p,stop:Math.max(Math.min(1,n[v]/t),0)}})},VB=function(e,t,A){var r=t/2,n=A/2,i=xe(e[0],t)-r,a=n-xe(e[1],A);return(Math.atan2(a,i)+Math.PI*2)%(Math.PI*2)},KB=function(e,t,A){var r=typeof e=="number"?e:VB(e,t,A),n=Math.abs(t*Math.sin(r))+Math.abs(A*Math.cos(r)),i=t/2,a=A/2,s=n/2,o=Math.sin(r-Math.PI/2)*s,l=Math.cos(r-Math.PI/2)*s;return[n,i-l,i+l,a-o,a+o]},Dt=function(e,t){return Math.sqrt(e*e+t*t)},Du=function(e,t,A,r,n){var i=[[0,0],[0,t],[e,0],[e,t]];return i.reduce(function(a,s){var o=s[0],l=s[1],u=Dt(A-o,r-l);return(n?u<a.optimumDistance:u>a.optimumDistance)?{optimumCorner:s,optimumDistance:u}:a},{optimumDistance:n?1/0:-1/0,optimumCorner:null}).optimumCorner},zB=function(e,t,A,r,n){var i=0,a=0;switch(e.size){case 0:e.shape===0?i=a=Math.min(Math.abs(t),Math.abs(t-r),Math.abs(A),Math.abs(A-n)):e.shape===1&&(i=Math.min(Math.abs(t),Math.abs(t-r)),a=Math.min(Math.abs(A),Math.abs(A-n)));break;case 2:if(e.shape===0)i=a=Math.min(Dt(t,A),Dt(t,A-n),Dt(t-r,A),Dt(t-r,A-n));else if(e.shape===1){var s=Math.min(Math.abs(A),Math.abs(A-n))/Math.min(Math.abs(t),Math.abs(t-r)),o=Du(r,n,t,A,!0),l=o[0],u=o[1];i=Dt(l-t,(u-A)/s),a=s*i}break;case 1:e.shape===0?i=a=Math.max(Math.abs(t),Math.abs(t-r),Math.abs(A),Math.abs(A-n)):e.shape===1&&(i=Math.max(Math.abs(t),Math.abs(t-r)),a=Math.max(Math.abs(A),Math.abs(A-n)));break;case 3:if(e.shape===0)i=a=Math.max(Dt(t,A),Dt(t,A-n),Dt(t-r,A),Dt(t-r,A-n));else if(e.shape===1){var s=Math.max(Math.abs(A),Math.abs(A-n))/Math.max(Math.abs(t),Math.abs(t-r)),c=Du(r,n,t,A,!1),l=c[0],u=c[1];i=Dt(l-t,(u-A)/s),a=s*i}break}return Array.isArray(e.size)&&(i=xe(e.size[0],r),a=e.size.length===2?xe(e.size[1],n):i),[i,a]},kB=function(e,t){var A=Ft(180),r=[];return Jt(t).forEach(function(n,i){if(i===0){var a=n[0];if(a.type===20&&a.value==="to"){A=nh(n);return}else if(rh(a)){A=Ea.parse(e,a);return}}var s=Ta(e,n);r.push(s)}),{angle:A,stops:r,type:1}},xi=function(e,t){var A=Ft(180),r=[];return Jt(t).forEach(function(n,i){if(i===0){var a=n[0];if(a.type===20&&["top","left","right","bottom"].indexOf(a.value)!==-1){A=nh(n);return}else if(rh(a)){A=(Ea.parse(e,a)+Ft(270))%Ft(360);return}}var s=Ta(e,n);r.push(s)}),{angle:A,stops:r,type:1}},WB=function(e,t){var A=Ft(180),r=[],n=1,i=0,a=3,s=[];return Jt(t).forEach(function(o,l){var u=o[0];if(l===0){if(_e(u)&&u.value==="linear"){n=1;return}else if(_e(u)&&u.value==="radial"){n=2;return}}if(u.type===18){if(u.name==="from"){var c=EA.parse(e,u.values[0]);r.push({stop:it,color:c})}else if(u.name==="to"){var c=EA.parse(e,u.values[0]);r.push({stop:xA,color:c})}else if(u.name==="color-stop"){var f=u.values.filter(Rr);if(f.length===2){var c=EA.parse(e,f[1]),h=f[0];kr(h)&&r.push({stop:{type:16,number:h.number*100,flags:h.flags},color:c})}}}}),n===1?{angle:(A+Ft(180))%Ft(360),stops:r,type:n}:{size:a,shape:i,stops:r,position:s,type:n}},ih="closest-side",ah="farthest-side",sh="closest-corner",oh="farthest-corner",lh="circle",uh="ellipse",ch="cover",fh="contain",XB=function(e,t){var A=0,r=3,n=[],i=[];return Jt(t).forEach(function(a,s){var o=!0;if(s===0){var l=!1;o=a.reduce(function(c,f){if(l)if(_e(f))switch(f.value){case"center":return i.push(Go),c;case"top":case"left":return i.push(it),c;case"right":case"bottom":return i.push(xA),c}else(Pe(f)||UA(f))&&i.push(f);else if(_e(f))switch(f.value){case lh:return A=0,!1;case uh:return A=1,!1;case"at":return l=!0,!1;case ih:return r=0,!1;case ch:case ah:return r=1,!1;case fh:case sh:return r=2,!1;case oh:return r=3,!1}else if(UA(f)||Pe(f))return Array.isArray(r)||(r=[]),r.push(f),!1;return c},o)}if(o){var u=Ta(e,a);n.push(u)}}),{size:r,shape:A,stops:n,position:i,type:2}},Ci=function(e,t){var A=0,r=3,n=[],i=[];return Jt(t).forEach(function(a,s){var o=!0;if(s===0?o=a.reduce(function(u,c){if(_e(c))switch(c.value){case"center":return i.push(Go),!1;case"top":case"left":return i.push(it),!1;case"right":case"bottom":return i.push(xA),!1}else if(Pe(c)||UA(c))return i.push(c),!1;return u},o):s===1&&(o=a.reduce(function(u,c){if(_e(c))switch(c.value){case lh:return A=0,!1;case uh:return A=1,!1;case fh:case ih:return r=0,!1;case ah:return r=1,!1;case sh:return r=2,!1;case ch:case oh:return r=3,!1}else if(UA(c)||Pe(c))return Array.isArray(r)||(r=[]),r.push(c),!1;return u},o)),o){var l=Ta(e,a);n.push(l)}}),{size:r,shape:A,stops:n,position:i,type:2}},YB=function(e){return e.type===1},ZB=function(e){return e.type===2},Vo={name:"image",parse:function(e,t){if(t.type===22){var A={url:t.value,type:0};return e.cache.addImage(t.value),A}if(t.type===18){var r=hh[t.name];if(typeof r>"u")throw new Error('Attempting to parse an unsupported image function "'+t.name+'"');return r(e,t.values)}throw new Error("Unsupported image type "+t.type)}};function JB(e){return!(e.type===20&&e.value==="none")&&(e.type!==18||!!hh[e.name])}var hh={"linear-gradient":kB,"-moz-linear-gradient":xi,"-ms-linear-gradient":xi,"-o-linear-gradient":xi,"-webkit-linear-gradient":xi,"radial-gradient":XB,"-moz-radial-gradient":Ci,"-ms-radial-gradient":Ci,"-o-radial-gradient":Ci,"-webkit-radial-gradient":Ci,"-webkit-gradient":WB},jB={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(e,t){if(t.length===0)return[];var A=t[0];return A.type===20&&A.value==="none"?[]:t.filter(function(r){return Rr(r)&&JB(r)}).map(function(r){return Vo.parse(e,r)})}},qB={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(e,t){return t.map(function(A){if(_e(A))switch(A.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},$B={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(e,t){return Jt(t).map(function(A){return A.filter(Pe)}).map(qf)}},ew={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(e,t){return Jt(t).map(function(A){return A.filter(_e).map(function(r){return r.value}).join(" ")}).map(tw)}},tw=function(e){switch(e){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},Er;(function(e){e.AUTO="auto",e.CONTAIN="contain",e.COVER="cover"})(Er||(Er={}));var Aw={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(e,t){return Jt(t).map(function(A){return A.filter(rw)})}},rw=function(e){return _e(e)||Pe(e)},Fa=function(e){return{name:"border-"+e+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},nw=Fa("top"),iw=Fa("right"),aw=Fa("bottom"),sw=Fa("left"),Ua=function(e){return{name:"border-radius-"+e,initialValue:"0 0",prefix:!1,type:1,parse:function(t,A){return qf(A.filter(Pe))}}},ow=Ua("top-left"),lw=Ua("top-right"),uw=Ua("bottom-right"),cw=Ua("bottom-left"),Sa=function(e){return{name:"border-"+e+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(t,A){switch(A){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},fw=Sa("top"),hw=Sa("right"),dw=Sa("bottom"),gw=Sa("left"),ba=function(e){return{name:"border-"+e+"-width",initialValue:"0",type:0,prefix:!1,parse:function(t,A){return Wn(A)?A.number:0}}},vw=ba("top"),pw=ba("right"),mw=ba("bottom"),_w=ba("left"),Bw={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},ww={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(e,t){switch(t){case"rtl":return 1;case"ltr":default:return 0}}},yw={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(e,t){return t.filter(_e).reduce(function(A,r){return A|xw(r.value)},0)}},xw=function(e){switch(e){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},Cw={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(e,t){switch(t){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},Ew={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(e,t){return t.type===20&&t.value==="normal"?0:t.type===17||t.type===15?t.number:0}},ta;(function(e){e.NORMAL="normal",e.STRICT="strict"})(ta||(ta={}));var Tw={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(e,t){switch(t){case"strict":return ta.STRICT;case"normal":default:return ta.NORMAL}}},Fw={name:"line-height",initialValue:"normal",prefix:!1,type:4},Mu=function(e,t){return _e(e)&&e.value==="normal"?1.2*t:e.type===17?t*e.number:Pe(e)?xe(e,t):t},Uw={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(e,t){return t.type===20&&t.value==="none"?null:Vo.parse(e,t)}},Sw={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(e,t){switch(t){case"inside":return 0;case"outside":default:return 1}}},ao={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(e,t){switch(t){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},Qa=function(e){return{name:"margin-"+e,initialValue:"0",prefix:!1,type:4}},bw=Qa("top"),Qw=Qa("right"),Lw=Qa("bottom"),Iw=Qa("left"),Dw={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(e,t){return t.filter(_e).map(function(A){switch(A.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},Mw={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(e,t){switch(t){case"break-word":return"break-word";case"normal":default:return"normal"}}},La=function(e){return{name:"padding-"+e,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},Rw=La("top"),Nw=La("right"),Hw=La("bottom"),Ow=La("left"),Pw={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(e,t){switch(t){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},Gw={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(e,t){switch(t){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},Vw={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(e,t){return t.length===1&&io(t[0],"none")?[]:Jt(t).map(function(A){for(var r={color:iA.TRANSPARENT,offsetX:it,offsetY:it,blur:it},n=0,i=0;i<A.length;i++){var a=A[i];UA(a)?(n===0?r.offsetX=a:n===1?r.offsetY=a:r.blur=a,n++):r.color=EA.parse(e,a)}return r})}},Kw={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(e,t){switch(t){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},zw={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(e,t){if(t.type===20&&t.value==="none")return null;if(t.type===18){var A=Xw[t.name];if(typeof A>"u")throw new Error('Attempting to parse an unsupported transform function "'+t.name+'"');return A(t.values)}return null}},kw=function(e){var t=e.filter(function(A){return A.type===17}).map(function(A){return A.number});return t.length===6?t:null},Ww=function(e){var t=e.filter(function(o){return o.type===17}).map(function(o){return o.number}),A=t[0],r=t[1];t[2],t[3];var n=t[4],i=t[5];t[6],t[7],t[8],t[9],t[10],t[11];var a=t[12],s=t[13];return t[14],t[15],t.length===16?[A,r,n,i,a,s]:null},Xw={matrix:kw,matrix3d:Ww},Ru={type:16,number:50,flags:kn},Yw=[Ru,Ru],Zw={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(e,t){var A=t.filter(Pe);return A.length!==2?Yw:[A[0],A[1]]}},Jw={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(e,t){switch(t){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},wn;(function(e){e.NORMAL="normal",e.BREAK_ALL="break-all",e.KEEP_ALL="keep-all"})(wn||(wn={}));var jw={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(e,t){switch(t){case"break-all":return wn.BREAK_ALL;case"keep-all":return wn.KEEP_ALL;case"normal":default:return wn.NORMAL}}},qw={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(e,t){if(t.type===20)return{auto:!0,order:0};if(kr(t))return{auto:!1,order:t.number};throw new Error("Invalid z-index number parsed")}},dh={name:"time",parse:function(e,t){if(t.type===15)switch(t.unit.toLowerCase()){case"s":return 1e3*t.number;case"ms":return t.number}throw new Error("Unsupported time type")}},$w={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(e,t){return kr(t)?t.number:1}},ey={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},ty={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(e,t){return t.filter(_e).map(function(A){switch(A.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(A){return A!==0})}},Ay={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(e,t){var A=[],r=[];return t.forEach(function(n){switch(n.type){case 20:case 0:A.push(n.value);break;case 17:A.push(n.number.toString());break;case 4:r.push(A.join(" ")),A.length=0;break}}),A.length&&r.push(A.join(" ")),r.map(function(n){return n.indexOf(" ")===-1?n:"'"+n+"'"})}},ry={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},ny={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(e,t){if(kr(t))return t.number;if(_e(t))switch(t.value){case"bold":return 700;case"normal":default:return 400}return 400}},iy={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(e,t){return t.filter(_e).map(function(A){return A.value})}},ay={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(e,t){switch(t){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},ke=function(e,t){return(e&t)!==0},sy={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(e,t){if(t.length===0)return[];var A=t[0];return A.type===20&&A.value==="none"?[]:t}},oy={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(e,t){if(t.length===0)return null;var A=t[0];if(A.type===20&&A.value==="none")return null;for(var r=[],n=t.filter(jf),i=0;i<n.length;i++){var a=n[i],s=n[i+1];if(a.type===20){var o=s&&kr(s)?s.number:1;r.push({counter:a.value,increment:o})}}return r}},ly={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(e,t){if(t.length===0)return[];for(var A=[],r=t.filter(jf),n=0;n<r.length;n++){var i=r[n],a=r[n+1];if(_e(i)&&i.value!=="none"){var s=a&&kr(a)?a.number:0;A.push({counter:i.value,reset:s})}}return A}},uy={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(e,t){return t.filter(Wn).map(function(A){return dh.parse(e,A)})}},cy={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(e,t){if(t.length===0)return null;var A=t[0];if(A.type===20&&A.value==="none")return null;var r=[],n=t.filter(NB);if(n.length%2!==0)return null;for(var i=0;i<n.length;i+=2){var a=n[i].value,s=n[i+1].value;r.push({open:a,close:s})}return r}},Nu=function(e,t,A){if(!e)return"";var r=e[Math.min(t,e.length-1)];return r?A?r.open:r.close:""},fy={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(e,t){return t.length===1&&io(t[0],"none")?[]:Jt(t).map(function(A){for(var r={color:255,offsetX:it,offsetY:it,blur:it,spread:it,inset:!1},n=0,i=0;i<A.length;i++){var a=A[i];io(a,"inset")?r.inset=!0:UA(a)?(n===0?r.offsetX=a:n===1?r.offsetY=a:n===2?r.blur=a:r.spread=a,n++):r.color=EA.parse(e,a)}return r})}},hy={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(e,t){var A=[0,1,2],r=[];return t.filter(_e).forEach(function(n){switch(n.value){case"stroke":r.push(1);break;case"fill":r.push(0);break;case"markers":r.push(2);break}}),A.forEach(function(n){r.indexOf(n)===-1&&r.push(n)}),r}},dy={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},gy={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(e,t){return Wn(t)?t.number:0}},vy=function(){function e(t,A){var r,n;this.animationDuration=Y(t,uy,A.animationDuration),this.backgroundClip=Y(t,PB,A.backgroundClip),this.backgroundColor=Y(t,GB,A.backgroundColor),this.backgroundImage=Y(t,jB,A.backgroundImage),this.backgroundOrigin=Y(t,qB,A.backgroundOrigin),this.backgroundPosition=Y(t,$B,A.backgroundPosition),this.backgroundRepeat=Y(t,ew,A.backgroundRepeat),this.backgroundSize=Y(t,Aw,A.backgroundSize),this.borderTopColor=Y(t,nw,A.borderTopColor),this.borderRightColor=Y(t,iw,A.borderRightColor),this.borderBottomColor=Y(t,aw,A.borderBottomColor),this.borderLeftColor=Y(t,sw,A.borderLeftColor),this.borderTopLeftRadius=Y(t,ow,A.borderTopLeftRadius),this.borderTopRightRadius=Y(t,lw,A.borderTopRightRadius),this.borderBottomRightRadius=Y(t,uw,A.borderBottomRightRadius),this.borderBottomLeftRadius=Y(t,cw,A.borderBottomLeftRadius),this.borderTopStyle=Y(t,fw,A.borderTopStyle),this.borderRightStyle=Y(t,hw,A.borderRightStyle),this.borderBottomStyle=Y(t,dw,A.borderBottomStyle),this.borderLeftStyle=Y(t,gw,A.borderLeftStyle),this.borderTopWidth=Y(t,vw,A.borderTopWidth),this.borderRightWidth=Y(t,pw,A.borderRightWidth),this.borderBottomWidth=Y(t,mw,A.borderBottomWidth),this.borderLeftWidth=Y(t,_w,A.borderLeftWidth),this.boxShadow=Y(t,fy,A.boxShadow),this.color=Y(t,Bw,A.color),this.direction=Y(t,ww,A.direction),this.display=Y(t,yw,A.display),this.float=Y(t,Cw,A.cssFloat),this.fontFamily=Y(t,Ay,A.fontFamily),this.fontSize=Y(t,ry,A.fontSize),this.fontStyle=Y(t,ay,A.fontStyle),this.fontVariant=Y(t,iy,A.fontVariant),this.fontWeight=Y(t,ny,A.fontWeight),this.letterSpacing=Y(t,Ew,A.letterSpacing),this.lineBreak=Y(t,Tw,A.lineBreak),this.lineHeight=Y(t,Fw,A.lineHeight),this.listStyleImage=Y(t,Uw,A.listStyleImage),this.listStylePosition=Y(t,Sw,A.listStylePosition),this.listStyleType=Y(t,ao,A.listStyleType),this.marginTop=Y(t,bw,A.marginTop),this.marginRight=Y(t,Qw,A.marginRight),this.marginBottom=Y(t,Lw,A.marginBottom),this.marginLeft=Y(t,Iw,A.marginLeft),this.opacity=Y(t,$w,A.opacity);var i=Y(t,Dw,A.overflow);this.overflowX=i[0],this.overflowY=i[i.length>1?1:0],this.overflowWrap=Y(t,Mw,A.overflowWrap),this.paddingTop=Y(t,Rw,A.paddingTop),this.paddingRight=Y(t,Nw,A.paddingRight),this.paddingBottom=Y(t,Hw,A.paddingBottom),this.paddingLeft=Y(t,Ow,A.paddingLeft),this.paintOrder=Y(t,hy,A.paintOrder),this.position=Y(t,Gw,A.position),this.textAlign=Y(t,Pw,A.textAlign),this.textDecorationColor=Y(t,ey,(r=A.textDecorationColor)!==null&&r!==void 0?r:A.color),this.textDecorationLine=Y(t,ty,(n=A.textDecorationLine)!==null&&n!==void 0?n:A.textDecoration),this.textShadow=Y(t,Vw,A.textShadow),this.textTransform=Y(t,Kw,A.textTransform),this.transform=Y(t,zw,A.transform),this.transformOrigin=Y(t,Zw,A.transformOrigin),this.visibility=Y(t,Jw,A.visibility),this.webkitTextStrokeColor=Y(t,dy,A.webkitTextStrokeColor),this.webkitTextStrokeWidth=Y(t,gy,A.webkitTextStrokeWidth),this.wordBreak=Y(t,jw,A.wordBreak),this.zIndex=Y(t,qw,A.zIndex)}return e.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},e.prototype.isTransparent=function(){return TA(this.backgroundColor)},e.prototype.isTransformed=function(){return this.transform!==null},e.prototype.isPositioned=function(){return this.position!==0},e.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},e.prototype.isFloating=function(){return this.float!==0},e.prototype.isInlineLevel=function(){return ke(this.display,4)||ke(this.display,33554432)||ke(this.display,268435456)||ke(this.display,536870912)||ke(this.display,67108864)||ke(this.display,134217728)},e}(),py=function(){function e(t,A){this.content=Y(t,sy,A.content),this.quotes=Y(t,cy,A.quotes)}return e}(),Hu=function(){function e(t,A){this.counterIncrement=Y(t,oy,A.counterIncrement),this.counterReset=Y(t,ly,A.counterReset)}return e}(),Y=function(e,t,A){var r=new Zf,n=A!==null&&typeof A<"u"?A.toString():t.initialValue;r.write(n);var i=new Jf(r.read());switch(t.type){case 2:var a=i.parseComponentValue();return t.parse(e,_e(a)?a.value:t.initialValue);case 0:return t.parse(e,i.parseComponentValue());case 1:return t.parse(e,i.parseComponentValues());case 4:return i.parseComponentValue();case 3:switch(t.format){case"angle":return Ea.parse(e,i.parseComponentValue());case"color":return EA.parse(e,i.parseComponentValue());case"image":return Vo.parse(e,i.parseComponentValue());case"length":var s=i.parseComponentValue();return UA(s)?s:it;case"length-percentage":var o=i.parseComponentValue();return Pe(o)?o:it;case"time":return dh.parse(e,i.parseComponentValue())}break}},my="data-html2canvas-debug",_y=function(e){var t=e.getAttribute(my);switch(t){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},so=function(e,t){var A=_y(e);return A===1||t===A},jt=function(){function e(t,A){if(this.context=t,this.textNodes=[],this.elements=[],this.flags=0,so(A,3))debugger;this.styles=new vy(t,window.getComputedStyle(A,null)),uo(A)&&(this.styles.animationDuration.some(function(r){return r>0})&&(A.style.animationDuration="0s"),this.styles.transform!==null&&(A.style.transform="none")),this.bounds=xa(this.context,A),so(A,4)&&(this.flags|=16)}return e}(),By="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",Ou="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",gn=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Ei=0;Ei<Ou.length;Ei++)gn[Ou.charCodeAt(Ei)]=Ei;var wy=function(e){var t=e.length*.75,A=e.length,r,n=0,i,a,s,o;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var l=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(t):new Array(t),u=Array.isArray(l)?l:new Uint8Array(l);for(r=0;r<A;r+=4)i=gn[e.charCodeAt(r)],a=gn[e.charCodeAt(r+1)],s=gn[e.charCodeAt(r+2)],o=gn[e.charCodeAt(r+3)],u[n++]=i<<2|a>>4,u[n++]=(a&15)<<4|s>>2,u[n++]=(s&3)<<6|o&63;return l},yy=function(e){for(var t=e.length,A=[],r=0;r<t;r+=2)A.push(e[r+1]<<8|e[r]);return A},xy=function(e){for(var t=e.length,A=[],r=0;r<t;r+=4)A.push(e[r+3]<<24|e[r+2]<<16|e[r+1]<<8|e[r]);return A},jA=5,Ko=11,ps=2,Cy=Ko-jA,gh=65536>>jA,Ey=1<<jA,ms=Ey-1,Ty=1024>>jA,Fy=gh+Ty,Uy=Fy,Sy=32,by=Uy+Sy,Qy=65536>>Ko,Ly=1<<Cy,Iy=Ly-1,Pu=function(e,t,A){return e.slice?e.slice(t,A):new Uint16Array(Array.prototype.slice.call(e,t,A))},Dy=function(e,t,A){return e.slice?e.slice(t,A):new Uint32Array(Array.prototype.slice.call(e,t,A))},My=function(e,t){var A=wy(e),r=Array.isArray(A)?xy(A):new Uint32Array(A),n=Array.isArray(A)?yy(A):new Uint16Array(A),i=24,a=Pu(n,i/2,r[4]/2),s=r[5]===2?Pu(n,(i+r[4])/2):Dy(r,Math.ceil((i+r[4])/4));return new Ry(r[0],r[1],r[2],r[3],a,s)},Ry=function(){function e(t,A,r,n,i,a){this.initialValue=t,this.errorValue=A,this.highStart=r,this.highValueIndex=n,this.index=i,this.data=a}return e.prototype.get=function(t){var A;if(t>=0){if(t<55296||t>56319&&t<=65535)return A=this.index[t>>jA],A=(A<<ps)+(t&ms),this.data[A];if(t<=65535)return A=this.index[gh+(t-55296>>jA)],A=(A<<ps)+(t&ms),this.data[A];if(t<this.highStart)return A=by-Qy+(t>>Ko),A=this.index[A],A+=t>>jA&Iy,A=this.index[A],A=(A<<ps)+(t&ms),this.data[A];if(t<=1114111)return this.data[this.highValueIndex]}return this.errorValue},e}(),Gu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ny=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Ti=0;Ti<Gu.length;Ti++)Ny[Gu.charCodeAt(Ti)]=Ti;var Hy=1,_s=2,Bs=3,Vu=4,Ku=5,Oy=7,zu=8,ws=9,ys=10,ku=11,Wu=12,Xu=13,Yu=14,xs=15,Py=function(e){for(var t=[],A=0,r=e.length;A<r;){var n=e.charCodeAt(A++);if(n>=55296&&n<=56319&&A<r){var i=e.charCodeAt(A++);(i&64512)===56320?t.push(((n&1023)<<10)+(i&1023)+65536):(t.push(n),A--)}else t.push(n)}return t},Gy=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(String.fromCodePoint)return String.fromCodePoint.apply(String,e);var A=e.length;if(!A)return"";for(var r=[],n=-1,i="";++n<A;){var a=e[n];a<=65535?r.push(a):(a-=65536,r.push((a>>10)+55296,a%1024+56320)),(n+1===A||r.length>16384)&&(i+=String.fromCharCode.apply(String,r),r.length=0)}return i},Vy=My(By),xt="×",Cs="÷",Ky=function(e){return Vy.get(e)},zy=function(e,t,A){var r=A-2,n=t[r],i=t[A-1],a=t[A];if(i===_s&&a===Bs)return xt;if(i===_s||i===Bs||i===Vu||a===_s||a===Bs||a===Vu)return Cs;if(i===zu&&[zu,ws,ku,Wu].indexOf(a)!==-1||(i===ku||i===ws)&&(a===ws||a===ys)||(i===Wu||i===ys)&&a===ys||a===Xu||a===Ku||a===Oy||i===Hy)return xt;if(i===Xu&&a===Yu){for(;n===Ku;)n=t[--r];if(n===Yu)return xt}if(i===xs&&a===xs){for(var s=0;n===xs;)s++,n=t[--r];if(s%2===0)return xt}return Cs},ky=function(e){var t=Py(e),A=t.length,r=0,n=0,i=t.map(Ky);return{next:function(){if(r>=A)return{done:!0,value:null};for(var a=xt;r<A&&(a=zy(t,i,++r))===xt;);if(a!==xt||r===A){var s=Gy.apply(null,t.slice(n,r));return n=r,{value:s,done:!1}}return{done:!0,value:null}}}},Wy=function(e){for(var t=ky(e),A=[],r;!(r=t.next()).done;)r.value&&A.push(r.value.slice());return A},Xy=function(e){var t=123;if(e.createRange){var A=e.createRange();if(A.getBoundingClientRect){var r=e.createElement("boundtest");r.style.height=t+"px",r.style.display="block",e.body.appendChild(r),A.selectNode(r);var n=A.getBoundingClientRect(),i=Math.round(n.height);if(e.body.removeChild(r),i===t)return!0}}return!1},Yy=function(e){var t=e.createElement("boundtest");t.style.width="50px",t.style.display="block",t.style.fontSize="12px",t.style.letterSpacing="0px",t.style.wordSpacing="0px",e.body.appendChild(t);var A=e.createRange();t.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var r=t.firstChild,n=Ca(r.data).map(function(o){return De(o)}),i=0,a={},s=n.every(function(o,l){A.setStart(r,i),A.setEnd(r,i+o.length);var u=A.getBoundingClientRect();i+=o.length;var c=u.x>a.x||u.y>a.y;return a=u,l===0?!0:c});return e.body.removeChild(t),s},Zy=function(){return typeof new Image().crossOrigin<"u"},Jy=function(){return typeof new XMLHttpRequest().responseType=="string"},jy=function(e){var t=new Image,A=e.createElement("canvas"),r=A.getContext("2d");if(!r)return!1;t.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{r.drawImage(t,0,0),A.toDataURL()}catch{return!1}return!0},Zu=function(e){return e[0]===0&&e[1]===255&&e[2]===0&&e[3]===255},qy=function(e){var t=e.createElement("canvas"),A=100;t.width=A,t.height=A;var r=t.getContext("2d");if(!r)return Promise.reject(!1);r.fillStyle="rgb(0, 255, 0)",r.fillRect(0,0,A,A);var n=new Image,i=t.toDataURL();n.src=i;var a=oo(A,A,0,0,n);return r.fillStyle="red",r.fillRect(0,0,A,A),Ju(a).then(function(s){r.drawImage(s,0,0);var o=r.getImageData(0,0,A,A).data;r.fillStyle="red",r.fillRect(0,0,A,A);var l=e.createElement("div");return l.style.backgroundImage="url("+i+")",l.style.height=A+"px",Zu(o)?Ju(oo(A,A,0,0,l)):Promise.reject(!1)}).then(function(s){return r.drawImage(s,0,0),Zu(r.getImageData(0,0,A,A).data)}).catch(function(){return!1})},oo=function(e,t,A,r,n){var i="http://www.w3.org/2000/svg",a=document.createElementNS(i,"svg"),s=document.createElementNS(i,"foreignObject");return a.setAttributeNS(null,"width",e.toString()),a.setAttributeNS(null,"height",t.toString()),s.setAttributeNS(null,"width","100%"),s.setAttributeNS(null,"height","100%"),s.setAttributeNS(null,"x",A.toString()),s.setAttributeNS(null,"y",r.toString()),s.setAttributeNS(null,"externalResourcesRequired","true"),a.appendChild(s),s.appendChild(n),a},Ju=function(e){return new Promise(function(t,A){var r=new Image;r.onload=function(){return t(r)},r.onerror=A,r.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(e))})},nt={get SUPPORT_RANGE_BOUNDS(){var e=Xy(document);return Object.defineProperty(nt,"SUPPORT_RANGE_BOUNDS",{value:e}),e},get SUPPORT_WORD_BREAKING(){var e=nt.SUPPORT_RANGE_BOUNDS&&Yy(document);return Object.defineProperty(nt,"SUPPORT_WORD_BREAKING",{value:e}),e},get SUPPORT_SVG_DRAWING(){var e=jy(document);return Object.defineProperty(nt,"SUPPORT_SVG_DRAWING",{value:e}),e},get SUPPORT_FOREIGNOBJECT_DRAWING(){var e=typeof Array.from=="function"&&typeof window.fetch=="function"?qy(document):Promise.resolve(!1);return Object.defineProperty(nt,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:e}),e},get SUPPORT_CORS_IMAGES(){var e=Zy();return Object.defineProperty(nt,"SUPPORT_CORS_IMAGES",{value:e}),e},get SUPPORT_RESPONSE_TYPE(){var e=Jy();return Object.defineProperty(nt,"SUPPORT_RESPONSE_TYPE",{value:e}),e},get SUPPORT_CORS_XHR(){var e="withCredentials"in new XMLHttpRequest;return Object.defineProperty(nt,"SUPPORT_CORS_XHR",{value:e}),e},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var e=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(nt,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:e}),e}},yn=function(){function e(t,A){this.text=t,this.bounds=A}return e}(),$y=function(e,t,A,r){var n=Ax(t,A),i=[],a=0;return n.forEach(function(s){if(A.textDecorationLine.length||s.trim().length>0)if(nt.SUPPORT_RANGE_BOUNDS){var o=ju(r,a,s.length).getClientRects();if(o.length>1){var l=zo(s),u=0;l.forEach(function(f){i.push(new yn(f,aA.fromDOMRectList(e,ju(r,u+a,f.length).getClientRects()))),u+=f.length})}else i.push(new yn(s,aA.fromDOMRectList(e,o)))}else{var c=r.splitText(s.length);i.push(new yn(s,ex(e,r))),r=c}else nt.SUPPORT_RANGE_BOUNDS||(r=r.splitText(s.length));a+=s.length}),i},ex=function(e,t){var A=t.ownerDocument;if(A){var r=A.createElement("html2canvaswrapper");r.appendChild(t.cloneNode(!0));var n=t.parentNode;if(n){n.replaceChild(r,t);var i=xa(e,r);return r.firstChild&&n.replaceChild(r.firstChild,r),i}}return aA.EMPTY},ju=function(e,t,A){var r=e.ownerDocument;if(!r)throw new Error("Node has no owner document");var n=r.createRange();return n.setStart(e,t),n.setEnd(e,t+A),n},zo=function(e){if(nt.SUPPORT_NATIVE_TEXT_SEGMENTATION){var t=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(t.segment(e)).map(function(A){return A.segment})}return Wy(e)},tx=function(e,t){if(nt.SUPPORT_NATIVE_TEXT_SEGMENTATION){var A=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(A.segment(e)).map(function(r){return r.segment})}return nx(e,t)},Ax=function(e,t){return t.letterSpacing!==0?zo(e):tx(e,t)},rx=[32,160,4961,65792,65793,4153,4241],nx=function(e,t){for(var A=Q_(e,{lineBreak:t.lineBreak,wordBreak:t.overflowWrap==="break-word"?"break-word":t.wordBreak}),r=[],n,i=function(){if(n.value){var a=n.value.slice(),s=Ca(a),o="";s.forEach(function(l){rx.indexOf(l)===-1?o+=De(l):(o.length&&r.push(o),r.push(De(l)),o="")}),o.length&&r.push(o)}};!(n=A.next()).done;)i();return r},ix=function(){function e(t,A,r){this.text=ax(A.data,r.textTransform),this.textBounds=$y(t,this.text,r,A)}return e}(),ax=function(e,t){switch(t){case 1:return e.toLowerCase();case 3:return e.replace(sx,ox);case 2:return e.toUpperCase();default:return e}},sx=/(^|\s|:|-|\(|\))([a-z])/g,ox=function(e,t,A){return e.length>0?t+A.toUpperCase():e},vh=function(e){Ot(t,e);function t(A,r){var n=e.call(this,A,r)||this;return n.src=r.currentSrc||r.src,n.intrinsicWidth=r.naturalWidth,n.intrinsicHeight=r.naturalHeight,n.context.cache.addImage(n.src),n}return t}(jt),ph=function(e){Ot(t,e);function t(A,r){var n=e.call(this,A,r)||this;return n.canvas=r,n.intrinsicWidth=r.width,n.intrinsicHeight=r.height,n}return t}(jt),mh=function(e){Ot(t,e);function t(A,r){var n=e.call(this,A,r)||this,i=new XMLSerializer,a=xa(A,r);return r.setAttribute("width",a.width+"px"),r.setAttribute("height",a.height+"px"),n.svg="data:image/svg+xml,"+encodeURIComponent(i.serializeToString(r)),n.intrinsicWidth=r.width.baseVal.value,n.intrinsicHeight=r.height.baseVal.value,n.context.cache.addImage(n.svg),n}return t}(jt),_h=function(e){Ot(t,e);function t(A,r){var n=e.call(this,A,r)||this;return n.value=r.value,n}return t}(jt),lo=function(e){Ot(t,e);function t(A,r){var n=e.call(this,A,r)||this;return n.start=r.start,n.reversed=typeof r.reversed=="boolean"&&r.reversed===!0,n}return t}(jt),lx=[{type:15,flags:0,unit:"px",number:3}],ux=[{type:16,flags:0,number:50}],cx=function(e){return e.width>e.height?new aA(e.left+(e.width-e.height)/2,e.top,e.height,e.height):e.width<e.height?new aA(e.left,e.top+(e.height-e.width)/2,e.width,e.width):e},fx=function(e){var t=e.type===hx?new Array(e.value.length+1).join("•"):e.value;return t.length===0?e.placeholder||"":t},Aa="checkbox",ra="radio",hx="password",qu=707406591,ko=function(e){Ot(t,e);function t(A,r){var n=e.call(this,A,r)||this;switch(n.type=r.type.toLowerCase(),n.checked=r.checked,n.value=fx(r),(n.type===Aa||n.type===ra)&&(n.styles.backgroundColor=3739148031,n.styles.borderTopColor=n.styles.borderRightColor=n.styles.borderBottomColor=n.styles.borderLeftColor=2779096575,n.styles.borderTopWidth=n.styles.borderRightWidth=n.styles.borderBottomWidth=n.styles.borderLeftWidth=1,n.styles.borderTopStyle=n.styles.borderRightStyle=n.styles.borderBottomStyle=n.styles.borderLeftStyle=1,n.styles.backgroundClip=[0],n.styles.backgroundOrigin=[0],n.bounds=cx(n.bounds)),n.type){case Aa:n.styles.borderTopRightRadius=n.styles.borderTopLeftRadius=n.styles.borderBottomRightRadius=n.styles.borderBottomLeftRadius=lx;break;case ra:n.styles.borderTopRightRadius=n.styles.borderTopLeftRadius=n.styles.borderBottomRightRadius=n.styles.borderBottomLeftRadius=ux;break}return n}return t}(jt),Bh=function(e){Ot(t,e);function t(A,r){var n=e.call(this,A,r)||this,i=r.options[r.selectedIndex||0];return n.value=i&&i.text||"",n}return t}(jt),wh=function(e){Ot(t,e);function t(A,r){var n=e.call(this,A,r)||this;return n.value=r.value,n}return t}(jt),yh=function(e){Ot(t,e);function t(A,r){var n=e.call(this,A,r)||this;n.src=r.src,n.width=parseInt(r.width,10)||0,n.height=parseInt(r.height,10)||0,n.backgroundColor=n.styles.backgroundColor;try{if(r.contentWindow&&r.contentWindow.document&&r.contentWindow.document.documentElement){n.tree=Ch(A,r.contentWindow.document.documentElement);var i=r.contentWindow.document.documentElement?Bn(A,getComputedStyle(r.contentWindow.document.documentElement).backgroundColor):iA.TRANSPARENT,a=r.contentWindow.document.body?Bn(A,getComputedStyle(r.contentWindow.document.body).backgroundColor):iA.TRANSPARENT;n.backgroundColor=TA(i)?TA(a)?n.styles.backgroundColor:a:i}}catch{}return n}return t}(jt),dx=["OL","UL","MENU"],Ni=function(e,t,A,r){for(var n=t.firstChild,i=void 0;n;n=i)if(i=n.nextSibling,Eh(n)&&n.data.trim().length>0)A.textNodes.push(new ix(e,n,A.styles));else if(xr(n))if(Sh(n)&&n.assignedNodes)n.assignedNodes().forEach(function(s){return Ni(e,s,A,r)});else{var a=xh(e,n);a.styles.isVisible()&&(gx(n,a,r)?a.flags|=4:vx(a.styles)&&(a.flags|=2),dx.indexOf(n.tagName)!==-1&&(a.flags|=8),A.elements.push(a),n.slot,n.shadowRoot?Ni(e,n.shadowRoot,a,r):!na(n)&&!Th(n)&&!ia(n)&&Ni(e,n,a,r))}},xh=function(e,t){return co(t)?new vh(e,t):Fh(t)?new ph(e,t):Th(t)?new mh(e,t):px(t)?new _h(e,t):mx(t)?new lo(e,t):_x(t)?new ko(e,t):ia(t)?new Bh(e,t):na(t)?new wh(e,t):Uh(t)?new yh(e,t):new jt(e,t)},Ch=function(e,t){var A=xh(e,t);return A.flags|=4,Ni(e,t,A,A),A},gx=function(e,t,A){return t.styles.isPositionedWithZIndex()||t.styles.opacity<1||t.styles.isTransformed()||Wo(e)&&A.styles.isTransparent()},vx=function(e){return e.isPositioned()||e.isFloating()},Eh=function(e){return e.nodeType===Node.TEXT_NODE},xr=function(e){return e.nodeType===Node.ELEMENT_NODE},uo=function(e){return xr(e)&&typeof e.style<"u"&&!Hi(e)},Hi=function(e){return typeof e.className=="object"},px=function(e){return e.tagName==="LI"},mx=function(e){return e.tagName==="OL"},_x=function(e){return e.tagName==="INPUT"},Bx=function(e){return e.tagName==="HTML"},Th=function(e){return e.tagName==="svg"},Wo=function(e){return e.tagName==="BODY"},Fh=function(e){return e.tagName==="CANVAS"},$u=function(e){return e.tagName==="VIDEO"},co=function(e){return e.tagName==="IMG"},Uh=function(e){return e.tagName==="IFRAME"},ec=function(e){return e.tagName==="STYLE"},wx=function(e){return e.tagName==="SCRIPT"},na=function(e){return e.tagName==="TEXTAREA"},ia=function(e){return e.tagName==="SELECT"},Sh=function(e){return e.tagName==="SLOT"},tc=function(e){return e.tagName.indexOf("-")>0},yx=function(){function e(){this.counters={}}return e.prototype.getCounterValue=function(t){var A=this.counters[t];return A&&A.length?A[A.length-1]:1},e.prototype.getCounterValues=function(t){var A=this.counters[t];return A||[]},e.prototype.pop=function(t){var A=this;t.forEach(function(r){return A.counters[r].pop()})},e.prototype.parse=function(t){var A=this,r=t.counterIncrement,n=t.counterReset,i=!0;r!==null&&r.forEach(function(s){var o=A.counters[s.counter];o&&s.increment!==0&&(i=!1,o.length||o.push(1),o[Math.max(0,o.length-1)]+=s.increment)});var a=[];return i&&n.forEach(function(s){var o=A.counters[s.counter];a.push(s.counter),o||(o=A.counters[s.counter]=[]),o.push(s.reset)}),a},e}(),Ac={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},rc={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},xx={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},Cx={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},gr=function(e,t,A,r,n,i){return e<t||e>A?Nn(e,n,i.length>0):r.integers.reduce(function(a,s,o){for(;e>=s;)e-=s,a+=r.values[o];return a},"")+i},bh=function(e,t,A,r){var n="";do A||e--,n=r(e)+n,e/=t;while(e*t>=t);return n},Ie=function(e,t,A,r,n){var i=A-t+1;return(e<0?"-":"")+(bh(Math.abs(e),i,r,function(a){return De(Math.floor(a%i)+t)})+n)},VA=function(e,t,A){A===void 0&&(A=". ");var r=t.length;return bh(Math.abs(e),r,!1,function(n){return t[Math.floor(n%r)]})+A},mr=1,vA=2,pA=4,vn=8,tA=function(e,t,A,r,n,i){if(e<-9999||e>9999)return Nn(e,4,n.length>0);var a=Math.abs(e),s=n;if(a===0)return t[0]+s;for(var o=0;a>0&&o<=4;o++){var l=a%10;l===0&&ke(i,mr)&&s!==""?s=t[l]+s:l>1||l===1&&o===0||l===1&&o===1&&ke(i,vA)||l===1&&o===1&&ke(i,pA)&&e>100||l===1&&o>1&&ke(i,vn)?s=t[l]+(o>0?A[o-1]:"")+s:l===1&&o>0&&(s=A[o-1]+s),a=Math.floor(a/10)}return(e<0?r:"")+s},nc="十百千萬",ic="拾佰仟萬",ac="マイナス",Es="마이너스",Nn=function(e,t,A){var r=A?". ":"",n=A?"、":"",i=A?", ":"",a=A?" ":"";switch(t){case 0:return"•"+a;case 1:return"◦"+a;case 2:return"◾"+a;case 5:var s=Ie(e,48,57,!0,r);return s.length<4?"0"+s:s;case 4:return VA(e,"〇一二三四五六七八九",n);case 6:return gr(e,1,3999,Ac,3,r).toLowerCase();case 7:return gr(e,1,3999,Ac,3,r);case 8:return Ie(e,945,969,!1,r);case 9:return Ie(e,97,122,!1,r);case 10:return Ie(e,65,90,!1,r);case 11:return Ie(e,1632,1641,!0,r);case 12:case 49:return gr(e,1,9999,rc,3,r);case 35:return gr(e,1,9999,rc,3,r).toLowerCase();case 13:return Ie(e,2534,2543,!0,r);case 14:case 30:return Ie(e,6112,6121,!0,r);case 15:return VA(e,"子丑寅卯辰巳午未申酉戌亥",n);case 16:return VA(e,"甲乙丙丁戊己庚辛壬癸",n);case 17:case 48:return tA(e,"零一二三四五六七八九",nc,"負",n,vA|pA|vn);case 47:return tA(e,"零壹貳參肆伍陸柒捌玖",ic,"負",n,mr|vA|pA|vn);case 42:return tA(e,"零一二三四五六七八九",nc,"负",n,vA|pA|vn);case 41:return tA(e,"零壹贰叁肆伍陆柒捌玖",ic,"负",n,mr|vA|pA|vn);case 26:return tA(e,"〇一二三四五六七八九","十百千万",ac,n,0);case 25:return tA(e,"零壱弐参四伍六七八九","拾百千万",ac,n,mr|vA|pA);case 31:return tA(e,"영일이삼사오육칠팔구","십백천만",Es,i,mr|vA|pA);case 33:return tA(e,"零一二三四五六七八九","十百千萬",Es,i,0);case 32:return tA(e,"零壹貳參四五六七八九","拾百千",Es,i,mr|vA|pA);case 18:return Ie(e,2406,2415,!0,r);case 20:return gr(e,1,19999,Cx,3,r);case 21:return Ie(e,2790,2799,!0,r);case 22:return Ie(e,2662,2671,!0,r);case 22:return gr(e,1,10999,xx,3,r);case 23:return VA(e,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return VA(e,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return Ie(e,3302,3311,!0,r);case 28:return VA(e,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",n);case 29:return VA(e,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",n);case 34:return Ie(e,3792,3801,!0,r);case 37:return Ie(e,6160,6169,!0,r);case 38:return Ie(e,4160,4169,!0,r);case 39:return Ie(e,2918,2927,!0,r);case 40:return Ie(e,1776,1785,!0,r);case 43:return Ie(e,3046,3055,!0,r);case 44:return Ie(e,3174,3183,!0,r);case 45:return Ie(e,3664,3673,!0,r);case 46:return Ie(e,3872,3881,!0,r);case 3:default:return Ie(e,48,57,!0,r)}},Qh="data-html2canvas-ignore",sc=function(){function e(t,A,r){if(this.context=t,this.options=r,this.scrolledElements=[],this.referenceElement=A,this.counters=new yx,this.quoteDepth=0,!A.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(A.ownerDocument.documentElement,!1)}return e.prototype.toIFrame=function(t,A){var r=this,n=Ex(t,A);if(!n.contentWindow)return Promise.reject("Unable to find iframe window");var i=t.defaultView.pageXOffset,a=t.defaultView.pageYOffset,s=n.contentWindow,o=s.document,l=Ux(n).then(function(){return ut(r,void 0,void 0,function(){var u,c;return st(this,function(f){switch(f.label){case 0:return this.scrolledElements.forEach(Lx),s&&(s.scrollTo(A.left,A.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(s.scrollY!==A.top||s.scrollX!==A.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(s.scrollX-A.left,s.scrollY-A.top,0,0))),u=this.options.onclone,c=this.clonedReferenceElement,typeof c>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:o.fonts&&o.fonts.ready?[4,o.fonts.ready]:[3,2];case 1:f.sent(),f.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,Fx(o)]:[3,4];case 3:f.sent(),f.label=4;case 4:return typeof u=="function"?[2,Promise.resolve().then(function(){return u(o,c)}).then(function(){return n})]:[2,n]}})})});return o.open(),o.write(bx(document.doctype)+"<html></html>"),Qx(this.referenceElement.ownerDocument,i,a),o.replaceChild(o.adoptNode(this.documentElement),o.documentElement),o.close(),l},e.prototype.createElementClone=function(t){if(so(t,2))debugger;if(Fh(t))return this.createCanvasClone(t);if($u(t))return this.createVideoClone(t);if(ec(t))return this.createStyleClone(t);var A=t.cloneNode(!1);return co(A)&&(co(t)&&t.currentSrc&&t.currentSrc!==t.src&&(A.src=t.currentSrc,A.srcset=""),A.loading==="lazy"&&(A.loading="eager")),tc(A)?this.createCustomElementClone(A):A},e.prototype.createCustomElementClone=function(t){var A=document.createElement("html2canvascustomelement");return Ts(t.style,A),A},e.prototype.createStyleClone=function(t){try{var A=t.sheet;if(A&&A.cssRules){var r=[].slice.call(A.cssRules,0).reduce(function(i,a){return a&&typeof a.cssText=="string"?i+a.cssText:i},""),n=t.cloneNode(!1);return n.textContent=r,n}}catch(i){if(this.context.logger.error("Unable to access cssRules property",i),i.name!=="SecurityError")throw i}return t.cloneNode(!1)},e.prototype.createCanvasClone=function(t){var A;if(this.options.inlineImages&&t.ownerDocument){var r=t.ownerDocument.createElement("img");try{return r.src=t.toDataURL(),r}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",t)}}var n=t.cloneNode(!1);try{n.width=t.width,n.height=t.height;var i=t.getContext("2d"),a=n.getContext("2d");if(a)if(!this.options.allowTaint&&i)a.putImageData(i.getImageData(0,0,t.width,t.height),0,0);else{var s=(A=t.getContext("webgl2"))!==null&&A!==void 0?A:t.getContext("webgl");if(s){var o=s.getContextAttributes();(o==null?void 0:o.preserveDrawingBuffer)===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",t)}a.drawImage(t,0,0)}return n}catch{this.context.logger.info("Unable to clone canvas as it is tainted",t)}return n},e.prototype.createVideoClone=function(t){var A=t.ownerDocument.createElement("canvas");A.width=t.offsetWidth,A.height=t.offsetHeight;var r=A.getContext("2d");try{return r&&(r.drawImage(t,0,0,A.width,A.height),this.options.allowTaint||r.getImageData(0,0,A.width,A.height)),A}catch{this.context.logger.info("Unable to clone video as it is tainted",t)}var n=t.ownerDocument.createElement("canvas");return n.width=t.offsetWidth,n.height=t.offsetHeight,n},e.prototype.appendChildNode=function(t,A,r){(!xr(A)||!wx(A)&&!A.hasAttribute(Qh)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(A)))&&(!this.options.copyStyles||!xr(A)||!ec(A))&&t.appendChild(this.cloneNode(A,r))},e.prototype.cloneChildNodes=function(t,A,r){for(var n=this,i=t.shadowRoot?t.shadowRoot.firstChild:t.firstChild;i;i=i.nextSibling)if(xr(i)&&Sh(i)&&typeof i.assignedNodes=="function"){var a=i.assignedNodes();a.length&&a.forEach(function(s){return n.appendChildNode(A,s,r)})}else this.appendChildNode(A,i,r)},e.prototype.cloneNode=function(t,A){if(Eh(t))return document.createTextNode(t.data);if(!t.ownerDocument)return t.cloneNode(!1);var r=t.ownerDocument.defaultView;if(r&&xr(t)&&(uo(t)||Hi(t))){var n=this.createElementClone(t);n.style.transitionProperty="none";var i=r.getComputedStyle(t),a=r.getComputedStyle(t,":before"),s=r.getComputedStyle(t,":after");this.referenceElement===t&&uo(n)&&(this.clonedReferenceElement=n),Wo(n)&&Mx(n);var o=this.counters.parse(new Hu(this.context,i)),l=this.resolvePseudoContent(t,n,a,xn.BEFORE);tc(t)&&(A=!0),$u(t)||this.cloneChildNodes(t,n,A),l&&n.insertBefore(l,n.firstChild);var u=this.resolvePseudoContent(t,n,s,xn.AFTER);return u&&n.appendChild(u),this.counters.pop(o),(i&&(this.options.copyStyles||Hi(t))&&!Uh(t)||A)&&Ts(i,n),(t.scrollTop!==0||t.scrollLeft!==0)&&this.scrolledElements.push([n,t.scrollLeft,t.scrollTop]),(na(t)||ia(t))&&(na(n)||ia(n))&&(n.value=t.value),n}return t.cloneNode(!1)},e.prototype.resolvePseudoContent=function(t,A,r,n){var i=this;if(r){var a=r.content,s=A.ownerDocument;if(!(!s||!a||a==="none"||a==="-moz-alt-content"||r.display==="none")){this.counters.parse(new Hu(this.context,r));var o=new py(this.context,r),l=s.createElement("html2canvaspseudoelement");Ts(r,l),o.content.forEach(function(c){if(c.type===0)l.appendChild(s.createTextNode(c.value));else if(c.type===22){var f=s.createElement("img");f.src=c.value,f.style.opacity="1",l.appendChild(f)}else if(c.type===18){if(c.name==="attr"){var h=c.values.filter(_e);h.length&&l.appendChild(s.createTextNode(t.getAttribute(h[0].value)||""))}else if(c.name==="counter"){var d=c.values.filter(Rr),g=d[0],v=d[1];if(g&&_e(g)){var p=i.counters.getCounterValue(g.value),m=v&&_e(v)?ao.parse(i.context,v.value):3;l.appendChild(s.createTextNode(Nn(p,m,!1)))}}else if(c.name==="counters"){var B=c.values.filter(Rr),g=B[0],_=B[1],v=B[2];if(g&&_e(g)){var x=i.counters.getCounterValues(g.value),y=v&&_e(v)?ao.parse(i.context,v.value):3,T=_&&_.type===0?_.value:"",E=x.map(function(U){return Nn(U,y,!1)}).join(T);l.appendChild(s.createTextNode(E))}}}else if(c.type===20)switch(c.value){case"open-quote":l.appendChild(s.createTextNode(Nu(o.quotes,i.quoteDepth++,!0)));break;case"close-quote":l.appendChild(s.createTextNode(Nu(o.quotes,--i.quoteDepth,!1)));break;default:l.appendChild(s.createTextNode(c.value))}}),l.className=fo+" "+ho;var u=n===xn.BEFORE?" "+fo:" "+ho;return Hi(A)?A.className.baseValue+=u:A.className+=u,l}}},e.destroy=function(t){return t.parentNode?(t.parentNode.removeChild(t),!0):!1},e}(),xn;(function(e){e[e.BEFORE=0]="BEFORE",e[e.AFTER=1]="AFTER"})(xn||(xn={}));var Ex=function(e,t){var A=e.createElement("iframe");return A.className="html2canvas-container",A.style.visibility="hidden",A.style.position="fixed",A.style.left="-10000px",A.style.top="0px",A.style.border="0",A.width=t.width.toString(),A.height=t.height.toString(),A.scrolling="no",A.setAttribute(Qh,"true"),e.body.appendChild(A),A},Tx=function(e){return new Promise(function(t){if(e.complete){t();return}if(!e.src){t();return}e.onload=t,e.onerror=t})},Fx=function(e){return Promise.all([].slice.call(e.images,0).map(Tx))},Ux=function(e){return new Promise(function(t,A){var r=e.contentWindow;if(!r)return A("No window assigned for iframe");var n=r.document;r.onload=e.onload=function(){r.onload=e.onload=null;var i=setInterval(function(){n.body.childNodes.length>0&&n.readyState==="complete"&&(clearInterval(i),t(e))},50)}})},Sx=["all","d","content"],Ts=function(e,t){for(var A=e.length-1;A>=0;A--){var r=e.item(A);Sx.indexOf(r)===-1&&t.style.setProperty(r,e.getPropertyValue(r))}return t},bx=function(e){var t="";return e&&(t+="<!DOCTYPE ",e.name&&(t+=e.name),e.internalSubset&&(t+=e.internalSubset),e.publicId&&(t+='"'+e.publicId+'"'),e.systemId&&(t+='"'+e.systemId+'"'),t+=">"),t},Qx=function(e,t,A){e&&e.defaultView&&(t!==e.defaultView.pageXOffset||A!==e.defaultView.pageYOffset)&&e.defaultView.scrollTo(t,A)},Lx=function(e){var t=e[0],A=e[1],r=e[2];t.scrollLeft=A,t.scrollTop=r},Ix=":before",Dx=":after",fo="___html2canvas___pseudoelement_before",ho="___html2canvas___pseudoelement_after",oc=`{
    content: "" !important;
    display: none !important;
}`,Mx=function(e){Rx(e,"."+fo+Ix+oc+`
         .`+ho+Dx+oc)},Rx=function(e,t){var A=e.ownerDocument;if(A){var r=A.createElement("style");r.textContent=t,e.appendChild(r)}},Lh=function(){function e(){}return e.getOrigin=function(t){var A=e._link;return A?(A.href=t,A.href=A.href,A.protocol+A.hostname+A.port):"about:blank"},e.isSameOrigin=function(t){return e.getOrigin(t)===e._origin},e.setContext=function(t){e._link=t.document.createElement("a"),e._origin=e.getOrigin(t.location.href)},e._origin="about:blank",e}(),Nx=function(){function e(t,A){this.context=t,this._options=A,this._cache={}}return e.prototype.addImage=function(t){var A=Promise.resolve();return this.has(t)||(Us(t)||Gx(t))&&(this._cache[t]=this.loadImage(t)).catch(function(){}),A},e.prototype.match=function(t){return this._cache[t]},e.prototype.loadImage=function(t){return ut(this,void 0,void 0,function(){var A,r,n,i,a=this;return st(this,function(s){switch(s.label){case 0:return A=Lh.isSameOrigin(t),r=!Fs(t)&&this._options.useCORS===!0&&nt.SUPPORT_CORS_IMAGES&&!A,n=!Fs(t)&&!A&&!Us(t)&&typeof this._options.proxy=="string"&&nt.SUPPORT_CORS_XHR&&!r,!A&&this._options.allowTaint===!1&&!Fs(t)&&!Us(t)&&!n&&!r?[2]:(i=t,n?[4,this.proxy(i)]:[3,2]);case 1:i=s.sent(),s.label=2;case 2:return this.context.logger.debug("Added image "+t.substring(0,256)),[4,new Promise(function(o,l){var u=new Image;u.onload=function(){return o(u)},u.onerror=l,(Vx(i)||r)&&(u.crossOrigin="anonymous"),u.src=i,u.complete===!0&&setTimeout(function(){return o(u)},500),a._options.imageTimeout>0&&setTimeout(function(){return l("Timed out ("+a._options.imageTimeout+"ms) loading image")},a._options.imageTimeout)})];case 3:return[2,s.sent()]}})})},e.prototype.has=function(t){return typeof this._cache[t]<"u"},e.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},e.prototype.proxy=function(t){var A=this,r=this._options.proxy;if(!r)throw new Error("No proxy defined");var n=t.substring(0,256);return new Promise(function(i,a){var s=nt.SUPPORT_RESPONSE_TYPE?"blob":"text",o=new XMLHttpRequest;o.onload=function(){if(o.status===200)if(s==="text")i(o.response);else{var c=new FileReader;c.addEventListener("load",function(){return i(c.result)},!1),c.addEventListener("error",function(f){return a(f)},!1),c.readAsDataURL(o.response)}else a("Failed to proxy resource "+n+" with status code "+o.status)},o.onerror=a;var l=r.indexOf("?")>-1?"&":"?";if(o.open("GET",""+r+l+"url="+encodeURIComponent(t)+"&responseType="+s),s!=="text"&&o instanceof XMLHttpRequest&&(o.responseType=s),A._options.imageTimeout){var u=A._options.imageTimeout;o.timeout=u,o.ontimeout=function(){return a("Timed out ("+u+"ms) proxying "+n)}}o.send()})},e}(),Hx=/^data:image\/svg\+xml/i,Ox=/^data:image\/.*;base64,/i,Px=/^data:image\/.*/i,Gx=function(e){return nt.SUPPORT_SVG_DRAWING||!Kx(e)},Fs=function(e){return Px.test(e)},Vx=function(e){return Ox.test(e)},Us=function(e){return e.substr(0,4)==="blob"},Kx=function(e){return e.substr(-3).toLowerCase()==="svg"||Hx.test(e)},X=function(){function e(t,A){this.type=0,this.x=t,this.y=A}return e.prototype.add=function(t,A){return new e(this.x+t,this.y+A)},e}(),vr=function(e,t,A){return new X(e.x+(t.x-e.x)*A,e.y+(t.y-e.y)*A)},Fi=function(){function e(t,A,r,n){this.type=1,this.start=t,this.startControl=A,this.endControl=r,this.end=n}return e.prototype.subdivide=function(t,A){var r=vr(this.start,this.startControl,t),n=vr(this.startControl,this.endControl,t),i=vr(this.endControl,this.end,t),a=vr(r,n,t),s=vr(n,i,t),o=vr(a,s,t);return A?new e(this.start,r,a,o):new e(o,s,i,this.end)},e.prototype.add=function(t,A){return new e(this.start.add(t,A),this.startControl.add(t,A),this.endControl.add(t,A),this.end.add(t,A))},e.prototype.reverse=function(){return new e(this.end,this.endControl,this.startControl,this.start)},e}(),Tt=function(e){return e.type===1},zx=function(){function e(t){var A=t.styles,r=t.bounds,n=dn(A.borderTopLeftRadius,r.width,r.height),i=n[0],a=n[1],s=dn(A.borderTopRightRadius,r.width,r.height),o=s[0],l=s[1],u=dn(A.borderBottomRightRadius,r.width,r.height),c=u[0],f=u[1],h=dn(A.borderBottomLeftRadius,r.width,r.height),d=h[0],g=h[1],v=[];v.push((i+o)/r.width),v.push((d+c)/r.width),v.push((a+g)/r.height),v.push((l+f)/r.height);var p=Math.max.apply(Math,v);p>1&&(i/=p,a/=p,o/=p,l/=p,c/=p,f/=p,d/=p,g/=p);var m=r.width-o,B=r.height-f,_=r.width-c,x=r.height-g,y=A.borderTopWidth,T=A.borderRightWidth,E=A.borderBottomWidth,F=A.borderLeftWidth,S=xe(A.paddingTop,t.bounds.width),U=xe(A.paddingRight,t.bounds.width),I=xe(A.paddingBottom,t.bounds.width),Q=xe(A.paddingLeft,t.bounds.width);this.topLeftBorderDoubleOuterBox=i>0||a>0?Fe(r.left+F/3,r.top+y/3,i-F/3,a-y/3,ve.TOP_LEFT):new X(r.left+F/3,r.top+y/3),this.topRightBorderDoubleOuterBox=i>0||a>0?Fe(r.left+m,r.top+y/3,o-T/3,l-y/3,ve.TOP_RIGHT):new X(r.left+r.width-T/3,r.top+y/3),this.bottomRightBorderDoubleOuterBox=c>0||f>0?Fe(r.left+_,r.top+B,c-T/3,f-E/3,ve.BOTTOM_RIGHT):new X(r.left+r.width-T/3,r.top+r.height-E/3),this.bottomLeftBorderDoubleOuterBox=d>0||g>0?Fe(r.left+F/3,r.top+x,d-F/3,g-E/3,ve.BOTTOM_LEFT):new X(r.left+F/3,r.top+r.height-E/3),this.topLeftBorderDoubleInnerBox=i>0||a>0?Fe(r.left+F*2/3,r.top+y*2/3,i-F*2/3,a-y*2/3,ve.TOP_LEFT):new X(r.left+F*2/3,r.top+y*2/3),this.topRightBorderDoubleInnerBox=i>0||a>0?Fe(r.left+m,r.top+y*2/3,o-T*2/3,l-y*2/3,ve.TOP_RIGHT):new X(r.left+r.width-T*2/3,r.top+y*2/3),this.bottomRightBorderDoubleInnerBox=c>0||f>0?Fe(r.left+_,r.top+B,c-T*2/3,f-E*2/3,ve.BOTTOM_RIGHT):new X(r.left+r.width-T*2/3,r.top+r.height-E*2/3),this.bottomLeftBorderDoubleInnerBox=d>0||g>0?Fe(r.left+F*2/3,r.top+x,d-F*2/3,g-E*2/3,ve.BOTTOM_LEFT):new X(r.left+F*2/3,r.top+r.height-E*2/3),this.topLeftBorderStroke=i>0||a>0?Fe(r.left+F/2,r.top+y/2,i-F/2,a-y/2,ve.TOP_LEFT):new X(r.left+F/2,r.top+y/2),this.topRightBorderStroke=i>0||a>0?Fe(r.left+m,r.top+y/2,o-T/2,l-y/2,ve.TOP_RIGHT):new X(r.left+r.width-T/2,r.top+y/2),this.bottomRightBorderStroke=c>0||f>0?Fe(r.left+_,r.top+B,c-T/2,f-E/2,ve.BOTTOM_RIGHT):new X(r.left+r.width-T/2,r.top+r.height-E/2),this.bottomLeftBorderStroke=d>0||g>0?Fe(r.left+F/2,r.top+x,d-F/2,g-E/2,ve.BOTTOM_LEFT):new X(r.left+F/2,r.top+r.height-E/2),this.topLeftBorderBox=i>0||a>0?Fe(r.left,r.top,i,a,ve.TOP_LEFT):new X(r.left,r.top),this.topRightBorderBox=o>0||l>0?Fe(r.left+m,r.top,o,l,ve.TOP_RIGHT):new X(r.left+r.width,r.top),this.bottomRightBorderBox=c>0||f>0?Fe(r.left+_,r.top+B,c,f,ve.BOTTOM_RIGHT):new X(r.left+r.width,r.top+r.height),this.bottomLeftBorderBox=d>0||g>0?Fe(r.left,r.top+x,d,g,ve.BOTTOM_LEFT):new X(r.left,r.top+r.height),this.topLeftPaddingBox=i>0||a>0?Fe(r.left+F,r.top+y,Math.max(0,i-F),Math.max(0,a-y),ve.TOP_LEFT):new X(r.left+F,r.top+y),this.topRightPaddingBox=o>0||l>0?Fe(r.left+Math.min(m,r.width-T),r.top+y,m>r.width+T?0:Math.max(0,o-T),Math.max(0,l-y),ve.TOP_RIGHT):new X(r.left+r.width-T,r.top+y),this.bottomRightPaddingBox=c>0||f>0?Fe(r.left+Math.min(_,r.width-F),r.top+Math.min(B,r.height-E),Math.max(0,c-T),Math.max(0,f-E),ve.BOTTOM_RIGHT):new X(r.left+r.width-T,r.top+r.height-E),this.bottomLeftPaddingBox=d>0||g>0?Fe(r.left+F,r.top+Math.min(x,r.height-E),Math.max(0,d-F),Math.max(0,g-E),ve.BOTTOM_LEFT):new X(r.left+F,r.top+r.height-E),this.topLeftContentBox=i>0||a>0?Fe(r.left+F+Q,r.top+y+S,Math.max(0,i-(F+Q)),Math.max(0,a-(y+S)),ve.TOP_LEFT):new X(r.left+F+Q,r.top+y+S),this.topRightContentBox=o>0||l>0?Fe(r.left+Math.min(m,r.width+F+Q),r.top+y+S,m>r.width+F+Q?0:o-F+Q,l-(y+S),ve.TOP_RIGHT):new X(r.left+r.width-(T+U),r.top+y+S),this.bottomRightContentBox=c>0||f>0?Fe(r.left+Math.min(_,r.width-(F+Q)),r.top+Math.min(B,r.height+y+S),Math.max(0,c-(T+U)),f-(E+I),ve.BOTTOM_RIGHT):new X(r.left+r.width-(T+U),r.top+r.height-(E+I)),this.bottomLeftContentBox=d>0||g>0?Fe(r.left+F+Q,r.top+x,Math.max(0,d-(F+Q)),g-(E+I),ve.BOTTOM_LEFT):new X(r.left+F+Q,r.top+r.height-(E+I))}return e}(),ve;(function(e){e[e.TOP_LEFT=0]="TOP_LEFT",e[e.TOP_RIGHT=1]="TOP_RIGHT",e[e.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",e[e.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(ve||(ve={}));var Fe=function(e,t,A,r,n){var i=4*((Math.sqrt(2)-1)/3),a=A*i,s=r*i,o=e+A,l=t+r;switch(n){case ve.TOP_LEFT:return new Fi(new X(e,l),new X(e,l-s),new X(o-a,t),new X(o,t));case ve.TOP_RIGHT:return new Fi(new X(e,t),new X(e+a,t),new X(o,l-s),new X(o,l));case ve.BOTTOM_RIGHT:return new Fi(new X(o,t),new X(o,t+s),new X(e+a,l),new X(e,l));case ve.BOTTOM_LEFT:default:return new Fi(new X(o,l),new X(o-a,l),new X(e,t+s),new X(e,t))}},aa=function(e){return[e.topLeftBorderBox,e.topRightBorderBox,e.bottomRightBorderBox,e.bottomLeftBorderBox]},kx=function(e){return[e.topLeftContentBox,e.topRightContentBox,e.bottomRightContentBox,e.bottomLeftContentBox]},sa=function(e){return[e.topLeftPaddingBox,e.topRightPaddingBox,e.bottomRightPaddingBox,e.bottomLeftPaddingBox]},Wx=function(){function e(t,A,r){this.offsetX=t,this.offsetY=A,this.matrix=r,this.type=0,this.target=6}return e}(),Ui=function(){function e(t,A){this.path=t,this.target=A,this.type=1}return e}(),Xx=function(){function e(t){this.opacity=t,this.type=2,this.target=6}return e}(),Yx=function(e){return e.type===0},Ih=function(e){return e.type===1},Zx=function(e){return e.type===2},lc=function(e,t){return e.length===t.length?e.some(function(A,r){return A===t[r]}):!1},Jx=function(e,t,A,r,n){return e.map(function(i,a){switch(a){case 0:return i.add(t,A);case 1:return i.add(t+r,A);case 2:return i.add(t+r,A+n);case 3:return i.add(t,A+n)}return i})},Dh=function(){function e(t){this.element=t,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return e}(),Mh=function(){function e(t,A){if(this.container=t,this.parent=A,this.effects=[],this.curves=new zx(this.container),this.container.styles.opacity<1&&this.effects.push(new Xx(this.container.styles.opacity)),this.container.styles.transform!==null){var r=this.container.bounds.left+this.container.styles.transformOrigin[0].number,n=this.container.bounds.top+this.container.styles.transformOrigin[1].number,i=this.container.styles.transform;this.effects.push(new Wx(r,n,i))}if(this.container.styles.overflowX!==0){var a=aa(this.curves),s=sa(this.curves);lc(a,s)?this.effects.push(new Ui(a,6)):(this.effects.push(new Ui(a,2)),this.effects.push(new Ui(s,4)))}}return e.prototype.getEffects=function(t){for(var A=[2,3].indexOf(this.container.styles.position)===-1,r=this.parent,n=this.effects.slice(0);r;){var i=r.effects.filter(function(o){return!Ih(o)});if(A||r.container.styles.position!==0||!r.parent){if(n.unshift.apply(n,i),A=[2,3].indexOf(r.container.styles.position)===-1,r.container.styles.overflowX!==0){var a=aa(r.curves),s=sa(r.curves);lc(a,s)||n.unshift(new Ui(s,6))}}else n.unshift.apply(n,i);r=r.parent}return n.filter(function(o){return ke(o.target,t)})},e}(),go=function(e,t,A,r){e.container.elements.forEach(function(n){var i=ke(n.flags,4),a=ke(n.flags,2),s=new Mh(n,e);ke(n.styles.display,2048)&&r.push(s);var o=ke(n.flags,8)?[]:r;if(i||a){var l=i||n.styles.isPositioned()?A:t,u=new Dh(s);if(n.styles.isPositioned()||n.styles.opacity<1||n.styles.isTransformed()){var c=n.styles.zIndex.order;if(c<0){var f=0;l.negativeZIndex.some(function(d,g){return c>d.element.container.styles.zIndex.order?(f=g,!1):f>0}),l.negativeZIndex.splice(f,0,u)}else if(c>0){var h=0;l.positiveZIndex.some(function(d,g){return c>=d.element.container.styles.zIndex.order?(h=g+1,!1):h>0}),l.positiveZIndex.splice(h,0,u)}else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(u)}else n.styles.isFloating()?l.nonPositionedFloats.push(u):l.nonPositionedInlineLevel.push(u);go(s,u,i?u:A,o)}else n.styles.isInlineLevel()?t.inlineLevel.push(s):t.nonInlineLevel.push(s),go(s,t,A,o);ke(n.flags,8)&&Rh(n,o)})},Rh=function(e,t){for(var A=e instanceof lo?e.start:1,r=e instanceof lo?e.reversed:!1,n=0;n<t.length;n++){var i=t[n];i.container instanceof _h&&typeof i.container.value=="number"&&i.container.value!==0&&(A=i.container.value),i.listValue=Nn(A,i.container.styles.listStyleType,!0),A+=r?-1:1}},jx=function(e){var t=new Mh(e,null),A=new Dh(t),r=[];return go(t,A,A,r),Rh(t.container,r),A},uc=function(e,t){switch(t){case 0:return Ut(e.topLeftBorderBox,e.topLeftPaddingBox,e.topRightBorderBox,e.topRightPaddingBox);case 1:return Ut(e.topRightBorderBox,e.topRightPaddingBox,e.bottomRightBorderBox,e.bottomRightPaddingBox);case 2:return Ut(e.bottomRightBorderBox,e.bottomRightPaddingBox,e.bottomLeftBorderBox,e.bottomLeftPaddingBox);case 3:default:return Ut(e.bottomLeftBorderBox,e.bottomLeftPaddingBox,e.topLeftBorderBox,e.topLeftPaddingBox)}},qx=function(e,t){switch(t){case 0:return Ut(e.topLeftBorderBox,e.topLeftBorderDoubleOuterBox,e.topRightBorderBox,e.topRightBorderDoubleOuterBox);case 1:return Ut(e.topRightBorderBox,e.topRightBorderDoubleOuterBox,e.bottomRightBorderBox,e.bottomRightBorderDoubleOuterBox);case 2:return Ut(e.bottomRightBorderBox,e.bottomRightBorderDoubleOuterBox,e.bottomLeftBorderBox,e.bottomLeftBorderDoubleOuterBox);case 3:default:return Ut(e.bottomLeftBorderBox,e.bottomLeftBorderDoubleOuterBox,e.topLeftBorderBox,e.topLeftBorderDoubleOuterBox)}},$x=function(e,t){switch(t){case 0:return Ut(e.topLeftBorderDoubleInnerBox,e.topLeftPaddingBox,e.topRightBorderDoubleInnerBox,e.topRightPaddingBox);case 1:return Ut(e.topRightBorderDoubleInnerBox,e.topRightPaddingBox,e.bottomRightBorderDoubleInnerBox,e.bottomRightPaddingBox);case 2:return Ut(e.bottomRightBorderDoubleInnerBox,e.bottomRightPaddingBox,e.bottomLeftBorderDoubleInnerBox,e.bottomLeftPaddingBox);case 3:default:return Ut(e.bottomLeftBorderDoubleInnerBox,e.bottomLeftPaddingBox,e.topLeftBorderDoubleInnerBox,e.topLeftPaddingBox)}},eC=function(e,t){switch(t){case 0:return Si(e.topLeftBorderStroke,e.topRightBorderStroke);case 1:return Si(e.topRightBorderStroke,e.bottomRightBorderStroke);case 2:return Si(e.bottomRightBorderStroke,e.bottomLeftBorderStroke);case 3:default:return Si(e.bottomLeftBorderStroke,e.topLeftBorderStroke)}},Si=function(e,t){var A=[];return Tt(e)?A.push(e.subdivide(.5,!1)):A.push(e),Tt(t)?A.push(t.subdivide(.5,!0)):A.push(t),A},Ut=function(e,t,A,r){var n=[];return Tt(e)?n.push(e.subdivide(.5,!1)):n.push(e),Tt(A)?n.push(A.subdivide(.5,!0)):n.push(A),Tt(r)?n.push(r.subdivide(.5,!0).reverse()):n.push(r),Tt(t)?n.push(t.subdivide(.5,!1).reverse()):n.push(t),n},Nh=function(e){var t=e.bounds,A=e.styles;return t.add(A.borderLeftWidth,A.borderTopWidth,-(A.borderRightWidth+A.borderLeftWidth),-(A.borderTopWidth+A.borderBottomWidth))},oa=function(e){var t=e.styles,A=e.bounds,r=xe(t.paddingLeft,A.width),n=xe(t.paddingRight,A.width),i=xe(t.paddingTop,A.width),a=xe(t.paddingBottom,A.width);return A.add(r+t.borderLeftWidth,i+t.borderTopWidth,-(t.borderRightWidth+t.borderLeftWidth+r+n),-(t.borderTopWidth+t.borderBottomWidth+i+a))},tC=function(e,t){return e===0?t.bounds:e===2?oa(t):Nh(t)},AC=function(e,t){return e===0?t.bounds:e===2?oa(t):Nh(t)},Ss=function(e,t,A){var r=tC(_r(e.styles.backgroundOrigin,t),e),n=AC(_r(e.styles.backgroundClip,t),e),i=rC(_r(e.styles.backgroundSize,t),A,r),a=i[0],s=i[1],o=dn(_r(e.styles.backgroundPosition,t),r.width-a,r.height-s),l=nC(_r(e.styles.backgroundRepeat,t),o,i,r,n),u=Math.round(r.left+o[0]),c=Math.round(r.top+o[1]);return[l,u,c,a,s]},pr=function(e){return _e(e)&&e.value===Er.AUTO},bi=function(e){return typeof e=="number"},rC=function(e,t,A){var r=t[0],n=t[1],i=t[2],a=e[0],s=e[1];if(!a)return[0,0];if(Pe(a)&&s&&Pe(s))return[xe(a,A.width),xe(s,A.height)];var o=bi(i);if(_e(a)&&(a.value===Er.CONTAIN||a.value===Er.COVER)){if(bi(i)){var l=A.width/A.height;return l<i!=(a.value===Er.COVER)?[A.width,A.width/i]:[A.height*i,A.height]}return[A.width,A.height]}var u=bi(r),c=bi(n),f=u||c;if(pr(a)&&(!s||pr(s))){if(u&&c)return[r,n];if(!o&&!f)return[A.width,A.height];if(f&&o){var h=u?r:n*i,d=c?n:r/i;return[h,d]}var g=u?r:A.width,v=c?n:A.height;return[g,v]}if(o){var p=0,m=0;return Pe(a)?p=xe(a,A.width):Pe(s)&&(m=xe(s,A.height)),pr(a)?p=m*i:(!s||pr(s))&&(m=p/i),[p,m]}var B=null,_=null;if(Pe(a)?B=xe(a,A.width):s&&Pe(s)&&(_=xe(s,A.height)),B!==null&&(!s||pr(s))&&(_=u&&c?B/r*n:A.height),_!==null&&pr(a)&&(B=u&&c?_/n*r:A.width),B!==null&&_!==null)return[B,_];throw new Error("Unable to calculate background-size for element")},_r=function(e,t){var A=e[t];return typeof A>"u"?e[0]:A},nC=function(e,t,A,r,n){var i=t[0],a=t[1],s=A[0],o=A[1];switch(e){case 2:return[new X(Math.round(r.left),Math.round(r.top+a)),new X(Math.round(r.left+r.width),Math.round(r.top+a)),new X(Math.round(r.left+r.width),Math.round(o+r.top+a)),new X(Math.round(r.left),Math.round(o+r.top+a))];case 3:return[new X(Math.round(r.left+i),Math.round(r.top)),new X(Math.round(r.left+i+s),Math.round(r.top)),new X(Math.round(r.left+i+s),Math.round(r.height+r.top)),new X(Math.round(r.left+i),Math.round(r.height+r.top))];case 1:return[new X(Math.round(r.left+i),Math.round(r.top+a)),new X(Math.round(r.left+i+s),Math.round(r.top+a)),new X(Math.round(r.left+i+s),Math.round(r.top+a+o)),new X(Math.round(r.left+i),Math.round(r.top+a+o))];default:return[new X(Math.round(n.left),Math.round(n.top)),new X(Math.round(n.left+n.width),Math.round(n.top)),new X(Math.round(n.left+n.width),Math.round(n.height+n.top)),new X(Math.round(n.left),Math.round(n.height+n.top))]}},iC="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",cc="Hidden Text",aC=function(){function e(t){this._data={},this._document=t}return e.prototype.parseMetrics=function(t,A){var r=this._document.createElement("div"),n=this._document.createElement("img"),i=this._document.createElement("span"),a=this._document.body;r.style.visibility="hidden",r.style.fontFamily=t,r.style.fontSize=A,r.style.margin="0",r.style.padding="0",r.style.whiteSpace="nowrap",a.appendChild(r),n.src=iC,n.width=1,n.height=1,n.style.margin="0",n.style.padding="0",n.style.verticalAlign="baseline",i.style.fontFamily=t,i.style.fontSize=A,i.style.margin="0",i.style.padding="0",i.appendChild(this._document.createTextNode(cc)),r.appendChild(i),r.appendChild(n);var s=n.offsetTop-i.offsetTop+2;r.removeChild(i),r.appendChild(this._document.createTextNode(cc)),r.style.lineHeight="normal",n.style.verticalAlign="super";var o=n.offsetTop-r.offsetTop+2;return a.removeChild(r),{baseline:s,middle:o}},e.prototype.getMetrics=function(t,A){var r=t+" "+A;return typeof this._data[r]>"u"&&(this._data[r]=this.parseMetrics(t,A)),this._data[r]},e}(),Hh=function(){function e(t,A){this.context=t,this.options=A}return e}(),sC=1e4,oC=function(e){Ot(t,e);function t(A,r){var n=e.call(this,A,r)||this;return n._activeEffects=[],n.canvas=r.canvas?r.canvas:document.createElement("canvas"),n.ctx=n.canvas.getContext("2d"),r.canvas||(n.canvas.width=Math.floor(r.width*r.scale),n.canvas.height=Math.floor(r.height*r.scale),n.canvas.style.width=r.width+"px",n.canvas.style.height=r.height+"px"),n.fontMetrics=new aC(document),n.ctx.scale(n.options.scale,n.options.scale),n.ctx.translate(-r.x,-r.y),n.ctx.textBaseline="bottom",n._activeEffects=[],n.context.logger.debug("Canvas renderer initialized ("+r.width+"x"+r.height+") with scale "+r.scale),n}return t.prototype.applyEffects=function(A){for(var r=this;this._activeEffects.length;)this.popEffect();A.forEach(function(n){return r.applyEffect(n)})},t.prototype.applyEffect=function(A){this.ctx.save(),Zx(A)&&(this.ctx.globalAlpha=A.opacity),Yx(A)&&(this.ctx.translate(A.offsetX,A.offsetY),this.ctx.transform(A.matrix[0],A.matrix[1],A.matrix[2],A.matrix[3],A.matrix[4],A.matrix[5]),this.ctx.translate(-A.offsetX,-A.offsetY)),Ih(A)&&(this.path(A.path),this.ctx.clip()),this._activeEffects.push(A)},t.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},t.prototype.renderStack=function(A){return ut(this,void 0,void 0,function(){var r;return st(this,function(n){switch(n.label){case 0:return r=A.element.container.styles,r.isVisible()?[4,this.renderStackContent(A)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})},t.prototype.renderNode=function(A){return ut(this,void 0,void 0,function(){return st(this,function(r){switch(r.label){case 0:if(ke(A.container.flags,16))debugger;return A.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(A)]:[3,3];case 1:return r.sent(),[4,this.renderNodeContent(A)];case 2:r.sent(),r.label=3;case 3:return[2]}})})},t.prototype.renderTextWithLetterSpacing=function(A,r,n){var i=this;if(r===0)this.ctx.fillText(A.text,A.bounds.left,A.bounds.top+n);else{var a=zo(A.text);a.reduce(function(s,o){return i.ctx.fillText(o,s,A.bounds.top+n),s+i.ctx.measureText(o).width},A.bounds.left)}},t.prototype.createFontStyle=function(A){var r=A.fontVariant.filter(function(a){return a==="normal"||a==="small-caps"}).join(""),n=hC(A.fontFamily).join(", "),i=Wn(A.fontSize)?""+A.fontSize.number+A.fontSize.unit:A.fontSize.number+"px";return[[A.fontStyle,r,A.fontWeight,i,n].join(" "),n,i]},t.prototype.renderTextNode=function(A,r){return ut(this,void 0,void 0,function(){var n,i,a,s,o,l,u,c,f=this;return st(this,function(h){return n=this.createFontStyle(r),i=n[0],a=n[1],s=n[2],this.ctx.font=i,this.ctx.direction=r.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",o=this.fontMetrics.getMetrics(a,s),l=o.baseline,u=o.middle,c=r.paintOrder,A.textBounds.forEach(function(d){c.forEach(function(g){switch(g){case 0:f.ctx.fillStyle=qe(r.color),f.renderTextWithLetterSpacing(d,r.letterSpacing,l);var v=r.textShadow;v.length&&d.text.trim().length&&(v.slice(0).reverse().forEach(function(p){f.ctx.shadowColor=qe(p.color),f.ctx.shadowOffsetX=p.offsetX.number*f.options.scale,f.ctx.shadowOffsetY=p.offsetY.number*f.options.scale,f.ctx.shadowBlur=p.blur.number,f.renderTextWithLetterSpacing(d,r.letterSpacing,l)}),f.ctx.shadowColor="",f.ctx.shadowOffsetX=0,f.ctx.shadowOffsetY=0,f.ctx.shadowBlur=0),r.textDecorationLine.length&&(f.ctx.fillStyle=qe(r.textDecorationColor||r.color),r.textDecorationLine.forEach(function(p){switch(p){case 1:f.ctx.fillRect(d.bounds.left,Math.round(d.bounds.top+l),d.bounds.width,1);break;case 2:f.ctx.fillRect(d.bounds.left,Math.round(d.bounds.top),d.bounds.width,1);break;case 3:f.ctx.fillRect(d.bounds.left,Math.ceil(d.bounds.top+u),d.bounds.width,1);break}}));break;case 1:r.webkitTextStrokeWidth&&d.text.trim().length&&(f.ctx.strokeStyle=qe(r.webkitTextStrokeColor),f.ctx.lineWidth=r.webkitTextStrokeWidth,f.ctx.lineJoin=window.chrome?"miter":"round",f.ctx.strokeText(d.text,d.bounds.left,d.bounds.top+l)),f.ctx.strokeStyle="",f.ctx.lineWidth=0,f.ctx.lineJoin="miter";break}})}),[2]})})},t.prototype.renderReplacedElement=function(A,r,n){if(n&&A.intrinsicWidth>0&&A.intrinsicHeight>0){var i=oa(A),a=sa(r);this.path(a),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(n,0,0,A.intrinsicWidth,A.intrinsicHeight,i.left,i.top,i.width,i.height),this.ctx.restore()}},t.prototype.renderNodeContent=function(A){return ut(this,void 0,void 0,function(){var r,n,i,a,s,o,m,m,l,u,c,f,_,h,d,x,g,v,p,m,B,_,x;return st(this,function(y){switch(y.label){case 0:this.applyEffects(A.getEffects(4)),r=A.container,n=A.curves,i=r.styles,a=0,s=r.textNodes,y.label=1;case 1:return a<s.length?(o=s[a],[4,this.renderTextNode(o,i)]):[3,4];case 2:y.sent(),y.label=3;case 3:return a++,[3,1];case 4:if(!(r instanceof vh))return[3,8];y.label=5;case 5:return y.trys.push([5,7,,8]),[4,this.context.cache.match(r.src)];case 6:return m=y.sent(),this.renderReplacedElement(r,n,m),[3,8];case 7:return y.sent(),this.context.logger.error("Error loading image "+r.src),[3,8];case 8:if(r instanceof ph&&this.renderReplacedElement(r,n,r.canvas),!(r instanceof mh))return[3,12];y.label=9;case 9:return y.trys.push([9,11,,12]),[4,this.context.cache.match(r.svg)];case 10:return m=y.sent(),this.renderReplacedElement(r,n,m),[3,12];case 11:return y.sent(),this.context.logger.error("Error loading svg "+r.svg.substring(0,255)),[3,12];case 12:return r instanceof yh&&r.tree?(l=new t(this.context,{scale:this.options.scale,backgroundColor:r.backgroundColor,x:0,y:0,width:r.width,height:r.height}),[4,l.render(r.tree)]):[3,14];case 13:u=y.sent(),r.width&&r.height&&this.ctx.drawImage(u,0,0,r.width,r.height,r.bounds.left,r.bounds.top,r.bounds.width,r.bounds.height),y.label=14;case 14:if(r instanceof ko&&(c=Math.min(r.bounds.width,r.bounds.height),r.type===Aa?r.checked&&(this.ctx.save(),this.path([new X(r.bounds.left+c*.39363,r.bounds.top+c*.79),new X(r.bounds.left+c*.16,r.bounds.top+c*.5549),new X(r.bounds.left+c*.27347,r.bounds.top+c*.44071),new X(r.bounds.left+c*.39694,r.bounds.top+c*.5649),new X(r.bounds.left+c*.72983,r.bounds.top+c*.23),new X(r.bounds.left+c*.84,r.bounds.top+c*.34085),new X(r.bounds.left+c*.39363,r.bounds.top+c*.79)]),this.ctx.fillStyle=qe(qu),this.ctx.fill(),this.ctx.restore()):r.type===ra&&r.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(r.bounds.left+c/2,r.bounds.top+c/2,c/4,0,Math.PI*2,!0),this.ctx.fillStyle=qe(qu),this.ctx.fill(),this.ctx.restore())),lC(r)&&r.value.length){switch(f=this.createFontStyle(i),_=f[0],h=f[1],d=this.fontMetrics.getMetrics(_,h).baseline,this.ctx.font=_,this.ctx.fillStyle=qe(i.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=cC(r.styles.textAlign),x=oa(r),g=0,r.styles.textAlign){case 1:g+=x.width/2;break;case 2:g+=x.width;break}v=x.add(g,0,0,-x.height/2+1),this.ctx.save(),this.path([new X(x.left,x.top),new X(x.left+x.width,x.top),new X(x.left+x.width,x.top+x.height),new X(x.left,x.top+x.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new yn(r.value,v),i.letterSpacing,d),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!ke(r.styles.display,2048))return[3,20];if(r.styles.listStyleImage===null)return[3,19];if(p=r.styles.listStyleImage,p.type!==0)return[3,18];m=void 0,B=p.url,y.label=15;case 15:return y.trys.push([15,17,,18]),[4,this.context.cache.match(B)];case 16:return m=y.sent(),this.ctx.drawImage(m,r.bounds.left-(m.width+10),r.bounds.top),[3,18];case 17:return y.sent(),this.context.logger.error("Error loading list-style-image "+B),[3,18];case 18:return[3,20];case 19:A.listValue&&r.styles.listStyleType!==-1&&(_=this.createFontStyle(i)[0],this.ctx.font=_,this.ctx.fillStyle=qe(i.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",x=new aA(r.bounds.left,r.bounds.top+xe(r.styles.paddingTop,r.bounds.width),r.bounds.width,Mu(i.lineHeight,i.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new yn(A.listValue,x),i.letterSpacing,Mu(i.lineHeight,i.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),y.label=20;case 20:return[2]}})})},t.prototype.renderStackContent=function(A){return ut(this,void 0,void 0,function(){var r,n,p,i,a,p,s,o,p,l,u,p,c,f,p,h,d,p,g,v,p;return st(this,function(m){switch(m.label){case 0:if(ke(A.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(A.element)];case 1:m.sent(),r=0,n=A.negativeZIndex,m.label=2;case 2:return r<n.length?(p=n[r],[4,this.renderStack(p)]):[3,5];case 3:m.sent(),m.label=4;case 4:return r++,[3,2];case 5:return[4,this.renderNodeContent(A.element)];case 6:m.sent(),i=0,a=A.nonInlineLevel,m.label=7;case 7:return i<a.length?(p=a[i],[4,this.renderNode(p)]):[3,10];case 8:m.sent(),m.label=9;case 9:return i++,[3,7];case 10:s=0,o=A.nonPositionedFloats,m.label=11;case 11:return s<o.length?(p=o[s],[4,this.renderStack(p)]):[3,14];case 12:m.sent(),m.label=13;case 13:return s++,[3,11];case 14:l=0,u=A.nonPositionedInlineLevel,m.label=15;case 15:return l<u.length?(p=u[l],[4,this.renderStack(p)]):[3,18];case 16:m.sent(),m.label=17;case 17:return l++,[3,15];case 18:c=0,f=A.inlineLevel,m.label=19;case 19:return c<f.length?(p=f[c],[4,this.renderNode(p)]):[3,22];case 20:m.sent(),m.label=21;case 21:return c++,[3,19];case 22:h=0,d=A.zeroOrAutoZIndexOrTransformedOrOpacity,m.label=23;case 23:return h<d.length?(p=d[h],[4,this.renderStack(p)]):[3,26];case 24:m.sent(),m.label=25;case 25:return h++,[3,23];case 26:g=0,v=A.positiveZIndex,m.label=27;case 27:return g<v.length?(p=v[g],[4,this.renderStack(p)]):[3,30];case 28:m.sent(),m.label=29;case 29:return g++,[3,27];case 30:return[2]}})})},t.prototype.mask=function(A){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(A.slice(0).reverse()),this.ctx.closePath()},t.prototype.path=function(A){this.ctx.beginPath(),this.formatPath(A),this.ctx.closePath()},t.prototype.formatPath=function(A){var r=this;A.forEach(function(n,i){var a=Tt(n)?n.start:n;i===0?r.ctx.moveTo(a.x,a.y):r.ctx.lineTo(a.x,a.y),Tt(n)&&r.ctx.bezierCurveTo(n.startControl.x,n.startControl.y,n.endControl.x,n.endControl.y,n.end.x,n.end.y)})},t.prototype.renderRepeat=function(A,r,n,i){this.path(A),this.ctx.fillStyle=r,this.ctx.translate(n,i),this.ctx.fill(),this.ctx.translate(-n,-i)},t.prototype.resizeImage=function(A,r,n){var i;if(A.width===r&&A.height===n)return A;var a=(i=this.canvas.ownerDocument)!==null&&i!==void 0?i:document,s=a.createElement("canvas");s.width=Math.max(1,r),s.height=Math.max(1,n);var o=s.getContext("2d");return o.drawImage(A,0,0,A.width,A.height,0,0,r,n),s},t.prototype.renderBackgroundImage=function(A){return ut(this,void 0,void 0,function(){var r,n,i,a,s,o;return st(this,function(l){switch(l.label){case 0:r=A.styles.backgroundImage.length-1,n=function(u){var c,f,h,S,H,V,Q,b,E,d,S,H,V,Q,b,g,v,p,m,B,_,x,y,T,E,F,S,U,I,Q,b,N,H,V,G,j,W,ne,ee,ie,te,q;return st(this,function(Be){switch(Be.label){case 0:if(u.type!==0)return[3,5];c=void 0,f=u.url,Be.label=1;case 1:return Be.trys.push([1,3,,4]),[4,i.context.cache.match(f)];case 2:return c=Be.sent(),[3,4];case 3:return Be.sent(),i.context.logger.error("Error loading background-image "+f),[3,4];case 4:return c&&(h=Ss(A,r,[c.width,c.height,c.width/c.height]),S=h[0],H=h[1],V=h[2],Q=h[3],b=h[4],E=i.ctx.createPattern(i.resizeImage(c,Q,b),"repeat"),i.renderRepeat(S,E,H,V)),[3,6];case 5:YB(u)?(d=Ss(A,r,[null,null,null]),S=d[0],H=d[1],V=d[2],Q=d[3],b=d[4],g=KB(u.angle,Q,b),v=g[0],p=g[1],m=g[2],B=g[3],_=g[4],x=document.createElement("canvas"),x.width=Q,x.height=b,y=x.getContext("2d"),T=y.createLinearGradient(p,B,m,_),Iu(u.stops,v).forEach(function(ge){return T.addColorStop(ge.stop,qe(ge.color))}),y.fillStyle=T,y.fillRect(0,0,Q,b),Q>0&&b>0&&(E=i.ctx.createPattern(x,"repeat"),i.renderRepeat(S,E,H,V))):ZB(u)&&(F=Ss(A,r,[null,null,null]),S=F[0],U=F[1],I=F[2],Q=F[3],b=F[4],N=u.position.length===0?[Go]:u.position,H=xe(N[0],Q),V=xe(N[N.length-1],b),G=zB(u,H,V,Q,b),j=G[0],W=G[1],j>0&&W>0&&(ne=i.ctx.createRadialGradient(U+H,I+V,0,U+H,I+V,j),Iu(u.stops,j*2).forEach(function(ge){return ne.addColorStop(ge.stop,qe(ge.color))}),i.path(S),i.ctx.fillStyle=ne,j!==W?(ee=A.bounds.left+.5*A.bounds.width,ie=A.bounds.top+.5*A.bounds.height,te=W/j,q=1/te,i.ctx.save(),i.ctx.translate(ee,ie),i.ctx.transform(1,0,0,te,0,0),i.ctx.translate(-ee,-ie),i.ctx.fillRect(U,q*(I-ie)+ie,Q,b*q),i.ctx.restore()):i.ctx.fill())),Be.label=6;case 6:return r--,[2]}})},i=this,a=0,s=A.styles.backgroundImage.slice(0).reverse(),l.label=1;case 1:return a<s.length?(o=s[a],[5,n(o)]):[3,4];case 2:l.sent(),l.label=3;case 3:return a++,[3,1];case 4:return[2]}})})},t.prototype.renderSolidBorder=function(A,r,n){return ut(this,void 0,void 0,function(){return st(this,function(i){return this.path(uc(n,r)),this.ctx.fillStyle=qe(A),this.ctx.fill(),[2]})})},t.prototype.renderDoubleBorder=function(A,r,n,i){return ut(this,void 0,void 0,function(){var a,s;return st(this,function(o){switch(o.label){case 0:return r<3?[4,this.renderSolidBorder(A,n,i)]:[3,2];case 1:return o.sent(),[2];case 2:return a=qx(i,n),this.path(a),this.ctx.fillStyle=qe(A),this.ctx.fill(),s=$x(i,n),this.path(s),this.ctx.fill(),[2]}})})},t.prototype.renderNodeBackgroundAndBorders=function(A){return ut(this,void 0,void 0,function(){var r,n,i,a,s,o,l,u,c=this;return st(this,function(f){switch(f.label){case 0:return this.applyEffects(A.getEffects(2)),r=A.container.styles,n=!TA(r.backgroundColor)||r.backgroundImage.length,i=[{style:r.borderTopStyle,color:r.borderTopColor,width:r.borderTopWidth},{style:r.borderRightStyle,color:r.borderRightColor,width:r.borderRightWidth},{style:r.borderBottomStyle,color:r.borderBottomColor,width:r.borderBottomWidth},{style:r.borderLeftStyle,color:r.borderLeftColor,width:r.borderLeftWidth}],a=uC(_r(r.backgroundClip,0),A.curves),n||r.boxShadow.length?(this.ctx.save(),this.path(a),this.ctx.clip(),TA(r.backgroundColor)||(this.ctx.fillStyle=qe(r.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(A.container)]):[3,2];case 1:f.sent(),this.ctx.restore(),r.boxShadow.slice(0).reverse().forEach(function(h){c.ctx.save();var d=aa(A.curves),g=h.inset?0:sC,v=Jx(d,-g+(h.inset?1:-1)*h.spread.number,(h.inset?1:-1)*h.spread.number,h.spread.number*(h.inset?-2:2),h.spread.number*(h.inset?-2:2));h.inset?(c.path(d),c.ctx.clip(),c.mask(v)):(c.mask(d),c.ctx.clip(),c.path(v)),c.ctx.shadowOffsetX=h.offsetX.number+g,c.ctx.shadowOffsetY=h.offsetY.number,c.ctx.shadowColor=qe(h.color),c.ctx.shadowBlur=h.blur.number,c.ctx.fillStyle=h.inset?qe(h.color):"rgba(0,0,0,1)",c.ctx.fill(),c.ctx.restore()}),f.label=2;case 2:s=0,o=0,l=i,f.label=3;case 3:return o<l.length?(u=l[o],u.style!==0&&!TA(u.color)&&u.width>0?u.style!==2?[3,5]:[4,this.renderDashedDottedBorder(u.color,u.width,s,A.curves,2)]:[3,11]):[3,13];case 4:return f.sent(),[3,11];case 5:return u.style!==3?[3,7]:[4,this.renderDashedDottedBorder(u.color,u.width,s,A.curves,3)];case 6:return f.sent(),[3,11];case 7:return u.style!==4?[3,9]:[4,this.renderDoubleBorder(u.color,u.width,s,A.curves)];case 8:return f.sent(),[3,11];case 9:return[4,this.renderSolidBorder(u.color,s,A.curves)];case 10:f.sent(),f.label=11;case 11:s++,f.label=12;case 12:return o++,[3,3];case 13:return[2]}})})},t.prototype.renderDashedDottedBorder=function(A,r,n,i,a){return ut(this,void 0,void 0,function(){var s,o,l,u,c,f,h,d,g,v,p,m,B,_,x,y,x,y;return st(this,function(T){return this.ctx.save(),s=eC(i,n),o=uc(i,n),a===2&&(this.path(o),this.ctx.clip()),Tt(o[0])?(l=o[0].start.x,u=o[0].start.y):(l=o[0].x,u=o[0].y),Tt(o[1])?(c=o[1].end.x,f=o[1].end.y):(c=o[1].x,f=o[1].y),n===0||n===2?h=Math.abs(l-c):h=Math.abs(u-f),this.ctx.beginPath(),a===3?this.formatPath(s):this.formatPath(o.slice(0,2)),d=r<3?r*3:r*2,g=r<3?r*2:r,a===3&&(d=r,g=r),v=!0,h<=d*2?v=!1:h<=d*2+g?(p=h/(2*d+g),d*=p,g*=p):(m=Math.floor((h+g)/(d+g)),B=(h-m*d)/(m-1),_=(h-(m+1)*d)/m,g=_<=0||Math.abs(g-B)<Math.abs(g-_)?B:_),v&&(a===3?this.ctx.setLineDash([0,d+g]):this.ctx.setLineDash([d,g])),a===3?(this.ctx.lineCap="round",this.ctx.lineWidth=r):this.ctx.lineWidth=r*2+1.1,this.ctx.strokeStyle=qe(A),this.ctx.stroke(),this.ctx.setLineDash([]),a===2&&(Tt(o[0])&&(x=o[3],y=o[0],this.ctx.beginPath(),this.formatPath([new X(x.end.x,x.end.y),new X(y.start.x,y.start.y)]),this.ctx.stroke()),Tt(o[1])&&(x=o[1],y=o[2],this.ctx.beginPath(),this.formatPath([new X(x.end.x,x.end.y),new X(y.start.x,y.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},t.prototype.render=function(A){return ut(this,void 0,void 0,function(){var r;return st(this,function(n){switch(n.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=qe(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),r=jx(A),[4,this.renderStack(r)];case 1:return n.sent(),this.applyEffects([]),[2,this.canvas]}})})},t}(Hh),lC=function(e){return e instanceof wh||e instanceof Bh?!0:e instanceof ko&&e.type!==ra&&e.type!==Aa},uC=function(e,t){switch(e){case 0:return aa(t);case 2:return kx(t);case 1:default:return sa(t)}},cC=function(e){switch(e){case 1:return"center";case 2:return"right";case 0:default:return"left"}},fC=["-apple-system","system-ui"],hC=function(e){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?e.filter(function(t){return fC.indexOf(t)===-1}):e},dC=function(e){Ot(t,e);function t(A,r){var n=e.call(this,A,r)||this;return n.canvas=r.canvas?r.canvas:document.createElement("canvas"),n.ctx=n.canvas.getContext("2d"),n.options=r,n.canvas.width=Math.floor(r.width*r.scale),n.canvas.height=Math.floor(r.height*r.scale),n.canvas.style.width=r.width+"px",n.canvas.style.height=r.height+"px",n.ctx.scale(n.options.scale,n.options.scale),n.ctx.translate(-r.x,-r.y),n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+r.width+"x"+r.height+" at "+r.x+","+r.y+") with scale "+r.scale),n}return t.prototype.render=function(A){return ut(this,void 0,void 0,function(){var r,n;return st(this,function(i){switch(i.label){case 0:return r=oo(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,A),[4,gC(r)];case 1:return n=i.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=qe(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(n,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},t}(Hh),gC=function(e){return new Promise(function(t,A){var r=new Image;r.onload=function(){t(r)},r.onerror=A,r.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(e))})},vC=function(){function e(t){var A=t.id,r=t.enabled;this.id=A,this.enabled=r,this.start=Date.now()}return e.prototype.debug=function(){for(var t=[],A=0;A<arguments.length;A++)t[A]=arguments[A];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,oi([this.id,this.getTime()+"ms"],t)):this.info.apply(this,t))},e.prototype.getTime=function(){return Date.now()-this.start},e.prototype.info=function(){for(var t=[],A=0;A<arguments.length;A++)t[A]=arguments[A];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,oi([this.id,this.getTime()+"ms"],t))},e.prototype.warn=function(){for(var t=[],A=0;A<arguments.length;A++)t[A]=arguments[A];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,oi([this.id,this.getTime()+"ms"],t)):this.info.apply(this,t))},e.prototype.error=function(){for(var t=[],A=0;A<arguments.length;A++)t[A]=arguments[A];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,oi([this.id,this.getTime()+"ms"],t)):this.info.apply(this,t))},e.instances={},e}(),pC=function(){function e(t,A){var r;this.windowBounds=A,this.instanceName="#"+e.instanceCount++,this.logger=new vC({id:this.instanceName,enabled:t.logging}),this.cache=(r=t.cache)!==null&&r!==void 0?r:new Nx(this,t)}return e.instanceCount=1,e}(),mC=function(e,t){return t===void 0&&(t={}),_C(e,t)};typeof window<"u"&&Lh.setContext(window);var _C=function(e,t){return ut(void 0,void 0,void 0,function(){var A,r,n,i,a,s,o,l,u,c,f,h,d,g,v,p,m,B,_,x,T,y,T,E,F,S,U,I,Q,b,N,H,V,G,j,W,ne,ee,ie,te;return st(this,function(q){switch(q.label){case 0:if(!e||typeof e!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(A=e.ownerDocument,!A)throw new Error("Element is not attached to a Document");if(r=A.defaultView,!r)throw new Error("Document is not attached to a Window");return n={allowTaint:(E=t.allowTaint)!==null&&E!==void 0?E:!1,imageTimeout:(F=t.imageTimeout)!==null&&F!==void 0?F:15e3,proxy:t.proxy,useCORS:(S=t.useCORS)!==null&&S!==void 0?S:!1},i=Xs({logging:(U=t.logging)!==null&&U!==void 0?U:!0,cache:t.cache},n),a={windowWidth:(I=t.windowWidth)!==null&&I!==void 0?I:r.innerWidth,windowHeight:(Q=t.windowHeight)!==null&&Q!==void 0?Q:r.innerHeight,scrollX:(b=t.scrollX)!==null&&b!==void 0?b:r.pageXOffset,scrollY:(N=t.scrollY)!==null&&N!==void 0?N:r.pageYOffset},s=new aA(a.scrollX,a.scrollY,a.windowWidth,a.windowHeight),o=new pC(i,s),l=(H=t.foreignObjectRendering)!==null&&H!==void 0?H:!1,u={allowTaint:(V=t.allowTaint)!==null&&V!==void 0?V:!1,onclone:t.onclone,ignoreElements:t.ignoreElements,inlineImages:l,copyStyles:l},o.logger.debug("Starting document clone with size "+s.width+"x"+s.height+" scrolled to "+-s.left+","+-s.top),c=new sc(o,e,u),f=c.clonedReferenceElement,f?[4,c.toIFrame(A,s)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return h=q.sent(),d=Wo(f)||Bx(f)?J0(f.ownerDocument):xa(o,f),g=d.width,v=d.height,p=d.left,m=d.top,B=BC(o,f,t.backgroundColor),_={canvas:t.canvas,backgroundColor:B,scale:(j=(G=t.scale)!==null&&G!==void 0?G:r.devicePixelRatio)!==null&&j!==void 0?j:1,x:((W=t.x)!==null&&W!==void 0?W:0)+p,y:((ne=t.y)!==null&&ne!==void 0?ne:0)+m,width:(ee=t.width)!==null&&ee!==void 0?ee:Math.ceil(g),height:(ie=t.height)!==null&&ie!==void 0?ie:Math.ceil(v)},l?(o.logger.debug("Document cloned, using foreign object rendering"),T=new dC(o,_),[4,T.render(f)]):[3,3];case 2:return x=q.sent(),[3,5];case 3:return o.logger.debug("Document cloned, element located at "+p+","+m+" with size "+g+"x"+v+" using computed rendering"),o.logger.debug("Starting DOM parsing"),y=Ch(o,f),B===y.styles.backgroundColor&&(y.styles.backgroundColor=iA.TRANSPARENT),o.logger.debug("Starting renderer for element at "+_.x+","+_.y+" with size "+_.width+"x"+_.height),T=new oC(o,_),[4,T.render(y)];case 4:x=q.sent(),q.label=5;case 5:return(!((te=t.removeContainer)!==null&&te!==void 0)||te)&&(sc.destroy(h)||o.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),o.logger.debug("Finished rendering"),[2,x]}})})},BC=function(e,t,A){var r=t.ownerDocument,n=r.documentElement?Bn(e,getComputedStyle(r.documentElement).backgroundColor):iA.TRANSPARENT,i=r.body?Bn(e,getComputedStyle(r.body).backgroundColor):iA.TRANSPARENT,a=typeof A=="string"?Bn(e,A):A===null?iA.TRANSPARENT:4294967295;return t===r.documentElement?TA(n)?TA(i)?a:i:n:a};const bC=Object.freeze(Object.defineProperty({__proto__:null,default:mC},Symbol.toStringTag,{value:"Module"}));export{TC as E,FC as a,UC as b,SC as c,bC as d,mC as h};
