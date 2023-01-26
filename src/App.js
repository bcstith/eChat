import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed.jsx';

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="93462c84-5612-45a2-aa78-8ff24030f929"
        userName="john"
        userSecret="password"
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        onNewMessage = {() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;
