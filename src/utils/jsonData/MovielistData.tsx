import { ReactNode } from "react";
import { AiFillHeart, AiFillStar, AiOutlineOrderedList } from "react-icons/ai";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

export const movieListIcons: Array<{ icon: ReactNode }> = [
  { icon: <AiOutlineOrderedList size={18} color="#fff" /> },
  { icon: <BsFillBookmarkCheckFill size={18} color="#fff" /> },
  { icon: <AiFillHeart size={18} color="#fff" /> },
  { icon: <AiFillStar size={18} color="#fff" /> },
];
