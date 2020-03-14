import React from 'react';
import NavigationBar from '@kiwicom/orbit-components/lib/NavigationBar';
import ButtonLink from '@kiwicom/orbit-components/lib/ButtonLink';
import Stack from '@kiwicom/orbit-components/lib/Stack';

function Nav() {
  return (
    <NavigationBar>
      <Stack flex direction="row" justify="between">
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink>Teachers</ButtonLink>
        <ButtonLink>Students</ButtonLink>
        <ButtonLink>About</ButtonLink>
      </Stack>
    </NavigationBar>
  );
}

export default Nav;
