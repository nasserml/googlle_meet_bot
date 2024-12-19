import {
  Builder,
  Browser,
  By,
  Key,
  until,
  WebDriver,
} from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome";
async function openMeet(driver: WebDriver) {
  // await driver.get("https://www.youtube.com/watch?v=MICPyrnGYwg&t=179s");
  // return
  try {
    await driver.get("https://meet.google.com/vir-rexd-ycc");
    const popupButton = await driver.wait(
      until.elementLocated(By.xpath('//span[contains(text(), "Got it")]')),
      1000
    );
    await popupButton.click();

    const nameInput = await driver.wait(
      until.elementLocated(By.xpath('//input[@placeholder="Your name"]')),
      1000
    );
    await nameInput.clear();
    await nameInput.click();
    await nameInput.sendKeys("value", " videoMeeting bot");

    await driver.sleep(1000);

    const buttonInput = await driver.wait(
      until.elementLocated(By.xpath('//span[contains(text(), "Ask to join")]')),
      1000
    );
    await buttonInput.click();

    // await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    // await driver.sleep(10000)
  } finally {
  }
}

async function getDriver() {
  const options = new Options();
  options.addArguments("--disable-blink-features=AutomationControlled");
  options.addArguments("--use-fake-ui-for-media-stream");
  options.addArguments("--window-size=1080.720");
  options.addArguments("--auto-select-desktop-capture-source=[RECORD]");
  options.addArguments("--auto-select-desktop-capture-source=[RECORD]");
  options.addArguments("--enable-usermedia-screen-capturing");
  options.addArguments("--auto-select-tab-capture-source-by-title='Meet'");

  let driver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(options)
    .build();

  return driver;
}

async function startScreenShare(driver: WebDriver) {
  console.log("Start Screen Share called");

  const response = await driver.executeScript(`
    function wait(delayInMS) {
      return new Promise(resolve => setTimeout(resolve, delayInMS));
    }

    function startRecording(stream, lengthInMS) {
        let recorder = new MediaRecorder(stream);
        let data = [];

        recorder.ondataavailable = (event) => data.push(event.data);
        recorder.start();

        let stopped = new Promise((resolve, reject) => {
          recorder.onstop = resolve;
          recorder.onerror = (event) => reject(event.data);
        });

        let recorded = wait(lengthInMS).then(()=> {
          if(recorder.state === "recording") {
            recorder.stop();
          }
          
        });

        return Promise.all([stopped, recorded]).then(()=> data)
    }

    console.log("before media device");

    
window.navigator.mediaDevices.getDisplayMedia({video: {
displaySurface: "browser",
}, audio: true, preferCurrentTab: true }).then(async (stream)=> {
  
  console.log("Before start recording");

  const recordedChunks = await startRecording(stream , 30000);
  console.log("after start recording");

  let recordedBlob = new Blob(recordedChunks , { type: "video/webm" });
  const recording = document.createElement("video");
  const downloadButton = document.createElement("a");
  recording.src = URL.createObjectURL(recordedBlob);
  downloadButton.href = recording.src;
  downloadButton.download = "RecordedVideo.webm";
  downloadButton.click();
  console.log("after download");

})




    `);

  driver.sleep(1000);
}

async function main() {
  console.log("main called");
  const driver = await getDriver();
  console.log("driver called");
  await openMeet(driver);
  console.log("open meet called");
  await startScreenShare(driver);
  console.log("start screen share called");
}

// window.navigator.mediaDevices.getDisplayMedia().then(stream => { const videoEl   = document.createElement("video") ; videoEl.srcObject = stream ; videoEl.play() ; document.getElementsByClassName("PLR4if")[0].appendChild(videoEl) }  )
main();
// 2:07
