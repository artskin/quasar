module.exports=function(t){function n(d){if(e[d])return e[d].exports;var r=e[d]={exports:{},id:d,loaded:!1};return t[d].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}({0:function(t,n,e){t.exports=e(61)},61:function(t,n,e){"use strict";var d=e(62);t.exports=function(t){quasar.current.layout.vm.$data.title="HTML Tables",t({template:d,data:{styles:["","inner-delimiter","bordered","striped","highlight","centered","compact"]}})}},62:function(t,n){t.exports='<div v-for="style in styles" style="margin-bottom: 30px; max-width: 400px;">\n  <div class="badge bg-secondary text-white">\n    Class <span class="right-detail"><em>{{style ? style : \'*none*\'}}</em></span>\n  </div>\n\n  <br><br>\n\n  <table :class="style">\n    <thead>\n      <tr>\n          <th>Name</th>\n          <th>Price</th>\n          <th>In Stock</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr>\n        <td>Item #1</td>\n        <td>$10.11</td>\n        <td>101</td>\n      </tr>\n      <tr>\n        <td>Item #2</td>\n        <td>$8.88</td>\n        <td>34</td>\n      </tr>\n      <tr>\n        <td>Item #3</td>\n        <td>$0.15</td>\n        <td>1670</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n'}});