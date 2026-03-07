import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function MyNav({ searchQuery, setSearchQuery }) {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Navbar bg={theme} variant={theme} expand="lg" className="shadow-sm sticky-top">
      <Container>
        <Navbar.Brand href="#">Epibooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-4">
            <Form.Control
              type="search"
              placeholder="Cerca un libro..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              style={{ width: "250px" }}
            />

            <Button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="d-flex align-items-center justify-content-center p-0 border"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                fontSize: "1.2rem",
                backgroundColor: "transparent",
                color: theme === "light" ? "#212529" : "#f8f9fa",
                borderColor: theme === "light" ? "#212529" : "#f8f9fa",
                boxShadow: "none",
              }}
            >
              {theme === "light" ? <i className="bi bi-moon-fill"></i> : <i className="bi bi-sun-fill"></i>}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
