import React from 'react';

import { WButton, WRow, WCol } from 'wt-frontend';

const TableHeader = (props) => {

    const buttonStyle = props.disabled ? ' table-header-button-disabled ' : 'table-header-button ';
    const clickDisabled = () => { };
    
    //console.log(props.hasUndo());

    const closeList = () =>{
        props.setActiveList({})
        props.resetTps()
    }

    let listItems = [];
    let x = 0
   

    // console.log("Before")
    // console.log(listItems);

    // if(props.activeList){
    //     if(props.activeList.items){
    //         props.activeList.items.map(items => (
    //             listItems[x] = items,
    //             x++
    //         ))
    //         listItems.sort(function(a, b) {
    //             var nameA = a.description.toUpperCase(); // ignore upper and lowercase
    //             var nameB = b.description.toUpperCase(); // ignore upper and lowercase
    //             if (nameA < nameB) {
    //               return -1;
    //             }
    //             if (nameA > nameB) {
    //               return 1;
    //             }
              
    //             // names must be equal
    //             return 0;
    //           });
    //         console.log(listItems);
    //     }
    // }
    // console.log("After")
    // console.log(listItems);



 
    
    return (
        <WRow className="table-header">
            <WCol size="3">
                <WButton className='table-header-section' wType="texted" onClick={() =>props.sortList(props.activeList.items[1]._id,1,props.activeList.items)}>Task</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted" onClick={() =>props.sortList(props.activeList.items[1]._id,2,props.activeList.items)}>Due Date</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted" onClick={() =>props.sortList(props.activeList.items[1]._id,3,props.activeList.items)}>Status</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted" onClick={() =>props.sortList(props.activeList.items[1]._id,4,props.activeList.items)}>Assigned To</WButton>
            </WCol>

            <WCol size="3">
                <div className="table-header-buttons">
                    
                    <WButton style={{
                            color: props.hasUndo()? 'white' : '#313134'
                          }}  onClick={props.disabled ? clickDisabled : props.undo} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">undo</i>
                    </WButton>
                    <WButton style={{
                            color: props.hasRedo()? 'white' : '#313134'
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