import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import GridViewPage from "./pages/GridViewPage";
import

function App() {
  return (
    <Router>
    <Container fluid>
    <Header />
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/gridview" element={<GridViewPage />} />
    <Route path="/listitem/:id" element={<ListItemDetailsPage />} />
    <Route path="*"element={<NotFoundPage />} />
    </Routes>
    <Footer />
    </Container>
    </Router>
    );
    
}

export default App;
