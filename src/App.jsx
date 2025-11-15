import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatPage from "./components/ChatPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/session/:id" element={<ChatPage />} />
      </Routes>
    </Router>
  );
}

export default App;
