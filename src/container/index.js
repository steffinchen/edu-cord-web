import React from 'react';
import styled from 'styled-components';
import Nav from '../nav';

export const Container = ({ children }) => {
  return (
    <div>
      <Nav></Nav>
      <Content>{children}</Content>
    </div>
  );
};

const Content = styled.div`
  margin-top: 52px;
`;
