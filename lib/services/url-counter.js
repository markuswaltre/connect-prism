'use strict';

var _ = require('lodash');

/**
 *  Keep track of occurrences of urls
 */

function UrlCounter() {

  /**
   * Structure
   * { url: '/api/', count: 1}
   */
  var _db = [];

  this.getCount = function(url) {
    var item = getItem(url);

    // if it exists increment
    if(exists(item)) {
      item.count += 1;
      console.log(_db);
      return item.count;
    }

    // else create
    else buildItem(url);
    console.log(_db);  
    return 1;
  };

  function getItem(url) {
    return _.find(_db, {'url': url});
  };

  function exists(obj) {
    return typeof obj !== 'undefined';
  };

  function buildItem(url) {
    var _obj = {
      'url': url,
      'count': 1
    }

    _db.push(_obj);
  };
}

module.exports = UrlCounter;