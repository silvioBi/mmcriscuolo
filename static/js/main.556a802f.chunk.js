(this["webpackJsonpmichele-criscuolo"]=this["webpackJsonpmichele-criscuolo"]||[]).push([[0],[,,,,,,,function(e,t,i){e.exports=i.p+"static/media/exhibition-2.ce3b1c98.jpeg"},function(e,t,i){e.exports=i.p+"static/media/exhibition-3.9cc9f7af.jpeg"},function(e,t,i){e.exports=i.p+"static/media/exhibition-4.d062be94.jpeg"},function(e,t,i){e.exports=i.p+"static/media/exhibition-5.599a1d71.jpeg"},,,,,,,,,,function(e,t,i){e.exports=i.p+"static/media/artwork-3.28f89133.jpeg"},function(e,t,i){e.exports=i.p+"static/media/artwork-4.2fd199ed.jpeg"},function(e,t,i){e.exports=i.p+"static/media/artwork-5.23db547a.jpeg"},function(e,t,i){e.exports=i.p+"static/media/exhibition-1.e8b8778b.jpeg"},,,,,,,,,,function(e,t,i){e.exports=i.p+"static/media/facebook.4f43000c.svg"},function(e,t,i){e.exports=i.p+"static/media/instagram.ba9f1ff3.svg"},function(e,t,i){e.exports=i.p+"static/media/linkedin.6fcd315d.svg"},function(e,t,i){e.exports=i.p+"static/media/pinterest.cbcf7c4e.svg"},function(e,t,i){e.exports=i.p+"static/media/twitter.c32a7e16.svg"},function(e,t,i){e.exports=i.p+"static/media/whatsapp.c1deb6ce.svg"},,function(e,t,i){e.exports=i.p+"static/media/artwork-1.3395f695.jpeg"},function(e,t,i){e.exports=i.p+"static/media/artwork-2.33f88ac7.jpeg"},function(e,t,i){e.exports=i.p+"static/media/artwork-6.0fcf97fc.jpeg"},function(e,t,i){e.exports=i.p+"static/media/artwork-7.501cb466.jpeg"},function(e,t,i){e.exports=i.p+"static/media/artwork-8.3670d2f8.jpeg"},function(e,t,i){e.exports=i.p+"static/media/artwork-9.5b4cc9f6.jpeg"},,function(e,t,i){e.exports=i(95)},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},,,,,,,,,,,,,,,,function(e,t,i){"use strict";i.r(t);var a,n,r,o,s,l=i(17),c=i(0),m=i.n(c),u=i(16),d=i.n(u),p=(i(71),i(1)),h=i(2),g=i(3),f=i(4),b=i(5),y=(i(72),function(e){Object(f.a)(i,e);var t=Object(g.a)(i);function i(){return Object(p.a)(this,i),t.apply(this,arguments)}return Object(h.a)(i,[{key:"renderMenuItem",value:function(e,t){var i=this,a=this.props.selected===t?"navigation-item selected":"navigation-item";return m.a.createElement("span",{key:t,className:a,onClick:function(){return i.props.onMenuItemClick(t,null,null)}},e)}},{key:"render",value:function(){return m.a.createElement("div",{className:"menu"},m.a.createElement("div",{className:"title"},this.props.title),m.a.createElement("div",{className:"navigation"},this.renderMenuItem("HOME","home"),this.renderMenuItem("ARTWORKS","artworks"),this.renderMenuItem("EXHIBITIONS","exhibitions"),this.renderMenuItem("BIOGRAPHY","biography"),this.renderMenuItem("CONTACT","contact")))}}]),i}(m.a.Component)),v=i(6),k=(i(73),a=function(e){Object(f.a)(i,e);var t=Object(g.a)(i);function i(){var e;Object(p.a)(this,i);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={layer:{image:"",amount:0,children:null},intervalId:null,current:0},e}return Object(h.a)(i,[{key:"componentDidMount",value:function(){var e;this.setState({layer:{image:null===(e=this.props.images)||void 0===e?void 0:e[0],amount:.8,children:null},intervalId:setInterval(this.toggeImage,1e3*this.props.secondsInterval),current:0})}},{key:"componentWillUnmount",value:function(){if(null!=this.state.intervalId){var e=this.state.intervalId;clearInterval(e)}}},{key:"toggeImage",value:function(){var e=this.state.current+1<this.props.images.length?this.state.current+1:0;this.setState({layer:{image:this.props.images[e],amount:.8,children:null},current:e})}},{key:"render",value:function(){return null==this.state.intervalId?null:m.a.createElement(l.ParallaxBanner,{layers:[this.state.layer],style:{height:"".concat(window.innerHeight-168,"px")}})}}]),i}(m.a.Component),Object(b.a)(a.prototype,"toggeImage",[v.a],Object.getOwnPropertyDescriptor(a.prototype,"toggeImage"),a.prototype),a),E=(i(74),i(75),function(e){return m.a.createElement("div",{className:"caption"},m.a.createElement("div",{className:"caption-title"},e.title),m.a.createElement("div",{className:"caption-text"},e.text),e.additionalInfo?m.a.createElement("div",{className:"caption-additional-info"},e.additionalInfo):null)}),x=function(e){Object(f.a)(i,e);var t=Object(g.a)(i);function i(){return Object(p.a)(this,i),t.apply(this,arguments)}return Object(h.a)(i,[{key:"render",value:function(){var e=this,t=this.props,i=t.img,a=t.title,n=t.meta,r=t.additionalInfo,o=t.type;return m.a.createElement("div",{key:i+a,className:"card",onClick:function(){return null!=e.props.onClick?e.props.onClick({img:i,title:a,meta:n,additionalInfo:r,type:o}):null}},m.a.createElement("img",{src:i,alt:a}),m.a.createElement(E,{title:a,text:n,additionalInfo:r}))}}]),i}(m.a.Component),w=(n=function(e){Object(f.a)(i,e);var t=Object(g.a)(i);function i(){return Object(p.a)(this,i),t.apply(this,arguments)}return Object(h.a)(i,[{key:"renderCard",value:function(e){var t=this;return m.a.createElement(x,{key:e.img+e.title,img:e.img,title:e.title,meta:e.meta,additionalInfo:e.additionalInfo,type:e.type,onClick:function(){return t.props.onCardClick(e.type,e.title,e.type)}})}},{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(k,{images:this.props.menuImages,secondsInterval:6}),m.a.createElement("div",{className:"cards"},this.props.cards.map(this.renderCard)))}}]),i}(m.a.Component),Object(b.a)(n.prototype,"renderCard",[v.a],Object.getOwnPropertyDescriptor(n.prototype,"renderCard"),n.prototype),n),O=(i(76),i(33)),j=i.n(O),C=i(34),I=i.n(C),S=i(35),N=i.n(S),A=i(36),T=i.n(A),q=i(37),P=i.n(q),L=i(38),D=i.n(L),M=function(e){return m.a.createElement("div",{className:"footer"},m.a.createElement("div",{className:"footer-title"},m.a.createElement("span",{className:"copyright"},e.copyrightMessage),m.a.createElement("br",null),m.a.createElement("span",{className:"credits"},"Site by Silvio Biasiol")),m.a.createElement("div",{className:"footer-socials"},m.a.createElement("a",{href:e.social.facebook},m.a.createElement("img",{className:"socials-icon",src:j.a,alt:"facebook"})),m.a.createElement("a",{href:e.social.instagram},m.a.createElement("img",{className:"socials-icon",src:I.a,alt:"instagram"})),m.a.createElement("a",{href:e.social.linkedin},m.a.createElement("img",{className:"socials-icon",src:N.a,alt:"linkedin"})),m.a.createElement("a",{href:e.social.pinterest},m.a.createElement("img",{className:"socials-icon",src:T.a,alt:"pinterest"})),m.a.createElement("a",{href:e.social.twitter},m.a.createElement("img",{className:"socials-icon",src:P.a,alt:"twitter"})),m.a.createElement("a",{href:e.social.whatsapp},m.a.createElement("img",{className:"socials-icon",src:D.a,alt:"whatsapp"}))))},z=i(24),U=i(18),R=i(39),F=(i(77),i(78),function(e){Object(f.a)(i,e);var t=Object(g.a)(i);function i(){return Object(p.a)(this,i),t.apply(this,arguments)}return Object(h.a)(i,[{key:"renderSection",value:function(e,t){return m.a.createElement("div",{key:"section-".concat(t),className:"section"},e.title?m.a.createElement("span",{className:"section-title"},e.title):null,e.content)}},{key:"render",value:function(){return m.a.createElement("div",{className:"detail"},m.a.createElement("div",{className:"detail-image-container"},m.a.createElement("img",{className:"detail-image",src:this.props.img,alt:this.props.title})),m.a.createElement("div",{className:"detail-title-and-sections-container"},m.a.createElement("div",{className:"detail-title-container"},this.props.title),m.a.createElement("div",{className:"detail-sections-container"},this.props.sections.map(this.renderSection))))}}]),i}(m.a.Component)),G=(r=function(e){Object(f.a)(i,e);var t=Object(g.a)(i);function i(){var e;Object(p.a)(this,i);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={categories:[],artworks:[],selectedCategories:{},selectedArtwork:null,lastY:0},e}return Object(h.a)(i,[{key:"componentDidMount",value:function(){var e,t=this,i=new Set,a=[],n={},r=null;null!=this.props.selectedElement&&(r=null!==(e=this.props.artworks.find((function(e){return e.title===t.props.selectedElement})))&&void 0!==e?e:null);this.props.artworks.forEach((function(e){i.add(e.category),a.push(e),e.category in n&&(n[e.category]=!1)})),this.setState({categories:Array.from(i.values()),artworks:a,selectedCategories:n,selectedArtwork:r},(function(){return r?window.scrollTo(0,300):null}))}},{key:"renderArtworkPreview",value:function(e){var t=this;return m.a.createElement(x,{key:e.img+e.title,img:e.img,title:e.title,meta:e.meta,type:"artwork",additionalInfo:e.year,onClick:function(e){var i;t.setState({selectedArtwork:null!==(i=t.state.artworks.find((function(t){return t.img===e.img})))&&void 0!==i?i:null,lastY:window.scrollY},(function(){return window.scrollTo(0,300)}))}})}},{key:"toggleCategory",value:function(e,t){this.setState({selectedCategories:Object(R.a)({},this.state.selectedCategories,Object(U.a)({},e,t))})}},{key:"renderCategoryCheckbox",value:function(e){var t=this,i=this.state.selectedCategories;return m.a.createElement("div",{key:e,className:"category-checkbox-container"},m.a.createElement("label",null,m.a.createElement("input",{key:e,className:"regular-checkbox",type:"checkbox",onChange:function(i){return t.toggleCategory(e,i.target.checked)},checked:i[e]}),"\xa0",e.toLocaleUpperCase()))}},{key:"renderCategorySelector",value:function(){return null!=this.state.selectedArtwork?null:m.a.createElement("div",{className:"category-selector"},this.state.categories.map(this.renderCategoryCheckbox))}},{key:"renderArtworks",value:function(){var e=this;if(null!=this.state.selectedArtwork)return null;var t=[];return Object.entries(this.state.selectedCategories).every((function(e){var t=Object(z.a)(e,2);t[0];return!t[1]}))?m.a.createElement("div",{className:"cards"},this.props.artworks.map(this.renderArtworkPreview)):(Object.entries(this.state.selectedCategories).forEach((function(i){var a=Object(z.a)(i,2),n=a[0];a[1]&&e.state.artworks.forEach((function(e){e.category===n&&t.push(e)}))})),m.a.createElement("div",{className:"cards"},t.map(this.renderArtworkPreview)))}},{key:"hideDetail",value:function(){var e=this.state.lastY;this.setState({selectedArtwork:null,lastY:0},(function(){window.scrollTo(0,e)}))}},{key:"selectCategoryFromDetail",value:function(e){this.toggleCategory(e,!0),this.hideDetail()}},{key:"renderCategoryDetail",value:function(e){var t=this;return m.a.createElement("span",{className:"category-detail",onClick:function(){return t.selectCategoryFromDetail(e)}},e.toUpperCase())}},{key:"renderSelectedArtwork",value:function(){if(null==this.state.selectedArtwork)return null;var e=this.state.selectedArtwork;return m.a.createElement(F,{title:"".concat(e.title,", ").concat(e.year),img:e.img,sections:[{content:m.a.createElement(m.a.Fragment,null,e.meta,m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("i",null,e.technique),m.a.createElement("br",null),m.a.createElement("br",null),e.size)},{title:"FIND SIMILAR ARTWORKS",content:this.renderCategoryDetail(e.category)},{content:m.a.createElement("i",{className:"link-back-to-artworks",onClick:this.hideDetail},"Go back to the artworks list")}],onClose:this.hideDetail})}},{key:"render",value:function(){return 0===this.state.categories.length?null:m.a.createElement("div",{className:"artworks"},m.a.createElement("div",{className:"artworks-title"},"ARTWORKS"),this.renderCategorySelector(),this.renderArtworks(),this.renderSelectedArtwork())}}]),i}(m.a.Component),Object(b.a)(r.prototype,"renderArtworkPreview",[v.a],Object.getOwnPropertyDescriptor(r.prototype,"renderArtworkPreview"),r.prototype),Object(b.a)(r.prototype,"toggleCategory",[v.a],Object.getOwnPropertyDescriptor(r.prototype,"toggleCategory"),r.prototype),Object(b.a)(r.prototype,"renderCategoryCheckbox",[v.a],Object.getOwnPropertyDescriptor(r.prototype,"renderCategoryCheckbox"),r.prototype),Object(b.a)(r.prototype,"hideDetail",[v.a],Object.getOwnPropertyDescriptor(r.prototype,"hideDetail"),r.prototype),Object(b.a)(r.prototype,"renderSelectedArtwork",[v.a],Object.getOwnPropertyDescriptor(r.prototype,"renderSelectedArtwork"),r.prototype),r),B=i(40),H=i.n(B),Y=i(41),W=i.n(Y),K=i(20),J=i.n(K),X=i(21),Q=i.n(X),V=i(22),Z=i.n(V),$=i(42),_=i.n($),ee=i(43),te=i.n(ee),ie=i(44),ae=i.n(ie),ne=i(45),re=i.n(ne),oe=i(23),se=i.n(oe),le=i(7),ce=i.n(le),me=i(8),ue=i.n(me),de=i(9),pe=i.n(de),he=i(10),ge=i.n(he),fe={title:"MICHELE CRISCUOLO",home:{menuImages:[H.a,W.a],cards:[{img:J.a,title:"Some artwork name",meta:"Lorem ipsum sum",additionalInfo:"30 September 1993",type:"artworks"},{img:Q.a,title:"Some other artwork",meta:"Lorem ipsum sum",additionalInfo:"30 September 1993",type:"artworks"},{img:Z.a,title:"And another one",meta:"Lorem ipsum sum",additionalInfo:"30 September 1993",type:"artworks"},{img:se.a,title:"Mostra dei quadri di Firenze",meta:"Lorem ipsum sum",additionalInfo:"From 2020-03-02 until 2020-03-02",type:"exhibitions"},{img:ce.a,title:"Mostra Le Bellezze",meta:"Lorem ipsum sum",additionalInfo:"From 2020-03-02 until 2020-03-02",type:"exhibitions"},{img:ue.a,title:"Una mostra superfiga",meta:"Lorem ipsum sum",additionalInfo:"From 2020-03-02 until 2020-03-02",type:"exhibitions"},{img:pe.a,title:"E ancora una mostra superfiga",meta:"Lorem ipsum sum",additionalInfo:"From 2020-03-02 until 2020-03-02",type:"exhibitions"}]},artworks:{artworks:[{img:J.a,title:"Some artwork name",technique:"Poo on canvas",size:"23.7 x 23.7 x 0.5 cm",meta:"Lorem ipsum sum",year:"1993",category:"paintings",keywords:["nature"],exhibitions:[]},{img:Q.a,title:"Some other artwork",technique:"Poo on canvas",size:"23.7 x 23.7 x 0.5 cm",meta:"Lorem ipsum sum",year:"1993",category:"sculptures",keywords:["woman"],exhibitions:[]},{img:Z.a,title:"And another one",technique:"Poo on canvas",size:"23.7 x 23.7 x 0.5 cm",meta:"Lorem ipsum sum",year:"1993",category:"digital art",keywords:["man"],exhibitions:[]},{img:_.a,title:"SOMETHING BLA",technique:"Poo on canvas",size:"23.7 x 23.7 x 0.5 cm",meta:"Lorem ipsum sum",year:"1993",category:"special",keywords:["whatever"],exhibitions:[]},{img:te.a,title:"SOMETHING BLA",technique:"Poo on canvas",size:"23.7 x 23.7 x 0.5 cm",meta:"Lorem ipsum sum",year:"1993",category:"drawing",keywords:["happiness"],exhibitions:[]},{img:ae.a,title:"SOMETHING BLA",technique:"Poo on canvas",size:"23.7 x 23.7 x 0.5 cm",meta:"Lorem ipsum sum",year:"1993",category:"paintings",keywords:["woman"],exhibitions:[]},{img:re.a,title:"SOMETHING BLA",technique:"Poo on canvas",size:"23.7 x 23.7 x 0.5 cm",meta:"Lorem ipsum sum",year:"1993",category:"sculptures",keywords:["woman"],exhibitions:[]}]},exhibitions:{exhibitions:[{img:se.a,name:"Mostra dei quadri di Firenze",from:"2020-03-02",until:"2020-03-02",place:"Galleria degli Uffizi, Roma",descriptionShort:"A short description for this exhibition",galleryImages:[ce.a,ue.a,pe.a,ge.a],description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{img:ce.a,name:"Mostra Le Bellezze",from:"2020-03-02",until:"2020-03-02",place:"Galleria degli Uffizi, Roma",descriptionShort:"A short description for this exhibition",galleryImages:[ce.a,ue.a,pe.a,ge.a],description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{img:ue.a,name:"Una mostra superfiga",from:"2020-03-02",until:"2020-03-02",place:"Galleria degli Uffizi, Roma",descriptionShort:"A short description for this exhibition",galleryImages:[ce.a,ue.a,pe.a,ge.a],description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{img:pe.a,name:"E ancora una mostra superfiga",from:"2020-03-02",until:"2020-03-02",place:"Galleria degli Uffizi, Roma",descriptionShort:"A short description for this exhibition",galleryImages:[ce.a,ue.a,pe.a,ge.a],description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{img:ge.a,name:"Exhibition in Rome",from:"2020-03-02",until:"2020-03-02",place:"Galleria degli Uffizi, Roma",descriptionShort:"A short description for this exhibition",galleryImages:[ce.a,ue.a,pe.a,ge.a],description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]},footer:{copyrightMessage:"COPYRIGHT \xa9 2020 MICHELE CRISCUOLO",social:{facebook:"my-link-to-social",instagram:"my-link-to-social",linkedin:"my-link-to-social",pinterest:"my-link-to-social",twitter:"my-link-to-social",whatsapp:"my-link-to-social"}}},be=(i(79),i(46)),ye=i.n(be),ve=(o=function(e){Object(f.a)(i,e);var t=Object(g.a)(i);function i(){var e;Object(p.a)(this,i);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={selectedExhibition:null,lastY:0},e}return Object(h.a)(i,[{key:"componentDidMount",value:function(){var e,t=this,i=null!==(e=this.props.exhibitions.find((function(e){return e.name===t.props.selectedElement})))&&void 0!==e?e:null;i&&(window.scrollTo(0,170),this.setState({selectedExhibition:i}))}},{key:"hideSelectedExhibition",value:function(){var e=this.state.lastY;this.setState({selectedExhibition:null,lastY:0},(function(){window.scrollTo(0,e)}))}},{key:"renderSlideshow",value:function(){var e=this.state.selectedExhibition,t={autoplay:!0,autoplaySpeed:3e3,centerMode:!0,centerPadding:"200px",slidesToShow:3,slidesToScroll:1,arrows:!1,responsive:[{breakpoint:1e3,settings:{arrows:!1,centerMode:!0,centerPadding:"40px",slidesToShow:1}}]};return m.a.createElement("div",{className:"slider-container"},m.a.createElement(ye.a,t,e.galleryImages.map((function(e){return m.a.createElement("div",{key:e},m.a.createElement("img",{src:e}))}))))}},{key:"renderSelectedExhibition",value:function(){if(null==this.state.selectedExhibition)return null;var e=this.state.selectedExhibition;return m.a.createElement("div",{className:"exhibition-detail"},m.a.createElement("div",{className:"exhibition-name"},e.name.toUpperCase()),m.a.createElement("div",{className:"exhibition-place"},e.place),m.a.createElement("div",{className:"exhibition-date"},e.from," - ",e.until),m.a.createElement("div",{className:"exhibition-short-description"},e.descriptionShort),this.renderSlideshow(),m.a.createElement("div",{className:"exhibition-long-description"},e.description),m.a.createElement("div",{className:"exhibition-link-back-container"},m.a.createElement("i",{className:"link-back-to-exhibitions",onClick:this.hideSelectedExhibition},"Go back to the exhibitions list")))}},{key:"renderExhibitionPreview",value:function(e){var t=this;return m.a.createElement(x,{key:e.img,img:e.img,title:e.name,meta:e.descriptionShort,type:"exhibition",additionalInfo:"From ".concat(e.from," until ").concat(e.until),onClick:function(e){var i;return t.setState({selectedExhibition:null!==(i=t.props.exhibitions.find((function(t){return t.img===e.img})))&&void 0!==i?i:null,lastY:window.scrollY},(function(){return window.scrollTo(0,170)}))}})}},{key:"renderExhibitions",value:function(){return null!=this.state.selectedExhibition?null:m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"exhibitions-title"},"EXHIBITIONS"),m.a.createElement("div",{className:"cards"},this.props.exhibitions.map(this.renderExhibitionPreview)))}},{key:"render",value:function(){return m.a.createElement("div",{className:"exhibitions"},this.renderExhibitions(),this.renderSelectedExhibition())}}]),i}(m.a.Component),Object(b.a)(o.prototype,"hideSelectedExhibition",[v.a],Object.getOwnPropertyDescriptor(o.prototype,"hideSelectedExhibition"),o.prototype),Object(b.a)(o.prototype,"renderExhibitionPreview",[v.a],Object.getOwnPropertyDescriptor(o.prototype,"renderExhibitionPreview"),o.prototype),o),ke=(s=function(e){Object(f.a)(i,e);var t=Object(g.a)(i);function i(){var e;Object(p.a)(this,i);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={currentTab:"home",selectedElement:null,selectedElementType:null},e}return Object(h.a)(i,[{key:"toggleTab",value:function(e,t,i){this.setState({currentTab:e,selectedElement:t,selectedElementType:i})}},{key:"renderCurrentTab",value:function(){window.scrollTo(0,0);var e=this.state,t=e.selectedElement,i=e.selectedElementType;return"home"===this.state.currentTab?m.a.createElement(w,Object.assign({},fe.home,{onCardClick:this.toggleTab})):"artworks"===this.state.currentTab?m.a.createElement(G,Object.assign({},fe.artworks,{selectedElement:"artworks"===i?t:null})):"exhibitions"===this.state.currentTab?m.a.createElement(ve,Object.assign({},fe.exhibitions,{selectedElement:"exhibitions"===i?t:null})):void 0}},{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(y,{onMenuItemClick:this.toggleTab,selected:this.state.currentTab,title:fe.title}),this.renderCurrentTab(),m.a.createElement(M,fe.footer))}}]),i}(m.a.Component),Object(b.a)(s.prototype,"toggleTab",[v.a],Object.getOwnPropertyDescriptor(s.prototype,"toggleTab"),s.prototype),s);d.a.render(m.a.createElement(m.a.StrictMode,null,m.a.createElement(l.ParallaxProvider,null,m.a.createElement(ke,null))),document.getElementById("root"))}],[[47,1,2]]]);
//# sourceMappingURL=main.556a802f.chunk.js.map