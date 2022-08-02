import './App.css';
import {
  Collapse, 
  Navbar, 
  NavbarToggler, 
  NavbarBrand, 
  Nav, 
  NavItem, 
  NavLink, 
  UncontrolledDropdown,
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem, 
  NavbarText
} from 'reactstrap';

function App() {
  return (
    <div>
      <Navbar expand='md' color='dark' container='xl' dark>
        <NavbarBrand href="#">Productos</NavbarBrand>
        <NavbarBrand href="#">Agregar Productos</NavbarBrand>
        <NavbarBrand href="#">Historial de compras</NavbarBrand>
        <NavbarBrand href="#">Carrito de compras</NavbarBrand>
        <NavbarToggler></NavbarToggler>
        <Collapse expand='md' color='dark' container='xl' dark>
          <Nav>
            <NavItem>
              <NavLink href="#">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown>
              <DropdownToggle> Options </DropdownToggle>
              <DropdownMenu>
                <DropdownItem> Option 1 </DropdownItem>
                <DropdownItem> Option 2 </DropdownItem>
                <DropdownItem />
                <DropdownItem> Reset </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default App;
