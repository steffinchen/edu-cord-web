import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
  return (
    <div>
      <Content>{children}</Content>
    </div>
  );
};

const Content = styled.div`
  margin-top: 64px;
`;

export default Container;
