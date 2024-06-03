// Use require.context to dynamically import all images in the folder
const importAll = (r) => {
  return r.keys().map((fileName) => {
    const image = r(fileName); // Ensure we're getting the correct path for each image
    const name = fileName.replace('./', '').replace(/\.[^/.]+$/, ''); // Remove prefix and extension
    return { image, name };
  }).sort((a, b) => {
    const aNum = parseInt(a.name.split('_')[0], 10);
    const bNum = parseInt(b.name.split('_')[0], 10);
    return aNum - bNum;
  });
};

const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/i)); // Added more extensions and case insensitive

// Strip the numerical prefix for display
const formattedImages = images.map(image => ({
  image: image.image,
  name: image.name.replace(/^\d+_/, '') // Remove the numerical prefix
}));

export default formattedImages;
