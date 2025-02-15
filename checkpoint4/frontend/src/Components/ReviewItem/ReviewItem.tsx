import styles from './ReviewItem.module.scss'
import ReviewItemTypes from './ReviewItem.types';

const ReviewItem = ({data}: {data: ReviewItemTypes}) => {
  // console.log(data);
  
  return (
    <li className={styles.ReviewItem}>
      <div className={styles.Left}>
        <div className={styles.ReviewItemSecondaryContent}>
          <h1 className={styles.ReviewTitle}>{data.reviewTitle}</h1>
          {/* <h3>{data.color.slice(0, -17)}</h3> */}
        </div>
        <p className={styles.Para}>{data.review}</p>
        <div className={styles.ReviewItemSecondaryContent}>
          <h1>--{data.name}</h1>
          <h3>{data.dateNLoc}</h3>
        </div>
      </div>
      <div className={styles.Right}>
        <p className={styles.Prediction}>{data.prediction[0] === "OR" ? 'Real' : 'Fake'}</p>
      </div>
    </li>
  )
}

export default ReviewItem;