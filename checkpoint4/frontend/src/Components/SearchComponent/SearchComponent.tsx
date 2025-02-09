import styles from './SearchComponent.module.scss'
import SearchComponentProps, { ReviewBodyProps } from './SearchComponentProps';
import axiosInstance from '../../APIs/axiosInstance';
import { useState } from 'react';
import axios from 'axios';


const SearchComponent = ({ setReviews }: SearchComponentProps ) => {
  
  const [search, setSearch] = useState('')

  const getReviews = async (search: string) => {
    try {
      if (search.length > 0) {
        const response = await axiosInstance.get<ReviewBodyProps[]>(
          '/',
          {
            headers: { Accept: 'application/json' }  
          }
        );
        localStorage.setItem('review_list', JSON.stringify(response.data))
        setReviews(JSON.parse(localStorage.getItem('review_list')!));
      }
    } catch (error) {
      console.error("Error in getReviews:", error);
      if (axios.isAxiosError(error)) {
        console.error("Status:", error.response?.status);
        console.error("Data:", error.response?.data);
      }
      throw error;
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
          onClick={() => getReviews(search)}
          >Search</button>
        </section>
      </main>
    </>
  )
}

export default SearchComponent;