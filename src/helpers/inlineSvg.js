'use strict';

var fs = require('fs');

module.exports = function (src) {
    var content = fs.readFileSync(src, 'utf8');
    return content;
};
