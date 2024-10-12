/* eslint-disable react/prop-types */

export const Header = ({ children, className }) => {
  const style = {
    fontSize: "40px",
    fontWeight: 600,
  };
  return (
    <h2 className={className} style={style}>
      {children}
    </h2>
  );
};
