import React from "react";
import { CategoryButton } from "../components/CategoryButton";
import { useNavigate } from "react-router-dom";
import "../assets/styles/CategoryScreen.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import data from "../assets/data/Categories.json";

const apiKey = process.env.REACT_APP_API_KEY;
const CategoryScreen = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  let navigate = useNavigate();


  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get('https://quizapi.io/api/v1/categories', {
    //       headers: {
    //         'X-Api-Key': apiKey, // Set the API key here
    //       }
    //     });
    //     setCategories(response.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // fetchData();
    setCategories(data);
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
            <CategoryButton key={category.id} imageUrl={category.imageUrl} label={category.name} onClick={() => { chooseCategory(category) }} />
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



