// Specifies which positioning as well as orientation of segments,
export const segments = [
  { horizontal: true, x: 1, y: 0 },
  { horizontal: false, x: 5, y: 1 },
  { horizontal: false, x: 5, y: 6 },
  { horizontal: true, x: 1, y: 10 },
  { horizontal: false, x: 0, y: 6 },
  { horizontal: false, x: 0, y: 1 },
  { horizontal: true, x: 1, y: 5 },
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

/*
Active Segments
1 = 1;2
2 = 0;1;3;4;6
3 = 0;1;2;3;6
4 = 1;2;5;6
5 = 0;2;3;5;6
6 = 0;2;3;4;5;6
7 = 0;1;2
8 = 0;1;2;3;4;5;6
9 = 0;1;2;3;5;6
*/
