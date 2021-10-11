
import {useWeekGenerator} from '../../hooks/'
import {Header,WeekDays,Grid} from '../../Components'
export const Calendar=()=>{
    const {onClickToday,prevDay,nextDay,setWeek,weekGen,week} = useWeekGenerator()
    return (
        <div>
            <Header click={onClickToday} prevClick={()=>{setWeek(weekGen(prevDay(week[0])))}} nextClick={()=>{ nextDay(week[week.length - 1])}}/>
            <WeekDays/>
            <Grid/>
        </div>
    )
}