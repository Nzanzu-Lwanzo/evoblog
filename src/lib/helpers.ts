import { type User } from "firebase/auth";

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

export function getUserFromAuthResult(user: User) {
    return {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        picture: user.photoURL
    }
}
