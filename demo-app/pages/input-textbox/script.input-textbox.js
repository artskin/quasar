module.exports=function(e){function n(i){if(s[i])return s[i].exports;var l=s[i]={exports:{},id:i,loaded:!1};return e[i].call(l.exports,l,l.exports,n),l.loaded=!0,l.exports}var s={};return n.m=e,n.c=s,n.p="",n(0)}({0:function(e,n,s){e.exports=s(67)},67:function(e,n,s){"use strict";var i=s(68);e.exports=function(e){quasar.current.layout.vm.$data.title="Input Textbox",e({template:i,data:{username:"",password:""}})}},68:function(e,n){e.exports='<h5>Standalone</h5>\n<input v-model="username">\n\n<h5 style="margin-top: 50px;">Inside of a List</h5>\n<div class="list inner-delimiter bordered">\n  <div class="list-header">Fixed Label</div>\n  <div class="item fixed-label">\n    <div class="item-content">\n      <label for="user1" class="item-label">Username</label>\n      <input id="user1" v-model="username">\n    </div>\n  </div>\n  <div class="item fixed-label">\n    <div class="item-content">\n      <label for="pass1" class="item-label">Password</label>\n      <input id="pass1" v-model="password" type="password">\n    </div>\n  </div>\n</div>\n\n<div class="list inner-delimiter bordered">\n  <div class="list-header">Floating Label</div>\n  <div class="item floating-label">\n    <div class="item-content">\n      <input v-model="username" required>\n      <label>Username</label>\n    </div>\n  </div>\n  <div class="item floating-label">\n    <div class="item-content">\n      <input v-model="password" type="password" required>\n      <label>Password</label>\n    </div>\n  </div>\n</div>\n\n<div class="list inner-delimiter bordered">\n  <div class="list-header">Inline Label</div>\n  <div class="item inline-label">\n    <label class="item-content">\n      Username\n      <input v-model="username">\n    </label>\n  </div>\n  <div class="item inline-label">\n    <label class="item-content">\n      Password\n      <input v-model="password" type="password">\n    </label>\n  </div>\n</div>\n\n<div class="list inner-delimiter bordered">\n  <div class="list-header">Placeholder Label</div>\n  <div class="item">\n    <div class="item-content">\n      <input v-model="username" placeholder="Username">\n    </div>\n  </div>\n  <div class="item">\n    <div class="item-content">\n      <input v-model="password" type="password" placeholder="Password">\n    </div>\n  </div>\n</div>\n\n<div class="list inner-delimiter bordered">\n  <div class="list-header">Stacked Label</div>\n  <div class="item stacked-label">\n    <div class="item-content">\n      <input id="user4" v-model="username" required>\n      <label for="user4">Username</label>\n    </div>\n  </div>\n  <div class="item stacked-label">\n    <div class="item-content">\n      <input id="pass4" v-model="password" type="password" required>\n      <label for="pass4">Password</label>\n    </div>\n  </div>\n</div>\n'}});