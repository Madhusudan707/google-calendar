import {Label,Month,NextPrev} from '../'
import styles from './header.module.css'
export const Header = () => {
    return (
        <div className={styles.header}>
            <Label/>
            <Month/>
            <NextPrev/>
        </div>
    )
}
