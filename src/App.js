import {useContext} from 'react';
import './App.css';
import Listing from './Listing';
import Channels from './Channels';
import Users from './Users';
import Message from './Message';
import {MessagesContext} from './MessageStore';


const App = () => {
    const {appState, setAppState} = useContext(MessagesContext);

    function groupBy(key) {
        return function group(array) {
            return array.reduce((acc, obj) => {
                const property = obj[key];
                acc[property] = acc[property] || [];
                acc[property].push(obj);
                return acc;
            }, {});
        };
    }

    const groupByChannel = groupBy('channel');
    const groupByUser = groupBy('from');

    const channels = groupByChannel(appState.messages);
    const users = groupByUser(appState.messages);


    return (
        <div className="Board-page">
            <div className="row">
            <div className='column1'>
                <Channels channels={channels}/>
                <Users users={users}/>

            </div>
            <div className="column2">
                <Listing listing={channels}/>
                <Message user={'Rob'} />
            </div>
            </div>
        </div>
    )
}
export default App;