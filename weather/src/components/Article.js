import React, {Component} from "react"
import {getPosit} from "./getPosition"

class Article extends Component {
    state = {
        isOpen: true,
        open: 'sss',
    }

    componentDidMount() {
        getPosit();
     }
  

    render() {
    const {article} = this.props
    const body = this.state.isOpen && <section>Article</section>
    return (
       <div onLoad="handClick()">
            <h2>
                <button onClick={this.handClick}>
                    {this.state.isOpen ? 'close' : 'open'}
                </button>
            </h2>
            {body} 
            <h3>{this.state.open}creation date: {(new Date()).toDateString()}</h3>
       </div>
    )   
    }


        handClick = () => { 
        this.setState ({
            open: "!this.state.isOpen"
        })
    }
}

export default Article