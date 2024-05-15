import "./App.css";
import Header from "./components/Header.jsx";
import { Routes, Route } from "react-router-dom";
import { Home, Create, Update } from "./pages";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<Create />} path="/add"></Route>
          <Route element={<Update />} path="/update/:id"></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
