import './Channels.css';

const Channels = ({channels}) => {
    const selectChannel = (event) => console.log('Key: ', event.currentTarget.textContent);

    return (
        <div className='Channels-sec'>
            <h3>Channels</h3>
            <ul className="Channels-list">
                {Object.keys(channels).sort().map((key) =>
                    <li onClick={(event) =>                                                                                                                                                                                                                                                                                                                              selectChannel(event)} className="Channels-list-el">{key}</li>)}

            </ul>


        </div>
    )

}

export default Channels;
