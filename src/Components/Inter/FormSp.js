import { Form, Container, Col, Button, Row } from 'react-bootstrap'
import { useState } from 'react'
const axios = require('axios').default

export const FormLag = () => {
    const [datax, setDatax] = useState({})
    const [datay, setDatay] = useState({})
    const [isSubmit, setSubmit] = useState(false)
    const [ans, setAns] = useState(null)
    const [count, setCount] = useState(0)

    return (
        <div>
            <Container className="mt-5 p-4 rounded bg-light">
                <h2>Spline</h2>
                <Form>
                    <Form.Group as={Row} controlId="Count">
                        <Form.Label column sm="2">
                            Count :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="number"
                                step="1"
                                placeholder="1-10"
                                onChange={(e) => {
                                    setCount(parseInt(e.target.value))
                                }}
                                required
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="X">
                        <Form.Label column sm="2">
                            X :
                        </Form.Label>
                    </Form.Group>
                    <Form.Group as={Row} controlId="Xi">
                        {count > 0 &&
                            count <= 10 &&
                            Array.from(Array(count), (r, i) => (
                                <Col key={i}>
                                    <Form.Control
                                        type="float"
                                        step="1"
                                        id={`x${i}`}
                                        onChange={(e) => {
                                            setDatax({
                                                ...datax,
                                                [e.target.id]: parseFloat(
                                                    e.target.value
                                                ),
                                            })
                                        }}
                                    />
                                </Col>
                            ))}
                    </Form.Group>
                    <Form.Group as={Row} controlId="Y">
                        <Form.Label column sm="2">
                            Y :
                        </Form.Label>
                    </Form.Group>
                    <Form.Group as={Row} controlId="Yi">
                        {count > 0 &&
                            count <= 10 &&
                            Array.from(Array(count), (r, i) => (
                                <Col key={i}>
                                    <Form.Control
                                        type="float"
                                        step="1"
                                        id={`y${i}`}
                                        onChange={(e) => {
                                            setDatay({
                                                ...datay,
                                                [e.target.id]: parseFloat(
                                                    e.target.value
                                                ),
                                            })
                                        }}
                                    />
                                </Col>
                            ))}
                    </Form.Group>
                    {/* <Form.Group as={Row} controlId="Fx">
                        <Form.Label column sm="2">
                            F(x) :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="number"
                                placeholder="Fx"
                                onChange={(e) => {
                                    setPrediction(parseFloat(e.target.value))
                                }}
                                required
                            />
                        </Col>
                    </Form.Group> */}
                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 0 }}>
                            <Button
                                disabled={isSubmit}
                                type="submit"
                                onClick={async () => {
                                    setSubmit(true)
                                    const res = await axios.post(
                                        'http://localhost:8001/api/Sp',
                                        { datax, datay }
                                    )

                                    setAns(JSON.parse(res.request.response))
                                    setSubmit(false)
                                }}
                            >
                                Calculate
                            </Button>
                        </Col>
                    </Form.Group>
                    {ans != null && (
                        <Container className="mt-5 p-4 round bg-light">
                            <Form.Group>
                                <Form.Label sm="2">
                                    K : {JSON.stringify(ans.ans)}
                                </Form.Label>
                            </Form.Group>
                        </Container>
                    )}
                </Form>
            </Container>
        </div>
    )
}

export default FormLag
