# Manuel Bieh UI Components

React UI components for my personal website, portfolio, CV, etc.

## Getting started

```sh
yarn
# or npm install
```

## Getting started (now, really)

There are npm scripts for everything that needs to be done.

### Starting Storybook

```sh
yarn start-storybook
```

or to make it short:

```sh
yarn start
```

This starts a storybook server on port 6006 so you can happily build your UI components and try them out right away.

### Build everything

When you're done you need to create a build so the UI components can be installed as proper node module. To do so, use:

```sh
yarn build
```

This command:

-   minifies all images inside of `./src/assets` and writes them to `./assets`
-   creates a webpack bundle in `./dist`
-   transpiles all src files and writes them to `./es` (necessary to use tree shaking!)

### Test everything

Nothing to test yet (shame on me). If there are tests one day, you can run them using:

```sh
yarn test
```

### Release when done

When you're done you need to publish your changes to the npm registry. First commit all your work (no need to create a build since semantic-release will take care of it in the release process). That's necessary so semantic-release can determine the next version number based on commit messages.

After committing all your work, run

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
