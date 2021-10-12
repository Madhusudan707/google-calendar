import { Event } from '../'
import { useWeekGenerator } from '../../hooks'
import data from '../../data.json'
import './grid.css'
export const Grid = ({ week }: any) => {
    const Data = data.events;
    const { timeStatus } = useWeekGenerator();

    return (
        <div className="grid">
            <div className="grid-row" style={{}}>
                {Array(24)
                    .fill(0)
                    .map((_, index) => {
                        const PM = `${index === 12 ? 12 : index - 12} PM`
                        const AM = `${index === 0 ? 12 : index} AM`
                        return (
                            <div className="grid-time" >  {index >= 12 ? PM : AM} </div>
                        );
                    })}
            </div>

            {week.map((day: any) => {
                const monthDay = new Date(day)
                const currentDate = new Date()
                const currentDay = currentDate.getDate()
                const currentMonth = currentDate.getMonth() + 1
                const currentYear = currentDate.getFullYear()
                const dayArr = day.split("/")
                

                const isCurrentDate = () => {
                    return (Number(dayArr[2]) === currentYear && Number(dayArr[1]) === currentDay && Number(dayArr[0]) === currentMonth)
                }
                return (
                    <div className="grid-week">
                        <div className="grid-day" >
                            <span className={`${isCurrentDate() && "currentDateStyle"} grid-current-day`} >{monthDay.getDate()}</span></div>
                        {Array(24)
                            .fill(0)
                            .map((item, index) => {
                                return (
                                    <div className="grid-cell">
                                        {Data.filter((event) => {
                                            return (
                                                event.date === day && timeStatus(event.time) === index
                                            );
                                        }).map((events) => {
                                            return <Event event={events.event} />;
                                        })}
                                    </div>
                                );
                            })}
                    </div>
                );
            })}
        </div>
    )
}
