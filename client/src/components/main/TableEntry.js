import React, { useState } from 'react';
import { WButton, WInput, WRow, WCol } from 'wt-frontend';

const TableEntry = (props) => {
    const { data } = props;

    const completeStyle = data.completed ? ' complete-task' : ' incomplete-task';

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




    let flagHighest = false;
    let flagLowest = false;



    const handleDateEdit = (e) => {
        toggleDateEdit(false);
        const newDate = e.target.value ? e.target.value : '';
        const prevDate = due_date;
        props.editItem(data._id, 'due_date', newDate, prevDate);
    };

    const handleDescrEdit = (e) => {
        toggleDescrEdit(false);
        const newDescr = e.target.value ? e.target.value : '';
        const prevDescr = description;
        props.editItem(data._id, 'description', newDescr, prevDescr);
    };

    const handleStatusEdit = (e) => {
        toggleStatusEdit(false);
        const newStatus = e.target.value ? e.target.value : '';
        const prevStatus = status;
        setLeader(e.target.value);
        props.editItem(data._id, 'completed', newStatus, prevStatus);
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

   

    let listItems = props.activeList
    // console.log(listItems.items[0]._id)
    if(listItems.items[0]._id===data._id){
        flagHighest = true;
    }
    if(listItems.items[listItems.items.length-1]._id===data._id){
        flagLowest = true;
    }
    //console.log(flagHighest,flagLowest)
    return (
        <WRow className='table-entry'>
             <WButton className="table-entry-buttons deleteRegionButton" onClick={() => props.deleteItem(data, props.index)} wType="texted">
                        <i className="material-icons">close</i>
            </WButton>
            <WCol size="2" className="descCol">
                {
                    editingDescr || description === ''
                        ? <WInput
                            className='table-input' onBlur={handleDescrEdit}
                            autoFocus={true} defaultValue={description} type='text'
                            wType="outlined" barAnimation="solid" inputClass="table-input-class"
                        />
                        : <div className="table-text"
                            onClick={() => toggleDescrEdit(!editingDescr)}
                        >{description}
                        </div>
                }
            </WCol>

            <WCol size="1" className="capitalCol">
                {
                    editingDate  || due_date === ''
                        ? <WInput
                        className='table-input' onBlur={handleDateEdit}
                        autoFocus={true} defaultValue={due_date} type='text'
                        wType="outlined" barAnimation="solid" inputClass="table-input-class"
                        />
                        : <div className="table-text"
                        onClick={() => toggleDateEdit(!editingDescr)}
                        >{due_date}
                        </div>
                }
            </WCol>

            <WCol size="1"  className="leaderCol">
                {
                    editingStatus?
                     <WInput
                        className='table-select' onBlur={handleStatusEdit}
                        autoFocus={true} defaultValue={leader} type='text'
                        wType="outlined" barAnimation="solid" inputClass="table-input-class"
                    />
                        : <div onClick={() => toggleStatusEdit(!editingStatus)} className={` table-text`}>
                            {leader}
                        </div>

                        
                }
            </WCol>

            <WCol size="1"  className="flagCol">
                {
                    editingAssignedTo || assignedTo === ''
                    ?
                    <WInput
                    className='table-input' onBlur={handleAssignedToEdit}
                    defaultValue={""} type='text'
                    wType="outlined" barAnimation="solid" inputClass="table-input-class" 
                    
                    />
                    : <div className="table-text" 
                        onClick={() => toggleAssignedToEdit(!editingAssignedTo)}
                        >{assignedTo}
                    </div>
                }
            </WCol>

            <WCol size="1" className="landmarksCol">
                {
                    landmark === ''
                        ? <WInput
                            className='table-input' onBlur={handleLandEdit}
                            autoFocus={true} defaultValue={landmark} type='text'
                            wType="outlined" barAnimation="solid" inputClass="table-input-class"
                        />
                        : <div className="table-text"
                            onClick={() => toggleLandEdit(!editingLand)}
                        >{landmark}
                        </div>
                }
            </WCol>

            <WCol size="2">
                <div className='button-group'>
                    {/* <WButton className="table-entry-buttons" onClick={() =>flagHighest? '' : props.reorderItem(data._id, -1)} wType="texted"
                    
                    style={{
                            color: flagHighest? '#313134' : ''
                          }}>
                        <i className="material-icons">expand_less</i>
                    </WButton>
                    <WButton className="table-entry-buttons" onClick={() =>flagLowest? '' :  props.reorderItem(data._id, 1)} wType="texted"
                    style={{
                        color: flagLowest? '#313134' : ''
                      }}
                    >
                        <i className="material-icons">expand_more</i>
                    </WButton> */}
                    {/* <WButton className="table-entry-buttons" onClick={() => props.deleteItem(data, props.index)} wType="texted">
                        <i className="material-icons">close</i>
                    </WButton> */}
                </div>
            </WCol>
        </WRow>
        // <div className="HEYO">BIG BOT</div>
    );
};


export default TableEntry;