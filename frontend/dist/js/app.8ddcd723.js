(function(t){function e(e){for(var o,s,r=e[0],a=e[1],l=e[2],d=0,b=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&b.push(i[s][0]),i[s]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);u&&u(e);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,r=1;r<n.length;r++){var a=n[r];0!==i[a]&&(o=!1)}o&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},c=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=a;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"05d3":function(t,e,n){"use strict";n("8174")},"0948":function(t,e,n){"use strict";n("0dec")},"0abb":function(t,e,n){},"0dec":function(t,e,n){},1149:function(t,e,n){"use strict";n("2466")},"15f0":function(t,e,n){"use strict";n("5733")},"1dad":function(t,e,n){},2466:function(t,e,n){},2804:function(t,e,n){},"2cb7":function(t,e,n){},"2dfc":function(t,e,n){"use strict";n("539c")},"30d0":function(t,e,n){"use strict";n("0abb")},"31fa":function(t,e,n){"use strict";n("40bc")},"3d5e":function(t,e,n){"use strict";n("2804")},"3dac":function(t,e,n){},"40bc":function(t,e,n){},4878:function(t,e,n){},5139:function(t,e,n){"use strict";n("8bb2")},"539c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e),n.d(e,"db",(function(){return Pn}));n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7"),n("159b"),n("b0c0");var o=n("7a23"),i={class:"app"};function c(t,e,n,c,s,r){var a=Object(o["z"])("router-view");return Object(o["t"])(),Object(o["g"])("div",i,[Object(o["k"])(a)])}var s=n("852e"),r=n.n(s),a={mounted:function(){r.a.get("userId")&&(this.$store.commit("setUserId",r.a.get("userId")),this.$store.commit("setAuth",!0))}},l=(n("6121"),n("d959")),u=n.n(l);const d=u()(a,[["render",c]]);var b=d,h={class:"button"};function p(t,e,n,i,c,s){return Object(o["t"])(),Object(o["g"])("button",h,[Object(o["y"])(t.$slots,"default")])}var g={name:"my-button"};n("93b9");const f=u()(g,[["render",p]]);var v=f,m=["value"];function O(t,e,n,i,c,s){return Object(o["t"])(),Object(o["g"])("input",{value:n.modelValue,onInput:e[0]||(e[0]=function(){return s.updateValue&&s.updateValue.apply(s,arguments)}),class:"input"},null,40,m)}n("a9e3");var j={name:"my-input",props:{modelValue:[String,Number]},methods:{updateValue:function(t){this.$emit("update:modelValue",t.target.value)}}};n("6b7d");const y=u()(j,[["render",O]]);var V=y;function k(t,e,n,i,c,s){return n.show?(Object(o["t"])(),Object(o["g"])("div",{key:0,class:"dialog",onClick:e[1]||(e[1]=function(){return s.hideDialog&&s.hideDialog.apply(s,arguments)})},[Object(o["h"])("div",{onClick:e[0]||(e[0]=Object(o["L"])((function(){}),["stop"])),class:"dialog__content"},[Object(o["y"])(t.$slots,"default")])])):Object(o["f"])("",!0)}var _={name:"my-dialog",props:{show:{type:Boolean,default:!1}},methods:{hideDialog:function(t){this.$emit("update:show",!1)}}};n("3d5e");const w=u()(_,[["render",k]]);var I=w,C=Object(o["h"])("option",{disabled:"",value:""},"Выберите из списка",-1),$=["value"];function S(t,e,n,i,c,s){return Object(o["K"])((Object(o["t"])(),Object(o["g"])("select",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return n.modelValue=t}),onChange:e[1]||(e[1]=function(){return s.changeOption&&s.changeOption.apply(s,arguments)})},[C,(Object(o["t"])(!0),Object(o["g"])(o["a"],null,Object(o["x"])(n.options,(function(t){return Object(o["t"])(),Object(o["g"])("option",{key:t.value,value:t.value},Object(o["C"])(t.name),9,$)})),128))],544)),[[o["G"],n.modelValue]])}var x={name:"my-select",props:{modelValue:{type:String},options:{type:Array,default:function(){return[]}}},methods:{changeOption:function(t){this.$emit("update:modelValue",t.target.value)}}};const L=u()(x,[["render",S]]);var z=L,M={class:"nav__btns"},U={key:2},q=Object(o["j"])("Вход"),E=Object(o["j"])("Регистрация");function A(t,e,n,i,c,s){var r=Object(o["z"])("Icon"),a=Object(o["z"])("my-button"),l=Object(o["z"])("navbar");return Object(o["t"])(),Object(o["g"])("div",null,[Object(o["k"])(l,null,{default:Object(o["J"])((function(){return[Object(o["k"])(a,{onClick:e[0]||(e[0]=function(e){return t.$router.push("/")}),class:"logo"},{default:Object(o["J"])((function(){return[Object(o["k"])(r,{class:"icon",icon:c.icons.vectorlogozoneIcon},null,8,["icon"])]})),_:1}),Object(o["K"])(Object(o["h"])("div",M,[!0===t.$store.state.isSignedIn&&!1===c.profilePage?(Object(o["t"])(),Object(o["e"])(a,{key:0,onClick:e[1]||(e[1]=function(e){return t.$router.push("/profile/".concat(t.$store.getters.userId))}),class:"logo"},{default:Object(o["J"])((function(){return[Object(o["k"])(r,{class:"profile__icon",icon:c.icons.profileIcon},null,8,["icon"])]})),_:1})):!0===c.profilePage?(Object(o["t"])(),Object(o["e"])(a,{key:1,class:"logo",onClick:s.logOut},{default:Object(o["J"])((function(){return[Object(o["k"])(r,{class:"profile__icon",icon:c.icons.bxLogOut},null,8,["icon"])]})),_:1},8,["onClick"])):(Object(o["t"])(),Object(o["g"])("div",U,[Object(o["k"])(a,{onClick:e[2]||(e[2]=function(e){return t.$router.push("/login")})},{default:Object(o["J"])((function(){return[q]})),_:1}),Object(o["k"])(a,{onClick:e[3]||(e[3]=function(e){return t.$router.push("/register")})},{default:Object(o["J"])((function(){return[E]})),_:1})]))],512),[[o["H"],!0===n.isVisible]])]})),_:1})])}n("caad"),n("2532");var T=n("5779"),P=n("c674"),D=n("024b"),R=n("c0f5"),B={components:{Icon:T["a"],MyButton:v},props:{isVisible:{type:Boolean,require:!1,default:!0}},data:function(){return{icons:{vectorlogozoneIcon:P["a"],profileIcon:D["a"],bxLogOut:R["a"]},profilePage:!1}},methods:{changeStatus:function(){this.$emit("changeStatus")},logOut:function(){this.$store.commit("setAuth",!1),this.$router.push("/"),r.a.remove("userId"),r.a.remove("loadedUserInfo")}},mounted:function(){this.profilePage=this.$route.path.includes("profile")}};n("31fa");const J=u()(B,[["render",A]]);var N=J,K={class:"toggle__container"},H={id:"toggle__left"},F={id:"toggle__right"};function W(t,e,n,i,c,s){return Object(o["t"])(),Object(o["g"])("div",K,[Object(o["h"])("p",H,Object(o["C"])(n.leftLabel),1),Object(o["h"])("input",{type:"checkbox",class:"toggle",checked:"",onClick:e[0]||(e[0]=function(){return s.change_status&&s.change_status.apply(s,arguments)})}),Object(o["h"])("p",F,Object(o["C"])(n.rightLabel),1)])}var G={props:{modelValue:{type:String,require:!0},leftLabel:{type:String,require:!1,default:""},rightLabel:{type:String,require:!1,default:""}},methods:{change_status:function(t){document.querySelector("#toggle__left").classList.toggle("bold"),document.querySelector("#toggle__right").classList.toggle("bold"),this.$emit("update:modelValue","left"==this.modelValue?"right":"left")}},mounted:function(){document.querySelector(".toggle").checked?(document.querySelector("#toggle__right").classList.add("bold"),this.$emit("update:modelValue","right")):(document.querySelector("#toggle__left").classList.add("bold"),this.$emit("update:modelValue","left"))}};n("92e4");const Q=u()(G,[["render",W]]);var X=Q,Y=[v,V,I,z,N,X],Z={class:"observer hidden"};function tt(t,e,n,i,c,s){var r=Object(o["z"])("my-navbar"),a=Object(o["z"])("votings-list"),l=Object(o["A"])("intersection");return Object(o["t"])(),Object(o["g"])("div",null,[Object(o["h"])("header",null,[Object(o["k"])(r,{onChangeStatus:e[0]||(e[0]=function(e){return t.$store.commit("changeAuthStatus")})})]),Object(o["h"])("main",null,[Object(o["K"])(Object(o["k"])(a,{votings:t.votings},null,8,["votings"]),[[o["H"],!1===t.isVotingsLoading]]),Object(o["K"])(Object(o["h"])("div",Z,null,512),[[l,t.loadVotings,c.limit]]),Object(o["K"])(Object(o["h"])("div",null,"Идёт загрузка...",512),[[o["H"],!0===t.isVotingsLoading]])])])}var et=n("5530"),nt={key:0},ot={key:1};function it(t,e,n,i,c,s){var r=Object(o["z"])("voting-item");return n.votings.length>0?(Object(o["t"])(),Object(o["g"])("div",nt,[Object(o["k"])(o["b"],{name:"user-list"},{default:Object(o["J"])((function(){return[(Object(o["t"])(!0),Object(o["g"])(o["a"],null,Object(o["x"])(n.votings,(function(t){return Object(o["t"])(),Object(o["e"])(r,{key:t.id,voting:t,isCreator:n.isCreator,onDeleteVoting:s.deleteVoting},null,8,["voting","isCreator","onDeleteVoting"])})),128))]})),_:1})])):(Object(o["t"])(),Object(o["g"])("h2",ot," Тут ничего нет "))}var ct={class:"voting"};function st(t,e,n,i,c,s){var r=Object(o["z"])("Icon");return Object(o["t"])(),Object(o["g"])("div",ct,[Object(o["h"])("div",{onClick:e[0]||(e[0]=function(e){return t.$router.push("/voting/".concat(n.voting.id))})},[Object(o["h"])("b",null,Object(o["C"])(n.voting.title),1)]),Object(o["K"])(Object(o["h"])("div",null,[Object(o["k"])(r,{class:"analytics",icon:c.icons.analyticsIcon,onClick:e[1]||(e[1]=function(e){return t.$router.push("/results/".concat(n.voting.id))})},null,8,["icon"]),Object(o["k"])(r,{class:"analytics",icon:c.icons.trashIcon,onClick:s.deleteVoting},null,8,["icon","onClick"])],512),[[o["H"],!0===n.isCreator]])])}var rt=n("9d96"),at=n("4fef"),lt={components:{Icon:T["a"]},props:{voting:{type:Object,require:!0},isCreator:{type:Boolean,require:!0}},data:function(){return{icons:{analyticsIcon:rt["a"],trashIcon:at["a"]}}},methods:{deleteVoting:function(){this.$emit("deleteVoting",this.voting.id)}},mounted:function(){this.voting.title=this.voting.title.toUpperCase()}};n("15f0");const ut=u()(lt,[["render",st]]);var dt=ut,bt={components:{VotingItem:dt},props:{votings:{type:Array,require:!0},isCreator:{type:Boolean,require:!1,default:!1}},methods:{deleteVoting:function(t){this.$emit("deleteVoting",t)}}};n("1149");const ht=u()(bt,[["render",it]]);var pt=ht,gt=n("5502"),ft={components:{VotingsList:pt,MyDialog:I,MyButton:v,MySelect:z,MyInput:V,MyNavbar:N},data:function(){return{limit:10}},methods:Object(et["a"])(Object(et["a"])(Object(et["a"])({},Object(gt["c"])({setPage:"voting/setPage"})),Object(gt["b"])({fetchVotings:"voting/fetchVotings",loadVotings:"voting/loadVotings"})),{},{getRandomInt:function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}}),computed:Object(et["a"])({},Object(gt["d"])({votings:function(t){return t.voting.votings},isVotingsLoading:function(t){return t.voting.isVotingsLoading},page:function(t){return t.voting.page},totalPages:function(t){return t.voting.totalPages}})),mounted:function(){0==this.votings.length&&this.fetchVotings(this.limit)}};n("93d7");const vt=u()(ft,[["render",tt]]);var mt=vt;function Ot(t,e,n,i,c,s){var r=Object(o["z"])("my-navbar"),a=Object(o["z"])("router-view");return Object(o["t"])(),Object(o["g"])("div",null,[Object(o["h"])("header",null,[Object(o["k"])(r)]),Object(o["k"])(a)])}var jt={components:{MyNavbar:N}};const yt=u()(jt,[["render",Ot]]);var Vt=yt,kt=n("90ab"),_t=n.n(kt),wt={class:"profile__info"},It={class:"username"},Ct={class:"voting__line"},$t=Object(o["h"])("h2",{class:"voting-header"},"Мои голосования:",-1);function St(t,e,n,i,c,s){var r=Object(o["z"])("Icon"),a=Object(o["z"])("votings-list");return Object(o["t"])(),Object(o["g"])("main",null,[Object(o["h"])("div",wt,[Object(o["h"])("img",{class:"avatar",src:_t.a,onClick:e[0]||(e[0]=function(){return s.print&&s.print.apply(s,arguments)})}),Object(o["h"])("div",It,[Object(o["h"])("h2",null,Object(o["C"])(c.user.name),1),Object(o["h"])("h2",null,Object(o["C"])(c.user.surname),1)])]),Object(o["h"])("div",Ct,[$t,Object(o["h"])("button",{onClick:e[1]||(e[1]=function(e){return t.$router.push("/creation")}),class:"add-button"},[Object(o["k"])(r,{class:"addIcon",icon:c.icons.addIcon},null,8,["icon"])])]),Object(o["k"])(a,{votings:c.votings,isCreator:!0,onDeleteVoting:s.deleteVoting},null,8,["votings","onDeleteVoting"])])}n("e9c4"),n("d81d"),n("4de4"),n("bc3a");var xt=n("3145"),Lt={title:"Профиль",components:{VotingsList:pt,Icon:T["a"]},data:function(){return{user:{},icons:{addIcon:xt["a"]},votings:[],isLoading:!1,limit:4,page:1}},methods:{print:function(){console.log(this.user)},loadUsersInfo:function(){var t=this;Pn.collection("users").doc(this.id).get().then((function(e){var n=e.data();n?t.user=n:(t.$router.push("/404"),console.log("None")),r.a.set("loadedUserInfo",!0),r.a.set("userInfo",JSON.stringify(n))}))},fetchVotings:function(){var t=this;try{Pn.collection("votings").where("author","==",this.$store.state.userId).get().then((function(e){var n=e.docs.map((function(t){return Object.assign(Object(et["a"])({id:t.id},t.data()))}));t.votings=n}))}catch(e){console.log(e)}},deleteVoting:function(t){try{this.votings=this.votings.filter((function(e){return e.id!=t})),Pn.collection("votings").doc(t).delete()}catch(e){console.log(e)}}},mounted:function(){var t=r.a.get("loadedUserInfo");if(void 0==t)this.loadUsersInfo();else{var e=JSON.parse(r.a.get("userInfo"));void 0==e?this.loadUsersInfo():this.user=e}this.fetchVotings()},computed:{id:function(){return this.$route.params.id}}};n("05d3");const zt=u()(Lt,[["render",St]]);var Mt=zt,Ut=Object(o["h"])("h1",null,"Сейчас этой страницы нет, но она обязательно появится в будущем)",-1),qt=Object(o["h"])("img",{src:_t.a},null,-1),Et=Object(o["h"])("h2",null,"А пока держите капибар",-1),At=[Ut,qt,Et];function Tt(t,e,n,i,c,s){return Object(o["t"])(),Object(o["g"])("div",null,At)}var Pt={};n("30d0");const Dt=u()(Pt,[["render",Tt]]);var Rt=Dt,Bt={class:"sign"},Jt=Object(o["h"])("h1",{class:"sign-h"},"Войти",-1),Nt={class:"sign-p"},Kt={class:"sign-p"},Ht=Object(o["j"])("Забыли пароль?");function Ft(t,e,n,i,c,s){var r=this,a=Object(o["z"])("my-navbar"),l=Object(o["z"])("my-input"),u=Object(o["z"])("my-button");return Object(o["t"])(),Object(o["g"])("div",null,[Object(o["h"])("header",null,[Object(o["k"])(a,{isVisible:!1})]),Object(o["h"])("main",Bt,[Object(o["h"])("form",{onSubmit:e[4]||(e[4]=Object(o["L"])((function(){}),["prevent"]))},[Jt,Object(o["h"])("p",Nt,[Object(o["k"])(l,{modelValue:this.email,"onUpdate:modelValue":e[0]||(e[0]=function(t){return r.email=t}),type:"email",placeholder:"Почта",class:"input"},null,8,["modelValue"])]),Object(o["h"])("p",Kt,[Object(o["k"])(l,{modelValue:this.password,"onUpdate:modelValue":e[1]||(e[1]=function(t){return r.password=t}),type:"password",placeholder:"Пароль",class:"input sign-password"},null,8,["modelValue"])]),Object(o["h"])("div",null,[Object(o["k"])(u,{onClick:e[2]||(e[2]=function(e){return t.$router.push("/restore")}),class:"sign-trouble-button"},{default:Object(o["J"])((function(){return[Ht]})),_:1}),Object(o["h"])("input",{type:"submit",value:"Войти",class:"signIn-button",onClick:e[3]||(e[3]=function(){return s.submit&&s.submit.apply(s,arguments)})})])],32)])])}var Wt={title:"Вход",components:{MyNavbar:N,MyInput:V,MyButton:v},data:function(){return{email:"",password:""}},methods:{submit:function(){var t=this;""!==this.email&&""!==this.password&&Pn.collection("users").where("email","==",this.email.toLowerCase()).get().then((function(e){var n=e.docs.map((function(t){return Object.assign(Object(et["a"])({id:t.id},t.data()))}));if(0!==n.length)n[0]["password"]===t.password&&(t.$store.commit("setAuth",!0),t.$store.commit("setUserId",n[0].id),r.a.set("userId",n[0].id,{path:"/"}),t.$router.push("/profile/".concat(t.$store.state.userId)),t.email="",t.password="");else{var o=document.querySelectorAll("form > input");o.forEach((function(t){t.style.borderColor="#ff0000"}))}}))}}};const Gt=u()(Wt,[["render",Ft]]);var Qt=Gt,Xt={class:"sign"},Yt=Object(o["h"])("h1",{class:"sign-h"},"Восстановление пароля",-1),Zt={key:0,class:"sign-p"},te={key:1,class:"sign-p"};function ee(t,e,n,i,c,s){var r=this,a=Object(o["z"])("my-navbar"),l=Object(o["z"])("my-input");return Object(o["t"])(),Object(o["g"])("div",null,[Object(o["h"])("header",null,[Object(o["k"])(a,{isVisible:!1})]),Object(o["h"])("main",Xt,[Object(o["h"])("form",{onSubmit:e[4]||(e[4]=Object(o["L"])((function(){}),["prevent"]))},[Yt,!1===c.emailEntered?(Object(o["t"])(),Object(o["g"])("p",Zt,[Object(o["k"])(l,{modelValue:this.email,"onUpdate:modelValue":e[0]||(e[0]=function(t){return r.email=t}),type:"email",placeholder:"Почта",class:"input"},null,8,["modelValue"])])):(Object(o["t"])(),Object(o["g"])("p",te,[Object(o["k"])(l,{modelValue:this.password1,"onUpdate:modelValue":e[1]||(e[1]=function(t){return r.password1=t}),type:"password",placeholder:"Пароль",class:"input"},null,8,["modelValue"]),Object(o["k"])(l,{modelValue:this.password2,"onUpdate:modelValue":e[2]||(e[2]=function(t){return r.password2=t}),type:"password",placeholder:"Повторите пароль",class:"input"},null,8,["modelValue"])])),Object(o["h"])("div",null,[Object(o["h"])("input",{type:"submit",value:"Далее",onClick:e[3]||(e[3]=function(){return s.submit&&s.submit.apply(s,arguments)}),class:"signIn-button"})])],32)])])}var ne={components:{MyNavbar:N},data:function(){return{emailEntered:!1,email:"",password1:"",password2:"",documents:void 0}},methods:{submit:function(){var t=this;if(this.emailEntered){if(this.password1!=this.password2){var e=document.querySelectorAll("input[type='password']");return e.forEach((function(t){return t.style.borderColor="#ff0000"})),e[1].value="",void(e[1].placeholder="Пароли не совпадают")}console.log(this.documents[0]),Pn.collection("users").doc(this.documents[0].id).update(Object(et["a"])({password:this.password1},this.documents[0].data)),this.$store.commit("setAuth",!0),r.a.set("userID",this.documents[0].id),this.$router.push("/profile/".concat(this.documents[0].id))}else Pn.collection("users").where("email","==",this.email.toLowerCase()).get().then((function(e){t.documents=e.docs.map((function(t){return Object.assign(Object(et["a"])({id:t.id},t.data()))})),0===t.documents.length?(document.querySelector('input[type="email"]').placeholder="Такой почты не существует",document.querySelector('input[type="email"]').value=""):(document.querySelector('input[type="submit"]').value="Восстановить",t.emailEntered=!0)}))}}};const oe=u()(ne,[["render",ee]]);var ie=oe,ce={class:"sign",style:{"margin-top":"25px"}},se=Object(o["h"])("h1",{class:"sign-h"},"Регистрация",-1),re={class:"sign-p"},ae={class:"sign-p"},le={class:"sign-p"},ue={class:"sign-p"},de={class:"sign-p"},be=Object(o["i"])('<h2 class="sign-p">Пол:</h2><p class="sign-p inline"><input type="radio" name="sex" value="male" class="sign-radio" id="sex1"><label for="sex1">Мужчина</label></p><p class="sign-p inline"><input type="radio" name="sex" value="female" class="sign-radio" id="sex2"><label for="sex2">Женщина</label></p>',3);function he(t,e,n,i,c,s){var r=Object(o["z"])("my-navbar"),a=Object(o["z"])("my-input");return Object(o["t"])(),Object(o["g"])("div",null,[Object(o["h"])("header",null,[Object(o["k"])(r,{isVisible:!1})]),Object(o["h"])("main",ce,[se,Object(o["h"])("form",{onSubmit:e[5]||(e[5]=Object(o["L"])((function(){}),["prevent"]))},[Object(o["h"])("p",re,[Object(o["k"])(a,{modelValue:c.surname,"onUpdate:modelValue":e[0]||(e[0]=function(t){return c.surname=t}),placeholder:"Фамилия"},null,8,["modelValue"])]),Object(o["h"])("p",ae,[Object(o["k"])(a,{modelValue:c.name,"onUpdate:modelValue":e[1]||(e[1]=function(t){return c.name=t}),placeholder:"Имя"},null,8,["modelValue"])]),Object(o["h"])("p",le,[Object(o["k"])(a,{modelValue:c.email,"onUpdate:modelValue":e[2]||(e[2]=function(t){return c.email=t}),placeholder:"Email",type:"email"},null,8,["modelValue"])]),Object(o["h"])("p",ue,[Object(o["k"])(a,{modelValue:c.password1,"onUpdate:modelValue":e[3]||(e[3]=function(t){return c.password1=t}),placeholder:"Пароль",type:"password"},null,8,["modelValue"])]),Object(o["h"])("p",de,[Object(o["k"])(a,{modelValue:c.password2,"onUpdate:modelValue":e[4]||(e[4]=function(t){return c.password2=t}),placeholder:"Повторите пароль",type:"password"},null,8,["modelValue"])]),be,Object(o["k"])(a,{type:"submit",id:"signUp-button",onClick:s.submit,value:"Регистрация"},null,8,["onClick"])],32)])])}n("ac1f"),n("5319"),n("498a"),n("b64b");var pe={components:{MyInput:V,MyButton:v,MyNavbar:N},data:function(){return{email:"",password1:"",password2:"",name:"",surname:"",sex:""}},methods:{capitalize:function(t){return t.trim().toLowerCase().replace(/(?:^|\s|["'([{])+\S/g,(function(t){return t.toUpperCase()}))},clearField:function(){var t=this;Object.keys(this.$data).forEach((function(e){t.$data[e]=""})),document.querySelector("input[name='sex']:checked").checked=!1},submit:function(){var t=this;try{if(this.sex=document.querySelector("input[name='sex']:checked").value,this.name=this.capitalize(this.name),this.surname=this.capitalize(this.surname),this.password1!=this.password2){var e=document.querySelectorAll("input[type='password']");return e.forEach((function(t){return t.style.borderColor="#ff0000"})),e[1].value="",void(e[1].placeholder="Пароли не совпадают")}var n={name:this.name,surname:this.surname,email:this.email.toLowerCase(),password:this.password1,sex:this.sex};Pn.collection("users").where("email","==",n.email).get().then((function(t){var e=t.docs.map((function(t){return t.data()}));if(e){var n=document.querySelector("form input:nth-of-type(3)");n.style.borderColor="#ff0000",n.value="",n.placeholder="Данная почта уже используется"}})),Pn.collection("users").add(n).then((function(e){t.clearField(),t.$store.commit("setAuth",!0),t.$store.commit("setUserId",e.id),t.$router.push("/profile/".concat(e.id))}))}catch(o){return void console.log(o)}}}};const ge=u()(pe,[["render",he]]);var fe=ge;function ve(t,e,n,i,c,s){var r=Object(o["z"])("my-navbar"),a=Object(o["z"])("router-view");return Object(o["t"])(),Object(o["g"])("div",null,[Object(o["h"])("header",null,[Object(o["k"])(r,{onChangeStatus:e[0]||(e[0]=function(e){return t.$store.commit("changeAuthStatus")})})]),Object(o["h"])("button",{onClick:e[1]||(e[1]=function(e){return t.$router.go(-1)}),class:"button"}," ← Назад "),Object(o["k"])(a)])}var me={components:{MyNavbar:N}};const Oe=u()(me,[["render",ve]]);var je=Oe,ye={class:"main-voting"},Ve={class:"header-voting"},ke={id:"voting"},_e={key:0},we=["value"],Ie={key:1},Ce=["value"];function $e(t,e,n,i,c,s){var r=Object(o["z"])("my-dialog");return Object(o["t"])(),Object(o["g"])("div",ye,[Object(o["K"])(Object(o["h"])("div",null," Загрузка... ",512),[[o["H"],!0===c.isLoading]]),Object(o["K"])(Object(o["h"])("div",null,[Object(o["h"])("h2",Ve,Object(o["C"])(c.voting.title),1),Object(o["h"])("div",ke,[0==c.single?(Object(o["t"])(),Object(o["g"])("form",_e,[(Object(o["t"])(!0),Object(o["g"])(o["a"],null,Object(o["x"])(c.variants,(function(t){return Object(o["t"])(),Object(o["g"])("div",{key:t.id,class:"voting-div"},[Object(o["K"])(Object(o["h"])("input",{type:"checkbox",value:t.title,"onUpdate:modelValue":e[0]||(e[0]=function(t){return c.results=t}),class:"vote-button"},null,8,we),[[o["E"],c.results]]),Object(o["h"])("label",null,Object(o["C"])(t.title),1)])})),128)),Object(o["h"])("input",{type:"reset",value:"Проголосовать",onClick:e[1]||(e[1]=function(){return s.sendResults&&s.sendResults.apply(s,arguments)}),class:"signIn-button"})])):(Object(o["t"])(),Object(o["g"])("form",Ie,[(Object(o["t"])(!0),Object(o["g"])(o["a"],null,Object(o["x"])(c.variants,(function(t){return Object(o["t"])(),Object(o["g"])("div",{key:t.id,class:"voting-div"},[Object(o["K"])(Object(o["h"])("input",{type:"radio",value:t.title,"onUpdate:modelValue":e[2]||(e[2]=function(t){return c.results=t}),class:"vote-button"},null,8,Ce),[[o["F"],c.results]]),Object(o["h"])("label",null,Object(o["C"])(t.title),1)])})),128)),Object(o["h"])("input",{type:"reset",value:"Проголосовать",onClick:e[3]||(e[3]=function(){return s.sendResults&&s.sendResults.apply(s,arguments)}),class:"signIn-button"})]))]),Object(o["k"])(r,{show:c.isVoted,"onUpdate:show":e[5]||(e[5]=function(t){return c.isVoted=t})},{default:Object(o["J"])((function(){return[Object(o["j"])(Object(o["C"])(c.dialogWindowText)+" ",1),Object(o["h"])("button",{onClick:e[4]||(e[4]=function(e){return t.$router.push("/")})},"На главную")]})),_:1},8,["show"])],512),[[o["H"],!1===c.isLoading]])])}n("7db0");var Se=n("4f60"),xe={components:{MyButton:v,MyDialog:I},data:function(){return{voting:{},single:Boolean,variants:[],results:[],isLoading:!0,isVoted:!1,dialogWindowText:"Спасибо за ваш голос",votingRef:{}}},methods:{getVoting:function(t){var e=this;try{this.votingRef=Pn.collection("votings").doc(t),this.votingRef.get().then((function(t){var n=t.data();n["votedUsers"].includes(e.$store.state.userId)&&(e.dialogWindowText="Вы уже голосовали",e.showDialog()),e.voting=n,"single"==n["type"]?e.single=!0:e.single=!1;for(var o=0;o<n["options"].length;o++)e.variants.push({id:o,title:n["options"][o]});e.isLoading=!1}))}catch(n){console.log(n),this.$router.push("/404")}},sendResults:function(){var t=this;0!==this.results.length&&(this.single?this.voting["results"][this.variants.find((function(e){return e.title===t.results})).id]++:this.results.forEach((function(e){var n=t.variants.find((function(t){return t.title===e})).id;t.voting["results"][n]++})),this.votingRef.update({votedUsers:Se["a"].firestore.FieldValue.arrayUnion(this.$store.state.userId),results:this.voting["results"]}),console.log("results were sent: ",this.results),this.results=[],this.showDialog())},showDialog:function(){this.isVoted=!0,document.querySelector("#voting").setAttribute("disabled",!0),console.log("Disabled")}},computed:Object(et["a"])({},Object(gt["d"])({votings:function(t){return t.voting.votings}})),mounted:function(){this.getVoting(this.$route.params.id)}};n("5139");const Le=u()(xe,[["render",$e]]);var ze=Le;function Me(t,e,n,i,c,s){var r=Object(o["z"])("my-navbar"),a=Object(o["z"])("router-view");return Object(o["t"])(),Object(o["g"])("div",null,[Object(o["h"])("header",null,[Object(o["k"])(r)]),Object(o["h"])("button",{onClick:e[0]||(e[0]=function(e){return t.$router.go(-1)}),class:"button"}," ← Назад "),Object(o["k"])(a)])}var Ue={components:{MyNavbar:N}};const qe=u()(Ue,[["render",Me]]);var Ee=qe,Ae={class:"main-voting"},Te={class:"header-voting"},Pe={id:"voting"},De={class:"results-div"};function Re(t,e,n,i,c,s){return Object(o["t"])(),Object(o["g"])("div",Ae,[Object(o["K"])(Object(o["h"])("div",null," Загрузка... ",512),[[o["H"],!0===c.isLoading]]),Object(o["K"])(Object(o["h"])("div",null,[Object(o["h"])("h2",Te,Object(o["C"])(c.voting.title),1),Object(o["h"])("div",Pe,[(Object(o["t"])(!0),Object(o["g"])(o["a"],null,Object(o["x"])(c.results,(function(t){return Object(o["t"])(),Object(o["g"])("div",{key:t.id},[Object(o["h"])("div",De,[Object(o["h"])("p",null,Object(o["C"])(t.title),1),Object(o["h"])("p",null,Object(o["C"])(t.percent)+"%",1)])])})),128))])],512),[[o["H"],!1===c.isLoading]])])}var Be={components:{VotingsList:pt},data:function(){return{voting:{},results:[],isLoading:!0}},methods:{getVoting:function(t){var e=this;try{this.votingRef=Pn.collection("votings").doc(t),this.votingRef.get().then((function(t){var n=t.data();e.voting=n;var o=0;e.voting["results"].forEach((function(t){o+=t}));for(var i=0;i<e.voting["results"].length;i++)e.results.push({id:i,title:e.voting["options"][i],percent:Math.round(e.voting["results"][i]/(0==o?1:o)*100,-2)});e.isLoading=!1}))}catch(n){console.log(n),this.$router.push("/404")}}},mounted:function(){this.getVoting(this.$route.params.id)}};n("0948");const Je=u()(Be,[["render",Re]]);var Ne=Je,Ke={class:"voting-creation-form"},He={class:"upper"},Fe={class:"create-form"},We={class:"voting-creation__label"},Ge=Object(o["h"])("h4",{class:"variant-label"},"Варианты",-1),Qe={id:"variants__container"};function Xe(t,e,n,i,c,s){var r=this,a=Object(o["z"])("my-navbar"),l=Object(o["z"])("my-input"),u=Object(o["z"])("my-toggle"),d=Object(o["z"])("my-textfield-list"),b=Object(o["z"])("Icon");return Object(o["t"])(),Object(o["g"])("div",null,[Object(o["k"])(a),Object(o["h"])("main",null,[Object(o["h"])("button",{onClick:e[0]||(e[0]=function(e){return t.$router.go(-1)}),class:"button"},"← Назад"),Object(o["h"])("div",Ke,[Object(o["h"])("div",He,[Object(o["k"])(l,{placeholder:"Название",class:"title__input",modelValue:c.votingTitle,"onUpdate:modelValue":e[1]||(e[1]=function(t){return c.votingTitle=t})},null,8,["modelValue"]),Object(o["k"])(u,{leftLabel:"Один вариант",rightLabel:"Несколько вариантов",class:"title__toggle",modelValue:c.votingType,"onUpdate:modelValue":e[2]||(e[2]=function(t){return c.votingType=t})},null,8,["modelValue"])]),Object(o["h"])("div",Fe,[Object(o["h"])("div",We,[Ge,Object(o["h"])("p",null,Object(o["C"])(c.amount)+"/10 ",1)]),Object(o["h"])("div",Qe,[Object(o["k"])(d,{fields:c.votingVariants,onDelete:s.eraseVariant,onSave:e[3]||(e[3]=function(t){return r.isAddButtonEnabled=!0})},null,8,["fields","onDelete"]),Object(o["k"])(b,{onClick:s.addVariant,class:"addIcon creation__add__button",icon:c.icons.addIcon},null,8,["onClick","icon"])])]),Object(o["h"])("button",{onClick:e[4]||(e[4]=function(){return s.submitVoting&&s.submitVoting.apply(s,arguments)}),class:"button",id:"create-voting"},"Создать")])])])}n("cb29");function Ye(t,e,n,i,c,s){var r=Object(o["z"])("my-textfield");return Object(o["t"])(),Object(o["g"])("div",null,[Object(o["k"])(o["b"],{name:"user-list"},{default:Object(o["J"])((function(){return[(Object(o["t"])(!0),Object(o["g"])(o["a"],null,Object(o["x"])(n.fields,(function(t){return Object(o["t"])(),Object(o["e"])(r,{key:t.id,element:t,onDelete:s.deleteElement,onSave:s.saveElement},null,8,["element","onDelete","onSave"])})),128))]})),_:1})])}var Ze={class:"textfield"},tn=["id"],en=["id"],nn=Object(o["h"])("p",null,null,-1);function on(t,e,n,i,c,s){var r=Object(o["z"])("Icon");return Object(o["t"])(),Object(o["g"])("div",Ze,[Object(o["h"])("input",{id:"textfield__input__".concat(n.element.id),placeholder:"Вариант",onChange:e[0]||(e[0]=function(){return s.inputListener&&s.inputListener.apply(s,arguments)})},null,40,tn),Object(o["h"])("div",{id:"textfield__elem__".concat(n.element.id),class:"hidden textfield-value"},[nn,Object(o["k"])(r,{onClick:s.deleteElement,icon:c.icons.trashIcon,style:{width:"40px",height:"40px"}},null,8,["onClick","icon"])],8,en)])}var cn={components:{Icon:T["a"]},props:{element:{type:Object,require:!0}},data:function(){return{icons:{trashIcon:at["a"]}}},methods:{inputListener:function(t){document.querySelector("#textfield__input__".concat(this.element.id)).classList.add("hidden"),document.querySelector("#textfield__elem__".concat(this.element.id)).classList.add("textfield__visible"),document.querySelector("#textfield__elem__".concat(this.element.id)).classList.remove("hidden"),document.querySelector("#textfield__elem__".concat(this.element.id," p")).innerHTML=t.target.value,this.element.value=t.target.value,t.target.value="",this.$emit("save")},deleteElement:function(){this.$emit("delete",this.element.id)}}};n("2dfc");const sn=u()(cn,[["render",on]]);var rn=sn,an={components:{MyTextfield:rn},props:{fields:{type:Array,require:!0}},methods:{deleteElement:function(t){this.$emit("delete",t)},saveElement:function(){this.$emit("save")}}};const ln=u()(an,[["render",Ye]]);var un=ln,dn={title:"Создать голосование",components:{MyNavbar:N,MyInput:V,MyToggle:X,Icon:T["a"],MyTextfieldList:un},data:function(){return{votingTitle:"",votingType:"",icons:{addIcon:xt["a"]},isAddButtonEnabled:!0,amount:0,votingVariants:[]}},methods:{addVariant:function(){this.isAddButtonEnabled&&(this.amount>=10?document.querySelector(".voting-creation__label p").style="color: red":(this.isAddButtonEnabled=!1,this.votingVariants.push({id:this.amount,value:""}),this.amount++))},eraseVariant:function(t){this.amount--,document.querySelector(".voting-creation__label p").style="color: black",this.votingVariants=this.votingVariants.filter((function(e){return e.id!==t}))},submitVoting:function(){if(""!==this.votingTitle&&0!=this.votingVariants.length){var t=[];this.votingVariants.forEach((function(e){t.push(e.value)})),"right"==this.votingType?this.votingType="multiple":this.votingType="single";var e={author:this.$store.state.userId,title:this.votingTitle,type:this.votingType,options:t,results:new Array(this.votingVariants.length).fill(0),votedUsers:[]};console.log(e),Pn.collection("votings").add(e),this.$router.go(-1)}}}};n("f2cf");const bn=u()(dn,[["render",Xe]]);var hn=bn,pn=Object(o["h"])("h1",null,"404",-1),gn=Object(o["h"])("p",null,"Данной страницы не существует",-1);function fn(t,e,n,i,c,s){var r=Object(o["z"])("my-navbar");return Object(o["t"])(),Object(o["g"])("div",null,[Object(o["k"])(r),pn,gn])}var vn={components:{MyNavbar:N}};const mn=u()(vn,[["render",fn]]);var On=mn,jn=Object(o["h"])("h1",null,"403",-1),yn=Object(o["h"])("p",null,"Вам запрещён доступ на эту страницу",-1);function Vn(t,e,n,i,c,s){var r=Object(o["z"])("my-navbar");return Object(o["t"])(),Object(o["g"])("div",null,[Object(o["k"])(r),jn,yn])}var kn={components:{MyNavbar:N}};const _n=u()(kn,[["render",Vn]]);var wn=_n,In=n("6c02"),Cn=[{path:"/",component:mt},{path:"/profile",component:Vt,children:[{path:"/profile/:id",component:Mt}]},{path:"/placeholder",component:Rt},{path:"/login",component:Qt},{path:"/restore",component:ie},{path:"/register",component:fe},{path:"/voting",component:je,children:[{path:"/voting/:id",component:ze}]},{path:"/results",component:Ee,children:[{path:"/results/:id",component:Ne}]},{path:"/creation",component:hn},{path:"/403",component:wn},{path:"/:pathMatch(.*)*",name:"not-found",component:On}],$n=Object(In["a"])({routes:Cn,history:Object(In["b"])()}),Sn=$n,xn={mounted:function(t,e){var n={rootMargin:"0px",threshold:1},o=function(t,n){t[0]["isIntersecting"]&&e["value"](e.arg)},i=new IntersectionObserver(o,n);i.observe(t)},name:"intersection"},Ln=[xn],zn=n("2909"),Mn=n("1da1"),Un=(n("96cf"),n("99af"),{state:function(){return{votings:[],isVotingsLoading:!1,page:1,totalPages:0}},getters:{},mutations:{setVotings:function(t,e){t.votings=e},setLoading:function(t,e){t.isVotingsLoading=e},setPage:function(t,e){t.page=e},setTotalPages:function(t,e){t.totalPages=e}},actions:{fetchVotings:function(t,e){return Object(Mn["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.state,n=t.commit;try{n("setLoading",!0),Pn.collection("votings").get().then((function(t){var e=t.docs.map((function(t){return Object.assign(Object(et["a"])({id:t.id},t.data()))}));n("setVotings",e)}))}catch(o){alert("fetch ".concat(o))}finally{n("setLoading",!1)}case 2:case"end":return e.stop()}}),e)})))()},loadVotings:function(t,e){return Object(Mn["a"])(regeneratorRuntime.mark((function n(){var o,i,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=t.state,i=t.commit,n.abrupt("return");case 6:c=n.sent,i("setTotalPages",Math.ceil(c.headers["x-total-count"]/e)),i("setVotings",[].concat(Object(zn["a"])(o.votings),Object(zn["a"])(c["data"]))),n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](2),alert("load ".concat(n.t0));case 14:case"end":return n.stop()}}),n,null,[[2,11]])})))()}},namespaced:!0}),qn=Object(gt["a"])({state:{isSignedIn:!1,userId:404},getters:{isSignedIn:function(t){return t.isSignedIn},userId:function(t){return t.userId}},mutations:{setAuth:function(t,e){t.isSignedIn=e},setUserId:function(t,e){t.userId=e},changeAuthStatus:function(t){t.isSignedIn=!t.isSignedIn}},modules:{voting:Un}});n("1862");function En(t){var e=t.$options.title;if(e)return"function"===typeof e?e.call(t):e}var An={created:function(){var t=En(this);t&&(document.title=t)}},Tn=Object(o["d"])(b);Y.forEach((function(t){Tn.component(t.name,t)})),Ln.forEach((function(t){Tn.directive(t.name,t)})),Tn.use(Sn),Tn.use(qn),Tn.mixin(An),Se["a"].initializeApp({projectId:"voting-project-1c40e"});var Pn=Se["a"].firestore();Tn.mount("#app")},5733:function(t,e,n){},6121:function(t,e,n){"use strict";n("2cb7")},"6b7d":function(t,e,n){"use strict";n("1dad")},8174:function(t,e,n){},"8bb2":function(t,e,n){},"90ab":function(t,e,n){t.exports=n.p+"img/placeholder.5493f195.jpg"},"92e4":function(t,e,n){"use strict";n("3dac")},"93b9":function(t,e,n){"use strict";n("afda")},"93d7":function(t,e,n){"use strict";n("4878")},afda:function(t,e,n){},bae4:function(t,e,n){},f2cf:function(t,e,n){"use strict";n("bae4")}});
//# sourceMappingURL=app.8ddcd723.js.map