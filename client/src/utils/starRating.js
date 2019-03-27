export function starRatingColor(rating) {
  if (rating > 3) {
    return 'green';
  } else if (rating === 3) {
    return 'orange';
  } else {
    return 'red';
  }
}

export function starRatingText(rating) {
  if (rating === 1) {
    return 'Dont go here. EVER';
  } else if (rating < 3) {
    return 'Not a fan';
  } else if (rating === 3) {
    return 'Meh';
  } else if (rating === 4) {
    return 'Im a fan';
  } else if (rating === 5) {
    return '10/10 would recommend';
  }
}
