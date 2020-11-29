import React from 'react';
import PropTypes from 'prop-types';

import { StyledList } from './List.styled';

const List = ({ children, ...props }) => (
  <StyledList {...props}>{children}</StyledList>
);

List.propTypes = {
  children: PropTypes.node.isRequired,
};

export default List;
