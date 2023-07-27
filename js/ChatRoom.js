import React, { useEffect, useRef, useState } from 'react';

const ChatRoom = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState([
        'Welcome to the chat room!',
        'Feel free to start chatting.'
    ]);

    const messageInputRef = useRef();

    useEffect(() => {
        if (!isOpen) {
            setNewMessage('');
            messageInputRef.current.value = '';
        }
    }, [isOpen]);

    const handleOpenButtonClick = (e) => {
        e.preventDefault();
        setIsOpen(true);
    };

    const handleCloseButtonClick = () => {
        setIsOpen(false);
    };

    const handleSendButtonClick = () => {
        if (newMessage.trim() === '') {
            return;
        }

        setMessages([...messages, newMessage]);
        setNewMessage('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendButtonClick();
        }
    };

    return (
        <div id="chatRoomContainer" style={{ display: isOpen ? 'block' : 'none' }}>
            <button id="onlineChatLink" onClick={handleOpenButtonClick}>Online Chat</button>
            <button id="closeButton" onClick={handleCloseButtonClick}>Close</button>
            <div id="chatRoom">
                {messages.map((message, index) => 
                    <div key={index} className={`chat-message ${index < 2 ? 'received-message' : ''}`}>
                        {message}
                    </div>
                )}
            </div>
            <input 
                id="messageInput" 
                ref={messageInputRef} 
                value={newMessage} 
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button id="sendButton" onClick={handleSendButtonClick}>Send</button>
        </div>
    );
};

export default ChatRoom;
