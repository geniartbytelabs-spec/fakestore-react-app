import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Container className="py-5 text-center">
      <h1 className="mb-3">Welcome to FakeStoreApp</h1>
      <p className="lead mb-4">
        Browse products, view details, and practice CRUD operations with FakeStoreAPI.
      </p>

      <Button as={Link} to="/products" variant="dark">
        View Products
      </Button>
    </Container>
  )
}

export default Home