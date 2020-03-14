import React from 'react';
import Container from '../../container';
import Button from '@kiwicom/orbit-components/lib/Button';
import { Flex } from 'reflexbox';

function Main() {
  return (
    <Container>
      <Flex flexDirection="column" alignItems="center">
        <h1>Welcome to EduCord</h1>
        <Flex width={[1, 1 / 2]} justifyContent="space-around">
          <Button>I am a Teacher</Button>
          <Button>I am a Student</Button>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Main;
