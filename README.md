# turndown-plugin-mediawiki

A [Turndown](https://github.com/domchristie/turndown) plugin which adds MediaWiki Markdown extensions.
Inspired by the turndown-plugin-gfm plugin [turndown-plugin-gfm](https://github.com/domchristie/turndown-plugin-gfm)

## Installation

npm:

```
npm install turndown-plugin-mediawiki
```

Browser:

```html
<script src="https://unpkg.com/turndown/dist/turndown.js"></script>
<script src="https://unpkg.com/turndown-plugin-mediawiki/dist/turndown-plugin-mediawiki.js"></script>
```

## Usage

```js
// For Node.js
var TurndownService = require('turndown')
var turndownPluginMediaWiki = require('turndown-plugin-mediawiki')

var mwiki = turndownPluginMediaWiki.mediawiki
var turndownService = new TurndownService()
turndownService.use(mediawiki)
var markdown = turndownService.turndown('<strike>Hello world!</strike>')
```

turndown-plugin-mediawiki is a suite of plugins which can be applied individually. The available plugins are as follows:

- `strikethrough` (for converting `<strike>`, `<s>`, and `<del>` elements)
- `tables`
- `taskListItems`
- `mediawiki` (which applies all of the above)

So for example, if you only wish to convert tables:

```js
var tables = require('turndown-plugin-mediawiki').tables
var turndownService = new TurndownService()
turndownService.use(tables)
```

## License

turndown-plugin-mediawiki is copyright © 2020+ by Rodney Rindels and released under the MIT license.
Turndown is copyright @ 2017+ by Dom Christie and released under the MIT license. 
