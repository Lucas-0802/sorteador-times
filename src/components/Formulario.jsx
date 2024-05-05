import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './Header.jsx';
import ImportList from './ImportList.jsx';

const Formulario = () => {
    return (
        <Container>
            <Row className="justify-content-center p-2">
                <Col md="auto">
                    <Header className="d-flex justify-content-center" />
                </Col>
            </Row>
            <Row className="justify-content-center p-2">
                <Col md="auto">
                    <ImportList />
                </Col>
            </Row>
        </Container>
    );
}

export default Formulario;



