import React, { useState, useEffect } from 'react';

export function ChatRoom() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    // Handle initial messages
    useEffect(() => {
        const initialMessages = [
            '欢迎来到聊天室!',
            '试试说点什么吧。'
        ];
        setMessages(initialMessages);
    }, []);

    const handleOpenClick = () => {
        setIsOpen(true);
    };

    const handleCloseClick = () => {
        setIsOpen(false);
    };

    const handleInputChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if (newMessage.trim() === '') {
            return;
        }
        setMessages([...messages, newMessage]);
        setNewMessage('');
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div>
            <button id="onlineChatLink" onClick={handleOpenClick}>Open Chat</button>
            {isOpen && (
                <div id="chatRoomContainer">
                    <button id="closeButton" onClick={handleCloseClick}>Close</button>
                    <div id="chatRoom">
                        {messages.map((message, index) => (
                            <div key={index} className='chat-message received-message'>
                                {message}
                            </div>
                        ))}
                    </div>
                    <input
                        id="messageInput"
                        value={newMessage}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                    />
                    <button id="sendButton" onClick={handleSendMessage}>Send</button>
                </div>
            )}
        </div>
    );
}
