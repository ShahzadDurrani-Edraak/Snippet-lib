//import image from "../code.jpg";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Link, useParams } from "react-router-dom";
import Snippets from "../Components/json/Snippets.json";
import { useState } from "react";

const Single = () => {
  const { id } = useParams();
  const curr_snippet = Snippets.find((snippet) => snippet.id == id);
  const { title, description, image, codes } = curr_snippet;
  const [copy, setCopy] = useState("false");

  //const handleCopy = (id) => {
  //  console.log(copy);
  //  const curr_code = codes.find((code) => code.id == id);
  //  navigator.clipboard.writeText(curr_code.code);
  // setCopy(true);
  //  setTimeout(() => {
  //    setCopy(false);
  //  }, 100);
  // };

  const handleCopy = (id) => {
    setCopy((prevCopy) => {
      const updatedCopy = { ...prevCopy }; // Create a shallow copy of the copy state
      updatedCopy[id] = true; // Set the copy state for the specified code snippet to true
      return updatedCopy;
    });

    const curr_code = codes.find((code) => code.id == id);
    navigator.clipboard.writeText(curr_code.code);

    setTimeout(() => {
      setCopy((prevCopy) => {
        const updatedCopy = { ...prevCopy }; // Create a shallow copy of the copy state
        updatedCopy[id] = false; // Set the copy state for the specified code snippet back to false
        return updatedCopy;
      });
    }, 100);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="snippet-card">
            <Link to="/">Back</Link>
            <div className="snippet-picture">
              <img src={image} alt="picture" />
            </div>
            <h1 className="snippet-title">{title}</h1>
            <p className="snippet-description">{description}</p>

            {codes.map((code) => (
              <div className="snippetCode" key={code.id}>
                <div className="code-heeader d-flex justify-content-between items-center">
                  <p className="text-sm">{code.language}</p>
                  {copy[code.id] ? (
                    <button
                      className="inline-flex items-center gap-1"
                      onClick={() => handleCopy(code.id)}
                    >
                      <span className="fa-regular fa-clipboard"></span>
                      copy code
                    </button>
                  ) : (
                    <button className="inline-flex items-center gap-1">
                      <span className="fa-solid fa-check"></span>
                      copied
                    </button>
                  )}
                </div>
                <SyntaxHighlighter
                  language={code.language}
                  customStyle={{ padding: "25px" }}
                  wrapLongLines={true}
                >
                  {code.code}
                </SyntaxHighlighter>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
