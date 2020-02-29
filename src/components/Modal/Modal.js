import React from "react";
import styled from "styled-components";

export const content = (
  <div>
    <h1>Hello! Welcome to Forte</h1>
    <p>Here you will find notes color coded to match a scale degree</p>
    <p>Root Note: Red = Tonal center, note of final resolution</p>
    <p>Chord Tones: Yellow = 3rd 5th and 7th. Will sound consonant over a root note</p>
    <p>Secondary: Blue = 2nd 4th and 6th. Non-Chord Tones.</p>
    <p>With modes you change the order of the notes by cycling through them.</p>
    <p>C Major: C D E F G A B</p>
    <p>D Dorian: D E F G A B C </p>
    <p>E Dorian: E F G A B C D</p>

    <p>{`
    1st - Tonic.
2nd - Supertonic.
3rd - Mediant.
4th - Subdominant.
5th - Dominant.
6th - Submediant.
7th - Leading Tone.`}</p>
    <p>Median</p>
    <p>Chords can be extended basically by skipping every other note</p>
    <p>1 3 5 7 9 11 13 15 ect...</p>
    <p>1 3 5 - triad</p>
    <p>1 3 5 7 - seventh</p>
    <p>1 3 5 7 9 - ninth</p>
    <p>You get the picture</p>
    <p>You start on a root note and build your scale from there to the octave 12 tones higher</p>
  </div>
);
export const ModalDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${props => (props.isModalOpen ? "1" : "")};
  max-height: ${props => (props.isModalOpen ? "100%" : "0")};
  max-width: ${props => (props.isModalOpen ? "100%" : "0")};
  overflow: scroll;
  padding: ${props => (props.isModalOpen ? "15px" : "0 15px")};
  transition: all 0.4s ease-in;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  background: white;
  width: ${props => {
    switch (props.size) {
      case "lg":
        return "80";
      default:
        return "40";
    }
  }}%;
  margin: 40px auto;
`;
