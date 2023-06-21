import { Link } from "react-router-dom";
import Snippets from "../Components/json/Snippets.json";
import { dataContext } from "./Home";
import { useContext } from "react";

const Content = () => {
  const [data, setData] = useContext(dataContext);

  return (
    <section className="section-products">
      <div className="container" id="container">
        <div className="row">
          {/* Single product */}
          {Array.isArray(data)
            ? data.map((snippet) => (
                <div className="col-md-6 col-lg-4 col-xl-3" key={snippet.id}>
                  <Link to={`/snippet/${snippet.id}`}>
                    <div id="product-1" className="single-product">
                      <div className="part-1">
                        <img src={snippet.image} alt="snippet"></img>
                        <span className="new">HTML</span>
                      </div>
                      <div className="part-2">
                        <h3 className="product-title">{snippet.title}</h3>
                        <p className="product-desc">
                          {snippet.description.substring(0, 50)}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            : console.log("is not array")}

          {/* Single product */}
        </div>
      </div>
    </section>
  );
};

export default Content;
