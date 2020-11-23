import React from 'react';
import styled from 'styled-components';

const StyledDivider = styled.hr`
  && {
    height: 0.25rem;
    background-color: #ed3e3b;
    border: none;
    width: 12rem;
    margin: 2rem 0;
  }
`;

const Divider = () => <StyledDivider />;

export default Divider;
