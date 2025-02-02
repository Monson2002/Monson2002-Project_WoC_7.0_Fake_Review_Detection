import styles from './App.module.scss'
import ReviewComponent from './Components/ReviewComponent/ReviewComponent'
import SearchComponent from './Components/SearchComponent/SearchComponent'

function App() {

  return (
    <>
      <main className={styles.App}>
        <SearchComponent/>
        <ReviewComponent/>
      </main>
    </>
  )
}

export default App
