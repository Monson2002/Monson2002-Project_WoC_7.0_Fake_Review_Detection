import { useState } from 'react';
import styles from './ReviewComponent.module.scss'

const ReviewComponent = () => {
  
  const [search, setSearch] = useState('')
  
  const scrapeData = () => {
    if (search.length > 0) {
      console.log(search);
    }
  }

  return (
    <>
      <main className={styles.Main}>
        <section className={styles.TableHeader}>
          <h1 className={styles.Heading}>Reviews</h1>
          <h1 className={styles.Heading}>Prediction</h1>
        </section>
        <section className={styles.ReviewContainer}>
          <ul className={styles.UserReviewContainer}>
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