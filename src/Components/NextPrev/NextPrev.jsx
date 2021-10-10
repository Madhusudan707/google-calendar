import Button from '@mui/material/Button';
import styles from './nextprev.module.css'
export const NextPrev = () => {
    return (
        <div className={styles.nextprev}>
             <Button variant="outlined">{"<"}</Button>
             <Button variant="outlined">{">"}</Button>
        </div>
    )
}
