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
  imgUrl: string,
  details: string,
  aLink: string,
  delay: number,
};

const ProductCard = (props: P) => {
  return (
    <Slide
      direction="left"
      in={true}
      // style={{ transitionDelay: props.delay }} - one by one
      timeout={props.delay}
      mountOnEnter
      unmountOnExit
    >
      <Card style={{ maxWidth: 400 }}>
        <CardMedia
          image={props.imgUrl}
          style={{
            height: 0,
            paddingTop: '56.25%',
          }}
        />
        <CardContent>
          <Typography variant="body2">{props.details}</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="flat"
            color="primary"
            href={props.aLink}
            target="_blank"
          >
            <PureIcon iconType="Amazon" />
            Product Page
          </Button>
        </CardActions>
      </Card>
    </Slide>
  );
};

export default ProductCard;
