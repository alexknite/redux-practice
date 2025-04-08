import { Card } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "../../taskSlice";

const Task = ({ id, name }) => {
  const dispatch = useDispatch();
  const handleRemoveTask = () => {
    dispatch(removeTask(id));
  };
  return (
    <Card.Root width="500px" variant="elevated">
      <Card.Body>
        <Card.Title
          textAlign="center"
          onClick={handleRemoveTask}
          cursor="pointer"
        >
          {name}
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default Task;
