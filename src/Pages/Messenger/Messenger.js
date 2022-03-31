// import React from 'react';
// import { StreamChat } from 'stream-chat';
// import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window, ChannelList, ChannelSearch } from 'stream-chat-react';
// import 'stream-chat-react/dist/css/index.css';

// const chatClient = StreamChat.getInstance('dz5f4d5kzrue');

// const userToken = chatClient.devToken("JSON.parse(localStorage.getItem('user')).user_id");
// chatClient.connectUser(
//   {
//     id: "JSON.parse(localStorage.getItem('user')).user_id",
//     name: 'saif eddine gouider',
//     image: 'https://getstream.io/random_png/?id=soft-dew-1&name=soft',
//   },
//   userToken,    
// );


// const channel = chatClient.channel('messaging', 'custom_channel_id', {
//   // add as many custom fields as you'd like
//   image: 'https://www.drupal.org/files/project-images/react.png',
//   name: 'Talk about mindstake',
//   members: ['6235cc9c726b6001e8fd0d9f'],
// });
// const filters = { members: { $in: [  ] } }
// const sort = { last_message_at: -1 };
// const options = { limit: 4 };
// const CustomListContainer = (props) => {
//     // render custom list container here
//   };
  
//   const CustomListItem = (props) => {
//     // render custom list item here
//   };

// const App = () => {
    
    
//    return  ( <Chat client={chatClient}>
//     <Channel channel={channel} filters={filters} sort={sort} options={options} List={CustomListContainer} Preview={CustomListItem} showChannelSearch>
//     <ChannelList options={options} />
 
//       <Window>
//         <ChannelHeader />
//         <MessageList />
//         <MessageInput />
//       </Window>
//       <Thread />
//     </Channel>
//   </Chat>
// );}

// // const App = () => {
// //     console.log(localStorage.getItem('user').user_id);
// //     return (
// //      <>
     
// //      </>);}

// export default App;