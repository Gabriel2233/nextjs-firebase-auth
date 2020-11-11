import { Button, Flex, Input, Textarea } from "@chakra-ui/core";

export const PostCreationElement = () => {
  return (
    <Flex
      w="60%"
      align="flex-start"
      justify="center"
      flexDir="column"
      background="white"
      rounded="8px"
      p={8}
    >
      <Button
        my={6}
        mx={2}
        p={4}
        bg="white"
        borderWidth={2}
        borderColor="blue.500"
        borderRadius="4px"
        color="blue.500"
      >
        Add cover Image
      </Button>
      <Input
        border={0}
        placeholder="Title Here"
        fontSize="3rem"
        _placeholder={{ color: "gray.600" }}
        _focus={{ outline: "none" }}
        my={8}
      />

      <Input
        border={0}
        my={4}
        placeholder="Write four tags that match your post..."
        fontSize="1rem"
        _placeholder={{ color: "gray.500" }}
        _focus={{ outline: "none" }}
      />

      <Textarea
        border={0}
        resize="none"
        overflowY="hidden"
        placeholder="Write your post here..."
        _focus={{ outline: "none" }}
        my={4}
      />
    </Flex>
  );
};
