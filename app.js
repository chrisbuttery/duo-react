/**
 * Module Dependencies
 */

var Duo = require('duo');
var fs = require('fs');
var fs = require('fs');
var join = require('path').join;
var write = require('fs').writeFileSync;

var uglify = require('uglify-js');
var myth = require('duo-myth');
var CleanCSS = require('clean-css');
var cleancss = new CleanCSS();
var Batch = require('batch');
var jsx = require('duo-jsx');


/**
 * Settings
 */

var dev = process.env.NODE_ENV === 'development';
var src = __dirname+'/lib'
var root = process.cwd();
var dest = './build/';
var out = join(root, dest);



/**
 * JS.
 */

var js = Duo(__dirname)
  .use(jsx())
  .development(dev)
  .entry('index.js')
  .buildTo(dest);


/**
 * CSS.
 */

var css = Duo(__dirname)
  .entry('index.css')
  .buildTo(dest)
  .use(myth())
  .copy(!dev);


/**
 * Run JS/CSS together
 */

var batch = new Batch;

batch.push(js.run.bind(js));
batch.push(css.run.bind(css));

batch.end(function(err, res){
  if (err) throw err;

  var js = (dev) ? res.shift() : uglify.minify(res.shift(), { fromString: true}).code;
  write(join(out, 'build.js'), js);

  var css = (dev) ? res.shift() : cleancss.minify(res.shift());
  write(join(out, 'build.css'), css);
});
