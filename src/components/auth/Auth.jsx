import { Container } from 'reactstrap'

function Auth({ setToken, signup, setSignup }) {
    return (
        <>
            <Container
                // TODO h-50 doesn't do anything and I'd like to come back and fix that at some point -Scott
                className="d-inline-block w-50 h-50 p-3 bg-light"
            >
                test
                {/* <Row>
                    <Col
                        xs="12"
                    ></Col>
                </Row> */}
            </Container>
        </>
    )
}

export default Auth;