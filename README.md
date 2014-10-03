## foss4g-map

A map of things in San Francisco. Visible at http://fawcett.github.io/sf-map/

This map is based on a fork of Jason Sanford's FOSS4G 2014 map.  https://github.com/JasonSanford/foss4g-map

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
