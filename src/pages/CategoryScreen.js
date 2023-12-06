import React from "react";
import { CategoryButton } from "../components/CategoryButton";
import { useNavigate } from "react-router-dom";
import "../assets/styles/CategoryScreen.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";

const CategoryScreen = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const chooseCategory = (val) => {
    setSelectedCat(val)
  }

  const handleContinue = () => {
    navigate("/details", { state: { category: selectedCat } });
  }

  return (
    <div style={{ height: "85vh" }}>
      <div className="container-fluid text-center">
        <p className="heading">Welcome to Quizo</p>
        <p className="detailText">Select category to start quiz</p>
      </div>
      <div className="categoryContainer">
        {categories.map((category) => {
          return (
            <CategoryButton key={category._id} label={category.categoryName} onClick={() => { chooseCategory(category) }} />
          )
        })}
      </div>
      <div className="d-flex justify-content-center w-100">
        <MDBBtn onClick={handleContinue} className="w-25 btn btn-dark">Continue</MDBBtn>
      </div>
    </div>
  )
}

export default CategoryScreen;



