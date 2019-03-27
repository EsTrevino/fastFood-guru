import React from 'react';
import TableRow from './TableRow';

const Table = props => {
  const {
    reviewHistory,
    grabReviewInfoForEdit,
    grabReviewInfoForDelete,
    deleteReview
  } = props;
  return (
    <div>
      <table className="table table-hover">
        <thead className="text-center">
          <tr>
            <th scope="col" />
            <th scope="col">Resturant Name</th>
            <th scope="col">Location</th>
            <th scope="col">Date of Initial Review</th>
            <th scope="col"> Edit Review</th>
            <th scope="col"> Delete Review</th>
          </tr>
        </thead>
        <tbody>
          {reviewHistory.map(review => {
            return (
              <TableRow
                deleteReview={deleteReview}
                grabReviewInfoForDelete={grabReviewInfoForDelete}
                grabReviewInfoForEdit={grabReviewInfoForEdit}
                key={review._id}
                review={review}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
