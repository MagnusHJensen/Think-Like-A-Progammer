import { Box, Button, Center } from "@chakra-ui/react";

type TileProps = {
  number: number;
  isTileValid: boolean;
  onTileClick: (number: number) => void;
};

export default function Tile({ number, isTileValid, onTileClick }: TileProps) {
  function onClick() {
    onTileClick(number);
  }

  if (number === 0) {
    return <Box width="10vw" height="10vw" />;
  }

  return (
    <Button
      borderRadius={0}
      disabled={!isTileValid}
      width={"10vw"}
      height={"10vw"}
      variant="ghost"
      bgColor={"#00ff2" + number}
      _hover={isTileValid ? { border: "red 1px solid" } : {}}
      _disabled={{ bgColor: "#00ff2" + number, cursor: "not-allowed" }}
      onClick={onClick}
    >
      <Box>
        <Center height="100%" alignItems="center">
          {number}
        </Center>
      </Box>
    </Button>
  );
}
