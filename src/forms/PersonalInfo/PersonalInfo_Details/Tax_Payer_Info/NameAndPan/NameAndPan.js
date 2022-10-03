import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../../../../actions/updateAction";
import PAN from "./PAN";
const NameAndPan = (props) => {
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction({...state, data: data});
  };

  console.log("I work")

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        First Name:
        <input {...register("firstName")} defaultValue={state.data.firstName} />
      </label>
      <label>
        Middle Name:
        <input {...register("middleName")} defaultValue={state.data.middleName} />
      </label>
      <label>
        Last Name:
        <input {...register("lastName")} defaultValue={state.data.lastName} />
      </label>
      <label>
      Country Code Mobile:
        <input {...register("countryCodeMobile")} />
      </label>
      <label>
      Mobile No:
        <input {...register("mobileNumber")} />
      </label>
      <label>
      Email Address:
        <input {...register("emailAddress")} />
      </label>
      <input type="submit" />
    </form>
  )
};

export default withRouter(NameAndPan);
