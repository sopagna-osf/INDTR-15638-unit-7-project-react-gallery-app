import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';

import Container from './components/Container';
import PageNotFound from './components/PageNotFound';
import LoadingOverlay from './components/LoadingOverlay';

class App extends Component {
  constructor () {
    super();
    this.state = {
      isLoading: false,
      photos: {}
    };
  }

  componentDidMount () {
    this.setState({ isLoading: true });
    axios.all([
      this.getFlickrPhotos('sunsets'),
      this.getFlickrPhotos('waterfalls'),
      this.getFlickrPhotos('mountains')  
    ])
    .then(axios.spread((sunsets, waterfalls, mountains) => {
      this.setState(prevState => {
        return {photos: {...prevState.photos, sunsets, waterfalls, mountains}}
      });
    }))
    .catch(console.error)
    .then(() => {
      this.setState({ isLoading: false });
    });
  }

  getFlickrPhotos = (query) => {
    return axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        return response.data.photos.photo.map(photo => {
          return {
            title: photo.title,
            url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
          }
        });
      });
  }

  searchPhotos = (query) => {
    this.setState({ isLoading: true });
    this.getFlickrPhotos(query)
    .then(response => {
      this.setState(prevState => {
        return {photos: {...prevState.photos, search: response}};
      });
    }) 
    .catch(console.error)
    .then(() => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { isLoading, photos } = this.state;

    return (
      <Router>
        { isLoading ? <LoadingOverlay /> : null }

        <Switch>
          <Route exact path="/" render={ () => <Redirect to='/gallery/sunsets' /> } />
          <Route
            exact
            path="/search/:topic"
            render={ ({match, history}) => (
              <Container
                photos={ photos['search'] }
                searchPhotos={ this.searchPhotos }
                history={ history }
                match={ match }
                title={ "Search Results: " + match.params.topic }
              />
            )} 
          />
          <Route
            exact
            path="/gallery/:topic"
            render={ ({match, history}) => (
              <Container
                photos={ photos[match.params.topic] }
                searchPhotos={ this.searchPhotos }
                history={ history }
                title={ match.params.topic }
              /> 
            )} 
          />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
