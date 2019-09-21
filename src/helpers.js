export const formatDate = (m) => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const parts = m.split('-');
    const date = new Date(parts[0], parts[1] - 1, parts[2]); 
    const formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    return formattedDate
}
