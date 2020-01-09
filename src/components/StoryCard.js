import React from 'react';

import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import { Button } from 'reactstrap';

const StoryCard = props => {
  //random number generator between 0 and 4
  const rand = Math.floor(Math.random() * 5);
  console.log('image', props.story.id.img_url);
  const imgArr = [
    'https://unsplash.com/photos/9XT1_6wFTpY',
    'https://unsplash.com/photos/9XT1_6wFTpY',
    'https://unsplash.com/photos/9XT1_6wFTpY',
    'https://unsplash.com/photos/9XT1_6wFTpY',
    'https://unsplash.com/photos/9XT1_6wFTpY',
  ];
  // TODO: check for the null value when getting images to see if the value actually is "null"
  const imgSrc =
    props.story.img_url !== null ? props.story.img_url : imgArr[rand];

  return (
    <div className="mt-4">
      {/* <img
        src=""
        alt="Image from a refugee story"
      /> */}
      <Card>
        <CardImg top width="100%" src={imgSrc} alt="Card image cap" />
        <CardBody>
          <CardText>
            {props.story.text
              .split('.')[0]
              .split(' ')
              .slice(0, 10)
              .join(' ') + '...'}
          </CardText>
          {/* button needs an onClick */}
          <Button color="success">Read More</Button>{' '}
        </CardBody>
      </Card>
    </div>
  );
};

export default StoryCard;
