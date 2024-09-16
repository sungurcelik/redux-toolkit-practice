import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const FormModal = ({ isOpen, close }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // fomrdaki inputların verilerini alıp obje oluşturmak.
    const formData = new FormData(e.target);
    const task = Object.fromEntries(formData.entries());
    console.log(task);
  };

  return (
    <Modal onHide={close} show={isOpen} className="text-black" centered>
      <Modal.Header closeButton>
        <Modal.Title>Yeni Görev Oluştur</Modal.Title>
      </Modal.Header>
      {/* Content */}
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="my-3">
            <Form.Label>Görev Tanımı</Form.Label>
            <Form.Control name="title" placeholder="Görevi Giriniz" required />
          </Form.Group>

          <Form.Group className="my-3">
            <Form.Label>İsminiz</Form.Label>
            <Form.Control
              name="author"
              placeholder="İsminizi Giriniz"
              required
            />
          </Form.Group>

          <Form.Group className="my-3">
            <Form.Label>Atanan</Form.Label>
            <Form.Control
              name="assigned_to"
              placeholder="Kime Atadığınızı Giriniz"
              required
            />
          </Form.Group>

          <Form.Group className="my-3">
            <Form.Label>Son Teslim Tarihi</Form.Label>
            <Form.Control name="end_date" type="date" required />
          </Form.Group>
          <Modal.Footer>
            <Button type="button" onClick={close} variant="secondary">
              Kapat
            </Button>
            <Button type="submit" variant="success">
              Kaydet
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
