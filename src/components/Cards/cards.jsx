import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
const Cards = () => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        tu primer card
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
        </Card>
    </>
  )  
}
export default Cards;