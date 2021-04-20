import { Form, Container, Col, Button, Row, Table } from 'react-bootstrap'
import { useState } from 'react'
const axios = require('axios').default

export const FormGau = () => {
    const [data, setData] = useState({
        a1: 0,
        a2: 0,
        a3: 0,
        a4: 0,
        a5: 0,
        a6: 0,
        a7: 0,
        a8: 0,
        a9: 0,
        b1: 0,
        b2: 0,
        b3: 0,
        x1: 0,
        x2: 0,
        x3: 0,
        error: 0,
    })
    const [isSubmit, setSubmit] = useState(false)
    const [results, setResults] = useState(null)
    return (
        <div>
            <Container className="mt-5 p-4 rounded bg-light">
                <h2>Gaussseidel</h2>
                <Form>
                    <Form.Group as={Row} controlId="Function">
                        <Form.Label column sm="2">
                            A :
                        </Form.Label>
                    </Form.Group>
                    <Form.Group as={Row} controlId="A1">
                        <Col>
                            <Form.Control
                                placeholder="A1"
                                type="float"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a1: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                placeholder="A2"
                                type="float"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a2: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                placeholder="A3"
                                type="float"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a3: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="A2">
                        <Col>
                            <Form.Control
                                placeholder="A4"
                                type="float"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a4: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                placeholder="A5"
                                type="float"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a5: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                placeholder="A6"
                                type="float"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a6: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="A3">
                        <Col>
                            <Form.Control
                                placeholder="A7"
                                type="float"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a7: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                placeholder="A8"
                                type="float"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a8: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                placeholder="A9"
                                type="float"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        a9: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="Function">
                        <Form.Label column sm="2">
                            B :
                        </Form.Label>
                    </Form.Group>
                    <Form.Group as={Row} controlId="B1">
                        <Col>
                            <Form.Control
                                placeholder="B1"
                                type="float"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        b1: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                placeholder="B2"
                                type="float"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        b2: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                placeholder="B3"
                                type="float"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        b3: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="Function">
                        <Form.Label column sm="2">
                            X :
                        </Form.Label>
                    </Form.Group>
                    <Form.Group as={Row} controlId="X1">
                        <Col>
                            <Form.Control
                                placeholder="X1"
                                type="float"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        x1: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                placeholder="X2"
                                type="float"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        x2: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                placeholder="X3"
                                type="float"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        x3: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="Function">
                        <Form.Label column sm="2">
                            Error :
                        </Form.Label>
                    </Form.Group>
                    <Form.Group as={Row} controlId="error">
                        <Col>
                            <Form.Control
                                placeholder="Error"
                                type="float"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        error: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 0 }}>
                            <Button
                                disabled={isSubmit}
                                type="submit"
                                onClick={async () => {
                                    setSubmit(true)
                                    const res = await axios.post(
                                        'http://localhost:8001/api/Gau',
                                        data
                                    )
                                    console.log(res)
                                    setResults(
                                        JSON.parse(res.request.response).data
                                    )
                                    setSubmit(false)
                                }}
                            >
                                Calculate
                            </Button>
                        </Col>
                    </Form.Group>
                    {results != null && (
                        <Table striped bordered hover>
                            <thead>
                                <tr class="bg-info">
                                    <th>Iteration</th>
                                    <th>X1</th>
                                    <th>X2</th>
                                    <th>X3</th>
                                    <th>E1</th>
                                    <th>E2</th>
                                    <th>E3</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((r) => (
                                    <tr class="table-info" key={r.iteration}>
                                        <td>{r.iteration}</td>
                                        <td>{r.x1}</td>
                                        <td>{r.x2}</td>
                                        <td>{r.x3}</td>
                                        <td>{r.e1}</td>
                                        <td>{r.e2}</td>
                                        <td>{r.e3}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </Form>
            </Container>
        </div>
    )
}
export default FormGau
