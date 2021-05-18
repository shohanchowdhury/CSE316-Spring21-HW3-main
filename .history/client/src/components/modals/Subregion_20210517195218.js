import React, { useState } 	from 'react';
import { REGISTER }			from '../../cache/mutations';

import { EDITACCOUNT }			from '../../cache/mutations';
import { useMutation }    	from '@apollo/client';
import { GET_DB_USER } 				from '../../cache/queries';
import { useQuery } 		from '@apollo/client';

import { WModal, WMHeader, WMMain, WMFooter, WButton, WInput, WRow, WCol } from 'wt-frontend';

const Subregion = (props) => {

    
	const [currentRegion] = useState(props.currentRegion)
	const [loading, toggleLoading] = useState(false);
	const [EditAccount] = useMutation(EDITACCOUNT);
	const [Register] = useMutation(REGISTER);
    
	const [show] = useState(true);
    const [regionName, setRegionName] = useState("");
    const data = currentRegion;

    const description = data.description;
    const due_date = data.due_date;
    const status = data.completed ? 'complete' : 'incomplete';
    const assignedTo = data.assigned_to;

    const [leader, setLeader] = useState("");
    const [landmark, setLandmark] = useState("");
    const [flag, setFlag] = useState("");

    const [editingDate, toggleDateEdit] = useState(false);
    const [editingDescr, toggleDescrEdit] = useState(false);
    const [editingStatus, toggleStatusEdit] = useState(false);
    const [editingAssignedTo, toggleAssignedToEdit] = useState(false);
    const [editingLand, toggleLandEdit] = useState(false);
    const [editingFlag, toggleFlagEdit] = useState(false);




		

    const nameSet = (e) =>{
        console.log(props)
    }
    const handleNameChange = (e) =>{
        toggleDescrEdit(false);
        const newDescr = e.target.value ? e.target.value : '';
        const prevDescr = currentRegion.description;
        props.regionNameChange(e, 'description', newDescr, prevDescr);

    }
    const descEdit1 = (e) =>{
        props.handleDescrEdit(e);
    }
    const closingSubRegion = (e) =>{
        props.setCurrentRegion(null);
        props.toggleViewingRegion(false);
    }
    const handleDescrEdit = (e) => {
        toggleDescrEdit(false);
        const newDescr = e.target.value ? e.target.value : '';
        const prevDescr = description;
        console.log("HEY")
        console.log(props.currentRegion._id);
        
        props.editItem(props.currentRegion._id, 'description', newDescr, prevDescr);
    };


	return (
        // Replace div with WModal

		<div class="subRegionViewer">
            {
                editingDescr?
                <input
                class='table-input regionNameInput' onBlur={handleDescrEdit}
                autoFocus={true} defaultValue={props.currentRegion.description} type='text'
                wType="outlined" barAnimation="solid" inputClass="table-input-class"
                />
                :
                <div className="table-text"
                            onClick={() => toggleDescrEdit(!editingDescr)}
                            >{props.currentRegion.description}
                            </div>
               
            }
            
			{
				loading ? <div />
					: <WMMain>
						
                        <span onClick={(closingSubRegion)} style={{color:"white"}}>
                            BUTTON
                        </span>
							
					</WMMain>
			}

		</div >
	);
}

export default Subregion;
