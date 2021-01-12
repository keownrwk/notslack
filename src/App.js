import './App.css';
import Board from './Board';
import Channels from './Channels'
import {messages} from "./testMessages";

const App = ({}) => {

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
    const groupByUser = groupBy('user');

    const channels = groupByChannel(messages);
    const users = groupByUser(messages);
console.log('Msgs: ', messages)
    return (
        <div className="Board-page">
            <Channels channels={channels}/>
            <Board listing={channels}/>
        </div>
    )
}
export default App;