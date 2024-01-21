export default function generateRandomPrice(zone) {
  let min, max;

  switch (zone) {
    case "Promenade":
      min = 30;
      max = 120;
      break;
    case "Loge":
      min = 80;
      max = 200;
      break;
    case "Terrace":
      min = 120;
      max = 500;
      break;
    case "Club":
      min = 800;
      max = 1500;
      break;
    case "Ultimate":
      min = 1000;
      max = 2000;
      break;
    default:
      min = 50;
      max = 1000;
      break;
  }

  const randomPrice = Math.random() * (max - min) + min;
  return parseFloat(randomPrice.toFixed(2));
}
