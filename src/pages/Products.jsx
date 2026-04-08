import { useEffect, useState } from 'react'
import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap'
import { getProducts } from '../services/api'
import ProductCard from '../components/ProductCard'

function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts()
        setProducts(response.data)
      } catch (err) {
        console.error(err)
        setError('Failed to load products.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" />
        <p className="mt-3">Loading...</p>
      </Container>
    )
  }

  if (error) {
    return (
      <Container className="py-4">
        <Alert variant="danger">{error}</Alert>
      </Container>
    )
  }

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Products</h1>

      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Products