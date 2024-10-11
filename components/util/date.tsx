import { FC } from "react";
import { IDate } from "../../constant/interface";


const getFormattedDate: FC<IDate> = (date) => {
    
    return date.toISOString().slice(0,10);
}

export function getdateminusdays(date: Date, days: number) {
    return new Date (date.getFullYear(), date.getMonth(), date.getDay() - days)
}


export default getFormattedDate
