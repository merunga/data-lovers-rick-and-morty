import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const Filter = ({ searchText, setSearchText }) => {
  const [searchTextTemp, setSearchTextTemp] = useState(searchText);

  const onSubmit = (e) => {
    e.preventDefault()
    setSearchText(searchTextTemp);
  }

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Busca un personaje"
          onChange={(e) => {
            setSearchTextTemp(e.target.value);
          }}
          value={searchTextTemp}
        />
      </Form.Group>
    </Form>
  )
};

export default Filter;