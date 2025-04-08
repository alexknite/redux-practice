import { Button, Flex, HStack, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { addMovie } from "../movieSlice";
import { useDispatch } from "react-redux";

const MovieInput = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (input) {
      dispatch(addMovie(input));
      setInput("");
    }
  };
  return (
    <Flex>
      <HStack>
        <Input onChange={(e) => setInput(e.target.value)} value={input} />
        <Button onClick={handleAddMovie}>Add Movie</Button>
      </HStack>
    </Flex>
  );
};

export default MovieInput;
