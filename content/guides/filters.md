---
title: Filters
---

## Default filters

In addition to the filters [built into Nunjucks][nunjucks-builtin], Marcel offers the following filters:

__format_date(format)__

Formats a date using [dayjs][dayjs]. See [a list of available formats][dayjs-formats].

__sort_by(property)__

Sorts an array by reading `property` off each object in the array. It can read deep properties from the object, e.g. `data.title`.

Usage:

```html
{% for each post in posts | sort_by('data.title') %}
	<div class='post'>
		<h2>{{ post.data.title }}</h2>
	</div>
{% endfor %}
```

## Custom filters

You can create your own filters to use in Nunjucks templates. Add them in a `filters/` folder.

The file's name becomes the name of the filter. Here's a basic filter:

__filters/uppercase.js__
```js
module.exports = function(str) {
	return str.toUpperCase();
}
```

And then you can use this filter in your templates:

```html
I want to shout {{ post.title | uppercase }}.
```

You can pass additional arguments to the filter. For example:

__filters/add.js__
```js
module.exports = function(num, how_much) {
	return num + how_much;
}
```

```html
{{ post.likes | add(10) }}
```

To write an asynchronous filter, use an `async function` as the filter's definition:

__filters/async.js__
```js
module.exports = async function(arg) {
	return await some_thing(arg);
}
```

> You can change where Marcel looks for filters with [the `filterDir` option][marcel-config] in the configuration file.


[nunjucks-builtin]: https://mozilla.github.io/nunjucks/templating.html#builtin-filters
[marcel-config]: #todo
[dayjs]: https://github.com/iamkun/dayjs
[dayjs-formats]: https://github.com/iamkun/dayjs/blob/master/docs/en/API-reference.md#list-of-all-available-formats

