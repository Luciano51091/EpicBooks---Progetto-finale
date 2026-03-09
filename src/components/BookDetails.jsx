import { useParams, useNavigate } from "react-router";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import CommentArea from "./CommentArea";
import fantasy from "../data/fantasy.json";

const BookDetails = () => {
  const { asin } = useParams();
  const navigate = useNavigate();

  const book = fantasy.find((b) => b.asin === asin);

  if (!book) {
    return (
      <Container className="my-5 text-center">
        <h2 className="display-4">Ops! Libro non trovato 🧐</h2>
        <Button variant="primary" onClick={() => navigate("/")} className="mt-3">
          Torna alla Home
        </Button>
      </Container>
    );
  }

  return (
    <Container fluid="lg" className="py-5">
      <Row className="g-4">
        {/* 1. COLONNA IMMAGINE*/}
        <Col lg={4}>
          <Button variant="outline-secondary" className="mb-4 w-10 border-0 text-start" onClick={() => navigate(-1)}>
            <i className="bi bi-arrow-left me-2"></i>Torna alla Home
          </Button>
          <Card className="shadow border-0 sticky-top " style={{ top: "100px" }}>
            <Card.Img variant="top" src={book.img} alt={book.title} className="rounded" />
          </Card>
        </Col>

        {/* 2. COLONNA CENTRALE*/}
        <Col lg={4}>
          <div className="ps-lg-3">
            <Badge bg="info" className="mb-2 text-uppercase letter-spacing-1">
              {book.category}
            </Badge>
            <h1 className="fw-bold mb-3">{book.title}</h1>
            <h2 className="text-primary fw-light mb-2">€{book.price}</h2>
            <Badge bg="secondary" className="text-uppercase letter-spacing-1">
              Asin: {book.asin}
            </Badge>
          </div>
        </Col>

        {/* 3. COLONNA COMMENTI */}
        <Col lg={4}>
          <Card className="comment-column-card border-0  ">
            <Card.Body className="comments-wrapper p-0">
              <CommentArea asin={asin} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetails;
