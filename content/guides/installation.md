---
title: Installation
---

## Prerequisites

Marcel is a JavaScript tool that is distributed through NPM (Node Packet Manager). To work with Marcel, you have to have [Node.js](https://nodejs.org/en/) installed. The `npm` command-line tool, through which you interact with NPM, usually comes bundled with Node. 

I recommend also installing [Yarn](https://yarnpkg.com/en/), which is an alternative to `npm` for installing packages — it's faster and comes with a few more features. The installation instructions below use `yarn` rather than `npm`.

## Setting up a new project

Open up your command-line and create a new project folder, then navigate to it:

```bash
mkdir my-project
cd my-project
```

To install packages from NPM to our project, we first need to create a `package.json` file for it. The command below does just that:

```bash
yarn init --yes
```

(The `--yes` flag instructs Yarn to skip any questions it would normally ask about your project, and just create a `package.json` for it).

Install Marcel with:

```
yarn add --dev marcel
```

(We're installing Marcel as a _development dependency_, because our website doesn't need Marcel to run once it's built. It's only during development that we use it.)

Next, create a file called `marcel.config.js` in your project's root folder, with the following content:

```js
module.exports = {
	title: 'My new website'
}
```

Now let's create our first piece of content. Create a `content` folder in your project's root, and a `my-first-post.md` file inside it, with the content:

```md

# Hello world

```
