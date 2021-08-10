import React, { Component }  from"react";

import SearchBar from "./SearchBar";
import ImageBloc from "./ImageBloc";
import unsplash from '../api/unsplash'

class App extends Component {
    state = {
        images: [],
        totalImages: 0,
        totalpages: 0
    }
    onSearchSubmit = async (value) => {
        const result = await unsplash.get('/search/photos',{
            params: {
                query: value
            },
        })
        this.setState({
            images: result.data.results,
            totalImages: result.data.total,
            totalpages: result.data.results.length
        })
    }

    OncopyLink = () => {
        console.log("App.j");
    }

    render () {
        return <div>
            <SearchBar executable={this.onSearchSubmit}/>
            <h3 style={{padding: '10px 10%'}}>Found images : {this.state.totalpages} / {(this.state.totalImages)}</h3>
            <hr/>
            <ImageBloc copiable={this.OncopyLink} images={this.state.images}/>
        </div>;
    }
}

export default App