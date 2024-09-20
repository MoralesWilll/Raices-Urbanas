import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

// Estilos del Navbar
export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ffffff13;
  color: white;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Menu = styled.ul<{ open: boolean }>`
  display: flex;
  list-style: none;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: fit-content;
    ${({ open }) =>
      open
        ? "display: flex;"
        : "display: none;"}// Usamos interpolación aquí para evitar el error
  }
`;

export const MenuItem = styled.li`
  cursor: pointer;
  &:hover {
    background-color: #ffffff6e;
    font-weight: bold;
    border-radius: 5%;
    padding: 3px;
  }
`;

export const MenuButton = styled.div`
  padding: 10px 20px;
  background-color: #ffffff44;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    background: linear-gradient(
      45deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(0, 60, 112, 1) 29%,
      rgba(123, 174, 219, 1) 80%
    );
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Componente Navbar con funcionalidad de menú desplegable
export const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Navbar>
      <Logo>Mi Logo</Logo>

      {/* Botón de hamburguesa para abrir/cerrar el menú */}
      <HamburgerButton onClick={toggleMenu}>
        {/* Aquí puedes colocar el ícono del menú */}☰
      </HamburgerButton>

      <Menu open={menuOpen}>
        <Link href="/" passHref className="no-underline text-white">
          <MenuItem>Inicio</MenuItem>
        </Link>
        <MenuItem>Servicios</MenuItem>
        <MenuItem>Nosotros</MenuItem>
        <Link href="/pages/customer" passHref className="no-underline text-white">
          <MenuItem>Cliente</MenuItem>
        </Link>
      </Menu>
      <Link href="/pages/login">
        <MenuButton>
          Ingresar
        </MenuButton>
      </Link>
    </Navbar>
  );
};

export default Nav;
