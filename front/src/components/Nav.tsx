import styled from 'styled-components';
import Link from 'next/link';

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ffffff13;
  color: white;
  width: 100%;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #ffffff44;
  color: white;
  border: solid white 1px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight:bold;
  &:hover {
    background-color: #003C71;
  }
`;

export const Nav: React.FC = () => {
  return (
    <Navbar>
      <Logo>Mi Logo</Logo>
      <Menu>
        <MenuItem>Inicio</MenuItem>
        <MenuItem>Servicios</MenuItem>
        <MenuItem>Nosotros</MenuItem>
      </Menu>
      <Button>
        <Link href="/pages/login">Ingresar</Link>
      </Button>
    </Navbar>
  );
};

export default Nav;
