import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulario from './components/Formulario.jsx';
import ListItems from './components/ListItems.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<Formulario />} />
              <Route path="/confirm" element={<ListItems />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
