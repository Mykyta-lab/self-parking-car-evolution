import React, { CSSProperties } from 'react';
import { StyledLink } from 'baseui/link';
import { SiGithub } from 'react-icons/all';
import { GITHUB_LINK } from '../../constants/links';

function MainNav() {
  const linkStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px',
    marginBottom: '10px',
  };

  const iconStyle: CSSProperties = {
    marginRight: '5px',
  };

  return (
    <nav style={{ display: 'flex', marginBottom: '20px' }}>
      <StyledLink href={GITHUB_LINK} style={linkStyle}>
        <SiGithub style={iconStyle} /> Source-code
      </StyledLink>
    </nav>
  );
}

export default MainNav;
