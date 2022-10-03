import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../../../actions/updateAction";

const AadhaarDetails = (props) => {
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction({...state, data: data});
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
       Aadhar Card Number:
        <input {...register("aadharCardNumber")} />
      </label>
      <label>
      Aadhar Enrollment ID:
        <input {...register("aadharEnrollmentId")} />
      </label>
      <input type="submit" />
    </form>
  );
};

export default withRouter(AadhaarDetails);
