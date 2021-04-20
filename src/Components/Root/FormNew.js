import { Form, Container, Col, Button, Row, Table } from 'react-bootstrap'
import { useState } from 'react'
const axios = require('axios').default

export const FormNew = () => {
    const [data, setData] = useState({
        x0: 0,
        eq: ' ',
        error: 0.00001,
    })
    const [isSubmit, setSubmit] = useState(false)
    const [results, setResults] = useState(null)
    return (
        <div>
            <Container className="mt-5 p-4 rounded bg-light">
                <h2>Newton-raphson</h2>
                <Form>
                    <Form.Group as={Row} controlId="Function">
                        <Form.Label column sm="2">
                            Function :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                placeholder="Function"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        eq: e.target.value,
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="XL">
                        <Form.Label column sm="2">
                            X0 :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="float"
                                placeholder="X0"
                                onChange={(e) => {
                                    setData({
                                        ...data,
                                        x: parseFloat(e.target.value),
                                    })
                                }}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="Error">
                        <Form.Label column sm="2">
                            Error :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="float"
                                placeholder="Error"
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
                                        'http://localhost:8001/api/New',
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
                                    <th>X0</th>
                                    <th>f(x)</th>
                                    <th>f'(x)</th>
                                    <th>X1</th>
                                    {/* <th>XM</th> */}
                                    <th>ER</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((r) => (
                                    <tr class="table-info" key={r.iteration}>
                                        <td>{r.iteration}</td>
                                        <td>{r.x0}</td>
                                        <td>{r.fxxx}</td>
                                        <td>{r.fxx}</td>
                                        <td>{r.x2}</td>
                                        {/* <td>{r.m}</td> */}
                                        <td>{r.e}</td>
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
export default FormNew
