# Easy Rep Official Website

Responsive static landing page (black/red/white), ready for Vercel.

## Add the Android APK
1. Create `downloads/` in this folder.
2. Copy your signed **release** APK into it and name it `easy-rep.apk`.
3. The Download APK button already points to `downloads/easy-rep.apk`.
4. Test download and installation on a real Android phone.

Do not upload a debug APK. Before launch, update the Latest Release card in `index.html` with the real version, release date, APK size, and release notes. The current values are placeholders.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Framework preset: Other; build command: empty; output directory: `.`.
4. Deploy.

## Before publishing
- Replace the placeholder privacy policy with a real policy.
- Replace the sample support email in `index.html`.
- Add real Easy Rep screenshots/logo when available.
- Confirm permission to distribute the APK and all bundled assets.

## App icon
The supplied Easy Rep icon is included in `assets/` and configured as the website favicon, Apple touch icon, and social sharing preview image.
