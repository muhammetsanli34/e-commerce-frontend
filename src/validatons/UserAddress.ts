import { string, ref, object } from "yup";

const addressSchema = object().shape({
  address_title: string().required("Address title is required"),
  country_code: string().required("Country code is required"),
  country_area: string().required("Country area is required"),
  city: string().required("City is required"),
  postal_code: string().required("Postal code is required"),
  street_address: string().required("Street address is required"),
});

export default addressSchema;