var QUnit = require('steal-qunit');
var fragment = require('./can-fragment');

QUnit.module('can-fragment');

QUnit.test('string conversion', function(){
    var frag = fragment("<div></div><span></span>");
    QUnit.equal(frag.childNodes.length, 2);
});

QUnit.test('array element conversion', function(){
    var div = document.createElement("div"),
        span = document.createElement("span");
    var frag = fragment([
        div,
        span
    ]);
    QUnit.equal(frag.childNodes.length, 2);
    QUnit.deepEqual(Array.from( frag.childNodes ), [div, span]);
});
