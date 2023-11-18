export const compareDate = (date: Date) => {
    if (date.toLocaleString().split("T")[0] === new Date().toISOString().split("T")[0]) {
        return 0
    }

    let date1 = new Date(date).getTime();
    let date2 = new Date().getTime();

    if (date1 < date2) {
        return 1
    } else if (date1 > date2) {
        return -1
    } else {
        return 0
    }
}