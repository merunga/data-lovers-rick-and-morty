import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import data from '../../lib/data.json';
import CharacterCard from '../CharacterCard';

const Content = ({ searchText }) => {

  const cards = data.results.map((character) => {
    return (
      <CharacterCard key={character.id} character={character} />
    )
  });

  const characters = cards
    .filter((c) => !searchText || c.props.character.name.match(new RegExp(searchText, 'ig')))
    
  return (
    <Container fluid>
      <Row>
        {characters.length ?
          characters:
          cards
        }
      </Row>
    </Container>
  )}
;

export default Content;