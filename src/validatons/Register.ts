import { object, string } from "yup";

const registerSchema = object().shape({
  username: string().required("Username is required"),
  email: string().email("Invalid email").required("Email is required"),
  password: string().required("Password is required"),
  confirmPassword: string().required("Confirm password is required"),
});

export default registerSchema;