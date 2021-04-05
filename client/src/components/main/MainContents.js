import React            from 'react';
import TableHeader      from './TableHeader';
import TableContents    from './TableContents';

const MainContents = (props) => {

    return (
        <div className='table ' >
            <TableHeader
                sortList={props.sortList}
                disabled={!props.activeList._id} addItem={props.addItem}
                setShowDelete={props.setShowDelete} setActiveList={props.setActiveList}
                undo={props.undo} redo={props.redo}
                hasUndo={props.hasUndo}  hasRedo={props.hasRedo}
                resetTps={props.resetTps}
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