
import './weekdays.css'
export const WeekDays = ()=>{
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
return (
    <div className="weekdays">
    {days.map((day) => {
      return <div className="week-d">{day}</div>;
    })}
  </div>
)
}