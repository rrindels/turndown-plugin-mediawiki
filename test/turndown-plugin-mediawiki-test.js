var Attendant = require('turndown-attendant')
var TurndownService = require('turndown')
var mediawiki = require('../lib/turndown-plugin-mediawiki.cjs').mediawiki

var attendant = new Attendant({
  file: __dirname + '/index.html',
  TurndownService: TurndownService,
  beforeEach: function (turndownService) {
    turndownService.use(mediawiki)
  }
})

attendant.run()
