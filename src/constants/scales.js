import { chordPermutations } from "./helpers.js";

export const Chromatic = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
export const fullFretboard = `0.5fr 0.5fr 1.403fr 1.324fr 1.25fr 1.18fr 1.114fr 1.051fr 0.992fr 0.936fr 0.884fr 0.834fr 0.787fr 0.743fr 0.702fr 0.662fr 0.625fr 0.59fr 0.557fr 0.526fr 0.496fr 0.468fr 0.442fr 0.417fr 0.394fr 0.372fr`;
export const halfFretboard = `0.5fr 0.5fr 1.403fr 1.324fr 1.25fr 1.18fr 1.114fr 1.051fr 0.992fr 0.936fr 0.884fr 0.834fr 0.787fr 0.743fr`;
export const leftHandedString = str =>
  str
    .split(" ")
    .reverse()
    .join(" ");

export const Frets = windowWidth =>
  windowWidth < 1000
    ? ["", "0", 1, "", 3, "", 5, "", 7, "", 9, "", "", 12]
    : ["", "0", 1, "", 3, "", 5, "", 7, "", 9, "", "", 12, "", "", 15, "", 17, "", 19, "", "", 22, "", 24];

//Major
let majorChords = chordPermutations(["maj 7", "min 7", "min 7", "maj 7", "dom 7", "min 7", "dim b7"]);

const Ionian = [["1", "2", "3", "4", "5", "6", "7"], [0, 2, 4, 5, 7, 9, 11], "Major", majorChords[0]];
const Dorian = [["1", "2", "b3", "4", "5", "6", "b7"], [0, 2, 3, 5, 7, 9, 10], "Dorian", majorChords[1]];
const Phrygian = [["1", "b2", "b3", "4", "5", "b6", "b7"], [0, 1, 3, 5, 7, 8, 10], "Phrygian", majorChords[2]];
const Lydian = [["1", "2", "3", "#4", "5", "6", "7"], [0, 2, 4, 6, 7, 9, 11], "Lydian", majorChords[3]];
const Mixolydian = [["1", "2", "3", "4", "5", "6", "b7"], [0, 2, 4, 5, 7, 9, 10], "Mixolydian", majorChords[4]];
const Aeolian = [["1", "2", "b3", "4", "5", "b6", "b7"], [0, 2, 3, 5, 7, 8, 10], "Aeolian", majorChords[5]];
const Locrian = [["1", "b2", "b3", "4", "b5", "b6", "b7"], [0, 1, 3, 5, 6, 8, 10], "Locrian", majorChords[6]];
export const Major = [Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian, Locrian];
//Harmonic Minor
let harmonicMinorChords = chordPermutations(["min/maj7", "dim b7", "maj7#5", "min7", "dom7", "maj7", "dim 7"]);

const Harmonic = [
  ["1", "2", "b3", "4", "5", "b6", "7"],
  [0, 2, 3, 5, 7, 8, 11],
  "Harmonic Minor",
  harmonicMinorChords[0]
];
const LocrianNat6 = [
  ["1", "b2", "b3", "4", "b5", "6", "b7"],
  [0, 1, 3, 5, 6, 9, 10],
  "Locrian ♮6",
  harmonicMinorChords[1]
];
const IonianSharp5 = [
  ["1", "2", "3", "4", "#5", "6", "7"],
  [0, 2, 4, 5, 8, 9, 11],
  "Ionian #5",
  harmonicMinorChords[2]
];
const DorianSharp4 = [
  ["1", "2", "b3", "#4", "5", "6", "b7"],
  [0, 2, 3, 6, 7, 9, 10],
  "Dorian #4",
  harmonicMinorChords[3]
];
const PhrygianNat3 = [
  ["1", "b2", "3", "4", "5", "b6", "b7"],
  [0, 1, 4, 5, 7, 8, 10],
  "Phrygian ♮3",
  harmonicMinorChords[4]
];
const LydianSharp2 = [
  ["1", "#2", "3", "#4", "5", "6", "7"],
  [0, 3, 4, 6, 7, 9, 11],
  "Lydian #2",
  harmonicMinorChords[5]
];
const Locrianb4Alt7 = [
  ["1", "b2", "b3", "b4", "b5", "b6", "bb7"],
  [0, 1, 3, 4, 6, 8, 9],
  "Locrian b4 bb7",
  harmonicMinorChords[6]
];

export const HarmonicMinor = [
  Harmonic,
  LocrianNat6,
  IonianSharp5,
  DorianSharp4,
  PhrygianNat3,
  LydianSharp2,
  Locrianb4Alt7
];
let melodicMinorChords = chordPermutations(["min/maj7", "min7", "maj7#5", "dom7", "dom7", "dim b7", "dim b7"]);

const Melodic = [["1", "2", "b3", "4", "5", "6", "7"], [0, 2, 3, 5, 7, 9, 11], "Melodic Minor", melodicMinorChords[0]];
const Dorianb2 = [["1", "b2", "b3", "4", "5", "6", "b7"], [0, 1, 3, 5, 7, 9, 10], "Dorian b2", melodicMinorChords[1]];
const LydianAug = [["1", "2", "3", "#4", "#5", "6", "7"], [0, 2, 4, 6, 8, 9, 11], "Lydian #5", melodicMinorChords[2]];
const LydianDom = [["1", "2", "3", "#4", "5", "6", "b7"], [0, 2, 4, 6, 7, 9, 10], "Lydian b7", melodicMinorChords[3]];
const Mixolydianb6 = [
  ["1", "2", "3", "4", "5", "b6", "b7"],
  [0, 2, 4, 5, 7, 8, 10],
  "Mixolydian b6",
  melodicMinorChords[4]
];
const LocrianNat2 = [
  ["1", "2", "b3", "4", "b5", "b6", "b7"],
  [0, 2, 3, 5, 6, 8, 10],
  "Locrian ♮2",
  melodicMinorChords[5]
];
const Locrianb4 = [
  ["1", "b2", "b3", "b4", "b5", "b6", "b7"],
  [0, 1, 3, 4, 6, 8, 10],
  "Locrian b4",
  melodicMinorChords[6]
];
export const MelodicMinor = [Melodic, Dorianb2, LydianAug, LydianDom, Mixolydianb6, LocrianNat2, Locrianb4];
//Harmonic Major
let harmonicMajorChords = chordPermutations(["maj7", "dim b7", "min7", "min/maj7", "dom7", "maj7#5", "dim 7"]);

const HarmonicMaj = [
  ["1", "2", "3", "4", "5", "b6", "7"],
  [0, 2, 4, 5, 7, 8, 11],
  "Harmonic Major",
  harmonicMajorChords[0]
];
const Dorianb5 = [["1", "2", "b3", "4", "b5", "6", "b7"], [0, 2, 3, 5, 6, 9, 10], "Dorian b5", harmonicMajorChords[1]];
const Phrygianb4 = [
  ["1", "b2", "b3", "b4", "5", "b6", "b7"],
  [0, 1, 3, 4, 7, 8, 10],
  "Phrygian b4",
  harmonicMajorChords[2]
];
const Lydianb3 = [["1", "2", "b3", "#4", "5", "6", "b7"], [0, 2, 3, 6, 7, 9, 10], "Lydian b3", harmonicMajorChords[3]];
const Mixolydianb2 = [
  ["1", "b2", "3", "4", "5", "6", "b7"],
  [0, 1, 4, 5, 7, 8, 10],
  "Dorian b2",
  harmonicMajorChords[4]
];

const LydianSharp2Sharp5 = [
  ["1", "#2", "3", "#4", "#5", "6", "7"],
  [0, 3, 4, 6, 8, 9, 11],
  "Lydian #2 #5",
  harmonicMajorChords[5]
];
const Locrianbb7 = [
  ["1", "b2", "b3", "4", "b5", "b6", "bb7"],
  [0, 1, 3, 4, 6, 8, 9],
  "Locrian bb7",
  harmonicMajorChords[6]
];

export const HarmonicMajor = [
  HarmonicMaj,
  Dorianb5,
  Phrygianb4,
  Lydianb3,
  Mixolydianb2,
  LydianSharp2Sharp5,
  Locrianbb7
];

// Hungarian Major
let hungarianMajorChords = chordPermutations(["dom7", "dim 7", "dim b7", "dim b7", "min/maj7b5", "min7", "min/bb7"]);

const HungarianMaj = [
  ["1", "#2", "3", "#4", "5", "6", "b7"],
  [0, 3, 4, 6, 7, 9, 10],
  "Hungarian Major",
  hungarianMajorChords[0]
];
const Altb6bb7 = [
  ["1", "b2", "b3", "b4", "b5", "bb6", "bb7"],
  [0, 1, 3, 4, 6, 7, 9],
  "Alt b6 bb7",
  hungarianMajorChords[1]
];
const Locrian27 = [
  ["1", "2", "b3", "4", "b5", "b6", "7"],
  [0, 2, 3, 5, 6, 8, 11],
  "Locrian ♮2 ♮7",
  hungarianMajorChords[2]
];
const Alt6 = [["1", "b2", "b3", "b4", "b5", "6", "b7"], [0, 1, 3, 4, 6, 9, 10], "Alt ♮6", hungarianMajorChords[3]];
const MelodicAugented = [
  ["1", "2", "b3", "4", "#5", "6", "7"],
  [0, 2, 3, 5, 8, 9, 11],
  "Melodic Augmented",
  hungarianMajorChords[4]
];
const Dorianb2Sharp4 = [
  ["1", "b2", "b3", "#4", "5", "6", "b7"],
  [0, 1, 3, 6, 7, 9, 10],
  "Dorian b2 #4",
  hungarianMajorChords[5]
];
const LydianAugSharp3 = [
  ["1", "b2", "b3", "b4", "5", "b6", "bb7"],
  [0, 1, 3, 4, 7, 8, 9],
  "Lydian Augmented #3",
  hungarianMajorChords[6]
];

// [0, 2, 4, 5, 7, 9, 11]

export const HungarianMajor = [
  HungarianMaj,
  Altb6bb7,
  Locrian27,
  Alt6,
  MelodicAugented,
  Dorianb2Sharp4,
  LydianAugSharp3
];

// Hungarian minor

let hungarianMinorChords = chordPermutations([
  "min/maj7",
  "maj7/b5",
  "maj7/#5",
  "dim 7/sus2",
  "maj7",
  "maj7",
  "min/bb7"
]);

const HungarianMin = [
  ["1", "2", "b3", "#4", "5", "b6", "7"],
  [0, 2, 3, 6, 7, 8, 11],
  "Hungarian Minor",
  hungarianMinorChords[0]
];
const Oriental = [["1", "b2", "3", "4", "b5", "6", "b7"], [0, 1, 4, 5, 6, 9, 10], "Oriental", hungarianMinorChords[1]];
const IonianAugmented2 = [
  ["1", "#2", "3", "4", "#5", "6", "7"],
  [0, 3, 4, 5, 8, 9, 11],
  "Ionian Augmented 2",
  hungarianMinorChords[2]
];
const Locrainbb3bb7 = [
  ["1", "b2", "bb3", "4", "b5", "b6", "bb7"],
  [0, 1, 2, 5, 6, 8, 9],
  "Locrain bb3 bb7",
  hungarianMinorChords[3]
];
const DoubleHarmonic = [
  ["1", "b2", "3", "4", "5", "b6", "7"],
  [0, 1, 4, 5, 7, 8, 11],
  "Double Harmonic",
  hungarianMinorChords[4]
];
const LydianSharp2Sharp6 = [
  ["1", "#2", "3", "#4", "5", "#6", "7"],
  [0, 3, 4, 6, 7, 10, 11],
  "Lydian #2 #6",
  hungarianMinorChords[5]
];
const Phyrgianb4bb7 = [
  ["1", "b2", "b3", "b4", "5", "b6", "bb7"],
  [0, 1, 3, 4, 7, 8, 9],
  "Phyrgian b4 bb7",
  hungarianMinorChords[6]
];

export const HungarianMinor = [
  HungarianMin,
  Oriental,
  IonianAugmented2,
  Locrainbb3bb7,
  DoubleHarmonic,
  LydianSharp2Sharp6,
  Phyrgianb4bb7
];

// Neapolitan Minor
let neapolitanMinorChords = chordPermutations(["min/maj7", "maj7", "dom7", "min7", "dom7/b5", "maj7", "dim 7/sus2"]);

const Neapolitan = [
  ["1", "b2", "b3", "4", "5", "b6", "7"],
  [0, 1, 3, 5, 7, 8, 11],
  "Neapolitan Minor",
  neapolitanMinorChords[0]
];
const LydianSharp6 = [
  ["1", "2", "3", "#4", "5", "#6", "7"],
  [0, 2, 4, 6, 7, 10, 11],
  "Lydian #6",
  neapolitanMinorChords[1]
];
const DominantSharp5 = [
  ["1", "2", "3", "4", "#5", "6", "b7"],
  [0, 2, 4, 5, 8, 9, 11],
  "Dominant #5",
  neapolitanMinorChords[2]
];
const AeoleanSharp4 = [
  ["1", "2", "b3", "#4", "5", "b6", "b7"],
  [0, 2, 3, 6, 7, 8, 10],
  "Aeolean #4",
  neapolitanMinorChords[3]
];
const LocrianNat3 = [
  ["1", "b2", "3", "4", "b5", "b6", "b7"],
  [0, 1, 4, 5, 6, 8, 10],
  "Locrian ♮3",
  neapolitanMinorChords[4]
];
const IonianSharp2 = [
  ["1", "#2", "3", "4", "5", "6", "7"],
  [0, 3, 4, 5, 7, 9, 11],
  "Ionian #2",
  neapolitanMinorChords[5]
];
const Altb3bb7 = [
  ["1", "b2", "bb3", "b4", "b5", "b6", "bb7"],
  [0, 1, 2, 4, 6, 8, 9],
  "Alt b3 bb7",
  neapolitanMinorChords[6]
];

export const NeapolitanMinor = [
  Neapolitan,
  LydianSharp6,
  DominantSharp5,
  AeoleanSharp4,
  LocrianNat3,
  IonianSharp2,
  Altb3bb7
];

//Neapolitan Major

let neapolitanMajorChords = chordPermutations([
  "min/maj7",
  "maj7/#5",
  "dom7/#5",
  "dom7",
  "dom7/b5",
  "dim 7",
  "dim 7/sus2"
]);

const NeapolitanMaj = [
  ["1", "b2", "b3", "4", "5", "6", "7"],
  [0, 1, 3, 5, 7, 9, 11],
  "Neapolitan Major",
  neapolitanMajorChords[0]
];
const LydianAugSharp6 = [
  ["1", "2", "3", "#4", "#5", "#6", "7"],
  [0, 2, 4, 6, 8, 10, 11],
  "Lydian Augmented #6",
  neapolitanMajorChords[1]
];
const LydianDomSharp5 = [
  ["1", "2", "3", "#4", "#5", "#6", "7"],
  [0, 2, 4, 6, 8, 10, 11],
  "Lydian Dominant #5",
  neapolitanMajorChords[2]
];
const LydianMinor = [
  ["1", "2", "3", "#4", "#5", "6", "b7"],
  [0, 2, 4, 6, 8, 9, 10],
  "Lydian Minor",
  neapolitanMajorChords[3]
];
const MajorLocrian = [
  ["1", "2", "3", "4", "b5", "b6", "b7"],
  [0, 2, 4, 5, 6, 8, 10],
  "Major Locrian",
  neapolitanMajorChords[4]
];
const AltNat2 = [["1", "2", "b3", "b4", "b5", "b6", "b7"], [0, 2, 3, 4, 6, 8, 10], "Alt ♮2", neapolitanMajorChords[5]];
const AltNat3 = [
  ["1", "b2", "bb3", "b4", "b5", "b6", "b7"],
  [0, 1, 2, 4, 6, 8, 10],
  "Alt ♮2",
  neapolitanMajorChords[6]
];

export const NeapolitanMajor = [
  NeapolitanMaj,
  LydianAugSharp6,
  LydianDomSharp5,
  LydianMinor,
  MajorLocrian,
  AltNat2,
  AltNat3
];

const Hirojoshi1 = [["1", "2", "b3", "5", "b6"], [0, 2, 3, 7, 8], "Hirojoshi", neapolitanMinorChords[1]];
const Hirojoshi2 = [["1", "b2", "4", "b5", "b7"], [0, 1, 5, 6, 10], "Hirojoshi Mode 2", neapolitanMinorChords[1]];
const Hirojoshi3 = [["1", "3", "4", "6", "7"], [0, 4, 5, 9, 11], "Hirojoshi Mode 3", neapolitanMinorChords[1]];
const Hirojoshi4 = [["1", "b2", "4", "5", "b6"], [0, 1, 5, 7, 8], "Hirojoshi Mode 4", neapolitanMinorChords[1]];
const Hirojoshi5 = [["1", "2", "#4", "5", "7"], [0, 4, 6, 7, 11], "Hirojoshi Mode 5", neapolitanMinorChords[1]];

export const Hirojoshi = [Hirojoshi1, Hirojoshi2, Hirojoshi3, Hirojoshi4, Hirojoshi5];

const KuMode1 = [["1", "2", "b3", "5", "6"], [0, 2, 3, 7, 9], "Kumoi", neapolitanMinorChords[1]];
const KuMode2 = [["1", "b2", "4", "5", "b7"], [0, 1, 5, 7, 10], "Kumoi Mode 2", neapolitanMinorChords[1]];
const KuMode3 = [["1", "3", "b5", "6", "7"], [0, 1, 6, 9, 11], "Kumoi Mode 3", neapolitanMinorChords[1]];
const KuMode4 = [["1", "2", "4", "5", "b6"], [0, 2, 5, 7, 8], "Kumoi Mode 4", neapolitanMinorChords[1]];
const KuMode5 = [["1", "b3", "b4", "b5", "b7"], [0, 3, 5, 6, 10], "Kumoi Mode 5", neapolitanMinorChords[1]];

export const Kumoi = [KuMode1, KuMode2, KuMode3, KuMode4, KuMode5];

const MinorPenta = [["1", "b3", "4", "5", "b7"], [0, 3, 5, 7, 10], "Pentatonic", neapolitanMinorChords[1]];
const MajorPenta = [["1", "2", "3", "5", "6"], [0, 2, 4, 7, 9], "Major Pentatonic", neapolitanMinorChords[1]];
const Mode3 = [["1", "2", "4", "5", "b7"], [0, 2, 5, 7, 10], "Pentatonic Mode 3", neapolitanMinorChords[1]];
const Mode4 = [["1", "b3", "4", "#5", "b7"], [0, 3, 5, 8, 10], "Pentatonic Mode 4", neapolitanMinorChords[1]];
const Mode5 = [["1", "2", "4", "5", "6"], [0, 2, 5, 7, 9], "Pentatonic Mode 5", neapolitanMinorChords[1]];

export const Pentatonic = [MinorPenta, MajorPenta, Mode3, Mode4, Mode5];

let bebopDomChords = chordPermutations(["dom7", "min/maj6", "maj6/b4", "maj7", "dom7", "min7", "maj7", "min/maj7b5"]);

// 1  2  3  4  5  6  7
//[0, 2, 4, 5, 7, 9, 11]

const BebopDom = [
  ["1", "2", "3", "4", "5", "6", "b7", "7"],
  [0, 2, 4, 5, 7, 9, 10, 11],
  "Bebop Dominant",
  bebopDomChords[0]
];
const Bebop2 = [
  ["1", "2", "b3", "4", "5", "b6", "6", "b7"],
  [0, 2, 3, 5, 7, 8, 9, 10],
  "Bebop Dominant 2",
  bebopDomChords[1]
];
const Bebop3 = [
  ["1", "b2", "b3", "4", "b5", "5", "b6", "b7"],
  [0, 1, 3, 5, 6, 7, 8, 10],
  "Bebop Dominant 3",
  bebopDomChords[2]
];
const Bebop4 = [
  ["1", "2", "3", "4", "b5", "5", "6", "7"],
  [0, 2, 4, 5, 6, 7, 9, 11],
  "Bebop Dominant 4",
  bebopDomChords[3]
];
const Bebop5 = [
  ["1", "2", "b3", "3", "4", "5", "6", "b7"],
  [0, 2, 3, 4, 5, 7, 9, 11],
  "Bebop Dominant 5",
  bebopDomChords[4]
];
const Bebop6 = [
  ["1", "b2", "2", "b3", "4", "5", "b6", "b7"],
  [0, 1, 2, 3, 5, 7, 8, 10],
  "Bebop Dominant 6",
  bebopDomChords[5]
];
const Bebop7 = [
  ["1", "b2", "2", "3", "#4", "5", "6", "7"],
  [0, 1, 2, 4, 6, 7, 9, 11],
  "Bebop Dominant 7",
  bebopDomChords[6]
];
const Bebop8 = [
  ["1", "b2", "b3", "4", "b5", "b6", "b7", "7"],
  [0, 1, 3, 5, 6, 8, 10, 11],
  "Bebop Dominant 8",
  bebopDomChords[7]
];

export const BebopDominant = [BebopDom, Bebop2, Bebop3, Bebop4, Bebop5, Bebop6, Bebop7, Bebop8];

const WholeTone = [["1", "2", "3", "#4", "#5", "#6"], [0, 2, 4, 6, 8, 10], "Whole Tone", neapolitanMinorChords[1]];
const HalfWhole = [
  ["1", "b2", "b3", "3", "#4", "5", "6", "b7"],
  [0, 1, 3, 4, 6, 7, 9, 10],
  "Half Whole Diminished",
  neapolitanMinorChords[2]
];
const WholeHalf = [
  ["1", "2", "b3", "4", "b5", "b6", "6", "7"],
  [0, 2, 3, 5, 6, 8, 9, 11],
  "Whole Half Diminished",
  neapolitanMinorChords[3]
];
const Augmented = [["1", "#2", "3", "5", "b6", "7"], [0, 3, 4, 7, 8, 11], "Augmented", neapolitanMinorChords[1]];
const Augmented2 = [["1", "b2", "3", "4", "#5", "6"], [0, 1, 4, 5, 8, 9], "Augmented 2", neapolitanMinorChords[1]];

export const Symmetrical = [WholeTone, HalfWhole, WholeHalf, Augmented, Augmented2];

export const Scales = [
  Major,
  HarmonicMinor,
  MelodicMinor,
  HarmonicMajor,
  HungarianMajor,
  HungarianMinor,
  NeapolitanMinor,
  NeapolitanMajor,
  BebopDominant,
  Hirojoshi,
  Kumoi,
  Pentatonic,
  Symmetrical
];
