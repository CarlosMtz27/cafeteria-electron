import { app, BrowserWindow } from 'electron'
import { join } from 'path'

function crearVentana() {
  const ventana = new BrowserWindow({
    width:  1280,
    height: 800,
    minWidth:  1024,
    minHeight: 600,
    title: 'Panel Cafetería',
    webPreferences: {
      preload:          join(__dirname, '../dist-electron/preload.js'),
      contextIsolation: true,
      nodeIntegration:  false,
    },
  })

  // En desarrollo carga desde Vite
  if (process.env.NODE_ENV === 'development') {
    ventana.loadURL('http://localhost:5173')
    ventana.webContents.openDevTools()
  } else {
    ventana.loadFile(join(__dirname, '../dist/index.html'))
  }
}

app.whenReady().then(crearVentana)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) crearVentana()
})