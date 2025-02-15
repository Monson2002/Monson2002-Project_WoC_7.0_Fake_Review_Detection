import styles from './App.module.scss'
import ReviewComponent from './Components/ReviewComponent/ReviewComponent'
import SearchComponent from './Components/SearchComponent/SearchComponent'

import { useEffect, useState } from 'react'
import { ReviewBodyProps } from './Components/SearchComponent/SearchComponent.types'

function App() {

  const [reviews, setReviews] = useState<ReviewBodyProps[] | string>('')  
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const storedReviews = localStorage.getItem("review_list");
    if (storedReviews) {
      try {
        setReviews(JSON.parse(storedReviews));
      } catch (error) {
        console.error("Error parsing reviews from localStorage:", error);
      }
    }
  }, []);

  return (
    <>
      <main className={styles.App}>
        <SearchComponent setReviews={setReviews} setLoading={setLoading}/>
        <ReviewComponent reviews={reviews} loading={loading}/>
      </main>
    </>
  )
}

export default App
