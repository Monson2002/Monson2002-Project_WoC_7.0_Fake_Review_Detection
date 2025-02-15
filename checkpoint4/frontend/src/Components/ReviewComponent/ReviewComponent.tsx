import styles from './ReviewComponent.module.scss'
import { ReviewBodyProps } from '../SearchComponent/SearchComponent.types';
import { TailSpin } from "react-loader-spinner";
import ReviewItem from '../ReviewItem/ReviewItem';

const ReviewComponent = (
  {reviews, 
  loading}: 
  {reviews: ReviewBodyProps[] | string, 
  loading: boolean}) => {
  
  return (
    <>
      {loading ? (
        <div className={styles.Loader}>
          <TailSpin color="white" radius={"0px"}/>
        </div>
      ) : 
      <main className={styles.Main}>
        <section className={styles.TableHeader}>
          <h1 className={styles.Heading}>Reviews</h1>
          <h1 className={styles.Heading}>Prediction</h1>
        </section>
        <section className={styles.ReviewContainer}>
          <ul className={styles.UserReviewContainer}>
            {typeof reviews === 'object' && reviews.length > 0 && reviews.map((reviewItem: any, id: number) => {
              return (
                <ReviewItem key={id} data={reviewItem}/>
              )
            })}
          </ul>
        </section>
      </main>}
    </>
  )
}

export default ReviewComponent;