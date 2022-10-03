import { Box, Container, Flex, Text, Link } from "@chakra-ui/react";
import { Link as RLink, Outlet } from "react-router-dom";

export default function Root(): JSX.Element {
  return (
    <>
      <Flex
        width={"100%"}
        bgColor="gray.400"
        padding="10px 20px"
        gap="20px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link as={RLink} to={"/"}>
          <Text fontSize={"2xl"}>Think Like a Programmer</Text>
        </Link>
        <Box>
          <Link as={RLink} to={"/challenges"}>
            <Text fontSize={"xl"}>Challenges</Text>
          </Link>
        </Box>
      </Flex>
      <Container maxWidth={"90vw"}>
        <Outlet />
      </Container>
    </>
  );
}
