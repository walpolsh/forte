import React, { useState, useEffect } from "react";

export const permute = (arr, i) => arr.slice(i, arr.length).concat(arr.slice(0, i));

const permutationArray = (arr, i, arr2 = []) => {
  arr2.push(arr.slice(i, arr.length).concat(arr.slice(0, i)));
  return arr2;
};

export const chordPermutations = (s, arr = []) => {
  for (let i = 0; i < s.length; i++) {
    arr.push(permutationArray(s, i));
  }
  return arr;
};

export const mapOption = arr =>
  arr.map((x, i) => (
    <option key={i} value={i}>
      {x}
    </option>
  ));

export const mapButton = (displayFavs, favsArr, x, y) => (
  <button onClick={() => displayFavs(!favsArr)}>{!favsArr ? x : y}</button>
);

export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect((handleResize = () => setWidth(window.innerWidth)) => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return width;
}

export const favsEmpty = arr => (arr.length === 0 ? "- - Empty - - " : arr.map(x => x[2]).join(", "));
