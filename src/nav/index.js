import React from 'react';
import styled from 'styled-components';
import NavigationBar from '@kiwicom/orbit-components/lib/NavigationBar';
import ButtonLink from '@kiwicom/orbit-components/lib/ButtonLink';
import Stack from '@kiwicom/orbit-components/lib/Stack';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <NavigationBar>
      <Stack flex direction="row" justify="between" spacing="tight">
        <StyledNavLink to="/">
          <ButtonLink>Home</ButtonLink>
        </StyledNavLink>
        <StyledNavLink to="/teachers">
          <ButtonLink>Teachers</ButtonLink>
        </StyledNavLink>
        <StyledNavLink to="/students">
          <ButtonLink>Students</ButtonLink>
        </StyledNavLink>
        <StyledNavLink to="/about">
          <ButtonLink>About</ButtonLink>
        </StyledNavLink>
      </Stack>
    </NavigationBar>
  );
}

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

export default Nav;
