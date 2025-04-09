import { Flex, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import { fetchTasksAsync } from "../../redux/taskSlice";
import Loading from "../Layout/Loading";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    dispatch(fetchTasksAsync());
  }, [dispatch]);

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }
  return (
    <Flex mt="50px" w="100%" justifyContent="center" alignItems="center">
      <VStack gap="20px" wrap="wrap">
        {tasks.length > 0 ? (
          tasks.map((t) => (
            <Task
              key={`task-${t.id}`}
              id={t.id}
              description={t.description}
              completed={t.completed}
            />
          ))
        ) : (
          <Text>No tasks</Text>
        )}
      </VStack>
    </Flex>
  );
};

export default TaskList;
