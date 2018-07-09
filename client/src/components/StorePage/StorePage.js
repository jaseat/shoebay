import * as React from 'react';
//material-ui
import { withStyles } from '@material-ui/core/styles';
//takes care of lazy api calls on infinite scrolling
import Waypoint from 'react-waypoint';
//custom
import SideDrawer from '../SideDrawer/SideDrawer';
import FilterBar from '../FilterBar';
import StoreDrawerContent from '../StoreDrawerContent';
import UploadImage from './UploadImage';

//this component that displays products
// import ProductCard from './ProductCard';
//<ProductCard delay={i * 200} details={item.details} aLink={item.href} imgUrl={item.img}/>

const style = theme => ({
  root: {
    zIndex: 1,
    overflow: 'hidden',
    display: 'flex',
  },
  container: {
    flexGrow: 1,
    display: 'inline-block',
    height:
      window.innerHeight - theme.mixins.toolbar.minHeight - theme.spacing.unit,
    overflowY: 'auto',
    padding: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.default,
  },
});

type P = {
  classes: { root: {}, container: {} },
};

type S = {
  loading: boolean,
  response: Array<Object>,
};

class StorePage extends React.Component<P, S> {
  state = {
    loading: true,
    response: [],
  };

  componentDidMount() {
    this.requestProducs();
  }

  requestProducs = () => {
    this.setState({ loading: true });
    //currently just getting images from giphy api, replace with call to backend
    const URL =
      'https://api.giphy.com/v1/gifs/search?q=Shoes&api_key=dc6zaTOxFJmzC&limit=11&lang=en';

    fetch(URL)
      .then(response => {
        return response.json();
      })
      .then(data => {
        var currentResponse = this.state.response;
        for (var i = 0; i < 11; i++) {
          currentResponse.push(data.data[i]);
        }

        this.setState({
          response: currentResponse,
          loading: false,
        });
      });
  };

  renderWaypoint = () => {
    if (!this.state.loading) {
      return <Waypoint onEnter={this.requestProducs} />;
    }
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        {/* $FlowFixMe */}
        <FilterBar />
        <SideDrawer>
          <StoreDrawerContent />
        </SideDrawer>
        <div className={this.props.classes.container}>
          <UploadImage height={300} inpt_id="img-vision" />
          {this.state.response.map((item, i) => {
            return (
              <img
                key={item.images.fixed_height_still.url + i}
                src={item.images.fixed_height_still.url}
                alt="still-gif"
                style={{ height: 250, border: '1px solid black' }}
              />
            );
          })}
          <div>
            {this.renderWaypoint()}
            Loading more items…
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(StorePage);
