import en from "./en";
import tr from "./tr";

export interface ITranslation {
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  dayNamesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  selectedFormat: "YYYY/MM/DD";
  dateFormat: "YYYY/MM/DD";
  monthYearFormat: "YYYY MM";
  timeFormat: "HH:mm";
  hour: "Hour";
  minute: "Minute";
  timeSelect: "Select";
  timeClose: "Close";
}

export { en, tr };
