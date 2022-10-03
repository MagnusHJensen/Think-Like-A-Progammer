import { Flex, Heading, Text } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

type ErrorObject = {
  statusText: string;
  message: string;
};

export default function ErrorPage() {
  const error: ErrorObject = useRouteError() as ErrorObject;
  console.error(error);

  return (
    <Flex
      flexDir="column"
      width={"100vw"}
      height="100vh"
      justifyContent="center"
      alignItems="center"
      gap="40px"
    >
      <Heading>Oops!</Heading>
      <Text fontWeight="500">Sorry, an unexpected error has occurred.</Text>
      <Text color={"gray.500"} fontWeight="bold">
        <i>{error.statusText || error.message}</i>
      </Text>
    </Flex>
  );
}
