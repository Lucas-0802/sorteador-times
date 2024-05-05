import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const Btn = ({onClick}) => {
    return ( 
        <Button onClick={onClick} variant="primary">Importar</Button>
     );
}

Btn.propTypes = {
    onClick: PropTypes.func.isRequired
  };
 
export default Btn;