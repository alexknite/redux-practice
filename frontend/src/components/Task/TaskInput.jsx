import { Button, Flex, HStack, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { createTaskAsync } from "../../redux/taskSlice";
import { useDispatch } from "react-redux";

const TaskInput = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input) {
      dispatch(createTaskAsync(input));
      setInput("");
    }
  };
  return (
    <Flex w="100%" justifyContent="center" alignItems="center">
      <HStack w="35%" mt="30px">
        <Input
          variant="flushed"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <Button variant="surface" onClick={handleAddTask}>
          Add Task
        </Button>
      </HStack>
    </Flex>
  );
};

export default TaskInput;
