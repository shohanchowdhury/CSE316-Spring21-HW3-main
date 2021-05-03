import React            from 'react';
import SidebarHeader    from './SidebarHeader';
import SidebarList      from './SidebarList';

const SidebarContents = (props) => {
    return (
        <>
            <SidebarHeader 
                auth={props.auth} createNewList={props.createNewList} 
                undo={props.undo} redo={props.redo} 
                activeList={props.activeList}
                getActiveList={props.getActiveList}
                setShowDelete={props.setShowDelete}

            />
            <SidebarList
                activeid={props.activeid} handleSetActive={props.handleSetActive}
                todolists={props.todolists} createNewList={props.createNewList}
                activeList={props.activeList} updateListField={props.updateListField} getActiveList={props.getActiveList}
                setShowDelete={props.setShowDelete}

            />
        </>
    );
};

export default SidebarContents;