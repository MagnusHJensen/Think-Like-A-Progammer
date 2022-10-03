import { Center, Text } from "@chakra-ui/react";

type StatisticsDisplayProps = {
  moves: number;
};

export default function StatisticsDisplay({ moves }: StatisticsDisplayProps) {
  return (
    <Center>
      <Text>{moves} moves</Text>
    </Center>
  );
}
