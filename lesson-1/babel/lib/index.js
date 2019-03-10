"use strict";

var array = ['one', 'two', 'three'];
var array2 = array.map(function (elem) {
  return elem + ' string';
});
var component = React.createElement("h1", null, "test");
console.log(component);