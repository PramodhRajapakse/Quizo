import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import "../assets/styles/DetailScreen.css";


const DetailScreen = () => {
  const {state} = useLocation();
  const {category} = state;
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    setCategoryName(category.name);
  }, [category])
  
return (
    <div className="d-flex justify-content-center">
    <div className="detailTextContainer">
    <p className="appTitle">Quizo</p>
      <div className="detailText">
        Selected Quiz Topic: <p>{categoryName}</p>
      </div>
      <div>
        Total questions to attempt:{' '}
        <p>"otalQuestions"</p>
      </div>
      <div>
        Score in total: <p>"totalscorw</p>
      </div>
      <div>
        Total time: <p>convertSecondstotalTime</p>
      </div>
      <div>
        To save time, you can skip questions. Skipped questions will show up at the
        end of the quiz.
      </div>
      <MDBBtn>Start</MDBBtn>
    </div>
    </div>
)
}

export default DetailScreen;
