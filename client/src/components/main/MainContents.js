import React, { useEffect, useRef }            from 'react';
import TableHeader      from './TableHeader';
import TableContents    from './TableContents';

const MainContents = (props) => {
    


    function useKey(key, cb){
        const callbackRef = useRef(cb);

        useEffect(() => {
            callbackRef.current = cb;
        });

        useEffect(() => {
            function handle(event) {
                if (event.code === key) {
                    if(event.ctrlKey)
                    {
                        callbackRef.current(event);
                    }
                }
            }
            document.addEventListener("keydown", handle);
            return () => document.removeEventListener("keydown", handle)
        }, [key]);
    }

    function handleZ(){
        props.undo()
    }
    function handleY(){
        props.redo()
        
    }


    useKey("KeyZ", handleZ);
    useKey("KeyY", handleY);
   

        
    return (
        <div className='table ' >
            <TableHeader
                sortList={props.sortList}
                disabled={!props.activeList._id} addItem={props.addItem}
                setShowDelete={props.setShowDelete} setActiveList={props.setActiveList}
                undo={props.undo} redo={props.redo}
                hasUndo={props.hasUndo}  hasRedo={props.hasRedo}
                resetTps={props.resetTps}
                activeList={props.activeList}
                createNewList={props.createNewList}
            />
            <TableContents
                key={props.activeList.id} activeList={props.activeList}
                deleteItem={props.deleteItem} reorderItem={props.reorderItem}
                editItem={props.editItem}
            />
        </div>
    );
};

export default MainContents;