import { NavLink } from "react-router-dom";
import "./Header.css";

const routes = [
  {
    path: "/",
    title: "Главная",
  },
  {
    path: "/cart",
    title: "Корзина",
  },
  {
    path: "/profile",
    title: "Профиль",
  },
];

export const Header = () => {
  return (
    <header>
      <nav>
        {routes.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "active-link link" : "link"
            }
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};
