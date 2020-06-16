import React, { ChangeEvent, FormEvent, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import Home from '../Home';


// array ou objeto: precisamos informar manualmente o tipo da variavel armazenada
const Livros = () => {

    const history = useHistory();

    const [formData, setFormData] = useState({
        id: '',
        titulo: '',
        autor: '',
        editora: '',
        area: '',
    });

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({
            ...formData, [name]: value
        })
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        // const { id, titulo, autor, editora, area } = formData;

        await api.post('books', formData).then(s => alert('FOI'));
        history.push('/list');

    }

    return (
        <>
            <header>
                <Home />
            </header>
            <Container className="mt-5">
                <div className="row justify-content-md-center">
                    <div className="col-6 text-center">
                        <h3 className="mb-3">Cadastro de livros Livro</h3>
                    </div>
                </div>
                <Row className="justify-content-md-center">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row} controlId="formPlaintextTitulo">
                            <Form.Label column sm="2">
                                Titulo:
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="text"
                                    placeholder="Titulo"
                                    name="titulo"
                                    // id="titulo"
                                    onChange={handleInputChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextAutor">
                            <Form.Label column sm="2">
                                Autor:
                    </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="text"
                                    placeholder="Autor"
                                    name="autor"
                                    // id="autor"
                                    onChange={handleInputChange}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextEditora">
                            <Form.Label column sm="2">
                                Editora:
                    </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="text"
                                    placeholder="Editora"
                                    name="editora"
                                    // id="editora"
                                    onChange={handleInputChange}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextArea">
                            <Form.Label column sm="2">
                                Area:
                    </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="text"
                                    placeholder="Area"
                                    name="area"
                                    // id="area"
                                    onChange={handleInputChange}
                                />
                            </Col>
                        </Form.Group>
                        {/* <button type="submit">Cadastrar ponto de coleta</button> */}
                        <div className="text-right">

                            <Button variant="primary" type="submit">
                                Adicionar livro
                            </Button>
                        </div>
                    </Form>

                    {/* <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>
                        <h2>
                            Cadastrar livro
                    </h2>
                    </legend>
                    <div className="field">
                        <label htmlFor="titulo">Titulo</label>
                        <input
                            type="text"
                            name="titulo"
                            id="titulo"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="autor">Autor</label>
                            <input
                                type="text"
                                name="autor"
                                id="autor"
                                onChange={handleInputChange}

                            />
                        </div>
                        <div className="field">
                            <label htmlFor="editora">Editora</label>
                            <input
                                type="text"
                                name="editora"
                                id="editora"
                                onChange={handleInputChange}

                            />
                        </div>
                        <div className="field">
                            <label htmlFor="area">Area</label>
                            <input
                                type="text"
                                name="area"
                                id="area"
                                onChange={handleInputChange}

                            />
                        </div>
                    </div>
                </fieldset>
                <button type="submit">Cadastrar ponto de coleta</button>
            </form> */}
                </Row>
            </Container>
        </>
    )
};

export default Livros;