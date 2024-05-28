import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import LawGPT from "./pages/LawGPT";
import AcademicAids from "./pages/AcademicAids";
import LegalAids from "./pages/LegalAids";
import Laywers from "./pages/Laywers";
import Laywers1 from "./pages/Laywers1";
import PractisingArea from "./pages/PractisingArea";
import Material from "./pages/Material";
import MaterialJournal from "./pages/MaterialJournal";
import Journal from "./pages/Journal";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "HeyLaw";
    let metaDescription = "";

    // switch (pathname) {
    //   case "/":
    //     title = "";
    //     metaDescription = "";
    //     break;
    //   case "/lawgpt":
    //     title = "";
    //     metaDescription = "";
    //     break;
    //   case "/laywers":
    //     title = "";
    //     metaDescription = "";
    //     break;
    //   case "/laywers1":
    //     title = "";
    //     metaDescription = "";
    //     break;
    //   case "/laywers2":
    //     title = "";
    //     metaDescription = "";
    //     break;
    // }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/lawgpt" element={<LawGPT />} />
      <Route path="/academicaids" element={<AcademicAids />} />
      <Route path="/legalaids" element={<LegalAids />} />
      <Route path="/laywers" element={<Laywers />} />
      <Route path="/laywers1" element={<Laywers1 />} />
      <Route path="/practisingarea" element={<PractisingArea />} />
      <Route path="/material" element={<Material />} />
      <Route path="/material_journal" element={<MaterialJournal />} />
      <Route path="/journalarticle" element={<Journal />} />
    </Routes>
  );
}
export default App;
