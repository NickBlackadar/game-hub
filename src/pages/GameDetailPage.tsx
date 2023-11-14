import { Heading, Spinner, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} padding={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText description={game.description_raw} />
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer id={game.id} />
        <GameScreenshots id={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
