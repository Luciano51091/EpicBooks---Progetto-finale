import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

function SingleBook({ book, selectedAsin, setSelectedAsin }) {
  const isSelected = selectedAsin === book.asin;
  const navigate = useNavigate();

  return (
    <>
      <Card onClick={() => setSelectedAsin(book.asin)} style={{ border: isSelected ? "3px solid red" : "1px solid #dee2e6" }} data-testid="book-card">
        <Card.Img variant="top" src={book.img} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{book.title}</Card.Title>
          <Button variant="info" className="mt-auto" onClick={() => navigate(`/details/${book.asin}`)}>
            Vedi Dettagli
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleBook;
