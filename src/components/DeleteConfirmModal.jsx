import { Modal, Button } from 'react-bootstrap'

function DeleteConfirmModal({ show, handleClose, handleDelete }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        Are you sure you want to delete this product?
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteConfirmModal