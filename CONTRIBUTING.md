# Contributing

Thanks for being willing to contribute!

## Project setup

1.  Fork and clone the repo
2.  Run `pnpm install` to install dependencies and run validation
3.  Create a branch for your PR with `git checkout -b pr/your-branch-name`

> Tip: Keep your `main` branch pointing at the original repository and make pull
> requests from branches on your fork. To do this, run:
>
> ```
> git remote add upstream https://github.com/crutchcorn/rxjs-use-hooks.git
> git fetch upstream
> git branch --set-upstream-to=upstream/main main
> ```
>
> This will add the original repository as a "remote" called "upstream," Then
> fetch the git information from that remote, then set your local `main` branch
> to use the upstream main branch whenever you run `git pull`. Then you can make
> all of your pull request branches based on this `main` branch. Whenever you
> want to update your version of `main`, do a regular `git pull`.

## Common Commands

- `pnpm dev`: Start the development server for the `example` folder app
- `pnpm build`: Build `rxjs-use-hooks` from the `lib` folder
- `pnpm test`: Run integration test
- `pnpm lint`: Run the linter for code
- `pnpm format`: Run the linter and format all code
- `pnpm docs:dev`: Start the development server for docs
- `pnpm docs:build`: Build the docs site

## Committing and Pushing changes

Please make sure to run the tests before you commit your changes. You can run
`npm run test:update` which will update any snapshots that need updating. Make
sure to include those changes (if they exist) in your commit.

## Help needed

Please checkout the [the open issues](https://github.com/crutchcorn/rxjs-use-hooks/issues)

Also, please watch the repo and respond to questions/bug reports/feature
requests! Thanks!
