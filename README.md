# 🤖 **Google Meet Bot**  

This repository hosts an advanced **Google Meet Bot**, developed using **TypeScript** and **Selenium WebDriver**, designed to streamline meeting participation and automate essential tasks.  

---

## 🚀 **Features**  

- **Automated Meeting Participation:** Effortlessly navigates to and joins Google Meet links.  
- **Custom Name Input:** Allows you to specify a display name before joining meetings.  
- **Screen Sharing with Audio Recording:** Seamlessly starts screen sharing and records audio for a set duration (default: 30 seconds).  
- **Automatic File Download:** Saves the recorded session as a WebM video file for easy access.  

---

## 🛠️ **Prerequisites**  

Before running the bot, ensure the following tools are installed and configured:  

- **Node.js** (v14.21.0 or higher)  
- **npm** (bundled with Node.js)  
- **Google Chrome** (latest version recommended)  
- **ChromeDriver** (compatible with your Chrome version and included in your system PATH)  

---

## 📦 **Installation**  

1. **Clone the Repository:**  
   ```bash
   git clone https://github.com/nasserml/googlle_meet_bot.git
   ```  

2. **Navigate to the Bot Directory:**  
   ```bash
   cd googlle_meet_bot/bot
   ```  

3. **Install Dependencies:**  
   ```bash
   npm install
   ```  

---

## ▶️ **Usage Instructions**  

1. **Set Your Google Meet Link:**  
   Update the meeting URL in the `src/index.ts` file:  
   ```typescript
   await driver.get("https://meet.google.com/your-meeting-link"); // Replace with your link
   ```  

2. **Run the Bot:**  
   Execute the following command to start the bot:  
   ```bash
   npm run dev
   ```  

   The bot will automate meeting participation, including screen sharing and recording.  

---

## ⚙️ **Custom Configuration**  

- **Meeting URL:** Replace the URL in the `openMeet` function inside `src/index.ts`.  
- **Recording Duration:** Modify the recording time in milliseconds in the `startScreenShare` function:  
   ```typescript
   const recordedChunks = await startRecording(stream, 30000); // Example: 30 seconds
   ```  
- **Chrome Browser Options:** Adjust Chrome settings in the `getDriver` function within `src/index.ts` to suit your environment.  

---

## 🗂️ **Project Structure**  

```plaintext
googlle_meet_bot/
└── bot/
    ├── package.json          # Project dependencies and metadata
    ├── tsconfig.json         # TypeScript configuration
    ├── package-lock.json     # Locked dependency tree
    └── src/
        └── index.ts          # Main bot logic in TypeScript
```  

---

## 🙏 **Acknowledgments**  

This project draws inspiration from the following resource:  
- [YouTube: Google Meet Automation with Selenium](https://www.youtube.com/watch?v=gGHaXVO-9j4&t=4494s)  

---

## 📜 **License**  

This project is released under the ISC License. For further details, see the `LICENSE` file.  

---  

