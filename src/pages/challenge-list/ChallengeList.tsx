import { Flex, Link } from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";

export default function ChallengeList() {
  return (
    <Flex>
      <Link as={RLink} to={"/challenges/sliding-tile"}>
        Sliding Tile
      </Link>
    </Flex>
  );
}
