import {useContext} from 'react';
import './Users.css';
import {MessagesContext} from './MessageStore';

const Users = ({users}) => {
    const {appState, setAppState} = useContext(MessagesContext);

    const selectUser = (event) => {
        const newAppState = {
            messages: appState.messages,
            channelsTab: '',
            usersTab: event.currentTarget.textContent,
            sortField: event.currentTarget.textContent,
            sortSource: 'from'
        };
        setAppState(newAppState);

    };

    return (
        <div className='Channels-sec'>
            <h3>Users</h3>
            <ul className="Channels-list">
                {Object.keys(users).sort().map((key, index) =>
                    <li key={index} onClick={(event) => selectUser(event)} className= {key === appState.usersTab ? 'Channels-el selected' : 'Channels-el'}>{key}</li>)}
            </ul>
        </div>
    )
}

export default Users;
