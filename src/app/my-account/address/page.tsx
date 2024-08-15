"use client";
import UserAddress from "@/src/models/UserAddress";
import style from "./style.module.scss";
import { useEffect, useState } from "react";
import AppIcon from "@/src/components/AppIcon";
import AppModal from "@/src/components/AppModal";
import FormBase from "@/src/components/FormBase";
import BaseInput from "@/src/components/BaseInput";
import AppButton from "@/src/components/AppButton";
import Swal from "sweetalert2";

export default function UserAddresses() {
  const [addresses, setAddresses] = useState<UserAddress[]>([]);

  const fetchAddresses = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/get_addresses`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            document.cookie
              ?.split("; ")
              ?.find((row: string) => row.startsWith("access_token="))
              ?.split("=")[1]
          }`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data.addresses;
  };

  useEffect(() => {
    fetchAddresses().then((data) => setAddresses(data));
  }, []);

  const [selectedAddress, setSelectedAddress] = useState<UserAddress | null>(
    null
  );

  const editAddress = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/edit_address`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          document.cookie
            ?.split("; ")
            ?.find((row: string) => row.startsWith("access_token="))
            ?.split("=")[1]
        }`,
      },
      body: JSON.stringify(selectedAddress),
    }).then(() => fetchAddresses().then((data) => setAddresses(data)));
  };

  const deleteAddress = (address: UserAddress) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/user/delete_address/${address.address_id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${
                document.cookie
                  ?.split("; ")
                  ?.find((row: string) => row.startsWith("access_token="))
                  ?.split("=")[1]
              }`,
            },
          }
        ).then(() => fetchAddresses().then((data) => setAddresses(data)));
        Swal.fire("Deleted!", "Your address has been deleted.", "success");
      }
    });
  };

  return (
    <div className={style.addressList}>
      {addresses?.map((address) => (
        <div key={address.address_title} className={style.address}>
          <div className={style.addressActions}>
            <h3>{address.address_title}</h3>
            <AppIcon
              icon="ti ti-trash"
              onClick={() => {
                deleteAddress(address);
              }}
            />
            <AppIcon
              icon="ti ti-pencil"
              onClick={() => {
                setSelectedAddress(address);
              }}
            />
          </div>
          <p>{address.city}</p>
          <p>{address.country_area}</p>
          <p>{address.postal_code}</p>
          <p>{address.street_address}</p>
        </div>
      ))}
      <AppModal
        showModal={selectedAddress !== null}
        onClose={() => {
          console.log("close");

          setSelectedAddress(null);
        }}
      >
        <h2>Edit Address</h2>
        <FormBase
          rules="UserAddress"
          submit={editAddress}
          values={selectedAddress}
        >
          <BaseInput
            name="address_title"
            value={selectedAddress?.address_title}
            onChange={(e) =>
              setSelectedAddress({
                ...selectedAddress,
                address_title: e.target.value,
              })
            }
          />
          <BaseInput
            name="country_code"
            value={selectedAddress?.country_code}
            onChange={(e) =>
              setSelectedAddress({
                ...selectedAddress,
                country_code: e.target.value,
              })
            }
          />
          <BaseInput
            name="country_area"
            value={selectedAddress?.country_area}
            onChange={(e) =>
              setSelectedAddress({
                ...selectedAddress,
                country_area: e.target.value,
              })
            }
          />
          <BaseInput
            name="city"
            value={selectedAddress?.city}
            onChange={(e) =>
              setSelectedAddress({
                ...selectedAddress,
                city: e.target.value,
              })
            }
          />
          <BaseInput
            name="postal_code"
            value={selectedAddress?.postal_code}
            onChange={(e) =>
              setSelectedAddress({
                ...selectedAddress,
                postal_code: e.target.value,
              })
            }
          />
          <BaseInput
            name="street_address"
            value={selectedAddress?.street_address}
            type="textarea"
            onChange={(e) =>
              setSelectedAddress({
                ...selectedAddress,
                street_address: e.target.value,
              })
            }
          />
          <AppButton type="submit" width="100px" height="50px">
            Save
          </AppButton>
        </FormBase>
      </AppModal>
    </div>
  );
}
