import highlightedCodeBlock from './highlighted-code-block'
import strikethrough from './strikethrough'
import tables from './tables'
import taskListItems from './task-list-items'

function mediawiki (turndownService) {
  turndownService.use([
    highlightedCodeBlock,
    strikethrough,
    tables,
    taskListItems
  ])
}

export { mediawiki, highlightedCodeBlock, strikethrough, tables, taskListItems }
