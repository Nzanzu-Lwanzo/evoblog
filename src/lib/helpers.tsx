export function getYouTubeVideoThumbnail(videoId: string, quality = 'hqdefault') {
    return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}
