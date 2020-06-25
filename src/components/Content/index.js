import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// import data from '../../lib/data.json';
import CharacterCard from '../CharacterCard';

const Content = ({ searchText }) => {
  const [data, setData] = useState({ info: {}, results: [] });

  useEffect(() => {
    const searchTextUrlParam = searchText.trim() ? `?name=${searchText.trim()}`: '';
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
      setData(result)
    });
  }, [searchText])

  const cards = data.results.map((character) => {
    return (
      <CharacterCard key={character.id} character={character} />
    )
  });

 
  return (
    <Container fluid>
      <Row>
        {cards}
      </Row>
    </Container>
  )}
;

export default Content;