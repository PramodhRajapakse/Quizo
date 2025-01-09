import { useNavigate } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";

const NavBar = () => {
	const navigate = useNavigate();

	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-mdb-toggle="collapse"
					data-mdb-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<i className="fas fa-bars"></i>
				</button>

				<div className="d-flex align-items-center">
				</div>
			</div>
		</nav>
	);
};
export default NavBar;
