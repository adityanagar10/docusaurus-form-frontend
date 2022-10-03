import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../../../../actions/updateAction";
updateAction
const NameAndPan = (props) => {
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
 
  const onSubmit = (data) => {
    actions.updateAction({...state, data: data});
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        PAN:
        <input {...register("PAN")} />
      </label>
      <label>
        Date of birth:
        <input {...register("dob")} />
      </label>
      <input type="submit" />
    </form>
  );
};

export default withRouter(NameAndPan);
