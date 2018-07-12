import * as React from 'react';
//material-ui
import {
  Slide,
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
  title: string,
  aLink: string,
  price: string,
  image: string,
  index: number,
};

type S = {
  delay: number,
};

class ProductCard extends React.PureComponent<P, S> {
  state = {
    delay: 0,
  };
  componentDidMount() {
    var random = Math.floor(Math.random() * 4 + 1);
    this.setState({ delay: random * 100 });
    // const { index } = this.props;
    // if (index < 10) {
    //   this.setState({ delay: index * 100 });
    // }
    // this.setState({ delay: (index % 10) * 100 });
  }
  render() {
    return (
      <Grid item xs={6} sm={4} md={3}>
        <Slide
          in={true}
          direction="up"
          mountOnEnter
          unmountOnExit
          style={{ transitionDelay: this.state.delay }}
        >
          <Paper
            elevation={0}
            style={{
              border: '1px solid #abacad',
              backgroundColor: '#fff',
            }}
          >
            <img
              src={
                this.props.image ||
                `http://via.placeholder.com/350/b9ceb5?text=IMAGE UNAVAILABLE`
              }
              alt="img"
              style={{
                maxWidth: '100%',
                height: 'auto',
                maxHeight: 200,
                width: 'auto',
                margin: 'auto',
                padding: 24,
                display: 'block',
              }}
            />

            <CardContent>
              <Typography variant="body1" noWrap>
                {this.props.title}
              </Typography>
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
        </Slide>
      </Grid>
    );
  }
}

export default ProductCard;
