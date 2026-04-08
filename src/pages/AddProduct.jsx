import { useState } from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import { addProduct } from '../services/api'

function AddProduct() {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: ''
  })

  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await addProduct(formData)
      console.log(response.data)

      setMessage('Product created successfully! FakeStoreAPI is a mock API, so changes will not persist.')
      setError('')

      setFormData({
        title: '',
        price: '',
        description: '',
        category: ''
      })
    } catch (err) {
      console.error(err)
      setError('Failed to create product.')
      setMessage('')
    }
  }

  return (
    <Container className="py-5" style={{ maxWidth: '700px' }}>
      <h1 className="mb-4 text-center">Add Product</h1>

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
          Add Product
        </Button>
      </Form>

      {message && <Alert variant="success" className="mt-4">{message}</Alert>}
      {error && <Alert variant="danger" className="mt-4">{error}</Alert>}
    </Container>
  )
}

export default AddProduct