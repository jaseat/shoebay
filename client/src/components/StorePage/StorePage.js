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
import ProductCard from './ProductCard';
import { Grid } from '@material-ui/core';
//
import { connect } from 'react-redux';
import { addFilter } from '../../actions/filter';
import Button from '@material-ui/core/Button';

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

  getItems = () => {
    fetch(`/product/search`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.props.filters),
    })
      .then(resp => {
        return resp.json();
      })
      .then(amazondata => {
        var current = this.state.response;
        for (let i = 0; i < amazondata.length; i++) {
          current.push(amazondata[i]);
        }
        this.setState({
          response: current,
          loading: false,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  changePage = () => {
    var nextPage = this.props.filters.page + 1 || 2;
    this.props.addFilter('page', nextPage);
    this.getItems();
  };
  renderWaypoint = () => {
    if (!this.state.loading) {
      return <Waypoint onEnter={this.changePage} />;
    }
  };
  renderCards = () => {
    return this.state.response.map((item, i) => {
      return (
        <Grid item xs={3} key={item.asin}>
          <ProductCard
            title={item.title}
            aLink={item.url}
            parentAsin={item.asin}
            price={item.price}
            image={item.image}
          />
        </Grid>
      );
    });
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
          <UploadImage
            height={300}
            inpt_id="img-vision"
            setResponse={this.requestProducs}
          />
          <Button variant="raised" onClick={this.getItems}>
            Find
          </Button>
          {this.state.response && <Grid container>{this.renderCards()}</Grid>}
          <div>
            {this.renderWaypoint()}
            Loading more items…
          </div>
        </div>
      </div>
    );
  }
}

let ConnectedStorePage = connect(
  state => ({
    filters: state.filter.filters,
  }),
  { addFilter }
)(StorePage);

export default withStyles(style)(ConnectedStorePage);
