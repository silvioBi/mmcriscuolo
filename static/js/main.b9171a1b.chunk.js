(this["webpackJsonpmichele-criscuolo"]=this["webpackJsonpmichele-criscuolo"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/exhibition-2.ce3b1c98.jpeg"},function(e,t,a){e.exports=a.p+"static/media/exhibition-3.9cc9f7af.jpeg"},function(e,t,a){e.exports=a.p+"static/media/exhibition-4.d062be94.jpeg"},function(e,t,a){e.exports=a.p+"static/media/exhibition-5.599a1d71.jpeg"},,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/artwork-3.28f89133.jpeg"},function(e,t,a){e.exports=a.p+"static/media/artwork-4.2fd199ed.jpeg"},function(e,t,a){e.exports=a.p+"static/media/artwork-5.23db547a.jpeg"},function(e,t,a){e.exports=a.p+"static/media/artwork-6.0fcf97fc.jpeg"},function(e,t,a){e.exports=a.p+"static/media/artwork-7.501cb466.jpeg"},function(e,t,a){e.exports=a.p+"static/media/artwork-8.3670d2f8.jpeg"},function(e,t,a){e.exports=a.p+"static/media/artwork-9.5b4cc9f6.jpeg"},,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/facebook.4f43000c.svg"},function(e,t,a){e.exports=a.p+"static/media/instagram.ba9f1ff3.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedin.6fcd315d.svg"},function(e,t,a){e.exports=a.p+"static/media/pinterest.cbcf7c4e.svg"},function(e,t,a){e.exports=a.p+"static/media/twitter.c32a7e16.svg"},function(e,t,a){e.exports=a.p+"static/media/whatsapp.c1deb6ce.svg"},,function(e,t,a){e.exports=a.p+"static/media/artwork-1.3395f695.jpeg"},function(e,t,a){e.exports=a.p+"static/media/artwork-2.33f88ac7.jpeg"},function(e,t,a){e.exports=a.p+"static/media/exhibition-1.e8b8778b.jpeg"},,function(e,t,a){e.exports=a(95)},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var i,n,r,o,s=a(17),c=a(0),l=a.n(c),m=a(16),u=a.n(m),d=(a(71),a(1)),p=a(2),h=a(3),g=a(4),f=a(5),b=(a(72),function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"renderMenuItem",value:function(e,t){var a=this,i=this.props.selected===t?"navigation-item selected":"navigation-item";return l.a.createElement("span",{key:t,className:i,onClick:function(){return a.props.onMenuItemClick(t)}},e)}},{key:"render",value:function(){return l.a.createElement("div",{className:"menu"},l.a.createElement("div",{className:"title"},this.props.title),l.a.createElement("div",{className:"navigation"},this.renderMenuItem("HOME","home"),this.renderMenuItem("ARTWORKS","artworks"),this.renderMenuItem("EXHIBITIONS","exhibitions"),this.renderMenuItem("BIOGRAPHY","biography"),this.renderMenuItem("CONTACT","contact")))}}]),a}(l.a.Component)),y=a(6),v=(a(73),i=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={layer:{image:"",amount:0,children:null},intervalId:null,current:0},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e;this.setState({layer:{image:null===(e=this.props.images)||void 0===e?void 0:e[0],amount:.8,children:null},intervalId:setInterval(this.toggeImage,1e3*this.props.secondsInterval),current:0})}},{key:"componentWillUnmount",value:function(){if(null!=this.state.intervalId){var e=this.state.intervalId;clearInterval(e)}}},{key:"toggeImage",value:function(){var e=this.state.current+1<this.props.images.length?this.state.current+1:0;this.setState({layer:{image:this.props.images[e],amount:.8,children:null},current:e})}},{key:"render",value:function(){return null==this.state.intervalId?null:l.a.createElement(s.ParallaxBanner,{layers:[this.state.layer],style:{height:"".concat(window.innerHeight-168,"px")}})}}]),a}(l.a.Component),Object(f.a)(i.prototype,"toggeImage",[y.a],Object.getOwnPropertyDescriptor(i.prototype,"toggeImage"),i.prototype),i),k=(a(74),a(75),function(e){return l.a.createElement("div",{className:"caption"},l.a.createElement("div",{className:"caption-title"},e.title),l.a.createElement("div",{className:"caption-text"},e.text),e.additionalInfo?l.a.createElement("div",{className:"caption-additional-info"},e.additionalInfo):null)}),E=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.img,i=t.title,n=t.meta,r=t.additionalInfo,o=t.type;return l.a.createElement("div",{key:a,className:"card",onClick:function(){return null!=e.props.onClick?e.props.onClick({img:a,title:i,meta:n,additionalInfo:r,type:o}):null}},l.a.createElement("img",{src:a,alt:i}),l.a.createElement(k,{title:i,text:n,additionalInfo:r}))}}]),a}(l.a.Component),x=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"renderCard",value:function(e){return l.a.createElement(E,{key:e.img,img:e.img,title:e.title,meta:e.meta,additionalInfo:e.additionalInfo,type:e.type})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,{images:this.props.menuImages,secondsInterval:6}),l.a.createElement("div",{className:"cards"},this.props.cards.map(this.renderCard)))}}]),a}(l.a.Component),w=(a(76),a(36)),O=a.n(w),I=a(37),j=a.n(I),S=a(38),N=a.n(S),C=a(39),A=a.n(C),T=a(40),L=a.n(T),q=a(41),M=a.n(q),P=function(e){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer-title"},l.a.createElement("span",{className:"copyright"},e.copyrightMessage),l.a.createElement("br",null),l.a.createElement("span",{className:"credits"},"Site by Silvio Biasiol")),l.a.createElement("div",{className:"footer-socials"},l.a.createElement("a",{href:e.social.facebook},l.a.createElement("img",{className:"socials-icon",src:O.a,alt:"facebook"})),l.a.createElement("a",{href:e.social.instagram},l.a.createElement("img",{className:"socials-icon",src:j.a,alt:"instagram"})),l.a.createElement("a",{href:e.social.linkedin},l.a.createElement("img",{className:"socials-icon",src:N.a,alt:"linkedin"})),l.a.createElement("a",{href:e.social.pinterest},l.a.createElement("img",{className:"socials-icon",src:A.a,alt:"pinterest"})),l.a.createElement("a",{href:e.social.twitter},l.a.createElement("img",{className:"socials-icon",src:L.a,alt:"twitter"})),l.a.createElement("a",{href:e.social.whatsapp},l.a.createElement("img",{className:"socials-icon",src:M.a,alt:"whatsapp"}))))},D=a(27),G=a(18),H=a(42),R=(a(77),a(78),function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"renderSection",value:function(e,t){return l.a.createElement("div",{key:"section-".concat(t),className:"section"},e.title?l.a.createElement("span",{className:"section-title"},e.title):null,e.content)}},{key:"render",value:function(){return l.a.createElement("div",{className:"detail"},l.a.createElement("div",{className:"detail-image-container"},l.a.createElement("img",{className:"detail-image",src:this.props.img,alt:this.props.title})),l.a.createElement("div",{className:"detail-title-and-sections-container"},l.a.createElement("div",{className:"detail-title-container"},this.props.title),l.a.createElement("div",{className:"detail-sections-container"},this.props.sections.map(this.renderSection))))}}]),a}(l.a.Component)),B=(n=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={categories:[],artworks:[],selectedCategories:{},selectedArtwork:null,lastY:0},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=new Set,t=[],a={};this.props.artworks.forEach((function(i){e.add(i.category),t.push(i),i.category in a&&(a[i.category]=!1)})),this.setState({categories:Array.from(e.values()),artworks:t,selectedCategories:a})}},{key:"renderArtworkPreview",value:function(e){var t=this;return l.a.createElement(E,{key:e.img,img:e.img,title:e.title,meta:e.meta,type:"artwork",additionalInfo:e.year,onClick:function(e){var a;t.setState({selectedArtwork:null!==(a=t.state.artworks.find((function(t){return t.img===e.img})))&&void 0!==a?a:null,lastY:window.scrollY},(function(){return window.scrollTo(0,300)}))}})}},{key:"toggleCategory",value:function(e,t){this.setState({selectedCategories:Object(H.a)({},this.state.selectedCategories,Object(G.a)({},e,t))})}},{key:"renderCategoryCheckbox",value:function(e){var t=this,a=this.state.selectedCategories;return l.a.createElement("div",{key:e,className:"category-checkbox-container"},l.a.createElement("label",null,l.a.createElement("input",{key:e,className:"regular-checkbox",type:"checkbox",onChange:function(a){return t.toggleCategory(e,a.target.checked)},checked:a[e]}),"\xa0",e.toLocaleUpperCase()))}},{key:"renderCategorySelector",value:function(){return null!=this.state.selectedArtwork?null:l.a.createElement("div",{className:"category-selector"},this.state.categories.map(this.renderCategoryCheckbox))}},{key:"renderArtworks",value:function(){var e=this;if(null!=this.state.selectedArtwork)return null;var t=[];return Object.entries(this.state.selectedCategories).every((function(e){var t=Object(D.a)(e,2);t[0];return!t[1]}))?l.a.createElement("div",{className:"cards"},this.props.artworks.map(this.renderArtworkPreview)):(Object.entries(this.state.selectedCategories).forEach((function(a){var i=Object(D.a)(a,2),n=i[0];i[1]&&e.state.artworks.forEach((function(e){e.category===n&&t.push(e)}))})),l.a.createElement("div",{className:"cards"},t.map(this.renderArtworkPreview)))}},{key:"hideDetail",value:function(){var e=this.state.lastY;this.setState({selectedArtwork:null,lastY:0},(function(){window.scrollTo(0,e)}))}},{key:"selectCategoryFromDetail",value:function(e){this.toggleCategory(e,!0),this.hideDetail()}},{key:"renderCategoryDetail",value:function(e){var t=this;return l.a.createElement("span",{className:"category-detail",onClick:function(){return t.selectCategoryFromDetail(e)}},e.toUpperCase())}},{key:"renderSelectedArtwork",value:function(){if(null==this.state.selectedArtwork)return null;var e=this.state.selectedArtwork;return l.a.createElement(R,{title:"".concat(e.title,", ").concat(e.year),img:e.img,sections:[{content:l.a.createElement(l.a.Fragment,null,e.meta,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("i",null,e.technique),l.a.createElement("br",null),l.a.createElement("br",null),e.size)},{title:"FIND SIMILAR ARTWORKS",content:this.renderCategoryDetail(e.category)},{content:l.a.createElement("i",{className:"link-back-to-artworks",onClick:this.hideDetail},"Go back to the artworks list")}],onClose:this.hideDetail})}},{key:"render",value:function(){return 0===this.state.categories.length?null:l.a.createElement("div",{className:"artworks"},l.a.createElement("div",{className:"artworks-title"},"ARTWORKS"),this.renderCategorySelector(),this.renderArtworks(),this.renderSelectedArtwork())}}]),a}(l.a.Component),Object(f.a)(n.prototype,"renderArtworkPreview",[y.a],Object.getOwnPropertyDescriptor(n.prototype,"renderArtworkPreview"),n.prototype),Object(f.a)(n.prototype,"toggleCategory",[y.a],Object.getOwnPropertyDescriptor(n.prototype,"toggleCategory"),n.prototype),Object(f.a)(n.prototype,"renderCategoryCheckbox",[y.a],Object.getOwnPropertyDescriptor(n.prototype,"renderCategoryCheckbox"),n.prototype),Object(f.a)(n.prototype,"hideDetail",[y.a],Object.getOwnPropertyDescriptor(n.prototype,"hideDetail"),n.prototype),Object(f.a)(n.prototype,"renderSelectedArtwork",[y.a],Object.getOwnPropertyDescriptor(n.prototype,"renderSelectedArtwork"),n.prototype),n),U=a(43),z=a.n(U),Y=a(44),F=a.n(Y),W=a(20),K=a.n(W),J=a(21),X=a.n(J),Q=a(22),V=a.n(Q),Z=a(23),$=a.n(Z),_=a(24),ee=a.n(_),te=a(25),ae=a.n(te),ie=a(26),ne=a.n(ie),re=a(45),oe=a.n(re),se=a(7),ce=a.n(se),le=a(8),me=a.n(le),ue=a(9),de=a.n(ue),pe=a(10),he=a.n(pe),ge={title:"MICHELE CRISCUOLO",home:{menuImages:[z.a,F.a],cards:[{img:K.a,title:"SOMETHING BLA",meta:"Lorem ipsum sum",additionalInfo:"30 September 1993",type:"artwork"},{img:X.a,title:"SOMETHING BLA",meta:"Lorem ipsum sum",additionalInfo:"30 September 1993",type:"artwork"},{img:V.a,title:"SOMETHING BLA",meta:"Lorem ipsum sum",additionalInfo:"30 September 1993",type:"artwork"},{img:$.a,title:"SOMETHING BLA",meta:"Lorem ipsum sum",additionalInfo:"30 September 1993",type:"artwork"},{img:ee.a,title:"SOMETHING BLA",meta:"Lorem ipsum sum",additionalInfo:"30 September 1993",type:"artwork"},{img:ae.a,title:"SOMETHING BLA",meta:"Lorem ipsum sum",additionalInfo:"30 September 1993",type:"artwork"},{img:ne.a,title:"SOMETHING BLA",meta:"Lorem ipsum sum",additionalInfo:"30 September 1993",type:"artwork"}]},artworks:{artworks:[{img:K.a,title:"SOMETHING BLA",technique:"Poo on canvas",size:"23.7 x 23.7 x 0.5 cm",meta:"Lorem ipsum sum",year:"1993",category:"paintings",keywords:["nature"],exhibitions:[]},{img:X.a,title:"SOMETHING BLA",technique:"Poo on canvas",size:"23.7 x 23.7 x 0.5 cm",meta:"Lorem ipsum sum",year:"1993",category:"sculptures",keywords:["woman"],exhibitions:[]},{img:V.a,title:"SOMETHING BLA",technique:"Poo on canvas",size:"23.7 x 23.7 x 0.5 cm",meta:"Lorem ipsum sum",year:"1993",category:"digital art",keywords:["man"],exhibitions:[]},{img:$.a,title:"SOMETHING BLA",technique:"Poo on canvas",size:"23.7 x 23.7 x 0.5 cm",meta:"Lorem ipsum sum",year:"1993",category:"special",keywords:["whatever"],exhibitions:[]},{img:ee.a,title:"SOMETHING BLA",technique:"Poo on canvas",size:"23.7 x 23.7 x 0.5 cm",meta:"Lorem ipsum sum",year:"1993",category:"drawing",keywords:["happiness"],exhibitions:[]},{img:ae.a,title:"SOMETHING BLA",technique:"Poo on canvas",size:"23.7 x 23.7 x 0.5 cm",meta:"Lorem ipsum sum",year:"1993",category:"paintings",keywords:["woman"],exhibitions:[]},{img:ne.a,title:"SOMETHING BLA",technique:"Poo on canvas",size:"23.7 x 23.7 x 0.5 cm",meta:"Lorem ipsum sum",year:"1993",category:"sculptures",keywords:["woman"],exhibitions:[]}]},exhibitions:{exhibitions:[{img:oe.a,name:"Exhibition in Rome",from:"2020-03-02",until:"2020-03-02",place:"Galleria degli Uffizi, Roma",descriptionShort:"A short description for this exhibition",galleryImages:[ce.a,me.a,de.a,he.a],description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{img:ce.a,name:"Exhibition in Rome",from:"2020-03-02",until:"2020-03-02",place:"Galleria degli Uffizi, Roma",descriptionShort:"A short description for this exhibition",galleryImages:[ce.a,me.a,de.a,he.a],description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{img:me.a,name:"Exhibition in Rome",from:"2020-03-02",until:"2020-03-02",place:"Galleria degli Uffizi, Roma",descriptionShort:"A short description for this exhibition",galleryImages:[ce.a,me.a,de.a,he.a],description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{img:de.a,name:"Exhibition in Rome",from:"2020-03-02",until:"2020-03-02",place:"Galleria degli Uffizi, Roma",descriptionShort:"A short description for this exhibition",galleryImages:[ce.a,me.a,de.a,he.a],description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{img:he.a,name:"Exhibition in Rome",from:"2020-03-02",until:"2020-03-02",place:"Galleria degli Uffizi, Roma",descriptionShort:"A short description for this exhibition",galleryImages:[ce.a,me.a,de.a,he.a],description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]},footer:{copyrightMessage:"COPYRIGHT \xa9 2020 MICHELE CRISCUOLO",social:{facebook:"my-link-to-social",instagram:"my-link-to-social",linkedin:"my-link-to-social",pinterest:"my-link-to-social",twitter:"my-link-to-social",whatsapp:"my-link-to-social"}}},fe=(a(79),a(46)),be=a.n(fe),ye=(r=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={selectedExhibition:null,lastY:0},e}return Object(p.a)(a,[{key:"hideSelectedExhibition",value:function(){var e=this.state.lastY;this.setState({selectedExhibition:null,lastY:0},(function(){window.scrollTo(0,e)}))}},{key:"renderSlideshow",value:function(){var e=this.state.selectedExhibition,t={autoplay:!0,autoplaySpeed:3e3,centerMode:!0,centerPadding:"200px",slidesToShow:3,slidesToScroll:1,arrows:!1,responsive:[{breakpoint:1e3,settings:{arrows:!1,centerMode:!0,centerPadding:"40px",slidesToShow:1}}]};return l.a.createElement("div",{className:"slider-container"},l.a.createElement(be.a,t,e.galleryImages.map((function(e){return l.a.createElement("div",{key:e},l.a.createElement("img",{src:e}))}))))}},{key:"renderSelectedExhibition",value:function(){if(null==this.state.selectedExhibition)return null;var e=this.state.selectedExhibition;return l.a.createElement("div",{className:"exhibition-detail"},l.a.createElement("div",{className:"exhibition-name"},e.name.toUpperCase()),l.a.createElement("div",{className:"exhibition-place"},e.place),l.a.createElement("div",{className:"exhibition-date"},e.from," - ",e.until),l.a.createElement("div",{className:"exhibition-short-description"},e.descriptionShort),this.renderSlideshow(),l.a.createElement("div",{className:"exhibition-long-description"},e.description),l.a.createElement("div",{className:"exhibition-link-back-container"},l.a.createElement("i",{className:"link-back-to-exhibitions",onClick:this.hideSelectedExhibition},"Go back to the exhibitions list")))}},{key:"renderExhibitionPreview",value:function(e){var t=this;return l.a.createElement(E,{key:e.img,img:e.img,title:e.name,meta:e.descriptionShort,type:"exhibition",additionalInfo:"From ".concat(e.from," until ").concat(e.until),onClick:function(e){var a;return t.setState({selectedExhibition:null!==(a=t.props.exhibitions.find((function(t){return t.img===e.img})))&&void 0!==a?a:null,lastY:window.scrollY},(function(){return window.scrollTo(0,170)}))}})}},{key:"renderExhibitions",value:function(){return null!=this.state.selectedExhibition?null:l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"exhibitions-title"},"EXHIBITIONS"),l.a.createElement("div",{className:"cards"},this.props.exhibitions.map(this.renderExhibitionPreview)))}},{key:"render",value:function(){return l.a.createElement("div",{className:"exhibitions"},this.renderExhibitions(),this.renderSelectedExhibition())}}]),a}(l.a.Component),Object(f.a)(r.prototype,"hideSelectedExhibition",[y.a],Object.getOwnPropertyDescriptor(r.prototype,"hideSelectedExhibition"),r.prototype),Object(f.a)(r.prototype,"renderExhibitionPreview",[y.a],Object.getOwnPropertyDescriptor(r.prototype,"renderExhibitionPreview"),r.prototype),r),ve=(o=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={currentTab:"home"},e}return Object(p.a)(a,[{key:"toggleTab",value:function(e){this.setState({currentTab:e})}},{key:"renderCurrentTab",value:function(){return window.scrollTo(0,0),"home"===this.state.currentTab?l.a.createElement(x,ge.home):"artworks"===this.state.currentTab?l.a.createElement(B,ge.artworks):"exhibitions"===this.state.currentTab?l.a.createElement(ye,ge.exhibitions):void 0}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{onMenuItemClick:this.toggleTab,selected:this.state.currentTab,title:ge.title}),this.renderCurrentTab(),l.a.createElement(P,ge.footer))}}]),a}(l.a.Component),Object(f.a)(o.prototype,"toggleTab",[y.a],Object.getOwnPropertyDescriptor(o.prototype,"toggleTab"),o.prototype),o);u.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s.ParallaxProvider,null,l.a.createElement(ve,null))),document.getElementById("root"))}],[[47,1,2]]]);
//# sourceMappingURL=main.b9171a1b.chunk.js.map