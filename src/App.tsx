import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SobrePage from "./pages/SobrePage";
import EquipamentosPage from "./pages/EquipamentosPage";
import ServicosPage from "./pages/ServicosPage";
import ContatoPage from "./pages/ContatoPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/equipamentos" element={<EquipamentosPage />} />
            <Route path="/servicos" element={<ServicosPage />} />
            <Route path="/contato" element={<ContatoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
