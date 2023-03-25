import React from "react";
import AboutSection from "../components/AboutSection";
import Diary from "../components/Diary";
import MyExercise from "../components/MyExercise";
import RecordLine from "../components/RecordLine";

const RecordPage = () => {
  return (
    <>
      <AboutSection />
      <RecordLine />
      <MyExercise />
      <Diary />
    </>
  );
};

export default RecordPage;
