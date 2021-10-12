
import {useWeekGenerator} from '../../hooks/'
import {Header,WeekDays,Grid} from '../../Components'
import './calendar.css'
export const Calendar=()=>{
    const {onClickToday,prevDay,nextDay,setWeek,weekGen,week,selectMonth} = useWeekGenerator()
    return (
        <div className="calendar">
            <Header  selectMonth={selectMonth} monthWeek={week} click={()=>{onClickToday()}} prevClick={()=>{setWeek(weekGen(prevDay(week[0])))}} nextClick={()=>{setWeek(weekGen(nextDay(week[week.length-1])))}}/>
            <WeekDays/>
            <Grid week={week}/>
        </div>
    )
}