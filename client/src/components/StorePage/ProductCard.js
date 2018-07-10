import * as React from 'react';
//material-ui
import {
  Slide,
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
  delay: number,
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
        console.log(imgdata);
        this.setState({ src: imgdata });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <Slide
        direction="left"
        in={true}
        // style={{ transitionDelay: props.delay }} - one by one
        timeout={this.props.delay}
        mountOnEnter
        unmountOnExit
      >
        <Card style={{ maxWidth: 300 }}>
          <CardMedia
            image={this.state.src}
            style={{
              height: 0,
              maxHeight: 200,
              paddingTop: '80.25%',
            }}
          />
          <CardContent>
            <Typography variant="body1">{this.props.title}</Typography>
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
      </Slide>
    );
  }
}

export default ProductCard;
