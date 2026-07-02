# Streamax AI website

This is a static HTML website that can be edited in VS Code and published with GitHub Pages.

## Preview in VS Code

1. Open `AI-0623.code-workspace` in VS Code. This ensures the project-specific Live Server settings are loaded.
2. Install the recommended **Live Server** extension when VS Code prompts you.
3. Open `index.html`.
4. Click **Go Live** in the VS Code status bar, or right-click `index.html` and choose **Open with Live Server**.

The local site opens at `http://127.0.0.1:5501/`. Port `5500` is intentionally reserved for the separate Sample Generation and Multimodal Search system linked from the website.

If you do not want the extension, open a VS Code PowerShell terminal and run:

```powershell
.\start-lan-server.ps1
```

Then open `http://localhost:8000/`.

## Common edits

- Main page layout and Chinese copy: `dididi.html`
- Detail pages and Chinese detail copy: `detail.html`
- English translations: `i18n.js`
- Algorithm catalog data and icons: `algorithm-data.js`
- Reusable algorithm function page: `algorithm.html`
- Images: `assets/`
- Web videos: `mp4/l2/converted/` and `mp4/l4/web/`

Save the file and refresh the browser. Live Server normally refreshes automatically.

## Publish with GitHub Pages

1. Open **Source Control** in VS Code.
2. Select **Initialize Repository** if needed.
3. Stage the files, enter a message such as `Publish website`, and select **Commit**.
4. Select **Publish Branch** and sign in to GitHub.
5. Choose a **public repository**.
6. On GitHub, open **Settings → Pages**.
7. Choose **Deploy from a branch**, then select `main` and `/(root)`.
8. Save and wait for the public URL to appear.

Afterward, edit locally, commit, and push. GitHub Pages republishes each pushed update automatically.

Do not commit passwords, private data, API keys, or the locally ignored raw/tool files.
