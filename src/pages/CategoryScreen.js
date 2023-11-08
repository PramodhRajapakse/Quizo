import React from "react";
import { CategoryButton } from "../components/CategoryButton";
import { useNavigate } from "react-router-dom";
import "../assets/styles/CategoryScreen.css";
import cats from "../services/data.json";
import { useEffect, useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";

const CategoryScreen = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    setCategories(cats.trivia_categories);
  }, []);

  const chooseCategory = (val) => {
    setSelectedCat(val)
  }

  const handleContinue = () => {
    navigate("/details", { state: { category: selectedCat } });
  }

  return (
    <div>
      <div className="container-fluid text-center">
        <p className="heading">Welcome to Quizo</p>
        <p className="detailText">Select category to start quiz</p>
      </div>
      <div className="categoryContainer">
        {categories.map((category) => {
          return (
            <CategoryButton key={category.id} label={category.name} onClick={() => { chooseCategory(category) }} />
          )
        })}
      </div>
      <div className="d-flex justify-content-center">
        <MDBBtn onClick={handleContinue} className="d-flex btn btn-dark">Continue</MDBBtn>
      </div>
    </div>
  )
}

export default CategoryScreen;



