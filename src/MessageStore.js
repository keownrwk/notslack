import {useState, createContext} from 'react';
import {newMessages} from './testMessages';

const MessagesContext = createContext();


const MessageStore = ({children}) => {

    const rawAppState = {messages: newMessages, channelsTab: 'General', usersTab: '', sortField: 'General', sortSource: 'channel'};

    const [appState, setAppState] = useState(rawAppState);

    return (
        <MessagesContext.Provider
            value={{
                appState,
                setAppState
            }}
        >
            {children}
        </MessagesContext.Provider>

    );
}

export {MessageStore as default, MessagesContext};