📦 anarock-widgets

A collection of reusable React UI widgets for the Anarock Dashboard.

🚀 Development Workflow
1️⃣ Install Dependencies
npm install

2️⃣ Run Playground (for previewing widgets in real-time)
cd playground
npm run dev


Opens local dev server.

Any changes to widgets will hot-reload in the browser.

3️⃣ Build the Package
npm run build


Creates the dist/ folder with production-ready files:

dist/index.js (CJS build)

dist/index.esm.js (ESM build)

dist/index.d.ts (TypeScript types, if using TS)

4️⃣ Update Version

Every time you change widgets, bump the version in package.json:

{
  "name": "@anarock/widgets",
  "version": "1.0.1"
}


Follow semver
:

Patch → bug fixes (1.0.1)

Minor → new widgets/features (1.1.0)

Major → breaking changes (2.0.0)

5️⃣ Publish to GitHub (Private)

Publish:

git push


6️⃣ Install in Another Project


From GitHub Repo:

npm install git+https://github.com/vinayak-vayuz/anarock-dashboard-widgets.git


From Local Tarball (if testing without publish):

npm pack
npm install ../anarock-widgets/anarock-widgets-1.0.0.tgz

📝 Notes

Ensure node_modules and dist are not ignored in .gitignore.

Widgets should not hardcode fonts. Use the global font defined in src/styles/global.css.

Keep react and react-dom as peerDependencies (not bundled).

Always test in the playground before publishing.
