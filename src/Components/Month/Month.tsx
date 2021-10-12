import './month.css'
export const Month = ({ week, selectMonth }: any) => {
    return (
        <div>
            <span className="month">{week.length > 0 && selectMonth()}</span>
        </div>
    )
}
