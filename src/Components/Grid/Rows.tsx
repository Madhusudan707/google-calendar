import { Box } from "@material-ui/core";

export const Rows = () => {
    const time=["12AM","1AM","2AM","3AM","4AM","5AM","6AM","7AM","8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM","10PM","11AM"]
    return (
        <div style={{ display: "flex" }}>
            {Array(7)
                .fill(0)
                .map((_, index) => {
                    return (
                        <>
                        <span>{index===0?`${time[++index]}`:""}</span>
                        
                        <Box
                            sx={{
                                width: 100,
                                height: 50,
                                border: "1px solid rgb(209, 213, 219)",
                                flexDirection: "row",
                                bgcolor: "white"

                            }}
                        >
                            
                        </Box>
                        </>
                    );
                })}
        </div>
    )
}
