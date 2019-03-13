# Manuel Bieh UI Components

React UI components for my personal website, portfolio, CV, etc.

## Getting started

```sh
yarn
```

or

```sh
npm install
```

Do yourself a favor and setup and configure [EditorConfig](https://editorconfig.org/), a [linter](https://eslint.org/docs/user-guide/integrations#editors) and [Prettier](https://prettier.io/docs/en/editors.html) in your editor/IDE before working on this project. Otherwise all of that will be handled by [`lint-staged`](https://github.com/okonet/lint-staged) automatically before each commit and might get your commit rejected. This is to avoid avoidable errors and to make sure to have a clean and consistent codebase.

## Getting started (now really)

First of all you should create a global link to this module so you can link to it from within consuming projects and make it possible to always work with the latest version without having to publish releases after each change and pollute the npm registry with half-baked versions. To do so open the root folder of this project (i.e. where the README.md you're currently reading is located) in your terminal and run:

```sh
yarn link
```

Then `cd` into the folder of the project where you want to use this library and run:

```sh
yarn link @manuel-bieh/ui
```

There are npm scripts for everything else that needs to be done:

### Starting Storybook

```sh
yarn start-storybook
```

or to make it short:

```sh
yarn start
```

This starts a storybook server on port 6006 so you can happily build your UI components and try them out right away.

Storybook can also be deployed publicly by using:

```sh
yarn storybook:deploy
```

You will find it at [https://manuelbieh-ui.surge.sh](https://manuelbieh-ui.surge.sh) afterwards (given that you have loggedin to Surge and write access to manuelbieh-ui).

### Build everything

When you're done you need to create a build so the UI components can be installed as proper node module. To do so, use:

```sh
yarn build
```

This command:

-   minifies all images inside of `./src/assets` and writes them to `./assets`
-   creates a webpack bundle in `./dist`
-   transpiles all src files and writes them to `./es` (necessary to use tree shaking!)

If you want to work on a project that's consuming this UI library and on the UI library itself simultaneously there's a watch task:

```sh
yarn watch
```

When running in watch mode, all `es` modules (incl. CSS) are transpiled on every change. Make sure you're using a linked module (see: [_Getting started (now really_)](#getting-started-now-really)). Caveat: assets are **not** included in the watch process so if you change or add any images you must run `yarn imagemin` manually!

### Test everything

Nothing to test yet (shame on me). If there are tests one day, you can run them using:

```sh
yarn test
```

### Release when done

When you're done you need to publish your changes to the npm registry. First commit all your work (no need to create a build since semantic-release will take care of it in the release process). That's necessary so semantic-release can determine the next version number based on commit messages.

You need to setup your machine to allow semantic-release to push the new release to Github on your behalf. Follow this instruction: [Github Authentication](https://github.com/semantic-release/github/blob/master/README.md#github-authentication)

Once Github access is set up and after committing all your work, run:

```sh
yarn release
```

## Things you should know

### Images

`imagemin-cli` does not preserves subfolders so there's a concurrently task that uses imagemin on all 3 (clients, social-media and tech) folders inside of `./assets/img`. You need to create a new task and add it to the imagemin task if you add a new subfolder inside of `./assets/img` (or anywhere else).

### Commit messages

This project uses `semantic-release` and `semantic-release-conventional-commits` to automatically determine the next version number for new releases. By default every release is a patch release. Prefix your commit messages with `minor:` or `feature:` for new minor releases and `major:` or `breaking:` for new major releases. Have a look at [.releaserc](.releaserc) for more.

### Precommit checks

All updated files in `./src` are checked using ESLint and `lint-staged`. If there are linting errors your commit gets rejected. (You can bypass that check with the `--no-verify` flag but but I'd better not catch you doing it).

### Analyze your build

There is an anaylze task. It can be used for exactly that: analyzing your Webpack build. That's useful if your build gets suspiciously large. So make use of it!
