import { object, string } from "yup";

const wishlistSchema = object().shape({
  wishlist_title: string().required("Title is required"),
  wishlist_context: string().required("Context is required"),
});

export default wishlistSchema;