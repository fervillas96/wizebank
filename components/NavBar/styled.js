import styled from 'styled-components';

const NavBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
`;

const Logo = styled.img`
  width: 24px;
  margin-right: 4px;
`;

export {
  NavBarContainer,
  LogoContainer,
  Logo,
}