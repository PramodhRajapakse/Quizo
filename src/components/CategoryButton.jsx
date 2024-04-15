import { MDBBtn } from "mdb-react-ui-kit"
import '../assets/styles/CategoryButton.css';

export const CategoryButton = ({label, onClick=f=>f}) => {
    return (
        <div className="categoryBtnContainer m-2">
        <MDBBtn className="categoryBtn btn-outline-dark" onClick={onClick}>
            <i className="fa-brands fa-react fa-xl me-2" aria-hidden="true"></i>
            <p className="categoryBtnText">{label}</p>
        </MDBBtn >
        </div>
    )
}
