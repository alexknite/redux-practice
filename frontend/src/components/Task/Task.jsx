import { Card, Editable, HStack, IconButton } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteTaskAsync, updateTaskAsync } from "../../redux/taskSlice";

import { LuCheck, LuTrash } from "react-icons/lu";
import { useState } from "react";

const Task = ({ id, description, completed }) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState(description);
  const [checked, setChecked] = useState(completed);

  const handleRemoveTask = () => {
    dispatch(deleteTaskAsync(id));
  };

  const handleUpdateTask = () => {
    if (input === "") {
      setInput(description);
      return;
    }

    if (input !== description) {
      const values = { description: input };
      dispatch(updateTaskAsync({ id, values }));
    }
  };

  const handleCompleteTask = () => {
    setChecked(!checked);

    const values = { completed: !checked };
    dispatch(updateTaskAsync({ id, values }));
  };

  return (
    <Card.Root
      width="500px"
      height="100px"
      variant="elevated"
      position="relative"
    >
      <HStack position="absolute" top="10px" right="10px">
        <IconButton variant="ghost">
          <LuCheck onClick={handleCompleteTask} />
        </IconButton>
        <IconButton variant="ghost">
          <LuTrash onClick={handleRemoveTask} />
        </IconButton>
      </HStack>
      <Card.Body
        w="100%"
        h="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Card.Title textAlign="center">
          <Editable.Root
            disabled={checked}
            value={input}
            onValueChange={(e) => setInput(e.value)}
            onValueCommit={handleUpdateTask}
          >
            <Editable.Preview
              whiteSpace="normal"
              wordBreak="break-word"
              minW="0"
              textDecoration={checked ? "line-through" : "none"}
              color={checked ? "gray.500" : ""}
            />

            <Editable.Input
              whiteSpace="normal"
              wordBreak="break-word"
              minW="0"
              overflow="hidden"
              resize="none"
            />
          </Editable.Root>
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default Task;
