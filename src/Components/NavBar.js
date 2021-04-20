import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './Nav.css'
export const NavBar = () => {
    return (
        <Navbar classname="background" variant="light" expand="lg">
            <Navbar.Brand href="/home">Numerical</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown
                        title="Root of Equation"
                        id="basic-nav-dropdown"
                    >
                        <NavDropdown.Item href="/root/Bisection">
                            Bisection
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/root/Falseposition">
                            False position
                        </NavDropdown.Item>

                        <NavDropdown.Item href="/root/Newton-raphson">
                            Newton-raphson
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/root/Onepoint">
                            Onepoint
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/root/Secant">
                            Secant
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Linear Algebra" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/linear/ConjugateGradient">
                            ConjugateGradient
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/linear/Cramers Rule">
                            Cramers Rule
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/linear/GaussElimination">
                            GaussElimination
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/linear/Gaussseidel">
                            Gaussseidel
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/linear/GaussJordan">
                            GaussJordan
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/linear/Ludecomposition">
                            Ludecomposition
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/linear/JacobiIteration">
                            JacobiIteration
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Interpolation" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/Inter/Lagrange">
                            Lagrange
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/Inter/Newton divided difference">
                            Newton divided difference
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/Inter/Spline">
                            Spline
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                        title="LeastSquaresRegression"
                        id="basic-nav-dropdown"
                    >
                        <NavDropdown.Item href="/Regress/LinearRegression">
                            LinearRegression
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/Regress/PolynomialRegression">
                            PolynomialRegression
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/Regress/MultiRegression">
                            MultiRegression
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
