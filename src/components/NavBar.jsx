import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/quizo_logo.jpeg";
import { useAuth } from "../auth/AuthProvider";
import { MDBBtn } from "mdb-react-ui-kit";

const NavBar = () => {
	const { token, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate("/");
	};

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

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<a className="navbar-brand mt-2 mt-lg-0" href="/">
						<img src={logo} height="30" alt="MDB Logo" loading="lazy" />
					</a>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link" to="categories">
								Categories
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Login
							</Link>
						</li>
						<li className="nav-item">
							<Link to="signup" className="nav-link">
								Register
							</Link>
						</li>
						{localStorage.getItem("role") === "ADMIN" ? (
							<li className="nav-item">
								<Link to="admin" className="nav-link">
									Admin
								</Link>
							</li>
						) : null}
					</ul>
				</div>

				<div className="d-flex align-items-center">
					{token ? (
						<MDBBtn
							onClick={handleLogout}
							className="nav-link p-2"
							color="link"
						>
							Logout
						</MDBBtn>
					) : null}
					<div className="dropdown">
						<a
							className="dropdown-toggle d-flex align-items-center hidden-arrow"
							href="/"
							id="navbarDropdownMenuAvatar"
							role="button"
							data-mdb-toggle="dropdown"
							aria-expanded="false"
						>
							<img
								src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
								className="rounded-circle"
								height="25"
								alt="Black and White Portrait of a Man"
								loading="lazy"
							/>
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default NavBar;
