import React                    from 'react';
import { WButton, WRow, WCol }  from 'wt-frontend';

const SidebarHeader = (props) => {
    let flag1 = (JSON.stringify(props.activeList)==="{}")
    //console.log(JSON.stringify(props.activeList))
    //console.log(flag1)
    return (
        <div>
            {        
            true?
                <WRow className='sidebar-header'>
                
                        {
                            props.auth && <div className="sidebar-options">
                                <WButton className="sidebar-buttons createNewMap" onClick={props.createNewList} clickAnimation="ripple-light" shape="rounded" color="primary"
                                style={{
                                    display: flag1? '' : 'none'
                                }}>
                                    <i className="material-icons">add</i>
                                </WButton>
                                <WButton className="sidebar-buttons undo-redo" onClick={props.undo} wType="texted" clickAnimation="ripple-light" shape="rounded">
                                    <i className="material-icons">undo</i>
                                </WButton>
                                <WButton className="sidebar-buttons undo-redo" onClick={props.redo} wType="texted" clickAnimation="ripple-light" shape="rounded">
                                    <i className="material-icons">redo</i>
                                </WButton>
                            </div>
                        }

                </WRow>
                :
                <div>

               </div>
        
            }      
            
        </div>

    );
};

export default SidebarHeader;