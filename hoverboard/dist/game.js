var Yf=0,du=1,Kf=2;var Xs=1,Zf=2,zr=3,xi=0,rn=1,Jt=2,Hn=0,Vi=1,vi=2,fu=3,pu=4,Jf=5;var qs=100,$f=101,jf=102,Qf=103,ep=104,tp=200,np=201,ip=202,sp=203,mu=204,gu=205,rp=206,op=207,ap=208,lp=209,cp=210,hp=211,up=212,dp=213,fp=214,Sl=0,bl=1,Tl=2,Er=3,El=4,wl=5,Al=6,Rl=7,jl=0,pp=1,mp=2,ei=0,ua=1,da=2,fa=3,Ys=4,pa=5,ma=6,ga=7,eu="attached",gp="detached",_u=300,ps=301,Ks=302,Ql=303,ec=304,_a=306,mn=1e3,Un=1001,wr=1002,Vt=1003,tc=1004;var Zs=1005;var Gt=1006,Vr=1007;var ti=1008;var bn=1009,xu=1010,vu=1011,Gr=1012,nc=1013,ni=1014,Cn=1015,$t=1016,ic=1017,sc=1018,Wr=1020,yu=35902,Mu=35899,Su=1021,bu=1022,In=1023,di=1026,ms=1027,rc=1028,oc=1029,gs=1030,ac=1031;var lc=1033,xa=33776,va=33777,ya=33778,Ma=33779,cc=35840,hc=35841,uc=35842,dc=35843,fc=36196,pc=37492,mc=37496,gc=37488,_c=37489,Sa=37490,xc=37491,vc=37808,yc=37809,Mc=37810,Sc=37811,bc=37812,Tc=37813,Ec=37814,wc=37815,Ac=37816,Rc=37817,Cc=37818,Ic=37819,Pc=37820,Lc=37821,Nc=36492,Dc=36494,Uc=36495,Fc=36283,Oc=36284,ba=36285,Bc=36286,_p=2200,xp=2201,vp=2202,Ls=2300,Ns=2301,vl=2302,tu=2303,Cs=2400,Is=2401,Ao=2402,kc=2500,yp=2501,Tu=0,Ta=1,Xr=2,Mp=3200;var Ea=0,Sp=1,Gi="",dt="srgb",gn="srgb-linear",Ro="linear",ft="srgb";var yl=7680;var bp=519,Tp=512,Ep=513,wp=514,Hc=515,Ap=516,Rp=517,zc=518,Cp=519,Eu=35044;var wu="300 es",Jn=2e3,Ar=2001;function lg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function cg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Rr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ip(){let s=Rr("canvas");return s.style.display="block",s}var tf={},Cr=null;function Co(...s){let e="THREE."+s.shift();Cr?Cr("log",e,...s):console.log(e,...s)}function Pp(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ue(...s){s=Pp(s);let e="THREE."+s.shift();if(Cr)Cr("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function We(...s){s=Pp(s);let e="THREE."+s.shift();if(Cr)Cr("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ps(...s){let e=s.join(" ");e in tf||(tf[e]=!0,Ue(...s))}function Lp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Np={[Sl]:bl,[Tl]:Al,[El]:Rl,[Er]:wl,[bl]:Sl,[Al]:Tl,[Rl]:El,[wl]:Er},$n=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nf=1234567,bo=Math.PI/180,Ds=180/Math.PI;function Fn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[s&255]+cn[s>>8&255]+cn[s>>16&255]+cn[s>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function ot(s,e,t){return Math.max(e,Math.min(t,s))}function Au(s,e){return(s%e+e)%e}function hg(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ug(s,e,t){return s!==e?(t-s)/(e-s):0}function To(s,e,t){return(1-t)*s+t*e}function dg(s,e,t,n){return To(s,e,1-Math.exp(-t*n))}function fg(s,e=1){return e-Math.abs(Au(s,e*2)-e)}function pg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function mg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function gg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function _g(s,e){return s+Math.random()*(e-s)}function xg(s){return s*(.5-Math.random())}function vg(s){s!==void 0&&(nf=s);let e=nf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yg(s){return s*bo}function Mg(s){return s*Ds}function Sg(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function bg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Tg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Eg(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*f,a*h,a*c);break;default:Ue("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ru={DEG2RAD:bo,RAD2DEG:Ds,generateUUID:Fn,clamp:ot,euclideanModulo:Au,mapLinear:hg,inverseLerp:ug,lerp:To,damp:dg,pingpong:fg,smoothstep:pg,smootherstep:mg,randInt:gg,randFloat:_g,randFloatSpread:xg,seededRandom:vg,degToRad:yg,radToDeg:Mg,isPowerOfTwo:Sg,ceilPowerOfTwo:bg,floorPowerOfTwo:Tg,setQuaternionFromProperEuler:Eg,normalize:xt,denormalize:Zn},se=class s{static{s.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],m=r[o+2],v=r[o+3];if(u!==v||l!==d||c!==f||h!==m){let g=l*d+c*f+h*m+u*v;g<0&&(d=-d,f=-f,m=-m,v=-v,g=-g);let p=1-a;if(g<.9995){let M=Math.acos(g),T=Math.sin(M);p=Math.sin(p*M)/T,a=Math.sin(a*M)/T,l=l*p+d*a,c=c*p+f*a,h=h*p+m*a,u=u*p+v*a}else{l=l*p+d*a,c=c*p+f*a,h=h*p+m*a,u=u*p+v*a;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{static{s.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wh.copy(this).projectOnVector(e),this.sub(wh)}reflect(e){return this.sub(wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wh=new I,sf=new Dt,$e=class s{static{s.prototype.isMatrix3=!0}constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=i[0],g=i[3],p=i[6],M=i[1],T=i[4],x=i[7],b=i[2],S=i[5],R=i[8];return r[0]=o*v+a*M+l*b,r[3]=o*g+a*T+l*S,r[6]=o*p+a*x+l*R,r[1]=c*v+h*M+u*b,r[4]=c*g+h*T+u*S,r[7]=c*p+h*x+u*R,r[2]=d*v+f*M+m*b,r[5]=d*g+f*T+m*S,r[8]=d*p+f*x+m*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ah.makeScale(e,t)),this}rotate(e){return Ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ah.makeRotation(-e)),this}translate(e,t){return Ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ah.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ah=new $e,rf=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),of=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wg(){let s={enabled:!0,workingColorSpace:gn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ft&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(i.r=Tr(i.r),i.g=Tr(i.g),i.b=Tr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gi?Ro:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[gn]:{primaries:e,whitePoint:n,transfer:Ro,toXYZ:rf,fromXYZ:of,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dt},outputColorSpaceConfig:{drawingBufferColorSpace:dt}},[dt]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:rf,fromXYZ:of,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dt}}}),s}var nt=wg();function Ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Tr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var or,Cl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{or===void 0&&(or=Rr("canvas")),or.width=e.width,or.height=e.height;let i=or.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=or}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Rr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ui(t[n]/255)*255):t[n]=Ui(t[n]);return{data:t,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ag=0,Ir=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Fn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Rh(i[o].image)):r.push(Rh(i[o]))}else r=Rh(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Rh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Cl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}var Rg=0,Ch=new I,Zt=class s extends $n{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Un,i=Un,r=Gt,o=ti,a=In,l=bn,c=s.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=Fn(),this.name="",this.source=new Ir(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ch).x}get height(){return this.source.getSize(Ch).y}get depth(){return this.source.getSize(Ch).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ue(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ue(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_u)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mn:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mn:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=_u;Zt.DEFAULT_ANISOTROPY=1;var yt=class s{static{s.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,x=(f+1)/2,b=(p+1)/2,S=(h+d)/4,R=(u+v)/4,_=(m+g)/4;return T>x&&T>b?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=S/n,r=R/n):x>b?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=S/i,r=_/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=R/r,i=_/r),this.set(n,i,r,t),this}let M=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Il=class extends $n{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new Zt(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ir(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ht=class extends Il{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Io=class extends Zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pl=class extends Zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Je=class s{static{s.prototype.isMatrix4=!0}constructor(e,t,n,i,r,o,a,l,c,h,u,d,f,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,f,m,v,g)}set(e,t,n,i,r,o,a,l,c,h,u,d,f,m,v,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/ar.setFromMatrixColumn(e,0).length(),r=1/ar.setFromMatrixColumn(e,1).length(),o=1/ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,m=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d+v*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d-v*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,m=a*h,v=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,m=a*l,v=a*c;t[0]=l*h,t[4]=v-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-v*u}else if(e.order==="XZY"){let d=o*l,f=o*c,m=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cg,e,Ig)}lookAt(e,t,n){let i=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Qi.crossVectors(n,wn),Qi.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Qi.crossVectors(n,wn)),Qi.normalize(),Ga.crossVectors(wn,Qi),i[0]=Qi.x,i[4]=Ga.x,i[8]=wn.x,i[1]=Qi.y,i[5]=Ga.y,i[9]=wn.y,i[2]=Qi.z,i[6]=Ga.z,i[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],M=n[3],T=n[7],x=n[11],b=n[15],S=i[0],R=i[4],_=i[8],E=i[12],C=i[1],L=i[5],N=i[9],D=i[13],U=i[2],F=i[6],z=i[10],H=i[14],J=i[3],G=i[7],Y=i[11],j=i[15];return r[0]=o*S+a*C+l*U+c*J,r[4]=o*R+a*L+l*F+c*G,r[8]=o*_+a*N+l*z+c*Y,r[12]=o*E+a*D+l*H+c*j,r[1]=h*S+u*C+d*U+f*J,r[5]=h*R+u*L+d*F+f*G,r[9]=h*_+u*N+d*z+f*Y,r[13]=h*E+u*D+d*H+f*j,r[2]=m*S+v*C+g*U+p*J,r[6]=m*R+v*L+g*F+p*G,r[10]=m*_+v*N+g*z+p*Y,r[14]=m*E+v*D+g*H+p*j,r[3]=M*S+T*C+x*U+b*J,r[7]=M*R+T*L+x*F+b*G,r[11]=M*_+T*N+x*z+b*Y,r[15]=M*E+T*D+x*H+b*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],v=e[7],g=e[11],p=e[15],M=l*f-c*d,T=a*f-c*u,x=a*d-l*u,b=o*f-c*h,S=o*d-l*h,R=o*u-a*h;return t*(v*M-g*T+p*x)-n*(m*M-g*b+p*S)+i*(m*T-v*b+p*R)-r*(m*x-v*S+g*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],v=e[13],g=e[14],p=e[15],M=t*a-n*o,T=t*l-i*o,x=t*c-r*o,b=n*l-i*a,S=n*c-r*a,R=i*c-r*l,_=h*v-u*m,E=h*g-d*m,C=h*p-f*m,L=u*g-d*v,N=u*p-f*v,D=d*p-f*g,U=M*D-T*N+x*L+b*C-S*E+R*_;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/U;return e[0]=(a*D-l*N+c*L)*F,e[1]=(i*N-n*D-r*L)*F,e[2]=(v*R-g*S+p*b)*F,e[3]=(d*S-u*R-f*b)*F,e[4]=(l*C-o*D-c*E)*F,e[5]=(t*D-i*C+r*E)*F,e[6]=(g*x-m*R-p*T)*F,e[7]=(h*R-d*x+f*T)*F,e[8]=(o*N-a*C+c*_)*F,e[9]=(n*C-t*N-r*_)*F,e[10]=(m*S-v*x+p*M)*F,e[11]=(u*x-h*S-f*M)*F,e[12]=(a*E-o*L-l*_)*F,e[13]=(t*L-n*E+i*_)*F,e[14]=(v*T-m*b-g*M)*F,e[15]=(h*b-u*T+d*M)*F,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,v=o*h,g=o*u,p=a*u,M=l*c,T=l*h,x=l*u,b=n.x,S=n.y,R=n.z;return i[0]=(1-(v+p))*b,i[1]=(f+x)*b,i[2]=(m-T)*b,i[3]=0,i[4]=(f-x)*S,i[5]=(1-(d+p))*S,i[6]=(g+M)*S,i[7]=0,i[8]=(m+T)*R,i[9]=(g-M)*R,i[10]=(1-(d+v))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=ar.set(i[0],i[1],i[2]).length(),a=ar.set(i[4],i[5],i[6]).length(),l=ar.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Xn.copy(this);let c=1/o,h=1/a,u=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=u,Xn.elements[9]*=u,Xn.elements[10]*=u,t.setFromRotationMatrix(Xn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=Jn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),m,v;if(l)m=r/(o-r),v=o*r/(o-r);else if(a===Jn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Ar)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Jn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),m,v;if(l)m=1/(o-r),v=o/(o-r);else if(a===Jn)m=-2/(o-r),v=-(o+r)/(o-r);else if(a===Ar)m=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ar=new I,Xn=new Je,Cg=new I(0,0,0),Ig=new I(1,1,1),Qi=new I,Ga=new I,wn=new I,af=new Je,lf=new Dt,On=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return af.makeRotationFromQuaternion(e),this.setFromRotationMatrix(af,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lf.setFromEuler(this),this.setFromQuaternion(lf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var Po=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Pg=0,cf=new I,lr=new Dt,Ri=new Je,Wa=new I,ho=new I,Lg=new I,Ng=new Dt,hf=new I(1,0,0),uf=new I(0,1,0),df=new I(0,0,1),ff={type:"added"},Dg={type:"removed"},cr={type:"childadded",child:null},Ih={type:"childremoved",child:null},Et=class s extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new I,t=new On,n=new Dt,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new $e}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.multiply(lr),this}rotateOnWorldAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.premultiply(lr),this}rotateX(e){return this.rotateOnAxis(hf,e)}rotateY(e){return this.rotateOnAxis(uf,e)}rotateZ(e){return this.rotateOnAxis(df,e)}translateOnAxis(e,t){return cf.copy(e).applyQuaternion(this.quaternion),this.position.add(cf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hf,e)}translateY(e){return this.translateOnAxis(uf,e)}translateZ(e){return this.translateOnAxis(df,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wa.copy(e):Wa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(ho,Wa,this.up):Ri.lookAt(Wa,ho,this.up),this.quaternion.setFromRotationMatrix(Ri),i&&(Ri.extractRotation(i.matrixWorld),lr.setFromRotationMatrix(Ri),this.quaternion.premultiply(lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ff),cr.child=e,this.dispatchEvent(cr),cr.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dg),Ih.child=e,this.dispatchEvent(Ih),Ih.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ff),cr.child=e,this.dispatchEvent(cr),cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,e,Lg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,Ng,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Et.DEFAULT_UP=new I(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vt=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ug={type:"move"},Pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ug)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Ph(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=nt.workingColorSpace){if(e=Au(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ph(o,r,e+1/3),this.g=Ph(o,r,e),this.b=Ph(o,r,e-1/3)}return nt.colorSpaceToWorking(this,i),this}setStyle(e,t=dt){function n(r){r!==void 0&&parseFloat(r)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ue("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){let n=Dp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return nt.workingToColorSpace(hn.copy(this),e),Math.round(ot(hn.r*255,0,255))*65536+Math.round(ot(hn.g*255,0,255))*256+Math.round(ot(hn.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(hn.copy(this),t);let n=hn.r,i=hn.g,r=hn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=dt){nt.workingToColorSpace(hn.copy(this),e);let t=hn.r,n=hn.g,i=hn.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(es),this.setHSL(es.h+e,es.s+t,es.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(es),e.getHSL(Xa);let n=To(es.h,Xa.h,t),i=To(es.s,Xa.s,t),r=To(es.l,Xa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new ce;ce.NAMES=Dp;var Lo=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ce(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Us=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},qn=new I,Ci=new I,Lh=new I,Ii=new I,hr=new I,ur=new I,pf=new I,Nh=new I,Dh=new I,Uh=new I,Fh=new yt,Oh=new yt,Bh=new yt,Di=class s{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),qn.subVectors(e,t),i.cross(qn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){qn.subVectors(i,t),Ci.subVectors(n,t),Lh.subVectors(e,t);let o=qn.dot(qn),a=qn.dot(Ci),l=qn.dot(Lh),c=Ci.dot(Ci),h=Ci.dot(Lh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Fh.setScalar(0),Oh.setScalar(0),Bh.setScalar(0),Fh.fromBufferAttribute(e,t),Oh.fromBufferAttribute(e,n),Bh.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Fh,r.x),o.addScaledVector(Oh,r.y),o.addScaledVector(Bh,r.z),o}static isFrontFacing(e,t,n,i){return qn.subVectors(n,t),Ci.subVectors(e,t),qn.cross(Ci).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),qn.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;hr.subVectors(i,n),ur.subVectors(r,n),Nh.subVectors(e,n);let l=hr.dot(Nh),c=ur.dot(Nh);if(l<=0&&c<=0)return t.copy(n);Dh.subVectors(e,i);let h=hr.dot(Dh),u=ur.dot(Dh);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(hr,o);Uh.subVectors(e,r);let f=hr.dot(Uh),m=ur.dot(Uh);if(m>=0&&f<=m)return t.copy(r);let v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(ur,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return pf.subVectors(r,i),a=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(pf,a);let p=1/(g+v+d);return o=v*p,a=d*p,t.copy(n).addScaledVector(hr,o).addScaledVector(ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_n=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(r,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qa.copy(n.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(uo),Ya.subVectors(this.max,uo),dr.subVectors(e.a,uo),fr.subVectors(e.b,uo),pr.subVectors(e.c,uo),ts.subVectors(fr,dr),ns.subVectors(pr,fr),Es.subVectors(dr,pr);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-Es.z,Es.y,ts.z,0,-ts.x,ns.z,0,-ns.x,Es.z,0,-Es.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-Es.y,Es.x,0];return!kh(t,dr,fr,pr,Ya)||(t=[1,0,0,0,1,0,0,0,1],!kh(t,dr,fr,pr,Ya))?!1:(Ka.crossVectors(ts,ns),t=[Ka.x,Ka.y,Ka.z],kh(t,dr,fr,pr,Ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Pi=[new I,new I,new I,new I,new I,new I,new I,new I],Yn=new I,qa=new _n,dr=new I,fr=new I,pr=new I,ts=new I,ns=new I,Es=new I,uo=new I,Ya=new I,Ka=new I,ws=new I;function kh(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ws.fromArray(s,r);let a=i.x*Math.abs(ws.x)+i.y*Math.abs(ws.y)+i.z*Math.abs(ws.z),l=e.dot(ws),c=t.dot(ws),h=n.dot(ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var qt=new I,Za=new se,Fg=0,st=class extends $n{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Eu,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Za.fromBufferAttribute(this,t),Za.applyMatrix3(e),this.setXY(t,Za.x,Za.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var No=class extends st{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Do=class extends st{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ze=class extends st{constructor(e,t,n){super(new Float32Array(e),t,n)}},Og=new _n,fo=new I,Hh=new I,Mn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Og.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fo.subVectors(e,this.center);let t=fo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(fo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fo.copy(e.center).add(Hh)),this.expandByPoint(fo.copy(e.center).sub(Hh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Bg=0,Dn=new Je,zh=new Et,mr=new I,An=new _n,po=new _n,en=new I,et=class s extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lg(e)?Do:No)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return zh.lookAt(e),zh.updateMatrix(),this.applyMatrix4(zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ze(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];po.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(An.min,po.min),An.expandByPoint(en),en.addVectors(An.max,po.max),An.expandByPoint(en)):(An.expandByPoint(po.min),An.expandByPoint(po.max))}An.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)en.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(en));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)en.fromBufferAttribute(a,c),l&&(mr.fromBufferAttribute(e,c),en.add(mr)),i=Math.max(i,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new st(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new I,l[_]=new I;let c=new I,h=new I,u=new I,d=new se,f=new se,m=new se,v=new I,g=new I;function p(_,E,C){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,C),d.fromBufferAttribute(r,_),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,C),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),a[_].add(v),a[E].add(v),a[C].add(v),l[_].add(g),l[E].add(g),l[C].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,E=M.length;_<E;++_){let C=M[_],L=C.start,N=C.count;for(let D=L,U=L+N;D<U;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let T=new I,x=new I,b=new I,S=new I;function R(_){b.fromBufferAttribute(i,_),S.copy(b);let E=a[_];T.copy(E),T.sub(b.multiplyScalar(b.dot(E))).normalize(),x.crossVectors(S,E);let L=x.dot(l[_])<0?-1:1;o.setXYZW(_,T.x,T.y,T.z,L)}for(let _=0,E=M.length;_<E;++_){let C=M[_],L=C.start,N=C.count;for(let D=L,U=L+N;D<U;D+=3)R(e.getX(D+0)),R(e.getX(D+1)),R(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new st(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new st(d,h,u)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Eu,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},pn=new I,rs=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Co("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new st(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Co("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Vh=new I,kg=new I,Hg=new $e,Kn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Vh.subVectors(n,t).cross(kg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Vh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hg.getNormalMatrix(e),i=this.coplanarPoint(Vh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},zg=0,un=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=Vi,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mu,this.blendDst=gu,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yl,this.stencilZFail=yl,this.stencilZPass=yl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ue(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ue(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new se().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new se().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},os=class extends un{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gr,mo=new I,_r=new I,xr=new I,vr=new se,go=new se,Up=new Je,Ja=new I,_o=new I,$a=new I,mf=new se,Gh=new se,gf=new se,Os=class extends Et{constructor(e=new os){if(super(),this.isSprite=!0,this.type="Sprite",gr===void 0){gr=new et;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fs(t,5);gr.setIndex([0,1,2,0,2,3]),gr.setAttribute("position",new rs(n,3,0,!1)),gr.setAttribute("uv",new rs(n,2,3,!1))}this.geometry=gr,this.material=e,this.center=new se(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&We('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_r.setFromMatrixScale(this.matrixWorld),Up.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_r.multiplyScalar(-xr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;ja(Ja.set(-.5,-.5,0),xr,o,_r,i,r),ja(_o.set(.5,-.5,0),xr,o,_r,i,r),ja($a.set(.5,.5,0),xr,o,_r,i,r),mf.set(0,0),Gh.set(1,0),gf.set(1,1);let a=e.ray.intersectTriangle(Ja,_o,$a,!1,mo);if(a===null&&(ja(_o.set(-.5,.5,0),xr,o,_r,i,r),Gh.set(0,1),a=e.ray.intersectTriangle(Ja,$a,_o,!1,mo),a===null))return;let l=e.ray.origin.distanceTo(mo);l<e.near||l>e.far||t.push({distance:l,point:mo.clone(),uv:Di.getInterpolation(mo,Ja,_o,$a,mf,Gh,gf,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ja(s,e,t,n,i,r){vr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(go.x=r*vr.x-i*vr.y,go.y=i*vr.x+r*vr.y):go.copy(vr),s.copy(e),s.x+=go.x,s.y+=go.y,s.applyMatrix4(Up)}var Li=new I,Wh=new I,Qa=new I,el=new I,Bs=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Wh.copy(e).add(t).multiplyScalar(.5),Qa.copy(t).sub(e).normalize(),el.copy(this.origin).sub(Wh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Qa),a=el.dot(this.direction),l=-el.dot(Qa),c=el.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Wh).addScaledVector(Qa,d),f}intersectSphere(e,t){if(e.radius<0)return null;Li.subVectors(e.center,this.origin);let n=Li.dot(this.direction),i=Li.dot(Li)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,m=t.x-o.x,v=t.y-o.y,g=t.z-o.z,p=n.x-o.x,M=n.y-o.y,T=n.z-o.z,x=Math.abs(l),b=Math.abs(c),S=Math.abs(h),R,_,E,C,L,N,D,U,F,z,H,J;if(x>=b&&x>=S?(E=l,N=u,F=m,J=p,l>=0?(R=c,_=h,C=d,L=f,D=v,U=g,z=M,H=T):(R=h,_=c,C=f,L=d,D=g,U=v,z=T,H=M)):b>=S?(E=c,N=d,F=v,J=M,c>=0?(R=h,_=l,C=f,L=u,D=g,U=m,z=T,H=p):(R=l,_=h,C=u,L=f,D=m,U=g,z=p,H=T)):(E=h,N=f,F=g,J=T,h>=0?(R=l,_=c,C=u,L=d,D=m,U=v,z=p,H=M):(R=c,_=l,C=d,L=u,D=v,U=m,z=M,H=p)),E===0)return null;let G=R/E,Y=_/E,j=1/E,ue=C-G*N,he=L-Y*N,Be=D-G*F,Ne=U-Y*F,Xe=z-G*J,Z=H-Y*J,Q=Xe*Ne-Z*Be,Me=ue*Z-he*Xe,qe=Be*he-Ne*ue;if(i){if(Q<0||Me<0||qe<0)return null}else if((Q<0||Me<0||qe<0)&&(Q>0||Me>0||qe>0))return null;let Ee=Q+Me+qe;if(Ee===0)return null;let Ke=j*(Q*N+Me*F+qe*J);return(Ee>0?Ke<0:Ke>0)?null:this.at(Ke/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xn=class extends un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_f=new Je,As=new Bs,tl=new Mn,xf=new I,nl=new I,il=new I,sl=new I,Xh=new I,rl=new I,vf=new I,ol=new I,Ce=class extends Et{constructor(e=new et,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){rl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Xh.fromBufferAttribute(u,e),o?rl.addScaledVector(Xh,h):rl.addScaledVector(Xh.sub(t),h))}t.add(rl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(r),As.copy(e.ray).recast(e.near),!(tl.containsPoint(As.origin)===!1&&(As.intersectSphere(tl,xf)===null||As.origin.distanceToSquared(xf)>(e.far-e.near)**2))&&(_f.copy(r).invert(),As.copy(e.ray).applyMatrix4(_f),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){let g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),T=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=M,b=T;x<b;x+=3){let S=a.getX(x),R=a.getX(x+1),_=a.getX(x+2);i=al(this,p,e,n,c,h,u,S,R,_),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let M=a.getX(g),T=a.getX(g+1),x=a.getX(g+2);i=al(this,o,e,n,c,h,u,M,T,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){let g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),T=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=M,b=T;x<b;x+=3){let S=x,R=x+1,_=x+2;i=al(this,p,e,n,c,h,u,S,R,_),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let M=g,T=g+1,x=g+2;i=al(this,o,e,n,c,h,u,M,T,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function Vg(s,e,t,n,i,r,o,a){let l;if(e.side===rn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===xi,a),l===null)return null;ol.copy(a),ol.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(ol);return c<t.near||c>t.far?null:{distance:c,point:ol.clone(),object:s}}function al(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,nl),s.getVertexPosition(l,il),s.getVertexPosition(c,sl);let h=Vg(s,e,t,n,nl,il,sl,vf);if(h){let u=new I;Di.getBarycoord(vf,nl,il,sl,u),i&&(h.uv=Di.getInterpolatedAttribute(i,a,l,c,u,new se)),r&&(h.uv1=Di.getInterpolatedAttribute(r,a,l,c,u,new se)),o&&(h.normal=Di.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new I,materialIndex:0};Di.getNormal(nl,il,sl,d.normal),h.face=d,h.barycoord=u}return h}var xo=new yt,yf=new yt,Mf=new yt,Gg=new yt,Sf=new Je,ll=new I,qh=new Mn,bf=new Je,Yh=new Bs,Uo=class extends Ce{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=eu,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _n),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ll),this.boundingBox.expandByPoint(ll)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ll),this.boundingSphere.expandByPoint(ll)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qh.copy(this.boundingSphere),qh.applyMatrix4(i),e.ray.intersectsSphere(qh)!==!1&&(bf.copy(i).invert(),Yh.copy(e.ray).applyMatrix4(bf),!(this.boundingBox!==null&&Yh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Yh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===eu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ue("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;yf.fromBufferAttribute(i.attributes.skinIndex,e),Mf.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(xo.copy(t),t.set(0,0,0,0)):(xo.set(...t,1),t.set(0,0,0)),xo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Mf.getComponent(r);if(o!==0){let a=yf.getComponent(r);Sf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Gg.copy(xo).applyMatrix4(Sf),o)}}return t.isVector4&&(t.w=xo.w),t.applyMatrix4(this.bindMatrixInverse)}},Lr=class extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}},Nr=class extends Zt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Vt,h=Vt,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Tf=new Je,Wg=new Je,Fo=class s{constructor(e=[],t=[]){this.uuid=Fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ue("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Wg;Tf.multiplyMatrices(a,t[r]),Tf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Nr(t,e,e,In,Cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(Ue("Skeleton: No bone found with UUID:",r),o=new Lr),this.bones.push(o),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Bn=class extends st{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},yr=new Je,Ef=new Je,cl=[],wf=new _n,Xg=new Je,vo=new Ce,yo=new Mn,Fi=class extends Ce{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Xg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yr),wf.copy(e.boundingBox).applyMatrix4(yr),this.boundingBox.union(wf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yr),yo.copy(e.boundingSphere).applyMatrix4(yr),this.boundingSphere.union(yo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(vo.geometry=this.geometry,vo.material=this.material,vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yo.copy(this.boundingSphere),yo.applyMatrix4(n),e.ray.intersectsSphere(yo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,yr),Ef.multiplyMatrices(n,yr),vo.matrixWorld=Ef,vo.raycast(e,cl);for(let o=0,a=cl.length;o<a;o++){let l=cl[o];l.instanceId=r,l.object=this,t.push(l)}cl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Bn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nr(new Float32Array(i*this.count),i,this.count,rc,Cn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Rs=new Mn,qg=new se(.5,.5),hl=new I,Dr=class{constructor(e=new Kn,t=new Kn,n=new Kn,i=new Kn,r=new Kn,o=new Kn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],v=r[9],g=r[10],p=r[11],M=r[12],T=r[13],x=r[14],b=r[15];if(i[0].setComponents(c-o,f-h,p-m,b-M).normalize(),i[1].setComponents(c+o,f+h,p+m,b+M).normalize(),i[2].setComponents(c+a,f+u,p+v,b+T).normalize(),i[3].setComponents(c-a,f-u,p-v,b-T).normalize(),n)i[4].setComponents(l,d,g,x).normalize(),i[5].setComponents(c-l,f-d,p-g,b-x).normalize();else if(i[4].setComponents(c-l,f-d,p-g,b-x).normalize(),t===Jn)i[5].setComponents(c+l,f+d,p+g,b+x).normalize();else if(t===Ar)i[5].setComponents(l,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){Rs.center.set(0,0,0);let t=qg.distanceTo(e.center);return Rs.radius=.7071067811865476+t,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(hl.x=i.normal.x>0?e.max.x:e.min.x,hl.y=i.normal.y>0?e.max.y:e.min.y,hl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(hl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var as=class extends un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ll=new I,Nl=new I,Af=new Je,Mo=new Bs,ul=new Mn,Kh=new I,Rf=new I,ks=class extends Et{constructor(e=new et,t=new as){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ll.fromBufferAttribute(t,i-1),Nl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ll.distanceTo(Nl);e.setAttribute("lineDistance",new ze(n,1))}else Ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(i),ul.radius+=r,e.ray.intersectsSphere(ul)===!1)return;Af.copy(i).invert(),Mo.copy(e.ray).applyMatrix4(Af);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=c){let p=h.getX(v),M=h.getX(v+1),T=dl(this,e,Mo,l,p,M,v);T&&t.push(T)}if(this.isLineLoop){let v=h.getX(m-1),g=h.getX(f),p=dl(this,e,Mo,l,v,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=c){let p=dl(this,e,Mo,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=dl(this,e,Mo,l,m-1,f,m-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function dl(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(Ll.fromBufferAttribute(a,i),Nl.fromBufferAttribute(a,r),t.distanceSqToSegment(Ll,Nl,Kh,Rf)>n)return;Kh.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Kh);if(!(c<e.near||c>e.far))return{distance:c,point:Rf.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Cf=new I,If=new I,Hs=class extends ks{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Cf.fromBufferAttribute(t,i),If.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Cf.distanceTo(If);e.setAttribute("lineDistance",new ze(n,1))}else Ue("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Oo=class extends ks{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ls=class extends un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Pf=new Je,nu=new Bs,fl=new Mn,pl=new I,cs=class extends Et{constructor(e=new et,t=new ls){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fl.copy(n.boundingSphere),fl.applyMatrix4(i),fl.radius+=r,e.ray.intersectsSphere(fl)===!1)return;Pf.copy(i).invert(),nu.copy(e.ray).applyMatrix4(Pf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,v=f;m<v;m++){let g=c.getX(m);pl.fromBufferAttribute(u,g),Lf(pl,g,l,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,v=f;m<v;m++)pl.fromBufferAttribute(u,m),Lf(pl,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Lf(s,e,t,n,i,r,o){let a=nu.distanceSqToPoint(s);if(a<t){let l=new I;nu.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Bo=class extends Zt{constructor(e=[],t=ps,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},tn=class extends Zt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hs=class extends Zt{constructor(e,t,n=ni,i,r,o,a=Vt,l=Vt,c,h=di,u=1){if(h!==di&&h!==ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ir(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Dl=class extends hs{constructor(e,t=ni,n=ps,i,r,o=Vt,a=Vt,l,c=di){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ko=class extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ut=class s extends et{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(u,2));function m(v,g,p,M,T,x,b,S,R,_,E){let C=x/R,L=b/_,N=x/2,D=b/2,U=S/2,F=R+1,z=_+1,H=0,J=0,G=new I;for(let Y=0;Y<z;Y++){let j=Y*L-D;for(let ue=0;ue<F;ue++){let he=ue*C-N;G[v]=he*M,G[g]=j*T,G[p]=U,c.push(G.x,G.y,G.z),G[v]=0,G[g]=0,G[p]=S>0?1:-1,h.push(G.x,G.y,G.z),u.push(ue/R),u.push(1-Y/_),H+=1}}for(let Y=0;Y<_;Y++)for(let j=0;j<R;j++){let ue=d+j+F*Y,he=d+j+F*(Y+1),Be=d+(j+1)+F*(Y+1),Ne=d+(j+1)+F*Y;l.push(ue,he,Ne),l.push(he,Be,Ne),J+=6}a.addGroup(f,J,E),f+=J,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ho=class s extends et{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,m=n*2+r,v=i+1,g=new I,p=new I;for(let M=0;M<=m;M++){let T=0,x=0,b=0,S=0;if(M<=n){let E=M/n,C=E*Math.PI/2;x=-h-e*Math.cos(C),b=e*Math.sin(C),S=-e*Math.cos(C),T=E*u}else if(M<=n+r){let E=(M-n)/r;x=-h+E*t,b=e,S=0,T=u+E*d}else{let E=(M-n-r)/n,C=E*Math.PI/2;x=h+e*Math.sin(C),b=e*Math.cos(C),S=e*Math.sin(C),T=u+d+E*u}let R=Math.max(0,Math.min(1,T/f)),_=0;M===0?_=.5/i:M===m&&(_=-.5/i);for(let E=0;E<=i;E++){let C=E/i,L=C*Math.PI*2,N=Math.sin(L),D=Math.cos(L);p.x=-b*D,p.y=x,p.z=b*N,a.push(p.x,p.y,p.z),g.set(-b*D,S,b*N),g.normalize(),l.push(g.x,g.y,g.z),c.push(C+_,R)}if(M>0){let E=(M-1)*v;for(let C=0;C<i;C++){let L=E+C,N=E+C+1,D=M*v+C,U=M*v+C+1;o.push(L,N,D),o.push(N,U,D)}}}this.setIndex(o),this.setAttribute("position",new ze(a,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var vn=class s extends et{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,v=[],g=n/2,p=0;M(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ze(u,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(f,2));function M(){let x=new I,b=new I,S=0,R=(t-e)/n;for(let _=0;_<=r;_++){let E=[],C=_/r,L=C*(t-e)+e;for(let N=0;N<=i;N++){let D=N/i,U=D*l+a,F=Math.sin(U),z=Math.cos(U);b.x=L*F,b.y=-C*n+g,b.z=L*z,u.push(b.x,b.y,b.z),x.set(F,R,z).normalize(),d.push(x.x,x.y,x.z),f.push(D,1-C),E.push(m++)}v.push(E)}for(let _=0;_<i;_++)for(let E=0;E<r;E++){let C=v[E][_],L=v[E+1][_],N=v[E+1][_+1],D=v[E][_+1];(e>0||E!==0)&&(h.push(C,L,D),S+=3),(t>0||E!==r-1)&&(h.push(L,N,D),S+=3)}c.addGroup(p,S,0),p+=S}function T(x){let b=m,S=new se,R=new I,_=0,E=x===!0?e:t,C=x===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,g*C,0),d.push(0,C,0),f.push(.5,.5),m++;let L=m;for(let N=0;N<=i;N++){let U=N/i*l+a,F=Math.cos(U),z=Math.sin(U);R.x=E*z,R.y=g*C,R.z=E*F,u.push(R.x,R.y,R.z),d.push(0,C,0),S.x=F*.5+.5,S.y=z*.5*C+.5,f.push(S.x,S.y),m++}for(let N=0;N<i;N++){let D=b+N,U=L+N;x===!0?h.push(U,U+1,D):h.push(U+1,U,D),_+=3}c.addGroup(p,_,x===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zo=class s extends vn{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Vo=class s extends et{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new ze(r,3)),this.setAttribute("normal",new ze(r.slice(),3)),this.setAttribute("uv",new ze(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let T=new I,x=new I,b=new I;for(let S=0;S<t.length;S+=3)f(t[S+0],T),f(t[S+1],x),f(t[S+2],b),l(T,x,b,M)}function l(M,T,x,b){let S=b+1,R=[];for(let _=0;_<=S;_++){R[_]=[];let E=M.clone().lerp(x,_/S),C=T.clone().lerp(x,_/S),L=S-_;for(let N=0;N<=L;N++)N===0&&_===S?R[_][N]=E:R[_][N]=E.clone().lerp(C,N/L)}for(let _=0;_<S;_++)for(let E=0;E<2*(S-_)-1;E++){let C=Math.floor(E/2);E%2===0?(d(R[_][C+1]),d(R[_+1][C]),d(R[_][C])):(d(R[_][C+1]),d(R[_+1][C+1]),d(R[_+1][C]))}}function c(M){let T=new I;for(let x=0;x<r.length;x+=3)T.x=r[x+0],T.y=r[x+1],T.z=r[x+2],T.normalize().multiplyScalar(M),r[x+0]=T.x,r[x+1]=T.y,r[x+2]=T.z}function h(){let M=new I;for(let T=0;T<r.length;T+=3){M.x=r[T+0],M.y=r[T+1],M.z=r[T+2];let x=g(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;o.push(x,1-b)}m(),u()}function u(){for(let M=0;M<o.length;M+=6){let T=o[M+0],x=o[M+2],b=o[M+4],S=Math.max(T,x,b),R=Math.min(T,x,b);S>.9&&R<.1&&(T<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),b<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,T){let x=M*3;T.x=e[x+0],T.y=e[x+1],T.z=e[x+2]}function m(){let M=new I,T=new I,x=new I,b=new I,S=new se,R=new se,_=new se;for(let E=0,C=0;E<r.length;E+=9,C+=6){M.set(r[E+0],r[E+1],r[E+2]),T.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),S.set(o[C+0],o[C+1]),R.set(o[C+2],o[C+3]),_.set(o[C+4],o[C+5]),b.copy(M).add(T).add(x).divideScalar(3);let L=g(b);v(S,C+0,M,L),v(R,C+2,T,L),v(_,C+4,x,L)}}function v(M,T,x,b){b<0&&M.x===1&&(o[T]=M.x-1),x.x===0&&x.z===0&&(o[T]=b/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var Rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ue("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new se:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,i=[],r=[],o=[],a=new I,l=new Je;for(let f=0;f<=e;f++){let m=f/e;i[f]=this.getTangentAt(m,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ot(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(ot(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ur=class extends Rn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new se){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ul=class extends Ur{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Cu(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Nf=new I,Df=new I,Zh=new Cu,Jh=new Cu,$h=new Cu,Fr=class extends Rn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Df.subVectors(i[0],i[1]).add(i[0]),c=Df);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Nf.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Nf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Zh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,v,g),Jh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,v,g),$h.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(Zh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Jh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),$h.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Zh.calc(l),Jh.calc(l),$h.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Uf(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Yg(s,e){let t=1-s;return t*t*e}function Kg(s,e){return 2*(1-s)*s*e}function Zg(s,e){return s*s*e}function Eo(s,e,t,n){return Yg(s,e)+Kg(s,t)+Zg(s,n)}function Jg(s,e){let t=1-s;return t*t*t*e}function $g(s,e){let t=1-s;return 3*t*t*s*e}function jg(s,e){return 3*(1-s)*s*s*e}function Qg(s,e){return s*s*s*e}function wo(s,e,t,n,i){return Jg(s,e)+$g(s,t)+jg(s,n)+Qg(s,i)}var Go=class extends Rn{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wo(e,i.x,r.x,o.x,a.x),wo(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fl=class extends Rn{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wo(e,i.x,r.x,o.x,a.x),wo(e,i.y,r.y,o.y,a.y),wo(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wo=class extends Rn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ol=class extends Rn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xo=class extends Rn{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Eo(e,i.x,r.x,o.x),Eo(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qo=class extends Rn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Eo(e,i.x,r.x,o.x),Eo(e,i.y,r.y,o.y),Eo(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yo=class extends Rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Uf(a,l.x,c.x,h.x,u.x),Uf(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new se().fromArray(i))}return this}},Bl=Object.freeze({__proto__:null,ArcCurve:Ul,CatmullRomCurve3:Fr,CubicBezierCurve:Go,CubicBezierCurve3:Fl,EllipseCurve:Ur,LineCurve:Wo,LineCurve3:Ol,QuadraticBezierCurve:Xo,QuadraticBezierCurve3:qo,SplineCurve:Yo}),kl=class extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Bl[i.type]().fromJSON(i))}return this}},Ko=class extends kl{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Wo(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Xo(this.currentPoint.clone(),new se(e,t),new se(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new Go(this.currentPoint.clone(),new se(e,t),new se(n,i),new se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Yo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new Ur(e,t,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},kn=class extends Ko{constructor(e){super(e),this.uuid=Fn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Ko().fromJSON(i))}return this}};function e0(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Fp(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=r0(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let h=a,u=l;for(let d=t;d<i;d+=t){let f=s[d],m=s[d+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Zo(r,o,t,a,l,c,0),o}function Fp(s,e,t,n,i){let r;if(i===g0(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=Ff(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Ff(o/n|0,s[o],s[o+1],r);return r&&Or(r,r.next)&&($o(r),r=r.next),r}function zs(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Or(t,t.next)||kt(t.prev,t,t.next)===0)){if($o(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Zo(s,e,t,n,i,r,o){if(!s)return;!o&&r&&h0(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?n0(s,n,i,r):t0(s)){e.push(l.i,s.i,c.i),$o(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=i0(zs(s),e),Zo(s,e,t,n,i,r,2)):o===2&&s0(s,e,t,n,i,r):Zo(zs(s),e,t,n,i,r,1);break}}}function t0(s){let e=s.prev,t=s,n=s.next;if(kt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),d=Math.max(i,r,o),f=Math.max(a,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&So(i,a,r,l,o,c,m.x,m.y)&&kt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function n0(s,e,t,n){let i=s.prev,r=s,o=s.next;if(kt(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=Math.min(a,l,c),m=Math.min(h,u,d),v=Math.max(a,l,c),g=Math.max(h,u,d),p=iu(f,m,e,t,n),M=iu(v,g,e,t,n),T=s.prevZ,x=s.nextZ;for(;T&&T.z>=p&&x&&x.z<=M;){if(T.x>=f&&T.x<=v&&T.y>=m&&T.y<=g&&T!==i&&T!==o&&So(a,h,l,u,c,d,T.x,T.y)&&kt(T.prev,T,T.next)>=0||(T=T.prevZ,x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&So(a,h,l,u,c,d,x.x,x.y)&&kt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;T&&T.z>=p;){if(T.x>=f&&T.x<=v&&T.y>=m&&T.y<=g&&T!==i&&T!==o&&So(a,h,l,u,c,d,T.x,T.y)&&kt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&So(a,h,l,u,c,d,x.x,x.y)&&kt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function i0(s,e){let t=s;do{let n=t.prev,i=t.next.next;!Or(n,i)&&Bp(n,t,t.next,i)&&Jo(n,i)&&Jo(i,n)&&(e.push(n.i,t.i,i.i),$o(t),$o(t.next),t=s=i),t=t.next}while(t!==s);return zs(t)}function s0(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&f0(o,a)){let l=kp(o,a);o=zs(o,o.next),l=zs(l,l.next),Zo(o,e,t,n,i,r,0),Zo(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function r0(s,e,t,n){let i=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Fp(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(d0(c))}i.sort(o0);for(let r=0;r<i.length;r++)t=a0(i[r],t);return t}function o0(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function a0(s,e){let t=l0(s,e);if(!t)return e;let n=kp(t,s);return zs(n,n.next),zs(t,t.next)}function l0(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;if(Or(s,t))return t;do{if(Or(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Op(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);Jo(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&c0(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function c0(s,e){return kt(s.prev,s,e.prev)<0&&kt(e.next,s,s.next)<0}function h0(s,e,t,n){let i=s;do i.z===0&&(i.z=iu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,u0(i)}function u0(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function iu(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function d0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Op(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function So(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&Op(s,e,t,n,i,r,o,a)}function f0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!p0(s,e)&&(Jo(s,e)&&Jo(e,s)&&m0(s,e)&&(kt(s.prev,s,e.prev)||kt(s,e.prev,e))||Or(s,e)&&kt(s.prev,s,s.next)>0&&kt(e.prev,e,e.next)>0)}function kt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Or(s,e){return s.x===e.x&&s.y===e.y}function Bp(s,e,t,n){let i=gl(kt(s,e,t)),r=gl(kt(s,e,n)),o=gl(kt(t,n,s)),a=gl(kt(t,n,e));return!!(i!==r&&o!==a||i===0&&ml(s,t,e)||r===0&&ml(s,n,e)||o===0&&ml(t,s,n)||a===0&&ml(t,e,n))}function ml(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function gl(s){return s>0?1:s<0?-1:0}function p0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Bp(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Jo(s,e){return kt(s.prev,s,s.next)<0?kt(s,e,s.next)>=0&&kt(s,s.prev,e)>=0:kt(s,e,s.prev)<0||kt(s,s.next,e)<0}function m0(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function kp(s,e){let t=su(s.i,s.x,s.y),n=su(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ff(s,e,t,n){let i=su(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function $o(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function su(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function g0(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var ru=class{static triangulate(e,t,n=2){return e0(e,t,n)}},hi=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Of(e),Bf(n,e);let o=e.length;t.forEach(Of);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Bf(n,t[l]);let a=ru.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Of(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Bf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Vs=class s extends et{constructor(e=new kn([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ze(i,3)),this.setAttribute("uv",new ze(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:_0,T,x=!1,b,S,R,_;if(p){T=p.getSpacedPoints(h),x=!0,d=!1;let ie=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(h,ie),S=new I,R=new I,_=new I}d||(g=0,f=0,m=0,v=0);let E=a.extractPoints(c),C=E.shape,L=E.holes;if(!hi.isClockWise(C)){C=C.reverse();for(let ie=0,oe=L.length;ie<oe;ie++){let ae=L[ie];hi.isClockWise(ae)&&(L[ie]=ae.reverse())}}function D(ie){let ae=10000000000000001e-36,le=ie[0];for(let pe=1;pe<=ie.length;pe++){let Ve=pe%ie.length,He=ie[Ve],Ze=He.x-le.x,je=He.y-le.y,O=Ze*Ze+je*je,pt=Math.max(Math.abs(He.x),Math.abs(He.y),Math.abs(le.x),Math.abs(le.y)),lt=ae*pt*pt;if(O<=lt){ie.splice(Ve,1),pe--;continue}le=He}}D(C),L.forEach(D);let U=L.length,F=C;for(let ie=0;ie<U;ie++){let oe=L[ie];C=C.concat(oe)}function z(ie,oe,ae){return oe||We("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(oe,ae)}let H=C.length;function J(ie,oe,ae){let le,pe,Ve,He=ie.x-oe.x,Ze=ie.y-oe.y,je=ae.x-ie.x,O=ae.y-ie.y,pt=He*He+Ze*Ze,lt=He*O-Ze*je;if(Math.abs(lt)>Number.EPSILON){let P=Math.sqrt(pt),y=Math.sqrt(je*je+O*O),V=oe.x-Ze/P,q=oe.y+He/P,$=ae.x-O/y,de=ae.y+je/y,fe=(($-V)*O-(de-q)*je)/(He*O-Ze*je);le=V+He*fe-ie.x,pe=q+Ze*fe-ie.y;let ee=le*le+pe*pe;if(ee<=2)return new se(le,pe);Ve=Math.sqrt(ee/2)}else{let P=!1;He>Number.EPSILON?je>Number.EPSILON&&(P=!0):He<-Number.EPSILON?je<-Number.EPSILON&&(P=!0):Math.sign(Ze)===Math.sign(O)&&(P=!0),P?(le=-Ze,pe=He,Ve=Math.sqrt(pt)):(le=He,pe=Ze,Ve=Math.sqrt(pt/2))}return new se(le/Ve,pe/Ve)}let G=[];for(let ie=0,oe=F.length,ae=oe-1,le=ie+1;ie<oe;ie++,ae++,le++)ae===oe&&(ae=0),le===oe&&(le=0),G[ie]=J(F[ie],F[ae],F[le]);let Y=[],j,ue=G.concat();for(let ie=0,oe=U;ie<oe;ie++){let ae=L[ie];j=[];for(let le=0,pe=ae.length,Ve=pe-1,He=le+1;le<pe;le++,Ve++,He++)Ve===pe&&(Ve=0),He===pe&&(He=0),j[le]=J(ae[le],ae[Ve],ae[He]);Y.push(j),ue=ue.concat(j)}let he;if(g===0)he=hi.triangulateShape(F,L);else{let ie=[],oe=[];for(let ae=0;ae<g;ae++){let le=ae/g,pe=f*Math.cos(le*Math.PI/2),Ve=m*Math.sin(le*Math.PI/2)+v;for(let He=0,Ze=F.length;He<Ze;He++){let je=z(F[He],G[He],Ve);Me(je.x,je.y,-pe),le===0&&ie.push(je)}for(let He=0,Ze=U;He<Ze;He++){let je=L[He];j=Y[He];let O=[];for(let pt=0,lt=je.length;pt<lt;pt++){let P=z(je[pt],j[pt],Ve);Me(P.x,P.y,-pe),le===0&&O.push(P)}le===0&&oe.push(O)}}he=hi.triangulateShape(ie,oe)}let Be=he.length,Ne=m+v;for(let ie=0;ie<H;ie++){let oe=d?z(C[ie],ue[ie],Ne):C[ie];x?(R.copy(b.normals[0]).multiplyScalar(oe.x),S.copy(b.binormals[0]).multiplyScalar(oe.y),_.copy(T[0]).add(R).add(S),Me(_.x,_.y,_.z)):Me(oe.x,oe.y,0)}for(let ie=1;ie<=h;ie++)for(let oe=0;oe<H;oe++){let ae=d?z(C[oe],ue[oe],Ne):C[oe];x?(R.copy(b.normals[ie]).multiplyScalar(ae.x),S.copy(b.binormals[ie]).multiplyScalar(ae.y),_.copy(T[ie]).add(R).add(S),Me(_.x,_.y,_.z)):Me(ae.x,ae.y,u/h*ie)}for(let ie=g-1;ie>=0;ie--){let oe=ie/g,ae=f*Math.cos(oe*Math.PI/2),le=m*Math.sin(oe*Math.PI/2)+v;for(let pe=0,Ve=F.length;pe<Ve;pe++){let He=z(F[pe],G[pe],le);Me(He.x,He.y,u+ae)}for(let pe=0,Ve=L.length;pe<Ve;pe++){let He=L[pe];j=Y[pe];for(let Ze=0,je=He.length;Ze<je;Ze++){let O=z(He[Ze],j[Ze],le);x?Me(O.x,O.y+T[h-1].y,T[h-1].x+ae):Me(O.x,O.y,u+ae)}}}Xe(),Z();function Xe(){let ie=i.length/3;if(d){let oe=0,ae=H*oe;for(let le=0;le<Be;le++){let pe=he[le];qe(pe[2]+ae,pe[1]+ae,pe[0]+ae)}oe=h+g*2,ae=H*oe;for(let le=0;le<Be;le++){let pe=he[le];qe(pe[0]+ae,pe[1]+ae,pe[2]+ae)}}else{for(let oe=0;oe<Be;oe++){let ae=he[oe];qe(ae[2],ae[1],ae[0])}for(let oe=0;oe<Be;oe++){let ae=he[oe];qe(ae[0]+H*h,ae[1]+H*h,ae[2]+H*h)}}n.addGroup(ie,i.length/3-ie,0)}function Z(){let ie=i.length/3,oe=0;Q(F,oe),oe+=F.length;for(let ae=0,le=L.length;ae<le;ae++){let pe=L[ae];Q(pe,oe),oe+=pe.length}n.addGroup(ie,i.length/3-ie,1)}function Q(ie,oe){let ae=ie.length;for(;--ae>=0;){let le=ae,pe=ae-1;pe<0&&(pe=ie.length-1);for(let Ve=0,He=h+g*2;Ve<He;Ve++){let Ze=H*Ve,je=H*(Ve+1),O=oe+le+Ze,pt=oe+pe+Ze,lt=oe+pe+je,P=oe+le+je;Ee(O,pt,lt,P)}}}function Me(ie,oe,ae){l.push(ie),l.push(oe),l.push(ae)}function qe(ie,oe,ae){Ke(ie),Ke(oe),Ke(ae);let le=i.length/3,pe=M.generateTopUV(n,i,le-3,le-2,le-1);_t(pe[0]),_t(pe[1]),_t(pe[2])}function Ee(ie,oe,ae,le){Ke(ie),Ke(oe),Ke(le),Ke(oe),Ke(ae),Ke(le);let pe=i.length/3,Ve=M.generateSideWallUV(n,i,pe-6,pe-3,pe-2,pe-1);_t(Ve[0]),_t(Ve[1]),_t(Ve[3]),_t(Ve[1]),_t(Ve[2]),_t(Ve[3])}function Ke(ie){i.push(l[ie*3+0]),i.push(l[ie*3+1]),i.push(l[ie*3+2])}function _t(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return x0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Bl[i.type]().fromJSON(i)),new s(n,e.options)}},_0={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new se(r,o),new se(a,l),new se(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],v=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new se(o,1-l),new se(c,1-u),new se(d,1-m),new se(v,1-p)]:[new se(a,1-l),new se(h,1-u),new se(f,1-m),new se(g,1-p)]}};function x0(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var jn=class s extends Vo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var jo=class s extends Vo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Qn=class s extends et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){let M=p*d-o;for(let T=0;T<c;T++){let x=T*u-r;m.push(x,-M,0),v.push(0,0,1),g.push(T/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let T=M+c*p,x=M+c*(p+1),b=M+1+c*(p+1),S=M+1+c*p;f.push(T,x,S),f.push(x,b,S)}this.setIndex(f),this.setAttribute("position",new ze(m,3)),this.setAttribute("normal",new ze(v,3)),this.setAttribute("uv",new ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var us=class s extends et{constructor(e=new kn([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ze(i,3)),this.setAttribute("normal",new ze(r,3)),this.setAttribute("uv",new ze(o,2));function c(h){let u=i.length/3,d=h.extractPoints(t),f=d.shape,m=d.holes;hi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let M=m[g];hi.isClockWise(M)===!0&&(m[g]=M.reverse())}let v=hi.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let M=m[g];f=f.concat(M)}for(let g=0,p=f.length;g<p;g++){let M=f[g];i.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let g=0,p=v.length;g<p;g++){let M=v[g],T=M[0]+u,x=M[1]+u,b=M[2]+u;n.push(T,x,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return v0(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function v0(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var fi=class s extends et{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,d=new I,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let M=[],T=p/n,x=o+T*a,b=e*Math.cos(x),S=Math.sqrt(e*e-b*b),R=0;p===0&&o===0?R=.5/t:p===n&&l===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){let E=_/t,C=i+E*r;u.x=-S*Math.cos(C),u.y=b,u.z=S*Math.sin(C),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(E+R,1-T),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let T=h[p][M+1],x=h[p][M],b=h[p+1][M],S=h[p+1][M+1];(p!==0||o>0)&&f.push(T,x,S),(p!==n-1||l<Math.PI)&&f.push(x,b,S)}this.setIndex(f),this.setAttribute("position",new ze(m,3)),this.setAttribute("normal",new ze(v,3)),this.setAttribute("uv",new ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var pi=class s extends et{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],d=new I,f=new I,m=new I;for(let v=0;v<=n;v++){let g=o+v/n*a;for(let p=0;p<=i;p++){let M=p/i*r;f.x=(e+t*Math.cos(g))*Math.cos(M),f.y=(e+t*Math.cos(g))*Math.sin(M),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(p/i),u.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=i;g++){let p=(i+1)*v+g-1,M=(i+1)*(v-1)+g-1,T=(i+1)*(v-1)+g,x=(i+1)*v+g;l.push(p,M,x),l.push(M,T,x)}this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Qo=class s extends et{constructor(e=new qo(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new se,h=new I,u=[],d=[],f=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new ze(u,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(f,2));function v(){for(let T=0;T<t;T++)g(T);g(r===!1?t:0),M(),p()}function g(T){h=e.getPointAt(T/t,h);let x=o.normals[T],b=o.binormals[T];for(let S=0;S<=i;S++){let R=S/i*Math.PI*2,_=Math.sin(R),E=-Math.cos(R);l.x=E*x.x+_*b.x,l.y=E*x.y+_*b.y,l.z=E*x.z+_*b.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let T=1;T<=t;T++)for(let x=1;x<=i;x++){let b=(i+1)*(T-1)+(x-1),S=(i+1)*T+(x-1),R=(i+1)*T+x,_=(i+1)*(T-1)+x;m.push(b,S,_),m.push(S,R,_)}}function M(){for(let T=0;T<=t;T++)for(let x=0;x<=i;x++)c.x=T/t,c.y=x/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Bl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Js(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(kf(i))i.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(kf(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function dn(s){let e={};for(let t=0;t<s.length;t++){let n=Js(s[t]);for(let i in n)e[i]=n[i]}return e}function kf(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function y0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Iu(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var Wi={clone:Js,merge:dn},M0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,S0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,It=class extends un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M0,this.fragmentShader=S0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=y0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new ce().setHex(i.value);break;case"v2":this.uniforms[n].value=new se().fromArray(i.value);break;case"v3":this.uniforms[n].value=new I().fromArray(i.value);break;case"v4":this.uniforms[n].value=new yt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new $e().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Je().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Br=class extends It{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qe=class extends un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ea,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},sn=class extends Qe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ea=class extends un{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ea,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=jl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Hl=class extends un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zl=class extends un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ss(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Ml(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function b0(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Hf(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function T0(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var mi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Vl=class extends mi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cs,endingEnd:Cs}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Is:r=e,a=2*t-n;break;case Ao:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Is:o=e,l=2*n-t;break;case Ao:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),v=m*m,g=v*m,p=-d*g+2*d*v-d*m,M=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*m+1,T=(-1-f)*g+(1.5+f)*v+.5*m,x=f*g-f*v;for(let b=0;b!==a;++b)r[b]=p*o[h+b]+M*o[c+b]+T*o[l+b]+x*o[u+b];return r}},ta=class extends mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Gl=class extends mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Wl=class extends mi{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(i-t),v=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*v+o[l+g]*m;return r}let d=a*2,f=e-1;for(let m=0;m!==a;++m){let v=o[c+m],g=o[l+m],p=f*d+m*2,M=u[p],T=u[p+1],x=e*d+m*2,b=h[x],S=h[x+1],R=w0(n,t,M,b,i);r[m]=Hp(R,v,T,S,g)}return r}};function Hp(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function E0(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function w0(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){let a=Hp(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;let l=E0(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Sn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ss(t,this.TimeBufferType),this.values=ss(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ss(e.times,Array),values:ss(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Ml(e.settings)&&(n.settings={inTangents:ss(e.settings.inTangents,Array),outTangents:ss(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Wl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ls:t=this.InterpolantFactoryMethodDiscrete;break;case Ns:t=this.InterpolantFactoryMethodLinear;break;case vl:t=this.InterpolantFactoryMethodSmooth;break;case tu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ue("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ls;case this.InterpolantFactoryMethodLinear:return Ns;case this.InterpolantFactoryMethodSmooth:return vl;case this.InterpolantFactoryMethodBezier:return tu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Ml(this.settings)&&(zf(this.settings.inTangents,e),zf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){We("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&cg(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===vl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let v=t[u+m];if(v!==t[d+m]||v!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Ml(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function zf(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Ns;var Oi=class extends Sn{constructor(e,t,n){super(e,t,n)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Ls;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var na=class extends Sn{constructor(e,t,n,i){super(e,t,n,i)}};na.prototype.ValueTypeName="color";var Bi=class extends Sn{constructor(e,t,n,i){super(e,t,n,i)}};Bi.prototype.ValueTypeName="number";var Xl=class extends mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)Dt.slerpFlat(r,0,o,c-a,o,c,l);return r}},ki=class extends Sn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Xl(this.times,this.values,this.getValueSize(),e)}};ki.prototype.ValueTypeName="quaternion";ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends Sn{constructor(e,t,n){super(e,t,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Ls;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends Sn{constructor(e,t,n,i){super(e,t,n,i)}};ds.prototype.ValueTypeName="vector";var Gs=class{constructor(e="",t=-1,n=[],i=kc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Fn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(R0(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Sn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=b0(l);l=Hf(l,1,h),c=Hf(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Bi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function A0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Bi;case"vector":case"vector2":case"vector3":case"vector4":return ds;case"color":return na;case"quaternion":return ki;case"bool":case"boolean":return Oi;case"string":return Hi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function R0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=A0(s.type);if(s.times===void 0){let n=[],i=[];T0(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Ml(s.settings)&&(t.settings={inTangents:ss(s.settings.inTangents,Float32Array),outTangents:ss(s.settings.outTangents,Float32Array)}),t}var ui={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Vf(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Vf(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Vf(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ql=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zp=new ql,gi=class{constructor(e){this.manager=e!==void 0?e:zp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};gi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ni={},ou=class extends Error{constructor(e,t){super(e),this.response=t}},kr=class extends gi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ui.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ni[e]!==void 0){Ni[e].push({onLoad:t,onProgress:n,onError:i});return}Ni[e]=[],Ni[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ue("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ni[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,v=0,g=new ReadableStream({start(p){M();function M(){u.read().then(({done:T,value:x})=>{if(T)p.close();else{v+=x.byteLength;let b=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let S=0,R=h.length;S<R;S++){let _=h[S];_.onProgress&&_.onProgress(b)}p.enqueue(x),M()}},T=>{p.error(T)})}}});return new Response(g)}else throw new ou(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{ui.add(`file:${e}`,c);let h=Ni[e];delete Ni[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Ni[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ni[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Mr=new WeakMap,Yl=class extends gi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ui.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Mr.get(o);u===void 0&&(u=[],Mr.set(o,u)),u.push({onLoad:t,onError:i})}return o}let a=Rr("img");function l(){h(),t&&t(this);let u=Mr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Mr.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),ui.remove(`image:${e}`);let d=Mr.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}Mr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ui.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var ia=class extends gi{constructor(e){super(e)}load(e,t,n,i){let r=new Zt,o=new Yl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Ws=class extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},sa=class extends Ws{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},jh=new Je,Gf=new I,Wf=new I,Hr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dr,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Gf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gf),Wf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){jh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(jh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Ar||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(jh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_l=new I,xl=new Dt,ci=new I,ra=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_l,xl,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_l,xl,ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(_l,xl,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_l,xl,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},is=new I,Xf=new se,qf=new se,Yt=class extends ra{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,Xf,qf),t.subVectors(qf,Xf)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(bo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},au=class extends Hr{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ds*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},oa=class extends Ws{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new au}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},lu=class extends Hr{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0}},aa=class extends Ws{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new lu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},_i=class extends ra{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},cu=class extends Hr{constructor(){super(new _i(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fs=class extends Ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new cu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var zi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Qh=new WeakMap,la=class extends gi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ue("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ue("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ui.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Qh.has(o)===!0?(i&&i(Qh.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ui.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Qh.set(l,c),ui.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ui.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Sr=-90,br=1,Kl=class extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Yt(Sr,br,e,t);i.layers=this.layers,this.add(i);let r=new Yt(Sr,br,e,t);r.layers=this.layers,this.add(r);let o=new Yt(Sr,br,e,t);o.layers=this.layers,this.add(o);let a=new Yt(Sr,br,e,t);a.layers=this.layers,this.add(a);let l=new Yt(Sr,br,e,t);l.layers=this.layers,this.add(l);let c=new Yt(Sr,br,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Zl=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ca=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=C0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function C0(){this._document.hidden===!1&&this.reset()}var Jl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Dt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;Dt.multiplyQuaternionsFlat(e,o,e,t,e,n),Dt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Pu="\\[\\]\\.:\\/",I0=new RegExp("["+Pu+"]","g"),Lu="[^"+Pu+"]",P0="[^"+Pu.replace("\\.","")+"]",L0=/((?:WC+[\/:])*)/.source.replace("WC",Lu),N0=/(WCOD+)?/.source.replace("WCOD",P0),D0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lu),U0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lu),F0=new RegExp("^"+L0+N0+D0+U0+"$"),O0=["material","materials","bones","map"],hu=class{constructor(e,t,n){let i=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(I0,"")}static parseTrackName(e){let t=F0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);O0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ue("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=hu;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $l=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Cs,endingEnd:Cs};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=xp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case yp:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case kc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===vp;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===_p){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Is,i.endingEnd=Is):(e?i.endingStart=this.zeroSlopeAtStart?Is:Cs:i.endingStart=Ao,t?i.endingEnd=this.zeroSlopeAtEnd?Is:Cs:i.endingEnd=Ao)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},B0=new Float32Array(1),ha=class extends $n{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=i[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}let v=t&&t._propertyBindings[u].binding.parsedPath;m=new Jl(bt.create(n,f,v),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ta(new Float32Array(2),new Float32Array(2),1,B0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?Gs.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=kc),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new $l(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Gs.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var uu=class s{static{s.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};function Nu(s,e,t,n){let i=k0(n);switch(t){case Su:return s*e;case rc:return s*e/i.components*i.byteLength;case oc:return s*e/i.components*i.byteLength;case gs:return s*e*2/i.components*i.byteLength;case ac:return s*e*2/i.components*i.byteLength;case bu:return s*e*3/i.components*i.byteLength;case In:return s*e*4/i.components*i.byteLength;case lc:return s*e*4/i.components*i.byteLength;case xa:case va:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ya:case Ma:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hc:case dc:return Math.max(s,16)*Math.max(e,8)/4;case cc:case uc:return Math.max(s,8)*Math.max(e,8)/2;case fc:case pc:case gc:case _c:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case mc:case Sa:case xc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case bc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case wc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Pc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Nc:case Dc:case Uc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Fc:case Oc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ba:case Bc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function k0(s){switch(s){case bn:case xu:return{byteLength:1,components:1};case Gr:case vu:case $t:return{byteLength:2,components:1};case ic:case sc:return{byteLength:2,components:4};case ni:case nc:case Cn:return{byteLength:4,components:1};case yu:case Mu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function cm(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function z0(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let v=u[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var V0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,W0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Z0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,t_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,n_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,l_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,c_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,h_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,u_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,d_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,f_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,p_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,__=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x_="gl_FragColor = linearToOutputTexel( gl_FragColor );",v_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,S_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,b_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,E_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,I_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,D_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,U_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,k_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,H_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,z_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,V_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,G_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,X_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,j_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ix=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ox=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ax=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ux=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,px=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_x=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,xx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ex=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ax=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ix=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Px=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ux=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ox=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$x=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ev=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ov=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,av=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_v=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:V0,alphahash_pars_fragment:G0,alphamap_fragment:W0,alphamap_pars_fragment:X0,alphatest_fragment:q0,alphatest_pars_fragment:Y0,aomap_fragment:K0,aomap_pars_fragment:Z0,batching_pars_vertex:J0,batching_vertex:$0,begin_vertex:j0,beginnormal_vertex:Q0,bsdfs:e_,iridescence_fragment:t_,bumpmap_pars_fragment:n_,clipping_planes_fragment:i_,clipping_planes_pars_fragment:s_,clipping_planes_pars_vertex:r_,clipping_planes_vertex:o_,color_fragment:a_,color_pars_fragment:l_,color_pars_vertex:c_,color_vertex:h_,common:u_,cube_uv_reflection_fragment:d_,defaultnormal_vertex:f_,displacementmap_pars_vertex:p_,displacementmap_vertex:m_,emissivemap_fragment:g_,emissivemap_pars_fragment:__,colorspace_fragment:x_,colorspace_pars_fragment:v_,envmap_fragment:y_,envmap_common_pars_fragment:M_,envmap_pars_fragment:S_,envmap_pars_vertex:b_,envmap_physical_pars_fragment:D_,envmap_vertex:T_,fog_vertex:E_,fog_pars_vertex:w_,fog_fragment:A_,fog_pars_fragment:R_,gradientmap_pars_fragment:C_,lightmap_pars_fragment:I_,lights_lambert_fragment:P_,lights_lambert_pars_fragment:L_,lights_pars_begin:N_,lights_toon_fragment:U_,lights_toon_pars_fragment:F_,lights_phong_fragment:O_,lights_phong_pars_fragment:B_,lights_physical_fragment:k_,lights_physical_pars_fragment:H_,lights_fragment_begin:z_,lights_fragment_maps:V_,lights_fragment_end:G_,lightprobes_pars_fragment:W_,logdepthbuf_fragment:X_,logdepthbuf_pars_fragment:q_,logdepthbuf_pars_vertex:Y_,logdepthbuf_vertex:K_,map_fragment:Z_,map_pars_fragment:J_,map_particle_fragment:$_,map_particle_pars_fragment:j_,metalnessmap_fragment:Q_,metalnessmap_pars_fragment:ex,morphinstance_vertex:tx,morphcolor_vertex:nx,morphnormal_vertex:ix,morphtarget_pars_vertex:sx,morphtarget_vertex:rx,normal_fragment_begin:ox,normal_fragment_maps:ax,normal_pars_fragment:lx,normal_pars_vertex:cx,normal_vertex:hx,normalmap_pars_fragment:ux,clearcoat_normal_fragment_begin:dx,clearcoat_normal_fragment_maps:fx,clearcoat_pars_fragment:px,iridescence_pars_fragment:mx,opaque_fragment:gx,packing:_x,premultiplied_alpha_fragment:xx,project_vertex:vx,dithering_fragment:yx,dithering_pars_fragment:Mx,roughnessmap_fragment:Sx,roughnessmap_pars_fragment:bx,shadowmap_pars_fragment:Tx,shadowmap_pars_vertex:Ex,shadowmap_vertex:wx,shadowmask_pars_fragment:Ax,skinbase_vertex:Rx,skinning_pars_vertex:Cx,skinning_vertex:Ix,skinnormal_vertex:Px,specularmap_fragment:Lx,specularmap_pars_fragment:Nx,tonemapping_fragment:Dx,tonemapping_pars_fragment:Ux,transmission_fragment:Fx,transmission_pars_fragment:Ox,uv_pars_fragment:Bx,uv_pars_vertex:kx,uv_vertex:Hx,worldpos_vertex:zx,background_vert:Vx,background_frag:Gx,backgroundCube_vert:Wx,backgroundCube_frag:Xx,cube_vert:qx,cube_frag:Yx,depth_vert:Kx,depth_frag:Zx,distance_vert:Jx,distance_frag:$x,equirect_vert:jx,equirect_frag:Qx,linedashed_vert:ev,linedashed_frag:tv,meshbasic_vert:nv,meshbasic_frag:iv,meshlambert_vert:sv,meshlambert_frag:rv,meshmatcap_vert:ov,meshmatcap_frag:av,meshnormal_vert:lv,meshnormal_frag:cv,meshphong_vert:hv,meshphong_frag:uv,meshphysical_vert:dv,meshphysical_frag:fv,meshtoon_vert:pv,meshtoon_frag:mv,points_vert:gv,points_frag:_v,shadow_vert:xv,shadow_frag:vv,sprite_vert:yv,sprite_frag:Mv},ye={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Mi={basic:{uniforms:dn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:dn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ce(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:dn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:dn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:dn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ce(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:dn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:dn([ye.points,ye.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:dn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:dn([ye.common,ye.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:dn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:dn([ye.sprite,ye.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:dn([ye.common,ye.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:dn([ye.lights,ye.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Mi.physical={uniforms:dn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var Vc={r:0,b:0,g:0},Sv=new Je,hm=new $e;hm.set(-1,0,0,0,1,0,0,0,1);function bv(s,e,t,n,i,r){let o=new ce(0),a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let x=M.backgroundBlurriness>0;T=e.get(T,x)}return T}function m(M){let T=!1,x=f(M);x===null?g(o,a):x&&x.isColor&&(g(x,1),T=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(M,T){let x=f(T);x&&(x.isCubeTexture||x.mapping===_a)?(c===void 0&&(c=new Ce(new Ut(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:Js(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sv.makeRotationFromEuler(T.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(hm),c.material.toneMapped=nt.getTransfer(x.colorSpace)!==ft,(h!==x||u!==x.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ce(new Qn(2,2),new It({name:"BackgroundMaterial",uniforms:Js(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=nt.getTransfer(x.colorSpace)!==ft,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,d=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,T){M.getRGB(Vc,Iu(s)),t.buffers.color.setClear(Vc.r,Vc.g,Vc.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,T=1){o.set(M),a=T,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:m,addToRenderList:v,dispose:p}}function Tv(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(L,N,D,U,F){let z=!1,H=u(L,U,D,N);r!==H&&(r=H,c(r.object)),z=f(L,U,D,F),z&&m(L,U,D,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(L,N,D,U),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function u(L,N,D,U){let F=U.wireframe===!0,z=n[N.id];z===void 0&&(z={},n[N.id]=z);let H=L.isInstancedMesh===!0?L.id:0,J=z[H];J===void 0&&(J={},z[H]=J);let G=J[D.id];G===void 0&&(G={},J[D.id]=G);let Y=G[F];return Y===void 0&&(Y=d(l()),G[F]=Y),Y}function d(L){let N=[],D=[],U=[];for(let F=0;F<t;F++)N[F]=0,D[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:D,attributeDivisors:U,object:L,attributes:{},index:null}}function f(L,N,D,U){let F=r.attributes,z=N.attributes,H=0,J=D.getAttributes();for(let G in J)if(J[G].location>=0){let j=F[G],ue=z[G];if(ue===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(ue=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(ue=L.instanceColor)),j===void 0||j.attribute!==ue||ue&&j.data!==ue.data)return!0;H++}return r.attributesNum!==H||r.index!==U}function m(L,N,D,U){let F={},z=N.attributes,H=0,J=D.getAttributes();for(let G in J)if(J[G].location>=0){let j=z[G];j===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));let ue={};ue.attribute=j,j&&j.data&&(ue.data=j.data),F[G]=ue,H++}r.attributes=F,r.attributesNum=H,r.index=U}function v(){let L=r.newAttributes;for(let N=0,D=L.length;N<D;N++)L[N]=0}function g(L){p(L,0)}function p(L,N){let D=r.newAttributes,U=r.enabledAttributes,F=r.attributeDivisors;D[L]=1,U[L]===0&&(s.enableVertexAttribArray(L),U[L]=1),F[L]!==N&&(s.vertexAttribDivisor(L,N),F[L]=N)}function M(){let L=r.newAttributes,N=r.enabledAttributes;for(let D=0,U=N.length;D<U;D++)N[D]!==L[D]&&(s.disableVertexAttribArray(D),N[D]=0)}function T(L,N,D,U,F,z,H){H===!0?s.vertexAttribIPointer(L,N,D,F,z):s.vertexAttribPointer(L,N,D,U,F,z)}function x(L,N,D,U){v();let F=U.attributes,z=D.getAttributes(),H=N.defaultAttributeValues;for(let J in z){let G=z[J];if(G.location>=0){let Y=F[J];if(Y===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor)),Y!==void 0){let j=Y.normalized,ue=Y.itemSize,he=e.get(Y);if(he===void 0)continue;let Be=he.buffer,Ne=he.type,Xe=he.bytesPerElement,Z=Ne===s.INT||Ne===s.UNSIGNED_INT||Y.gpuType===nc;if(Y.isInterleavedBufferAttribute){let Q=Y.data,Me=Q.stride,qe=Y.offset;if(Q.isInstancedInterleavedBuffer){for(let Ee=0;Ee<G.locationSize;Ee++)p(G.location+Ee,Q.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ee=0;Ee<G.locationSize;Ee++)g(G.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,Be);for(let Ee=0;Ee<G.locationSize;Ee++)T(G.location+Ee,ue/G.locationSize,Ne,j,Me*Xe,(qe+ue/G.locationSize*Ee)*Xe,Z)}else{if(Y.isInstancedBufferAttribute){for(let Q=0;Q<G.locationSize;Q++)p(G.location+Q,Y.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Q=0;Q<G.locationSize;Q++)g(G.location+Q);s.bindBuffer(s.ARRAY_BUFFER,Be);for(let Q=0;Q<G.locationSize;Q++)T(G.location+Q,ue/G.locationSize,Ne,j,ue*Xe,ue/G.locationSize*Q*Xe,Z)}}else if(H!==void 0){let j=H[J];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(G.location,j);break;case 3:s.vertexAttrib3fv(G.location,j);break;case 4:s.vertexAttrib4fv(G.location,j);break;default:s.vertexAttrib1fv(G.location,j)}}}}M()}function b(){E();for(let L in n){let N=n[L];for(let D in N){let U=N[D];for(let F in U){let z=U[F];for(let H in z)h(z[H].object),delete z[H];delete U[F]}}delete n[L]}}function S(L){if(n[L.id]===void 0)return;let N=n[L.id];for(let D in N){let U=N[D];for(let F in U){let z=U[F];for(let H in z)h(z[H].object),delete z[H];delete U[F]}}delete n[L.id]}function R(L){for(let N in n){let D=n[N];for(let U in D){let F=D[U];if(F[L.id]===void 0)continue;let z=F[L.id];for(let H in z)h(z[H].object),delete z[H];delete F[L.id]}}}function _(L){for(let N in n){let D=n[N],U=L.isInstancedMesh===!0?L.id:0,F=D[U];if(F!==void 0){for(let z in F){let H=F[z];for(let J in H)h(H[J].object),delete H[J];delete F[z]}delete D[U],Object.keys(D).length===0&&delete n[N]}}}function E(){C(),o=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function Ev(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function wv(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==In&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let _=R===$t&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==bn&&R!==Cn&&!_&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ue("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:x,maxSamples:b,samples:S}}function Av(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Kn,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,T=M*4,x=p.clippingState||null;l.value=x,x=h(m,d,T,f);for(let b=0;b!==T;++b)x[b]=t[b];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=l.value,m!==!0||g===null){let p=f+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,x=f;T!==v;++T,x+=4)o.copy(u[T]).applyMatrix4(M,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}var Yr=4,Rv=6,Cv=20,Iv=256,wa=new _i,Vp=new ce,Du=null,Uu=0,Fu=0,Ou=!1,Pv=new I,$s=new I,Zr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=Pv}=r;Du=this._renderer.getRenderTarget(),Uu=this._renderer.getActiveCubeFace(),Fu=this._renderer.getActiveMipmapLevel(),Ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Du,Uu,Fu),this._renderer.xr.enabled=Ou,e.scissorTest=!1,qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Du=this._renderer.getRenderTarget(),Uu=this._renderer.getActiveCubeFace(),Fu=this._renderer.getActiveMipmapLevel(),Ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:$t,format:In,colorSpace:gn,depthBuffer:!1},i=Gp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Lv(r)),this._blurMaterial=Dv(r,e,t),this._ggxMaterial=Nv(r,e,t)}return i}_compileMaterial(e){let t=new Ce(new et,e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,n,i,r){let l=new Yt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Vp),u.toneMapping=ei,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ce(new Ut,new xn({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,p=!1,M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,p=!0):(g.color.copy(Vp),p=!0);for(let T=0;T<6;T++){let x=T%3;x===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):x===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let b=this._cubeSize;qr(i,x*b,T>2?b:0,b,b),u.setRenderTarget(i),p&&u.render(v,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ps||e.mapping===Ks;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wp());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;qr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,wa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:m}=this,v=this._sizeLods[n],g=3*v*(n>m-Yr?n-m+Yr:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,qr(r,g,p,3*v,2*v),i.setRenderTarget(r),i.render(a,wa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,qr(e,g,p,3*v,2*v),i.setRenderTarget(e),i.render(a,wa)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,i,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],u=3*h*(i>this._lodMax-Yr?i-this._lodMax+Yr:0),d=4*(this._cubeSize-h);qr(t,u,d,3*h,2*h),o.setRenderTarget(t),o.render(l,wa)}};function Lv(s){let e=[],t=[],n=s,i=s-Yr+1+Rv;for(let r=0;r<i;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,m=new Float32Array(f*d*u),v=new Float32Array(f*d*u);for(let p=0;p<u;p++){let M=p%3*2/3-1,T=p>2?0:-1,x=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];m.set(x,f*d*p);for(let b=0;b<d;b++){let S=h[b*2]*2-1,R=h[b*2+1]*2-1;p===0?$s.set(1,R,S):p===1?$s.set(-S,1,-R):p===2?$s.set(-S,R,1):p===3?$s.set(-1,R,-S):p===4?$s.set(-S,-1,R):$s.set(S,R,-1),$s.toArray(v,(p*d+b)*f)}}let g=new et;g.setAttribute("position",new st(m,f)),g.setAttribute("outputDirection",new st(v,f)),t.push(new Ce(g,null)),n>Yr&&n--}return{lodMeshes:t,sizeLods:e}}function Gp(s,e,t){let n=new Ht(s,e,t);return n.texture.mapping=_a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Nv(s,e,t){return new It({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Iv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Dv(s,e,t){return new It({name:"SphericalGaussianBlur",defines:{SAMPLES:Cv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Wp(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Xp(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function qc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Wc=class extends Ht{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Bo(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ut(5,5,5),r=new It({name:"CubemapFromEquirect",uniforms:Js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Hn});r.uniforms.tEquirect.value=t;let o=new Ce(i,r),a=t.minFilter;return t.minFilter===ti&&(t.minFilter=Gt),new Kl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}};function Uv(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Ql||f===ec)if(e.has(d)){let m=e.get(d).texture;return a(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let v=new Wc(m.height);return v.fromEquirectangularTexture(s,d),e.set(d,v),d.addEventListener("dispose",c),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,m=f===Ql||f===ec,v=f===ps||f===Ks;if(m||v){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Zr(s)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let M=d.image;return m&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new Zr(s)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function a(d,f){return f===Ql?d.mapping=ps:f===ec&&(d.mapping=Ks),d}function l(d){let f=0,m=6;for(let v=0;v<m;v++)d[v]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Fv(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ps("WebGLRenderer: "+n+" extension not supported."),i}}}function Ov(s,e,t,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,m=u.attributes.position,v=0;if(m===void 0)return;if(f!==null){let M=f.array;v=f.version;for(let T=0,x=M.length;T<x;T+=3){let b=M[T+0],S=M[T+1],R=M[T+2];d.push(b,S,S,R,R,b)}}else{let M=m.array;v=m.version;for(let T=0,x=M.length/3-1;T<x;T+=3){let b=T+0,S=T+1,R=T+2;d.push(b,S,S,R,R,b)}}let g=new(m.count>=65535?Do:No)(d,1);g.version=v;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Bv(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*o),t.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let g=0;g<f;g++)v+=d[g];t.update(v,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function kv(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:We("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Hv(s,e,t){let n=new WeakMap,i=new yt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let E=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],T=0;f===!0&&(T=1),m===!0&&(T=2),v===!0&&(T=3);let x=a.attributes.position.count*T,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let S=new Float32Array(x*b*4*u),R=new Io(S,x,b,u);R.type=Cn,R.needsUpdate=!0;let _=T*4;for(let C=0;C<u;C++){let L=g[C],N=p[C],D=M[C],U=x*b*4*C;for(let F=0;F<L.count;F++){let z=F*_;f===!0&&(i.fromBufferAttribute(L,F),S[U+z+0]=i.x,S[U+z+1]=i.y,S[U+z+2]=i.z,S[U+z+3]=0),m===!0&&(i.fromBufferAttribute(N,F),S[U+z+4]=i.x,S[U+z+5]=i.y,S[U+z+6]=i.z,S[U+z+7]=0),v===!0&&(i.fromBufferAttribute(D,F),S[U+z+8]=i.x,S[U+z+9]=i.y,S[U+z+10]=i.z,S[U+z+11]=D.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new se(x,b)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function zv(s,e,t,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Vv={[ua]:"LINEAR_TONE_MAPPING",[da]:"REINHARD_TONE_MAPPING",[fa]:"CINEON_TONE_MAPPING",[Ys]:"ACES_FILMIC_TONE_MAPPING",[ma]:"AGX_TONE_MAPPING",[ga]:"NEUTRAL_TONE_MAPPING",[pa]:"CUSTOM_TONE_MAPPING"};function Gv(s,e,t,n,i,r){let o=new Ht(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new et;c.setAttribute("position",new ze([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ze([0,2,0,0,2,0],2));let h=new Br({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Ce(c,h),d=new _i(-1,1,1,-1,0,1),f=null,m=null,v=!1,g,p=null,M=[],T=!1;this.setSize=function(x,b){o.setSize(x,b),a!==null&&a.setSize(x,b),l!==null&&l.setSize(x,b);for(let S=0;S<M.length;S++){let R=M[S];R.setSize&&R.setSize(x,b)}},this.setEffects=function(x){M=x,T=M.length>0&&M[0].isRenderPass===!0;let b=o.width,S=o.height;M.length>0&&a===null&&(a=new Ht(b,S,{type:$t,depthBuffer:!1,stencilBuffer:!1}),l=new Ht(b,S,{type:$t,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){let _=M[R];_.setSize&&_.setSize(b,S)}},this.begin=function(x,b){if(v||x.toneMapping===ei&&M.length===0)return!1;if(p=b,b!==null){let S=b.width,R=b.height;(o.width!==S||o.height!==R)&&this.setSize(S,R)}return T===!1&&x.setRenderTarget(o),g=x.toneMapping,x.toneMapping=ei,!0},this.hasRenderPass=function(){return T},this.end=function(x,b){x.toneMapping=g,v=!0;let S=o,R=a;for(let _=0;_<M.length;_++){let E=M[_];E.enabled!==!1&&(E.render(x,R,S,b),E.needsSwap!==!1&&(S=R,R=R===a?l:a))}if(f!==x.outputColorSpace||m!==x.toneMapping){f=x.outputColorSpace,m=x.toneMapping,h.defines={},nt.getTransfer(f)===ft&&(h.defines.SRGB_TRANSFER="");let _=Vv[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(p),x.render(u,d),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var um=new Zt,Hu=new hs(1,1),dm=new Io,fm=new Pl,pm=new Bo,qp=[],Yp=[],Kp=new Float32Array(16),Zp=new Float32Array(9),Jp=new Float32Array(4);function Jr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=qp[i];if(r===void 0&&(r=new Float32Array(i),qp[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function jt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Qt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Yc(s,e){let t=Yp[e];t===void 0&&(t=new Int32Array(e),Yp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Wv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Xv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;s.uniform2fv(this.addr,e),Qt(t,e)}}function qv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;s.uniform3fv(this.addr,e),Qt(t,e)}}function Yv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;s.uniform4fv(this.addr,e),Qt(t,e)}}function Kv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,n))return;Jp.set(n),s.uniformMatrix2fv(this.addr,!1,Jp),Qt(t,n)}}function Zv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,n))return;Zp.set(n),s.uniformMatrix3fv(this.addr,!1,Zp),Qt(t,n)}}function Jv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,n))return;Kp.set(n),s.uniformMatrix4fv(this.addr,!1,Kp),Qt(t,n)}}function $v(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function jv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;s.uniform2iv(this.addr,e),Qt(t,e)}}function Qv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;s.uniform3iv(this.addr,e),Qt(t,e)}}function ey(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;s.uniform4iv(this.addr,e),Qt(t,e)}}function ty(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ny(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;s.uniform2uiv(this.addr,e),Qt(t,e)}}function iy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;s.uniform3uiv(this.addr,e),Qt(t,e)}}function sy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;s.uniform4uiv(this.addr,e),Qt(t,e)}}function ry(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Hu.compareFunction=t.isReversedDepthBuffer()?zc:Hc,r=Hu):r=um,t.setTexture2D(e||r,i)}function oy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||fm,i)}function ay(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||pm,i)}function ly(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||dm,i)}function cy(s){switch(s){case 5126:return Wv;case 35664:return Xv;case 35665:return qv;case 35666:return Yv;case 35674:return Kv;case 35675:return Zv;case 35676:return Jv;case 5124:case 35670:return $v;case 35667:case 35671:return jv;case 35668:case 35672:return Qv;case 35669:case 35673:return ey;case 5125:return ty;case 36294:return ny;case 36295:return iy;case 36296:return sy;case 35678:case 36198:case 36298:case 36306:case 35682:return ry;case 35679:case 36299:case 36307:return oy;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return ly}}function hy(s,e){s.uniform1fv(this.addr,e)}function uy(s,e){let t=Jr(e,this.size,2);s.uniform2fv(this.addr,t)}function dy(s,e){let t=Jr(e,this.size,3);s.uniform3fv(this.addr,t)}function fy(s,e){let t=Jr(e,this.size,4);s.uniform4fv(this.addr,t)}function py(s,e){let t=Jr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function my(s,e){let t=Jr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function gy(s,e){let t=Jr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function _y(s,e){s.uniform1iv(this.addr,e)}function xy(s,e){s.uniform2iv(this.addr,e)}function vy(s,e){s.uniform3iv(this.addr,e)}function yy(s,e){s.uniform4iv(this.addr,e)}function My(s,e){s.uniform1uiv(this.addr,e)}function Sy(s,e){s.uniform2uiv(this.addr,e)}function by(s,e){s.uniform3uiv(this.addr,e)}function Ty(s,e){s.uniform4uiv(this.addr,e)}function Ey(s,e,t){let n=this.cache,i=e.length,r=Yc(t,i);jt(n,r)||(s.uniform1iv(this.addr,r),Qt(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Hu:o=um;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function wy(s,e,t){let n=this.cache,i=e.length,r=Yc(t,i);jt(n,r)||(s.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||fm,r[o])}function Ay(s,e,t){let n=this.cache,i=e.length,r=Yc(t,i);jt(n,r)||(s.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||pm,r[o])}function Ry(s,e,t){let n=this.cache,i=e.length,r=Yc(t,i);jt(n,r)||(s.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||dm,r[o])}function Cy(s){switch(s){case 5126:return hy;case 35664:return uy;case 35665:return dy;case 35666:return fy;case 35674:return py;case 35675:return my;case 35676:return gy;case 5124:case 35670:return _y;case 35667:case 35671:return xy;case 35668:case 35672:return vy;case 35669:case 35673:return yy;case 5125:return My;case 36294:return Sy;case 36295:return by;case 36296:return Ty;case 35678:case 36198:case 36298:case 36306:case 35682:return Ey;case 35679:case 36299:case 36307:return wy;case 35680:case 36300:case 36308:case 36293:return Ay;case 36289:case 36303:case 36311:case 36292:return Ry}}var zu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cy(t.type)}},Vu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cy(t.type)}},Gu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Bu=/(\w+)(\])?(\[|\.)?/g;function $p(s,e){s.seq.push(e),s.map[e.id]=e}function Iy(s,e,t){let n=s.name,i=n.length;for(Bu.lastIndex=0;;){let r=Bu.exec(n),o=Bu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){$p(t,c===void 0?new zu(a,s,e):new Vu(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Gu(a),$p(t,u)),t=u}}}var Kr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Iy(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function jp(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Py=37297,Ly=0;function Ny(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Qp=new $e;function Dy(s){nt._getMatrix(Qp,nt.workingColorSpace,s);let e=`mat3( ${Qp.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(s)){case Ro:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function em(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Ny(s.getShaderSource(e),a)}else return r}function Uy(s,e){let t=Dy(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Fy={[ua]:"Linear",[da]:"Reinhard",[fa]:"Cineon",[Ys]:"ACESFilmic",[ma]:"AgX",[ga]:"Neutral",[pa]:"Custom"};function Oy(s,e){let t=Fy[e];return t===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Gc=new I;function By(){nt.getLuminanceCoefficients(Gc);let s=Gc.x.toFixed(4),e=Gc.y.toFixed(4),t=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ky(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ra).join(`
`)}function Hy(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zy(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ra(s){return s!==""}function tm(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Vy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wu(s){return s.replace(Vy,Wy)}var Gy=new Map;function Wy(s,e){let t=rt[e];if(t===void 0){let n=Gy.get(e);if(n!==void 0)t=rt[n],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Wu(t)}var Xy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function im(s){return s.replace(Xy,qy)}function qy(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function sm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Yy={[Xs]:"SHADOWMAP_TYPE_PCF",[zr]:"SHADOWMAP_TYPE_VSM"};function Ky(s){return Yy[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Zy={[ps]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE",[_a]:"ENVMAP_TYPE_CUBE_UV"};function Jy(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Zy[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var $y={[Ks]:"ENVMAP_MODE_REFRACTION"};function jy(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":$y[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Qy={[jl]:"ENVMAP_BLENDING_MULTIPLY",[pp]:"ENVMAP_BLENDING_MIX",[mp]:"ENVMAP_BLENDING_ADD"};function eM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Qy[s.combine]||"ENVMAP_BLENDING_NONE"}function tM(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function nM(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Ky(t),c=Jy(t),h=jy(t),u=eM(t),d=tM(t),f=ky(t),m=Hy(r),v=i.createProgram(),g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ra).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ra).join(`
`),p.length>0&&(p+=`
`)):(g=[sm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),p=[sm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?rt.tonemapping_pars_fragment:"",t.toneMapping!==ei?Oy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Uy("linearToOutputTexel",t.outputColorSpace),By(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ra).join(`
`)),o=Wu(o),o=tm(o,t),o=nm(o,t),a=Wu(a),a=tm(a,t),a=nm(a,t),o=im(o),a=im(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=M+g+o,x=M+p+a,b=jp(i,i.VERTEX_SHADER,T),S=jp(i,i.FRAGMENT_SHADER,x);i.attachShader(v,b),i.attachShader(v,S),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function R(L){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(v)||"",D=i.getShaderInfoLog(b)||"",U=i.getShaderInfoLog(S)||"",F=N.trim(),z=D.trim(),H=U.trim(),J=!0,G=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,b,S);else{let Y=em(i,b,"vertex"),j=em(i,S,"fragment");We("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+Y+`
`+j)}else F!==""?Ue("WebGLProgram: Program Info Log:",F):(z===""||H==="")&&(G=!1);G&&(L.diagnostics={runnable:J,programLog:F,vertexShader:{log:z,prefix:g},fragmentShader:{log:H,prefix:p}})}i.deleteShader(b),i.deleteShader(S),_=new Kr(i,v),E=zy(i,v)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(v,Py)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ly++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=S,this}var iM=0,Xu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qu(e),t.set(e,n)),n}},qu=class{constructor(e){this.id=iM++,this.code=e,this.usedTimes=0}};function sM(s){return s===gs||s===Sa||s===ba}function rM(s,e,t,n,i,r){let o=new Po,a=new Xu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,E,C,L,N,D){let U=L.fog,F=N.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,J=e.get(_.envMap||z,H),G=J&&J.mapping===_a?J.image.height:null,Y=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Ue("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let j=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ue=j!==void 0?j.length:0,he=0;F.morphAttributes.position!==void 0&&(he=1),F.morphAttributes.normal!==void 0&&(he=2),F.morphAttributes.color!==void 0&&(he=3);let Be,Ne,Xe,Z;if(Y){let Rt=Mi[Y];Be=Rt.vertexShader,Ne=Rt.fragmentShader}else{Be=_.vertexShader,Ne=_.fragmentShader;let Rt=a.getVertexShaderStage(_),mt=a.getFragmentShaderStage(_);a.update(_,Rt,mt),Xe=Rt.id,Z=mt.id}let Q=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),qe=N.isInstancedMesh===!0,Ee=N.isBatchedMesh===!0,Ke=!!_.map,_t=!!_.matcap,ie=!!J,oe=!!_.aoMap,ae=!!_.lightMap,le=!!_.bumpMap&&_.wireframe===!1,pe=!!_.normalMap,Ve=!!_.displacementMap,He=!!_.emissiveMap,Ze=!!_.metalnessMap,je=!!_.roughnessMap,O=_.anisotropy>0,pt=_.clearcoat>0,lt=_.dispersion>0,P=_.retroreflectivity>0,y=_.iridescence>0,V=_.sheen>0,q=_.transmission>0,$=O&&!!_.anisotropyMap,de=pt&&!!_.clearcoatMap,fe=pt&&!!_.clearcoatNormalMap,ee=pt&&!!_.clearcoatRoughnessMap,ne=y&&!!_.iridescenceMap,me=y&&!!_.iridescenceThicknessMap,Fe=V&&!!_.sheenColorMap,ve=V&&!!_.sheenRoughnessMap,ge=!!_.specularMap,Oe=!!_.specularColorMap,Ge=!!_.specularIntensityMap,tt=q&&!!_.transmissionMap,k=q&&!!_.thicknessMap,_e=!!_.gradientMap,te=!!_.alphaMap,xe=_.alphaTest>0,Te=!!_.alphaHash,re=!!_.extensions,ke=ei;_.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ke=s.toneMapping);let Le={shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:Be,fragmentShader:Ne,defines:_.defines,customVertexShaderID:Xe,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Ee,batchingColor:Ee&&N._colorsTexture!==null,instancing:qe,instancingColor:qe&&N.instanceColor!==null,instancingMorph:qe&&N.morphTexture!==null,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ke,matcap:_t,envMap:ie,envMapMode:ie&&J.mapping,envMapCubeUVHeight:G,aoMap:oe,lightMap:ae,bumpMap:le,normalMap:pe,displacementMap:Ve,emissiveMap:He,normalMapObjectSpace:pe&&_.normalMapType===Sp,normalMapTangentSpace:pe&&_.normalMapType===Ea,packedNormalMap:pe&&_.normalMapType===Ea&&sM(_.normalMap.format),metalnessMap:Ze,roughnessMap:je,anisotropy:O,anisotropyMap:$,clearcoat:pt,clearcoatMap:de,clearcoatNormalMap:fe,clearcoatRoughnessMap:ee,dispersion:lt,retroreflection:P,iridescence:y,iridescenceMap:ne,iridescenceThicknessMap:me,sheen:V,sheenColorMap:Fe,sheenRoughnessMap:ve,specularMap:ge,specularColorMap:Oe,specularIntensityMap:Ge,transmission:q,transmissionMap:tt,thicknessMap:k,gradientMap:_e,opaque:_.transparent===!1&&_.blending===Vi&&_.alphaToCoverage===!1,alphaMap:te,alphaTest:xe,alphaHash:Te,combine:_.combine,mapUv:Ke&&m(_.map.channel),aoMapUv:oe&&m(_.aoMap.channel),lightMapUv:ae&&m(_.lightMap.channel),bumpMapUv:le&&m(_.bumpMap.channel),normalMapUv:pe&&m(_.normalMap.channel),displacementMapUv:Ve&&m(_.displacementMap.channel),emissiveMapUv:He&&m(_.emissiveMap.channel),metalnessMapUv:Ze&&m(_.metalnessMap.channel),roughnessMapUv:je&&m(_.roughnessMap.channel),anisotropyMapUv:$&&m(_.anisotropyMap.channel),clearcoatMapUv:de&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:fe&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:me&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:ve&&m(_.sheenRoughnessMap.channel),specularMapUv:ge&&m(_.specularMap.channel),specularColorMapUv:Oe&&m(_.specularColorMap.channel),specularIntensityMapUv:Ge&&m(_.specularIntensityMap.channel),transmissionMapUv:tt&&m(_.transmissionMap.channel),thicknessMapUv:k&&m(_.thicknessMap.channel),alphaMapUv:te&&m(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(pe||O),vertexNormals:!!F.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!F.attributes.uv&&(Ke||te),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||F.attributes.normal===void 0&&pe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Me,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:he,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ke&&_.map.isVideoTexture===!0&&nt.getTransfer(_.map.colorSpace)===ft,decodeVideoTextureEmissive:He&&_.emissiveMap.isVideoTexture===!0&&nt.getTransfer(_.emissiveMap.colorSpace)===ft,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Jt,flipSided:_.side===rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:re&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&_.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function g(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)E.push(C),E.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(E,_),M(E,_),E.push(s.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function p(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function M(_,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function T(_){let E=f[_.type],C;if(E){let L=Mi[E];C=Wi.clone(L.uniforms)}else C=_.uniforms;return C}function x(_,E){let C=h.get(E);return C!==void 0?++C.usedTimes:(C=new nM(s,E,_,i),c.push(C),h.set(E,C)),C}function b(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){a.remove(_)}function R(){a.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:T,acquireProgram:x,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:R}}function oM(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function aM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function rm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function om(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,v,g,p){let M=s[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:g,group:p},s[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=m,M.materialVariant=o(d),M.groupOrder=v,M.renderOrder=d.renderOrder,M.z=g,M.group=p),e++,M}function l(d,f,m,v,g,p,M){M.reversedDepth===!0&&(g=-g);let T=a(d,f,m,v,g,p);m.transmission>0?n.push(T):m.transparent===!0?i.push(T):t.push(T)}function c(d,f,m,v,g,p){let M=a(d,f,m,v,g,p);m.transmission>0?n.unshift(M):m.transparent===!0?i.unshift(M):t.unshift(M)}function h(d,f){t.length>1&&t.sort(d||aM),n.length>1&&n.sort(f||rm),i.length>1&&i.sort(f||rm)}function u(){for(let d=e,f=s.length;d<f;d++){let m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function lM(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new om,s.set(n,[o])):i>=r.length?(o=new om,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function cM(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new ce};break;case"SpotLight":t={position:new I,direction:new I,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":t={color:new ce,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function hM(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var uM=0;function dM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function fM(s){let e=new cM,t=hM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let i=new I,r=new Je,o=new Je;function a(c){let h=0,u=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,M=0,T=0,x=0,b=0,S=0,R=0,_=0,E=0,C=0;c.sort(dM);for(let N=0,D=c.length;N<D;N++){let U=c[N],F=U.color,z=U.intensity,H=U.distance,J=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===gs?J=U.shadow.map.texture:J=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=F.r*z,u+=F.g*z,d+=F.b*z;else if(U.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(U.sh.coefficients[G],z);C++}else if(U.isSunLight){let G=e.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let Y=U.shadow,j=t.get(U);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[m]=j,n.sunShadowMap[m]=J;let ue=Y.getViewportCount();for(let he=0;he<ue;he++)n.sunShadowMatrix[v+he]=Y.getMatrix(he),n.sunShadowCascade[v+he]=Y._cascadeData[he];v+=ue,m++}n.sun[f]=G,f++}else if(U.isDirectionalLight){let G=e.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let Y=U.shadow,j=t.get(U);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,n.directionalShadow[g]=j,n.directionalShadowMap[g]=J,n.directionalShadowMatrix[g]=U.shadow.matrix,b++}n.directional[g]=G,g++}else if(U.isSpotLight){let G=e.get(U);G.position.setFromMatrixPosition(U.matrixWorld),G.color.copy(F).multiplyScalar(z),G.distance=H,G.coneCos=Math.cos(U.angle),G.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),G.decay=U.decay,n.spot[M]=G;let Y=U.shadow;if(U.map&&(n.spotLightMap[_]=U.map,_++,Y.updateMatrices(U),U.castShadow&&E++),n.spotLightMatrix[M]=Y.matrix,U.castShadow){let j=t.get(U);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=J,R++}M++}else if(U.isRectAreaLight){let G=e.get(U);G.color.copy(F).multiplyScalar(z),G.halfWidth.set(U.width*.5,0,0),G.halfHeight.set(0,U.height*.5,0),n.rectArea[T]=G,T++}else if(U.isPointLight){let G=e.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity),G.distance=U.distance,G.decay=U.decay,U.castShadow){let Y=U.shadow,j=t.get(U);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,j.shadowCameraNear=Y.camera.near,j.shadowCameraFar=Y.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=J,n.pointShadowMatrix[p]=U.shadow.matrix,S++}n.point[p]=G,p++}else if(U.isHemisphereLight){let G=e.get(U);G.skyColor.copy(U.color).multiplyScalar(z),G.groundColor.copy(U.groundColor).multiplyScalar(z),n.hemi[x]=G,x++}}T>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.sunLength!==f||L.directionalLength!==g||L.pointLength!==p||L.spotLength!==M||L.rectAreaLength!==T||L.hemiLength!==x||L.numSunShadows!==m||L.numDirectionalShadows!==b||L.numPointShadows!==S||L.numSpotShadows!==R||L.numSpotMaps!==_||L.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=T,n.point.length=p,n.hemi.length=x,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,L.sunLength=f,L.directionalLength=g,L.pointLength=p,L.spotLength=M,L.rectAreaLength=T,L.hemiLength=x,L.numSunShadows=m,L.numDirectionalShadows=b,L.numPointShadows=S,L.numSpotShadows=R,L.numSpotMaps=_,L.numLightProbes=C,n.version=uM++)}function l(c,h){let u=0,d=0,f=0,m=0,v=0,g=0,p=h.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){let x=c[M];if(x.isSunLight){let b=n.sun[u];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),u++}else if(x.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),d++}else if(x.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),m++}else if(x.isRectAreaLight){let b=n.rectArea[v];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function am(s){let e=new fM(s),t=[],n=[],i=[];function r(d){u.camera=d,t.length=0,n.length=0,i.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function l(d){i.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function pM(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new am(s),e.set(i,[a])):r>=o.length?(a=new am(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var mM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_M=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],xM=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],lm=new Je,Aa=new I,ku=new I;function vM(s,e,t){let n=new Dr,i=new se,r=new se,o=new yt,a=new Hl,l=new zl,c={},h=t.maxTextureSize,u={[xi]:rn,[rn]:xi,[Jt]:Jt},d=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:mM,fragmentShader:gM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new et;m.setAttribute("position",new st(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ce(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xs;let p=this.type;this.render=function(S,R,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Zf&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Xs);let E=s.getRenderTarget(),C=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Hn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let D=p!==this.type;D&&R.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(F=>F.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,F=S.length;U<F;U++){let z=S[U],H=z.shadow;if(H===void 0){Ue("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let J=H.getFrameExtents();i.multiply(J),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/J.x),i.x=r.x*J.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/J.y),i.y=r.y*J.y,H.mapSize.y=r.y));let G=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=G,H.map===null||D===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===zr){if(z.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Ht(i.x,i.y,{format:gs,type:$t,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new hs(i.x,i.y,Cn),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=di,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Vt,H.map.depthTexture.magFilter=Vt}else z.isPointLight?(H.map=new Wc(i.x),H.map.depthTexture=new Dl(i.x,ni)):(H.map=new Ht(i.x,i.y),H.map.depthTexture=new hs(i.x,i.y,ni)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=di,this.type===Xs?(H.map.depthTexture.compareFunction=G?zc:Hc,H.map.depthTexture.minFilter=Gt,H.map.depthTexture.magFilter=Gt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Vt,H.map.depthTexture.magFilter=Vt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==i.x||H.map.height!==i.y)&&H.map.setSize(i.x,i.y);let Y=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();z.isPointLight!==!0&&H.updateMatrices(z,_);for(let j=0;j<Y;j++){let ue=H.getCamera(j);if(z.isPointLight){let he=H.camera,Be=H.matrix,Ne=z.distance||he.far;Ne!==he.far&&(he.far=Ne,he.updateProjectionMatrix()),Aa.setFromMatrixPosition(z.matrixWorld),he.position.copy(Aa),ku.copy(he.position),ku.add(_M[j]),he.up.copy(xM[j]),he.lookAt(ku),he.updateMatrixWorld(),Be.makeTranslation(-Aa.x,-Aa.y,-Aa.z),lm.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),H._frustum.setFromProjectionMatrix(lm,he.coordinateSystem,he.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,j),s.clear();else{j===0&&(s.setRenderTarget(H.map),s.clear());let he=H.getViewport(j);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),N.viewport(o)}n=H.getFrustum(j),x(R,_,ue,z,this.type)}H.isPointLightShadow!==!0&&this.type===zr&&M(H,_),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(E,C,L)};function M(S,R){let _=e.update(v);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Ht(i.x,i.y,{format:gs,type:$t}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(R,null,_,d,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(R,null,_,f,v,null)}function T(S,R,_,E){let C=null,L=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)C=L;else if(C=_.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let N=C.uuid,D=R.uuid,U=c[N];U===void 0&&(U={},c[N]=U);let F=U[D];F===void 0&&(F=C.clone(),U[D]=F,R.addEventListener("dispose",b)),C=F}if(C.visible=R.visible,C.wireframe=R.wireframe,E===zr?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:u[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let N=s.properties.get(C);N.light=_}return C}function x(S,R,_,E,C){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===zr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let D=e.update(S),U=S.material;if(Array.isArray(U)){let F=D.groups;for(let z=0,H=F.length;z<H;z++){let J=F[z],G=U[J.materialIndex];if(G&&G.visible){let Y=T(S,G,E,C);S.onBeforeShadow(s,S,R,_,D,Y,J),s.renderBufferDirect(_,null,D,Y,S,J),S.onAfterShadow(s,S,R,_,D,Y,J)}}}else if(U.visible){let F=T(S,U,E,C);S.onBeforeShadow(s,S,R,_,D,F,null),s.renderBufferDirect(_,null,D,F,S,null),S.onAfterShadow(s,S,R,_,D,F,null)}}let N=S.children;for(let D=0,U=N.length;D<U;D++)x(N[D],R,_,E,C)}function b(S){S.target.removeEventListener("dispose",b);for(let _ in c){let E=c[_],C=S.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function yM(s,e){function t(){let k=!1,_e=new yt,te=null,xe=new yt(0,0,0,0);return{setMask:function(Te){te!==Te&&!k&&(s.colorMask(Te,Te,Te,Te),te=Te)},setLocked:function(Te){k=Te},setClear:function(Te,re,ke,Le,Rt){Rt===!0&&(Te*=Le,re*=Le,ke*=Le),_e.set(Te,re,ke,Le),xe.equals(_e)===!1&&(s.clearColor(Te,re,ke,Le),xe.copy(_e))},reset:function(){k=!1,te=null,xe.set(-1,0,0,0)}}}function n(){let k=!1,_e=!1,te=null,xe=null,Te=null;return{setReversed:function(re){if(_e!==re){let ke=e.get("EXT_clip_control");re?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),_e=re;let Le=Te;Te=null,this.setClear(Le)}},getReversed:function(){return _e},setTest:function(re){re?Q(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(re){te!==re&&!k&&(s.depthMask(re),te=re)},setFunc:function(re){if(_e&&(re=Np[re]),xe!==re){switch(re){case Sl:s.depthFunc(s.NEVER);break;case bl:s.depthFunc(s.ALWAYS);break;case Tl:s.depthFunc(s.LESS);break;case Er:s.depthFunc(s.LEQUAL);break;case El:s.depthFunc(s.EQUAL);break;case wl:s.depthFunc(s.GEQUAL);break;case Al:s.depthFunc(s.GREATER);break;case Rl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xe=re}},setLocked:function(re){k=re},setClear:function(re){Te!==re&&(Te=re,_e&&(re=1-re),s.clearDepth(re))},reset:function(){k=!1,te=null,xe=null,Te=null,_e=!1}}}function i(){let k=!1,_e=null,te=null,xe=null,Te=null,re=null,ke=null,Le=null,Rt=null;return{setTest:function(mt){k||(mt?Q(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(mt){_e!==mt&&!k&&(s.stencilMask(mt),_e=mt)},setFunc:function(mt,Wn,ai){(te!==mt||xe!==Wn||Te!==ai)&&(s.stencilFunc(mt,Wn,ai),te=mt,xe=Wn,Te=ai)},setOp:function(mt,Wn,ai){(re!==mt||ke!==Wn||Le!==ai)&&(s.stencilOp(mt,Wn,ai),re=mt,ke=Wn,Le=ai)},setLocked:function(mt){k=mt},setClear:function(mt){Rt!==mt&&(s.clearStencil(mt),Rt=mt)},reset:function(){k=!1,_e=null,te=null,xe=null,Te=null,re=null,ke=null,Le=null,Rt=null}}}let r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],v=null,g=!1,p=null,M=null,T=null,x=null,b=null,S=null,R=null,_=new ce(0,0,0),E=0,C=!1,L=null,N=null,D=null,U=null,F=null,z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,J=0,G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=J>=2);let Y=null,j={},ue=s.getParameter(s.SCISSOR_BOX),he=s.getParameter(s.VIEWPORT),Be=new yt().fromArray(ue),Ne=new yt().fromArray(he);function Xe(k,_e,te,xe){let Te=new Uint8Array(4),re=s.createTexture();s.bindTexture(k,re),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ke=0;ke<te;ke++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(_e,0,s.RGBA,1,1,xe,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(_e+ke,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return re}let Z={};Z[s.TEXTURE_2D]=Xe(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=Xe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=Xe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=Xe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(s.DEPTH_TEST),o.setFunc(Er),le(!1),pe(du),Q(s.CULL_FACE),oe(Hn);function Q(k){h[k]!==!0&&(s.enable(k),h[k]=!0)}function Me(k){h[k]!==!1&&(s.disable(k),h[k]=!1)}function qe(k,_e){return d[k]!==_e?(s.bindFramebuffer(k,_e),d[k]=_e,k===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=_e),k===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ee(k,_e){let te=m,xe=!1;if(k){te=f.get(_e),te===void 0&&(te=[],f.set(_e,te));let Te=k.textures;if(te.length!==Te.length||te[0]!==s.COLOR_ATTACHMENT0){for(let re=0,ke=Te.length;re<ke;re++)te[re]=s.COLOR_ATTACHMENT0+re;te.length=Te.length,xe=!0}}else te[0]!==s.BACK&&(te[0]=s.BACK,xe=!0);xe&&s.drawBuffers(te)}function Ke(k){return v!==k?(s.useProgram(k),v=k,!0):!1}let _t={[qs]:s.FUNC_ADD,[$f]:s.FUNC_SUBTRACT,[jf]:s.FUNC_REVERSE_SUBTRACT};_t[Qf]=s.MIN,_t[ep]=s.MAX;let ie={[tp]:s.ZERO,[np]:s.ONE,[ip]:s.SRC_COLOR,[mu]:s.SRC_ALPHA,[cp]:s.SRC_ALPHA_SATURATE,[ap]:s.DST_COLOR,[rp]:s.DST_ALPHA,[sp]:s.ONE_MINUS_SRC_COLOR,[gu]:s.ONE_MINUS_SRC_ALPHA,[lp]:s.ONE_MINUS_DST_COLOR,[op]:s.ONE_MINUS_DST_ALPHA,[hp]:s.CONSTANT_COLOR,[up]:s.ONE_MINUS_CONSTANT_COLOR,[dp]:s.CONSTANT_ALPHA,[fp]:s.ONE_MINUS_CONSTANT_ALPHA};function oe(k,_e,te,xe,Te,re,ke,Le,Rt,mt){if(k===Hn){g===!0&&(Me(s.BLEND),g=!1);return}if(g===!1&&(Q(s.BLEND),g=!0),k!==Jf){if(k!==p||mt!==C){if((M!==qs||b!==qs)&&(s.blendEquation(s.FUNC_ADD),M=qs,b=qs),mt)switch(k){case Vi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vi:s.blendFunc(s.ONE,s.ONE);break;case fu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case pu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:We("WebGLState: Invalid blending: ",k);break}else switch(k){case Vi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case fu:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pu:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",k);break}T=null,x=null,S=null,R=null,_.set(0,0,0),E=0,p=k,C=mt}return}Te=Te||_e,re=re||te,ke=ke||xe,(_e!==M||Te!==b)&&(s.blendEquationSeparate(_t[_e],_t[Te]),M=_e,b=Te),(te!==T||xe!==x||re!==S||ke!==R)&&(s.blendFuncSeparate(ie[te],ie[xe],ie[re],ie[ke]),T=te,x=xe,S=re,R=ke),(Le.equals(_)===!1||Rt!==E)&&(s.blendColor(Le.r,Le.g,Le.b,Rt),_.copy(Le),E=Rt),p=k,C=!1}function ae(k,_e){k.side===Jt?Me(s.CULL_FACE):Q(s.CULL_FACE);let te=k.side===rn;_e&&(te=!te),le(te),k.blending===Vi&&k.transparent===!1?oe(Hn):oe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let xe=k.stencilWrite;a.setTest(xe),xe&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),He(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function le(k){L!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),L=k)}function pe(k){k!==Yf?(Q(s.CULL_FACE),k!==N&&(k===du?s.cullFace(s.BACK):k===Kf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),N=k}function Ve(k){k!==D&&(H&&s.lineWidth(k),D=k)}function He(k,_e,te){k?(Q(s.POLYGON_OFFSET_FILL),(U!==_e||F!==te)&&(U=_e,F=te,o.getReversed()&&(_e=-_e),s.polygonOffset(_e,te))):Me(s.POLYGON_OFFSET_FILL)}function Ze(k){k?Q(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function je(k){k===void 0&&(k=s.TEXTURE0+z-1),Y!==k&&(s.activeTexture(k),Y=k)}function O(k,_e,te){te===void 0&&(Y===null?te=s.TEXTURE0+z-1:te=Y);let xe=j[te];xe===void 0&&(xe={type:void 0,texture:void 0},j[te]=xe),(xe.type!==k||xe.texture!==_e)&&(Y!==te&&(s.activeTexture(te),Y=te),s.bindTexture(k,_e||Z[k]),xe.type=k,xe.texture=_e)}function pt(){let k=j[Y];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function lt(){try{s.compressedTexImage2D(...arguments)}catch(k){We("WebGLState:",k)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(k){We("WebGLState:",k)}}function y(){try{s.texSubImage2D(...arguments)}catch(k){We("WebGLState:",k)}}function V(){try{s.texSubImage3D(...arguments)}catch(k){We("WebGLState:",k)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(k){We("WebGLState:",k)}}function $(){try{s.compressedTexSubImage3D(...arguments)}catch(k){We("WebGLState:",k)}}function de(){try{s.texStorage2D(...arguments)}catch(k){We("WebGLState:",k)}}function fe(){try{s.texStorage3D(...arguments)}catch(k){We("WebGLState:",k)}}function ee(){try{s.texImage2D(...arguments)}catch(k){We("WebGLState:",k)}}function ne(){try{s.texImage3D(...arguments)}catch(k){We("WebGLState:",k)}}function me(k){return u[k]!==void 0?u[k]:s.getParameter(k)}function Fe(k,_e){u[k]!==_e&&(s.pixelStorei(k,_e),u[k]=_e)}function ve(k){Be.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Be.copy(k))}function ge(k){Ne.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Ne.copy(k))}function Oe(k,_e){let te=c.get(_e);te===void 0&&(te=new WeakMap,c.set(_e,te));let xe=te.get(k);xe===void 0&&(xe=s.getUniformBlockIndex(_e,k.name),te.set(k,xe))}function Ge(k,_e){let xe=c.get(_e).get(k);l.get(_e)!==xe&&(s.uniformBlockBinding(_e,xe,k.__bindingPointIndex),l.set(_e,xe))}function tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},Y=null,j={},d={},f=new WeakMap,m=[],v=null,g=!1,p=null,M=null,T=null,x=null,b=null,S=null,R=null,_=new ce(0,0,0),E=0,C=!1,L=null,N=null,D=null,U=null,F=null,Be.set(0,0,s.canvas.width,s.canvas.height),Ne.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:Me,bindFramebuffer:qe,drawBuffers:Ee,useProgram:Ke,setBlending:oe,setMaterial:ae,setFlipSided:le,setCullFace:pe,setLineWidth:Ve,setPolygonOffset:He,setScissorTest:Ze,activeTexture:je,bindTexture:O,unbindTexture:pt,compressedTexImage2D:lt,compressedTexImage3D:P,texImage2D:ee,texImage3D:ne,pixelStorei:Fe,getParameter:me,updateUBOMapping:Oe,uniformBlockBinding:Ge,texStorage2D:de,texStorage3D:fe,texSubImage2D:y,texSubImage3D:V,compressedTexSubImage2D:q,compressedTexSubImage3D:$,scissor:ve,viewport:ge,reset:tt}}function MM(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap,u=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,y){return m?new OffscreenCanvas(P,y):Rr("canvas")}function g(P,y,V){let q=1,$=lt(P);if(($.width>V||$.height>V)&&(q=V/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let de=Math.floor(q*$.width),fe=Math.floor(q*$.height);d===void 0&&(d=v(de,fe));let ee=y?v(de,fe):d;return ee.width=de,ee.height=fe,ee.getContext("2d").drawImage(P,0,0,de,fe),Ue("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+de+"x"+fe+")."),ee}else return"data"in P&&Ue("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),P;return P}function p(P){return P.generateMipmaps}function M(P){s.generateMipmap(P)}function T(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(P,y,V,q,$,de=!1){if(P!==null){if(s[P]!==void 0)return s[P];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe;q&&(fe=e.get("EXT_texture_norm16"),fe||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=y;if(y===s.RED&&(V===s.FLOAT&&(ee=s.R32F),V===s.HALF_FLOAT&&(ee=s.R16F),V===s.UNSIGNED_BYTE&&(ee=s.R8),V===s.UNSIGNED_SHORT&&fe&&(ee=fe.R16_EXT),V===s.SHORT&&fe&&(ee=fe.R16_SNORM_EXT)),y===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(ee=s.R8UI),V===s.UNSIGNED_SHORT&&(ee=s.R16UI),V===s.UNSIGNED_INT&&(ee=s.R32UI),V===s.BYTE&&(ee=s.R8I),V===s.SHORT&&(ee=s.R16I),V===s.INT&&(ee=s.R32I)),y===s.RG&&(V===s.FLOAT&&(ee=s.RG32F),V===s.HALF_FLOAT&&(ee=s.RG16F),V===s.UNSIGNED_BYTE&&(ee=s.RG8),V===s.UNSIGNED_SHORT&&fe&&(ee=fe.RG16_EXT),V===s.SHORT&&fe&&(ee=fe.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(ee=s.RG8UI),V===s.UNSIGNED_SHORT&&(ee=s.RG16UI),V===s.UNSIGNED_INT&&(ee=s.RG32UI),V===s.BYTE&&(ee=s.RG8I),V===s.SHORT&&(ee=s.RG16I),V===s.INT&&(ee=s.RG32I)),y===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(ee=s.RGB8UI),V===s.UNSIGNED_SHORT&&(ee=s.RGB16UI),V===s.UNSIGNED_INT&&(ee=s.RGB32UI),V===s.BYTE&&(ee=s.RGB8I),V===s.SHORT&&(ee=s.RGB16I),V===s.INT&&(ee=s.RGB32I)),y===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(ee=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(ee=s.RGBA16UI),V===s.UNSIGNED_INT&&(ee=s.RGBA32UI),V===s.BYTE&&(ee=s.RGBA8I),V===s.SHORT&&(ee=s.RGBA16I),V===s.INT&&(ee=s.RGBA32I)),y===s.RGB&&(V===s.UNSIGNED_SHORT&&fe&&(ee=fe.RGB16_EXT),V===s.SHORT&&fe&&(ee=fe.RGB16_SNORM_EXT),V===s.UNSIGNED_INT_5_9_9_9_REV&&(ee=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&(ee=s.R11F_G11F_B10F)),y===s.RGBA){let ne=de?Ro:nt.getTransfer($);V===s.FLOAT&&(ee=s.RGBA32F),V===s.HALF_FLOAT&&(ee=s.RGBA16F),V===s.UNSIGNED_BYTE&&(ee=ne===ft?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT&&fe&&(ee=fe.RGBA16_EXT),V===s.SHORT&&fe&&(ee=fe.RGBA16_SNORM_EXT),V===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function b(P,y){let V;return P?y===null||y===ni||y===Wr?V=s.DEPTH24_STENCIL8:y===Cn?V=s.DEPTH32F_STENCIL8:y===Gr&&(V=s.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ni||y===Wr?V=s.DEPTH_COMPONENT24:y===Cn?V=s.DEPTH_COMPONENT32F:y===Gr&&(V=s.DEPTH_COMPONENT16),V}function S(P,y){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Vt&&P.minFilter!==Gt?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function R(P){let y=P.target;y.removeEventListener("dispose",R),E(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&u.delete(y)}function _(P){let y=P.target;y.removeEventListener("dispose",_),L(y)}function E(P){let y=n.get(P);if(y.__webglInit===void 0)return;let V=P.source,q=f.get(V);if(q){let $=q[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&C(P),Object.keys(q).length===0&&f.delete(V)}n.remove(P)}function C(P){let y=n.get(P);s.deleteTexture(y.__webglTexture);let V=P.source,q=f.get(V);delete q[y.__cacheKey],o.memory.textures--}function L(P){let y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let $=0;$<y.__webglFramebuffer[q].length;$++)s.deleteFramebuffer(y.__webglFramebuffer[q][$]);else s.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)s.deleteFramebuffer(y.__webglFramebuffer[q]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let V=P.textures;for(let q=0,$=V.length;q<$;q++){let de=n.get(V[q]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),o.memory.textures--),n.remove(V[q])}n.remove(P)}let N=0;function D(){N=0}function U(){return N}function F(P){N=P}function z(){let P=N;return P>=i.maxTextures&&Ue("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),N+=1,P}function H(P){let y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function J(P,y){let V=n.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){let q=P.image;if(q===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(V,P,y);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+y)}function G(P,y){let V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){Me(V,P,y);return}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+y)}function Y(P,y){let V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){Me(V,P,y);return}t.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+y)}function j(P,y){let V=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&V.__version!==P.version){qe(V,P,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+y)}let ue={[mn]:s.REPEAT,[Un]:s.CLAMP_TO_EDGE,[wr]:s.MIRRORED_REPEAT},he={[Vt]:s.NEAREST,[tc]:s.NEAREST_MIPMAP_NEAREST,[Zs]:s.NEAREST_MIPMAP_LINEAR,[Gt]:s.LINEAR,[Vr]:s.LINEAR_MIPMAP_NEAREST,[ti]:s.LINEAR_MIPMAP_LINEAR},Be={[Tp]:s.NEVER,[Cp]:s.ALWAYS,[Ep]:s.LESS,[Hc]:s.LEQUAL,[wp]:s.EQUAL,[zc]:s.GEQUAL,[Ap]:s.GREATER,[Rp]:s.NOTEQUAL};function Ne(P,y){if(y.type===Cn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Gt||y.magFilter===Vr||y.magFilter===Zs||y.magFilter===ti||y.minFilter===Gt||y.minFilter===Vr||y.minFilter===Zs||y.minFilter===ti)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ue[y.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ue[y.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ue[y.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,he[y.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,he[y.minFilter]),y.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Be[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Vt||y.minFilter!==Zs&&y.minFilter!==ti||y.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Xe(P,y){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",R));let q=y.source,$=f.get(q);$===void 0&&($={},f.set(q,$));let de=H(y);if(de!==P.__cacheKey){$[de]===void 0&&($[de]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),$[de].usedTimes++;let fe=$[P.__cacheKey];fe!==void 0&&($[P.__cacheKey].usedTimes--,fe.usedTimes===0&&C(y)),P.__cacheKey=de,P.__webglTexture=$[de].texture}return V}function Z(P,y,V){return Math.floor(Math.floor(P/V)/y)}function Q(P,y,V,q){let de=P.updateRanges;if(de.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,V,q,y.data);else{de.sort((Fe,ve)=>Fe.start-ve.start);let fe=0;for(let Fe=1;Fe<de.length;Fe++){let ve=de[fe],ge=de[Fe],Oe=ve.start+ve.count,Ge=Z(ge.start,y.width,4),tt=Z(ve.start,y.width,4);ge.start<=Oe+1&&Ge===tt&&Z(ge.start+ge.count-1,y.width,4)===Ge?ve.count=Math.max(ve.count,ge.start+ge.count-ve.start):(++fe,de[fe]=ge)}de.length=fe+1;let ee=t.getParameter(s.UNPACK_ROW_LENGTH),ne=t.getParameter(s.UNPACK_SKIP_PIXELS),me=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let Fe=0,ve=de.length;Fe<ve;Fe++){let ge=de[Fe],Oe=Math.floor(ge.start/4),Ge=Math.ceil(ge.count/4),tt=Oe%y.width,k=Math.floor(Oe/y.width),_e=Ge,te=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,tt),t.pixelStorei(s.UNPACK_SKIP_ROWS,k),t.texSubImage2D(s.TEXTURE_2D,0,tt,k,_e,te,V,q,y.data)}P.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ee),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(s.UNPACK_SKIP_ROWS,me)}}function Me(P,y,V){let q=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=s.TEXTURE_3D);let $=Xe(P,y),de=y.source;t.bindTexture(q,P.__webglTexture,s.TEXTURE0+V);let fe=n.get(de);if(de.version!==fe.__version||$===!0){if(t.activeTexture(s.TEXTURE0+V),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let te=nt.getPrimaries(nt.workingColorSpace),xe=y.colorSpace===Gi?null:nt.getPrimaries(y.colorSpace),Te=y.colorSpace===Gi||te===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let ne=g(y.image,!1,i.maxTextureSize);ne=pt(y,ne);let me=r.convert(y.format,y.colorSpace),Fe=r.convert(y.type),ve=x(y.internalFormat,me,Fe,y.normalized,y.colorSpace,y.isVideoTexture);Ne(q,y);let ge,Oe=y.mipmaps,Ge=y.isVideoTexture!==!0,tt=fe.__version===void 0||$===!0,k=de.dataReady,_e=S(y,ne);if(y.isDepthTexture)ve=b(y.format===ms,y.type),tt&&(Ge?t.texStorage2D(s.TEXTURE_2D,1,ve,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,ve,ne.width,ne.height,0,me,Fe,null));else if(y.isDataTexture)if(Oe.length>0){Ge&&tt&&t.texStorage2D(s.TEXTURE_2D,_e,ve,Oe[0].width,Oe[0].height);for(let te=0,xe=Oe.length;te<xe;te++)ge=Oe[te],Ge?k&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ge.width,ge.height,me,Fe,ge.data):t.texImage2D(s.TEXTURE_2D,te,ve,ge.width,ge.height,0,me,Fe,ge.data);y.generateMipmaps=!1}else Ge?(tt&&t.texStorage2D(s.TEXTURE_2D,_e,ve,ne.width,ne.height),k&&Q(y,ne,me,Fe)):t.texImage2D(s.TEXTURE_2D,0,ve,ne.width,ne.height,0,me,Fe,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ge&&tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,ve,Oe[0].width,Oe[0].height,ne.depth);for(let te=0,xe=Oe.length;te<xe;te++)if(ge=Oe[te],y.format!==In)if(me!==null)if(Ge){if(k)if(y.layerUpdates.size>0){let Te=Nu(ge.width,ge.height,y.format,y.type);for(let re of y.layerUpdates){let ke=ge.data.subarray(re*Te/ge.data.BYTES_PER_ELEMENT,(re+1)*Te/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,re,ge.width,ge.height,1,me,ke)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,ne.depth,me,ge.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,ve,ge.width,ge.height,ne.depth,0,ge.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?k&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,ne.depth,me,Fe,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,ve,ge.width,ge.height,ne.depth,0,me,Fe,ge.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ge&&tt&&t.texStorage2D(s.TEXTURE_2D,_e,ve,Oe[0].width,Oe[0].height);for(let te=0,xe=Oe.length;te<xe;te++)ge=Oe[te],y.format!==In?me!==null?Ge?k&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,te,ve,ge.width,ge.height,0,ge.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?k&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ge.width,ge.height,me,Fe,ge.data):t.texImage2D(s.TEXTURE_2D,te,ve,ge.width,ge.height,0,me,Fe,ge.data)}else if(y.isDataArrayTexture)if(Ge){if(tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,ve,ne.width,ne.height,ne.depth),k)if(y.layerUpdates.size>0){let te=Nu(ne.width,ne.height,y.format,y.type);for(let xe of y.layerUpdates){let Te=ne.data.subarray(xe*te/ne.data.BYTES_PER_ELEMENT,(xe+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xe,ne.width,ne.height,1,me,Fe,Te)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,me,Fe,ne.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ve,ne.width,ne.height,ne.depth,0,me,Fe,ne.data);else if(y.isData3DTexture)Ge?(tt&&t.texStorage3D(s.TEXTURE_3D,_e,ve,ne.width,ne.height,ne.depth),k&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,me,Fe,ne.data)):t.texImage3D(s.TEXTURE_3D,0,ve,ne.width,ne.height,ne.depth,0,me,Fe,ne.data);else if(y.isFramebufferTexture){if(tt)if(Ge)t.texStorage2D(s.TEXTURE_2D,_e,ve,ne.width,ne.height);else{let te=ne.width,xe=ne.height;for(let Te=0;Te<_e;Te++)t.texImage2D(s.TEXTURE_2D,Te,ve,te,xe,0,me,Fe,null),te>>=1,xe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){let te=s.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),u.add(y),te.onpaint=xe=>{let Te=xe.changedElements;for(let re of u)Te.includes(re.image)&&(re.needsUpdate=!0)},te.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ne);else{let Te=s.RGBA,re=s.RGBA,ke=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Te,re,ke,ne)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(Ge&&tt){let te=lt(Oe[0]);t.texStorage2D(s.TEXTURE_2D,_e,ve,te.width,te.height)}for(let te=0,xe=Oe.length;te<xe;te++)ge=Oe[te],Ge?k&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,me,Fe,ge):t.texImage2D(s.TEXTURE_2D,te,ve,me,Fe,ge);y.generateMipmaps=!1}else if(Ge){if(tt){let te=lt(ne);t.texStorage2D(s.TEXTURE_2D,_e,ve,te.width,te.height)}k&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me,Fe,ne)}else t.texImage2D(s.TEXTURE_2D,0,ve,me,Fe,ne);p(y)&&M(q),fe.__version=de.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function qe(P,y,V){if(y.image.length!==6)return;let q=Xe(P,y),$=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+V);let de=n.get($);if($.version!==de.__version||q===!0){t.activeTexture(s.TEXTURE0+V);let fe=nt.getPrimaries(nt.workingColorSpace),ee=y.colorSpace===Gi?null:nt.getPrimaries(y.colorSpace),ne=y.colorSpace===Gi||fe===ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let me=y.isCompressedTexture||y.image[0].isCompressedTexture,Fe=y.image[0]&&y.image[0].isDataTexture,ve=[];for(let re=0;re<6;re++)!me&&!Fe?ve[re]=g(y.image[re],!0,i.maxCubemapSize):ve[re]=Fe?y.image[re].image:y.image[re],ve[re]=pt(y,ve[re]);let ge=ve[0],Oe=r.convert(y.format,y.colorSpace),Ge=r.convert(y.type),tt=x(y.internalFormat,Oe,Ge,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,_e=de.__version===void 0||q===!0,te=$.dataReady,xe=S(y,ge);Ne(s.TEXTURE_CUBE_MAP,y);let Te;if(me){k&&_e&&t.texStorage2D(s.TEXTURE_CUBE_MAP,xe,tt,ge.width,ge.height);for(let re=0;re<6;re++){Te=ve[re].mipmaps;for(let ke=0;ke<Te.length;ke++){let Le=Te[ke];y.format!==In?Oe!==null?k?te&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,ke,0,0,Le.width,Le.height,Oe,Le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,ke,tt,Le.width,Le.height,0,Le.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,ke,0,0,Le.width,Le.height,Oe,Ge,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,ke,tt,Le.width,Le.height,0,Oe,Ge,Le.data)}}}else{if(Te=y.mipmaps,k&&_e){Te.length>0&&xe++;let re=lt(ve[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,xe,tt,re.width,re.height)}for(let re=0;re<6;re++)if(Fe){k?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ve[re].width,ve[re].height,Oe,Ge,ve[re].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,tt,ve[re].width,ve[re].height,0,Oe,Ge,ve[re].data);for(let ke=0;ke<Te.length;ke++){let Rt=Te[ke].image[re].image;k?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,ke+1,0,0,Rt.width,Rt.height,Oe,Ge,Rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,ke+1,tt,Rt.width,Rt.height,0,Oe,Ge,Rt.data)}}else{k?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Oe,Ge,ve[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,tt,Oe,Ge,ve[re]);for(let ke=0;ke<Te.length;ke++){let Le=Te[ke];k?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,ke+1,0,0,Oe,Ge,Le.image[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,ke+1,tt,Oe,Ge,Le.image[re])}}}p(y)&&M(s.TEXTURE_CUBE_MAP),de.__version=$.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Ee(P,y,V,q,$,de){let fe=r.convert(V.format,V.colorSpace),ee=r.convert(V.type),ne=x(V.internalFormat,fe,ee,V.normalized,V.colorSpace),me=n.get(y),Fe=n.get(V);if(Fe.__renderTarget=y,!me.__hasExternalTextures){let ve=Math.max(1,y.width>>de),ge=Math.max(1,y.height>>de);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,de,ne,ve,ge,y.depth,0,fe,ee,null):t.texImage2D($,de,ne,ve,ge,0,fe,ee,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),je(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,$,Fe.__webglTexture,0,Ze(y)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,$,Fe.__webglTexture,de),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(P,y,V){if(s.bindRenderbuffer(s.RENDERBUFFER,P),y.depthBuffer){let q=y.depthTexture,$=q&&q.isDepthTexture?q.type:null,de=b(y.stencilBuffer,$),fe=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;je(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ze(y),de,y.width,y.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze(y),de,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,de,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,P)}else{let q=y.textures;for(let $=0;$<q.length;$++){let de=q[$],fe=r.convert(de.format,de.colorSpace),ee=r.convert(de.type),ne=x(de.internalFormat,fe,ee,de.normalized,de.colorSpace);je(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ze(y),ne,y.width,y.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze(y),ne,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ne,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _t(P,y,V){let q=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(y.depthTexture);if($.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q){if($.__webglInit===void 0&&($.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),$.__webglTexture===void 0){$.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,y.depthTexture);let me=r.convert(y.depthTexture.format),Fe=r.convert(y.depthTexture.type),ve;y.depthTexture.format===di?ve=s.DEPTH_COMPONENT24:y.depthTexture.format===ms&&(ve=s.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ve,y.width,y.height,0,me,Fe,null)}}else J(y.depthTexture,0);let de=$.__webglTexture,fe=Ze(y),ee=q?s.TEXTURE_CUBE_MAP_POSITIVE_X+V:s.TEXTURE_2D,ne=y.depthTexture.format===ms?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===di)je(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,ee,de,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,ne,ee,de,0);else if(y.depthTexture.format===ms)je(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,ee,de,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,ne,ee,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(P){let y=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){let q=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){let $=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),y.__depthDisposeCallback=$}y.__boundDepthTexture=q}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(V)for(let q=0;q<6;q++)_t(y.__webglFramebuffer[q],P,q);else{let q=P.texture.mipmaps;q&&q.length>0?_t(y.__webglFramebuffer[0],P,0):_t(y.__webglFramebuffer,P,0)}else if(V){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=s.createRenderbuffer(),Ke(y.__webglDepthbuffer[q],P,!1);else{let $=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=y.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,de)}}else{let q=P.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Ke(y.__webglDepthbuffer,P,!1);else{let $=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,de)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(P,y,V){let q=n.get(P);y!==void 0&&Ee(q.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&ie(P)}function ae(P){let y=P.texture,V=n.get(P),q=n.get(y);P.addEventListener("dispose",_);let $=P.textures,de=P.isWebGLCubeRenderTarget===!0,fe=$.length>1;if(fe||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=y.version,o.memory.textures++),de){V.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[ee]=[];for(let ne=0;ne<y.mipmaps.length;ne++)V.__webglFramebuffer[ee][ne]=s.createFramebuffer()}else V.__webglFramebuffer[ee]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let ee=0;ee<y.mipmaps.length;ee++)V.__webglFramebuffer[ee]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(fe)for(let ee=0,ne=$.length;ee<ne;ee++){let me=n.get($[ee]);me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&je(P)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ee=0;ee<$.length;ee++){let ne=$[ee];V.__webglColorRenderbuffer[ee]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[ee]);let me=r.convert(ne.format,ne.colorSpace),Fe=r.convert(ne.type),ve=x(ne.internalFormat,me,Fe,ne.normalized,ne.colorSpace,P.isXRRenderTarget===!0),ge=Ze(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,ve,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.RENDERBUFFER,V.__webglColorRenderbuffer[ee])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Ke(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,y);for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0)for(let ne=0;ne<y.mipmaps.length;ne++)Ee(V.__webglFramebuffer[ee][ne],P,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne);else Ee(V.__webglFramebuffer[ee],P,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);p(y)&&M(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let ee=0,ne=$.length;ee<ne;ee++){let me=$[ee],Fe=n.get(me),ve=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ve=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,Fe.__webglTexture),Ne(ve,me),Ee(V.__webglFramebuffer,P,me,s.COLOR_ATTACHMENT0+ee,ve,0),p(me)&&M(ve)}t.unbindTexture()}else{let ee=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ee=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ee,q.__webglTexture),Ne(ee,y),y.mipmaps&&y.mipmaps.length>0)for(let ne=0;ne<y.mipmaps.length;ne++)Ee(V.__webglFramebuffer[ne],P,y,s.COLOR_ATTACHMENT0,ee,ne);else Ee(V.__webglFramebuffer,P,y,s.COLOR_ATTACHMENT0,ee,0);p(y)&&M(ee),t.unbindTexture()}P.depthBuffer&&ie(P)}function le(P){let y=P.textures;for(let V=0,q=y.length;V<q;V++){let $=y[V];if(p($)){let de=T(P),fe=n.get($).__webglTexture;t.bindTexture(de,fe),M(de),t.unbindTexture()}}}let pe=[],Ve=[];function He(P){if(P.samples>0){if(je(P)===!1){let y=P.textures,V=P.width,q=P.height,$=s.COLOR_BUFFER_BIT,de=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=n.get(P),ee=y.length>1;if(ee)for(let me=0;me<y.length;me++)t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let ne=P.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let me=0;me<y.length;me++){if(P.resolveDepthBuffer&&(P.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),ee){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);let Fe=n.get(y[me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Fe,0)}s.blitFramebuffer(0,0,V,q,0,0,V,q,$,s.NEAREST),l===!0&&(pe.length=0,Ve.length=0,pe.push(s.COLOR_ATTACHMENT0+me),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(pe.push(de),Ve.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ve)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ee)for(let me=0;me<y.length;me++){t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);let Fe=n.get(y[me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,Fe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let y=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Ze(P){return Math.min(i.maxSamples,P.samples)}function je(P){let y=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function O(P){let y=o.render.frame;h.get(P)!==y&&(h.set(P,y),P.update())}function pt(P,y){let V=P.colorSpace,q=P.format,$=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==gn&&V!==Gi&&(nt.getTransfer(V)===ft?(q!==In||$!==bn)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",V)),y}function lt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=D,this.getTextureUnits=U,this.setTextureUnits=F,this.setTexture2D=J,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=j,this.rebindTextures=oe,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function SM(s,e){function t(n,i=Gi){let r,o=nt.getTransfer(i);if(n===bn)return s.UNSIGNED_BYTE;if(n===ic)return s.UNSIGNED_SHORT_4_4_4_4;if(n===sc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===yu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Mu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===xu)return s.BYTE;if(n===vu)return s.SHORT;if(n===Gr)return s.UNSIGNED_SHORT;if(n===nc)return s.INT;if(n===ni)return s.UNSIGNED_INT;if(n===Cn)return s.FLOAT;if(n===$t)return s.HALF_FLOAT;if(n===Su)return s.ALPHA;if(n===bu)return s.RGB;if(n===In)return s.RGBA;if(n===di)return s.DEPTH_COMPONENT;if(n===ms)return s.DEPTH_STENCIL;if(n===rc)return s.RED;if(n===oc)return s.RED_INTEGER;if(n===gs)return s.RG;if(n===ac)return s.RG_INTEGER;if(n===lc)return s.RGBA_INTEGER;if(n===xa||n===va||n===ya||n===Ma)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cc||n===hc||n===uc||n===dc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fc||n===pc||n===mc||n===gc||n===_c||n===Sa||n===xc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fc||n===pc)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===mc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===gc)return r.COMPRESSED_R11_EAC;if(n===_c)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Sa)return r.COMPRESSED_RG11_EAC;if(n===xc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===vc||n===yc||n===Mc||n===Sc||n===bc||n===Tc||n===Ec||n===wc||n===Ac||n===Rc||n===Cc||n===Ic||n===Pc||n===Lc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ec)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ac)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ic)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nc||n===Dc||n===Uc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Nc)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fc||n===Oc||n===ba||n===Bc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var bM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Yu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ko(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new It({vertexShader:bM,fragmentShader:TM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ce(new Qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ku=class extends $n{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,v=typeof XRWebGLBinding<"u",g=new Yu,p={},M=t.getContextAttributes(),T=null,x=null,b=[],S=[],R=new se,_=null,E=null,C=new Yt;C.viewport=new yt;let L=new Yt;L.viewport=new yt;let N=[C,L],D=new Zl,U=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=b[Z];return Q===void 0&&(Q=new Pr,b[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=b[Z];return Q===void 0&&(Q=new Pr,b[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=b[Z];return Q===void 0&&(Q=new Pr,b[Z]=Q),Q.getHandSpace()};function z(Z){let Q=S.indexOf(Z.inputSource);if(Q===-1)return;let Me=b[Q];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,c||o),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",J);for(let Z=0;Z<b.length;Z++){let Q=S[Z];Q!==null&&(S[Z]=null,b[Z].disconnect(Q))}U=null,F=null,g.reset();for(let Z in p)delete p[Z];if(e.setRenderTarget(T),f=null,d=null,u=null,i=null,x=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),E!==null){let Z=E.camera;Z.fov=E.fov,Z.zoom=E.zoom,Z.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",H),i.addEventListener("inputsourceschange",J),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,qe=null,Ee=null;M.depth&&(Ee=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=M.stencil?ms:di,qe=M.stencil?Wr:ni);let Ke={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ke),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Ht(d.textureWidth,d.textureHeight,{format:In,type:bn,depthTexture:new hs(d.textureWidth,d.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Me={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Me),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Ht(f.framebufferWidth,f.framebufferHeight,{format:In,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Xe.setContext(i),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(Z){for(let Q=0;Q<Z.removed.length;Q++){let Me=Z.removed[Q],qe=S.indexOf(Me);qe>=0&&(S[qe]=null,b[qe].disconnect(Me))}for(let Q=0;Q<Z.added.length;Q++){let Me=Z.added[Q],qe=S.indexOf(Me);if(qe===-1){for(let Ke=0;Ke<b.length;Ke++)if(Ke>=S.length){S.push(Me),qe=Ke;break}else if(S[Ke]===null){S[Ke]=Me,qe=Ke;break}if(qe===-1)break}let Ee=b[qe];Ee&&Ee.connect(Me)}}let G=new I,Y=new I;function j(Z,Q,Me){G.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(Me.matrixWorld);let qe=G.distanceTo(Y),Ee=Q.projectionMatrix.elements,Ke=Me.projectionMatrix.elements,_t=Ee[14]/(Ee[10]-1),ie=Ee[14]/(Ee[10]+1),oe=(Ee[9]+1)/Ee[5],ae=(Ee[9]-1)/Ee[5],le=(Ee[8]-1)/Ee[0],pe=(Ke[8]+1)/Ke[0],Ve=_t*le,He=_t*pe,Ze=qe/(-le+pe),je=Ze*-le;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(je),Z.translateZ(Ze),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ee[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let O=_t+Ze,pt=ie+Ze,lt=Ve-je,P=He+(qe-je),y=oe*ie/pt*O,V=ae*ie/pt*O;Z.projectionMatrix.makePerspective(lt,P,y,V,O,pt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ue(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let Q=Z.near,Me=Z.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(Me=g.depthFar)),D.near=L.near=C.near=Q,D.far=L.far=C.far=Me,(U!==D.near||F!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),U=D.near,F=D.far),D.layers.mask=Z.layers.mask|6,C.layers.mask=D.layers.mask&-5,L.layers.mask=D.layers.mask&-3;let qe=Z.parent,Ee=D.cameras;ue(D,qe);for(let Ke=0;Ke<Ee.length;Ke++)ue(Ee[Ke],qe);Ee.length===2?j(D,C,L):D.projectionMatrix.copy(C.projectionMatrix),E===null&&Z.isPerspectiveCamera&&(E={camera:Z,fov:Z.fov,zoom:Z.zoom}),he(Z,D,qe)};function he(Z,Q,Me){Me===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ds*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(Z){return p[Z]};let Be=null;function Ne(Z,Q){if(h=Q.getViewerPose(c||o),m=Q,h!==null){let Me=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let qe=!1;Me.length!==D.cameras.length&&(D.cameras.length=0,qe=!0);for(let ie=0;ie<Me.length;ie++){let oe=Me[ie],ae=null;if(f!==null)ae=f.getViewport(oe);else{let pe=u.getViewSubImage(d,oe);ae=pe.viewport,ie===0&&(e.setRenderTargetTextures(x,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(x))}let le=N[ie];le===void 0&&(le=new Yt,le.layers.enable(ie),le.viewport=new yt,N[ie]=le),le.matrix.fromArray(oe.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(oe.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(ae.x,ae.y,ae.width,ae.height),ie===0&&(D.matrix.copy(le.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),qe===!0&&D.cameras.push(le)}let Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let ie=u.getDepthInformation(Me[0]);ie&&ie.isValid&&ie.texture&&g.init(ie,i.renderState)}if(Ee&&Ee.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let ie=0;ie<Me.length;ie++){let oe=Me[ie].camera;if(oe){let ae=p[oe];ae||(ae=new ko,p[oe]=ae);let le=u.getCameraImage(oe);ae.sourceTexture=le}}}}for(let Me=0;Me<b.length;Me++){let qe=S[Me],Ee=b[Me];qe!==null&&Ee!==void 0&&Ee.update(qe,Q,c||o)}Be&&Be(Z,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}let Xe=new cm;Xe.setAnimationLoop(Ne),this.setAnimationLoop=function(Z){Be=Z},this.dispose=function(){}}},EM=new Je,mm=new $e;mm.set(-1,0,0,0,1,0,0,0,1);function wM(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Iu(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,M,T,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,M,T):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===rn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===rn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=e.get(p),T=M.envMap,x=M.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(EM.makeRotationFromEuler(x)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(mm),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=T*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function AM(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){let S=b.program;n.uniformBlockBinding(x,S)}function c(x,b){let S=i[x.id];S===void 0&&(g(x),S=h(x),i[x.id]=S,x.addEventListener("dispose",M));let R=b.program;n.updateUBOMapping(x,R);let _=e.render.frame;r[x.id]!==_&&(d(x),r[x.id]=_)}function h(x){let b=u();x.__bindingPointIndex=b;let S=s.createBuffer(),R=x.__size,_=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,R,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,S),S}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let b=i[x.id],S=x.uniforms,R=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let _=0,E=S.length;_<E;_++){let C=S[_];if(Array.isArray(C))for(let L=0,N=C.length;L<N;L++)f(C[L],_,L,R);else f(C,_,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,b,S,R){if(v(x,b,S,R)===!0){let _=x.__offset,E=x.value;if(Array.isArray(E)){let C=0;for(let L=0;L<E.length;L++){let N=E[L],D=p(N);m(N,x.__data,C),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(C+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,x.__data)}}function m(x,b,S){typeof x=="number"||typeof x=="boolean"?b[0]=x:x.isMatrix3?(b[0]=x.elements[0],b[1]=x.elements[1],b[2]=x.elements[2],b[3]=0,b[4]=x.elements[3],b[5]=x.elements[4],b[6]=x.elements[5],b[7]=0,b[8]=x.elements[6],b[9]=x.elements[7],b[10]=x.elements[8],b[11]=0):ArrayBuffer.isView(x)?b.set(new x.constructor(x.buffer,x.byteOffset,b.length)):x.toArray(b,S)}function v(x,b,S,R){let _=x.value,E=b+"_"+S;if(R[E]===void 0)return typeof _=="number"||typeof _=="boolean"?R[E]=_:ArrayBuffer.isView(_)?R[E]=_.slice():R[E]=_.clone(),!0;{let C=R[E];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return R[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function g(x){let b=x.uniforms,S=0,R=16;for(let E=0,C=b.length;E<C;E++){let L=Array.isArray(b[E])?b[E]:[b[E]];for(let N=0,D=L.length;N<D;N++){let U=L[N],F=Array.isArray(U.value)?U.value:[U.value];for(let z=0,H=F.length;z<H;z++){let J=F[z],G=p(J),Y=S%R,j=Y%G.boundary,ue=Y+j;S+=j,ue!==0&&R-ue<G.storage&&(S+=R-ue),U.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=G.storage}}}let _=S%R;return _>0&&(S+=R-_),x.__size=S,x.__cache={},this}function p(x){let b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",x),b}function M(x){let b=x.target;b.removeEventListener("dispose",M);let S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function T(){for(let x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:T}}var RM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yi=null;function CM(){return yi===null&&(yi=new Nr(RM,16,16,gs,$t),yi.name="DFG_LUT",yi.minFilter=Gt,yi.magFilter=Gt,yi.wrapS=Un,yi.wrapT=Un,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}var Xc=class{constructor(e={}){let{canvas:t=Ip(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=bn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let v=f,g=new Set([lc,ac,oc]),p=new Set([bn,ni,Gr,Wr,ic,sc]),M=new Uint32Array(4),T=new Int32Array(4),x=new I,b=null,S=null,R=[],_=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,L=!1,N=null,D=null,U=null,F=null;this._outputColorSpace=dt;let z=0,H=0,J=null,G=-1,Y=null,j=new yt,ue=new yt,he=null,Be=new ce(0),Ne=0,Xe=t.width,Z=t.height,Q=1,Me=null,qe=null,Ee=new yt(0,0,Xe,Z),Ke=new yt(0,0,Xe,Z),_t=!1,ie=new Dr,oe=!1,ae=!1,le=new Je,pe=new I,Ve=new yt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ze=!1;function je(){return J===null?Q:1}let O=n;function pt(A,B){return t.getContext(A,B)}let lt,P,y,V,q,$,de,fe,ee,ne,me,Fe,ve,ge,Oe,Ge,tt,k,_e,te,xe,Te,re;try{let A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Rt,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",Wn,!1),O===null){let B="webgl2";if(O=pt(B,A),O===null)throw pt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(A){throw t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Wn,!1),We("WebGLRenderer: "+A.message),A}function ke(){lt=new Fv(O),lt.init(),xe=new SM(O,lt),P=new wv(O,lt,e,xe),y=new yM(O,lt),P.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),D=O.createFramebuffer(),U=O.createFramebuffer(),F=O.createFramebuffer(),V=new kv(O),q=new oM,$=new MM(O,lt,y,q,P,xe,V),de=new Uv(C),fe=new z0(O),Te=new Tv(O,fe),ee=new Ov(O,fe,V,Te),ne=new zv(O,ee,fe,Te,V),k=new Hv(O,P,$),Oe=new Av(q),me=new rM(C,de,lt,P,Te,Oe),Fe=new wM(C,q),ve=new lM,ge=new pM(lt),tt=new bv(C,de,y,ne,m,l),Ge=new vM(C,ne,P),re=new AM(O,V,P,y),_e=new Ev(O,lt,V),te=new Bv(O,lt,V),V.programs=me.programs,C.capabilities=P,C.extensions=lt,C.properties=q,C.renderLists=ve,C.shadowMap=Ge,C.state=y,C.info=V}v!==bn&&(E=new Gv(v,t.width,t.height,a,i,r));let Le=new Ku(C,O);this.xr=Le,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let A=lt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=lt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(A){A!==void 0&&(Q=A,this.setSize(Xe,Z,!1))},this.getSize=function(A){return A.set(Xe,Z)},this.setSize=function(A,B,K=!0){if(Le.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=A,Z=B,t.width=Math.floor(A*Q),t.height=Math.floor(B*Q),K===!0&&(t.style.width=A+"px",t.style.height=B+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(Xe*Q,Z*Q).floor()},this.setDrawingBufferSize=function(A,B,K){Xe=A,Z=B,Q=K,t.width=Math.floor(A*K),t.height=Math.floor(B*K),this.setViewport(0,0,A,B)},this.setEffects=function(A){if(v===bn){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let B=0;B<A.length;B++)if(A[B].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(j)},this.getViewport=function(A){return A.copy(Ee)},this.setViewport=function(A,B,K,W){A.isVector4?Ee.set(A.x,A.y,A.z,A.w):Ee.set(A,B,K,W),y.viewport(j.copy(Ee).multiplyScalar(Q).round())},this.getScissor=function(A){return A.copy(Ke)},this.setScissor=function(A,B,K,W){A.isVector4?Ke.set(A.x,A.y,A.z,A.w):Ke.set(A,B,K,W),y.scissor(ue.copy(Ke).multiplyScalar(Q).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(A){y.setScissorTest(_t=A)},this.setOpaqueSort=function(A){Me=A},this.setTransparentSort=function(A){qe=A},this.getClearColor=function(A){return A.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,K=!0){let W=0;if(A){let X=!1;if(J!==null){let be=J.texture.format;X=g.has(be)}if(X){let be=J.texture.type,Re=p.has(be),Se=tt.getClearColor(),Ie=tt.getClearAlpha(),De=Se.r,it=Se.g,ct=Se.b;Re?(M[0]=De,M[1]=it,M[2]=ct,M[3]=Ie,O.clearBufferuiv(O.COLOR,0,M)):(T[0]=De,T[1]=it,T[2]=ct,T[3]=Ie,O.clearBufferiv(O.COLOR,0,T))}else W|=O.COLOR_BUFFER_BIT}B&&(W|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Wn,!1),tt.dispose(),ve.dispose(),ge.dispose(),q.dispose(),de.dispose(),ne.dispose(),Te.dispose(),re.dispose(),me.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",qd),Le.removeEventListener("sessionend",Yd),Ts.stop()};function Rt(A){A.preventDefault(),Co("WebGLRenderer: Context Lost."),L=!0}function mt(){Co("WebGLRenderer: Context Restored."),L=!1;let A=V.autoReset,B=Ge.enabled,K=Ge.autoUpdate,W=Ge.needsUpdate,X=Ge.type;ke(),V.autoReset=A,Ge.enabled=B,Ge.autoUpdate=K,Ge.needsUpdate=W,Ge.type=X}function Wn(A){We("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ai(A){let B=A.target;B.removeEventListener("dispose",ai),tg(B)}function tg(A){ng(A),q.remove(A)}function ng(A){let B=q.get(A).programs;B!==void 0&&(B.forEach(function(K){me.releaseProgram(K)}),A.isShaderMaterial&&me.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,K,W,X,be){B===null&&(B=He);let Re=X.isMesh&&X.matrixWorld.determinantAffine()<0,Se=rg(A,B,K,W,X);y.setMaterial(W,Re);let Ie=K.index,De=1;if(W.wireframe===!0){if(Ie=ee.getWireframeAttribute(K),Ie===void 0)return;De=2}let it=K.drawRange,ct=K.attributes.position,Pe=it.start*De,gt=(it.start+it.count)*De;be!==null&&(Pe=Math.max(Pe,be.start*De),gt=Math.min(gt,(be.start+be.count)*De)),Ie!==null?(Pe=Math.max(Pe,0),gt=Math.min(gt,Ie.count)):ct!=null&&(Pe=Math.max(Pe,0),gt=Math.min(gt,ct.count));let Xt=gt-Pe;if(Xt<0||Xt===1/0)return;Te.setup(X,W,Se,K,Ie);let Pt,Tt=_e;if(Ie!==null&&(Pt=fe.get(Ie),Tt=te,Tt.setIndex(Pt)),X.isMesh)W.wireframe===!0?(y.setLineWidth(W.wireframeLinewidth*je()),Tt.setMode(O.LINES)):Tt.setMode(O.TRIANGLES);else if(X.isLine){let ln=W.linewidth;ln===void 0&&(ln=1),y.setLineWidth(ln*je()),X.isLineSegments?Tt.setMode(O.LINES):X.isLineLoop?Tt.setMode(O.LINE_LOOP):Tt.setMode(O.LINE_STRIP)}else X.isPoints?Tt.setMode(O.POINTS):X.isSprite&&Tt.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))Tt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let ln=X._multiDrawStarts,Ae=X._multiDrawCounts,fn=X._multiDrawCount,ut=Ie?fe.get(Ie).bytesPerElement:1,Nn=q.get(W).currentProgram.getUniforms();for(let li=0;li<fn;li++)Nn.setValue(O,"_gl_DrawID",li),Tt.render(ln[li]/ut,Ae[li])}else if(X.isInstancedMesh)Tt.renderInstances(Pe,Xt,X.count);else if(K.isInstancedBufferGeometry){let ln=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ae=Math.min(K.instanceCount,ln);Tt.renderInstances(Pe,Xt,Ae)}else Tt.render(Pe,Xt)};function Xd(A,B,K,W){N!==null&&A.isNodeMaterial&&N.setObject(W,A),oe===!0&&Oe.setState(A,K,!1),A.transparent===!0&&A.side===Jt&&A.forceSinglePass===!1?(A.side=rn,A.needsUpdate=!0,Va(A,B,W),A.side=xi,A.needsUpdate=!0,Va(A,B,W),A.side=Jt):Va(A,B,W)}this.compile=function(A,B,K=null){K===null&&(K=A),N!==null&&N.renderStart(A,B,K),S=ge.get(K),S.init(B),_.push(S),K.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(S.pushLight(X),X.castShadow&&S.pushShadow(X))}),A!==K&&A.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(S.pushLight(X),X.castShadow&&S.pushShadow(X))}),S.setupLights(),N!==null&&N.updateLights(S.state.lightsArray),ae=this.localClippingEnabled,oe=Oe.init(this.clippingPlanes,ae),oe===!0&&Oe.setGlobalState(this.clippingPlanes,B),N!==null&&Ge.render(S.state.shadowsArray,K,B);let W=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let be=X.material;if(be)if(Array.isArray(be))for(let Re=0;Re<be.length;Re++){let Se=be[Re];Xd(Se,K,B,X),W.add(Se)}else Xd(be,K,B,X),W.add(be)}),S=_.pop(),N!==null&&N.renderEnd(),W},this.compileAsync=function(A,B,K=null){let W=this.compile(A,B,K);return new Promise(X=>{function be(){if(W.forEach(function(Re){let Ie=q.get(Re).currentProgram;(Ie===void 0||Ie.isReady())&&W.delete(Re)}),W.size===0){X(A);return}setTimeout(be,10)}lt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Th=null;function ig(A){Th&&Th(A)}function qd(){Ts.stop()}function Yd(){Ts.start()}let Ts=new cm;Ts.setAnimationLoop(ig),typeof self<"u"&&Ts.setContext(self),this.setAnimationLoop=function(A){Th=A,Le.setAnimationLoop(A),A===null?Ts.stop():Ts.start()},Le.addEventListener("sessionstart",qd),Le.addEventListener("sessionend",Yd),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(A,B);let K=Le.enabled===!0&&Le.isPresenting===!0,W=E!==null&&(J===null||K)&&E.begin(C,J);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(B),B=Le.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,B,J),S=ge.get(A,_.length),S.init(B),S.state.textureUnits=$.getTextureUnits(),_.push(S),le.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ie.setFromProjectionMatrix(le,Jn,B.reversedDepth),ae=this.localClippingEnabled,oe=Oe.init(this.clippingPlanes,ae),b=ve.get(A,R.length),b.init(),R.push(b),Le.enabled===!0&&Le.isPresenting===!0){let Re=C.xr.getDepthSensingMesh();Re!==null&&Eh(Re,B,-1/0,C.sortObjects)}Eh(A,B,0,C.sortObjects),b.finish(),N!==null&&N.updateLights(S.state.lightsArray),C.sortObjects===!0&&b.sort(Me,qe),Ze=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,Ze&&tt.addToRenderList(b,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&Oe.beginShadows();let X=S.state.shadowsArray;if(Ge.render(X,A,B),oe===!0&&Oe.endShadows(),(W&&E.hasRenderPass())===!1){let Re=b.opaque,Se=b.transmissive;if(S.setupLights(),B.isArrayCamera){let Ie=B.cameras;if(Se.length>0)for(let De=0,it=Ie.length;De<it;De++){let ct=Ie[De];Zd(Re,Se,A,ct)}Ze&&tt.render(A);for(let De=0,it=Ie.length;De<it;De++){let ct=Ie[De];Kd(b,A,ct,ct.viewport)}}else Se.length>0&&Zd(Re,Se,A,B),Ze&&tt.render(A),Kd(b,A,B)}J!==null&&H===0&&($.updateMultisampleRenderTarget(J),$.updateRenderTargetMipmap(J)),W&&E.end(C),A.isScene===!0&&A.onAfterRender(C,A,B),Te.resetDefaultState(),G=-1,Y=null,_.pop(),_.length>0?(S=_[_.length-1],$.setTextureUnits(S.state.textureUnits),oe===!0&&Oe.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,N!==null&&N.renderEnd()};function Eh(A,B,K,W){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLightProbeGrid)S.pushLightProbeGrid(A);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ie)){W&&Ve.setFromMatrixPosition(A.matrixWorld).applyMatrix4(le);let Re=ne.update(A),Se=A.material;Se.visible&&b.push(A,Re,Se,K,Ve.z,null,B)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ie))){let Re=ne.update(A),Se=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ve.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ve.copy(Re.boundingSphere.center)),Ve.applyMatrix4(A.matrixWorld).applyMatrix4(le)),Array.isArray(Se)){let Ie=Re.groups;for(let De=0,it=Ie.length;De<it;De++){let ct=Ie[De],Pe=Se[ct.materialIndex];Pe&&Pe.visible&&b.push(A,Re,Pe,K,Ve.z,ct,B)}}else Se.visible&&b.push(A,Re,Se,K,Ve.z,null,B)}}let be=A.children;for(let Re=0,Se=be.length;Re<Se;Re++)Eh(be[Re],B,K,W)}function Kd(A,B,K,W){let{opaque:X,transmissive:be,transparent:Re}=A;S.setupLightsView(K),oe===!0&&Oe.setGlobalState(C.clippingPlanes,K),W&&y.viewport(j.copy(W)),X.length>0&&za(X,B,K),be.length>0&&za(be,B,K),Re.length>0&&za(Re,B,K),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Zd(A,B,K,W){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[W.id]===void 0){let Pe=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[W.id]=new Ht(1,1,{generateMipmaps:!0,type:Pe?$t:bn,minFilter:ti,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let be=S.state.transmissionRenderTarget[W.id],Re=W.viewport||j;be.setSize(Re.z*C.transmissionResolutionScale,Re.w*C.transmissionResolutionScale);let Se=C.getRenderTarget(),Ie=C.getActiveCubeFace(),De=C.getActiveMipmapLevel();C.setRenderTarget(be),C.getClearColor(Be),Ne=C.getClearAlpha(),Ne<1&&C.setClearColor(16777215,.5),C.clear(),Ze&&tt.render(K);let it=C.toneMapping;C.toneMapping=ei;let ct=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),S.setupLightsView(W),oe===!0&&Oe.setGlobalState(C.clippingPlanes,W),za(A,K,W),$.updateMultisampleRenderTarget(be),$.updateRenderTargetMipmap(be),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let gt=0,Xt=B.length;gt<Xt;gt++){let Pt=B[gt],{object:Tt,geometry:ln,material:Ae,group:fn}=Pt;if(Ae.side===Jt&&Tt.layers.test(W.layers)){let ut=Ae.side;Ae.side=rn,Ae.needsUpdate=!0,Jd(Tt,K,W,ln,Ae,fn),Ae.side=ut,Ae.needsUpdate=!0,Pe=!0}}Pe===!0&&($.updateMultisampleRenderTarget(be),$.updateRenderTargetMipmap(be))}C.setRenderTarget(Se,Ie,De),C.setClearColor(Be,Ne),ct!==void 0&&(W.viewport=ct),C.toneMapping=it}function za(A,B,K){let W=B.isScene===!0?B.overrideMaterial:null;for(let X=0,be=A.length;X<be;X++){let Re=A[X],{object:Se,geometry:Ie,group:De}=Re,it=Re.material;it.allowOverride===!0&&W!==null&&(it=W),Se.layers.test(K.layers)&&Jd(Se,B,K,Ie,it,De)}}function Jd(A,B,K,W,X,be){N!==null&&X.isNodeMaterial&&N.setObject(A,X),A.onBeforeRender(C,B,K,W,X,be),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(C,B,K,W,A,be),X.transparent===!0&&X.side===Jt&&X.forceSinglePass===!1?(X.side=rn,X.needsUpdate=!0,C.renderBufferDirect(K,B,W,X,A,be),X.side=xi,X.needsUpdate=!0,C.renderBufferDirect(K,B,W,X,A,be),X.side=Jt):C.renderBufferDirect(K,B,W,X,A,be),A.onAfterRender(C,B,K,W,X,be)}function Va(A,B,K){B.isScene!==!0&&(B=He);let W=q.get(A),X=S.state.lights,be=S.state.shadowsArray,Re=X.state.version,Se=me.getParameters(A,X.state,be,B,K,S.state.lightProbeGridArray),Ie=me.getProgramCacheKey(Se),De=W.programs;W.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;let it=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;W.envMap=de.get(A.envMap||W.environment,it),W.envMapRotation=W.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,De===void 0&&(A.addEventListener("dispose",ai),De=new Map,W.programs=De);let ct=De.get(Ie);if(ct!==void 0){if(W.currentProgram===ct&&W.lightsStateVersion===Re)return jd(A,Se),ct}else Se.uniforms=me.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,K,Se),A.onBeforeCompile(Se,C),ct=me.acquireProgram(Se,Ie),De.set(Ie,ct),W.uniforms=Se.uniforms;let Pe=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Pe.clippingPlanes=Oe.uniform),jd(A,Se),W.needsLights=ag(A),W.lightsStateVersion=Re,W.needsLights&&(Pe.ambientLightColor.value=X.state.ambient,Pe.lightProbe.value=X.state.probe,Pe.sunLights.value=X.state.sun,Pe.sunLightShadows.value=X.state.sunShadow,Pe.directionalLights.value=X.state.directional,Pe.directionalLightShadows.value=X.state.directionalShadow,Pe.spotLights.value=X.state.spot,Pe.spotLightShadows.value=X.state.spotShadow,Pe.rectAreaLights.value=X.state.rectArea,Pe.ltc_1.value=X.state.rectAreaLTC1,Pe.ltc_2.value=X.state.rectAreaLTC2,Pe.pointLights.value=X.state.point,Pe.pointLightShadows.value=X.state.pointShadow,Pe.hemisphereLights.value=X.state.hemi,Pe.sunShadowMatrix.value=X.state.sunShadowMatrix,Pe.sunShadowCascade.value=X.state.sunShadowCascade,Pe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Pe.spotLightMatrix.value=X.state.spotLightMatrix,Pe.spotLightMap.value=X.state.spotLightMap,Pe.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=S.state.lightProbeGridArray.length>0,W.currentProgram=ct,W.uniformsList=null,ct}function $d(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=Kr.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function jd(A,B){let K=q.get(A);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function sg(A,B){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;x.setFromMatrixPosition(B.matrixWorld);for(let K=0,W=A.length;K<W;K++){let X=A[K];if(X.texture!==null&&X.boundingBox.containsPoint(x))return X}return null}function rg(A,B,K,W,X){B.isScene!==!0&&(B=He),$.resetTextureUnits();let be=B.fog,Re=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,Se=J===null?C.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:nt.workingColorSpace,Ie=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,De=de.get(W.envMap||Re,Ie),it=W.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ct=!!K.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pe=!!K.morphAttributes.position,gt=!!K.morphAttributes.normal,Xt=!!K.morphAttributes.color,Pt=ei;W.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Pt=C.toneMapping);let Tt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ln=Tt!==void 0?Tt.length:0,Ae=q.get(W),fn=S.state.lights;if(oe===!0&&(ae===!0||A!==Y)){let Ct=A===Y&&W.id===G;Oe.setState(W,A,Ct)}let ut=!1;W.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==fn.state.version||Ae.outputColorSpace!==Se||X.isBatchedMesh&&Ae.batching===!1||!X.isBatchedMesh&&Ae.batching===!0||X.isBatchedMesh&&Ae.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Ae.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Ae.instancing===!1||!X.isInstancedMesh&&Ae.instancing===!0||X.isSkinnedMesh&&Ae.skinning===!1||!X.isSkinnedMesh&&Ae.skinning===!0||X.isInstancedMesh&&Ae.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ae.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ae.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ae.instancingMorph===!1&&X.morphTexture!==null||Ae.envMap!==De||W.fog===!0&&Ae.fog!==be||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Oe.numPlanes||Ae.numIntersection!==Oe.numIntersection)||Ae.vertexAlphas!==it||Ae.vertexTangents!==ct||Ae.morphTargets!==Pe||Ae.morphNormals!==gt||Ae.morphColors!==Xt||Ae.toneMapping!==Pt||Ae.morphTargetsCount!==ln||!!Ae.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,Ae.__version=W.version);let Nn=Ae.currentProgram;ut===!0&&(Nn=Va(W,B,X),N&&W.isNodeMaterial&&N.onUpdateProgram(W,Nn,Ae));let li=!1,Ji=!1,sr=!1,St=Nn.getUniforms(),zt=Ae.uniforms;if(y.useProgram(Nn.program)&&(li=!0,Ji=!0,sr=!0),W.id!==G&&(G=W.id,Ji=!0),Ae.needsLights){let Ct=sg(S.state.lightProbeGridArray,X);Ae.lightProbeGrid!==Ct&&(Ae.lightProbeGrid=Ct,Ji=!0)}if(li||Y!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),St.setValue(O,"projectionMatrix",A.projectionMatrix),St.setValue(O,"viewMatrix",A.matrixWorldInverse);let ji=St.map.cameraPosition;ji!==void 0&&ji.setValue(O,pe.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&St.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&St.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),Y!==A&&(Y=A,Ji=!0,sr=!0)}if(Ae.needsLights&&(fn.state.sunShadowMap.length>0&&St.setValue(O,"sunShadowMap",fn.state.sunShadowMap,$),fn.state.directionalShadowMap.length>0&&St.setValue(O,"directionalShadowMap",fn.state.directionalShadowMap,$),fn.state.spotShadowMap.length>0&&St.setValue(O,"spotShadowMap",fn.state.spotShadowMap,$),fn.state.pointShadowMap.length>0&&St.setValue(O,"pointShadowMap",fn.state.pointShadowMap,$)),X.isSkinnedMesh){St.setOptional(O,X,"bindMatrix"),St.setOptional(O,X,"bindMatrixInverse");let Ct=X.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),St.setValue(O,"boneTexture",Ct.boneTexture,$))}X.isBatchedMesh&&(St.setOptional(O,X,"batchingTexture"),St.setValue(O,"batchingTexture",X._matricesTexture,$),St.setOptional(O,X,"batchingIdTexture"),St.setValue(O,"batchingIdTexture",X._indirectTexture,$),St.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&St.setValue(O,"batchingColorTexture",X._colorsTexture,$));let $i=K.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0)&&k.update(X,K,Nn),(Ji||Ae.receiveShadow!==X.receiveShadow)&&(Ae.receiveShadow=X.receiveShadow,St.setValue(O,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(zt.envMapIntensity.value=B.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=CM()),Ji){if(St.setValue(O,"toneMappingExposure",C.toneMappingExposure),Ae.needsLights&&og(zt,sr),be&&W.fog===!0&&Fe.refreshFogUniforms(zt,be),Fe.refreshMaterialUniforms(zt,W,Q,Z,S.state.transmissionRenderTarget[A.id]),Ae.needsLights&&Ae.lightProbeGrid){let Ct=Ae.lightProbeGrid;zt.probesSH.value=Ct.texture,zt.probesMin.value.copy(Ct.boundingBox.min),zt.probesMax.value.copy(Ct.boundingBox.max),zt.probesResolution.value.copy(Ct.resolution)}Kr.upload(O,$d(Ae),zt,$)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Kr.upload(O,$d(Ae),zt,$),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&St.setValue(O,"center",X.center),St.setValue(O,"modelViewMatrix",X.modelViewMatrix),St.setValue(O,"normalMatrix",X.normalMatrix),St.setValue(O,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let Ct=W.uniformsGroups;for(let ji=0,rr=Ct.length;ji<rr;ji++){let ef=Ct[ji];re.update(ef,Nn),re.bind(ef,Nn)}}return Nn}function og(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.sunLights.needsUpdate=B,A.sunLightShadows.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function ag(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(A,B,K){let W=q.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),q.get(A.texture).__webglTexture=B,q.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:K,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){let K=q.get(A);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,K=0){J=A,z=B,H=K;let W=null,X=!1,be=!1;if(A){let Se=q.get(A);if(Se.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(O.FRAMEBUFFER,Se.__webglFramebuffer),j.copy(A.viewport),ue.copy(A.scissor),he=A.scissorTest,y.viewport(j),y.scissor(ue),y.setScissorTest(he),G=-1;return}else if(Se.__webglFramebuffer===void 0)$.setupRenderTarget(A);else if(Se.__hasExternalTextures)$.rebindTextures(A,q.get(A.texture).__webglTexture,q.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let it=A.depthTexture;if(Se.__boundDepthTexture!==it){if(it!==null&&q.has(it)&&(A.width!==it.image.width||A.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(A)}}let Ie=A.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(be=!0);let De=q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(De[B])?W=De[B][K]:W=De[B],X=!0):A.samples>0&&$.useMultisampledRTT(A)===!1?W=q.get(A).__webglMultisampledFramebuffer:Array.isArray(De)?W=De[K]:W=De,j.copy(A.viewport),ue.copy(A.scissor),he=A.scissorTest}else j.copy(Ee).multiplyScalar(Q).floor(),ue.copy(Ke).multiplyScalar(Q).floor(),he=_t;if(K!==0&&(W=D),y.bindFramebuffer(O.FRAMEBUFFER,W)&&y.drawBuffers(A,W),y.viewport(j),y.scissor(ue),y.setScissorTest(he),X){let Se=q.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,Se.__webglTexture,K)}else if(be){let Se=B;for(let Ie=0;Ie<A.textures.length;Ie++){let De=q.get(A.textures[Ie]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ie,De.__webglTexture,K,Se)}}else if(A!==null&&K!==0){let Se=q.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Se.__webglTexture,K)}G=-1};function Qd(A){let B=q.get(A);return(B.__readFormat!==A.format||B.__readType!==A.type)&&(B.__readFormat=A.format,B.__readType=A.type,B.__formatReadable=P.textureFormatReadable(A.format),B.__typeReadable=P.textureTypeReadable(A.type)),B}this.readRenderTargetPixels=function(A,B,K,W,X,be,Re,Se=0){if(!(A&&A.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){y.bindFramebuffer(O.FRAMEBUFFER,Ie);try{let De=A.textures[Se],it=De.format,ct=De.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Se);let Pe=Qd(De);if(Pe.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-W&&K>=0&&K<=A.height-X&&O.readPixels(B,K,W,X,xe.convert(it),xe.convert(ct),be)}finally{let De=J!==null?q.get(J).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(A,B,K,W,X,be,Re,Se=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie)if(B>=0&&B<=A.width-W&&K>=0&&K<=A.height-X){y.bindFramebuffer(O.FRAMEBUFFER,Ie);let De=A.textures[Se],it=De.format,ct=De.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Se);let Pe=Qd(De);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,gt),O.bufferData(O.PIXEL_PACK_BUFFER,be.byteLength,O.STREAM_READ),O.readPixels(B,K,W,X,xe.convert(it),xe.convert(ct),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Xt=J!==null?q.get(J).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,Xt);let Pt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Lp(O,Pt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,gt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,be),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(gt),O.deleteSync(Pt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,K=0){let W=Math.pow(2,-K),X=Math.floor(A.image.width*W),be=Math.floor(A.image.height*W),Re=B!==null?B.x:0,Se=B!==null?B.y:0;$.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,K,0,0,Re,Se,X,be),y.unbindTexture()},this.copyTextureToTexture=function(A,B,K=null,W=null,X=0,be=0){let Re,Se,Ie,De,it,ct,Pe,gt,Xt,Pt=A.isCompressedTexture?A.mipmaps[be]:A.image;if(K!==null)Re=K.max.x-K.min.x,Se=K.max.y-K.min.y,Ie=K.isBox3?K.max.z-K.min.z:1,De=K.min.x,it=K.min.y,ct=K.isBox3?K.min.z:0;else{let zt=Math.pow(2,-X);Re=Math.floor(Pt.width*zt),Se=Math.floor(Pt.height*zt),A.isDataArrayTexture?Ie=Pt.depth:A.isData3DTexture?Ie=Math.floor(Pt.depth*zt):Ie=1,De=0,it=0,ct=0}W!==null?(Pe=W.x,gt=W.y,Xt=W.z):(Pe=0,gt=0,Xt=0);let Tt=xe.convert(B.format),ln=xe.convert(B.type),Ae;B.isData3DTexture?($.setTexture3D(B,0),Ae=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?($.setTexture2DArray(B,0),Ae=O.TEXTURE_2D_ARRAY):($.setTexture2D(B,0),Ae=O.TEXTURE_2D),y.activeTexture(O.TEXTURE0),y.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),y.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),y.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);let fn=y.getParameter(O.UNPACK_ROW_LENGTH),ut=y.getParameter(O.UNPACK_IMAGE_HEIGHT),Nn=y.getParameter(O.UNPACK_SKIP_PIXELS),li=y.getParameter(O.UNPACK_SKIP_ROWS),Ji=y.getParameter(O.UNPACK_SKIP_IMAGES);y.pixelStorei(O.UNPACK_ROW_LENGTH,Pt.width),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pt.height),y.pixelStorei(O.UNPACK_SKIP_PIXELS,De),y.pixelStorei(O.UNPACK_SKIP_ROWS,it),y.pixelStorei(O.UNPACK_SKIP_IMAGES,ct);let sr=A.isDataArrayTexture||A.isData3DTexture,St=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){let zt=q.get(A),$i=q.get(B),Ct=q.get(zt.__renderTarget),ji=q.get($i.__renderTarget);y.bindFramebuffer(O.READ_FRAMEBUFFER,Ct.__webglFramebuffer),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,ji.__webglFramebuffer);for(let rr=0;rr<Ie;rr++)sr&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(A).__webglTexture,X,ct+rr),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(B).__webglTexture,be,Xt+rr)),O.blitFramebuffer(De,it,Re,Se,Pe,gt,Re,Se,O.DEPTH_BUFFER_BIT,O.NEAREST);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||q.has(A)){let zt=q.get(A),$i=q.get(B);y.bindFramebuffer(O.READ_FRAMEBUFFER,U),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,F);for(let Ct=0;Ct<Ie;Ct++)sr?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,zt.__webglTexture,X,ct+Ct):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,zt.__webglTexture,X),St?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$i.__webglTexture,be,Xt+Ct):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,$i.__webglTexture,be),X!==0?O.blitFramebuffer(De,it,Re,Se,Pe,gt,Re,Se,O.COLOR_BUFFER_BIT,O.NEAREST):St?O.copyTexSubImage3D(Ae,be,Pe,gt,Xt+Ct,De,it,Re,Se):O.copyTexSubImage2D(Ae,be,Pe,gt,De,it,Re,Se);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else St?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Ae,be,Pe,gt,Xt,Re,Se,Ie,Tt,ln,Pt.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(Ae,be,Pe,gt,Xt,Re,Se,Ie,Tt,Pt.data):O.texSubImage3D(Ae,be,Pe,gt,Xt,Re,Se,Ie,Tt,ln,Pt):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,be,Pe,gt,Re,Se,Tt,ln,Pt.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,be,Pe,gt,Pt.width,Pt.height,Tt,Pt.data):O.texSubImage2D(O.TEXTURE_2D,be,Pe,gt,Re,Se,Tt,ln,Pt);y.pixelStorei(O.UNPACK_ROW_LENGTH,fn),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ut),y.pixelStorei(O.UNPACK_SKIP_PIXELS,Nn),y.pixelStorei(O.UNPACK_SKIP_ROWS,li),y.pixelStorei(O.UNPACK_SKIP_IMAGES,Ji),be===0&&B.generateMipmaps&&O.generateMipmap(Ae),y.unbindTexture()},this.initRenderTarget=function(A){q.get(A).__webglFramebuffer===void 0&&$.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?$.setTextureCube(A,0):A.isData3DTexture?$.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?$.setTexture2DArray(A,0):$.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){z=0,H=0,J=null,y.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var $r={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Pn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},IM=new _i(-1,1,1,-1,0,1),Zu=class extends et{constructor(){super(),this.setAttribute("position",new ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ze([0,2,0,0,2,0],2))}},PM=new Zu,xs=class{constructor(e){this._mesh=new Ce(PM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,IM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var jr=class extends Pn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof It?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Wi.clone(e.uniforms),this.material=new It({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new xs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ca=class extends Pn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Kc=class extends Pn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Zc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new se);this._width=n.width,this._height=n.height,t=new Ht(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$t}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jr($r),this.copyPass.material.blending=Hn,this.timer=new ca}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ca!==void 0&&(o instanceof Ca?n=!0:o instanceof Kc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Jc=class extends Pn{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ce}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var gm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ce(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Qr=class s extends Pn{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new se(e.x,e.y):new se(256,256),this.clearColor=new ce(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ht(r,o,{type:$t,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Ht(r,o,{type:$t,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Ht(r,o,{type:$t,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=gm;this.highPassUniforms=Wi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new It({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new se(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Wi.clone($r.uniforms),this.blendMaterial=new It({uniforms:this.copyUniforms,vertexShader:$r.vertexShader,fragmentShader:$r.fragmentShader,premultipliedAlpha:!0,blending:vi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ce,this._oldClearAlpha=1,this._basic=new xn,this._fsQuad=new xs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new se(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let i=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;i.push((o*a+(o+1)*l)/c),r.push(c)}return new It({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new se(.5,.5)},direction:{value:new se(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new It({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Qr.BlurDirectionX=new se(1,0);Qr.BlurDirectionY=new se(0,1);var Ia={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var $c=class extends Pn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Wi.clone(Ia.uniforms),this.material=new Br({name:Ia.name,uniforms:this.uniforms,vertexShader:Ia.vertexShader,fragmentShader:Ia.fragmentShader}),this._fsQuad=new xs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},nt.getTransfer(this._outputColorSpace)===ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ua?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===da?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ys?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ma?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ga?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===pa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var jc={id:"sunset",name:"Sunset Pass",blurb:"Golden hour above the clouds",skyTop:"#27347a",skyMid:"#7d6fb8",skyHorizon:"#ffb98c",skyBottom:"#f7cfae",sun:"#ffd8a8",sunDir:[-.32,.16,-.93],fog:"#e8b397",fogNear:120,fogFar:1500,hemiSky:"#a9b6ff",hemiGround:"#4a3044",hemi:.75,sunIntensity:3.1,exposure:.92,meadow:"#5f7f34",meadowDry:"#a1924a",dirt:"#7b5a44",rock:"#77697a",rockDark:"#4b4257",snow:"#f0e9f0",snowShade:"#b9b0d6",snowLine:140,pine:"#1f4a3c",pineLight:"#3f7a4a",trunk:"#4a3328",trees:1,bridge:"#b8452f",aspen:"#f0b440",aspenDark:"#c2702a",peakRock:"#6b5c78",peakRockDark:"#3e3550",peakSnow:"#fbeee8",peakSnowShade:"#b8a9d4",peakSnowLine:.4,cloud:"#f3c3a6",skyCloud:"#ffd9c2",road:"#2c2e3b",roadLine:"#f4efe6",roadDash:"#ffc247",flags:["#ff5a3c","#ffd23f","#3fa7ff","#ffffff","#7a5cff"],barrier:"#f2ede4",barrierStripe:"#ff5a3c",suit:"#ff6a3d",suitDark:"#1d2440",helmet:"#f4f4f6",glove:"#23263a",boot:"#f4f4f6",air:{color:"#fff1dc",count:260,fall:.3,size:.06},strata:!1,grass:"#8a9a45"},LM={...jc,id:"alpine",name:"Alpine Morning",blurb:"Fresh snow, bluebird sky",skyTop:"#1d5fb8",skyMid:"#5f9ae0",skyHorizon:"#d4e6f7",skyBottom:"#eef4fa",sun:"#fff4e2",sunDir:[.45,.42,-.78],fog:"#cddff0",fogNear:160,fogFar:1700,hemiSky:"#cfe4ff",hemiGround:"#2e3a4d",hemi:.7,sunIntensity:2.9,exposure:.78,meadow:"#d9e4f0",meadowDry:"#c6d5e6",dirt:"#8e98a8",rock:"#4a5262",rockDark:"#2f3542",snow:"#e6eef8",snowShade:"#a9bdd6",snowLine:-500,pine:"#173b35",pineLight:"#2f5e4e",trunk:"#3b2a22",trees:1.1,peakRock:"#3a414e",peakRockDark:"#21262f",peakSnow:"#e2ebf7",peakSnowShade:"#9fb3cc",peakSnowLine:.22,cloud:"#e2ecf6",skyCloud:"#ffffff",road:"#3a3f4b",roadLine:"#f4f6fa",roadDash:"#ffb400",flags:["#1e6bff","#ffffff","#ff4b3a","#2fc46b","#ffd23f"],suit:"#1e6bff",suitDark:"#1b2433",helmet:"#ffffff",glove:"#1b2433",boot:"#ff4b3a",air:{color:"#ffffff",count:700,fall:2.2,size:.09},grass:"#e8eef6"},NM={...jc,id:"canyon",name:"Red Rock Canyon",blurb:"Sandstone walls, desert heat",skyTop:"#2f6fbf",skyMid:"#7fb0de",skyHorizon:"#f4d9b4",skyBottom:"#f0cfa2",sun:"#fff0d0",sunDir:[.55,.5,-.66],fog:"#e9c9a0",fogNear:140,fogFar:1600,hemiSky:"#bcd4f0",hemiGround:"#6a3a26",hemi:.7,sunIntensity:3,exposure:.82,meadow:"#b9854f",meadowDry:"#cf9a5c",dirt:"#9c6a45",rock:"#b0573a",rockDark:"#7a3526",snow:"#e8c99a",snowShade:"#c9a47a",snowLine:99999,pine:"#3f4a26",pineLight:"#6f7a3a",trunk:"#5a3b26",trees:.35,bridge:"#3d6b8a",peakRock:"#b8603f",peakRockDark:"#7c3a28",peakSnow:"#e6b98a",peakSnowShade:"#c28a60",peakSnowLine:.75,cloud:"#efd2aa",skyCloud:"#ffffff",road:"#34302e",roadLine:"#f4efe6",roadDash:"#ffd23f",flags:["#ffd23f","#2fb5a8","#ff5a3c","#ffffff","#3d6bd8"],suit:"#2fb5a8",suitDark:"#2a2433",helmet:"#f6f0e6",glove:"#2a2433",boot:"#f6f0e6",air:{color:"#f0c690",count:200,fall:-.2,size:.07},strata:!0,grass:"#a8943f"},Ju=[jc,LM,NM],_m="sunset";try{_m=(location.hash||"").replace("#","").split("-")[0]||localStorage.getItem("hoverline.track")||"sunset"}catch{}var we=Ju.find(s=>s.id===_m)||jc;var Xi=new Uint8Array(512);{let s=1337,e=()=>(s=s*16807%2147483647)/2147483647,t=[...Array(256).keys()];for(let n=255;n>0;n--){let i=Math.floor(e()*(n+1));[t[n],t[i]]=[t[i],t[n]]}for(let n=0;n<512;n++)Xi[n]=t[n&255]}var xm=s=>s*s*s*(s*(s*6-15)+10);function eo(s,e,t){let n=s&1?e:-e,i=s&2?t:-t;return s&4?n+i:(n+i)*.7}function Qc(s,e){let t=Math.floor(s)&255,n=Math.floor(e)&255;s-=Math.floor(s),e-=Math.floor(e);let i=xm(s),r=xm(e),o=Xi[t]+n,a=Xi[t+1]+n,l=eo(Xi[o],s,e)+i*(eo(Xi[a],s-1,e)-eo(Xi[o],s,e)),c=eo(Xi[o+1],s,e-1)+i*(eo(Xi[a+1],s-1,e-1)-eo(Xi[o+1],s,e-1));return l+r*(c-l)}function on(s,e,t=5){let n=0,i=.5,r=0;for(let o=0;o<t;o++)n+=i*Qc(s,e),r+=i,s*=2.03,e*=2.03,i*=.5;return n/r}function $u(s,e,t=5){let n=0,i=.5,r=0;for(let o=0;o<t;o++)n+=i*(1-Math.abs(Qc(s,e)*1.6)),r+=i,s*=2.1,e*=2.1,i*=.5;return n/r}var Ft=(s,e,t)=>{let n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)},ht=9;function Mt(s){return 70*Math.sin(s/330)+38*Math.sin(s/141+1.3)+11*Math.sin(s/63+.4)}function wt(s){return-.14*s+10*Math.sin(s/190)+4*Math.sin(s/77+2)}function Pa(s){return Mt(s+.5)-Mt(s-.5)}function eh(s){return wt(s+.5)-wt(s-.5)}var bi=420,ju=s=>{let e=Math.sin(s*127.1+311.7)*43758.5453;return e-Math.floor(e)};function ys(s){if(s<1)return null;let e=["jump","tunnel","bridge","jump","bridge","none","tunnel","jump"],t={sunset:0,alpine:3,canyon:5}[we.id]||0,n=e[(s-1+t)%e.length],i=s*bi+(ju(s)-.5)*60;return n==="tunnel"?{type:n,s0:i+90,s1:i+250+ju(s+7)*60}:n==="bridge"?{type:n,s0:i+110,s1:i+230+ju(s+3)*40}:n==="jump"?{type:n,s0:i+190,s1:i+206,lip:i+204}:null}function vm(s,e,t){let n=ys(Math.floor(e/bi));return!n||n.type!==s?0:Ft(n.s0-t,n.s0+4,e)*(1-Ft(n.s1-4,n.s1+t,e))}var ym=s=>vm("tunnel",s,30),Qu=s=>vm("bridge",s,35),vs=14,Ms=2.4;function Mm(s){let e=ys(Math.floor(s/bi));if(!e||e.type!=="jump")return 0;let t=(s-(e.lip-vs))/vs;return t>0&&t<=1?Ms*t*t:0}function ed(s,e){let t=Math.sin(e/620+s*1.9)*1.6+Math.sin(e/233+s)*.35,n=Ft(-.2,.6,t);return n+=(0-n)*ym(e),n+=(1-n)*Qu(e),n}function ii(s,e){let t=Math.abs(s),n=s>0?1:-1;if(t<ht+1.5){let g=Qu(e);return g>0?-.35-g*240:-.35}let i=Ft(ht+1,ht+5,t),r=on(s*.045,e*.045,3)*3.5*i,o=on(e*.0035+n*17.3,t*.006,4)*.5+.5,a=Ft(14,90,t)*(14+90*o*o)+Ft(30,140,t)*$u(e*.006+n*5,t*.01,4)*80+Ft(120,520,t)*(140+160*(on(e*.0012+n*3,t*.002,3)*.5+.5)),l=Ft(ht+2,22,t)*(1.5+on(e*.02,t*.05,2)*2),c=Math.pow(Ft(22,190,t),.7)*(330+60*on(e*.004+n*9,t*.01,3)),h=Ft(24,80,t)*$u(e*.01+n*3,t*.03,3)*26,u=l-c+h,d=ed(n,e),f=-.35+i*(.8+r)+a*(1-d)+u*d,m=ym(e);m>0&&(f+=m*Ft(ht+1.5,16,t)*(26+20*on(e*.03,t*.05,2)));let v=Qu(e);if(v>0){let g=-240+Ft(55,150,t)*(240+a*.6)+Ft(50,110,t)*$u(e*.01+n*3,t*.03,3)*50;f+=(g-f)*v}return f}function Sm(s,e){return wt(e)+ii(s,e)}function bm(s,e){let t=[];for(let i=-16;i<=16.001;i+=1.6)t.push(i);let n=[];for(let i=1;i<=s;i++)n.push(16+(e-16)*Math.pow(i/s,2));return[...n.map(i=>-i).reverse(),...t,...n]}var Si={grass:new ce(we.meadow),grassDry:new ce(we.meadowDry),dirt:new ce(we.dirt),rock:new ce(we.rock),rockDark:new ce(we.rockDark),snow:new ce(we.snow),snowShade:new ce(we.snowShade)},js=new ce;function Tm(s,e,t,n,i){let r=Math.abs(s),o=on(s*.015+40,e*.015,3);if(i.copy(Si.grass).lerp(Si.grassDry,Ft(-.25,.35,o)),i.lerp(Si.dirt,1-Ft(ht+1,ht+5,r)),js.copy(Si.rock).lerp(Si.rockDark,Ft(-.2,.3,on(s*.03,e*.03,2))*.8+Ft(-40,-200,t)*.5),i.lerp(js,Ft(.42,.62,n)),we.strata){let c=Math.sin((wt(e)+t)*.22+on(s*.01,e*.01,2)*2.5);js.copy(Si.rock).lerp(Si.rockDark,Ft(-.2,.9,c)),js.lerp(Si.snow,Ft(.75,.95,-c)*.6),i.lerp(js,Ft(.25,.5,n)*.95)}let a=we.snowLine+40*on(e*.003,s*.003,2),l=Ft(a,a+25,t);return js.copy(Si.snow).lerp(Si.snowShade,Ft(.5,.8,n)),i.lerp(js,l*(1-Ft(.55,.85,n))),i}function Ti(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new et,c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Em(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][d]);let m=Em(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Em(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new st(o,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){let v=h.getComponent(d,m);a.setComponent(d+u,m,v)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function td(s,e){if(e===Tu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Xr||e===Ta){let t=s.getIndex();if(t===null){let r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Xr)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Tn=(s,e,t=0,n=new I)=>n.set(Mt(e)+s,wt(e)+t,-e),La=s=>-Math.atan((Mt(s+1)-Mt(s-1))/2);function DM(){let s=document.createElement("canvas");s.width=256,s.height=64;let e=s.getContext("2d");e.fillStyle="#f2c230",e.fillRect(0,0,256,64),e.fillStyle="#1d1d22";for(let n=-64;n<256;n+=48)e.beginPath(),e.moveTo(n,64),e.lineTo(n+24,64),e.lineTo(n+88,0),e.lineTo(n+64,0),e.fill();let t=new tn(s);return t.colorSpace=dt,t.wrapS=t.wrapT=mn,t}function UM(){let s=document.createElement("canvas");s.width=256,s.height=256;let e=s.getContext("2d");e.fillStyle="#6d6259",e.fillRect(0,0,256,256);for(let n=0;n<4e3;n++){let i=70+Math.random()*90|0;e.fillStyle=`rgba(${i},${i-6},${i-12},0.4)`,e.fillRect(Math.random()*256,Math.random()*256,3,3)}e.strokeStyle="#f4efe6",e.lineWidth=18,e.lineJoin="miter";for(let n of[70,170])e.beginPath(),e.moveTo(40,n+50),e.lineTo(128,n-20),e.lineTo(216,n+50),e.stroke();let t=new tn(s);return t.colorSpace=dt,t.wrapS=t.wrapT=mn,t}var th=class{constructor(e){this.scene=e,this.live=new Map,this.mats={rock:new Qe({color:we.rockDark,roughness:.95,flatShading:!0,side:Jt}),concrete:new Qe({color:"#b9b2a8",roughness:.85}),steel:new Qe({color:we.bridge||"#b8452f",metalness:.55,roughness:.45}),lamp:new Qe({color:"#ffd79a",emissive:"#ffb45a",emissiveIntensity:1.4}),ramp:new Qe({map:UM(),roughness:.8}),stripe:new Qe({map:DM(),roughness:.6})}}update(e){let t=Math.floor((e-60)/bi),n=Math.floor((e+1100)/bi);for(let[i,r]of this.live)(i<t||i>n)&&(this.scene.remove(r),r.traverse(o=>o.geometry?.dispose()),this.live.delete(i));for(let i=t;i<=n;i++){if(this.live.has(i))continue;let r=ys(i),o=new vt;r?.type==="tunnel"&&this.tunnel(o,r),r?.type==="bridge"&&this.bridge(o,r),r?.type==="jump"&&this.ramp(o,r),this.scene.add(o),this.live.set(i,o);return}}clear(){for(let e of this.live.values())this.scene.remove(e),e.traverse(t=>t.geometry?.dispose());this.live.clear()}tunnel(e,t){let n=ht+2.2,i=18,r=t.s0-6,o=t.s1+6,a=4,l=Math.ceil((o-r)/a)+1,c=[],h=[],u=new I;for(let M=0;M<l;M++){let T=r+M*a;for(let x=0;x<=i;x++){let b=x/i*Math.PI,S=n+Math.sin(x*2.3+M*.7)*.5+Math.sin(M*1.9+x)*.35;Tn(-Math.cos(b)*S,T,Math.sin(b)*S*.78-.4,u),c.push(u.x,u.y,u.z)}}for(let M=0;M<l-1;M++)for(let T=0;T<i;T++){let x=M*(i+1)+T,b=x+1,S=x+i+1,R=S+1;h.push(x,S,b,b,S,R)}let d=new et;d.setAttribute("position",new ze(c,3)),d.setIndex(h),d.computeVertexNormals();let f=new Ce(d,this.mats.rock);f.castShadow=!0,f.receiveShadow=!0,e.add(f);for(let M of[r,o]){let T=new Ce(new pi(n+.2,.9,6,24,Math.PI),this.mats.concrete);T.scale.y=.78,T.position.copy(Tn(0,M,-.4)),T.rotation.y=La(M),T.castShadow=!0,e.add(T)}let m=new Fi(new Ut(.25,.25,1.4),this.mats.lamp,2*Math.ceil((o-r)/18)),v=new Je,g=new Dt,p=0;for(let M=r+9;M<o;M+=18)for(let T of[-1,1])g.setFromAxisAngle(new I(0,1,0),La(M)),v.compose(Tn(T*(n-1.2),M,6.2),g,new I(1,1,1)),m.setMatrixAt(p++,v);m.count=p,e.add(m)}bridge(e,t){let n=t.s0-30,i=t.s1+30,r=ht+1.4,o=[],a=new Et;for(let h=n;h<i;h+=6){let u=new Ut(r*2,1.6,6.3);a.position.copy(Tn(0,h+3,-.84)),a.lookAt(Tn(0,h+4,-.84).addScaledVector(a.position,-1).multiplyScalar(-1).add(a.position)),a.updateMatrix(),u.applyMatrix4(a.matrix),o.push(u)}let l=new Ce(Ti(o),this.mats.concrete);l.castShadow=l.receiveShadow=!0,e.add(l);let c=16;for(let h of[-1,1]){let u=[];for(let m=0;m<=24;m++){let v=m/24,g=t.s0+(t.s1-t.s0)*v;u.push(Tn(h*r,g,Math.sin(v*Math.PI)*c))}let d=new Ce(new Qo(new Fr(u),60,.45,8),this.mats.steel);d.castShadow=!0,e.add(d);let f=[];for(let m=t.s0+8;m<t.s1-4;m+=8){let v=(m-t.s0)/(t.s1-t.s0),g=Math.sin(v*Math.PI)*c,p=new vn(.06,.06,g,5),M=Tn(h*r,m,g/2);p.translate(M.x,M.y,M.z),f.push(p)}f.length&&e.add(new Ce(Ti(f),this.mats.steel));for(let m of[t.s0,t.s1]){let v=new Ce(new Ut(3,240,5),this.mats.concrete);v.position.copy(Tn(h*(r-1),m,-121)),v.rotation.y=La(m),v.castShadow=!0,e.add(v)}}for(let h=t.s0+(t.s1-t.s0)*.3;h<=t.s0+(t.s1-t.s0)*.71;h+=(t.s1-t.s0)*.2){let u=(h-t.s0)/(t.s1-t.s0),d=Math.sin(u*Math.PI)*c,f=new Ce(new Ut(r*2,.4,.4),this.mats.steel);f.position.copy(Tn(0,h,d)),f.rotation.y=La(h),e.add(f)}}ramp(e,t){let n=ht-.2,i=14,r=[],o=[],a=[],l=t.lip-vs,c=new I;for(let g=0;g<=i;g++){let p=g/i,M=l+p*vs,T=Ms*p*p+.03;for(let x of[-n,n])Tn(x,M,T,c),r.push(c.x,c.y,c.z),o.push(x<0?0:3,p*2)}for(let g of[-n,n])Tn(g,t.lip,0,c),r.push(c.x,c.y,c.z),o.push(g<0?0:3,0);for(let g=0;g<i;g++){let p=g*2;a.push(p,p+1,p+2,p+1,p+3,p+2)}let h=i*2,u=h+2;a.push(h,u,h+1,h+1,u,u+1);let d=new et;d.setAttribute("position",new ze(r,3)),d.setAttribute("uv",new ze(o,2)),d.setIndex(a),d.computeVertexNormals();let f=this.mats.ramp.clone();f.side=Jt;let m=new Ce(d,f);m.castShadow=m.receiveShadow=!0,e.add(m);let v=new Ce(new Ut(n*2,.35,.3),this.mats.stripe);v.position.copy(Tn(0,t.lip,Ms-.1)),v.rotation.y=La(t.lip),e.add(v);for(let g of[-1,1]){let p=[];for(let x=0;x<=i;x++){let b=x/i,S=l+b*vs;Tn(g*n,S,Ms*b*b,c),p.push(c.x,c.y,c.z),Tn(g*n,S,0,c),p.push(c.x,c.y,c.z)}let M=[];for(let x=0;x<i;x++){let b=x*2;M.push(b,b+1,b+2,b+1,b+3,b+2)}let T=new et;T.setAttribute("position",new ze(p,3)),T.setIndex(M),T.computeVertexNormals(),e.add(new Ce(T,this.mats.concrete))}}};function nh(){let s=new vt,e=new vt;s.add(e);let t=1.9,n=.34,i=new kn;i.moveTo(-t/2+n,-n),i.lineTo(t/2-n,-n),i.absarc(t/2-n,0,n,-Math.PI/2,Math.PI/2,!1),i.lineTo(-t/2+n,n),i.absarc(-t/2+n,0,n,Math.PI/2,Math.PI*1.5,!1);let r=new Vs(i,{depth:.07,bevelEnabled:!0,bevelThickness:.035,bevelSize:.04,bevelSegments:4,curveSegments:20});r.rotateX(-Math.PI/2),r.rotateY(Math.PI/2),r.translate(0,0,0);let o=new sn({color:15921909,metalness:.2,roughness:.25,clearcoat:1,clearcoatRoughness:.08}),a=new Ce(r,o);a.castShadow=!0,e.add(a);let l=new us(i,20);l.rotateX(-Math.PI/2),l.rotateY(Math.PI/2),l.scale(.9,1,.9);let c=new Ce(l,new Qe({color:1381655,roughness:1}));c.position.y=.109,e.add(c);let h=new Qe({color:16738877,roughness:.5}),u=new Ce(new Ut(.035,.02,t*.78),h);u.position.set(0,.112,0),e.add(u);let d=new Ce(new Ut(.02,.03,t*.7),h);d.position.set(-n-.035,.03,0),e.add(d);let f=d.clone();f.position.x=n+.035,e.add(f);let m=new Qe({color:2764083,metalness:.9,roughness:.3}),v=new Qe({color:3816776,metalness:.8,roughness:.35}),g=[];for(let ue of[-.55,.55]){let he=new Ce(new vn(.22,.26,.1,24),m);he.position.set(0,-.06,ue),e.add(he);let Be=new Ce(new pi(.19,.03,8,32),v);Be.rotation.x=Math.PI/2,Be.position.set(0,-.115,ue),e.add(Be),g.push(Be)}let p=to(),M=new Ce(new Qn(1.6,3),new xn({map:p,color:1697535,transparent:!0,opacity:.55,blending:vi,depthWrite:!1}));M.rotation.x=-Math.PI/2,M.position.y=-.55,M.visible=!1,s.add(M);let T=new vt;e.add(T);let x=new Qe({color:16734751,roughness:.55}),b=new Qe({color:1776930,roughness:.7}),S=new Qe({color:15329774,roughness:.45}),R=new sn({color:1118481,metalness:1,roughness:.05,clearcoat:1}),_=(ue,he,Be)=>{let Ne=new Ho(ue,he,6,12),Xe=new Ce(Ne,Be);return Xe.castShadow=!0,Xe},E=(ue,he,Be,Ne)=>{let Xe=new vt;return Xe.position.set(he,Be,Ne),ue.add(Xe),Xe},C=E(T,0,.95,0),L=_(.16,.12,b);L.rotation.z=Math.PI/2,C.add(L);let N=[];for(let[ue,he]of[[1,-.26],[-1,.26]]){let Be=E(C,0,0,he*.5),Ne=_(.095,.38,b);Ne.position.y=-.25,Be.add(Ne);let Xe=E(Be,0,-.48,0),Z=_(.085,.36,b);Z.position.y=-.22,Xe.add(Z);let Q=new Ce(new Ut(.16,.1,.3),S);Q.position.set(.02,-.46,0),Q.castShadow=!0,Xe.add(Q),N.push({hip:Be,knee:Xe,side:ue,z:he})}let D=E(C,0,.08,0),U=_(.2,.34,x);U.position.y=.3,D.add(U);let F=new Ce(new Ut(.16,.34,.3),b);F.position.set(-.2,.34,0),F.castShadow=!0,D.add(F);let z=E(D,.02,.66,0),H=new Ce(new fi(.17,24,18),S);H.position.y=.1,H.castShadow=!0,z.add(H);let J=new Ce(new fi(.155,24,12,-.9,1.8,1,1),R);J.position.set(.03,.1,0),J.rotation.y=0,z.add(J);let G=[];for(let ue of[-1,1]){let he=E(D,0,.5,ue*.24),Be=_(.07,.26,x);Be.position.y=-.18,he.add(Be);let Ne=E(he,0,-.36,0),Xe=_(.06,.24,x);Xe.position.y=-.16,Ne.add(Xe);let Z=new Ce(new fi(.075,12,10),b);Z.position.y=-.34,Ne.add(Z),G.push({sh:he,el:Ne,side:ue})}T.rotation.y=0,T.position.y=.1;let Y={crouch:.5,lean:0,drift:0,t:0};function j(ue,he,Be,Ne,Xe){Y.t+=ue,Y.crouch+=(he-Y.crouch)*Math.min(1,ue*6);let Z=Y.crouch;C.position.y=.95-Z*.32;for(let Q of N)Q.hip.rotation.x=Q.side*.18,Q.hip.rotation.z=Z*.9,Q.knee.rotation.z=-Z*1.6;D.rotation.z=-.15-Z*.45+Ne*.3,D.rotation.x=Be*.35,z.rotation.z=.1+Z*.35,z.rotation.y=-Ne*.4;for(let Q of G)Q.sh.rotation.x=Q.side*(.9+Ne*.5+Math.sin(Y.t*3+Q.side)*.05*Xe)+Be*.4,Q.sh.rotation.z=.3+Z*.3,Q.el.rotation.z=-.5-Ne*.4;Ne>.1&&(G[Ne>0?0:1].sh.rotation.z=.3+Z*.3+Ne*.9)}return{root:s,tilt:e,rider:T,pods:g,glow:M,pose:j,accent:h,ringMat:v}}function to(s="rgba(255,255,255,1)"){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,s),n.addColorStop(.35,"rgba(255,255,255,0.35)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,128,128),new tn(e)}function ih(s){let e=new Map,t=new Map,n=s.clone();return wm(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function wm(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)wm(s.children[n],e.children[n],t)}var Rm=new I,Cm=new I,FM=new I,qi=new Dt,rh=new Dt,Na=new Dt,PE=new I(0,1,0);function no(s,e,t,n=1){s.updateWorldMatrix(!0,!1),e.updateWorldMatrix(!1,!1);let i=Rm.setFromMatrixPosition(s.matrixWorld),r=Cm.setFromMatrixPosition(e.matrixWorld).sub(i).normalize(),o=FM.copy(t).sub(i).normalize();qi.setFromUnitVectors(r,o),n<1&&qi.slerp(Na.identity(),1-n),s.getWorldQuaternion(rh).premultiply(qi),s.parent.getWorldQuaternion(Na).invert(),s.quaternion.copy(Na.multiply(rh)),s.updateMatrixWorld(!0)}function sh(s,e,t){qi.setFromAxisAngle(e,t),s.getWorldQuaternion(rh).premultiply(qi),s.parent.getWorldQuaternion(Na).invert(),s.quaternion.copy(Na.multiply(rh)),s.updateMatrixWorld(!0)}function Am(s,e,t,n,i,r){let o=Rm.copy(e).sub(s),a=o.length();a=Math.min(a,(t+n)*.999),o.normalize();let l=(t*t-n*n+a*a)/(2*a),c=Math.sqrt(Math.max(0,t*t-l*l)),h=Cm.copy(i).addScaledVector(o,-i.dot(o)).normalize();return r.copy(s).addScaledVector(o,l).addScaledVector(h,c)}function OM(s,e=we){let t=s.skeleton.bones,n=u=>/Visor/i.test(s.name)?e.glove:/Head/.test(u)?e.helmet:/Neck/.test(u)?e.suitDark:/Hand|Thumb|Index|Middle|Ring|Pinky/.test(u)?e.glove:/Foot|Toe/.test(u)?e.boot:/UpLeg|Leg|Hips/.test(u)?e.suitDark:e.suit,i=s.geometry=s.geometry.clone(),r=i.attributes.skinIndex,o=i.attributes.skinWeight,a=new Float32Array(r.count*3),l=new ce;for(let u=0;u<r.count;u++){let d=0,f=-1;for(let m=0;m<4;m++){let v=o.getComponent(u,m);v>f&&(f=v,d=r.getComponent(u,m))}l.set(n(t[d]?.name||"")),a[u*3]=l.r,a[u*3+1]=l.g,a[u*3+2]=l.b}i.setAttribute("color",new st(a,3));let c=s.material,h=new Qe({vertexColors:!0,map:c.map||null,roughness:.5,metalness:.05,envMapIntensity:.8});h.onBeforeCompile=u=>{u.fragmentShader=u.fragmentShader.replace("#include <map_fragment>",`
      #ifdef USE_MAP
        float lum = dot(texture2D(map, vMapUv).rgb, vec3(0.299, 0.587, 0.114));
        diffuseColor.rgb *= 0.72 + lum * 0.7;
      #endif`)},s.material=h}function oh(s,e,t=we){let n=t===we?s.scene:ih(s.scene),i=b=>n.getObjectByName("mixamorig"+b)||n.getObjectByName("mixamorig:"+b),r={};for(let b of["Hips","Spine","Spine1","Spine2","Neck","Head","HeadTop_End","LeftUpLeg","LeftLeg","LeftFoot","LeftToeBase","RightUpLeg","RightLeg","RightFoot","RightToeBase","LeftArm","LeftForeArm","LeftHand","RightArm","RightForeArm","RightHand"])r[b]=i(b);n.traverse(b=>{b.isMesh&&(b.castShadow=!0,b.receiveShadow=!0,b.frustumCulled=!1),b.isSkinnedMesh&&OM(b,t)});let o=new _n().setFromObject(n),a=1.78/(o.max.y-o.min.y);n.scale.multiplyScalar(a),n.updateMatrixWorld(!0);let l=new vt;l.add(n),n.rotation.y=-Math.PI/2;let c=new ha(n),h=s.animations.find(b=>b.name==="Idle")||s.animations[0];c.clipAction(h).play();let d=(b,S=new I)=>b.getWorldPosition(S),f=(b,S)=>d(r[b]).distanceTo(d(r[S])),m={thigh:f("LeftUpLeg","LeftLeg"),shin:f("LeftLeg","LeftFoot"),upper:f("LeftArm","LeftForeArm"),fore:f("LeftForeArm","LeftHand"),ankle:d(r.LeftFoot).y-o.min.y*a},v=d(r.Hips).y-o.min.y*a,g={crouch:.5,lean:0,drift:0,t:0,sway:0},p={hips:new I,footF:new I,footB:new I,knee:new I,elbow:new I,hand:new I,pole:new I,tmp:new I,up:new I,fwdChar:new I,nose:new I,right:new I},M=null,T=(b,S,R,_)=>M.localToWorld(_.set(b,S,R));function x(b,S,R,_,E,C){M=S,g.t+=b;let L=Math.min(1,b*7);g.crouch+=(R-g.crouch)*L,g.lean+=(_-g.lean)*L,g.drift+=(E-g.drift)*L,c.update(b),l.updateWorldMatrix(!0,!0);let N=g.crouch,D=g.drift;S.getWorldQuaternion(qi),p.up.set(0,1,0).applyQuaternion(qi),p.fwdChar.set(1,0,0).applyQuaternion(qi),p.nose.set(0,0,-1).applyQuaternion(qi);let U=v*(1-.3*N)+Math.sin(g.t*2.1)*.01;T(-.06-N*.12+g.lean*.12,e+U,.02+D*.1,p.hips);let F=r.Hips;F.parent.updateWorldMatrix(!0,!1),F.position.copy(F.parent.worldToLocal(p.tmp.copy(p.hips))),F.updateMatrixWorld(!0),sh(F,p.up,.25+D*.3);let z=.36;T(.02,e+m.ankle,-z,p.footF),T(-.02,e+m.ankle,z,p.footB);for(let[J,G,Y]of[["Left",p.footF,-.7],["Right",p.footB,.5]]){let j=r[J+"UpLeg"],ue=r[J+"Leg"],he=r[J+"Foot"],Be=r[J+"ToeBase"],Ne=d(j,new I);p.pole.copy(p.fwdChar).addScaledVector(p.nose,Y<0?.3:-.3).normalize(),Am(Ne,G,m.thigh,m.shin,p.pole,p.knee),no(j,ue,p.knee),no(ue,he,G),p.tmp.copy(G).addScaledVector(p.fwdChar,.16).addScaledVector(p.nose,Y<0?.06:-.02).addScaledVector(p.up,-m.ankle*.9),Be&&no(he,Be,p.tmp)}T(.25+N*.35+D*.25,e+U+.55-N*.12,.05+D*.1,p.tmp),p.tmp.addScaledVector(p.nose,g.lean*-.05),no(r.Spine,r.Spine1,p.tmp,.9),sh(r.Spine2,p.up,.35+D*.4),sh(r.Neck,p.up,.35),sh(r.Head,p.up,.45-D*.2);let H=Math.sin(g.t*1.7)*.05+Math.sin(g.t*3.3)*.02*C;for(let[J,G,Y]of[["Left",-1,.1],["Right",1,-.05]]){let j=r[J+"Arm"],ue=r[J+"ForeArm"],he=r[J+"Hand"],Be=d(j,new I);J==="Right"&&D>.2?T(.55,e-.35,.3,p.hand):p.hand.copy(Be).addScaledVector(p.nose,G*-(.5+N*.1)).addScaledVector(p.fwdChar,.02).addScaledVector(p.up,-.32+Y+H+g.lean*G*.12),p.pole.copy(p.up).multiplyScalar(-.6).addScaledVector(p.fwdChar,-.8).normalize(),Am(Be,p.hand,m.upper,m.fore,p.pole,p.elbow),no(j,ue,p.elbow),no(ue,he,p.hand)}}return{object:l,update:x,mixer:c}}var si=[{id:"sunset-1",track:"sunset",name:"First Light",length:2600,skill:.35,diff:.1},{id:"sunset-2",track:"sunset",name:"Ridge Run",length:3400,skill:.55,diff:.3},{id:"sunset-3",track:"sunset",name:"Cloudline Cup",length:4200,skill:.7,diff:.45},{id:"alpine-1",track:"alpine",name:"Powder Dash",length:3e3,skill:.55,diff:.35},{id:"alpine-2",track:"alpine",name:"Glacier Gate",length:3800,skill:.7,diff:.5},{id:"alpine-3",track:"alpine",name:"Avalanche Cup",length:4600,skill:.82,diff:.65},{id:"canyon-1",track:"canyon",name:"Dust Devil",length:3200,skill:.7,diff:.55},{id:"canyon-2",track:"canyon",name:"Mesa Sprint",length:4e3,skill:.82,diff:.7},{id:"canyon-3",track:"canyon",name:"Red Rock Grand Prix",length:5e3,skill:.92,diff:.85}],Im=[{name:"Kai",suit:"#e8423a",suitDark:"#2a2230",helmet:"#ffd23f",glove:"#2a2230",boot:"#ffffff"},{name:"Mira",suit:"#7a5cff",suitDark:"#1f1d33",helmet:"#ffffff",glove:"#1f1d33",boot:"#7a5cff"},{name:"Juno",suit:"#2fc46b",suitDark:"#1b2a24",helmet:"#f4f4f6",glove:"#1b2a24",boot:"#2fc46b"},{name:"Rafe",suit:"#ffd23f",suitDark:"#2a2433",helmet:"#2a2433",glove:"#2a2433",boot:"#ffd23f"},{name:"Sora",suit:"#f25fa0",suitDark:"#28203a",helmet:"#ffffff",glove:"#28203a",boot:"#ffffff"}],BM=24;function nd(s,e,t){let n=Mm(s.s);if(s.air)s.vy-=BM*e,s.y+=s.vy*e,s.y<=n&&(s.y=n,s.air=!1,s.landed=s.vy,s.vy=0);else{let i=ys(Math.floor(s.s/bi));i?.type==="jump"&&t<i.lip&&s.s>=i.lip?(s.air=!0,s.vy=s.v*(2*Ms/vs)*.55+2,s.y=Ms,s.airT=0):s.y=n}s.air&&(s.airT=(s.airT||0)+e)}function kM(s,e){let t=document.createElement("canvas");t.width=256,t.height=64;let n=t.getContext("2d");n.fillStyle="rgba(15,17,26,0.72)",n.beginPath(),n.roundRect(8,10,240,44,22),n.fill(),n.fillStyle=e,n.beginPath(),n.arc(34,32,9,0,7),n.fill(),n.fillStyle="#fff",n.font="800 26px system-ui, sans-serif",n.textBaseline="middle",n.fillText(s,54,33);let i=new tn(t);i.colorSpace=dt;let r=new Os(new os({map:i,depthWrite:!1,transparent:!0}));return r.scale.set(1.6,.4,1),r.position.y=2.6,r}var ah=class{constructor(e,t,n,i){let r=Im[n%Im.length];this.name=r.name,this.color=r.suit,this.skill=Math.min(.98,i+(n-2)*.04+(Math.random()-.5)*.06),this.board=nh(),this.board.rider.visible=!1,this.rider=t?oh(t,.11,r):null,this.rider?this.board.tilt.add(this.rider.object):this.board.rider.visible=!0,this.tag=kM(r.name,r.suit),this.board.root.add(this.tag),e.add(this.board.root),this.reset(0,0)}reset(e,t){this.s=e,this.u=t,this.vu=0,this.v=0,this.y=0,this.vy=0,this.air=!1,this.targetU=t,this.crashT=0,this.boost=0,this.boostCd=3+Math.random()*4,this.finish=0,this.drift=0,this.t=Math.random()*10,this.mistake=0,this.board.tilt.rotation.set(0,0,0)}dispose(e){e.remove(this.board.root)}think(e,t){let n=this.targetU,i=25+this.v*.6;for(let r of e){let o=r.s-this.s;if(!(o<2||o>i)){if(r.type==="barrier"){n=r.gapC+this.mistake;break}if(r.type==="rock"&&Math.abs(n-r.u)<r.rad+1.7){let a=n===r.u?r.u>0?-1:1:Math.sign(n-r.u);n=r.u+a*(r.rad+2)+this.mistake;break}r.type==="ring"&&this.skill>.5&&o<i*.8&&(n=r.u)}}this.targetU=Math.max(-ht+1.2,Math.min(ht-1.2,n))}update(e,t,n,i,r){this.t+=e;let o=this.s;if(this.crashT>0)this.crashT-=e,this.v+=(14-this.v)*e*2,this.board.tilt.rotation.z=Math.sin(this.crashT*9)*.6,this.crashT<=0&&(this.board.tilt.rotation.z=0);else{Math.random()<e*(1-this.skill)*.25&&(this.mistake=(Math.random()-.5)*5*(1-this.skill)),Math.random()<e*.5&&(this.mistake*=.3),this.think(t,n);let a=10+this.v*.1,l=Math.max(-a,Math.min(a,(this.targetU-this.u)*(2+this.skill*1.5)));this.vu+=(l-this.vu)*Math.min(1,e*(3+this.skill*3));let c=n*(.9+this.skill*.16);this.boostCd-=e,this.boostCd<=0&&(this.boost=1,this.v+=10+this.skill*12,this.boostCd=7-this.skill*3+Math.random()*5);let h=i.s-this.s,u=h>60?1.05:h<-120?.97:1;this.v+=(c*u-this.v)*e*(this.v>c?.35:.5),this.drift=this.vu*.02}if(this.boost=Math.max(0,this.boost-e*.7),this.s+=this.v*e,this.u+=this.vu*e,this.u=Math.max(-ht+.7,Math.min(ht-.7,this.u)),nd(this,e,o),this.crashT<=0&&this.y<1)for(let a of t){let l=a.s-this.s;if(a.type==="barrier"&&l<.4&&l>-.8&&Math.abs(this.u-a.gapC)>a.gapW/2-.35){this.crashT=1.4,this.v*=.35;break}if(a.type==="rock"&&Math.abs(l)<a.rad*.7&&Math.abs(this.u-a.u)<a.rad*.8+.3){this.crashT=1.4,this.v*=.35;break}}}place(e,t){let n=this.s,i=this.board.root,r=new I(Pa(n),eh(n),-1).normalize();i.position.set(Mt(n)+this.u,wt(n)+.55+this.y+Math.sin(this.t*5.3)*.05,-n),i.lookAt(i.position.clone().sub(r));let o=-this.vu/16;this.crashT<=0&&(this.board.tilt.rotation.z+=(o*.55-this.board.tilt.rotation.z)*Math.min(1,e*8)),this.board.tilt.rotation.x=this.air?Math.sin(this.t*3)*.12:0;let a=Math.min(1,.4+Math.min(1,this.v/70)*.45+this.boost*.15);this.rider&&this.near&&this.rider.update(t,this.board.tilt,a,-o,0,Math.min(1,this.v/70))}};function id(s,e){let t=new vt,n=ht+1.6,i=7.2,r=new Qe({color:"#2b2d3a",metalness:.6,roughness:.4});for(let h of[-n,n]){let u=new Ce(new Ut(.5,i,.5),r);u.position.set(h,i/2,0),u.castShadow=!0,t.add(u)}let o=document.createElement("canvas");o.width=1024,o.height=128;let a=o.getContext("2d");if(a.fillStyle="#15161d",a.fillRect(0,0,1024,128),e)for(let h=0;h<64;h++)for(let u=0;u<2;u++)(h+u)%2&&(a.fillStyle="#f4f4f6",a.fillRect(h*16,u*16,16,16),a.fillRect(h*16,96+u*16,16,16));a.fillStyle="#ffb347",a.fillRect(0,e?32:0,1024,4),a.fillRect(0,e?92:124,1024,4),a.fillStyle="#fff",a.font="italic 900 64px system-ui, sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText(s,512,66);let l=new tn(o);l.colorSpace=dt,l.anisotropy=8;let c=new Ce(new Ut(n*2+.5,1.6,.3),[r,r,r,r,new Qe({map:l,roughness:.6}),new Qe({map:l,roughness:.6})]);if(c.position.y=i-.8,c.castShadow=!0,t.add(c),e){let h=document.createElement("canvas");h.width=256,h.height=32;let u=h.getContext("2d");for(let m=0;m<16;m++)for(let v=0;v<2;v++)u.fillStyle=(m+v)%2?"#f4f4f6":"#15161d",u.fillRect(m*16,v*16,16,16);let d=new tn(h);d.colorSpace=dt;let f=new Ce(new Qn(ht*2,1.2),new Qe({map:d,roughness:.7}));f.rotation.x=-Math.PI/2,f.position.y=.05,t.add(f)}return t}function sd(s,e){s.position.set(Mt(e),wt(e),-e),s.rotation.y=-Math.atan((Mt(e+1)-Mt(e-1))/2)}var Da=s=>s+(["th","st","nd","rd"][(s%100-20)%10]||["th","st","nd","rd"][s%100]||"th");var Yi=160,yn=32,rd=bm(20,700),io=360,Pm=60,Lm=24,Nm=500,Dm=2*(yn/2+1);function HM(s){let e=s>>>0;return()=>{e+=1831565813;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}var an=s=>new ce(s);function od(s,e,t){let n=document.createElement("canvas");n.width=s,n.height=e,t(n.getContext("2d"),s,e);let i=new tn(n);return i.wrapS=i.wrapT=mn,i.anisotropy=8,i}function Um(){let s=od(512,1024,(n,i,r)=>{n.fillStyle=we.road,n.fillRect(0,0,i,r);for(let o=0;o<26e3;o++){let a=Math.random();n.fillStyle=`rgba(${a>.5?"255,240,230":"0,0,10"},${.05+Math.random()*.06})`,n.fillRect(Math.random()*i,Math.random()*r,2,2)}for(let o of[.3,.7]){let a=n.createLinearGradient(i*(o-.1),0,i*(o+.1),0);a.addColorStop(0,"rgba(0,0,0,0)"),a.addColorStop(.5,"rgba(0,0,0,0.18)"),a.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=a,n.fillRect(i*(o-.1),0,i*.2,r)}n.fillStyle=we.roadLine,n.fillRect(i*.055,0,i*.018,r),n.fillRect(i*.927,0,i*.018,r),n.fillStyle=we.roadDash;for(let o=0;o<r;o+=r/2)n.fillRect(i*.492,o,i*.016,r/4);n.fillStyle="#15161d",n.fillRect(0,0,i*.03,r),n.fillRect(i*.97,0,i*.03,r)});s.colorSpace=dt;let e=od(64,8,(n,i,r)=>{n.fillStyle="#000",n.fillRect(0,0,i,r),n.fillStyle="#fff",n.fillRect(0,0,2,r),n.fillRect(i-2,0,2,r)});e.colorSpace=dt;let t=od(256,512,(n,i,r)=>{n.fillStyle="#b4b4b4",n.fillRect(0,0,i,r);for(let o=0;o<9e3;o++){let a=150+Math.random()*100|0;n.fillStyle=`rgba(${a},${a},${a},0.35)`,n.fillRect(Math.random()*i,Math.random()*r,3,3)}n.fillStyle="#909090";for(let o of[.3,.7])n.fillRect(i*(o-.05),0,i*.1,r)});return{road:s,glow:e,rough:t}}function Ss(s,e){let t=s.index?s.toNonIndexed():s,n=t.attributes.position.count,i=new Float32Array(n*3);for(let r=0;r<n;r++)i[r*3]=e.r,i[r*3+1]=e.g,i[r*3+2]=e.b;return t.setAttribute("color",new st(i,3)),t}function lh(s={}){let{tiers:e=7,height:t=9,width:n=2.6,snow:i=!1,seed:r=1}=s,o=[Ss(new vn(.14,.3,t*.35,6).translate(0,t*.17,0),an(we.trunk))],a=an(we.pine),l=an(we.pineLight),c=an("#f2f6fb"),h=new ce,u=d=>{let f=Math.sin(d*91.7+r*13.1)*43758.5;return f-Math.floor(f)};for(let d=0;d<e;d++){let f=d/(e-1),m=n*(1-f*.85)*(.9+u(d)*.2),v=t*(.2+f*.66),g=v+t*.2*(1-f*.4),p=9+d%2,M=[],T=[],x=[],b=[],S=[];for(let L=0;L<p;L++){let N=(L+u(d*10+L)*.4)/p*Math.PI*2+d*.7,D=m*(.85+u(d*20+L)*.3);b.push([Math.cos(N)*D,v-D*.35,Math.sin(N)*D]);let U=N+Math.PI/p;S.push([Math.cos(U)*D*.55,v+D*.05,Math.sin(U)*D*.55])}let R=(L,N,D,U)=>{M.push(...L,...N,...D);let F=N[0]-L[0],z=N[1]-L[1],H=N[2]-L[2],J=D[0]-L[0],G=D[1]-L[1],Y=D[2]-L[2],j=Math.abs(H*J-F*Y)/(Math.hypot(z*Y-H*G,H*J-F*Y,F*G-z*J)||1);h.copy(a).lerp(l,U),i&&j>.55&&u(M.length)>.25&&h.lerp(c,.85);for(let ue=0;ue<3;ue++)T.push(h.r,h.g,h.b)},_=[0,g,0],E=[0,v-m*.25,0];for(let L=0;L<p;L++){let N=b[L],D=S[L],U=b[(L+1)%p],F=.15+f*.35+u(d*30+L)*.25;R(_,D,N,F+.15),R(_,U,D,F+.05),R(E,N,D,F*.35),R(E,D,U,F*.3)}let C=new et;C.setAttribute("position",new ze(M,3)),C.setAttribute("color",new ze(T,3)),C.setAttribute("uv",new ze(new Float32Array(M.length/3*2),2)),C.computeVertexNormals(),o.push(C)}return Ti(o)}function zM(){let s=[],e=new vn(.1,.2,7,6,6).translate(0,3.5,0).toNonIndexed(),t=e.attributes.position,n=new Float32Array(t.count*3),i=an("#e6e0d6"),r=an("#3a3330"),o=new ce;for(let h=0;h<t.count;h+=3){o.copy(Math.sin(t.getY(h)*7.3+h)>.75?r:i);for(let u=0;u<3;u++)n[(h+u)*3]=o.r,n[(h+u)*3+1]=o.g,n[(h+u)*3+2]=o.b}e.setAttribute("color",new st(n,3)),s.push(e);let a=an(we.aspen||"#e0a83a"),l=an(we.aspenDark||"#b8752a");return[[0,7.4,0,1.3],[.8,6.6,.4,1],[-.7,6.4,-.4,1.05],[.3,5.6,-.8,.9],[-.4,8.3,.3,.9],[.6,5.7,.8,.85],[-.8,5.5,.5,.8],[.1,9,-.2,.7]].forEach(([h,u,d,f],m)=>{let v=new jn(f,1).scale(1,1.2,1).translate(h,u,d).toNonIndexed(),g=v.attributes.position,p=new Float32Array(g.count*3);for(let M=0;M<g.count;M+=3){let T=(g.getY(M)+g.getY(M+1)+g.getY(M+2))/3-u;o.copy(l).lerp(a,.45+T/f*.5+Math.sin(M*1.7+m)*.1);for(let x=0;x<3;x++)p[(M+x)*3]=o.r,p[(M+x)*3+1]=o.g,p[(M+x)*3+2]=o.b}v.setAttribute("color",new st(p,3)),s.push(v)}),Ti(s)}function VM(){let s=[],e=new vn(.15,.35,1.8,5).translate(0,.9,0);e.rotateZ(.2),s.push(Ss(e,an(we.trunk)));let t=an(we.pine),n=an(we.pineLight),i=new ce;return[[0,2.2,0,1.6],[1.1,1.8,.3,1.1],[-1,1.9,-.4,1.2],[.2,2.9,-.2,1],[-.3,1.6,1,.9]].forEach(([r,o,a,l],c)=>{let h=new jn(l,0).scale(1.2,.7,1.2).translate(r,o,a).toNonIndexed(),u=h.attributes.position,d=new Float32Array(u.count*3);for(let f=0;f<u.count;f+=3){let m=(u.getY(f)+u.getY(f+1)+u.getY(f+2))/3-o;i.copy(t).lerp(n,.3+m/l*.6+Math.sin(f+c)*.1);for(let v=0;v<3;v++)d[(f+v)*3]=i.r,d[(f+v)*3+1]=i.g,d[(f+v)*3+2]=i.b}h.setAttribute("color",new st(d,3)),s.push(h)}),Ti(s)}function GM(){return we.id==="canyon"?[VM(),lh({tiers:5,height:6,width:2.2,seed:3}),.2]:we.id==="alpine"?[lh({snow:!0,seed:1}),lh({snow:!0,tiers:9,height:12,width:2.4,seed:5}),.35]:[lh({seed:1}),zM(),.3]}function WM(s){let e=new jn(1,1),t=e.attributes.position,n=new I;for(let i=0;i<t.count;i++)n.fromBufferAttribute(t,i),n.multiplyScalar(1+on(n.x*1.3+s,n.y*1.3+n.z*.7,2)*.6),n.y*=.65,t.setXYZ(i,n.x,n.y,n.z);return e.computeVertexNormals(),e}function XM(){let s=Ss(new vn(.06,.07,2.6,6).translate(0,1.3,0),an("#f4efe6")),e=Ss(new vn(.075,.075,.35,6).translate(0,2.2,0),an(we.flags[0])),t=new kn;t.moveTo(0,0),t.lineTo(.8,-.22),t.lineTo(0,-.45);let n=Ss(new us(t).translate(.06,2.6,0),an("#ffffff"));return Ti([s,e,n])}function qM(){let s=[],t=ht+1.2;for(let i of[-t,t])s.push(Ss(new vn(.12,.16,7.5,6).translate(i,7.5/2,0),an("#2b2d3a")));let n=22;for(let i=0;i<n;i++){let r=(i+.5)/n,o=-t+r*t*2,a=7.5-.3-Math.sin(r*Math.PI)*1.3,l=new kn;l.moveTo(-.32,0),l.lineTo(.32,0),l.lineTo(0,-.7),s.push(Ss(new us(l).translate(o,a,0),an(we.flags[i%we.flags.length])))}return Ti(s)}function YM(){let s=[];for(let e=0;e<5;e++){let t=e/5*Math.PI*2,n=new zo(.06,.55+e%3*.18,3,1);n.translate(0,.3,0),n.rotateZ(Math.cos(t)*.35),n.rotateX(Math.sin(t)*.35),s.push(Ss(n,an(we.grass).multiplyScalar(.8+e%2*.3)))}return Ti(s)}var ch=class{constructor(e,t){this.scene=e,this.chunks=[],this.terrainMat=new Qe({vertexColors:!0,flatShading:!0,roughness:.95,metalness:0}),this.roadMat=new Qe({map:t.road,roughnessMap:t.rough,roughness:1,metalness:.1,envMapIntensity:.9}),[this.treeGeo,this.treeGeoB,this.treeMix]=GM(),this.treeMat=new Qe({vertexColors:!0,flatShading:!0,roughness:.9,side:Jt}),this.rockGeo=WM(3.1),this.rockMat=new Qe({color:we.rock,flatShading:!0,roughness:.9}),this.poleGeo=XM(),this.propMat=new Qe({vertexColors:!0,roughness:.7,side:Jt}),this.buntingGeo=qM(),this.tuftGeo=YM(),this.tuftMat=new Qe({vertexColors:!0,roughness:1,flatShading:!0}),this.railMat=new Qe({color:"#b9bfc8",metalness:.75,roughness:.38,side:Jt}),this.railPostGeo=new Ut(.12,.9,.12).translate(0,.45,0),this.job=null}_makeChunk(){let e=rd.length,t=yn+1,n=new et;n.setAttribute("position",new st(new Float32Array(e*t*3),3)),n.setAttribute("color",new st(new Float32Array(e*t*3),3));let i=[];for(let R=0;R<yn;R++)for(let _=0;_<e-1;_++){let E=R*e+_,C=E+1,L=E+e,N=L+1;_+R&1?i.push(E,C,L,C,N,L):i.push(E,C,N,E,N,L)}n.setIndex(i);let r=new Ce(n,this.terrainMat);r.receiveShadow=!0,r.frustumCulled=!1;let o=new et,a=2*(yn+1);o.setAttribute("position",new st(new Float32Array(a*3),3)),o.setAttribute("normal",new st(new Float32Array(a*3),3)),o.setAttribute("uv",new st(new Float32Array(a*2),2));let l=[];for(let R=0;R<yn;R++){let _=R*2;l.push(_,_+1,_+2,_+1,_+3,_+2)}o.setIndex(l);let c=new Ce(o,this.roadMat);c.receiveShadow=!0,c.frustumCulled=!1;let h=(R,_,E,C=!0)=>{let L=new Fi(R,_,E);return L.castShadow=C,L.receiveShadow=!0,L.frustumCulled=!1,L},u=h(this.treeGeo,this.treeMat,io);u.instanceColor=new Bn(new Float32Array(io*3),3);let d=h(this.treeGeoB,this.treeMat,io>>1);d.instanceColor=new Bn(new Float32Array((io>>1)*3),3);let f=h(this.rockGeo,this.rockMat,Pm),m=h(this.poleGeo,this.propMat,Lm),v=new Ce(this.buntingGeo,this.propMat);v.castShadow=!0;let g=h(this.tuftGeo,this.tuftMat,Nm,!1),p=new et,M=4*(yn+1);p.setAttribute("position",new st(new Float32Array(M*3),3));let T=[];for(let R=0;R<2;R++)for(let _=0;_<yn;_++){let E=R*2*(yn+1)+_*2;T.push(E,E+1,E+2,E+1,E+3,E+2)}p.setIndex(T);let x=new Ce(p,this.railMat);x.castShadow=!0,x.frustumCulled=!1;let b=h(this.railPostGeo,this.railMat,Dm),S=new vt;return S.add(r,c,u,d,f,m,v,g,x,b),S.visible=!1,this.scene.add(S),{group:S,terrain:r,road:c,trees:u,treesB:d,rocks:f,poles:m,bunting:v,tufts:g,rail:x,railPosts:b,index:-1,s0:0}}*build(e,t){e.s0=t*Yi;let n=e.s0,i=rd.length,r=e.terrain.geometry,o=r.attributes.position.array,a=r.attributes.color.array,l=new ce;for(let N=0;N<=yn;N++){let D=n+N*Yi/yn,U=Mt(D),F=wt(D);for(let z=0;z<i;z++){let H=rd[z],J=N*i+z,G=ii(H,D);o[J*3]=U+H,o[J*3+1]=F+G,o[J*3+2]=-D;let Y=Math.max(1,Math.abs(H)*.04),j=Math.min(1,Math.abs(ii(H+Y,D)-ii(H-Y,D))/(2*Y)*.8);Tm(H,D,G,j,l),a[J*3]=l.r,a[J*3+1]=l.g,a[J*3+2]=l.b}N%4===3&&(yield)}r.attributes.position.needsUpdate=r.attributes.color.needsUpdate=!0,yield;let c=e.road.geometry,h=c.attributes.position.array,u=c.attributes.normal.array,d=c.attributes.uv.array,f=new I;for(let N=0;N<=yn;N++){let D=n+N*Yi/yn,U=Mt(D),F=wt(D)+.02;f.set(0,2,wt(D+1)-wt(D-1)).normalize();for(let z=0;z<2;z++){let H=N*2+z,J=z?ht+.4:-ht-.4;h[H*3]=U+J,h[H*3+1]=F,h[H*3+2]=-D,u[H*3]=f.x,u[H*3+1]=f.y,u[H*3+2]=f.z,d[H*2]=z,d[H*2+1]=D/18}}c.attributes.position.needsUpdate=c.attributes.normal.needsUpdate=c.attributes.uv.needsUpdate=!0,yield;let m=HM(t*7919+13),v=new Je,g=new Dt,p=new I,M=new I,T=new I(0,1,0),x=0,b=0;for(let N=0;N<1600*we.trees&&x<io;N++){let D=n+m()*Yi,F=(m()<.5?-1:1)*(ht+4+Math.pow(m(),1.5)*240),z=ii(F,D),H=Math.abs(ii(F+1.5,D)-ii(F-1.5,D))/3,J=on(F*.012,D*.012,2);if(H>.75||z>130||z<-120||J<-.05)continue;let G=.8+m()*.9;g.setFromAxisAngle(T,m()*6.28),v.compose(M.set(Mt(D)+F,wt(D)+z-.3,-D),g,p.set(G,G*(.85+m()*.4),G));let Y=.85+m()*.3;l.setRGB(Y,Y*(.95+m()*.1),Y),on(F*.02+50,D*.02,2)>.5-this.treeMix&&b<io>>1?(e.treesB.setMatrixAt(b,v),e.treesB.setColorAt(b++,l)):(e.trees.setMatrixAt(x,v),e.trees.setColorAt(x,l),++x%90===0&&(yield))}e.trees.count=x,e.trees.instanceMatrix.needsUpdate=!0,e.trees.instanceColor.needsUpdate=!0,e.treesB.count=b,e.treesB.instanceMatrix.needsUpdate=!0,e.treesB.instanceColor.needsUpdate=!0;let S=0;for(let N=0;N<240&&S<Pm;N++){let D=n+m()*Yi,U=m()<.5?-1:1,F=.5+Math.pow(m(),3)*5,z=U*(ht+2.5+F*1.3+Math.pow(m(),2)*110);g.setFromEuler(new On(m()*.5,m()*6.28,m()*.5)),v.compose(M.set(Mt(D)+z,Sm(z,D)+F*.1,-D),g,p.set(F,F*(.6+m()*.6),F*(.8+m()*.5))),e.rocks.setMatrixAt(S++,v)}e.rocks.count=S,e.rocks.instanceMatrix.needsUpdate=!0,yield;let R=0;for(let N=0;N<900&&R<Nm;N++){let D=n+m()*Yi,F=(m()<.5?-1:1)*(ht+1.6+Math.pow(m(),1.7)*30),z=ii(F,D);if(Math.abs(ii(F+1,D)-ii(F-1,D))>1.2||on(F*.08,D*.08,2)<-.1)continue;let H=.7+m()*.9;g.setFromAxisAngle(T,m()*6.28),v.compose(M.set(Mt(D)+F,wt(D)+z-.05,-D),g,p.set(H,H,H)),e.tufts.setMatrixAt(R++,v)}e.tufts.count=R,e.tufts.instanceMatrix.needsUpdate=!0;let _=e.rail.geometry.attributes.position.array,E=0;for(let N=0;N<2;N++){let D=N?1:-1,U=D*(ht+.95);for(let F=0;F<=yn;F++){let z=n+F*Yi/yn,H=Mt(z)+U,J=wt(z),G=ed(D,z)>.45?1:0,Y=N*2*(yn+1)+F*2,j=G?.82:-2,ue=G?.5:-2.2;_[Y*3]=H,_[Y*3+1]=J+j,_[Y*3+2]=-z,_[Y*3+3]=H,_[Y*3+4]=J+ue,_[Y*3+5]=-z,G&&F%2===0&&E<Dm&&(v.makeTranslation(H+D*.08,J,-z),e.railPosts.setMatrixAt(E++,v))}}e.rail.geometry.attributes.position.needsUpdate=!0,e.rail.geometry.computeVertexNormals(),e.railPosts.count=E,e.railPosts.instanceMatrix.needsUpdate=!0;let C=0;for(let N=n;N<n+Yi&&C<Lm;N+=14){let D=C&1?1:-1,U=D*(ht+1.2);g.setFromAxisAngle(T,-Math.atan((Mt(N+1)-Mt(N-1))/2)+Math.PI/2),v.compose(M.set(Mt(N)+U,wt(N),-N),g,p.set(1,1,1)),e.poles.setMatrixAt(C++,v)}e.poles.count=C,e.poles.instanceMatrix.needsUpdate=!0;let L=n+80;e.bunting.position.set(Mt(L),wt(L),-L),e.bunting.rotation.y=-Math.atan((Mt(L+1)-Mt(L-1))/2),e.bunting.visible=t%2===0}update(e,t=2.5){let n=performance.now();for(;performance.now()-n<t;){if(!this.job){let r=Math.floor(e/Yi)-1,o=[];for(let c=r;c<r+10;c++)o.push(c);for(let c of this.chunks)c.index!==-2&&!o.includes(c.index)&&(c.index=-1,c.group.visible=!1);let a=o.find(c=>!this.chunks.some(h=>h.index===c));if(a===void 0)return;let l=this.chunks.find(c=>c.index===-1);l||(l=this._makeChunk(),this.chunks.push(l)),l.index=-2,this.job={ch:l,i:a,it:this.build(l,a)}}this.job.it.next().done&&(this.job.ch.index=this.job.i,this.job.ch.group.visible=!0,this.job=null)}}prime(e){this.update(e,1e9)}reset(){this.job=null;for(let e of this.chunks)e.index=-1,e.group.visible=!1}};var hh=class{constructor(){this.ctx=null,this.on=!0,this.muted=!1}unlock(){if(this.ctx){this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=.6,this.master.connect(t.destination),this.hum=t.createGain(),this.hum.gain.value=0,this.lp=t.createBiquadFilter(),this.lp.type="lowpass",this.lp.frequency.value=600,this.lp.Q.value=6,this.o1=t.createOscillator(),this.o1.type="sawtooth",this.o1.frequency.value=70,this.o2=t.createOscillator(),this.o2.type="sawtooth",this.o2.frequency.value=70.7,this.o1.connect(this.lp),this.o2.connect(this.lp),this.lp.connect(this.hum),this.hum.connect(this.master),this.o1.start(),this.o2.start();let n=t.createBuffer(1,t.sampleRate*2,t.sampleRate),i=n.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;this.noiseBuf=n,this.wind=t.createBufferSource(),this.wind.buffer=n,this.wind.loop=!0,this.wf=t.createBiquadFilter(),this.wf.type="bandpass",this.wf.frequency.value=800,this.wf.Q.value=.6,this.wg=t.createGain(),this.wg.gain.value=0,this.wind.connect(this.wf),this.wf.connect(this.wg),this.wg.connect(this.master),this.wind.start(),this.dr=t.createBufferSource(),this.dr.buffer=n,this.dr.loop=!0,this.df=t.createBiquadFilter(),this.df.type="highpass",this.df.frequency.value=2500,this.dg=t.createGain(),this.dg.gain.value=0,this.dr.connect(this.df),this.df.connect(this.dg),this.dg.connect(this.master),this.dr.start()}start(){this.active=!0}stop(){this.active=!1}toggle(){this.on=!this.on,this._apply()}mute(e){this.muted=e,this._apply()}_apply(){this.master&&(this.master.gain.value=this.on&&!this.muted?.6:0)}update(e,t){if(!this.ctx)return;let n=this.ctx.currentTime,i=this.active?1:.3;this.o1.frequency.setTargetAtTime(55+e*1.4+t*40,n,.1),this.o2.frequency.setTargetAtTime(55.8+e*1.42+t*40,n,.1),this.lp.frequency.setTargetAtTime(300+e*14+t*900,n,.1),this.hum.gain.setTargetAtTime(.09*i,n,.2),this.wf.frequency.setTargetAtTime(400+e*18,n,.2),this.wg.gain.setTargetAtTime(Math.min(.5,e/160)*i,n,.2)}setDrift(e){this.ctx&&this.dg.gain.setTargetAtTime(e?.12:0,this.ctx.currentTime,.05)}_tone(e,t,n="sine",i=.2,r=0){if(!this.ctx)return;let o=this.ctx,a=o.currentTime,l=o.createOscillator(),c=o.createGain();l.type=n,l.frequency.setValueAtTime(e,a),r&&l.frequency.exponentialRampToValueAtTime(e*r,a+t),c.gain.setValueAtTime(i,a),c.gain.exponentialRampToValueAtTime(.001,a+t),l.connect(c),c.connect(this.master),l.start(a),l.stop(a+t)}_noise(e,t,n){if(!this.ctx)return;let i=this.ctx,r=i.currentTime,o=i.createBufferSource(),a=i.createBiquadFilter(),l=i.createGain();o.buffer=this.noiseBuf,a.type="lowpass",a.frequency.value=t,l.gain.setValueAtTime(n,r),l.gain.exponentialRampToValueAtTime(.001,r+e),o.connect(a),a.connect(l),l.connect(this.master),o.start(r),o.stop(r+e)}orb(){this._tone(1320+Math.random()*200,.12,"triangle",.12),this._tone(1980,.18,"sine",.06)}ring(e){this._tone(520,.4,"sawtooth",.08,2.2),e&&this._tone(1040,.5,"triangle",.12,1.5)}boost(e){this._noise(.8,3e3,.25+e*.2),this._tone(90,.7,"sawtooth",.15,3)}near(){this._noise(.25,5e3,.2)}scrape(){(!this._sc||this.ctx.currentTime-this._sc>.15)&&(this._sc=this.ctx?.currentTime,this._noise(.15,6e3,.12))}crash(){this._noise(1.2,900,.8),this._tone(120,.8,"square",.2,.3)}};var Ln=s=>new ce(we[s]),ad=new I(...we.sunDir).normalize();function Fm(s,e){let t={top:{value:Ln("skyTop")},mid:{value:Ln("skyMid")},horizon:{value:Ln("skyHorizon")},bottom:{value:Ln("skyBottom")},sunDir:{value:ad},sunColor:{value:Ln("sun")},sunScale:{value:1}},n=new It({uniforms:t,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.); gl_Position = p.xyww; }",fragmentShader:`
      uniform vec3 top, mid, horizon, bottom, sunDir, sunColor; uniform float sunScale; varying vec3 vDir;
      void main(){
        float h = vDir.y;
        vec3 col = h > 0.0
          ? mix(mix(horizon, mid, smoothstep(0.0, 0.28, h)), top, smoothstep(0.22, 0.85, h))
          : mix(horizon, bottom, smoothstep(0.0, -0.25, h));
        float s = max(dot(vDir, sunDir), 0.0);
        col += sunColor * sunScale * (smoothstep(0.9993, 0.9996, s) * 3.0 + pow(s, 48.0) * 0.55 + pow(s, 6.0) * 0.22);
        // warm band hugging the horizon under the sun
        col += sunColor * 0.18 * pow(s, 3.0) * (1.0 - smoothstep(0.0, 0.25, abs(h)));
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`,side:rn,depthWrite:!1,fog:!1}),i=new Ce(new fi(4e3,48,24),n);i.renderOrder=-2,i.frustumCulled=!1,s.add(i),s.background=Ln("fog"),s.fog=new Lo(Ln("fog"),we.fogNear,we.fogFar);let r=new Zr(e),o=new Us,a=n.clone();return a.uniforms.sunScale={value:.25},o.add(new Ce(new fi(10,48,24),a)),s.environment=r.fromScene(o,.02).texture,r.dispose(),i}function KM(s,e,t,n,i,r,o,a,l){let c=new jn(1,a),h=c.attributes.position,u=new I,d=l()*100,f=1.1+l()*.9,m=3+Math.floor(l()*4),v=l()*6.28,g=.12+l()*.22,p=(l()-.5)*.5,M=(l()-.5)*.5,T=[];for(let E=0;E<h.count;E++){u.fromBufferAttribute(h,E);let C=Math.max(-.3,Math.min(1,u.y)),L=Math.atan2(u.z,u.x),N=Qc(u.x*2.1+d,u.z*2.1+u.y*1.7),D=1-g*(.5-.5*Math.cos(m*L+v)),U=(.8+N*.5)*D,F=C>=0?Math.pow(C,f)*o:C*30,z=C>=0?(1-Math.pow(C,1.6)*.93)*U:1.05,H=C>=0?Math.pow(C,1.8):0;T.push(t+(u.x*z+p*H)*r,n+F,i+(u.z*z+M*H)*r)}let x=Ln("peakSnow"),b=Ln("peakSnowShade"),S=Ln("peakRock"),R=Ln("peakRockDark"),_=new ce;for(let E=0;E<T.length;E+=9){let C=(T[E+1]+T[E+4]+T[E+7])/3,L=(C-n)/o,N=T[E+3]-T[E],D=T[E+4]-T[E+1],U=T[E+5]-T[E+2],F=T[E+6]-T[E],z=T[E+7]-T[E+1],H=T[E+8]-T[E+2],J=D*H-U*z,G=U*F-N*H,Y=N*z-D*F,j=1-Math.abs(G)/Math.hypot(J,G,Y),ue=we.peakSnowLine+j*.4+(l()-.5)*.12;_.copy(L>ue?j>.55?b:x:L>ue-.22?S:R);for(let he=0;he<3;he++)e.push(_.r,_.g,_.b)}s.push(...T),c.dispose()}function Om(s){let e=7,t=()=>(e=e*16807%2147483647)/2147483647,n=new vt,i=[{count:22,min:700,max:1300,h0:220,h1:480,detail:2},{count:26,min:1400,max:2400,h0:500,h1:1e3,detail:1}];for(let u of i){let d=[],f=[];for(let g=0;g<u.count;g++){let p=t()*Math.PI*2,M=u.min+t()*(u.max-u.min),T=Math.cos(p)*M,x=Math.sin(p)*M;if(x<0&&Math.abs(T)<M*.2&&u.detail===2)continue;let b=u.h0+t()*(u.h1-u.h0);KM(d,f,T,-380,x,b*(.75+t()*.45),b+380,u.detail,t)}let m=new et;m.setAttribute("position",new ze(d,3)),m.setAttribute("color",new ze(f,3)),m.computeVertexNormals();let v=new Ce(m,new ea({vertexColors:!0,flatShading:!0}));v.frustumCulled=!1,n.add(v)}let r=new It({uniforms:{col:{value:Ln("cloud")},fogCol:{value:Ln("fog")},t:{value:0}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform vec3 col, fogCol; uniform float t; varying vec3 vW;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f); return mix(mix(h(i),h(i+vec2(1,0)),f.x), mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x), f.y); }
      void main(){ vec2 p = vW.xz * 0.004 + vec2(t*0.01, 0.);
        float c = n(p)*0.5 + n(p*2.3)*0.3 + n(p*5.1)*0.2;
        vec3 k = mix(col * 0.82, col * 1.08, c);
        float d = length(vW.xz - cameraPosition.xz);
        gl_FragColor = vec4(mix(k, fogCol, smoothstep(300., 2600., d)), 1.);
        #include <colorspace_fragment>
      }`,fog:!1}),o=new Ce(new Qn(9e3,9e3,1,1).rotateX(-Math.PI/2),r);o.position.y=-300,o.frustumCulled=!1,n.add(o);let a=document.createElement("canvas");a.width=256,a.height=128;let l=a.getContext("2d");for(let u=0;u<38;u++){let d=30+Math.random()*196,f=50+Math.random()*40-Math.abs(d-128)*.15,m=16+Math.random()*30,v=l.createRadialGradient(d,f-m*.3,m*.1,d,f,m);v.addColorStop(0,"rgba(255,255,255,0.9)"),v.addColorStop(.6,"rgba(236,236,245,0.55)"),v.addColorStop(1,"rgba(220,220,235,0)"),l.fillStyle=v,l.beginPath(),l.arc(d,f,m,0,7),l.fill()}let c=l.createLinearGradient(0,0,0,128);c.addColorStop(0,"rgba(0,0,0,0)"),c.addColorStop(1,"rgba(90,80,120,0.35)"),l.globalCompositeOperation="source-atop",l.fillStyle=c,l.fillRect(0,0,256,128);let h=new tn(a);h.colorSpace=dt;for(let u=0;u<26;u++){let d=t()*Math.PI*2,f=2200+t()*1300,m=new Os(new os({map:h,color:we.skyCloud,fog:!1,depthWrite:!1,transparent:!0,opacity:.55+t()*.35})),v=500+t()*900;m.scale.set(v,v*.4,1),m.position.set(Math.cos(d)*f,350+t()*650,Math.sin(d)*f),m.renderOrder=-1,n.add(m)}return s.add(n),{group:n,cloud:o,cloudMat:r}}var uh=class extends gi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new pd(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new wd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new dh(t,at.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new dh(t,at.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ad(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=zi.extractUrlBase(e);o=zi.resolveURL(c,this.path)}else o=zi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new kr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Vm){try{o[at.KHR_BINARY_GLTF]=new Rd(e)}catch(u){i&&i(u);return}r=JSON.parse(o[at.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Ud(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case at.KHR_MATERIALS_UNLIT:o[u]=new dd;break;case at.KHR_DRACO_MESH_COMPRESSION:o[u]=new Cd(r,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:o[u]=new Id;break;case at.KHR_MESH_QUANTIZATION:o[u]=new Pd;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function ZM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Wt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ud=class{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new ce(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],gn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new fs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new aa(h),c.distance=u;break;case"spot":c=new oa(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ei(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},dd=class{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return xn}extendParams(e,t,n){let i=[];e.color=new ce(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],gn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,dt))}return Promise.all(i)}},fd=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},pd=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(r,r)}return Promise.all(i)}},md=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},gd=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},_d=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new ce(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],gn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,dt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},xd=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},vd=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ce().setRGB(r[0],r[1],r[2],gn),Promise.all(i)}},yd=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Md=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new ce().setRGB(r[0],r[1],r[2],gn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,dt)),Promise.all(i)}},Sd=class{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},bd=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Td=class{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Ed=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},wd=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},dh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Ad=class{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==zn.TRIANGLES&&c.mode!==zn.TRIANGLE_STRIP&&c.mode!==zn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let m of u){let v=new Je,g=new I,p=new Dt,M=new I(1,1,1),T=new Fi(m.geometry,m.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,b),l.SCALE&&M.fromBufferAttribute(l.SCALE,b),T.setMatrixAt(b,v.compose(g,p,M));let x=null;for(let b in l)if(b==="_COLOR_0"){let S=l[b];T.instanceColor=new Bn(S.array,S.itemSize,S.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(x===null){let R=T.geometry;x=new et,x.name=R.name;for(let _ in R.attributes)x.setAttribute(_,R.attributes[_]);for(let _ in R.morphAttributes)x.morphAttributes[_]=R.morphAttributes[_];R.index!==null&&x.setIndex(R.index),x.morphTargetsRelative=R.morphTargetsRelative;for(let _ of R.groups)x.addGroup(_.start,_.count,_.materialIndex);R.boundingBox!==null&&(x.boundingBox=R.boundingBox.clone()),R.boundingSphere!==null&&(x.boundingSphere=R.boundingSphere.clone()),x.drawRange.start=R.drawRange.start,x.drawRange.count=R.drawRange.count,x.userData=Object.assign({},R.userData),T.geometry=x}let S=l[b];x.setAttribute(b,new Bn(S.array,S.itemSize,S.normalized))}Et.prototype.copy.call(T,m),this.parser.assignFinalMaterial(T),f.push(T)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Vm="glTF",Ua=12,Bm={JSON:1313821514,BIN:5130562},Rd=class{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ua),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Vm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ua,r=new DataView(e,Ua),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Bm.JSON){let c=new Uint8Array(e,Ua+o,a);this.content=n.decode(c)}else if(l===Bm.BIN){let c=Ua+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Cd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Nd[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Nd[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=so[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let m in f.attributes){let v=f.attributes[m],g=l[m];g!==void 0&&(v.normalized=g)}u(f)},a,c,gn,d)})})}},Id=class{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Pd=class{constructor(){this.name=at.KHR_MESH_QUANTIZATION}},fh=class extends mi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,v=m-c,g=-2*f+3*d,p=f-d,M=1-g,T=p-d+u;for(let x=0;x!==a;x++){let b=o[v+x+a],S=o[v+x+l]*h,R=o[m+x+a],_=o[m+x]*h;r[x]=M*b+T*S+g*R+p*_}return r}},JM=new Dt,Ld=class extends fh{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return JM.fromArray(r).normalize().toArray(r),r}},zn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},so={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},km={9728:Vt,9729:Gt,9984:tc,9985:Vr,9986:Zs,9987:ti},Hm={33071:Un,33648:wr,10497:mn},ld={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$M={CUBICSPLINE:void 0,LINEAR:Ns,STEP:Ls},cd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function jM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Qe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xi})),s.DefaultMaterial}function Qs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ei(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function QM(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function eS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function tS(s){let e,t=s.extensions&&s.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+hd(t.attributes):e=s.indices+":"+hd(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+hd(s.targets[n]);return e}function hd(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Dd(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var iS=new Je,Ud=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ZM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new ia(this.options.manager):this.textureLoader=new la(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new kr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Qs(r,a,i),Ei(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(zi.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=ld[i.type],a=so[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new st(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=ld[i.type],c=so[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,v,g;if(f&&f!==u){let p=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,T=t.cache.get(M);T||(v=new c(a,p*f,i.count*f/h),T=new Fs(v,f/h),t.cache.add(M,T)),g=new rs(T,l,d%f/h,m)}else a===null?v=new c(i.count*l):v=new c(a,d,i.count*l),g=new st(v,l,m);if(i.sparse!==void 0){let p=ld.SCALAR,M=so[i.sparse.indices.componentType],T=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,b=new M(o[1],T,i.sparse.count*p),S=new c(o[2],x,i.sparse.count*l);a!==null&&(g=new st(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,_=b.length;R<_;R++){let E=b[R];if(g.setX(E,S[R*l]),l>=2&&g.setY(E,S[R*l+1]),l>=3&&g.setZ(E,S[R*l+2]),l>=4&&g.setW(E,S[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=km[d.magFilter]||Gt,h.minFilter=km[d.minFilter]||ti,h.wrapS=Hm[d.wrapS]||mn,h.wrapT=Hm[d.wrapT]||mn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Vt&&h.minFilter!==Gt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(v){let g=new Zt(v);g.needsUpdate=!0,d(g)}),t.load(zi.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Ei(u,o),u.userData.mimeType=o.mimeType||nS(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[at.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new ls,un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new as,un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Qe}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[at.KHR_MATERIALS_UNLIT]){let u=i[at.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new ce(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],gn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,dt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Jt);let h=r.alphaMode||cd.OPAQUE;if(h===cd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===cd.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==xn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new se(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==xn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==xn){let u=r.emissiveFactor;a.emissive=new ce().setRGB(u[0],u[1],u[2],gn)}return r.emissiveTexture!==void 0&&o!==xn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,dt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Ei(u,r),t.associations.set(u,{materials:e}),r.extensions&&Qs(i,u,r),u})}createUniqueName(e){let t=bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return zm(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=tS(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[at.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=zm(new et,c,t),c.mode===zn.TRIANGLE_STRIP?d=d.then(f=>td(f,Ta)):c.mode===zn.TRIANGLE_FAN&&(d=d.then(f=>td(f,Xr))),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?jM(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let v=h[f],g=o[f],p,M=c[f];if(g.mode===zn.TRIANGLES||g.mode===zn.TRIANGLE_STRIP||g.mode===zn.TRIANGLE_FAN||g.mode===void 0){let T=r.isSkinnedMesh===!0,x=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");T&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=T&&x?new Uo(v,M):new Ce(v,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===zn.LINES)p=new Hs(v,M);else if(g.mode===zn.LINE_STRIP)p=new ks(v,M);else if(g.mode===zn.LINE_LOOP)p=new Oo(v,M);else if(g.mode===zn.POINTS)p=new cs(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&eS(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ei(p,r),g.extensions&&Qs(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Qs(i,u[0],r),u[0];let d=new vt;r.extensions&&Qs(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Yt(Ru.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new _i(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ei(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new Je;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Fo(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],m=i.samplers[f.sampler],v=f.target,g=v.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,M=i.parameters!==void 0?i.parameters[m.output]:m.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(m),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],v=u[3],g=u[4],p=[];for(let T=0,x=d.length;T<x;T++){let b=d[T],S=f[T],R=m[T],_=v[T],E=g[T];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let C=n._createAnimationTracks(b,S,R,_,E);if(C)for(let L=0;L<C.length;L++)p.push(C[L])}let M=new Gs(r,void 0,p);return Ei(M,i),M})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,iS)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,m=u[0];h.pivot=new I().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Lr:c.length>1?h=new vt:c.length===1?h=c[0]:h=new Et,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ei(h,r),r.extensions&&Qs(n,h,r),r.matrix!==void 0){let u=new Je;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new vt;n.name&&(r.name=i.createUniqueName(n.name)),Ei(r,n),n.extensions&&Qs(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(ih(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof un||d instanceof Zt)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}bs[r.path]===bs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(bs[r.path]){case bs.weights:h=Bi;break;case bs.rotation:h=ki;break;case bs.translation:case bs.scale:h=ds;break;default:switch(n.itemSize){case 1:h=Bi;break;case 2:case 3:default:h=ds;break}break}let u=i.interpolation!==void 0?$M[i.interpolation]:Ns,d=this._getArrayFromAccessor(n);for(let f=0,m=l.length;f<m;f++){let v=new h(l[f]+"."+bs[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Dd(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ki?Ld:fh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function sS(s,e,t){let n=e.attributes,i=new _n;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){let h=Dd(so[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new I,l=new I;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let v=Dd(so[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Mn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function zm(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=Nd[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return nt.workingColorSpace!==gn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),Ei(s,e),sS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?QM(s,e.targets,t):s})}var nr=new URLSearchParams(location.search),Gm=nr.has("orbit")?parseFloat(nr.get("orbit")):0,ir=document.getElementById("c"),Gn=new Xc({canvas:ir,antialias:!1,powerPreference:"high-performance"}),ka=/Mobi|Android/i.test(navigator.userAgent)||nr.has("low");Gn.setPixelRatio(Math.min(devicePixelRatio,ka?1.25:1.75));Gn.toneMapping=Ys;Gn.toneMappingExposure=we.exposure;Gn.shadowMap.enabled=!0;Gn.shadowMap.type=Xs;var Bt=new Us,Ot=new Yt(64,1,.1,5e3),rS=new sa(we.hemiSky,we.hemiGround,we.hemi);Bt.add(rS);var Ai=new fs(we.sun,we.sunIntensity);Ai.castShadow=!0;Ai.shadow.mapSize.set(ka?1024:2048,ka?1024:2048);Object.assign(Ai.shadow.camera,{left:-60,right:60,top:60,bottom:-60,near:1,far:500});Ai.shadow.radius=3;Ai.shadow.bias=-4e-4;Ai.shadow.normalBias=.04;Bt.add(Ai,Ai.target);var yh=new fs(we.skyHorizon,.9);Bt.add(yh,yh.target);var oS=new Ht(1,1,{type:$t,samples:ka?0:4}),co=new Zc(Gn,oS);co.addPass(new Jc(Bt,Ot));var Hd=new Qr(new se(1,1),.2,.4,.98);co.addPass(Hd);co.addPass(new $c);var xh=new jr({uniforms:{tDiffuse:{value:null},uSpeed:{value:0},uHit:{value:0},uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uSpeed, uHit, uTime; varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec2 c = vUv - 0.5; float d = length(c);
      // radial speed blur + chromatic split toward the edges
      vec3 col = vec3(0.); float w = 0.;
      float amt = uSpeed * 0.035 * smoothstep(0.15, 0.7, d);
      for (int i = 0; i < 6; i++) {
        float k = float(i) / 5.0;
        vec2 uv = vUv - c * amt * k;
        col.r += texture2D(tDiffuse, uv - c * 0.004 * uSpeed).r;
        col.g += texture2D(tDiffuse, uv).g;
        col.b += texture2D(tDiffuse, uv + c * 0.004 * uSpeed).b;
        w += 1.;
      }
      col /= w;
      col *= 1.0 - smoothstep(0.5, 1.0, d) * 0.35;       // vignette
      col = mix(col, vec3(1.0, 0.25, 0.15), uHit * 0.35 * smoothstep(0.2, 0.8, d));
      
      gl_FragColor = vec4(col, 1.);
    }`});co.addPass(xh);function zd(){let s=innerWidth,e=innerHeight;Gn.setSize(s,e,!1),co.setSize(s,e),Hd.setSize(s/2,e/2),Ot.aspect=s/e,Ot.userData.baseFov=s/e<1?78:62,Ot.updateProjectionMatrix()}addEventListener("resize",zd);var dw=nr.has("fixedq"),lo,At,Mh=null,Zm,Fd,Vd,Jm=null,Vn=[],Fa=[];var Oa=class{constructor(e,t,n=vi){this.max=e,this.n=0;let i=new et;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.baseSize=new Float32Array(e),i.setAttribute("position",new st(this.pos,3)),i.setAttribute("color",new st(this.col,3)),i.setAttribute("size",new st(this.size,1)),i.setAttribute("alpha",new st(this.alpha,1)),this.mat=new It({uniforms:{map:{value:t},scale:{value:400},opacity:{value:1}},vertexShader:`attribute float size; attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC;
        uniform float scale; void main(){ vA=alpha; vC=color; vec4 mv=modelViewMatrix*vec4(position,1.); gl_PointSize=size*scale/-mv.z; gl_Position=projectionMatrix*mv; }`,fragmentShader:"uniform sampler2D map; uniform float opacity; varying float vA; varying vec3 vC; void main(){ vec4 t=texture2D(map, gl_PointCoord); gl_FragColor=vec4(vC*t.rgb, t.a*vA*opacity); }",transparent:!0,depthWrite:!1,blending:n}),this.points=new cs(i,this.mat),this.points.frustumCulled=!1,Bt.add(this.points)}emit(e,t,n,i,r){if(this.n>=this.max)return;let o=this.n++;this.pos.set([e.x,e.y,e.z],o*3),this.vel.set([t.x,t.y,t.z],o*3),this.col.set([n.r,n.g,n.b],o*3),this.baseSize[o]=i,this.life[o]=this.maxLife[o]=r}update(e,t=.9,n=0){for(let r=0;r<this.n;r++){if(this.life[r]-=e,this.life[r]<=0){this._kill(r),r--;continue}let o=r*3,a=Math.pow(t,e*60);this.vel[o]*=a,this.vel[o+1]=this.vel[o+1]*a-n*e,this.vel[o+2]*=a,this.pos[o]+=this.vel[o]*e,this.pos[o+1]+=this.vel[o+1]*e,this.pos[o+2]+=this.vel[o+2]*e;let l=this.life[r]/this.maxLife[r];this.alpha[r]=l,this.size[r]=this.baseSize[r]*(.4+.6*l)}for(let r=this.n;r<this.max;r++)this.alpha[r]=0;let i=this.points.geometry.attributes;i.position.needsUpdate=i.color.needsUpdate=i.size.needsUpdate=i.alpha.needsUpdate=!0,this.points.geometry.setDrawRange(0,this.n)}_kill(e){let t=--this.n;if(e!==t){for(let n of[this.pos,this.vel,this.col])for(let i=0;i<3;i++)n[e*3+i]=n[t*3+i];for(let n of[this.life,this.maxLife,this.baseSize,this.alpha,this.size])n[e]=n[t]}}clear(){this.n=0}},Od=class{constructor(e=90){this.n=e;let t=new et;this.p=new Float32Array(e*6),this.seed=[],t.setAttribute("position",new st(this.p,3)),this.mat=new as({color:16777215,transparent:!0,opacity:0,blending:vi,depthWrite:!1}),this.lines=new Hs(t,this.mat),this.lines.frustumCulled=!1,Ot.add(this.lines);for(let n=0;n<e;n++)this.seed.push(this._spawn({},!0))}_spawn(e,t){let n=Math.random()*Math.PI*2,i=2.2+Math.random()*5;return e.x=Math.cos(n)*i,e.y=Math.sin(n)*i*.65,e.z=t?-Math.random()*60:-60,e}update(e,t,n){this.mat.opacity=n*.35;for(let i=0;i<this.n;i++){let r=this.seed[i];r.z+=t*e*1.6,r.z>0&&this._spawn(r);let o=1.5+t*.06;this.p.set([r.x,r.y,r.z,r.x,r.y,r.z-o],i*6)}this.lines.geometry.attributes.position.needsUpdate=!0}},Bd=class{constructor(e){this.cfg=e,this.n=ka?e.count>>1:e.count,this.box=new I(90,40,110);let t=new et;this.p=new Float32Array(this.n*3),this.ph=new Float32Array(this.n);for(let n=0;n<this.n;n++)this.p[n*3]=Math.random()*this.box.x,this.p[n*3+1]=Math.random()*this.box.y,this.p[n*3+2]=Math.random()*this.box.z,this.ph[n]=Math.random()*6.28;this.world=new Float32Array(this.n*3),t.setAttribute("position",new st(this.world,3)),this.points=new cs(t,new ls({color:e.color,size:e.size*3,map:to(),transparent:!0,depthWrite:!1,opacity:.85,sizeAttenuation:!0})),this.points.frustumCulled=!1,Bt.add(this.points),this.t=0}update(e,t,n){this.t+=e;let i=this.box,r=this.p,o=this.world;for(let a=0;a<this.n;a++){let l=a*3;r[l]+=(Math.sin(this.t*.7+this.ph[a])*.6-n.x)*e,r[l+1]+=(-this.cfg.fall+Math.cos(this.t*.9+this.ph[a])*.3-n.y)*e,r[l+2]+=-n.z*e,o[l]=t.x-i.x/2+((r[l]-t.x)%i.x+i.x*2)%i.x,o[l+1]=t.y-i.y/2+((r[l+1]-t.y)%i.y+i.y*2)%i.y,o[l+2]=t.z-i.z/2+((r[l+2]-t.z)%i.z+i.z*2)%i.z}this.points.geometry.attributes.position.needsUpdate=!0}},kd,Wm=new I,nn={};function aS(){let s=lS("#b9b4aa",256);nn.barrier=new Qe({color:we.barrier,roughness:.8,map:s}),nn.stripe=new Qe({color:we.barrierStripe,roughness:.6}),nn.rock=new Qe({color:we.rock,roughness:.9,flatShading:!0}),nn.ring=new Qe({color:we.barrierStripe,roughness:.5}),nn.ringFrame=new Qe({color:2830134,metalness:.9,roughness:.35}),nn.orb=new Qe({color:16761415,metalness:.6,roughness:.25});let e=new kn;e.moveTo(-.33,0),e.lineTo(.33,0),e.lineTo(.3,.08),e.lineTo(.14,.33),e.lineTo(.1,.85),e.lineTo(-.1,.85),e.lineTo(-.14,.33),e.lineTo(-.3,.08),e.closePath();let t=new Vs(e,{depth:3,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:2});t.translate(0,0,-1.5),t.rotateY(Math.PI/2),nn.barrierGeo=t;let n=new jn(1,1),i=new I,r=n.attributes.position;for(let o=0;o<r.count;o++)i.fromBufferAttribute(r,o),i.multiplyScalar(1+on(i.x*1.3+9,i.y*1.3+i.z,4)*.5),r.setXYZ(o,i.x,i.y*.8,i.z);n.computeVertexNormals(),nn.rockGeo=n,nn.orbGeo=new jo(.24,0)}function lS(s,e){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d");n.fillStyle=s,n.fillRect(0,0,e,e);for(let r=0;r<e*e/3;r++){let o=Math.random()*90|0;n.fillStyle=`rgba(${o},${o},${o},0.18)`,n.fillRect(Math.random()*e,Math.random()*e,2,2)}let i=new tn(t);return i.wrapS=i.wrapT=mn,i.colorSpace=dt,i}var ri=[],tr=0;function ph(s,e,t,n=0){s.position.set(Mt(t)+e,wt(t)+n,-t),s.rotation.y=Math.atan(Pa(t))}function cS(s,e){for(;tr<s;){let t=tr,n=Math.random(),i=ys(Math.floor(t/bi));if(i?.type==="jump"&&t>i.s0-40&&t<i.lip+50||w.race&&t>w.race.length-60){tr+=30;continue}if(n<.36){let r=Math.max(3.2,6.5-e*2.5),o=(Math.random()*2-1)*(ht-r/2-.5),a=new vt;for(let l=-ht+1.5;l<=ht-1.4;l+=3.05){if(Math.abs(l-o)<r/2+1.5)continue;let c=new Ce(nn.barrierGeo,nn.barrier);c.castShadow=c.receiveShadow=!0,c.position.x=l,a.add(c);let h=new Ce(new Ut(2.9,.08,.02),nn.stripe);h.position.set(l,.62,.115),a.add(h)}ph(a,0,t),Bt.add(a),ri.push({type:"barrier",s:t,gapC:o,gapW:r,mesh:a,hit:!1})}else if(n<.6){let r=1+(Math.random()<e?1:0);for(let o=0;o<r;o++){let a=1.3+Math.random()*1.2,l=(Math.random()*2-1)*(ht-2),c=new Ce(nn.rockGeo,nn.rock);c.castShadow=c.receiveShadow=!0,c.scale.set(a,a,a),ph(c,l,t+o*9,a*.45),c.rotation.set(Math.random(),Math.random()*6,Math.random()),Bt.add(c),ri.push({type:"rock",s:t+o*9,u:l,rad:a,mesh:c})}}else if(n<.8){let r=(Math.random()*2-1)*(ht-3),o=new vt,a=new Ce(new pi(2.1,.1,12,48),nn.ring),l=new Ce(new pi(2.3,.14,8,48),nn.ringFrame);a.position.y=l.position.y=2.3,o.add(l,a),ph(o,r,t),Bt.add(o),ri.push({type:"ring",s:t,u:r,mesh:o,done:!1,ring:a})}if(Math.random()<.7){let r=(Math.random()*2-1)*5,o=2+Math.random()*3,a=Math.random()*6;for(let l=0;l<7;l++){let c=t+22+l*5,h=r+Math.sin(a+l*.6)*o,u=new Ce(nn.orbGeo,nn.orb);ph(u,h,c,1),Bt.add(u),ri.push({type:"orb",s:c,u:h,mesh:u})}}tr+=Math.max(34,70-e*34)+Math.random()*30}}function Sh(s=1/0){for(let e=ri.length-1;e>=0;e--)ri[e].s<s&&(Bt.remove(ri[e].mesh),ri.splice(e,1))}var Ye={hud:document.getElementById("hud"),speed:document.getElementById("speed"),dist:document.getElementById("dist"),score:document.getElementById("score"),flow:document.getElementById("flowfill"),flowWrap:document.getElementById("flow"),mult:document.getElementById("mult"),pop:document.getElementById("pops"),menu:document.getElementById("menu"),over:document.getElementById("over"),best:document.getElementById("best"),final:document.getElementById("final"),finalBest:document.getElementById("finalbest"),shards:document.getElementById("shards"),finalShards:document.getElementById("finalshards"),revive:document.getElementById("revive"),results:document.getElementById("results"),resTitle:document.getElementById("restitle"),resPlace:document.getElementById("resplace"),resTable:document.getElementById("restable"),resNext:document.getElementById("resnext"),resNote:document.getElementById("resnote"),count:document.getElementById("count"),pos:document.getElementById("pos"),time:document.getElementById("rtime"),prog:document.getElementById("prog"),progFill:document.getElementById("progfill"),draft:document.getElementById("draft"),levels:document.getElementById("levels"),newbest:document.getElementById("newbest"),loading:document.getElementById("loading")},En={get(s,e){try{let t=localStorage.getItem("hoverline."+s);return t==null?e:JSON.parse(t)}catch{return e}},set(s,e){try{localStorage.setItem("hoverline."+s,JSON.stringify(e))}catch{}}},w={mode:"loading",s:0,u:0,vu:0,v:0,flow:0,mult:1,score:0,shards:0,drift:0,driftHeld:0,boost:0,time:0,shake:0,hit:0,crashT:0,revived:!1,best:En.get("best."+we.id,0),bank:En.get("shards",0),hover:0,yaw:0,y:0,vy:0,air:!1,airT:0,race:null,raceT:0,countT:0,finishT:0,invuln:0,place:1,camPos:new I,camLook:new I,slowmo:1,lastSteer:0,combo:0},Nt={left:0,right:0,drift:!1,touches:new Map,pointerX:null},Lt=new hh,oi={cg:null};function oo(s,e=""){let t=document.createElement("div");t.className="pop "+e,t.textContent=s,Ye.pop.appendChild(t),setTimeout(()=>t.remove(),1100)}function Zi(s=!1,e=w.race){if(s)w.revived=!0,w.v=30,Sh(w.s+60),tr=Math.max(tr,w.s+120),w.u=0;else{w.race=e,w.s=0,w.u=0,w.score=0,w.shards=0,w.flow=.2,w.mult=1,w.revived=!1,w.time=0,Sh(),tr=260,lo.reset(),Vd.clear();for(let t of Vn)t.dispose(Bt);Vn=[];for(let t of Fa)Bt.remove(t);if(Fa=[],w.v=30,e){w.s=20,w.v=0,w.raceT=0,w.countT=3.2,w.finishT=0;let t=[[-6,32],[0,36],[6,32],[-3,26],[3,26]];for(let r=0;r<5;r++){let o=new ah(Bt,Jm,r,e.skill);o.reset(t[r][1],t[r][0]),Vn.push(o)}let n=id("START",!1);sd(n,40),Fa.push(n);let i=id("FINISH",!0);sd(i,e.length),Fa.push(i);for(let r of Fa)Bt.add(r)}lo.prime(w.s)}w.vu=0,w.boost=0,w.drift=0,w.driftHeld=0,w.hit=0,w.crashT=0,w.slowmo=1,w.combo=0,w.y=0,w.vy=0,w.air=!1,w.invuln=0,At.root.visible=!0,At.tilt.rotation.set(0,0,0),At.tilt.position.set(0,0,0),w.mode=w.race&&!s?"countdown":"play",Ye.menu.classList.add("hidden"),Ye.over.classList.add("hidden"),Ye.results.classList.add("hidden"),Ye.hud.classList.remove("hidden"),Ye.hud.classList.toggle("racing",!!w.race),Lt.start();try{oi.cg?.game.gameplayStart()}catch{}}function hS(){w.mode="finished",w.finishT=w.raceT,w.resultsIn=2.6,oo(Da(w.place)+" PLACE","big")}function uS(){w.mode="results";let s=[{name:"You",color:we.suit,t:w.finishT,you:!0}];for(let l of Vn)s.push({name:l.name,color:l.color,t:l.finish||w.raceT+Math.max(0,w.race.length-l.s)/Math.max(10,l.v)});s.sort((l,c)=>l.t-c.t);let e=s.findIndex(l=>l.you)+1,t=l=>`${Math.floor(l/60)}:${(l%60).toFixed(2).padStart(5,"0")}`;Ye.resTitle.textContent=e===1?"VICTORY":e<=3?"PODIUM":"FINISHED",Ye.resPlace.textContent=Da(e),Ye.resTable.innerHTML=s.map((l,c)=>`<div class="rrow${l.you?" you":""}"><span class="rp">${c+1}</span><span class="rc" style="background:${l.color}"></span><span class="rn">${l.name}</span><span class="rt">${t(l.t)}</span></div>`).join("");let n=si.indexOf(w.race),i=En.get("unlocked",1);e<=3&&n+2>i&&En.set("unlocked",n+2);let r="place."+w.race.id,o=En.get(r,99);e<o&&En.set(r,e);let a=si[n+1];Ye.resNext.classList.toggle("hidden",!(e<=3&&a)),Ye.resNote.textContent=e<=3?a?`Unlocked: ${a.name}`:"You won the final cup!":"Finish top 3 to unlock the next race",Ye.results.classList.remove("hidden"),Ye.hud.classList.add("hidden"),Lt.stop();try{oi.cg?.game.gameplayStop(),e===1&&oi.cg?.game.happytime()}catch{}}function Xm(s){if(w.mode!=="play"||nr.has("god")||w.invuln>0)return;w.mode="crash",w.crashT=0,w.hit=1,w.shake=1.2,Lt.crash();let e=At.root.position;for(let t=0;t<80;t++)ao.emit(e,new I((Math.random()-.5)*18,Math.random()*10,(Math.random()-.5)*18-w.v*.3),new ce(1,.55+Math.random()*.3,.2),.25,.6+Math.random()*.6),Ha.emit(e,new I((Math.random()-.5)*10,Math.random()*6,(Math.random()-.5)*10),new ce(.1,.9,1),.6,.8);try{oi.cg?.game.gameplayStop()}catch{}}function dS(){w.mode="over";let s=Math.floor(w.score),e=s>w.best;e&&(w.best=s,En.set("best."+we.id,s)),w.bank+=w.shards,En.set("shards",w.bank),Ye.final.textContent=s.toLocaleString(),Ye.finalBest.textContent=w.best.toLocaleString(),Ye.finalShards.textContent="+"+w.shards,Ye.newbest.classList.toggle("hidden",!e),Ye.revive.classList.toggle("hidden",w.revived||!oi.cg),Ye.over.classList.remove("hidden"),Ye.hud.classList.add("hidden"),Lt.stop()}var Kt=new I,Ki=new I,ro=new I,fS=new I,pS=new I(0,1,0),mS=new ce(.35,.3,.28),qm=new ce(1,.55,.15),gS=new ce(1,.75,.2),ao,Ha,$m,Ba,mh=.016;function jm(s,e=s){mh=e,w.time+=s;let t=w.mode==="play"||w.mode==="finished",n=w.race?Math.min(1,w.race.diff+w.s/w.race.length*.25):Math.min(1,w.s/6e3);if(w.mode==="countdown"){let f=Math.ceil(w.countT);w.countT-=s;let m=Math.ceil(w.countT);if(m!==f&&m>0&&(Ye.count.textContent=m,Ye.count.className="show",Lt.ring(!1)),w.countT<=0){w.mode="play",w.v=26,Ye.count.textContent="GO!",Ye.count.className="show go",Lt.ring(!0),setTimeout(()=>{Ye.count.className=""},700);for(let v of Vn)v.v=22+Math.random()*4}}if(w.race&&(w.mode==="play"||w.mode==="finished"||w.mode==="crash")&&(w.raceT+=s),w.invuln=Math.max(0,w.invuln-s),w.mode==="menu"&&(w.v=30,w.s+=w.v*s,w.u=Math.sin(w.time*.5)*4,w.vu=Math.cos(w.time*.5)*2),t){let f=w.mode==="finished"?-w.u*.2:Nt.right-Nt.left+(Nt.pointerX??0),m=Math.max(-1,Math.min(1,f)),v=34+42*n,g=11+w.v*.12;if(Nt.drift&&w.v>20&&w.mode==="play"){if(w.driftHeld+=s,w.drift+=((m>=0?1:-1)-w.drift)*Math.min(1,s*7),w.vu+=(m*g*.55-w.vu)*Math.min(1,s*1.8),w.v-=w.v*.18*s,w.flow=Math.min(1,w.flow+s*(.22+Math.abs(m)*.25)*(w.v/40)),Math.random()<.9){let S=At.root.position;Kt.set(S.x,S.y-.5,S.z),ao.emit(Kt,Ki.set((Math.random()-.5)*4-w.drift*3,Math.random()*2.5,6+Math.random()*6),qm,.14,.35)}Lt.setDrift(1)}else{if(w.driftHeld>.3&&w.flow>.12){let S=12+34*w.flow;w.v+=S,w.boost=1,w.shake=.5,w.mult=Math.min(8,w.mult+(w.flow>.8?2:1)),oo(w.flow>.8?"MAX FLOW BOOST!":"BOOST",w.flow>.8?"big":""),w.score+=Math.floor(200*w.flow)*w.mult,Lt.boost(w.flow),w.flow=0}w.driftHeld=0,w.drift+=(0-w.drift)*Math.min(1,s*5),w.vu+=(m*g-w.vu)*Math.min(1,s*6),w.flow=Math.min(1,w.flow+Math.abs(w.vu)/g*s*.06),Lt.setDrift(0)}w.v+=(v-w.v)*s*(w.v>v?.35:.5),w.boost=Math.max(0,w.boost-s*.7);let M=!1;for(let S of Vn){let R=S.s-w.s;R>2&&R<16&&Math.abs(S.u-w.u)<2.2&&(M=!0)}M&&(w.v+=s*4,w.flow=Math.min(1,w.flow+s*.08)),w.drafting=M;let T=w.s;w.s+=w.v*s,w.u+=w.vu*s;let x=w.air;if(nd(w,s,T),!x&&w.air&&(oo("AIR",""),Lt.boost(.2)),x&&!w.air){if(w.shake=Math.max(w.shake,.4),w.airT>.6){let S=Math.round(w.airT*300);w.score+=S*w.mult,w.flow=Math.min(1,w.flow+.25),oo(w.airT>1.1?"BIG AIR +"+S:"AIR +"+S,w.airT>1.1?"big":"near")}for(let S=0;S<20;S++)Ba.emit(Kt.set(Mt(w.s)+w.u+(Math.random()-.5)*2,wt(w.s)+.2,-w.s),Ki.set((Math.random()-.5)*8,1+Math.random()*2,(Math.random()-.5)*8),new ce(we.skyHorizon),2.2,1)}w.race&&w.mode==="play"&&w.s>=w.race.length&&hS();let b=ht-.7;if(Math.abs(w.u)>b){w.u=Math.sign(w.u)*b,Math.abs(w.vu)>3&&(w.v*=1-s*1.5,w.shake=Math.max(w.shake,.25),Lt.scrape()),Kt.copy(At.root.position),Kt.x+=Math.sign(w.u)*.4;for(let S=0;S<3;S++)ao.emit(Kt,Ki.set(-Math.sign(w.u)*Math.random()*3,Math.random()*3,8),qm,.12,.3);w.vu*=.5}w.score+=w.v*s*.5*w.mult,w.combo=Math.max(0,w.combo-s),w.combo<=0&&w.mult>1&&(w.mult=Math.max(1,w.mult-s*.25));for(let S of ri){let R=S.s-w.s;if(!((w.y>1||w.invuln>0||w.mode==="finished")&&(S.type==="barrier"||S.type==="rock"))){if(S.type==="barrier"){if(!S.hit&&R<.4&&R>-.8){if(Math.abs(w.u-S.gapC)>S.gapW/2-.35){Xm("barrier");break}S.hit=!0,S.gapW/2-Math.abs(w.u-S.gapC)<1&&Ym()}}else if(S.type==="rock"){if(Math.abs(R)<S.rad*.7){let _=Math.abs(w.u-S.u);if(_<S.rad*.8+.3){Xm("rock");break}!S.near&&_<S.rad+1.4&&(S.near=!0,Ym())}}else if(S.type==="ring"){if(!S.done&&R<0&&R>-2){S.done=!0;let _=Math.abs(w.u-S.u);if(_<2){let E=_<.7;w.v+=E?14:8,w.boost=1,w.flow=Math.min(1,w.flow+(E?.35:.2)),w.score+=(E?500:200)*w.mult,w.combo=3,w.mult=Math.min(8,w.mult+(E?1:.5)),oo(E?"PERFECT LINE":"BOOST GATE",E?"big":""),Lt.ring(E),E&&(w.slowmo=.35)}}}else if(S.type==="orb"&&!S.taken&&Math.abs(R)<1.3&&Math.abs(w.u-S.u)<1.3){S.taken=!0,S.mesh.visible=!1,w.shards++,w.score+=25*w.mult,w.flow=Math.min(1,w.flow+.03),Lt.orb();for(let _=0;_<8;_++)ao.emit(S.mesh.position,Ki.set((Math.random()-.5)*6,Math.random()*5,(Math.random()-.5)*6),gS,.18,.45)}}}}if(w.mode==="crash"&&(w.crashT+=s,w.v*=Math.pow(.2,s),w.s+=w.v*s,At.tilt.rotation.x+=s*8,At.tilt.rotation.z+=s*5,At.tilt.position.y+=s*(3-w.crashT*9),w.crashT>1.6&&(w.race?(w.mode="play",w.v=22,w.u*=.5,w.vu=0,w.invuln=1.6,w.y=0,w.air=!1,At.tilt.rotation.set(0,0,0),At.tilt.position.set(0,0,0),Sh(w.s+25)):dS())),w.mode==="over"&&(w.v*=Math.pow(.3,s),w.s+=w.v*s),w.slowmo+=(1-w.slowmo)*Math.min(1,s*1.6),w.hit=Math.max(0,w.hit-s*1.2),w.shake=Math.max(0,w.shake-s*2),w.race){let f=34+42*n,m=w.mode!=="countdown",v=0;for(let g of Vn){m&&g.update(s,ri,f,w,w.time),!g.finish&&g.s>=w.race.length&&(g.finish=w.raceT),g.near=Math.abs(g.s-w.s)<70,g.place(s,mh),g.tag.visible=g.s-w.s>3&&g.s-w.s<90,(g.finish&&(!w.finishT||g.finish<w.finishT)||!g.finish&&!w.finishT&&g.s>w.s)&&v++;let p=g.s-w.s,M=g.u-w.u;if(w.mode==="play"&&Math.abs(p)<1.6&&Math.abs(M)<1.1&&Math.abs(g.y-w.y)<1){let T=Math.sign(M||1)*5;g.vu+=T,w.vu-=T,w.shake=Math.max(w.shake,.3),Lt.scrape()}}w.finishT||(w.place=v+1),w.mode==="finished"&&(w.resultsIn-=mh,w.resultsIn<=0&&uS())}Vd.update(w.s),cS(w.s+900,n),Sh(w.s-30),lo.update(w.s);for(let f of ri)f.type==="orb"&&(f.mesh.rotation.y+=s*3),f.type==="ring"&&(f.ring.rotation.z+=s*1.5);let i=w.s;ro.set(Pa(i),eh(i),-1).normalize(),fS.crossVectors(ro,pS).normalize(),w.hover=.55+Math.sin(w.time*5.3)*.05+Math.sin(w.time*11.7)*.02;let r=At.root.position.set(Mt(i)+w.u,wt(i)+w.hover+w.y,-i);if(Kt.copy(r).sub(ro),At.root.lookAt(Kt),w.mode!=="crash"){let f=-w.vu/16;At.tilt.rotation.z+=(f*.55-At.tilt.rotation.z)*Math.min(1,s*8),At.tilt.rotation.y+=(w.drift*-.9-At.tilt.rotation.y)*Math.min(1,s*8),At.tilt.rotation.x=w.air?Math.min(.35,w.vy*.03):Math.sin(w.time*3.1)*.02;let m=.35+Math.min(1,w.v/70)*.45+(Nt.drift&&w.mode==="play"?.25:0)+w.boost*.15;Mh?Mh.update(mh,At.tilt,Math.min(1,m),-f,Math.abs(w.drift),Math.min(1,w.v/70)):At.pose(s,m,-f,w.drift,Math.min(1,w.v/70))}if(w.mode==="play"||w.mode==="menu"){for(let f of At.pods){f.getWorldPosition(Kt);let m=2+Math.floor(w.boost*4);for(let v=0;v<m;v++)Ha.emit(Kt,Ki.set((Math.random()-.5)*1.2,-1.5-Math.random(),(Math.random()-.5)*1.2).addScaledVector(ro,-w.v*.15),mS,.16+w.boost*.18,.18+Math.random()*.12)}Math.random()<.6&&(Kt.set(r.x+(Math.random()-.5)*1.2,wt(i)+.1,r.z+1),Ba.emit(Kt,Ki.set((Math.random()-.5)*3,.6+Math.random(),4),new ce(we.skyHorizon),1.6,.8))}Ha.update(s,.92),ao.update(s,.96,18),Ba.update(s,.95,-.5);let o=Math.min(1.4,w.v/70),a=3.4+o*1,l=1.55+o*.15,c=i+10;Kt.set(r.x,r.y,r.z).addScaledVector(ro,-a),Kt.y=Math.max(Kt.y,wt(i-a)+l)+0,Kt.y=r.y-w.y*.4+l,Ki.set(Mt(c)+w.u*.75,wt(c)+1.25,-c);let h=Math.min(1,s*7);w.camPos.lengthSq()===0&&(w.camPos.copy(Kt),w.camLook.copy(Ki)),w.camPos.lerp(Kt,h),w.camLook.lerp(Ki,h),Ot.position.copy(w.camPos);let u=w.shake*w.shake*.35;if(Ot.position.x+=(Math.random()-.5)*u,Ot.position.y+=(Math.random()-.5)*u,Gm){let f=Gm;Ot.position.copy(r).add(Kt.set(Math.sin(f)*3.2,1,Math.cos(f)*3.2)),w.camLook.copy(r).y+=.9}Ot.lookAt(w.camLook),Ot.rotateZ(-w.vu*.006-w.drift*.04);let d=Ot.userData.baseFov+o*16+w.boost*10;if(Ot.fov+=(d-Ot.fov)*Math.min(1,s*3),Ot.updateProjectionMatrix(),Zm.position.copy(Ot.position),Fd.group.position.set(Ot.position.x,wt(i),Ot.position.z),Fd.cloudMat.uniforms.t.value=w.time,Ai.target.position.copy(r),yh.target.position.copy(r),yh.position.copy(Ot.position).add(Kt.set(0,3,0)),Ai.position.copy(r).addScaledVector(ad,200),kd&&(Wm.copy(ro).multiplyScalar(-0),kd.update(s,Ot.position,Wm)),$m.update(s,w.v,Math.max(0,o-.75)*2+w.boost),xh.uniforms.uSpeed.value=Math.max(0,o-.9)*.8+w.boost*.6,xh.uniforms.uHit.value=w.hit,xh.uniforms.uTime.value=w.time,Hd.strength=.2+w.boost*.1,Lt.update(w.v,w.boost),t&&(Ye.speed.textContent=Math.round(w.v*3.6),Ye.dist.textContent=Math.floor(w.s)+" m",Ye.score.textContent=Math.floor(w.score).toLocaleString(),Ye.flow.style.width=(w.flow*100).toFixed(1)+"%",Ye.flowWrap.classList.toggle("full",w.flow>.8),Ye.mult.textContent="x"+Math.floor(w.mult),Ye.mult.classList.toggle("hot",w.mult>=3),Ye.shards.textContent=w.shards,w.race)){Ye.pos.innerHTML=`${Da(w.place).replace(/(\d+)/,"<b>$1</b>")}<small>/${Vn.length+1}</small>`,Ye.time.textContent=`${Math.floor(w.raceT/60)}:${(w.raceT%60).toFixed(1).padStart(4,"0")}`;let f=w.race.length;Ye.progFill.style.width=Math.min(100,w.s/f*100)+"%",Ye.prog.querySelectorAll(".dot").forEach((m,v)=>{let g=Vn[v];g&&(m.style.left=Math.min(100,g.s/f*100)+"%",m.style.background=g.color)}),Ye.draft.classList.toggle("on",!!w.drafting)}}function Ym(){w.flow=Math.min(1,w.flow+.15),w.score+=150*w.mult,w.combo=3,w.mult=Math.min(8,w.mult+.5),oo("CLOSE CALL","near"),Lt.near()}var bh={ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right"};addEventListener("keydown",s=>{if(bh[s.code]&&(Nt[bh[s.code]]=1),s.code==="Space"||s.code==="ShiftLeft"||s.code==="ShiftRight"||s.code==="ArrowDown"||s.code==="KeyS"){if(s.preventDefault(),w.mode==="menu"||w.mode==="over"||w.mode==="results"){s.code==="Space"&&!s.repeat&&Zi(!1,w.mode==="menu"?wi:w.race);return}if(w.mode==="countdown")return;Nt.drift=!0}s.code==="KeyR"&&(w.mode==="over"||w.mode==="results"||w.race&&w.mode==="play")&&Zi(!1,w.race),s.code==="KeyM"&&Lt.toggle()});addEventListener("keyup",s=>{bh[s.code]&&(Nt[bh[s.code]]=0),["Space","ShiftLeft","ShiftRight","ArrowDown","KeyS"].includes(s.code)&&(Nt.drift=!1)});function Gd(){let s=0,e=0;for(let t of Nt.touches.values())t<innerWidth/2?s++:e++;Nt.left=s&&!e?1:0,Nt.right=e&&!s?1:0,Nt.drift=s>0&&e>0}ir.addEventListener("pointerdown",s=>{if(Lt.unlock(),w.mode==="play"){if(s.pointerType==="mouse"){(s.button===0||s.button===2)&&(Nt.drift=!0);return}Nt.touches.set(s.pointerId,s.clientX),Gd()}});ir.addEventListener("pointermove",s=>{s.pointerType==="mouse"&&w.mode==="play"&&document.pointerLockElement!==ir&&(Nt.mouseActive&&(Nt.pointerX=Math.max(-1,Math.min(1,(s.clientX/innerWidth-.5)*2.6))),Nt.mouseActive=!0),Nt.touches.has(s.pointerId)&&(Nt.touches.set(s.pointerId,s.clientX),Gd())});var Qm=s=>{if(s.pointerType==="mouse"){Nt.drift=!1;return}Nt.touches.delete(s.pointerId),Gd()};ir.addEventListener("pointerup",Qm);ir.addEventListener("pointercancel",Qm);ir.addEventListener("contextmenu",s=>s.preventDefault());addEventListener("keydown",()=>{Nt.pointerX=null,Nt.mouseActive=!1},!0);var wi=null;document.getElementById("play").addEventListener("click",()=>{Lt.unlock(),Zi(!1,wi)});document.getElementById("free").addEventListener("click",()=>{Lt.unlock(),Zi(!1,null)});document.getElementById("again").addEventListener("click",()=>Zi(!1,null));document.getElementById("resagain").addEventListener("click",()=>Zi(!1,w.race));document.getElementById("resmenu").addEventListener("click",()=>{Ye.results.classList.add("hidden");for(let s of Vn)s.dispose(Bt);Vn=[],w.race=null,w.mode="menu",Wd(),Ye.menu.classList.remove("hidden")});document.getElementById("overmenu").addEventListener("click",()=>{Ye.over.classList.add("hidden"),w.mode="menu",Ye.menu.classList.remove("hidden")});document.getElementById("resnext").addEventListener("click",()=>{let s=si[si.indexOf(w.race)+1];if(s){if(s.track!==we.id){En.set("level",s.id);try{localStorage.setItem("hoverline.track",s.track)}catch{}location.hash=s.id,location.reload();return}wi=s,Zi(!1,s)}});function Wd(){let s=En.get("unlocked",1),e=(location.hash||"").slice(1);wi||(wi=si.find(t=>t.id===e)||si.find(t=>t.id===En.get("level","")&&t.track===we.id)||si.filter((t,n)=>t.track===we.id&&n<s).pop()||si.find(t=>t.track===we.id)),Ye.levels.innerHTML="";for(let t of Ju){let n=document.createElement("div");n.className="lcol",n.style.setProperty("--a",t.skyHorizon),n.style.setProperty("--b",t.skyTop),n.innerHTML=`<div class="lhead">${t.name}</div>`;for(let i of si.filter(r=>r.track===t.id)){let r=si.indexOf(i),o=r>=s,a=En.get("place."+i.id,0),l=document.createElement("button");l.className="lvl"+(i===wi?" on":"")+(o?" locked":""),l.disabled=o,l.innerHTML=`<span class="ln">${r+1}</span><b>${i.name}</b><span class="lm">${o?"Locked \xB7 top 3 in race "+r:(i.length/1e3).toFixed(1)+" km"+(a?" \xB7 best "+Da(a):"")}</span>`,l.addEventListener("click",()=>{if(i.track!==we.id){En.set("level",i.id);try{localStorage.setItem("hoverline.track",i.track)}catch{}location.hash=i.id,location.reload();return}wi=i,En.set("level",i.id),Wd()}),n.appendChild(l)}Ye.levels.appendChild(n)}document.getElementById("play").textContent=wi?`RACE \xB7 ${wi.name.toUpperCase()}`:"RACE"}Ye.revive.addEventListener("click",()=>{oi.cg&&oi.cg.ad.requestAd("rewarded",{adStarted:()=>Lt.mute(!0),adFinished:()=>{Lt.mute(!1),Zi(!0)},adError:()=>{Lt.mute(!1),Ye.revive.classList.add("hidden")}})});document.addEventListener("visibilitychange",()=>{document.hidden?(vh=0,Lt.mute(!0)):Lt.mute(!1)});var vh=0,gh=1/60,_h=0,er=Gn.getPixelRatio(),Km=Gn.getPixelRatio(),_S=.6;function xS(s){if(gh+=(s-gh)*.05,_h+=s,_h<1.5)return;let e=er;gh>1/50?e=Math.max(_S,er*.85):gh<1/58&&er<Km&&(e=Math.min(Km,er*1.08)),Math.abs(e-er)>.02?(er=e,Gn.setPixelRatio(er),zd(),_h=0):_h=1}function eg(s){requestAnimationFrame(eg);let e=vh?Math.min(.05,(s-vh)/1e3):.016;vh=s,jm(e*w.slowmo,e),co.render(),xS(e)}async function vS(){try{window.CrazyGames?.SDK&&(await window.CrazyGames.SDK.init(),oi.cg=window.CrazyGames.SDK,oi.cg.game.loadingStart())}catch{oi.cg=null}zd();let s=await new uh().loadAsync("assets/rider.glb").catch(()=>null);Jm=s,Vd=new th(Bt),Zm=Fm(Bt,Gn),Fd=Om(Bt),Bt.environmentIntensity=.9;let e=Um();lo=new ch(Bt,e),aS(),At=nh(),Bt.add(At.root),At.root.traverse(t=>{t.isMesh&&(t.castShadow=!0)}),s&&(Mh=oh(s,.11),At.rider.visible=!1,At.tilt.add(Mh.object)),Ha=new Oa(1200,to("rgba(255,255,255,0.5)"),Vi),Ha.mat.uniforms.opacity.value=.18,ao=new Oa(800,to()),Ba=new Oa(300,to("rgba(255,255,255,0.5)"),Vi),Ba.mat.uniforms.opacity.value=.12,Bt.add(Ot),$m=new Od,kd=new Bd(we.air),lo.prime(0),Gn.compile(Bt,Ot),w.mode="menu",Ye.best.textContent=w.best.toLocaleString(),Wd(),Ye.loading.classList.add("hidden"),Ye.menu.classList.remove("hidden");try{oi.cg?.game.loadingStop()}catch{}nr.has("autoplay")&&Zi(!1,nr.has("race")?wi:null),requestAnimationFrame(eg),window.__G=w,window.__input=Nt,window.__riv=()=>Vn.map(t=>[t.name,t.s|0,t.v|0,+t.u.toFixed(1),+t.crashT.toFixed(1),+t.skill.toFixed(2)]),window.__step=(t,n=1/60)=>{for(let i=0;i<t;i++)jm(n)},window.__dbg=()=>({cam:Ot.position.toArray().map(t=>t|0),p:At.root.position.toArray().map(t=>t|0),ch:lo.chunks.map(t=>t.index),fov:Ot.fov|0})}vS();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
