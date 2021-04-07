import React        from 'react';
import SidebarEntry from './SidebarEntry';
import { useMutation, useQuery } 		from '@apollo/client';
import { GET_DB_TODOS } 				from '../../cache/queries';




const SidebarList = (props) => {

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

    let y = 0;
    let temp2 = '';
    
    if((newTodo[0])){
        if(props.activeid>=0){
            for (let i = 0; i<newTodo.length ; i++){
                if (newTodo[i].id===props.activeid){
                    temp2 = newTodo[i]
                    y = i;
                }
            }
            for (let i = y; i>0; i--){
                newTodo[i] = newTodo[i-1];
            }
            newTodo[0]=temp2;
        }
    }
    

    //console.log(props.activeid)

    


    return (
        <>
            {   
                
                // props.todolists &&
                // props.todolists.map(todo => (
                //     <SidebarEntry
                //         handleSetActive={props.handleSetActive} activeid={props.activeid}
                //         id={todo.id} key={todo.id} name={todo.name} _id={todo._id}
                //         updateListField={props.updateListField}
                //     />
                // ))

                newTodo &&
                newTodo.map(todo => (
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