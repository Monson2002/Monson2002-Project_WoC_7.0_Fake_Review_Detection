import { Dispatch, SetStateAction } from "react";

interface SearchComponentProps {
  setReviews: Dispatch<SetStateAction<ReviewBodyProps[] | string>>;
}

export interface ReviewBodyProps {
  color: string;
  dateNLoc: string;
  name: string;
  review: string;
  reviewTitle: string;
}

export default SearchComponentProps