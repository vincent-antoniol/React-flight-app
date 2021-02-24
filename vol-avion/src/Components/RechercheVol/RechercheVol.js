import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const RechercheVol = () => {
  return (
    <div>
      RechercheVol
      <Form>
        <Form.Group>
          <Form.Row>
            <Col>
              <Form.Control placeholder="Ville de départ" />
            </Col>
            <Col>
              <Form.Control placeholder="Ville d'arrivée" />
            </Col>
            <Col>
              <Form.Control
                type="date"
                name="dob"
                placeholder="Date of Birth"
              />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group>
          <Form.Row>
            <Col>
              <p>Nombre de passager(s) Adulte</p>
            </Col>
            <Col>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Control type="number" name="test" min="1" max="8" />
              </Form.Group>
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Col>
              <p>Nombre de passager(s) Enfants</p>
            </Col>
            <Col>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Control type="number" name="test" min="1" max="8" />
              </Form.Group>
            </Col>
          </Form.Row>
        </Form.Group>
      </Form>
    </div>
  );
};

export default RechercheVol;
