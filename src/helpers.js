export const formatDate = (d) => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const dArr = d.split('-');
    const date = new Date(dArr[0], dArr[1] - 1, dArr[2]); 
    const formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    return formattedDate
}

export const formatTime = (t) => {
    const timeObj = new Date(t)
    const min = timeObj.getMinutes()
    const hoursEU = timeObj.getHours()

    const hoursUS = (hoursEU) => {
        if(hoursEU === 0){
            return 12
        }else if(hoursEU > 0 && hoursEU < 13){
            return hoursEU
        }else{
            return hoursEU - 12
        }
    }

    const formattedTime = `${hoursUS(hoursEU)}:${min < 10 ? 0 : null}${min} ${hoursEU < 12 ? 'AM' : 'PM'}`
    return formattedTime
}
