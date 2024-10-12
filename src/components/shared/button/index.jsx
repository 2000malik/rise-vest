/* eslint-disable react/prop-types */


export const Button = ({ children, handleOnclick, className }) => {
  return <button className={className} onClick={handleOnclick}>{children}</button>;
};
