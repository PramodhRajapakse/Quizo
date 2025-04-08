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
  const [isDisabled, setIsDisabled] = useState(true);
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
    setSelectedCat(val);
    setIsDisabled(false);
  }

  const handleContinue = () => {
    if(selectedCat)
      navigate("/details", { state: { category: selectedCat } });
  }

  return (
    <div className="categoryScreen">
      <div className="container-fluid text-center">
        <p className="heading">Welcome to Quizo</p>
        <p className="detailText">Select category to start quiz</p>
      </div>
      <div className="categoryContainer">
        {categories.map((category) => {
          return (
            <CategoryButton
            key={category.id}
            imageUrl={category.imageUrl}
            label={category.name}
            onSelect={() => { chooseCategory(category) }}
            isSelected={selectedCat?.id === category.id} />
          )
        })}

        <div className="d-flex justify-content-center w-100 mb-3">
        <MDBBtn onClick={handleContinue} disabled={isDisabled} style={{backgroundColor: 'var(--navy)'}} className="border-0 w-25 btn">Continue</MDBBtn>
        </div>
      </div>
    </div>
  )
}

export default CategoryScreen;



