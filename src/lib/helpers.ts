import { Author } from "./@type";

export function getYouTubeVideoThumbnail(videoId: string, quality = 'hqdefault') {
    return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

export function isValidEmail(email: string) {
    if (!email || typeof email !== 'string') return false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function fromEmailGetName(email: string) {

    const adress = email.split("@").at(0)

    if (!adress) return

    return adress
        .replace(/[\._\-]+/g, ' ') // replace . _ - with space
        .split(' ')                // split into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize each word
        .join(' ');

}

export function formatDateTime(dateInput: string) {
    const date = new Date(dateInput);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}.${month}.${year} à ${hours}:${minutes}`;
}


export function displayAuthorsNames(authors: Author[]) {

    let authorsLength = authors.length

    return authorsLength === 1 ?
        authors.at(0)?.name :
        `${authors.at(0)?.name} & ${authors.length - 1} autre${(authorsLength - 1) > 1 ? 's' : ''}`
}

export const fakeList = [0, 1, 2, 3, 4, 5, 6]