import {useContext} from 'react';
import './Channels.css';
import {MessagesContext} from "./MessageStore";


const Channels = ({channels}) => {
    const {appState, setAppState} = useContext(MessagesContext);

    const selectChannel = (event) => {
        const newAppState = {
            messages: appState.messages,
            channelsTab: event.currentTarget.textContent,
            usersTab: '',
            sortField: event.currentTarget.textContent,
            sortSource: 'channel'
        };
        setAppState(newAppState);

    };


    return (
        <div className='Channels-sec'>
            <h3>Channels</h3>
            <ul className="Channels-list">
                {Object.keys(channels).sort().map((key, index) =>
                    <li key={index} onClick={(event) => selectChannel(event)} className= {key === appState.channelsTab ? 'Channels-el selected' : 'Channels-el'}>{key}</li>)}
            </ul>
        </div>
    )
}

export default Channels;
