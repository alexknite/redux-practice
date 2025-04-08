import {
  Card,
  CloseButton,
  Editable,
  IconButton,
  Textarea,
  useEditable,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { removeTask } from "../../redux/taskSlice";

import { LuCheck, LuX } from "react-icons/lu";

const Task = ({ id, description }) => {
  const input = useEditable({
    defaultValue: description,
  });

  const dispatch = useDispatch();
  const handleRemoveTask = () => {
    dispatch(removeTask(id));
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
          <Editable.RootProvider value={input} placeholder="Click to edit">
            <Editable.Preview
              whiteSpace="normal"
              wordBreak="break-word"
              minW="0"
            />
            <Editable.Input
              as={Textarea}
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
          </Editable.RootProvider>
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default Task;
