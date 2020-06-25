import React from 'react';
import Form from 'react-bootstrap/Form';

const Filter = ({ searchText, setSearchText }) => {
  return (
    <Form>
      <Form.Group>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Busca un personaje"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
        >
        </Form.Control>
      </Form.Group>
    </Form>
  )
};

export default Filter;