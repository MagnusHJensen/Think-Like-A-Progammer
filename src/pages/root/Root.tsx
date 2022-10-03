import { Container, Flex, Text } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

export default function Root(): JSX.Element {
  return (
    <>
      <Flex width={"100%"} bgColor="gray.400" padding="10px 20px">
        <Link to={"/"}>
          <Text fontSize={"2xl"}>Think Like a Programmer</Text>
        </Link>
      </Flex>
      <Container maxWidth={"90vw"}>
        <Outlet />
      </Container>
    </>
  );
}
