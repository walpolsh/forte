export const closedSeventh = chord => [chord[0], chord[1], chord[2], chord[3]];
export const drop2 = chord => [chord[2], chord[0], chord[3], chord[1]];
export const drop3 = chord => [chord[0], chord[3], chord[1], chord[2]];
export const drop23 = chord => [chord[0], chord[1], chord[3], chord[2]];
export const drop24 = chord => [chord[3], chord[1], chord[0], chord[2]];
export const doubleDrop24 = chord => [chord[0], chord[3], chord[2], chord[1]];

export const Cycle2 = [0, 1, 2, 3, 4, 5, 6];
export const Cycle3 = [0, 2, 4, 6, 1, 3, 5];
export const Cycle4 = [0, 3, 6, 2, 5, 1, 4];
export const Cycle5 = [0, 4, 1, 5, 2, 6, 3];
export const Cycle6 = [0, 5, 3, 1, 6, 4, 2];
export const Cycle7 = [0, 6, 5, 4, 3, 2, 1];

export const Cycles = [Cycle2, Cycle3, Cycle4, Cycle5, Cycle6, Cycle7];
