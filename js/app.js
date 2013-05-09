// Filename: app.js
define(function(require){
  var $ = require('jquery'),
      _ = require('underscore'),
      Backbone = require('backbone'),
      Router = require('router');
 
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  };

  return { 
    initialize: initialize
  };
});
