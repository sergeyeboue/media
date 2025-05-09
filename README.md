# 📸 Media App

Une application web interactive construite avec **React**, qui permet d'explorer des utilisateurs, leurs albums photo et leurs images, avec une gestion de l'état centralisée grâce à **Redux Toolkit**.

---

## 🧾 Description

Ce projet simule l'interaction avec une base de données en utilisant une **API REST factice** (via JSON Server). Il met en œuvre :

- ✅ Affichage de la liste des utilisateurs
- ✅ Consultation des albums d'un utilisateur
- ✅ Visualisation des photos contenues dans chaque album

Ce projet a été développé dans un objectif pédagogique afin d'illustrer :
- l'architecture d'une application React moderne,
- la gestion de l’état global avec Redux,
- l’utilisation d’un back-end simulé.

---

## 🛠️ Technologies utilisées

- [React](https://reactjs.org/)
- [Redux Toolkit] (https://redux-toolkit.js.org/)
- [Tailwind CSS] (https://tailwindcss.com/)
- [JSON Server] (https://github.com/typicode/json-server)
- [Vite](https://vitejs.dev/)

---

## 🚀 Installation et exécution

1. **Cloner le dépôt**
git clone https://github.com/sergeyeboue/media.git
cd media

3. Installer les dépendances:
   npm install
   
5. Lancer JSON Server (API simulée):
npx json-server --watch db.json --port 3001

7. Lancer le front-end
npm run dev
L’application sera accessible sur http://localhost:5173

📁 Project Structure
media/
├── public/
├── src/
│   ├── components/   → Composants réutilisables
│   ├── hooks	/
│   ├── store/        → Configuration & Logique Redux
│   └── App.js        
|   └── index.js      → Point d’entrée de l’application
├── db.json           → Fichier simulant la base de données
├── index.html
├── tailwind.config.js
└── vite.config.js
