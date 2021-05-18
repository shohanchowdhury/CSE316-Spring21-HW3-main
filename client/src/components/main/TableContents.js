import React, { useState } from 'react';
import TableEntry   from './TableEntry';
import Subregion						from '../modals/Subregion';


const TableContents = (props) => {

    const handleDescrEdit = e => {
        console.log("as")
    }

    console.log(props.activeList);
    const [viewingRegion, toggleViewingRegion] = useState(false);

    const [currentRegion, setCurrentRegion] = useState(null);
    console.log(currentRegion);

    const entries = props.activeList ? props.activeList.items : null;
    return (
        entries ? <div className=' table-entries container-primary'>
            {
                !currentRegion?
                // console.log(entries.[1]),
                
                    entries.map((entry, index) => (
                        <TableEntry
                            data={entry} key={entry.id}
                            deleteItem={props.deleteItem} reorderItem={props.reorderItem}
                            editItem={props.editItem}
                            activeList={props.activeList}
                            index={index}
                            updateRegion={props.updateRegion}
                            currentRegion={props.currentRegion}
                            viewingRegion={viewingRegion}
                            setCurrentRegion={setCurrentRegion}
                            toggleViewingRegion={toggleViewingRegion}

                        />
                    ))
                :

                <Subregion  currentRegion={currentRegion} data={currentRegion} setCurrentRegion={setCurrentRegion} toggleViewingRegion={toggleViewingRegion} regionNameChange={handleDescrEdit} viewingRegion={viewingRegion} editItem={props.editItem}
                deleteItem={props.deleteItem} reorderItem={props.reorderItem}
                editItem={props.editItem}
                activeList={props.activeList}
                />
            

                  
                
            }
{/* 
            {
                entries.map((entry, index) => (
                    <TableEntry
                        data={entry} key={entry.id}
                        deleteItem={props.deleteItem} reorderItem={props.reorderItem}
                        editItem={props.editItem}
                    />
                ))
            } */}

            </div>
            : <div className='container-primary' />
    );
};

export default TableContents;