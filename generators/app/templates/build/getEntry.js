/**
 * USER
 * Created by samli on 2017/8/17.
 */

var path = require('path');
var glob = require('glob');

module.exports = getEntry;

function getEntry(sourcePath) {
  var entrys = {};
  var basename;
  glob.sync(sourcePath).forEach(function (entry) {
    basename = path.basename(entry,path.extname(entry));
    entrys[basename] = entry;
  });
  return entrys;
}
