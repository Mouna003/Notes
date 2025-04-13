import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoteDetail from './pages/NoteDetail';
import CreateNote from './pages/CreateNote';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="container mt-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Home />} />
        <Route path="/notes/:id" element={<NoteDetail />} />
        <Route path="/notes/new" element={<CreateNote />} />
      </Routes>
    </div>
  );
}

export default App;