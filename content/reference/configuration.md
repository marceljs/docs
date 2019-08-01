---
title: Configuration file
---

You configure the way Marcel builds your site using a `marcel.config.js` file in the root folder of your project:

__marcel.config.js__

```js
module.exports = {
	base: '/docs/'
};
```

## Options

### Base URL

#### `base` 

Default: `/`

### Folders

#### `contentDir` 

Default: `content`

#### `dataDir` 

Default: `data`

#### `templateDir` 

Default: `templates`

#### `staticDir`

Default: `static`

#### `distDir` 

Default: `dist`

#### `filterDir` 

Default: `filters`

### Templates

#### `templateExt` 

Default: `html`

### Lists

#### `lists`

### Permalinks

#### `permalinks.single`

#### `permalinks.list`

### Handling Markdown files

Under the `markdown` object you can control aspects of how Markdown gets turned into HTML. A value of `false` deactivates the corresponding feature. A value of `true` enables it with default options. An `Object` gets passed as the options to the underlying plugin.

#### `markdown.smartypants` 

* Default: `true`
* Options passed to [retext-smartypants](https://github.com/retextjs/retext-smartypants)

#### `markdown.headerlinks`

* Default: `true`
* Options passed to [rehype-autolink-headings](https://github.com/rehypejs/rehype-autolink-headings)

#### `markdown.highlight` 

* Default: `{ ignoreMissing: true }`
* Options passed to [rehype-prism](https://github.com/mapbox/rehype-prism)

#### `markdown.taskids`

Controls whether task items should get unique IDs. The ID is generated from the text content of the task item.

* Default: `true`
* No options available