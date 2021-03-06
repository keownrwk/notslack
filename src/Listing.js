import {useContext} from 'react';
import './Listing.css';
import {MessagesContext} from "./MessageStore";
import {DateTime} from 'luxon';

const Listing = ({listing}) => {
    const {appState, setAppState} = useContext(MessagesContext);
    const items = appState.messages;


        const sortSource = appState.sortSource;
        const sortField = appState.sortField;
        const sortFunc = (a,b) => {
            //example of sorting on a user or channel is alphabetic order (not used so commented out)
            /*if(a[sortSource] >b[sortSource]) {return 1} else
                if (a[sortSource] <b[sortSource]) {return -1}
        }*/
            if (a.dateTime > b.dateTime) {
                return -1
            } else {
                if (a.dateTime < b.dateTime) {
                    return 1
                }
            }
        }

    return (
        <div className='Listing-page'>
{/*//sortSource contains field name (channel or user) selected in Tabs
//sortField contains value of Tab (e.g. "General" or "Rob"
//Listing sortation is set for dateTime*/}

            {items.filter(item => item[sortSource] === sortField).sort(sortFunc).map((item) => {
                return (
                    <div key={item.id}>
                        <div key={item.id} className="Listing-header">
                            <span className='bold'>{item.from}&nbsp;&nbsp;</span>
                            <span className='Listing-date'>{DateTime.fromISO(item.dateTime).toFormat('ccc, FFF')}</span>
                            <span className="Listing-channel">&nbsp;{item.channel}</span>
                        </div>
                        <div className="Listing-message">
                            {item.message}
                        </div>
                    </div>
                )
            })}


        </div>
    )

};


export default Listing;