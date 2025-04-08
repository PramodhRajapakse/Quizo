import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardImage} from "mdb-react-ui-kit";
import "../assets/styles/DetailScreen.css";

const DetailScreen = () => {
  const { state } = useLocation();
  const { category } = state;
  const [categoryName, setCategoryName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setCategoryName(category.name);
  }, [category]);

  const handleStart = () => {
    navigate('/questions', { state: { category: category } });
  }

  return (
     <div
      className="quiz-start-container d-flex justify-content-center align-items-center">
     <MDBCard className="text-center quiz-start-card">
       <MDBCardBody>
         <MDBCardTitle className="appTitle">Quizo</MDBCardTitle>
         <MDBCardText className="detailText">
           <strong>Selected Quiz Topic:</strong> {categoryName}
         </MDBCardText>
         <MDBCardImage src={category.imageUrl} alt={`${categoryName} image`} className="category-card-image p-2" />
         <MDBCardText>
           <strong>Total questions to attempt:</strong> 10
         </MDBCardText>
         <MDBBtn className="bg-dark border-0" onClick={handleStart}>
           Start
         </MDBBtn>
       </MDBCardBody>
     </MDBCard>
   </div>
  )
}

export default DetailScreen;
