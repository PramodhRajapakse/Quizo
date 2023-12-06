import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import "../assets/styles/DetailScreen.css";


const DetailScreen = () => {
  const { state } = useLocation();
  const { category } = state;
  const [categoryName, setCategoryName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setCategoryName(category.categoryName);
  }, [category]);

  const handleStart = () => {
    navigate('/questions', { state: { category: category } });
  }

  return (
    <div className="body d-flex justify-content-center">
      <div className="detailTextContainer">
        <p className="appTitle">Quizo</p>
        <div className="detailText">
          Selected Quiz Topic - <p>{categoryName}</p>
        </div>
        <div>
          Total questions to attempt:{' '}
          <p>10</p>
        </div>
        <MDBBtn className="bg-dark" onClick={() => handleStart()}>Start</MDBBtn>
      </div>
    </div>
  )
}

export default DetailScreen;
