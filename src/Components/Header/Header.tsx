import {Label,Month,NextPrev} from '../'
import './header.css'
export const Header = ({click,prevClick,nextClick,monthWeek,selectMonth}:any) => {
    return (
        <div className="header">
            <Label click={click}/>
            <NextPrev prevDay={prevClick} nextDay={nextClick}/>
            <Month week={monthWeek} selectMonth={selectMonth}/>
        </div>
    )
}
