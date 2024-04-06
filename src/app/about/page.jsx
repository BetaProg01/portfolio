"use client";
import React from "react";
import {
  Heading,
  SimpleGrid,
  Image,
  Center,
  Box,
  Text,
} from "@chakra-ui/react";
import InterestsCard from "./InterestsCard";
import { interestsData } from "../../utils/constants";
import { RevealWrapper } from "next-reveal";

const Page = () => {
  return (
    <>
      <Center m={5}>
        <Box width="80vw" height="100%">
          <RevealWrapper className="load-hidden" id="about" delay={300}>
            <Heading className="sub-heading" size="md" my={3}>
              À PROPOS DE MOI
            </Heading>
            <SimpleGrid
              columns={[1, null, 2]}
              gap={6}
              fontSize="1.1rem"
              marginBottom="4rem"
              templateColumns={[null, null, "30% 70%"]}
            >
              <Image
                objectFit="shrink"
                src="/images/profile.jpg"
                alt="profile-image"
                width={["20rem", "30rem", "20rem"]}
                height={["20rem", "30rem", "20rem"]}
                marginBottom={["1rem", "1rem", null]}
              />

              <Box textAlign="justify">
                <Heading size="xl" mb={3}>
                  Bonjour !
                </Heading>
                <br />
                <Text>
                  {"Je suis un futur Ingénieur spécialisé en Cloud Computing et DevOps, passionné par la mise en place d\'infrastructures Cloud et l\'automatisation. Je cherche constamment à acquérir de nouvelles compétences et à relever des défis techniques pour compléter mes connaissances."}
                </Text>
                <br />
                <Text>
                  {"Ma curiosité m\'a poussé à explorer divers domaines comme le développement backend, le réseau ou l\'IA, puis le Cloud qui m\'a particulièrement intéressé. J\'ai ainsi développé des compétences en architecture microservices, en déploiement d\'infrastructures avec Terraform et Ansible, utilisé Docker pour la conteneurisation ou encore développé des chaînes CI/CD avec Github Actions et GitLab CI."}
                </Text>
                <br />
                <Text>
                  {"Après ma diplomation en Septembre 2024, j\'aimerais m\'investir dans une entreprise innovante où je pourrais mettre en pratique mes compétences et contribuer à des projets de long terme."}
                </Text>
                <Text>
                  {"Je serais heureux de discuter de vos projets et de comment je pourrais vous aider à les réaliser."}
                </Text>
                <br />
              </Box>
            </SimpleGrid>
          </RevealWrapper>
          <RevealWrapper className="load-hidden" id="interests" delay={600}>
            <Heading className="sub-heading" size="md" my={3}>
              INTERÊTS
            </Heading>
            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(270px, 1fr))"
            >
              {interestsData.map((data, index) => {
                return (
                  <InterestsCard
                    interest={data.interest}
                    icon={data.icon}
                    key={index}
                  />
                );
              })}
            </SimpleGrid>
          </RevealWrapper>
        </Box>
      </Center>
    </>
  );
};

export default Page;
