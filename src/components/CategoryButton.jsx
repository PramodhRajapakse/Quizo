import React, { useState, useEffect } from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage } from "mdb-react-ui-kit";
import "../assets/styles/CategoryButton.css";

export const CategoryButton = ({ label, imageUrl, onSelect = (f) => f }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    setIsSelected((prev) => !prev); // Toggle selected state
    onSelect(label); // Notify parent component of the selection
  };

  return (
    <MDBCard
      className="category-card text-center shadow-sm m-3"
      onClick={handleCardClick}
    >
      <MDBCardBody>
        <MDBCardImage src={imageUrl} alt={`${label} image`} className="category-card-image p-2" />
        <MDBCardTitle className="category-card-title mt-3">{label}</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
  );
};
