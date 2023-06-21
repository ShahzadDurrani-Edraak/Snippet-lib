const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav_search">
      <div className="container-fluid">
        <div className="search-wrap col-md-12">
          <div className="inner-form" id="inner_form">
            <div className="input-field second-wrap">
              <span id="search_cmd"></span>
              <input
                id="search"
                type="text"
                placeholder="Do you want to find something?"
              />
            </div>
            <div className="input-field third-wrap">
              <button className="btn-search" type="button">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
