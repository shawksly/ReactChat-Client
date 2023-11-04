import { Container } from 'reactstrap'
import Signup from './signup/Signup'
import Login from './Login/Login'

function Auth({ setToken, signup, setSignup, setUserId }) {
	return (
		<>
			<Container
				// TODO h-50 doesn't do anything and I'd like to come back and fix that at some point -Scott
				className="d-inline-block w-50 h-50 p-3 bg-light mt-5"
			>
				{
					signup
					?
					<Signup setToken={setToken} setSignup={setSignup} setUserId={setUserId} />
					:
					<Login setToken={setToken} setSignup={setSignup} setUserId={setUserId} />
				}
			</Container>
		</>
	)
}

export default Auth;