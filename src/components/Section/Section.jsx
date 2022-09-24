import PropTypes from 'prop-types';

import { Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      {title && <Title>{title}</Title>}
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
