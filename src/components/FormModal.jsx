import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addTask, editTask } from "../redux/slices/crudSlice";
import { useDispatch } from "react-redux";

const FormModal = ({ isOpen, close, editItem }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // formdaki inputların verilerini alıp obje oluşturmak.
    const formData = new FormData(e.target);
    const task = Object.fromEntries(formData.entries());
    // console.log(task);
    if (editItem) {
      // güncelleme modunda ise güncellenecek eleman varsa editTask aksiyonunu çalıştır.
      dispatch(editTask({ ...task, id: editItem.id }));
    } else {
      // güncelleme modunda değilse -->
      // yeni taski store'a ekle
      dispatch(addTask(task));
    }

    // Modal'ı kapat
    close();
  };

  return (
    <Modal onHide={close} show={isOpen} className="text-black" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {editItem ? "Görevi Güncelle" : "Yeni Görev Ekle"}
        </Modal.Title>
      </Modal.Header>
      {/* Content */}
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="my-3">
            <Form.Label>Görev Tanımı</Form.Label>
            <Form.Control
              defaultValue={editItem?.title}
              name="title"
              placeholder="Görevi Giriniz"
              required
            />
          </Form.Group>

          <Form.Group className="my-3">
            <Form.Label>İsminiz</Form.Label>
            <Form.Control
              defaultValue={editItem?.author}
              name="author"
              placeholder="İsminizi Giriniz"
              required
            />
          </Form.Group>

          <Form.Group className="my-3">
            <Form.Label>Atanan</Form.Label>
            <Form.Control
              defaultValue={editItem?.assigned_to}
              name="assigned_to"
              placeholder="Kime Atadığınızı Giriniz"
              required
            />
          </Form.Group>

          <Form.Group className="my-3">
            <Form.Label>Son Teslim Tarihi</Form.Label>
            <Form.Control
              defaultValue={editItem?.end_date}
              name="end_date"
              type="date"
              required
            />
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
