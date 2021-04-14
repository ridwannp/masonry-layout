import React, { Component } from 'react';
import './App.css';
import Media from './media.json';
import Logo from './img/EVOS_logo.png'
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

const style = {
  listStyleType:'none'
}

class App extends Component {
  
  state = {
    searchText:''
  }

  onTextChange(e){
    this.setState({searchText:e.target.value})
  }

  render() { 
    var childImage = Media.filter((val)=>{
      if(this.state.searchText == ""){
        return val
      } else if (val.name.toLowerCase().includes(this.state.searchText.toLowerCase())){
        return val
      }
    }).map((val,index)=>{
      return(
        <div key={index} className="image-element-class">
          <div className="box">
            <img src={val.src} name={val.name}/>
            <div className="caption">
              <h2>{val.name.toUpperCase()}</h2>
          </div>
          </div>          
        </div>
      )
    })
    return (
      <div className="container">
        <div className="searchBox">
          <div>
            <img src={Logo} className="searchIcon"/>
          </div>
          <input className="searchTxt" placeholder="Type to search" type="text" value={this.state.searchText} onChange={(e)=>this.onTextChange(e)}/>
        </div>
        <Masonry
          className={'my-gallery-class'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
          imagesLoadedOptions={imagesLoadedOptions}
          style={style}
          onClick={this.handleClick}
        >
          {childImage}
        </Masonry>
      </div>
      
    );
  }
}

export default App;
