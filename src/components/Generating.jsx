import { loading } from "../assets";

const Generating = ({ className }) => {
    const now = new Date();

const year = now.getFullYear();       // Get the year (e.g., 2024)
const month = now.getMonth() + 1;     // Get the month (0-11, so add 1)
const day = now.getDate();            // Get the day of the month (1-31)
const hours = now.getHours();         // Get the hour (0-23)
const minutes = now.getMinutes();     // Get the minutes (0-59)
const seconds = now.getSeconds();     // Get the seconds (0-59)
const milliseconds = now.getMilliseconds(); // Get milliseconds (0-999)

console.log(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
  return (
    <div
      className={`flex items-center h-[3.5rem] w-p px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
     Burma Time:   <br /> 
     <h1 className="text-n-2 p-7"> {`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`}</h1>
    </div>
  );
};

export default Generating;