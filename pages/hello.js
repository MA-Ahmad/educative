import React from "react";
import LessonPart1 from "../components/Singlepage/LessonPart1";
import LessonPart2 from "../components/Singlepage/LessonPart2";
import { Container } from "@chakra-ui/react";

const hello = () => {
  return (
    <div>
      <LessonPart1 />
      <LessonPart2 />
    </div>
  );
};

export default hello;
