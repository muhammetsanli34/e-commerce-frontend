import { string, ref, object } from "yup";

const registerSchema = object().shape({
  username: string().required("Username is required"),
  email: string().email("Invalid email").required("Email is required"),
  password: string().required("Password is required"),
  confirm_password: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
  name: string().required("Name is required"),
  surname: string().required("Surname is required"),
  phone_number: string().required("Phone number is required"),
});

export default registerSchema;
