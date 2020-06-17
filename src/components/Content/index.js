import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import data from '../../lib/data.json';

const Content = () => (
  <Container fluid>
    <Row>
      {data.results.map((character) => (
        <Col key={character.id} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <Card.Img variant="top" src={character.image} />
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Content;