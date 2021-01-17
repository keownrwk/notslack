import {useContext, useRef} from 'react';
import {MessagesContext} from "./MessageStore";
import {DateTime} from 'luxon';
import _ from 'lodash'



const Message = ({user}) => {
    const input = useRef();
    const {appState, setAppState} = useContext(MessagesContext);
    let message;
    const handleMessage = event => {
        message = event.target.value;
    }
    const submitMessage = (event) => {
        let newMessage = [];
        newMessage.id = 6;
        newMessage.from = user;
        newMessage.channel = appState.sortField;
        newMessage.dateTime = DateTime.local().toISO();
        newMessage.message = message;

        const newAppState = _.cloneDeep(appState);
        newAppState.messages = (appState.messages);
        newAppState.messages.push(newMessage);

        setAppState(newAppState);

        input.current.value = '';

        console.log('appState: ', newAppState.messages);
    }

    return (
        <div className="Message">
            <textarea id='styled' ref={input}
                   value={message}
                   onChange={handleMessage}/>
            <button onClick={submitMessage}>Submit</button>
        </div>
    )
}

export default Message;