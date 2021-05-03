import React, { useState }  from 'react';
import { WButton, WNavItem, WInput } from 'wt-frontend';

const SidebarEntry = (props) => {
    const [editing, toggleEditing] = useState(false);
    const [preEdit, setPreEdit] = useState(props.name);
    const [active, setActive] = useState({});

    const handleEditing = (e) => {
        e.stopPropagation();
        setPreEdit(props.name);
        toggleEditing(!editing);
    };

    const handleSubmit = (e) => {
        handleEditing(e);
        const { name, value } = e.target;
        props.updateListField(props._id, name, value, preEdit);
    };

    const updateActive = (e) => {
        setActive(e);
    }

    const working = () => {
        console.log("hmmm")
    }

    const deleteMap = (e) => {
        props.handleSetActive(e);
        props.setShowDelete();
    }
    const entryStyle = props.id === props.activeid ? 'list-item list-item-active' : 'list-item ';
    console.log(props.activeList)
    return (
        <div className="mapTile">
            {
                JSON.stringify(props.activeList)!="{}"?
            <div>
                <WNavItem className="mapTile"
                    className={entryStyle} onDoubleClick={handleEditing} 
                    onClick={() => { props.handleSetActive(props.id) }} hoverAnimation="lighten"
                    style={{
                        color: props.id === props.activeid? '#ffc800' : ''
                    }}
                >
                    {
                        editing  ?
                        <WInput className="mapEach" inputClass="list-item-edit-input" wType="lined" barAnimation="solid" name='name' onBlur={handleSubmit} autoFocus={true} defaultValue={props.name} />
                            :   <div className='mapEachText'>
                                        {props.name}
                                </div>
                    }
                </WNavItem>
                <span onClick={() => {deleteMap(props.id) }} wType="texted" className="deleteMapButton">
                                <i className="material-icons">delete_outline</i>
                </span>
                <span  onClick={handleEditing} wType="texted" className="editMapButton">
                                <i className="material-icons">build</i>
                </span>
            </div>
            :
            <div>
                </div>
}
        </div>
    );
};

export default SidebarEntry;