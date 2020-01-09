import {useState} from 'react';
import "./styles/header.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Link from 'next/link';
import LocaleSwitcher from '../shared/localeSwitcher';
import {useLocale}  from '~/locales';
const Header = props => {
  const [isOpen, setIsOpen] = useState(false);
  const { locale} = useLocale();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <Link   href={`/${locale}/about`}>
                <a className="nav-link">
                About
                </a>
              </Link>
            </NavItem>
            <NavItem>
              <LocaleSwitcher/>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
