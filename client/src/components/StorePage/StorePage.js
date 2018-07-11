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

import { Grid, Typography } from '@material-ui/core';
//
import { connect } from 'react-redux';
import { addFilter } from '../../actions/filter';
import { nextPage, refreshPage } from '../../actions/page';
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

type S = {
  loading: boolean,
  response: Array<Object>,
  done: boolean,
};

class StorePage extends React.Component<any, S> {
  state = {
    loading: true,
    response: [],
    done: false,
  };

  componentWillUpdate(prevProps, prevState) {
    if (prevProps.filters !== this.props.filters) {
      if (!prevState.done) {
        this.props.refreshPage();
        this.setState({ response: [], done: false });
      }
    }
  }

  getItems = () => {
    fetch(`/product/search`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filters: this.props.filters,
        page: this.props.page,
      }),
    })
      .then(resp => {
        return resp.json();
      })
      .then(amazondata => {
        console.log(amazondata);
        if (amazondata[0].Code === undefined) {
          var current = this.state.response;
          for (let i = 0; i < amazondata.length; i++) {
            current.push(amazondata[i]);
          }
          this.setState({
            response: current,
            loading: false,
          });
        } else {
          this.setState({ done: true });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  changePage = () => {
    if (!this.state.done) {
      console.log('crossed the border');
      this.props.nextPage();
      this.getItems();
    }
  };

  renderCards = () => {
    return this.state.response.map((item, i) => {
      return (
        <ProductCard
          key={item.asin + i}
          title={item.title}
          aLink={item.url}
          asin={item.asin}
          price={item.price}
        />
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
          <UploadImage height={300} inpt_id="img-vision" />
          <Button variant="raised" onClick={this.getItems}>
            Find
          </Button>
          {this.state.response && <Grid container>{this.renderCards()}</Grid>}
          {!this.state.loading && (
            <Waypoint onEnter={this.changePage} bottomOffset="-80%" />
          )}
        </div>
      </div>
    );
  }
}

let ConnectedStorePage = connect(
  state => ({
    filters: state.filter.filters,
    page: state.page.page,
  }),
  { addFilter, nextPage, refreshPage }
)(StorePage);

export default withStyles(style)(ConnectedStorePage);
