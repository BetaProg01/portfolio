"use client";
import React from "react";
import {
    Center,
    Box,
    Button
  } from "@chakra-ui/react";
  import { AiOutlineDownload } from "react-icons/ai";

const Resume = () => {

  return (
    <>
      <Center>
        <Box width={["90vw", "90vw", "80vw"]} height="100%" marginTop="2rem" marginBottom="4rem">
        <Button as="a" href="/files/CV_VERDOT_Benoit_fr" colorScheme="teal" size="sm" download="VERDOT_Benoit_CV">
              Télécharger&nbsp;
              <AiOutlineDownload fill="black"/>
        </Button>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 0,
            paddingTop: "141.4286%",
            paddingBottom: 0,
            boxShadow: "0 2px 8px 0 rgba(63, 69, 81, 0.16)",
            marginTop: "1em",
            marginBottom: "0.9em",
            overflow: "hidden",
            borderRadius: "8px",
            willChange: "transform",
          }}
        >
          <object
            data="/files/CV_VERDOT_Benoit_fr.pdf#toolbar=0"
            type="application/pdf"
            style={{
              position: "absolute",
              width: "100%",
              height: "70%",
              top: 0,
              left: 0,
              border: "none",
              padding: 0,
              margin: 0,
            }}
          >
            <embed src="/files/CV_VERDOT_Benoit_fr.pdf" type="application/pdf" />
          </object>
        </div>
        </Box>
      </Center>
    </>
  );
};

export default Resume;