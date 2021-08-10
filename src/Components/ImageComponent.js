import React, { Component } from "react";

import loadinggif from '../load-loading.gif';

class ImageComponent extends Component{
    constructor(props){
        super(props)
        this.imageRef = React.createRef()
        this.state ={
            divStyle : {
                backgroundImage: 'url(' + loadinggif + ')',
                minHeight: '150px',
                maxHeight: '150px',
                height: '150px'
            }
        }
    }
    componentDidMount(){
        this.imageRef.current.addEventListener("load",this.setSpans)
    }
    setSpans = () => {
        this.setState({
            divStyle : {
                backgroundImage: 'url(' + this.props.url + ')',
                minHeight: this.imageRef.current.clientHeight+'px',
                maxHeight: this.imageRef.current.clientHeight+'px',
                height: this.imageRef.current.clientHeight+'px'
            }
        })
    }
    render(){
        return <div className="image imageContainer" style={this.state.divStyle}>
            <img ref={this.imageRef} style={{visibility: 'hidden'}} src={this.props.url} alt=""/>
        </div>
    }
}
export default ImageComponent