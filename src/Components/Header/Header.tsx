import {Label,Month,NextPrev} from '../'
import styles from './header.module.css'
export const Header = ({click,prevClick,nextClick}:any) => {
    return (
        <div className={styles.header}>
            <Label click={click}/>
            <Month/>
            <NextPrev prevDay={prevClick} nextDay={nextClick}/>
        </div>
    )
}
