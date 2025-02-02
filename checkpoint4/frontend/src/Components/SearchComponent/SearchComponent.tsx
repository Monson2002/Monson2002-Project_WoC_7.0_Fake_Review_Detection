import styles from './SearchComponent.module.scss'
import { useState } from 'react';

const SearchComponent = () => {
  
  const [search, setSearch] = useState('')
  
  const scrapeData = () => {
    if (search.length > 0) {
      console.log(search);
    }
  }

  return (
    <>
      <main className={styles.Main}>
        <section className={styles.Searchbar}>
          <input type="text" 
          id="search-field"
          className={styles.Input}
          value={search}
          onChange={
            (e) => setSearch(e.target.value)
          }
          />
          <button 
          type="submit" 
          className={styles.Button}
          onClick={() => scrapeData()}
          >Search</button>
        </section>
      </main>
    </>
  )
}

export default SearchComponent;