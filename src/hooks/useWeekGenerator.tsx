import {useState,useEffect} from 'react'


export const useWeekGenerator=()=>{
    const [week, setWeek] = useState<any>([])
    // let date
    const weekObj = [
        { prev: 0, next: 6 }, 
        { prev: 1, next: 5 }, 
        { prev: 2, next: 4 }, 
        { prev: 3, next: 3 },
        { prev: 4, next: 2 },
        { prev: 5, next: 1 },
        { prev: 6, next: 0 }
    ]
    // const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

    



      function weekGen(currentDate:any) {
        let weekInf = weekObj[currentDate.getDay()];
        let arr = [];
        function prevdates(prevNo:any, currentDate:any) {
          let prev = new Date(currentDate);
          while (prevNo !== 0) {
            let prev1 = new Date(prev.setDate(prev.getDate() - 1));
            let getMonth = prev1.getMonth() + 1;
            let getDate = prev1.getDate();
            arr.unshift(
              `${getMonth > 9 ? getMonth : `0${getMonth}`}/${
                getDate > 9 ? getDate : `0${getDate}`
              }/${prev1.getFullYear()}`
            );
            prevNo--;
          }
        }
        prevdates(weekInf.prev, currentDate);
        arr.push(
          `${
            currentDate.getMonth() + 1
          }/${currentDate.getDate()}/${currentDate.getFullYear()}`
        );
        function nextdates(nextNo:any, currentDate:any) {
          let next = new Date(currentDate);
          while (nextNo !== 0) {
            let next1 = new Date(next.setDate(next.getDate() + 1));
            arr.push(
              `${next1.getMonth() + 1}/${next1.getDate()}/${next1.getFullYear()}`
            );
            nextNo--;
          }
        }
        nextdates(weekInf.next, currentDate);
        return arr;
      }
      function selectMonth() {
        if (
          new Date(week[0]).getMonth() ===
          new Date(week[week.length - 1]).getMonth()
        ) {
          let date = new Date(week[0]);
          // date = new Date(week[0]);
          return `${months[date.getMonth()]}`;
        }
        let date1 = new Date(week[0]);
        let date2 = new Date(week[week.length - 1]);
        return `${months[date1.getMonth()]} - ${months[date2.getMonth()]}`;
      }
      function dateString(dateObj:any) {
        dateObj = new Date(dateObj);
        return `${
          dateObj.getMonth() + 1
        }/${dateObj.getDate()}/${dateObj.getFullYear()}`;
      }
      function nextDay(date:any) {
        console.log("nextDay",date)
        date = new Date(date);
        return new Date(date.setDate(date.getDate() + 1));
      }
      function prevDay(date:any) {
        console.log("prevDay",date)
        date = new Date(date);
        return new Date(date.setDate(date.getDate() - 1));
      }
      function onClickToday() {
        setWeek(weekGen(new Date()));
        console.log(week)
      }
      function timeStatus(time:any) {
        let timeArr = time.split(":");
        return Number(timeArr[0]);
      }

      useEffect(() => {
        setWeek((prev:any) => weekGen(new Date()));
      }, []);


      return {onClickToday,week,setWeek,timeStatus,prevDay,nextDay,weekGen}
}