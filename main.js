/**
 * @author myname
 */

const { app, BrowserWindow } = require("electron")
require('electron-reloader')(module)


app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 233,
    height: 323,
    fullscreenable: false,
    resizable: false,
    backgroundColor: "#525555",
    frame: false,
    titleBarStyle: 'hidden',
    opacity: 0.90,
  })

  mainWindow.loadURL("http://localhost:8080/").then(() => {
    console.log("Hello")
  })
})
