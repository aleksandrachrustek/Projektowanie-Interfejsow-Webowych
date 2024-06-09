import React, { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, query, orderBy, addDoc, serverTimestamp } from 'firebase/firestore';
import { firestore, auth } from './firebaseConfig';

const ChatRoom = () => {
  const messagesRef = collection(firestore, 'messages');
  const messagesQuery = query(messagesRef, orderBy('createdAt', 'asc'));
  const [messages] = useCollectionData(messagesQuery, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue('');
  };

  return (
    <div className="chat-room">
      <div className="messages">
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      </div>

      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type a message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

const ChatMessage = ({ message }) => {
  const { text, uid, photoURL } = message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://i.pravatar.cc/300'} alt="Avatar" />
      <p>{text}</p>
    </div>
  );
};

export default ChatRoom;
