import Button from '@mui/material/Button';

export const Label = ({click}:any) => {
    return (
        <>
            <Button variant="outlined" onClick={click}>Today</Button>
        </>
    )
}
