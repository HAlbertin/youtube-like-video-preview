# Youtube-like Preview List
Youtube-like Preview List in [React 18](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/) using the [Next.js](https://nextjs.org/) framework.

## Preview
Deployed using [Vercel](https://vercel.com/), the running live project can be acessed **[here](https://youtube-like-video-preview.vercel.app/)**.

## How to Run
#### System Requirements
- [Node.js 18.17](https://nodejs.org/en) or later

#### Running Locally
Install the dependencies using [yarn](https://classic.yarnpkg.com/en/) after cloning this repo:
```
yarn
```
Then just:
```
yarn dev
```

## Tech Stack
- Main
  - [React 18](https://react.dev/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Next.js](https://nextjs.org/)
- Design System
  - [Tailwind](https://tailwindcss.com/)
- Fetching & Caching
  - [Fetch (extends the native Web fetch)](https://nextjs.org/docs/app/api-reference/functions/fetch)
  - [React-Query](https://react-query.tanstack.com/)
- Images
  - [SVGR](https://react-svgr.com/docs/next/)
- Code Helpers (for re-render, comparison, etc)
  - [debounce](https://www.npmjs.com/package/debounce)
  - [tailwind-merge](https://www.npmjs.com/package/tailwind-merge)
- Development Helpers
  - Lint
    - [ESLint](https://eslint.org/)
    - [Prettier](https://prettier.io/)
    - [ESLint React Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
  - Git Hooks
    - [Husky](https://typicode.github.io/husky/#/)
    - [Lint Staged](https://github.com/okonet/lint-staged)
    - Commits with [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)


## Next Steps
- Add Icon
- Add Favicon
- Add Unit Testing: (Vitest)[https://vitest.dev/] for example
- Add e2e Testing: (Playwright)[https://playwright.dev/] for example
- Add Observability: [Sentry](https://sentry.io/) for example
- Add .env variables
- Enable CI/CD: [GitHub Actions](https://github.com/features/actions) for example
- I left some "TODOs" in the code
- Pull Request rules:
  - CODEOWNERS
  - Branch Rules
  - PR Template
