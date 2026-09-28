var vf=0,Vh=1,yf=2;var Is=1,Mf=2,wr=3,li=0,tn=1,pn=2,Dn=0,Pi=1,ci=2,Gh=3,Wh=4,Sf=5;var Ps=100,bf=101,Tf=102,Ef=103,wf=104,Af=200,Rf=201,Cf=202,If=203,Xh=204,qh=205,Pf=206,Lf=207,Nf=208,Df=209,Uf=210,Ff=211,Of=212,Bf=213,zf=214,il=0,sl=1,rl=2,cr=3,ol=4,al=5,ll=6,cl=7,Dl=0,kf=1,Hf=2,Kn=0,Jo=1,$o=2,jo=3,Ls=4,Qo=5,ea=6,ta=7,Ch="attached",Vf="detached",Yh=300,is=301,Ns=302,Ul=303,Fl=304,na=306,Pn=1e3,Cn=1001,hr=1002,Ft=1003,Ol=1004;var Ds=1005;var Ot=1006,Ar=1007;var Zn=1008;var vn=1009,Kh=1010,Zh=1011,Rr=1012,Bl=1013,Jn=1014,bn=1015,Wt=1016,zl=1017,kl=1018,Cr=1020,Jh=35902,$h=35899,jh=1021,Qh=1022,Tn=1023,ii=1026,ss=1027,Hl=1028,Vl=1029,rs=1030,Gl=1031;var Wl=1033,ia=33776,sa=33777,ra=33778,oa=33779,Xl=35840,ql=35841,Yl=35842,Kl=35843,Zl=36196,Jl=37492,$l=37496,jl=37488,Ql=37489,aa=37490,ec=37491,tc=37808,nc=37809,ic=37810,sc=37811,rc=37812,oc=37813,ac=37814,lc=37815,cc=37816,hc=37817,uc=37818,dc=37819,fc=37820,pc=37821,mc=36492,gc=36494,_c=36495,xc=36283,vc=36284,la=36285,yc=36286,Gf=2200,Wf=2201,Xf=2202,_s=2300,xs=2301,el=2302,Ih=2303,ps=2400,ms=2401,po=2402,Mc=2500,qf=2501,eu=0,ca=1,Ir=2,Yf=3200;var ha=0,Kf=1,Li="",St="srgb",hn="srgb-linear",mo="linear",ct="srgb";var tl=7680;var Zf=519,Jf=512,$f=513,jf=514,Sc=515,Qf=516,ep=517,bc=518,tp=519,tu=35044;var nu="300 es",Gn=2e3,ur=2001;function Um(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Fm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function dr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function np(){let s=dr("canvas");return s.style.display="block",s}var Ad={},fr=null;function go(...s){let e="THREE."+s.shift();fr?fr("log",e,...s):console.log(e,...s)}function ip(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Le(...s){s=ip(s);let e="THREE."+s.shift();if(fr)fr("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ve(...s){s=ip(s);let e="THREE."+s.shift();if(fr)fr("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function gs(...s){let e=s.join(" ");e in Ad||(Ad[e]=!0,Le(...s))}function sp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var rp={[il]:sl,[rl]:ll,[ol]:cl,[cr]:al,[sl]:il,[ll]:rl,[cl]:ol,[al]:cr},Wn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rd=1234567,co=Math.PI/180,vs=180/Math.PI;function In(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[s&255]+sn[s>>8&255]+sn[s>>16&255]+sn[s>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function nt(s,e,t){return Math.max(e,Math.min(t,s))}function iu(s,e){return(s%e+e)%e}function Om(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Bm(s,e,t){return s!==e?(t-s)/(e-s):0}function ho(s,e,t){return(1-t)*s+t*e}function zm(s,e,t,n){return ho(s,e,1-Math.exp(-t*n))}function km(s,e=1){return e-Math.abs(iu(s,e*2)-e)}function Hm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Vm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Gm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Wm(s,e){return s+Math.random()*(e-s)}function Xm(s){return s*(.5-Math.random())}function qm(s){s!==void 0&&(Rd=s);let e=Rd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ym(s){return s*co}function Km(s){return s*vs}function Zm(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Jm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function $m(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function jm(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*f,a*h,a*c);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Vn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var su={DEG2RAD:co,RAD2DEG:vs,generateUUID:In,clamp:nt,euclideanModulo:iu,mapLinear:Om,inverseLerp:Bm,lerp:ho,damp:zm,pingpong:km,smoothstep:Hm,smootherstep:Vm,randInt:Gm,randFloat:Wm,randFloatSpread:Xm,seededRandom:qm,degToRad:Ym,radToDeg:Km,isPowerOfTwo:Zm,ceilPowerOfTwo:Jm,floorPowerOfTwo:$m,setQuaternionFromProperEuler:jm,normalize:mt,denormalize:Vn},se=class s{static{s.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Lt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],m=r[o+2],v=r[o+3];if(u!==v||l!==d||c!==f||h!==m){let p=l*d+c*f+h*m+u*v;p<0&&(d=-d,f=-f,m=-m,v=-v,p=-p);let g=1-a;if(p<.9995){let M=Math.acos(p),S=Math.sin(M);g=Math.sin(g*M)/S,a=Math.sin(a*M)/S,l=l*g+d*a,c=c*g+f*a,h=h*g+m*a,u=u*g+v*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+m*a,u=u*g+v*a;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{static{s.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return th.copy(this).projectOnVector(e),this.sub(th)}reflect(e){return this.sub(th.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},th=new I,Cd=new Lt,Ze=class s{static{s.prototype.isMatrix3=!0}constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=i[0],p=i[3],g=i[6],M=i[1],S=i[4],_=i[7],b=i[2],E=i[5],A=i[8];return r[0]=o*v+a*M+l*b,r[3]=o*p+a*S+l*E,r[6]=o*g+a*_+l*A,r[1]=c*v+h*M+u*b,r[4]=c*p+h*S+u*E,r[7]=c*g+h*_+u*A,r[2]=d*v+f*M+m*b,r[5]=d*p+f*S+m*E,r[8]=d*g+f*_+m*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nh.makeScale(e,t)),this}rotate(e){return gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nh.makeRotation(-e)),this}translate(e,t){return gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},nh=new Ze,Id=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pd=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qm(){let s={enabled:!0,workingColorSpace:hn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ct&&(i.r=bi(i.r),i.g=bi(i.g),i.b=bi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(i.r=lr(i.r),i.g=lr(i.g),i.b=lr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Li?mo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[hn]:{primaries:e,whitePoint:n,transfer:mo,toXYZ:Id,fromXYZ:Pd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:Id,fromXYZ:Pd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),s}var je=Qm();function bi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function lr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ws,hl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ws===void 0&&(Ws=dr("canvas")),Ws.width=e.width,Ws.height=e.height;let i=Ws.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ws}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=dr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bi(t[n]/255)*255):t[n]=bi(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},eg=0,pr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=In(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ih(i[o].image)):r.push(ih(i[o]))}else r=ih(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function ih(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var tg=0,sh=new I,Gt=class s extends Wn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Cn,i=Cn,r=Ot,o=Zn,a=Tn,l=vn,c=s.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=In(),this.name="",this.source=new pr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pn:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case hr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pn:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case hr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Yh;Gt.DEFAULT_ANISOTROPY=1;var gt=class s{static{s.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],v=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,_=(f+1)/2,b=(g+1)/2,E=(h+d)/4,A=(u+v)/4,x=(m+p)/4;return S>_&&S>b?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=E/n,r=A/n):_>b?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=E/i,r=x/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=A/r,i=x/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-m)*(p-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ul=class extends Wn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new Gt(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new pr(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nt=class extends ul{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},_o=class extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var dl=class extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ke=class s{static{s.prototype.isMatrix4=!0}constructor(e,t,n,i,r,o,a,l,c,h,u,d,f,m,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,f,m,v,p)}set(e,t,n,i,r,o,a,l,c,h,u,d,f,m,v,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Xs.setFromMatrixColumn(e,0).length(),r=1/Xs.setFromMatrixColumn(e,1).length(),o=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,m=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d+v*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d-v*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,m=a*h,v=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,m=a*l,v=a*c;t[0]=l*h,t[4]=v-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-v*u}else if(e.order==="XZY"){let d=o*l,f=o*c,m=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ng,e,ig)}lookAt(e,t,n){let i=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Vi.crossVectors(n,yn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Vi.crossVectors(n,yn)),Vi.normalize(),Ta.crossVectors(yn,Vi),i[0]=Vi.x,i[4]=Ta.x,i[8]=yn.x,i[1]=Vi.y,i[5]=Ta.y,i[9]=yn.y,i[2]=Vi.z,i[6]=Ta.z,i[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],p=n[10],g=n[14],M=n[3],S=n[7],_=n[11],b=n[15],E=i[0],A=i[4],x=i[8],w=i[12],R=i[1],P=i[5],N=i[9],z=i[13],L=i[2],F=i[6],H=i[10],V=i[14],Q=i[3],G=i[7],Z=i[11],ee=i[15];return r[0]=o*E+a*R+l*L+c*Q,r[4]=o*A+a*P+l*F+c*G,r[8]=o*x+a*N+l*H+c*Z,r[12]=o*w+a*z+l*V+c*ee,r[1]=h*E+u*R+d*L+f*Q,r[5]=h*A+u*P+d*F+f*G,r[9]=h*x+u*N+d*H+f*Z,r[13]=h*w+u*z+d*V+f*ee,r[2]=m*E+v*R+p*L+g*Q,r[6]=m*A+v*P+p*F+g*G,r[10]=m*x+v*N+p*H+g*Z,r[14]=m*w+v*z+p*V+g*ee,r[3]=M*E+S*R+_*L+b*Q,r[7]=M*A+S*P+_*F+b*G,r[11]=M*x+S*N+_*H+b*Z,r[15]=M*w+S*z+_*V+b*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],v=e[7],p=e[11],g=e[15],M=l*f-c*d,S=a*f-c*u,_=a*d-l*u,b=o*f-c*h,E=o*d-l*h,A=o*u-a*h;return t*(v*M-p*S+g*_)-n*(m*M-p*b+g*E)+i*(m*S-v*b+g*A)-r*(m*_-v*E+p*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],v=e[13],p=e[14],g=e[15],M=t*a-n*o,S=t*l-i*o,_=t*c-r*o,b=n*l-i*a,E=n*c-r*a,A=i*c-r*l,x=h*v-u*m,w=h*p-d*m,R=h*g-f*m,P=u*p-d*v,N=u*g-f*v,z=d*g-f*p,L=M*z-S*N+_*P+b*R-E*w+A*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/L;return e[0]=(a*z-l*N+c*P)*F,e[1]=(i*N-n*z-r*P)*F,e[2]=(v*A-p*E+g*b)*F,e[3]=(d*E-u*A-f*b)*F,e[4]=(l*R-o*z-c*w)*F,e[5]=(t*z-i*R+r*w)*F,e[6]=(p*_-m*A-g*S)*F,e[7]=(h*A-d*_+f*S)*F,e[8]=(o*N-a*R+c*x)*F,e[9]=(n*R-t*N-r*x)*F,e[10]=(m*E-v*_+g*M)*F,e[11]=(u*_-h*E-f*M)*F,e[12]=(a*w-o*P-l*x)*F,e[13]=(t*P-n*w+i*x)*F,e[14]=(v*S-m*b-p*M)*F,e[15]=(h*b-u*S+d*M)*F,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,v=o*h,p=o*u,g=a*u,M=l*c,S=l*h,_=l*u,b=n.x,E=n.y,A=n.z;return i[0]=(1-(v+g))*b,i[1]=(f+_)*b,i[2]=(m-S)*b,i[3]=0,i[4]=(f-_)*E,i[5]=(1-(d+g))*E,i[6]=(p+M)*E,i[7]=0,i[8]=(m+S)*A,i[9]=(p-M)*A,i[10]=(1-(d+v))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Xs.set(i[0],i[1],i[2]).length(),a=Xs.set(i[4],i[5],i[6]).length(),l=Xs.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Bn.copy(this);let c=1/o,h=1/a,u=1/l;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,t.setFromRotationMatrix(Bn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=Gn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),m,v;if(l)m=r/(o-r),v=o*r/(o-r);else if(a===Gn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===ur)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Gn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),m,v;if(l)m=1/(o-r),v=o/(o-r);else if(a===Gn)m=-2/(o-r),v=-(o+r)/(o-r);else if(a===ur)m=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Xs=new I,Bn=new Ke,ng=new I(0,0,0),ig=new I(1,1,1),Vi=new I,Ta=new I,yn=new I,Ld=new Ke,Nd=new Lt,Ln=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ld.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ld,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nd.setFromEuler(this),this.setFromQuaternion(Nd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var xo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sg=0,Dd=new I,qs=new Lt,gi=new Ke,Ea=new I,$r=new I,rg=new I,og=new Lt,Ud=new I(1,0,0),Fd=new I(0,1,0),Od=new I(0,0,1),Bd={type:"added"},ag={type:"removed"},Ys={type:"childadded",child:null},rh={type:"childremoved",child:null},wt=class s extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new I,t=new Ln,n=new Lt,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Ze}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(Ud,e)}rotateY(e){return this.rotateOnAxis(Fd,e)}rotateZ(e){return this.rotateOnAxis(Od,e)}translateOnAxis(e,t){return Dd.copy(e).applyQuaternion(this.quaternion),this.position.add(Dd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ud,e)}translateY(e){return this.translateOnAxis(Fd,e)}translateZ(e){return this.translateOnAxis(Od,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ea.copy(e):Ea.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt($r,Ea,this.up):gi.lookAt(Ea,$r,this.up),this.quaternion.setFromRotationMatrix(gi),i&&(gi.extractRotation(i.matrixWorld),qs.setFromRotationMatrix(gi),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bd),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ag),rh.child=e,this.dispatchEvent(rh),rh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bd),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,rg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,og,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};wt.DEFAULT_UP=new I(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Et=class extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},lg={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,n),g=this._getHandJoint(c,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},wa={h:0,s:0,l:0};function oh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=iu(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=oh(o,r,e+1/3),this.g=oh(o,r,e),this.b=oh(o,r,e-1/3)}return je.colorSpaceToWorking(this,i),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let n=op[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return je.workingToColorSpace(rn.copy(this),e),Math.round(nt(rn.r*255,0,255))*65536+Math.round(nt(rn.g*255,0,255))*256+Math.round(nt(rn.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(rn.copy(this),t);let n=rn.r,i=rn.g,r=rn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=St){je.workingToColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,i=rn.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(wa);let n=ho(Gi.h,wa.h,t),i=ho(Gi.s,wa.s,t),r=ho(Gi.l,wa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new ue;ue.NAMES=op;var vo=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ue(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ys=class extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},zn=new I,_i=new I,ah=new I,xi=new I,Ks=new I,Zs=new I,zd=new I,lh=new I,ch=new I,hh=new I,uh=new gt,dh=new gt,fh=new gt,Si=class s{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),zn.subVectors(e,t),i.cross(zn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){zn.subVectors(i,t),_i.subVectors(n,t),ah.subVectors(e,t);let o=zn.dot(zn),a=zn.dot(_i),l=zn.dot(ah),c=_i.dot(_i),h=_i.dot(ah),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return uh.setScalar(0),dh.setScalar(0),fh.setScalar(0),uh.fromBufferAttribute(e,t),dh.fromBufferAttribute(e,n),fh.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(uh,r.x),o.addScaledVector(dh,r.y),o.addScaledVector(fh,r.z),o}static isFrontFacing(e,t,n,i){return zn.subVectors(n,t),_i.subVectors(e,t),zn.cross(_i).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),zn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Ks.subVectors(i,n),Zs.subVectors(r,n),lh.subVectors(e,n);let l=Ks.dot(lh),c=Zs.dot(lh);if(l<=0&&c<=0)return t.copy(n);ch.subVectors(e,i);let h=Ks.dot(ch),u=Zs.dot(ch);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ks,o);hh.subVectors(e,r);let f=Ks.dot(hh),m=Zs.dot(hh);if(m>=0&&f<=m)return t.copy(r);let v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Zs,a);let p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return zd.subVectors(r,i),a=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(zd,a);let g=1/(p+v+d);return o=v*g,a=d*g,t.copy(n).addScaledVector(Ks,o).addScaledVector(Zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},un=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Aa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Aa.copy(n.boundingBox)),Aa.applyMatrix4(e.matrixWorld),this.union(Aa)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),Ra.subVectors(this.max,jr),Js.subVectors(e.a,jr),$s.subVectors(e.b,jr),js.subVectors(e.c,jr),Wi.subVectors($s,Js),Xi.subVectors(js,$s),hs.subVectors(Js,js);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-hs.z,hs.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,hs.z,0,-hs.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-hs.y,hs.x,0];return!ph(t,Js,$s,js,Ra)||(t=[1,0,0,0,1,0,0,0,1],!ph(t,Js,$s,js,Ra))?!1:(Ca.crossVectors(Wi,Xi),t=[Ca.x,Ca.y,Ca.z],ph(t,Js,$s,js,Ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},vi=[new I,new I,new I,new I,new I,new I,new I,new I],kn=new I,Aa=new un,Js=new I,$s=new I,js=new I,Wi=new I,Xi=new I,hs=new I,jr=new I,Ra=new I,Ca=new I,us=new I;function ph(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){us.fromArray(s,r);let a=i.x*Math.abs(us.x)+i.y*Math.abs(us.y)+i.z*Math.abs(us.z),l=e.dot(us),c=t.dot(us),h=n.dot(us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ht=new I,Ia=new se,cg=0,it=class extends Wn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tu,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ia.fromBufferAttribute(this,t),Ia.applyMatrix3(e),this.setXY(t,Ia.x,Ia.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var yo=class extends it{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Mo=class extends it{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qe=class extends it{constructor(e,t,n){super(new Float32Array(e),t,n)}},hg=new un,Qr=new I,mh=new I,_n=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):hg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);let t=Qr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Qr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(mh)),this.expandByPoint(Qr.copy(e.center).sub(mh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ug=0,Rn=new Ke,gh=new wt,Qs=new I,Mn=new un,eo=new un,$t=new I,at=class s extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Um(e)?Mo:yo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return gh.lookAt(e),gh.updateMatrix(),this.applyMatrix4(gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qe(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];eo.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(Mn.min,eo.min),Mn.expandByPoint($t),$t.addVectors(Mn.max,eo.max),Mn.expandByPoint($t)):(Mn.expandByPoint(eo.min),Mn.expandByPoint(eo.max))}Mn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)$t.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared($t));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)$t.fromBufferAttribute(a,c),l&&(Qs.fromBufferAttribute(e,c),$t.add(Qs)),i=Math.max(i,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new it(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new I,l[x]=new I;let c=new I,h=new I,u=new I,d=new se,f=new se,m=new se,v=new I,p=new I;function g(x,w,R){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,R),d.fromBufferAttribute(r,x),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,R),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),a[x].add(v),a[w].add(v),a[R].add(v),l[x].add(p),l[w].add(p),l[R].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,w=M.length;x<w;++x){let R=M[x],P=R.start,N=R.count;for(let z=P,L=P+N;z<L;z+=3)g(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let S=new I,_=new I,b=new I,E=new I;function A(x){b.fromBufferAttribute(i,x),E.copy(b);let w=a[x];S.copy(w),S.sub(b.multiplyScalar(b.dot(w))).normalize(),_.crossVectors(E,w);let P=_.dot(l[x])<0?-1:1;o.setXYZW(x,S.x,S.y,S.z,P)}for(let x=0,w=M.length;x<w;++x){let R=M[x],P=R.start,N=R.count;for(let z=P,L=P+N;z<L;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new it(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new it(d,h,u)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ms=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tu,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},cn=new I,Ki=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){go("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new it(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){go("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},_h=new I,dg=new I,fg=new Ze,Hn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=_h.subVectors(n,t).cross(dg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(_h),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||fg.getNormalMatrix(e),i=this.coplanarPoint(_h).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},pg=0,on=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=In(),this.name="",this.type="Material",this.blending=Pi,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xh,this.blendDst=qh,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tl,this.stencilZFail=tl,this.stencilZPass=tl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Hn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new se().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new se().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},gr=class extends on{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},er,to=new I,tr=new I,nr=new I,ir=new se,no=new se,ap=new Ke,Pa=new I,io=new I,La=new I,kd=new se,xh=new se,Hd=new se,So=class extends wt{constructor(e=new gr){if(super(),this.isSprite=!0,this.type="Sprite",er===void 0){er=new at;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ms(t,5);er.setIndex([0,1,2,0,2,3]),er.setAttribute("position",new Ki(n,3,0,!1)),er.setAttribute("uv",new Ki(n,2,3,!1))}this.geometry=er,this.material=e,this.center=new se(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ve('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),tr.setFromMatrixScale(this.matrixWorld),ap.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),nr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&tr.multiplyScalar(-nr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Na(Pa.set(-.5,-.5,0),nr,o,tr,i,r),Na(io.set(.5,-.5,0),nr,o,tr,i,r),Na(La.set(.5,.5,0),nr,o,tr,i,r),kd.set(0,0),xh.set(1,0),Hd.set(1,1);let a=e.ray.intersectTriangle(Pa,io,La,!1,to);if(a===null&&(Na(io.set(-.5,.5,0),nr,o,tr,i,r),xh.set(0,1),a=e.ray.intersectTriangle(Pa,La,io,!1,to),a===null))return;let l=e.ray.origin.distanceTo(to);l<e.near||l>e.far||t.push({distance:l,point:to.clone(),uv:Si.getInterpolation(to,Pa,io,La,kd,xh,Hd,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Na(s,e,t,n,i,r){ir.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(no.x=r*ir.x-i*ir.y,no.y=i*ir.x+r*ir.y):no.copy(ir),s.copy(e),s.x+=no.x,s.y+=no.y,s.applyMatrix4(ap)}var yi=new I,vh=new I,Da=new I,Ua=new I,Ss=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){vh.copy(e).add(t).multiplyScalar(.5),Da.copy(t).sub(e).normalize(),Ua.copy(this.origin).sub(vh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Da),a=Ua.dot(this.direction),l=-Ua.dot(Da),c=Ua.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(vh).addScaledVector(Da,d),f}intersectSphere(e,t){if(e.radius<0)return null;yi.subVectors(e.center,this.origin);let n=yi.dot(this.direction),i=yi.dot(yi)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,m=t.x-o.x,v=t.y-o.y,p=t.z-o.z,g=n.x-o.x,M=n.y-o.y,S=n.z-o.z,_=Math.abs(l),b=Math.abs(c),E=Math.abs(h),A,x,w,R,P,N,z,L,F,H,V,Q;if(_>=b&&_>=E?(w=l,N=u,F=m,Q=g,l>=0?(A=c,x=h,R=d,P=f,z=v,L=p,H=M,V=S):(A=h,x=c,R=f,P=d,z=p,L=v,H=S,V=M)):b>=E?(w=c,N=d,F=v,Q=M,c>=0?(A=h,x=l,R=f,P=u,z=p,L=m,H=S,V=g):(A=l,x=h,R=u,P=f,z=m,L=p,H=g,V=S)):(w=h,N=f,F=p,Q=S,h>=0?(A=l,x=c,R=u,P=d,z=m,L=v,H=g,V=M):(A=c,x=l,R=d,P=u,z=v,L=m,H=M,V=g)),w===0)return null;let G=A/w,Z=x/w,ee=1/w,de=R-G*N,ce=P-Z*N,ze=z-G*F,Fe=L-Z*F,We=H-G*Q,K=V-Z*Q,$=We*Fe-K*ze,Me=de*K-ce*We,Xe=ze*ce-Fe*de;if(i){if($<0||Me<0||Xe<0)return null}else if(($<0||Me<0||Xe<0)&&($>0||Me>0||Xe>0))return null;let Ee=$+Me+Xe;if(Ee===0)return null;let qe=ee*($*N+Me*F+Xe*Q);return(Ee>0?qe<0:qe>0)?null:this.at(qe/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dn=class extends on{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Vd=new Ke,ds=new Ss,Fa=new _n,Gd=new I,Oa=new I,Ba=new I,za=new I,yh=new I,ka=new I,Wd=new I,Ha=new I,Ge=class extends wt{constructor(e=new at,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){ka.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(yh.fromBufferAttribute(u,e),o?ka.addScaledVector(yh,h):ka.addScaledVector(yh.sub(t),h))}t.add(ka)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(r),ds.copy(e.ray).recast(e.near),!(Fa.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Fa,Gd)===null||ds.origin.distanceToSquared(Gd)>(e.far-e.near)**2))&&(Vd.copy(r).invert(),ds.copy(e.ray).applyMatrix4(Vd),!(n.boundingBox!==null&&ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){let p=d[m],g=o[p.materialIndex],M=Math.max(p.start,f.start),S=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let _=M,b=S;_<b;_+=3){let E=a.getX(_),A=a.getX(_+1),x=a.getX(_+2);i=Va(this,g,e,n,c,h,u,E,A,x),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){let M=a.getX(p),S=a.getX(p+1),_=a.getX(p+2);i=Va(this,o,e,n,c,h,u,M,S,_),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){let p=d[m],g=o[p.materialIndex],M=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let _=M,b=S;_<b;_+=3){let E=_,A=_+1,x=_+2;i=Va(this,g,e,n,c,h,u,E,A,x),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){let M=p,S=p+1,_=p+2;i=Va(this,o,e,n,c,h,u,M,S,_),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function mg(s,e,t,n,i,r,o,a){let l;if(e.side===tn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===li,a),l===null)return null;Ha.copy(a),Ha.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Ha);return c<t.near||c>t.far?null:{distance:c,point:Ha.clone(),object:s}}function Va(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Oa),s.getVertexPosition(l,Ba),s.getVertexPosition(c,za);let h=mg(s,e,t,n,Oa,Ba,za,Wd);if(h){let u=new I;Si.getBarycoord(Wd,Oa,Ba,za,u),i&&(h.uv=Si.getInterpolatedAttribute(i,a,l,c,u,new se)),r&&(h.uv1=Si.getInterpolatedAttribute(r,a,l,c,u,new se)),o&&(h.normal=Si.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new I,materialIndex:0};Si.getNormal(Oa,Ba,za,d.normal),h.face=d,h.barycoord=u}return h}var so=new gt,Xd=new gt,qd=new gt,gg=new gt,Yd=new Ke,Ga=new I,Mh=new _n,Kd=new Ke,Sh=new Ss,bo=class extends Ge{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ch,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new un),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ga),this.boundingBox.expandByPoint(Ga)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ga),this.boundingSphere.expandByPoint(Ga)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mh.copy(this.boundingSphere),Mh.applyMatrix4(i),e.ray.intersectsSphere(Mh)!==!1&&(Kd.copy(i).invert(),Sh.copy(e.ray).applyMatrix4(Kd),!(this.boundingBox!==null&&Sh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Sh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ch?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Le("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Xd.fromBufferAttribute(i.attributes.skinIndex,e),qd.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(so.copy(t),t.set(0,0,0,0)):(so.set(...t,1),t.set(0,0,0)),so.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=qd.getComponent(r);if(o!==0){let a=Xd.getComponent(r);Yd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(gg.copy(so).applyMatrix4(Yd),o)}}return t.isVector4&&(t.w=so.w),t.applyMatrix4(this.bindMatrixInverse)}},_r=class extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}},xr=class extends Gt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Ft,h=Ft,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zd=new Ke,_g=new Ke,To=class s{constructor(e=[],t=[]){this.uuid=In(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Le("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:_g;Zd.multiplyMatrices(a,t[r]),Zd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new xr(t,e,e,Tn,bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(Le("Skeleton: No bone found with UUID:",r),o=new _r),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Xn=class extends it{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},sr=new Ke,Jd=new Ke,Wa=[],$d=new un,xg=new Ke,ro=new Ge,oo=new _n,bs=class extends Ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,xg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sr),$d.copy(e.boundingBox).applyMatrix4(sr),this.boundingBox.union($d)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sr),oo.copy(e.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(oo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(n),e.ray.intersectsSphere(oo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,sr),Jd.multiplyMatrices(n,sr),ro.matrixWorld=Jd,ro.raycast(e,Wa);for(let o=0,a=Wa.length;o<a;o++){let l=Wa[o];l.instanceId=r,l.object=this,t.push(l)}Wa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new xr(new Float32Array(i*this.count),i,this.count,Hl,bn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fs=new _n,vg=new se(.5,.5),Xa=new I,vr=class{constructor(e=new Hn,t=new Hn,n=new Hn,i=new Hn,r=new Hn,o=new Hn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],v=r[9],p=r[10],g=r[11],M=r[12],S=r[13],_=r[14],b=r[15];if(i[0].setComponents(c-o,f-h,g-m,b-M).normalize(),i[1].setComponents(c+o,f+h,g+m,b+M).normalize(),i[2].setComponents(c+a,f+u,g+v,b+S).normalize(),i[3].setComponents(c-a,f-u,g-v,b-S).normalize(),n)i[4].setComponents(l,d,p,_).normalize(),i[5].setComponents(c-l,f-d,g-p,b-_).normalize();else if(i[4].setComponents(c-l,f-d,g-p,b-_).normalize(),t===Gn)i[5].setComponents(c+l,f+d,g+p,b+_).normalize();else if(t===ur)i[5].setComponents(l,d,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){fs.center.set(0,0,0);let t=vg.distanceTo(e.center);return fs.radius=.7071067811865476+t,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Xa.x=i.normal.x>0?e.max.x:e.min.x,Xa.y=i.normal.y>0?e.max.y:e.min.y,Xa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Zi=class extends on{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},fl=new I,pl=new I,jd=new Ke,ao=new Ss,qa=new _n,bh=new I,Qd=new I,Ts=class extends wt{constructor(e=new at,t=new Zi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)fl.fromBufferAttribute(t,i-1),pl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=fl.distanceTo(pl);e.setAttribute("lineDistance",new Qe(n,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(i),qa.radius+=r,e.ray.intersectsSphere(qa)===!1)return;jd.copy(i).invert(),ao.copy(e.ray).applyMatrix4(jd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=f,p=m-1;v<p;v+=c){let g=h.getX(v),M=h.getX(v+1),S=Ya(this,e,ao,l,g,M,v);S&&t.push(S)}if(this.isLineLoop){let v=h.getX(m-1),p=h.getX(f),g=Ya(this,e,ao,l,v,p,m-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=f,p=m-1;v<p;v+=c){let g=Ya(this,e,ao,l,v,v+1,v);g&&t.push(g)}if(this.isLineLoop){let v=Ya(this,e,ao,l,m-1,f,m-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ya(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(fl.fromBufferAttribute(a,i),pl.fromBufferAttribute(a,r),t.distanceSqToSegment(fl,pl,bh,Qd)>n)return;bh.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(bh);if(!(c<e.near||c>e.far))return{distance:c,point:Qd.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var ef=new I,tf=new I,Es=class extends Ts{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ef.fromBufferAttribute(t,i),tf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ef.distanceTo(tf);e.setAttribute("lineDistance",new Qe(n,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Eo=class extends Ts{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ji=class extends on{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},nf=new Ke,Ph=new Ss,Ka=new _n,Za=new I,$i=class extends wt{constructor(e=new at,t=new Ji){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(i),Ka.radius+=r,e.ray.intersectsSphere(Ka)===!1)return;nf.copy(i).invert(),Ph.copy(e.ray).applyMatrix4(nf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,v=f;m<v;m++){let p=c.getX(m);Za.fromBufferAttribute(u,p),sf(Za,p,l,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,v=f;m<v;m++)Za.fromBufferAttribute(u,m),sf(Za,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function sf(s,e,t,n,i,r,o){let a=Ph.distanceSqToPoint(s);if(a<t){let l=new I;Ph.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var wo=class extends Gt{constructor(e=[],t=is,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qn=class extends Gt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ji=class extends Gt{constructor(e,t,n=Jn,i,r,o,a=Ft,l=Ft,c,h=ii,u=1){if(h!==ii&&h!==ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ml=class extends ji{constructor(e,t=Jn,n=is,i,r,o=Ft,a=Ft,l,c=ii){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ao=class extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},fn=class s extends at{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function m(v,p,g,M,S,_,b,E,A,x,w){let R=_/A,P=b/x,N=_/2,z=b/2,L=E/2,F=A+1,H=x+1,V=0,Q=0,G=new I;for(let Z=0;Z<H;Z++){let ee=Z*P-z;for(let de=0;de<F;de++){let ce=de*R-N;G[v]=ce*M,G[p]=ee*S,G[g]=L,c.push(G.x,G.y,G.z),G[v]=0,G[p]=0,G[g]=E>0?1:-1,h.push(G.x,G.y,G.z),u.push(de/A),u.push(1-Z/x),V+=1}}for(let Z=0;Z<x;Z++)for(let ee=0;ee<A;ee++){let de=d+ee+F*Z,ce=d+ee+F*(Z+1),ze=d+(ee+1)+F*(Z+1),Fe=d+(ee+1)+F*Z;l.push(de,ce,Fe),l.push(ce,ze,Fe),Q+=6}a.addGroup(f,Q,w),f+=Q,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ro=class s extends at{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,m=n*2+r,v=i+1,p=new I,g=new I;for(let M=0;M<=m;M++){let S=0,_=0,b=0,E=0;if(M<=n){let w=M/n,R=w*Math.PI/2;_=-h-e*Math.cos(R),b=e*Math.sin(R),E=-e*Math.cos(R),S=w*u}else if(M<=n+r){let w=(M-n)/r;_=-h+w*t,b=e,E=0,S=u+w*d}else{let w=(M-n-r)/n,R=w*Math.PI/2;_=h+e*Math.sin(R),b=e*Math.cos(R),E=e*Math.sin(R),S=u+d+w*u}let A=Math.max(0,Math.min(1,S/f)),x=0;M===0?x=.5/i:M===m&&(x=-.5/i);for(let w=0;w<=i;w++){let R=w/i,P=R*Math.PI*2,N=Math.sin(P),z=Math.cos(P);g.x=-b*z,g.y=_,g.z=b*N,a.push(g.x,g.y,g.z),p.set(-b*z,E,b*N),p.normalize(),l.push(p.x,p.y,p.z),c.push(R+x,A)}if(M>0){let w=(M-1)*v;for(let R=0;R<i;R++){let P=w+R,N=w+R+1,z=M*v+R,L=M*v+R+1;o.push(P,N,z),o.push(N,L,z)}}}this.setIndex(o),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Yn=class s extends at{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,v=[],p=n/2,g=0;M(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(f,2));function M(){let _=new I,b=new I,E=0,A=(t-e)/n;for(let x=0;x<=r;x++){let w=[],R=x/r,P=R*(t-e)+e;for(let N=0;N<=i;N++){let z=N/i,L=z*l+a,F=Math.sin(L),H=Math.cos(L);b.x=P*F,b.y=-R*n+p,b.z=P*H,u.push(b.x,b.y,b.z),_.set(F,A,H).normalize(),d.push(_.x,_.y,_.z),f.push(z,1-R),w.push(m++)}v.push(w)}for(let x=0;x<i;x++)for(let w=0;w<r;w++){let R=v[w][x],P=v[w+1][x],N=v[w+1][x+1],z=v[w][x+1];(e>0||w!==0)&&(h.push(R,P,z),E+=3),(t>0||w!==r-1)&&(h.push(P,N,z),E+=3)}c.addGroup(g,E,0),g+=E}function S(_){let b=m,E=new se,A=new I,x=0,w=_===!0?e:t,R=_===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,p*R,0),d.push(0,R,0),f.push(.5,.5),m++;let P=m;for(let N=0;N<=i;N++){let L=N/i*l+a,F=Math.cos(L),H=Math.sin(L);A.x=w*H,A.y=p*R,A.z=w*F,u.push(A.x,A.y,A.z),d.push(0,R,0),E.x=F*.5+.5,E.y=H*.5*R+.5,f.push(E.x,E.y),m++}for(let N=0;N<i;N++){let z=b+N,L=P+N;_===!0?h.push(L,L+1,z):h.push(L+1,L,z),x+=3}c.addGroup(g,x,_===!0?1:2),g+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},yr=class s extends Yn{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Co=class s extends at{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let S=new I,_=new I,b=new I;for(let E=0;E<t.length;E+=3)f(t[E+0],S),f(t[E+1],_),f(t[E+2],b),l(S,_,b,M)}function l(M,S,_,b){let E=b+1,A=[];for(let x=0;x<=E;x++){A[x]=[];let w=M.clone().lerp(_,x/E),R=S.clone().lerp(_,x/E),P=E-x;for(let N=0;N<=P;N++)N===0&&x===E?A[x][N]=w:A[x][N]=w.clone().lerp(R,N/P)}for(let x=0;x<E;x++)for(let w=0;w<2*(E-x)-1;w++){let R=Math.floor(w/2);w%2===0?(d(A[x][R+1]),d(A[x+1][R]),d(A[x][R])):(d(A[x][R+1]),d(A[x+1][R+1]),d(A[x+1][R]))}}function c(M){let S=new I;for(let _=0;_<r.length;_+=3)S.x=r[_+0],S.y=r[_+1],S.z=r[_+2],S.normalize().multiplyScalar(M),r[_+0]=S.x,r[_+1]=S.y,r[_+2]=S.z}function h(){let M=new I;for(let S=0;S<r.length;S+=3){M.x=r[S+0],M.y=r[S+1],M.z=r[S+2];let _=p(M)/2/Math.PI+.5,b=g(M)/Math.PI+.5;o.push(_,1-b)}m(),u()}function u(){for(let M=0;M<o.length;M+=6){let S=o[M+0],_=o[M+2],b=o[M+4],E=Math.max(S,_,b),A=Math.min(S,_,b);E>.9&&A<.1&&(S<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),b<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,S){let _=M*3;S.x=e[_+0],S.y=e[_+1],S.z=e[_+2]}function m(){let M=new I,S=new I,_=new I,b=new I,E=new se,A=new se,x=new se;for(let w=0,R=0;w<r.length;w+=9,R+=6){M.set(r[w+0],r[w+1],r[w+2]),S.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),E.set(o[R+0],o[R+1]),A.set(o[R+2],o[R+3]),x.set(o[R+4],o[R+5]),b.copy(M).add(S).add(_).divideScalar(3);let P=p(b);v(E,R+0,M,P),v(A,R+2,S,P),v(x,R+4,_,P)}}function v(M,S,_,b){b<0&&M.x===1&&(o[S]=M.x-1),_.x===0&&_.z===0&&(o[S]=b/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var Sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Le("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new se:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,i=[],r=[],o=[],a=new I,l=new Ke;for(let f=0;f<=e;f++){let m=f/e;i[f]=this.getTangentAt(m,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(nt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(nt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Mr=class extends Sn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new se){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},gl=class extends Mr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ru(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var rf=new I,of=new I,Th=new ru,Eh=new ru,wh=new ru,_l=class extends Sn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(of.subVectors(i[0],i[1]).add(i[0]),c=of);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(rf.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=rf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),p<1e-4&&(p=v),Th.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,v,p),Eh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,v,p),wh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,v,p)}else this.curveType==="catmullrom"&&(Th.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Eh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),wh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Th.calc(l),Eh.calc(l),wh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function af(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function yg(s,e){let t=1-s;return t*t*e}function Mg(s,e){return 2*(1-s)*s*e}function Sg(s,e){return s*s*e}function uo(s,e,t,n){return yg(s,e)+Mg(s,t)+Sg(s,n)}function bg(s,e){let t=1-s;return t*t*t*e}function Tg(s,e){let t=1-s;return 3*t*t*s*e}function Eg(s,e){return 3*(1-s)*s*s*e}function wg(s,e){return s*s*s*e}function fo(s,e,t,n,i){return bg(s,e)+Tg(s,t)+Eg(s,n)+wg(s,i)}var Io=class extends Sn{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fo(e,i.x,r.x,o.x,a.x),fo(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xl=class extends Sn{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fo(e,i.x,r.x,o.x,a.x),fo(e,i.y,r.y,o.y,a.y),fo(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Po=class extends Sn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vl=class extends Sn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lo=class extends Sn{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(uo(e,i.x,r.x,o.x),uo(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yl=class extends Sn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(uo(e,i.x,r.x,o.x),uo(e,i.y,r.y,o.y),uo(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},No=class extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(af(a,l.x,c.x,h.x,u.x),af(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new se().fromArray(i))}return this}},Lh=Object.freeze({__proto__:null,ArcCurve:gl,CatmullRomCurve3:_l,CubicBezierCurve:Io,CubicBezierCurve3:xl,EllipseCurve:Mr,LineCurve:Po,LineCurve3:vl,QuadraticBezierCurve:Lo,QuadraticBezierCurve3:yl,SplineCurve:No}),Ml=class extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Lh[i.type]().fromJSON(i))}return this}},Do=class extends Ml{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Po(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Lo(this.currentPoint.clone(),new se(e,t),new se(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new Io(this.currentPoint.clone(),new se(e,t),new se(n,i),new se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new No(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new Mr(e,t,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Nn=class extends Do{constructor(e){super(e),this.uuid=In(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Do().fromJSON(i))}return this}};function Ag(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=lp(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Lg(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let h=a,u=l;for(let d=t;d<i;d+=t){let f=s[d],m=s[d+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Uo(r,o,t,a,l,c,0),o}function lp(s,e,t,n,i){let r;if(i===Gg(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=lf(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=lf(o/n|0,s[o],s[o+1],r);return r&&Sr(r,r.next)&&(Oo(r),r=r.next),r}function ws(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Sr(t,t.next)||Pt(t.prev,t,t.next)===0)){if(Oo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Uo(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Og(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Cg(s,n,i,r):Rg(s)){e.push(l.i,s.i,c.i),Oo(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Ig(ws(s),e),Uo(s,e,t,n,i,r,2)):o===2&&Pg(s,e,t,n,i,r):Uo(ws(s),e,t,n,i,r,1);break}}}function Rg(s){let e=s.prev,t=s,n=s.next;if(Pt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),d=Math.max(i,r,o),f=Math.max(a,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&lo(i,a,r,l,o,c,m.x,m.y)&&Pt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Cg(s,e,t,n){let i=s.prev,r=s,o=s.next;if(Pt(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=Math.min(a,l,c),m=Math.min(h,u,d),v=Math.max(a,l,c),p=Math.max(h,u,d),g=Nh(f,m,e,t,n),M=Nh(v,p,e,t,n),S=s.prevZ,_=s.nextZ;for(;S&&S.z>=g&&_&&_.z<=M;){if(S.x>=f&&S.x<=v&&S.y>=m&&S.y<=p&&S!==i&&S!==o&&lo(a,h,l,u,c,d,S.x,S.y)&&Pt(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=f&&_.x<=v&&_.y>=m&&_.y<=p&&_!==i&&_!==o&&lo(a,h,l,u,c,d,_.x,_.y)&&Pt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=g;){if(S.x>=f&&S.x<=v&&S.y>=m&&S.y<=p&&S!==i&&S!==o&&lo(a,h,l,u,c,d,S.x,S.y)&&Pt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=p&&_!==i&&_!==o&&lo(a,h,l,u,c,d,_.x,_.y)&&Pt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Ig(s,e){let t=s;do{let n=t.prev,i=t.next.next;!Sr(n,i)&&hp(n,t,t.next,i)&&Fo(n,i)&&Fo(i,n)&&(e.push(n.i,t.i,i.i),Oo(t),Oo(t.next),t=s=i),t=t.next}while(t!==s);return ws(t)}function Pg(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&kg(o,a)){let l=up(o,a);o=ws(o,o.next),l=ws(l,l.next),Uo(o,e,t,n,i,r,0),Uo(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Lg(s,e,t,n){let i=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=lp(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(zg(c))}i.sort(Ng);for(let r=0;r<i.length;r++)t=Dg(i[r],t);return t}function Ng(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Dg(s,e){let t=Ug(s,e);if(!t)return e;let n=up(t,s);return ws(n,n.next),ws(t,t.next)}function Ug(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;if(Sr(s,t))return t;do{if(Sr(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&cp(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);Fo(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Fg(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Fg(s,e){return Pt(s.prev,s,e.prev)<0&&Pt(e.next,s,s.next)<0}function Og(s,e,t,n){let i=s;do i.z===0&&(i.z=Nh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Bg(i)}function Bg(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function Nh(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function zg(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function cp(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function lo(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&cp(s,e,t,n,i,r,o,a)}function kg(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Hg(s,e)&&(Fo(s,e)&&Fo(e,s)&&Vg(s,e)&&(Pt(s.prev,s,e.prev)||Pt(s,e.prev,e))||Sr(s,e)&&Pt(s.prev,s,s.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Sr(s,e){return s.x===e.x&&s.y===e.y}function hp(s,e,t,n){let i=$a(Pt(s,e,t)),r=$a(Pt(s,e,n)),o=$a(Pt(t,n,s)),a=$a(Pt(t,n,e));return!!(i!==r&&o!==a||i===0&&Ja(s,t,e)||r===0&&Ja(s,n,e)||o===0&&Ja(t,s,n)||a===0&&Ja(t,e,n))}function Ja(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function $a(s){return s>0?1:s<0?-1:0}function Hg(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&hp(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Fo(s,e){return Pt(s.prev,s,s.next)<0?Pt(s,e,s.next)>=0&&Pt(s,s.prev,e)>=0:Pt(s,e,s.prev)<0||Pt(s,s.next,e)<0}function Vg(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function up(s,e){let t=Dh(s.i,s.x,s.y),n=Dh(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function lf(s,e,t,n){let i=Dh(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Oo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Dh(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gg(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Uh=class{static triangulate(e,t,n=2){return Ag(e,t,n)}},ti=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];cf(e),hf(n,e);let o=e.length;t.forEach(cf);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,hf(n,t[l]);let a=Uh.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function cf(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function hf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var As=class s extends at{constructor(e=new Nn([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Qe(i,3)),this.setAttribute("uv",new Qe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Wg,S,_=!1,b,E,A,x;if(g){S=g.getSpacedPoints(h),_=!0,d=!1;let ie=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(h,ie),E=new I,A=new I,x=new I}d||(p=0,f=0,m=0,v=0);let w=a.extractPoints(c),R=w.shape,P=w.holes;if(!ti.isClockWise(R)){R=R.reverse();for(let ie=0,oe=P.length;ie<oe;ie++){let ae=P[ie];ti.isClockWise(ae)&&(P[ie]=ae.reverse())}}function z(ie){let ae=10000000000000001e-36,le=ie[0];for(let pe=1;pe<=ie.length;pe++){let ke=pe%ie.length,Be=ie[ke],Ye=Be.x-le.x,Je=Be.y-le.y,U=Ye*Ye+Je*Je,ut=Math.max(Math.abs(Be.x),Math.abs(Be.y),Math.abs(le.x),Math.abs(le.y)),rt=ae*ut*ut;if(U<=rt){ie.splice(ke,1),pe--;continue}le=Be}}z(R),P.forEach(z);let L=P.length,F=R;for(let ie=0;ie<L;ie++){let oe=P[ie];R=R.concat(oe)}function H(ie,oe,ae){return oe||Ve("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(oe,ae)}let V=R.length;function Q(ie,oe,ae){let le,pe,ke,Be=ie.x-oe.x,Ye=ie.y-oe.y,Je=ae.x-ie.x,U=ae.y-ie.y,ut=Be*Be+Ye*Ye,rt=Be*U-Ye*Je;if(Math.abs(rt)>Number.EPSILON){let C=Math.sqrt(ut),y=Math.sqrt(Je*Je+U*U),k=oe.x-Ye/C,q=oe.y+Be/C,J=ae.x-U/y,he=ae.y+Je/y,fe=((J-k)*U-(he-q)*Je)/(Be*U-Ye*Je);le=k+Be*fe-ie.x,pe=q+Ye*fe-ie.y;let j=le*le+pe*pe;if(j<=2)return new se(le,pe);ke=Math.sqrt(j/2)}else{let C=!1;Be>Number.EPSILON?Je>Number.EPSILON&&(C=!0):Be<-Number.EPSILON?Je<-Number.EPSILON&&(C=!0):Math.sign(Ye)===Math.sign(U)&&(C=!0),C?(le=-Ye,pe=Be,ke=Math.sqrt(ut)):(le=Be,pe=Ye,ke=Math.sqrt(ut/2))}return new se(le/ke,pe/ke)}let G=[];for(let ie=0,oe=F.length,ae=oe-1,le=ie+1;ie<oe;ie++,ae++,le++)ae===oe&&(ae=0),le===oe&&(le=0),G[ie]=Q(F[ie],F[ae],F[le]);let Z=[],ee,de=G.concat();for(let ie=0,oe=L;ie<oe;ie++){let ae=P[ie];ee=[];for(let le=0,pe=ae.length,ke=pe-1,Be=le+1;le<pe;le++,ke++,Be++)ke===pe&&(ke=0),Be===pe&&(Be=0),ee[le]=Q(ae[le],ae[ke],ae[Be]);Z.push(ee),de=de.concat(ee)}let ce;if(p===0)ce=ti.triangulateShape(F,P);else{let ie=[],oe=[];for(let ae=0;ae<p;ae++){let le=ae/p,pe=f*Math.cos(le*Math.PI/2),ke=m*Math.sin(le*Math.PI/2)+v;for(let Be=0,Ye=F.length;Be<Ye;Be++){let Je=H(F[Be],G[Be],ke);Me(Je.x,Je.y,-pe),le===0&&ie.push(Je)}for(let Be=0,Ye=L;Be<Ye;Be++){let Je=P[Be];ee=Z[Be];let U=[];for(let ut=0,rt=Je.length;ut<rt;ut++){let C=H(Je[ut],ee[ut],ke);Me(C.x,C.y,-pe),le===0&&U.push(C)}le===0&&oe.push(U)}}ce=ti.triangulateShape(ie,oe)}let ze=ce.length,Fe=m+v;for(let ie=0;ie<V;ie++){let oe=d?H(R[ie],de[ie],Fe):R[ie];_?(A.copy(b.normals[0]).multiplyScalar(oe.x),E.copy(b.binormals[0]).multiplyScalar(oe.y),x.copy(S[0]).add(A).add(E),Me(x.x,x.y,x.z)):Me(oe.x,oe.y,0)}for(let ie=1;ie<=h;ie++)for(let oe=0;oe<V;oe++){let ae=d?H(R[oe],de[oe],Fe):R[oe];_?(A.copy(b.normals[ie]).multiplyScalar(ae.x),E.copy(b.binormals[ie]).multiplyScalar(ae.y),x.copy(S[ie]).add(A).add(E),Me(x.x,x.y,x.z)):Me(ae.x,ae.y,u/h*ie)}for(let ie=p-1;ie>=0;ie--){let oe=ie/p,ae=f*Math.cos(oe*Math.PI/2),le=m*Math.sin(oe*Math.PI/2)+v;for(let pe=0,ke=F.length;pe<ke;pe++){let Be=H(F[pe],G[pe],le);Me(Be.x,Be.y,u+ae)}for(let pe=0,ke=P.length;pe<ke;pe++){let Be=P[pe];ee=Z[pe];for(let Ye=0,Je=Be.length;Ye<Je;Ye++){let U=H(Be[Ye],ee[Ye],le);_?Me(U.x,U.y+S[h-1].y,S[h-1].x+ae):Me(U.x,U.y,u+ae)}}}We(),K();function We(){let ie=i.length/3;if(d){let oe=0,ae=V*oe;for(let le=0;le<ze;le++){let pe=ce[le];Xe(pe[2]+ae,pe[1]+ae,pe[0]+ae)}oe=h+p*2,ae=V*oe;for(let le=0;le<ze;le++){let pe=ce[le];Xe(pe[0]+ae,pe[1]+ae,pe[2]+ae)}}else{for(let oe=0;oe<ze;oe++){let ae=ce[oe];Xe(ae[2],ae[1],ae[0])}for(let oe=0;oe<ze;oe++){let ae=ce[oe];Xe(ae[0]+V*h,ae[1]+V*h,ae[2]+V*h)}}n.addGroup(ie,i.length/3-ie,0)}function K(){let ie=i.length/3,oe=0;$(F,oe),oe+=F.length;for(let ae=0,le=P.length;ae<le;ae++){let pe=P[ae];$(pe,oe),oe+=pe.length}n.addGroup(ie,i.length/3-ie,1)}function $(ie,oe){let ae=ie.length;for(;--ae>=0;){let le=ae,pe=ae-1;pe<0&&(pe=ie.length-1);for(let ke=0,Be=h+p*2;ke<Be;ke++){let Ye=V*ke,Je=V*(ke+1),U=oe+le+Ye,ut=oe+pe+Ye,rt=oe+pe+Je,C=oe+le+Je;Ee(U,ut,rt,C)}}}function Me(ie,oe,ae){l.push(ie),l.push(oe),l.push(ae)}function Xe(ie,oe,ae){qe(ie),qe(oe),qe(ae);let le=i.length/3,pe=M.generateTopUV(n,i,le-3,le-2,le-1);pt(pe[0]),pt(pe[1]),pt(pe[2])}function Ee(ie,oe,ae,le){qe(ie),qe(oe),qe(le),qe(oe),qe(ae),qe(le);let pe=i.length/3,ke=M.generateSideWallUV(n,i,pe-6,pe-3,pe-2,pe-1);pt(ke[0]),pt(ke[1]),pt(ke[3]),pt(ke[1]),pt(ke[2]),pt(ke[3])}function qe(ie){i.push(l[ie*3+0]),i.push(l[ie*3+1]),i.push(l[ie*3+2])}function pt(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Xg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Lh[i.type]().fromJSON(i)),new s(n,e.options)}},Wg={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new se(r,o),new se(a,l),new se(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],v=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new se(o,1-l),new se(c,1-u),new se(d,1-m),new se(v,1-g)]:[new se(a,1-l),new se(h,1-u),new se(f,1-m),new se(p,1-g)]}};function Xg(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ti=class s extends Co{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Bo=class s extends Co{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Ei=class s extends at{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],v=[],p=[];for(let g=0;g<h;g++){let M=g*d-o;for(let S=0;S<c;S++){let _=S*u-r;m.push(_,-M,0),v.push(0,0,1),p.push(S/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){let S=M+c*g,_=M+c*(g+1),b=M+1+c*(g+1),E=M+1+c*g;f.push(S,_,E),f.push(_,b,E)}this.setIndex(f),this.setAttribute("position",new Qe(m,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Qi=class s extends at{constructor(e=new Nn([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Qe(i,3)),this.setAttribute("normal",new Qe(r,3)),this.setAttribute("uv",new Qe(o,2));function c(h){let u=i.length/3,d=h.extractPoints(t),f=d.shape,m=d.holes;ti.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,g=m.length;p<g;p++){let M=m[p];ti.isClockWise(M)===!0&&(m[p]=M.reverse())}let v=ti.triangulateShape(f,m);for(let p=0,g=m.length;p<g;p++){let M=m[p];f=f.concat(M)}for(let p=0,g=f.length;p<g;p++){let M=f[p];i.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let p=0,g=v.length;p<g;p++){let M=v[p],S=M[0]+u,_=M[1]+u,b=M[2]+u;n.push(S,_,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return qg(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function qg(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var si=class s extends at{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,d=new I,f=[],m=[],v=[],p=[];for(let g=0;g<=n;g++){let M=[],S=g/n,_=o+S*a,b=e*Math.cos(_),E=Math.sqrt(e*e-b*b),A=0;g===0&&o===0?A=.5/t:g===n&&l===Math.PI&&(A=-.5/t);for(let x=0;x<=t;x++){let w=x/t,R=i+w*r;u.x=-E*Math.cos(R),u.y=b,u.z=E*Math.sin(R),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(w+A,1-S),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<t;M++){let S=h[g][M+1],_=h[g][M],b=h[g+1][M],E=h[g+1][M+1];(g!==0||o>0)&&f.push(S,_,E),(g!==n-1||l<Math.PI)&&f.push(_,b,E)}this.setIndex(f),this.setAttribute("position",new Qe(m,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var es=class s extends at{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],d=new I,f=new I,m=new I;for(let v=0;v<=n;v++){let p=o+v/n*a;for(let g=0;g<=i;g++){let M=g/i*r;f.x=(e+t*Math.cos(p))*Math.cos(M),f.y=(e+t*Math.cos(p))*Math.sin(M),f.z=t*Math.sin(p),c.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(g/i),u.push(v/n)}}for(let v=1;v<=n;v++)for(let p=1;p<=i;p++){let g=(i+1)*v+p-1,M=(i+1)*(v-1)+p-1,S=(i+1)*(v-1)+p,_=(i+1)*v+p;l.push(g,M,_),l.push(M,S,_)}this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Us(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(uf(i))i.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(uf(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function an(s){let e={};for(let t=0;t<s.length;t++){let n=Us(s[t]);for(let i in n)e[i]=n[i]}return e}function uf(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Yg(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ou(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var Ni={clone:Us,merge:an},Kg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bt=class extends on{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kg,this.fragmentShader=Zg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=Yg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new ue().setHex(i.value);break;case"v2":this.uniforms[n].value=new se().fromArray(i.value);break;case"v3":this.uniforms[n].value=new I().fromArray(i.value);break;case"v4":this.uniforms[n].value=new gt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ze().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ke().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},br=class extends bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ht=class extends on{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ha,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},en=class extends ht{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var zo=class extends on{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ha,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Dl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sl=class extends on{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bl=class extends on{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Yi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function nl(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Jg(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function df(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function $g(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var ri=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Tl=class extends ri{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ps,endingEnd:ps}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ms:r=e,a=2*t-n;break;case po:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ms:o=e,l=2*n-t;break;case po:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),v=m*m,p=v*m,g=-d*p+2*d*v-d*m,M=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*m+1,S=(-1-f)*p+(1.5+f)*v+.5*m,_=f*p-f*v;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+M*o[c+b]+S*o[l+b]+_*o[u+b];return r}},ko=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},El=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},wl=class extends ri{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(i-t),v=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*v+o[l+p]*m;return r}let d=a*2,f=e-1;for(let m=0;m!==a;++m){let v=o[c+m],p=o[l+m],g=f*d+m*2,M=u[g],S=u[g+1],_=e*d+m*2,b=h[_],E=h[_+1],A=Qg(n,t,M,b,i);r[m]=dp(A,v,S,E,p)}return r}};function dp(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function jg(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Qg(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){let a=dp(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;let l=jg(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var xn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yi(t,this.TimeBufferType),this.values=Yi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Yi(e.times,Array),values:Yi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),nl(e.settings)&&(n.settings={inTangents:Yi(e.settings.inTangents,Array),outTangents:Yi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new El(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new wl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case _s:t=this.InterpolantFactoryMethodDiscrete;break;case xs:t=this.InterpolantFactoryMethodLinear;break;case el:t=this.InterpolantFactoryMethodSmooth;break;case Ih:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Le("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _s;case this.InterpolantFactoryMethodLinear:return xs;case this.InterpolantFactoryMethodSmooth:return el;case this.InterpolantFactoryMethodBezier:return Ih}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;nl(this.settings)&&(ff(this.settings.inTangents,e),ff(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ve("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Fm(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===el,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let v=t[u+m];if(v!==t[d+m]||v!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,nl(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function ff(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=xs;var wi=class extends xn{constructor(e,t,n){super(e,t,n)}};wi.prototype.ValueTypeName="bool";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=_s;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ho=class extends xn{constructor(e,t,n,i){super(e,t,n,i)}};Ho.prototype.ValueTypeName="color";var Ai=class extends xn{constructor(e,t,n,i){super(e,t,n,i)}};Ai.prototype.ValueTypeName="number";var Al=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)Lt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ri=class extends xn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Al(this.times,this.values,this.getValueSize(),e)}};Ri.prototype.ValueTypeName="quaternion";Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends xn{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=_s;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends xn{constructor(e,t,n,i){super(e,t,n,i)}};ts.prototype.ValueTypeName="vector";var Rs=class{constructor(e="",t=-1,n=[],i=Mc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=In(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(t0(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(xn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=Jg(l);l=df(l,1,h),c=df(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ai(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function e0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ai;case"vector":case"vector2":case"vector3":case"vector4":return ts;case"color":return Ho;case"quaternion":return Ri;case"bool":case"boolean":return wi;case"string":return Ci}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function t0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=e0(s.type);if(s.times===void 0){let n=[],i=[];$g(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),nl(s.settings)&&(t.settings={inTangents:Yi(s.settings.inTangents,Float32Array),outTangents:Yi(s.settings.outTangents,Float32Array)}),t}var ni={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(pf(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!pf(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function pf(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Rl=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},fp=new Rl,oi=class{constructor(e){this.manager=e!==void 0?e:fp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};oi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mi={},Fh=class extends Error{constructor(e,t){super(e),this.response=t}},Tr=class extends oi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ni.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:n,onError:i});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Le("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Mi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,v=0,p=new ReadableStream({start(g){M();function M(){u.read().then(({done:S,value:_})=>{if(S)g.close();else{v+=_.byteLength;let b=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let E=0,A=h.length;E<A;E++){let x=h[E];x.onProgress&&x.onProgress(b)}g.enqueue(_),M()}},S=>{g.error(S)})}}});return new Response(p)}else throw new Fh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{ni.add(`file:${e}`,c);let h=Mi[e];delete Mi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Mi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Mi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var rr=new WeakMap,Cl=class extends oi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ni.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=rr.get(o);u===void 0&&(u=[],rr.set(o,u)),u.push({onLoad:t,onError:i})}return o}let a=dr("img");function l(){h(),t&&t(this);let u=rr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}rr.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),ni.remove(`image:${e}`);let d=rr.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}rr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ni.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Vo=class extends oi{constructor(e){super(e)}load(e,t,n,i){let r=new Gt,o=new Cl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Cs=class extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Go=class extends Cs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ah=new Ke,mf=new I,gf=new I,Er=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;mf.setFromMatrixPosition(e.matrixWorld),t.position.copy(mf),gf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Ah.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ah,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===ur||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Ah)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ja=new I,Qa=new Lt,ei=new I,Wo=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ja,Qa,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ja,Qa,ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ja,Qa,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ja,Qa,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qi=new I,_f=new se,xf=new se,Vt=class extends Wo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,_f,xf),t.subVectors(xf,_f)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(co*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Oh=class extends Er{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=vs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Xo=class extends Cs{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Oh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Bh=class extends Er{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0}},qo=class extends Cs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Bh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ai=class extends Wo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zh=class extends Er{constructor(){super(new ai(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ns=class extends Cs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new zh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ii=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Rh=new WeakMap,Yo=class extends oi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Le("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Le("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ni.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Rh.has(o)===!0?(i&&i(Rh.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ni.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Rh.set(l,c),ni.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ni.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var or=-90,ar=1,Il=class extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Vt(or,ar,e,t);i.layers=this.layers,this.add(i);let r=new Vt(or,ar,e,t);r.layers=this.layers,this.add(r);let o=new Vt(or,ar,e,t);o.layers=this.layers,this.add(o);let a=new Vt(or,ar,e,t);a.layers=this.layers,this.add(a);let l=new Vt(or,ar,e,t);l.layers=this.layers,this.add(l);let c=new Vt(or,ar,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Pl=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ko=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=n0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function n0(){this._document.hidden===!1&&this.reset()}var Ll=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Lt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;Lt.multiplyQuaternionsFlat(e,o,e,t,e,n),Lt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},au="\\[\\]\\.:\\/",i0=new RegExp("["+au+"]","g"),lu="[^"+au+"]",s0="[^"+au.replace("\\.","")+"]",r0=/((?:WC+[\/:])*)/.source.replace("WC",lu),o0=/(WCOD+)?/.source.replace("WCOD",s0),a0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lu),l0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lu),c0=new RegExp("^"+r0+o0+a0+l0+"$"),h0=["material","materials","bones","map"],kh=class{constructor(e,t,n){let i=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(i0,"")}static parseTrackName(e){let t=c0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);h0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=kh;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Nl=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:ps,endingEnd:ps};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Wf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case qf:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Mc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===Xf;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Gf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=ms,i.endingEnd=ms):(e?i.endingStart=this.zeroSlopeAtStart?ms:ps:i.endingStart=po,t?i.endingEnd=this.zeroSlopeAtEnd?ms:ps:i.endingEnd=po)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},u0=new Float32Array(1),Zo=class extends Wn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=i[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}let v=t&&t._propertyBindings[u].binding.parsedPath;m=new Ll(xt.create(n,f,v),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ko(new Float32Array(2),new Float32Array(2),1,u0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?Rs.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Mc),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new Nl(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Rs.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Hh=class s{static{s.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};function cu(s,e,t,n){let i=d0(n);switch(t){case jh:return s*e;case Hl:return s*e/i.components*i.byteLength;case Vl:return s*e/i.components*i.byteLength;case rs:return s*e*2/i.components*i.byteLength;case Gl:return s*e*2/i.components*i.byteLength;case Qh:return s*e*3/i.components*i.byteLength;case Tn:return s*e*4/i.components*i.byteLength;case Wl:return s*e*4/i.components*i.byteLength;case ia:case sa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ra:case oa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ql:case Kl:return Math.max(s,16)*Math.max(e,8)/4;case Xl:case Yl:return Math.max(s,8)*Math.max(e,8)/2;case Zl:case Jl:case jl:case Ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $l:case aa:case ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ic:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case rc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case oc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ac:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case lc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case hc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case uc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case dc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case fc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case pc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case mc:case gc:case _c:return Math.ceil(s/4)*Math.ceil(e/4)*16;case xc:case vc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case la:case yc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function d0(s){switch(s){case vn:case Kh:return{byteLength:1,components:1};case Rr:case Zh:case Wt:return{byteLength:2,components:1};case zl:case kl:return{byteLength:2,components:4};case Jn:case Bl:case bn:return{byteLength:4,components:1};case Jh:case $h:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Up(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function p0(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let v=u[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var m0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g0=`#ifdef USE_ALPHAHASH
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
#endif`,_0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,M0=`#ifdef USE_AOMAP
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
#endif`,S0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b0=`#ifdef USE_BATCHING
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
#endif`,T0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,R0=`#ifdef USE_IRIDESCENCE
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
#endif`,C0=`#ifdef USE_BUMPMAP
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
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,U0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,F0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,O0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,B0=`#define PI 3.141592653589793
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
} // validated`,z0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,k0=`vec3 transformedNormal = objectNormal;
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
#endif`,H0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X0="gl_FragColor = linearToOutputTexel( gl_FragColor );",q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y0=`#ifdef USE_ENVMAP
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
#endif`,K0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Z0=`#ifdef USE_ENVMAP
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
#endif`,J0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n_=`#ifdef USE_GRADIENTMAP
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
}`,i_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,a_=`#ifdef USE_ENVMAP
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
#endif`,l_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d_=`PhysicalMaterial material;
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
#endif`,f_=`uniform sampler2D dfgLUT;
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
}`,p_=`
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
#endif`,m_=`#if defined( RE_IndirectDiffuse )
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
#endif`,g_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,__=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,x_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,E_=`#if defined( USE_POINTS_UV )
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
#endif`,w_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P_=`#ifdef USE_MORPHTARGETS
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
#endif`,L_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,D_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,U_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,B_=`#ifdef USE_NORMALMAP
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
#endif`,z_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,X_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ex=`float getShadowMask() {
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
}`,tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nx=`#ifdef USE_SKINNING
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
#endif`,ix=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sx=`#ifdef USE_SKINNING
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
#endif`,rx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ox=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cx=`#ifdef USE_TRANSMISSION
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
#endif`,hx=`#ifdef USE_TRANSMISSION
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
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gx=`uniform sampler2D t2D;
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
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`#include <common>
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
}`,Sx=`#if DEPTH_PACKING == 3200
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
}`,bx=`#define DISTANCE
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
}`,Tx=`#define DISTANCE
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
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`uniform float scale;
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Cx=`#include <common>
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
}`,Ix=`uniform vec3 diffuse;
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
}`,Px=`#define LAMBERT
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
}`,Lx=`#define LAMBERT
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
}`,Nx=`#define MATCAP
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
}`,Dx=`#define MATCAP
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
}`,Ux=`#define NORMAL
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
}`,Fx=`#define NORMAL
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
}`,Ox=`#define PHONG
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
}`,Bx=`#define PHONG
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
}`,zx=`#define STANDARD
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
}`,kx=`#define STANDARD
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
}`,Hx=`#define TOON
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
}`,Vx=`#define TOON
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
}`,Gx=`uniform float size;
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
}`,Wx=`uniform vec3 diffuse;
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
}`,Xx=`#include <common>
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
}`,qx=`uniform vec3 color;
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
}`,Yx=`uniform float rotation;
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
}`,Kx=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:m0,alphahash_pars_fragment:g0,alphamap_fragment:_0,alphamap_pars_fragment:x0,alphatest_fragment:v0,alphatest_pars_fragment:y0,aomap_fragment:M0,aomap_pars_fragment:S0,batching_pars_vertex:b0,batching_vertex:T0,begin_vertex:E0,beginnormal_vertex:w0,bsdfs:A0,iridescence_fragment:R0,bumpmap_pars_fragment:C0,clipping_planes_fragment:I0,clipping_planes_pars_fragment:P0,clipping_planes_pars_vertex:L0,clipping_planes_vertex:N0,color_fragment:D0,color_pars_fragment:U0,color_pars_vertex:F0,color_vertex:O0,common:B0,cube_uv_reflection_fragment:z0,defaultnormal_vertex:k0,displacementmap_pars_vertex:H0,displacementmap_vertex:V0,emissivemap_fragment:G0,emissivemap_pars_fragment:W0,colorspace_fragment:X0,colorspace_pars_fragment:q0,envmap_fragment:Y0,envmap_common_pars_fragment:K0,envmap_pars_fragment:Z0,envmap_pars_vertex:J0,envmap_physical_pars_fragment:a_,envmap_vertex:$0,fog_vertex:j0,fog_pars_vertex:Q0,fog_fragment:e_,fog_pars_fragment:t_,gradientmap_pars_fragment:n_,lightmap_pars_fragment:i_,lights_lambert_fragment:s_,lights_lambert_pars_fragment:r_,lights_pars_begin:o_,lights_toon_fragment:l_,lights_toon_pars_fragment:c_,lights_phong_fragment:h_,lights_phong_pars_fragment:u_,lights_physical_fragment:d_,lights_physical_pars_fragment:f_,lights_fragment_begin:p_,lights_fragment_maps:m_,lights_fragment_end:g_,lightprobes_pars_fragment:__,logdepthbuf_fragment:x_,logdepthbuf_pars_fragment:v_,logdepthbuf_pars_vertex:y_,logdepthbuf_vertex:M_,map_fragment:S_,map_pars_fragment:b_,map_particle_fragment:T_,map_particle_pars_fragment:E_,metalnessmap_fragment:w_,metalnessmap_pars_fragment:A_,morphinstance_vertex:R_,morphcolor_vertex:C_,morphnormal_vertex:I_,morphtarget_pars_vertex:P_,morphtarget_vertex:L_,normal_fragment_begin:N_,normal_fragment_maps:D_,normal_pars_fragment:U_,normal_pars_vertex:F_,normal_vertex:O_,normalmap_pars_fragment:B_,clearcoat_normal_fragment_begin:z_,clearcoat_normal_fragment_maps:k_,clearcoat_pars_fragment:H_,iridescence_pars_fragment:V_,opaque_fragment:G_,packing:W_,premultiplied_alpha_fragment:X_,project_vertex:q_,dithering_fragment:Y_,dithering_pars_fragment:K_,roughnessmap_fragment:Z_,roughnessmap_pars_fragment:J_,shadowmap_pars_fragment:$_,shadowmap_pars_vertex:j_,shadowmap_vertex:Q_,shadowmask_pars_fragment:ex,skinbase_vertex:tx,skinning_pars_vertex:nx,skinning_vertex:ix,skinnormal_vertex:sx,specularmap_fragment:rx,specularmap_pars_fragment:ox,tonemapping_fragment:ax,tonemapping_pars_fragment:lx,transmission_fragment:cx,transmission_pars_fragment:hx,uv_pars_fragment:ux,uv_pars_vertex:dx,uv_vertex:fx,worldpos_vertex:px,background_vert:mx,background_frag:gx,backgroundCube_vert:_x,backgroundCube_frag:xx,cube_vert:vx,cube_frag:yx,depth_vert:Mx,depth_frag:Sx,distance_vert:bx,distance_frag:Tx,equirect_vert:Ex,equirect_frag:wx,linedashed_vert:Ax,linedashed_frag:Rx,meshbasic_vert:Cx,meshbasic_frag:Ix,meshlambert_vert:Px,meshlambert_frag:Lx,meshmatcap_vert:Nx,meshmatcap_frag:Dx,meshnormal_vert:Ux,meshnormal_frag:Fx,meshphong_vert:Ox,meshphong_frag:Bx,meshphysical_vert:zx,meshphysical_frag:kx,meshtoon_vert:Hx,meshtoon_frag:Vx,points_vert:Gx,points_frag:Wx,shadow_vert:Xx,shadow_frag:qx,sprite_vert:Yx,sprite_frag:Kx},ye={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ui={basic:{uniforms:an([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:an([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ue(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:an([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:an([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:an([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ue(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:an([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:an([ye.points,ye.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:an([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:an([ye.common,ye.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:an([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:an([ye.sprite,ye.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:an([ye.common,ye.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:an([ye.lights,ye.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};ui.physical={uniforms:an([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var Tc={r:0,b:0,g:0},Zx=new Ke,Fp=new Ze;Fp.set(-1,0,0,0,1,0,0,0,1);function Jx(s,e,t,n,i,r){let o=new ue(0),a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let S=M.isScene===!0?M.background:null;if(S&&S.isTexture){let _=M.backgroundBlurriness>0;S=e.get(S,_)}return S}function m(M){let S=!1,_=f(M);_===null?p(o,a):_&&_.isColor&&(p(_,1),S=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(M,S){let _=f(S);_&&(_.isCubeTexture||_.mapping===na)?(c===void 0&&(c=new Ge(new fn(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:Us(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zx.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Fp),c.material.toneMapped=je.getTransfer(_.colorSpace)!==ct,(h!==_||u!==_.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ge(new Ei(2,2),new bt({name:"BackgroundMaterial",uniforms:Us(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=je.getTransfer(_.colorSpace)!==ct,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,d=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,S){M.getRGB(Tc,ou(s)),t.buffers.color.setClear(Tc.r,Tc.g,Tc.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),a=S,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,p(o,a)},render:m,addToRenderList:v,dispose:g}}function $x(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(P,N,z,L,F){let H=!1,V=u(P,L,z,N);r!==V&&(r=V,c(r.object)),H=f(P,L,z,F),H&&m(P,L,z,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,_(P,N,z,L),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return s.createVertexArray()}function c(P){return s.bindVertexArray(P)}function h(P){return s.deleteVertexArray(P)}function u(P,N,z,L){let F=L.wireframe===!0,H=n[N.id];H===void 0&&(H={},n[N.id]=H);let V=P.isInstancedMesh===!0?P.id:0,Q=H[V];Q===void 0&&(Q={},H[V]=Q);let G=Q[z.id];G===void 0&&(G={},Q[z.id]=G);let Z=G[F];return Z===void 0&&(Z=d(l()),G[F]=Z),Z}function d(P){let N=[],z=[],L=[];for(let F=0;F<t;F++)N[F]=0,z[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:L,object:P,attributes:{},index:null}}function f(P,N,z,L){let F=r.attributes,H=N.attributes,V=0,Q=z.getAttributes();for(let G in Q)if(Q[G].location>=0){let ee=F[G],de=H[G];if(de===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(de=P.instanceColor)),ee===void 0||ee.attribute!==de||de&&ee.data!==de.data)return!0;V++}return r.attributesNum!==V||r.index!==L}function m(P,N,z,L){let F={},H=N.attributes,V=0,Q=z.getAttributes();for(let G in Q)if(Q[G].location>=0){let ee=H[G];ee===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor));let de={};de.attribute=ee,ee&&ee.data&&(de.data=ee.data),F[G]=de,V++}r.attributes=F,r.attributesNum=V,r.index=L}function v(){let P=r.newAttributes;for(let N=0,z=P.length;N<z;N++)P[N]=0}function p(P){g(P,0)}function g(P,N){let z=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;z[P]=1,L[P]===0&&(s.enableVertexAttribArray(P),L[P]=1),F[P]!==N&&(s.vertexAttribDivisor(P,N),F[P]=N)}function M(){let P=r.newAttributes,N=r.enabledAttributes;for(let z=0,L=N.length;z<L;z++)N[z]!==P[z]&&(s.disableVertexAttribArray(z),N[z]=0)}function S(P,N,z,L,F,H,V){V===!0?s.vertexAttribIPointer(P,N,z,F,H):s.vertexAttribPointer(P,N,z,L,F,H)}function _(P,N,z,L){v();let F=L.attributes,H=z.getAttributes(),V=N.defaultAttributeValues;for(let Q in H){let G=H[Q];if(G.location>=0){let Z=F[Q];if(Z===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){let ee=Z.normalized,de=Z.itemSize,ce=e.get(Z);if(ce===void 0)continue;let ze=ce.buffer,Fe=ce.type,We=ce.bytesPerElement,K=Fe===s.INT||Fe===s.UNSIGNED_INT||Z.gpuType===Bl;if(Z.isInterleavedBufferAttribute){let $=Z.data,Me=$.stride,Xe=Z.offset;if($.isInstancedInterleavedBuffer){for(let Ee=0;Ee<G.locationSize;Ee++)g(G.location+Ee,$.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Ee=0;Ee<G.locationSize;Ee++)p(G.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,ze);for(let Ee=0;Ee<G.locationSize;Ee++)S(G.location+Ee,de/G.locationSize,Fe,ee,Me*We,(Xe+de/G.locationSize*Ee)*We,K)}else{if(Z.isInstancedBufferAttribute){for(let $=0;$<G.locationSize;$++)g(G.location+$,Z.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let $=0;$<G.locationSize;$++)p(G.location+$);s.bindBuffer(s.ARRAY_BUFFER,ze);for(let $=0;$<G.locationSize;$++)S(G.location+$,de/G.locationSize,Fe,ee,de*We,de/G.locationSize*$*We,K)}}else if(V!==void 0){let ee=V[Q];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(G.location,ee);break;case 3:s.vertexAttrib3fv(G.location,ee);break;case 4:s.vertexAttrib4fv(G.location,ee);break;default:s.vertexAttrib1fv(G.location,ee)}}}}M()}function b(){w();for(let P in n){let N=n[P];for(let z in N){let L=N[z];for(let F in L){let H=L[F];for(let V in H)h(H[V].object),delete H[V];delete L[F]}}delete n[P]}}function E(P){if(n[P.id]===void 0)return;let N=n[P.id];for(let z in N){let L=N[z];for(let F in L){let H=L[F];for(let V in H)h(H[V].object),delete H[V];delete L[F]}}delete n[P.id]}function A(P){for(let N in n){let z=n[N];for(let L in z){let F=z[L];if(F[P.id]===void 0)continue;let H=F[P.id];for(let V in H)h(H[V].object),delete H[V];delete F[P.id]}}}function x(P){for(let N in n){let z=n[N],L=P.isInstancedMesh===!0?P.id:0,F=z[L];if(F!==void 0){for(let H in F){let V=F[H];for(let Q in V)h(V[Q].object),delete V[Q];delete F[H]}delete z[L],Object.keys(z).length===0&&delete n[N]}}}function w(){R(),o=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function jx(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Qx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Tn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let x=A===Wt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==vn&&A!==bn&&!x&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Le("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:_,maxSamples:b,samples:E}}function ev(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Hn,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,g=s.get(u);if(!i||m===null||m.length===0||r&&!p)r?h(null):c();else{let M=r?0:n,S=M*4,_=g.clippingState||null;l.value=_,_=h(m,d,S,f);for(let b=0;b!==S;++b)_[b]=t[b];g.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=l.value,m!==!0||p===null){let g=f+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let S=0,_=f;S!==v;++S,_+=4)o.copy(u[S]).applyMatrix4(M,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}var Lr=4,tv=6,nv=20,iv=256,ua=new ai,pp=new ue,hu=null,uu=0,du=0,fu=!1,sv=new I,Fs=new I,Dr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=sv}=r;hu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),du=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hu,uu,du),this._renderer.xr.enabled=fu,e.scissorTest=!1,Pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),du=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Wt,format:Tn,colorSpace:hn,depthBuffer:!1},i=mp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=rv(r)),this._blurMaterial=av(r,e,t),this._ggxMaterial=ov(r,e,t)}return i}_compileMaterial(e){let t=new Ge(new at,e);this._renderer.compile(t,ua)}_sceneToCubeUV(e,t,n,i,r){let l=new Vt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(pp),u.toneMapping=Kn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ge(new fn,new dn({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,p=v.material,g=!1,M=e.background;M?M.isColor&&(p.color.copy(M),e.background=null,g=!0):(p.color.copy(pp),g=!0);for(let S=0;S<6;S++){let _=S%3;_===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):_===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let b=this._cubeSize;Pr(i,_*b,S>2?b:0,b,b),u.setRenderTarget(i),g&&u.render(v,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===is||e.mapping===Ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_p()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gp());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Pr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ua)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:m}=this,v=this._sizeLods[n],p=3*v*(n>m-Lr?n-m+Lr:0),g=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,Pr(r,p,g,3*v,2*v),i.setRenderTarget(r),i.render(a,ua),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Pr(e,p,g,3*v,2*v),i.setRenderTarget(e),i.render(a,ua)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,i,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],u=3*h*(i>this._lodMax-Lr?i-this._lodMax+Lr:0),d=4*(this._cubeSize-h);Pr(t,u,d,3*h,2*h),o.setRenderTarget(t),o.render(l,ua)}};function rv(s){let e=[],t=[],n=s,i=s-Lr+1+tv;for(let r=0;r<i;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,m=new Float32Array(f*d*u),v=new Float32Array(f*d*u);for(let g=0;g<u;g++){let M=g%3*2/3-1,S=g>2?0:-1,_=[M,S,0,M+2/3,S,0,M+2/3,S+1,0,M,S,0,M+2/3,S+1,0,M,S+1,0];m.set(_,f*d*g);for(let b=0;b<d;b++){let E=h[b*2]*2-1,A=h[b*2+1]*2-1;g===0?Fs.set(1,A,E):g===1?Fs.set(-E,1,-A):g===2?Fs.set(-E,A,1):g===3?Fs.set(-1,A,-E):g===4?Fs.set(-E,-1,A):Fs.set(E,A,-1),Fs.toArray(v,(g*d+b)*f)}}let p=new at;p.setAttribute("position",new it(m,f)),p.setAttribute("outputDirection",new it(v,f)),t.push(new Ge(p,null)),n>Lr&&n--}return{lodMeshes:t,sizeLods:e}}function mp(s,e,t){let n=new Nt(s,e,t);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function ov(s,e,t){return new bt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function av(s,e,t){return new bt({name:"SphericalGaussianBlur",defines:{SAMPLES:nv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function gp(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function _p(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Rc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var wc=class extends Nt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new wo(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new fn(5,5,5),r=new bt({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Dn});r.uniforms.tEquirect.value=t;let o=new Ge(i,r),a=t.minFilter;return t.minFilter===Zn&&(t.minFilter=Ot),new Il(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}};function lv(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Ul||f===Fl)if(e.has(d)){let m=e.get(d).texture;return a(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let v=new wc(m.height);return v.fromEquirectangularTexture(s,d),e.set(d,v),d.addEventListener("dispose",c),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,m=f===Ul||f===Fl,v=f===is||f===Ns;if(m||v){let p=t.get(d),g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Dr(s)),p=m?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let M=d.image;return m&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new Dr(s)),p=m?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,f){return f===Ul?d.mapping=is:f===Fl&&(d.mapping=Ns),d}function l(d){let f=0,m=6;for(let v=0;v<m;v++)d[v]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function cv(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&gs("WebGLRenderer: "+n+" extension not supported."),i}}}function hv(s,e,t,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,m=u.attributes.position,v=0;if(m===void 0)return;if(f!==null){let M=f.array;v=f.version;for(let S=0,_=M.length;S<_;S+=3){let b=M[S+0],E=M[S+1],A=M[S+2];d.push(b,E,E,A,A,b)}}else{let M=m.array;v=m.version;for(let S=0,_=M.length/3-1;S<_;S+=3){let b=S+0,E=S+1,A=S+2;d.push(b,E,E,A,A,b)}}let p=new(m.count>=65535?Mo:yo)(d,1);p.version=v;let g=r.get(u);g&&e.remove(g),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function uv(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*o),t.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let p=0;p<f;p++)v+=d[p];t.update(v,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function dv(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Ve("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function fv(s,e,t){let n=new WeakMap,i=new gt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],S=0;f===!0&&(S=1),m===!0&&(S=2),v===!0&&(S=3);let _=a.attributes.position.count*S,b=1;_>e.maxTextureSize&&(b=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*b*4*u),A=new _o(E,_,b,u);A.type=bn,A.needsUpdate=!0;let x=S*4;for(let R=0;R<u;R++){let P=p[R],N=g[R],z=M[R],L=_*b*4*R;for(let F=0;F<P.count;F++){let H=F*x;f===!0&&(i.fromBufferAttribute(P,F),E[L+H+0]=i.x,E[L+H+1]=i.y,E[L+H+2]=i.z,E[L+H+3]=0),m===!0&&(i.fromBufferAttribute(N,F),E[L+H+4]=i.x,E[L+H+5]=i.y,E[L+H+6]=i.z,E[L+H+7]=0),v===!0&&(i.fromBufferAttribute(z,F),E[L+H+8]=i.x,E[L+H+9]=i.y,E[L+H+10]=i.z,E[L+H+11]=z.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new se(_,b)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function pv(s,e,t,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var mv={[Jo]:"LINEAR_TONE_MAPPING",[$o]:"REINHARD_TONE_MAPPING",[jo]:"CINEON_TONE_MAPPING",[Ls]:"ACES_FILMIC_TONE_MAPPING",[ea]:"AGX_TONE_MAPPING",[ta]:"NEUTRAL_TONE_MAPPING",[Qo]:"CUSTOM_TONE_MAPPING"};function gv(s,e,t,n,i,r){let o=new Nt(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new at;c.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Qe([0,2,0,0,2,0],2));let h=new br({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ge(c,h),d=new ai(-1,1,1,-1,0,1),f=null,m=null,v=!1,p,g=null,M=[],S=!1;this.setSize=function(_,b){o.setSize(_,b),a!==null&&a.setSize(_,b),l!==null&&l.setSize(_,b);for(let E=0;E<M.length;E++){let A=M[E];A.setSize&&A.setSize(_,b)}},this.setEffects=function(_){M=_,S=M.length>0&&M[0].isRenderPass===!0;let b=o.width,E=o.height;M.length>0&&a===null&&(a=new Nt(b,E,{type:Wt,depthBuffer:!1,stencilBuffer:!1}),l=new Nt(b,E,{type:Wt,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){let x=M[A];x.setSize&&x.setSize(b,E)}},this.begin=function(_,b){if(v||_.toneMapping===Kn&&M.length===0)return!1;if(g=b,b!==null){let E=b.width,A=b.height;(o.width!==E||o.height!==A)&&this.setSize(E,A)}return S===!1&&_.setRenderTarget(o),p=_.toneMapping,_.toneMapping=Kn,!0},this.hasRenderPass=function(){return S},this.end=function(_,b){_.toneMapping=p,v=!0;let E=o,A=a;for(let x=0;x<M.length;x++){let w=M[x];w.enabled!==!1&&(w.render(_,A,E,b),w.needsSwap!==!1&&(E=A,A=A===a?l:a))}if(f!==_.outputColorSpace||m!==_.toneMapping){f=_.outputColorSpace,m=_.toneMapping,h.defines={},je.getTransfer(f)===ct&&(h.defines.SRGB_TRANSFER="");let x=mv[m];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,_.setRenderTarget(g),_.render(u,d),g=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Op=new Gt,gu=new ji(1,1),Bp=new _o,zp=new dl,kp=new wo,xp=[],vp=[],yp=new Float32Array(16),Mp=new Float32Array(9),Sp=new Float32Array(4);function Ur(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=xp[i];if(r===void 0&&(r=new Float32Array(i),xp[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Xt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function qt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Cc(s,e){let t=vp[e];t===void 0&&(t=new Int32Array(e),vp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function _v(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function xv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;s.uniform2fv(this.addr,e),qt(t,e)}}function vv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;s.uniform3fv(this.addr,e),qt(t,e)}}function yv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;s.uniform4fv(this.addr,e),qt(t,e)}}function Mv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Sp.set(n),s.uniformMatrix2fv(this.addr,!1,Sp),qt(t,n)}}function Sv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Mp.set(n),s.uniformMatrix3fv(this.addr,!1,Mp),qt(t,n)}}function bv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;yp.set(n),s.uniformMatrix4fv(this.addr,!1,yp),qt(t,n)}}function Tv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ev(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;s.uniform2iv(this.addr,e),qt(t,e)}}function wv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;s.uniform3iv(this.addr,e),qt(t,e)}}function Av(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;s.uniform4iv(this.addr,e),qt(t,e)}}function Rv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Cv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;s.uniform2uiv(this.addr,e),qt(t,e)}}function Iv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;s.uniform3uiv(this.addr,e),qt(t,e)}}function Pv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;s.uniform4uiv(this.addr,e),qt(t,e)}}function Lv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(gu.compareFunction=t.isReversedDepthBuffer()?bc:Sc,r=gu):r=Op,t.setTexture2D(e||r,i)}function Nv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||zp,i)}function Dv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||kp,i)}function Uv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Bp,i)}function Fv(s){switch(s){case 5126:return _v;case 35664:return xv;case 35665:return vv;case 35666:return yv;case 35674:return Mv;case 35675:return Sv;case 35676:return bv;case 5124:case 35670:return Tv;case 35667:case 35671:return Ev;case 35668:case 35672:return wv;case 35669:case 35673:return Av;case 5125:return Rv;case 36294:return Cv;case 36295:return Iv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Nv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Uv}}function Ov(s,e){s.uniform1fv(this.addr,e)}function Bv(s,e){let t=Ur(e,this.size,2);s.uniform2fv(this.addr,t)}function zv(s,e){let t=Ur(e,this.size,3);s.uniform3fv(this.addr,t)}function kv(s,e){let t=Ur(e,this.size,4);s.uniform4fv(this.addr,t)}function Hv(s,e){let t=Ur(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Vv(s,e){let t=Ur(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Gv(s,e){let t=Ur(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Wv(s,e){s.uniform1iv(this.addr,e)}function Xv(s,e){s.uniform2iv(this.addr,e)}function qv(s,e){s.uniform3iv(this.addr,e)}function Yv(s,e){s.uniform4iv(this.addr,e)}function Kv(s,e){s.uniform1uiv(this.addr,e)}function Zv(s,e){s.uniform2uiv(this.addr,e)}function Jv(s,e){s.uniform3uiv(this.addr,e)}function $v(s,e){s.uniform4uiv(this.addr,e)}function jv(s,e,t){let n=this.cache,i=e.length,r=Cc(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),qt(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=gu:o=Op;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function Qv(s,e,t){let n=this.cache,i=e.length,r=Cc(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||zp,r[o])}function ey(s,e,t){let n=this.cache,i=e.length,r=Cc(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||kp,r[o])}function ty(s,e,t){let n=this.cache,i=e.length,r=Cc(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Bp,r[o])}function ny(s){switch(s){case 5126:return Ov;case 35664:return Bv;case 35665:return zv;case 35666:return kv;case 35674:return Hv;case 35675:return Vv;case 35676:return Gv;case 5124:case 35670:return Wv;case 35667:case 35671:return Xv;case 35668:case 35672:return qv;case 35669:case 35673:return Yv;case 5125:return Kv;case 36294:return Zv;case 36295:return Jv;case 36296:return $v;case 35678:case 36198:case 36298:case 36306:case 35682:return jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return ey;case 36289:case 36303:case 36311:case 36292:return ty}}var _u=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fv(t.type)}},xu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ny(t.type)}},vu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},pu=/(\w+)(\])?(\[|\.)?/g;function bp(s,e){s.seq.push(e),s.map[e.id]=e}function iy(s,e,t){let n=s.name,i=n.length;for(pu.lastIndex=0;;){let r=pu.exec(n),o=pu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){bp(t,c===void 0?new _u(a,s,e):new xu(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new vu(a),bp(t,u)),t=u}}}var Nr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);iy(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Tp(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var sy=37297,ry=0;function oy(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Ep=new Ze;function ay(s){je._getMatrix(Ep,je.workingColorSpace,s);let e=`mat3( ${Ep.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(s)){case mo:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function wp(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+oy(s.getShaderSource(e),a)}else return r}function ly(s,e){let t=ay(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var cy={[Jo]:"Linear",[$o]:"Reinhard",[jo]:"Cineon",[Ls]:"ACESFilmic",[ea]:"AgX",[ta]:"Neutral",[Qo]:"Custom"};function hy(s,e){let t=cy[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ec=new I;function uy(){je.getLuminanceCoefficients(Ec);let s=Ec.x.toFixed(4),e=Ec.y.toFixed(4),t=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function fy(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function py(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function fa(s){return s!==""}function Ap(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var my=/^[ \t]*#include +<([\w\d./]+)>/gm;function yu(s){return s.replace(my,_y)}var gy=new Map;function _y(s,e){let t=tt[e];if(t===void 0){let n=gy.get(e);if(n!==void 0)t=tt[n],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return yu(t)}var xy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cp(s){return s.replace(xy,vy)}function vy(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ip(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var yy={[Is]:"SHADOWMAP_TYPE_PCF",[wr]:"SHADOWMAP_TYPE_VSM"};function My(s){return yy[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Sy={[is]:"ENVMAP_TYPE_CUBE",[Ns]:"ENVMAP_TYPE_CUBE",[na]:"ENVMAP_TYPE_CUBE_UV"};function by(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Sy[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ty={[Ns]:"ENVMAP_MODE_REFRACTION"};function Ey(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Ty[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var wy={[Dl]:"ENVMAP_BLENDING_MULTIPLY",[kf]:"ENVMAP_BLENDING_MIX",[Hf]:"ENVMAP_BLENDING_ADD"};function Ay(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":wy[s.combine]||"ENVMAP_BLENDING_NONE"}function Ry(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Cy(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=My(t),c=by(t),h=Ey(t),u=Ay(t),d=Ry(t),f=dy(t),m=fy(r),v=i.createProgram(),p,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(fa).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(fa).join(`
`),g.length>0&&(g+=`
`)):(p=[Ip(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),g=[Ip(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?tt.tonemapping_pars_fragment:"",t.toneMapping!==Kn?hy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,ly("linearToOutputTexel",t.outputColorSpace),uy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fa).join(`
`)),o=yu(o),o=Ap(o,t),o=Rp(o,t),a=yu(a),a=Ap(a,t),a=Rp(a,t),o=Cp(o),a=Cp(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let S=M+p+o,_=M+g+a,b=Tp(i,i.VERTEX_SHADER,S),E=Tp(i,i.FRAGMENT_SHADER,_);i.attachShader(v,b),i.attachShader(v,E),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(P){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(v)||"",z=i.getShaderInfoLog(b)||"",L=i.getShaderInfoLog(E)||"",F=N.trim(),H=z.trim(),V=L.trim(),Q=!0,G=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,b,E);else{let Z=wp(i,b,"vertex"),ee=wp(i,E,"fragment");Ve("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+Z+`
`+ee)}else F!==""?Le("WebGLProgram: Program Info Log:",F):(H===""||V==="")&&(G=!1);G&&(P.diagnostics={runnable:Q,programLog:F,vertexShader:{log:H,prefix:p},fragmentShader:{log:V,prefix:g}})}i.deleteShader(b),i.deleteShader(E),x=new Nr(i,v),w=py(i,v)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(v,sy)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ry++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=E,this}var Iy=0,Mu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Su(e),t.set(e,n)),n}},Su=class{constructor(e){this.id=Iy++,this.code=e,this.usedTimes=0}};function Py(s){return s===rs||s===aa||s===la}function Ly(s,e,t,n,i,r){let o=new xo,a=new Mu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,w,R,P,N,z){let L=P.fog,F=N.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Q=e.get(x.envMap||H,V),G=Q&&Q.mapping===na?Q.image.height:null,Z=f[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&Le("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let ee=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,de=ee!==void 0?ee.length:0,ce=0;F.morphAttributes.position!==void 0&&(ce=1),F.morphAttributes.normal!==void 0&&(ce=2),F.morphAttributes.color!==void 0&&(ce=3);let ze,Fe,We,K;if(Z){let yt=ui[Z];ze=yt.vertexShader,Fe=yt.fragmentShader}else{ze=x.vertexShader,Fe=x.fragmentShader;let yt=a.getVertexShaderStage(x),dt=a.getFragmentShaderStage(x);a.update(x,yt,dt),We=yt.id,K=dt.id}let $=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),Xe=N.isInstancedMesh===!0,Ee=N.isBatchedMesh===!0,qe=!!x.map,pt=!!x.matcap,ie=!!Q,oe=!!x.aoMap,ae=!!x.lightMap,le=!!x.bumpMap&&x.wireframe===!1,pe=!!x.normalMap,ke=!!x.displacementMap,Be=!!x.emissiveMap,Ye=!!x.metalnessMap,Je=!!x.roughnessMap,U=x.anisotropy>0,ut=x.clearcoat>0,rt=x.dispersion>0,C=x.retroreflectivity>0,y=x.iridescence>0,k=x.sheen>0,q=x.transmission>0,J=U&&!!x.anisotropyMap,he=ut&&!!x.clearcoatMap,fe=ut&&!!x.clearcoatNormalMap,j=ut&&!!x.clearcoatRoughnessMap,ne=y&&!!x.iridescenceMap,me=y&&!!x.iridescenceThicknessMap,De=k&&!!x.sheenColorMap,ve=k&&!!x.sheenRoughnessMap,ge=!!x.specularMap,Ue=!!x.specularColorMap,He=!!x.specularIntensityMap,$e=q&&!!x.transmissionMap,B=q&&!!x.thicknessMap,_e=!!x.gradientMap,te=!!x.alphaMap,xe=x.alphaTest>0,Te=!!x.alphaHash,re=!!x.extensions,Oe=Kn;x.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Oe=s.toneMapping);let Ie={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:ze,fragmentShader:Fe,defines:x.defines,customVertexShaderID:We,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ee,batchingColor:Ee&&N._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&N.instanceColor!==null,instancingMorph:Xe&&N.morphTexture!==null,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:qe,matcap:pt,envMap:ie,envMapMode:ie&&Q.mapping,envMapCubeUVHeight:G,aoMap:oe,lightMap:ae,bumpMap:le,normalMap:pe,displacementMap:ke,emissiveMap:Be,normalMapObjectSpace:pe&&x.normalMapType===Kf,normalMapTangentSpace:pe&&x.normalMapType===ha,packedNormalMap:pe&&x.normalMapType===ha&&Py(x.normalMap.format),metalnessMap:Ye,roughnessMap:Je,anisotropy:U,anisotropyMap:J,clearcoat:ut,clearcoatMap:he,clearcoatNormalMap:fe,clearcoatRoughnessMap:j,dispersion:rt,retroreflection:C,iridescence:y,iridescenceMap:ne,iridescenceThicknessMap:me,sheen:k,sheenColorMap:De,sheenRoughnessMap:ve,specularMap:ge,specularColorMap:Ue,specularIntensityMap:He,transmission:q,transmissionMap:$e,thicknessMap:B,gradientMap:_e,opaque:x.transparent===!1&&x.blending===Pi&&x.alphaToCoverage===!1,alphaMap:te,alphaTest:xe,alphaHash:Te,combine:x.combine,mapUv:qe&&m(x.map.channel),aoMapUv:oe&&m(x.aoMap.channel),lightMapUv:ae&&m(x.lightMap.channel),bumpMapUv:le&&m(x.bumpMap.channel),normalMapUv:pe&&m(x.normalMap.channel),displacementMapUv:ke&&m(x.displacementMap.channel),emissiveMapUv:Be&&m(x.emissiveMap.channel),metalnessMapUv:Ye&&m(x.metalnessMap.channel),roughnessMapUv:Je&&m(x.roughnessMap.channel),anisotropyMapUv:J&&m(x.anisotropyMap.channel),clearcoatMapUv:he&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:fe&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:me&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:De&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:ve&&m(x.sheenRoughnessMap.channel),specularMapUv:ge&&m(x.specularMap.channel),specularColorMapUv:Ue&&m(x.specularColorMap.channel),specularIntensityMapUv:He&&m(x.specularIntensityMap.channel),transmissionMapUv:$e&&m(x.transmissionMap.channel),thicknessMapUv:B&&m(x.thicknessMap.channel),alphaMapUv:te&&m(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(pe||U),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!F.attributes.uv&&(qe||te),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&pe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Me,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:ce,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Oe,decodeVideoTexture:qe&&x.map.isVideoTexture===!0&&je.getTransfer(x.map.colorSpace)===ct,decodeVideoTextureEmissive:Be&&x.emissiveMap.isVideoTexture===!0&&je.getTransfer(x.emissiveMap.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===pn,flipSided:x.side===tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:re&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&x.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function p(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(g(w,x),M(w,x),w.push(s.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function g(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function M(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function S(x){let w=f[x.type],R;if(w){let P=ui[w];R=Ni.clone(P.uniforms)}else R=x.uniforms;return R}function _(x,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new Cy(s,w,x,i),c.push(R),h.set(w,R)),R}function b(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function A(){a.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:S,acquireProgram:_,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:A}}function Ny(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Dy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Pp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Lp(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,v,p,g){let M=s[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:p,group:g},s[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=m,M.materialVariant=o(d),M.groupOrder=v,M.renderOrder=d.renderOrder,M.z=p,M.group=g),e++,M}function l(d,f,m,v,p,g,M){M.reversedDepth===!0&&(p=-p);let S=a(d,f,m,v,p,g);m.transmission>0?n.push(S):m.transparent===!0?i.push(S):t.push(S)}function c(d,f,m,v,p,g){let M=a(d,f,m,v,p,g);m.transmission>0?n.unshift(M):m.transparent===!0?i.unshift(M):t.unshift(M)}function h(d,f){t.length>1&&t.sort(d||Dy),n.length>1&&n.sort(f||Pp),i.length>1&&i.sort(f||Pp)}function u(){for(let d=e,f=s.length;d<f;d++){let m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function Uy(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Lp,s.set(n,[o])):i>=r.length?(o=new Lp,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Fy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new ue};break;case"SpotLight":t={position:new I,direction:new I,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":t={color:new ue,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function Oy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var By=0;function zy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ky(s){let e=new Fy,t=Oy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let i=new I,r=new Ke,o=new Ke;function a(c){let h=0,u=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,m=0,v=0,p=0,g=0,M=0,S=0,_=0,b=0,E=0,A=0,x=0,w=0,R=0;c.sort(zy);for(let N=0,z=c.length;N<z;N++){let L=c[N],F=L.color,H=L.intensity,V=L.distance,Q=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===rs?Q=L.shadow.map.texture:Q=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=F.r*H,u+=F.g*H,d+=F.b*H;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],H);R++}else if(L.isSunLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Z=L.shadow,ee=t.get(L);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[m]=ee,n.sunShadowMap[m]=Q;let de=Z.getViewportCount();for(let ce=0;ce<de;ce++)n.sunShadowMatrix[v+ce]=Z.getMatrix(ce),n.sunShadowCascade[v+ce]=Z._cascadeData[ce];v+=de,m++}n.sun[f]=G,f++}else if(L.isDirectionalLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Z=L.shadow,ee=t.get(L);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,n.directionalShadow[p]=ee,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=L.shadow.matrix,b++}n.directional[p]=G,p++}else if(L.isSpotLight){let G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(F).multiplyScalar(H),G.distance=V,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[M]=G;let Z=L.shadow;if(L.map&&(n.spotLightMap[x]=L.map,x++,Z.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[M]=Z.matrix,L.castShadow){let ee=t.get(L);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,n.spotShadow[M]=ee,n.spotShadowMap[M]=Q,A++}M++}else if(L.isRectAreaLight){let G=e.get(L);G.color.copy(F).multiplyScalar(H),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[S]=G,S++}else if(L.isPointLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){let Z=L.shadow,ee=t.get(L);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,ee.shadowCameraNear=Z.camera.near,ee.shadowCameraFar=Z.camera.far,n.pointShadow[g]=ee,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=L.shadow.matrix,E++}n.point[g]=G,g++}else if(L.isHemisphereLight){let G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(H),G.groundColor.copy(L.groundColor).multiplyScalar(H),n.hemi[_]=G,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.sunLength!==f||P.directionalLength!==p||P.pointLength!==g||P.spotLength!==M||P.rectAreaLength!==S||P.hemiLength!==_||P.numSunShadows!==m||P.numDirectionalShadows!==b||P.numPointShadows!==E||P.numSpotShadows!==A||P.numSpotMaps!==x||P.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=S,n.point.length=g,n.hemi.length=_,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,P.sunLength=f,P.directionalLength=p,P.pointLength=g,P.spotLength=M,P.rectAreaLength=S,P.hemiLength=_,P.numSunShadows=m,P.numDirectionalShadows=b,P.numPointShadows=E,P.numSpotShadows=A,P.numSpotMaps=x,P.numLightProbes=R,n.version=By++)}function l(c,h){let u=0,d=0,f=0,m=0,v=0,p=0,g=h.matrixWorldInverse;for(let M=0,S=c.length;M<S;M++){let _=c[M];if(_.isSunLight){let b=n.sun[u];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(g),u++}else if(_.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),d++}else if(_.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),m++}else if(_.isRectAreaLight){let b=n.rectArea[v];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let b=n.hemi[p];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function Np(s){let e=new ky(s),t=[],n=[],i=[];function r(d){u.camera=d,t.length=0,n.length=0,i.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function l(d){i.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Hy(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Np(s),e.set(i,[a])):r>=o.length?(a=new Np(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Vy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gy=`uniform sampler2D shadow_pass;
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
}`,Wy=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Xy=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Dp=new Ke,da=new I,mu=new I;function qy(s,e,t){let n=new vr,i=new se,r=new se,o=new gt,a=new Sl,l=new bl,c={},h=t.maxTextureSize,u={[li]:tn,[tn]:li,[pn]:pn},d=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Vy,fragmentShader:Gy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new at;m.setAttribute("position",new it(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ge(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Is;let g=this.type;this.render=function(E,A,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Mf&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Is);let w=s.getRenderTarget(),R=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Dn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let z=g!==this.type;z&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(F=>F.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,F=E.length;L<F;L++){let H=E[L],V=H.shadow;if(V===void 0){Le("WebGLShadowMap:",H,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let Q=V.getFrameExtents();i.multiply(Q),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Q.x),i.x=r.x*Q.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Q.y),i.y=r.y*Q.y,V.mapSize.y=r.y));let G=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=G,V.map===null||z===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===wr){if(H.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Nt(i.x,i.y,{format:rs,type:Wt,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),V.map.texture.name=H.name+".shadowMap",V.map.depthTexture=new ji(i.x,i.y,bn),V.map.depthTexture.name=H.name+".shadowMapDepth",V.map.depthTexture.format=ii,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ft,V.map.depthTexture.magFilter=Ft}else H.isPointLight?(V.map=new wc(i.x),V.map.depthTexture=new ml(i.x,Jn)):(V.map=new Nt(i.x,i.y),V.map.depthTexture=new ji(i.x,i.y,Jn)),V.map.depthTexture.name=H.name+".shadowMap",V.map.depthTexture.format=ii,this.type===Is?(V.map.depthTexture.compareFunction=G?bc:Sc,V.map.depthTexture.minFilter=Ot,V.map.depthTexture.magFilter=Ot):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ft,V.map.depthTexture.magFilter=Ft);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==i.x||V.map.height!==i.y)&&V.map.setSize(i.x,i.y);let Z=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();H.isPointLight!==!0&&V.updateMatrices(H,x);for(let ee=0;ee<Z;ee++){let de=V.getCamera(ee);if(H.isPointLight){let ce=V.camera,ze=V.matrix,Fe=H.distance||ce.far;Fe!==ce.far&&(ce.far=Fe,ce.updateProjectionMatrix()),da.setFromMatrixPosition(H.matrixWorld),ce.position.copy(da),mu.copy(ce.position),mu.add(Wy[ee]),ce.up.copy(Xy[ee]),ce.lookAt(mu),ce.updateMatrixWorld(),ze.makeTranslation(-da.x,-da.y,-da.z),Dp.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Dp,ce.coordinateSystem,ce.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,ee),s.clear();else{ee===0&&(s.setRenderTarget(V.map),s.clear());let ce=V.getViewport(ee);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),N.viewport(o)}n=V.getFrustum(ee),_(A,x,de,H,this.type)}V.isPointLightShadow!==!0&&this.type===wr&&M(V,x),V.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(w,R,P)};function M(E,A){let x=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Nt(i.x,i.y,{format:rs,type:Wt}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(A,null,x,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(A,null,x,f,v,null)}function S(E,A,x,w){let R=null,P=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)R=P;else if(R=x.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=R.uuid,z=A.uuid,L=c[N];L===void 0&&(L={},c[N]=L);let F=L[z];F===void 0&&(F=R.clone(),L[z]=F,A.addEventListener("dispose",b)),R=F}if(R.visible=A.visible,R.wireframe=A.wireframe,w===wr?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:u[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=s.properties.get(R);N.light=x}return R}function _(E,A,x,w,R){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===wr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let z=e.update(E),L=E.material;if(Array.isArray(L)){let F=z.groups;for(let H=0,V=F.length;H<V;H++){let Q=F[H],G=L[Q.materialIndex];if(G&&G.visible){let Z=S(E,G,w,R);E.onBeforeShadow(s,E,A,x,z,Z,Q),s.renderBufferDirect(x,null,z,Z,E,Q),E.onAfterShadow(s,E,A,x,z,Z,Q)}}}else if(L.visible){let F=S(E,L,w,R);E.onBeforeShadow(s,E,A,x,z,F,null),s.renderBufferDirect(x,null,z,F,E,null),E.onAfterShadow(s,E,A,x,z,F,null)}}let N=E.children;for(let z=0,L=N.length;z<L;z++)_(N[z],A,x,w,R)}function b(E){E.target.removeEventListener("dispose",b);for(let x in c){let w=c[x],R=E.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function Yy(s,e){function t(){let B=!1,_e=new gt,te=null,xe=new gt(0,0,0,0);return{setMask:function(Te){te!==Te&&!B&&(s.colorMask(Te,Te,Te,Te),te=Te)},setLocked:function(Te){B=Te},setClear:function(Te,re,Oe,Ie,yt){yt===!0&&(Te*=Ie,re*=Ie,Oe*=Ie),_e.set(Te,re,Oe,Ie),xe.equals(_e)===!1&&(s.clearColor(Te,re,Oe,Ie),xe.copy(_e))},reset:function(){B=!1,te=null,xe.set(-1,0,0,0)}}}function n(){let B=!1,_e=!1,te=null,xe=null,Te=null;return{setReversed:function(re){if(_e!==re){let Oe=e.get("EXT_clip_control");re?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),_e=re;let Ie=Te;Te=null,this.setClear(Ie)}},getReversed:function(){return _e},setTest:function(re){re?$(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(re){te!==re&&!B&&(s.depthMask(re),te=re)},setFunc:function(re){if(_e&&(re=rp[re]),xe!==re){switch(re){case il:s.depthFunc(s.NEVER);break;case sl:s.depthFunc(s.ALWAYS);break;case rl:s.depthFunc(s.LESS);break;case cr:s.depthFunc(s.LEQUAL);break;case ol:s.depthFunc(s.EQUAL);break;case al:s.depthFunc(s.GEQUAL);break;case ll:s.depthFunc(s.GREATER);break;case cl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xe=re}},setLocked:function(re){B=re},setClear:function(re){Te!==re&&(Te=re,_e&&(re=1-re),s.clearDepth(re))},reset:function(){B=!1,te=null,xe=null,Te=null,_e=!1}}}function i(){let B=!1,_e=null,te=null,xe=null,Te=null,re=null,Oe=null,Ie=null,yt=null;return{setTest:function(dt){B||(dt?$(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(dt){_e!==dt&&!B&&(s.stencilMask(dt),_e=dt)},setFunc:function(dt,On,jn){(te!==dt||xe!==On||Te!==jn)&&(s.stencilFunc(dt,On,jn),te=dt,xe=On,Te=jn)},setOp:function(dt,On,jn){(re!==dt||Oe!==On||Ie!==jn)&&(s.stencilOp(dt,On,jn),re=dt,Oe=On,Ie=jn)},setLocked:function(dt){B=dt},setClear:function(dt){yt!==dt&&(s.clearStencil(dt),yt=dt)},reset:function(){B=!1,_e=null,te=null,xe=null,Te=null,re=null,Oe=null,Ie=null,yt=null}}}let r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],v=null,p=!1,g=null,M=null,S=null,_=null,b=null,E=null,A=null,x=new ue(0,0,0),w=0,R=!1,P=null,N=null,z=null,L=null,F=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Q=0,G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=Q>=2);let Z=null,ee={},de=s.getParameter(s.SCISSOR_BOX),ce=s.getParameter(s.VIEWPORT),ze=new gt().fromArray(de),Fe=new gt().fromArray(ce);function We(B,_e,te,xe){let Te=new Uint8Array(4),re=s.createTexture();s.bindTexture(B,re),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Oe=0;Oe<te;Oe++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(_e,0,s.RGBA,1,1,xe,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(_e+Oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return re}let K={};K[s.TEXTURE_2D]=We(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=We(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=We(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=We(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(s.DEPTH_TEST),o.setFunc(cr),le(!1),pe(Vh),$(s.CULL_FACE),oe(Dn);function $(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function Me(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function Xe(B,_e){return d[B]!==_e?(s.bindFramebuffer(B,_e),d[B]=_e,B===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=_e),B===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ee(B,_e){let te=m,xe=!1;if(B){te=f.get(_e),te===void 0&&(te=[],f.set(_e,te));let Te=B.textures;if(te.length!==Te.length||te[0]!==s.COLOR_ATTACHMENT0){for(let re=0,Oe=Te.length;re<Oe;re++)te[re]=s.COLOR_ATTACHMENT0+re;te.length=Te.length,xe=!0}}else te[0]!==s.BACK&&(te[0]=s.BACK,xe=!0);xe&&s.drawBuffers(te)}function qe(B){return v!==B?(s.useProgram(B),v=B,!0):!1}let pt={[Ps]:s.FUNC_ADD,[bf]:s.FUNC_SUBTRACT,[Tf]:s.FUNC_REVERSE_SUBTRACT};pt[Ef]=s.MIN,pt[wf]=s.MAX;let ie={[Af]:s.ZERO,[Rf]:s.ONE,[Cf]:s.SRC_COLOR,[Xh]:s.SRC_ALPHA,[Uf]:s.SRC_ALPHA_SATURATE,[Nf]:s.DST_COLOR,[Pf]:s.DST_ALPHA,[If]:s.ONE_MINUS_SRC_COLOR,[qh]:s.ONE_MINUS_SRC_ALPHA,[Df]:s.ONE_MINUS_DST_COLOR,[Lf]:s.ONE_MINUS_DST_ALPHA,[Ff]:s.CONSTANT_COLOR,[Of]:s.ONE_MINUS_CONSTANT_COLOR,[Bf]:s.CONSTANT_ALPHA,[zf]:s.ONE_MINUS_CONSTANT_ALPHA};function oe(B,_e,te,xe,Te,re,Oe,Ie,yt,dt){if(B===Dn){p===!0&&(Me(s.BLEND),p=!1);return}if(p===!1&&($(s.BLEND),p=!0),B!==Sf){if(B!==g||dt!==R){if((M!==Ps||b!==Ps)&&(s.blendEquation(s.FUNC_ADD),M=Ps,b=Ps),dt)switch(B){case Pi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ci:s.blendFunc(s.ONE,s.ONE);break;case Gh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ve("WebGLState: Invalid blending: ",B);break}else switch(B){case Pi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ci:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Gh:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wh:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",B);break}S=null,_=null,E=null,A=null,x.set(0,0,0),w=0,g=B,R=dt}return}Te=Te||_e,re=re||te,Oe=Oe||xe,(_e!==M||Te!==b)&&(s.blendEquationSeparate(pt[_e],pt[Te]),M=_e,b=Te),(te!==S||xe!==_||re!==E||Oe!==A)&&(s.blendFuncSeparate(ie[te],ie[xe],ie[re],ie[Oe]),S=te,_=xe,E=re,A=Oe),(Ie.equals(x)===!1||yt!==w)&&(s.blendColor(Ie.r,Ie.g,Ie.b,yt),x.copy(Ie),w=yt),g=B,R=!1}function ae(B,_e){B.side===pn?Me(s.CULL_FACE):$(s.CULL_FACE);let te=B.side===tn;_e&&(te=!te),le(te),B.blending===Pi&&B.transparent===!1?oe(Dn):oe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let xe=B.stencilWrite;a.setTest(xe),xe&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Be(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?$(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function le(B){P!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),P=B)}function pe(B){B!==vf?($(s.CULL_FACE),B!==N&&(B===Vh?s.cullFace(s.BACK):B===yf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),N=B}function ke(B){B!==z&&(V&&s.lineWidth(B),z=B)}function Be(B,_e,te){B?($(s.POLYGON_OFFSET_FILL),(L!==_e||F!==te)&&(L=_e,F=te,o.getReversed()&&(_e=-_e),s.polygonOffset(_e,te))):Me(s.POLYGON_OFFSET_FILL)}function Ye(B){B?$(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function Je(B){B===void 0&&(B=s.TEXTURE0+H-1),Z!==B&&(s.activeTexture(B),Z=B)}function U(B,_e,te){te===void 0&&(Z===null?te=s.TEXTURE0+H-1:te=Z);let xe=ee[te];xe===void 0&&(xe={type:void 0,texture:void 0},ee[te]=xe),(xe.type!==B||xe.texture!==_e)&&(Z!==te&&(s.activeTexture(te),Z=te),s.bindTexture(B,_e||K[B]),xe.type=B,xe.texture=_e)}function ut(){let B=ee[Z];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function rt(){try{s.compressedTexImage2D(...arguments)}catch(B){Ve("WebGLState:",B)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(B){Ve("WebGLState:",B)}}function y(){try{s.texSubImage2D(...arguments)}catch(B){Ve("WebGLState:",B)}}function k(){try{s.texSubImage3D(...arguments)}catch(B){Ve("WebGLState:",B)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(B){Ve("WebGLState:",B)}}function J(){try{s.compressedTexSubImage3D(...arguments)}catch(B){Ve("WebGLState:",B)}}function he(){try{s.texStorage2D(...arguments)}catch(B){Ve("WebGLState:",B)}}function fe(){try{s.texStorage3D(...arguments)}catch(B){Ve("WebGLState:",B)}}function j(){try{s.texImage2D(...arguments)}catch(B){Ve("WebGLState:",B)}}function ne(){try{s.texImage3D(...arguments)}catch(B){Ve("WebGLState:",B)}}function me(B){return u[B]!==void 0?u[B]:s.getParameter(B)}function De(B,_e){u[B]!==_e&&(s.pixelStorei(B,_e),u[B]=_e)}function ve(B){ze.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),ze.copy(B))}function ge(B){Fe.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),Fe.copy(B))}function Ue(B,_e){let te=c.get(_e);te===void 0&&(te=new WeakMap,c.set(_e,te));let xe=te.get(B);xe===void 0&&(xe=s.getUniformBlockIndex(_e,B.name),te.set(B,xe))}function He(B,_e){let xe=c.get(_e).get(B);l.get(_e)!==xe&&(s.uniformBlockBinding(_e,xe,B.__bindingPointIndex),l.set(_e,xe))}function $e(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},Z=null,ee={},d={},f=new WeakMap,m=[],v=null,p=!1,g=null,M=null,S=null,_=null,b=null,E=null,A=null,x=new ue(0,0,0),w=0,R=!1,P=null,N=null,z=null,L=null,F=null,ze.set(0,0,s.canvas.width,s.canvas.height),Fe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:Me,bindFramebuffer:Xe,drawBuffers:Ee,useProgram:qe,setBlending:oe,setMaterial:ae,setFlipSided:le,setCullFace:pe,setLineWidth:ke,setPolygonOffset:Be,setScissorTest:Ye,activeTexture:Je,bindTexture:U,unbindTexture:ut,compressedTexImage2D:rt,compressedTexImage3D:C,texImage2D:j,texImage3D:ne,pixelStorei:De,getParameter:me,updateUBOMapping:Ue,uniformBlockBinding:He,texStorage2D:he,texStorage3D:fe,texSubImage2D:y,texSubImage3D:k,compressedTexSubImage2D:q,compressedTexSubImage3D:J,scissor:ve,viewport:ge,reset:$e}}function Ky(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,h=new WeakMap,u=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,y){return m?new OffscreenCanvas(C,y):dr("canvas")}function p(C,y,k){let q=1,J=rt(C);if((J.width>k||J.height>k)&&(q=k/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let he=Math.floor(q*J.width),fe=Math.floor(q*J.height);d===void 0&&(d=v(he,fe));let j=y?v(he,fe):d;return j.width=he,j.height=fe,j.getContext("2d").drawImage(C,0,0,he,fe),Le("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+he+"x"+fe+")."),j}else return"data"in C&&Le("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function g(C){return C.generateMipmaps}function M(C){s.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(C,y,k,q,J,he=!1){if(C!==null){if(s[C]!==void 0)return s[C];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let fe;q&&(fe=e.get("EXT_texture_norm16"),fe||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=y;if(y===s.RED&&(k===s.FLOAT&&(j=s.R32F),k===s.HALF_FLOAT&&(j=s.R16F),k===s.UNSIGNED_BYTE&&(j=s.R8),k===s.UNSIGNED_SHORT&&fe&&(j=fe.R16_EXT),k===s.SHORT&&fe&&(j=fe.R16_SNORM_EXT)),y===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.R8UI),k===s.UNSIGNED_SHORT&&(j=s.R16UI),k===s.UNSIGNED_INT&&(j=s.R32UI),k===s.BYTE&&(j=s.R8I),k===s.SHORT&&(j=s.R16I),k===s.INT&&(j=s.R32I)),y===s.RG&&(k===s.FLOAT&&(j=s.RG32F),k===s.HALF_FLOAT&&(j=s.RG16F),k===s.UNSIGNED_BYTE&&(j=s.RG8),k===s.UNSIGNED_SHORT&&fe&&(j=fe.RG16_EXT),k===s.SHORT&&fe&&(j=fe.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RG8UI),k===s.UNSIGNED_SHORT&&(j=s.RG16UI),k===s.UNSIGNED_INT&&(j=s.RG32UI),k===s.BYTE&&(j=s.RG8I),k===s.SHORT&&(j=s.RG16I),k===s.INT&&(j=s.RG32I)),y===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGB8UI),k===s.UNSIGNED_SHORT&&(j=s.RGB16UI),k===s.UNSIGNED_INT&&(j=s.RGB32UI),k===s.BYTE&&(j=s.RGB8I),k===s.SHORT&&(j=s.RGB16I),k===s.INT&&(j=s.RGB32I)),y===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),k===s.UNSIGNED_INT&&(j=s.RGBA32UI),k===s.BYTE&&(j=s.RGBA8I),k===s.SHORT&&(j=s.RGBA16I),k===s.INT&&(j=s.RGBA32I)),y===s.RGB&&(k===s.UNSIGNED_SHORT&&fe&&(j=fe.RGB16_EXT),k===s.SHORT&&fe&&(j=fe.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),y===s.RGBA){let ne=he?mo:je.getTransfer(J);k===s.FLOAT&&(j=s.RGBA32F),k===s.HALF_FLOAT&&(j=s.RGBA16F),k===s.UNSIGNED_BYTE&&(j=ne===ct?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&fe&&(j=fe.RGBA16_EXT),k===s.SHORT&&fe&&(j=fe.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function b(C,y){let k;return C?y===null||y===Jn||y===Cr?k=s.DEPTH24_STENCIL8:y===bn?k=s.DEPTH32F_STENCIL8:y===Rr&&(k=s.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Jn||y===Cr?k=s.DEPTH_COMPONENT24:y===bn?k=s.DEPTH_COMPONENT32F:y===Rr&&(k=s.DEPTH_COMPONENT16),k}function E(C,y){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ft&&C.minFilter!==Ot?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function A(C){let y=C.target;y.removeEventListener("dispose",A),w(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&u.delete(y)}function x(C){let y=C.target;y.removeEventListener("dispose",x),P(y)}function w(C){let y=n.get(C);if(y.__webglInit===void 0)return;let k=C.source,q=f.get(k);if(q){let J=q[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(C),Object.keys(q).length===0&&f.delete(k)}n.remove(C)}function R(C){let y=n.get(C);s.deleteTexture(y.__webglTexture);let k=C.source,q=f.get(k);delete q[y.__cacheKey],o.memory.textures--}function P(C){let y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let J=0;J<y.__webglFramebuffer[q].length;J++)s.deleteFramebuffer(y.__webglFramebuffer[q][J]);else s.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)s.deleteFramebuffer(y.__webglFramebuffer[q]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let k=C.textures;for(let q=0,J=k.length;q<J;q++){let he=n.get(k[q]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),o.memory.textures--),n.remove(k[q])}n.remove(C)}let N=0;function z(){N=0}function L(){return N}function F(C){N=C}function H(){let C=N;return C>=i.maxTextures&&Le("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),N+=1,C}function V(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function Q(C,y){let k=n.get(C);if(C.isVideoTexture&&U(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){let q=C.image;if(q===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(k,C,y);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+y)}function G(C,y){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Me(k,C,y);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+y)}function Z(C,y){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Me(k,C,y);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+y)}function ee(C,y){let k=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){Xe(k,C,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+y)}let de={[Pn]:s.REPEAT,[Cn]:s.CLAMP_TO_EDGE,[hr]:s.MIRRORED_REPEAT},ce={[Ft]:s.NEAREST,[Ol]:s.NEAREST_MIPMAP_NEAREST,[Ds]:s.NEAREST_MIPMAP_LINEAR,[Ot]:s.LINEAR,[Ar]:s.LINEAR_MIPMAP_NEAREST,[Zn]:s.LINEAR_MIPMAP_LINEAR},ze={[Jf]:s.NEVER,[tp]:s.ALWAYS,[$f]:s.LESS,[Sc]:s.LEQUAL,[jf]:s.EQUAL,[bc]:s.GEQUAL,[Qf]:s.GREATER,[ep]:s.NOTEQUAL};function Fe(C,y){if(y.type===bn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ot||y.magFilter===Ar||y.magFilter===Ds||y.magFilter===Zn||y.minFilter===Ot||y.minFilter===Ar||y.minFilter===Ds||y.minFilter===Zn)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,de[y.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,de[y.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,de[y.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ce[y.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ce[y.minFilter]),y.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ze[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ft||y.minFilter!==Ds&&y.minFilter!==Zn||y.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function We(C,y){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",A));let q=y.source,J=f.get(q);J===void 0&&(J={},f.set(q,J));let he=V(y);if(he!==C.__cacheKey){J[he]===void 0&&(J[he]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),J[he].usedTimes++;let fe=J[C.__cacheKey];fe!==void 0&&(J[C.__cacheKey].usedTimes--,fe.usedTimes===0&&R(y)),C.__cacheKey=he,C.__webglTexture=J[he].texture}return k}function K(C,y,k){return Math.floor(Math.floor(C/k)/y)}function $(C,y,k,q){let he=C.updateRanges;if(he.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,k,q,y.data);else{he.sort((De,ve)=>De.start-ve.start);let fe=0;for(let De=1;De<he.length;De++){let ve=he[fe],ge=he[De],Ue=ve.start+ve.count,He=K(ge.start,y.width,4),$e=K(ve.start,y.width,4);ge.start<=Ue+1&&He===$e&&K(ge.start+ge.count-1,y.width,4)===He?ve.count=Math.max(ve.count,ge.start+ge.count-ve.start):(++fe,he[fe]=ge)}he.length=fe+1;let j=t.getParameter(s.UNPACK_ROW_LENGTH),ne=t.getParameter(s.UNPACK_SKIP_PIXELS),me=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let De=0,ve=he.length;De<ve;De++){let ge=he[De],Ue=Math.floor(ge.start/4),He=Math.ceil(ge.count/4),$e=Ue%y.width,B=Math.floor(Ue/y.width),_e=He,te=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(s.UNPACK_SKIP_ROWS,B),t.texSubImage2D(s.TEXTURE_2D,0,$e,B,_e,te,k,q,y.data)}C.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,j),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(s.UNPACK_SKIP_ROWS,me)}}function Me(C,y,k){let q=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=s.TEXTURE_3D);let J=We(C,y),he=y.source;t.bindTexture(q,C.__webglTexture,s.TEXTURE0+k);let fe=n.get(he);if(he.version!==fe.__version||J===!0){if(t.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let te=je.getPrimaries(je.workingColorSpace),xe=y.colorSpace===Li?null:je.getPrimaries(y.colorSpace),Te=y.colorSpace===Li||te===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let ne=p(y.image,!1,i.maxTextureSize);ne=ut(y,ne);let me=r.convert(y.format,y.colorSpace),De=r.convert(y.type),ve=_(y.internalFormat,me,De,y.normalized,y.colorSpace,y.isVideoTexture);Fe(q,y);let ge,Ue=y.mipmaps,He=y.isVideoTexture!==!0,$e=fe.__version===void 0||J===!0,B=he.dataReady,_e=E(y,ne);if(y.isDepthTexture)ve=b(y.format===ss,y.type),$e&&(He?t.texStorage2D(s.TEXTURE_2D,1,ve,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,ve,ne.width,ne.height,0,me,De,null));else if(y.isDataTexture)if(Ue.length>0){He&&$e&&t.texStorage2D(s.TEXTURE_2D,_e,ve,Ue[0].width,Ue[0].height);for(let te=0,xe=Ue.length;te<xe;te++)ge=Ue[te],He?B&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ge.width,ge.height,me,De,ge.data):t.texImage2D(s.TEXTURE_2D,te,ve,ge.width,ge.height,0,me,De,ge.data);y.generateMipmaps=!1}else He?($e&&t.texStorage2D(s.TEXTURE_2D,_e,ve,ne.width,ne.height),B&&$(y,ne,me,De)):t.texImage2D(s.TEXTURE_2D,0,ve,ne.width,ne.height,0,me,De,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){He&&$e&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,ve,Ue[0].width,Ue[0].height,ne.depth);for(let te=0,xe=Ue.length;te<xe;te++)if(ge=Ue[te],y.format!==Tn)if(me!==null)if(He){if(B)if(y.layerUpdates.size>0){let Te=cu(ge.width,ge.height,y.format,y.type);for(let re of y.layerUpdates){let Oe=ge.data.subarray(re*Te/ge.data.BYTES_PER_ELEMENT,(re+1)*Te/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,re,ge.width,ge.height,1,me,Oe)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,ne.depth,me,ge.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,ve,ge.width,ge.height,ne.depth,0,ge.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?B&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,ne.depth,me,De,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,ve,ge.width,ge.height,ne.depth,0,me,De,ge.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{He&&$e&&t.texStorage2D(s.TEXTURE_2D,_e,ve,Ue[0].width,Ue[0].height);for(let te=0,xe=Ue.length;te<xe;te++)ge=Ue[te],y.format!==Tn?me!==null?He?B&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,te,ve,ge.width,ge.height,0,ge.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?B&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ge.width,ge.height,me,De,ge.data):t.texImage2D(s.TEXTURE_2D,te,ve,ge.width,ge.height,0,me,De,ge.data)}else if(y.isDataArrayTexture)if(He){if($e&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,ve,ne.width,ne.height,ne.depth),B)if(y.layerUpdates.size>0){let te=cu(ne.width,ne.height,y.format,y.type);for(let xe of y.layerUpdates){let Te=ne.data.subarray(xe*te/ne.data.BYTES_PER_ELEMENT,(xe+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xe,ne.width,ne.height,1,me,De,Te)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,me,De,ne.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ve,ne.width,ne.height,ne.depth,0,me,De,ne.data);else if(y.isData3DTexture)He?($e&&t.texStorage3D(s.TEXTURE_3D,_e,ve,ne.width,ne.height,ne.depth),B&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,me,De,ne.data)):t.texImage3D(s.TEXTURE_3D,0,ve,ne.width,ne.height,ne.depth,0,me,De,ne.data);else if(y.isFramebufferTexture){if($e)if(He)t.texStorage2D(s.TEXTURE_2D,_e,ve,ne.width,ne.height);else{let te=ne.width,xe=ne.height;for(let Te=0;Te<_e;Te++)t.texImage2D(s.TEXTURE_2D,Te,ve,te,xe,0,me,De,null),te>>=1,xe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){let te=s.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),u.add(y),te.onpaint=xe=>{let Te=xe.changedElements;for(let re of u)Te.includes(re.image)&&(re.needsUpdate=!0)},te.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ne);else{let Te=s.RGBA,re=s.RGBA,Oe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Te,re,Oe,ne)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(He&&$e){let te=rt(Ue[0]);t.texStorage2D(s.TEXTURE_2D,_e,ve,te.width,te.height)}for(let te=0,xe=Ue.length;te<xe;te++)ge=Ue[te],He?B&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,me,De,ge):t.texImage2D(s.TEXTURE_2D,te,ve,me,De,ge);y.generateMipmaps=!1}else if(He){if($e){let te=rt(ne);t.texStorage2D(s.TEXTURE_2D,_e,ve,te.width,te.height)}B&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me,De,ne)}else t.texImage2D(s.TEXTURE_2D,0,ve,me,De,ne);g(y)&&M(q),fe.__version=he.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Xe(C,y,k){if(y.image.length!==6)return;let q=We(C,y),J=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+k);let he=n.get(J);if(J.version!==he.__version||q===!0){t.activeTexture(s.TEXTURE0+k);let fe=je.getPrimaries(je.workingColorSpace),j=y.colorSpace===Li?null:je.getPrimaries(y.colorSpace),ne=y.colorSpace===Li||fe===j?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let me=y.isCompressedTexture||y.image[0].isCompressedTexture,De=y.image[0]&&y.image[0].isDataTexture,ve=[];for(let re=0;re<6;re++)!me&&!De?ve[re]=p(y.image[re],!0,i.maxCubemapSize):ve[re]=De?y.image[re].image:y.image[re],ve[re]=ut(y,ve[re]);let ge=ve[0],Ue=r.convert(y.format,y.colorSpace),He=r.convert(y.type),$e=_(y.internalFormat,Ue,He,y.normalized,y.colorSpace),B=y.isVideoTexture!==!0,_e=he.__version===void 0||q===!0,te=J.dataReady,xe=E(y,ge);Fe(s.TEXTURE_CUBE_MAP,y);let Te;if(me){B&&_e&&t.texStorage2D(s.TEXTURE_CUBE_MAP,xe,$e,ge.width,ge.height);for(let re=0;re<6;re++){Te=ve[re].mipmaps;for(let Oe=0;Oe<Te.length;Oe++){let Ie=Te[Oe];y.format!==Tn?Ue!==null?B?te&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe,0,0,Ie.width,Ie.height,Ue,Ie.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe,$e,Ie.width,Ie.height,0,Ie.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe,0,0,Ie.width,Ie.height,Ue,He,Ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe,$e,Ie.width,Ie.height,0,Ue,He,Ie.data)}}}else{if(Te=y.mipmaps,B&&_e){Te.length>0&&xe++;let re=rt(ve[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,xe,$e,re.width,re.height)}for(let re=0;re<6;re++)if(De){B?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ve[re].width,ve[re].height,Ue,He,ve[re].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,$e,ve[re].width,ve[re].height,0,Ue,He,ve[re].data);for(let Oe=0;Oe<Te.length;Oe++){let yt=Te[Oe].image[re].image;B?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe+1,0,0,yt.width,yt.height,Ue,He,yt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe+1,$e,yt.width,yt.height,0,Ue,He,yt.data)}}else{B?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ue,He,ve[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,$e,Ue,He,ve[re]);for(let Oe=0;Oe<Te.length;Oe++){let Ie=Te[Oe];B?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe+1,0,0,Ue,He,Ie.image[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Oe+1,$e,Ue,He,Ie.image[re])}}}g(y)&&M(s.TEXTURE_CUBE_MAP),he.__version=J.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Ee(C,y,k,q,J,he){let fe=r.convert(k.format,k.colorSpace),j=r.convert(k.type),ne=_(k.internalFormat,fe,j,k.normalized,k.colorSpace),me=n.get(y),De=n.get(k);if(De.__renderTarget=y,!me.__hasExternalTextures){let ve=Math.max(1,y.width>>he),ge=Math.max(1,y.height>>he);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,he,ne,ve,ge,y.depth,0,fe,j,null):t.texImage2D(J,he,ne,ve,ge,0,fe,j,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),Je(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,J,De.__webglTexture,0,Ye(y)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,J,De.__webglTexture,he),t.bindFramebuffer(s.FRAMEBUFFER,null)}function qe(C,y,k){if(s.bindRenderbuffer(s.RENDERBUFFER,C),y.depthBuffer){let q=y.depthTexture,J=q&&q.isDepthTexture?q.type:null,he=b(y.stencilBuffer,J),fe=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Je(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye(y),he,y.width,y.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye(y),he,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,he,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,C)}else{let q=y.textures;for(let J=0;J<q.length;J++){let he=q[J],fe=r.convert(he.format,he.colorSpace),j=r.convert(he.type),ne=_(he.internalFormat,fe,j,he.normalized,he.colorSpace);Je(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye(y),ne,y.width,y.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye(y),ne,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ne,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pt(C,y,k){let q=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(y.depthTexture);if(J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q){if(J.__webglInit===void 0&&(J.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,y.depthTexture);let me=r.convert(y.depthTexture.format),De=r.convert(y.depthTexture.type),ve;y.depthTexture.format===ii?ve=s.DEPTH_COMPONENT24:y.depthTexture.format===ss&&(ve=s.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ve,y.width,y.height,0,me,De,null)}}else Q(y.depthTexture,0);let he=J.__webglTexture,fe=Ye(y),j=q?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,ne=y.depthTexture.format===ss?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===ii)Je(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,j,he,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,ne,j,he,0);else if(y.depthTexture.format===ss)Je(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,j,he,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,ne,j,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(C){let y=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let q=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){let J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=q}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(k)for(let q=0;q<6;q++)pt(y.__webglFramebuffer[q],C,q);else{let q=C.texture.mipmaps;q&&q.length>0?pt(y.__webglFramebuffer[0],C,0):pt(y.__webglFramebuffer,C,0)}else if(k){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=s.createRenderbuffer(),qe(y.__webglDepthbuffer[q],C,!1);else{let J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=y.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,he)}}else{let q=C.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),qe(y.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,he)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(C,y,k){let q=n.get(C);y!==void 0&&Ee(q.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&ie(C)}function ae(C){let y=C.texture,k=n.get(C),q=n.get(y);C.addEventListener("dispose",x);let J=C.textures,he=C.isWebGLCubeRenderTarget===!0,fe=J.length>1;if(fe||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=y.version,o.memory.textures++),he){k.__webglFramebuffer=[];for(let j=0;j<6;j++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[j]=[];for(let ne=0;ne<y.mipmaps.length;ne++)k.__webglFramebuffer[j][ne]=s.createFramebuffer()}else k.__webglFramebuffer[j]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let j=0;j<y.mipmaps.length;j++)k.__webglFramebuffer[j]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(fe)for(let j=0,ne=J.length;j<ne;j++){let me=n.get(J[j]);me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&Je(C)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let j=0;j<J.length;j++){let ne=J[j];k.__webglColorRenderbuffer[j]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[j]);let me=r.convert(ne.format,ne.colorSpace),De=r.convert(ne.type),ve=_(ne.internalFormat,me,De,ne.normalized,ne.colorSpace,C.isXRRenderTarget===!0),ge=Ye(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,ve,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.RENDERBUFFER,k.__webglColorRenderbuffer[j])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),qe(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,y);for(let j=0;j<6;j++)if(y.mipmaps&&y.mipmaps.length>0)for(let ne=0;ne<y.mipmaps.length;ne++)Ee(k.__webglFramebuffer[j][ne],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne);else Ee(k.__webglFramebuffer[j],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);g(y)&&M(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let j=0,ne=J.length;j<ne;j++){let me=J[j],De=n.get(me),ve=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ve=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,De.__webglTexture),Fe(ve,me),Ee(k.__webglFramebuffer,C,me,s.COLOR_ATTACHMENT0+j,ve,0),g(me)&&M(ve)}t.unbindTexture()}else{let j=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(j,q.__webglTexture),Fe(j,y),y.mipmaps&&y.mipmaps.length>0)for(let ne=0;ne<y.mipmaps.length;ne++)Ee(k.__webglFramebuffer[ne],C,y,s.COLOR_ATTACHMENT0,j,ne);else Ee(k.__webglFramebuffer,C,y,s.COLOR_ATTACHMENT0,j,0);g(y)&&M(j),t.unbindTexture()}C.depthBuffer&&ie(C)}function le(C){let y=C.textures;for(let k=0,q=y.length;k<q;k++){let J=y[k];if(g(J)){let he=S(C),fe=n.get(J).__webglTexture;t.bindTexture(he,fe),M(he),t.unbindTexture()}}}let pe=[],ke=[];function Be(C){if(C.samples>0){if(Je(C)===!1){let y=C.textures,k=C.width,q=C.height,J=s.COLOR_BUFFER_BIT,he=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=n.get(C),j=y.length>1;if(j)for(let me=0;me<y.length;me++)t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let ne=C.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let me=0;me<y.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),j){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);let De=n.get(y[me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,De,0)}s.blitFramebuffer(0,0,k,q,0,0,k,q,J,s.NEAREST),l===!0&&(pe.length=0,ke.length=0,pe.push(s.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(pe.push(he),ke.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ke)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),j)for(let me=0;me<y.length;me++){t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);let De=n.get(y[me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,De,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Ye(C){return Math.min(i.maxSamples,C.samples)}function Je(C){let y=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function U(C){let y=o.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function ut(C,y){let k=C.colorSpace,q=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==hn&&k!==Li&&(je.getTransfer(k)===ct?(q!==Tn||J!==vn)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",k)),y}function rt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.getTextureUnits=L,this.setTextureUnits=F,this.setTexture2D=Q,this.setTexture2DArray=G,this.setTexture3D=Z,this.setTextureCube=ee,this.rebindTextures=oe,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Zy(s,e){function t(n,i=Li){let r,o=je.getTransfer(i);if(n===vn)return s.UNSIGNED_BYTE;if(n===zl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===kl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Jh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===$h)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kh)return s.BYTE;if(n===Zh)return s.SHORT;if(n===Rr)return s.UNSIGNED_SHORT;if(n===Bl)return s.INT;if(n===Jn)return s.UNSIGNED_INT;if(n===bn)return s.FLOAT;if(n===Wt)return s.HALF_FLOAT;if(n===jh)return s.ALPHA;if(n===Qh)return s.RGB;if(n===Tn)return s.RGBA;if(n===ii)return s.DEPTH_COMPONENT;if(n===ss)return s.DEPTH_STENCIL;if(n===Hl)return s.RED;if(n===Vl)return s.RED_INTEGER;if(n===rs)return s.RG;if(n===Gl)return s.RG_INTEGER;if(n===Wl)return s.RGBA_INTEGER;if(n===ia||n===sa||n===ra||n===oa)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xl||n===ql||n===Yl||n===Kl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zl||n===Jl||n===$l||n===jl||n===Ql||n===aa||n===ec)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zl||n===Jl)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$l)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===jl)return r.COMPRESSED_R11_EAC;if(n===Ql)return r.COMPRESSED_SIGNED_R11_EAC;if(n===aa)return r.COMPRESSED_RG11_EAC;if(n===ec)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ic)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ac)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mc||n===gc||n===_c)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===mc)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xc||n===vc||n===la||n===yc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===xc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===la)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Jy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$y=`
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

}`,bu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ao(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new bt({vertexShader:Jy,fragmentShader:$y,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ge(new Ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tu=class extends Wn{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,v=typeof XRWebGLBinding<"u",p=new bu,g={},M=t.getContextAttributes(),S=null,_=null,b=[],E=[],A=new se,x=null,w=null,R=new Vt;R.viewport=new gt;let P=new Vt;P.viewport=new gt;let N=[R,P],z=new Pl,L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let $=b[K];return $===void 0&&($=new mr,b[K]=$),$.getTargetRaySpace()},this.getControllerGrip=function(K){let $=b[K];return $===void 0&&($=new mr,b[K]=$),$.getGripSpace()},this.getHand=function(K){let $=b[K];return $===void 0&&($=new mr,b[K]=$),$.getHandSpace()};function H(K){let $=E.indexOf(K.inputSource);if($===-1)return;let Me=b[$];Me!==void 0&&(Me.update(K.inputSource,K.frame,c||o),Me.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",Q);for(let K=0;K<b.length;K++){let $=E[K];$!==null&&(E[K]=null,b[K].disconnect($))}L=null,F=null,p.reset();for(let K in g)delete g[K];if(e.setRenderTarget(S),f=null,d=null,u=null,i=null,_=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),w!==null){let K=w.camera;K.fov=w.fov,K.zoom=w.zoom,K.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",V),i.addEventListener("inputsourceschange",Q),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Xe=null,Ee=null;M.depth&&(Ee=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=M.stencil?ss:ii,Xe=M.stencil?Cr:Jn);let qe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(qe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Nt(d.textureWidth,d.textureHeight,{format:Tn,type:vn,depthTexture:new ji(d.textureWidth,d.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Me={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Me),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Nt(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),We.setContext(i),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Q(K){for(let $=0;$<K.removed.length;$++){let Me=K.removed[$],Xe=E.indexOf(Me);Xe>=0&&(E[Xe]=null,b[Xe].disconnect(Me))}for(let $=0;$<K.added.length;$++){let Me=K.added[$],Xe=E.indexOf(Me);if(Xe===-1){for(let qe=0;qe<b.length;qe++)if(qe>=E.length){E.push(Me),Xe=qe;break}else if(E[qe]===null){E[qe]=Me,Xe=qe;break}if(Xe===-1)break}let Ee=b[Xe];Ee&&Ee.connect(Me)}}let G=new I,Z=new I;function ee(K,$,Me){G.setFromMatrixPosition($.matrixWorld),Z.setFromMatrixPosition(Me.matrixWorld);let Xe=G.distanceTo(Z),Ee=$.projectionMatrix.elements,qe=Me.projectionMatrix.elements,pt=Ee[14]/(Ee[10]-1),ie=Ee[14]/(Ee[10]+1),oe=(Ee[9]+1)/Ee[5],ae=(Ee[9]-1)/Ee[5],le=(Ee[8]-1)/Ee[0],pe=(qe[8]+1)/qe[0],ke=pt*le,Be=pt*pe,Ye=Xe/(-le+pe),Je=Ye*-le;if($.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Je),K.translateZ(Ye),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ee[10]===-1)K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let U=pt+Ye,ut=ie+Ye,rt=ke-Je,C=Be+(Xe-Je),y=oe*ie/ut*U,k=ae*ie/ut*U;K.projectionMatrix.makePerspective(rt,C,y,k,U,ut),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function de(K,$){$===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices($.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let $=K.near,Me=K.far;p.texture!==null&&(p.depthNear>0&&($=p.depthNear),p.depthFar>0&&(Me=p.depthFar)),z.near=P.near=R.near=$,z.far=P.far=R.far=Me,(L!==z.near||F!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,F=z.far),z.layers.mask=K.layers.mask|6,R.layers.mask=z.layers.mask&-5,P.layers.mask=z.layers.mask&-3;let Xe=K.parent,Ee=z.cameras;de(z,Xe);for(let qe=0;qe<Ee.length;qe++)de(Ee[qe],Xe);Ee.length===2?ee(z,R,P):z.projectionMatrix.copy(R.projectionMatrix),w===null&&K.isPerspectiveCamera&&(w={camera:K,fov:K.fov,zoom:K.zoom}),ce(K,z,Xe)};function ce(K,$,Me){Me===null?K.matrix.copy($.matrixWorld):(K.matrix.copy(Me.matrixWorld),K.matrix.invert(),K.matrix.multiply($.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=vs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(K){return g[K]};let ze=null;function Fe(K,$){if(h=$.getViewerPose(c||o),m=$,h!==null){let Me=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Xe=!1;Me.length!==z.cameras.length&&(z.cameras.length=0,Xe=!0);for(let ie=0;ie<Me.length;ie++){let oe=Me[ie],ae=null;if(f!==null)ae=f.getViewport(oe);else{let pe=u.getViewSubImage(d,oe);ae=pe.viewport,ie===0&&(e.setRenderTargetTextures(_,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(_))}let le=N[ie];le===void 0&&(le=new Vt,le.layers.enable(ie),le.viewport=new gt,N[ie]=le),le.matrix.fromArray(oe.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(oe.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(ae.x,ae.y,ae.width,ae.height),ie===0&&(z.matrix.copy(le.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Xe===!0&&z.cameras.push(le)}let Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let ie=u.getDepthInformation(Me[0]);ie&&ie.isValid&&ie.texture&&p.init(ie,i.renderState)}if(Ee&&Ee.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let ie=0;ie<Me.length;ie++){let oe=Me[ie].camera;if(oe){let ae=g[oe];ae||(ae=new Ao,g[oe]=ae);let le=u.getCameraImage(oe);ae.sourceTexture=le}}}}for(let Me=0;Me<b.length;Me++){let Xe=E[Me],Ee=b[Me];Xe!==null&&Ee!==void 0&&Ee.update(Xe,$,c||o)}ze&&ze(K,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),m=null}let We=new Up;We.setAnimationLoop(Fe),this.setAnimationLoop=function(K){ze=K},this.dispose=function(){}}},jy=new Ke,Hp=new Ze;Hp.set(-1,0,0,0,1,0,0,0,1);function Qy(s,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,ou(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,M,S,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,_)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),v(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,M,S):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===tn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===tn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let M=e.get(g),S=M.envMap,_=M.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(jy.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Hp),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,M,S){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=S*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,M){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===tn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){let M=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function eM(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){let E=b.program;n.uniformBlockBinding(_,E)}function c(_,b){let E=i[_.id];E===void 0&&(p(_),E=h(_),i[_.id]=E,_.addEventListener("dispose",M));let A=b.program;n.updateUBOMapping(_,A);let x=e.render.frame;r[_.id]!==x&&(d(_),r[_.id]=x)}function h(_){let b=u();_.__bindingPointIndex=b;let E=s.createBuffer(),A=_.__size,x=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,A,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,E),E}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let b=i[_.id],E=_.uniforms,A=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let x=0,w=E.length;x<w;x++){let R=E[x];if(Array.isArray(R))for(let P=0,N=R.length;P<N;P++)f(R[P],x,P,A);else f(R,x,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,b,E,A){if(v(_,b,E,A)===!0){let x=_.__offset,w=_.value;if(Array.isArray(w)){let R=0;for(let P=0;P<w.length;P++){let N=w[P],z=g(N);m(N,_.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,_.__data)}}function m(_,b,E){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,E)}function v(_,b,E,A){let x=_.value,w=b+"_"+E;if(A[w]===void 0)return typeof x=="number"||typeof x=="boolean"?A[w]=x:ArrayBuffer.isView(x)?A[w]=x.slice():A[w]=x.clone(),!0;{let R=A[w];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function p(_){let b=_.uniforms,E=0,A=16;for(let w=0,R=b.length;w<R;w++){let P=Array.isArray(b[w])?b[w]:[b[w]];for(let N=0,z=P.length;N<z;N++){let L=P[N],F=Array.isArray(L.value)?L.value:[L.value];for(let H=0,V=F.length;H<V;H++){let Q=F[H],G=g(Q),Z=E%A,ee=Z%G.boundary,de=Z+ee;E+=ee,de!==0&&A-de<G.storage&&(E+=A-de),L.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=G.storage}}}let x=E%A;return x>0&&(E+=A-x),_.__size=E,_.__cache={},this}function g(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",_),b}function M(_){let b=_.target;b.removeEventListener("dispose",M);let E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function S(){for(let _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:l,update:c,dispose:S}}var tM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hi=null;function nM(){return hi===null&&(hi=new xr(tM,16,16,rs,Wt),hi.name="DFG_LUT",hi.minFilter=Ot,hi.magFilter=Ot,hi.wrapS=Cn,hi.wrapT=Cn,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}var Ac=class{constructor(e={}){let{canvas:t=np(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=vn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let v=f,p=new Set([Wl,Gl,Vl]),g=new Set([vn,Jn,Rr,Cr,zl,kl]),M=new Uint32Array(4),S=new Int32Array(4),_=new I,b=null,E=null,A=[],x=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,N=null,z=null,L=null,F=null;this._outputColorSpace=St;let H=0,V=0,Q=null,G=-1,Z=null,ee=new gt,de=new gt,ce=null,ze=new ue(0),Fe=0,We=t.width,K=t.height,$=1,Me=null,Xe=null,Ee=new gt(0,0,We,K),qe=new gt(0,0,We,K),pt=!1,ie=new vr,oe=!1,ae=!1,le=new Ke,pe=new I,ke=new gt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ye=!1;function Je(){return Q===null?$:1}let U=n;function ut(T,O){return t.getContext(T,O)}let rt,C,y,k,q,J,he,fe,j,ne,me,De,ve,ge,Ue,He,$e,B,_e,te,xe,Te,re;try{let T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",yt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",On,!1),U===null){let O="webgl2";if(U=ut(O,T),U===null)throw ut(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(T){throw t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",On,!1),Ve("WebGLRenderer: "+T.message),T}function Oe(){rt=new cv(U),rt.init(),xe=new Zy(U,rt),C=new Qx(U,rt,e,xe),y=new Yy(U,rt),C.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),z=U.createFramebuffer(),L=U.createFramebuffer(),F=U.createFramebuffer(),k=new dv(U),q=new Ny,J=new Ky(U,rt,y,q,C,xe,k),he=new lv(R),fe=new p0(U),Te=new $x(U,fe),j=new hv(U,fe,k,Te),ne=new pv(U,j,fe,Te,k),B=new fv(U,C,J),Ue=new ev(q),me=new Ly(R,he,rt,C,Te,Ue),De=new Qy(R,q),ve=new Uy,ge=new Hy(rt),$e=new Jx(R,he,y,ne,m,l),He=new qy(R,ne,C),re=new eM(U,k,C,y),_e=new jx(U,rt,k),te=new uv(U,rt,k),k.programs=me.programs,R.capabilities=C,R.extensions=rt,R.properties=q,R.renderLists=ve,R.shadowMap=He,R.state=y,R.info=k}v!==vn&&(w=new gv(v,t.width,t.height,a,i,r));let Ie=new Tu(R,U);this.xr=Ie,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let T=rt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=rt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(We,K,!1))},this.getSize=function(T){return T.set(We,K)},this.setSize=function(T,O,Y=!0){if(Ie.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}We=T,K=O,t.width=Math.floor(T*$),t.height=Math.floor(O*$),Y===!0&&(t.style.width=T+"px",t.style.height=O+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(We*$,K*$).floor()},this.setDrawingBufferSize=function(T,O,Y){We=T,K=O,$=Y,t.width=Math.floor(T*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,T,O)},this.setEffects=function(T){if(v===vn){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let O=0;O<T.length;O++)if(T[O].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ee)},this.getViewport=function(T){return T.copy(Ee)},this.setViewport=function(T,O,Y,W){T.isVector4?Ee.set(T.x,T.y,T.z,T.w):Ee.set(T,O,Y,W),y.viewport(ee.copy(Ee).multiplyScalar($).round())},this.getScissor=function(T){return T.copy(qe)},this.setScissor=function(T,O,Y,W){T.isVector4?qe.set(T.x,T.y,T.z,T.w):qe.set(T,O,Y,W),y.scissor(de.copy(qe).multiplyScalar($).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(T){y.setScissorTest(pt=T)},this.setOpaqueSort=function(T){Me=T},this.setTransparentSort=function(T){Xe=T},this.getClearColor=function(T){return T.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,Y=!0){let W=0;if(T){let X=!1;if(Q!==null){let be=Q.texture.format;X=p.has(be)}if(X){let be=Q.texture.type,Ae=g.has(be),Se=$e.getClearColor(),Re=$e.getClearAlpha(),Pe=Se.r,et=Se.g,ot=Se.b;Ae?(M[0]=Pe,M[1]=et,M[2]=ot,M[3]=Re,U.clearBufferuiv(U.COLOR,0,M)):(S[0]=Pe,S[1]=et,S[2]=ot,S[3]=Re,U.clearBufferiv(U.COLOR,0,S))}else W|=U.COLOR_BUFFER_BIT}O&&(W|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),N=T},this.dispose=function(){t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",On,!1),$e.dispose(),ve.dispose(),ge.dispose(),q.dispose(),he.dispose(),ne.dispose(),Te.dispose(),re.dispose(),me.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",xd),Ie.removeEventListener("sessionend",vd),cs.stop()};function yt(T){T.preventDefault(),go("WebGLRenderer: Context Lost."),P=!0}function dt(){go("WebGLRenderer: Context Restored."),P=!1;let T=k.autoReset,O=He.enabled,Y=He.autoUpdate,W=He.needsUpdate,X=He.type;Oe(),k.autoReset=T,He.enabled=O,He.autoUpdate=Y,He.needsUpdate=W,He.type=X}function On(T){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function jn(T){let O=T.target;O.removeEventListener("dispose",jn),Rm(O)}function Rm(T){Cm(T),q.remove(T)}function Cm(T){let O=q.get(T).programs;O!==void 0&&(O.forEach(function(Y){me.releaseProgram(Y)}),T.isShaderMaterial&&me.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,Y,W,X,be){O===null&&(O=Be);let Ae=X.isMesh&&X.matrixWorld.determinantAffine()<0,Se=Lm(T,O,Y,W,X);y.setMaterial(W,Ae);let Re=Y.index,Pe=1;if(W.wireframe===!0){if(Re=j.getWireframeAttribute(Y),Re===void 0)return;Pe=2}let et=Y.drawRange,ot=Y.attributes.position,Ce=et.start*Pe,ft=(et.start+et.count)*Pe;be!==null&&(Ce=Math.max(Ce,be.start*Pe),ft=Math.min(ft,(be.start+be.count)*Pe)),Re!==null?(Ce=Math.max(Ce,0),ft=Math.min(ft,Re.count)):ot!=null&&(Ce=Math.max(Ce,0),ft=Math.min(ft,ot.count));let kt=ft-Ce;if(kt<0||kt===1/0)return;Te.setup(X,W,Se,Y,Re);let Tt,vt=_e;if(Re!==null&&(Tt=fe.get(Re),vt=te,vt.setIndex(Tt)),X.isMesh)W.wireframe===!0?(y.setLineWidth(W.wireframeLinewidth*Je()),vt.setMode(U.LINES)):vt.setMode(U.TRIANGLES);else if(X.isLine){let nn=W.linewidth;nn===void 0&&(nn=1),y.setLineWidth(nn*Je()),X.isLineSegments?vt.setMode(U.LINES):X.isLineLoop?vt.setMode(U.LINE_LOOP):vt.setMode(U.LINE_STRIP)}else X.isPoints?vt.setMode(U.POINTS):X.isSprite&&vt.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))vt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let nn=X._multiDrawStarts,we=X._multiDrawCounts,ln=X._multiDrawCount,lt=Re?fe.get(Re).bytesPerElement:1,An=q.get(W).currentProgram.getUniforms();for(let Qn=0;Qn<ln;Qn++)An.setValue(U,"_gl_DrawID",Qn),vt.render(nn[Qn]/lt,we[Qn])}else if(X.isInstancedMesh)vt.renderInstances(Ce,kt,X.count);else if(Y.isInstancedBufferGeometry){let nn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,we=Math.min(Y.instanceCount,nn);vt.renderInstances(Ce,kt,we)}else vt.render(Ce,kt)};function _d(T,O,Y,W){N!==null&&T.isNodeMaterial&&N.setObject(W,T),oe===!0&&Ue.setState(T,Y,!1),T.transparent===!0&&T.side===pn&&T.forceSinglePass===!1?(T.side=tn,T.needsUpdate=!0,ba(T,O,W),T.side=li,T.needsUpdate=!0,ba(T,O,W),T.side=pn):ba(T,O,W)}this.compile=function(T,O,Y=null){Y===null&&(Y=T),N!==null&&N.renderStart(T,O,Y),E=ge.get(Y),E.init(O),x.push(E),Y.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),T!==Y&&T.traverseVisible(function(X){X.isLight&&X.layers.test(O.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),ae=this.localClippingEnabled,oe=Ue.init(this.clippingPlanes,ae),oe===!0&&Ue.setGlobalState(this.clippingPlanes,O),N!==null&&He.render(E.state.shadowsArray,Y,O);let W=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let be=X.material;if(be)if(Array.isArray(be))for(let Ae=0;Ae<be.length;Ae++){let Se=be[Ae];_d(Se,Y,O,X),W.add(Se)}else _d(be,Y,O,X),W.add(be)}),E=x.pop(),N!==null&&N.renderEnd(),W},this.compileAsync=function(T,O,Y=null){let W=this.compile(T,O,Y);return new Promise(X=>{function be(){if(W.forEach(function(Ae){let Re=q.get(Ae).currentProgram;(Re===void 0||Re.isReady())&&W.delete(Ae)}),W.size===0){X(T);return}setTimeout(be,10)}rt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Qc=null;function Im(T){Qc&&Qc(T)}function xd(){cs.stop()}function vd(){cs.start()}let cs=new Up;cs.setAnimationLoop(Im),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(T){Qc=T,Ie.setAnimationLoop(T),T===null?cs.stop():cs.start()},Ie.addEventListener("sessionstart",xd),Ie.addEventListener("sessionend",vd),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(T,O);let Y=Ie.enabled===!0&&Ie.isPresenting===!0,W=w!==null&&(Q===null||Y)&&w.begin(R,Q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(O),O=Ie.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,O,Q),E=ge.get(T,x.length),E.init(O),E.state.textureUnits=J.getTextureUnits(),x.push(E),le.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ie.setFromProjectionMatrix(le,Gn,O.reversedDepth),ae=this.localClippingEnabled,oe=Ue.init(this.clippingPlanes,ae),b=ve.get(T,A.length),b.init(),A.push(b),Ie.enabled===!0&&Ie.isPresenting===!0){let Ae=R.xr.getDepthSensingMesh();Ae!==null&&eh(Ae,O,-1/0,R.sortObjects)}eh(T,O,0,R.sortObjects),b.finish(),N!==null&&N.updateLights(E.state.lightsArray),R.sortObjects===!0&&b.sort(Me,Xe),Ye=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,Ye&&$e.addToRenderList(b,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&Ue.beginShadows();let X=E.state.shadowsArray;if(He.render(X,T,O),oe===!0&&Ue.endShadows(),(W&&w.hasRenderPass())===!1){let Ae=b.opaque,Se=b.transmissive;if(E.setupLights(),O.isArrayCamera){let Re=O.cameras;if(Se.length>0)for(let Pe=0,et=Re.length;Pe<et;Pe++){let ot=Re[Pe];Md(Ae,Se,T,ot)}Ye&&$e.render(T);for(let Pe=0,et=Re.length;Pe<et;Pe++){let ot=Re[Pe];yd(b,T,ot,ot.viewport)}}else Se.length>0&&Md(Ae,Se,T,O),Ye&&$e.render(T),yd(b,T,O)}Q!==null&&V===0&&(J.updateMultisampleRenderTarget(Q),J.updateRenderTargetMipmap(Q)),W&&w.end(R),T.isScene===!0&&T.onAfterRender(R,T,O),Te.resetDefaultState(),G=-1,Z=null,x.pop(),x.length>0?(E=x[x.length-1],J.setTextureUnits(E.state.textureUnits),oe===!0&&Ue.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,N!==null&&N.renderEnd()};function eh(T,O,Y,W){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLightProbeGrid)E.pushLightProbeGrid(T);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(ie)){W&&ke.setFromMatrixPosition(T.matrixWorld).applyMatrix4(le);let Ae=ne.update(T),Se=T.material;Se.visible&&b.push(T,Ae,Se,Y,ke.z,null,O)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(ie))){let Ae=ne.update(T),Se=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ke.copy(T.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ke.copy(Ae.boundingSphere.center)),ke.applyMatrix4(T.matrixWorld).applyMatrix4(le)),Array.isArray(Se)){let Re=Ae.groups;for(let Pe=0,et=Re.length;Pe<et;Pe++){let ot=Re[Pe],Ce=Se[ot.materialIndex];Ce&&Ce.visible&&b.push(T,Ae,Ce,Y,ke.z,ot,O)}}else Se.visible&&b.push(T,Ae,Se,Y,ke.z,null,O)}}let be=T.children;for(let Ae=0,Se=be.length;Ae<Se;Ae++)eh(be[Ae],O,Y,W)}function yd(T,O,Y,W){let{opaque:X,transmissive:be,transparent:Ae}=T;E.setupLightsView(Y),oe===!0&&Ue.setGlobalState(R.clippingPlanes,Y),W&&y.viewport(ee.copy(W)),X.length>0&&Sa(X,O,Y),be.length>0&&Sa(be,O,Y),Ae.length>0&&Sa(Ae,O,Y),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Md(T,O,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){let Ce=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new Nt(1,1,{generateMipmaps:!0,type:Ce?Wt:vn,minFilter:Zn,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}let be=E.state.transmissionRenderTarget[W.id],Ae=W.viewport||ee;be.setSize(Ae.z*R.transmissionResolutionScale,Ae.w*R.transmissionResolutionScale);let Se=R.getRenderTarget(),Re=R.getActiveCubeFace(),Pe=R.getActiveMipmapLevel();R.setRenderTarget(be),R.getClearColor(ze),Fe=R.getClearAlpha(),Fe<1&&R.setClearColor(16777215,.5),R.clear(),Ye&&$e.render(Y);let et=R.toneMapping;R.toneMapping=Kn;let ot=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),oe===!0&&Ue.setGlobalState(R.clippingPlanes,W),Sa(T,Y,W),J.updateMultisampleRenderTarget(be),J.updateRenderTargetMipmap(be),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let ft=0,kt=O.length;ft<kt;ft++){let Tt=O[ft],{object:vt,geometry:nn,material:we,group:ln}=Tt;if(we.side===pn&&vt.layers.test(W.layers)){let lt=we.side;we.side=tn,we.needsUpdate=!0,Sd(vt,Y,W,nn,we,ln),we.side=lt,we.needsUpdate=!0,Ce=!0}}Ce===!0&&(J.updateMultisampleRenderTarget(be),J.updateRenderTargetMipmap(be))}R.setRenderTarget(Se,Re,Pe),R.setClearColor(ze,Fe),ot!==void 0&&(W.viewport=ot),R.toneMapping=et}function Sa(T,O,Y){let W=O.isScene===!0?O.overrideMaterial:null;for(let X=0,be=T.length;X<be;X++){let Ae=T[X],{object:Se,geometry:Re,group:Pe}=Ae,et=Ae.material;et.allowOverride===!0&&W!==null&&(et=W),Se.layers.test(Y.layers)&&Sd(Se,O,Y,Re,et,Pe)}}function Sd(T,O,Y,W,X,be){N!==null&&X.isNodeMaterial&&N.setObject(T,X),T.onBeforeRender(R,O,Y,W,X,be),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(R,O,Y,W,T,be),X.transparent===!0&&X.side===pn&&X.forceSinglePass===!1?(X.side=tn,X.needsUpdate=!0,R.renderBufferDirect(Y,O,W,X,T,be),X.side=li,X.needsUpdate=!0,R.renderBufferDirect(Y,O,W,X,T,be),X.side=pn):R.renderBufferDirect(Y,O,W,X,T,be),T.onAfterRender(R,O,Y,W,X,be)}function ba(T,O,Y){O.isScene!==!0&&(O=Be);let W=q.get(T),X=E.state.lights,be=E.state.shadowsArray,Ae=X.state.version,Se=me.getParameters(T,X.state,be,O,Y,E.state.lightProbeGridArray),Re=me.getProgramCacheKey(Se),Pe=W.programs;W.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,W.fog=O.fog;let et=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;W.envMap=he.get(T.envMap||W.environment,et),W.envMapRotation=W.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Pe===void 0&&(T.addEventListener("dispose",jn),Pe=new Map,W.programs=Pe);let ot=Pe.get(Re);if(ot!==void 0){if(W.currentProgram===ot&&W.lightsStateVersion===Ae)return Td(T,Se),ot}else Se.uniforms=me.getUniforms(T),N!==null&&T.isNodeMaterial&&N.build(T,Y,Se),T.onBeforeCompile(Se,R),ot=me.acquireProgram(Se,Re),Pe.set(Re,ot),W.uniforms=Se.uniforms;let Ce=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ce.clippingPlanes=Ue.uniform),Td(T,Se),W.needsLights=Dm(T),W.lightsStateVersion=Ae,W.needsLights&&(Ce.ambientLightColor.value=X.state.ambient,Ce.lightProbe.value=X.state.probe,Ce.sunLights.value=X.state.sun,Ce.sunLightShadows.value=X.state.sunShadow,Ce.directionalLights.value=X.state.directional,Ce.directionalLightShadows.value=X.state.directionalShadow,Ce.spotLights.value=X.state.spot,Ce.spotLightShadows.value=X.state.spotShadow,Ce.rectAreaLights.value=X.state.rectArea,Ce.ltc_1.value=X.state.rectAreaLTC1,Ce.ltc_2.value=X.state.rectAreaLTC2,Ce.pointLights.value=X.state.point,Ce.pointLightShadows.value=X.state.pointShadow,Ce.hemisphereLights.value=X.state.hemi,Ce.sunShadowMatrix.value=X.state.sunShadowMatrix,Ce.sunShadowCascade.value=X.state.sunShadowCascade,Ce.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ce.spotLightMatrix.value=X.state.spotLightMatrix,Ce.spotLightMap.value=X.state.spotLightMap,Ce.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=E.state.lightProbeGridArray.length>0,W.currentProgram=ot,W.uniformsList=null,ot}function bd(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=Nr.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Td(T,O){let Y=q.get(T);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function Pm(T,O){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;_.setFromMatrixPosition(O.matrixWorld);for(let Y=0,W=T.length;Y<W;Y++){let X=T[Y];if(X.texture!==null&&X.boundingBox.containsPoint(_))return X}return null}function Lm(T,O,Y,W,X){O.isScene!==!0&&(O=Be),J.resetTextureUnits();let be=O.fog,Ae=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?O.environment:null,Se=Q===null?R.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:je.workingColorSpace,Re=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Pe=he.get(W.envMap||Ae,Re),et=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ot=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ce=!!Y.morphAttributes.position,ft=!!Y.morphAttributes.normal,kt=!!Y.morphAttributes.color,Tt=Kn;W.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Tt=R.toneMapping);let vt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nn=vt!==void 0?vt.length:0,we=q.get(W),ln=E.state.lights;if(oe===!0&&(ae===!0||T!==Z)){let Mt=T===Z&&W.id===G;Ue.setState(W,T,Mt)}let lt=!1;W.version===we.__version?(we.needsLights&&we.lightsStateVersion!==ln.state.version||we.outputColorSpace!==Se||X.isBatchedMesh&&we.batching===!1||!X.isBatchedMesh&&we.batching===!0||X.isBatchedMesh&&we.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&we.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&we.instancing===!1||!X.isInstancedMesh&&we.instancing===!0||X.isSkinnedMesh&&we.skinning===!1||!X.isSkinnedMesh&&we.skinning===!0||X.isInstancedMesh&&we.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&we.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&we.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&we.instancingMorph===!1&&X.morphTexture!==null||we.envMap!==Pe||W.fog===!0&&we.fog!==be||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Ue.numPlanes||we.numIntersection!==Ue.numIntersection)||we.vertexAlphas!==et||we.vertexTangents!==ot||we.morphTargets!==Ce||we.morphNormals!==ft||we.morphColors!==kt||we.toneMapping!==Tt||we.morphTargetsCount!==nn||!!we.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,we.__version=W.version);let An=we.currentProgram;lt===!0&&(An=ba(W,O,X),N&&W.isNodeMaterial&&N.onUpdateProgram(W,An,we));let Qn=!1,zi=!1,Vs=!1,_t=An.getUniforms(),Ut=we.uniforms;if(y.useProgram(An.program)&&(Qn=!0,zi=!0,Vs=!0),W.id!==G&&(G=W.id,zi=!0),we.needsLights){let Mt=Pm(E.state.lightProbeGridArray,X);we.lightProbeGrid!==Mt&&(we.lightProbeGrid=Mt,zi=!0)}if(Qn||Z!==T){y.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),_t.setValue(U,"projectionMatrix",T.projectionMatrix),_t.setValue(U,"viewMatrix",T.matrixWorldInverse);let Hi=_t.map.cameraPosition;Hi!==void 0&&Hi.setValue(U,pe.setFromMatrixPosition(T.matrixWorld)),C.logarithmicDepthBuffer&&_t.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&_t.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),Z!==T&&(Z=T,zi=!0,Vs=!0)}if(we.needsLights&&(ln.state.sunShadowMap.length>0&&_t.setValue(U,"sunShadowMap",ln.state.sunShadowMap,J),ln.state.directionalShadowMap.length>0&&_t.setValue(U,"directionalShadowMap",ln.state.directionalShadowMap,J),ln.state.spotShadowMap.length>0&&_t.setValue(U,"spotShadowMap",ln.state.spotShadowMap,J),ln.state.pointShadowMap.length>0&&_t.setValue(U,"pointShadowMap",ln.state.pointShadowMap,J)),X.isSkinnedMesh){_t.setOptional(U,X,"bindMatrix"),_t.setOptional(U,X,"bindMatrixInverse");let Mt=X.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),_t.setValue(U,"boneTexture",Mt.boneTexture,J))}X.isBatchedMesh&&(_t.setOptional(U,X,"batchingTexture"),_t.setValue(U,"batchingTexture",X._matricesTexture,J),_t.setOptional(U,X,"batchingIdTexture"),_t.setValue(U,"batchingIdTexture",X._indirectTexture,J),_t.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&_t.setValue(U,"batchingColorTexture",X._colorsTexture,J));let ki=Y.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&B.update(X,Y,An),(zi||we.receiveShadow!==X.receiveShadow)&&(we.receiveShadow=X.receiveShadow,_t.setValue(U,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&O.environment!==null&&(Ut.envMapIntensity.value=O.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=nM()),zi){if(_t.setValue(U,"toneMappingExposure",R.toneMappingExposure),we.needsLights&&Nm(Ut,Vs),be&&W.fog===!0&&De.refreshFogUniforms(Ut,be),De.refreshMaterialUniforms(Ut,W,$,K,E.state.transmissionRenderTarget[T.id]),we.needsLights&&we.lightProbeGrid){let Mt=we.lightProbeGrid;Ut.probesSH.value=Mt.texture,Ut.probesMin.value.copy(Mt.boundingBox.min),Ut.probesMax.value.copy(Mt.boundingBox.max),Ut.probesResolution.value.copy(Mt.resolution)}Nr.upload(U,bd(we),Ut,J)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Nr.upload(U,bd(we),Ut,J),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&_t.setValue(U,"center",X.center),_t.setValue(U,"modelViewMatrix",X.modelViewMatrix),_t.setValue(U,"normalMatrix",X.normalMatrix),_t.setValue(U,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let Mt=W.uniformsGroups;for(let Hi=0,Gs=Mt.length;Hi<Gs;Hi++){let wd=Mt[Hi];re.update(wd,An),re.bind(wd,An)}}return An}function Nm(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.sunLights.needsUpdate=O,T.sunLightShadows.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Dm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(T,O,Y){let W=q.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),q.get(T.texture).__webglTexture=O,q.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){let Y=q.get(T);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,Y=0){Q=T,H=O,V=Y;let W=null,X=!1,be=!1;if(T){let Se=q.get(T);if(Se.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(U.FRAMEBUFFER,Se.__webglFramebuffer),ee.copy(T.viewport),de.copy(T.scissor),ce=T.scissorTest,y.viewport(ee),y.scissor(de),y.setScissorTest(ce),G=-1;return}else if(Se.__webglFramebuffer===void 0)J.setupRenderTarget(T);else if(Se.__hasExternalTextures)J.rebindTextures(T,q.get(T.texture).__webglTexture,q.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let et=T.depthTexture;if(Se.__boundDepthTexture!==et){if(et!==null&&q.has(et)&&(T.width!==et.image.width||T.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(T)}}let Re=T.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(be=!0);let Pe=q.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Pe[O])?W=Pe[O][Y]:W=Pe[O],X=!0):T.samples>0&&J.useMultisampledRTT(T)===!1?W=q.get(T).__webglMultisampledFramebuffer:Array.isArray(Pe)?W=Pe[Y]:W=Pe,ee.copy(T.viewport),de.copy(T.scissor),ce=T.scissorTest}else ee.copy(Ee).multiplyScalar($).floor(),de.copy(qe).multiplyScalar($).floor(),ce=pt;if(Y!==0&&(W=z),y.bindFramebuffer(U.FRAMEBUFFER,W)&&y.drawBuffers(T,W),y.viewport(ee),y.scissor(de),y.setScissorTest(ce),X){let Se=q.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Se.__webglTexture,Y)}else if(be){let Se=O;for(let Re=0;Re<T.textures.length;Re++){let Pe=q.get(T.textures[Re]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Re,Pe.__webglTexture,Y,Se)}}else if(T!==null&&Y!==0){let Se=q.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Se.__webglTexture,Y)}G=-1};function Ed(T){let O=q.get(T);return(O.__readFormat!==T.format||O.__readType!==T.type)&&(O.__readFormat=T.format,O.__readType=T.type,O.__formatReadable=C.textureFormatReadable(T.format),O.__typeReadable=C.textureTypeReadable(T.type)),O}this.readRenderTargetPixels=function(T,O,Y,W,X,be,Ae,Se=0){if(!(T&&T.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re){y.bindFramebuffer(U.FRAMEBUFFER,Re);try{let Pe=T.textures[Se],et=Pe.format,ot=Pe.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Se);let Ce=Ed(Pe);if(Ce.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-W&&Y>=0&&Y<=T.height-X&&U.readPixels(O,Y,W,X,xe.convert(et),xe.convert(ot),be)}finally{let Pe=Q!==null?q.get(Q).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(T,O,Y,W,X,be,Ae,Se=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re)if(O>=0&&O<=T.width-W&&Y>=0&&Y<=T.height-X){y.bindFramebuffer(U.FRAMEBUFFER,Re);let Pe=T.textures[Se],et=Pe.format,ot=Pe.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Se);let Ce=Ed(Pe);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ft),U.bufferData(U.PIXEL_PACK_BUFFER,be.byteLength,U.STREAM_READ),U.readPixels(O,Y,W,X,xe.convert(et),xe.convert(ot),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let kt=Q!==null?q.get(Q).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,kt);let Tt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await sp(U,Tt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ft),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,be),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ft),U.deleteSync(Tt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,Y=0){let W=Math.pow(2,-Y),X=Math.floor(T.image.width*W),be=Math.floor(T.image.height*W),Ae=O!==null?O.x:0,Se=O!==null?O.y:0;J.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,Ae,Se,X,be),y.unbindTexture()},this.copyTextureToTexture=function(T,O,Y=null,W=null,X=0,be=0){let Ae,Se,Re,Pe,et,ot,Ce,ft,kt,Tt=T.isCompressedTexture?T.mipmaps[be]:T.image;if(Y!==null)Ae=Y.max.x-Y.min.x,Se=Y.max.y-Y.min.y,Re=Y.isBox3?Y.max.z-Y.min.z:1,Pe=Y.min.x,et=Y.min.y,ot=Y.isBox3?Y.min.z:0;else{let Ut=Math.pow(2,-X);Ae=Math.floor(Tt.width*Ut),Se=Math.floor(Tt.height*Ut),T.isDataArrayTexture?Re=Tt.depth:T.isData3DTexture?Re=Math.floor(Tt.depth*Ut):Re=1,Pe=0,et=0,ot=0}W!==null?(Ce=W.x,ft=W.y,kt=W.z):(Ce=0,ft=0,kt=0);let vt=xe.convert(O.format),nn=xe.convert(O.type),we;O.isData3DTexture?(J.setTexture3D(O,0),we=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(J.setTexture2DArray(O,0),we=U.TEXTURE_2D_ARRAY):(J.setTexture2D(O,0),we=U.TEXTURE_2D),y.activeTexture(U.TEXTURE0),y.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),y.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),y.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);let ln=y.getParameter(U.UNPACK_ROW_LENGTH),lt=y.getParameter(U.UNPACK_IMAGE_HEIGHT),An=y.getParameter(U.UNPACK_SKIP_PIXELS),Qn=y.getParameter(U.UNPACK_SKIP_ROWS),zi=y.getParameter(U.UNPACK_SKIP_IMAGES);y.pixelStorei(U.UNPACK_ROW_LENGTH,Tt.width),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Tt.height),y.pixelStorei(U.UNPACK_SKIP_PIXELS,Pe),y.pixelStorei(U.UNPACK_SKIP_ROWS,et),y.pixelStorei(U.UNPACK_SKIP_IMAGES,ot);let Vs=T.isDataArrayTexture||T.isData3DTexture,_t=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){let Ut=q.get(T),ki=q.get(O),Mt=q.get(Ut.__renderTarget),Hi=q.get(ki.__renderTarget);y.bindFramebuffer(U.READ_FRAMEBUFFER,Mt.__webglFramebuffer),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Gs=0;Gs<Re;Gs++)Vs&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,q.get(T).__webglTexture,X,ot+Gs),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,q.get(O).__webglTexture,be,kt+Gs)),U.blitFramebuffer(Pe,et,Ae,Se,Ce,ft,Ae,Se,U.DEPTH_BUFFER_BIT,U.NEAREST);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||q.has(T)){let Ut=q.get(T),ki=q.get(O);y.bindFramebuffer(U.READ_FRAMEBUFFER,L),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,F);for(let Mt=0;Mt<Re;Mt++)Vs?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ut.__webglTexture,X,ot+Mt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ut.__webglTexture,X),_t?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ki.__webglTexture,be,kt+Mt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ki.__webglTexture,be),X!==0?U.blitFramebuffer(Pe,et,Ae,Se,Ce,ft,Ae,Se,U.COLOR_BUFFER_BIT,U.NEAREST):_t?U.copyTexSubImage3D(we,be,Ce,ft,kt+Mt,Pe,et,Ae,Se):U.copyTexSubImage2D(we,be,Ce,ft,Pe,et,Ae,Se);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else _t?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(we,be,Ce,ft,kt,Ae,Se,Re,vt,nn,Tt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(we,be,Ce,ft,kt,Ae,Se,Re,vt,Tt.data):U.texSubImage3D(we,be,Ce,ft,kt,Ae,Se,Re,vt,nn,Tt):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,be,Ce,ft,Ae,Se,vt,nn,Tt.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,be,Ce,ft,Tt.width,Tt.height,vt,Tt.data):U.texSubImage2D(U.TEXTURE_2D,be,Ce,ft,Ae,Se,vt,nn,Tt);y.pixelStorei(U.UNPACK_ROW_LENGTH,ln),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,lt),y.pixelStorei(U.UNPACK_SKIP_PIXELS,An),y.pixelStorei(U.UNPACK_SKIP_ROWS,Qn),y.pixelStorei(U.UNPACK_SKIP_IMAGES,zi),be===0&&O.generateMipmaps&&U.generateMipmap(we),y.unbindTexture()},this.initRenderTarget=function(T){q.get(T).__webglFramebuffer===void 0&&J.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?J.setTextureCube(T,0):T.isData3DTexture?J.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?J.setTexture2DArray(T,0):J.setTexture2D(T,0),y.unbindTexture()},this.resetState=function(){H=0,V=0,Q=null,y.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};var Or={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var En=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},iM=new ai(-1,1,1,-1,0,1),Eu=class extends at{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}},sM=new Eu,os=class{constructor(e){this._mesh=new Ge(sM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,iM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Br=class extends En{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ni.clone(e.uniforms),this.material=new bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new os(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var pa=class extends En{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Ic=class extends En{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Pc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new se);this._width=n.width,this._height=n.height,t=new Nt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Br(Or),this.copyPass.material.blending=Dn,this.timer=new Ko}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}pa!==void 0&&(o instanceof pa?n=!0:o instanceof Ic&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Lc=class extends En{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ue}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var Vp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ue(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var zr=class s extends En{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new se(e.x,e.y):new se(256,256),this.clearColor=new ue(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Nt(r,o,{type:Wt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Nt(r,o,{type:Wt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Nt(r,o,{type:Wt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Vp;this.highPassUniforms=Ni.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new bt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new se(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ni.clone(Or.uniforms),this.blendMaterial=new bt({uniforms:this.copyUniforms,vertexShader:Or.vertexShader,fragmentShader:Or.fragmentShader,premultipliedAlpha:!0,blending:ci,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ue,this._oldClearAlpha=1,this._basic=new dn,this._fsQuad=new os(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new se(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let i=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;i.push((o*a+(o+1)*l)/c),r.push(c)}return new bt({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new se(.5,.5)},direction:{value:new se(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};zr.BlurDirectionX=new se(1,0);zr.BlurDirectionY=new se(0,1);var ma={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Nc=class extends En{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ni.clone(ma.uniforms),this.material=new br({name:ma.name,uniforms:this.uniforms,vertexShader:ma.vertexShader,fragmentShader:ma.fragmentShader}),this._fsQuad=new os(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Jo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$o?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===jo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ls?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ea?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ta?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Qo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Dc={id:"sunset",name:"Sunset Pass",blurb:"Golden hour above the clouds",skyTop:"#27347a",skyMid:"#7d6fb8",skyHorizon:"#ffb98c",skyBottom:"#f7cfae",sun:"#ffd8a8",sunDir:[-.32,.16,-.93],fog:"#e8b397",fogNear:120,fogFar:1500,hemiSky:"#a9b6ff",hemiGround:"#4a3044",hemi:.75,sunIntensity:3.1,exposure:.92,meadow:"#5f7f34",meadowDry:"#a1924a",dirt:"#7b5a44",rock:"#77697a",rockDark:"#4b4257",snow:"#f0e9f0",snowShade:"#b9b0d6",snowLine:140,pine:"#1f4a3c",pineLight:"#3f7a4a",trunk:"#4a3328",trees:1,treeHeight:1,peakRock:"#6b5c78",peakRockDark:"#3e3550",peakSnow:"#fbeee8",peakSnowShade:"#b8a9d4",peakSnowLine:.4,cloud:"#f3c3a6",skyCloud:"#ffd9c2",road:"#2c2e3b",roadLine:"#f4efe6",roadDash:"#ffc247",flags:["#ff5a3c","#ffd23f","#3fa7ff","#ffffff","#7a5cff"],barrier:"#f2ede4",barrierStripe:"#ff5a3c",suit:"#ff6a3d",suitDark:"#1d2440",helmet:"#f4f4f6",glove:"#23263a",boot:"#f4f4f6",air:{color:"#fff1dc",count:260,fall:.3,size:.06},strata:!1,grass:"#8a9a45"},rM={...Dc,id:"alpine",name:"Alpine Morning",blurb:"Fresh snow, bluebird sky",skyTop:"#1d5fb8",skyMid:"#5f9ae0",skyHorizon:"#d4e6f7",skyBottom:"#eef4fa",sun:"#fff4e2",sunDir:[.45,.42,-.78],fog:"#cddff0",fogNear:160,fogFar:1700,hemiSky:"#cfe4ff",hemiGround:"#2e3a4d",hemi:.7,sunIntensity:2.9,exposure:.78,meadow:"#d9e4f0",meadowDry:"#c6d5e6",dirt:"#8e98a8",rock:"#4a5262",rockDark:"#2f3542",snow:"#e6eef8",snowShade:"#a9bdd6",snowLine:-500,pine:"#173b35",pineLight:"#2f5e4e",trunk:"#3b2a22",trees:1.1,peakRock:"#3a414e",peakRockDark:"#21262f",peakSnow:"#e2ebf7",peakSnowShade:"#9fb3cc",peakSnowLine:.22,cloud:"#e2ecf6",skyCloud:"#ffffff",road:"#3a3f4b",roadLine:"#f4f6fa",roadDash:"#ffb400",flags:["#1e6bff","#ffffff","#ff4b3a","#2fc46b","#ffd23f"],suit:"#1e6bff",suitDark:"#1b2433",helmet:"#ffffff",glove:"#1b2433",boot:"#ff4b3a",air:{color:"#ffffff",count:700,fall:2.2,size:.09},grass:"#e8eef6"},oM={...Dc,id:"canyon",name:"Red Rock Canyon",blurb:"Sandstone walls, desert heat",skyTop:"#2f6fbf",skyMid:"#7fb0de",skyHorizon:"#f4d9b4",skyBottom:"#f0cfa2",sun:"#fff0d0",sunDir:[.55,.5,-.66],fog:"#e9c9a0",fogNear:140,fogFar:1600,hemiSky:"#bcd4f0",hemiGround:"#6a3a26",hemi:.7,sunIntensity:3,exposure:.82,meadow:"#b9854f",meadowDry:"#cf9a5c",dirt:"#9c6a45",rock:"#b0573a",rockDark:"#7a3526",snow:"#e8c99a",snowShade:"#c9a47a",snowLine:99999,pine:"#4f5a2c",pineLight:"#77803f",trunk:"#5a3b26",trees:.3,treeHeight:.45,peakRock:"#b8603f",peakRockDark:"#7c3a28",peakSnow:"#e6b98a",peakSnowShade:"#c28a60",peakSnowLine:.75,cloud:"#efd2aa",skyCloud:"#ffffff",road:"#34302e",roadLine:"#f4efe6",roadDash:"#ffd23f",flags:["#ffd23f","#2fb5a8","#ff5a3c","#ffffff","#3d6bd8"],suit:"#2fb5a8",suitDark:"#2a2433",helmet:"#f6f0e6",glove:"#2a2433",boot:"#f6f0e6",air:{color:"#f0c690",count:200,fall:-.2,size:.07},strata:!0,grass:"#a8943f"},wu=[Dc,rM,oM],Gp="sunset";try{Gp=(location.hash||"").replace("#","")||localStorage.getItem("hoverline.track")||"sunset"}catch{}var Ne=wu.find(s=>s.id===Gp)||Dc;var Di=new Uint8Array(512);{let s=1337,e=()=>(s=s*16807%2147483647)/2147483647,t=[...Array(256).keys()];for(let n=255;n>0;n--){let i=Math.floor(e()*(n+1));[t[n],t[i]]=[t[i],t[n]]}for(let n=0;n<512;n++)Di[n]=t[n&255]}var Wp=s=>s*s*s*(s*(s*6-15)+10);function kr(s,e,t){let n=s&1?e:-e,i=s&2?t:-t;return s&4?n+i:(n+i)*.7}function Uc(s,e){let t=Math.floor(s)&255,n=Math.floor(e)&255;s-=Math.floor(s),e-=Math.floor(e);let i=Wp(s),r=Wp(e),o=Di[t]+n,a=Di[t+1]+n,l=kr(Di[o],s,e)+i*(kr(Di[a],s-1,e)-kr(Di[o],s,e)),c=kr(Di[o+1],s,e-1)+i*(kr(Di[a+1],s-1,e-1)-kr(Di[o+1],s,e-1));return l+r*(c-l)}function mn(s,e,t=5){let n=0,i=.5,r=0;for(let o=0;o<t;o++)n+=i*Uc(s,e),r+=i,s*=2.03,e*=2.03,i*=.5;return n/r}function Xp(s,e,t=5){let n=0,i=.5,r=0;for(let o=0;o<t;o++)n+=i*(1-Math.abs(Uc(s,e)*1.6)),r+=i,s*=2.1,e*=2.1,i*=.5;return n/r}var Yt=(s,e,t)=>{let n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)},Dt=9;function Kt(s){return 70*Math.sin(s/330)+38*Math.sin(s/141+1.3)+11*Math.sin(s/63+.4)}function Bt(s){return-.14*s+10*Math.sin(s/190)+4*Math.sin(s/77+2)}function Au(s){return Kt(s+.5)-Kt(s-.5)}function qp(s){return Bt(s+.5)-Bt(s-.5)}function Ru(s,e){let t=Math.sin(e/620+s*1.9)*1.6+Math.sin(e/233+s)*.35;return Yt(-.2,.6,t)}function $n(s,e){let t=Math.abs(s),n=s>0?1:-1;if(t<Dt+1.5)return-.35;let i=Yt(Dt+1,Dt+5,t),r=mn(s*.045,e*.045,3)*3.5*i,o=mn(e*.0035+n*17.3,t*.006,4)*.5+.5,a=Yt(14,90,t)*(14+90*o*o)+Yt(30,140,t)*Xp(e*.006+n*5,t*.01,4)*80+Yt(120,520,t)*(140+160*(mn(e*.0012+n*3,t*.002,3)*.5+.5)),l=Yt(Dt+2,22,t)*(1.5+mn(e*.02,t*.05,2)*2),c=Math.pow(Yt(22,190,t),.7)*(330+60*mn(e*.004+n*9,t*.01,3)),h=Yt(24,80,t)*Xp(e*.01+n*3,t*.03,3)*26,u=l-c+h,d=Ru(n,e);return-.35+i*(.8+r)+a*(1-d)+u*d}function Yp(s,e){return Bt(e)+$n(s,e)}function Kp(s,e){let t=[];for(let i=-16;i<=16.001;i+=1.6)t.push(i);let n=[];for(let i=1;i<=s;i++)n.push(16+(e-16)*Math.pow(i/s,2));return[...n.map(i=>-i).reverse(),...t,...n]}var di={grass:new ue(Ne.meadow),grassDry:new ue(Ne.meadowDry),dirt:new ue(Ne.dirt),rock:new ue(Ne.rock),rockDark:new ue(Ne.rockDark),snow:new ue(Ne.snow),snowShade:new ue(Ne.snowShade)},Os=new ue;function Zp(s,e,t,n,i){let r=Math.abs(s),o=mn(s*.015+40,e*.015,3);if(i.copy(di.grass).lerp(di.grassDry,Yt(-.25,.35,o)),i.lerp(di.dirt,1-Yt(Dt+1,Dt+5,r)),Os.copy(di.rock).lerp(di.rockDark,Yt(-.2,.3,mn(s*.03,e*.03,2))*.8+Yt(-40,-200,t)*.5),i.lerp(Os,Yt(.42,.62,n)),Ne.strata){let c=Math.sin((Bt(e)+t)*.22+mn(s*.01,e*.01,2)*2.5);Os.copy(di.rock).lerp(di.rockDark,Yt(-.2,.9,c)),Os.lerp(di.snow,Yt(.75,.95,-c)*.6),i.lerp(Os,Yt(.25,.5,n)*.95)}let a=Ne.snowLine+40*mn(e*.003,s*.003,2),l=Yt(a,a+25,t);return Os.copy(di.snow).lerp(di.snowShade,Yt(.5,.8,n)),i.lerp(Os,l*(1-Yt(.55,.85,n))),i}function ga(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new at,c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Jp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][d]);let m=Jp(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Jp(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new it(o,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){let v=h.getComponent(d,m);a.setComponent(d+u,m,v)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function Cu(s,e){if(e===eu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ir||e===ca){let t=s.getIndex();if(t===null){let r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Ir)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Ui=160,gn=32,Iu=Kp(20,700),Pu=360,$p=60,jp=24,Qp=500,em=2*(gn/2+1);function aM(s){let e=s>>>0;return()=>{e+=1831565813;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}var Fi=s=>new ue(s);function Lu(s,e,t){let n=document.createElement("canvas");n.width=s,n.height=e,t(n.getContext("2d"),s,e);let i=new qn(n);return i.wrapS=i.wrapT=Pn,i.anisotropy=8,i}function tm(){let s=Lu(512,1024,(n,i,r)=>{n.fillStyle=Ne.road,n.fillRect(0,0,i,r);for(let o=0;o<26e3;o++){let a=Math.random();n.fillStyle=`rgba(${a>.5?"255,240,230":"0,0,10"},${.05+Math.random()*.06})`,n.fillRect(Math.random()*i,Math.random()*r,2,2)}for(let o of[.3,.7]){let a=n.createLinearGradient(i*(o-.1),0,i*(o+.1),0);a.addColorStop(0,"rgba(0,0,0,0)"),a.addColorStop(.5,"rgba(0,0,0,0.18)"),a.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=a,n.fillRect(i*(o-.1),0,i*.2,r)}n.fillStyle=Ne.roadLine,n.fillRect(i*.055,0,i*.018,r),n.fillRect(i*.927,0,i*.018,r),n.fillStyle=Ne.roadDash;for(let o=0;o<r;o+=r/2)n.fillRect(i*.492,o,i*.016,r/4);n.fillStyle="#15161d",n.fillRect(0,0,i*.03,r),n.fillRect(i*.97,0,i*.03,r)});s.colorSpace=St;let e=Lu(64,8,(n,i,r)=>{n.fillStyle="#000",n.fillRect(0,0,i,r),n.fillStyle="#fff",n.fillRect(0,0,2,r),n.fillRect(i-2,0,2,r)});e.colorSpace=St;let t=Lu(256,512,(n,i,r)=>{n.fillStyle="#b4b4b4",n.fillRect(0,0,i,r);for(let o=0;o<9e3;o++){let a=150+Math.random()*100|0;n.fillStyle=`rgba(${a},${a},${a},0.35)`,n.fillRect(Math.random()*i,Math.random()*r,3,3)}n.fillStyle="#909090";for(let o of[.3,.7])n.fillRect(i*(o-.05),0,i*.1,r)});return{road:s,glow:e,rough:t}}function Bs(s,e){let t=s.index?s.toNonIndexed():s,n=t.attributes.position.count,i=new Float32Array(n*3);for(let r=0;r<n;r++)i[r*3]=e.r,i[r*3+1]=e.g,i[r*3+2]=e.b;return t.setAttribute("color",new it(i,3)),t}function lM(){let s=[Bs(new Yn(.16,.26,2.4,5).translate(0,1.2,0),Fi(Ne.trunk))],e=Fi(Ne.pine),t=Fi(Ne.pineLight),n=new ue,i=4;for(let r=0;r<i;r++){let o=r/(i-1),a=new yr(2.4*(1-o*.6),3.2-o*.9,7,1).translate(0,2.6+o*3.1,0).toNonIndexed(),l=a.attributes.position,c=new Float32Array(l.count*3);for(let h=0;h<l.count;h+=3){n.copy(e).lerp(t,.1+o*.4+(Math.sin(h*3.7+r*1.3)*.5+.5)*.25);for(let u=0;u<3;u++)c[(h+u)*3]=n.r,c[(h+u)*3+1]=n.g,c[(h+u)*3+2]=n.b}a.setAttribute("color",new it(c,3)),s.push(a)}return ga(s)}function cM(s){let e=new Ti(1,1),t=e.attributes.position,n=new I;for(let i=0;i<t.count;i++)n.fromBufferAttribute(t,i),n.multiplyScalar(1+mn(n.x*1.3+s,n.y*1.3+n.z*.7,2)*.6),n.y*=.65,t.setXYZ(i,n.x,n.y,n.z);return e.computeVertexNormals(),e}function hM(){let s=Bs(new Yn(.06,.07,2.6,6).translate(0,1.3,0),Fi("#f4efe6")),e=Bs(new Yn(.075,.075,.35,6).translate(0,2.2,0),Fi(Ne.flags[0])),t=new Nn;t.moveTo(0,0),t.lineTo(.8,-.22),t.lineTo(0,-.45);let n=Bs(new Qi(t).translate(.06,2.6,0),Fi("#ffffff"));return ga([s,e,n])}function uM(){let s=[],t=Dt+1.2;for(let i of[-t,t])s.push(Bs(new Yn(.12,.16,7.5,6).translate(i,7.5/2,0),Fi("#2b2d3a")));let n=22;for(let i=0;i<n;i++){let r=(i+.5)/n,o=-t+r*t*2,a=7.5-.3-Math.sin(r*Math.PI)*1.3,l=new Nn;l.moveTo(-.32,0),l.lineTo(.32,0),l.lineTo(0,-.7),s.push(Bs(new Qi(l).translate(o,a,0),Fi(Ne.flags[i%Ne.flags.length])))}return ga(s)}function dM(){let s=[];for(let e=0;e<5;e++){let t=e/5*Math.PI*2,n=new yr(.06,.55+e%3*.18,3,1);n.translate(0,.3,0),n.rotateZ(Math.cos(t)*.35),n.rotateX(Math.sin(t)*.35),s.push(Bs(n,Fi(Ne.grass).multiplyScalar(.8+e%2*.3)))}return ga(s)}var Fc=class{constructor(e,t){this.scene=e,this.chunks=[],this.terrainMat=new ht({vertexColors:!0,flatShading:!0,roughness:.95,metalness:0}),this.roadMat=new ht({map:t.road,roughnessMap:t.rough,roughness:1,metalness:.1,envMapIntensity:.9}),this.treeGeo=lM(),this.treeMat=new ht({vertexColors:!0,flatShading:!0,roughness:.9}),this.rockGeo=cM(3.1),this.rockMat=new ht({color:Ne.rock,flatShading:!0,roughness:.9}),this.poleGeo=hM(),this.propMat=new ht({vertexColors:!0,roughness:.7,side:pn}),this.buntingGeo=uM(),this.tuftGeo=dM(),this.tuftMat=new ht({vertexColors:!0,roughness:1,flatShading:!0}),this.railMat=new ht({color:"#b9bfc8",metalness:.75,roughness:.38,side:pn}),this.railPostGeo=new fn(.12,.9,.12).translate(0,.45,0),this.job=null}_makeChunk(){let e=Iu.length,t=gn+1,n=new at;n.setAttribute("position",new it(new Float32Array(e*t*3),3)),n.setAttribute("color",new it(new Float32Array(e*t*3),3));let i=[];for(let E=0;E<gn;E++)for(let A=0;A<e-1;A++){let x=E*e+A,w=x+1,R=x+e,P=R+1;A+E&1?i.push(x,w,R,w,P,R):i.push(x,w,P,x,P,R)}n.setIndex(i);let r=new Ge(n,this.terrainMat);r.receiveShadow=!0,r.frustumCulled=!1;let o=new at,a=2*(gn+1);o.setAttribute("position",new it(new Float32Array(a*3),3)),o.setAttribute("normal",new it(new Float32Array(a*3),3)),o.setAttribute("uv",new it(new Float32Array(a*2),2));let l=[];for(let E=0;E<gn;E++){let A=E*2;l.push(A,A+1,A+2,A+1,A+3,A+2)}o.setIndex(l);let c=new Ge(o,this.roadMat);c.receiveShadow=!0,c.frustumCulled=!1;let h=(E,A,x,w=!0)=>{let R=new bs(E,A,x);return R.castShadow=w,R.receiveShadow=!0,R.frustumCulled=!1,R},u=h(this.treeGeo,this.treeMat,Pu);u.instanceColor=new Xn(new Float32Array(Pu*3),3);let d=h(this.rockGeo,this.rockMat,$p),f=h(this.poleGeo,this.propMat,jp),m=new Ge(this.buntingGeo,this.propMat);m.castShadow=!0;let v=h(this.tuftGeo,this.tuftMat,Qp,!1),p=new at,g=4*(gn+1);p.setAttribute("position",new it(new Float32Array(g*3),3));let M=[];for(let E=0;E<2;E++)for(let A=0;A<gn;A++){let x=E*2*(gn+1)+A*2;M.push(x,x+1,x+2,x+1,x+3,x+2)}p.setIndex(M);let S=new Ge(p,this.railMat);S.castShadow=!0,S.frustumCulled=!1;let _=h(this.railPostGeo,this.railMat,em),b=new Et;return b.add(r,c,u,d,f,m,v,S,_),b.visible=!1,this.scene.add(b),{group:b,terrain:r,road:c,trees:u,rocks:d,poles:f,bunting:m,tufts:v,rail:S,railPosts:_,index:-1,s0:0}}*build(e,t){e.s0=t*Ui;let n=e.s0,i=Iu.length,r=e.terrain.geometry,o=r.attributes.position.array,a=r.attributes.color.array,l=new ue;for(let P=0;P<=gn;P++){let N=n+P*Ui/gn,z=Kt(N),L=Bt(N);for(let F=0;F<i;F++){let H=Iu[F],V=P*i+F,Q=$n(H,N);o[V*3]=z+H,o[V*3+1]=L+Q,o[V*3+2]=-N;let G=Math.max(1,Math.abs(H)*.04),Z=Math.min(1,Math.abs($n(H+G,N)-$n(H-G,N))/(2*G)*.8);Zp(H,N,Q,Z,l),a[V*3]=l.r,a[V*3+1]=l.g,a[V*3+2]=l.b}P%4===3&&(yield)}r.attributes.position.needsUpdate=r.attributes.color.needsUpdate=!0,yield;let c=e.road.geometry,h=c.attributes.position.array,u=c.attributes.normal.array,d=c.attributes.uv.array,f=new I;for(let P=0;P<=gn;P++){let N=n+P*Ui/gn,z=Kt(N),L=Bt(N)+.02;f.set(0,2,Bt(N+1)-Bt(N-1)).normalize();for(let F=0;F<2;F++){let H=P*2+F,V=F?Dt+.4:-Dt-.4;h[H*3]=z+V,h[H*3+1]=L,h[H*3+2]=-N,u[H*3]=f.x,u[H*3+1]=f.y,u[H*3+2]=f.z,d[H*2]=F,d[H*2+1]=N/18}}c.attributes.position.needsUpdate=c.attributes.normal.needsUpdate=c.attributes.uv.needsUpdate=!0,yield;let m=aM(t*7919+13),v=new Ke,p=new Lt,g=new I,M=new I,S=new I(0,1,0),_=0;for(let P=0;P<1600*Ne.trees&&_<Pu;P++){let N=n+m()*Ui,L=(m()<.5?-1:1)*(Dt+4+Math.pow(m(),1.5)*240),F=$n(L,N),H=Math.abs($n(L+1.5,N)-$n(L-1.5,N))/3,V=mn(L*.012,N*.012,2);if(H>.75||F>130||F<-120||V<-.05)continue;let Q=.8+m()*.9;p.setFromAxisAngle(S,m()*6.28),v.compose(M.set(Kt(N)+L,Bt(N)+F-.3,-N),p,g.set(Q*(Ne.treeHeight<1?1.3:1),Q*(.85+m()*.5)*Ne.treeHeight,Q*(Ne.treeHeight<1?1.3:1))),e.trees.setMatrixAt(_,v);let G=.85+m()*.3;e.trees.setColorAt(_,l.setRGB(G,G*(.95+m()*.1),G)),++_%90===0&&(yield)}e.trees.count=_,e.trees.instanceMatrix.needsUpdate=!0,e.trees.instanceColor.needsUpdate=!0;let b=0;for(let P=0;P<240&&b<$p;P++){let N=n+m()*Ui,z=m()<.5?-1:1,L=.5+Math.pow(m(),3)*5,F=z*(Dt+2.5+L*1.3+Math.pow(m(),2)*110);p.setFromEuler(new Ln(m()*.5,m()*6.28,m()*.5)),v.compose(M.set(Kt(N)+F,Yp(F,N)+L*.1,-N),p,g.set(L,L*(.6+m()*.6),L*(.8+m()*.5))),e.rocks.setMatrixAt(b++,v)}e.rocks.count=b,e.rocks.instanceMatrix.needsUpdate=!0,yield;let E=0;for(let P=0;P<900&&E<Qp;P++){let N=n+m()*Ui,L=(m()<.5?-1:1)*(Dt+1.6+Math.pow(m(),1.7)*30),F=$n(L,N);if(Math.abs($n(L+1,N)-$n(L-1,N))>1.2||mn(L*.08,N*.08,2)<-.1)continue;let H=.7+m()*.9;p.setFromAxisAngle(S,m()*6.28),v.compose(M.set(Kt(N)+L,Bt(N)+F-.05,-N),p,g.set(H,H,H)),e.tufts.setMatrixAt(E++,v)}e.tufts.count=E,e.tufts.instanceMatrix.needsUpdate=!0;let A=e.rail.geometry.attributes.position.array,x=0;for(let P=0;P<2;P++){let N=P?1:-1,z=N*(Dt+.95);for(let L=0;L<=gn;L++){let F=n+L*Ui/gn,H=Kt(F)+z,V=Bt(F),Q=Ru(N,F)>.45?1:0,G=P*2*(gn+1)+L*2,Z=Q?.82:-2,ee=Q?.5:-2.2;A[G*3]=H,A[G*3+1]=V+Z,A[G*3+2]=-F,A[G*3+3]=H,A[G*3+4]=V+ee,A[G*3+5]=-F,Q&&L%2===0&&x<em&&(v.makeTranslation(H+N*.08,V,-F),e.railPosts.setMatrixAt(x++,v))}}e.rail.geometry.attributes.position.needsUpdate=!0,e.rail.geometry.computeVertexNormals(),e.railPosts.count=x,e.railPosts.instanceMatrix.needsUpdate=!0;let w=0;for(let P=n;P<n+Ui&&w<jp;P+=14){let N=w&1?1:-1,z=N*(Dt+1.2);p.setFromAxisAngle(S,-Math.atan((Kt(P+1)-Kt(P-1))/2)+Math.PI/2),v.compose(M.set(Kt(P)+z,Bt(P),-P),p,g.set(1,1,1)),e.poles.setMatrixAt(w++,v)}e.poles.count=w,e.poles.instanceMatrix.needsUpdate=!0;let R=n+80;e.bunting.position.set(Kt(R),Bt(R),-R),e.bunting.rotation.y=-Math.atan((Kt(R+1)-Kt(R-1))/2),e.bunting.visible=t%2===0}update(e,t=2.5){let n=performance.now();for(;performance.now()-n<t;){if(!this.job){let r=Math.floor(e/Ui)-1,o=[];for(let c=r;c<r+10;c++)o.push(c);for(let c of this.chunks)c.index!==-2&&!o.includes(c.index)&&(c.index=-1,c.group.visible=!1);let a=o.find(c=>!this.chunks.some(h=>h.index===c));if(a===void 0)return;let l=this.chunks.find(c=>c.index===-1);l||(l=this._makeChunk(),this.chunks.push(l)),l.index=-2,this.job={ch:l,i:a,it:this.build(l,a)}}this.job.it.next().done&&(this.job.ch.index=this.job.i,this.job.ch.group.visible=!0,this.job=null)}}prime(e){this.update(e,1e9)}reset(){this.job=null;for(let e of this.chunks)e.index=-1,e.group.visible=!1}};function nm(){let s=new Et,e=new Et;s.add(e);let t=1.9,n=.34,i=new Nn;i.moveTo(-t/2+n,-n),i.lineTo(t/2-n,-n),i.absarc(t/2-n,0,n,-Math.PI/2,Math.PI/2,!1),i.lineTo(-t/2+n,n),i.absarc(-t/2+n,0,n,Math.PI/2,Math.PI*1.5,!1);let r=new As(i,{depth:.07,bevelEnabled:!0,bevelThickness:.035,bevelSize:.04,bevelSegments:4,curveSegments:20});r.rotateX(-Math.PI/2),r.rotateY(Math.PI/2),r.translate(0,0,0);let o=new en({color:15921909,metalness:.2,roughness:.25,clearcoat:1,clearcoatRoughness:.08}),a=new Ge(r,o);a.castShadow=!0,e.add(a);let l=new Qi(i,20);l.rotateX(-Math.PI/2),l.rotateY(Math.PI/2),l.scale(.9,1,.9);let c=new Ge(l,new ht({color:1381655,roughness:1}));c.position.y=.109,e.add(c);let h=new ht({color:16738877,roughness:.5}),u=new Ge(new fn(.035,.02,t*.78),h);u.position.set(0,.112,0),e.add(u);let d=new Ge(new fn(.02,.03,t*.7),h);d.position.set(-n-.035,.03,0),e.add(d);let f=d.clone();f.position.x=n+.035,e.add(f);let m=new ht({color:2764083,metalness:.9,roughness:.3}),v=new ht({color:3816776,metalness:.8,roughness:.35}),p=[];for(let de of[-.55,.55]){let ce=new Ge(new Yn(.22,.26,.1,24),m);ce.position.set(0,-.06,de),e.add(ce);let ze=new Ge(new es(.19,.03,8,32),v);ze.rotation.x=Math.PI/2,ze.position.set(0,-.115,de),e.add(ze),p.push(ze)}let g=Hr(),M=new Ge(new Ei(1.6,3),new dn({map:g,color:1697535,transparent:!0,opacity:.55,blending:ci,depthWrite:!1}));M.rotation.x=-Math.PI/2,M.position.y=-.55,M.visible=!1,s.add(M);let S=new Et;e.add(S);let _=new ht({color:16734751,roughness:.55}),b=new ht({color:1776930,roughness:.7}),E=new ht({color:15329774,roughness:.45}),A=new en({color:1118481,metalness:1,roughness:.05,clearcoat:1}),x=(de,ce,ze)=>{let Fe=new Ro(de,ce,6,12),We=new Ge(Fe,ze);return We.castShadow=!0,We},w=(de,ce,ze,Fe)=>{let We=new Et;return We.position.set(ce,ze,Fe),de.add(We),We},R=w(S,0,.95,0),P=x(.16,.12,b);P.rotation.z=Math.PI/2,R.add(P);let N=[];for(let[de,ce]of[[1,-.26],[-1,.26]]){let ze=w(R,0,0,ce*.5),Fe=x(.095,.38,b);Fe.position.y=-.25,ze.add(Fe);let We=w(ze,0,-.48,0),K=x(.085,.36,b);K.position.y=-.22,We.add(K);let $=new Ge(new fn(.16,.1,.3),E);$.position.set(.02,-.46,0),$.castShadow=!0,We.add($),N.push({hip:ze,knee:We,side:de,z:ce})}let z=w(R,0,.08,0),L=x(.2,.34,_);L.position.y=.3,z.add(L);let F=new Ge(new fn(.16,.34,.3),b);F.position.set(-.2,.34,0),F.castShadow=!0,z.add(F);let H=w(z,.02,.66,0),V=new Ge(new si(.17,24,18),E);V.position.y=.1,V.castShadow=!0,H.add(V);let Q=new Ge(new si(.155,24,12,-.9,1.8,1,1),A);Q.position.set(.03,.1,0),Q.rotation.y=0,H.add(Q);let G=[];for(let de of[-1,1]){let ce=w(z,0,.5,de*.24),ze=x(.07,.26,_);ze.position.y=-.18,ce.add(ze);let Fe=w(ce,0,-.36,0),We=x(.06,.24,_);We.position.y=-.16,Fe.add(We);let K=new Ge(new si(.075,12,10),b);K.position.y=-.34,Fe.add(K),G.push({sh:ce,el:Fe,side:de})}S.rotation.y=0,S.position.y=.1;let Z={crouch:.5,lean:0,drift:0,t:0};function ee(de,ce,ze,Fe,We){Z.t+=de,Z.crouch+=(ce-Z.crouch)*Math.min(1,de*6);let K=Z.crouch;R.position.y=.95-K*.32;for(let $ of N)$.hip.rotation.x=$.side*.18,$.hip.rotation.z=K*.9,$.knee.rotation.z=-K*1.6;z.rotation.z=-.15-K*.45+Fe*.3,z.rotation.x=ze*.35,H.rotation.z=.1+K*.35,H.rotation.y=-Fe*.4;for(let $ of G)$.sh.rotation.x=$.side*(.9+Fe*.5+Math.sin(Z.t*3+$.side)*.05*We)+ze*.4,$.sh.rotation.z=.3+K*.3,$.el.rotation.z=-.5-Fe*.4;Fe>.1&&(G[Fe>0?0:1].sh.rotation.z=.3+K*.3+Fe*.9)}return{root:s,tilt:e,rider:S,pods:p,glow:M,pose:ee,accent:h,ringMat:v}}function Hr(s="rgba(255,255,255,1)"){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,s),n.addColorStop(.35,"rgba(255,255,255,0.35)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,128,128),new qn(e)}var Oc=class{constructor(){this.ctx=null,this.on=!0,this.muted=!1}unlock(){if(this.ctx){this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=.6,this.master.connect(t.destination),this.hum=t.createGain(),this.hum.gain.value=0,this.lp=t.createBiquadFilter(),this.lp.type="lowpass",this.lp.frequency.value=600,this.lp.Q.value=6,this.o1=t.createOscillator(),this.o1.type="sawtooth",this.o1.frequency.value=70,this.o2=t.createOscillator(),this.o2.type="sawtooth",this.o2.frequency.value=70.7,this.o1.connect(this.lp),this.o2.connect(this.lp),this.lp.connect(this.hum),this.hum.connect(this.master),this.o1.start(),this.o2.start();let n=t.createBuffer(1,t.sampleRate*2,t.sampleRate),i=n.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;this.noiseBuf=n,this.wind=t.createBufferSource(),this.wind.buffer=n,this.wind.loop=!0,this.wf=t.createBiquadFilter(),this.wf.type="bandpass",this.wf.frequency.value=800,this.wf.Q.value=.6,this.wg=t.createGain(),this.wg.gain.value=0,this.wind.connect(this.wf),this.wf.connect(this.wg),this.wg.connect(this.master),this.wind.start(),this.dr=t.createBufferSource(),this.dr.buffer=n,this.dr.loop=!0,this.df=t.createBiquadFilter(),this.df.type="highpass",this.df.frequency.value=2500,this.dg=t.createGain(),this.dg.gain.value=0,this.dr.connect(this.df),this.df.connect(this.dg),this.dg.connect(this.master),this.dr.start()}start(){this.active=!0}stop(){this.active=!1}toggle(){this.on=!this.on,this._apply()}mute(e){this.muted=e,this._apply()}_apply(){this.master&&(this.master.gain.value=this.on&&!this.muted?.6:0)}update(e,t){if(!this.ctx)return;let n=this.ctx.currentTime,i=this.active?1:.3;this.o1.frequency.setTargetAtTime(55+e*1.4+t*40,n,.1),this.o2.frequency.setTargetAtTime(55.8+e*1.42+t*40,n,.1),this.lp.frequency.setTargetAtTime(300+e*14+t*900,n,.1),this.hum.gain.setTargetAtTime(.09*i,n,.2),this.wf.frequency.setTargetAtTime(400+e*18,n,.2),this.wg.gain.setTargetAtTime(Math.min(.5,e/160)*i,n,.2)}setDrift(e){this.ctx&&this.dg.gain.setTargetAtTime(e?.12:0,this.ctx.currentTime,.05)}_tone(e,t,n="sine",i=.2,r=0){if(!this.ctx)return;let o=this.ctx,a=o.currentTime,l=o.createOscillator(),c=o.createGain();l.type=n,l.frequency.setValueAtTime(e,a),r&&l.frequency.exponentialRampToValueAtTime(e*r,a+t),c.gain.setValueAtTime(i,a),c.gain.exponentialRampToValueAtTime(.001,a+t),l.connect(c),c.connect(this.master),l.start(a),l.stop(a+t)}_noise(e,t,n){if(!this.ctx)return;let i=this.ctx,r=i.currentTime,o=i.createBufferSource(),a=i.createBiquadFilter(),l=i.createGain();o.buffer=this.noiseBuf,a.type="lowpass",a.frequency.value=t,l.gain.setValueAtTime(n,r),l.gain.exponentialRampToValueAtTime(.001,r+e),o.connect(a),a.connect(l),l.connect(this.master),o.start(r),o.stop(r+e)}orb(){this._tone(1320+Math.random()*200,.12,"triangle",.12),this._tone(1980,.18,"sine",.06)}ring(e){this._tone(520,.4,"sawtooth",.08,2.2),e&&this._tone(1040,.5,"triangle",.12,1.5)}boost(e){this._noise(.8,3e3,.25+e*.2),this._tone(90,.7,"sawtooth",.15,3)}near(){this._noise(.25,5e3,.2)}scrape(){(!this._sc||this.ctx.currentTime-this._sc>.15)&&(this._sc=this.ctx?.currentTime,this._noise(.15,6e3,.12))}crash(){this._noise(1.2,900,.8),this._tone(120,.8,"square",.2,.3)}};var sm=new I,rm=new I,fM=new I,Oi=new Lt,zc=new Lt,_a=new Lt,JT=new I(0,1,0);function Vr(s,e,t,n=1){s.updateWorldMatrix(!0,!1),e.updateWorldMatrix(!1,!1);let i=sm.setFromMatrixPosition(s.matrixWorld),r=rm.setFromMatrixPosition(e.matrixWorld).sub(i).normalize(),o=fM.copy(t).sub(i).normalize();Oi.setFromUnitVectors(r,o),n<1&&Oi.slerp(_a.identity(),1-n),s.getWorldQuaternion(zc).premultiply(Oi),s.parent.getWorldQuaternion(_a).invert(),s.quaternion.copy(_a.multiply(zc)),s.updateMatrixWorld(!0)}function Bc(s,e,t){Oi.setFromAxisAngle(e,t),s.getWorldQuaternion(zc).premultiply(Oi),s.parent.getWorldQuaternion(_a).invert(),s.quaternion.copy(_a.multiply(zc)),s.updateMatrixWorld(!0)}function im(s,e,t,n,i,r){let o=sm.copy(e).sub(s),a=o.length();a=Math.min(a,(t+n)*.999),o.normalize();let l=(t*t-n*n+a*a)/(2*a),c=Math.sqrt(Math.max(0,t*t-l*l)),h=rm.copy(i).addScaledVector(o,-i.dot(o)).normalize();return r.copy(s).addScaledVector(o,l).addScaledVector(h,c)}function pM(s){let e=s.skeleton.bones,t=h=>/Visor/i.test(s.name)?Ne.glove:/Head/.test(h)?Ne.helmet:/Neck/.test(h)?Ne.suitDark:/Hand|Thumb|Index|Middle|Ring|Pinky/.test(h)?Ne.glove:/Foot|Toe/.test(h)?Ne.boot:/UpLeg|Leg|Hips/.test(h)?Ne.suitDark:Ne.suit,n=s.geometry,i=n.attributes.skinIndex,r=n.attributes.skinWeight,o=new Float32Array(i.count*3),a=new ue;for(let h=0;h<i.count;h++){let u=0,d=-1;for(let f=0;f<4;f++){let m=r.getComponent(h,f);m>d&&(d=m,u=i.getComponent(h,f))}a.set(t(e[u]?.name||"")),o[h*3]=a.r,o[h*3+1]=a.g,o[h*3+2]=a.b}n.setAttribute("color",new it(o,3));let l=s.material,c=new ht({vertexColors:!0,map:l.map||null,roughness:.5,metalness:.05,envMapIntensity:.8});c.onBeforeCompile=h=>{h.fragmentShader=h.fragmentShader.replace("#include <map_fragment>",`
      #ifdef USE_MAP
        float lum = dot(texture2D(map, vMapUv).rgb, vec3(0.299, 0.587, 0.114));
        diffuseColor.rgb *= 0.72 + lum * 0.7;
      #endif`)},s.material=c}function om(s,e){let t=s.scene,n=_=>t.getObjectByName("mixamorig"+_)||t.getObjectByName("mixamorig:"+_),i={};for(let _ of["Hips","Spine","Spine1","Spine2","Neck","Head","HeadTop_End","LeftUpLeg","LeftLeg","LeftFoot","LeftToeBase","RightUpLeg","RightLeg","RightFoot","RightToeBase","LeftArm","LeftForeArm","LeftHand","RightArm","RightForeArm","RightHand"])i[_]=n(_);t.traverse(_=>{_.isMesh&&(_.castShadow=!0,_.receiveShadow=!0,_.frustumCulled=!1),_.isSkinnedMesh&&pM(_)});let r=new un().setFromObject(t),o=1.78/(r.max.y-r.min.y);t.scale.multiplyScalar(o),t.updateMatrixWorld(!0);let a=new Et;a.add(t),t.rotation.y=-Math.PI/2;let l=new Zo(t),c=s.animations.find(_=>_.name==="Idle")||s.animations[0];l.clipAction(c).play();let u=(_,b=new I)=>_.getWorldPosition(b),d=(_,b)=>u(i[_]).distanceTo(u(i[b])),f={thigh:d("LeftUpLeg","LeftLeg"),shin:d("LeftLeg","LeftFoot"),upper:d("LeftArm","LeftForeArm"),fore:d("LeftForeArm","LeftHand"),ankle:u(i.LeftFoot).y-r.min.y*o},m=u(i.Hips).y-r.min.y*o,v={crouch:.5,lean:0,drift:0,t:0,sway:0},p={hips:new I,footF:new I,footB:new I,knee:new I,elbow:new I,hand:new I,pole:new I,tmp:new I,up:new I,fwdChar:new I,nose:new I,right:new I},g=null,M=(_,b,E,A)=>g.localToWorld(A.set(_,b,E));function S(_,b,E,A,x,w){g=b,v.t+=_;let R=Math.min(1,_*7);v.crouch+=(E-v.crouch)*R,v.lean+=(A-v.lean)*R,v.drift+=(x-v.drift)*R,l.update(_),a.updateWorldMatrix(!0,!0);let P=v.crouch,N=v.drift;b.getWorldQuaternion(Oi),p.up.set(0,1,0).applyQuaternion(Oi),p.fwdChar.set(1,0,0).applyQuaternion(Oi),p.nose.set(0,0,-1).applyQuaternion(Oi);let z=m*(1-.3*P)+Math.sin(v.t*2.1)*.01;M(-.06-P*.12+v.lean*.12,e+z,.02+N*.1,p.hips);let L=i.Hips;L.parent.updateWorldMatrix(!0,!1),L.position.copy(L.parent.worldToLocal(p.tmp.copy(p.hips))),L.updateMatrixWorld(!0),Bc(L,p.up,.25+N*.3);let F=.36;M(.02,e+f.ankle,-F,p.footF),M(-.02,e+f.ankle,F,p.footB);for(let[V,Q,G]of[["Left",p.footF,-.7],["Right",p.footB,.5]]){let Z=i[V+"UpLeg"],ee=i[V+"Leg"],de=i[V+"Foot"],ce=i[V+"ToeBase"],ze=u(Z,new I);p.pole.copy(p.fwdChar).addScaledVector(p.nose,G<0?.3:-.3).normalize(),im(ze,Q,f.thigh,f.shin,p.pole,p.knee),Vr(Z,ee,p.knee),Vr(ee,de,Q),p.tmp.copy(Q).addScaledVector(p.fwdChar,.16).addScaledVector(p.nose,G<0?.06:-.02).addScaledVector(p.up,-f.ankle*.9),ce&&Vr(de,ce,p.tmp)}M(.25+P*.35+N*.25,e+z+.55-P*.12,.05+N*.1,p.tmp),p.tmp.addScaledVector(p.nose,v.lean*-.05),Vr(i.Spine,i.Spine1,p.tmp,.9),Bc(i.Spine2,p.up,.35+N*.4),Bc(i.Neck,p.up,.35),Bc(i.Head,p.up,.45-N*.2);let H=Math.sin(v.t*1.7)*.05+Math.sin(v.t*3.3)*.02*w;for(let[V,Q,G]of[["Left",-1,.1],["Right",1,-.05]]){let Z=i[V+"Arm"],ee=i[V+"ForeArm"],de=i[V+"Hand"],ce=u(Z,new I);V==="Right"&&N>.2?M(.55,e-.35,.3,p.hand):p.hand.copy(ce).addScaledVector(p.nose,Q*-(.5+P*.1)).addScaledVector(p.fwdChar,.02).addScaledVector(p.up,-.32+G+H+v.lean*Q*.12),p.pole.copy(p.up).multiplyScalar(-.6).addScaledVector(p.fwdChar,-.8).normalize(),im(ce,p.hand,f.upper,f.fore,p.pole,p.elbow),Vr(Z,ee,p.elbow),Vr(ee,de,p.hand)}}return{object:a,update:S,mixer:l}}var wn=s=>new ue(Ne[s]),Nu=new I(...Ne.sunDir).normalize();function am(s,e){let t={top:{value:wn("skyTop")},mid:{value:wn("skyMid")},horizon:{value:wn("skyHorizon")},bottom:{value:wn("skyBottom")},sunDir:{value:Nu},sunColor:{value:wn("sun")},sunScale:{value:1}},n=new bt({uniforms:t,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.); gl_Position = p.xyww; }",fragmentShader:`
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
      }`,side:tn,depthWrite:!1,fog:!1}),i=new Ge(new si(4e3,48,24),n);i.renderOrder=-2,i.frustumCulled=!1,s.add(i),s.background=wn("fog"),s.fog=new vo(wn("fog"),Ne.fogNear,Ne.fogFar);let r=new Dr(e),o=new ys,a=n.clone();return a.uniforms.sunScale={value:.25},o.add(new Ge(new si(10,48,24),a)),s.environment=r.fromScene(o,.02).texture,r.dispose(),i}function mM(s,e,t,n,i,r,o,a,l){let c=new Ti(1,a),h=c.attributes.position,u=new I,d=l()*100,f=1.1+l()*.9,m=3+Math.floor(l()*4),v=l()*6.28,p=.12+l()*.22,g=(l()-.5)*.5,M=(l()-.5)*.5,S=[];for(let w=0;w<h.count;w++){u.fromBufferAttribute(h,w);let R=Math.max(-.3,Math.min(1,u.y)),P=Math.atan2(u.z,u.x),N=Uc(u.x*2.1+d,u.z*2.1+u.y*1.7),z=1-p*(.5-.5*Math.cos(m*P+v)),L=(.8+N*.5)*z,F=R>=0?Math.pow(R,f)*o:R*30,H=R>=0?(1-Math.pow(R,1.6)*.93)*L:1.05,V=R>=0?Math.pow(R,1.8):0;S.push(t+(u.x*H+g*V)*r,n+F,i+(u.z*H+M*V)*r)}let _=wn("peakSnow"),b=wn("peakSnowShade"),E=wn("peakRock"),A=wn("peakRockDark"),x=new ue;for(let w=0;w<S.length;w+=9){let R=(S[w+1]+S[w+4]+S[w+7])/3,P=(R-n)/o,N=S[w+3]-S[w],z=S[w+4]-S[w+1],L=S[w+5]-S[w+2],F=S[w+6]-S[w],H=S[w+7]-S[w+1],V=S[w+8]-S[w+2],Q=z*V-L*H,G=L*F-N*V,Z=N*H-z*F,ee=1-Math.abs(G)/Math.hypot(Q,G,Z),de=Ne.peakSnowLine+ee*.4+(l()-.5)*.12;x.copy(P>de?ee>.55?b:_:P>de-.22?E:A);for(let ce=0;ce<3;ce++)e.push(x.r,x.g,x.b)}s.push(...S),c.dispose()}function lm(s){let e=7,t=()=>(e=e*16807%2147483647)/2147483647,n=new Et,i=[{count:22,min:700,max:1300,h0:220,h1:480,detail:2},{count:26,min:1400,max:2400,h0:500,h1:1e3,detail:1}];for(let u of i){let d=[],f=[];for(let p=0;p<u.count;p++){let g=t()*Math.PI*2,M=u.min+t()*(u.max-u.min),S=Math.cos(g)*M,_=Math.sin(g)*M;if(_<0&&Math.abs(S)<M*.2&&u.detail===2)continue;let b=u.h0+t()*(u.h1-u.h0);mM(d,f,S,-380,_,b*(.75+t()*.45),b+380,u.detail,t)}let m=new at;m.setAttribute("position",new Qe(d,3)),m.setAttribute("color",new Qe(f,3)),m.computeVertexNormals();let v=new Ge(m,new zo({vertexColors:!0,flatShading:!0}));v.frustumCulled=!1,n.add(v)}let r=new bt({uniforms:{col:{value:wn("cloud")},fogCol:{value:wn("fog")},t:{value:0}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform vec3 col, fogCol; uniform float t; varying vec3 vW;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f); return mix(mix(h(i),h(i+vec2(1,0)),f.x), mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x), f.y); }
      void main(){ vec2 p = vW.xz * 0.004 + vec2(t*0.01, 0.);
        float c = n(p)*0.5 + n(p*2.3)*0.3 + n(p*5.1)*0.2;
        vec3 k = mix(col * 0.82, col * 1.08, c);
        float d = length(vW.xz - cameraPosition.xz);
        gl_FragColor = vec4(mix(k, fogCol, smoothstep(300., 2600., d)), 1.);
        #include <colorspace_fragment>
      }`,fog:!1}),o=new Ge(new Ei(9e3,9e3,1,1).rotateX(-Math.PI/2),r);o.position.y=-300,o.frustumCulled=!1,n.add(o);let a=document.createElement("canvas");a.width=256,a.height=128;let l=a.getContext("2d");for(let u=0;u<38;u++){let d=30+Math.random()*196,f=50+Math.random()*40-Math.abs(d-128)*.15,m=16+Math.random()*30,v=l.createRadialGradient(d,f-m*.3,m*.1,d,f,m);v.addColorStop(0,"rgba(255,255,255,0.9)"),v.addColorStop(.6,"rgba(236,236,245,0.55)"),v.addColorStop(1,"rgba(220,220,235,0)"),l.fillStyle=v,l.beginPath(),l.arc(d,f,m,0,7),l.fill()}let c=l.createLinearGradient(0,0,0,128);c.addColorStop(0,"rgba(0,0,0,0)"),c.addColorStop(1,"rgba(90,80,120,0.35)"),l.globalCompositeOperation="source-atop",l.fillStyle=c,l.fillRect(0,0,256,128);let h=new qn(a);h.colorSpace=St;for(let u=0;u<26;u++){let d=t()*Math.PI*2,f=2200+t()*1300,m=new So(new gr({map:h,color:Ne.skyCloud,fog:!1,depthWrite:!1,transparent:!0,opacity:.55+t()*.35})),v=500+t()*900;m.scale.set(v,v*.4,1),m.position.set(Math.cos(d)*f,350+t()*650,Math.sin(d)*f),m.renderOrder=-1,n.add(m)}return s.add(n),{group:n,cloud:o,cloudMat:r}}function cm(s){let e=new Map,t=new Map,n=s.clone();return hm(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function hm(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)hm(s.children[n],e.children[n],t)}var kc=class extends oi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ku(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Hc(t,st.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Hc(t,st.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Qu(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Ii.extractUrlBase(e);o=Ii.resolveURL(c,this.path)}else o=Ii.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Tr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===mm){try{o[st.KHR_BINARY_GLTF]=new ed(e)}catch(u){i&&i(u);return}r=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new ad(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case st.KHR_MATERIALS_UNLIT:o[u]=new Bu;break;case st.KHR_DRACO_MESH_COMPRESSION:o[u]=new td(r,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[u]=new nd;break;case st.KHR_MESH_QUANTIZATION:o[u]=new id;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function gM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function zt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ou=class{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new ue(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],hn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ns(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new qo(h),c.distance=u;break;case"spot":c=new Xo(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),fi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Bu=class{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return dn}extendParams(e,t,n){let i=[];e.color=new ue(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],hn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,St))}return Promise.all(i)}},zu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},ku=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return zt(this.parser,e,this.name)!==null?en:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(r,r)}return Promise.all(i)}},Hu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){return zt(this.parser,e,this.name)!==null?en:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Vu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return zt(this.parser,e,this.name)!==null?en:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Gu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){return zt(this.parser,e,this.name)!==null?en:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new ue(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],hn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,St)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Wu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return zt(this.parser,e,this.name)!==null?en:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Xu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){return zt(this.parser,e,this.name)!==null?en:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ue().setRGB(r[0],r[1],r[2],hn),Promise.all(i)}},qu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){return zt(this.parser,e,this.name)!==null?en:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Yu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){return zt(this.parser,e,this.name)!==null?en:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new ue().setRGB(r[0],r[1],r[2],hn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,St)),Promise.all(i)}},Ku=class{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){return zt(this.parser,e,this.name)!==null?en:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Zu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return zt(this.parser,e,this.name)!==null?en:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Ju=class{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},$u=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},ju=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Hc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Qu=class{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Un.TRIANGLES&&c.mode!==Un.TRIANGLE_STRIP&&c.mode!==Un.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let m of u){let v=new Ke,p=new I,g=new Lt,M=new I(1,1,1),S=new bs(m.geometry,m.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,b),l.SCALE&&M.fromBufferAttribute(l.SCALE,b),S.setMatrixAt(b,v.compose(p,g,M));let _=null;for(let b in l)if(b==="_COLOR_0"){let E=l[b];S.instanceColor=new Xn(E.array,E.itemSize,E.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(_===null){let A=S.geometry;_=new at,_.name=A.name;for(let x in A.attributes)_.setAttribute(x,A.attributes[x]);for(let x in A.morphAttributes)_.morphAttributes[x]=A.morphAttributes[x];A.index!==null&&_.setIndex(A.index),_.morphTargetsRelative=A.morphTargetsRelative;for(let x of A.groups)_.addGroup(x.start,x.count,x.materialIndex);A.boundingBox!==null&&(_.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(_.boundingSphere=A.boundingSphere.clone()),_.drawRange.start=A.drawRange.start,_.drawRange.count=A.drawRange.count,_.userData=Object.assign({},A.userData),S.geometry=_}let E=l[b];_.setAttribute(b,new Xn(E.array,E.itemSize,E.normalized))}wt.prototype.copy.call(S,m),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},mm="glTF",xa=12,um={JSON:1313821514,BIN:5130562},ed=class{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,xa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==mm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-xa,r=new DataView(e,xa),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===um.JSON){let c=new Uint8Array(e,xa+o,a);this.content=n.decode(c)}else if(l===um.BIN){let c=xa+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},td=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=rd[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=rd[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Gr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let m in f.attributes){let v=f.attributes[m],p=l[m];p!==void 0&&(v.normalized=p)}u(f)},a,c,hn,d)})})}},nd=class{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},id=class{constructor(){this.name=st.KHR_MESH_QUANTIZATION}},Vc=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,v=m-c,p=-2*f+3*d,g=f-d,M=1-p,S=g-d+u;for(let _=0;_!==a;_++){let b=o[v+_+a],E=o[v+_+l]*h,A=o[m+_+a],x=o[m+_]*h;r[_]=M*b+S*E+p*A+g*x}return r}},_M=new Lt,sd=class extends Vc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return _M.fromArray(r).normalize().toArray(r),r}},Un={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Gr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},dm={9728:Ft,9729:Ot,9984:Ol,9985:Ar,9986:Ds,9987:Zn},fm={33071:Cn,33648:hr,10497:Pn},Du={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},as={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xM={CUBICSPLINE:void 0,LINEAR:xs,STEP:_s},Uu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ht({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:li})),s.DefaultMaterial}function zs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function fi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function yM(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function MM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function SM(s){let e,t=s.extensions&&s.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Fu(t.attributes):e=s.indices+":"+Fu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Fu(s.targets[n]);return e}function Fu(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function od(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var TM=new Ke,ad=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Vo(this.options.manager):this.textureLoader=new Yo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Tr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return zs(r,a,i),fi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Ii.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Du[i.type],a=Gr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new it(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Du[i.type],c=Gr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,v,p;if(f&&f!==u){let g=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,S=t.cache.get(M);S||(v=new c(a,g*f,i.count*f/h),S=new Ms(v,f/h),t.cache.add(M,S)),p=new Ki(S,l,d%f/h,m)}else a===null?v=new c(i.count*l):v=new c(a,d,i.count*l),p=new it(v,l,m);if(i.sparse!==void 0){let g=Du.SCALAR,M=Gr[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,b=new M(o[1],S,i.sparse.count*g),E=new c(o[2],_,i.sparse.count*l);a!==null&&(p=new it(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let A=0,x=b.length;A<x;A++){let w=b[A];if(p.setX(w,E[A*l]),l>=2&&p.setY(w,E[A*l+1]),l>=3&&p.setZ(w,E[A*l+2]),l>=4&&p.setW(w,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=dm[d.magFilter]||Ot,h.minFilter=dm[d.minFilter]||Zn,h.wrapS=fm[d.wrapS]||Pn,h.wrapT=fm[d.wrapT]||Pn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ft&&h.minFilter!==Ot,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(v){let p=new Gt(v);p.needsUpdate=!0,d(p)}),t.load(Ii.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),fi(u,o),u.userData.mimeType=o.mimeType||bM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[st.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ji,on.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Zi,on.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ht}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){let u=i[st.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new ue(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],hn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,St)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=pn);let h=r.alphaMode||Uu.OPAQUE;if(h===Uu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Uu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==dn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new se(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==dn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==dn){let u=r.emissiveFactor;a.emissive=new ue().setRGB(u[0],u[1],u[2],hn)}return r.emissiveTexture!==void 0&&o!==dn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,St)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),fi(u,r),t.associations.set(u,{materials:e}),r.extensions&&zs(i,u,r),u})}createUniqueName(e){let t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return pm(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=SM(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=pm(new at,c,t),c.mode===Un.TRIANGLE_STRIP?d=d.then(f=>Cu(f,ca)):c.mode===Un.TRIANGLE_FAN&&(d=d.then(f=>Cu(f,Ir))),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?vM(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let v=h[f],p=o[f],g,M=c[f];if(p.mode===Un.TRIANGLES||p.mode===Un.TRIANGLE_STRIP||p.mode===Un.TRIANGLE_FAN||p.mode===void 0){let S=r.isSkinnedMesh===!0,_=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");S&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=S&&_?new bo(v,M):new Ge(v,M),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(p.mode===Un.LINES)g=new Es(v,M);else if(p.mode===Un.LINE_STRIP)g=new Ts(v,M);else if(p.mode===Un.LINE_LOOP)g=new Eo(v,M);else if(p.mode===Un.POINTS)g=new $i(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&MM(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),fi(g,r),p.extensions&&zs(i,g,p),t.assignFinalMaterial(g),u.push(g)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&zs(i,u[0],r),u[0];let d=new Et;r.extensions&&zs(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vt(su.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ai(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new Ke;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new To(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],m=i.samplers[f.sampler],v=f.target,p=v.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,M=i.parameters!==void 0?i.parameters[m.output]:m.output;v.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",M)),c.push(m),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],v=u[3],p=u[4],g=[];for(let S=0,_=d.length;S<_;S++){let b=d[S],E=f[S],A=m[S],x=v[S],w=p[S];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let R=n._createAnimationTracks(b,E,A,x,w);if(R)for(let P=0;P<R.length;P++)g.push(R[P])}let M=new Rs(r,void 0,g);return fi(M,i),M})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,TM)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,m=u[0];h.pivot=new I().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new _r:c.length>1?h=new Et:c.length===1?h=c[0]:h=new wt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),fi(h,r),r.extensions&&zs(n,h,r),r.matrix!==void 0){let u=new Ke;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Et;n.name&&(r.name=i.createUniqueName(n.name)),fi(r,n),n.extensions&&zs(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(cm(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof on||d instanceof Gt)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}as[r.path]===as.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(as[r.path]){case as.weights:h=Ai;break;case as.rotation:h=Ri;break;case as.translation:case as.scale:h=ts;break;default:switch(n.itemSize){case 1:h=Ai;break;case 2:case 3:default:h=ts;break}break}let u=i.interpolation!==void 0?xM[i.interpolation]:xs,d=this._getArrayFromAccessor(n);for(let f=0,m=l.length;f<m;f++){let v=new h(l[f]+"."+as[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=od(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Ri?sd:Vc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function EM(s,e,t){let n=e.attributes,i=new un;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){let h=od(Gr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new I,l=new I;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let v=od(Gr[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new _n;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function pm(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=rd[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return je.workingColorSpace!==hn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),fi(s,e),EM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?yM(s,e.targets,t):s})}var Kr=new URLSearchParams(location.search),gm=Kr.has("orbit")?parseFloat(Kr.get("orbit")):0,Hs=document.getElementById("c"),Fn=new Ac({canvas:Hs,antialias:!1,powerPreference:"high-performance"}),ya=/Mobi|Android/i.test(navigator.userAgent)||Kr.has("low");Fn.setPixelRatio(Math.min(devicePixelRatio,ya?1.25:1.75));Fn.toneMapping=Ls;Fn.toneMappingExposure=Ne.exposure;Fn.shadowMap.enabled=!0;Fn.shadowMap.type=Is;var Qt=new ys,Ct=new Vt(64,1,.1,5e3),wM=new Go(Ne.hemiSky,Ne.hemiGround,Ne.hemi);Qt.add(wM);var mi=new ns(Ne.sun,Ne.sunIntensity);mi.castShadow=!0;mi.shadow.mapSize.set(ya?1024:2048,ya?1024:2048);Object.assign(mi.shadow.camera,{left:-60,right:60,top:60,bottom:-60,near:1,far:500});mi.shadow.radius=3;mi.shadow.bias=-4e-4;mi.shadow.normalBias=.04;Qt.add(mi,mi.target);var Kc=new ns(Ne.skyHorizon,.9);Qt.add(Kc,Kc.target);var AM=new Nt(1,1,{type:Wt,samples:ya?0:4}),Jr=new Pc(Fn,AM);Jr.addPass(new Lc(Qt,Ct));var pd=new zr(new se(1,1),.2,.4,.98);Jr.addPass(pd);Jr.addPass(new Nc);var qc=new Br({uniforms:{tDiffuse:{value:null},uSpeed:{value:0},uHit:{value:0},uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`
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
    }`});Jr.addPass(qc);function md(){let s=innerWidth,e=innerHeight;Fn.setSize(s,e,!1),Jr.setSize(s,e),pd.setSize(s/2,e/2),Ct.aspect=s/e,Ct.userData.baseFov=s/e<1?78:62,Ct.updateProjectionMatrix()}addEventListener("resize",md);var yE=Kr.has("fixedq"),qr,At,Zc=null,bm,ld;var va=class{constructor(e,t,n=ci){this.max=e,this.n=0;let i=new at;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.baseSize=new Float32Array(e),i.setAttribute("position",new it(this.pos,3)),i.setAttribute("color",new it(this.col,3)),i.setAttribute("size",new it(this.size,1)),i.setAttribute("alpha",new it(this.alpha,1)),this.mat=new bt({uniforms:{map:{value:t},scale:{value:400},opacity:{value:1}},vertexShader:`attribute float size; attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC;
        uniform float scale; void main(){ vA=alpha; vC=color; vec4 mv=modelViewMatrix*vec4(position,1.); gl_PointSize=size*scale/-mv.z; gl_Position=projectionMatrix*mv; }`,fragmentShader:"uniform sampler2D map; uniform float opacity; varying float vA; varying vec3 vC; void main(){ vec4 t=texture2D(map, gl_PointCoord); gl_FragColor=vec4(vC*t.rgb, t.a*vA*opacity); }",transparent:!0,depthWrite:!1,blending:n}),this.points=new $i(i,this.mat),this.points.frustumCulled=!1,Qt.add(this.points)}emit(e,t,n,i,r){if(this.n>=this.max)return;let o=this.n++;this.pos.set([e.x,e.y,e.z],o*3),this.vel.set([t.x,t.y,t.z],o*3),this.col.set([n.r,n.g,n.b],o*3),this.baseSize[o]=i,this.life[o]=this.maxLife[o]=r}update(e,t=.9,n=0){for(let r=0;r<this.n;r++){if(this.life[r]-=e,this.life[r]<=0){this._kill(r),r--;continue}let o=r*3,a=Math.pow(t,e*60);this.vel[o]*=a,this.vel[o+1]=this.vel[o+1]*a-n*e,this.vel[o+2]*=a,this.pos[o]+=this.vel[o]*e,this.pos[o+1]+=this.vel[o+1]*e,this.pos[o+2]+=this.vel[o+2]*e;let l=this.life[r]/this.maxLife[r];this.alpha[r]=l,this.size[r]=this.baseSize[r]*(.4+.6*l)}for(let r=this.n;r<this.max;r++)this.alpha[r]=0;let i=this.points.geometry.attributes;i.position.needsUpdate=i.color.needsUpdate=i.size.needsUpdate=i.alpha.needsUpdate=!0,this.points.geometry.setDrawRange(0,this.n)}_kill(e){let t=--this.n;if(e!==t){for(let n of[this.pos,this.vel,this.col])for(let i=0;i<3;i++)n[e*3+i]=n[t*3+i];for(let n of[this.life,this.maxLife,this.baseSize,this.alpha,this.size])n[e]=n[t]}}clear(){this.n=0}},cd=class{constructor(e=90){this.n=e;let t=new at;this.p=new Float32Array(e*6),this.seed=[],t.setAttribute("position",new it(this.p,3)),this.mat=new Zi({color:16777215,transparent:!0,opacity:0,blending:ci,depthWrite:!1}),this.lines=new Es(t,this.mat),this.lines.frustumCulled=!1,Ct.add(this.lines);for(let n=0;n<e;n++)this.seed.push(this._spawn({},!0))}_spawn(e,t){let n=Math.random()*Math.PI*2,i=2.2+Math.random()*5;return e.x=Math.cos(n)*i,e.y=Math.sin(n)*i*.65,e.z=t?-Math.random()*60:-60,e}update(e,t,n){this.mat.opacity=n*.35;for(let i=0;i<this.n;i++){let r=this.seed[i];r.z+=t*e*1.6,r.z>0&&this._spawn(r);let o=1.5+t*.06;this.p.set([r.x,r.y,r.z,r.x,r.y,r.z-o],i*6)}this.lines.geometry.attributes.position.needsUpdate=!0}},hd=class{constructor(e){this.cfg=e,this.n=ya?e.count>>1:e.count,this.box=new I(90,40,110);let t=new at;this.p=new Float32Array(this.n*3),this.ph=new Float32Array(this.n);for(let n=0;n<this.n;n++)this.p[n*3]=Math.random()*this.box.x,this.p[n*3+1]=Math.random()*this.box.y,this.p[n*3+2]=Math.random()*this.box.z,this.ph[n]=Math.random()*6.28;this.world=new Float32Array(this.n*3),t.setAttribute("position",new it(this.world,3)),this.points=new $i(t,new Ji({color:e.color,size:e.size*6,map:Hr(),transparent:!0,depthWrite:!1,opacity:.85,sizeAttenuation:!0})),this.points.frustumCulled=!1,Qt.add(this.points),this.t=0}update(e,t,n){this.t+=e;let i=this.box,r=this.p,o=this.world;for(let a=0;a<this.n;a++){let l=a*3;r[l]+=(Math.sin(this.t*.7+this.ph[a])*.6-n.x)*e,r[l+1]+=(-this.cfg.fall+Math.cos(this.t*.9+this.ph[a])*.3-n.y)*e,r[l+2]+=-n.z*e,o[l]=t.x-i.x/2+((r[l]-t.x)%i.x+i.x*2)%i.x,o[l+1]=t.y-i.y/2+((r[l+1]-t.y)%i.y+i.y*2)%i.y,o[l+2]=t.z-i.z/2+((r[l+2]-t.z)%i.z+i.z*2)%i.z}this.points.geometry.attributes.position.needsUpdate=!0}},ud,_m=new I,jt={};function RM(){let s=CM("#b9b4aa",256);jt.barrier=new ht({color:Ne.barrier,roughness:.8,map:s}),jt.stripe=new ht({color:Ne.barrierStripe,roughness:.6}),jt.rock=new ht({color:Ne.rock,roughness:.9,flatShading:!0}),jt.ring=new ht({color:Ne.barrierStripe,roughness:.5}),jt.ringFrame=new ht({color:2830134,metalness:.9,roughness:.35}),jt.orb=new ht({color:16761415,metalness:.6,roughness:.25});let e=new Nn;e.moveTo(-.33,0),e.lineTo(.33,0),e.lineTo(.3,.08),e.lineTo(.14,.33),e.lineTo(.1,.85),e.lineTo(-.1,.85),e.lineTo(-.14,.33),e.lineTo(-.3,.08),e.closePath();let t=new As(e,{depth:3,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02,bevelSegments:2});t.translate(0,0,-1.5),t.rotateY(Math.PI/2),jt.barrierGeo=t;let n=new Ti(1,1),i=new I,r=n.attributes.position;for(let o=0;o<r.count;o++)i.fromBufferAttribute(r,o),i.multiplyScalar(1+mn(i.x*1.3+9,i.y*1.3+i.z,4)*.5),r.setXYZ(o,i.x,i.y*.8,i.z);n.computeVertexNormals(),jt.rockGeo=n,jt.orbGeo=new Bo(.24,0)}function CM(s,e){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d");n.fillStyle=s,n.fillRect(0,0,e,e);for(let r=0;r<e*e/3;r++){let o=Math.random()*90|0;n.fillStyle=`rgba(${o},${o},${o},0.18)`,n.fillRect(Math.random()*e,Math.random()*e,2,2)}let i=new qn(t);return i.wrapS=i.wrapT=Pn,i.colorSpace=St,i}var pi=[],Yr=0;function Gc(s,e,t,n=0){s.position.set(Kt(t)+e,Bt(t)+n,-t),s.rotation.y=Math.atan(Au(t))}function IM(s,e){for(;Yr<s;){let t=Yr,n=Math.random();if(n<.36){let i=Math.max(3.2,6.5-e*2.5),r=(Math.random()*2-1)*(Dt-i/2-.5),o=new Et;for(let a=-Dt+1.5;a<=Dt-1.4;a+=3.05){if(Math.abs(a-r)<i/2+1.5)continue;let l=new Ge(jt.barrierGeo,jt.barrier);l.castShadow=l.receiveShadow=!0,l.position.x=a,o.add(l);let c=new Ge(new fn(2.9,.08,.02),jt.stripe);c.position.set(a,.62,.115),o.add(c)}Gc(o,0,t),Qt.add(o),pi.push({type:"barrier",s:t,gapC:r,gapW:i,mesh:o,hit:!1})}else if(n<.6){let i=1+(Math.random()<e?1:0);for(let r=0;r<i;r++){let o=1.3+Math.random()*1.2,a=(Math.random()*2-1)*(Dt-2),l=new Ge(jt.rockGeo,jt.rock);l.castShadow=l.receiveShadow=!0,l.scale.set(o,o,o),Gc(l,a,t+r*9,o*.45),l.rotation.set(Math.random(),Math.random()*6,Math.random()),Qt.add(l),pi.push({type:"rock",s:t+r*9,u:a,rad:o,mesh:l})}}else if(n<.8){let i=(Math.random()*2-1)*(Dt-3),r=new Et,o=new Ge(new es(2.1,.1,12,48),jt.ring),a=new Ge(new es(2.3,.14,8,48),jt.ringFrame);o.position.y=a.position.y=2.3,r.add(a,o),Gc(r,i,t),Qt.add(r),pi.push({type:"ring",s:t,u:i,mesh:r,done:!1,ring:o})}if(Math.random()<.7){let i=(Math.random()*2-1)*5,r=2+Math.random()*3,o=Math.random()*6;for(let a=0;a<7;a++){let l=t+22+a*5,c=i+Math.sin(o+a*.6)*r,h=new Ge(jt.orbGeo,jt.orb);Gc(h,c,l,1),Qt.add(h),pi.push({type:"orb",s:l,u:c,mesh:h})}}Yr+=Math.max(34,70-e*34)+Math.random()*30}}function dd(s=1/0){for(let e=pi.length-1;e>=0;e--)pi[e].s<s&&(Qt.remove(pi[e].mesh),pi.splice(e,1))}var It={hud:document.getElementById("hud"),speed:document.getElementById("speed"),dist:document.getElementById("dist"),score:document.getElementById("score"),flow:document.getElementById("flowfill"),flowWrap:document.getElementById("flow"),mult:document.getElementById("mult"),pop:document.getElementById("pops"),menu:document.getElementById("menu"),over:document.getElementById("over"),best:document.getElementById("best"),final:document.getElementById("final"),finalBest:document.getElementById("finalbest"),shards:document.getElementById("shards"),finalShards:document.getElementById("finalshards"),revive:document.getElementById("revive"),newbest:document.getElementById("newbest"),loading:document.getElementById("loading")},Jc={get(s,e){try{let t=localStorage.getItem("hoverline."+s);return t==null?e:JSON.parse(t)}catch{return e}},set(s,e){try{localStorage.setItem("hoverline."+s,JSON.stringify(e))}catch{}}},D={mode:"loading",s:0,u:0,vu:0,v:0,flow:0,mult:1,score:0,shards:0,drift:0,driftHeld:0,boost:0,time:0,shake:0,hit:0,crashT:0,revived:!1,best:Jc.get("best."+Ne.id,0),bank:Jc.get("shards",0),hover:0,yaw:0,camPos:new I,camLook:new I,slowmo:1,lastSteer:0,combo:0},Rt={left:0,right:0,drift:!1,touches:new Map,pointerX:null},Jt=new Oc,Bi={cg:null};function fd(s,e=""){let t=document.createElement("div");t.className="pop "+e,t.textContent=s,It.pop.appendChild(t),setTimeout(()=>t.remove(),1100)}function Zr(s=!1){s?(D.revived=!0,D.v=30,dd(D.s+60),Yr=Math.max(Yr,D.s+120),D.u=0):(D.s=0,D.u=0,D.score=0,D.shards=0,D.flow=.2,D.mult=1,D.revived=!1,D.time=0,dd(),Yr=260,qr.reset(),qr.prime(0),D.v=30),D.vu=0,D.boost=0,D.drift=0,D.driftHeld=0,D.hit=0,D.crashT=0,D.slowmo=1,D.combo=0,At.root.visible=!0,At.tilt.rotation.set(0,0,0),At.tilt.position.set(0,0,0),D.mode="play",It.menu.classList.add("hidden"),It.over.classList.add("hidden"),It.hud.classList.remove("hidden"),Jt.start();try{Bi.cg?.game.gameplayStart()}catch{}}function xm(s){if(D.mode!=="play"||Kr.has("god"))return;D.mode="crash",D.crashT=0,D.hit=1,D.shake=1.2,Jt.crash();let e=At.root.position;for(let t=0;t<80;t++)Xr.emit(e,new I((Math.random()-.5)*18,Math.random()*10,(Math.random()-.5)*18-D.v*.3),new ue(1,.55+Math.random()*.3,.2),.25,.6+Math.random()*.6),Ma.emit(e,new I((Math.random()-.5)*10,Math.random()*6,(Math.random()-.5)*10),new ue(.1,.9,1),.6,.8);try{Bi.cg?.game.gameplayStop()}catch{}}function PM(){D.mode="over";let s=Math.floor(D.score),e=s>D.best;e&&(D.best=s,Jc.set("best."+Ne.id,s)),D.bank+=D.shards,Jc.set("shards",D.bank),It.final.textContent=s.toLocaleString(),It.finalBest.textContent=D.best.toLocaleString(),It.finalShards.textContent="+"+D.shards,It.newbest.classList.toggle("hidden",!e),It.revive.classList.toggle("hidden",D.revived||!Bi.cg),It.over.classList.remove("hidden"),It.hud.classList.add("hidden"),Jt.stop()}var Zt=new I,ls=new I,Wr=new I,LM=new I,NM=new I(0,1,0),DM=new ue(.35,.3,.28),vm=new ue(1,.55,.15),UM=new ue(1,.75,.2),Xr,Ma,Tm,$c,ym=.016;function Em(s,e=s){ym=e,D.time+=s;let t=D.mode==="play",n=Math.min(1,D.s/6e3);if(D.mode==="menu"&&(D.v=30,D.s+=D.v*s,D.u=Math.sin(D.time*.5)*4,D.vu=Math.cos(D.time*.5)*2),t){let f=Rt.right-Rt.left+(Rt.pointerX??0),m=Math.max(-1,Math.min(1,f)),v=34+42*n,p=11+D.v*.12;if(Rt.drift&&D.v>20){if(D.driftHeld+=s,D.drift+=((m>=0?1:-1)-D.drift)*Math.min(1,s*7),D.vu+=(m*p*.55-D.vu)*Math.min(1,s*1.8),D.v-=D.v*.18*s,D.flow=Math.min(1,D.flow+s*(.22+Math.abs(m)*.25)*(D.v/40)),Math.random()<.9){let S=At.root.position;Zt.set(S.x,S.y-.5,S.z),Xr.emit(Zt,ls.set((Math.random()-.5)*4-D.drift*3,Math.random()*2.5,6+Math.random()*6),vm,.14,.35)}Jt.setDrift(1)}else{if(D.driftHeld>.3&&D.flow>.12){let S=12+34*D.flow;D.v+=S,D.boost=1,D.shake=.5,D.mult=Math.min(8,D.mult+(D.flow>.8?2:1)),fd(D.flow>.8?"MAX FLOW BOOST!":"BOOST",D.flow>.8?"big":""),D.score+=Math.floor(200*D.flow)*D.mult,Jt.boost(D.flow),D.flow=0}D.driftHeld=0,D.drift+=(0-D.drift)*Math.min(1,s*5),D.vu+=(m*p-D.vu)*Math.min(1,s*6),D.flow=Math.min(1,D.flow+Math.abs(D.vu)/p*s*.06),Jt.setDrift(0)}D.v+=(v-D.v)*s*(D.v>v?.35:.5),D.boost=Math.max(0,D.boost-s*.7),D.s+=D.v*s,D.u+=D.vu*s;let M=Dt-.7;if(Math.abs(D.u)>M){D.u=Math.sign(D.u)*M,Math.abs(D.vu)>3&&(D.v*=1-s*1.5,D.shake=Math.max(D.shake,.25),Jt.scrape()),Zt.copy(At.root.position),Zt.x+=Math.sign(D.u)*.4;for(let S=0;S<3;S++)Xr.emit(Zt,ls.set(-Math.sign(D.u)*Math.random()*3,Math.random()*3,8),vm,.12,.3);D.vu*=.5}D.score+=D.v*s*.5*D.mult,D.combo=Math.max(0,D.combo-s),D.combo<=0&&D.mult>1&&(D.mult=Math.max(1,D.mult-s*.25));for(let S of pi){let _=S.s-D.s;if(S.type==="barrier"){if(!S.hit&&_<.4&&_>-.8){if(Math.abs(D.u-S.gapC)>S.gapW/2-.35){xm("barrier");break}S.hit=!0,S.gapW/2-Math.abs(D.u-S.gapC)<1&&Mm()}}else if(S.type==="rock"){if(Math.abs(_)<S.rad*.7){let b=Math.abs(D.u-S.u);if(b<S.rad*.8+.3){xm("rock");break}!S.near&&b<S.rad+1.4&&(S.near=!0,Mm())}}else if(S.type==="ring"){if(!S.done&&_<0&&_>-2){S.done=!0;let b=Math.abs(D.u-S.u);if(b<2){let E=b<.7;D.v+=E?14:8,D.boost=1,D.flow=Math.min(1,D.flow+(E?.35:.2)),D.score+=(E?500:200)*D.mult,D.combo=3,D.mult=Math.min(8,D.mult+(E?1:.5)),fd(E?"PERFECT LINE":"BOOST GATE",E?"big":""),Jt.ring(E),E&&(D.slowmo=.35)}}}else if(S.type==="orb"&&!S.taken&&Math.abs(_)<1.3&&Math.abs(D.u-S.u)<1.3){S.taken=!0,S.mesh.visible=!1,D.shards++,D.score+=25*D.mult,D.flow=Math.min(1,D.flow+.03),Jt.orb();for(let b=0;b<8;b++)Xr.emit(S.mesh.position,ls.set((Math.random()-.5)*6,Math.random()*5,(Math.random()-.5)*6),UM,.18,.45)}}}D.mode==="crash"&&(D.crashT+=s,D.v*=Math.pow(.2,s),D.s+=D.v*s,At.tilt.rotation.x+=s*8,At.tilt.rotation.z+=s*5,At.tilt.position.y+=s*(3-D.crashT*9),D.crashT>1.6&&PM()),D.mode==="over"&&(D.v*=Math.pow(.3,s),D.s+=D.v*s),D.slowmo+=(1-D.slowmo)*Math.min(1,s*1.6),D.hit=Math.max(0,D.hit-s*1.2),D.shake=Math.max(0,D.shake-s*2),IM(D.s+900,n),dd(D.s-30),qr.update(D.s);for(let f of pi)f.type==="orb"&&(f.mesh.rotation.y+=s*3),f.type==="ring"&&(f.ring.rotation.z+=s*1.5);let i=D.s;Wr.set(Au(i),qp(i),-1).normalize(),LM.crossVectors(Wr,NM).normalize(),D.hover=.55+Math.sin(D.time*5.3)*.05+Math.sin(D.time*11.7)*.02;let r=At.root.position.set(Kt(i)+D.u,Bt(i)+D.hover,-i);if(Zt.copy(r).sub(Wr),At.root.lookAt(Zt),D.mode!=="crash"){let f=-D.vu/16;At.tilt.rotation.z+=(f*.55-At.tilt.rotation.z)*Math.min(1,s*8),At.tilt.rotation.y+=(D.drift*-.9-At.tilt.rotation.y)*Math.min(1,s*8),At.tilt.rotation.x=Math.sin(D.time*3.1)*.02;let m=.35+Math.min(1,D.v/70)*.45+(Rt.drift&&D.mode==="play"?.25:0)+D.boost*.15;Zc?Zc.update(ym,At.tilt,Math.min(1,m),-f,Math.abs(D.drift),Math.min(1,D.v/70)):At.pose(s,m,-f,D.drift,Math.min(1,D.v/70))}if(D.mode==="play"||D.mode==="menu"){for(let f of At.pods){f.getWorldPosition(Zt);let m=2+Math.floor(D.boost*4);for(let v=0;v<m;v++)Ma.emit(Zt,ls.set((Math.random()-.5)*1.2,-1.5-Math.random(),(Math.random()-.5)*1.2).addScaledVector(Wr,-D.v*.15),DM,.16+D.boost*.18,.18+Math.random()*.12)}Math.random()<.6&&(Zt.set(r.x+(Math.random()-.5)*1.2,Bt(i)+.1,r.z+1),$c.emit(Zt,ls.set((Math.random()-.5)*3,.6+Math.random(),4),new ue(Ne.skyHorizon),1.6,.8))}Ma.update(s,.92),Xr.update(s,.96,18),$c.update(s,.95,-.5);let o=Math.min(1.4,D.v/70),a=3.4+o*1,l=1.55+o*.15,c=i+10;Zt.set(r.x,r.y,r.z).addScaledVector(Wr,-a),Zt.y=Math.max(Zt.y,Bt(i-a)+l)+0,Zt.y=r.y+l,ls.set(Kt(c)+D.u*.75,Bt(c)+1.25,-c);let h=Math.min(1,s*7);D.camPos.lengthSq()===0&&(D.camPos.copy(Zt),D.camLook.copy(ls)),D.camPos.lerp(Zt,h),D.camLook.lerp(ls,h),Ct.position.copy(D.camPos);let u=D.shake*D.shake*.35;if(Ct.position.x+=(Math.random()-.5)*u,Ct.position.y+=(Math.random()-.5)*u,gm){let f=gm;Ct.position.copy(r).add(Zt.set(Math.sin(f)*3.2,1,Math.cos(f)*3.2)),D.camLook.copy(r).y+=.9}Ct.lookAt(D.camLook),Ct.rotateZ(-D.vu*.006-D.drift*.04);let d=Ct.userData.baseFov+o*16+D.boost*10;Ct.fov+=(d-Ct.fov)*Math.min(1,s*3),Ct.updateProjectionMatrix(),bm.position.copy(Ct.position),ld.group.position.set(Ct.position.x,Bt(i),Ct.position.z),ld.cloudMat.uniforms.t.value=D.time,mi.target.position.copy(r),Kc.target.position.copy(r),Kc.position.copy(Ct.position).add(Zt.set(0,3,0)),mi.position.copy(r).addScaledVector(Nu,200),ud&&(_m.copy(Wr).multiplyScalar(-0),ud.update(s,Ct.position,_m)),Tm.update(s,D.v,Math.max(0,o-.75)*2+D.boost),qc.uniforms.uSpeed.value=Math.max(0,o-.9)*.8+D.boost*.6,qc.uniforms.uHit.value=D.hit,qc.uniforms.uTime.value=D.time,pd.strength=.2+D.boost*.1,Jt.update(D.v,D.boost),t&&(It.speed.textContent=Math.round(D.v*3.6),It.dist.textContent=Math.floor(D.s)+" m",It.score.textContent=Math.floor(D.score).toLocaleString(),It.flow.style.width=(D.flow*100).toFixed(1)+"%",It.flowWrap.classList.toggle("full",D.flow>.8),It.mult.textContent="x"+Math.floor(D.mult),It.mult.classList.toggle("hot",D.mult>=3),It.shards.textContent=D.shards)}function Mm(){D.flow=Math.min(1,D.flow+.15),D.score+=150*D.mult,D.combo=3,D.mult=Math.min(8,D.mult+.5),fd("CLOSE CALL","near"),Jt.near()}var jc={ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right"};addEventListener("keydown",s=>{if(jc[s.code]&&(Rt[jc[s.code]]=1),s.code==="Space"||s.code==="ShiftLeft"||s.code==="ShiftRight"||s.code==="ArrowDown"||s.code==="KeyS"){if(s.preventDefault(),D.mode==="menu"||D.mode==="over"){s.code==="Space"&&!s.repeat&&Zr();return}Rt.drift=!0}s.code==="KeyR"&&D.mode==="over"&&Zr(),s.code==="KeyM"&&Jt.toggle()});addEventListener("keyup",s=>{jc[s.code]&&(Rt[jc[s.code]]=0),["Space","ShiftLeft","ShiftRight","ArrowDown","KeyS"].includes(s.code)&&(Rt.drift=!1)});function gd(){let s=0,e=0;for(let t of Rt.touches.values())t<innerWidth/2?s++:e++;Rt.left=s&&!e?1:0,Rt.right=e&&!s?1:0,Rt.drift=s>0&&e>0}Hs.addEventListener("pointerdown",s=>{if(Jt.unlock(),D.mode==="play"){if(s.pointerType==="mouse"){(s.button===0||s.button===2)&&(Rt.drift=!0);return}Rt.touches.set(s.pointerId,s.clientX),gd()}});Hs.addEventListener("pointermove",s=>{s.pointerType==="mouse"&&D.mode==="play"&&document.pointerLockElement!==Hs&&(Rt.mouseActive&&(Rt.pointerX=Math.max(-1,Math.min(1,(s.clientX/innerWidth-.5)*2.6))),Rt.mouseActive=!0),Rt.touches.has(s.pointerId)&&(Rt.touches.set(s.pointerId,s.clientX),gd())});var wm=s=>{if(s.pointerType==="mouse"){Rt.drift=!1;return}Rt.touches.delete(s.pointerId),gd()};Hs.addEventListener("pointerup",wm);Hs.addEventListener("pointercancel",wm);Hs.addEventListener("contextmenu",s=>s.preventDefault());addEventListener("keydown",()=>{Rt.pointerX=null,Rt.mouseActive=!1},!0);document.getElementById("play").addEventListener("click",()=>{Jt.unlock(),Zr()});document.getElementById("again").addEventListener("click",()=>Zr());It.revive.addEventListener("click",()=>{Bi.cg&&Bi.cg.ad.requestAd("rewarded",{adStarted:()=>Jt.mute(!0),adFinished:()=>{Jt.mute(!1),Zr(!0)},adError:()=>{Jt.mute(!1),It.revive.classList.add("hidden")}})});document.addEventListener("visibilitychange",()=>{document.hidden?(Yc=0,Jt.mute(!0)):Jt.mute(!1)});var Yc=0,Wc=1/60,Xc=0,ks=Fn.getPixelRatio(),Sm=Fn.getPixelRatio(),FM=.6;function OM(s){if(Wc+=(s-Wc)*.05,Xc+=s,Xc<1.5)return;let e=ks;Wc>1/50?e=Math.max(FM,ks*.85):Wc<1/58&&ks<Sm&&(e=Math.min(Sm,ks*1.08)),Math.abs(e-ks)>.02?(ks=e,Fn.setPixelRatio(ks),md(),Xc=0):Xc=1}function Am(s){requestAnimationFrame(Am);let e=Yc?Math.min(.05,(s-Yc)/1e3):.016;Yc=s,Em(e*D.slowmo,e),Jr.render(),OM(e)}async function BM(){try{window.CrazyGames?.SDK&&(await window.CrazyGames.SDK.init(),Bi.cg=window.CrazyGames.SDK,Bi.cg.game.loadingStart())}catch{Bi.cg=null}md();let s=await new kc().loadAsync("assets/rider.glb").catch(()=>null);bm=am(Qt,Fn),ld=lm(Qt),Qt.environmentIntensity=.9;let e=tm();qr=new Fc(Qt,e),RM(),At=nm(),Qt.add(At.root),At.root.traverse(n=>{n.isMesh&&(n.castShadow=!0)}),s&&(Zc=om(s,.11),At.rider.visible=!1,At.tilt.add(Zc.object)),Ma=new va(1200,Hr("rgba(255,255,255,0.5)"),Pi),Ma.mat.uniforms.opacity.value=.18,Xr=new va(800,Hr()),$c=new va(300,Hr("rgba(255,255,255,0.5)"),Pi),$c.mat.uniforms.opacity.value=.12,Qt.add(Ct),Tm=new cd,ud=new hd(Ne.air),qr.prime(0),Fn.compile(Qt,Ct),D.mode="menu",It.best.textContent=D.best.toLocaleString();let t=document.getElementById("tracks");for(let n of wu){let i=document.createElement("button");i.className="trk"+(n.id===Ne.id?" on":""),i.innerHTML=`<b>${n.name}</b><span>${n.blurb}</span>`,i.style.setProperty("--a",n.skyHorizon),i.style.setProperty("--b",n.skyTop),i.addEventListener("click",()=>{if(n.id!==Ne.id){try{localStorage.setItem("hoverline.track",n.id)}catch{}location.hash=n.id,location.reload()}}),t.appendChild(i)}It.loading.classList.add("hidden"),It.menu.classList.remove("hidden");try{Bi.cg?.game.loadingStop()}catch{}Kr.has("autoplay")&&Zr(),requestAnimationFrame(Am),window.__G=D,window.__input=Rt,window.__step=(n,i=1/60)=>{for(let r=0;r<n;r++)Em(i)},window.__dbg=()=>({cam:Ct.position.toArray().map(n=>n|0),p:At.root.position.toArray().map(n=>n|0),ch:qr.chunks.map(n=>n.index),fov:Ct.fov|0})}BM();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
