import { format } from "date-fns";

const ClockDisplay = ({ date, title, timezone, offset }) => {
  const offsetHour = offset / 60;
  return (
    <div>
      <h1>Title: {title}</h1>
      <h3>{format(date, "yyyy-MM-dd hh:mm:ss aaaaa'm'")}</h3>
      <p>
        {timezone} |
        {offsetHour > 0
          ? `+${Math.abs(offsetHour)}`
          : `-${Math.abs(offsetHour)}`}
      </p>
    </div>
  );
};

export default ClockDisplay;
