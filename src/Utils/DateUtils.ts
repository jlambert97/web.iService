export function DateWithMoreYears(years: number) {
    let DateTimeNow = new Date()
    return new Date(DateTimeNow.setFullYear(DateTimeNow.getFullYear() + years))
}
export function DateWithMoreMonths(months: number) {
    let DateTimeNow = new Date()
    return new Date(DateTimeNow.setMonth(DateTimeNow.getMonth() + months))
}
export function DateWithMoreDays(days: number) {
    let DateTimeNow = new Date()
    return new Date(DateTimeNow.setDate(DateTimeNow.getDate() + days))
}
