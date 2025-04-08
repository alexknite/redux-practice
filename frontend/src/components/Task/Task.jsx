import { Card, CloseButton, Editable, IconButton } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteTaskAsync, updateTaskAsync } from "../../redux/taskSlice";

import { LuCheck, LuX } from "react-icons/lu";
import { useState } from "react";

const Task = ({ id, description }) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState(description);

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

  return (
    <Card.Root
      width="500px"
      height="100px"
      variant="elevated"
      position="relative"
    >
      {input.editing ? (
        <></>
      ) : (
        <CloseButton
          position="absolute"
          top="10px"
          right="10px"
          onClick={handleRemoveTask}
        />
      )}

      <Card.Body
        w="100%"
        h="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Card.Title textAlign="center">
          <Editable.Root
            value={input}
            onValueChange={(e) => setInput(e.value)}
            onValueCommit={handleUpdateTask}
            submitMode="none"
          >
            <Editable.Preview
              whiteSpace="normal"
              wordBreak="break-word"
              minW="0"
            />
            <Editable.Textarea
              whiteSpace="normal"
              wordBreak="break-word"
              minW="0"
              overflow="hidden"
              resize="none"
            />
            <Editable.Control>
              <Editable.CancelTrigger asChild>
                <IconButton variant="outline" size="xs">
                  <LuX />
                </IconButton>
              </Editable.CancelTrigger>
              <Editable.SubmitTrigger asChild>
                <IconButton variant="outline" size="xs">
                  <LuCheck />
                </IconButton>
              </Editable.SubmitTrigger>
            </Editable.Control>
          </Editable.Root>
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default Task;
