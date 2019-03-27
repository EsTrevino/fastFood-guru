import React from 'react';
import returnImage from '../../utils/returnImage';
import burgerKingImage from '../../assets/1024px-Burger_King_Logo.svg.png';
import mcDonaldsImage from '../../assets/900px-McDonalds_logo.svg.png';
import tacoBellImage from '../../assets/taco-bell-1-logo-png-transparent.png';
import moment from 'moment';

const TableRow = props => {
  const { review, grabReviewInfoForEdit, grabReviewInfoForDelete } = props;
  const { chainName, address, createdAt } = review;
  return (
    <tr className="text-center font-weight-light">
      <td>
        <img
          alt="logo"
          width="30"
          height="30"
          src={returnImage(
            chainName,
            burgerKingImage,
            tacoBellImage,
            mcDonaldsImage
          )}
        />
      </td>
      <td>{chainName}</td>
      <td>
        {address.split(',')[0] +
          ', ' +
          address.split(',')[1] +
          ', ' +
          address.split(',')[2]}
      </td>
      <td>{moment(createdAt).format('LLLL')}</td>
      <td>
        <button
          onClick={() => grabReviewInfoForEdit(review)}
          className="btn btn-warning btn-sm"
        >
          Edit Review
        </button>
      </td>
      <td>
        <button
          onClick={() => grabReviewInfoForDelete(review)}
          className="btn btn-danger btn-sm"
        >
          Delete Review
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
