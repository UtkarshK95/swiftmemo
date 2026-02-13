# SwiftMemo

**SwiftMemo** is a lightweight Chrome extension for capturing quick notes and checklists directly inside your browser.

It opens instantly, saves automatically, and syncs across your Chrome devices —  
with **no login, no tracking, and full offline support**.

---

## ✨ Features

- ⚡ **Instant notes** in a clean popup
- ☁️ **Cross-device sync** using Chrome storage
- 📌 **Pin important tasks** to keep them on top
- ✔️ **Checklist support** with quick completion toggles
- ✏️ **Inline editing** for fast updates
- ↕️ **Drag-and-drop reordering**
- 🌙 **Automatic dark mode** based on system theme
- 🔒 **Privacy-first** — zero analytics, zero data collection
- 📴 **Works fully offline**

---

## 🧠 Philosophy

SwiftMemo is designed to be:

- **Fast**
- **Minimal**
- **Distraction-free**
- **Private by default**

No accounts. No cloud servers.  
Just quick notes that stay with you.

---

## 📦 Installation (Developer Mode)

1. **Clone the repository**

   ```bash
   git clone https://github.com/UtkarshK95/swiftmemo.git
   cd swiftmemo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Build the extension**

   ```bash
   npm run build
   ```

4. **Load in Chrome**
   - Open `chrome://extensions`
   - Enable **Developer mode**
   - Click **Load unpacked**
   - Select the **dist** folder

---

## 🛠 Tech Stack

- **React + TypeScript**
- **Vite**
- **Tailwind CSS**
- **Chrome Extension Manifest V3**
- **Vitest** for unit testing

---

## 🔐 Privacy

SwiftMemo stores notes only inside your browser using:

- `chrome.storage.local`
- `chrome.storage.sync`

No personal data is collected, transmitted, or shared.

Full privacy policy:  
**[https://utkarshk95.github.io/swiftmemo-privacy/]**

---

## ☕ Support the Project

If SwiftMemo helps you, consider supporting:

- GitHub → https://github.com/UtkarshK95
- Buy Me a Coffee → https://buymeacoffee.com/utkarshk95

---

## 📄 License

MIT © 2026 Utkarsh Katiyar
