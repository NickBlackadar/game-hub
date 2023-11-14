import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  description: string;
}

const ExpandableText = ({ description }: Props) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <Text>
        {showMore ? description : description.substring(0, 300) + "..."}

        <Button
          size="xs"
          colorScheme="yellow"
          fontWeight="bold"
          marginLeft={1}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
