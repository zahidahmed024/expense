import { format, isThisMonth, isThisWeek } from "date-fns"

export const dateWithinWeek = (date) => {
    let fmDate = format(new Date(date), "yyy,M,d").split(',')
    return isThisWeek(new Date(fmDate[0], fmDate[1] - 1, fmDate[2]))
}
export const dateWithinMonth = (date) => {
    let fmDate = format(new Date(date), "yyy,M,d").split(',')
    return isThisMonth(new Date(fmDate[0], fmDate[1] - 1, fmDate[2]))
}