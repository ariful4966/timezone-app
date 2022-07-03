import { useState } from "react";
import ClockForm from "../ClockForm";

const defaultOffsets = [
  -11.5, -11, -10.5, -9.5, -9, -8.5, -8, 0, 1, 2, 3, 4, 5, 5.5, 6, 6.5,
];

const ClockAction = ({ local = false, clock, updateClock }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleClock = (values) => {
    console.log(values);
  };
  return (
    <div>
      <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
      {local ? <button>Create</button> : <button>Delete</button>}
      {isEdit && (
        <>
          <h3>Edit Clock</h3>
          <ClockForm
            handleClock={handleClock}
            values={clock}
            title={!local}
            edit={true}
          />
        </>
      )}
    </div>
  );
};

export default ClockAction;
