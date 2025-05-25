// Specifies which positioning as well as orientation of segments,
export const segments = [
  { horizontal: true, x: 1, y: 0 },
  { horizontal: false, x: 6, y: 1 },
  { horizontal: false, x: 6, y: 7 },
  { horizontal: true, x: 1, y: 12 },
  { horizontal: false, x: 0, y: 7 },
  { horizontal: false, x: 0, y: 1 },
  { horizontal: true, x: 1, y: 6 },
];

// Specifies which segments should be filled based on what number was passed to the 'Digit' component.
export const activeSegments = [
  [0, 1, 2, 3, 4, 5],
  [1, 2],
  [0, 1, 3, 4, 6],
  [0, 1, 2, 3, 6],
  [1, 2, 5, 6],
  [0, 2, 3, 5, 6],
  [0, 2, 3, 4, 5, 6],
  [0, 1, 2],
  [0, 1, 2, 3, 4, 5, 6],
  [0, 1, 2, 3, 5, 6],
];