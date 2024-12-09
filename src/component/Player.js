import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Cards = ({player}) => {
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={player.image} />
      <Card.Body>
        <Card.Title>{player.name}</Card.Title>
        <Card.Text>{player.team}</Card.Text>
        <Card.Text>{player.age}</Card.Text>
        <Button variant="primary">Vote Now</Button>
      </Card.Body>
    </Card>
  )
}

export default Cards
