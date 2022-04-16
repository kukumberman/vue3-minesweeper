(function(e){function t(t){for(var i,c,s=t[0],a=t[1],l=t[2],d=0,f=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,s=1;s<n.length;s++){var a=n[s];0!==r[a]&&(i=!1)}i&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},r={app:0},o=[];function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue3-minesweeper/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=a;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"460e":function(e,t,n){"use strict";n("7fec")},5:function(e,t){},"56b4":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),r=(n("b0c0"),{key:0}),o=Object(i["d"])("span",null,"Seed",-1),c={key:1};function s(e,t,n,s,a,l){var u=Object(i["g"])("Minesweeper"),d=Object(i["g"])("FooterView");return Object(i["e"])(),Object(i["c"])(i["a"],null,[a.gameplayState?(Object(i["e"])(),Object(i["c"])("div",c,[Object(i["d"])("button",{onClick:t[5]||(t[5]=function(){return l.backToMain&&l.backToMain.apply(l,arguments)})},"Menu"),Object(i["d"])(u,{seed:a.seed,width:l.stage.size.x,height:l.stage.size.y,bombCount:l.stage.bombCount,onWin:l.winHandler,onLose:l.loseHandler},null,8,["seed","width","height","bombCount","onWin","onLose"])])):(Object(i["e"])(),Object(i["c"])("div",r,[Object(i["d"])("div",null,[o,Object(i["l"])(Object(i["d"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.seed=e})},null,512),[[i["k"],a.seed]]),Object(i["d"])("button",{onClick:t[2]||(t[2]=function(){return l.randomizeSeed&&l.randomizeSeed.apply(l,arguments)})},"Randomize")]),(Object(i["e"])(!0),Object(i["c"])(i["a"],null,Object(i["f"])(a.stages,(function(e,n){return Object(i["e"])(),Object(i["c"])("section",{key:n},[Object(i["l"])(Object(i["d"])("input",{type:"radio",id:e.name,value:n,"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.stageIndex=e})},null,8,["id","value"]),[[i["j"],a.stageIndex]]),Object(i["d"])("label",{for:e.name},Object(i["h"])(l.formatStage(e)),9,["for"])])})),128)),Object(i["d"])("div",null,[Object(i["d"])("button",{onClick:t[4]||(t[4]=function(){return l.play&&l.play.apply(l,arguments)})},"Play")])])),Object(i["d"])(d)],64)}n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("ac1f"),n("841c"),n("c740"),n("25f0"),n("99af");var a=n("7dc5");function l(e,t,n,r,o,c){var s=Object(i["g"])("GridView");return Object(i["e"])(),Object(i["c"])("div",null,[Object(i["d"])("button",{onClick:t[1]||(t[1]=function(){return c.revealCells&&c.revealCells.apply(c,arguments)})},"Reveal cells"),Object(i["d"])(s,{size:o.grid.size,cells:o.cells,onLeftClick:c.onCellLeftClick,onRightClick:c.onCellRightClick},null,8,["size","cells","onLeftClick","onRightClick"])])}n("a9e3"),n("159b"),n("d81d"),n("fb6a"),n("4de4");var u={class:"container"};function d(e,t,n,r,o,c){var s=Object(i["g"])("Cell");return Object(i["e"])(),Object(i["c"])("div",u,[(Object(i["e"])(!0),Object(i["c"])(i["a"],null,Object(i["f"])(n.cells,(function(t,n){return Object(i["e"])(),Object(i["c"])(s,{key:n,cell:t,onClick:function(t){return e.$emit("leftClick",t,n)},onContextmenu:Object(i["m"])((function(t){return e.$emit("rightClick",t,n)}),["prevent"])},null,8,["cell","onClick","onContextmenu"])})),128))])}var f={class:"cell"};function h(e,t,n,r,o,c){return Object(i["e"])(),Object(i["c"])("div",f,[Object(i["d"])("span",null,Object(i["h"])(c.getDisplay()),1)])}var b={props:{cell:Object},methods:{getDisplay:function(){return this.cell.isMarked?"📌":this.cell.isClicked?this.cell.isBomb?"💣":this.array[this.cell.count]:"❔"}},computed:{array:function(){return["🟦","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣"]}}},p=n("d959"),g=n.n(p);const m=g()(b,[["render",h]]);var v=m,y=n("d4ec"),j=function e(t,n){Object(y["a"])(this,e),this.x=t,this.y=n},O={components:{Cell:v},emits:["leftClick","rightClick"],props:{cells:{type:Array,required:!0},size:{type:j,required:!0}},data:function(){return{fontSize:35,cellSize:50}},computed:{x:function(){return this.size.x},y:function(){return this.size.y},cellSizeInPixels:function(){return this.cellSize+"px"},fontSizeInPixels:function(){return this.fontSize+"px"}}},k=function(){Object(i["i"])((function(e){return{"429e6b87":e.size.x,"11445c91":e.cellSizeInPixels,"429e6b88":e.size.y,"705fe3fe":e.fontSizeInPixels}}))},C=O.setup;O.setup=C?function(e,t){return k(),C(e,t)}:k;var w=O;n("8bd9");const x=g()(w,[["render",d]]);var z=x,S=n("b1c7"),M=n("2909"),P=n("bee2"),R=n("b1c7"),I=R.pseudoRandom,L=function(){function e(t){Object(y["a"])(this,e),this.seed=t,this.index=0}return Object(P["a"])(e,[{key:"next",value:function(e){return this.range(0,e)}},{key:"range",value:function(e,t){return Math.floor(this.random()*(t-e)+e)}},{key:"random",value:function(){return I("".concat(this.seed).concat(this.index++))}}],[{key:"shuffleArray",value:function(t,n){for(var i=new e(n),r=Object(M["a"])(t),o=r.length-1;o>0;o--){var c=Math.floor(i.random()*(o+1)),s=r[o];r[o]=r[c],r[c]=s}return r}}]),e}(),B=function(){function e(t,n){Object(y["a"])(this,e),this.size=new j(t,n)}return Object(P["a"])(e,[{key:"getNeighbours",value:function(e){for(var t=[],n=-1;n<=1;n++)for(var i=-1;i<=1;i++)if(0!==n||0!==i){var r=new j(e.x+n,e.y+i);if(this.isInside(r)){var o=this.convertTo1d(r);t.push(o)}}return t}},{key:"isInside",value:function(e){return e.x>=0&&e.x<this.size.x&&e.y>=0&&e.y<this.size.y}},{key:"convertTo1d",value:function(e){return e.y*this.size.x+e.x}},{key:"convertTo2d",value:function(e){return new j(e%this.size.x,Math.floor(e/this.size.x))}}]),e}(),N={emits:["win","lose"],props:{seed:{type:String,required:!0},width:{type:Number,required:!0},height:{type:Number,required:!0},bombCount:{type:Number,required:!0}},components:{GridView:z},data:function(){return{grid:null,cells:[]}},created:function(){this.createGrid()},methods:{handleWin:function(){this.$emit("win")},handleLose:function(){this.$emit("lose")},revealCells:function(){this.cells.forEach((function(e){return e.isClicked=!0}))},createGrid:function(){this.grid=new B(this.width,this.height),this.fillEmptyCells(),this.fillRandomBombs(),this.calculateCellsNeighbors()},fillEmptyCells:function(){var e=this,t=this.grid.size.x*this.grid.size.y;this.cells=Object(S["enumerableRange"])(0,t).map((function(t){return{index:t,grid:e.grid.convertTo2d(t),isBomb:!1,isClicked:!1,isMarked:!1}}))},fillRandomBombs:function(){var e=this,t=this.grid.size.x*this.grid.size.y,n=Object(S["enumerableRange"])(0,t),i=L.shuffleArray(n,this.seed).slice(0,this.bombCount);i.forEach((function(t){e.cells[t].isBomb=!0}))},calculateCellsNeighbors:function(){var e=this;this.cells.forEach((function(t){t.count=e.grid.getNeighbours(t.grid).map((function(t){return e.cells[t]})).filter((function(e){return e.isBomb})).length}))},onCellLeftClick:function(e,t){var n=this.cells[t];if(!n.isMarked)if(n.isBomb)this.cells.filter((function(e){return e.isBomb})).forEach((function(e){return e.isClicked=!0})),this.handleLose();else{this.revealCell(n);var i=this.cells.filter((function(e){return e.isClicked})).length,r=i===this.cells.length-this.bombCount;r&&this.handleWin()}},onCellRightClick:function(e,t){var n=this.cells[t];if(!n.isClicked){n.isMarked=!n.isMarked;var i=this.cells.filter((function(e){return e.isBomb&&e.isMarked})).length,r=this.cells.filter((function(e){return e.isMarked})).length,o=i===this.bombCount&&r==this.bombCount;o&&this.handleWin()}},revealCell:function(e){var t=this;if(!e.isClicked){e.isClicked=!0;var n=this.grid.getNeighbours(e.grid).map((function(e){return t.cells[e]})),i=n.filter((function(e){return e.isBomb}));0===i.length&&n.forEach((function(e){return t.revealCell(e)}))}}}};const T=g()(N,[["render",l]]);var E=T;function W(e,t,n,r,o,c){return Object(i["e"])(),Object(i["c"])("a",{href:o.projectLink,target:"_blank"},"Project Link",8,["href"])}var _={data:function(){return{projectLink:"https://github.com/kukumberman/vue3-minesweeper"}}};const q=g()(_,[["render",W]]);var V=q,A={components:{Minesweeper:E,FooterView:V},data:function(){return{seed:"3301",stages:[],stageIndex:0,gameplayState:!1}},created:function(){this.stages=a.stages;var e=new URLSearchParams(window.location.search);if(e.has("seed")&&e.has("stage")){this.seed=e.get("seed");var t=e.get("stage"),n=this.stages.findIndex((function(e){return e.name===t}));-1===n&&(n=0),this.stageIndex=n,this.gameplayState=!0}},computed:{stage:function(){return this.stages[this.stageIndex]}},methods:{randomizeSeed:function(){this.seed=this.getRandomSeed()},play:function(){this.updateWindowQueryParams(),this.gameplayState=!0},backToMain:function(){this.gameplayState=!1,window.history.replaceState(null,"(although most browsers will ignore this parameter)",window.location.pathname)},updateWindowQueryParams:function(){var e=window.location,t=e.origin,n=e.pathname,i=t+n;i+="?seed="+this.seed+"&stage="+this.stages[this.stageIndex].name,window.history.replaceState(null,"(although most browsers will ignore this parameter)",i)},getRandomSeed:function(){return(Date.now()%65535).toString(16)},winHandler:function(){alert("todo: win logic")},loseHandler:function(){alert("todo: lose logic")},formatStage:function(e){var t=e.name,n=e.size,i=e.bombCount;return"".concat(t," (").concat(n.x,"x").concat(n.y," ").concat(i,"💣)")}}};n("460e");const H=g()(A,[["render",s]]);var G=H;Object(i["b"])(G).mount("#app")},6:function(e,t){},7:function(e,t){},"7dc5":function(e){e.exports=JSON.parse('{"stages":[{"name":"newbie","size":{"x":9,"y":9},"bombCount":10},{"name":"amateur","size":{"x":16,"y":16},"bombCount":40},{"name":"professional","size":{"x":30,"y":16},"bombCount":99}]}')},"7fec":function(e,t,n){},8:function(e,t){},"8bd9":function(e,t,n){"use strict";n("56b4")},9:function(e,t){},b1c7:function(e,t,n){"use strict";n.r(t),n.d(t,"shuffleArray",(function(){return o})),n.d(t,"pseudoRandom",(function(){return c})),n.d(t,"enumerableRange",(function(){return s}));var i=n("2909"),r=(n("d81d"),n("cb29"),n("1c46"));function o(e){for(var t=Object(i["a"])(e),n=t.length-1;n>0;n--){var r=Math.floor(Math.random()*(n+1)),o=t[n];t[n]=t[r],t[r]=o}return t}function c(e){var t=r.createHash("sha256").update(e).digest("hex"),n=t.substring(0,4),i=parseInt(n,16)%65536/65535;return i}function s(e,t){return Array(t).fill().map((function(t,n){return n+e}))}}});
//# sourceMappingURL=app.9b6ef5a7.js.map