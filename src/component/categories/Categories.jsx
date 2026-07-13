import { use } from "react";
import { NavLink } from "react-router";

const categoriesPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoriesPromise);

  return (
    <div>
      <h1 className="font-bold text-2xl">Categories</h1>
      

      <div className="grid grid-cols-1 mt-5 gap-3 ">
        {categories.map((categorie) => (
          <NavLink
           key={categorie.id}
            to={`/categories/${categorie.id}`}
            className={({ isActive }) =>
              `btn bg-white border-0 justify-start ${
                isActive
                  ? "text-primary font-bold border-b-2 border-primary"
                  : "hover:bg-gray-100"
              }`
            }
          >
            {categorie.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
