import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../../actions/updateAction";
const EmpInfo = (props) => {
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
  };

  useEffect(() => {
    actions.updateAction({ currentThirdLevelNav: 'emp-info', currentThirdLevelNavPages: [], nextThirdLevelNav: '/docs/income/salary/salary-details', prevThirdLevelNav: '/docs/personal-info/personal-info-details/tax-payer-details', currentPage: 0 })
}, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
       Emp Info:
      </label>
      <select {...register("empInfo")} >
       <option key='CGOV' value='CGOV'>CGOV</option>
       <option key='SGOV' value='SGOV'>SGOV</option>
       <option key='PSU' value='PSU'>PSU</option>
       <option key='PE' value='PE'>PE</option>
       <option key='PESG' value='PESG'>PESG</option>
       <option key='PEPS' value='PEPS'>PEPS</option>
       <option key='PEO' value='PEO'>PEO</option>
       <option key='OTH' value='OTH'>OTH</option>
       <option key='NA' value='NA'>NA</option>
</select>
      <input type="submit" />
    </form>
  );
};

export default withRouter(EmpInfo);
