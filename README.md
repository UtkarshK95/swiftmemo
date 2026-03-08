<div align="center">

# 📝 SwiftMemo

**Instant notes. Zero friction. Total privacy.**

A lightweight Chrome extension for capturing quick notes and checklists directly inside your browser — opens instantly, saves automatically, and syncs across your Chrome devices with no login, no tracking, and full offline support.

[![Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-SwiftMemo-4285F4?style=for-the-badge&logo=googlechrome)](https://chromewebstore.google.com/search/SwiftMemo)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-34A853?style=for-the-badge&logo=googlechrome)](https://developer.chrome.com/docs/extensions/mv3/)

</div>

---

## ✨ Features

- **⚡ Instant Notes** — Clean popup that opens in a click
- **☁️ Cross-Device Sync** — Notes sync across all your Chrome devices automatically
- **📌 Pin Important Tasks** — Keep priority items at the top
- **✔️ Checklist Support** — Quick completion toggles for tasks
- **✏️ Inline Editing** — Fast updates without any extra steps
- **↕️ Drag-and-Drop Reordering** — Organise notes the way you want
- **🌙 Auto Dark Mode** — Follows your system theme
- **🔒 Privacy-First** — Zero analytics, zero data collection
- **📴 Works Fully Offline** — No internet connection needed

---

## 🛠️ Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| UI         | React + TypeScript                |
| Build Tool | Vite                              |
| Styling    | Tailwind CSS                      |
| Extension  | Chrome Manifest V3                |
| Storage    | `chrome.storage.local` + `chrome.storage.sync` |
| Testing    | Vitest                            |

---

## 📦 Installation (Developer Mode)

### Prerequisites

- Node.js v18+
- Google Chrome

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/UtkarshK95/swiftmemo.git
cd swiftmemo

# 2. Install dependencies
npm install

# 3. Build the extension
npm run build
```

Then load it into Chrome:

1. Open `chrome://extensions` in your browser
2. Enable **Developer mode** (top right toggle)
3. Click **Load unpacked**
4. Select the `dist/` folder

SwiftMemo will appear in your extensions bar — click to start taking notes.

---

## 📁 Project Structure

```
swiftmemo/
├── public/               # Extension icons and static assets
├── src/                  # React components and extension logic
├── index.html
├── vite.config.js        # Vite + Chrome extension build config
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🔐 Privacy

SwiftMemo stores notes exclusively inside your browser using `chrome.storage.local` and `chrome.storage.sync`. No personal data is ever collected, transmitted, or shared.

Full privacy policy: [utkarshk95.github.io/swiftmemo-privacy](https://utkarshk95.github.io/swiftmemo-privacy/)

---

## ☕ Support the Project

- **GitHub:** [https://github.com/UtkarshK95/swiftmemo](https://github.com/UtkarshK95/swiftmemo)
- **Buy Me a Coffee:** [https://buymeacoffee.com/utkarshk95](https://buymeacoffee.com/utkarshk95)

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/UtkarshK95">Utkarsh Katiyar</a>
</div>
