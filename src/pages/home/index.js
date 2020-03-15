import React from 'react';
import Button from '@kiwicom/orbit-components/lib/Button';
import { Flex } from 'reflexbox';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Container from '../../container';
import logo from '../../educord.png';

function Main() {
  const { t } = useTranslation();

  return (
    <Container>
      <Flex flexDirection="column" alignItems="center">
        <Img src={logo} alt="EduCord Logo" />
        <h1>{t('welcome')}</h1>
        <Flex width={[1, 1 / 2]} justifyContent="space-around">
          <Button href="/teachers">I am a Teacher</Button>
          <Button href="/students">I am a Student</Button>
        </Flex>
      </Flex>
    </Container>
  );
}

const Img = styled.img`
  height: 64px;
`;

export default Main;
