#!/bin/bash
echo "📦 Instalando dependencias de cafeteria-electron..."
npm install
cp .env.example .env
echo "✅ Listo. Edita el archivo .env con los valores correctos."
echo "🚀 Para correr en Windows: npm run dev"
echo "⚠️  Electron requiere Windows o macOS para abrir la ventana."
