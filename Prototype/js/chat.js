class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        showChatBox: false,
        messages: [],
        message: ''  
        };

        this.toggleChatBox = this.toggleChatBox.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    toggleChatBox() {
        this.setState(prevState => ({
        showChatBox: !prevState.showChatBox
        }));
    }

    handleMessage(event) {
        this.setState({ message: event.target.value }); 
    }

    sendMessage() {
        this.setState(prevState => ({
        messages: [...prevState.messages, this.state.message],
        message: ''
        }));
    }

    render() {
        return (
        <div>
            <button onClick={this.toggleChatBox}>Online Chat</button>
            {this.state.showChatBox &&
            <div id="chat-box">
                <h2>Chat</h2>
                <div id="messages">
                {this.state.messages.map((message, index) => (
                    <p key={index}>{message}</p>
                ))}
                </div>
                <input type="text" id="chat-input" onChange={this.handleMessage} value={this.state.message}/>
                <button id="send-button" onClick={this.sendMessage}>Send</button>
            </div>
            }
        </div>
        );
    }
}

ReactDOM.render(<Chat />, document.getElementById('root'));
