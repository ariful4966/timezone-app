import { useEffect, useState } from "react";
import { TIMEZONE_OFFSET } from "../../../constants/timezone";
import { getOffset, getTimezone } from "../../../utils/timezone";

const ClockForm = ({
  values = { title: "", timezone: "UTC", offset: 0 },
  handleClock,
  title = true,
  edit = false,
}) => {
  const [formValues, setFormValues] = useState({ ...values });

  useEffect(() => {
    if (TIMEZONE_OFFSET[formValues.timezone]) {
      setFormValues((prev) => ({
        ...prev,
        offset: TIMEZONE_OFFSET[formValues.timezone],
      }));
    }
  }, [formValues.timezone]);

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "offset") {
      value = parseInt(value) * 60;
    }

    updateClock({
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClock(values);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Enter Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formValues.title}
          onChange={handleChange}
          disabled={!title}
        />
      </div>
      <div>
        <label htmlFor="timezone">Enter Timezone</label>
        <select
          name="timezone"
          id="timezone"
          onChange={handleChange}
          value={formValues.timezone}
        >
          {getTimezone().map((zone) => (
            <option key={zone} value={zone}>
              {zone}
            </option>
          ))}
        </select>
      </div>
      {(formValues.timezone === "GMT" || formValues.timezone === "UTC") && (
        <div>
          <label htmlFor="offset">Enter Offset</label>
          <select
            name="offset"
            id="offset"
            onChange={handleChange}
            value={formValues.timezone / 60}
          >
            {getOffset().map((offset) => (
              <option key={offset} value={offset}>
                {offset}
              </option>
            ))}
          </select>
        </div>
      )}

      <button>{edit ? "Update" : "Create"}</button>
    </form>
  );
};

export default ClockForm;
