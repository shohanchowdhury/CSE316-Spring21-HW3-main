import React, { useState } 	from 'react';
import { REGISTER }			from '../../cache/mutations';
import { useMutation }    	from '@apollo/client';

import { WModal, WMHeader, WMMain, WMFooter, WButton, WInput, WRow, WCol } from 'wt-frontend';

const CreateAccount = (props) => {
	const [input, setInput] = useState({ email: '', password: '', firstName: '', lastName: '' });
	const [loading, toggleLoading] = useState(false);
	const [Register] = useMutation(REGISTER);
	const [show] = useState(true);

	
	const updateInput = (e) => {
		const { name, value } = e.target;
		const updated = { ...input, [name]: value };
		updated.lastName = " ";
		console.log(updated.lastName);
		setInput(updated);
	};

	const handleCreateAccount = async (e) => {
		console.log(input.get);
		for (let field in input) {
			if (!input[field]) {
				alert('All fields must be filled out to register');
				return;
			}
		}
		const { loading, error, data } = await Register({ variables: { ...input } });
		if (loading) { toggleLoading(true) };
		if (error) { return `Error: ${error.message}` };
		if (data) {
			console.log(data)
			toggleLoading(false);
			if(data.register.email === 'already exists') {
				alert('User with that email already registered');
			}
			else {
				props.fetchUser();
			}
			props.setShowCreate(false);

		};
	};
	const cancelCreate = (e) => {
		props.setShowCreate(false);

	}

	return (
        // Replace div with WModal

		<WModal className="signup-modal" visible={show}>
			<WMHeader  className="modal-header" onClose={() => props.setShowCreate(false)}>
				Create A New Account
			</WMHeader >

			{
				loading ? <div />
					: <WMMain>
						<div class ="nameText">
							Name:
						</div>
						<div class ="emailText">
							Email:
						</div>
						<div class ="passwordText">
							Password:
						</div>
						<WRow className="modal-col-gap signup-modal">
							<WCol size="8">
								{/* <WButton>
									Name
								</WButton> */}
								<WInput 
									className="nameInput" onBlur={updateInput} name="firstName" labelAnimation="up" 
									barAnimation="solid" labelText="*Enter Name Here*" wType="outlined" inputType="text" 
								/>
							</WCol>
							{/* <WCol size="6">
								<WInput 
									className="" onBlur={updateInput} name="lastName" labelAnimation="up" 
									barAnimation="solid" labelText="Last Name" wType="outlined" inputType="text" 
								/>
							</WCol> */}
						</WRow>

						<WInput 
							className="modal-input" onBlur={updateInput} name="email" labelAnimation="up" 
							barAnimation="solid" labelText="*Enter Email Here*" wType="outlined" inputType="text" 
						/>
						<div className="modal-spacer">&nbsp;</div>
						<WInput 
							className="modal-input" onBlur={updateInput} name="password" labelAnimation="up" 
							barAnimation="solid" labelText="*Enter Password Here*" wType="outlined" inputType="password" 
						/>
					</WMMain>
			}
			
				<span className="modal-button createAccount"
					onClick={handleCreateAccount} span clickAnimation="ripple-light" hoverAnimation="darken" shape="rounded" color="primary">
					Create Account
				</span>
				<span className="modal-button cancelCreate" onClick={cancelCreate} span clickAnimation="ripple-light" hoverAnimation="darken" shape="rounded" color="primary">
					Cancel
				</span>
			
		</WModal >
	);
}

export default CreateAccount;
