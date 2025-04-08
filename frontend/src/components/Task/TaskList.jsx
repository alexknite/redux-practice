import { Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  return (
    <Flex mt="50px" w="100%" justifyContent="center" alignItems="center">
      <VStack gap="20px" wrap="wrap">
        {tasks.length > 0 ? (
          tasks.map((t) => (
            <Task key={`task-${t.id}`} id={t.id} name={t.name} />
          ))
        ) : (
          <Text>No tasks</Text>
        )}
      </VStack>
    </Flex>
  );
};

export default TaskList;
