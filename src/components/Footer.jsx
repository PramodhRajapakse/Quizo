import { colors } from "../assets/data/Colors";

const Footer = () => {
	return (
		<footer className="bg-dark text-center text-lg-start">
			<div
				className="text-light text-center p-3"
				style={{ backgroundColor: colors.primaryColorLight }}
			>
				© 2020 Copyright:
				<a className="text-light" href="/">
					Quizo
				</a>
			</div>
		</footer>
	);
};

export default Footer;
