(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var ue,_,Tt,L,Ke,Ct,Ae,q={},kt=[],Sn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Le=Array.isArray;function $(e,t){for(var n in t)e[n]=t[n];return e}function $t(e){var t=e.parentNode;t&&t.removeChild(e)}function Dn(e,t,n){var r,o,i,s={};for(i in t)i=="key"?r=t[i]:i=="ref"?o=t[i]:s[i]=t[i];if(arguments.length>2&&(s.children=arguments.length>3?ue.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)s[i]===void 0&&(s[i]=e.defaultProps[i]);return Q(e,s,r,o,null)}function Q(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Tt};return o==null&&_.vnode!=null&&_.vnode(i),i}function M(e){return e.children}function ee(e,t){this.props=e,this.context=t}function J(e,t){if(t==null)return e.__?J(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__d||n.__e;return typeof e.type=="function"?J(e):null}function Rt(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Rt(e)}}function Ye(e){(!e.__d&&(e.__d=!0)&&L.push(e)&&!re.__r++||Ke!==_.debounceRendering)&&((Ke=_.debounceRendering)||Ct)(re)}function re(){var e,t,n,r,o,i,s,c,l;for(L.sort(Ae);e=L.shift();)e.__d&&(t=L.length,r=void 0,o=void 0,i=void 0,c=(s=(n=e).__v).__e,(l=n.__P)&&(r=[],o=[],(i=$({},s)).__v=s.__v+1,Fe(l,s,i,n.__n,l.ownerSVGElement!==void 0,s.__h!=null?[c]:null,r,c??J(s),s.__h,o),Nt(r,s,o),s.__e!=c&&Rt(s)),L.length>t&&L.sort(Ae));re.__r=0}function Pt(e,t,n,r,o,i,s,c,l,u,d){var a,p,h,f,g,z,b,w,T,D=0,I=r&&r.__k||kt,K=I.length,k=K,G=t.length;for(n.__k=[],a=0;a<G;a++)(f=n.__k[a]=(f=t[a])==null||typeof f=="boolean"||typeof f=="function"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?Q(null,f,null,null,f):Le(f)?Q(M,{children:f},null,null,null):f.__b>0?Q(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):f)!=null?(f.__=n,f.__b=n.__b+1,(w=An(f,I,b=a+D,k))===-1?h=q:(h=I[w]||q,I[w]=void 0,k--),Fe(e,f,h,o,i,s,c,l,u,d),g=f.__e,(p=f.ref)&&h.ref!=p&&(h.ref&&He(h.ref,null,f),d.push(p,f.__c||g,f)),g!=null&&(z==null&&(z=g),(T=h===q||h.__v===null)?w==-1&&D--:w!==b&&(w===b+1?D++:w>b?k>G-b?D+=w-b:D--:D=w<b&&w==b-1?w-b:0),b=a+D,typeof f.type!="function"||w===b&&h.__k!==f.__k?typeof f.type=="function"||w===b&&!T?f.__d!==void 0?(l=f.__d,f.__d=void 0):l=g.nextSibling:l=Ot(e,g,l):l=Bt(f,l,e),typeof n.type=="function"&&(n.__d=l))):(h=I[a])&&h.key==null&&h.__e&&(h.__e==l&&(h.__=r,l=J(h)),Te(h,h,!1),I[a]=null);for(n.__e=z,a=K;a--;)I[a]!=null&&(typeof n.type=="function"&&I[a].__e!=null&&I[a].__e==n.__d&&(n.__d=I[a].__e.nextSibling),Te(I[a],I[a]))}function Bt(e,t,n){for(var r,o=e.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=e,t=typeof r.type=="function"?Bt(r,t,n):Ot(n,r.__e,t));return t}function Ot(e,t,n){return n==null||n.parentNode!==e?e.insertBefore(t,null):t==n&&t.parentNode!=null||e.insertBefore(t,n),t.nextSibling}function An(e,t,n,r){var o=e.key,i=e.type,s=n-1,c=n+1,l=t[n];if(l===null||l&&o==l.key&&i===l.type)return n;if(r>(l!=null?1:0))for(;s>=0||c<t.length;){if(s>=0){if((l=t[s])&&o==l.key&&i===l.type)return s;s--}if(c<t.length){if((l=t[c])&&o==l.key&&i===l.type)return c;c++}}return-1}function Tn(e,t,n,r,o){var i;for(i in n)i==="children"||i==="key"||i in t||oe(e,i,null,n[i],r);for(i in t)o&&typeof t[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===t[i]||oe(e,i,t[i],n[i],r)}function Je(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Sn.test(t)?n:n+"px"}function oe(e,t,n,r,o){var i;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Je(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Je(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r?n.u=r.u:(n.u=Date.now(),e.addEventListener(t,i?Ze:Xe,i)):e.removeEventListener(t,i?Ze:Xe,i);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function Xe(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(_.event?_.event(e):e)}function Ze(e){return this.l[e.type+!0](_.event?_.event(e):e)}function Fe(e,t,n,r,o,i,s,c,l,u){var d,a,p,h,f,g,z,b,w,T,D,I,K,k,G,A=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,c=t.__e=n.__e,t.__h=null,i=[c]),(d=_.__b)&&d(t);e:if(typeof A=="function")try{if(b=t.props,w=(d=A.contextType)&&r[d.__c],T=d?w?w.props.value:d.__:r,n.__c?z=(a=t.__c=n.__c).__=a.__E:("prototype"in A&&A.prototype.render?t.__c=a=new A(b,T):(t.__c=a=new ee(b,T),a.constructor=A,a.render=kn),w&&w.sub(a),a.props=b,a.state||(a.state={}),a.context=T,a.__n=r,p=a.__d=!0,a.__h=[],a._sb=[]),a.__s==null&&(a.__s=a.state),A.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=$({},a.__s)),$(a.__s,A.getDerivedStateFromProps(b,a.__s))),h=a.props,f=a.state,a.__v=t,p)A.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(A.getDerivedStateFromProps==null&&b!==h&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(b,T),!a.__e&&(a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(b,a.__s,T)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(a.props=b,a.state=a.__s,a.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(Z){Z&&(Z.__=t)}),D=0;D<a._sb.length;D++)a.__h.push(a._sb[D]);a._sb=[],a.__h.length&&s.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(b,a.__s,T),a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(h,f,g)})}if(a.context=T,a.props=b,a.__P=e,a.__e=!1,I=_.__r,K=0,"prototype"in A&&A.prototype.render){for(a.state=a.__s,a.__d=!1,I&&I(t),d=a.render(a.props,a.state,a.context),k=0;k<a._sb.length;k++)a.__h.push(a._sb[k]);a._sb=[]}else do a.__d=!1,I&&I(t),d=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++K<25);a.state=a.__s,a.getChildContext!=null&&(r=$($({},r),a.getChildContext())),p||a.getSnapshotBeforeUpdate==null||(g=a.getSnapshotBeforeUpdate(h,f)),Pt(e,Le(G=d!=null&&d.type===M&&d.key==null?d.props.children:d)?G:[G],t,n,r,o,i,s,c,l,u),a.base=t.__e,t.__h=null,a.__h.length&&s.push(a),z&&(a.__E=a.__=null)}catch(Z){t.__v=null,(l||i!=null)&&(t.__e=c,t.__h=!!l,i[i.indexOf(c)]=null),_.__e(Z,t,n)}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Cn(n.__e,t,n,r,o,i,s,l,u);(d=_.diffed)&&d(t)}function Nt(e,t,n){for(var r=0;r<n.length;r++)He(n[r],n[++r],n[++r]);_.__c&&_.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(i){i.call(o)})}catch(i){_.__e(i,o.__v)}})}function Cn(e,t,n,r,o,i,s,c,l){var u,d,a,p=n.props,h=t.props,f=t.type,g=0;if(f==="svg"&&(o=!0),i!=null){for(;g<i.length;g++)if((u=i[g])&&"setAttribute"in u==!!f&&(f?u.localName===f:u.nodeType===3)){e=u,i[g]=null;break}}if(e==null){if(f===null)return document.createTextNode(h);e=o?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,h.is&&h),i=null,c=!1}if(f===null)p===h||c&&e.data===h||(e.data=h);else{if(i=i&&ue.call(e.childNodes),d=(p=n.props||q).dangerouslySetInnerHTML,a=h.dangerouslySetInnerHTML,!c){if(i!=null)for(p={},g=0;g<e.attributes.length;g++)p[e.attributes[g].name]=e.attributes[g].value;(a||d)&&(a&&(d&&a.__html==d.__html||a.__html===e.innerHTML)||(e.innerHTML=a&&a.__html||""))}if(Tn(e,h,p,o,c),a)t.__k=[];else if(Pt(e,Le(g=t.props.children)?g:[g],t,n,r,o&&f!=="foreignObject",i,s,i?i[0]:n.__k&&J(n,0),c,l),i!=null)for(g=i.length;g--;)i[g]!=null&&$t(i[g]);c||("value"in h&&(g=h.value)!==void 0&&(g!==e.value||f==="progress"&&!g||f==="option"&&g!==p.value)&&oe(e,"value",g,p.value,!1),"checked"in h&&(g=h.checked)!==void 0&&g!==e.checked&&oe(e,"checked",g,p.checked,!1))}return e}function He(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){_.__e(r,n)}}function Te(e,t,n){var r,o;if(_.unmount&&_.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||He(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){_.__e(i,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&Te(r[o],t,n||typeof e.type!="function");n||e.__e==null||$t(e.__e),e.__=e.__e=e.__d=void 0}function kn(e,t,n){return this.constructor(e,n)}function $n(e,t,n){var r,o,i,s;_.__&&_.__(e,t),o=(r=typeof n=="function")?null:n&&n.__k||t.__k,i=[],s=[],Fe(t,e=(!r&&n||t).__k=Dn(M,null,[e]),o||q,q,t.ownerSVGElement!==void 0,!r&&n?[n]:o?null:t.firstChild?ue.call(t.childNodes):null,i,!r&&n?n:o?o.__e:t.firstChild,r,s),Nt(i,e,s)}ue=kt.slice,_={__e:function(e,t,n,r){for(var o,i,s;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(e)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),s=o.__d),s)return o.__E=o}catch(c){e=c}throw e}},Tt=0,ee.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=$({},this.state),typeof e=="function"&&(e=e($({},n),this.props)),e&&$(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Ye(this))},ee.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ye(this))},ee.prototype.render=M,L=[],Ct=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ae=function(e,t){return e.__v.__b-t.__v.__b},re.__r=0;var ie,v,_e,Qe,Ce=0,Mt=[],te=[],et=_.__b,tt=_.__r,nt=_.diffed,rt=_.__c,ot=_.unmount;function xt(e,t){_.__h&&_.__h(v,e,Ce||t),Ce=0;var n=v.__H||(v.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:te}),n.__[e]}function C(e){return Ce=1,Rn(Lt,e)}function Rn(e,t,n){var r=xt(ie++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Lt(void 0,t),function(c){var l=r.__N?r.__N[0]:r.__[0],u=r.t(l,c);l!==u&&(r.__N=[u,r.__[1]],r.__c.setState({}))}],r.__c=v,!v.u)){var o=function(c,l,u){if(!r.__c.__H)return!0;var d=r.__c.__H.__.filter(function(p){return p.__c});if(d.every(function(p){return!p.__N}))return!i||i.call(this,c,l,u);var a=!1;return d.forEach(function(p){if(p.__N){var h=p.__[0];p.__=p.__N,p.__N=void 0,h!==p.__[0]&&(a=!0)}}),!(!a&&r.__c.props===c)&&(!i||i.call(this,c,l,u))};v.u=!0;var i=v.shouldComponentUpdate,s=v.componentWillUpdate;v.componentWillUpdate=function(c,l,u){if(this.__e){var d=i;i=void 0,o(c,l,u),i=d}s&&s.call(this,c,l,u)},v.shouldComponentUpdate=o}return r.__N||r.__}function Pn(e,t){var n=xt(ie++,3);!_.__s&&Nn(n.__H,t)&&(n.__=e,n.i=t,v.__H.__h.push(n))}function Bn(){for(var e;e=Mt.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ne),e.__H.__h.forEach(ke),e.__H.__h=[]}catch(t){e.__H.__h=[],_.__e(t,e.__v)}}_.__b=function(e){v=null,et&&et(e)},_.__r=function(e){tt&&tt(e),ie=0;var t=(v=e.__c).__H;t&&(_e===v?(t.__h=[],v.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=te,n.__N=n.i=void 0})):(t.__h.forEach(ne),t.__h.forEach(ke),t.__h=[],ie=0)),_e=v},_.diffed=function(e){nt&&nt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Mt.push(t)!==1&&Qe===_.requestAnimationFrame||((Qe=_.requestAnimationFrame)||On)(Bn)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==te&&(n.__=n.__V),n.i=void 0,n.__V=te})),_e=v=null},_.__c=function(e,t){t.some(function(n){try{n.__h.forEach(ne),n.__h=n.__h.filter(function(r){return!r.__||ke(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],_.__e(r,n.__v)}}),rt&&rt(e,t)},_.unmount=function(e){ot&&ot(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{ne(r)}catch(o){t=o}}),n.__H=void 0,t&&_.__e(t,n.__v))};var it=typeof requestAnimationFrame=="function";function On(e){var t,n=function(){clearTimeout(r),it&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);it&&(t=requestAnimationFrame(n))}function ne(e){var t=v,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),v=t}function ke(e){var t=v;e.__c=e.__(),v=t}function Nn(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Lt(e,t){return typeof t=="function"?t(e):t}var Mn=0;function m(e,t,n,r,o,i){var s,c,l={};for(c in t)c=="ref"?s=t[c]:l[c]=t[c];var u={type:e,props:l,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Mn,__source:o,__self:i};if(typeof e=="function"&&(s=e.defaultProps))for(c in s)l[c]===void 0&&(l[c]=s[c]);return _.vnode&&_.vnode(u),u}function xn(){return m("div",{class:"-z-50 fixed top-0 left-0 bg-gradient-to-tr from-sky-400 via-rose-400 to-lime-400 h-screen w-screen"})}function Ln({title:e,startFunc:t}){const[n,r]=C(""),[o,i]=C("");function s(u){r(u.target.value)}function c(u){t(n,o),u.preventDefault()}function l(u){i(u.target.value)}return m(M,{children:m("div",{class:"bg-black bg-opacity-70 p-3 rounded-2xl text-center text-white col-span-3 m-2 flex flex-col md:col-start-2 md:col-end-2 md:m-0",children:[m("h1",{class:"mb-4",children:e}),m("form",{onSubmit:c,class:"flex flex-col",children:[m("label",{for:"pronouns",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Select a pronoun set"}),m("select",{name:"pronouns",id:"pronouns",class:"dropdown",onChange:s,children:[m("option",{value:"he",children:"He/Him"}),m("option",{value:"she",children:"She/Her"}),m("option",{value:"they",children:"They/Them"}),m("option",{value:"it",children:"it"})]}),m("label",{for:"name",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Input a name"}),m("input",{id:"name",type:"text",class:"textInput",value:o,onInput:l,placeholder:"Name"}),m("button",{type:"submit",class:"bg-lime-500 hover:bg-lime-600 text-gray-800 font-semibold py-2 px-4 border border-lime-500 rounded shadow mt-4",children:"Start Game"})]})]})})}async function Fn(e){const n=await(await fetch(`https://en.pronouns.page/api/pronouns/${e}`)).json();return console.log(n),n}function Hn({pronouns:e,startFunc:t}){const[n,r]=C(""),[o,i]=C(""),[s,c]=C([""]);async function l(){const d=await Fn(e);r(d.name),i(d.description),c(d.examples)}function u(){t()}return Pn(()=>{l()},[]),m(M,{children:m("div",{class:"bg-black bg-opacity-70 p-3 rounded-2xl text-center text-white col-span-3 m-2 flex flex-col md:col-start-2 md:col-end-2 md:m-0",children:[m("h1",{children:n}),m("h2",{children:o}),m("ul",{class:"",children:s.map(d=>m("li",{children:["- ",d]}))}),m("button",{onClick:u,class:"bg-lime-500 hover:bg-lime-600 text-gray-800 font-semibold py-2 px-4 border border-lime-500 rounded shadow mt-4",children:"Start Game"})]})})}function jn({pronouns:e}){const[t,n]=C(!1);function r(){n(!0),o()}async function o(){}return m(M,{children:t?m("p",{children:"Hello"}):m(Hn,{pronouns:e,startFunc:r})})}const Un="modulepreload",Vn=function(e){return"/"+e},st={},Wn=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Vn(i),i in st)return;st[i]=!0;const s=i.endsWith(".css"),c=s?'[rel="stylesheet"]':"";if(!!r)for(let d=o.length-1;d>=0;d--){const a=o[d];if(a.href===i&&(!s||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":Un,s||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),s)return new Promise((d,a)=>{u.addEventListener("load",d),u.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})};function zn(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:o,onRegisteredSW:i,onRegisterError:s}=e;let c,l;const u=async(a=!0)=>{await l};async function d(){if("serviceWorker"in navigator){const{Workbox:a}=await Wn(()=>import("./workbox-window.prod.es5-a7b12eab.js"),[]);c=new a("/sw.js",{scope:"/",type:"classic"}),c.addEventListener("activated",p=>{(p.isUpdate||p.isExternal)&&window.location.reload()}),c.addEventListener("installed",p=>{p.isUpdate||r==null||r()}),c.register({immediate:t}).then(p=>{i?i("/sw.js",p):o==null||o(p)}).catch(p=>{s==null||s(p)})}}return l=d(),u}function Gn(e={}){const{immediate:t=!0,onNeedRefresh:n,onOfflineReady:r,onRegistered:o,onRegisteredSW:i,onRegisterError:s}=e,[c,l]=C(!1),[u,d]=C(!1),[a]=C(()=>zn({immediate:t,onOfflineReady(){d(!0),r==null||r()},onNeedRefresh(){l(!0),n==null||n()},onRegistered:o,onRegisteredSW:i,onRegisterError:s}));return{needRefresh:[c,l],offlineReady:[u,d],updateServiceWorker:a}}function qn(){const{offlineReady:[e,t],needRefresh:[n,r],updateServiceWorker:o}=Gn({onRegistered(s){console.log("SW Registered: "+s)},onRegisterError(s){console.log("SW registration error",s)}}),i=()=>{t(!1),r(!1)};return m("div",{className:"ReloadPrompt-container",children:(e||n)&&m("div",{className:"ReloadPrompt-toast",children:[m("div",{className:"ReloadPrompt-message",children:e?m("span",{children:"App ready to work offline"}):m("span",{children:"New content available, click on reload button to update."})}),n&&m("button",{className:"ReloadPrompt-toast-button",onClick:()=>o(!0),children:"Reload"}),m("button",{className:"ReloadPrompt-toast-button",onClick:()=>i(),children:"Close"})]})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},Kn=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((o&31)<<6|i&63)}else if(o>239&&o<365){const i=e[n++],s=e[n++],c=e[n++],l=((o&7)<<18|(i&63)<<12|(s&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const i=e[n++],s=e[n++];t[r++]=String.fromCharCode((o&15)<<12|(i&63)<<6|s&63)}}return t.join("")},Ht={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const i=e[o],s=o+1<e.length,c=s?e[o+1]:0,l=o+2<e.length,u=l?e[o+2]:0,d=i>>2,a=(i&3)<<4|c>>4;let p=(c&15)<<2|u>>6,h=u&63;l||(h=64,s||(p=64)),r.push(n[d],n[a],n[p],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ft(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Kn(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const i=n[e.charAt(o++)],c=o<e.length?n[e.charAt(o)]:0;++o;const u=o<e.length?n[e.charAt(o)]:64;++o;const a=o<e.length?n[e.charAt(o)]:64;if(++o,i==null||c==null||u==null||a==null)throw new Yn;const p=i<<2|c>>4;if(r.push(p),u!==64){const h=c<<4&240|u>>2;if(r.push(h),a!==64){const f=u<<6&192|a;r.push(f)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Yn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jn=function(e){const t=Ft(e);return Ht.encodeByteArray(t,!0)},jt=function(e){return Jn(e).replace(/\./g,"")},Xn=function(e){try{return Ht.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=()=>Zn().__FIREBASE_DEFAULTS__,er=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},tr=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Xn(e[1]);return t&&JSON.parse(t)},nr=()=>{try{return Qn()||er()||tr()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Ut=()=>{var e;return(e=nr())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function or(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Vt(){try{return typeof indexedDB=="object"}catch{return!1}}function Wt(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var i;t(((i=o.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function ir(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="FirebaseError";class W extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=sr,Object.setPrototypeOf(this,W.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,de.prototype.create)}}class de{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},o=`${this.service}/${t}`,i=this.errors[t],s=i?ar(i,r):"Error",c=`${this.serviceName}: ${s} (${o}).`;return new W(o,c,r)}}function ar(e,t){return e.replace(cr,(n,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const cr=/\{\$([^}]+)}/g;function se(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const i=e[o],s=t[o];if(at(i)&&at(s)){if(!se(i,s))return!1}else if(i!==s)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function at(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=1e3,ur=2,dr=4*60*60*1e3,fr=.5;function ct(e,t=lr,n=ur){const r=t*Math.pow(n,e),o=Math.round(fr*r*(Math.random()-.5)*2);return Math.min(dr,r+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e){return e&&e._delegate?e._delegate:e}class N{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new rr;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(o)return null;throw i}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(_r(t))try{this.getOrInitializeService({instanceIdentifier:x})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:o});r.resolve(i)}catch{}}}}clearInstance(t=x){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=x){return this.instances.has(t)}getOptions(t=x){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,s]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&s.resolve(o)}return o}onInit(t,n){var r;const o=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(o,i);const s=this.instances.get(o);return s&&t(s,o),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pr(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=x){return this.component?this.component.multipleInstances?t:x:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pr(e){return e===x?void 0:e}function _r(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new hr(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var y;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(y||(y={}));const gr={debug:y.DEBUG,verbose:y.VERBOSE,info:y.INFO,warn:y.WARN,error:y.ERROR,silent:y.SILENT},yr=y.INFO,br={[y.DEBUG]:"log",[y.VERBOSE]:"log",[y.INFO]:"info",[y.WARN]:"warn",[y.ERROR]:"error"},vr=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),o=br[t];if(o)console[o](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Gt{constructor(t){this.name=t,this._logLevel=yr,this._logHandler=vr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?gr[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,y.DEBUG,...t),this._logHandler(this,y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,y.VERBOSE,...t),this._logHandler(this,y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,y.INFO,...t),this._logHandler(this,y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,y.WARN,...t),this._logHandler(this,y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,y.ERROR,...t),this._logHandler(this,y.ERROR,...t)}}const wr=(e,t)=>t.some(n=>e instanceof n);let lt,ut;function Ir(){return lt||(lt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Er(){return ut||(ut=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qt=new WeakMap,$e=new WeakMap,Kt=new WeakMap,me=new WeakMap,je=new WeakMap;function Sr(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{n(R(e.result)),o()},s=()=>{r(e.error),o()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&qt.set(n,e)}).catch(()=>{}),je.set(t,e),t}function Dr(e){if($e.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{n(),o()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});$e.set(e,t)}let Re={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return $e.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Kt.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return R(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ar(e){Re=e(Re)}function Tr(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ge(this),t,...n);return Kt.set(r,t.sort?t.sort():[t]),R(r)}:Er().includes(e)?function(...t){return e.apply(ge(this),t),R(qt.get(this))}:function(...t){return R(e.apply(ge(this),t))}}function Cr(e){return typeof e=="function"?Tr(e):(e instanceof IDBTransaction&&Dr(e),wr(e,Ir())?new Proxy(e,Re):e)}function R(e){if(e instanceof IDBRequest)return Sr(e);if(me.has(e))return me.get(e);const t=Cr(e);return t!==e&&(me.set(e,t),je.set(t,e)),t}const ge=e=>je.get(e);function kr(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(e,t),c=R(s);return r&&s.addEventListener("upgradeneeded",l=>{r(R(s.result),l.oldVersion,l.newVersion,R(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),o&&l.addEventListener("versionchange",u=>o(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const $r=["get","getKey","getAll","getAllKeys","count"],Rr=["put","add","delete","clear"],ye=new Map;function dt(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ye.get(t))return ye.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=Rr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||$r.includes(n)))return;const i=async function(s,...c){const l=this.transaction(s,o?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),o&&l.done]))[0]};return ye.set(t,i),i}Ar(e=>({...e,get:(t,n,r)=>dt(t,n)||e.get(t,n,r),has:(t,n)=>!!dt(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Br(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Br(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Pe="@firebase/app",ft="0.9.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=new Gt("@firebase/app"),Or="@firebase/app-compat",Nr="@firebase/analytics-compat",Mr="@firebase/analytics",xr="@firebase/app-check-compat",Lr="@firebase/app-check",Fr="@firebase/auth",Hr="@firebase/auth-compat",jr="@firebase/database",Ur="@firebase/database-compat",Vr="@firebase/functions",Wr="@firebase/functions-compat",zr="@firebase/installations",Gr="@firebase/installations-compat",qr="@firebase/messaging",Kr="@firebase/messaging-compat",Yr="@firebase/performance",Jr="@firebase/performance-compat",Xr="@firebase/remote-config",Zr="@firebase/remote-config-compat",Qr="@firebase/storage",eo="@firebase/storage-compat",to="@firebase/firestore",no="@firebase/firestore-compat",ro="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be="[DEFAULT]",oo={[Pe]:"fire-core",[Or]:"fire-core-compat",[Mr]:"fire-analytics",[Nr]:"fire-analytics-compat",[Lr]:"fire-app-check",[xr]:"fire-app-check-compat",[Fr]:"fire-auth",[Hr]:"fire-auth-compat",[jr]:"fire-rtdb",[Ur]:"fire-rtdb-compat",[Vr]:"fire-fn",[Wr]:"fire-fn-compat",[zr]:"fire-iid",[Gr]:"fire-iid-compat",[qr]:"fire-fcm",[Kr]:"fire-fcm-compat",[Yr]:"fire-perf",[Jr]:"fire-perf-compat",[Xr]:"fire-rc",[Zr]:"fire-rc-compat",[Qr]:"fire-gcs",[eo]:"fire-gcs-compat",[to]:"fire-fst",[no]:"fire-fst-compat","fire-js":"fire-js",[ro]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=new Map,Oe=new Map;function io(e,t){try{e.container.addComponent(t)}catch(n){H.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function j(e){const t=e.name;if(Oe.has(t))return H.debug(`There were multiple attempts to register component ${t}.`),!1;Oe.set(t,e);for(const n of ae.values())io(n,e);return!0}function fe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},P=new de("app","Firebase",so);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new N("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw P.create("app-deleted",{appName:this._name})}}function Yt(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Be,automaticDataCollectionEnabled:!1},t),o=r.name;if(typeof o!="string"||!o)throw P.create("bad-app-name",{appName:String(o)});if(n||(n=Ut()),!n)throw P.create("no-options");const i=ae.get(o);if(i){if(se(n,i.options)&&se(r,i.config))return i;throw P.create("duplicate-app",{appName:o})}const s=new mr(o);for(const l of Oe.values())s.addComponent(l);const c=new ao(n,r,s);return ae.set(o,c),c}function co(e=Be){const t=ae.get(e);if(!t&&e===Be&&Ut())return Yt();if(!t)throw P.create("no-app",{appName:e});return t}function B(e,t,n){var r;let o=(r=oo[e])!==null&&r!==void 0?r:e;n&&(o+=`-${n}`);const i=o.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const c=[`Unable to register library "${o}" with version "${t}":`];i&&c.push(`library name "${o}" contains illegal characters (whitespace or "/")`),i&&s&&c.push("and"),s&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),H.warn(c.join(" "));return}j(new N(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo="firebase-heartbeat-database",uo=1,X="firebase-heartbeat-store";let be=null;function Jt(){return be||(be=kr(lo,uo,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(X)}}}).catch(e=>{throw P.create("idb-open",{originalErrorMessage:e.message})})),be}async function fo(e){try{return await(await Jt()).transaction(X).objectStore(X).get(Xt(e))}catch(t){if(t instanceof W)H.warn(t.message);else{const n=P.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});H.warn(n.message)}}}async function ht(e,t){try{const r=(await Jt()).transaction(X,"readwrite");await r.objectStore(X).put(t,Xt(e)),await r.done}catch(n){if(n instanceof W)H.warn(n.message);else{const r=P.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});H.warn(r.message)}}}function Xt(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=1024,po=30*24*60*60*1e3;class _o{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new go(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=pt();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const i=new Date(o.date).valueOf();return Date.now()-i<=po}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=pt(),{heartbeatsToSend:n,unsentEntries:r}=mo(this._heartbeatsCache.heartbeats),o=jt(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function pt(){return new Date().toISOString().substring(0,10)}function mo(e,t=ho){const n=[];let r=e.slice();for(const o of e){const i=n.find(s=>s.agent===o.agent);if(i){if(i.dates.push(o.date),_t(n)>t){i.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),_t(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class go{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vt()?Wt().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await fo(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return ht(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return ht(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function _t(e){return jt(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(e){j(new N("platform-logger",t=>new Pr(t),"PRIVATE")),j(new N("heartbeat",t=>new _o(t),"PRIVATE")),B(Pe,ft,e),B(Pe,ft,"esm2017"),B("fire-js","")}yo("");var bo="firebase",vo="10.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */B(bo,vo,"app");const wo=(e,t)=>t.some(n=>e instanceof n);let mt,gt;function Io(){return mt||(mt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Eo(){return gt||(gt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zt=new WeakMap,Ne=new WeakMap,Qt=new WeakMap,ve=new WeakMap,Ue=new WeakMap;function So(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{n(O(e.result)),o()},s=()=>{r(e.error),o()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Zt.set(n,e)}).catch(()=>{}),Ue.set(t,e),t}function Do(e){if(Ne.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{n(),o()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});Ne.set(e,t)}let Me={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ne.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Qt.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return O(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ao(e){Me=e(Me)}function To(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(we(this),t,...n);return Qt.set(r,t.sort?t.sort():[t]),O(r)}:Eo().includes(e)?function(...t){return e.apply(we(this),t),O(Zt.get(this))}:function(...t){return O(e.apply(we(this),t))}}function Co(e){return typeof e=="function"?To(e):(e instanceof IDBTransaction&&Do(e),wo(e,Io())?new Proxy(e,Me):e)}function O(e){if(e instanceof IDBRequest)return So(e);if(ve.has(e))return ve.get(e);const t=Co(e);return t!==e&&(ve.set(e,t),Ue.set(t,e)),t}const we=e=>Ue.get(e);function ko(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(e,t),c=O(s);return r&&s.addEventListener("upgradeneeded",l=>{r(O(s.result),l.oldVersion,l.newVersion,O(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),c.then(l=>{i&&l.addEventListener("close",()=>i()),o&&l.addEventListener("versionchange",()=>o())}).catch(()=>{}),c}const $o=["get","getKey","getAll","getAllKeys","count"],Ro=["put","add","delete","clear"],Ie=new Map;function yt(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ie.get(t))return Ie.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=Ro.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||$o.includes(n)))return;const i=async function(s,...c){const l=this.transaction(s,o?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),o&&l.done]))[0]};return Ie.set(t,i),i}Ao(e=>({...e,get:(t,n,r)=>yt(t,n)||e.get(t,n,r),has:(t,n)=>!!yt(t,n)||e.has(t,n)}));const en="@firebase/installations",Ve="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=1e4,nn=`w:${Ve}`,rn="FIS_v2",Po="https://firebaseinstallations.googleapis.com/v1",Bo=60*60*1e3,Oo="installations",No="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},U=new de(Oo,No,Mo);function on(e){return e instanceof W&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn({projectId:e}){return`${Po}/projects/${e}/installations`}function an(e){return{token:e.token,requestStatus:2,expiresIn:Lo(e.expiresIn),creationTime:Date.now()}}async function cn(e,t){const r=(await t.json()).error;return U.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ln({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function xo(e,{refreshToken:t}){const n=ln(e);return n.append("Authorization",Fo(t)),n}async function un(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Lo(e){return Number(e.replace("s","000"))}function Fo(e){return`${rn} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ho({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=sn(e),o=ln(e),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&o.append("x-firebase-client",u)}const s={fid:n,authVersion:rn,appId:e.appId,sdkVersion:nn},c={method:"POST",headers:o,body:JSON.stringify(s)},l=await un(()=>fetch(r,c));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:an(u.authToken)}}else throw await cn("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=/^[cdef][\w-]{21}$/,xe="";function Vo(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Wo(e);return Uo.test(n)?n:xe}catch{return xe}}function Wo(e){return jo(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new Map;function hn(e,t){const n=he(e);pn(n,t),zo(n,t)}function pn(e,t){const n=fn.get(e);if(n)for(const r of n)r(t)}function zo(e,t){const n=Go();n&&n.postMessage({key:e,fid:t}),qo()}let F=null;function Go(){return!F&&"BroadcastChannel"in self&&(F=new BroadcastChannel("[Firebase] FID Change"),F.onmessage=e=>{pn(e.data.key,e.data.fid)}),F}function qo(){fn.size===0&&F&&(F.close(),F=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="firebase-installations-database",Yo=1,V="firebase-installations-store";let Ee=null;function We(){return Ee||(Ee=ko(Ko,Yo,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(V)}}})),Ee}async function ce(e,t){const n=he(e),o=(await We()).transaction(V,"readwrite"),i=o.objectStore(V),s=await i.get(n);return await i.put(t,n),await o.done,(!s||s.fid!==t.fid)&&hn(e,t.fid),t}async function _n(e){const t=he(e),r=(await We()).transaction(V,"readwrite");await r.objectStore(V).delete(t),await r.done}async function pe(e,t){const n=he(e),o=(await We()).transaction(V,"readwrite"),i=o.objectStore(V),s=await i.get(n),c=t(s);return c===void 0?await i.delete(n):await i.put(c,n),await o.done,c&&(!s||s.fid!==c.fid)&&hn(e,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ze(e){let t;const n=await pe(e.appConfig,r=>{const o=Jo(r),i=Xo(e,o);return t=i.registrationPromise,i.installationEntry});return n.fid===xe?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Jo(e){const t=e||{fid:Vo(),registrationStatus:0};return mn(t)}function Xo(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(U.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Zo(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Qo(e)}:{installationEntry:t}}async function Zo(e,t){try{const n=await Ho(e,t);return ce(e.appConfig,n)}catch(n){throw on(n)&&n.customData.serverCode===409?await _n(e.appConfig):await ce(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Qo(e){let t=await bt(e.appConfig);for(;t.registrationStatus===1;)await dn(100),t=await bt(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ze(e);return r||n}return t}function bt(e){return pe(e,t=>{if(!t)throw U.create("installation-not-found");return mn(t)})}function mn(e){return ei(e)?{fid:e.fid,registrationStatus:0}:e}function ei(e){return e.registrationStatus===1&&e.registrationTime+tn<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti({appConfig:e,heartbeatServiceProvider:t},n){const r=ni(e,n),o=xo(e,n),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&o.append("x-firebase-client",u)}const s={installation:{sdkVersion:nn,appId:e.appId}},c={method:"POST",headers:o,body:JSON.stringify(s)},l=await un(()=>fetch(r,c));if(l.ok){const u=await l.json();return an(u)}else throw await cn("Generate Auth Token",l)}function ni(e,{fid:t}){return`${sn(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ge(e,t=!1){let n;const r=await pe(e.appConfig,i=>{if(!gn(i))throw U.create("not-registered");const s=i.authToken;if(!t&&ii(s))return i;if(s.requestStatus===1)return n=ri(e,t),i;{if(!navigator.onLine)throw U.create("app-offline");const c=ai(i);return n=oi(e,c),c}});return n?await n:r.authToken}async function ri(e,t){let n=await vt(e.appConfig);for(;n.authToken.requestStatus===1;)await dn(100),n=await vt(e.appConfig);const r=n.authToken;return r.requestStatus===0?Ge(e,t):r}function vt(e){return pe(e,t=>{if(!gn(t))throw U.create("not-registered");const n=t.authToken;return ci(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function oi(e,t){try{const n=await ti(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await ce(e.appConfig,r),n}catch(n){if(on(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await _n(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ce(e.appConfig,r)}throw n}}function gn(e){return e!==void 0&&e.registrationStatus===2}function ii(e){return e.requestStatus===2&&!si(e)}function si(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Bo}function ai(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ci(e){return e.requestStatus===1&&e.requestTime+tn<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(e){const t=e,{installationEntry:n,registrationPromise:r}=await ze(t);return r?r.catch(console.error):Ge(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(e,t=!1){const n=e;return await di(n),(await Ge(n,t)).token}async function di(e){const{registrationPromise:t}=await ze(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(e){if(!e||!e.options)throw Se("App Configuration");if(!e.name)throw Se("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Se(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Se(e){return U.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn="installations",hi="installations-internal",pi=e=>{const t=e.getProvider("app").getImmediate(),n=fi(t),r=fe(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},_i=e=>{const t=e.getProvider("app").getImmediate(),n=fe(t,yn).getImmediate();return{getId:()=>li(n),getToken:o=>ui(n,o)}};function mi(){j(new N(yn,pi,"PUBLIC")),j(new N(hi,_i,"PRIVATE"))}mi();B(en,Ve);B(en,Ve,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le="analytics",gi="firebase_id",yi="origin",bi=60*1e3,vi="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",qe="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=new Gt("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},S=new de("analytics","Analytics",wi);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(e){if(!e.startsWith(qe)){const t=S.create("invalid-gtag-resource",{gtagURL:e});return E.warn(t.message),""}return e}function bn(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Ei(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Si(e,t){const n=Ei("firebase-js-sdk-policy",{createScriptURL:Ii}),r=document.createElement("script"),o=`${qe}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(o):o,r.async=!0,document.head.appendChild(r)}function Di(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Ai(e,t,n,r,o,i){const s=r[o];try{if(s)await t[s];else{const l=(await bn(n)).find(u=>u.measurementId===o);l&&await t[l.appId]}}catch(c){E.error(c)}e("config",o,i)}async function Ti(e,t,n,r,o){try{let i=[];if(o&&o.send_to){let s=o.send_to;Array.isArray(s)||(s=[s]);const c=await bn(n);for(const l of s){const u=c.find(a=>a.measurementId===l),d=u&&t[u.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,o||{})}catch(i){E.error(i)}}function Ci(e,t,n,r){async function o(i,...s){try{if(i==="event"){const[c,l]=s;await Ti(e,t,n,c,l)}else if(i==="config"){const[c,l]=s;await Ai(e,t,n,r,c,l)}else if(i==="consent"){const[c]=s;e("consent","update",c)}else if(i==="get"){const[c,l,u]=s;e("get",c,l,u)}else if(i==="set"){const[c]=s;e("set",c)}else e(i,...s)}catch(c){E.error(c)}}return o}function ki(e,t,n,r,o){let i=function(...s){window[r].push(arguments)};return window[o]&&typeof window[o]=="function"&&(i=window[o]),window[o]=Ci(i,e,t,n),{gtagCore:i,wrappedGtag:window[o]}}function $i(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(qe)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=30,Pi=1e3;class Bi{constructor(t={},n=Pi){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const vn=new Bi;function Oi(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Ni(e){var t;const{appId:n,apiKey:r}=e,o={method:"GET",headers:Oi(r)},i=vi.replace("{app-id}",n),s=await fetch(i,o);if(s.status!==200&&s.status!==304){let c="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(c=l.error.message)}catch{}throw S.create("config-fetch-failed",{httpStatus:s.status,responseMessage:c})}return s.json()}async function Mi(e,t=vn,n){const{appId:r,apiKey:o,measurementId:i}=e.options;if(!r)throw S.create("no-app-id");if(!o){if(i)return{measurementId:i,appId:r};throw S.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new Fi;return setTimeout(async()=>{c.abort()},n!==void 0?n:bi),wn({appId:r,apiKey:o,measurementId:i},s,c,t)}async function wn(e,{throttleEndTimeMillis:t,backoffCount:n},r,o=vn){var i;const{appId:s,measurementId:c}=e;try{await xi(r,t)}catch(l){if(c)return E.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:c};throw l}try{const l=await Ni(e);return o.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!Li(u)){if(o.deleteThrottleMetadata(s),c)return E.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:c};throw l}const d=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?ct(n,o.intervalMillis,Ri):ct(n,o.intervalMillis),a={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return o.setThrottleMetadata(s,a),E.debug(`Calling attemptFetch again in ${d} millis`),wn(e,a,r,o)}}function xi(e,t){return new Promise((n,r)=>{const o=Math.max(t-Date.now(),0),i=setTimeout(n,o);e.addEventListener(()=>{clearTimeout(i),r(S.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Li(e){if(!(e instanceof W)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Fi{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Hi(e,t,n,r,o){if(o&&o.global){e("event",n,r);return}else{const i=await t,s=Object.assign(Object.assign({},r),{send_to:i});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(){if(Vt())try{await Wt()}catch(e){return E.warn(S.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return E.warn(S.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Ui(e,t,n,r,o,i,s){var c;const l=Mi(e);l.then(h=>{n[h.measurementId]=h.appId,e.options.measurementId&&h.measurementId!==e.options.measurementId&&E.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>E.error(h)),t.push(l);const u=ji().then(h=>{if(h)return r.getId()}),[d,a]=await Promise.all([l,u]);$i(i)||Si(i,d.measurementId),o("js",new Date);const p=(c=s==null?void 0:s.config)!==null&&c!==void 0?c:{};return p[yi]="firebase",p.update=!0,a!=null&&(p[gi]=a),o("config",d.measurementId,p),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t){this.app=t}_delete(){return delete Y[this.app.options.appId],Promise.resolve()}}let Y={},wt=[];const It={};let De="dataLayer",Wi="gtag",Et,In,St=!1;function zi(){const e=[];if(or()&&e.push("This is a browser extension environment."),ir()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,o)=>`(${o+1}) ${r}`).join(" "),n=S.create("invalid-analytics-context",{errorInfo:t});E.warn(n.message)}}function Gi(e,t,n){zi();const r=e.options.appId;if(!r)throw S.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)E.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw S.create("no-api-key");if(Y[r]!=null)throw S.create("already-exists",{id:r});if(!St){Di(De);const{wrappedGtag:i,gtagCore:s}=ki(Y,wt,It,De,Wi);In=i,Et=s,St=!0}return Y[r]=Ui(e,wt,It,t,Et,De,n),new Vi(e)}function qi(e=co()){e=zt(e);const t=fe(e,le);return t.isInitialized()?t.getImmediate():Ki(e)}function Ki(e,t={}){const n=fe(e,le);if(n.isInitialized()){const o=n.getImmediate();if(se(t,n.getOptions()))return o;throw S.create("already-initialized")}return n.initialize({options:t})}function En(e,t,n,r){e=zt(e),Hi(In,Y[e.app.options.appId],t,n,r).catch(o=>E.error(o))}const Dt="@firebase/analytics",At="0.10.0";function Yi(){j(new N(le,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return Gi(r,o,n)},"PUBLIC")),j(new N("analytics-internal",e,"PRIVATE")),B(Dt,At),B(Dt,At,"esm2017");function e(t){try{const n=t.getProvider(le).getImmediate();return{logEvent:(r,o,i)=>En(n,r,o,i)}}catch(n){throw S.create("interop-component-reg-failed",{reason:n})}}}Yi();const Ji={apiKey:"AIzaSyANjF_gucmvi7uM8ILD2YeF-hKpU4gb7oY",authDomain:"the-name-game-9981f.firebaseapp.com",projectId:"the-name-game-9981f",storageBucket:"the-name-game-9981f.appspot.com",messagingSenderId:"48036889664",appId:"1:48036889664:web:ffc24a4c621dca39a5cba5",measurementId:"G-H37G8KLBD8"},Xi=Yt(Ji),Zi=qi(Xi);function Qi(e){En(Zi,e)}function es(){const[e,t]=C(!1),[n,r]=C("");function o(i,s){console.log("Game Starting..."),Qi("Starting"),console.log(i),r(i),console.log(s),t(!0)}return m(M,{children:[m(qn,{}),m(xn,{}),m("div",{class:"h-screen grid grid-cols-3 gap-4 content-center",children:e?m(jn,{pronouns:n}):m(Ln,{title:"Welcome to the Name Game",startFunc:o})})]})}$n(m(es,{}),document.getElementById("app"));
