import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { Cart } from "./pages/Cart";
import { Profile } from "./pages/Profile";
import { Header } from "./components/Header";
import { ProductDetail } from "./pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <hr />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/profile" element={<Profile />}>
            <Route index element={<Navigate to="settings" replace />} />
            <Route path="settings" element={<p>настройки профиля</p>} />
            <Route path="info" element={<p>личная информция</p>} />
          </Route>

          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="*" element={<h1>Такой страницы не существует</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
