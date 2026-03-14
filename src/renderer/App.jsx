import React, { useState } from 'react'
import Kanban       from './vistas/Kanban.jsx'
import GestionMenu  from './vistas/GestionMenu.jsx'
import ChatSucursal from './vistas/ChatSucursal.jsx'
import './index.css'
const nav = [
  { id: 'kanban', label: '📋 Pedidos' },
  { id: 'menu',   label: '🍽️ Menú' },
  { id: 'chat',   label: '💬 Chat' },
]

export default function App() {
  const [vista, setVista] = useState('kanban')

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-56 bg-slate-900 flex flex-col">
        <div className="p-4 border-b border-slate-700">
          <h1 className="text-white font-bold text-lg">Panel Sucursal</h1>
          <p className="text-slate-400 text-xs mt-1">App Cafetería</p>
        </div>
        <nav className="flex-1 p-3 flex flex-col gap-1">
          {nav.map(item => (
            <button
              key={item.id}
              onClick={() => setVista(item.id)}
              className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition ${
                vista === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Contenido */}
      <main className="flex-1 overflow-auto">
        {vista === 'kanban' && <Kanban />}
        {vista === 'menu'   && <GestionMenu />}
        {vista === 'chat'   && <ChatSucursal />}
      </main>

    </div>
  )
}