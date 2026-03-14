import { contextBridge } from 'electron'

contextBridge.exposeInMainWorld('cafeteria', {
  version: process.env.npm_package_version,
})