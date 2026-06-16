# Signal Flow — AV/CRM

A complete, offline-capable CRM for an audio-visual business, plus three integrated design tools:

- **AV/CRM** (`av-crm.html`) — clients, contacts (trades & lead sources), jobs pipeline, products, services, calendar, activity log
- **Cinema Design** (`cinemaplan.html`) — home cinema speaker & screen design
- **Pro Audio** — two tools in one module:
  - **Coverage Designer** (`audioplan.html`) — in-ceiling / on-wall speaker coverage, hex vs square grids
  - **Engineering Calculator** (`audiocalc.html`) — SPL, amp power, 100V line, RT60, delay, impedance

Everything runs in the browser. No server, no database, no accounts. Your data is **saved automatically on your device** and can also be backed up via **Export data** (downloads a JSON file) and restored via **Import data**.

## Where your data is stored

- When you add or edit anything, it is **saved automatically** to your browser's local storage **on that device**.
- Close the app, refresh, or reopen it later — your data is still there.
- The data is **private to that one device and browser**. It does **not** sync to the cloud or to your other devices.
- On first ever launch the app shows **demo data** so it isn't empty. Use **Clear all data** (in the menu) when you're ready to start fresh with your real clients.

### Keep your data safe — back it up

Because the data lives on the device, you should back it up regularly:

1. Open the menu (☰ on mobile, sidebar on desktop) → **Export data**
2. This downloads a `av-crm-data.json` file — save it somewhere safe (Google Drive, email it to yourself, etc.)
3. To move to a new phone or restore after clearing: install the app there, open menu → **Import data**, and choose your backup file

**What can erase device data:** clearing your browser cache/site data, uninstalling the app, or "clear data" in phone settings. As long as you have an exported backup, you can always restore.

---

## How to deploy (web version + installable mobile app)

The app is a **PWA (Progressive Web App)** — once hosted on any web address, it can be installed on a phone like a normal app and works fully offline afterwards.

### Deploy free on GitHub Pages

1. Create a free account at **github.com**
2. Create a new **public** repository (e.g. `AV-CRM`)
3. Upload **all** these files to the repository root (not in a subfolder):
   - `av-crm.html`
   - `audioplan.html`
   - `audiocalc.html`
   - `cinemaplan.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
4. Go to **Settings → Pages**
5. Under **Branch**, choose **main** and folder **/ (root)**, then **Save**
6. Wait ~2 minutes. Your live site will be:
   `https://YOUR-USERNAME.github.io/AV-CRM/av-crm.html`

### Install on Android (Chrome)

1. Open the live URL in **Chrome**
2. Tap the **⋮** menu → **Add to Home screen** → **Install**
3. The app icon appears on your home screen and opens full-screen
4. After first load it works **offline** — no internet needed

### Install on iPhone (Safari)

1. Open the live URL in **Safari**
2. Tap the **Share** button → **Add to Home Screen**
3. Tap **Add**

---

## Important notes

- **Keep all 8 files together** in the same folder / repository root. The CRM loads the design tools from the same location.
- **Back up regularly.** Because data lives in the browser, use **Export data** from time to time to save a JSON backup. To move to a new phone, install the app there and use **Import data**.
- The PDF report in Pro Audio and the 3D view in Cinema Design need an internet connection the first time they load their libraries. The rest of the app is fully offline.

---

## Files

| File | Purpose |
|------|---------|
| `av-crm.html` | Main CRM app (start here) |
| `audioplan.html` | Pro Audio coverage designer |
| `audiocalc.html` | Pro Audio engineering calculator |
| `cinemaplan.html` | Home cinema design suite |
| `manifest.json` | PWA app metadata (name, icon, colors) |
| `sw.js` | Service worker — enables offline use |
| `icon-192.png` / `icon-512.png` | App icons for the home screen |
