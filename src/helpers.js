export const formatDate = (d) => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const dArr = d.split('-');
    const date = new Date(dArr[0], dArr[1] - 1, dArr[2]); 
    const formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    return formattedDate
}

export const findNextMeetup = (friend) => {
    const currentDate = new Date()

    if(friend.meetups.length === 0) {
        return 'UNSCHEDULED'
    }else{
        const meetupList = friend.meetups.sort((a, b) => (a.date < b.date) ? 1 : -1)
        const meetupDate = new Date(meetupList[0].date)
        if(meetupDate >= currentDate){
            return formatDate(meetupList[0].date)
        }else{
            return 'UNSCHEDULED'
        }
    }
}

export const findLastMeetup = (friend) => {
    const currentDate = new Date()

    if(friend.meetups.length === 0) {
        return 'You have no meetups listed!'
    }else if(friend.meetups.length === 1) {
        const meetup = new Date(friend.meetups[0].date)
        if(meetup < currentDate){
            return formatDate(friend.meetups[0].date)
        }else{
            return 'You have no prior meetups listed!'
        }    
    }else if(friend.meetups.length > 1){
        const meetup = new Date(friend.meetups[0].date)
        if(meetup < currentDate){
            return formatDate(friend.meetups[0].date)
        }else{
            return formatDate(friend.meetups[1].date)
        }
    }

}