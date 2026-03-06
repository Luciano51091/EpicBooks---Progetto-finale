import React, { useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import fantasyBooks from "../data/fantasy.json";
import SingleBook from "./SingleBook";

function AllTheBooks() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = fantasyBooks.filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <Container className="my-5">
        <InputGroup className="mb-3">
          <Form.Control placeholder="Cerca un libro" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="search-input" />
        </InputGroup>

        {filteredBooks.length === 0 && <p className="text-center mt-3">Nessun libro trovato...</p>}

        <Row className="g-5">
          {filteredBooks.map((book) => (
            <Col sm={6} md={4} lg={3} key={book.asin}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default AllTheBooks;
