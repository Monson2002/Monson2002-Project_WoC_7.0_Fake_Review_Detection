import { Dispatch, SetStateAction } from "react";

interface SearchComponentProps {
  setReviews: Dispatch<SetStateAction<ReviewBodyProps[] | string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export interface ReviewBodyProps {
  color: string;
  dateNLoc: string;
  name: string;
  review: string;
  reviewTitle: string;
  predictions: string;
}

export default SearchComponentProps