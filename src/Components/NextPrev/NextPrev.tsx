import Button from '@mui/material/Button';
import styles from './nextprev.module.css'
export const NextPrev = ({prevDay,nextDay}:any) => {
    return (
        <div className={styles.nextprev}>
             <Button variant="outlined" onClick={prevDay}>{"<"}</Button>
             <Button variant="outlined" onClick={nextDay}>{">"}</Button>
        </div>
    )
}
