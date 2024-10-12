/* eslint-disable react/prop-types */
import { ArrowRight } from "../../../assets/svgs";

export const Link = ({ link }) => {
  return (
    <a href="#">
      {link}
      <img alt="arrow-right" style={{ marginLeft: 5 }} src={ArrowRight} />
    </a>
  );
};
