// Use require.context to dynamically import all videos in the folder
const importAll = (r) => r.keys().map(r);
const videos = importAll(require.context('.', false, /\.(mp4)$/));

export default videos;
