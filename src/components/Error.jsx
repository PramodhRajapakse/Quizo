export const Error = ({ show, message, className }) => {
	return show ? (
		<div className={(className, "text-danger")}>{message}</div>
	) : null;
};
