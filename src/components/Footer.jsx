import { colors } from "../assets/data/Colors";

const Footer = () => {
	return (
		<footer className="bg-dark text-center text-lg-start fixed-bottom">
			<div
				className="text-light text-center p-3"
				style={{ backgroundColor: colors.primaryColorLight }}
			>
				© 2025 Copyright: Quizo
			</div>
		</footer>
	);
};

export default Footer;
