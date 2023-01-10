// Modules to control application life and create native browser window
//https://blog.csdn.net/weixin_38080573/article/details/105113219

const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url');
const mode = process.argv[2];

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  console.log('mode:', mode);

  if(mode === 'dev') { 
    mainWindow.loadURL("http://localhost:3000/")
  } else { 
    console.log('pathname:', path.join(__dirname, './build/index.html'));

    mainWindow.loadURL(url.format({
      pathname:path.join(__dirname, './build/index.html'), 
      protocol:'file:', 
      slashes:true 
    }))
  }
  // and load the index.html of the app.
  // mainWindow.loadFile('index.html')
// console.log(process.argv);
  mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
