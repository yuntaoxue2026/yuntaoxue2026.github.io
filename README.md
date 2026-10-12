# Yuntao Xue — Academic Homepage

A lightweight, responsive one-page academic website for GitHub Pages. The site uses plain HTML, CSS, inline SVG illustrations, and JavaScript with no build step or external dependencies.

## Publish on GitHub Pages

1. Create a public repository named `yuntaoxue2026.github.io` under the `yuntaoxue2026` GitHub account.
2. Copy the contents of this folder to the repository root.
3. Commit and push to the default branch.
4. In **Settings → Pages**, choose **Deploy from a branch**, select the default branch and `/ (root)`, then save.
5. The site will appear at <https://yuntaoxue2026.github.io/> after GitHub finishes deployment.

## Preview locally

Run a static server from this directory:

```bash
python3 -m http.server 8010
```

Then visit <http://127.0.0.1:8010>.

## Update content

- All public content: `index.html`
- Visual design and responsive layouts: `styles.css`
- Mobile navigation and active-section state: `script.js`
- Profile photo: `assets/yuntao-xue.png`
- Browser icon: `assets/favicon.svg`

Before publishing new claims or metrics, verify them against the corresponding report, dataset definition, and model version.
