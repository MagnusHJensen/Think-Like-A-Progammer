import { Flex, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import StatisticsDisplay from "./components/StatisticsDisplay";
import Tile from "./components/Tile";

export default function SlidingTile() {
  const [tiles, setTiles] = useState<number[][]>([[]]);
  const [movesMade, setMovesMade] = useState(0);

  useEffect(() => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    array.sort(() => Math.random() - 0.5);
    const finalArray = [];
    finalArray.push(array.splice(0, 3));
    finalArray.push(array.splice(0, 3));
    finalArray.push(Array.prototype.concat(array.splice(0, 2), [0]));

    setTiles(finalArray);
  }, []);

  function onTileClick(tile: number) {
    setMovesMade(movesMade + 1);
    const rowIndexEmpty = tiles.findIndex((row) => row.includes(0)) ?? [];
    const columnIndexEmpty = tiles[rowIndexEmpty].findIndex((val) => val === 0);

    const rowIndex = tiles.findIndex((row) => row.includes(tile)) ?? [];
    const columnIndex = tiles[rowIndex].findIndex((val) => val === tile);

    const tilesCopy = [...tiles];
    tilesCopy[rowIndexEmpty][columnIndexEmpty] = tile;
    tilesCopy[rowIndex][columnIndex] = 0;
    setTiles(tilesCopy);

    if (isGameWon()) {
      console.log("You won!");
    }
  }

  function isTileValid(tile: number): boolean {
    const rowIndex = tiles.findIndex((row) => row.includes(tile)) ?? [];
    const columnIndex = tiles[rowIndex].findIndex((val) => val === tile);

    let isValid = false;
    for (let y = -1; y <= 1; y++) {
      if (rowIndex + y >= 0 && rowIndex + y < tiles.length && y != 0) {
        if (tiles[rowIndex + y][columnIndex] === 0) {
          isValid = true;
          break;
        }
      }
    }

    if (isValid) {
      return isValid;
    }

    for (let x = -1; x <= 1; x++) {
      if (
        columnIndex + x >= 0 &&
        columnIndex + x < tiles[rowIndex].length &&
        x != 0
      ) {
        if (tiles[rowIndex][columnIndex + x] === 0) {
          isValid = true;
          break;
        }
      }
    }

    return isValid;
  }

  function isGameWon() {
    return (
      JSON.stringify(tiles) ===
      JSON.stringify([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 0],
      ])
    );
  }

  return (
    <Flex mt="50px" flexDir="column" alignItems="center">
      <SimpleGrid columns={3} maxW="50%" columnGap={1} rowGap={1}>
        {tiles.map((rows) =>
          rows.map((val) => {
            return (
              <Tile
                number={val}
                key={val}
                onTileClick={onTileClick}
                isTileValid={isTileValid(val)}
              />
            );
          })
        )}
      </SimpleGrid>
      <StatisticsDisplay moves={movesMade} />
    </Flex>
  );
}
