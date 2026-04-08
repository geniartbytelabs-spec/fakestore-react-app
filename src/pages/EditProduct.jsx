import { useEffect, useState } from 'react'
import { Container, Form, Button, Alert, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getProductById, updateProduct } from '../services/api'

function EditProduct() {
  const { id } = useParams()

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: ''
  })

  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id)

        setFormData({
          title: response.data.title || '',
          price: response.data.price || '',
          description: response.data.description || '',
          category: response.data.category || ''
        })

        setError('')
      } catch (err) {
        console.error(err)
        setError('Failed to load product.')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await updateProduct(id, formData)
      setMessage('Product updated successfully! FakeStoreAPI is a mock API, so changes will not persist.')
      setError('')
    } catch (err) {
      console.error(err)
      setError('Failed to update product.')
      setMessage('')
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
    <Container className="py-5" style={{ maxWidth: '700px' }}>
      <h1 className="mb-4 text-center">Edit Product</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="dark">
          Update Product
        </Button>
      </Form>

      {message && <Alert variant="success" className="mt-4">{message}</Alert>}
    </Container>
  )
}

export default EditProduct