import { MDBBtn } from "mdb-react-ui-kit";
import "../assets/styles/DetailScreen.css";

const DetailScreen = () => {
return (
    <div className="d-flex justify-content-center">
    <div className="detailTextContainer">
    <p className="appTitle">Quizo</p>
      <p className="detailText">
        Selected Quiz Topic: <p>"selectedQuizTopic"</p>
      </p>
      <p>
        Total questions to attempt:{' '}
        <p>"otalQuestions"</p>
      </p>
      <p>
        Score in total: <p>"totalscorw</p>
      </p>
      <p>
        Total time: <p>convertSecondstotalTime</p>
      </p>
      <p>
        To save time, you can skip questions. Skipped questions will show up at the
        end of the quiz.
      </p>
      <MDBBtn>Start</MDBBtn>
    </div>
    </div>
)
}

export default DetailScreen;
