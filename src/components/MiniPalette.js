import styled from "@emotion/styled";

// ________________________________________________________________

const RootDiv = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  position: relative;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
`;
const ColorDiv = styled.div`
  background-color: grey;
`;
const PaletteTitle = styled.h5`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  color: black;
  padding-top: 0.5rem;
  font-size: 1rem;
  position: relative;
`;
const Emoji = styled.span`
  margin-left: 0.5rem;
  font-size: 1.5rem;
`;

const MiniPalette = (props) => {
  return (
    <RootDiv>
      <ColorDiv></ColorDiv>
      <PaletteTitle>
        {props.paletteName} <Emoji>{props.emoji}</Emoji>
      </PaletteTitle>
    </RootDiv>
  );
};

export default MiniPalette;
