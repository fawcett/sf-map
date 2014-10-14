## sf-map

A map of things in San Francisco. Visible at http://fawcett.github.io/sf-map/

Thanks to Jason Sanford for most of the code.

### Building

JavaScript is bundled with browserify. Before building, install dependencies:

```
npm install -g browserify
npm install
```

After making changes in `assets/js/main.js`, be sure to run:

```
npm run build
```

### Development

A few more scripts are available to help with development, but you'll need to install some things first:

```
npm install -g serve
npm install -g watchify
```

Then run the following to serve the site locally and automatically run `browserify` when changes are made:

```
npm run dev
```
