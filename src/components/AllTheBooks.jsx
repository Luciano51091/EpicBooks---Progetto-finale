import { Col, Container, Row } from "react-bootstrap";
import fantasyBooks from "../data/fantasy.json";
import SingleBook from "./SingleBook";
import { useState } from "react";
import CommentArea from "./CommentArea";
import Welcome from "./Welcome";

function AllTheBooks({ searchQuery }) {
  const filteredBooks = fantasyBooks.filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()));
  const [selectedAsin, setSelectedAsin] = useState(null);

  return (
    <Container fluid="lg" className="py-5 ">
      <Welcome />
      {filteredBooks.length === 0 && <p className="text-center mt-3 fw-bold">Nessun libro trovato...</p>}
      <Row>
        <Col lg={9}>
          <Row className="g-3">
            {filteredBooks.map((book) => (
              <Col xs={12} sm={6} md={4} lg={3} key={book.asin}>
                <SingleBook book={book} selectedAsin={selectedAsin} setSelectedAsin={setSelectedAsin} />
              </Col>
            ))}
          </Row>
        </Col>

        <Col lg={3} className="d-none d-lg-block">
          <div className="sticky-top" style={{ top: "100px", zIndex: 10 }}>
            <div className="bg-white p-3 rounded-4 shadow-sm border">
              <CommentArea asin={selectedAsin} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AllTheBooks;
