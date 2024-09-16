import { useState } from "react";
import { Button, ButtonGroup, Stack, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import FormModal from "../components/FormModal";

const CrudPage = () => {
  const counterState = useSelector((store) => store.counterSlice);
  const crudState = useSelector((store) => store.crudSlice);
  // console.log(crudState);

  // modal açılacak mı state'i
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-3">
      <Stack className="align-items-end my-4">
        <Button onClick={() => setIsOpen(true)}>Yeni Görev Ekle</Button>
      </Stack>

      {/* Form Modal'ı */}

      <FormModal isOpen={isOpen} close={()=>setIsOpen(false)} />

      <Table
        striped
        bordered
        hover
        responsive
        variant={counterState.is_dark_theme ? "dark" : "light"}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Görev</th>
            <th>Yazan</th>
            <th>Atanan</th>
            <th>Tarih</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {crudState.tasks.map((task, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.assigned_to}</td>
              <td>{task.end_date}</td>
              <td>
                <ButtonGroup size="sm">
                  <Button variant="danger">Sil</Button>
                  <Button>Düzenle</Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CrudPage;
