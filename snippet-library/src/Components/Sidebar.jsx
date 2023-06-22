import { Link } from "react-router-dom";
import { dataContext } from "./Home";
import { useContext, useEffect, useState } from "react";

const Sidebar = () => {
  const [data, setData] = useContext(dataContext);
  const [filteredData, setfilteredData] = useContext(dataContext);
  const [foundElement, setElement] = useState("false");
  const uniqueValues = [];

  const [categoryFilters, setCategoryFilters] = useState(new Set());

  const updateFilters = (checked, categoryFilter) => {
    if (checked) {
      setCategoryFilters((prev) => new Set(prev).add(categoryFilter));
    } else {
      setCategoryFilters((prev) => {
        const next = new Set(prev);
        next.delete(categoryFilter);
        return next;
      });
    }
    //setfilteredData(filteredProducts);
  };

  const filteredProducts =
    categoryFilters.size === 0
      ? data
      : data.filter((p) => categoryFilters.has(p.category));

  console.log(filteredProducts);
  useEffect(() => {
    setfilteredData(filteredProducts);
  }, [setfilteredData]);
  return (
    <nav id="sidebar">
      <h1>
        <Link to="/" className="logo" id="logo">
          Snippet.
        </Link>
      </h1>
      <ul className="list-unstyled components mb-5">
        <li className="active">
          <div className="list-heading">
            <Link to="/add" className="btn-addSnippet">
              <span className="fa fa-plus"></span>
              Add Snippet
            </Link>
          </div>
        </li>
        <li className="active">
          <div className="list-heading">
            <a href="#">
              <span className="fa fa-home"></span>
              Categories
            </a>
          </div>
          {Array.isArray(data)
            ? data.map((value, index) => {
                if (!uniqueValues.includes(value.category)) {
                  uniqueValues.push(value.category);
                  return (
                    <div className="form-check" key={index}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        onChange={(e) =>
                          updateFilters(e.target.checked, value.category)
                        }
                      />
                      <label className="form-check-label">
                        {value.category}
                      </label>
                    </div>
                  );
                } else return null;
              })
            : ""}
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
