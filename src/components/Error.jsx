export const Error = ({ show, message, className }) => {
	return show ? (
		<div className={(className, "text-danger small")}>{message}</div>
	) : null;
};
