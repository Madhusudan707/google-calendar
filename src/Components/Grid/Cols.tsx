import { Rows } from './Rows'

export const Cols = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ textAlign: "center" }}>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
        </div>

        {Array(25)
          .fill(0)
          .map((_, index) => {
            return (
              <div style={{ display: "flex" }}>

                <Rows />
              </div>
            );
          })}
      </div>
    </>
  )
}
