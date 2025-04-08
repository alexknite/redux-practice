import { Button, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeMovie } from "../movieSlice";

const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);
  return (
    <Flex>
      <VStack>
        <Heading size="4xl">Movie List</Heading>
        <VStack>
          {movies.length > 0 ? (
            movies.map((m) => (
              <Movie key={`movie-${m.id}`} id={m.id} name={m.name} />
            ))
          ) : (
            <Text>No movies</Text>
          )}
        </VStack>
      </VStack>
    </Flex>
  );
};

const Movie = ({ id, name }) => {
  const dispatch = useDispatch();
  const handleRemoveMovie = () => {
    dispatch(removeMovie(id));
  };
  return (
    <Flex>
      <HStack>
        <Text>{name}</Text>
        <Button onClick={handleRemoveMovie}>Delete</Button>
      </HStack>
    </Flex>
  );
};

export default MovieList;
