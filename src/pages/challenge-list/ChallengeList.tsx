import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ChallengeList() {
  return (
    <Flex>
      <Link to={"/challenges/sliding-tile"}>Sliding Tile</Link>
    </Flex>
  );
}
