import React, { useState, useEffect } from "react";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://pulpe-admin-api.herokuapp.com/categories/", {
      method: "GET",
    }).then((response) =>
      response.json().then((json) => {
        setCategories(json.data);
      })
    );
  }, []);

  return (
    <div className="container">
      <div className="row m-3">
        <div className="col d-flex justify-content-center">
          <h1>Categories</h1>
        </div>
      </div>
      <div className="row row-cols-1 mt-2 mb-2">
        {categories.length ? (
          categories.map((category) => {
            return (
              <>
                <div className="col mt-2 mb-2">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{category.name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {category.description || ""}
                      </h6>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Categories;
