import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

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
  background-color: #dae1e4;
  height: 150px;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
`;
const PaletteTitle = styled.h5`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  color: black;
  padding: 0.5rem 0 1.5rem;
  font-size: 1rem;
  position: relative;
`;
const Emoji = styled.span`
  margin-left: 0.5rem;
  font-size: 1.5rem;
`;
const MiniColorDiv = styled.div`
  height: 25%;
  width: 20%;
  display: inline-block;
  margin: 0 auto;
  position: relative;
  margin-bottom: -3px;
`;

const MiniPalette = ({ paletteName, emoji, colors, id }) => {
  const history = useNavigate();

  const goToPalette = (e) => {
    e.preventDefault();
    history(`/palette/${id}`);
  };

  const miniColorBoxes = colors.map((color) => (
    <MiniColorDiv style={{ backgroundColor: color.color }} key={uuidv4()} />
  ));

  return (
    <RootDiv onClick={goToPalette}>
      <ColorDiv>{miniColorBoxes}</ColorDiv>
      <PaletteTitle>
        {paletteName} <Emoji>{emoji}</Emoji>
      </PaletteTitle>
    </RootDiv>
  );
};

export default MiniPalette;
