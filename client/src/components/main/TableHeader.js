import React from 'react';

import { WButton, WRow, WCol } from 'wt-frontend';

const TableHeader = (props) => {

    const buttonStyle = props.disabled ? ' table-header-button-disabled ' : 'table-header-button ';
    const clickDisabled = () => { };
    
    console.log(props.hasUndo());

    const closeList = () =>{
        props.setActiveList({})
        props.resetTps()
    }
    
    return (
        <WRow className="table-header">
            <WCol size="3">
                <WButton className='table-header-section' wType="texted" onClick={() =>props.sortList("desc")}>Task</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted">Due Date</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted" >Status</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted" >Assigned To</WButton>
            </WCol>

            <WCol size="3">
                <div className="table-header-buttons">
                    
                    <WButton style={{
                            color: props.hasUndo()? 'white' : 'black'
                          }}  onClick={props.disabled ? clickDisabled : props.undo} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">undo</i>
                    </WButton>
                    <WButton style={{
                            color: props.hasRedo()? 'white' : 'black'
                          }} onClick={props.disabled ? clickDisabled : props.redo} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">redo</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : props.addItem} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">add_box</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : props.setShowDelete} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">delete_outline</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : () => closeList()} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">close</i>
                    </WButton>
                </div>
            </WCol>

        </WRow>
    );
};

export default TableHeader;