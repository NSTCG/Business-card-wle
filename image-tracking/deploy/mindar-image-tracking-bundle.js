(()=>{var wr=Object.create,Re=Object.defineProperty;var Ar=Object.getOwnPropertyDescriptor;var Tr=Object.getOwnPropertyNames;var Sr=Object.getPrototypeOf,Or=Object.prototype.hasOwnProperty;var Rr=e=>Re(e,"__esModule",{value:!0});var $=(e,t)=>()=>(e&&(t=e(e=0)),t),H=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Lr=(e,t,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Tr(t))!Or.call(e,n)&&n!=="default"&&Re(e,n,{get:()=>t[n],enumerable:!(r=Ar(t,n))||r.enumerable});return e},J=e=>Lr(Rr(Re(e!=null?wr(Sr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var Z=H(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.setMatrixArrayType=Pr;G.toRadian=Ir;G.equals=Wr;G.RANDOM=G.ARRAY_TYPE=G.EPSILON=void 0;var Ye=1e-6;G.EPSILON=Ye;var He=typeof Float32Array!="undefined"?Float32Array:Array;G.ARRAY_TYPE=He;var qr=Math.random;G.RANDOM=qr;function Pr(e){G.ARRAY_TYPE=He=e}var Er=Math.PI/180;function Ir(e){return e*Er}function Wr(e,t){return Math.abs(e-t)<=Ye*Math.max(1,Math.abs(e),Math.abs(t))}Math.hypot||(Math.hypot=function(){for(var e=0,t=arguments.length;t--;)e+=arguments[t]*arguments[t];return Math.sqrt(e)})});var Be=H(j=>{"use strict";function ue(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ue=function(r){return typeof r}:ue=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},ue(e)}Object.defineProperty(j,"__esModule",{value:!0});j.create=Cr;j.clone=Dr;j.copy=Fr;j.identity=jr;j.fromValues=kr;j.set=zr;j.transpose=Yr;j.invert=Hr;j.adjoint=Vr;j.determinant=Nr;j.multiply=Ve;j.rotate=Xr;j.scale=Br;j.fromRotation=Gr;j.fromScaling=Qr;j.str=Ur;j.frob=Zr;j.LDU=$r;j.add=Jr;j.subtract=Ne;j.exactEquals=Kr;j.equals=en;j.multiplyScalar=tn;j.multiplyScalarAndAdd=rn;j.sub=j.mul=void 0;var se=nn(Z());function Xe(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return Xe=function(){return e},e}function nn(e){if(e&&e.__esModule)return e;if(e===null||ue(e)!=="object"&&typeof e!="function")return{default:e};var t=Xe();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function Cr(){var e=new se.ARRAY_TYPE(4);return se.ARRAY_TYPE!=Float32Array&&(e[1]=0,e[2]=0),e[0]=1,e[3]=1,e}function Dr(e){var t=new se.ARRAY_TYPE(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function Fr(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function jr(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e}function kr(e,t,r,n){var a=new se.ARRAY_TYPE(4);return a[0]=e,a[1]=t,a[2]=r,a[3]=n,a}function zr(e,t,r,n,a){return e[0]=t,e[1]=r,e[2]=n,e[3]=a,e}function Yr(e,t){if(e===t){var r=t[1];e[1]=t[2],e[2]=r}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e}function Hr(e,t){var r=t[0],n=t[1],a=t[2],s=t[3],c=r*s-a*n;return c?(c=1/c,e[0]=s*c,e[1]=-n*c,e[2]=-a*c,e[3]=r*c,e):null}function Vr(e,t){var r=t[0];return e[0]=t[3],e[1]=-t[1],e[2]=-t[2],e[3]=r,e}function Nr(e){return e[0]*e[3]-e[2]*e[1]}function Ve(e,t,r){var n=t[0],a=t[1],s=t[2],c=t[3],l=r[0],h=r[1],u=r[2],i=r[3];return e[0]=n*l+s*h,e[1]=a*l+c*h,e[2]=n*u+s*i,e[3]=a*u+c*i,e}function Xr(e,t,r){var n=t[0],a=t[1],s=t[2],c=t[3],l=Math.sin(r),h=Math.cos(r);return e[0]=n*h+s*l,e[1]=a*h+c*l,e[2]=n*-l+s*h,e[3]=a*-l+c*h,e}function Br(e,t,r){var n=t[0],a=t[1],s=t[2],c=t[3],l=r[0],h=r[1];return e[0]=n*l,e[1]=a*l,e[2]=s*h,e[3]=c*h,e}function Gr(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=r,e[2]=-r,e[3]=n,e}function Qr(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=t[1],e}function Ur(e){return"mat2("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}function Zr(e){return Math.hypot(e[0],e[1],e[2],e[3])}function $r(e,t,r,n){return e[2]=n[2]/n[0],r[0]=n[0],r[1]=n[1],r[3]=n[3]-e[2]*r[1],[e,t,r]}function Jr(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e}function Ne(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e}function Kr(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function en(e,t){var r=e[0],n=e[1],a=e[2],s=e[3],c=t[0],l=t[1],h=t[2],u=t[3];return Math.abs(r-c)<=se.EPSILON*Math.max(1,Math.abs(r),Math.abs(c))&&Math.abs(n-l)<=se.EPSILON*Math.max(1,Math.abs(n),Math.abs(l))&&Math.abs(a-h)<=se.EPSILON*Math.max(1,Math.abs(a),Math.abs(h))&&Math.abs(s-u)<=se.EPSILON*Math.max(1,Math.abs(s),Math.abs(u))}function tn(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e}function rn(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e[3]=t[3]+r[3]*n,e}var an=Ve;j.mul=an;var sn=Ne;j.sub=sn});var Ze=H(k=>{"use strict";function pe(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?pe=function(r){return typeof r}:pe=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},pe(e)}Object.defineProperty(k,"__esModule",{value:!0});k.create=on;k.clone=cn;k.copy=ln;k.identity=fn;k.fromValues=hn;k.set=dn;k.invert=un;k.determinant=pn;k.multiply=Ge;k.rotate=vn;k.scale=_n;k.translate=mn;k.fromRotation=yn;k.fromScaling=gn;k.fromTranslation=Mn;k.str=bn;k.frob=xn;k.add=wn;k.subtract=Qe;k.multiplyScalar=An;k.multiplyScalarAndAdd=Tn;k.exactEquals=Sn;k.equals=On;k.sub=k.mul=void 0;var K=Rn(Z());function Ue(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return Ue=function(){return e},e}function Rn(e){if(e&&e.__esModule)return e;if(e===null||pe(e)!=="object"&&typeof e!="function")return{default:e};var t=Ue();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function on(){var e=new K.ARRAY_TYPE(6);return K.ARRAY_TYPE!=Float32Array&&(e[1]=0,e[2]=0,e[4]=0,e[5]=0),e[0]=1,e[3]=1,e}function cn(e){var t=new K.ARRAY_TYPE(6);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function ln(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function fn(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e}function hn(e,t,r,n,a,s){var c=new K.ARRAY_TYPE(6);return c[0]=e,c[1]=t,c[2]=r,c[3]=n,c[4]=a,c[5]=s,c}function dn(e,t,r,n,a,s,c){return e[0]=t,e[1]=r,e[2]=n,e[3]=a,e[4]=s,e[5]=c,e}function un(e,t){var r=t[0],n=t[1],a=t[2],s=t[3],c=t[4],l=t[5],h=r*s-n*a;return h?(h=1/h,e[0]=s*h,e[1]=-n*h,e[2]=-a*h,e[3]=r*h,e[4]=(a*l-s*c)*h,e[5]=(n*c-r*l)*h,e):null}function pn(e){return e[0]*e[3]-e[1]*e[2]}function Ge(e,t,r){var n=t[0],a=t[1],s=t[2],c=t[3],l=t[4],h=t[5],u=r[0],i=r[1],o=r[2],f=r[3],d=r[4],v=r[5];return e[0]=n*u+s*i,e[1]=a*u+c*i,e[2]=n*o+s*f,e[3]=a*o+c*f,e[4]=n*d+s*v+l,e[5]=a*d+c*v+h,e}function vn(e,t,r){var n=t[0],a=t[1],s=t[2],c=t[3],l=t[4],h=t[5],u=Math.sin(r),i=Math.cos(r);return e[0]=n*i+s*u,e[1]=a*i+c*u,e[2]=n*-u+s*i,e[3]=a*-u+c*i,e[4]=l,e[5]=h,e}function _n(e,t,r){var n=t[0],a=t[1],s=t[2],c=t[3],l=t[4],h=t[5],u=r[0],i=r[1];return e[0]=n*u,e[1]=a*u,e[2]=s*i,e[3]=c*i,e[4]=l,e[5]=h,e}function mn(e,t,r){var n=t[0],a=t[1],s=t[2],c=t[3],l=t[4],h=t[5],u=r[0],i=r[1];return e[0]=n,e[1]=a,e[2]=s,e[3]=c,e[4]=n*u+s*i+l,e[5]=a*u+c*i+h,e}function yn(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=r,e[2]=-r,e[3]=n,e[4]=0,e[5]=0,e}function gn(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=t[1],e[4]=0,e[5]=0,e}function Mn(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=t[0],e[5]=t[1],e}function bn(e){return"mat2d("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+")"}function xn(e){return Math.hypot(e[0],e[1],e[2],e[3],e[4],e[5],1)}function wn(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e[4]=t[4]+r[4],e[5]=t[5]+r[5],e}function Qe(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e[4]=t[4]-r[4],e[5]=t[5]-r[5],e}function An(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*r,e[5]=t[5]*r,e}function Tn(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e[3]=t[3]+r[3]*n,e[4]=t[4]+r[4]*n,e[5]=t[5]+r[5]*n,e}function Sn(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]}function On(e,t){var r=e[0],n=e[1],a=e[2],s=e[3],c=e[4],l=e[5],h=t[0],u=t[1],i=t[2],o=t[3],f=t[4],d=t[5];return Math.abs(r-h)<=K.EPSILON*Math.max(1,Math.abs(r),Math.abs(h))&&Math.abs(n-u)<=K.EPSILON*Math.max(1,Math.abs(n),Math.abs(u))&&Math.abs(a-i)<=K.EPSILON*Math.max(1,Math.abs(a),Math.abs(i))&&Math.abs(s-o)<=K.EPSILON*Math.max(1,Math.abs(s),Math.abs(o))&&Math.abs(c-f)<=K.EPSILON*Math.max(1,Math.abs(c),Math.abs(f))&&Math.abs(l-d)<=K.EPSILON*Math.max(1,Math.abs(l),Math.abs(d))}var Ln=Ge;k.mul=Ln;var Pn=Qe;k.sub=Pn});var Le=H(W=>{"use strict";function ve(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ve=function(r){return typeof r}:ve=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},ve(e)}Object.defineProperty(W,"__esModule",{value:!0});W.create=In;W.fromMat4=Wn;W.clone=qn;W.copy=En;W.fromValues=Cn;W.set=Dn;W.identity=Fn;W.transpose=jn;W.invert=kn;W.adjoint=zn;W.determinant=Yn;W.multiply=$e;W.translate=Hn;W.rotate=Vn;W.scale=Nn;W.fromTranslation=Xn;W.fromRotation=Bn;W.fromScaling=Gn;W.fromMat2d=Qn;W.fromQuat=Un;W.normalFromMat4=Zn;W.projection=$n;W.str=Jn;W.frob=Kn;W.add=ei;W.subtract=Je;W.multiplyScalar=ti;W.multiplyScalarAndAdd=ri;W.exactEquals=ni;W.equals=ii;W.sub=W.mul=void 0;var X=ai(Z());function Ke(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return Ke=function(){return e},e}function ai(e){if(e&&e.__esModule)return e;if(e===null||ve(e)!=="object"&&typeof e!="function")return{default:e};var t=Ke();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function In(){var e=new X.ARRAY_TYPE(9);return X.ARRAY_TYPE!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}function Wn(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e}function qn(e){var t=new X.ARRAY_TYPE(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function En(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function Cn(e,t,r,n,a,s,c,l,h){var u=new X.ARRAY_TYPE(9);return u[0]=e,u[1]=t,u[2]=r,u[3]=n,u[4]=a,u[5]=s,u[6]=c,u[7]=l,u[8]=h,u}function Dn(e,t,r,n,a,s,c,l,h,u){return e[0]=t,e[1]=r,e[2]=n,e[3]=a,e[4]=s,e[5]=c,e[6]=l,e[7]=h,e[8]=u,e}function Fn(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function jn(e,t){if(e===t){var r=t[1],n=t[2],a=t[5];e[1]=t[3],e[2]=t[6],e[3]=r,e[5]=t[7],e[6]=n,e[7]=a}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e}function kn(e,t){var r=t[0],n=t[1],a=t[2],s=t[3],c=t[4],l=t[5],h=t[6],u=t[7],i=t[8],o=i*c-l*u,f=-i*s+l*h,d=u*s-c*h,v=r*o+n*f+a*d;return v?(v=1/v,e[0]=o*v,e[1]=(-i*n+a*u)*v,e[2]=(l*n-a*c)*v,e[3]=f*v,e[4]=(i*r-a*h)*v,e[5]=(-l*r+a*s)*v,e[6]=d*v,e[7]=(-u*r+n*h)*v,e[8]=(c*r-n*s)*v,e):null}function zn(e,t){var r=t[0],n=t[1],a=t[2],s=t[3],c=t[4],l=t[5],h=t[6],u=t[7],i=t[8];return e[0]=c*i-l*u,e[1]=a*u-n*i,e[2]=n*l-a*c,e[3]=l*h-s*i,e[4]=r*i-a*h,e[5]=a*s-r*l,e[6]=s*u-c*h,e[7]=n*h-r*u,e[8]=r*c-n*s,e}function Yn(e){var t=e[0],r=e[1],n=e[2],a=e[3],s=e[4],c=e[5],l=e[6],h=e[7],u=e[8];return t*(u*s-c*h)+r*(-u*a+c*l)+n*(h*a-s*l)}function $e(e,t,r){var n=t[0],a=t[1],s=t[2],c=t[3],l=t[4],h=t[5],u=t[6],i=t[7],o=t[8],f=r[0],d=r[1],v=r[2],_=r[3],p=r[4],m=r[5],y=r[6],g=r[7],M=r[8];return e[0]=f*n+d*c+v*u,e[1]=f*a+d*l+v*i,e[2]=f*s+d*h+v*o,e[3]=_*n+p*c+m*u,e[4]=_*a+p*l+m*i,e[5]=_*s+p*h+m*o,e[6]=y*n+g*c+M*u,e[7]=y*a+g*l+M*i,e[8]=y*s+g*h+M*o,e}function Hn(e,t,r){var n=t[0],a=t[1],s=t[2],c=t[3],l=t[4],h=t[5],u=t[6],i=t[7],o=t[8],f=r[0],d=r[1];return e[0]=n,e[1]=a,e[2]=s,e[3]=c,e[4]=l,e[5]=h,e[6]=f*n+d*c+u,e[7]=f*a+d*l+i,e[8]=f*s+d*h+o,e}function Vn(e,t,r){var n=t[0],a=t[1],s=t[2],c=t[3],l=t[4],h=t[5],u=t[6],i=t[7],o=t[8],f=Math.sin(r),d=Math.cos(r);return e[0]=d*n+f*c,e[1]=d*a+f*l,e[2]=d*s+f*h,e[3]=d*c-f*n,e[4]=d*l-f*a,e[5]=d*h-f*s,e[6]=u,e[7]=i,e[8]=o,e}function Nn(e,t,r){var n=r[0],a=r[1];return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=a*t[3],e[4]=a*t[4],e[5]=a*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function Xn(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=t[0],e[7]=t[1],e[8]=1,e}function Bn(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=r,e[2]=0,e[3]=-r,e[4]=n,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function Gn(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=t[1],e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function Qn(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e}function Un(e,t){var r=t[0],n=t[1],a=t[2],s=t[3],c=r+r,l=n+n,h=a+a,u=r*c,i=n*c,o=n*l,f=a*c,d=a*l,v=a*h,_=s*c,p=s*l,m=s*h;return e[0]=1-o-v,e[3]=i-m,e[6]=f+p,e[1]=i+m,e[4]=1-u-v,e[7]=d-_,e[2]=f-p,e[5]=d+_,e[8]=1-u-o,e}function Zn(e,t){var r=t[0],n=t[1],a=t[2],s=t[3],c=t[4],l=t[5],h=t[6],u=t[7],i=t[8],o=t[9],f=t[10],d=t[11],v=t[12],_=t[13],p=t[14],m=t[15],y=r*l-n*c,g=r*h-a*c,M=r*u-s*c,b=n*h-a*l,x=n*u-s*l,q=a*u-s*h,S=i*_-o*v,D=i*p-f*v,C=i*m-d*v,z=o*p-f*_,F=o*m-d*_,E=f*m-d*p,P=y*E-g*F+M*z+b*C-x*D+q*S;return P?(P=1/P,e[0]=(l*E-h*F+u*z)*P,e[1]=(h*C-c*E-u*D)*P,e[2]=(c*F-l*C+u*S)*P,e[3]=(a*F-n*E-s*z)*P,e[4]=(r*E-a*C+s*D)*P,e[5]=(n*C-r*F-s*S)*P,e[6]=(_*q-p*x+m*b)*P,e[7]=(p*M-v*q-m*g)*P,e[8]=(v*x-_*M+m*y)*P,e):null}function $n(e,t,r){return e[0]=2/t,e[1]=0,e[2]=0,e[3]=0,e[4]=-2/r,e[5]=0,e[6]=-1,e[7]=1,e[8]=1,e}function Jn(e){return"mat3("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+")"}function Kn(e){return Math.hypot(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8])}function ei(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e[4]=t[4]+r[4],e[5]=t[5]+r[5],e[6]=t[6]+r[6],e[7]=t[7]+r[7],e[8]=t[8]+r[8],e}function Je(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e[4]=t[4]-r[4],e[5]=t[5]-r[5],e[6]=t[6]-r[6],e[7]=t[7]-r[7],e[8]=t[8]-r[8],e}function ti(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*r,e}function ri(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e[3]=t[3]+r[3]*n,e[4]=t[4]+r[4]*n,e[5]=t[5]+r[5]*n,e[6]=t[6]+r[6]*n,e[7]=t[7]+r[7]*n,e[8]=t[8]+r[8]*n,e}function ni(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]}function ii(e,t){var r=e[0],n=e[1],a=e[2],s=e[3],c=e[4],l=e[5],h=e[6],u=e[7],i=e[8],o=t[0],f=t[1],d=t[2],v=t[3],_=t[4],p=t[5],m=t[6],y=t[7],g=t[8];return Math.abs(r-o)<=X.EPSILON*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(n-f)<=X.EPSILON*Math.max(1,Math.abs(n),Math.abs(f))&&Math.abs(a-d)<=X.EPSILON*Math.max(1,Math.abs(a),Math.abs(d))&&Math.abs(s-v)<=X.EPSILON*Math.max(1,Math.abs(s),Math.abs(v))&&Math.abs(c-_)<=X.EPSILON*Math.max(1,Math.abs(c),Math.abs(_))&&Math.abs(l-p)<=X.EPSILON*Math.max(1,Math.abs(l),Math.abs(p))&&Math.abs(h-m)<=X.EPSILON*Math.max(1,Math.abs(h),Math.abs(m))&&Math.abs(u-y)<=X.EPSILON*Math.max(1,Math.abs(u),Math.abs(y))&&Math.abs(i-g)<=X.EPSILON*Math.max(1,Math.abs(i),Math.abs(g))}var si=$e;W.mul=si;var oi=Je;W.sub=oi});var Pe=H(O=>{"use strict";function _e(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_e=function(r){return typeof r}:_e=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},_e(e)}Object.defineProperty(O,"__esModule",{value:!0});O.create=ci;O.clone=li;O.copy=fi;O.fromValues=hi;O.set=di;O.identity=et;O.transpose=ui;O.invert=pi;O.adjoint=vi;O.determinant=_i;O.multiply=tt;O.translate=mi;O.scale=yi;O.rotate=gi;O.rotateX=Mi;O.rotateY=bi;O.rotateZ=xi;O.fromTranslation=wi;O.fromScaling=Ai;O.fromRotation=Ti;O.fromXRotation=Si;O.fromYRotation=Oi;O.fromZRotation=Ri;O.fromRotationTranslation=rt;O.fromQuat2=Li;O.getTranslation=Pi;O.getScaling=nt;O.getRotation=Ii;O.fromRotationTranslationScale=Wi;O.fromRotationTranslationScaleOrigin=qi;O.fromQuat=Ei;O.frustum=Ci;O.perspective=Di;O.perspectiveFromFieldOfView=Fi;O.ortho=ji;O.lookAt=ki;O.targetTo=zi;O.str=Yi;O.frob=Hi;O.add=Vi;O.subtract=it;O.multiplyScalar=Ni;O.multiplyScalarAndAdd=Xi;O.exactEquals=Bi;O.equals=Gi;O.sub=O.mul=void 0;var Y=Qi(Z());function at(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return at=function(){return e},e}function Qi(e){if(e&&e.__esModule)return e;if(e===null||_e(e)!=="object"&&typeof e!="function")return{default:e};var t=at();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function ci(){var e=new Y.ARRAY_TYPE(16);return Y.ARRAY_TYPE!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function li(e){var t=new Y.ARRAY_TYPE(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function fi(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function hi(e,t,r,n,a,s,c,l,h,u,i,o,f,d,v,_){var p=new Y.ARRAY_TYPE(16);return p[0]=e,p[1]=t,p[2]=r,p[3]=n,p[4]=a,p[5]=s,p[6]=c,p[7]=l,p[8]=h,p[9]=u,p[10]=i,p[11]=o,p[12]=f,p[13]=d,p[14]=v,p[15]=_,p}function di(e,t,r,n,a,s,c,l,h,u,i,o,f,d,v,_,p){return e[0]=t,e[1]=r,e[2]=n,e[3]=a,e[4]=s,e[5]=c,e[6]=l,e[7]=h,e[8]=u,e[9]=i,e[10]=o,e[11]=f,e[12]=d,e[13]=v,e[14]=_,e[15]=p,e}function et(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function ui(e,t){if(e===t){var r=t[1],n=t[2],a=t[3],s=t[6],c=t[7],l=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=s,e[11]=t[14],e[12]=a,e[13]=c,e[14]=l}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}function pi(e,t){var r=t[0],n=t[1],a=t[2],s=t[3],c=t[4],l=t[5],h=t[6],u=t[7],i=t[8],o=t[9],f=t[10],d=t[11],v=t[12],_=t[13],p=t[14],m=t[15],y=r*l-n*c,g=r*h-a*c,M=r*u-s*c,b=n*h-a*l,x=n*u-s*l,q=a*u-s*h,S=i*_-o*v,D=i*p-f*v,C=i*m-d*v,z=o*p-f*_,F=o*m-d*_,E=f*m-d*p,P=y*E-g*F+M*z+b*C-x*D+q*S;return P?(P=1/P,e[0]=(l*E-h*F+u*z)*P,e[1]=(a*F-n*E-s*z)*P,e[2]=(_*q-p*x+m*b)*P,e[3]=(f*x-o*q-d*b)*P,e[4]=(h*C-c*E-u*D)*P,e[5]=(r*E-a*C+s*D)*P,e[6]=(p*M-v*q-m*g)*P,e[7]=(i*q-f*M+d*g)*P,e[8]=(c*F-l*C+u*S)*P,e[9]=(n*C-r*F-s*S)*P,e[10]=(v*x-_*M+m*y)*P,e[11]=(o*M-i*x-d*y)*P,e[12]=(l*D-c*z-h*S)*P,e[13]=(r*z-n*D+a*S)*P,e[14]=(_*g-v*b-p*y)*P,e[15]=(i*b-o*g+f*y)*P,e):null}function vi(e,t){var r=t[0],n=t[1],a=t[2],s=t[3],c=t[4],l=t[5],h=t[6],u=t[7],i=t[8],o=t[9],f=t[10],d=t[11],v=t[12],_=t[13],p=t[14],m=t[15];return e[0]=l*(f*m-d*p)-o*(h*m-u*p)+_*(h*d-u*f),e[1]=-(n*(f*m-d*p)-o*(a*m-s*p)+_*(a*d-s*f)),e[2]=n*(h*m-u*p)-l*(a*m-s*p)+_*(a*u-s*h),e[3]=-(n*(h*d-u*f)-l*(a*d-s*f)+o*(a*u-s*h)),e[4]=-(c*(f*m-d*p)-i*(h*m-u*p)+v*(h*d-u*f)),e[5]=r*(f*m-d*p)-i*(a*m-s*p)+v*(a*d-s*f),e[6]=-(r*(h*m-u*p)-c*(a*m-s*p)+v*(a*u-s*h)),e[7]=r*(h*d-u*f)-c*(a*d-s*f)+i*(a*u-s*h),e[8]=c*(o*m-d*_)-i*(l*m-u*_)+v*(l*d-u*o),e[9]=-(r*(o*m-d*_)-i*(n*m-s*_)+v*(n*d-s*o)),e[10]=r*(l*m-u*_)-c*(n*m-s*_)+v*(n*u-s*l),e[11]=-(r*(l*d-u*o)-c*(n*d-s*o)+i*(n*u-s*l)),e[12]=-(c*(o*p-f*_)-i*(l*p-h*_)+v*(l*f-h*o)),e[13]=r*(o*p-f*_)-i*(n*p-a*_)+v*(n*f-a*o),e[14]=-(r*(l*p-h*_)-c*(n*p-a*_)+v*(n*h-a*l)),e[15]=r*(l*f-h*o)-c*(n*f-a*o)+i*(n*h-a*l),e}function _i(e){var t=e[0],r=e[1],n=e[2],a=e[3],s=e[4],c=e[5],l=e[6],h=e[7],u=e[8],i=e[9],o=e[10],f=e[11],d=e[12],v=e[13],_=e[14],p=e[15],m=t*c-r*s,y=t*l-n*s,g=t*h-a*s,M=r*l-n*c,b=r*h-a*c,x=n*h-a*l,q=u*v-i*d,S=u*_-o*d,D=u*p-f*d,C=i*_-o*v,z=i*p-f*v,F=o*p-f*_;return m*F-y*z+g*C+M*D-b*S+x*q}function tt(e,t,r){var n=t[0],a=t[1],s=t[2],c=t[3],l=t[4],h=t[5],u=t[6],i=t[7],o=t[8],f=t[9],d=t[10],v=t[11],_=t[12],p=t[13],m=t[14],y=t[15],g=r[0],M=r[1],b=r[2],x=r[3];return e[0]=g*n+M*l+b*o+x*_,e[1]=g*a+M*h+b*f+x*p,e[2]=g*s+M*u+b*d+x*m,e[3]=g*c+M*i+b*v+x*y,g=r[4],M=r[5],b=r[6],x=r[7],e[4]=g*n+M*l+b*o+x*_,e[5]=g*a+M*h+b*f+x*p,e[6]=g*s+M*u+b*d+x*m,e[7]=g*c+M*i+b*v+x*y,g=r[8],M=r[9],b=r[10],x=r[11],e[8]=g*n+M*l+b*o+x*_,e[9]=g*a+M*h+b*f+x*p,e[10]=g*s+M*u+b*d+x*m,e[11]=g*c+M*i+b*v+x*y,g=r[12],M=r[13],b=r[14],x=r[15],e[12]=g*n+M*l+b*o+x*_,e[13]=g*a+M*h+b*f+x*p,e[14]=g*s+M*u+b*d+x*m,e[15]=g*c+M*i+b*v+x*y,e}function mi(e,t,r){var n=r[0],a=r[1],s=r[2],c,l,h,u,i,o,f,d,v,_,p,m;return t===e?(e[12]=t[0]*n+t[4]*a+t[8]*s+t[12],e[13]=t[1]*n+t[5]*a+t[9]*s+t[13],e[14]=t[2]*n+t[6]*a+t[10]*s+t[14],e[15]=t[3]*n+t[7]*a+t[11]*s+t[15]):(c=t[0],l=t[1],h=t[2],u=t[3],i=t[4],o=t[5],f=t[6],d=t[7],v=t[8],_=t[9],p=t[10],m=t[11],e[0]=c,e[1]=l,e[2]=h,e[3]=u,e[4]=i,e[5]=o,e[6]=f,e[7]=d,e[8]=v,e[9]=_,e[10]=p,e[11]=m,e[12]=c*n+i*a+v*s+t[12],e[13]=l*n+o*a+_*s+t[13],e[14]=h*n+f*a+p*s+t[14],e[15]=u*n+d*a+m*s+t[15]),e}function yi(e,t,r){var n=r[0],a=r[1],s=r[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*a,e[5]=t[5]*a,e[6]=t[6]*a,e[7]=t[7]*a,e[8]=t[8]*s,e[9]=t[9]*s,e[10]=t[10]*s,e[11]=t[11]*s,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function gi(e,t,r,n){var a=n[0],s=n[1],c=n[2],l=Math.hypot(a,s,c),h,u,i,o,f,d,v,_,p,m,y,g,M,b,x,q,S,D,C,z,F,E,P,U;return l<Y.EPSILON?null:(l=1/l,a*=l,s*=l,c*=l,h=Math.sin(r),u=Math.cos(r),i=1-u,o=t[0],f=t[1],d=t[2],v=t[3],_=t[4],p=t[5],m=t[6],y=t[7],g=t[8],M=t[9],b=t[10],x=t[11],q=a*a*i+u,S=s*a*i+c*h,D=c*a*i-s*h,C=a*s*i-c*h,z=s*s*i+u,F=c*s*i+a*h,E=a*c*i+s*h,P=s*c*i-a*h,U=c*c*i+u,e[0]=o*q+_*S+g*D,e[1]=f*q+p*S+M*D,e[2]=d*q+m*S+b*D,e[3]=v*q+y*S+x*D,e[4]=o*C+_*z+g*F,e[5]=f*C+p*z+M*F,e[6]=d*C+m*z+b*F,e[7]=v*C+y*z+x*F,e[8]=o*E+_*P+g*U,e[9]=f*E+p*P+M*U,e[10]=d*E+m*P+b*U,e[11]=v*E+y*P+x*U,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function Mi(e,t,r){var n=Math.sin(r),a=Math.cos(r),s=t[4],c=t[5],l=t[6],h=t[7],u=t[8],i=t[9],o=t[10],f=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=s*a+u*n,e[5]=c*a+i*n,e[6]=l*a+o*n,e[7]=h*a+f*n,e[8]=u*a-s*n,e[9]=i*a-c*n,e[10]=o*a-l*n,e[11]=f*a-h*n,e}function bi(e,t,r){var n=Math.sin(r),a=Math.cos(r),s=t[0],c=t[1],l=t[2],h=t[3],u=t[8],i=t[9],o=t[10],f=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*a-u*n,e[1]=c*a-i*n,e[2]=l*a-o*n,e[3]=h*a-f*n,e[8]=s*n+u*a,e[9]=c*n+i*a,e[10]=l*n+o*a,e[11]=h*n+f*a,e}function xi(e,t,r){var n=Math.sin(r),a=Math.cos(r),s=t[0],c=t[1],l=t[2],h=t[3],u=t[4],i=t[5],o=t[6],f=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=s*a+u*n,e[1]=c*a+i*n,e[2]=l*a+o*n,e[3]=h*a+f*n,e[4]=u*a-s*n,e[5]=i*a-c*n,e[6]=o*a-l*n,e[7]=f*a-h*n,e}function wi(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function Ai(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Ti(e,t,r){var n=r[0],a=r[1],s=r[2],c=Math.hypot(n,a,s),l,h,u;return c<Y.EPSILON?null:(c=1/c,n*=c,a*=c,s*=c,l=Math.sin(t),h=Math.cos(t),u=1-h,e[0]=n*n*u+h,e[1]=a*n*u+s*l,e[2]=s*n*u-a*l,e[3]=0,e[4]=n*a*u-s*l,e[5]=a*a*u+h,e[6]=s*a*u+n*l,e[7]=0,e[8]=n*s*u+a*l,e[9]=a*s*u-n*l,e[10]=s*s*u+h,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}function Si(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=r,e[7]=0,e[8]=0,e[9]=-r,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Oi(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=0,e[2]=-r,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=r,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Ri(e,t){var r=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=r,e[2]=0,e[3]=0,e[4]=-r,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function rt(e,t,r){var n=t[0],a=t[1],s=t[2],c=t[3],l=n+n,h=a+a,u=s+s,i=n*l,o=n*h,f=n*u,d=a*h,v=a*u,_=s*u,p=c*l,m=c*h,y=c*u;return e[0]=1-(d+_),e[1]=o+y,e[2]=f-m,e[3]=0,e[4]=o-y,e[5]=1-(i+_),e[6]=v+p,e[7]=0,e[8]=f+m,e[9]=v-p,e[10]=1-(i+d),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e}function Li(e,t){var r=new Y.ARRAY_TYPE(3),n=-t[0],a=-t[1],s=-t[2],c=t[3],l=t[4],h=t[5],u=t[6],i=t[7],o=n*n+a*a+s*s+c*c;return o>0?(r[0]=(l*c+i*n+h*s-u*a)*2/o,r[1]=(h*c+i*a+u*n-l*s)*2/o,r[2]=(u*c+i*s+l*a-h*n)*2/o):(r[0]=(l*c+i*n+h*s-u*a)*2,r[1]=(h*c+i*a+u*n-l*s)*2,r[2]=(u*c+i*s+l*a-h*n)*2),rt(e,t,r),e}function Pi(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function nt(e,t){var r=t[0],n=t[1],a=t[2],s=t[4],c=t[5],l=t[6],h=t[8],u=t[9],i=t[10];return e[0]=Math.hypot(r,n,a),e[1]=Math.hypot(s,c,l),e[2]=Math.hypot(h,u,i),e}function Ii(e,t){var r=new Y.ARRAY_TYPE(3);nt(r,t);var n=1/r[0],a=1/r[1],s=1/r[2],c=t[0]*n,l=t[1]*a,h=t[2]*s,u=t[4]*n,i=t[5]*a,o=t[6]*s,f=t[8]*n,d=t[9]*a,v=t[10]*s,_=c+i+v,p=0;return _>0?(p=Math.sqrt(_+1)*2,e[3]=.25*p,e[0]=(o-d)/p,e[1]=(f-h)/p,e[2]=(l-u)/p):c>i&&c>v?(p=Math.sqrt(1+c-i-v)*2,e[3]=(o-d)/p,e[0]=.25*p,e[1]=(l+u)/p,e[2]=(f+h)/p):i>v?(p=Math.sqrt(1+i-c-v)*2,e[3]=(f-h)/p,e[0]=(l+u)/p,e[1]=.25*p,e[2]=(o+d)/p):(p=Math.sqrt(1+v-c-i)*2,e[3]=(l-u)/p,e[0]=(f+h)/p,e[1]=(o+d)/p,e[2]=.25*p),e}function Wi(e,t,r,n){var a=t[0],s=t[1],c=t[2],l=t[3],h=a+a,u=s+s,i=c+c,o=a*h,f=a*u,d=a*i,v=s*u,_=s*i,p=c*i,m=l*h,y=l*u,g=l*i,M=n[0],b=n[1],x=n[2];return e[0]=(1-(v+p))*M,e[1]=(f+g)*M,e[2]=(d-y)*M,e[3]=0,e[4]=(f-g)*b,e[5]=(1-(o+p))*b,e[6]=(_+m)*b,e[7]=0,e[8]=(d+y)*x,e[9]=(_-m)*x,e[10]=(1-(o+v))*x,e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e}function qi(e,t,r,n,a){var s=t[0],c=t[1],l=t[2],h=t[3],u=s+s,i=c+c,o=l+l,f=s*u,d=s*i,v=s*o,_=c*i,p=c*o,m=l*o,y=h*u,g=h*i,M=h*o,b=n[0],x=n[1],q=n[2],S=a[0],D=a[1],C=a[2],z=(1-(_+m))*b,F=(d+M)*b,E=(v-g)*b,P=(d-M)*x,U=(1-(f+m))*x,he=(p+y)*x,de=(v+g)*q,ke=(p-y)*q,ze=(1-(f+_))*q;return e[0]=z,e[1]=F,e[2]=E,e[3]=0,e[4]=P,e[5]=U,e[6]=he,e[7]=0,e[8]=de,e[9]=ke,e[10]=ze,e[11]=0,e[12]=r[0]+S-(z*S+P*D+de*C),e[13]=r[1]+D-(F*S+U*D+ke*C),e[14]=r[2]+C-(E*S+he*D+ze*C),e[15]=1,e}function Ei(e,t){var r=t[0],n=t[1],a=t[2],s=t[3],c=r+r,l=n+n,h=a+a,u=r*c,i=n*c,o=n*l,f=a*c,d=a*l,v=a*h,_=s*c,p=s*l,m=s*h;return e[0]=1-o-v,e[1]=i+m,e[2]=f-p,e[3]=0,e[4]=i-m,e[5]=1-u-v,e[6]=d+_,e[7]=0,e[8]=f+p,e[9]=d-_,e[10]=1-u-o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Ci(e,t,r,n,a,s,c){var l=1/(r-t),h=1/(a-n),u=1/(s-c);return e[0]=s*2*l,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s*2*h,e[6]=0,e[7]=0,e[8]=(r+t)*l,e[9]=(a+n)*h,e[10]=(c+s)*u,e[11]=-1,e[12]=0,e[13]=0,e[14]=c*s*2*u,e[15]=0,e}function Di(e,t,r,n,a){var s=1/Math.tan(t/2),c;return e[0]=s/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,a!=null&&a!==Infinity?(c=1/(n-a),e[10]=(a+n)*c,e[14]=2*a*n*c):(e[10]=-1,e[14]=-2*n),e}function Fi(e,t,r,n){var a=Math.tan(t.upDegrees*Math.PI/180),s=Math.tan(t.downDegrees*Math.PI/180),c=Math.tan(t.leftDegrees*Math.PI/180),l=Math.tan(t.rightDegrees*Math.PI/180),h=2/(c+l),u=2/(a+s);return e[0]=h,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=u,e[6]=0,e[7]=0,e[8]=-((c-l)*h*.5),e[9]=(a-s)*u*.5,e[10]=n/(r-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*r/(r-n),e[15]=0,e}function ji(e,t,r,n,a,s,c){var l=1/(t-r),h=1/(n-a),u=1/(s-c);return e[0]=-2*l,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*h,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*u,e[11]=0,e[12]=(t+r)*l,e[13]=(a+n)*h,e[14]=(c+s)*u,e[15]=1,e}function ki(e,t,r,n){var a,s,c,l,h,u,i,o,f,d,v=t[0],_=t[1],p=t[2],m=n[0],y=n[1],g=n[2],M=r[0],b=r[1],x=r[2];return Math.abs(v-M)<Y.EPSILON&&Math.abs(_-b)<Y.EPSILON&&Math.abs(p-x)<Y.EPSILON?et(e):(i=v-M,o=_-b,f=p-x,d=1/Math.hypot(i,o,f),i*=d,o*=d,f*=d,a=y*f-g*o,s=g*i-m*f,c=m*o-y*i,d=Math.hypot(a,s,c),d?(d=1/d,a*=d,s*=d,c*=d):(a=0,s=0,c=0),l=o*c-f*s,h=f*a-i*c,u=i*s-o*a,d=Math.hypot(l,h,u),d?(d=1/d,l*=d,h*=d,u*=d):(l=0,h=0,u=0),e[0]=a,e[1]=l,e[2]=i,e[3]=0,e[4]=s,e[5]=h,e[6]=o,e[7]=0,e[8]=c,e[9]=u,e[10]=f,e[11]=0,e[12]=-(a*v+s*_+c*p),e[13]=-(l*v+h*_+u*p),e[14]=-(i*v+o*_+f*p),e[15]=1,e)}function zi(e,t,r,n){var a=t[0],s=t[1],c=t[2],l=n[0],h=n[1],u=n[2],i=a-r[0],o=s-r[1],f=c-r[2],d=i*i+o*o+f*f;d>0&&(d=1/Math.sqrt(d),i*=d,o*=d,f*=d);var v=h*f-u*o,_=u*i-l*f,p=l*o-h*i;return d=v*v+_*_+p*p,d>0&&(d=1/Math.sqrt(d),v*=d,_*=d,p*=d),e[0]=v,e[1]=_,e[2]=p,e[3]=0,e[4]=o*p-f*_,e[5]=f*v-i*p,e[6]=i*_-o*v,e[7]=0,e[8]=i,e[9]=o,e[10]=f,e[11]=0,e[12]=a,e[13]=s,e[14]=c,e[15]=1,e}function Yi(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}function Hi(e){return Math.hypot(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}function Vi(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e[4]=t[4]+r[4],e[5]=t[5]+r[5],e[6]=t[6]+r[6],e[7]=t[7]+r[7],e[8]=t[8]+r[8],e[9]=t[9]+r[9],e[10]=t[10]+r[10],e[11]=t[11]+r[11],e[12]=t[12]+r[12],e[13]=t[13]+r[13],e[14]=t[14]+r[14],e[15]=t[15]+r[15],e}function it(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e[4]=t[4]-r[4],e[5]=t[5]-r[5],e[6]=t[6]-r[6],e[7]=t[7]-r[7],e[8]=t[8]-r[8],e[9]=t[9]-r[9],e[10]=t[10]-r[10],e[11]=t[11]-r[11],e[12]=t[12]-r[12],e[13]=t[13]-r[13],e[14]=t[14]-r[14],e[15]=t[15]-r[15],e}function Ni(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*r,e[9]=t[9]*r,e[10]=t[10]*r,e[11]=t[11]*r,e[12]=t[12]*r,e[13]=t[13]*r,e[14]=t[14]*r,e[15]=t[15]*r,e}function Xi(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e[3]=t[3]+r[3]*n,e[4]=t[4]+r[4]*n,e[5]=t[5]+r[5]*n,e[6]=t[6]+r[6]*n,e[7]=t[7]+r[7]*n,e[8]=t[8]+r[8]*n,e[9]=t[9]+r[9]*n,e[10]=t[10]+r[10]*n,e[11]=t[11]+r[11]*n,e[12]=t[12]+r[12]*n,e[13]=t[13]+r[13]*n,e[14]=t[14]+r[14]*n,e[15]=t[15]+r[15]*n,e}function Bi(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]}function Gi(e,t){var r=e[0],n=e[1],a=e[2],s=e[3],c=e[4],l=e[5],h=e[6],u=e[7],i=e[8],o=e[9],f=e[10],d=e[11],v=e[12],_=e[13],p=e[14],m=e[15],y=t[0],g=t[1],M=t[2],b=t[3],x=t[4],q=t[5],S=t[6],D=t[7],C=t[8],z=t[9],F=t[10],E=t[11],P=t[12],U=t[13],he=t[14],de=t[15];return Math.abs(r-y)<=Y.EPSILON*Math.max(1,Math.abs(r),Math.abs(y))&&Math.abs(n-g)<=Y.EPSILON*Math.max(1,Math.abs(n),Math.abs(g))&&Math.abs(a-M)<=Y.EPSILON*Math.max(1,Math.abs(a),Math.abs(M))&&Math.abs(s-b)<=Y.EPSILON*Math.max(1,Math.abs(s),Math.abs(b))&&Math.abs(c-x)<=Y.EPSILON*Math.max(1,Math.abs(c),Math.abs(x))&&Math.abs(l-q)<=Y.EPSILON*Math.max(1,Math.abs(l),Math.abs(q))&&Math.abs(h-S)<=Y.EPSILON*Math.max(1,Math.abs(h),Math.abs(S))&&Math.abs(u-D)<=Y.EPSILON*Math.max(1,Math.abs(u),Math.abs(D))&&Math.abs(i-C)<=Y.EPSILON*Math.max(1,Math.abs(i),Math.abs(C))&&Math.abs(o-z)<=Y.EPSILON*Math.max(1,Math.abs(o),Math.abs(z))&&Math.abs(f-F)<=Y.EPSILON*Math.max(1,Math.abs(f),Math.abs(F))&&Math.abs(d-E)<=Y.EPSILON*Math.max(1,Math.abs(d),Math.abs(E))&&Math.abs(v-P)<=Y.EPSILON*Math.max(1,Math.abs(v),Math.abs(P))&&Math.abs(_-U)<=Y.EPSILON*Math.max(1,Math.abs(_),Math.abs(U))&&Math.abs(p-he)<=Y.EPSILON*Math.max(1,Math.abs(p),Math.abs(he))&&Math.abs(m-de)<=Y.EPSILON*Math.max(1,Math.abs(m),Math.abs(de))}var Ui=tt;O.mul=Ui;var Zi=it;O.sub=Zi});var Ie=H(A=>{"use strict";function me(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?me=function(r){return typeof r}:me=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},me(e)}Object.defineProperty(A,"__esModule",{value:!0});A.create=st;A.clone=$i;A.length=ot;A.fromValues=Ji;A.copy=Ki;A.set=ea;A.add=ta;A.subtract=ct;A.multiply=lt;A.divide=ft;A.ceil=ra;A.floor=na;A.min=ia;A.max=aa;A.round=sa;A.scale=oa;A.scaleAndAdd=ca;A.distance=ht;A.squaredDistance=dt;A.squaredLength=ut;A.negate=la;A.inverse=fa;A.normalize=ha;A.dot=pt;A.cross=da;A.lerp=ua;A.hermite=pa;A.bezier=va;A.random=_a;A.transformMat4=ma;A.transformMat3=ya;A.transformQuat=ga;A.rotateX=Ma;A.rotateY=ba;A.rotateZ=xa;A.angle=wa;A.zero=Aa;A.str=Ta;A.exactEquals=Sa;A.equals=Oa;A.forEach=A.sqrLen=A.len=A.sqrDist=A.dist=A.div=A.mul=A.sub=void 0;var re=Ra(Z());function vt(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return vt=function(){return e},e}function Ra(e){if(e&&e.__esModule)return e;if(e===null||me(e)!=="object"&&typeof e!="function")return{default:e};var t=vt();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function st(){var e=new re.ARRAY_TYPE(3);return re.ARRAY_TYPE!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function $i(e){var t=new re.ARRAY_TYPE(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function ot(e){var t=e[0],r=e[1],n=e[2];return Math.hypot(t,r,n)}function Ji(e,t,r){var n=new re.ARRAY_TYPE(3);return n[0]=e,n[1]=t,n[2]=r,n}function Ki(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function ea(e,t,r,n){return e[0]=t,e[1]=r,e[2]=n,e}function ta(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e}function ct(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e}function lt(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e}function ft(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e}function ra(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}function na(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}function ia(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e}function aa(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e}function sa(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}function oa(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e}function ca(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e}function ht(e,t){var r=t[0]-e[0],n=t[1]-e[1],a=t[2]-e[2];return Math.hypot(r,n,a)}function dt(e,t){var r=t[0]-e[0],n=t[1]-e[1],a=t[2]-e[2];return r*r+n*n+a*a}function ut(e){var t=e[0],r=e[1],n=e[2];return t*t+r*r+n*n}function la(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function fa(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}function ha(e,t){var r=t[0],n=t[1],a=t[2],s=r*r+n*n+a*a;return s>0&&(s=1/Math.sqrt(s)),e[0]=t[0]*s,e[1]=t[1]*s,e[2]=t[2]*s,e}function pt(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function da(e,t,r){var n=t[0],a=t[1],s=t[2],c=r[0],l=r[1],h=r[2];return e[0]=a*h-s*l,e[1]=s*c-n*h,e[2]=n*l-a*c,e}function ua(e,t,r,n){var a=t[0],s=t[1],c=t[2];return e[0]=a+n*(r[0]-a),e[1]=s+n*(r[1]-s),e[2]=c+n*(r[2]-c),e}function pa(e,t,r,n,a,s){var c=s*s,l=c*(2*s-3)+1,h=c*(s-2)+s,u=c*(s-1),i=c*(3-2*s);return e[0]=t[0]*l+r[0]*h+n[0]*u+a[0]*i,e[1]=t[1]*l+r[1]*h+n[1]*u+a[1]*i,e[2]=t[2]*l+r[2]*h+n[2]*u+a[2]*i,e}function va(e,t,r,n,a,s){var c=1-s,l=c*c,h=s*s,u=l*c,i=3*s*l,o=3*h*c,f=h*s;return e[0]=t[0]*u+r[0]*i+n[0]*o+a[0]*f,e[1]=t[1]*u+r[1]*i+n[1]*o+a[1]*f,e[2]=t[2]*u+r[2]*i+n[2]*o+a[2]*f,e}function _a(e,t){t=t||1;var r=re.RANDOM()*2*Math.PI,n=re.RANDOM()*2-1,a=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(r)*a,e[1]=Math.sin(r)*a,e[2]=n*t,e}function ma(e,t,r){var n=t[0],a=t[1],s=t[2],c=r[3]*n+r[7]*a+r[11]*s+r[15];return c=c||1,e[0]=(r[0]*n+r[4]*a+r[8]*s+r[12])/c,e[1]=(r[1]*n+r[5]*a+r[9]*s+r[13])/c,e[2]=(r[2]*n+r[6]*a+r[10]*s+r[14])/c,e}function ya(e,t,r){var n=t[0],a=t[1],s=t[2];return e[0]=n*r[0]+a*r[3]+s*r[6],e[1]=n*r[1]+a*r[4]+s*r[7],e[2]=n*r[2]+a*r[5]+s*r[8],e}function ga(e,t,r){var n=r[0],a=r[1],s=r[2],c=r[3],l=t[0],h=t[1],u=t[2],i=a*u-s*h,o=s*l-n*u,f=n*h-a*l,d=a*f-s*o,v=s*i-n*f,_=n*o-a*i,p=c*2;return i*=p,o*=p,f*=p,d*=2,v*=2,_*=2,e[0]=l+i+d,e[1]=h+o+v,e[2]=u+f+_,e}function Ma(e,t,r,n){var a=[],s=[];return a[0]=t[0]-r[0],a[1]=t[1]-r[1],a[2]=t[2]-r[2],s[0]=a[0],s[1]=a[1]*Math.cos(n)-a[2]*Math.sin(n),s[2]=a[1]*Math.sin(n)+a[2]*Math.cos(n),e[0]=s[0]+r[0],e[1]=s[1]+r[1],e[2]=s[2]+r[2],e}function ba(e,t,r,n){var a=[],s=[];return a[0]=t[0]-r[0],a[1]=t[1]-r[1],a[2]=t[2]-r[2],s[0]=a[2]*Math.sin(n)+a[0]*Math.cos(n),s[1]=a[1],s[2]=a[2]*Math.cos(n)-a[0]*Math.sin(n),e[0]=s[0]+r[0],e[1]=s[1]+r[1],e[2]=s[2]+r[2],e}function xa(e,t,r,n){var a=[],s=[];return a[0]=t[0]-r[0],a[1]=t[1]-r[1],a[2]=t[2]-r[2],s[0]=a[0]*Math.cos(n)-a[1]*Math.sin(n),s[1]=a[0]*Math.sin(n)+a[1]*Math.cos(n),s[2]=a[2],e[0]=s[0]+r[0],e[1]=s[1]+r[1],e[2]=s[2]+r[2],e}function wa(e,t){var r=e[0],n=e[1],a=e[2],s=t[0],c=t[1],l=t[2],h=Math.sqrt(r*r+n*n+a*a),u=Math.sqrt(s*s+c*c+l*l),i=h*u,o=i&&pt(e,t)/i;return Math.acos(Math.min(Math.max(o,-1),1))}function Aa(e){return e[0]=0,e[1]=0,e[2]=0,e}function Ta(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"}function Sa(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function Oa(e,t){var r=e[0],n=e[1],a=e[2],s=t[0],c=t[1],l=t[2];return Math.abs(r-s)<=re.EPSILON*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(n-c)<=re.EPSILON*Math.max(1,Math.abs(n),Math.abs(c))&&Math.abs(a-l)<=re.EPSILON*Math.max(1,Math.abs(a),Math.abs(l))}var La=ct;A.sub=La;var Pa=lt;A.mul=Pa;var Ia=ft;A.div=Ia;var Wa=ht;A.dist=Wa;var qa=dt;A.sqrDist=qa;var Ea=ot;A.len=Ea;var Ca=ut;A.sqrLen=Ca;var Da=function(){var e=st();return function(t,r,n,a,s,c){var l,h;for(r||(r=3),n||(n=0),a?h=Math.min(a*r+n,t.length):h=t.length,l=n;l<h;l+=r)e[0]=t[l],e[1]=t[l+1],e[2]=t[l+2],s(e,e,c),t[l]=e[0],t[l+1]=e[1],t[l+2]=e[2];return t}}();A.forEach=Da});var We=H(R=>{"use strict";function ye(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ye=function(r){return typeof r}:ye=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},ye(e)}Object.defineProperty(R,"__esModule",{value:!0});R.create=_t;R.clone=Fa;R.fromValues=ja;R.copy=ka;R.set=za;R.add=Ya;R.subtract=mt;R.multiply=yt;R.divide=gt;R.ceil=Ha;R.floor=Va;R.min=Na;R.max=Xa;R.round=Ba;R.scale=Ga;R.scaleAndAdd=Qa;R.distance=Mt;R.squaredDistance=bt;R.length=xt;R.squaredLength=wt;R.negate=Ua;R.inverse=Za;R.normalize=$a;R.dot=Ja;R.cross=Ka;R.lerp=es;R.random=ts;R.transformMat4=rs;R.transformQuat=ns;R.zero=is;R.str=as;R.exactEquals=ss;R.equals=os;R.forEach=R.sqrLen=R.len=R.sqrDist=R.dist=R.div=R.mul=R.sub=void 0;var Q=cs(Z());function At(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return At=function(){return e},e}function cs(e){if(e&&e.__esModule)return e;if(e===null||ye(e)!=="object"&&typeof e!="function")return{default:e};var t=At();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function _t(){var e=new Q.ARRAY_TYPE(4);return Q.ARRAY_TYPE!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function Fa(e){var t=new Q.ARRAY_TYPE(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function ja(e,t,r,n){var a=new Q.ARRAY_TYPE(4);return a[0]=e,a[1]=t,a[2]=r,a[3]=n,a}function ka(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function za(e,t,r,n,a){return e[0]=t,e[1]=r,e[2]=n,e[3]=a,e}function Ya(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e}function mt(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e}function yt(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e}function gt(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e}function Ha(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e}function Va(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e}function Na(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e}function Xa(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e}function Ba(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e}function Ga(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e}function Qa(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e[3]=t[3]+r[3]*n,e}function Mt(e,t){var r=t[0]-e[0],n=t[1]-e[1],a=t[2]-e[2],s=t[3]-e[3];return Math.hypot(r,n,a,s)}function bt(e,t){var r=t[0]-e[0],n=t[1]-e[1],a=t[2]-e[2],s=t[3]-e[3];return r*r+n*n+a*a+s*s}function xt(e){var t=e[0],r=e[1],n=e[2],a=e[3];return Math.hypot(t,r,n,a)}function wt(e){var t=e[0],r=e[1],n=e[2],a=e[3];return t*t+r*r+n*n+a*a}function Ua(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e}function Za(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e}function $a(e,t){var r=t[0],n=t[1],a=t[2],s=t[3],c=r*r+n*n+a*a+s*s;return c>0&&(c=1/Math.sqrt(c)),e[0]=r*c,e[1]=n*c,e[2]=a*c,e[3]=s*c,e}function Ja(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function Ka(e,t,r,n){var a=r[0]*n[1]-r[1]*n[0],s=r[0]*n[2]-r[2]*n[0],c=r[0]*n[3]-r[3]*n[0],l=r[1]*n[2]-r[2]*n[1],h=r[1]*n[3]-r[3]*n[1],u=r[2]*n[3]-r[3]*n[2],i=t[0],o=t[1],f=t[2],d=t[3];return e[0]=o*u-f*h+d*l,e[1]=-(i*u)+f*c-d*s,e[2]=i*h-o*c+d*a,e[3]=-(i*l)+o*s-f*a,e}function es(e,t,r,n){var a=t[0],s=t[1],c=t[2],l=t[3];return e[0]=a+n*(r[0]-a),e[1]=s+n*(r[1]-s),e[2]=c+n*(r[2]-c),e[3]=l+n*(r[3]-l),e}function ts(e,t){t=t||1;var r,n,a,s,c,l;do r=Q.RANDOM()*2-1,n=Q.RANDOM()*2-1,c=r*r+n*n;while(c>=1);do a=Q.RANDOM()*2-1,s=Q.RANDOM()*2-1,l=a*a+s*s;while(l>=1);var h=Math.sqrt((1-c)/l);return e[0]=t*r,e[1]=t*n,e[2]=t*a*h,e[3]=t*s*h,e}function rs(e,t,r){var n=t[0],a=t[1],s=t[2],c=t[3];return e[0]=r[0]*n+r[4]*a+r[8]*s+r[12]*c,e[1]=r[1]*n+r[5]*a+r[9]*s+r[13]*c,e[2]=r[2]*n+r[6]*a+r[10]*s+r[14]*c,e[3]=r[3]*n+r[7]*a+r[11]*s+r[15]*c,e}function ns(e,t,r){var n=t[0],a=t[1],s=t[2],c=r[0],l=r[1],h=r[2],u=r[3],i=u*n+l*s-h*a,o=u*a+h*n-c*s,f=u*s+c*a-l*n,d=-c*n-l*a-h*s;return e[0]=i*u+d*-c+o*-h-f*-l,e[1]=o*u+d*-l+f*-c-i*-h,e[2]=f*u+d*-h+i*-l-o*-c,e[3]=t[3],e}function is(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e}function as(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}function ss(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function os(e,t){var r=e[0],n=e[1],a=e[2],s=e[3],c=t[0],l=t[1],h=t[2],u=t[3];return Math.abs(r-c)<=Q.EPSILON*Math.max(1,Math.abs(r),Math.abs(c))&&Math.abs(n-l)<=Q.EPSILON*Math.max(1,Math.abs(n),Math.abs(l))&&Math.abs(a-h)<=Q.EPSILON*Math.max(1,Math.abs(a),Math.abs(h))&&Math.abs(s-u)<=Q.EPSILON*Math.max(1,Math.abs(s),Math.abs(u))}var ls=mt;R.sub=ls;var fs=yt;R.mul=fs;var hs=gt;R.div=hs;var ds=Mt;R.dist=ds;var us=bt;R.sqrDist=us;var ps=xt;R.len=ps;var vs=wt;R.sqrLen=vs;var _s=function(){var e=_t();return function(t,r,n,a,s,c){var l,h;for(r||(r=4),n||(n=0),a?h=Math.min(a*r+n,t.length):h=t.length,l=n;l<h;l+=r)e[0]=t[l],e[1]=t[l+1],e[2]=t[l+2],e[3]=t[l+3],s(e,e,c),t[l]=e[0],t[l+1]=e[1],t[l+2]=e[2],t[l+3]=e[3];return t}}();R.forEach=_s});var Ce=H(w=>{"use strict";function ge(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ge=function(r){return typeof r}:ge=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},ge(e)}Object.defineProperty(w,"__esModule",{value:!0});w.create=qe;w.identity=ms;w.setAxisAngle=Tt;w.getAxisAngle=ys;w.getAngle=gs;w.multiply=St;w.rotateX=Ms;w.rotateY=bs;w.rotateZ=xs;w.calculateW=ws;w.exp=Ot;w.ln=Rt;w.pow=As;w.slerp=Me;w.random=Ts;w.invert=Ss;w.conjugate=Os;w.fromMat3=Lt;w.fromEuler=Rs;w.str=Ls;w.setAxes=w.sqlerp=w.rotationTo=w.equals=w.exactEquals=w.normalize=w.sqrLen=w.squaredLength=w.len=w.length=w.lerp=w.dot=w.scale=w.mul=w.add=w.set=w.copy=w.fromValues=w.clone=void 0;var ce=be(Z()),Ps=be(Le()),ne=be(Ie()),B=be(We());function Pt(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return Pt=function(){return e},e}function be(e){if(e&&e.__esModule)return e;if(e===null||ge(e)!=="object"&&typeof e!="function")return{default:e};var t=Pt();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function qe(){var e=new ce.ARRAY_TYPE(4);return ce.ARRAY_TYPE!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e[3]=1,e}function ms(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e}function Tt(e,t,r){r=r*.5;var n=Math.sin(r);return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=Math.cos(r),e}function ys(e,t){var r=Math.acos(t[3])*2,n=Math.sin(r/2);return n>ce.EPSILON?(e[0]=t[0]/n,e[1]=t[1]/n,e[2]=t[2]/n):(e[0]=1,e[1]=0,e[2]=0),r}function gs(e,t){var r=It(e,t);return Math.acos(2*r*r-1)}function St(e,t,r){var n=t[0],a=t[1],s=t[2],c=t[3],l=r[0],h=r[1],u=r[2],i=r[3];return e[0]=n*i+c*l+a*u-s*h,e[1]=a*i+c*h+s*l-n*u,e[2]=s*i+c*u+n*h-a*l,e[3]=c*i-n*l-a*h-s*u,e}function Ms(e,t,r){r*=.5;var n=t[0],a=t[1],s=t[2],c=t[3],l=Math.sin(r),h=Math.cos(r);return e[0]=n*h+c*l,e[1]=a*h+s*l,e[2]=s*h-a*l,e[3]=c*h-n*l,e}function bs(e,t,r){r*=.5;var n=t[0],a=t[1],s=t[2],c=t[3],l=Math.sin(r),h=Math.cos(r);return e[0]=n*h-s*l,e[1]=a*h+c*l,e[2]=s*h+n*l,e[3]=c*h-a*l,e}function xs(e,t,r){r*=.5;var n=t[0],a=t[1],s=t[2],c=t[3],l=Math.sin(r),h=Math.cos(r);return e[0]=n*h+a*l,e[1]=a*h-n*l,e[2]=s*h+c*l,e[3]=c*h-s*l,e}function ws(e,t){var r=t[0],n=t[1],a=t[2];return e[0]=r,e[1]=n,e[2]=a,e[3]=Math.sqrt(Math.abs(1-r*r-n*n-a*a)),e}function Ot(e,t){var r=t[0],n=t[1],a=t[2],s=t[3],c=Math.sqrt(r*r+n*n+a*a),l=Math.exp(s),h=c>0?l*Math.sin(c)/c:0;return e[0]=r*h,e[1]=n*h,e[2]=a*h,e[3]=l*Math.cos(c),e}function Rt(e,t){var r=t[0],n=t[1],a=t[2],s=t[3],c=Math.sqrt(r*r+n*n+a*a),l=c>0?Math.atan2(c,s)/c:0;return e[0]=r*l,e[1]=n*l,e[2]=a*l,e[3]=.5*Math.log(r*r+n*n+a*a+s*s),e}function As(e,t,r){return Rt(e,t),Wt(e,e,r),Ot(e,e),e}function Me(e,t,r,n){var a=t[0],s=t[1],c=t[2],l=t[3],h=r[0],u=r[1],i=r[2],o=r[3],f,d,v,_,p;return d=a*h+s*u+c*i+l*o,d<0&&(d=-d,h=-h,u=-u,i=-i,o=-o),1-d>ce.EPSILON?(f=Math.acos(d),v=Math.sin(f),_=Math.sin((1-n)*f)/v,p=Math.sin(n*f)/v):(_=1-n,p=n),e[0]=_*a+p*h,e[1]=_*s+p*u,e[2]=_*c+p*i,e[3]=_*l+p*o,e}function Ts(e){var t=ce.RANDOM(),r=ce.RANDOM(),n=ce.RANDOM(),a=Math.sqrt(1-t),s=Math.sqrt(t);return e[0]=a*Math.sin(2*Math.PI*r),e[1]=a*Math.cos(2*Math.PI*r),e[2]=s*Math.sin(2*Math.PI*n),e[3]=s*Math.cos(2*Math.PI*n),e}function Ss(e,t){var r=t[0],n=t[1],a=t[2],s=t[3],c=r*r+n*n+a*a+s*s,l=c?1/c:0;return e[0]=-r*l,e[1]=-n*l,e[2]=-a*l,e[3]=s*l,e}function Os(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function Lt(e,t){var r=t[0]+t[4]+t[8],n;if(r>0)n=Math.sqrt(r+1),e[3]=.5*n,n=.5/n,e[0]=(t[5]-t[7])*n,e[1]=(t[6]-t[2])*n,e[2]=(t[1]-t[3])*n;else{var a=0;t[4]>t[0]&&(a=1),t[8]>t[a*3+a]&&(a=2);var s=(a+1)%3,c=(a+2)%3;n=Math.sqrt(t[a*3+a]-t[s*3+s]-t[c*3+c]+1),e[a]=.5*n,n=.5/n,e[3]=(t[s*3+c]-t[c*3+s])*n,e[s]=(t[s*3+a]+t[a*3+s])*n,e[c]=(t[c*3+a]+t[a*3+c])*n}return e}function Rs(e,t,r,n){var a=.5*Math.PI/180;t*=a,r*=a,n*=a;var s=Math.sin(t),c=Math.cos(t),l=Math.sin(r),h=Math.cos(r),u=Math.sin(n),i=Math.cos(n);return e[0]=s*h*i-c*l*u,e[1]=c*l*i+s*h*u,e[2]=c*h*u-s*l*i,e[3]=c*h*i+s*l*u,e}function Ls(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}var Is=B.clone;w.clone=Is;var Ws=B.fromValues;w.fromValues=Ws;var qs=B.copy;w.copy=qs;var Es=B.set;w.set=Es;var Cs=B.add;w.add=Cs;var Ds=St;w.mul=Ds;var Wt=B.scale;w.scale=Wt;var It=B.dot;w.dot=It;var Fs=B.lerp;w.lerp=Fs;var qt=B.length;w.length=qt;var js=qt;w.len=js;var Et=B.squaredLength;w.squaredLength=Et;var ks=Et;w.sqrLen=ks;var Ee=B.normalize;w.normalize=Ee;var zs=B.exactEquals;w.exactEquals=zs;var Ys=B.equals;w.equals=Ys;var Hs=function(){var e=ne.create(),t=ne.fromValues(1,0,0),r=ne.fromValues(0,1,0);return function(n,a,s){var c=ne.dot(a,s);return c<-.999999?(ne.cross(e,t,a),ne.len(e)<1e-6&&ne.cross(e,r,a),ne.normalize(e,e),Tt(n,e,Math.PI),n):c>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(ne.cross(e,a,s),n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=1+c,Ee(n,n))}}();w.rotationTo=Hs;var Vs=function(){var e=qe(),t=qe();return function(r,n,a,s,c,l){return Me(e,n,c,l),Me(t,a,s,l),Me(r,e,t,2*l*(1-l)),r}}();w.sqlerp=Vs;var Ns=function(){var e=Ps.create();return function(t,r,n,a){return e[0]=n[0],e[3]=n[1],e[6]=n[2],e[1]=a[0],e[4]=a[1],e[7]=a[2],e[2]=-r[0],e[5]=-r[1],e[8]=-r[2],Ee(t,Lt(t,e))}}();w.setAxes=Ns});var Ht=H(L=>{"use strict";function xe(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?xe=function(r){return typeof r}:xe=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},xe(e)}Object.defineProperty(L,"__esModule",{value:!0});L.create=Xs;L.clone=Bs;L.fromValues=Gs;L.fromRotationTranslationValues=Qs;L.fromRotationTranslation=Ct;L.fromTranslation=Us;L.fromRotation=Zs;L.fromMat4=$s;L.copy=Dt;L.identity=Js;L.set=Ks;L.getDual=eo;L.setDual=to;L.getTranslation=ro;L.translate=no;L.rotateX=io;L.rotateY=ao;L.rotateZ=so;L.rotateByQuatAppend=oo;L.rotateByQuatPrepend=co;L.rotateAroundAxis=lo;L.add=fo;L.multiply=Ft;L.scale=ho;L.lerp=uo;L.invert=po;L.conjugate=vo;L.normalize=_o;L.str=mo;L.exactEquals=yo;L.equals=go;L.sqrLen=L.squaredLength=L.len=L.length=L.dot=L.mul=L.setReal=L.getReal=void 0;var N=De(Z()),ie=De(Ce()),jt=De(Pe());function kt(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return kt=function(){return e},e}function De(e){if(e&&e.__esModule)return e;if(e===null||xe(e)!=="object"&&typeof e!="function")return{default:e};var t=kt();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function Xs(){var e=new N.ARRAY_TYPE(8);return N.ARRAY_TYPE!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0),e[3]=1,e}function Bs(e){var t=new N.ARRAY_TYPE(8);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t}function Gs(e,t,r,n,a,s,c,l){var h=new N.ARRAY_TYPE(8);return h[0]=e,h[1]=t,h[2]=r,h[3]=n,h[4]=a,h[5]=s,h[6]=c,h[7]=l,h}function Qs(e,t,r,n,a,s,c){var l=new N.ARRAY_TYPE(8);l[0]=e,l[1]=t,l[2]=r,l[3]=n;var h=a*.5,u=s*.5,i=c*.5;return l[4]=h*n+u*r-i*t,l[5]=u*n+i*e-h*r,l[6]=i*n+h*t-u*e,l[7]=-h*e-u*t-i*r,l}function Ct(e,t,r){var n=r[0]*.5,a=r[1]*.5,s=r[2]*.5,c=t[0],l=t[1],h=t[2],u=t[3];return e[0]=c,e[1]=l,e[2]=h,e[3]=u,e[4]=n*u+a*h-s*l,e[5]=a*u+s*c-n*h,e[6]=s*u+n*l-a*c,e[7]=-n*c-a*l-s*h,e}function Us(e,t){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e[4]=t[0]*.5,e[5]=t[1]*.5,e[6]=t[2]*.5,e[7]=0,e}function Zs(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=0,e[5]=0,e[6]=0,e[7]=0,e}function $s(e,t){var r=ie.create();jt.getRotation(r,t);var n=new N.ARRAY_TYPE(3);return jt.getTranslation(n,t),Ct(e,r,n),e}function Dt(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e}function Js(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e}function Ks(e,t,r,n,a,s,c,l,h){return e[0]=t,e[1]=r,e[2]=n,e[3]=a,e[4]=s,e[5]=c,e[6]=l,e[7]=h,e}var Mo=ie.copy;L.getReal=Mo;function eo(e,t){return e[0]=t[4],e[1]=t[5],e[2]=t[6],e[3]=t[7],e}var bo=ie.copy;L.setReal=bo;function to(e,t){return e[4]=t[0],e[5]=t[1],e[6]=t[2],e[7]=t[3],e}function ro(e,t){var r=t[4],n=t[5],a=t[6],s=t[7],c=-t[0],l=-t[1],h=-t[2],u=t[3];return e[0]=(r*u+s*c+n*h-a*l)*2,e[1]=(n*u+s*l+a*c-r*h)*2,e[2]=(a*u+s*h+r*l-n*c)*2,e}function no(e,t,r){var n=t[0],a=t[1],s=t[2],c=t[3],l=r[0]*.5,h=r[1]*.5,u=r[2]*.5,i=t[4],o=t[5],f=t[6],d=t[7];return e[0]=n,e[1]=a,e[2]=s,e[3]=c,e[4]=c*l+a*u-s*h+i,e[5]=c*h+s*l-n*u+o,e[6]=c*u+n*h-a*l+f,e[7]=-n*l-a*h-s*u+d,e}function io(e,t,r){var n=-t[0],a=-t[1],s=-t[2],c=t[3],l=t[4],h=t[5],u=t[6],i=t[7],o=l*c+i*n+h*s-u*a,f=h*c+i*a+u*n-l*s,d=u*c+i*s+l*a-h*n,v=i*c-l*n-h*a-u*s;return ie.rotateX(e,t,r),n=e[0],a=e[1],s=e[2],c=e[3],e[4]=o*c+v*n+f*s-d*a,e[5]=f*c+v*a+d*n-o*s,e[6]=d*c+v*s+o*a-f*n,e[7]=v*c-o*n-f*a-d*s,e}function ao(e,t,r){var n=-t[0],a=-t[1],s=-t[2],c=t[3],l=t[4],h=t[5],u=t[6],i=t[7],o=l*c+i*n+h*s-u*a,f=h*c+i*a+u*n-l*s,d=u*c+i*s+l*a-h*n,v=i*c-l*n-h*a-u*s;return ie.rotateY(e,t,r),n=e[0],a=e[1],s=e[2],c=e[3],e[4]=o*c+v*n+f*s-d*a,e[5]=f*c+v*a+d*n-o*s,e[6]=d*c+v*s+o*a-f*n,e[7]=v*c-o*n-f*a-d*s,e}function so(e,t,r){var n=-t[0],a=-t[1],s=-t[2],c=t[3],l=t[4],h=t[5],u=t[6],i=t[7],o=l*c+i*n+h*s-u*a,f=h*c+i*a+u*n-l*s,d=u*c+i*s+l*a-h*n,v=i*c-l*n-h*a-u*s;return ie.rotateZ(e,t,r),n=e[0],a=e[1],s=e[2],c=e[3],e[4]=o*c+v*n+f*s-d*a,e[5]=f*c+v*a+d*n-o*s,e[6]=d*c+v*s+o*a-f*n,e[7]=v*c-o*n-f*a-d*s,e}function oo(e,t,r){var n=r[0],a=r[1],s=r[2],c=r[3],l=t[0],h=t[1],u=t[2],i=t[3];return e[0]=l*c+i*n+h*s-u*a,e[1]=h*c+i*a+u*n-l*s,e[2]=u*c+i*s+l*a-h*n,e[3]=i*c-l*n-h*a-u*s,l=t[4],h=t[5],u=t[6],i=t[7],e[4]=l*c+i*n+h*s-u*a,e[5]=h*c+i*a+u*n-l*s,e[6]=u*c+i*s+l*a-h*n,e[7]=i*c-l*n-h*a-u*s,e}function co(e,t,r){var n=t[0],a=t[1],s=t[2],c=t[3],l=r[0],h=r[1],u=r[2],i=r[3];return e[0]=n*i+c*l+a*u-s*h,e[1]=a*i+c*h+s*l-n*u,e[2]=s*i+c*u+n*h-a*l,e[3]=c*i-n*l-a*h-s*u,l=r[4],h=r[5],u=r[6],i=r[7],e[4]=n*i+c*l+a*u-s*h,e[5]=a*i+c*h+s*l-n*u,e[6]=s*i+c*u+n*h-a*l,e[7]=c*i-n*l-a*h-s*u,e}function lo(e,t,r,n){if(Math.abs(n)<N.EPSILON)return Dt(e,t);var a=Math.hypot(r[0],r[1],r[2]);n=n*.5;var s=Math.sin(n),c=s*r[0]/a,l=s*r[1]/a,h=s*r[2]/a,u=Math.cos(n),i=t[0],o=t[1],f=t[2],d=t[3];e[0]=i*u+d*c+o*h-f*l,e[1]=o*u+d*l+f*c-i*h,e[2]=f*u+d*h+i*l-o*c,e[3]=d*u-i*c-o*l-f*h;var v=t[4],_=t[5],p=t[6],m=t[7];return e[4]=v*u+m*c+_*h-p*l,e[5]=_*u+m*l+p*c-v*h,e[6]=p*u+m*h+v*l-_*c,e[7]=m*u-v*c-_*l-p*h,e}function fo(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e[4]=t[4]+r[4],e[5]=t[5]+r[5],e[6]=t[6]+r[6],e[7]=t[7]+r[7],e}function Ft(e,t,r){var n=t[0],a=t[1],s=t[2],c=t[3],l=r[4],h=r[5],u=r[6],i=r[7],o=t[4],f=t[5],d=t[6],v=t[7],_=r[0],p=r[1],m=r[2],y=r[3];return e[0]=n*y+c*_+a*m-s*p,e[1]=a*y+c*p+s*_-n*m,e[2]=s*y+c*m+n*p-a*_,e[3]=c*y-n*_-a*p-s*m,e[4]=n*i+c*l+a*u-s*h+o*y+v*_+f*m-d*p,e[5]=a*i+c*h+s*l-n*u+f*y+v*p+d*_-o*m,e[6]=s*i+c*u+n*h-a*l+d*y+v*m+o*p-f*_,e[7]=c*i-n*l-a*h-s*u+v*y-o*_-f*p-d*m,e}var xo=Ft;L.mul=xo;function ho(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e}var zt=ie.dot;L.dot=zt;function uo(e,t,r,n){var a=1-n;return zt(t,r)<0&&(n=-n),e[0]=t[0]*a+r[0]*n,e[1]=t[1]*a+r[1]*n,e[2]=t[2]*a+r[2]*n,e[3]=t[3]*a+r[3]*n,e[4]=t[4]*a+r[4]*n,e[5]=t[5]*a+r[5]*n,e[6]=t[6]*a+r[6]*n,e[7]=t[7]*a+r[7]*n,e}function po(e,t){var r=we(t);return e[0]=-t[0]/r,e[1]=-t[1]/r,e[2]=-t[2]/r,e[3]=t[3]/r,e[4]=-t[4]/r,e[5]=-t[5]/r,e[6]=-t[6]/r,e[7]=t[7]/r,e}function vo(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e[4]=-t[4],e[5]=-t[5],e[6]=-t[6],e[7]=t[7],e}var Yt=ie.length;L.length=Yt;var wo=Yt;L.len=wo;var we=ie.squaredLength;L.squaredLength=we;var Ao=we;L.sqrLen=Ao;function _o(e,t){var r=we(t);if(r>0){r=Math.sqrt(r);var n=t[0]/r,a=t[1]/r,s=t[2]/r,c=t[3]/r,l=t[4],h=t[5],u=t[6],i=t[7],o=n*l+a*h+s*u+c*i;e[0]=n,e[1]=a,e[2]=s,e[3]=c,e[4]=(l-n*o)/r,e[5]=(h-a*o)/r,e[6]=(u-s*o)/r,e[7]=(i-c*o)/r}return e}function mo(e){return"quat2("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+")"}function yo(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]}function go(e,t){var r=e[0],n=e[1],a=e[2],s=e[3],c=e[4],l=e[5],h=e[6],u=e[7],i=t[0],o=t[1],f=t[2],d=t[3],v=t[4],_=t[5],p=t[6],m=t[7];return Math.abs(r-i)<=N.EPSILON*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(n-o)<=N.EPSILON*Math.max(1,Math.abs(n),Math.abs(o))&&Math.abs(a-f)<=N.EPSILON*Math.max(1,Math.abs(a),Math.abs(f))&&Math.abs(s-d)<=N.EPSILON*Math.max(1,Math.abs(s),Math.abs(d))&&Math.abs(c-v)<=N.EPSILON*Math.max(1,Math.abs(c),Math.abs(v))&&Math.abs(l-_)<=N.EPSILON*Math.max(1,Math.abs(l),Math.abs(_))&&Math.abs(h-p)<=N.EPSILON*Math.max(1,Math.abs(h),Math.abs(p))&&Math.abs(u-m)<=N.EPSILON*Math.max(1,Math.abs(u),Math.abs(m))}});var Jt=H(T=>{"use strict";function Ae(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ae=function(r){return typeof r}:Ae=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Ae(e)}Object.defineProperty(T,"__esModule",{value:!0});T.create=Vt;T.clone=To;T.fromValues=So;T.copy=Oo;T.set=Ro;T.add=Lo;T.subtract=Nt;T.multiply=Xt;T.divide=Bt;T.ceil=Po;T.floor=Io;T.min=Wo;T.max=qo;T.round=Eo;T.scale=Co;T.scaleAndAdd=Do;T.distance=Gt;T.squaredDistance=Qt;T.length=Ut;T.squaredLength=Zt;T.negate=Fo;T.inverse=jo;T.normalize=ko;T.dot=zo;T.cross=Yo;T.lerp=Ho;T.random=Vo;T.transformMat2=No;T.transformMat2d=Xo;T.transformMat3=Bo;T.transformMat4=Go;T.rotate=Qo;T.angle=Uo;T.zero=Zo;T.str=$o;T.exactEquals=Jo;T.equals=Ko;T.forEach=T.sqrLen=T.sqrDist=T.dist=T.div=T.mul=T.sub=T.len=void 0;var le=ec(Z());function $t(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return $t=function(){return e},e}function ec(e){if(e&&e.__esModule)return e;if(e===null||Ae(e)!=="object"&&typeof e!="function")return{default:e};var t=$t();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}function Vt(){var e=new le.ARRAY_TYPE(2);return le.ARRAY_TYPE!=Float32Array&&(e[0]=0,e[1]=0),e}function To(e){var t=new le.ARRAY_TYPE(2);return t[0]=e[0],t[1]=e[1],t}function So(e,t){var r=new le.ARRAY_TYPE(2);return r[0]=e,r[1]=t,r}function Oo(e,t){return e[0]=t[0],e[1]=t[1],e}function Ro(e,t,r){return e[0]=t,e[1]=r,e}function Lo(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e}function Nt(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e}function Xt(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e}function Bt(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e}function Po(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e}function Io(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e}function Wo(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e}function qo(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e}function Eo(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e}function Co(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e}function Do(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e}function Gt(e,t){var r=t[0]-e[0],n=t[1]-e[1];return Math.hypot(r,n)}function Qt(e,t){var r=t[0]-e[0],n=t[1]-e[1];return r*r+n*n}function Ut(e){var t=e[0],r=e[1];return Math.hypot(t,r)}function Zt(e){var t=e[0],r=e[1];return t*t+r*r}function Fo(e,t){return e[0]=-t[0],e[1]=-t[1],e}function jo(e,t){return e[0]=1/t[0],e[1]=1/t[1],e}function ko(e,t){var r=t[0],n=t[1],a=r*r+n*n;return a>0&&(a=1/Math.sqrt(a)),e[0]=t[0]*a,e[1]=t[1]*a,e}function zo(e,t){return e[0]*t[0]+e[1]*t[1]}function Yo(e,t,r){var n=t[0]*r[1]-t[1]*r[0];return e[0]=e[1]=0,e[2]=n,e}function Ho(e,t,r,n){var a=t[0],s=t[1];return e[0]=a+n*(r[0]-a),e[1]=s+n*(r[1]-s),e}function Vo(e,t){t=t||1;var r=le.RANDOM()*2*Math.PI;return e[0]=Math.cos(r)*t,e[1]=Math.sin(r)*t,e}function No(e,t,r){var n=t[0],a=t[1];return e[0]=r[0]*n+r[2]*a,e[1]=r[1]*n+r[3]*a,e}function Xo(e,t,r){var n=t[0],a=t[1];return e[0]=r[0]*n+r[2]*a+r[4],e[1]=r[1]*n+r[3]*a+r[5],e}function Bo(e,t,r){var n=t[0],a=t[1];return e[0]=r[0]*n+r[3]*a+r[6],e[1]=r[1]*n+r[4]*a+r[7],e}function Go(e,t,r){var n=t[0],a=t[1];return e[0]=r[0]*n+r[4]*a+r[12],e[1]=r[1]*n+r[5]*a+r[13],e}function Qo(e,t,r,n){var a=t[0]-r[0],s=t[1]-r[1],c=Math.sin(n),l=Math.cos(n);return e[0]=a*l-s*c+r[0],e[1]=a*c+s*l+r[1],e}function Uo(e,t){var r=e[0],n=e[1],a=t[0],s=t[1],c=Math.sqrt(r*r+n*n)*Math.sqrt(a*a+s*s),l=c&&(r*a+n*s)/c;return Math.acos(Math.min(Math.max(l,-1),1))}function Zo(e){return e[0]=0,e[1]=0,e}function $o(e){return"vec2("+e[0]+", "+e[1]+")"}function Jo(e,t){return e[0]===t[0]&&e[1]===t[1]}function Ko(e,t){var r=e[0],n=e[1],a=t[0],s=t[1];return Math.abs(r-a)<=le.EPSILON*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(n-s)<=le.EPSILON*Math.max(1,Math.abs(n),Math.abs(s))}var tc=Ut;T.len=tc;var rc=Nt;T.sub=rc;var nc=Xt;T.mul=nc;var ic=Bt;T.div=ic;var ac=Gt;T.dist=ac;var sc=Qt;T.sqrDist=sc;var oc=Zt;T.sqrLen=oc;var cc=function(){var e=Vt();return function(t,r,n,a,s,c){var l,h;for(r||(r=2),n||(n=0),a?h=Math.min(a*r+n,t.length):h=t.length,l=n;l<h;l+=r)e[0]=t[l],e[1]=t[l+1],s(e,e,c),t[l]=e[0],t[l+1]=e[1];return t}}();T.forEach=cc});var te=H(V=>{"use strict";function Te(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Te=function(r){return typeof r}:Te=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Te(e)}Object.defineProperty(V,"__esModule",{value:!0});V.vec4=V.vec3=V.vec2=V.quat2=V.quat=V.mat4=V.mat3=V.mat2d=V.mat2=V.glMatrix=void 0;var lc=ee(Z());V.glMatrix=lc;var fc=ee(Be());V.mat2=fc;var hc=ee(Ze());V.mat2d=hc;var dc=ee(Le());V.mat3=dc;var uc=ee(Pe());V.mat4=uc;var pc=ee(Ce());V.quat=pc;var vc=ee(Ht());V.quat2=vc;var _c=ee(Jt());V.vec2=_c;var mc=ee(Ie());V.vec3=mc;var yc=ee(We());V.vec4=yc;function Kt(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return Kt=function(){return e},e}function ee(e){if(e&&e.__esModule)return e;if(e===null||Te(e)!=="object"&&typeof e!="function")return{default:e};var t=Kt();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}});var er=H(()=>{WL.registerComponent("8thwall-camera",{camera:{type:WL.Type.Enum,values:["auto","back","front"],default:"auto"}},{name:"wonderland-engine",init:function(){this.position=[0,0,0,0],this.rotation=[0,0,0,0],this.started=!1;let e=["auto","back","front"];this.camera=e[this.camera],this.camera=="auto"&&(this.camera="back"),this.onStart=this.onStart.bind(this),this.onUpdate=this.onUpdate.bind(this),XR8.addCameraPipelineModules([XR8.GlTextureRenderer.pipelineModule(),XR8.XrController.pipelineModule(),this]),this.camera=="back"?XR8.run({canvas:Module.canvas,ownRunLoop:!1}):this.camera=="back"?(XR8.XrController.configure({disableWorldTracking:!0}),XR8.run({canvas:Module.canvas,ownRunLoop:!1,cameraConfig:{direction:XR8.XrConfig.camera().FRONT}})):console.error("[8thwall-camera] Invalid camera setting:",this.camera)},update:function(){if(this.started){if(WL.scene.onPostRender.length==0&&(WL.scene.onPreRender.push(function(){XR8.runPreRender(Date.now()),_wl_reset_context()}),WL.scene.onPostRender.push(function(){XR8.runPostRender(Date.now())})),this.rotation[0]==0&&this.rotation[1]==0&&this.rotation[2]==0&&this.rotation[3]==0)return;this.object.resetTransform(),this.object.rotate(this.rotation),this.object.translate(this.position)}},onUpdate:function(e){if(!e.processCpuResult.reality)return;let t=e.processCpuResult.reality.rotation;this.rotation[0]=t.x,this.rotation[1]=t.y,this.rotation[2]=t.z,this.rotation[3]=t.w;let r=e.processCpuResult.reality.position;this.position[0]=r.x,this.position[1]=r.y,this.position[2]=r.z},onStart:function(){this.started=!0}})});var tr=H(()=>{WL.registerComponent("cursor-target",{},{init:function(){this.hoverFunctions=[],this.unHoverFunctions=[],this.clickFunctions=[],this.moveFunctions=[],this.downFunctions=[],this.upFunctions=[]},onHover:function(e,t){for(let r of this.hoverFunctions)r(e,t)},onUnhover:function(e,t){for(let r of this.unHoverFunctions)r(e,t)},onClick:function(e,t){for(let r of this.clickFunctions)r(e,t)},onMove:function(e,t){for(let r of this.moveFunctions)r(e,t)},onDown:function(e,t){for(let r of this.downFunctions)r(e,t)},onUp:function(e,t){for(let r of this.upFunctions)r(e,t)},addHoverFunction:function(e){this._validateCallback(e),this.hoverFunctions.push(e)},removeHoverFunction:function(e){this._validateCallback(e),this._removeItemOnce(this.hoverFunctions,e)},addUnHoverFunction:function(e){this._validateCallback(e),this.unHoverFunctions.push(e)},removeUnHoverFunction:function(e){this._validateCallback(e),this._removeItemOnce(this.unHoverFunctions,e)},addClickFunction:function(e){this._validateCallback(e),this.clickFunctions.push(e)},removeClickFunction:function(e){this._validateCallback(e),this._removeItemOnce(this.clickFunctions,e)},addMoveFunction:function(e){this._validateCallback(e),this.moveFunctions.push(e)},removeMoveFunction:function(e){this._validateCallback(e),this._removeItemOnce(this.moveFunctions,e)},addDownFunction:function(e){this._validateCallback(e),this.downFunctions.push(e)},removeDownFunction:function(e){this._validateCallback(e),this._removeItemOnce(this.downFunctions,e)},addUpFunction:function(e){this._validateCallback(e),this.upFunctions.push(e)},removeUpFunction:function(e){this._validateCallback(e),this._removeItemOnce(this.upFunctions,e)},_removeItemOnce:function(e,t){var r=e.indexOf(t);return r>-1&&e.splice(r,1),e},_validateCallback:function(e){if(typeof e!="function")throw new TypeError(this.object.name+".cursor-target: Argument needs to be a function")}})});var gc={};var oe,rr=$(()=>{oe=J(te());WL.registerComponent("cursor",{collisionGroup:{type:WL.Type.Int,default:1},cursorRayObject:{type:WL.Type.Object},cursorRayScalingAxis:{type:WL.Type.Enum,values:["x","y","z","none"],default:"z"},cursorObject:{type:WL.Type.Object},handedness:{type:WL.Type.Enum,values:["input component","left","right","none"],default:"input component"},rayCastMode:{type:WL.Type.Enum,values:["collision","physx"],default:"collision"},styleCursor:{type:WL.Type.Bool,default:!0}},{init:function(){this.session=null,this.collisionMask=1<<this.collisionGroup,this.maxDistance=100},start:function(){if(this.handedness==0){let e=this.object.getComponent("input");e?(this.handedness=e.handedness,this.input=e):console.warn("cursor component on object",this.object.name,'was configured with handedness "input component", but object has no input component.')}else this.handedness=["left","right"][this.handedness-1];this.globalTarget=this.object.addComponent("cursor-target"),this.origin=new Float32Array(3),this.cursorObjScale=new Float32Array(3),this.direction=[0,0,0],this.tempQuat=new Float32Array(4),this.viewComponent=this.object.getComponent("view"),this.viewComponent!=null&&(WL.canvas.addEventListener("click",this.onClick.bind(this)),WL.canvas.addEventListener("pointermove",this.onPointerMove.bind(this)),WL.canvas.addEventListener("pointerdown",this.onPointerDown.bind(this)),WL.canvas.addEventListener("pointerup",this.onPointerUp.bind(this)),this.projectionMatrix=new Float32Array(16),oe.mat4.invert(this.projectionMatrix,this.viewComponent.projectionMatrix),window.addEventListener("resize",this.onViewportResize.bind(this))),this.isHovering=!1,this.visible=!0,this.isDown=!1,this.lastIsDown=!1,this.cursorPos=new Float32Array(3),this.hoveringObject=null,WL.onXRSessionStart.push(this.setupVREvents.bind(this)),this.cursorRayObject&&(this.cursorRayScale=new Float32Array(3),this.cursorRayScale.set(this.cursorRayObject.scalingLocal),this.object.getTranslationWorld(this.origin),this.object.getForward(this.direction),this._setCursorRayTransform([this.origin[0]+this.direction[0],this.origin[1]+this.direction[1],this.origin[2]+this.direction[2]]))},onViewportResize:function(){!this.viewComponent||oe.mat4.invert(this.projectionMatrix,this.viewComponent.projectionMatrix)},_setCursorRayTransform:function(e){if(!this.cursorRayObject)return;let t=oe.vec3.dist(this.origin,e);this.cursorRayObject.setTranslationLocal([0,0,-t/2]),this.cursorRayScalingAxis!=4&&(this.cursorRayObject.resetScaling(),this.cursorRayScale[this.cursorRayScalingAxis]=t/2,this.cursorRayObject.scale(this.cursorRayScale))},_setCursorVisibility:function(e){this.visible!=e&&(this.visible=e,!!this.cursorObject&&(e?(this.cursorObject.resetScaling(),this.cursorObject.scale(this.cursorObjScale)):(this.cursorObjScale.set(this.cursorObject.scalingLocal),this.cursorObject.scale([0,0,0]))))},update:function(){this.doUpdate(!1)},doUpdate:function(e){if(this.session){if(this.arTouchDown&&this.input&&WL.xrSession.inputSources[0].handedness==="none"&&WL.xrSession.inputSources[0].gamepad){let r=WL.xrSession.inputSources[0].gamepad.axes;this.direction=[r[0],-r[1],-1],this.updateDirection()}else this.object.getTranslationWorld(this.origin),this.object.getForward(this.direction);let t=this.rayHit=this.rayCastMode==0?WL.scene.rayCast(this.origin,this.direction,this.collisionMask):WL.physics.rayCast(this.origin,this.direction,this.collisionMask,this.maxDistance);t.hitCount>0?this.cursorPos.set(t.locations[0]):this.cursorPos.fill(0),this.hoverBehaviour(t,e)}this.cursorObject&&(this.hoveringObject&&(this.cursorPos[0]!=0||this.cursorPos[1]!=0||this.cursorPos[2]!=0)?(this._setCursorVisibility(!0),this.cursorObject.setTranslationWorld(this.cursorPos),this._setCursorRayTransform(this.cursorPos)):this._setCursorVisibility(!1))},hoverBehaviour:function(e,t){if(e.hitCount>0){if(!this.hoveringObject||!this.hoveringObject.equals(e.objects[0])){if(this.hoveringObject){let a=this.hoveringObject.getComponent("cursor-target");a&&a.onUnhover(this.hoveringObject,this),this.globalTarget.onUnhover(this.hoveringObject,this)}this.hoveringObject=e.objects[0],this.styleCursor&&(WL.canvas.style.cursor="pointer");let n=this.hoveringObject.getComponent("cursor-target");n&&(this.hoveringObjectTarget=n,n.onHover(this.hoveringObject,this)),this.globalTarget.onHover(this.hoveringObject,this)}this.hoveringObjectTarget&&this.hoveringObjectTarget.onMove(this.hoveringObject,this);let r=this.hoveringObject.getComponent("cursor-target");this.isDown!==this.lastIsDown&&(this.isDown?(r&&r.onDown(this.hoveringObject,this),this.globalTarget.onDown(this.hoveringObject,this)):(r&&r.onUp(this.hoveringObject,this),this.globalTarget.onUp(this.hoveringObject,this))),t&&(r&&r.onClick(this.hoveringObject,this),this.globalTarget.onClick(this.hoveringObject,this))}else if(this.hoveringObject&&e.hitCount==0){let r=this.hoveringObject.getComponent("cursor-target");r&&r.onUnhover(this.hoveringObject,this),this.globalTarget.onUnhover(this.hoveringObject,this),this.hoveringObject=null,this.hoveringObjectTarget=null,this.styleCursor&&(WL.canvas.style.cursor="default")}this.lastIsDown=this.isDown},setupVREvents:function(e){this.session=e,e.addEventListener("end",function(t){this.session=null}.bind(this)),e.addEventListener("select",this.onSelect.bind(this)),e.addEventListener("selectstart",this.onSelectStart.bind(this)),e.addEventListener("selectend",this.onSelectEnd.bind(this)),this.onViewportResize()},onSelect:function(e){e.inputSource.handedness==this.handedness&&this.doUpdate(!0)},onSelectStart:function(e){this.arTouchDown=!0,e.inputSource.handedness==this.handedness&&(this.isDown=!0)},onSelectEnd:function(e){this.arTouchDown=!1,e.inputSource.handedness==this.handedness&&(this.isDown=!1)},onPointerMove:function(e){if(!e.isPrimary)return;let t=e.target.getBoundingClientRect(),r=this.updateMousePos(e.clientX,e.clientY,t.width,t.height);this.hoverBehaviour(r,!1)},onClick:function(e){let t=e.target.getBoundingClientRect(),r=this.updateMousePos(e.clientX,e.clientY,t.width,t.height);this.hoverBehaviour(r,!0)},onPointerDown:function(e){if(!e.isPrimary||e.button!==0)return;let t=e.target.getBoundingClientRect(),r=this.updateMousePos(e.clientX,e.clientY,t.width,t.height);this.isDown=!0,this.hoverBehaviour(r,!1)},onPointerUp:function(e){if(!e.isPrimary||e.button!==0)return;let t=e.target.getBoundingClientRect(),r=this.updateMousePos(e.clientX,e.clientY,t.width,t.height);this.isDown=!1,this.hoverBehaviour(r,!1)},updateMousePos:function(e,t,r,n){let a=e/r,s=t/n;return this.direction=[a*2-1,-s*2+1,-1],this.updateDirection()},updateDirection:function(){this.object.getTranslationWorld(this.origin),oe.vec3.transformMat4(this.direction,this.direction,this.projectionMatrix),oe.vec3.normalize(this.direction,this.direction),oe.vec3.transformQuat(this.direction,this.direction,this.object.transformWorld);let e=this.rayHit=this.rayCastMode==0?WL.scene.rayCast(this.origin,this.direction,this.collisionMask):WL.physics.rayCast(this.origin,this.direction,this.collisionMask,this.maxDistance);return e.hitCount>0?this.cursorPos.set(e.locations[0]):this.cursorPos.fill(0),e},onDeactivate:function(){if(this._setCursorVisibility(!1),this.hoveringObject){let e=this.hoveringObject.getComponent("cursor-target");e&&e.onUnhover(this.hoveringObject,this),this.globalTarget.onUnhover(this.hoveringObject,this)}this.cursorRayObject&&this.cursorRayObject.scale([0,0,0])},onActivate:function(){this._setCursorVisibility(!0)}})});var nr=H(()=>{WL.registerComponent("debug-object",{obj:{type:WL.Type.Object}},{start:function(){},init:function(){let e=[0,0,0];glMatrix.quat2.getTranslation(e,this.object.transformWorld),console.log("Debug Object:",this.object.name),console.log("Other object:",this.obj.name),console.log("	translation",e),console.log("	transformWorld",this.object.transformWorld),console.log("	transformLocal",this.object.transformLocal)},update:function(){}})});var ir=H(()=>{function Mc(e,t,r,n){let a=Math.cos(t/2),s=Math.cos(r/2),c=Math.cos(n/2),l=Math.sin(t/2),h=Math.sin(r/2),u=Math.sin(n/2);e[0]=l*s*c+a*h*u,e[1]=a*h*c-l*s*u,e[2]=a*s*u-l*h*c,e[3]=a*s*c+l*h*u}WL.registerComponent("device-orientation-look",{},{start:function(){this.rotationX=0,this.rotationY=0,this.lastClientX=-1,this.lastClientY=-1},init:function(){this.deviceOrientation=[0,0,0,1],this.screenOrientation=0,this._origin=[0,0,0],window.addEventListener("deviceorientation",function(e){let t=e.alpha||0,r=e.beta||0,n=e.gamma||0,a=Math.PI/180;Mc(this.deviceOrientation,r*a,t*a,-n*a)}.bind(this)),window.addEventListener("orientationchange",function(e){this.screenOrientation=window.orientation||0}.bind(this),!1)},update:function(){Module.webxr_session==null&&(glMatrix.quat2.getTranslation(this._origin,this.object.transformLocal),this.object.resetTransform(),this.screenOrientation!=0&&this.object.rotateAxisAngleDeg([0,0,1],this.screenOrientation),this.object.rotate([-Math.sqrt(.5),0,0,Math.sqrt(.5)]),this.object.rotate(this.deviceOrientation),this.object.translate(this._origin))}})});var ar=H(()=>{WL.registerComponent("finger-cursor",{},{init:function(){this.lastTarget=null},start:function(){this.tip=this.object.getComponent("collision")},update:function(){let e=this.tip.queryOverlaps(),t=null;for(let r=0;r<e.length;++r){let n=e[r].object,a=n.getComponent("cursor-target");if(a){a.equals(this.lastTarget)||(a.onHover(n,this),a.onClick(n,this)),t=a;break}}if(t)this.lastTarget=t;else{this.lastTarget&&this.lastTarget.onUnhover(this.lastTarget.object,this),this.lastTarget=null;return}}})});var sr=H(()=>{WL.registerComponent("fixed-foveation",{fixedFoveation:{type:WL.Type.Float,default:.5}},{start:function(){WL.xrSession?this.setFixedFoveation():WL.onXRSessionStart.push(this.setFixedFoveation.bind(this))},setFixedFoveation:function(){"webxr_baseLayer"in Module&&(Module.webxr_baseLayer.fixedFoveation=this.fixedFoveation)}})});var bc={};var fe,or=$(()=>{fe=J(te());WL.registerComponent("hand-tracking",{handedness:{type:WL.Type.Enum,default:"left",values:["left","right"]},jointMesh:{type:WL.Type.Mesh,default:null},jointMaterial:{type:WL.Type.Material,default:null},handSkin:{type:WL.Type.Skin,default:null},deactivateChildrenWithoutPose:{type:WL.Type.Bool,default:!0},controllerToDeactivate:{type:WL.Type.Object}},{ORDERED_JOINTS:["wrist","thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip","index-finger-metacarpal","index-finger-phalanx-proximal","index-finger-phalanx-intermediate","index-finger-phalanx-distal","index-finger-tip","middle-finger-metacarpal","middle-finger-phalanx-proximal","middle-finger-phalanx-intermediate","middle-finger-phalanx-distal","middle-finger-tip","ring-finger-metacarpal","ring-finger-phalanx-proximal","ring-finger-phalanx-intermediate","ring-finger-phalanx-distal","ring-finger-tip","pinky-finger-metacarpal","pinky-finger-phalanx-proximal","pinky-finger-phalanx-intermediate","pinky-finger-phalanx-distal","pinky-finger-tip"],init:function(){this.handedness=["left","right"][this.handedness]},start:function(){if(this.joints=[],this.session=null,this.hasPose=!1,this._childrenActive=!0,!("XRHand"in window)){console.warn("WebXR Hand Tracking not supported by this browser."),this.active=!1;return}if(this.handSkin){let t=this.handSkin.jointIds;this.joints[this.ORDERED_JOINTS[0]]=new WL.Object(t[0]);for(let r=0;r<t.length;++r){let n=new WL.Object(t[r]);this.joints[n.name]=n}return}for(let e=0;e<=this.ORDERED_JOINTS.length;++e){let t=WL.scene.addObject(this.object.parent),r=t.addComponent("mesh");r.mesh=this.jointMesh,r.material=this.jointMaterial,this.joints[this.ORDERED_JOINTS[e]]=t}},update:function(e){if(this.session||WL.xrSession&&this.setupVREvents(WL.xrSession),!!this.session){if(this.hasPose=!1,this.session&&this.session.inputSources)for(let t=0;t<=this.session.inputSources.length;++t){let r=this.session.inputSources[t];if(!r||!r.hand||r.handedness!=this.handedness)continue;if(this.hasPose=!0,r.hand.get("wrist")!==null){let s=Module.webxr_frame.getJointPose(r.hand.get("wrist"),WebXR.refSpaces[WebXR.refSpace]);s&&(this.object.resetTranslationRotation(),this.object.transformLocal.set([s.transform.orientation.x,s.transform.orientation.y,s.transform.orientation.z,s.transform.orientation.w]),this.object.translate([s.transform.position.x,s.transform.position.y,s.transform.position.z]))}let n=new Float32Array(3),a=new Float32Array(4);fe.quat.invert(a,this.object.transformLocal),this.object.getTranslationLocal(n);for(let s=0;s<this.ORDERED_JOINTS.length;++s){let c=this.ORDERED_JOINTS[s],l=this.joints[c];if(l==null)continue;let h=null;if(r.hand.get(c)!==null&&(h=Module.webxr_frame.getJointPose(r.hand.get(c),WebXR.refSpaces[WebXR.refSpace])),h!==null)if(this.handSkin)l.resetTranslationRotation(),l.translate([h.transform.position.x-n[0],h.transform.position.y-n[1],h.transform.position.z-n[2]]),l.rotate(a),l.rotateObject([h.transform.orientation.x,h.transform.orientation.y,h.transform.orientation.z,h.transform.orientation.w]);else{l.resetTransform(),l.transformLocal.set([h.transform.orientation.x,h.transform.orientation.y,h.transform.orientation.z,h.transform.orientation.w]),l.translate([h.transform.position.x,h.transform.position.y,h.transform.position.z]);let u=h.radius||.007;l.scale([u,u,u])}else this.handSkin||l.scale([0,0,0])}}!this.hasPose&&this._childrenActive?(this._childrenActive=!1,this.deactivateChildrenWithoutPose&&this.setChildrenActive(!1),this.controllerToDeactivate&&(this.controllerToDeactivate.active=!0,this.setChildrenActive(!0,this.controllerToDeactivate))):this.hasPose&&!this._childrenActive&&(this._childrenActive=!0,this.deactivateChildrenWithoutPose&&this.setChildrenActive(!0),this.controllerToDeactivate&&(this.controllerToDeactivate.active=!1,this.setChildrenActive(!1,this.controllerToDeactivate)))}},setChildrenActive:function(e,t){t=t||this.object;let r=t.children;for(let n of r)n.active=e,this.setChildrenActive(e,n)},isGrabbing:function(){let e=[0,0,0];fe.quat2.getTranslation(e,this.joints["index-finger-tip"].transformLocal);let t=[0,0,0];return fe.quat2.getTranslation(t,this.joints["thumb-tip"].transformLocal),fe.vec3.sqrDist(t,e)<.001},setupVREvents:function(e){this.session=e}})});var xc={};var cr,lr=$(()=>{cr=J(te());WL.registerComponent("hit-test-location",{},{init:function(){WL.onXRSessionStart.push(this.xrSessionStart.bind(this)),WL.onXRSessionStart.push(this.xrSessionEnd.bind(this)),this.tempScaling=new Float32Array(3),this.tempScaling.set(this.object.scalingLocal),this.visible=!1,this.object.scale([0,0,0])},update:function(e){let t=this.visible;if(this.xrHitTestSource){let r=Module.webxr_frame;if(!r)return;let n=r.getHitTestResults(this.xrHitTestSource);if(n.length>0){let a=n[0].getPose(this.xrViewerSpace);this.visible=!0,cr.quat2.fromMat4(this.object.transformLocal,a.transform.matrix),this.object.setDirty()}else this.visible=!1}this.visible!=t&&(this.visible?(this.object.scalingLocal.set(this.tempScaling),this.object.setDirty()):(this.tempScaling.set(this.object.scalingLocal),this.object.scale([0,0,0])))},xrSessionStart:function(e){e.requestReferenceSpace("viewer").then(function(t){this.xrViewerSpace=t,e.requestHitTestSource({space:this.xrViewerSpace}).then(function(r){this.xrHitTestSource=r}.bind(this)).catch(console.error)}.bind(this)).catch(console.error)},xrSessionEnd:function(){!this.xrHitTestSource||(this.xrHitTestSource.cancel(),this.xrHitTestSource=null)}})});var Fe=H(Se=>{(function(){"use strict";var e=function(){this.init()};e.prototype={init:function(){var i=this||t;return i._counter=1e3,i._html5AudioPool=[],i.html5PoolSize=10,i._codecs={},i._howls=[],i._muted=!1,i._volume=1,i._canPlayEvent="canplaythrough",i._navigator=typeof window!="undefined"&&window.navigator?window.navigator:null,i.masterGain=null,i.noAudio=!1,i.usingWebAudio=!0,i.autoSuspend=!0,i.ctx=null,i.autoUnlock=!0,i._setup(),i},volume:function(i){var o=this||t;if(i=parseFloat(i),o.ctx||u(),typeof i!="undefined"&&i>=0&&i<=1){if(o._volume=i,o._muted)return o;o.usingWebAudio&&o.masterGain.gain.setValueAtTime(i,t.ctx.currentTime);for(var f=0;f<o._howls.length;f++)if(!o._howls[f]._webAudio)for(var d=o._howls[f]._getSoundIds(),v=0;v<d.length;v++){var _=o._howls[f]._soundById(d[v]);_&&_._node&&(_._node.volume=_._volume*i)}return o}return o._volume},mute:function(i){var o=this||t;o.ctx||u(),o._muted=i,o.usingWebAudio&&o.masterGain.gain.setValueAtTime(i?0:o._volume,t.ctx.currentTime);for(var f=0;f<o._howls.length;f++)if(!o._howls[f]._webAudio)for(var d=o._howls[f]._getSoundIds(),v=0;v<d.length;v++){var _=o._howls[f]._soundById(d[v]);_&&_._node&&(_._node.muted=i?!0:_._muted)}return o},stop:function(){for(var i=this||t,o=0;o<i._howls.length;o++)i._howls[o].stop();return i},unload:function(){for(var i=this||t,o=i._howls.length-1;o>=0;o--)i._howls[o].unload();return i.usingWebAudio&&i.ctx&&typeof i.ctx.close!="undefined"&&(i.ctx.close(),i.ctx=null,u()),i},codecs:function(i){return(this||t)._codecs[i.replace(/^x-/,"")]},_setup:function(){var i=this||t;if(i.state=i.ctx&&i.ctx.state||"suspended",i._autoSuspend(),!i.usingWebAudio)if(typeof Audio!="undefined")try{var o=new Audio;typeof o.oncanplaythrough=="undefined"&&(i._canPlayEvent="canplay")}catch(f){i.noAudio=!0}else i.noAudio=!0;try{var o=new Audio;o.muted&&(i.noAudio=!0)}catch(f){}return i.noAudio||i._setupCodecs(),i},_setupCodecs:function(){var i=this||t,o=null;try{o=typeof Audio!="undefined"?new Audio:null}catch(_){return i}if(!o||typeof o.canPlayType!="function")return i;var f=o.canPlayType("audio/mpeg;").replace(/^no$/,""),d=i._navigator&&i._navigator.userAgent.match(/OPR\/([0-6].)/g),v=d&&parseInt(d[0].split("/")[1],10)<33;return i._codecs={mp3:!!(!v&&(f||o.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!f,opus:!!o.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(o.canPlayType('audio/wav; codecs="1"')||o.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!o.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!o.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(o.canPlayType("audio/x-m4a;")||o.canPlayType("audio/m4a;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(o.canPlayType("audio/x-m4b;")||o.canPlayType("audio/m4b;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(o.canPlayType("audio/x-mp4;")||o.canPlayType("audio/mp4;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),webm:!!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),dolby:!!o.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(o.canPlayType("audio/x-flac;")||o.canPlayType("audio/flac;")).replace(/^no$/,"")},i},_unlockAudio:function(){var i=this||t;if(!(i._audioUnlocked||!i.ctx)){i._audioUnlocked=!1,i.autoUnlock=!1,!i._mobileUnloaded&&i.ctx.sampleRate!==44100&&(i._mobileUnloaded=!0,i.unload()),i._scratchBuffer=i.ctx.createBuffer(1,1,22050);var o=function(f){for(;i._html5AudioPool.length<i.html5PoolSize;)try{var d=new Audio;d._unlocked=!0,i._releaseHtml5Audio(d)}catch(g){i.noAudio=!0;break}for(var v=0;v<i._howls.length;v++)if(!i._howls[v]._webAudio)for(var _=i._howls[v]._getSoundIds(),p=0;p<_.length;p++){var m=i._howls[v]._soundById(_[p]);m&&m._node&&!m._node._unlocked&&(m._node._unlocked=!0,m._node.load())}i._autoResume();var y=i.ctx.createBufferSource();y.buffer=i._scratchBuffer,y.connect(i.ctx.destination),typeof y.start=="undefined"?y.noteOn(0):y.start(0),typeof i.ctx.resume=="function"&&i.ctx.resume(),y.onended=function(){y.disconnect(0),i._audioUnlocked=!0,document.removeEventListener("touchstart",o,!0),document.removeEventListener("touchend",o,!0),document.removeEventListener("click",o,!0);for(var g=0;g<i._howls.length;g++)i._howls[g]._emit("unlock")}};return document.addEventListener("touchstart",o,!0),document.addEventListener("touchend",o,!0),document.addEventListener("click",o,!0),i}},_obtainHtml5Audio:function(){var i=this||t;if(i._html5AudioPool.length)return i._html5AudioPool.pop();var o=new Audio().play();return o&&typeof Promise!="undefined"&&(o instanceof Promise||typeof o.then=="function")&&o.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(i){var o=this||t;return i._unlocked&&o._html5AudioPool.push(i),o},_autoSuspend:function(){var i=this;if(!(!i.autoSuspend||!i.ctx||typeof i.ctx.suspend=="undefined"||!t.usingWebAudio)){for(var o=0;o<i._howls.length;o++)if(i._howls[o]._webAudio){for(var f=0;f<i._howls[o]._sounds.length;f++)if(!i._howls[o]._sounds[f]._paused)return i}return i._suspendTimer&&clearTimeout(i._suspendTimer),i._suspendTimer=setTimeout(function(){if(!!i.autoSuspend){i._suspendTimer=null,i.state="suspending";var d=function(){i.state="suspended",i._resumeAfterSuspend&&(delete i._resumeAfterSuspend,i._autoResume())};i.ctx.suspend().then(d,d)}},3e4),i}},_autoResume:function(){var i=this;if(!(!i.ctx||typeof i.ctx.resume=="undefined"||!t.usingWebAudio))return i.state==="running"&&i.ctx.state!=="interrupted"&&i._suspendTimer?(clearTimeout(i._suspendTimer),i._suspendTimer=null):i.state==="suspended"||i.state==="running"&&i.ctx.state==="interrupted"?(i.ctx.resume().then(function(){i.state="running";for(var o=0;o<i._howls.length;o++)i._howls[o]._emit("resume")}),i._suspendTimer&&(clearTimeout(i._suspendTimer),i._suspendTimer=null)):i.state==="suspending"&&(i._resumeAfterSuspend=!0),i}};var t=new e,r=function(i){var o=this;if(!i.src||i.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}o.init(i)};r.prototype={init:function(i){var o=this;return t.ctx||u(),o._autoplay=i.autoplay||!1,o._format=typeof i.format!="string"?i.format:[i.format],o._html5=i.html5||!1,o._muted=i.mute||!1,o._loop=i.loop||!1,o._pool=i.pool||5,o._preload=typeof i.preload=="boolean"||i.preload==="metadata"?i.preload:!0,o._rate=i.rate||1,o._sprite=i.sprite||{},o._src=typeof i.src!="string"?i.src:[i.src],o._volume=i.volume!==void 0?i.volume:1,o._xhr={method:i.xhr&&i.xhr.method?i.xhr.method:"GET",headers:i.xhr&&i.xhr.headers?i.xhr.headers:null,withCredentials:i.xhr&&i.xhr.withCredentials?i.xhr.withCredentials:!1},o._duration=0,o._state="unloaded",o._sounds=[],o._endTimers={},o._queue=[],o._playLock=!1,o._onend=i.onend?[{fn:i.onend}]:[],o._onfade=i.onfade?[{fn:i.onfade}]:[],o._onload=i.onload?[{fn:i.onload}]:[],o._onloaderror=i.onloaderror?[{fn:i.onloaderror}]:[],o._onplayerror=i.onplayerror?[{fn:i.onplayerror}]:[],o._onpause=i.onpause?[{fn:i.onpause}]:[],o._onplay=i.onplay?[{fn:i.onplay}]:[],o._onstop=i.onstop?[{fn:i.onstop}]:[],o._onmute=i.onmute?[{fn:i.onmute}]:[],o._onvolume=i.onvolume?[{fn:i.onvolume}]:[],o._onrate=i.onrate?[{fn:i.onrate}]:[],o._onseek=i.onseek?[{fn:i.onseek}]:[],o._onunlock=i.onunlock?[{fn:i.onunlock}]:[],o._onresume=[],o._webAudio=t.usingWebAudio&&!o._html5,typeof t.ctx!="undefined"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(o),o._autoplay&&o._queue.push({event:"play",action:function(){o.play()}}),o._preload&&o._preload!=="none"&&o.load(),o},load:function(){var i=this,o=null;if(t.noAudio){i._emit("loaderror",null,"No audio support.");return}typeof i._src=="string"&&(i._src=[i._src]);for(var f=0;f<i._src.length;f++){var d,v;if(i._format&&i._format[f])d=i._format[f];else{if(v=i._src[f],typeof v!="string"){i._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}d=/^data:audio\/([^;,]+);/i.exec(v),d||(d=/\.([^.]+)$/.exec(v.split("?",1)[0])),d&&(d=d[1].toLowerCase())}if(d||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),d&&t.codecs(d)){o=i._src[f];break}}if(!o){i._emit("loaderror",null,"No codec support for selected audio sources.");return}return i._src=o,i._state="loading",window.location.protocol==="https:"&&o.slice(0,5)==="http:"&&(i._html5=!0,i._webAudio=!1),new n(i),i._webAudio&&s(i),i},play:function(i,o){var f=this,d=null;if(typeof i=="number")d=i,i=null;else{if(typeof i=="string"&&f._state==="loaded"&&!f._sprite[i])return null;if(typeof i=="undefined"&&(i="__default",!f._playLock)){for(var v=0,_=0;_<f._sounds.length;_++)f._sounds[_]._paused&&!f._sounds[_]._ended&&(v++,d=f._sounds[_]._id);v===1?i=null:d=null}}var p=d?f._soundById(d):f._inactiveSound();if(!p)return null;if(d&&!i&&(i=p._sprite||"__default"),f._state!=="loaded"){p._sprite=i,p._ended=!1;var m=p._id;return f._queue.push({event:"play",action:function(){f.play(m)}}),m}if(d&&!p._paused)return o||f._loadQueue("play"),p._id;f._webAudio&&t._autoResume();var y=Math.max(0,p._seek>0?p._seek:f._sprite[i][0]/1e3),g=Math.max(0,(f._sprite[i][0]+f._sprite[i][1])/1e3-y),M=g*1e3/Math.abs(p._rate),b=f._sprite[i][0]/1e3,x=(f._sprite[i][0]+f._sprite[i][1])/1e3;p._sprite=i,p._ended=!1;var q=function(){p._paused=!1,p._seek=y,p._start=b,p._stop=x,p._loop=!!(p._loop||f._sprite[i][2])};if(y>=x){f._ended(p);return}var S=p._node;if(f._webAudio){var D=function(){f._playLock=!1,q(),f._refreshBuffer(p);var E=p._muted||f._muted?0:p._volume;S.gain.setValueAtTime(E,t.ctx.currentTime),p._playStart=t.ctx.currentTime,typeof S.bufferSource.start=="undefined"?p._loop?S.bufferSource.noteGrainOn(0,y,86400):S.bufferSource.noteGrainOn(0,y,g):p._loop?S.bufferSource.start(0,y,86400):S.bufferSource.start(0,y,g),M!==Infinity&&(f._endTimers[p._id]=setTimeout(f._ended.bind(f,p),M)),o||setTimeout(function(){f._emit("play",p._id),f._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?D():(f._playLock=!0,f.once("resume",D),f._clearTimer(p._id))}else{var C=function(){S.currentTime=y,S.muted=p._muted||f._muted||t._muted||S.muted,S.volume=p._volume*t.volume(),S.playbackRate=p._rate;try{var E=S.play();if(E&&typeof Promise!="undefined"&&(E instanceof Promise||typeof E.then=="function")?(f._playLock=!0,q(),E.then(function(){f._playLock=!1,S._unlocked=!0,o||(f._emit("play",p._id),f._loadQueue())}).catch(function(){f._playLock=!1,f._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),p._ended=!0,p._paused=!0})):o||(f._playLock=!1,q(),f._emit("play",p._id),f._loadQueue()),S.playbackRate=p._rate,S.paused){f._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}i!=="__default"||p._loop?f._endTimers[p._id]=setTimeout(f._ended.bind(f,p),M):(f._endTimers[p._id]=function(){f._ended(p),S.removeEventListener("ended",f._endTimers[p._id],!1)},S.addEventListener("ended",f._endTimers[p._id],!1))}catch(P){f._emit("playerror",p._id,P)}};S.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(S.src=f._src,S.load());var z=window&&window.ejecta||!S.readyState&&t._navigator.isCocoonJS;if(S.readyState>=3||z)C();else{f._playLock=!0;var F=function(){C(),S.removeEventListener(t._canPlayEvent,F,!1)};S.addEventListener(t._canPlayEvent,F,!1),f._clearTimer(p._id)}}return p._id},pause:function(i){var o=this;if(o._state!=="loaded"||o._playLock)return o._queue.push({event:"pause",action:function(){o.pause(i)}}),o;for(var f=o._getSoundIds(i),d=0;d<f.length;d++){o._clearTimer(f[d]);var v=o._soundById(f[d]);if(v&&!v._paused&&(v._seek=o.seek(f[d]),v._rateSeek=0,v._paused=!0,o._stopFade(f[d]),v._node))if(o._webAudio){if(!v._node.bufferSource)continue;typeof v._node.bufferSource.stop=="undefined"?v._node.bufferSource.noteOff(0):v._node.bufferSource.stop(0),o._cleanBuffer(v._node)}else(!isNaN(v._node.duration)||v._node.duration===Infinity)&&v._node.pause();arguments[1]||o._emit("pause",v?v._id:null)}return o},stop:function(i,o){var f=this;if(f._state!=="loaded"||f._playLock)return f._queue.push({event:"stop",action:function(){f.stop(i)}}),f;for(var d=f._getSoundIds(i),v=0;v<d.length;v++){f._clearTimer(d[v]);var _=f._soundById(d[v]);_&&(_._seek=_._start||0,_._rateSeek=0,_._paused=!0,_._ended=!0,f._stopFade(d[v]),_._node&&(f._webAudio?_._node.bufferSource&&(typeof _._node.bufferSource.stop=="undefined"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),f._cleanBuffer(_._node)):(!isNaN(_._node.duration)||_._node.duration===Infinity)&&(_._node.currentTime=_._start||0,_._node.pause(),_._node.duration===Infinity&&f._clearSound(_._node))),o||f._emit("stop",_._id))}return f},mute:function(i,o){var f=this;if(f._state!=="loaded"||f._playLock)return f._queue.push({event:"mute",action:function(){f.mute(i,o)}}),f;if(typeof o=="undefined")if(typeof i=="boolean")f._muted=i;else return f._muted;for(var d=f._getSoundIds(o),v=0;v<d.length;v++){var _=f._soundById(d[v]);_&&(_._muted=i,_._interval&&f._stopFade(_._id),f._webAudio&&_._node?_._node.gain.setValueAtTime(i?0:_._volume,t.ctx.currentTime):_._node&&(_._node.muted=t._muted?!0:i),f._emit("mute",_._id))}return f},volume:function(){var i=this,o=arguments,f,d;if(o.length===0)return i._volume;if(o.length===1||o.length===2&&typeof o[1]=="undefined"){var v=i._getSoundIds(),_=v.indexOf(o[0]);_>=0?d=parseInt(o[0],10):f=parseFloat(o[0])}else o.length>=2&&(f=parseFloat(o[0]),d=parseInt(o[1],10));var p;if(typeof f!="undefined"&&f>=0&&f<=1){if(i._state!=="loaded"||i._playLock)return i._queue.push({event:"volume",action:function(){i.volume.apply(i,o)}}),i;typeof d=="undefined"&&(i._volume=f),d=i._getSoundIds(d);for(var m=0;m<d.length;m++)p=i._soundById(d[m]),p&&(p._volume=f,o[2]||i._stopFade(d[m]),i._webAudio&&p._node&&!p._muted?p._node.gain.setValueAtTime(f,t.ctx.currentTime):p._node&&!p._muted&&(p._node.volume=f*t.volume()),i._emit("volume",p._id))}else return p=d?i._soundById(d):i._sounds[0],p?p._volume:0;return i},fade:function(i,o,f,d){var v=this;if(v._state!=="loaded"||v._playLock)return v._queue.push({event:"fade",action:function(){v.fade(i,o,f,d)}}),v;i=Math.min(Math.max(0,parseFloat(i)),1),o=Math.min(Math.max(0,parseFloat(o)),1),f=parseFloat(f),v.volume(i,d);for(var _=v._getSoundIds(d),p=0;p<_.length;p++){var m=v._soundById(_[p]);if(m){if(d||v._stopFade(_[p]),v._webAudio&&!m._muted){var y=t.ctx.currentTime,g=y+f/1e3;m._volume=i,m._node.gain.setValueAtTime(i,y),m._node.gain.linearRampToValueAtTime(o,g)}v._startFadeInterval(m,i,o,f,_[p],typeof d=="undefined")}}return v},_startFadeInterval:function(i,o,f,d,v,_){var p=this,m=o,y=f-o,g=Math.abs(y/.01),M=Math.max(4,g>0?d/g:d),b=Date.now();i._fadeTo=f,i._interval=setInterval(function(){var x=(Date.now()-b)/d;b=Date.now(),m+=y*x,m=Math.round(m*100)/100,y<0?m=Math.max(f,m):m=Math.min(f,m),p._webAudio?i._volume=m:p.volume(m,i._id,!0),_&&(p._volume=m),(f<o&&m<=f||f>o&&m>=f)&&(clearInterval(i._interval),i._interval=null,i._fadeTo=null,p.volume(f,i._id),p._emit("fade",i._id))},M)},_stopFade:function(i){var o=this,f=o._soundById(i);return f&&f._interval&&(o._webAudio&&f._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(f._interval),f._interval=null,o.volume(f._fadeTo,i),f._fadeTo=null,o._emit("fade",i)),o},loop:function(){var i=this,o=arguments,f,d,v;if(o.length===0)return i._loop;if(o.length===1)if(typeof o[0]=="boolean")f=o[0],i._loop=f;else return v=i._soundById(parseInt(o[0],10)),v?v._loop:!1;else o.length===2&&(f=o[0],d=parseInt(o[1],10));for(var _=i._getSoundIds(d),p=0;p<_.length;p++)v=i._soundById(_[p]),v&&(v._loop=f,i._webAudio&&v._node&&v._node.bufferSource&&(v._node.bufferSource.loop=f,f&&(v._node.bufferSource.loopStart=v._start||0,v._node.bufferSource.loopEnd=v._stop)));return i},rate:function(){var i=this,o=arguments,f,d;if(o.length===0)d=i._sounds[0]._id;else if(o.length===1){var v=i._getSoundIds(),_=v.indexOf(o[0]);_>=0?d=parseInt(o[0],10):f=parseFloat(o[0])}else o.length===2&&(f=parseFloat(o[0]),d=parseInt(o[1],10));var p;if(typeof f=="number"){if(i._state!=="loaded"||i._playLock)return i._queue.push({event:"rate",action:function(){i.rate.apply(i,o)}}),i;typeof d=="undefined"&&(i._rate=f),d=i._getSoundIds(d);for(var m=0;m<d.length;m++)if(p=i._soundById(d[m]),p){i.playing(d[m])&&(p._rateSeek=i.seek(d[m]),p._playStart=i._webAudio?t.ctx.currentTime:p._playStart),p._rate=f,i._webAudio&&p._node&&p._node.bufferSource?p._node.bufferSource.playbackRate.setValueAtTime(f,t.ctx.currentTime):p._node&&(p._node.playbackRate=f);var y=i.seek(d[m]),g=(i._sprite[p._sprite][0]+i._sprite[p._sprite][1])/1e3-y,M=g*1e3/Math.abs(p._rate);(i._endTimers[d[m]]||!p._paused)&&(i._clearTimer(d[m]),i._endTimers[d[m]]=setTimeout(i._ended.bind(i,p),M)),i._emit("rate",p._id)}}else return p=i._soundById(d),p?p._rate:i._rate;return i},seek:function(){var i=this,o=arguments,f,d;if(o.length===0)d=i._sounds[0]._id;else if(o.length===1){var v=i._getSoundIds(),_=v.indexOf(o[0]);_>=0?d=parseInt(o[0],10):i._sounds.length&&(d=i._sounds[0]._id,f=parseFloat(o[0]))}else o.length===2&&(f=parseFloat(o[0]),d=parseInt(o[1],10));if(typeof d=="undefined")return i;if(typeof f=="number"&&(i._state!=="loaded"||i._playLock))return i._queue.push({event:"seek",action:function(){i.seek.apply(i,o)}}),i;var p=i._soundById(d);if(p)if(typeof f=="number"&&f>=0){var m=i.playing(d);m&&i.pause(d,!0),p._seek=f,p._ended=!1,i._clearTimer(d),!i._webAudio&&p._node&&!isNaN(p._node.duration)&&(p._node.currentTime=f);var y=function(){i._emit("seek",d),m&&i.play(d,!0)};if(m&&!i._webAudio){var g=function(){i._playLock?setTimeout(g,0):y()};setTimeout(g,0)}else y()}else if(i._webAudio){var M=i.playing(d)?t.ctx.currentTime-p._playStart:0,b=p._rateSeek?p._rateSeek-p._seek:0;return p._seek+(b+M*Math.abs(p._rate))}else return p._node.currentTime;return i},playing:function(i){var o=this;if(typeof i=="number"){var f=o._soundById(i);return f?!f._paused:!1}for(var d=0;d<o._sounds.length;d++)if(!o._sounds[d]._paused)return!0;return!1},duration:function(i){var o=this,f=o._duration,d=o._soundById(i);return d&&(f=o._sprite[d._sprite][1]/1e3),f},state:function(){return this._state},unload:function(){for(var i=this,o=i._sounds,f=0;f<o.length;f++)o[f]._paused||i.stop(o[f]._id),i._webAudio||(i._clearSound(o[f]._node),o[f]._node.removeEventListener("error",o[f]._errorFn,!1),o[f]._node.removeEventListener(t._canPlayEvent,o[f]._loadFn,!1),o[f]._node.removeEventListener("ended",o[f]._endFn,!1),t._releaseHtml5Audio(o[f]._node)),delete o[f]._node,i._clearTimer(o[f]._id);var d=t._howls.indexOf(i);d>=0&&t._howls.splice(d,1);var v=!0;for(f=0;f<t._howls.length;f++)if(t._howls[f]._src===i._src||i._src.indexOf(t._howls[f]._src)>=0){v=!1;break}return a&&v&&delete a[i._src],t.noAudio=!1,i._state="unloaded",i._sounds=[],i=null,null},on:function(i,o,f,d){var v=this,_=v["_on"+i];return typeof o=="function"&&_.push(d?{id:f,fn:o,once:d}:{id:f,fn:o}),v},off:function(i,o,f){var d=this,v=d["_on"+i],_=0;if(typeof o=="number"&&(f=o,o=null),o||f)for(_=0;_<v.length;_++){var p=f===v[_].id;if(o===v[_].fn&&p||!o&&p){v.splice(_,1);break}}else if(i)d["_on"+i]=[];else{var m=Object.keys(d);for(_=0;_<m.length;_++)m[_].indexOf("_on")===0&&Array.isArray(d[m[_]])&&(d[m[_]]=[])}return d},once:function(i,o,f){var d=this;return d.on(i,o,f,1),d},_emit:function(i,o,f){for(var d=this,v=d["_on"+i],_=v.length-1;_>=0;_--)(!v[_].id||v[_].id===o||i==="load")&&(setTimeout(function(p){p.call(this,o,f)}.bind(d,v[_].fn),0),v[_].once&&d.off(i,v[_].fn,v[_].id));return d._loadQueue(i),d},_loadQueue:function(i){var o=this;if(o._queue.length>0){var f=o._queue[0];f.event===i&&(o._queue.shift(),o._loadQueue()),i||f.action()}return o},_ended:function(i){var o=this,f=i._sprite;if(!o._webAudio&&i._node&&!i._node.paused&&!i._node.ended&&i._node.currentTime<i._stop)return setTimeout(o._ended.bind(o,i),100),o;var d=!!(i._loop||o._sprite[f][2]);if(o._emit("end",i._id),!o._webAudio&&d&&o.stop(i._id,!0).play(i._id),o._webAudio&&d){o._emit("play",i._id),i._seek=i._start||0,i._rateSeek=0,i._playStart=t.ctx.currentTime;var v=(i._stop-i._start)*1e3/Math.abs(i._rate);o._endTimers[i._id]=setTimeout(o._ended.bind(o,i),v)}return o._webAudio&&!d&&(i._paused=!0,i._ended=!0,i._seek=i._start||0,i._rateSeek=0,o._clearTimer(i._id),o._cleanBuffer(i._node),t._autoSuspend()),!o._webAudio&&!d&&o.stop(i._id,!0),o},_clearTimer:function(i){var o=this;if(o._endTimers[i]){if(typeof o._endTimers[i]!="function")clearTimeout(o._endTimers[i]);else{var f=o._soundById(i);f&&f._node&&f._node.removeEventListener("ended",o._endTimers[i],!1)}delete o._endTimers[i]}return o},_soundById:function(i){for(var o=this,f=0;f<o._sounds.length;f++)if(i===o._sounds[f]._id)return o._sounds[f];return null},_inactiveSound:function(){var i=this;i._drain();for(var o=0;o<i._sounds.length;o++)if(i._sounds[o]._ended)return i._sounds[o].reset();return new n(i)},_drain:function(){var i=this,o=i._pool,f=0,d=0;if(!(i._sounds.length<o)){for(d=0;d<i._sounds.length;d++)i._sounds[d]._ended&&f++;for(d=i._sounds.length-1;d>=0;d--){if(f<=o)return;i._sounds[d]._ended&&(i._webAudio&&i._sounds[d]._node&&i._sounds[d]._node.disconnect(0),i._sounds.splice(d,1),f--)}}},_getSoundIds:function(i){var o=this;if(typeof i=="undefined"){for(var f=[],d=0;d<o._sounds.length;d++)f.push(o._sounds[d]._id);return f}else return[i]},_refreshBuffer:function(i){var o=this;return i._node.bufferSource=t.ctx.createBufferSource(),i._node.bufferSource.buffer=a[o._src],i._panner?i._node.bufferSource.connect(i._panner):i._node.bufferSource.connect(i._node),i._node.bufferSource.loop=i._loop,i._loop&&(i._node.bufferSource.loopStart=i._start||0,i._node.bufferSource.loopEnd=i._stop||0),i._node.bufferSource.playbackRate.setValueAtTime(i._rate,t.ctx.currentTime),o},_cleanBuffer:function(i){var o=this,f=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(t._scratchBuffer&&i.bufferSource&&(i.bufferSource.onended=null,i.bufferSource.disconnect(0),f))try{i.bufferSource.buffer=t._scratchBuffer}catch(d){}return i.bufferSource=null,o},_clearSound:function(i){var o=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);o||(i.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var n=function(i){this._parent=i,this.init()};n.prototype={init:function(){var i=this,o=i._parent;return i._muted=o._muted,i._loop=o._loop,i._volume=o._volume,i._rate=o._rate,i._seek=0,i._paused=!0,i._ended=!0,i._sprite="__default",i._id=++t._counter,o._sounds.push(i),i.create(),i},create:function(){var i=this,o=i._parent,f=t._muted||i._muted||i._parent._muted?0:i._volume;return o._webAudio?(i._node=typeof t.ctx.createGain=="undefined"?t.ctx.createGainNode():t.ctx.createGain(),i._node.gain.setValueAtTime(f,t.ctx.currentTime),i._node.paused=!0,i._node.connect(t.masterGain)):t.noAudio||(i._node=t._obtainHtml5Audio(),i._errorFn=i._errorListener.bind(i),i._node.addEventListener("error",i._errorFn,!1),i._loadFn=i._loadListener.bind(i),i._node.addEventListener(t._canPlayEvent,i._loadFn,!1),i._endFn=i._endListener.bind(i),i._node.addEventListener("ended",i._endFn,!1),i._node.src=o._src,i._node.preload=o._preload===!0?"auto":o._preload,i._node.volume=f*t.volume(),i._node.load()),i},reset:function(){var i=this,o=i._parent;return i._muted=o._muted,i._loop=o._loop,i._volume=o._volume,i._rate=o._rate,i._seek=0,i._rateSeek=0,i._paused=!0,i._ended=!0,i._sprite="__default",i._id=++t._counter,i},_errorListener:function(){var i=this;i._parent._emit("loaderror",i._id,i._node.error?i._node.error.code:0),i._node.removeEventListener("error",i._errorFn,!1)},_loadListener:function(){var i=this,o=i._parent;o._duration=Math.ceil(i._node.duration*10)/10,Object.keys(o._sprite).length===0&&(o._sprite={__default:[0,o._duration*1e3]}),o._state!=="loaded"&&(o._state="loaded",o._emit("load"),o._loadQueue()),i._node.removeEventListener(t._canPlayEvent,i._loadFn,!1)},_endListener:function(){var i=this,o=i._parent;o._duration===Infinity&&(o._duration=Math.ceil(i._node.duration*10)/10,o._sprite.__default[1]===Infinity&&(o._sprite.__default[1]=o._duration*1e3),o._ended(i)),i._node.removeEventListener("ended",i._endFn,!1)}};var a={},s=function(i){var o=i._src;if(a[o]){i._duration=a[o].duration,h(i);return}if(/^data:[^;]+;base64,/.test(o)){for(var f=atob(o.split(",")[1]),d=new Uint8Array(f.length),v=0;v<f.length;++v)d[v]=f.charCodeAt(v);l(d.buffer,i)}else{var _=new XMLHttpRequest;_.open(i._xhr.method,o,!0),_.withCredentials=i._xhr.withCredentials,_.responseType="arraybuffer",i._xhr.headers&&Object.keys(i._xhr.headers).forEach(function(p){_.setRequestHeader(p,i._xhr.headers[p])}),_.onload=function(){var p=(_.status+"")[0];if(p!=="0"&&p!=="2"&&p!=="3"){i._emit("loaderror",null,"Failed loading audio file with status: "+_.status+".");return}l(_.response,i)},_.onerror=function(){i._webAudio&&(i._html5=!0,i._webAudio=!1,i._sounds=[],delete a[o],i.load())},c(_)}},c=function(i){try{i.send()}catch(o){i.onerror()}},l=function(i,o){var f=function(){o._emit("loaderror",null,"Decoding audio data failed.")},d=function(v){v&&o._sounds.length>0?(a[o._src]=v,h(o,v)):f()};typeof Promise!="undefined"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(i).then(d).catch(f):t.ctx.decodeAudioData(i,d,f)},h=function(i,o){o&&!i._duration&&(i._duration=o.duration),Object.keys(i._sprite).length===0&&(i._sprite={__default:[0,i._duration*1e3]}),i._state!=="loaded"&&(i._state="loaded",i._emit("load"),i._loadQueue())},u=function(){if(!!t.usingWebAudio){try{typeof AudioContext!="undefined"?t.ctx=new AudioContext:typeof webkitAudioContext!="undefined"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch(v){t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var i=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),o=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),f=o?parseInt(o[1],10):null;if(i&&f&&f<9){var d=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!d&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain=="undefined"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};typeof define=="function"&&define.amd&&define([],function(){return{Howler:t,Howl:r}}),typeof Se!="undefined"&&(Se.Howler=t,Se.Howl=r),typeof global!="undefined"?(global.HowlerGlobal=e,global.Howler=t,global.Howl=r,global.Sound=n):typeof window!="undefined"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=r,window.Sound=n)})();(function(){"use strict";HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var r=this;if(!r.ctx||!r.ctx.listener)return r;for(var n=r._howls.length-1;n>=0;n--)r._howls[n].stereo(t);return r},HowlerGlobal.prototype.pos=function(t,r,n){var a=this;if(!a.ctx||!a.ctx.listener)return a;if(r=typeof r!="number"?a._pos[1]:r,n=typeof n!="number"?a._pos[2]:n,typeof t=="number")a._pos=[t,r,n],typeof a.ctx.listener.positionX!="undefined"?(a.ctx.listener.positionX.setTargetAtTime(a._pos[0],Howler.ctx.currentTime,.1),a.ctx.listener.positionY.setTargetAtTime(a._pos[1],Howler.ctx.currentTime,.1),a.ctx.listener.positionZ.setTargetAtTime(a._pos[2],Howler.ctx.currentTime,.1)):a.ctx.listener.setPosition(a._pos[0],a._pos[1],a._pos[2]);else return a._pos;return a},HowlerGlobal.prototype.orientation=function(t,r,n,a,s,c){var l=this;if(!l.ctx||!l.ctx.listener)return l;var h=l._orientation;if(r=typeof r!="number"?h[1]:r,n=typeof n!="number"?h[2]:n,a=typeof a!="number"?h[3]:a,s=typeof s!="number"?h[4]:s,c=typeof c!="number"?h[5]:c,typeof t=="number")l._orientation=[t,r,n,a,s,c],typeof l.ctx.listener.forwardX!="undefined"?(l.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),l.ctx.listener.forwardY.setTargetAtTime(r,Howler.ctx.currentTime,.1),l.ctx.listener.forwardZ.setTargetAtTime(n,Howler.ctx.currentTime,.1),l.ctx.listener.upX.setTargetAtTime(a,Howler.ctx.currentTime,.1),l.ctx.listener.upY.setTargetAtTime(s,Howler.ctx.currentTime,.1),l.ctx.listener.upZ.setTargetAtTime(c,Howler.ctx.currentTime,.1)):l.ctx.listener.setOrientation(t,r,n,a,s,c);else return h;return l},Howl.prototype.init=function(t){return function(r){var n=this;return n._orientation=r.orientation||[1,0,0],n._stereo=r.stereo||null,n._pos=r.pos||null,n._pannerAttr={coneInnerAngle:typeof r.coneInnerAngle!="undefined"?r.coneInnerAngle:360,coneOuterAngle:typeof r.coneOuterAngle!="undefined"?r.coneOuterAngle:360,coneOuterGain:typeof r.coneOuterGain!="undefined"?r.coneOuterGain:0,distanceModel:typeof r.distanceModel!="undefined"?r.distanceModel:"inverse",maxDistance:typeof r.maxDistance!="undefined"?r.maxDistance:1e4,panningModel:typeof r.panningModel!="undefined"?r.panningModel:"HRTF",refDistance:typeof r.refDistance!="undefined"?r.refDistance:1,rolloffFactor:typeof r.rolloffFactor!="undefined"?r.rolloffFactor:1},n._onstereo=r.onstereo?[{fn:r.onstereo}]:[],n._onpos=r.onpos?[{fn:r.onpos}]:[],n._onorientation=r.onorientation?[{fn:r.onorientation}]:[],t.call(this,r)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,r){var n=this;if(!n._webAudio)return n;if(n._state!=="loaded")return n._queue.push({event:"stereo",action:function(){n.stereo(t,r)}}),n;var a=typeof Howler.ctx.createStereoPanner=="undefined"?"spatial":"stereo";if(typeof r=="undefined")if(typeof t=="number")n._stereo=t,n._pos=[t,0,0];else return n._stereo;for(var s=n._getSoundIds(r),c=0;c<s.length;c++){var l=n._soundById(s[c]);if(l)if(typeof t=="number")l._stereo=t,l._pos=[t,0,0],l._node&&(l._pannerAttr.panningModel="equalpower",(!l._panner||!l._panner.pan)&&e(l,a),a==="spatial"?typeof l._panner.positionX!="undefined"?(l._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),l._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),l._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):l._panner.setPosition(t,0,0):l._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),n._emit("stereo",l._id);else return l._stereo}return n},Howl.prototype.pos=function(t,r,n,a){var s=this;if(!s._webAudio)return s;if(s._state!=="loaded")return s._queue.push({event:"pos",action:function(){s.pos(t,r,n,a)}}),s;if(r=typeof r!="number"?0:r,n=typeof n!="number"?-.5:n,typeof a=="undefined")if(typeof t=="number")s._pos=[t,r,n];else return s._pos;for(var c=s._getSoundIds(a),l=0;l<c.length;l++){var h=s._soundById(c[l]);if(h)if(typeof t=="number")h._pos=[t,r,n],h._node&&((!h._panner||h._panner.pan)&&e(h,"spatial"),typeof h._panner.positionX!="undefined"?(h._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.positionY.setValueAtTime(r,Howler.ctx.currentTime),h._panner.positionZ.setValueAtTime(n,Howler.ctx.currentTime)):h._panner.setPosition(t,r,n)),s._emit("pos",h._id);else return h._pos}return s},Howl.prototype.orientation=function(t,r,n,a){var s=this;if(!s._webAudio)return s;if(s._state!=="loaded")return s._queue.push({event:"orientation",action:function(){s.orientation(t,r,n,a)}}),s;if(r=typeof r!="number"?s._orientation[1]:r,n=typeof n!="number"?s._orientation[2]:n,typeof a=="undefined")if(typeof t=="number")s._orientation=[t,r,n];else return s._orientation;for(var c=s._getSoundIds(a),l=0;l<c.length;l++){var h=s._soundById(c[l]);if(h)if(typeof t=="number")h._orientation=[t,r,n],h._node&&(h._panner||(h._pos||(h._pos=s._pos||[0,0,-.5]),e(h,"spatial")),typeof h._panner.orientationX!="undefined"?(h._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.orientationY.setValueAtTime(r,Howler.ctx.currentTime),h._panner.orientationZ.setValueAtTime(n,Howler.ctx.currentTime)):h._panner.setOrientation(t,r,n)),s._emit("orientation",h._id);else return h._orientation}return s},Howl.prototype.pannerAttr=function(){var t=this,r=arguments,n,a,s;if(!t._webAudio)return t;if(r.length===0)return t._pannerAttr;if(r.length===1)if(typeof r[0]=="object")n=r[0],typeof a=="undefined"&&(n.pannerAttr||(n.pannerAttr={coneInnerAngle:n.coneInnerAngle,coneOuterAngle:n.coneOuterAngle,coneOuterGain:n.coneOuterGain,distanceModel:n.distanceModel,maxDistance:n.maxDistance,refDistance:n.refDistance,rolloffFactor:n.rolloffFactor,panningModel:n.panningModel}),t._pannerAttr={coneInnerAngle:typeof n.pannerAttr.coneInnerAngle!="undefined"?n.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof n.pannerAttr.coneOuterAngle!="undefined"?n.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof n.pannerAttr.coneOuterGain!="undefined"?n.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof n.pannerAttr.distanceModel!="undefined"?n.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof n.pannerAttr.maxDistance!="undefined"?n.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof n.pannerAttr.refDistance!="undefined"?n.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof n.pannerAttr.rolloffFactor!="undefined"?n.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof n.pannerAttr.panningModel!="undefined"?n.pannerAttr.panningModel:t._panningModel});else return s=t._soundById(parseInt(r[0],10)),s?s._pannerAttr:t._pannerAttr;else r.length===2&&(n=r[0],a=parseInt(r[1],10));for(var c=t._getSoundIds(a),l=0;l<c.length;l++)if(s=t._soundById(c[l]),s){var h=s._pannerAttr;h={coneInnerAngle:typeof n.coneInnerAngle!="undefined"?n.coneInnerAngle:h.coneInnerAngle,coneOuterAngle:typeof n.coneOuterAngle!="undefined"?n.coneOuterAngle:h.coneOuterAngle,coneOuterGain:typeof n.coneOuterGain!="undefined"?n.coneOuterGain:h.coneOuterGain,distanceModel:typeof n.distanceModel!="undefined"?n.distanceModel:h.distanceModel,maxDistance:typeof n.maxDistance!="undefined"?n.maxDistance:h.maxDistance,refDistance:typeof n.refDistance!="undefined"?n.refDistance:h.refDistance,rolloffFactor:typeof n.rolloffFactor!="undefined"?n.rolloffFactor:h.rolloffFactor,panningModel:typeof n.panningModel!="undefined"?n.panningModel:h.panningModel};var u=s._panner;u?(u.coneInnerAngle=h.coneInnerAngle,u.coneOuterAngle=h.coneOuterAngle,u.coneOuterGain=h.coneOuterGain,u.distanceModel=h.distanceModel,u.maxDistance=h.maxDistance,u.refDistance=h.refDistance,u.rolloffFactor=h.rolloffFactor,u.panningModel=h.panningModel):(s._pos||(s._pos=t._pos||[0,0,-.5]),e(s,"spatial"))}return t},Sound.prototype.init=function(t){return function(){var r=this,n=r._parent;r._orientation=n._orientation,r._stereo=n._stereo,r._pos=n._pos,r._pannerAttr=n._pannerAttr,t.call(this),r._stereo?n.stereo(r._stereo):r._pos&&n.pos(r._pos[0],r._pos[1],r._pos[2],r._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var r=this,n=r._parent;return r._orientation=n._orientation,r._stereo=n._stereo,r._pos=n._pos,r._pannerAttr=n._pannerAttr,r._stereo?n.stereo(r._stereo):r._pos?n.pos(r._pos[0],r._pos[1],r._pos[2],r._id):r._panner&&(r._panner.disconnect(0),r._panner=void 0,n._refreshBuffer(r)),t.call(this)}}(Sound.prototype.reset);var e=function(t,r){r=r||"spatial",r==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX!="undefined"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX!="undefined"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()});var wc={};var rl,fr=$(()=>{rl=J(Fe());WL.registerComponent("howler-audio-listener",{spatial:{type:WL.Type.Bool,default:!0}},{init:function(){this.origin=new Float32Array(3),this.fwd=new Float32Array(3),this.up=new Float32Array(3)},update:function(){!this.spatial||(this.object.getTranslationWorld(this.origin),this.object.getForward(this.fwd),this.object.getUp(this.up),Howler.pos(this.origin[0],this.origin[1],this.origin[2]),Howler.orientation(this.fwd[0],this.fwd[1],this.fwd[2],this.up[0],this.up[1],this.up[2]))}})});var Ac={};var hr,dr=$(()=>{hr=J(Fe());WL.registerComponent("howler-audio-source",{volume:{type:WL.Type.Float,default:1},spatial:{type:WL.Type.Bool,default:!0},loop:{type:WL.Type.Bool,default:!1},autoplay:{type:WL.Type.Bool,default:!1},src:{type:WL.Type.String,default:""}},{start:function(){this.audio=new hr.Howl({src:[this.src],loop:this.loop,volume:this.volume,autoplay:this.autoplay}),this.lastPlayedAudioId=null,this.origin=new Float32Array(3),this.lastOrigin=new Float32Array(3),this.spatial&&this.autoplay&&(this.updatePosition(),this.play());let e=()=>{this.stop();let t=WL.onSceneLoaded.indexOf(e);t>=0&&WL.onSceneLoaded.splice(t,1)};WL.onSceneLoaded.push(e)},update:function(){!this.spatial||!this.lastPlayedAudioId||(this.object.getTranslationWorld(this.origin),(Math.abs(this.lastOrigin[0]-this.origin[0])>.005||Math.abs(this.lastOrigin[1]-this.origin[1])>.005||Math.abs(this.lastOrigin[2]-this.origin[2])>.005)&&this.updatePosition())},updatePosition:function(){this.audio.pos(this.origin[0],this.origin[1],this.origin[2],this.lastPlayedAudioId),this.lastOrigin.set(this.origin)},play:function(){this.lastPlayedAudioId&&this.audio.stop(this.lastPlayedAudioId),this.lastPlayedAudioId=this.audio.play(),this.spatial&&this.updatePosition()},stop:function(){!this.lastPlayedAudioId||(this.audio.stop(this.lastPlayedAudioId),this.lastPlayedAudioId=null)}})});var ur=H(()=>{WL.registerComponent("image-texture",{url:{type:WL.Type.String,default:""},meshIndex:{type:WL.Type.Int,default:0}},{init:function(){let e=this.object;WL.textures.load(this.url,"anonymous").then(function(t){let r=e.getComponent("mesh",this.meshIndex).material;r.shader=="Flat Opaque Textured"?r.flatTexture=t:r.shader=="Phong Opaque Textured"?r.diffuseTexture=t:console.error("Shader",r.shader,"not supported by image-texture")}).catch(console.err)}})});var Tc={};var pr,vr=$(()=>{pr=J(te());WL.registerComponent("mouse-look",{sensitity:{type:WL.Type.Float,default:.25},requireMouseDown:{type:WL.Type.Bool,default:!0},mouseButtonIndex:{type:WL.Type.Int,default:0}},{init:function(){this.currentRotationY=0,this.currentRotationX=0,this.origin=new Float32Array(3),this.parentOrigin=new Float32Array(3),document.addEventListener("mousemove",function(e){this.active&&(this.mouseDown||!this.requireMouseDown)&&(this.rotationY=-this.sensitity*e.movementX/100,this.rotationX=-this.sensitity*e.movementY/100,this.currentRotationX+=this.rotationX,this.currentRotationY+=this.rotationY,this.currentRotationX=Math.min(1.507,this.currentRotationX),this.currentRotationX=Math.max(-1.507,this.currentRotationX),this.object.getTranslationWorld(this.origin),this.object.parent.getTranslationWorld(this.parentOrigin),pr.vec3.sub(this.origin,this.origin,this.parentOrigin),this.object.resetTranslationRotation(),this.object.rotateAxisAngleRad([1,0,0],this.currentRotationX),this.object.rotateAxisAngleRad([0,1,0],this.currentRotationY),this.object.translate(this.origin))}.bind(this)),this.requireMouseDown&&(this.mouseButtonIndex==2&&WL.canvas.addEventListener("contextmenu",function(e){e.preventDefault()},!1),WL.canvas.addEventListener("mousedown",function(e){if(e.button==this.mouseButtonIndex&&(this.mouseDown=!0,document.body.style.cursor="grabbing",e.button==1))return e.preventDefault(),!1}.bind(this)),WL.canvas.addEventListener("mouseup",function(e){e.button==this.mouseButtonIndex&&(this.mouseDown=!1,document.body.style.cursor="initial")}.bind(this)))},start:function(){this.rotationX=0,this.rotationY=0}})});var _r=H(()=>{WL.registerComponent("target-framerate",{framerate:{type:WL.Type.Float,default:90}},{start:function(){WL.xrSession?this.setTargetFramerate(WL.xrSession):WL.onXRSessionStart.push(this.setTargetFramerate.bind(this))},setTargetFramerate:function(e){if(e.supportedFrameRates&&e.updateTargetFrameRate){let t=WL.xrSession.supportedFrameRates;t.sort((r,n)=>Math.abs(r-this.framerate)-Math.abs(n-this.framerate)),WL.xrSession.updateTargetFrameRate(t[0])}}})});var Sc={};var ae,mr=$(()=>{ae=J(te());WL.registerComponent("teleport",{teleportIndicatorMeshObject:{type:WL.Type.Object},camRoot:{type:WL.Type.Object},cam:{type:WL.Type.Object},eyeLeft:{type:WL.Type.Object},eyeRight:{type:WL.Type.Object},handedness:{type:WL.Type.Enum,values:["input component","left","right","none"],default:"input component"},floorGroup:{type:WL.Type.Int,default:1},thumbstickActivationThreshhold:{type:WL.Type.Float,default:-.7},thumbstickDeactivationThreshhold:{type:WL.Type.Float,default:.3},indicatorYOffset:{type:WL.Type.Float,default:.01},rayCastMode:{type:WL.Type.Enum,values:["collision","physx"],default:"collision"},maxDistance:{type:WL.Type.Float,default:100}},{init:function(){if(this._prevThumbstickAxis=new Float32Array(2),this._tempVec=new Float32Array(3),this._tempVec0=new Float32Array(3),this._currentIndicatorRotation=0,this.input=this.object.getComponent("input"),!this.input){console.error(this.object.name,"generic-teleport-component.js: input component is required on the object");return}if(!this.teleportIndicatorMeshObject){console.error(this.object.name,"generic-teleport-component.js: Teleport indicator mesh is missing");return}if(!this.camRoot){console.error(this.object.name,"generic-teleport-component.js: camRoot not set");return}this.isIndicating=!1,this.cam&&(this.isMouseIndicating=!1,WL.canvas.addEventListener("mousedown",this.onMouseDown.bind(this)),WL.canvas.addEventListener("mouseup",this.onMouseUp.bind(this))),this.indicatorHidden=!0,this.hitSpot=new Float32Array(3),this._hasHit=!1,this._extraRotation=0,this._currentStickAxes=new Float32Array(2)},start:function(){if(this.handedness==0){let e=this.object.getComponent("input");e?(this.handedness=e.handedness,this.input=e):console.warn("teleport component on object",this.object.name,'was configured with handedness "input component", but object has no input component.')}else this.handedness=["left","right"][this.handedness-1];WL.onXRSessionStart.push(this.setupVREvents.bind(this)),this.teleportIndicatorMeshObject.active=!1},_getCamRotation:function(){return this.eyeLeft.getForward(this._tempVec),this._tempVec[1]=0,ae.vec3.normalize(this._tempVec,this._tempVec),Math.atan2(this._tempVec[0],this._tempVec[2])},update:function(){let e=0;if(this.gamepad&&this.gamepad.axes&&(this._currentStickAxes[0]=this.gamepad.axes[2],this._currentStickAxes[1]=this.gamepad.axes[3],e=Math.abs(this._currentStickAxes[0])+Math.abs(this._currentStickAxes[1])),!this.isIndicating&&this._prevThumbstickAxis[1]>=this.thumbstickActivationThreshhold&&this._currentStickAxes[1]<this.thumbstickActivationThreshhold?this.isIndicating=!0:this.isIndicating&&e<this.thumbstickDeactivationThreshhold&&(this.isIndicating=!1,this.teleportIndicatorMeshObject.active=!1,this._hasHit&&this._teleportPlayer(this.hitSpot,this._extraRotation)),this.isIndicating&&this.teleportIndicatorMeshObject&&this.input){let t=this._tempVec0;ae.quat2.getTranslation(t,this.object.transformWorld);let r=this.object.getForward(this._tempVec),n=this.rayHit=this.rayCastMode==0?WL.scene.rayCast(t,r,1<<this.floorGroup):WL.physics.rayCast(t,r,1<<this.floorGroup,this.maxDistance);n.hitCount>0?(this.indicatorHidden=!1,this._extraRotation=Math.PI+Math.atan2(this._currentStickAxes[0],this._currentStickAxes[1]),this._currentIndicatorRotation=this._getCamRotation()+(this._extraRotation-Math.PI),this.teleportIndicatorMeshObject.resetTranslationRotation(),this.teleportIndicatorMeshObject.rotateAxisAngleRad([0,1,0],this._currentIndicatorRotation),this.teleportIndicatorMeshObject.translate(n.locations[0]),this.teleportIndicatorMeshObject.translate([0,this.indicatorYOffset,0]),this.teleportIndicatorMeshObject.active=!0,this.hitSpot.set(n.locations[0]),this._hasHit=!0):(this.indicatorHidden||(this.teleportIndicatorMeshObject.active=!1,this.indicatorHidden=!0),this._hasHit=!1)}else this.teleportIndicatorMeshObject&&this.isMouseIndicating&&this.onMousePressed();this._prevThumbstickAxis.set(this._currentStickAxes)},setupVREvents:function(e){if(this.session=e,e.addEventListener("end",function(){this.gamepad=null,this.session=null}.bind(this)),e.inputSources&&e.inputSources.length)for(let t=0;t<e.inputSources.length;t++){let r=e.inputSources[t];r.handedness==this.handedness&&(this.gamepad=r.gamepad)}e.addEventListener("inputsourceschange",function(t){if(t.added&&t.added.length)for(let r=0;r<t.added.length;r++){let n=t.added[r];n.handedness==this.handedness&&(this.gamepad=n.gamepad)}}.bind(this))},onMouseDown:function(){this.isMouseIndicating=!0},onMouseUp:function(){this.isMouseIndicating=!1,this.teleportIndicatorMeshObject.active=!1,this._hasHit&&this._teleportPlayer(this.hitSpot,0)},onMousePressed:function(){let e=[0,0,0];ae.quat2.getTranslation(e,this.cam.transformWorld);let t=this.cam.getForward(this._tempVec),r=this.rayHit=this.rayCastMode==0?WL.scene.rayCast(e,t,1<<this.floorGroup):WL.physics.rayCast(e,t,1<<this.floorGroup,this.maxDistance);r.hitCount>0?(this.indicatorHidden=!1,t[1]=0,ae.vec3.normalize(t,t),this._currentIndicatorRotation=-Math.sign(t[2])*Math.acos(t[0])-Math.PI*.5,this.teleportIndicatorMeshObject.resetTranslationRotation(),this.teleportIndicatorMeshObject.rotateAxisAngleRad([0,1,0],this._currentIndicatorRotation),this.teleportIndicatorMeshObject.translate(r.locations[0]),this.teleportIndicatorMeshObject.active=!0,this.hitSpot=r.locations[0],this._hasHit=!0):(this.indicatorHidden||(this.teleportIndicatorMeshObject.active=!1,this.indicatorHidden=!0),this._hasHit=!1)},_teleportPlayer:function(e,t){this.camRoot.rotateAxisAngleRad([0,1,0],t);let r=this._tempVec,n=this._tempVec0;this.session?(this.eyeLeft.getTranslationWorld(r),this.eyeRight.getTranslationWorld(n),ae.vec3.add(r,r,n),ae.vec3.scale(r,r,.5)):this.cam.getTranslationWorld(r),this.camRoot.getTranslationWorld(n),ae.vec3.sub(r,n,r),r[0]+=e[0],r[1]=e[1],r[2]+=e[2],this.camRoot.setTranslationWorld(r)}});WL.registerComponent("player-height",{height:{type:WL.Type.Float,default:1.75}},{init:function(){WL.onXRSessionStart.push(this.onXRSessionStart.bind(this)),WL.onXRSessionEnd.push(this.onXRSessionEnd.bind(this))},start:function(){this.object.resetTranslationRotation(),this.object.translate([0,this.height,0])},onXRSessionStart:function(){["local","viewer"].includes(WebXR.refSpace)||this.object.resetTranslationRotation()},onXRSessionEnd:function(){["local","viewer"].includes(WebXR.refSpace)||(this.object.resetTranslationRotation(),this.object.translate([0,this.height,0]))}})});var Rc={};var I,Oc,yr=$(()=>{I=J(te());Math.clamp=function(e,t,r){return Math.max(t,Math.min(e,r))};Oc=function(){let e=new Float32Array(3),t=new Float32Array(3),r=new Float32Array(3),n=new Float32Array(3),a=new Float32Array(3),s=new Float32Array(3),c=new Float32Array(3),l=new Float32Array(4),h=new Float32Array(4),u=new Float32Array(4),i=new Float32Array(4);return function(o,f,d,v,_,p,m,y,g,M){I.vec3.sub(r,v,d);let b=I.vec3.length(r);I.vec3.sub(e,v,_);let x=I.vec3.length(e);I.vec3.sub(e,p,d);let q=Math.clamp(I.vec3.length(e),m,b+x-m);I.vec3.sub(t,_,d),I.vec3.sub(n,d,v),I.vec3.sub(a,_,v),I.vec3.normalize(t,t),I.vec3.normalize(r,r),I.vec3.normalize(n,n),I.vec3.normalize(a,a),I.vec3.normalize(e,e);let S=Math.acos(Math.clamp(I.vec3.dot(t,r),-1,1)),D=Math.acos(Math.clamp(I.vec3.dot(n,a),-1,1)),C=Math.acos(Math.clamp(I.vec3.dot(t,e),-1,1)),z=Math.acos(Math.clamp((x*x-b*b-q*q)/(-2*b*q),-1,1)),F=Math.acos(Math.clamp((q*q-b*b-x*x)/(-2*b*x),-1,1));I.vec3.sub(t,_,d),I.vec3.sub(r,v,d),I.vec3.sub(e,p,d),I.vec3.cross(s,t,r),I.vec3.cross(c,t,e),M?(I.vec3.sub(r,M,v),I.vec3.transformQuat(r,[0,0,-1],g)):I.vec3.sub(r,v,d);let E=I.vec3.length(s);E==0?s.set([1,0,0]):I.vec3.scale(s,s,1/E),I.vec3.normalize(c,c),I.quat.conjugate(y,y),I.quat.setAxisAngle(h,I.vec3.transformQuat(l,s,y),z-S),I.quat.setAxisAngle(i,I.vec3.transformQuat(l,c,y),C),I.quat.mul(o,o,I.quat.mul(l,h,i)),I.quat.normalize(o,o),I.quat.conjugate(g,g),I.quat.setAxisAngle(u,I.vec3.transformQuat(l,s,g),F-D),I.quat.mul(f,f,u),I.quat.normalize(f,f)}}();WL.registerComponent("two-joint-ik-solver",{root:{type:WL.Type.Object},middle:{type:WL.Type.Object},end:{type:WL.Type.Object},target:{type:WL.Type.Object},helper:{type:WL.Type.Object}},{init:function(){this.pos=new Float32Array(3*7),this.p=[this.pos.subarray(0,3),this.pos.subarray(3,6),this.pos.subarray(6,9),this.pos.subarray(9,12),this.pos.subarray(12,15),this.pos.subarray(15,18),this.pos.subarray(18,21)]},update:function(){let e=this.p;this.root.getTranslationWorld(e[0]),this.middle.getTranslationWorld(e[1]),this.end.getTranslationWorld(e[2]),this.target.getTranslationWorld(e[3]);let t=e[4],r=e[5];this.root.getTranslationLocal(t),this.middle.getTranslationLocal(r),this.helper&&this.helper.getTranslationWorld(e[6]),Oc(this.root.transformLocal,this.middle.transformLocal,e[0],e[1],e[2],e[3],.01,this.root.transformWorld.subarray(0,4),this.middle.transformWorld.subarray(0,4),this.helper?e[6]:null),this.root.setTranslationLocal(t),this.middle.setTranslationLocal(r),this.root.setDirty(),this.middle.setDirty()}})});var gr=H(()=>{WL.registerComponent("video-texture",{url:{type:WL.Type.String,default:""},material:{type:WL.Type.Material},loop:{type:WL.Type.Bool,default:!0},autoplay:{type:WL.Type.Bool,default:!0},muted:{type:WL.Type.Bool,default:!0}},{init:function(){if(!this.material){console.error("video-texture: material property not set");return}this.loaded=!1,this.frameUpdateRequested=!0,this.video=document.createElement("video"),this.video.src=this.url,this.video.crossorigin="anonymous",this.video.autoplay=this.autoplay,this.video.loop=this.loop,this.video.muted=this.muted,this.video.addEventListener("playing",function(){this.loaded=!0}.bind(this)),this.video.play()},applyTexture:function(){let e=this.material;this.texture=new WL.Texture(this.video),e.shader=="Flat Opaque Textured"?e.flatTexture=this.texture:e.shader=="Phong Opaque Textured"?e.diffuseTexture=this.texture:console.error("Shader",e.shader,"not supported by video-texture"),"requestVideoFrameCallback"in this.video?this.video.requestVideoFrameCallback(this.updateVideo.bind(this)):this.video.addEventListener("timeupdate",function(){this.frameUpdateRequested=!0}.bind(this))},update:function(e){this.loaded&&this.frameUpdateRequested&&(this.texture?this.texture.update():this.applyTexture(),this.frameUpdateRequested=!1)},updateVideo:function(){this.frameUpdateRequested=!0,this.video.requestVideoFrameCallback(this.updateVideo.bind(this))}})});var Mr=H(()=>{WL.registerComponent("vr-mode-active-switch",{activateComponents:{type:WL.Type.Enum,values:["in VR","in non-VR"],default:"in VR"},affectChildren:{type:WL.Type.Bool,default:!0}},{start:function(){this.components=[],this.getComponents(this.object),this.onXRSessionEnd(),WL.onXRSessionStart.push(this.onXRSessionStart.bind(this)),WL.onXRSessionEnd.push(this.onXRSessionEnd.bind(this))},getComponents:function(e){let t=e.getComponents().filter(r=>r.type!="vr-mode-active-switch");if(this.components=this.components.concat(t),this.affectChildren){let r=e.children;for(let n=0;n<r.length;++n)this.getComponents(r[n])}},setComponentsActive:function(e){let t=this.components;for(let r=0;r<t.length;++r)t[r].active=e},onXRSessionStart:function(){!this.active||this.setComponentsActive(this.activateComponents==0)},onXRSessionEnd:function(){!this.active||this.setComponentsActive(this.activateComponents!=0)}})});var Lc={};var je,br=$(()=>{je=J(te());WL.registerComponent("wasd-controls",{speed:{type:WL.Type.Float,default:.1},headObject:{type:WL.Type.Object}},{init:function(){this.up=!1,this.right=!1,this.down=!1,this.left=!1,window.addEventListener("keydown",this.press.bind(this)),window.addEventListener("keyup",this.release.bind(this))},start:function(){this.headObject=this.headObject||this.object},update:function(){let e=[0,0,0];this.up&&(e[2]-=1),this.down&&(e[2]+=1),this.left&&(e[0]-=1),this.right&&(e[0]+=1),je.vec3.normalize(e,e),e[0]*=this.speed,e[2]*=this.speed,je.vec3.transformQuat(e,e,this.headObject.transformWorld),this.object.translate(e)},press:function(e){e.keyCode===38||e.keyCode===87||e.keyCode===90?this.up=!0:e.keyCode===39||e.keyCode===68?this.right=!0:e.keyCode===40||e.keyCode===83?this.down=!0:(e.keyCode===37||e.keyCode===65||e.keyCode===81)&&(this.left=!0)},release:function(e){e.keyCode===38||e.keyCode===87||e.keyCode===90?this.up=!1:e.keyCode===39||e.keyCode===68?this.right=!1:e.keyCode===40||e.keyCode===83?this.down=!1:(e.keyCode===37||e.keyCode===65||e.keyCode===81)&&(this.left=!1)}})});var Pc={};var Oe,xr=$(()=>{Oe=J(te());WL.registerComponent("wonderleap-ad",{auId:{type:WL.Type.String,default:"ce6f68fc-4809-4409-8f57-c631283ce5a3"},adId:{type:WL.Type.String}},{init:function(){this.mesh=this.object.getComponent("mesh",0),this.collision=this.object.addComponent("collision"),this.collision.collider=WL.Collider.Box,this.collision.group=2,this.cursorTarget=this.object.addComponent("cursor-target"),this.timeSinceLastVizCheck=0,this.visibleDuration=0,this.durationThreshold=10},start:function(){Wonderleap.fetchAd(this.auId).then(function(e){this.ad=e,WL.textures.load(e.asset,"").then(function(t){let r=WL._images[t._imageIndex];this.collision.extents=[r.width/r.height,1,.1],this.object.scale([r.width/r.height,1,1]),this.mesh.material.shader=="Phong Textured"?this.mesh.material.diffuseTexture=t:this.mesh.material.flatTexture=t}.bind(this)).catch(console.err)}.bind(this)),this.cursorTarget.addClickFunction(this.click.bind(this))},update:function(e){if(this.timeSinceLastVizCheck+=e,this.timeSinceLastVizCheck>.5){let t=this.isVisible();t&&(this.visibleDuration+=this.timeSinceLastVizCheck),this.timeSinceLastVizCheck=0,(!t&&this.visibleDuration>0||this.visibleDuration>this.durationThreshold)&&(Wonderleap.sendMetric("gaze",this.visibleDuration,this.ad.adId,this.ad.auId),this.visibleDuration=0)}},isVisible:function(){let e=WL.scene.activeViews[0];if(!e||!e.active)return console.warn("wonderleap-ad: camera object does not have an active view"),!1;let t=e.object.transformWorld,r=[0,0,0];Oe.quat2.getTranslation(r,t);let n=[0,0,-1];Oe.vec3.transformQuat(n,n,t);let a=WL.scene.rayCast(r,n,2);for(let s=0;s<a.hitCount;++s)if(a.objects[s].objectId==this.object.objectId)return!0;return!1},click:function(){let e=Module.webxr_session;if(e){e.end().then(this.click.bind(this));return}Wonderleap.sendMetric("click",0,this.ad.adId,this.ad.auId),this.ad.url&&window.open(this.ad.url,"_blank")}})});window.glMatrix=te();er();tr();rr();nr();ir();ar();sr();or();lr();fr();dr();ur();vr();_r();mr();yr();gr();Mr();br();xr();})();
/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.1
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
/*!
 *  howler.js v2.2.1
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
//# sourceMappingURL=editor-components-bundle.js.map

WL.registerComponent("cursor-target-custom", {
}, {
  init: function () {
    this.hoverFunctions = [];
    this.unHoverFunctions = [];
    this.clickFunctions = [];
    this.moveFunctions = [];
    this.downFunctions = [];
    this.upFunctions = [];
  },
  onHover: function(object, cursor) {
      for(let f of this.hoverFunctions) f(object, cursor);
  },
  onUnhover: function(object, cursor) {
      for(let f of this.unHoverFunctions) f(object, cursor);
  },
  onClick: function(object, cursor) {
      for(let f of this.clickFunctions) f(object, cursor);
      window.alert("worked")
  },
  onMove: function(object, cursor) {
      for(let f of this.moveFunctions) f(object, cursor);
  },
  onDown: function(object, cursor) {
      for(let f of this.downFunctions) f(object, cursor);
      window.alert("worked")
  },
  onUp: function(object, cursor) {
      for(let f of this.upFunctions) f(object, cursor);
      window.alert("worked")
  },
  addHoverFunction: function(f) {
      this._validateCallback(f);
      this.hoverFunctions.push(f);
  },
  removeHoverFunction: function(f) {
      this._validateCallback(f);
      this._removeItemOnce(this.hoverFunctions, f);
  },
  addUnHoverFunction: function(f) {
      this._validateCallback(f);
      this.unHoverFunctions.push(f);
  },
  removeUnHoverFunction: function(f) {
      this._validateCallback(f);
      this._removeItemOnce(this.unHoverFunctions, f);
  },
  addClickFunction: function(f) {
      this._validateCallback(f);
      this.clickFunctions.push(f);
      window.alert("work")
  },
  removeClickFunction: function(f) {
      this._validateCallback(f);
      this._removeItemOnce(this.clickFunctions, f);
  },
  addMoveFunction: function(f) {
      this._validateCallback(f);
      this.moveFunctions.push(f);
  },
  removeMoveFunction: function(f) {
      this._validateCallback(f);
      this._removeItemOnce(this.moveFunctions, f);
  },
  addDownFunction: function(f) {
      this._validateCallback(f);
      this.downFunctions.push(f);
      window.alert("win")
  },
  removeDownFunction: function(f) {
      this._validateCallback(f);
      this._removeItemOnce(this.downFunctions, f);
  },
  addUpFunction: function(f) {
      this._validateCallback(f);
      this.upFunctions.push(f);
  },
  removeUpFunction: function(f) {
      this._validateCallback(f);
      this._removeItemOnce(this.upFunctions, f);
  },

  _removeItemOnce: function(arr, value) {
      var index = arr.indexOf(value);
      if(index > -1) arr.splice(index, 1);
      return arr;
  },
  _validateCallback: function(f) {
      if(typeof f !== "function") {
          throw new TypeError(this.object.name
              + ".cursor-target: Argument needs to be a function");
      }
  },
});

   


const vec3 = glMatrix.vec3;
const vec4 = glMatrix.vec4;

WL.registerComponent('cursor-custom', {
    /** Collision group for the ray cast. Only objects in this group will be affected by this cursor. */
    collisionGroup: {type: WL.Type.Int, default: 1},
    /** (optional) Object that visualizes the cursor's ray. */
    cursorRayObject: {type: WL.Type.Object},
    /** Axis along which to scale the `cursorRayObject`. */
    cursorRayScalingAxis: {type: WL.Type.Enum, values: ['x', 'y', 'z', 'none'], default: 'z'},
    /** (optional) Object that visualizes the cursor's hit location. */
    cursorObject: {type: WL.Type.Object},
    /** Handedness for VR cursors to accept trigger events only from respective controller. */
    handedness: {type: WL.Type.Enum, values: ['input component', 'left', 'right', 'none'], default: 'input component'},
    /** Mode for raycasting, whether to use PhysX or simple collision components */
    rayCastMode: {type: WL.Type.Enum, values: ['collision', 'physx'], default: 'collision'},
    /** Whether to set the CSS style of the mouse cursor on desktop */
    styleCursor: {type: WL.Type.Bool, default: true},
  }, {
    init: function() {
        /* VR session cache, in case in VR */
        this.session = null;
        this.collisionMask = (1 << this.collisionGroup);
        this.maxDistance = 100;

        const sceneLoaded = this.onDestroy.bind(this);
        WL.onSceneLoaded.push(sceneLoaded);
        this.onDestroyCallbacks = [() => {
            const index = WL.onSceneLoaded.indexOf(sceneLoaded);
            if(index >= 0) WL.onSceneLoaded.splice(index, 1);
        }];
    },
    start: function() {
        if(this.handedness == 0) {
            const inputComp = this.object.getComponent('input');
            if(!inputComp) {
                console.warn('cursor component on object', this.object.name,
                    'was configured with handedness "input component", ' +
                    'but object has no input component.');
            } else {
                this.handedness = inputComp.handedness;
                this.input = inputComp;
            }
        } else {
            this.handedness = ['left', 'right'][this.handedness - 1];
        }

        this.globalTarget = this.object.addComponent('cursor-target');

        this.origin = new Float32Array(3);
        this.cursorObjScale = new Float32Array(3);
        this.direction = [0, 0, 0];
        this.tempQuat = new Float32Array(4);
        this.viewComponent = this.object.getComponent("view");
        /* If this object also has a view component, we will enable inverse-projected mouse clicks,
         * otherwise just use the objects transformation */
        if(this.viewComponent != null) {
            const onClick = this.onClick.bind(this);
            WL.canvas.addEventListener("click", onClick);
            const onPointerMove = this.onPointerMove.bind(this);
            WL.canvas.addEventListener("pointermove", onPointerMove);
            const onPointerDown = this.onPointerDown.bind(this);
            WL.canvas.addEventListener("pointerdown", onPointerDown);
            const onPointerUp = this.onPointerUp.bind(this);
            WL.canvas.addEventListener("pointerup", onPointerUp);

            this.projectionMatrix = new Float32Array(16);
            mat4.invert(this.projectionMatrix, this.viewComponent.projectionMatrix);
            const onViewportResize = this.onViewportResize.bind(this);
            window.addEventListener("resize", onViewportResize);

            this.onDestroyCallbacks.push(() => {
                WL.canvas.removeEventListener("click", onClick);
                WL.canvas.removeEventListener("pointermove", onPointerMove);
                WL.canvas.removeEventListener("pointerdown", onPointerDown);
                WL.canvas.removeEventListener("pointerup", onPointerUp);
                window.removeEventListener("resize", onViewportResize);
            });

        }
        this.isHovering = false;
        this.visible = true;
        this.isDown = false;
        this.lastIsDown = false;

        this.cursorPos = new Float32Array(3);
        this.hoveringObject = null;

        const onXRSessionStart = this.setupVREvents.bind(this);
        WL.onXRSessionStart.push(onXRSessionStart);
        this.onDestroyCallbacks.push(() => {
            const index = WL.onXRSessionStart.indexOf(onXRSessionStart);
            if(index >= 0) WL.onXRSessionStart.splice(index, 1);
        });

        if(this.cursorRayObject) {
            this.cursorRayScale = new Float32Array(3);
            this.cursorRayScale.set(this.cursorRayObject.scalingLocal);

            /* Set ray to a good default distance of the cursor of 1m */
            this.object.getTranslationWorld(this.origin);
            this.object.getForward(this.direction);
            this._setCursorRayTransform([
                this.origin[0] + this.direction[0],
                this.origin[1] + this.direction[1],
                this.origin[2] + this.direction[2]]);
        }
    },
    onViewportResize: function() {
        if(!this.viewComponent) return;
        /* Projection matrix will change if the viewport is resized, which will affect the
         * projection matrix because of the aspect ratio. */
        mat4.invert(this.projectionMatrix, this.viewComponent.projectionMatrix);
    },

    _setCursorRayTransform: function(hitPosition) {
        if(!this.cursorRayObject) return;
        const dist = vec3.dist(this.origin, hitPosition);
        this.cursorRayObject.setTranslationLocal([0.0, 0.0, -dist / 2]);
        if(this.cursorRayScalingAxis != 4) {
            this.cursorRayObject.resetScaling();
            this.cursorRayScale[this.cursorRayScalingAxis] = dist/2;
            this.cursorRayObject.scale(this.cursorRayScale);
        }
    },

    _setCursorVisibility: function(visible) {
        if(this.visible == visible) return;
        this.visible = visible;
        if(!this.cursorObject) return;

        if(visible) {
            this.cursorObject.resetScaling();
            this.cursorObject.scale(this.cursorObjScale);
        } else {
            this.cursorObjScale.set(this.cursorObject.scalingLocal);
            this.cursorObject.scale([0, 0, 0]);
        }
    },

    update: function() {
        this.doUpdate(false);
    },

    doUpdate: function(doClick) {
        /* If in VR, set the cursor ray based on object transform */
        if(this.session) {
            /* Since Google Cardboard tap is registered as arTouchDown without a gamepad, we need to check for gamepad presence */
            if(this.arTouchDown && this.input && WL.xrSession.inputSources[0].handedness === 'none' && WL.xrSession.inputSources[0].gamepad) {
                const p = WL.xrSession.inputSources[0].gamepad.axes;
                /* Screenspace Y is inverted */
                this.direction = [p[0], -p[1], -1.0];
                this.updateDirection();
            } else {
                this.object.getTranslationWorld(this.origin);
                this.object.getForward(this.direction);
            }
            const rayHit = this.rayHit = (this.rayCastMode == 0) ?
                WL.scene.rayCast(this.origin, this.direction, this.collisionMask) :
                WL.physics.rayCast(this.origin, this.direction, this.collisionMask, this.maxDistance);

            if(rayHit.hitCount > 0) {
                this.cursorPos.set(rayHit.locations[0]);
            } else {
                this.cursorPos.fill(0);
            }

            this.hoverBehaviour(rayHit, doClick);
        }

        if(this.cursorObject) {
            if(this.hoveringObject && (this.cursorPos[0] != 0 || this.cursorPos[1] != 0 || this.cursorPos[2] != 0)) {
                this._setCursorVisibility(true);
                this.cursorObject.setTranslationWorld(this.cursorPos);
                this._setCursorRayTransform(this.cursorPos);
            } else {
                this._setCursorVisibility(false);
            }
        }
    },

    hoverBehaviour: function(rayHit, doClick) {
        if(rayHit.hitCount > 0) {
            if(!this.hoveringObject || !this.hoveringObject.equals(rayHit.objects[0])) {
                /* Unhover previous, if exists */
                if(this.hoveringObject) {
                    const cursorTarget = this.hoveringObject.getComponent("cursor-target");
                    if(cursorTarget) cursorTarget.onUnhover(this.hoveringObject, this);
                    this.globalTarget.onUnhover(this.hoveringObject, this);
                }

                /* Hover new object */
                this.hoveringObject = rayHit.objects[0];
                if(this.styleCursor) WL.canvas.style.cursor = "pointer";

                let cursorTarget = this.hoveringObject.getComponent("cursor-target");
                if(cursorTarget) {
                    this.hoveringObjectTarget = cursorTarget;
                    cursorTarget.onHover(this.hoveringObject, this);
                }
                this.globalTarget.onHover(this.hoveringObject, this);
            }

            if(this.hoveringObjectTarget) {
                this.hoveringObjectTarget.onMove(this.hoveringObject, this);
            }

            /* Cursor up/down */
            const cursorTarget = this.hoveringObject.getComponent("cursor-target");
            if(this.isDown !== this.lastIsDown) {
                if(this.isDown) {
                    /* Down */
                    if(cursorTarget) cursorTarget.onDown(this.hoveringObject, this);
                    this.globalTarget.onDown(this.hoveringObject, this);
                } else {
                    /* Up */
                    if(cursorTarget) cursorTarget.onUp(this.hoveringObject, this);
                    this.globalTarget.onUp(this.hoveringObject, this);
                }
            }

            /* Click */
            if(doClick) {
                if(cursorTarget) cursorTarget.onClick(this.hoveringObject, this);
                this.globalTarget.onClick(this.hoveringObject, this);
            }
        } else if(this.hoveringObject && rayHit.hitCount == 0) {
            const cursorTarget = this.hoveringObject.getComponent("cursor-target");
            if(cursorTarget) cursorTarget.onUnhover(this.hoveringObject, this);
            this.globalTarget.onUnhover(this.hoveringObject, this);
            this.hoveringObject = null;
            this.hoveringObjectTarget = null;
            if(this.styleCursor) WL.canvas.style.cursor = "default";
        }

        this.lastIsDown = this.isDown;
    },

    /**
     * Setup event listeners on session object
     * @param s WebXR session
     *
     * Sets up 'select' and 'end' events and caches the session to avoid
     * Module object access.
     */
    setupVREvents: function(s) {
        /* If in VR, one-time bind the listener */
        this.session = s;
        const onSessionEnd = function(e) {
            /* Reset cache once the session ends to rebind select etc, in case
             * it starts again */
            this.session = null;
        }.bind(this);
        s.addEventListener('end', onSessionEnd);

        const onSelect = this.onSelect.bind(this);
        s.addEventListener('select', onSelect);
        const onSelectStart = this.onSelectStart.bind(this);
        s.addEventListener('selectstart', onSelectStart);
        const onSelectEnd = this.onSelectEnd.bind(this);
        s.addEventListener('selectend', onSelectEnd);

        this.onDestroyCallbacks.push(() => {
            if(!this.session) return;
            s.removeEventListener('end', onSessionEnd);
            s.removeEventListener('select', onSelect);
            s.removeEventListener('selectstart', onSelectStart);
            s.removeEventListener('selectend', onSelectEnd);
        });

        /* After AR session was entered, the projection matrix changed */
        this.onViewportResize();
    },

    /** 'select' event listener */
    onSelect: function(e) {
        if(e.inputSource.handedness != this.handedness) return;
        this.doUpdate(true);
    },

    /** 'selectstart' event listener */
    onSelectStart: function(e) {
        this.arTouchDown = true;
        if(e.inputSource.handedness == this.handedness) this.isDown = true;
    },

    /** 'selectend' event listener */
    onSelectEnd: function(e) {
        this.arTouchDown = false;
        if(e.inputSource.handedness == this.handedness) this.isDown = false;
    },

    /** 'pointermove' event listener */
    onPointerMove: function (e) {
        /* Don't care about secondary pointers */
        if(!e.isPrimary) return;
        const bounds = e.target.getBoundingClientRect();
        const rayHit = this.updateMousePos(e.clientX, e.clientY, bounds.width, bounds.height);

        this.hoverBehaviour(rayHit, false);
    },

    /** 'click' event listener */
    onClick: function (e) {
        const bounds = e.target.getBoundingClientRect();
        const rayHit = this.updateMousePos(e.clientX, e.clientY, bounds.width, bounds.height);
        this.hoverBehaviour(rayHit, true);
    },

    /** 'pointerdown' event listener */
    onPointerDown: function (e) {
        /* Don't care about secondary pointers or non-left clicks */
        if(!e.isPrimary || e.button !== 0) return;
        const bounds = e.target.getBoundingClientRect();
        const rayHit = this.updateMousePos(e.clientX, e.clientY, bounds.width, bounds.height);
        this.isDown = true;

        this.hoverBehaviour(rayHit, false);
    },

    /** 'pointerup' event listener */
    onPointerUp: function (e) {
        /* Don't care about secondary pointers or non-left clicks */
        if(!e.isPrimary || e.button !== 0) return;
        const bounds = e.target.getBoundingClientRect();
        const rayHit = this.updateMousePos(e.clientX, e.clientY, bounds.width, bounds.height);
        this.isDown = false;

        this.hoverBehaviour(rayHit, false);
    },

    /**
     * Update mouse position in non-VR mode and raycast for new position
     * @returns @ref WL.RayHit for new position.
     */
    updateMousePos: function(clientX, clientY, w, h) {
        /* Get direction in normalized device coordinate space from mouse position */
        const left = clientX/w;
        const top = clientY/h;
        this.direction = [left*2 - 1, -top*2 + 1, -1.0];
        return this.updateDirection();
    },

    updateDirection: function() {
        this.object.getTranslationWorld(this.origin);

        /* Reverse-project the direction into view space */
        vec3.transformMat4(this.direction, this.direction,
            this.projectionMatrix);
        vec3.normalize(this.direction, this.direction);
        vec3.transformQuat(this.direction, this.direction, this.object.transformWorld);
        const rayHit = this.rayHit = (this.rayCastMode == 0) ?
            WL.scene.rayCast(this.origin, this.direction, this.collisionMask) :
            WL.physics.rayCast(this.origin, this.direction, this.collisionMask, this.maxDistance);

        if(rayHit.hitCount > 0) {
            this.cursorPos.set(rayHit.locations[0]);
        } else {
            this.cursorPos.fill(0);
        }

        return rayHit;
    },

    onDeactivate: function() {
        this._setCursorVisibility(false);
        if(this.hoveringObject) {
            const target = this.hoveringObject.getComponent('cursor-target');
            if(target) target.onUnhover(this.hoveringObject, this);
            this.globalTarget.onUnhover(this.hoveringObject, this);
        }
        if(this.cursorRayObject) this.cursorRayObject.scale([0, 0, 0]);
    },

    onActivate: function() {
        this._setCursorVisibility(true);
    },

    onDestroy: function() {
        for(const f of this.onDestroyCallbacks) f();
    },
});

(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/gl-matrix/esm/common.js
  var EPSILON = 1e-6;
  var ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array;
  var RANDOM = Math.random;
  var degree = Math.PI / 180;
  if (!Math.hypot)
    Math.hypot = function() {
      var y = 0, i = arguments.length;
      while (i--) {
        y += arguments[i] * arguments[i];
      }
      return Math.sqrt(y);
    };

  // node_modules/gl-matrix/esm/mat3.js
  function create() {
    var out = new ARRAY_TYPE(9);
    if (ARRAY_TYPE != Float32Array) {
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[5] = 0;
      out[6] = 0;
      out[7] = 0;
    }
    out[0] = 1;
    out[4] = 1;
    out[8] = 1;
    return out;
  }

  // node_modules/gl-matrix/esm/mat4.js
  var mat4_exports = {};
  __export(mat4_exports, {
    add: () => add,
    adjoint: () => adjoint,
    clone: () => clone,
    copy: () => copy,
    create: () => create2,
    determinant: () => determinant,
    equals: () => equals,
    exactEquals: () => exactEquals,
    frob: () => frob,
    fromQuat: () => fromQuat,
    fromQuat2: () => fromQuat2,
    fromRotation: () => fromRotation,
    fromRotationTranslation: () => fromRotationTranslation,
    fromRotationTranslationScale: () => fromRotationTranslationScale,
    fromRotationTranslationScaleOrigin: () => fromRotationTranslationScaleOrigin,
    fromScaling: () => fromScaling,
    fromTranslation: () => fromTranslation,
    fromValues: () => fromValues,
    fromXRotation: () => fromXRotation,
    fromYRotation: () => fromYRotation,
    fromZRotation: () => fromZRotation,
    frustum: () => frustum,
    getRotation: () => getRotation,
    getScaling: () => getScaling,
    getTranslation: () => getTranslation,
    identity: () => identity,
    invert: () => invert,
    lookAt: () => lookAt,
    mul: () => mul,
    multiply: () => multiply,
    multiplyScalar: () => multiplyScalar,
    multiplyScalarAndAdd: () => multiplyScalarAndAdd,
    ortho: () => ortho,
    orthoNO: () => orthoNO,
    orthoZO: () => orthoZO,
    perspective: () => perspective,
    perspectiveFromFieldOfView: () => perspectiveFromFieldOfView,
    perspectiveNO: () => perspectiveNO,
    perspectiveZO: () => perspectiveZO,
    rotate: () => rotate,
    rotateX: () => rotateX,
    rotateY: () => rotateY,
    rotateZ: () => rotateZ,
    scale: () => scale,
    set: () => set,
    str: () => str,
    sub: () => sub,
    subtract: () => subtract,
    targetTo: () => targetTo,
    translate: () => translate,
    transpose: () => transpose
  });
  function create2() {
    var out = new ARRAY_TYPE(16);
    if (ARRAY_TYPE != Float32Array) {
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
    }
    out[0] = 1;
    out[5] = 1;
    out[10] = 1;
    out[15] = 1;
    return out;
  }
  function clone(a) {
    var out = new ARRAY_TYPE(16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
  }
  function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
  }
  function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    var out = new ARRAY_TYPE(16);
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
  }
  function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
  }
  function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function transpose(out, a) {
    if (out === a) {
      var a01 = a[1], a02 = a[2], a03 = a[3];
      var a12 = a[6], a13 = a[7];
      var a23 = a[11];
      out[1] = a[4];
      out[2] = a[8];
      out[3] = a[12];
      out[4] = a01;
      out[6] = a[9];
      out[7] = a[13];
      out[8] = a02;
      out[9] = a12;
      out[11] = a[14];
      out[12] = a03;
      out[13] = a13;
      out[14] = a23;
    } else {
      out[0] = a[0];
      out[1] = a[4];
      out[2] = a[8];
      out[3] = a[12];
      out[4] = a[1];
      out[5] = a[5];
      out[6] = a[9];
      out[7] = a[13];
      out[8] = a[2];
      out[9] = a[6];
      out[10] = a[10];
      out[11] = a[14];
      out[12] = a[3];
      out[13] = a[7];
      out[14] = a[11];
      out[15] = a[15];
    }
    return out;
  }
  function invert(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32;
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) {
      return null;
    }
    det = 1 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
    return out;
  }
  function adjoint(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
    out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
    out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
    out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
    out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
    out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
    out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
    out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
    out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
    out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
    out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
    out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
    out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
    return out;
  }
  function determinant(a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32;
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  }
  function multiply(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[4];
    b1 = b[5];
    b2 = b[6];
    b3 = b[7];
    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[8];
    b1 = b[9];
    b2 = b[10];
    b3 = b[11];
    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[12];
    b1 = b[13];
    b2 = b[14];
    b3 = b[15];
    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
  }
  function translate(out, a, v) {
    var x = v[0], y = v[1], z = v[2];
    var a00, a01, a02, a03;
    var a10, a11, a12, a13;
    var a20, a21, a22, a23;
    if (a === out) {
      out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
      out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
      out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
      out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
      a00 = a[0];
      a01 = a[1];
      a02 = a[2];
      a03 = a[3];
      a10 = a[4];
      a11 = a[5];
      a12 = a[6];
      a13 = a[7];
      a20 = a[8];
      a21 = a[9];
      a22 = a[10];
      a23 = a[11];
      out[0] = a00;
      out[1] = a01;
      out[2] = a02;
      out[3] = a03;
      out[4] = a10;
      out[5] = a11;
      out[6] = a12;
      out[7] = a13;
      out[8] = a20;
      out[9] = a21;
      out[10] = a22;
      out[11] = a23;
      out[12] = a00 * x + a10 * y + a20 * z + a[12];
      out[13] = a01 * x + a11 * y + a21 * z + a[13];
      out[14] = a02 * x + a12 * y + a22 * z + a[14];
      out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }
    return out;
  }
  function scale(out, a, v) {
    var x = v[0], y = v[1], z = v[2];
    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
  }
  function rotate(out, a, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2];
    var len3 = Math.hypot(x, y, z);
    var s, c, t;
    var a00, a01, a02, a03;
    var a10, a11, a12, a13;
    var a20, a21, a22, a23;
    var b00, b01, b02;
    var b10, b11, b12;
    var b20, b21, b22;
    if (len3 < EPSILON) {
      return null;
    }
    len3 = 1 / len3;
    x *= len3;
    y *= len3;
    z *= len3;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    b00 = x * x * t + c;
    b01 = y * x * t + z * s;
    b02 = z * x * t - y * s;
    b10 = x * y * t - z * s;
    b11 = y * y * t + c;
    b12 = z * y * t + x * s;
    b20 = x * z * t + y * s;
    b21 = y * z * t - x * s;
    b22 = z * z * t + c;
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;
    if (a !== out) {
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    }
    return out;
  }
  function rotateX(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    if (a !== out) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    }
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
  }
  function rotateY(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    if (a !== out) {
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    }
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
  }
  function rotateZ(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    if (a !== out) {
      out[8] = a[8];
      out[9] = a[9];
      out[10] = a[10];
      out[11] = a[11];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
    }
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
  }
  function fromTranslation(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
  }
  function fromScaling(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = v[1];
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = v[2];
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function fromRotation(out, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2];
    var len3 = Math.hypot(x, y, z);
    var s, c, t;
    if (len3 < EPSILON) {
      return null;
    }
    len3 = 1 / len3;
    x *= len3;
    y *= len3;
    z *= len3;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;
    out[0] = x * x * t + c;
    out[1] = y * x * t + z * s;
    out[2] = z * x * t - y * s;
    out[3] = 0;
    out[4] = x * y * t - z * s;
    out[5] = y * y * t + c;
    out[6] = z * y * t + x * s;
    out[7] = 0;
    out[8] = x * z * t + y * s;
    out[9] = y * z * t - x * s;
    out[10] = z * z * t + c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function fromXRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = c;
    out[6] = s;
    out[7] = 0;
    out[8] = 0;
    out[9] = -s;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function fromYRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    out[0] = c;
    out[1] = 0;
    out[2] = -s;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = s;
    out[9] = 0;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function fromZRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    out[0] = c;
    out[1] = s;
    out[2] = 0;
    out[3] = 0;
    out[4] = -s;
    out[5] = c;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function fromRotationTranslation(out, q, v) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
  }
  function fromQuat2(out, a) {
    var translation = new ARRAY_TYPE(3);
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7];
    var magnitude = bx * bx + by * by + bz * bz + bw * bw;
    if (magnitude > 0) {
      translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
      translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
      translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
    } else {
      translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
      translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
      translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
    }
    fromRotationTranslation(out, a, translation);
    return out;
  }
  function getTranslation(out, mat) {
    out[0] = mat[12];
    out[1] = mat[13];
    out[2] = mat[14];
    return out;
  }
  function getScaling(out, mat) {
    var m11 = mat[0];
    var m12 = mat[1];
    var m13 = mat[2];
    var m21 = mat[4];
    var m22 = mat[5];
    var m23 = mat[6];
    var m31 = mat[8];
    var m32 = mat[9];
    var m33 = mat[10];
    out[0] = Math.hypot(m11, m12, m13);
    out[1] = Math.hypot(m21, m22, m23);
    out[2] = Math.hypot(m31, m32, m33);
    return out;
  }
  function getRotation(out, mat) {
    var scaling = new ARRAY_TYPE(3);
    getScaling(scaling, mat);
    var is1 = 1 / scaling[0];
    var is2 = 1 / scaling[1];
    var is3 = 1 / scaling[2];
    var sm11 = mat[0] * is1;
    var sm12 = mat[1] * is2;
    var sm13 = mat[2] * is3;
    var sm21 = mat[4] * is1;
    var sm22 = mat[5] * is2;
    var sm23 = mat[6] * is3;
    var sm31 = mat[8] * is1;
    var sm32 = mat[9] * is2;
    var sm33 = mat[10] * is3;
    var trace = sm11 + sm22 + sm33;
    var S = 0;
    if (trace > 0) {
      S = Math.sqrt(trace + 1) * 2;
      out[3] = 0.25 * S;
      out[0] = (sm23 - sm32) / S;
      out[1] = (sm31 - sm13) / S;
      out[2] = (sm12 - sm21) / S;
    } else if (sm11 > sm22 && sm11 > sm33) {
      S = Math.sqrt(1 + sm11 - sm22 - sm33) * 2;
      out[3] = (sm23 - sm32) / S;
      out[0] = 0.25 * S;
      out[1] = (sm12 + sm21) / S;
      out[2] = (sm31 + sm13) / S;
    } else if (sm22 > sm33) {
      S = Math.sqrt(1 + sm22 - sm11 - sm33) * 2;
      out[3] = (sm31 - sm13) / S;
      out[0] = (sm12 + sm21) / S;
      out[1] = 0.25 * S;
      out[2] = (sm23 + sm32) / S;
    } else {
      S = Math.sqrt(1 + sm33 - sm11 - sm22) * 2;
      out[3] = (sm12 - sm21) / S;
      out[0] = (sm31 + sm13) / S;
      out[1] = (sm23 + sm32) / S;
      out[2] = 0.25 * S;
    }
    return out;
  }
  function fromRotationTranslationScale(out, q, v, s) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    var sx = s[0];
    var sy = s[1];
    var sz = s[2];
    out[0] = (1 - (yy + zz)) * sx;
    out[1] = (xy + wz) * sx;
    out[2] = (xz - wy) * sx;
    out[3] = 0;
    out[4] = (xy - wz) * sy;
    out[5] = (1 - (xx + zz)) * sy;
    out[6] = (yz + wx) * sy;
    out[7] = 0;
    out[8] = (xz + wy) * sz;
    out[9] = (yz - wx) * sz;
    out[10] = (1 - (xx + yy)) * sz;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
  }
  function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    var sx = s[0];
    var sy = s[1];
    var sz = s[2];
    var ox = o[0];
    var oy = o[1];
    var oz = o[2];
    var out0 = (1 - (yy + zz)) * sx;
    var out1 = (xy + wz) * sx;
    var out2 = (xz - wy) * sx;
    var out4 = (xy - wz) * sy;
    var out5 = (1 - (xx + zz)) * sy;
    var out6 = (yz + wx) * sy;
    var out8 = (xz + wy) * sz;
    var out9 = (yz - wx) * sz;
    var out10 = (1 - (xx + yy)) * sz;
    out[0] = out0;
    out[1] = out1;
    out[2] = out2;
    out[3] = 0;
    out[4] = out4;
    out[5] = out5;
    out[6] = out6;
    out[7] = 0;
    out[8] = out8;
    out[9] = out9;
    out[10] = out10;
    out[11] = 0;
    out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
    out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
    out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
    out[15] = 1;
    return out;
  }
  function fromQuat(out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var yx = y * x2;
    var yy = y * y2;
    var zx = z * x2;
    var zy = z * y2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;
    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;
    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function frustum(out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left);
    var tb = 1 / (top - bottom);
    var nf = 1 / (near - far);
    out[0] = near * 2 * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = near * 2 * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = far * near * 2 * nf;
    out[15] = 0;
    return out;
  }
  function perspectiveNO(out, fovy, aspect, near, far) {
    var f = 1 / Math.tan(fovy / 2), nf;
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;
    if (far != null && far !== Infinity) {
      nf = 1 / (near - far);
      out[10] = (far + near) * nf;
      out[14] = 2 * far * near * nf;
    } else {
      out[10] = -1;
      out[14] = -2 * near;
    }
    return out;
  }
  var perspective = perspectiveNO;
  function perspectiveZO(out, fovy, aspect, near, far) {
    var f = 1 / Math.tan(fovy / 2), nf;
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;
    if (far != null && far !== Infinity) {
      nf = 1 / (near - far);
      out[10] = far * nf;
      out[14] = far * near * nf;
    } else {
      out[10] = -1;
      out[14] = -near;
    }
    return out;
  }
  function perspectiveFromFieldOfView(out, fov, near, far) {
    var upTan = Math.tan(fov.upDegrees * Math.PI / 180);
    var downTan = Math.tan(fov.downDegrees * Math.PI / 180);
    var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180);
    var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180);
    var xScale = 2 / (leftTan + rightTan);
    var yScale = 2 / (upTan + downTan);
    out[0] = xScale;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = yScale;
    out[6] = 0;
    out[7] = 0;
    out[8] = -((leftTan - rightTan) * xScale * 0.5);
    out[9] = (upTan - downTan) * yScale * 0.5;
    out[10] = far / (near - far);
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = far * near / (near - far);
    out[15] = 0;
    return out;
  }
  function orthoNO(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right);
    var bt = 1 / (bottom - top);
    var nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
  }
  var ortho = orthoNO;
  function orthoZO(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right);
    var bt = 1 / (bottom - top);
    var nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = near * nf;
    out[15] = 1;
    return out;
  }
  function lookAt(out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len3;
    var eyex = eye[0];
    var eyey = eye[1];
    var eyez = eye[2];
    var upx = up[0];
    var upy = up[1];
    var upz = up[2];
    var centerx = center[0];
    var centery = center[1];
    var centerz = center[2];
    if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
      return identity(out);
    }
    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;
    len3 = 1 / Math.hypot(z0, z1, z2);
    z0 *= len3;
    z1 *= len3;
    z2 *= len3;
    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len3 = Math.hypot(x0, x1, x2);
    if (!len3) {
      x0 = 0;
      x1 = 0;
      x2 = 0;
    } else {
      len3 = 1 / len3;
      x0 *= len3;
      x1 *= len3;
      x2 *= len3;
    }
    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;
    len3 = Math.hypot(y0, y1, y2);
    if (!len3) {
      y0 = 0;
      y1 = 0;
      y2 = 0;
    } else {
      len3 = 1 / len3;
      y0 *= len3;
      y1 *= len3;
      y2 *= len3;
    }
    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;
    return out;
  }
  function targetTo(out, eye, target, up) {
    var eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
    var z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
    var len3 = z0 * z0 + z1 * z1 + z2 * z2;
    if (len3 > 0) {
      len3 = 1 / Math.sqrt(len3);
      z0 *= len3;
      z1 *= len3;
      z2 *= len3;
    }
    var x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
    len3 = x0 * x0 + x1 * x1 + x2 * x2;
    if (len3 > 0) {
      len3 = 1 / Math.sqrt(len3);
      x0 *= len3;
      x1 *= len3;
      x2 *= len3;
    }
    out[0] = x0;
    out[1] = x1;
    out[2] = x2;
    out[3] = 0;
    out[4] = z1 * x2 - z2 * x1;
    out[5] = z2 * x0 - z0 * x2;
    out[6] = z0 * x1 - z1 * x0;
    out[7] = 0;
    out[8] = z0;
    out[9] = z1;
    out[10] = z2;
    out[11] = 0;
    out[12] = eyex;
    out[13] = eyey;
    out[14] = eyez;
    out[15] = 1;
    return out;
  }
  function str(a) {
    return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
  }
  function frob(a) {
    return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
  }
  function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    out[9] = a[9] + b[9];
    out[10] = a[10] + b[10];
    out[11] = a[11] + b[11];
    out[12] = a[12] + b[12];
    out[13] = a[13] + b[13];
    out[14] = a[14] + b[14];
    out[15] = a[15] + b[15];
    return out;
  }
  function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    out[9] = a[9] - b[9];
    out[10] = a[10] - b[10];
    out[11] = a[11] - b[11];
    out[12] = a[12] - b[12];
    out[13] = a[13] - b[13];
    out[14] = a[14] - b[14];
    out[15] = a[15] - b[15];
    return out;
  }
  function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    out[9] = a[9] * b;
    out[10] = a[10] * b;
    out[11] = a[11] * b;
    out[12] = a[12] * b;
    out[13] = a[13] * b;
    out[14] = a[14] * b;
    out[15] = a[15] * b;
    return out;
  }
  function multiplyScalarAndAdd(out, a, b, scale5) {
    out[0] = a[0] + b[0] * scale5;
    out[1] = a[1] + b[1] * scale5;
    out[2] = a[2] + b[2] * scale5;
    out[3] = a[3] + b[3] * scale5;
    out[4] = a[4] + b[4] * scale5;
    out[5] = a[5] + b[5] * scale5;
    out[6] = a[6] + b[6] * scale5;
    out[7] = a[7] + b[7] * scale5;
    out[8] = a[8] + b[8] * scale5;
    out[9] = a[9] + b[9] * scale5;
    out[10] = a[10] + b[10] * scale5;
    out[11] = a[11] + b[11] * scale5;
    out[12] = a[12] + b[12] * scale5;
    out[13] = a[13] + b[13] * scale5;
    out[14] = a[14] + b[14] * scale5;
    out[15] = a[15] + b[15] * scale5;
    return out;
  }
  function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
  }
  function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
    var a8 = a[8], a9 = a[9], a10 = a[10], a11 = a[11];
    var a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    var b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
    var b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11];
    var b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
    return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1, Math.abs(a15), Math.abs(b15));
  }
  var mul = multiply;
  var sub = subtract;

  // node_modules/gl-matrix/esm/vec3.js
  var vec3_exports = {};
  __export(vec3_exports, {
    add: () => add2,
    angle: () => angle,
    bezier: () => bezier,
    ceil: () => ceil,
    clone: () => clone2,
    copy: () => copy2,
    create: () => create3,
    cross: () => cross,
    dist: () => dist,
    distance: () => distance,
    div: () => div,
    divide: () => divide,
    dot: () => dot,
    equals: () => equals2,
    exactEquals: () => exactEquals2,
    floor: () => floor,
    forEach: () => forEach,
    fromValues: () => fromValues2,
    hermite: () => hermite,
    inverse: () => inverse,
    len: () => len,
    length: () => length,
    lerp: () => lerp,
    max: () => max,
    min: () => min,
    mul: () => mul2,
    multiply: () => multiply2,
    negate: () => negate,
    normalize: () => normalize,
    random: () => random,
    rotateX: () => rotateX2,
    rotateY: () => rotateY2,
    rotateZ: () => rotateZ2,
    round: () => round,
    scale: () => scale2,
    scaleAndAdd: () => scaleAndAdd,
    set: () => set2,
    sqrDist: () => sqrDist,
    sqrLen: () => sqrLen,
    squaredDistance: () => squaredDistance,
    squaredLength: () => squaredLength,
    str: () => str2,
    sub: () => sub2,
    subtract: () => subtract2,
    transformMat3: () => transformMat3,
    transformMat4: () => transformMat4,
    transformQuat: () => transformQuat,
    zero: () => zero
  });
  function create3() {
    var out = new ARRAY_TYPE(3);
    if (ARRAY_TYPE != Float32Array) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
    }
    return out;
  }
  function clone2(a) {
    var out = new ARRAY_TYPE(3);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
  }
  function length(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    return Math.hypot(x, y, z);
  }
  function fromValues2(x, y, z) {
    var out = new ARRAY_TYPE(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
  }
  function copy2(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
  }
  function set2(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
  }
  function add2(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
  }
  function subtract2(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
  }
  function multiply2(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
  }
  function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
  }
  function ceil(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    return out;
  }
  function floor(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    return out;
  }
  function min(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out;
  }
  function max(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out;
  }
  function round(out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    return out;
  }
  function scale2(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
  }
  function scaleAndAdd(out, a, b, scale5) {
    out[0] = a[0] + b[0] * scale5;
    out[1] = a[1] + b[1] * scale5;
    out[2] = a[2] + b[2] * scale5;
    return out;
  }
  function distance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    return Math.hypot(x, y, z);
  }
  function squaredDistance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    return x * x + y * y + z * z;
  }
  function squaredLength(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    return x * x + y * y + z * z;
  }
  function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
  }
  function inverse(out, a) {
    out[0] = 1 / a[0];
    out[1] = 1 / a[1];
    out[2] = 1 / a[2];
    return out;
  }
  function normalize(out, a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var len3 = x * x + y * y + z * z;
    if (len3 > 0) {
      len3 = 1 / Math.sqrt(len3);
    }
    out[0] = a[0] * len3;
    out[1] = a[1] * len3;
    out[2] = a[2] * len3;
    return out;
  }
  function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }
  function cross(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2];
    var bx = b[0], by = b[1], bz = b[2];
    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
  }
  function lerp(out, a, b, t) {
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
  }
  function hermite(out, a, b, c, d, t) {
    var factorTimes2 = t * t;
    var factor1 = factorTimes2 * (2 * t - 3) + 1;
    var factor2 = factorTimes2 * (t - 2) + t;
    var factor3 = factorTimes2 * (t - 1);
    var factor4 = factorTimes2 * (3 - 2 * t);
    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
  }
  function bezier(out, a, b, c, d, t) {
    var inverseFactor = 1 - t;
    var inverseFactorTimesTwo = inverseFactor * inverseFactor;
    var factorTimes2 = t * t;
    var factor1 = inverseFactorTimesTwo * inverseFactor;
    var factor2 = 3 * t * inverseFactorTimesTwo;
    var factor3 = 3 * factorTimes2 * inverseFactor;
    var factor4 = factorTimes2 * t;
    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
  }
  function random(out, scale5) {
    scale5 = scale5 || 1;
    var r = RANDOM() * 2 * Math.PI;
    var z = RANDOM() * 2 - 1;
    var zScale = Math.sqrt(1 - z * z) * scale5;
    out[0] = Math.cos(r) * zScale;
    out[1] = Math.sin(r) * zScale;
    out[2] = z * scale5;
    return out;
  }
  function transformMat4(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    var w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1;
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    return out;
  }
  function transformMat3(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
  }
  function transformQuat(out, a, q) {
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
    var x = a[0], y = a[1], z = a[2];
    var uvx = qy * z - qz * y, uvy = qz * x - qx * z, uvz = qx * y - qy * x;
    var uuvx = qy * uvz - qz * uvy, uuvy = qz * uvx - qx * uvz, uuvz = qx * uvy - qy * uvx;
    var w2 = qw * 2;
    uvx *= w2;
    uvy *= w2;
    uvz *= w2;
    uuvx *= 2;
    uuvy *= 2;
    uuvz *= 2;
    out[0] = x + uvx + uuvx;
    out[1] = y + uvy + uuvy;
    out[2] = z + uvz + uuvz;
    return out;
  }
  function rotateX2(out, a, b, rad) {
    var p = [], r = [];
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2];
    r[0] = p[0];
    r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
    r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad);
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
  }
  function rotateY2(out, a, b, rad) {
    var p = [], r = [];
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2];
    r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
    r[1] = p[1];
    r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad);
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
  }
  function rotateZ2(out, a, b, rad) {
    var p = [], r = [];
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2];
    r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
    r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
    r[2] = p[2];
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
  }
  function angle(a, b) {
    var ax = a[0], ay = a[1], az = a[2], bx = b[0], by = b[1], bz = b[2], mag1 = Math.sqrt(ax * ax + ay * ay + az * az), mag2 = Math.sqrt(bx * bx + by * by + bz * bz), mag = mag1 * mag2, cosine = mag && dot(a, b) / mag;
    return Math.acos(Math.min(Math.max(cosine, -1), 1));
  }
  function zero(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    return out;
  }
  function str2(a) {
    return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
  }
  function exactEquals2(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
  }
  function equals2(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2];
    var b0 = b[0], b1 = b[1], b2 = b[2];
    return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2));
  }
  var sub2 = subtract2;
  var mul2 = multiply2;
  var div = divide;
  var dist = distance;
  var sqrDist = squaredDistance;
  var len = length;
  var sqrLen = squaredLength;
  var forEach = function() {
    var vec = create3();
    return function(a, stride, offset, count, fn, arg) {
      var i, l;
      if (!stride) {
        stride = 3;
      }
      if (!offset) {
        offset = 0;
      }
      if (count) {
        l = Math.min(count * stride + offset, a.length);
      } else {
        l = a.length;
      }
      for (i = offset; i < l; i += stride) {
        vec[0] = a[i];
        vec[1] = a[i + 1];
        vec[2] = a[i + 2];
        fn(vec, vec, arg);
        a[i] = vec[0];
        a[i + 1] = vec[1];
        a[i + 2] = vec[2];
      }
      return a;
    };
  }();

  // node_modules/gl-matrix/esm/vec4.js
  function create4() {
    var out = new ARRAY_TYPE(4);
    if (ARRAY_TYPE != Float32Array) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
    }
    return out;
  }
  function copy3(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
  }
  function length2(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var w = a[3];
    return Math.hypot(x, y, z, w);
  }
  function squaredLength2(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var w = a[3];
    return x * x + y * y + z * z + w * w;
  }
  function normalize2(out, a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var w = a[3];
    var len3 = x * x + y * y + z * z + w * w;
    if (len3 > 0) {
      len3 = 1 / Math.sqrt(len3);
    }
    out[0] = x * len3;
    out[1] = y * len3;
    out[2] = z * len3;
    out[3] = w * len3;
    return out;
  }
  function dot2(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }
  var forEach2 = function() {
    var vec = create4();
    return function(a, stride, offset, count, fn, arg) {
      var i, l;
      if (!stride) {
        stride = 4;
      }
      if (!offset) {
        offset = 0;
      }
      if (count) {
        l = Math.min(count * stride + offset, a.length);
      } else {
        l = a.length;
      }
      for (i = offset; i < l; i += stride) {
        vec[0] = a[i];
        vec[1] = a[i + 1];
        vec[2] = a[i + 2];
        vec[3] = a[i + 3];
        fn(vec, vec, arg);
        a[i] = vec[0];
        a[i + 1] = vec[1];
        a[i + 2] = vec[2];
        a[i + 3] = vec[3];
      }
      return a;
    };
  }();

  // node_modules/gl-matrix/esm/quat.js
  function create5() {
    var out = new ARRAY_TYPE(4);
    if (ARRAY_TYPE != Float32Array) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
    }
    out[3] = 1;
    return out;
  }
  function setAxisAngle(out, axis, rad) {
    rad = rad * 0.5;
    var s = Math.sin(rad);
    out[0] = s * axis[0];
    out[1] = s * axis[1];
    out[2] = s * axis[2];
    out[3] = Math.cos(rad);
    return out;
  }
  function rotateX3(out, a, rad) {
    rad *= 0.5;
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bx = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw + aw * bx;
    out[1] = ay * bw + az * bx;
    out[2] = az * bw - ay * bx;
    out[3] = aw * bw - ax * bx;
    return out;
  }
  function rotateY3(out, a, rad) {
    rad *= 0.5;
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var by = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw - az * by;
    out[1] = ay * bw + aw * by;
    out[2] = az * bw + ax * by;
    out[3] = aw * bw - ay * by;
    return out;
  }
  function rotateZ3(out, a, rad) {
    rad *= 0.5;
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bz = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw + ay * bz;
    out[1] = ay * bw - ax * bz;
    out[2] = az * bw + aw * bz;
    out[3] = aw * bw - az * bz;
    return out;
  }
  function slerp(out, a, b, t) {
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bx = b[0], by = b[1], bz = b[2], bw = b[3];
    var omega, cosom, sinom, scale0, scale1;
    cosom = ax * bx + ay * by + az * bz + aw * bw;
    if (cosom < 0) {
      cosom = -cosom;
      bx = -bx;
      by = -by;
      bz = -bz;
      bw = -bw;
    }
    if (1 - cosom > EPSILON) {
      omega = Math.acos(cosom);
      sinom = Math.sin(omega);
      scale0 = Math.sin((1 - t) * omega) / sinom;
      scale1 = Math.sin(t * omega) / sinom;
    } else {
      scale0 = 1 - t;
      scale1 = t;
    }
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;
    return out;
  }
  function fromMat3(out, m) {
    var fTrace = m[0] + m[4] + m[8];
    var fRoot;
    if (fTrace > 0) {
      fRoot = Math.sqrt(fTrace + 1);
      out[3] = 0.5 * fRoot;
      fRoot = 0.5 / fRoot;
      out[0] = (m[5] - m[7]) * fRoot;
      out[1] = (m[6] - m[2]) * fRoot;
      out[2] = (m[1] - m[3]) * fRoot;
    } else {
      var i = 0;
      if (m[4] > m[0])
        i = 1;
      if (m[8] > m[i * 3 + i])
        i = 2;
      var j = (i + 1) % 3;
      var k = (i + 2) % 3;
      fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1);
      out[i] = 0.5 * fRoot;
      fRoot = 0.5 / fRoot;
      out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
      out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
      out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
    }
    return out;
  }
  var copy4 = copy3;
  var dot3 = dot2;
  var length3 = length2;
  var squaredLength3 = squaredLength2;
  var normalize3 = normalize2;
  var rotationTo = function() {
    var tmpvec3 = create3();
    var xUnitVec3 = fromValues2(1, 0, 0);
    var yUnitVec3 = fromValues2(0, 1, 0);
    return function(out, a, b) {
      var dot5 = dot(a, b);
      if (dot5 < -0.999999) {
        cross(tmpvec3, xUnitVec3, a);
        if (len(tmpvec3) < 1e-6)
          cross(tmpvec3, yUnitVec3, a);
        normalize(tmpvec3, tmpvec3);
        setAxisAngle(out, tmpvec3, Math.PI);
        return out;
      } else if (dot5 > 0.999999) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        return out;
      } else {
        cross(tmpvec3, a, b);
        out[0] = tmpvec3[0];
        out[1] = tmpvec3[1];
        out[2] = tmpvec3[2];
        out[3] = 1 + dot5;
        return normalize3(out, out);
      }
    };
  }();
  var sqlerp = function() {
    var temp1 = create5();
    var temp2 = create5();
    return function(out, a, b, c, d, t) {
      slerp(temp1, a, d, t);
      slerp(temp2, b, c, t);
      slerp(out, temp1, temp2, 2 * t * (1 - t));
      return out;
    };
  }();
  var setAxes = function() {
    var matr = create();
    return function(out, view, right, up) {
      matr[0] = right[0];
      matr[3] = right[1];
      matr[6] = right[2];
      matr[1] = up[0];
      matr[4] = up[1];
      matr[7] = up[2];
      matr[2] = -view[0];
      matr[5] = -view[1];
      matr[8] = -view[2];
      return normalize3(out, fromMat3(out, matr));
    };
  }();

  // node_modules/gl-matrix/esm/quat2.js
  var quat2_exports = {};
  __export(quat2_exports, {
    add: () => add4,
    clone: () => clone4,
    conjugate: () => conjugate,
    copy: () => copy5,
    create: () => create6,
    dot: () => dot4,
    equals: () => equals4,
    exactEquals: () => exactEquals4,
    fromMat4: () => fromMat4,
    fromRotation: () => fromRotation2,
    fromRotationTranslation: () => fromRotationTranslation2,
    fromRotationTranslationValues: () => fromRotationTranslationValues,
    fromTranslation: () => fromTranslation2,
    fromValues: () => fromValues4,
    getDual: () => getDual,
    getReal: () => getReal,
    getTranslation: () => getTranslation2,
    identity: () => identity2,
    invert: () => invert2,
    len: () => len2,
    length: () => length4,
    lerp: () => lerp3,
    mul: () => mul3,
    multiply: () => multiply3,
    normalize: () => normalize4,
    rotateAroundAxis: () => rotateAroundAxis,
    rotateByQuatAppend: () => rotateByQuatAppend,
    rotateByQuatPrepend: () => rotateByQuatPrepend,
    rotateX: () => rotateX4,
    rotateY: () => rotateY4,
    rotateZ: () => rotateZ4,
    scale: () => scale4,
    set: () => set4,
    setDual: () => setDual,
    setReal: () => setReal,
    sqrLen: () => sqrLen2,
    squaredLength: () => squaredLength4,
    str: () => str3,
    translate: () => translate2
  });
  function create6() {
    var dq = new ARRAY_TYPE(8);
    if (ARRAY_TYPE != Float32Array) {
      dq[0] = 0;
      dq[1] = 0;
      dq[2] = 0;
      dq[4] = 0;
      dq[5] = 0;
      dq[6] = 0;
      dq[7] = 0;
    }
    dq[3] = 1;
    return dq;
  }
  function clone4(a) {
    var dq = new ARRAY_TYPE(8);
    dq[0] = a[0];
    dq[1] = a[1];
    dq[2] = a[2];
    dq[3] = a[3];
    dq[4] = a[4];
    dq[5] = a[5];
    dq[6] = a[6];
    dq[7] = a[7];
    return dq;
  }
  function fromValues4(x1, y1, z1, w1, x2, y2, z2, w2) {
    var dq = new ARRAY_TYPE(8);
    dq[0] = x1;
    dq[1] = y1;
    dq[2] = z1;
    dq[3] = w1;
    dq[4] = x2;
    dq[5] = y2;
    dq[6] = z2;
    dq[7] = w2;
    return dq;
  }
  function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
    var dq = new ARRAY_TYPE(8);
    dq[0] = x1;
    dq[1] = y1;
    dq[2] = z1;
    dq[3] = w1;
    var ax = x2 * 0.5, ay = y2 * 0.5, az = z2 * 0.5;
    dq[4] = ax * w1 + ay * z1 - az * y1;
    dq[5] = ay * w1 + az * x1 - ax * z1;
    dq[6] = az * w1 + ax * y1 - ay * x1;
    dq[7] = -ax * x1 - ay * y1 - az * z1;
    return dq;
  }
  function fromRotationTranslation2(out, q, t) {
    var ax = t[0] * 0.5, ay = t[1] * 0.5, az = t[2] * 0.5, bx = q[0], by = q[1], bz = q[2], bw = q[3];
    out[0] = bx;
    out[1] = by;
    out[2] = bz;
    out[3] = bw;
    out[4] = ax * bw + ay * bz - az * by;
    out[5] = ay * bw + az * bx - ax * bz;
    out[6] = az * bw + ax * by - ay * bx;
    out[7] = -ax * bx - ay * by - az * bz;
    return out;
  }
  function fromTranslation2(out, t) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = t[0] * 0.5;
    out[5] = t[1] * 0.5;
    out[6] = t[2] * 0.5;
    out[7] = 0;
    return out;
  }
  function fromRotation2(out, q) {
    out[0] = q[0];
    out[1] = q[1];
    out[2] = q[2];
    out[3] = q[3];
    out[4] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    return out;
  }
  function fromMat4(out, a) {
    var outer = create5();
    getRotation(outer, a);
    var t = new ARRAY_TYPE(3);
    getTranslation(t, a);
    fromRotationTranslation2(out, outer, t);
    return out;
  }
  function copy5(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    return out;
  }
  function identity2(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    return out;
  }
  function set4(out, x1, y1, z1, w1, x2, y2, z2, w2) {
    out[0] = x1;
    out[1] = y1;
    out[2] = z1;
    out[3] = w1;
    out[4] = x2;
    out[5] = y2;
    out[6] = z2;
    out[7] = w2;
    return out;
  }
  var getReal = copy4;
  function getDual(out, a) {
    out[0] = a[4];
    out[1] = a[5];
    out[2] = a[6];
    out[3] = a[7];
    return out;
  }
  var setReal = copy4;
  function setDual(out, q) {
    out[4] = q[0];
    out[5] = q[1];
    out[6] = q[2];
    out[7] = q[3];
    return out;
  }
  function getTranslation2(out, a) {
    var ax = a[4], ay = a[5], az = a[6], aw = a[7], bx = -a[0], by = -a[1], bz = -a[2], bw = a[3];
    out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
    return out;
  }
  function translate2(out, a, v) {
    var ax1 = a[0], ay1 = a[1], az1 = a[2], aw1 = a[3], bx1 = v[0] * 0.5, by1 = v[1] * 0.5, bz1 = v[2] * 0.5, ax2 = a[4], ay2 = a[5], az2 = a[6], aw2 = a[7];
    out[0] = ax1;
    out[1] = ay1;
    out[2] = az1;
    out[3] = aw1;
    out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
    out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
    out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
    out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
    return out;
  }
  function rotateX4(out, a, rad) {
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
    rotateX3(out, a, rad);
    bx = out[0];
    by = out[1];
    bz = out[2];
    bw = out[3];
    out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    return out;
  }
  function rotateY4(out, a, rad) {
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
    rotateY3(out, a, rad);
    bx = out[0];
    by = out[1];
    bz = out[2];
    bw = out[3];
    out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    return out;
  }
  function rotateZ4(out, a, rad) {
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
    rotateZ3(out, a, rad);
    bx = out[0];
    by = out[1];
    bz = out[2];
    bw = out[3];
    out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    return out;
  }
  function rotateByQuatAppend(out, a, q) {
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3], ax = a[0], ay = a[1], az = a[2], aw = a[3];
    out[0] = ax * qw + aw * qx + ay * qz - az * qy;
    out[1] = ay * qw + aw * qy + az * qx - ax * qz;
    out[2] = az * qw + aw * qz + ax * qy - ay * qx;
    out[3] = aw * qw - ax * qx - ay * qy - az * qz;
    ax = a[4];
    ay = a[5];
    az = a[6];
    aw = a[7];
    out[4] = ax * qw + aw * qx + ay * qz - az * qy;
    out[5] = ay * qw + aw * qy + az * qx - ax * qz;
    out[6] = az * qw + aw * qz + ax * qy - ay * qx;
    out[7] = aw * qw - ax * qx - ay * qy - az * qz;
    return out;
  }
  function rotateByQuatPrepend(out, q, a) {
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3], bx = a[0], by = a[1], bz = a[2], bw = a[3];
    out[0] = qx * bw + qw * bx + qy * bz - qz * by;
    out[1] = qy * bw + qw * by + qz * bx - qx * bz;
    out[2] = qz * bw + qw * bz + qx * by - qy * bx;
    out[3] = qw * bw - qx * bx - qy * by - qz * bz;
    bx = a[4];
    by = a[5];
    bz = a[6];
    bw = a[7];
    out[4] = qx * bw + qw * bx + qy * bz - qz * by;
    out[5] = qy * bw + qw * by + qz * bx - qx * bz;
    out[6] = qz * bw + qw * bz + qx * by - qy * bx;
    out[7] = qw * bw - qx * bx - qy * by - qz * bz;
    return out;
  }
  function rotateAroundAxis(out, a, axis, rad) {
    if (Math.abs(rad) < EPSILON) {
      return copy5(out, a);
    }
    var axisLength = Math.hypot(axis[0], axis[1], axis[2]);
    rad = rad * 0.5;
    var s = Math.sin(rad);
    var bx = s * axis[0] / axisLength;
    var by = s * axis[1] / axisLength;
    var bz = s * axis[2] / axisLength;
    var bw = Math.cos(rad);
    var ax1 = a[0], ay1 = a[1], az1 = a[2], aw1 = a[3];
    out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    var ax = a[4], ay = a[5], az = a[6], aw = a[7];
    out[4] = ax * bw + aw * bx + ay * bz - az * by;
    out[5] = ay * bw + aw * by + az * bx - ax * bz;
    out[6] = az * bw + aw * bz + ax * by - ay * bx;
    out[7] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
  }
  function add4(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    return out;
  }
  function multiply3(out, a, b) {
    var ax0 = a[0], ay0 = a[1], az0 = a[2], aw0 = a[3], bx1 = b[4], by1 = b[5], bz1 = b[6], bw1 = b[7], ax1 = a[4], ay1 = a[5], az1 = a[6], aw1 = a[7], bx0 = b[0], by0 = b[1], bz0 = b[2], bw0 = b[3];
    out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
    out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
    out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
    out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
    out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
    out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
    out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
    out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
    return out;
  }
  var mul3 = multiply3;
  function scale4(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    return out;
  }
  var dot4 = dot3;
  function lerp3(out, a, b, t) {
    var mt = 1 - t;
    if (dot4(a, b) < 0)
      t = -t;
    out[0] = a[0] * mt + b[0] * t;
    out[1] = a[1] * mt + b[1] * t;
    out[2] = a[2] * mt + b[2] * t;
    out[3] = a[3] * mt + b[3] * t;
    out[4] = a[4] * mt + b[4] * t;
    out[5] = a[5] * mt + b[5] * t;
    out[6] = a[6] * mt + b[6] * t;
    out[7] = a[7] * mt + b[7] * t;
    return out;
  }
  function invert2(out, a) {
    var sqlen = squaredLength4(a);
    out[0] = -a[0] / sqlen;
    out[1] = -a[1] / sqlen;
    out[2] = -a[2] / sqlen;
    out[3] = a[3] / sqlen;
    out[4] = -a[4] / sqlen;
    out[5] = -a[5] / sqlen;
    out[6] = -a[6] / sqlen;
    out[7] = a[7] / sqlen;
    return out;
  }
  function conjugate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    out[4] = -a[4];
    out[5] = -a[5];
    out[6] = -a[6];
    out[7] = a[7];
    return out;
  }
  var length4 = length3;
  var len2 = length4;
  var squaredLength4 = squaredLength3;
  var sqrLen2 = squaredLength4;
  function normalize4(out, a) {
    var magnitude = squaredLength4(a);
    if (magnitude > 0) {
      magnitude = Math.sqrt(magnitude);
      var a0 = a[0] / magnitude;
      var a1 = a[1] / magnitude;
      var a2 = a[2] / magnitude;
      var a3 = a[3] / magnitude;
      var b0 = a[4];
      var b1 = a[5];
      var b2 = a[6];
      var b3 = a[7];
      var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
      out[0] = a0;
      out[1] = a1;
      out[2] = a2;
      out[3] = a3;
      out[4] = (b0 - a0 * a_dot_b) / magnitude;
      out[5] = (b1 - a1 * a_dot_b) / magnitude;
      out[6] = (b2 - a2 * a_dot_b) / magnitude;
      out[7] = (b3 - a3 * a_dot_b) / magnitude;
    }
    return out;
  }
  function str3(a) {
    return "quat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ")";
  }
  function exactEquals4(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
  }
  function equals4(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
    return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7));
  }

  // image-tracking.js
  WL.registerComponent("image-tracking", {
    videoPane: { type: WL.Type.Object },
    mindPath: { type: WL.Type.String },
    maxTrack: { type: WL.Type.Int, default: 1 }
  }, {
    init: function() {
      if (!navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        console.error("No media devices found.");
        this.active = false;
      }
      this.trackingTargets = [];
    },
    start: async function() {
      this.view = this.object.getComponent("view");
      navigator.mediaDevices.getUserMedia({ audio: false, video: true }).then((stream) => {
        this.video = document.createElement("video");
        this.video.srcObject = stream;
        this.video.addEventListener("loadedmetadata", () => {
          this.video.play();
          this.video.width = this.video.videoWidth;
          this.video.height = this.video.videoHeight;
          this._setupAR(this.video);
        });
      });
    },
    update: function(dt) {
      this._updateCameraProjection();
    },
    registerTarget(targetIndex, target) {
      this.trackingTargets.push({ targetIndex, target });
    },
    _setupAR: async function(input) {
      const controller = new MINDAR.IMAGE.Controller({
        inputWidth: input.width,
        inputHeight: input.height,
        maxTrack: this.maxTrack,
        filterMinCF: 1e-3,
        filterBeta: 1,
        missTolerance: 5,
        warmupTolerance: 5,
        onUpdate: (data) => {
          if (this.videoTexture) {
            this.videoTexture.update();
          }
          if (data.type === "updateMatrix") {
            const { targetIndex, worldMatrix } = data;
            this.trackingTargets.forEach((t) => {
              if (targetIndex === t.targetIndex) {
                const [markerWidth, markerHeight] = this.markerDimensions[targetIndex];
                t.target.updateTrack(worldMatrix, markerWidth, markerHeight);
              }
            });
          }
        }
      });
      const { dimensions, matchingDataList, imageListList } = await controller.addImageTargets(this.mindPath);
      const texture = new WL.Texture(input);
      this.input = input;
      this.controller = controller;
      this.markerDimensions = dimensions;
      this.videoTexture = texture;
      const videoPaneMesh = this.videoPane.getComponent("mesh");
      videoPaneMesh.material = videoPaneMesh.material.clone();
      videoPaneMesh.material.flatTexture = texture;
      this._updateCameraProjection();
      this.controller.processVideo(input);
    },
    _updateCameraProjection: function() {
      const { input, controller } = this;
      if (!input || !controller) {
        return;
      }
      if (this.lastProjectionCanvasWidth === WL.canvas.width && this.lastProjectionCanvasHeight === WL.canvas.height) {
        return;
      }
      const controllerProjectionMatrix = controller.getProjectionMatrix();
      const projectionMatrix = [...controllerProjectionMatrix];
      const canvasAspect = WL.canvas.width / WL.canvas.height;
      const inputAspect = input.width / input.height;
      if (canvasAspect < inputAspect) {
        projectionMatrix[0] *= inputAspect / canvasAspect;
      } else {
        projectionMatrix[5] *= canvasAspect / inputAspect;
      }
      const invProjectionMatrix = new Float32Array(16);
      mat4_exports.invert(invProjectionMatrix, projectionMatrix);
      const corner = new Float32Array(3);
      vec3_exports.transformMat4(corner, [1, 1, 0], invProjectionMatrix);
      let videoScaleX, videoScaleY, videoOffsetX, videoOffsetY;
      if (inputAspect < canvasAspect) {
        videoScaleX = corner[0];
        videoScaleY = videoScaleX * input.height / input.width;
      } else {
        videoScaleY = corner[1];
        videoScaleX = videoScaleY * input.width / input.height;
      }
      const far = projectionMatrix[14] / (projectionMatrix[10] + 1);
      const videoTranslateZ = -far * 0.999;
      this.videoPane.scalingLocal = [
        videoScaleX / corner[2] * videoTranslateZ,
        videoScaleY / corner[2] * videoTranslateZ,
        1
      ];
      this.videoPane.setTranslationLocal([0, 0, videoTranslateZ]);
      this.view.projectionMatrix.set(projectionMatrix);
      this.lastProjectionCanvasWidth = WL.canvas.width;
      this.lastProjectionCanvasHeight = WL.canvas.height;
    }
  });
  WL.registerComponent("image-tracking-target", {
    targetIndex: { type: WL.Type.Int },
    arCamera: { type: WL.Type.Object }
  }, {
    init: function() {
      this.arCamera.getComponent("image-tracking").registerTarget(this.targetIndex, this);
      this.object.scalingLocal = [0, 0, 0];
      this.object.setDirty();
    },
    updateTrack: function(worldMatrix, markerWidth, markerHeight) {
      if (!worldMatrix) {
        this.object.scalingLocal = [0, 0, 0];
        this.object.setDirty();
        return;
      }
      const fixedWorldMatrix = new Float32Array(16);
      const adjustMatrix = [
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        markerWidth / 2,
        markerHeight / 2,
        0,
        1
      ];
      mat4_exports.multiply(fixedWorldMatrix, worldMatrix, adjustMatrix);
      quat2_exports.fromMat4(this.object.transformLocal, fixedWorldMatrix);
      this.object.scalingLocal = [
        markerWidth / window.devicePixelRatio,
        markerWidth / window.devicePixelRatio,
        markerWidth / window.devicePixelRatio
      ];
      this.object.setDirty();
    }
  });
})();
//# sourceMappingURL=image-tracking.js.map

WL.registerComponent('Raycast-counter', {}, {
    init: function() {
        console.log('Counting gaze initialized');
        this.origin = [0, 0, 0];
        this.dir = [0, 0, 0];
    },
    update: function() {
        /* Get the translation of this object and store it in "origin" */
        this.object.getTranslationWorld(this.origin);
        /* Get the direction of this object and store it in "dir" */
        this.object.getForward(this.dir);

        /* Send a ray into the scene and see if it hits and object in
           collision group "1" or "2" */
        let rayHit = WL.scene.rayCast(this.origin, this.dir, (1 << 1) | (1 << 2));
        if(rayHit.hitCount > 0) {
            for(let i = 0; i < rayHit.hitCount; ++i) {
                let o = rayHit.objects[i];

                // TODO: We will count up the counter on the
                // hit object here later instead!
                console.log('Raycast hit object:', o.name);
            }
        }
    },
});
WL.registerComponent('test', {
    param: {type: WL.Type.Float, default: 1.0},
}, {
    init: function() {
        console.log('init() with param', this.param);
    },
    start: function() {
        console.log('start() with param', this.param);
    },
    update: function(dt) {
        console.log('update() with delta time', dt);
    },
});

//# sourceMappingURL=mindar-image-tracking-bundle.js.map