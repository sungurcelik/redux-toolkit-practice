import { Button, Stack, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const CrudPage = () => {
  const state = useSelector((store) => store.counterSlice);
  return (
    <div className="px-3">
      <Stack className="align-items-end my-4">
        <Button>Yeni Görev Ekle</Button>
      </Stack>

      <Table
        striped
        bordered
        hover
        responsive
        variant={state.is_dark_theme ? "dark" : "light"}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CrudPage;
