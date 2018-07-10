import * as React from 'react';
//material-ui
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core';
//custom
import PureIcon from '../../style/Icons';

type P = {
  parentAsin: string,
  title: string,
  aLink: string,
};
type S = {
  src: null | string,
};

class ProductCard extends React.Component<P, S> {
  state = {
    src: null,
  };

  componentDidMount() {
    fetch(`product/search/item/${this.props.parentAsin}`)
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
    return (
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
    );
  }
}

export default ProductCard;
