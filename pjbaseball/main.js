const { app, BrowserWindow, globalShortcut } = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;
let controllerWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/pjbaseball/browser/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

function createControllerWindow() {
  controllerWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  controllerWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/pjbaseball/browser/controller/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  controllerWindow.on('closed', function () {
    controllerWindow = null;
  });
}

app.on('ready', () => {
  createMainWindow();

  // Registrar atajo de teclado Ctrl + Space
  globalShortcut.register('Ctrl+Space', () => {
    if (!controllerWindow) {
      createControllerWindow();
    } else {
      controllerWindow.focus();
    }
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createMainWindow();
});