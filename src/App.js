import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection.jsx";
import Service from "./components/Service";
import AboutSection from "./components/AboutSection.jsx";
import TeamSection from "./components/TeamSection";
import { useEffect, useState, Suspense } from "react";
import Footer from "./Page/Footer";
import RecordLine from "./components/RecordLine";
import RecordCollum from "./components/RecordCollum";
import Diary from "./components/Diary";
import MyExercise from "./components/MyExercise";
import HomeLoading from "./components/HomeLoading";
import CustomerLayout from "./Page/CustomerLayout";
import HomePage from "./Page/HomePage";
import RecordPage from "./Page/RecordPage";
import ColumnPage from "./Page/ColumnPage";
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<HomeLoading />}>
        <Routes>
          <Route path="/" element={<CustomerLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/record" element={<RecordPage />} />
            <Route path="/column" element={<ColumnPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
