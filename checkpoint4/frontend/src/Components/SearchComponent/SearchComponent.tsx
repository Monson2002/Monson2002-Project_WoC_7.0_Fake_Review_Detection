import styles from "./SearchComponent.module.scss";
import SearchComponentProps, { ReviewBodyProps } from "./SearchComponent.types";
import axiosInstance from "../../APIs/axiosInstance";
import { useState } from "react";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";

const SearchComponent = ({ setReviews, setLoading }: SearchComponentProps) => {
  const [search, setSearch] = useState("");

  const getReviews = async (search: string) => {
    try {
      if (search.length > 0) {
        setLoading(true);
        const response = await axiosInstance.get<ReviewBodyProps[]>("/", {
          headers: { Accept: "application/json" },
          params: { search },
        });
        localStorage.setItem("review_list", JSON.stringify(response.data));
        setReviews(JSON.parse(localStorage.getItem("review_list")!));
        setLoading(false);
        successAlert();
      }
    } catch (error) {
      setLoading(false);
      errorAlert();
      localStorage.setItem('review_list', '');
      setReviews('');
      console.error("Error in getReviews:", error);
      if (axios.isAxiosError(error)) {
        console.error("Status:", error.response?.status);
        console.error("Data:", error.response?.data);
      }
      throw error;
    }
  };

  const successAlert = () =>
    toast.success("🦄 Fetched Reviews Successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  const errorAlert = () =>
    toast.error("🦄 Something went Wrong!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <main className={styles.Main}>
        <section className={styles.Searchbar}>
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevents the default page reload
              getReviews(search);
            }}
          >
            <input
              type="text"
              id="search-field"
              className={styles.Input}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className={styles.Button}>
              Search
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default SearchComponent;
