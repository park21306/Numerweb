import { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
const axios = require('axios').default

const FromMul = () => {
    const [Count, setCount] = useState(0)

    const [datax1, setDatax1] = useState({})
    const [datax2, setDatax2] = useState({})
    const [datax3, setDatax3] = useState({})
    const [datay, setDatay] = useState({})
    const [result, setResult] = useState(null)
    const [isSubmit, setSubmit] = useState(false)
    return (
        <div>
            <Container className="mt-5 p-4 rounded bg-light">
                <h2>Multi Regression</h2>
                <Form>
                    <Form.Group as={Row} controlId="Count">
                        <Form.Label column sm="2">
                            Count:
                        </Form.Label>
                        <Col sm="2">
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

                    <Form.Group as={Row}>
                        <Form.Label column sm="2">
                            x1 :
                        </Form.Label>
                        {Count > 0 &&
                            Count <= 10 &&
                            Array.from(Array(Count), (r, i) => (
                                <Col key={i}>
                                    <Form.Control
                                        type="number"
                                        step="1"
                                        id={`x${i}`}
                                        onChange={(e) => {
                                            setDatax1({
                                                ...datax1,
                                                [e.target.id]: parseFloat(
                                                    e.target.value
                                                ),
                                            })
                                        }}
                                    />
                                </Col>
                            ))}
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2">
                            x2 :
                        </Form.Label>
                        {Count > 0 &&
                            Count <= 10 &&
                            Array.from(Array(Count), (r, i) => (
                                <Col key={i}>
                                    <Form.Control
                                        type="number"
                                        step="1"
                                        id={`x${i}`}
                                        onChange={(e) => {
                                            setDatax2({
                                                ...datax2,
                                                [e.target.id]: parseFloat(
                                                    e.target.value
                                                ),
                                            })
                                        }}
                                    />
                                </Col>
                            ))}
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2">
                            x3 :
                        </Form.Label>
                        {Count > 0 &&
                            Count <= 10 &&
                            Array.from(Array(Count), (r, i) => (
                                <Col key={i}>
                                    <Form.Control
                                        type="number"
                                        step="1"
                                        id={`x${i}`}
                                        onChange={(e) => {
                                            setDatax3({
                                                ...datax3,
                                                [e.target.id]: parseFloat(
                                                    e.target.value
                                                ),
                                            })
                                        }}
                                    />
                                </Col>
                            ))}
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2">
                            y :
                        </Form.Label>
                        {Count > 0 &&
                            Count <= 10 &&
                            Array.from(Array(Count), (r, i) => (
                                <Col key={i}>
                                    <Form.Control
                                        type="number"
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
                    {/* <Form.Group as={Row} controlId="predition">
                        <Form.Label column sm="2">
                            Prediction:
                        </Form.Label>
                        <Col sm="2">
                            <Form.Control
                                type="text"
                                onChange={(e) => {
                                    setPrediction(parseInt(e.target.value))
                                }}
                                required
                            />
                        </Col>
                    </Form.Group> */}
                    <Button
                        disabled={isSubmit}
                        type="submit"
                        onClick={async () => {
                            setSubmit(true)
                            const res = await axios.post(
                                'http://localhost:8001/api/Mul',
                                { datax1, datax2, datax3, datay }
                            )
                            setResult(JSON.parse(res.request.response))
                            setSubmit(false)
                        }}
                    >
                        Calculate
                    </Button>
                </Form>
            </Container>
            {result != null && (
                <Container className="mt-5 p-4 round bg-light">
                    <Form.Group>
                        <Form.Label sm="2">
                            Ans : {JSON.stringify(result.multi)}
                        </Form.Label>
                    </Form.Group>
                </Container>
            )}
        </div>
    )
}

export default FromMul
