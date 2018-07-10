import * as React from 'react';
//material-ui
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
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
      <Grid item xs={3}>
        <Card style={{ maxWidth: 250 }}>
          <CardMedia
            image={
              this.state.src ||
              `http://via.placeholder.com/350/b9ceb5?text=IMAGE UNAVAILABLE`
            }
            style={{
              height: 0,
              paddingTop: '90.25%',
            }}
          />

          <CardContent>
            <Typography variant="body1">{this.props.title}</Typography>
            <Typography variant="subheading">{this.props.price}</Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="flat"
              color="primary"
              href={this.props.aLink}
              target="_blank"
            >
              <PureIcon iconType="Amazon" />
              Product Page
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default ProductCard;
