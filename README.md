# Landing page made with Tailwind css and Vue js.

> ### Live URL: https://victorpazb.github.io/vue-landing-page/

## Local Installation
- `` git clone https://github.com/victorpazb/vue-landing-page.git ``
- `` cd /path/to/project ``
- `` npm install ``
- `` npm run dev ``

## Automatic deployment

The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
builds and deploys the site whenever changes are pushed or merged into `main`.

One-time setup:

1. Open [Settings → Pages](https://github.com/victorpazb/vue-landing-page/settings/pages).
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Commit and push the workflow to `main`.

GitHub installs dependencies with `npm ci`, runs `npm run build`, and publishes
`dist` directly to Pages. You do not need to run `npm run deploy`, commit build
output, or update `gh-pages` for this workflow.

To deploy manually, open **Actions → Deploy to GitHub Pages → Run workflow** and
select `main`. Check the workflow run for build errors or deployment status.
If the `github-pages` environment has a branch restriction, allow `main` in
**Settings → Environments → github-pages**.

## Screenshot
![vue-landing-page](screenshot.png)


## THANK YOU! BOTH!
