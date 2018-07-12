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
import SearchContainer from './SearchContainer';

import { Grid, Button, Typography } from '@material-ui/core';

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
    response: [],
    //flag turns true if no more responses left
    done: false,
    //flag while loading
    loading: true,
  };

  componentDidUpdate(prevP) {
    if (prevP.filters !== this.props.filters) {
      this.props.refreshPage();
      this.setState({
        response: [],
        done: false,
        loading: false,
      });
    }
  }

  getItems = () => {
    this.setState({ loading: true });
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
        if (
          amazondata &&
          amazondata.done === undefined &&
          amazondata.done !== true
        ) {
          var current = this.state.response;
          for (let i = 0; i < amazondata.length; i++) {
            current.push(amazondata[i]);
          }
          this.setState({
            response: current,
            loading: false,
          });
        } else {
          if (amazondata.done) this.setState({ done: true });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  changePage = () => {
    if (!this.state.done && !this.state.loading) {
      this.props.nextPage();
      this.getItems();
    }
  };

  renderCards = () => {
    const { response } = this.state;
    return response.map((item, i) => {
      return (
        <ProductCard
          key={item.asin + i}
          index={i}
          title={item.title}
          aLink={item.url}
          image={item.image}
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
          <SearchContainer>
            <UploadImage height={300} inpt_id="img-vision" />
            <Button
              color="secondary"
              variant="raised"
              onClick={this.getItems}
              size="small"
            >
              Find
            </Button>
          </SearchContainer>

          {this.state.response && (
            <Grid style={{ marginTop: 24 }} container>
              {this.renderCards()}
            </Grid>
          )}
          <Waypoint onEnter={this.changePage} bottomOffset="-200px" />
        </div>
      </div>
    );
  }
}

export default withStyles(style)(StorePage);
