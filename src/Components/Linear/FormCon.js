import { Form, Container, Col, Button, Row, Table } from 'react-bootstrap'
import { useState } from 'react'
const axios = require('axios').default

export const FormCon = () => {
    const [data, setData] = useState({
        a11: 0,
        a12: 0,
        a13: 0,
        a21: 0,
        a22: 0,
        a23: 0,
        a31: 0,
        a32: 0,
        a33: 0,
        b1: 0,
        b2: 0,
        b3: 0,
        x1: 0,
        x2: 0,
        x3: 0,
    })
    const [isSubmit, setSubmit] = useState(false)
    const [results, setResults] = useState(null)
    return (
        <div>
            <Container className="mt-5 p-4 rounded bg-light">
                <h2>ConjugateGradient</h2>
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
                                        a11: parseFloat(e.target.value),
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
                                        a12: parseFloat(e.target.value),
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
                                        a13: parseFloat(e.target.value),
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
                                        a21: parseFloat(e.target.value),
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
                                        a22: parseFloat(e.target.value),
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
                                        a23: parseFloat(e.target.value),
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
                                        a31: parseFloat(e.target.value),
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
                                        a32: parseFloat(e.target.value),
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
                                        a33: parseFloat(e.target.value),
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
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 0 }}>
                            <Button
                                disabled={isSubmit}
                                type="submit"
                                onClick={async () => {
                                    setSubmit(true)
                                    const res = await axios.post(
                                        'http://localhost:8001/api/Con',
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
                                    <th>R1</th>
                                    <th>R2</th>
                                    <th>R3</th>
                                    <th>Error</th>
                                    <th>A1</th>
                                    <th>D1</th>
                                    <th>D2</th>
                                    <th>D3</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((r) => (
                                    <tr class="table-info" key={r.iteration}>
                                        <td>{r.iteration}</td>
                                        <td>{r.x1}</td>
                                        <td>{r.x2}</td>
                                        <td>{r.x3}</td>
                                        <td>{r.r1}</td>
                                        <td>{r.r2}</td>
                                        <td>{r.r3}</td>
                                        <td>{r.err}</td>
                                        <td>{r.a1}</td>
                                        <td>{r.d1}</td>
                                        <td>{r.d2}</td>
                                        <td>{r.d3}</td>
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
export default FormCon
