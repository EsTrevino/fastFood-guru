import React from 'react';
import { CardColumns } from 'react-bootstrap';
import CardHolder from '../card/card';

const CardContainer = props => {
  const { reivews } = props;
  return (
    <>
      <CardColumns>
        {reivews.map(review => (
          <CardHolder key={review._id} review={review} />
        ))}
      </CardColumns>
    </>
  );
};

export default CardContainer;
