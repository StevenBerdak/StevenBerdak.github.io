(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/peru_flag.19df19b0.png"},,function(e,t,n){e.exports=n(26)},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(9),c=n.n(r),o=(n(18),n(2)),s=n(3),u=n(6),l=n(4),h=n(5),d=n(1),m=(n(19),n(20),n(21),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).getMedia=n.getMedia.bind(Object(d.a)(Object(d.a)(n))),n.link=n.link.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"getMedia",value:function(e,t){return i.a.createElement("div",null)}},{key:"link",value:function(){if(void 0!==this.props.link&&this.props.link.length>0)return i.a.createElement("a",{className:"link-text",href:this.props.link,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("button",null,void 0!==this.props.linkText?this.props.linkText:this.props.link))}},{key:"image",value:function(){if(void 0!==this.props.link&&this.props.link.length>0)return i.a.createElement("img",{src:this.props.image})}},{key:"render",value:function(){return i.a.createElement("div",{className:"word-card"},i.a.createElement("div",{className:"word-card-inner"},i.a.createElement("div",{className:"word-card-content"},this.image(),i.a.createElement("h2",null,this.props.header),i.a.createElement("p",{className:this.props.centerContent?"center-content":""},this.props.body),i.a.createElement("br",null),this.link())))}}]),t}(a.Component)),f=[{quechua:"Allin punchay",english:"Good morning; goodmorning"},{quechua:"Pakarinkama",english:"Till tomorrow"},{quechua:"Allillanchu",english:"Hello"},{quechua:"Allillan",english:"I'm fine..."},{quechua:"\xd1ukaj sutiymin",english:"My name is..."},{quechua:"\xd1ukan kani",english:"I'm from..."},{quechua:"Imata sutiki?",english:"What's your name?"},{quechua:"Yanaparisayki?",english:"Can I help you?"},{quechua:"Maipitaj wa\xf1u?",english:"Where is the toilet?"},{quechua:"Uj frazadatawan",english:"One more blanket please"},{quechua:"Waycumanchu cusinata?",english:"Could I enter to the kitchen"},{quechua:"Kayka kampaj",english:"This is for you"},{quechua:"Yus pagarasunki",english:"Thank you"},{quechua:"Jakuchu",english:"Let's go"},{quechua:"Sumaj",english:"Very delicious"},{quechua:"Manan",english:"No thanks"},{quechua:"Ari",english:"Yes"},{quechua:"Munay",english:"Beautiful"},{quechua:"Chiri",english:"Cold"},{quechua:"Qo\xf1i",english:"Hot"},{quechua:"Unu",english:"Water"},{quechua:"Ripushani",english:"Good bye; goodbye"},{quechua:"Allillamanta",english:"Slowly please"},{quechua:"Wawa",english:"Mother's child; infant"},{quechua:"Wawakuna",english:"Mother's child; infant (plural)"},{quechua:"Amauta",english:"Master or 'wise-one', also word for teacher"},{quechua:"Mikhuna",english:"Food; any substance consumed by living organisms to sustain life; any substance consumed to provide nutritional support for the body; form of energy stored in chemical form"},{quechua:"Temmpu wasi",english:"Hotel; establishment that provides lodging paid on a short-term basis"},{quechua:"Wakichi",english:"Computer program"},{quechua:"Mama",english:"Mother"},{quechua:"Imaynall\xe1m kashanki?",english:"How are you?"},{quechua:"Allin tuta",english:"Good night; goodnight"},{quechua:"Chhallpuku",english:"Bathroom; A room with a bathtub"}],p=(n(22),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={searchInput:"",searchTime:n.getTime(),words:[]},n.handleSearchInput=n.handleSearchInput.bind(Object(d.a)(Object(d.a)(n))),n.performSearch=n.performSearch.bind(Object(d.a)(Object(d.a)(n))),n.getTime=n.getTime.bind(Object(d.a)(Object(d.a)(n))),n.updateTimeStamp=n.updateTimeStamp.bind(Object(d.a)(Object(d.a)(n))),n.iterateWordsList=n.iterateWordsList.bind(Object(d.a)(Object(d.a)(n))),n.pushWordToCurrentList=n.pushWordToCurrentList.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setInitialState()}},{key:"setInitialState",value:function(){this.setState(function(e,t){return{words:f}})}},{key:"getTime",value:function(){return(new Date).getTime()}},{key:"performSearch",value:function(e){0!==e.length?(this.setState(function(e,t){return{words:[]}}),this.updateTimeStamp(function(){var t=[];for(var n in f){var a=f[n].quechua,i=f[n].english;(this.matchPhrase(e,a)||this.matchPhrase(e,i))&&(t.push(f[n]),this.pushWordToCurrentList(150*t.length,this.state.searchTime,[].concat(t)))}})):this.setState(function(e,t){return{words:f}})}},{key:"updateTimeStamp",value:function(e){var t=this;this.setState(function(e,n){return{searchTime:t.getTime()}},e)}},{key:"iterateWordsList",value:function(){}},{key:"pushWordToCurrentList",value:function(e,t,n){var a=this;setTimeout(function(){a.state.searchTime===t&&a.setState(function(e,t){return{words:n}})},e.valueOf())}},{key:"matchPhrase",value:function(e,t){if(t.toLowerCase().includes(e.toLowerCase()))return!0}},{key:"handleSearchInput",value:function(e){var t=this,n=e.target.value;this.setState(function(e,t){return{searchInput:n}},function(){t.performSearch(t.state.searchInput)})}},{key:"buildWordCards",value:function(e){return e.map(function(e){return i.a.createElement(m,{key:e.quechua,header:e.quechua,body:e.english,centerContent:!0})})}},{key:"render",value:function(){return i.a.createElement("div",{className:"content-header-container"},i.a.createElement("div",{className:"content-header-inner"},i.a.createElement("h2",null,"Quechua Word Search"),i.a.createElement("p",null,"Enter the word or phrase you want to search for:"),i.a.createElement("div",{id:"search-bar",className:"ui fluid icon input"},i.a.createElement("input",{id:"search-input",type:"text",name:"search",placeholder:"Word or phrase...",value:this.state.searchTerm,onChange:this.handleSearchInput}),i.a.createElement("i",{className:"search icon"}))),i.a.createElement("div",{className:"content"},this.buildWordCards(this.state.words)))}}]),t}(a.Component)),b=n(10),v=n.n(b),g=(n(23),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={activeTab:"tab-a",callback:e.callback},n.setActive=n.setActive.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState(function(e,t){return{activeTab:"tab-a"}})}},{key:"setActive",value:function(e){var t=this,n=e.target.id;this.setState(function(e,t){return{activeTab:n}},function(){return t.state.callback(t.state.activeTab)})}},{key:"isActive",value:function(e){return this.state.activeTab===e}},{key:"anchor",value:function(e,t,n){return i.a.createElement("a",{id:e,className:"item "+(this.isActive(e)?"active":""),onClick:this.setActive},t)}},{key:"onFocus",value:function(){this.myInput.setAttribute("class","active")}},{key:"render",value:function(){return i.a.createElement("center",null,i.a.createElement("div",{id:"nav-outer"},i.a.createElement("div",{id:"nav-top"},i.a.createElement("img",{src:v.a,alt:"Peru flag"}),i.a.createElement("h1",null,"Peru Wakichi")),i.a.createElement("div",{id:"nav-links-outer"},i.a.createElement("div",{id:"nav-links",className:"ui menu"},this.anchor("tab-a","Quechua Words",!0),this.anchor("tab-b","News"),this.anchor("tab-c","Locations")))))}}]),t}(a.Component)),k=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={articlesJson:""},n.fetchArticleJsonData=n.fetchArticleJsonData.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchArticleJsonData()}},{key:"fetchArticleJsonData",value:function(){var e=this;fetch("https://newsapi.org/v2/everything?q=peru&page=1&language=en&apiKey=cf472eb9a232481683e24e5f834b7327").then(function(e){return e.json()}).then(function(t){e.setState(function(e,n){return{articlesJson:t}})}).catch(function(e){console.log("fetch error: "+e)})}},{key:"buildNewsCards",value:function(e){if(void 0!==e.articles)return e.articles.map(function(e){return i.a.createElement("div",{key:e.url},i.a.createElement(m,{header:e.title,body:e.content,link:e.url,linkText:"Read More...",image:e.urlToImage}))})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"content-header-container"},i.a.createElement("div",{className:"content-header-inner"},i.a.createElement("h2",null,"News"),i.a.createElement("p",null,"Here is a list of recent articles relating to Peru, stay informed!"))),i.a.createElement("div",{className:"content"},this.buildNewsCards(this.state.articlesJson)))}}]),t}(a.Component),y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={content:i.a.createElement(p,null)},n.setPage=n.setPage.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"setPage",value:function(e){switch(e){case"tab-b":this.setState(function(e,t){return{content:i.a.createElement(k,null)}});break;case"tab-c":this.setState(function(e,t){return{content:null}});break;default:this.setState(function(e,t){return{content:i.a.createElement(p,null)}})}}},{key:"render",value:function(){return i.a.createElement("div",{id:"app"},i.a.createElement("nav",{id:"nav-bar-container"},i.a.createElement(g,{callback:this.setPage})),i.a.createElement("main",{id:"content-container"},this.state.content),i.a.createElement("footer",null))}}]),t}(a.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var O=n(11);n.n(O).a.config(),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat(".","/service-worker.js");w?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):j(t,e)})}}(),c.a.render(i.a.createElement(y,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.e34f3307.chunk.js.map