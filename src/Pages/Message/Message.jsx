import './message.css';
import moment from 'moment';
export default function Message({message,own}) {

    const Connected = JSON.parse(localStorage.getItem('user'))
    return (
        <div className={own ?'message own':'message'}>
            <div className="messageTop">
                <img
                    className='messageImg'
                    src={`http://localhost:3000/uploads/images/${Connected.ImageProfile}`}
                    alt="" 
                />
                <p className='messageText'>{message?.text}</p>
            </div>
            <div className='messageBottom'>{moment(message?.createdAt).fromNow()}</div>
        </div>
    );
}
