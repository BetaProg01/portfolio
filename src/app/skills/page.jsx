"use client";
import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Icon,
  Box,
  Center,
  Flex,
} from "@chakra-ui/react";
import { skillsData } from "../../utils/constants";
import { RevealWrapper } from "next-reveal";

// Group the skillsData by the attribute
const groupedData = skillsData.reduce((groups, item) => {
  const group = item.group;
  groups[group] = groups[group] || [];
  groups[group].push(item);
  return groups;
}, {});

const Skills = () => (
  <Center height="70vh" width="100vw">
    <Box width="80vw" height="100%">
      <Heading className="sub-heading" size="md" my={3}>
        COMPETENCES
      </Heading>
      {Object.entries(groupedData).map(([group, items], groupIndex) => {
        return (
          <React.Fragment key={`group-${groupIndex}`}>
            <Heading my={3} textAlign="center" fontSize="1.5rem">
              {group}
            </Heading>
            <RevealWrapper className="load-hidden" delay={300}>
              <Flex
                direction="row"
                wrap="wrap"
                justify="center"
                align="center"
                gap={5} // Ensure consistent spacing between cards
                paddingBottom="2rem"
              >
                {items.map((data, index) => {
                  return (
                    <Box
                      key={index}
                      width="150px" // Adjusted width to accommodate content and padding
                      height="auto" // Height will adjust based on content
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="center"
                      backgroundColor="blueTheme.card"
                      borderRadius="md"
                      boxShadow="md"
                      transition="all .2s ease-in-out"
                      _hover={{
                        cursor: "pointer",
                        backgroundColor: "blueTheme.cardHover",
                        transform: "scale(1.05)"
                      }}
                      padding={4} // Adjusted padding for better spacing
                    >
                      <Icon as={data.icon} width="55px" height="55px" />
                      <Heading my={1} textAlign="center" fontSize="1.2rem">
                        {data.name}
                      </Heading>
                    </Box>
                  );
                })}
              </Flex>
            </RevealWrapper>
          </React.Fragment>
        );
      })}

    </Box>
  </Center>
);

export default Skills;