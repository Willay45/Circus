export default function playSound(src) {
  const sources = {
    horn: require("./sound/horn.mp3"),
    clutch: require("./sound/clutch.mp3")
  };

  new Audio(sources[src]).play().catch(error => 0);
}