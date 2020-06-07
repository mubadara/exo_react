class App extends React.Component {
    state = { 
        comments: [],
        name : "",
        message : "",
    }

    handleName = e => {
        this.setState({
            name: e.target.value
        })
    }

    handleMessage = e => {
        this.setState({
           message: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        let comment = {
            "name": this.state.name,
            "message": this.state.message
        }
        this.setState({
            comments: this.state.comments.concat(comment)
        })
        console.log(this.state.comments)
    }        
    

    render() {
        return (
             <form className="form" onSubmit={this.handleSubmit}>
                 <h2>Say something</h2>
                    <input type="text" name="lastname" id="" 
                    placeholder="Your name" 
                     className="form__name" value={this.state.name} onChange={this.handleName}/>
                    <textarea className="form__message" placeholder="Your Message" value={this.state.message} onChange={this.handleMessage}></textarea>
                    <button type="submit" className="form__button">Send</button>
             </form>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById("app"));