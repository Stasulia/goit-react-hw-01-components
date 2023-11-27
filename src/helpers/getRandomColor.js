// const hue = Math.random() * 360;
// const saturation = Math.random() * 100;
// const lightness = Math.random() * 100;
// const getRandomColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

// export { getRandomColor };

export function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
