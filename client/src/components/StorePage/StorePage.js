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
    response: null,
  };

  // componentDidMount() {
  //   this.requestProducs();
  // }
  // renderCards = () => {
  //   for (let i = 0; i < this.state.response.length; i++) {
  //     return <p>{this.state.response[i].ASIN[0]}</p>;
  //   }
  // };

  requestProducs = products => {
    this.setState({
      response: products,
      loading: false,
    });
  };

  // renderWaypoint = () => {
  //   if (!this.state.loading) {
  //     return <Waypoint onEnter={this.requestProducs} />;
  //   }
  // };

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
          {!this.state.loading && (
            <Grid container>
              {this.state.response.map((item, i) => {
                return (
                  <Grid item xs={3}>
                    <ProductCard
                      delay={i * 200}
                      title={item.title}
                      aLink={item.url}
                      parentAsin={item.asin}
                    />
                  </Grid>
                );
              })}
            </Grid>
          )}
          <div>
            {/* {this.renderWaypoint()} */}
            Loading more items…
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(StorePage);
