import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import data from '../../lib/data.json';
import CharacterCard from '../CharacterCard';

const Content = ({ searchText }) => {
  const [data, setData] = useState({ info: {}, results: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchTextUrlParam = searchText.trim() ? `?name=${searchText.trim()}`: '';
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character${searchTextUrlParam}`)
    .then(response => response.json())
    .then(newData => {
      let result;
      if(newData.error) {
        result = {
          info: {},
          results: []
        }
      } else {
        result = newData;
      }
      setData(result);
      setLoading(false);
    });
  }, [searchText]);

  if(loading) {
    return 'Loading...';
  }

  const cards = data.results.map((character) => {
    return (
      <CharacterCard key={character.id} character={character} />
    )
  });

 
  return (
    <Container fluid>
      <Row>
        {data.results.length === 0 && (
          <Col><h3>No se encontraron resultados</h3></Col>
        )}
        {cards}
      </Row>
    </Container>
  )}
;

export default Content;