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
  padding: 0.75rem 0;
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

const MiniPalette = (props) => {
  const { paletteName, emoji, colors } = props;

  const miniColorBoxes = colors.map((color) => (
    <MiniColorDiv style={{ backgroundColor: color.color }} key={color.name} />
  ));

  return (
    <RootDiv>
      <ColorDiv>{miniColorBoxes}</ColorDiv>
      <PaletteTitle>
        {paletteName} <Emoji>{emoji}</Emoji>
      </PaletteTitle>
    </RootDiv>
  );
};

export default MiniPalette;
