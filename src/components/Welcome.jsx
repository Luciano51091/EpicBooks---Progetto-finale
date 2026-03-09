import { useState } from "react";
import { Alert, Container } from "react-bootstrap";

const Welcome = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Container className="mt-4">
        <Alert
          variant="light" // Usiamo light per una base neutra
          onClose={() => setShow(false)}
          dismissible
          className="welcome-alert shadow-sm border-0"
        >
          <div className="d-flex align-items-center">
            <div className="me-3 fs-3"></div>
            <div>
              <Alert.Heading className="fs-5 fw-bold mb-1">Benvenuti in Epibooks!</Alert.Heading>
              <p className="mb-0 text-muted small">La tua libreria fantasy digitale. </p>
            </div>
          </div>
        </Alert>
      </Container>
    );
  }
  return null;
};

export default Welcome;
