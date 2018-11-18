---
title: Configuration file
---

You configure the way Marcel builds your site using the `marcel.config.js` file. You only need this file if you want to diverge from the [default configuration][marcel-default-config].

## List of options

### Base URL

* `base` (default: `/`)

### Folders

* `contentDir` (default: `content`)
* `dataDir` (default: `data`)
* `templateDir` (default: `templates`)
* `staticDir` (default: `static`)
* `distDir` (default: `dist`)
* `filterDir` (default: `filters`)

### Templates

* `templateExt` (default: `html`)

### Lists

* `lists`

### Permalinks

* `permalinks.single` (default [here](marcel-default-permalinks-single))
* `permalinks.list` (default [here](marcel-default-permalinks-list))

[marcel-default-config]: https://github.com/marceljs/marcel/blob/master/src/defaults/default.config.js
[marcel-default-permalinks-single]: https://github.com/marceljs/marcel/blob/master/src/defaults/default.permalinks-single.js
[marcel-default-permalinks-list]: https://github.com/marceljs/marcel/blob/master/src/defaults/default.permalinks-list.js