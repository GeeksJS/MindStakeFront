import './message.css';
import moment from 'moment';
export default function Message({message,own}) {
    return (
        <div className={own ?'message own':'message'}>
            <div className="messageTop">
                <img
                    className='messageImg'
                    src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"
                    alt="" 
                />
                <p className='messageText'>{message?.text}</p>
            </div>
            <div className='messageBottom'>{moment(message?.createdAt).fromNow()}</div>
        </div>
    );
}
