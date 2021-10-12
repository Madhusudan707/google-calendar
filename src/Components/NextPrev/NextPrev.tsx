import Button from '@mui/material/Button';
import './nextprev.css'
export const NextPrev = ({ prevDay, nextDay }: any) => {
    return (
        <div className="nextprev">
            <Button className="prev-btn" variant="outlined" onClick={prevDay} >{"<"}</Button>
            <Button className="next-btn" variant="outlined" onClick={nextDay} >{">"}</Button>
        </div>
    )
}
