import { Link } from "react-router-dom";
import { saveData } from "../api/api";
import { useEffect, useState, useRef } from "react";

const AddSnippet = ({ onChangeContent }) => {
  function handleAdd() {
    const selection = document.getElementById("snippet-language");
    let selection_value = selection.value;
    const div_snippet = document.getElementById("container-snippet");
    let snippet = "";
    snippet = snippet.concat(
      "<div class='textarea-snippet'><small class='snippetTag'>",
      selection_value,
      "</small><textarea class='form-control text_area' id='text_area' snippet='",
      selection_value,
      "' placeholder='Add snippet here' name='code' ></textarea></div>"
    );
    selection_value !== ""
      ? div_snippet.insertAdjacentHTML("beforeend", snippet)
      : document.getElementById("snippet-language").focus();
    selection_value = "";
  }

  const [formData, setFormData] = useState({});
  const [codesnippet, setsnippet] = useState([]);
  var [textareaValue, setText] = useState([]);

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    var arr = [];
    var textareas = document.querySelectorAll(".text_area");
    textareas.forEach(function (textarea) {
      var textareaName = textarea.getAttribute("snippet");
      var textareaValue = textarea.value;
      const code_data = {
        language: textareaName,
        code: textareaValue,
      };

      arr.push(code_data);
    });
    setFormData({ ...formData, ["code"]: arr });
    try {
      await saveData(formData);
      console.log("Data saved successfully");
    } catch (error) {
      // Error saving data
      console.error(error);
    }

    console.log(formData);
  };

  useEffect(() => {});

  return (
    <>
      <div className="container container-add">
        <div className="row d-flex justify-content-center">
          <Link to="/" className="btn-back">
            Back to home
          </Link>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Language
              </label>
              <div className="col-sm-10 padding-none">
                <select
                  className="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                  name="category"
                  onChange={handleChange}
                >
                  <option defaultValue="">Select language</option>
                  <option value="html">Html</option>
                  <option value="scss">Scss</option>
                  <option value="js">JavaScript</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="input-title" className="col-sm-2 col-form-label">
                Title
              </label>
              <div className="col-sm-10 padding-none">
                <input
                  type="title"
                  name="title"
                  className="form-control"
                  id="input-title"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="input-desc" className="col-sm-2 col-form-label">
                Description
              </label>
              <div className="col-sm-10 padding-none">
                <input
                  type="desc"
                  className="form-control"
                  id="input-desc"
                  name="description"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="input-code" className="col-sm-2 col-form-label">
                Add Snippet
              </label>
              <div className="col-sm-10">
                <div className="row container-snippet" id="container-snippet">
                  <div className="select-lang col-md-4">
                    <select
                      className="form-select form-select-md mb-3 col-md-5"
                      id="snippet-language"
                      aria-label=".form-select-lg example"
                    >
                      <option defaultValue="null" placeholder="Select Language">
                        {" "}
                      </option>
                      <option value="html">Html</option>
                      <option value="scss">Scss</option>
                      <option value="js">JavaScript</option>
                    </select>
                  </div>
                  <div className="btn-add col-md-2">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleAdd}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary float-end btn-post"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddSnippet;
