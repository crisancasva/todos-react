# ✅ Todos React

Aplicación de gestión de tareas (To-Do List) construida con React. Permite crear, completar y eliminar tareas, con persistencia de datos usando `localStorage`.

🔗 **Demo en vivo:** [https://crisancasva.github.io/todos-react/](https://crisancasva.github.io/todos-react/)

---

## 📸 Vista previa

> App desplegada en GitHub Pages

---

## 🚀 Funcionalidades

- ✔️ Ver el total de tareas y cuántas has completado
- 🔍 Buscar tareas por nombre
- ✅ Marcar tareas como completadas
- 🗑️ Eliminar tareas
- ➕ Crear nuevas tareas mediante un modal
- 💾 Persistencia de datos con `localStorage` (los datos se mantienen al recargar)
- ⏳ Estado de carga y manejo de errores

---

## 🛠️ Tecnologías utilizadas

- [React 18](https://react.dev/)
- JavaScript (ES6+)
- CSS
- localStorage (para persistencia)
- [GitHub Pages](https://pages.github.com/) (para el despliegue)

---

## 📁 Estructura del proyecto

```
src/
├── App.js                  # Lógica principal y estado global
├── AppUI.js                # Componente de presentación principal
├── TodoContext/            # Context API para estado global
│   └── index.js
├── useLocalStorage/        # Hook personalizado para localStorage
│   └── index.js
├── TodoCounter/            # Contador de tareas completadas
├── TodoSearch/             # Buscador de tareas
├── TodoList/               # Lista de tareas
├── TodoItem/               # Ítem individual de tarea
├── TodoButtonCreate/       # Botón para abrir modal de creación
├── TodoLoading/            # Skeleton de carga
├── TodoError/              # Mensaje de error
└── TodoEmpty/              # Mensaje cuando no hay tareas
```

---

## ⚙️ Instalación y uso local

### Prerrequisitos

- Node.js >= 14
- npm

### Pasos

```bash
# 1. Clona el repositorio
git clone https://github.com/crisancasva/todos-react.git

# 2. Entra al directorio
cd todos-react

# 3. Instala las dependencias
npm install

# 4. Inicia el servidor de desarrollo
npm start
```

La app estará disponible en `http://localhost:3000`

---

## 📦 Build y despliegue

```bash
# Generar build de producción
npm run build

# Desplegar en GitHub Pages
npm run deploy
```

---

## 📝 Licencia

Este proyecto fue desarrollado como práctica del curso de React de [Platzi](https://platzi.com/).
