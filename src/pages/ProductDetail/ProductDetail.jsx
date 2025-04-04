import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { mainProductsData } from "../../mock/main.mock";

export function ProductDetail() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    if (productId) {
      const product = mainProductsData.find(
        (item) => item.id === Number(productId)
      );
      if (product) setCurrentProduct(product);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToCart = () => {
    navigate("/cart", {
      state: { product_id: productId },
    });
  };

  return (
    <main>
      <button onClick={() => navigate(-1)}>Вернуться назад</button>

      <h1>страница конкретного продукта</h1>
      <h3>{currentProduct.title}</h3>
      <p>{currentProduct.price}</p>
      <img src={currentProduct.img} alt="product-image" width={500} />

      <button onClick={addToCart}>Добавить в корзину</button>
    </main>
  );
}
