import { MouseEvent } from "react";
import {
  Heading,
  Link,
  Card,
  CardHeader,
  Flex,
  Spacer,
} from "@chakra-ui/react";

export function EmptyState(props: { onChoice: (question: string) => any }) {
  const handleClick = (e: MouseEvent) => {
    props.onChoice((e.target as HTMLDivElement).innerText);
  };
  return (
    <div className="rounded flex flex-col items-center max-w-full md:p-8">
      <Flex marginTop={"5px"} grow={1} maxWidth={"500px"} width={"100%"}>
        
      </Flex>
      <Flex marginTop={"25px"}  grow={1} maxWidth={"800px"} width={"100%"}>
        <Card
          onMouseUp={handleClick}
          width={"68%"}
          marginRight={"25px"}
          backgroundColor={"rgb(118, 205, 206)"}
          _hover={{ backgroundColor: "rgb(118, 215, 226)" }}
          cursor={"pointer"}
          justifyContent={"center"}
        
        >
          <CardHeader justifyContent={"center"}>
            <Heading
              fontSize=""
              fontWeight={"medium"}
              mb={1}
              color={"gray.100"}
              textAlign={"center"}
            >
              write methods responsible for data transfer after clicking the button.
            </Heading>
          </CardHeader>
        </Card>
        <Spacer />
        <Card
          onMouseUp={handleClick}
          width={"68%"}
          backgroundColor={"rgb(118, 205, 206)"}
          _hover={{ backgroundColor: "rgb(118, 215, 226)" }}
          cursor={"pointer"}
          justifyContent={"center"}
        >
          <CardHeader justifyContent={"center"}>
            <Heading
              fontSize=""
              fontWeight={"medium"}
              mb={1}
              color={"gray.100"}
              textAlign={"center"}
            >
              Explain API specifications and basic method.
            </Heading>
          </CardHeader>
        </Card>
      </Flex>
    </div>
  );
}
