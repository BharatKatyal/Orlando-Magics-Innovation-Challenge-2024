export default function generateRandomPrice(zone) {
  let min, max;

  switch (zone) {
    case "Promenade":
      min = 20;
      max = 50;
      break;
    case "Loge":
      min = 50;
      max = 85;
      break;
    case "Terrace":
      min = 86;
      max = 250;
      break;
    case "Club":
      min = 280;
      max = 400;
      break;
    case "Ultimate":
      min = 401;
      max = 800;
      break;
    default:
      min = 50;
      max = 1000;
      break;
  }

  const randomPrice = Math.random() * (max - min) + min;
  return parseFloat(randomPrice.toFixed(2));
}
