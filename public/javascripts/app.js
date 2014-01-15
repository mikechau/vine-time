!function(){"use strict";var e="undefined"!=typeof window?window:global;if("function"!=typeof e.require){var n={},t={},i=function(e,n){return{}.hasOwnProperty.call(e,n)},o=function(e,n){var t,i,o=[];t=/^\.\.?(\/|$)/.test(n)?[e,n].join("/").split("/"):n.split("/");for(var r=0,s=t.length;s>r;r++)i=t[r],".."===i?o.pop():"."!==i&&""!==i&&o.push(i);return o.join("/")},r=function(e){return e.split("/").slice(0,-1).join("/")},s=function(n){return function(t){var i=r(n),s=o(i,t);return e.require(s,n)}},a=function(e,n){var i={id:e,exports:{}};return t[e]=i,n(i.exports,s(e),i),i.exports},l=function(e,r){var s=o(e,".");if(null==r&&(r="/"),i(t,s))return t[s].exports;if(i(n,s))return a(s,n[s]);var l=o(s,"./index");if(i(t,l))return t[l].exports;if(i(n,l))return a(l,n[l]);throw new Error('Cannot find module "'+e+'" from "'+r+'"')},d=function(e,t){if("object"==typeof e)for(var o in e)i(e,o)&&(n[o]=e[o]);else n[e]=t},c=function(){var e=[];for(var t in n)i(n,t)&&e.push(t);return e};e.require=l,e.require.define=d,e.require.register=d,e.require.list=c,e.require.brunch=!0}}(),require.register("application",function(e,n,t){t.exports=Application=Chaplin.Application.extend({})}),require.register("controllers/base/controller",function(e,n,t){var i=n("views/pages/layouts/application"),o=n("views/pages/layouts/navigation"),r=n("views/pages/layouts/footer");t.exports=Chaplin.Controller.extend({beforeAction:function(){this.compose("application",i),this.compose("navigation",o,{region:"navigation"}),this.compose("footer",r,{region:"footer"})}})}),require.register("controllers/home-controller",function(e,n,t){var i=n("controllers/base/controller"),o=n("views/pages/home/index"),r=n("views/pages/home/about");t.exports=i.extend({index:function(){this.view=new o({region:"main"})},about:function(){this.view=new r({region:"main"})}})}),require.register("controllers/videos-controller",function(e,n,t){var i=n("controllers/base/controller"),o=n("models/videos/collection"),r=n("models/videos/model"),s=n("views/pages/videos/index");t.exports=i.extend({index:function(){var e=new o,n=new r;this.view=new s({collection:e,model:n,region:"main"})}})}),require.register("initialize",function(e,n){var t=n("application"),i=n("routes");$(function(){return new t({title:"Brunch example application",controllerSuffix:"-controller",routes:i})})}),require.register("lib/utils",function(e,n,t){var i=Chaplin.utils.beget(Chaplin.utils);"function"==typeof Object.seal&&Object.seal(i),t.exports=i}),require.register("lib/view-helper",function(e,n){var t=n("./utils"),i=function(e,n){return Handlebars.registerHelper(e,n)};i("with",function(e,n){return!e||Handlebars.Utils.isEmpty(e)?n.inverse(this):n.fn(e)}),i("without",function(e,n){var t=n.inverse;return n.inverse=n.fn,n.fn=t,Handlebars.helpers["with"].call(this,e,n)}),i("url",function(e){{var n=[].slice.call(arguments,1);n.pop()}return t.reverse(e,n)})}),require.register("mediator",function(e,n,t){t.exports=Chaplin.mediator}),require.register("models/base/collection",function(e,n,t){var i=n("./model");t.exports=Chaplin.Collection.extend({model:i})}),require.register("models/base/model",function(e,n,t){t.exports=Chaplin.Model.extend({})}),require.register("models/videos/collection",function(e,n,t){var i=n("models/base/collection"),o=n("models/videos/model");t.exports=i.extend({model:o,url:"/api/v1/videos"})}),require.register("models/videos/model",function(e,n,t){var i=n("models/base/model");t.exports=i.extend({defaults:{source:"",id:null,name:"",ts:""}})}),require.register("routes",function(e,n,t){t.exports=function(e){e("","videos#index"),e("home","home#index"),e("about","home#about")}}),require.register("views/base/collection-view",function(e,n,t){var i=n("./view");t.exports=Chaplin.CollectionView.extend({getTemplateFunction:i.prototype.getTemplateFunction})}),require.register("views/base/view",function(e,n,t){t.exports=Chaplin.View.extend({optionNames:Chaplin.View.prototype.optionNames.concat(["template"]),getTemplateFunction:function(){return this.template}})}),require.register("views/pages/home/about",function(e,n,t){var i=n("views/base/view");t.exports=i.extend({autoRender:!0,className:"home-about-page",template:n("views/templates/home/about"),render:function(){i.prototype.render.call(this),_.defer(function(){Holder.run()},this)}})}),require.register("views/pages/home/index",function(e,n,t){var i=n("views/base/view");t.exports=i.extend({autoRender:!0,className:"home-page",template:n("views/templates/home/index")})}),require.register("views/pages/layouts/application",function(e,n,t){var i=n("views/base/view");t.exports=i.extend({container:"#vineosaur-container",id:"application-container",regions:{navigation:"nav",main:"#content-container",footer:"footer"},template:n("views/templates/layouts/application")})}),require.register("views/pages/layouts/footer",function(e,n,t){var i=n("views/base/view");t.exports=i.extend({autoRender:!0,template:n("views/templates/layouts/footer")})}),require.register("views/pages/layouts/navigation",function(e,n,t){var i=n("views/base/view");t.exports=i.extend({autoRender:!0,template:n("views/templates/layouts/navigation")})}),require.register("views/pages/videos/index",function(e,n,t){var i=n("views/base/view"),o=n("views/pages/videos/info");t.exports=i.extend({autoRender:!0,template:n("views/templates/videos/index"),listen:{"change model":"updateVideoSource"},events:{'click button[name="btn-previous"]':"previous",'click button[name="btn-next"]':"next"},container:".video-container",videoMarker:0,numberOfVideos:0,initialize:function(){var e=this;this.collection.fetch({success:function(){e.numberOfVideos=e.collection.length-1,e.setVideoModel()}}),$(document).on("keydown",function(n){n.preventDefault(),e.videoHotkeyControls(n)})},render:function(){var e=this;i.prototype.render.call(this),this.$("video").hide().fadeIn(),_.defer(function(){videojs("video-player").ready(function(){var n=this;e.resizeVideoJS(n),window.onresize=function(){e.resizeVideoJS(n)}})})},renderVideoMetadataSubview:function(){var e=new o({autoRender:!0,container:this.$("#video-subview-container"),model:this.model});this.subview("videoSubview",e)},previous:function(){this.videoMarker<=0?this.videoMarker=this.numberOfVideos:this.videoMarker-=1,this.setVideoModel()},next:function(){this.videoMarker>=this.numberOfVideos?this.videoMarker=0:this.videoMarker+=1,this.setVideoModel()},setVideoModel:function(){var e=this.collection.at(this.videoMarker);this.model.set(e.toJSON())},updateVideoSource:function(){this.$("video")[0].src=this.model.get("source"),this.renderVideoMetadataSubview()},videoHotkeyControls:function(e){var n=e.which,t=this.$("video")[0];switch(n){case 32:t.paused?t.play():t.pause();break;case 37:this.previous();break;case 39:this.next();break;default:return!1}},resizeVideoJS:function(e){var n=document.getElementById(e.id()).parentElement.offsetWidth,t=9/16;e.width(n).height(n*t)}})}),require.register("views/pages/videos/info",function(e,n,t){var i=n("views/base/view");t.exports=i.extend({template:n("views/templates/videos/info")})}),require.register("views/pages/videos/item",function(e,n,t){var i=n("views/base/view");t.exports=i.extend({template:n("views/templates/videos/item"),render:function(){var e=this;i.prototype.render.call(this),this.$("video").hide().fadeIn(),_.defer(function(){videojs("video-player").ready(function(){var n=this;e.resizeVideoJS(n),window.onresize=function(){e.resizeVideoJS(n)}})})},resizeVideoJS:function(e){var n=document.getElementById(e.id()).parentElement.offsetWidth,t=9/16;e.width(n).height(n*t)}})}),require.register("views/templates/home/about",function(e,n,t){var i=Handlebars.template(function(e,n,t,i,o){return this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=o||{},'<div class="container">\n  <div class="row">\n    <div class="col-lg-12">\n      <div class="page-header">\n        <h1>About us <small>...just who are you guys?</small></h1>\n      </div>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-md-10 col-md-offset-1">\n      <div class="col-md-5">\n      <img data-src="holder.js/200x180" alt="Image 1">\n        <h2>Person 1</h2>\n        <p>Dummy Text..</p>\n      </div>\n      <div class="col-md-5 col-md-offset-2">\n      <img data-src="holder.js/200x180" alt="Image 2">\n        <h2>Person 2</h2>\n        <p> Dummy Text..</p>\n      </div>\n    </div>\n  </div>\n</div>'});"function"==typeof define&&define.amd?define([],function(){return i}):"object"==typeof t&&t&&t.exports&&(t.exports=i)}),require.register("views/templates/home/index",function(e,n,t){var i=Handlebars.template(function(e,n,t,i,o){return this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=o||{},'<div class="container-fluid">\n  <div class="jumbotron">\n    <h1>Vineosaur</h1>\n  </div>\n</div>'});"function"==typeof define&&define.amd?define([],function(){return i}):"object"==typeof t&&t&&t.exports&&(t.exports=i)}),require.register("views/templates/layouts/application",function(e,n,t){var i=Handlebars.template(function(e,n,t,i,o){return this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=o||{},'<nav class="navbar navbar-default" role="navigation"></nav>\n\n<div class="content-container" id="content-container">\n</div>\n\n<footer class="wrapper"></footer>'});"function"==typeof define&&define.amd?define([],function(){return i}):"object"==typeof t&&t&&t.exports&&(t.exports=i)}),require.register("views/templates/layouts/footer",function(e,n,t){var i=Handlebars.template(function(e,n,t,i,o){return this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=o||{},'<div class="container-fluid">\n  <div class="row">\n    <div class="col-lg-12 col-md-12">\n      <hr />\n      <p>\n        Built with \n        <a title="Chaplin" href="http://www.chaplinjs.org/">Chaplin</a>, \n        <a title="Rails" href="http://www.rubyonrails.org//">Ruby on Rails</a>, \n        and \n        <a title="Bootstrap" href="http://www.getbootstrap.com/">Bootstrap</a>. \n        Powered by <a title="Heroku" href="https://www.heroku.com/">Heroku</a>.\n      </p>\n      <p>Vineosaur. All rights belong to their respective owners.</p>\n    </div>\n  </div>\n</div>'});"function"==typeof define&&define.amd?define([],function(){return i}):"object"==typeof t&&t&&t.exports&&(t.exports=i)}),require.register("views/templates/layouts/navigation",function(e,n,t){var i=Handlebars.template(function(e,n,t,i,o){return this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=o||{},'<!-- Brand and toggle get grouped for better mobile display -->\n<div class="navbar-header">\n  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n    <span class="sr-only">Toggle navigation</span>\n    <span class="icon-bar"></span>\n    <span class="icon-bar"></span>\n    <span class="icon-bar"></span>\n  </button>\n  <a class="navbar-brand" href="/">Vineosaur</a>\n</div>\n\n<!-- Collect the nav links, forms, and other content for toggling -->\n<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n  <ul class="nav navbar-nav">\n    <li><a href="/">Videos</a></li>\n    <li><a href="about">About</a></li>\n  </ul>\n  <ul class="nav navbar-nav navbar-right">\n    <li class="dropdown">\n      <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>\n      <ul class="dropdown-menu">\n        <li><a href="#">Action</a></li>\n        <li><a href="#">Another action</a></li>\n        <li><a href="#">Something else here</a></li>\n        <li class="divider"></li>\n        <li><a href="#">Separated link</a></li>\n      </ul>\n    </li>\n  </ul>\n</div><!-- /.navbar-collapse -->'});"function"==typeof define&&define.amd?define([],function(){return i}):"object"==typeof t&&t&&t.exports&&(t.exports=i)}),require.register("views/templates/videos/index",function(e,n,t){var i=Handlebars.template(function(e,n,t,i,o){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=o||{};var r,s="",a="function",l=this.escapeExpression;return s+='<div class="container">\n  <div class="row">\n    <div class="col-md-1">\n      <button class="btn-lg" name="btn-previous">\n        <span class="glyphicon glyphicon-chevron-left"></span>\n      </button>\n    </div>\n    <div class="col-md-10">\n      <div class="video-container">\n\n        <video id="video-player" class="video-js vjs-default-skin vjs-big-play-centered center"\n          controls preload="auto" autoplay data-setup="{}">\n           <source src="',(r=t.source)?r=r.call(n,{hash:{},data:o}):(r=n&&n.source,r=typeof r===a?r.call(n,{hash:{},data:o}):r),s+=l(r)+'" type=\'video/mp4\' />\n        </video>\n\n        <div class="container-fluid">\n          <div class="row">\n            <div class="col-md-12">\n              <h1>\n                <span class="text-success">\n                  Vineosaur used vine whip!\n                </span>\n              </h1>\n              <hr />\n            </div>\n          </div>\n\n          <div class="row">\n            <div class="col-md-8">\n              <div id="video-subview-container"></div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <div class="col-md-1">\n      <button class="btn-lg" name="btn-next">\n        <span class="glyphicon glyphicon-chevron-right"></span>\n      </button>\n    </div>\n  </div>\n</div>'});"function"==typeof define&&define.amd?define([],function(){return i}):"object"==typeof t&&t&&t.exports&&(t.exports=i)}),require.register("views/templates/videos/info",function(e,n,t){var i=Handlebars.template(function(e,n,t,i,o){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=o||{};var r,s="",a="function",l=this.escapeExpression;return s+='<h4>posted by <a href="https://www.facebook.com/BestOfVines">Best Vines</a></h4>\n<h5>',(r=t.name)?r=r.call(n,{hash:{},data:o}):(r=n&&n.name,r=typeof r===a?r.call(n,{hash:{},data:o}):r),s+=l(r)+" <small>",(r=t.ts)?r=r.call(n,{hash:{},data:o}):(r=n&&n.ts,r=typeof r===a?r.call(n,{hash:{},data:o}):r),s+=l(r)+"</small></h5>"});"function"==typeof define&&define.amd?define([],function(){return i}):"object"==typeof t&&t&&t.exports&&(t.exports=i)}),require.register("views/templates/videos/item",function(e,n,t){var i=Handlebars.template(function(e,n,t,i,o){this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,e.helpers),o=o||{};var r,s="",a="function",l=this.escapeExpression;return s+='<video id="video-player" class="video-js vjs-default-skin vjs-big-play-centered center"\n  controls preload="auto" autoplay data-setup="{}">\n   <source src="',(r=t.source)?r=r.call(n,{hash:{},data:o}):(r=n&&n.source,r=typeof r===a?r.call(n,{hash:{},data:o}):r),s+=l(r)+'" type=\'video/mp4\' />\n</video>\n\n<div class="container-fluid">\n  <div class="row">\n    <div class="col-md-12">\n      <h1>\n        <span class="text-success">\n          Vineosaur used vine whip!\n        </span>\n      </h1>\n      <hr />\n    </div>\n  </div>\n\n  <div class="row">\n    <div class="col-md-4">\n    <h4>posted by <a href="https://www.facebook.com/BestOfVines">Best Vines</a></h4>\n    <h5>',(r=t.name)?r=r.call(n,{hash:{},data:o}):(r=n&&n.name,r=typeof r===a?r.call(n,{hash:{},data:o}):r),s+=l(r)+"<small>",(r=t.ts)?r=r.call(n,{hash:{},data:o}):(r=n&&n.ts,r=typeof r===a?r.call(n,{hash:{},data:o}):r),s+=l(r)+"</small></h5>\n    </div>\n  </div>\n</div>"});"function"==typeof define&&define.amd?define([],function(){return i}):"object"==typeof t&&t&&t.exports&&(t.exports=i)});