import React        from 'react';
import SidebarEntry from './SidebarEntry';
import { useMutation, useQuery } 		from '@apollo/client';
import { GET_DB_TODOS } 				from '../../cache/queries';




const SidebarList = (props) => {

    

    return (
        <>
            {
                props.todolists &&
                props.todolists.map(todo => (
                    <SidebarEntry
                        handleSetActive={props.handleSetActive} activeid={props.activeid}
                        id={todo.id} key={todo.id} name={todo.name} _id={todo._id}
                        updateListField={props.updateListField}
                    />
                ))

    
               
        
            }
        </>
    );
};

export default SidebarList;