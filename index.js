const {
    app,
    BrowserWindow
} = require('electron');

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;

let win;

function createWindow() {

    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true
        }
    });

    win.loadFile('index.html');

    win.on('closed', function () {
        win = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    app.quit();
})