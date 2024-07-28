import { object, ref, string } from "yup";

const accountDetail = object().shape({
  username: string().required("Username is required"),
  name: string().required("Name is required"),
  surname: string().required("Surname is required"),
  phone_number: string().required("Phone number is required"),
  email: string().email("Invalid email").required("Email is required"),
  old_password: string(),
  password: string().when("old_password", {
    is: (val) => val.length > 0,
    then: string().required("Password is required"),
  }),
  confirm_password: string().when("old_password", {
    is: (val) => val.length > 0,
    then: string().oneOf([ref("password")], "Passwords must match"),
  }),
});

export default accountDetail;
