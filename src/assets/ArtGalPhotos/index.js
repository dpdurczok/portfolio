// Use require.context to dynamically import all images in the folder
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('.', false, /\.(png)$/));

export default images; 