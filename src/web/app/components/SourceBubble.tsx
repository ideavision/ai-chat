import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Heading } from "@chakra-ui/react";

export type Source = {
  url: string;
  title: string;
};

export function SourceBubble({
  source,
  highlighted,
  onMouseEnter,
  onMouseLeave,
  runId,
}: {
  source: Source;
  highlighted: boolean;
  onMouseEnter: () => any;
  onMouseLeave: () => any;
  runId?: string;
}) {
  return (
    <Card
      onClick={async () => {
        window.open(source.url, "_blank");
        if (runId) {
    
        }
      }}
      backgroundColor={highlighted ? "rgb(118, 205, 206)" : "rgb(118, 215, 226)"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      cursor={"pointer"}
      alignSelf={"stretch"}
      height="100%"
      overflow={"hidden"}
    >
      <CardBody>
        <Heading size={"sm"} fontWeight={"normal"} color={"white"}>
          {source.title}
        </Heading>
      </CardBody>
    </Card>
  );
}



