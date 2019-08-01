---
title: Working with data
---

You can add pieces of data in a variety of formats in your site's `data` folder. The data will be available in all your templates under the `data.<filename>` object. 

<blockquote is='m-note'>

You can change where Marcel looks for data files with [the `dataDir` option][marcel-config] in the configuration file.

</blockquote>

## Supported formats

Format | Description
------ | -----------
`.json` | JSON files
`.yaml` | YAML files, parsed with [js-yaml][js-yaml]
`.toml` | TOML files, parsed with [toml-node][toml-node]
`.csv` and `.tsv` | CSV/TSV files, parsed with [d3-dsv][d3-dsv]
`.ndtxt` | newline-delimited text files
`.js` | JavaScript files

## JavaScript data files

JavaScript is useful for dynamic data. From your file you can export either:

* the data itself, or 
* a function that returns the data; the function can be asychronous.

In the example below, I'm fetching my public GitHub repositories: 

__data/repos.js__
```js
const got = require('got');

module.exports = async function() {
	return await got(
		`https://api.github.com/users/danburzo/repos`, 
		{ json: true }
	);
}
```

Then I can reference them in a template with `data.repos`:

{% raw %}
__templates/repos.html__
```twig
<ul>
{% for repo in data.repos %}
	<li>{{ repo.name }}</li>
{% endfor %}
</ul>
```
{% endraw %}

[marcel-config]: ../reference/configuration.md#datadir
[d3-dsv]: https://github.com/d3/d3-dsv
[js-yaml]: https://github.com/nodeca/js-yaml
[toml-node]: https://github.com/BinaryMuse/toml-node
