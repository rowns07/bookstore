import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import api from '../../services/api';
import Home from '../Home';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

interface Item {
    id: number,
    titulo: string,
    autor: string,
    editora: string,
    area: string,


}

const ListLivros = () => {
    const [books, setBooks] = useState<Item[]>([]);


    useEffect(() => {
        api.get('books').then(response => (
            setBooks(response.data)
        ))
    }, [])

    return (
        <>
            <Home />
            {/* <div className="container"> */}
            <Container className="mt-5">
                <h3>Livros</h3>
                <Row className="justify-content-md-center">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Titulo</th>
                                <th>Autor</th>
                                <th>Editor</th>
                                <th>Area</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map(book => (
                                <tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td>
                                        {book.titulo}
                                    </td>
                                    <td>
                                        {book.autor}
                                    </td>
                                    <td>
                                        {book.editora}
                                    </td>
                                    <td>
                                        {book.area}
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>
                </Row>
            </Container>
            {/* </div> */}
        </>
    )

}
export default ListLivros;
