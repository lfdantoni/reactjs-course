"use strict";

var array = ['one', 'two', 'three'];
var array2 = array.map(function (elem) {
  return elem + ' string';
});
/**
 * 1. one string
 * 2. two string
 */

var Title = /*#__PURE__*/React.createElement("h1", null, "Titulo");