import Button from '@mui/material/Button';

export const Label = ({click}:any) => {
    return (
        <>
            <Button className="button" variant="outlined" onClick={click} style={{fontSize:"24px"}}>Today</Button>
        </>
    )
}
