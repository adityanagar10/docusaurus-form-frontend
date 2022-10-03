import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../../../actions/updateAction";

const Address = (props) => {
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });

  const onSubmit = (data) => {
    actions.updateAction({...state, data: data});
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <label>
        Residence Number:
        <input {...register("firstName")} />
      </label>
      <label>
      Residence Name:
        <input {...register("middleName")} />
      </label>
      <label>
      Road or Street:
        <input {...register("lastName")} />
      </label>
      <label>
      LocalityOrArea: 
        <input {...register("PAN")} />
      </label>
      <label>
      StateCode:
        <input {...register("dob")} />
      </label>
      <label>
      Country Code:
        <input {...register("dob")} />
      </label>
      <label>
      PIN code:
        <input {...register("dob")} />
      </label>
      <label>
      ZIP code:
        <input {...register("dob")} />
      </label>
      <input type="submit" />
    </form>
  );
};

export default withRouter(Address);
