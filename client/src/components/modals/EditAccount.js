import React, { useState } 	from 'react';
import { REGISTER }			from '../../cache/mutations';

import { EDITACCOUNT }			from '../../cache/mutations';
import { useMutation }    	from '@apollo/client';
import { GET_DB_USER } 				from '../../cache/queries';
import { useQuery } 		from '@apollo/client';

import { WModal, WMHeader, WMMain, WMFooter, WButton, WInput, WRow, WCol } from 'wt-frontend';

const EditAccount = (props) => {
	
	const [input, setInput] = useState({ email: '', password: '', firstName: '', lastName: '',originalEmail: ' ' });
	const [loading, toggleLoading] = useState(false);
	const [EditAccount] = useMutation(EDITACCOUNT);
	const [Register] = useMutation(REGISTER);
	const [show] = useState(true);

		
	let currentUser = (props.getUser())


	const updateInput = (e) => {
		
		
		const { name, value } = e.target;
		const updated = { ...input, [name]: value };
		updated.lastName = " ";
		console.log(updated.lastName);
		updated.lastName = currentUser.email;
		setInput(updated);
	};

	const handleEditAccount = async (e) => {
		for (let field in input) {
			if (!input[field]) {
				alert('All fields must be filled out to register');
				return;
			}
		}

		
		console.log(input);
		const { loading, error, data } = await EditAccount({ variables: { ...input } });
		if (loading) { toggleLoading(true) };
		if (error) { return `Error: ${error.message}` };
		if (data) {
			console.log(data)
			toggleLoading(false);
			if(data){
				if(data.register){
					if(data.register.email){
						if(data.register.email){
							if(data.register.email === 'already exists') {
								alert('User with that email already registered');
							}
							else {
								props.fetchUser();
							}
						}
					}
				}
				props.fetchUser();

			}
			
			props.setShowEdit(false);

		};
	};
	const cancelCreate1 = (e) => {
		props.setShowEdit(false);

	}
	console.log(props.GET_DB_USER);


	return (
        // Replace div with WModal

		<WModal className="edit-modal" visible={show}>
			<WMHeader  className="modal-header" onClose={() => props.setShowEdit(false)}>
				Edit
			</WMHeader >

			{
				loading ? <div />
					: <WMMain>
						<div class ="nameTextEdit">
							Name:
						</div>
						<div class ="emailTextEdit">
							Email:
						</div>
						<div class ="passwordTextEdit">
							Password:
						</div>
							
								<WInput 
									className="nameInputEdit" onBlur={updateInput} name="firstName" labelAnimation="up" 
									barAnimation="solid" labelText={currentUser.firstName} wType="outlined" inputType="text" 
								/>
						
							{/* <WCol size="6">
								<WInput 
									className="" onBlur={updateInput} name="lastName" labelAnimation="up" 
									barAnimation="solid" labelText="Last Name" wType="outlined" inputType="text" 
								/>
							</WCol> */}

						<WInput 
							className="modal-input emailInputEdit" onBlur={updateInput} name="email" labelAnimation="up" 
							barAnimation="solid" labelText={currentUser.email} wType="outlined" inputType="text" 
						/>
						<div className="modal-spacer">&nbsp;</div>
						<WInput 
							className="modal-input passwordInputEdit" onBlur={updateInput} name="password" labelAnimation="up" 
							barAnimation="solid" labelText="*Password*" wType="outlined" inputType="password" 
						/>
					</WMMain>
			}
				<span className="modal-button submitEdit" onClick={handleEditAccount} span clickAnimation="ripple-light" hoverAnimation="darken" shape="rounded" color="primary">
					Submit
				</span>
				<span className="modal-button cancelEdit" onClick={cancelCreate1} span clickAnimation="ripple-light" hoverAnimation="darken" shape="rounded" color="primary">
					Cancel
				</span>
		</WModal >
	);
}

export default EditAccount;
