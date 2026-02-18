const {app, BrowserWindow} = require("electron");

function createwindow(){
    const win = new BrowserWindow({
        width: 1052,
        height: 730,
        resizable: false,
        maximizable: false,
        fullscreenable: false,
        frame: false,
        transparent: false,
        webPreferences: {
            contextIsolation: true
        }
    });
    win.loadFile("index.html");
}

app.whenReady().then(createwindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});