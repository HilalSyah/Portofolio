import React from "react";
import CertificateCard from "../Components/CertificateCard";
import Nav from "../Components/Nav";
import Serti1 from "../assets/Certificate/Serti1.png";
import Serti2 from "../assets/Certificate/Serti2.png";
import Serti3 from "../assets/Certificate/Serti3.png";
import Serti4 from "../assets/Certificate/Serti4.png";
import Serti5 from "../assets/Certificate/Serti5.png";
import Serti6 from "../assets/Certificate/Serti6.png";
import Serti7 from "../assets/Certificate/Serti7.png";
import Serti8 from "../assets/Certificate/Serti8.png";
import Serti9 from "../assets/Certificate/Serti9.jpg";
import Serti10 from "../assets/Certificate/Serti10.png";
import Serti11 from "../assets/Certificate/Serti11.jpg";

const certificateData = [
  {
    title: "EPIMT 2024",
    organization: "EPIMT",
    year: "2024",
    image: Serti1,
    link: "https://drive.google.com/file/d/1mMPeGPPfJnqHcwhVEkOrMqOjQM-wRQRC/view?usp=sharing",
  },
  {
    title: "Skilvul HTML 2023",
    organization: "kilvul HTML",
    year: "2023",
    image: Serti2,
    link: "https://skilvul.com/courses/html-dasar/student/clmzth0v001z901ld2olq1fr9/",
  },
  {
    title: "Skilvul CSS 2023",
    organization: "Skilvul",
    year: "2023",
    image: Serti3,
    link: "https://skilvul.com/courses/css-dasar/student/clmzth0v001z901ld2olq1fr9/",
  },
  {
    title: "Skilvul Intro 2023",
    organization: "Skilvul",
    year: "2023",
    image: Serti4,
    link: "https://skilvul.com/courses/intro-to-coding/student/clmzth0v001z901ld2olq1fr9/",
  },
  {
    title: "Dicoding Dasar Web 2024",
    organization: "Dicoding",
    year: "2023",
    image: Serti5,
    link: "https://drive.google.com/file/d/1d4z-PbIdx-EhL3W7S1gu11Pk7OAY02o9/view?usp=sharing",
  },
  {
    title: "Skilvul C# 2023",
    organization: "Skilvul",
    year: "2023",
    image: Serti6,
    link: "https://skilvul.com/courses/csharp-dasar/student/clmzth0v001z901ld2olq1fr9/",
  },
  {
    title: "Skilvul Python 2023",
    organization: "Skilvul",
    year: "2023",
    image: Serti7,
    link: "https://skilvul.com/courses/python-dasar/student/clmzth0v001z901ld2olq1fr9/",
  },
  {
    title: "Webinar Web 2025",
    organization: "Webinar",
    year: "2024",
    image: Serti8,
    link: "https://drive.google.com/file/d/17B11-yyy9jsZxnpC2lzVVZFk5b_NhkqV/view?usp=drive_link",
  },
  {
    title: "SOLOLEARN HTML 2024",
    organization: "SOLOLEARN",
    year: "2023",
    image: Serti9,
    link: "https://drive.google.com/file/d/125ouVGo3IlVQm-Tom1k5G51rnSPOwRDp/view?usp=sharing",
  },
  {
    title: "TECHCOMFEST 2025",
    organization: "TECHCOMFEST",
    year: "2025",
    image: Serti10,
    link: "https://drive.google.com/file/d/13K7gniZ4DXM-nGiL-ieH0hhhCDGri3Dh/view?usp=sharing",
  },
  {
    title: "INVOFEST 2024",
    organization: "INVOFEST",
    year: "2024",
    image: Serti11,
    link: "https://drive.google.com/file/d/1WKCMwf5XVOMY36iFmDp76ViP8aasrgBy/view?usp=sharing",
  },
  // Tambahkan data lainnya
];

const Certificate = () => {
  return (
    <>
      <Nav />
      <section className="min-h-screen w-full bg-gradient-to-br from-[#120f2e] via-[#1c1835] to-[#0f0d21] text-gray-200 py-35 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-12 text-center">📜 My Certificates</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificateData.map((cert, index) => (
              <CertificateCard key={index} {...cert} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Certificate;
