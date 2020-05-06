(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{W9vR:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class i{}var u=t("pMnS"),s=t("MKJQ"),o=t("sZkV"),r=t("SVse"),a=t("5T3n"),m=t("QQAA"),h=t("mrSG"),b=t("QSv1"),c=t("R05+");class d{constructor(l,n,t,e){this.router=l,this.alertCtrl=n,this.myFormat=t,this.myArrayFunctions=e,this.logLevel=0,this.listTimes=[],this.listTimesFull=[],this.showItemsStep=20,this.showItemsCount=20}ionViewWillEnter(){this.myLog("method ionViewWillEnter",1),this.actualUser=localStorage.getItem("actualUser"),this.userObject=JSON.parse(localStorage.getItem(this.actualUser)),this.myLog('user "'+this.actualUser+'" - '+JSON.stringify(this.userObject),2),this.showItemsCount=20,this.displayTimes(this.showItemsStep)}goExport(){this.router.navigate(["export"])}displayTimes(l){this.myLog("method displayTimes: "+l,1);let n=Math.min(l,this.showItemsCount),t=[];if(this.myLog("userList Array "+JSON.stringify(this.userObject.listTimes),2),this.userObject.listTimes.length>0){this.listTimesFull=this.userObject.listTimes,this.listTimesFull.sort(this.myArrayFunctions.compareValues("timeStamp","desc")),this.listTimesFull=this.myArrayFunctions.addIdToArrayOfObjects(this.listTimesFull),t=this.listTimesFull.slice(0,n);for(let l=0;l<t.length;l++)t[l].tryTimeFormat=this.myFormat.formateTime(t[l].tryTime)}this.listTimes=t,this.userObject.changedTimes=!1}doInfinite(l){return new Promise(n=>{setTimeout(()=>{this.showItemsCount=this.showItemsCount+this.showItemsStep,this.displayTimes(this.showItemsCount),n(),l.target.complete()},500)})}importOne(){return h.a(this,void 0,void 0,(function*(){this.myLog("method importOne",1);const l=yield this.alertCtrl.create({header:"New solve time",message:"Enter Time (MM:SS.00)",inputs:[{name:"time",type:"text",placeholder:"MM:SS.00"}],buttons:[{text:"Cancel",handler:l=>{this.myLog("Cancel clicked",2)}},{text:"Save",handler:l=>{if(this.checkImportTimeFormat(l.time)){let n=this.getTSfromString(l.time);this.addTimeToResults((new Date).getTime(),n),this.calculateNewBestTime(),localStorage.setItem(this.actualUser,JSON.stringify(this.userObject)),this.displayTimes(this.showItemsStep)}}}]});yield l.present()}))}getTSfromString(l){let n=l.split(":"),t=n[1].split(".");return 60*parseInt(n[0])*1e3+1e3*parseInt(t[0])+10*parseInt(t[1])}checkImportTimeFormat(l){let n=l.split(":");if(2==n.length&&n[0].length>=1&&!isNaN(parseInt(n[0]))&&parseInt(n[0])<60){let l=n[1].split(".");if(2==l.length&&2==l[0].length&&!isNaN(parseInt(l[0]))&&parseInt(l[0])<60&&2==l[1].length&&!isNaN(parseInt(l[1]))&&parseInt(l[1])<100)return!0}return!1}addTimeToResults(l,n){this.myLog("method addTimeToResults",1),this.myLog("user.listTimes before: "+JSON.stringify(this.userObject.listTimes),2),this.userObject.listTimes.push({timeStamp:l,tryTime:n}),localStorage.setItem(this.actualUser,JSON.stringify(this.userObject))}importMany(){return h.a(this,void 0,void 0,(function*(){this.myLog("method importMany",1);const l=yield this.alertCtrl.create({header:"Import multiple times",message:"List of times (split by space, you can copy from text list or excel) format MM:SS.00",inputs:[{name:"date",type:"date",placeholder:"DD.MM.YYYY"},{name:"times",type:"text",placeholder:"15:13.11 16:12.33 ..."}],buttons:[{text:"Cancel",handler:l=>{this.myLog("Cancel clicked",2)}},{text:"Save",handler:l=>{let n,t;if(n=l.times.split(" "),n.length>0){for(let e=0;e<n.length;e++)this.checkImportTimeFormat(n[e])&&(t=this.getTSfromString(n[e]),this.addTimeToResults(new Date(Date.parse(l.date)).getTime()+1e3*(n.length-e),t));this.calculateNewBestTime(),localStorage.setItem(this.actualUser,JSON.stringify(this.userObject)),this.displayTimes(this.showItemsStep)}}}]});yield l.present()}))}deleteTime(l){this.myLog("method deleteTime",1),this.myLog("Delete item: "+JSON.stringify(l),2),this.deleteTryFromArray(l),localStorage.setItem(this.actualUser,JSON.stringify(this.userObject)),this.myLog("++"+l.tryTimeFormat+" vs. "+this.userObject.bestTime,2),l.tryTimeFormat==this.userObject.bestTime&&this.calculateNewBestTime(),localStorage.setItem(this.actualUser,JSON.stringify(this.userObject)),this.userObject.changedTimes=!0,this.displayTimes(this.showItemsStep)}calculateNewBestTime(){this.myLog("method calculateNewBestTime",2);let l=999999999;this.userObject.listTimes.forEach((function(n){n.tryTime<l&&(l=n.tryTime)})),this.userObject.bestTime=this.myFormat.formateTime(l)}myLog(l,n){this.logLevel>=n&&console.log("times: "+l)}deleteTryFromArray(l){this.myLog("method deleteTryFromArray",2);let n=[];this.userObject.listTimes.forEach((function(t){t.timeStamp!=l.timeStamp&&n.push(t)})),n.sort(this.myArrayFunctions.compareValues("timeStamp","desc")),n=this.myArrayFunctions.addIdToArrayOfObjects(n),this.userObject.listTimes=n}}var p=t("iInd"),y=e.mb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:translucent}"]],data:{}});function g(l){return e.Hb(0,[(l()(),e.ob(0,0,null,null,24,"ion-item-sliding",[],null,null,null,s.bb,s.v)),e.nb(1,49152,null,0,o.L,[e.h,e.k,e.x],null,null),(l()(),e.ob(2,0,null,0,4,"ion-item-options",[["side","end"]],null,null,null,s.ab,s.u)),e.nb(3,49152,null,0,o.K,[e.h,e.k,e.x],{side:[0,"side"]},null),(l()(),e.ob(4,0,null,0,2,"ion-item-option",[["color","danger"],["expandable",""]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.deleteTime(l.context.$implicit)&&e),e}),s.Z,s.t)),e.nb(5,49152,null,0,o.J,[e.h,e.k,e.x],{color:[0,"color"],expandable:[1,"expandable"]},null),(l()(),e.Fb(-1,0,[" Delete "])),(l()(),e.ob(7,0,null,0,17,"ion-item",[],null,null,null,s.cb,s.s)),e.nb(8,49152,null,0,o.G,[e.h,e.k,e.x],null,null),(l()(),e.ob(9,0,null,0,15,"ion-label",[],null,null,null,s.db,s.w)),e.nb(10,49152,null,0,o.M,[e.h,e.k,e.x],null,null),(l()(),e.ob(11,0,null,0,13,"ion-grid",[],null,null,null,s.T,s.m)),e.nb(12,49152,null,0,o.z,[e.h,e.k,e.x],null,null),(l()(),e.ob(13,0,null,0,11,"ion-row",[],null,null,null,s.fb,s.y)),e.nb(14,49152,null,0,o.fb,[e.h,e.k,e.x],null,null),(l()(),e.ob(15,0,null,0,2,"ion-col",[["style","text-align: left"]],null,null,null,s.O,s.h)),e.nb(16,49152,null,0,o.s,[e.h,e.k,e.x],null,null),(l()(),e.Fb(17,0,[" "," "])),(l()(),e.ob(18,0,null,0,3,"ion-col",[["style","text-align: center;"]],null,null,null,s.O,s.h)),e.nb(19,49152,null,0,o.s,[e.h,e.k,e.x],null,null),(l()(),e.Fb(20,0,[" "," "])),e.Bb(21,2),(l()(),e.ob(22,0,null,0,2,"ion-col",[["style","text-align: right;"]],null,null,null,s.O,s.h)),e.nb(23,49152,null,0,o.s,[e.h,e.k,e.x],null,null),(l()(),e.Fb(24,0,[" "," "]))],(function(l,n){l(n,3,0,"end"),l(n,5,0,"danger","")}),(function(l,n){l(n,17,0,n.context.$implicit.id);var t=e.Gb(n,20,0,l(n,21,0,e.zb(n.parent,0),n.context.$implicit.timeStamp,"dd.MM.yy"));l(n,20,0,t),l(n,24,0,n.context.$implicit.tryTimeFormat)}))}function T(l){return e.Hb(0,[e.Ab(0,r.d,[e.s]),e.Db(671088640,1,{infiniteScroll:0}),(l()(),e.ob(2,0,null,null,6,"ion-header",[],null,null,null,s.U,s.n)),e.nb(3,49152,null,0,o.A,[e.h,e.k,e.x],{translucent:[0,"translucent"]},null),(l()(),e.ob(4,0,null,0,4,"ion-toolbar",[],null,null,null,s.nb,s.G)),e.nb(5,49152,null,0,o.yb,[e.h,e.k,e.x],null,null),(l()(),e.ob(6,0,null,0,2,"ion-title",[],null,null,null,s.mb,s.F)),e.nb(7,49152,null,0,o.wb,[e.h,e.k,e.x],null,null),(l()(),e.Fb(-1,0,[" Times "])),(l()(),e.ob(9,0,null,null,41,"ion-content",[],null,null,null,s.P,s.i)),e.nb(10,49152,null,0,o.t,[e.h,e.k,e.x],{fullscreen:[0,"fullscreen"]},null),(l()(),e.ob(11,0,null,0,13,"ion-grid",[],null,null,null,s.T,s.m)),e.nb(12,49152,null,0,o.z,[e.h,e.k,e.x],null,null),(l()(),e.ob(13,0,null,0,11,"ion-row",[],null,null,null,s.fb,s.y)),e.nb(14,49152,null,0,o.fb,[e.h,e.k,e.x],null,null),(l()(),e.ob(15,0,null,0,1,"ion-col",[],null,null,null,s.O,s.h)),e.nb(16,49152,null,0,o.s,[e.h,e.k,e.x],null,null),(l()(),e.ob(17,0,null,0,5,"ion-col",[["size","11"]],null,null,null,s.O,s.h)),e.nb(18,49152,null,0,o.s,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.ob(19,0,null,0,3,"ion-list",[],null,null,null,s.eb,s.x)),e.nb(20,49152,null,0,o.N,[e.h,e.k,e.x],null,null),(l()(),e.db(16777216,null,0,1,null,g)),e.nb(22,278528,null,0,r.i,[e.L,e.I,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.ob(23,0,null,0,1,"ion-col",[],null,null,null,s.O,s.h)),e.nb(24,49152,null,0,o.s,[e.h,e.k,e.x],null,null),(l()(),e.ob(25,0,null,0,3,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],(function(l,n,t){var e=!0;return"ionInfinite"===n&&(e=!1!==l.component.doInfinite(t)&&e),e}),s.Y,s.q)),e.nb(26,49152,null,0,o.D,[e.h,e.k,e.x],null,null),(l()(),e.ob(27,0,null,0,1,"ion-infinite-scroll-content",[],null,null,null,s.X,s.r)),e.nb(28,49152,null,0,o.E,[e.h,e.k,e.x],null,null),(l()(),e.ob(29,0,null,0,19,"ion-fab",[["horizontal","end"],["sedge",""],["slot","fixed"],["vertical","bottom"]],null,null,null,s.S,s.j)),e.nb(30,49152,null,0,o.v,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.ob(31,0,null,0,3,"ion-fab-button",[],null,null,null,s.Q,s.k)),e.nb(32,49152,null,0,o.w,[e.h,e.k,e.x],null,null),(l()(),e.ob(33,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,s.V,s.o)),e.nb(34,49152,null,0,o.B,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.ob(35,0,null,0,13,"ion-fab-list",[["side","top"]],null,null,null,s.R,s.l)),e.nb(36,49152,null,0,o.x,[e.h,e.k,e.x],{side:[0,"side"]},null),(l()(),e.ob(37,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.importOne()&&e),e}),s.Q,s.k)),e.nb(38,49152,null,0,o.w,[e.h,e.k,e.x],null,null),(l()(),e.ob(39,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,s.V,s.o)),e.nb(40,49152,null,0,o.B,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.ob(41,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.importMany()&&e),e}),s.Q,s.k)),e.nb(42,49152,null,0,o.w,[e.h,e.k,e.x],null,null),(l()(),e.ob(43,0,null,0,1,"ion-icon",[["name","download"]],null,null,null,s.V,s.o)),e.nb(44,49152,null,0,o.B,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.ob(45,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.goExport()&&e),e}),s.Q,s.k)),e.nb(46,49152,null,0,o.w,[e.h,e.k,e.x],null,null),(l()(),e.ob(47,0,null,0,1,"ion-icon",[["name","arrow-redo-outline"]],null,null,null,s.V,s.o)),e.nb(48,49152,null,0,o.B,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.ob(49,0,null,0,1,"app-explore-container",[["name","Times"]],null,null,null,a.b,a.a)),e.nb(50,114688,null,0,m.a,[],{name:[0,"name"]},null)],(function(l,n){var t=n.component;l(n,3,0,!0),l(n,10,0,!1),l(n,18,0,"11"),l(n,22,0,t.listTimes),l(n,30,0,"end","bottom"),l(n,34,0,"add"),l(n,36,0,"top"),l(n,40,0,"add"),l(n,44,0,"download"),l(n,48,0,"arrow-redo-outline"),l(n,50,0,"Times")}),null)}function f(l){return e.Hb(0,[(l()(),e.ob(0,0,null,null,1,"app-tab3",[],null,null,null,T,y)),e.nb(1,49152,null,0,d,[p.m,o.a,b.a,c.a],null,null)],null,null)}var x=e.kb("app-tab3",d,f,{},{},[]),k=t("s7LF"),S=t("qtYk");t.d(n,"Tab3PageModuleNgFactory",(function(){return O}));var O=e.lb(i,[],(function(l){return e.wb([e.xb(512,e.j,e.W,[[8,[u.a,x]],[3,e.j],e.v]),e.xb(4608,r.l,r.k,[e.s,[2,r.r]]),e.xb(4608,o.b,o.b,[e.x,e.g]),e.xb(4608,o.Cb,o.Cb,[o.b,e.j,e.p]),e.xb(4608,o.Fb,o.Fb,[o.b,e.j,e.p]),e.xb(4608,k.g,k.g,[]),e.xb(1073742336,r.b,r.b,[]),e.xb(1073742336,o.Ab,o.Ab,[]),e.xb(1073742336,k.f,k.f,[]),e.xb(1073742336,k.a,k.a,[]),e.xb(1073742336,S.a,S.a,[]),e.xb(1073742336,p.n,p.n,[[2,p.s],[2,p.m]]),e.xb(1073742336,i,i,[]),e.xb(1024,p.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);