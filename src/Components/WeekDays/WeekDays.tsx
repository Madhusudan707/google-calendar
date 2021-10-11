

export const WeekDays = ()=>{
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
return (
    <div style={{ display: "flex", marginLeft: "50px" }}>
    {days.map((day) => {
      return <div style={{ width: "100px", height: "50px" }}>{day}</div>;
    })}
  </div>
)
}