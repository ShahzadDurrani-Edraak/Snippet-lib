import { Link } from "react-router-dom";

const Sidebar = () => {
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

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              HTML
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              SCSS
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              JAVASCRIPT
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              PHP
            </label>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
