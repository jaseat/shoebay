import * as React from 'react';
//material-ui
import {
  Paper,
  CardActions,
  CardContent,
  Typography,
  Button,
  Grid,
} from '@material-ui/core';
//custom
import PureIcon from '../../style/Icons';

type P = {
  asin: string,
  title: string,
  aLink: string,
  price: string,
};
type S = {
  src: null | string,
};

class ProductCard extends React.Component<P, S> {
  state = {
    src: null,
  };

  componentDidMount() {
    fetch(`product/search/item/${this.props.asin}`)
      .then(resp => {
        return resp.json();
      })
      .then(imgdata => {
        this.setState({ src: imgdata });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    if (!this.state.src) {
      return null;
    }
    return (
      <Grid item xs={6} sm={4} md={3}>
        <Paper elevation={0} style={{ border: '1px solid #abacad' }}>
          <img
            src={
              this.state.src ||
              `http://via.placeholder.com/350/b9ceb5?text=IMAGE UNAVAILABLE`
            }
            alt="img"
            style={{
              maxWidth: '100%',
              margin: 'auto',
              padding: 24,
            }}
          />

          <CardContent>
            <Typography variant="body1">{this.props.title}</Typography>
            <Typography variant="subheading" color="primary" align="left">
              {this.props.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="flat"
              color="primary"
              href={this.props.aLink}
              target="_blank"
              fullWidth
            >
              <PureIcon iconType="Amazon" />
              Product page
            </Button>
          </CardActions>
        </Paper>
      </Grid>
    );
  }
}

export default ProductCard;
