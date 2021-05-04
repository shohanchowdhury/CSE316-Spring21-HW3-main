import React from 'react';

import { WButton, WRow, WCol, WModal } from 'wt-frontend';
import { useMutation, useQuery } 		from '@apollo/client';
import { GET_DB_TODOS } 				from '../../cache/queries';
import TableEntry   from './TableEntry';





const TableHeader = (props) => {

    const buttonStyle = props.disabled ? ' table-header-button-disabled ' : 'table-header-button ';
    const clickDisabled = () => { };
    
    //console.log(props.hasUndo());

    const closeList = () =>{
        props.setActiveList({})
        props.resetTps()
    }

    let { loading, error, data, refetch } = useQuery(GET_DB_TODOS);
    let todolists 							= [];
    if(data) { todolists = data.getAllTodos; }
    // console.log(todolists);

    let newTodo = [];
    let x = 0
    todolists.map(todo => (
        newTodo[x] = todo,
        x++
    ))


    function checkIfListAndMoreOne(){
        if(props.activeList.items){
            if(props.activeList.items[1]){
                return true;
            }
        }
        return false;
    }

    console.log("Test");
    console.log(newTodo);
    // props.createNewList();
    console.log(props.activeList);
    const entries = props.todolists;
    
 
    
    return (
        <div >
            {(JSON.stringify(props.activeList)!="{}")?
            <div className= "bigBox">
            <WRow className="table-header">
                <WCol size="2">
                    <WButton className='table-header-section' wType="texted" onClick={() =>checkIfListAndMoreOne()? props.sortList(props.activeList.items[0]._id,1,props.activeList.items) :''}>Name</WButton>
                </WCol>

                <WCol size="2">
                    <WButton className='table-header-section' wType="texted" onClick={() =>checkIfListAndMoreOne()? props.sortList(props.activeList.items[0]._id,2,props.activeList.items) :''}>Capital</WButton>
                </WCol>

                <WCol size="2">
                    <WButton className='table-header-section' wType="texted" onClick={() =>checkIfListAndMoreOne()? props.sortList(props.activeList.items[0]._id,3,props.activeList.items) :''}>Leader</WButton>
                </WCol>

                <WCol size="2">
                    <WButton className='table-header-section' wType="texted" onClick={() =>checkIfListAndMoreOne()? props.sortList(props.activeList.items[0]._id,4,props.activeList.items) :''}>Flag</WButton>
                </WCol>

                <WCol size="2">
                    <WButton className='table-header-section' wType="texted" onClick={() =>checkIfListAndMoreOne()? props.sortList(props.activeList.items[0]._id,5,props.activeList.items) :''}>Landmarks</WButton>
                </WCol>

                <WCol size="3">
                    <div className="table-header-buttons">
                        
                        <span style={{
                                color: props.hasUndo()? 'white' : '#313134'
                            }}  onClick={props.disabled ? clickDisabled : props.undo} wType="texted" className={`${buttonStyle}`}>
                            <i className="material-icons undoTable">undo</i>
                        </span>
                        <span style={{
                                color: props.hasRedo()? 'white' : '#313134'
                            }} onClick={props.disabled ? clickDisabled : props.redo} wType="texted" className={`${buttonStyle}`}>
                            <i className="material-icons redoTable">redo</i>
                        </span>
                        <span onClick={props.disabled ? clickDisabled : props.addItem} wType="texted" className={`${buttonStyle}`}>
                            <i className="material-icons addTable">add_box</i>
                        </span>
                        {/* <span onClick={props.disabled ? clickDisabled : props.setShowDelete} wType="texted" className={`${buttonStyle}`}>
                            <i className="material-icons deleteTable">delete_outline</i>
                        </span> */}
                        <span onClick={props.disabled ? clickDisabled : () => closeList()} wType="texted" className={`${buttonStyle}`}>
                            <i className="material-icons closeTable">close</i>
                        </span>
                    </div>
                </WCol>

            </WRow>
            </div>
            :
            <div>
            </div>
            }
        </div>
        
    

          

    );
};

export default TableHeader;