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

    const [description, setDescription] = useState(props.currentRegion.description);
    const [due_date, setDue_date] = useState(props.currentRegion.due_date);
    const [status, setStatus] = useState(props.currentRegion.status);
    const [assignedTo, setAssignedTo] = useState(props.currentRegion.assigned_to);
    const [leader, setLeader] = useState("fzf");
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
        setDescription(newDescr)

        
        props.editItem(props.currentRegion._id, 'description', newDescr, prevDescr);
    };

    const handleDateEdit = (e) => {
        toggleDateEdit(false);
        const newDate = e.target.value ? e.target.value : '';
        const prevDate = due_date;
        let newDDate = (newDate+"//")
        setDue_date(newDDate)
        props.editItem(data._id, 'due_date', newDDate, prevDate);
    };

    const handleStatusEdit = (e) => {
        toggleStatusEdit(false);
        let n = due_date.lastIndexOf('//');
        const newDate = e.target.value ? e.target.value : '';
        const prevDate = due_date;
        setDue_date(n)
        props.editItem(data._id, 'due_date', n, prevDate);
    };

    const handleAssignedToEdit = (e) => {
        toggleAssignedToEdit(false);
        
        const newAssignedTo = e.target.value ? e.target.value : ''
        const prevAssignedTo = assignedTo;
        props.editItem(data._id, 'assigned_to', newAssignedTo, prevAssignedTo);
    };

    const handleLandEdit = (e) => {
        toggleLandEdit(false);
        
        const newLandmark = e.target.value ? e.target.value : ''
        const prevLandmark = landmark;
        setLandmark( e.target.value);
    };


	return (
        // Replace div with WModal

		<div class="subRegionViewer">
            {
                editingDescr?
                <input
                class='table-input regionNameInput' onBlur={handleDescrEdit}
                autoFocus={true} defaultValue={description} type='text'
                wType="outlined" barAnimation="solid" inputClass="table-input-class"
                />
                :
                <div className="table-text"
                            onClick={() => toggleDescrEdit(!editingDescr)}
                            >{"Region Name:    " + description}
                            </div>
               
            }
            {
                        editingDate  || due_date === ''
                            ? <input
                            className='table-input regionNameInput' onBlur={handleDateEdit}
                            autoFocus={true} defaultValue={due_date.substring(due_date.lastIndexOf("//"))} type='text'
                            wType="outlined" barAnimation="solid" inputClass="table-input-class"
                            />
                            : <div className="table-text"
                            onClick={() => toggleDateEdit(!editingDescr)}
                            >{"Region Capital:    " + due_date.substring(due_date.lastIndexOf("//"))}
                            </div>
            }
            {
                editingStatus?
                        <input
                            className='table-select regionNameInput' onBlur={handleStatusEdit}
                            autoFocus={true} defaultValue={due_date} type='text'
                            wType="outlined" barAnimation="solid" inputClass="table-input-class"
                        />
                            : <div onClick={() => toggleStatusEdit(!editingStatus)} className={` table-text`}>
                                {due_date}
                            </div>

                            
            }
		
                <span onClick={(closingSubRegion)} style={{color:"white"}}>
                    BUTTON
                </span>
							
			
		</div >
	);
}

export default Subregion;
