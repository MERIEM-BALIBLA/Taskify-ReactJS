import { Routes, Route } from "react-router-dom";
import { SkillProvider } from "./Context/SkillContext";
import { Home } from './Components/Home';
import { SkillIndex } from './Components/Skills/SkillIndex';
import { SkillCreate } from './Components/Skills/SkillCreate';
import { SkillEdit } from './Components/Skills/SkillEdit';


function App() {
  return (
    <SkillProvider>
      <div className="bg-slate-200">
        <div className="maw-w-7xl mx-auto min-h-screen">
          <nav>
            <ul className="flex">
              <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                <a href="/">Home</a>
              </li>
              <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                <a href="/skills">Skills</a>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/skills" element={<SkillIndex />}></Route>
            <Route path="/skills/create" element={<SkillCreate />}></Route>
            <Route path="/skillS/:id/edit" element={<SkillEdit />}></Route>

          </Routes>
        </div>
      </div>
    </SkillProvider>
  );
}

export default App;
