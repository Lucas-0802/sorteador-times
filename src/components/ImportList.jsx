import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from './Button.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ImportList = () => {

  const [value, setValue] = useState("")
  const navigate = useNavigate()

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue)
  };

  const handleButtonClick = () => {
    
    let cleanValue = value.replace(/[^a-zA-Z,]/g, '');
    let array = cleanValue.split(',');
    localStorage.setItem('list', JSON.stringify(array))

    navigate('/confirm')
  };
  
  return (
    <>
      <FloatingLabel controlId="floatingTextarea2" label="Cole aqui a lista">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '400px', width: '200px' }}
          value={value} 
          onChange={handleInputChange} 
        />
      </FloatingLabel>

      <Row className="justify-content-center p-2">
        <Col md="auto">
          <Button onClick={handleButtonClick} />
        </Col>
      </Row>

    </>
  );
}

export default ImportList;
