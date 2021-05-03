import React, { useState } 	from 'react';
import { LOGIN } 			from '../../cache/mutations';
import { useMutation }    	from '@apollo/client';

import { WModal, WMHeader, WMMain, WMFooter, WButton, WInput } from 'wt-frontend';

const Login = (props) => {
	const [input, setInput] = useState({ email: '', password: '' });
	const [loading, toggleLoading] = useState(false);
	const [showErr, displayErrorMsg] = useState(false);
	const errorMsg = "Email/Password not found.";
	const [Login] = useMutation(LOGIN);
	const [showLogin] = useState(true);

	const updateInput = (e) => {
		const { name, value } = e.target;
		const updated = { ...input, [name]: value };
		setInput(updated);
	}

	const handleLogin = async (e) => {

		const { loading, error, data } = await Login({ variables: { ...input } });
		if (loading) { toggleLoading(true) };
		if (data.login._id === null) {
			displayErrorMsg(true);
			return;
		}
		if (data) {
			props.fetchUser();
			props.refetchTodos();
			toggleLoading(false)
			props.setShowLogin(false)
		};
	};
	const handleCancel = (e) => {
		props.setShowLogin(false);
	}


	return (
        // Replace div with WModal

		<WModal  className="login-modal " visible={showLogin} cover={true}>
			<WMHeader className="modal-header" onClose={() => props.setShowLogin(false)}>
				Login
			</WMHeader>

			{
				loading ? <div />
					: <WMMain  className="main-login-modal loginModal">
						<div class ="emailText1">
							Email:
						</div>
						<div class ="passwordText1">
							Password:
						</div>

						<WInput className="modal-input2" onBlur={updateInput} name='email' labelAnimation="up" barAnimation="solid" labelText="*Enter Email Here*" wType="outlined" inputType='text' />
						<div className="modal-spacer">&nbsp;</div>
						<WInput className="modal-input2" onBlur={updateInput} name='password' labelAnimation="up" barAnimation="solid" labelText="*Enter Password Here*" wType="outlined" inputType='password' />

						{
							showErr ? <div className='modal-error'>
								{errorMsg}
							</div>
								: <div className='modal-error'>&nbsp;</div>
						}

					</WMMain >
			}
			<WMFooter>
				<span className="modal-button loginLogin" onClick={handleLogin} span clickAnimation="ripple-light" hoverAnimation="darken" shape="rounded" color="primary">
					Login
				</span>
				<span className="modal-button cancelLogin" onClick={handleCancel} span clickAnimation="ripple-light" hoverAnimation="darken" shape="rounded" color="primary">
					Cancel
				</span>
				
			</WMFooter>
		</WModal>
	);
}

export default Login;