import {useEffect, useState, createContext} from 'react';
import {messages} from './testMessages';

const MessagesContext = createContext(null);
const MessageStore = ({children}) => {



    return (
        <MessagesContext.Provider
            value={{
               messages,
               setMessages
            }}
        >
            {children}
        </MessagesContext.Provider>

    );
}

export { MessageStore as default, MessagesContext};