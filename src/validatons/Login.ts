import { object, string } from "yup";

const loginSchema = object().shape({
  username: string().required("Username is required"),
  password: string().required("Password is required"),
});

export default loginSchema;