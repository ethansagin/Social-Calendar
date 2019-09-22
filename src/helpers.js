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
    }else{
        const meetupList = friend.meetups.sort((a, b) => (a.date < b.date) ? 1 : -1)
        const meetupDate = new Date(meetupList[0].date)

        if(friend.meetups.length === 1){ 
            if(meetupDate < currentDate){
                return formatDate(meetupList[0].date)
            }else{
                return 'You have no prior meetups listed!'
            }
        }else if(friend.meetups.length > 1){
            if(meetupDate < currentDate){
                return formatDate(meetupList[0].date)
            }else{
                return formatDate(meetupList[1].date)
            }
        }
    }
}

export const findUpcomingBirthdays = (friends) => {
    return friends.filter(f => {
        const bDate = new Date(f.birthday)
        const currentDate = new Date()

        if((bDate.getMonth() - currentDate.getMonth()) === 0 || (bDate.getMonth() - currentDate.getMonth()) === 1) {
            return f
        }
    })
}

