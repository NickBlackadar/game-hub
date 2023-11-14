import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { GameTrailer } from "../entities/GameTrailer";

const useGameTrailer = (slug?: string) => {
  const apiClient = new APIClient<GameTrailer>(`/games/${slug}/movies`);

  return useQuery({
    queryKey: ["games", slug],
    queryFn: apiClient.getAll,
  });
};

export default useGameTrailer;
