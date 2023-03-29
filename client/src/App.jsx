import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AcidionarLivros from "./pages/livros/AcidionarLivros";
import EditarLivros from "./pages/livros/EditarLivros";
import Livros from "./pages/livros/Livros";
import "./styles.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Livros />} />
          <Route path="/adicionar" element={<AcidionarLivros />} />
          <Route path="/editar/:id" element={<EditarLivros />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
