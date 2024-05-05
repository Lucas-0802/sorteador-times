import  { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

const ListItems = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const savedList = localStorage.getItem('list');
        if (savedList) {
            setList(JSON.parse(savedList));
        }
    }, []);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Jogadores</th>
                    <th>Goleiro?</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item}</td>
                        <td className="text-center">
                            <Form.Check
                                inline
                                name="group1"
                                id={`${index}`}
                                className='text-center'
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default ListItems;
