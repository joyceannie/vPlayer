import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBN3eCGMU6uTE0OxrmbWdKe6yvfWdLf0-Y';


// Create a new component to produce some HTML
class App  extends Component {
	constructor(props){
		super(props);
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos});
		});
		
		this.state = { videos:[] };
	}
	render() {
		return(
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]}/>
				<VideoList videos={this.state.videos}/>
				
			</div>
		);
	}
}

// Take this component's generated HTML and put it
// on the page
ReactDOM.render(<App />, document.querySelector('.container'));