import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        style={{ height: '250px', objectFit: 'contain', padding: '1rem' }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title style={{ minHeight: '72px' }}>{product.title}</Card.Title>

        <Card.Text className="fw-bold fs-5 mb-3">
          ${product.price}
        </Card.Text>

        <Button
          as={Link}
          to={`/products/${product.id}`}
          variant="dark"
          className="mt-auto"
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard