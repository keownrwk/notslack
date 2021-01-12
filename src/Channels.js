import './Channels.css';

const Channels = ({channels}) => {
console.log('New', {channels})
   return (
       <div>



           {Object.keys(channels).map((key,index) => channels[key].filter((item, index1) => (
              <p key={index1}> {item.from} {item.channel} </p> )
                           )
                       )}




       </div>
   )

}

export default Channels;
