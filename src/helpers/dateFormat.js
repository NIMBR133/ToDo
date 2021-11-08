export const dateFormatFunc = (date) => {
    const addZeroDate = (number) => {
        if (number < 10) {
            return ('0' + number).slice(-2)
        } else {
            return number
        }
    }
    const year = date.getFullYear()
    const month = addZeroDate(date.getMonth())
    const day = addZeroDate(date.getDate())
    const hour = addZeroDate(date.getHours())
    const minutes = addZeroDate(date.getMinutes())

    return `${day}.${month}.${year} ${hour}:${minutes}`
}
