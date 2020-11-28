import React from 'react';
import styled from 'styled-components';

const StyledDivider = styled.hr`
  && {
    height: 4px;
    background-color: #ed3e3b;
    border: none;
    width: 192px;
    margin: 32px 0;
  }
`;

const Divider = () => <StyledDivider />;

export default Divider;
