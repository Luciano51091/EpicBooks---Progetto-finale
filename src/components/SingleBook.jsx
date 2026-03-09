import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

function SingleBook({ book, selectedAsin, setSelectedAsin }) {
  const isSelected = selectedAsin === book.asin;
  const navigate = useNavigate();

  return (
    <>
      <Card
        onClick={() => setSelectedAsin(book.asin)}
        className={`h-100 book-card shadow-sm`}
        style={{
          border: isSelected ? "3px solid red !important" : "1px solid #dee2e6 !important",
          boxShadow: isSelected ? "0 0 15px rgba(255, 0, 0, 0.3)" : "none",
          transform: isSelected ? "scale(1.02)" : "scale(1)",
          zIndex: isSelected ? "10" : "1",
          transition: "all 0.3s ease",
        }}
        data-testid="book-card"
      >
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
