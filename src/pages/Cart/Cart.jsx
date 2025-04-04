import { useLocation } from "react-router-dom";

export const Cart = () => {
  const location = useLocation();
  console.log(location);

  return (
    <main>
      <h1>Корзина</h1>
    </main>
  );
};
