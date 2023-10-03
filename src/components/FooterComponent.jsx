// FooterComponent.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #000;
  color: white;
  padding: 20px;
  text-align: center;
`;

const FooterComponent = () => {
  return (
    <FooterContainer>
      <p>2023 You-Flix.</p>
    </FooterContainer>
  );
};

export default FooterComponent;
