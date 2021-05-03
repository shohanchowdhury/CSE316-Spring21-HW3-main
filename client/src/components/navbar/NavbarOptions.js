import React                                from 'react';
import { EDITACCOUNT, LOGOUT }                           from '../../cache/mutations';
import { useMutation, useApolloClient }     from '@apollo/client';
import { WButton, WNavItem }                from 'wt-frontend';
import { GET_DB_USER } 				from '../../cache/queries';
import { useQuery } 		from '@apollo/client';



const LoggedIn = (props) => {
    
    const client = useApolloClient();
	const [Logout] = useMutation(LOGOUT);
    const [EditAccount] = useMutation(EDITACCOUNT);

    // console.log(props);
    const handleLogout = async (e) => {
        // props.user = null;
        props.loggerOuting();
        Logout();
        const { data } = await props.fetchUser();
        if (data) {
            let reset = await client.resetStore();
            if (reset) props.setActiveList({});
        }
    };

    

    const handleEditAccount = async (e) => {
        console.log(user)
        props.updateUser(user);
        console.log("part 1")
        props.setShowEdit();
        //EditAccount();
        // const { data } = await props.fetchUser();
        // if (data) {
        //     let reset = await client.resetStore();
        //     if (reset) props.setActiveList({});
        // }
    };
    

    var user = null;
	const { loading, error, data, refetch } = useQuery(GET_DB_USER);
    if(data) { user = data.getCurrentUser; }
    // console.log(user)

    // console.log(props.fetchUser)


    return (
        <WNavItem hoverAnimation="lighten">
            <WButton className="navbar-options" onClick={handleEditAccount} wType="texted" hoverAnimation="text-primary">
                {user.firstName +" "+ user.lastName}
            </WButton>
            <WButton className="navbar-options" onClick={handleLogout} wType="texted" hoverAnimation="text-primary">
                Logout
            </WButton>
        </WNavItem >
    );
};

const LoggedOut = (props) => {
    return (
        <>
            <WNavItem hoverAnimation="lighten">
                <WButton className="navbar-options" onClick={props.setShowLogin} wType="texted" hoverAnimation="text-primary">
                    Login
                </WButton>
            </WNavItem>
            <WNavItem hoverAnimation="lighten">
                <WButton className="navbar-options" onClick={props.setShowCreate} wType="texted" hoverAnimation="text-primary"> 
                    Sign Up 
                </WButton>
            </WNavItem>
        </>
    );
};


const NavbarOptions = (props) => {
    return (
        <>
            {
                props.auth === false ? <LoggedOut setShowLogin={props.setShowLogin} setShowCreate={props.setShowCreate} loggerOuting={props.loggerOuting} setShowEdit={props.setShowEdit} updateUser={props.updateUser}/>
                : <LoggedIn fetchUser={props.fetchUser} setActiveList={props.setActiveList} logout={props.logout} loggerOuting={props.loggerOuting} setShowEdit={props.setShowEdit} updateUser={props.updateUser}/>
            }
        </>

    );
};

export default NavbarOptions;