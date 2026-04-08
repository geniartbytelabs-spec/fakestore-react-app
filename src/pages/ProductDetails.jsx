import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button, Spinner, Alert } from 'react-bootstrap'
import { getProductById, deleteProduct } from '../services/api'

function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id)
        setProduct(response.data)
      } catch (err) {
        console.error(err)
        setError('Failed to load product.')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?')

    if (!confirmDelete) return

    try {
      await deleteProduct(id)
      alert('Product deleted successfully! FakeStoreAPI is a mock API, so changes will not persist.')
      navigate('/products')
    } catch (err) {
      console.error(err)
      alert('Failed to delete product.')
    }
  }

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
    <Container className="py-5">
      <Row className="align-items-center g-5">
        <Col md={6} className="text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </Col>

        <Col md={6}>
          <h1 className="mb-3">{product.title}</h1>
          <p className="fs-3 fw-bold">${product.price}</p>
          <p>{product.description}</p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <div className="d-flex gap-2 mt-4 flex-wrap">
            <Button as={Link} to={`/edit-product/${product.id}`} variant="dark">
              Edit Product
            </Button>

            <Button variant="danger" onClick={handleDelete}>
              Delete Product
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetails