import {Month} from "../enum/Month";

export function formatDate(date: any) {
    try {
        let temp = date?.split('-')
        return `${temp[2].split("T")[0]} ${Month[Number(temp[1])]} ${temp[0]}`
    } catch (e) {
        console.log(e)
    }
}