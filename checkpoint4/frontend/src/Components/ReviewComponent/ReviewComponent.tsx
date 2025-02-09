import { useState } from 'react';
import styles from './ReviewComponent.module.scss'

const ReviewComponent = ({reviews}: {reviews: any}) => {

  console.log(reviews);
  // console.log(localStorage.getItem('review_list'));

  return (
    <>
      <main className={styles.Main}>
        <section className={styles.TableHeader}>
          <h1 className={styles.Heading}>Reviews</h1>
          <h1 className={styles.Heading}>Prediction</h1>
        </section>
        <section className={styles.ReviewContainer}>
          <ul className={styles.UserReviewContainer}>
            jkjvei
            {reviews.length > 0 && reviews.map((reviewItem: any, id: number) => {
              return (
                <li key={id} className={styles.ReviewItem}>
                  {reviewItem.color}
                </li>
              )
            })}
          </ul>
          <ul className={styles.UserReviewPrediction}>
            <li className={styles.ReviewItem}>
              Review No x
            </li>
            <li className={styles.ReviewItem}>
              Review No x
            </li>
            <li className={styles.ReviewItem}>
              Review No x
            </li>
            <li className={styles.ReviewItem}>
              Review No x
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default ReviewComponent;