---
title: Working with data
---

You can add pieces of data in your site's `data` folder. The data will be available in all your templates under `data.<filename>`.

> You can change where Marcel looks for data files with [the `dataDir` option][marcel-config] in the configuration file.

## Supported formats

* `.json` — JSON files.
* `.yaml` — YAML files, parsed with [js-yaml][js-yaml].
* `.csv` and `.tsv` – CSV/TSV files, parsed with [d3-dsv][d3-dsv].
* `.ndtxt` — newline-delimited text files.
* `.js` — JavaScript files.

### JavaScript data files

You can use JavaScript for data files to build the data file dynamically. Your file should export either the data itself or a function (which can be asychronous).

__data/github-repos.js__
```js
const got = require('got');

module.exports = async function() {
	return await got(
		`https://api.github.com/users/danburzo/repos`, 
		{ json: true }
	);
}
```

[marcel-config]: #todo
[d3-dsv]: https://github.com/d3/d3-dsv
[js-yaml]: https://github.com/nodeca/js-yaml
