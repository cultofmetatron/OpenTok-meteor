/* created by cultofmetatron, blog.peterdecroos.com
 * Made with love for the meteor community!
 *
 */
Package.describe({
  summary: "OpenTok Api exposed to meteor"
});

Npm.depends({"opentok" : "0.3.1"});

Package.on_use(function(api) {
  api.add_files('client/tokbox-client.js', 'client');
  api.add_files('server/index.js', 'server');
});


