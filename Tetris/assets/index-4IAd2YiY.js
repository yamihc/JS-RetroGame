var me=Object.defineProperty;var we=(e,t,n)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var F=(e,t,n)=>(we(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const _ of o.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&i(_)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var ct,f,Kt,Jt,N,Pt,Zt,gt,Y={},Qt=[],xe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Tt=Array.isArray;function H(e,t){for(var n in t)e[n]=t[n];return e}function Xt(e){var t=e.parentNode;t&&t.removeChild(e)}function be(e,t,n){var i,r,o,_={};for(o in t)o=="key"?i=t[o]:o=="ref"?r=t[o]:_[o]=t[o];if(arguments.length>2&&(_.children=arguments.length>3?ct.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)_[o]===void 0&&(_[o]=e.defaultProps[o]);return rt(e,_,i,r,null)}function rt(e,t,n,i,r){var o={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++Kt,__i:-1,__u:0};return r==null&&f.vnode!=null&&f.vnode(o),o}function A(e){return e.children}function q(e,t){this.props=e,this.context=t}function O(e,t){if(t==null)return e.__?O(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?O(e):null}function te(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return te(e)}}function Dt(e){(!e.__d&&(e.__d=!0)&&N.push(e)&&!_t.__r++||Pt!==f.debounceRendering)&&((Pt=f.debounceRendering)||Zt)(_t)}function _t(){var e,t,n,i,r,o,_,a,u;for(N.sort(gt);e=N.shift();)e.__d&&(t=N.length,i=void 0,o=(r=(n=e).__v).__e,a=[],u=[],(_=n.__P)&&((i=H({},r)).__v=r.__v+1,f.vnode&&f.vnode(i),$t(_,i,r,n.__n,_.ownerSVGElement!==void 0,32&r.__u?[o]:null,a,o??O(r),!!(32&r.__u),u),i.__.__k[i.__i]=i,ie(a,i,u),i.__e!=o&&te(i)),N.length>t&&N.sort(gt));_t.__r=0}function ee(e,t,n,i,r,o,_,a,u,l,h){var s,p,c,v,T,g=i&&i.__k||Qt,y=t.length;for(n.__d=u,Se(n,t,g),u=n.__d,s=0;s<y;s++)(c=n.__k[s])!=null&&typeof c!="boolean"&&typeof c!="function"&&(p=c.__i===-1?Y:g[c.__i]||Y,c.__i=s,$t(e,c,p,r,o,_,a,u,l,h),v=c.__e,c.ref&&p.ref!=c.ref&&(p.ref&&kt(p.ref,null,c),h.push(c.ref,c.__c||v,c)),T==null&&v!=null&&(T=v),65536&c.__u||p.__k===c.__k?u=ne(c,u,e):typeof c.type=="function"&&c.__d!==void 0?u=c.__d:v&&(u=v.nextSibling),c.__d=void 0,c.__u&=-196609);n.__d=u,n.__e=T}function Se(e,t,n){var i,r,o,_,a,u=t.length,l=n.length,h=l,s=0;for(e.__k=[],i=0;i<u;i++)(r=e.__k[i]=(r=t[i])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?rt(null,r,null,null,r):Tt(r)?rt(A,{children:r},null,null,null):r.__b>0?rt(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=e,r.__b=e.__b+1,a=Te(r,n,_=i+s,h),r.__i=a,o=null,a!==-1&&(h--,(o=n[a])&&(o.__u|=131072)),o==null||o.__v===null?(a==-1&&s--,typeof r.type!="function"&&(r.__u|=65536)):a!==_&&(a===_+1?s++:a>_?h>u-_?s+=a-_:s--:s=a<_&&a==_-1?a-_:0,a!==i+s&&(r.__u|=65536))):(o=n[i])&&o.key==null&&o.__e&&(o.__e==e.__d&&(e.__d=O(o)),mt(o,o,!1),n[i]=null,h--);if(h)for(i=0;i<l;i++)(o=n[i])!=null&&!(131072&o.__u)&&(o.__e==e.__d&&(e.__d=O(o)),mt(o,o))}function ne(e,t,n){var i,r;if(typeof e.type=="function"){for(i=e.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=e,t=ne(i[r],t,n));return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function Te(e,t,n,i){var r=e.key,o=e.type,_=n-1,a=n+1,u=t[n];if(u===null||u&&r==u.key&&o===u.type)return n;if(i>(u!=null&&!(131072&u.__u)?1:0))for(;_>=0||a<t.length;){if(_>=0){if((u=t[_])&&!(131072&u.__u)&&r==u.key&&o===u.type)return _;_--}if(a<t.length){if((u=t[a])&&!(131072&u.__u)&&r==u.key&&o===u.type)return a;a++}}return-1}function Nt(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||xe.test(t)?n:n+"px"}function nt(e,t,n,i,r){var o;t:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||Nt(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||Nt(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?i?n.u=i.u:(n.u=Date.now(),e.addEventListener(t,o?Gt:Ut,o)):e.removeEventListener(t,o?Gt:Ut,o);else{if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break t}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function Ut(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(f.event?f.event(e):e)}function Gt(e){return this.l[e.type+!0](f.event?f.event(e):e)}function $t(e,t,n,i,r,o,_,a,u,l){var h,s,p,c,v,T,g,y,S,C,X,W,At,tt,ht,E=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),o=[a=t.__e=n.__e]),(h=f.__b)&&h(t);t:if(typeof E=="function")try{if(y=t.props,S=(h=E.contextType)&&i[h.__c],C=h?S?S.props.value:h.__:i,n.__c?g=(s=t.__c=n.__c).__=s.__E:("prototype"in E&&E.prototype.render?t.__c=s=new E(y,C):(t.__c=s=new q(y,C),s.constructor=E,s.render=ke),S&&S.sub(s),s.props=y,s.state||(s.state={}),s.context=C,s.__n=i,p=s.__d=!0,s.__h=[],s._sb=[]),s.__s==null&&(s.__s=s.state),E.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=H({},s.__s)),H(s.__s,E.getDerivedStateFromProps(y,s.__s))),c=s.props,v=s.state,s.__v=t,p)E.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(E.getDerivedStateFromProps==null&&y!==c&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(y,C),!s.__e&&(s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(y,s.__s,C)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(s.props=y,s.state=s.__s,s.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(et){et&&(et.__=t)}),X=0;X<s._sb.length;X++)s.__h.push(s._sb[X]);s._sb=[],s.__h.length&&_.push(s);break t}s.componentWillUpdate!=null&&s.componentWillUpdate(y,s.__s,C),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(c,v,T)})}if(s.context=C,s.props=y,s.__P=e,s.__e=!1,W=f.__r,At=0,"prototype"in E&&E.prototype.render){for(s.state=s.__s,s.__d=!1,W&&W(t),h=s.render(s.props,s.state,s.context),tt=0;tt<s._sb.length;tt++)s.__h.push(s._sb[tt]);s._sb=[]}else do s.__d=!1,W&&W(t),h=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++At<25);s.state=s.__s,s.getChildContext!=null&&(i=H(H({},i),s.getChildContext())),p||s.getSnapshotBeforeUpdate==null||(T=s.getSnapshotBeforeUpdate(c,v)),ee(e,Tt(ht=h!=null&&h.type===A&&h.key==null?h.props.children:h)?ht:[ht],t,n,i,r,o,_,a,u,l),s.base=t.__e,t.__u&=-161,s.__h.length&&_.push(s),g&&(s.__E=s.__=null)}catch(et){t.__v=null,u||o!=null?(t.__e=a,t.__u|=u?160:32,o[o.indexOf(a)]=null):(t.__e=n.__e,t.__k=n.__k),f.__e(et,t,n)}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=$e(n.__e,t,n,i,r,o,_,u,l);(h=f.diffed)&&h(t)}function ie(e,t,n){t.__d=void 0;for(var i=0;i<n.length;i++)kt(n[i],n[++i],n[++i]);f.__c&&f.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(o){o.call(r)})}catch(o){f.__e(o,r.__v)}})}function $e(e,t,n,i,r,o,_,a,u){var l,h,s,p,c,v,T,g=n.props,y=t.props,S=t.type;if(S==="svg"&&(r=!0),o!=null){for(l=0;l<o.length;l++)if((c=o[l])&&"setAttribute"in c==!!S&&(S?c.localName===S:c.nodeType===3)){e=c,o[l]=null;break}}if(e==null){if(S===null)return document.createTextNode(y);e=r?document.createElementNS("http://www.w3.org/2000/svg",S):document.createElement(S,y.is&&y),o=null,a=!1}if(S===null)g===y||a&&e.data===y||(e.data=y);else{if(o=o&&ct.call(e.childNodes),g=n.props||Y,!a&&o!=null)for(g={},l=0;l<e.attributes.length;l++)g[(c=e.attributes[l]).name]=c.value;for(l in g)c=g[l],l=="children"||(l=="dangerouslySetInnerHTML"?s=c:l==="key"||l in y||nt(e,l,null,c,r));for(l in y)c=y[l],l=="children"?p=c:l=="dangerouslySetInnerHTML"?h=c:l=="value"?v=c:l=="checked"?T=c:l==="key"||a&&typeof c!="function"||g[l]===c||nt(e,l,c,g[l],r);if(h)a||s&&(h.__html===s.__html||h.__html===e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(s&&(e.innerHTML=""),ee(e,Tt(p)?p:[p],t,n,i,r&&S!=="foreignObject",o,_,o?o[0]:n.__k&&O(n,0),a,u),o!=null)for(l=o.length;l--;)o[l]!=null&&Xt(o[l]);a||(l="value",v!==void 0&&(v!==e[l]||S==="progress"&&!v||S==="option"&&v!==g[l])&&nt(e,l,v,g[l],!1),l="checked",T!==void 0&&T!==e[l]&&nt(e,l,T,g[l],!1))}return e}function kt(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){f.__e(i,n)}}function mt(e,t,n){var i,r;if(f.unmount&&f.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||kt(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(o){f.__e(o,t)}i.base=i.__P=null,e.__c=void 0}if(i=e.__k)for(r=0;r<i.length;r++)i[r]&&mt(i[r],t,n||typeof e.type!="function");n||e.__e==null||Xt(e.__e),e.__=e.__e=e.__d=void 0}function ke(e,t,n){return this.constructor(e,n)}function Fe(e,t,n){var i,r,o,_;f.__&&f.__(e,t),r=(i=typeof n=="function")?null:n&&n.__k||t.__k,o=[],_=[],$t(t,e=(!i&&n||t).__k=be(A,null,[e]),r||Y,Y,t.ownerSVGElement!==void 0,!i&&n?[n]:r?null:t.firstChild?ct.call(t.childNodes):null,o,!i&&n?n:r?r.__e:t.firstChild,i,_),ie(o,e,_)}ct=Qt.slice,f={__e:function(e,t,n,i){for(var r,o,_;t=t.__;)if((r=t.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(e)),_=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,i||{}),_=r.__d),_)return r.__E=r}catch(a){e=a}throw e}},Kt=0,Jt=function(e){return e!=null&&e.constructor==null},q.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=H({},this.state),typeof e=="function"&&(e=e(H({},n),this.props)),e&&H(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Dt(this))},q.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Dt(this))},q.prototype.render=A,N=[],Zt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,gt=function(e,t){return e.__v.__b-t.__v.__b},_t.__r=0;var K,x,vt,Rt,at=0,re=[],ot=[],Vt=f.__b,It=f.__r,Ot=f.diffed,Bt=f.__c,Wt=f.unmount;function Ft(e,t){f.__h&&f.__h(x,e,at||t),at=0;var n=x.__H||(x.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:ot}),n.__[e]}function U(e){return at=1,Ee(_e,e)}function Ee(e,t,n){var i=Ft(K++,2);if(i.t=e,!i.__c&&(i.__=[n?n(t):_e(void 0,t),function(a){var u=i.__N?i.__N[0]:i.__[0],l=i.t(u,a);u!==l&&(i.__N=[l,i.__[1]],i.__c.setState({}))}],i.__c=x,!x.u)){var r=function(a,u,l){if(!i.__c.__H)return!0;var h=i.__c.__H.__.filter(function(p){return p.__c});if(h.every(function(p){return!p.__N}))return!o||o.call(this,a,u,l);var s=!1;return h.forEach(function(p){if(p.__N){var c=p.__[0];p.__=p.__N,p.__N=void 0,c!==p.__[0]&&(s=!0)}}),!(!s&&i.__c.props===a)&&(!o||o.call(this,a,u,l))};x.u=!0;var o=x.shouldComponentUpdate,_=x.componentWillUpdate;x.componentWillUpdate=function(a,u,l){if(this.__e){var h=o;o=void 0,r(a,u,l),o=h}_&&_.call(this,a,u,l)},x.shouldComponentUpdate=r}return i.__N||i.__}function oe(e,t){var n=Ft(K++,3);!f.__s&&se(n.__H,t)&&(n.__=e,n.i=t,x.__H.__h.push(n))}function Me(e){return at=5,Et(function(){return{current:e}},[])}function Et(e,t){var n=Ft(K++,7);return se(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function Le(){for(var e;e=re.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(st),e.__H.__h.forEach(wt),e.__H.__h=[]}catch(t){e.__H.__h=[],f.__e(t,e.__v)}}f.__b=function(e){x=null,Vt&&Vt(e)},f.__r=function(e){It&&It(e),K=0;var t=(x=e.__c).__H;t&&(vt===x?(t.__h=[],x.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=ot,n.__N=n.i=void 0})):(t.__h.forEach(st),t.__h.forEach(wt),t.__h=[],K=0)),vt=x},f.diffed=function(e){Ot&&Ot(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(re.push(t)!==1&&Rt===f.requestAnimationFrame||((Rt=f.requestAnimationFrame)||Ce)(Le)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==ot&&(n.__=n.__V),n.i=void 0,n.__V=ot})),vt=x=null},f.__c=function(e,t){t.some(function(n){try{n.__h.forEach(st),n.__h=n.__h.filter(function(i){return!i.__||wt(i)})}catch(i){t.some(function(r){r.__h&&(r.__h=[])}),t=[],f.__e(i,n.__v)}}),Bt&&Bt(e,t)},f.unmount=function(e){Wt&&Wt(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{st(i)}catch(r){t=r}}),n.__H=void 0,t&&f.__e(t,n.__v))};var jt=typeof requestAnimationFrame=="function";function Ce(e){var t,n=function(){clearTimeout(i),jt&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(n,100);jt&&(t=requestAnimationFrame(n))}function st(e){var t=x,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),x=t}function wt(e){var t=x;e.__c=e.__(),x=t}function se(e,t){return!e||e.length!==t.length||t.some(function(n,i){return n!==e[i]})}function _e(e,t){return typeof t=="function"?t(e):t}const He=e=>{const t=Me();return oe(()=>{const n=t.current;if(n){const i=n.getContext("2d");let r;const o=()=>{e(i),r=window.requestAnimationFrame(o)};return o(),()=>window.cancelAnimationFrame(r)}},[e]),t};var Ae=0;function d(e,t,n,i,r,o){var _,a,u={};for(a in t)a=="ref"?_=t[a]:u[a]=t[a];var l={type:e,props:u,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Ae,__i:-1,__u:0,__source:r,__self:o};if(typeof e=="function"&&(_=e.defaultProps))for(a in _)u[a]===void 0&&(u[a]=_[a]);return f.vnode&&f.vnode(l),l}const qt=e=>{const{draw:t,...n}=e,i=He(t);return d("canvas",{ref:i,...n})};function ft(){throw new Error("Cycle detected")}var Pe=Symbol.for("preact-signals");function Mt(){if(I>1)I--;else{for(var e,t=!1;z!==void 0;){var n=z;for(z=void 0,xt++;n!==void 0;){var i=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&ue(n))try{n.c()}catch(r){t||(e=r,t=!0)}n=i}}if(xt=0,I--,t)throw e}}var w=void 0,z=void 0,I=0,xt=0,ut=0;function ae(e){if(w!==void 0){var t=e.n;if(t===void 0||t.t!==w)return t={i:0,S:e,p:w.s,n:void 0,t:w,e:void 0,x:void 0,r:t},w.s!==void 0&&(w.s.n=t),w.s=t,e.n=t,32&w.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=w.s,t.n=void 0,w.s.n=t,w.s=t),t}}function $(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}$.prototype.brand=Pe;$.prototype.h=function(){return!0};$.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};$.prototype.U=function(e){if(this.t!==void 0){var t=e.e,n=e.x;t!==void 0&&(t.x=n,e.e=void 0),n!==void 0&&(n.e=t,e.x=void 0),e===this.t&&(this.t=n)}};$.prototype.subscribe=function(e){var t=this;return Ct(function(){var n=t.value,i=32&this.f;this.f&=-33;try{e(n)}finally{this.f|=i}})};$.prototype.valueOf=function(){return this.value};$.prototype.toString=function(){return this.value+""};$.prototype.toJSON=function(){return this.value};$.prototype.peek=function(){return this.v};Object.defineProperty($.prototype,"value",{get:function(){var e=ae(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(w instanceof D&&function(){throw new Error("Computed cannot have side-effects")}(),e!==this.v){xt>100&&ft(),this.v=e,this.i++,ut++,I++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Mt()}}}});function M(e){return new $(e)}function ue(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function le(e){for(var t=e.s;t!==void 0;t=t.n){var n=t.S.n;if(n!==void 0&&(t.r=n),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function ce(e){for(var t=e.s,n=void 0;t!==void 0;){var i=t.p;t.i===-1?(t.S.U(t),i!==void 0&&(i.n=t.n),t.n!==void 0&&(t.n.p=i)):n=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=i}e.s=n}function D(e){$.call(this,void 0),this.x=e,this.s=void 0,this.g=ut-1,this.f=4}(D.prototype=new $).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===ut))return!0;if(this.g=ut,this.f|=1,this.i>0&&!ue(this))return this.f&=-2,!0;var e=w;try{le(this),w=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return w=e,ce(this),this.f&=-2,!0};D.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}$.prototype.S.call(this,e)};D.prototype.U=function(e){if(this.t!==void 0&&($.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};D.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};D.prototype.peek=function(){if(this.h()||ft(),16&this.f)throw this.v;return this.v};Object.defineProperty(D.prototype,"value",{get:function(){1&this.f&&ft();var e=ae(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function De(e){return new D(e)}function fe(e){var t=e.u;if(e.u=void 0,typeof t=="function"){I++;var n=w;w=void 0;try{t()}catch(i){throw e.f&=-2,e.f|=8,Lt(e),i}finally{w=n,Mt()}}}function Lt(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,fe(e)}function Ne(e){if(w!==this)throw new Error("Out-of-order effect");ce(this),w=e,this.f&=-2,8&this.f&&Lt(this),Mt()}function Z(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}Z.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};Z.prototype.S=function(){1&this.f&&ft(),this.f|=1,this.f&=-9,fe(this),le(this),I++;var e=w;return w=this,Ne.bind(this,e)};Z.prototype.N=function(){2&this.f||(this.f|=2,this.o=z,z=this)};Z.prototype.d=function(){this.f|=8,1&this.f||Lt(this)};function Ct(e){var t=new Z(e);try{t.c()}catch(n){throw t.d(),n}return t.d.bind(t)}var dt;function B(e,t){f[e]=t.bind(null,f[e]||function(){})}function lt(e){dt&&dt(),dt=e&&e.S()}function he(e){var t=this,n=e.data,i=Ge(n);i.value=n;var r=Et(function(){for(var o=t.__v;o=o.__;)if(o.__c){o.__c.__$f|=4;break}return t.__$u.c=function(){var _;!Jt(r.peek())&&((_=t.base)==null?void 0:_.nodeType)===3?t.base.data=r.peek():(t.__$f|=1,t.setState({}))},De(function(){var _=i.value.value;return _===0?0:_===!0?"":_||""})},[]);return r.value}he.displayName="_st";Object.defineProperties($.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:he},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});B("__b",function(e,t){if(typeof t.type=="string"){var n,i=t.props;for(var r in i)if(r!=="children"){var o=i[r];o instanceof $&&(n||(t.__np=n={}),n[r]=o,i[r]=o.peek())}}e(t)});B("__r",function(e,t){lt();var n,i=t.__c;i&&(i.__$f&=-2,(n=i.__$u)===void 0&&(i.__$u=n=function(r){var o;return Ct(function(){o=this}),o.c=function(){i.__$f|=1,i.setState({})},o}())),lt(n),e(t)});B("__e",function(e,t,n,i){lt(),e(t,n,i)});B("diffed",function(e,t){lt();var n;if(typeof t.type=="string"&&(n=t.__e)){var i=t.__np,r=t.props;if(i){var o=n.U;if(o)for(var _ in o){var a=o[_];a!==void 0&&!(_ in i)&&(a.d(),o[_]=void 0)}else n.U=o={};for(var u in i){var l=o[u],h=i[u];l===void 0?(l=Ue(n,u,h,r),o[u]=l):l.o(h,r)}}}e(t)});function Ue(e,t,n,i){var r=t in e&&e.ownerSVGElement===void 0,o=M(n);return{o:function(_,a){o.value=_,i=a},d:Ct(function(){var _=o.value.value;i[t]!==_&&(i[t]=_,r?e[t]=_:_?e.setAttribute(t,_):e.removeAttribute(t))})}}B("unmount",function(e,t){if(typeof t.type=="string"){var n=t.__e;if(n){var i=n.U;if(i){n.U=void 0;for(var r in i){var o=i[r];o&&o.d()}}}}else{var _=t.__c;if(_){var a=_.__$u;a&&(_.__$u=void 0,a.d())}}e(t)});B("__h",function(e,t,n,i){(i<3||i===9)&&(t.__$f|=2),e(t,n,i)});q.prototype.shouldComponentUpdate=function(e,t){var n=this.__$u;if(!(n&&n.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var i in t)return!0;for(var r in e)if(r!=="__source"&&e[r]!==this.props[r])return!0;for(var o in this.props)if(!(o in e))return!0;return!1};function Ge(e){return Et(function(){return M(e)},[])}class b{constructor(t,n,i){F(this,"idx");F(this,"positions");F(this,"dist");this.idx=n,this.positions=t,this.dist=i}turnTrigo(){this.idx>0?this.idx--:this.idx=3}getVirtualTrigo(){return this.idx>0?this.idx-1:3}}const k=[{x:-1,y:0},{x:0,y:-1},{x:1,y:0},{x:0,y:1}],Q=[{x:-1,y:-1},{x:1,y:-1},{x:1,y:1},{x:-1,y:1}];class R{constructor(t,n,i){F(this,"core");F(this,"perif");F(this,"color");this.core=t,this.perif=n,this.color=i}getAllPosition(){const t=[{...this.core}];return this.perif.forEach(n=>{t.push({x:this.core.x+n.positions[n.idx].x*n.dist,y:this.core.y+n.positions[n.idx].y*n.dist})}),t}turnTrigo(){this.perif.forEach(t=>t.turnTrigo())}testTurnTrigo(){const t=[{...this.core}];return this.perif.forEach(n=>{const i=n.getVirtualTrigo();t.push({x:this.core.x+n.positions[i].x*n.dist,y:this.core.y+n.positions[i].y*n.dist})}),t}testMovePosition(t){const n=[t];return this.perif.forEach(i=>{n.push({x:t.x+i.positions[i.idx].x*i.dist,y:t.y+i.positions[i.idx].y*i.dist})}),n}moveLeft(){this.core.y--}moveRight(){this.core.y++}moveDown(){this.core.x++}testMoveLeft(){return this.testMovePosition({x:this.core.x,y:this.core.y-1})}testMoveRight(){return this.testMovePosition({x:this.core.x,y:this.core.y+1})}testMoveDown(){return this.testMovePosition({x:this.core.x+1,y:this.core.y})}}class Re extends R{constructor(t){super(t,[new b(k,3,1),new b(k,2,1),new b(Q,2,1)],1)}}class Ve extends R{constructor(t){super(t,[new b(k,0,1),new b(k,2,1),new b(k,2,2)],2)}}class Ie extends R{constructor(t){super(t,[new b(k,0,1),new b(k,2,1),new b(Q,1,1)],3)}}class Oe extends R{constructor(t){super(t,[new b(k,0,1),new b(k,2,1),new b(Q,2,1)],4)}}class Be extends R{constructor(t){super(t,[new b(k,0,1),new b(k,1,1),new b(k,3,1)],5)}}class We extends R{constructor(t){super(t,[new b(k,0,1),new b(k,1,1),new b(Q,1,1)],6)}}class je extends R{constructor(t){super(t,[new b(k,0,1),new b(k,3,1),new b(Q,2,1)],7)}}const j={x:1,y:4};class ve{constructor(t,n){F(this,"grille");F(this,"tetra");F(this,"nextTetra");F(this,"isGame");F(this,"cptFullLigne");F(this,"nbLigne");F(this,"bonus");j.y=n,this.grille=t,this.tetra=this.randomTetra({...j}),this.nextTetra=this.randomTetra({...j}),this.isGame=!0,this.nbLigne=0,this.cptFullLigne=0,this.bonus=1}newTetra(){if(this.isGame){this.tetra=this.nextTetra,this.nextTetra=this.randomTetra({...j}),this.isValidMov(this.tetra.getAllPosition())||(this.isGame=!1);const t=Math.round(Math.random()*3);for(let n=0;n<t;n++)this.nextTetra.turnTrigo()}}changeNextTetra(){this.nextTetra=this.randomTetra({...j})}randomTetra(t){switch(Math.floor(Math.random()*7)){case 0:return new Ve(t);case 1:return new Re(t);case 2:return new Ie(t);case 3:return new We(t);case 4:return new Oe(t);case 5:return new je(t);default:return new Be(t)}}isValidMov(t){if(!this.isGame)return!1;let n=!0;return t.forEach(i=>{i.x>=0&&(i.x>this.grille.length-1||this.grille[i.x][i.y]!=0||i.y<0||i.y>this.grille[0].length)&&(n=!1)}),n}tetraMvLeft(){const t=this.tetra.testMoveLeft();this.isValidMov(t)&&this.tetra.moveLeft()}tetraMvRight(){const t=this.tetra.testMoveRight();this.isValidMov(t)&&this.tetra.moveRight()}tetraMvDown(){const t=this.tetra.testMoveDown();this.isValidMov(t)?this.tetra.moveDown():this.fixTetramino()}tetraTurn(){const t=this.tetra.testTurnTrigo();this.isValidMov(t)&&this.tetra.turnTrigo()}fixTetramino(){this.tetra.getAllPosition().forEach(t=>{this.grille[t.x][t.y]=this.tetra.color}),this.removeLines(),this.newTetra()}removeLines(){const t=this.grille.filter(n=>!this.isLigneCompleted(n));if(t.length!=this.grille.length){const n=this.grille.length-t.length;G.value+=de(n)*this.bonus,pe.value+=n,this.cptFullLigne+=n,this.cptFullLigne>10&&(G.value+=Math.floor(G.value*.2),J.value=Math.floor(J.value*.82),this.bonus++,this.cptFullLigne=0);const i=this.grille[0].length;for(let r=0;r<n;r++)t.unshift(new Array(i).fill(0));this.grille=t}}isLigneCompleted(t){for(let n=0;n<t.length;n++)if(t[n]==0)return!1;return!0}endGame(){this.isGame=!1}}function de(e){return e==1?1:e*de(e-1)}const bt=M(0),zt=localStorage.getItem("YamihcGame_Tetris_HighScore");zt==null?localStorage.setItem("YamihcGame_Tetris_HighScore",0 .toString()):bt.value=parseInt(zt);const L=M(22),P=M(10),m=M(window.innerHeight/(L.value+1));window.addEventListener("resize",()=>{m.value=window.innerHeight/(L.value+1)});const J=M(1e3),G=M(0),pe=M(0),ye=()=>{const e=new Array(L.value);return Array.from(e,()=>new Array(P.value).fill(0))},ge=M(new ve(ye(),4));function qe(){m.value=window.innerHeight/(L.value+2),ge.value=new ve(ye(),Math.floor(P.value/2)),on()}const ze="_container_10hkv_1",Ye="_info_10hkv_19",Ke="_titre_10hkv_33",pt={container:ze,info:Ye,titre:Ke},it=({titre:e,info:t})=>d(A,{children:d("div",{class:pt.container,children:[d("p",{class:pt.titre,children:e}),d("span",{class:pt.info,children:t})]})}),Je="_form_t90wg_3",Ze="_button_t90wg_41",Yt={form:Je,button:Ze},Qe=({callback:e})=>{const[t,n]=U(P.value),[i,r]=U(L.value),[o,_]=U(J.value),a=()=>{P.value=t,L.value=i,J.value=o,qe(),e()};return d(A,{children:d("div",{class:Yt.form,children:d("form",{children:[d("div",{children:[d("h2",{children:"Dimmension de la grille (bêta)"}),d("label",{htmlFor:"hauteur",children:["Hauteur (",i,") :"]}),d("input",{type:"range",id:"hauteur",name:"hauteur",min:"5",max:"35",value:i,onChange:u=>{u.target instanceof HTMLInputElement&&r(parseInt(u.target.value))}}),d("label",{htmlFor:"largeur",children:["Largeur (",t,") :"]}),d("input",{type:"range",id:"largeur",name:"largeur",min:"5",max:"35",value:t,onChange:u=>{u.target instanceof HTMLInputElement&&n(parseInt(u.target.value))}})]}),d("div",{children:[d("h2",{children:"Vitesse de départ (bêta)"}),d("label",{htmlFor:"vitesse",children:"Vitesse :"}),d("input",{type:"range",id:"vitesse",name:"vitesse",min:"200",max:"2000",dir:"rtl",value:o,onChange:u=>{u.target instanceof HTMLInputElement&&_(parseInt(u.target.value))}})]}),d("button",{type:"button",onClick:a,class:Yt.button,children:"Restart Game"})]})})})};let St=Date.now(),Ht=0;function Xe(){const e=ge.value,[t,n]=U(!0),[i,r]=U(!1),[o,_]=U(0),[a,u]=U(!1),l=v=>{v.clearRect(0,0,v.canvas.width,v.canvas.height),e.grille.forEach((T,g)=>{T.forEach((y,S)=>{v.fillStyle=yt(y),v.fillRect(1+S*m.value,1+g*m.value,m.value-2,m.value-2)}),v.fillStyle=yt(e.tetra.color),e.tetra.getAllPosition().forEach(y=>{v.fillRect(1+y.y*m.value,1+y.x*m.value,m.value-2,m.value-2)}),!i&&e.isGame&&en(v),e.isGame?_(rn()):nn(v),i&&(Ht+=Date.now()-St),St=Date.now()})},h=v=>{const T=m.value*.85;v.clearRect(0,0,v.canvas.width,v.canvas.height),v.fillStyle=yt(e.nextTetra.color),e.nextTetra.getAllPosition().forEach(g=>{v.fillRect(1+(g.y-2)*T,1+(g.x+1.5)*T-20,T-2,T-2)})},s=({key:v})=>{switch(v){case"ArrowLeft":e.tetraMvLeft();break;case"ArrowRight":e.tetraMvRight();break;case"ArrowUp":e.tetraTurn();break;case"ArrowDown":e.tetraMvDown();break}},p=()=>{u(!0),e.endGame()},c=()=>{u(!1),n(!t)};return oe(()=>{e.isGame&&setTimeout(()=>{i&&e.isGame&&e.tetraMvDown(),n(!t)},J.value)},[t]),a?d(A,{children:d("div",{style:V.container,children:d(Qe,{callback:c})})}):d(A,{children:d("div",{tabIndex:0,onKeyDown:s,onFocus:()=>r(!0),onBlur:()=>r(!1),style:V.container,children:[d(qt,{draw:l,width:`${P.value*m.value}`,height:`${L.value*m.value}`,style:V.canvasBoard}),d("div",{style:V.containerRight,children:[d(qt,{draw:h,width:`${4*m.value}`,height:`${4*m.value}`,style:V.canvasSide}),d(it,{titre:"High Score :",info:tn()}),d(it,{titre:"Score :",info:G.value}),d(it,{titre:"Total lines :",info:pe.value}),d(it,{titre:"Chrono :",info:o}),d("button",{onClick:p,style:V.bouton,children:"Setting"})]})]})})}function tn(){return bt.value>=G.value?bt.value:(localStorage.setItem("YamihcGame_Tetris_HighScore",G.value.toString()),G.value)}function en(e){e.font=`${m}px Arial`,e.fillStyle="white",e.fillText("Clic to continue",P.value*m.value/8,L.value*m.value/2)}function nn(e){e.font=`${m}px Arial`,e.fillStyle="white",e.fillText(" !! GAME OVER !!",P.value*m.value/8,L.value*m.value/2)}function rn(){return Math.floor(Ht/1e3)}function on(){St=Date.now(),Ht=0}const V={container:{width:`${P.value*m.value+280}px`,margin:"auto",display:"flex",justifyContent:"space-around",border:"2px solid black",padding:"4px",borderRadius:"15px"},containerRight:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around"},canvasBoard:{border:"5px solid black",backgroundColor:"black"},canvasSide:{border:"3px solid black",backgroundColor:"#e1e1e1",width:"160px",height:"160px"},bouton:{fontSize:"28px",textAlign:"center",fontWeight:700,border:"2px solid black",borderRadius:"15px",padding:"12px",width:"160px"}};function yt(e){switch(e){case 0:return"#2F2F2F";case 1:return"#FF0000";case 2:return"#0000FF";case 3:return"#00FF00";case 4:return"#FFFF00";case 5:return"#00FFFF";case 6:return"#FF00FF";case 7:return"#FFA500";default:return"white"}}Fe(d(Xe,{}),document.getElementById("app"));
