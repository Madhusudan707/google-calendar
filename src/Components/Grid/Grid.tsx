
import { Cols } from './Cols'
import { Event } from '../'
import {useWeekGenerator} from '../../hooks'
import data from '../../data.json'
import styles from './grid.module.css'



export const Grid = () => {
    const Data = data.events;
    const {week,timeStatus} = useWeekGenerator() 
    return (
        // <div className={styles.grid}>

        //     <Cols/>
        // </div>
        <div style={{ display: "flex" }}>
            <div style={{ marginTop: "50px" }}>
                {Array(24)
                    .fill(0)
                    .map((item, index) => {
                        return (
                            <div
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    background: "lightblue",
                                    display: "flex",
                                    border: "1px solid black",
                                    alignItems: "center"
                                }}
                            >
                                {index >= 12
                                    ? `${index === 12 ? `12` : index - 12} PM`
                                    : `${index === 0 ? `12` : index} AM`}
                            </div>
                        );
                    })}
            </div>
            console.log(week)
            {week.map((day:any) => {
               
                return (
                    <div style={{ display: "flex", flexFlow: "column", color: "red" }}>
                        <div style={{ width: "100px", height: "50px" }}>{day}</div>
                        {Array(24)
                            .fill(0)
                            .map((item, index) => {
                                return (
                                    <div
                                        style={{
                                            width: "100px",
                                            height: "50px",
                                            border: "1px solid black"
                                        }}
                                    >
                                        {Data.filter((item1) => {
                                            // console.log(new Date(item1.date),new Date(day))
                                            return (
                                                item1.date === day && timeStatus(item1.time) === index
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
