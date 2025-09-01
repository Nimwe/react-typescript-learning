import { BrowserRouter, Link, Route, Routes } from 'react-router';

import './App.css'

import CounterPage from "./pages/CounterPage";
import TasksPage from './pages/TasksPage/TasksPage';
import ClockPage from './pages/ClockPage/ClockPage';
import HomePage from './pages/HomePage';
import RandomWordPage from './pages/RandomWordPage';
import UsersPage from './pages/UsersPage/UsersPage';
import DomModificationPage from './pages/DomModification/DomModificationPage';

function App() {

  return (
    <>
      <BrowserRouter>

        <header>
          <h1>React TypeScript training</h1>

          <nav>
            <Link to="/counter">Compteur</Link>
            <Link to="/tasks">Liste de tâches</Link>
            <Link to="/dommodification">Modification dynamique du DOM</Link>
            <Link to="/randomword">Mots aléatoires</Link>
            <Link to="/clock">Horloge</Link>
            <Link to="/users">Liste d'utilisateurs</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/counter" element={<CounterPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/dommodification" element={<DomModificationPage />} />
            <Route path="/randomword" element={<RandomWordPage />} />
            <Route path="/clock" element={<ClockPage />} />
            <Route path="/users" element={<UsersPage />} />
          </Routes>
        </main >
      </BrowserRouter>
    </>
  );
}

export default App
