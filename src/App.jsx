import Ilustration from "./components/ilustration";
import SignUp from "./components/signUp";

export default function App() {
  return (
    <div className="flex flex-col h-screen lg:flex-row-reverse overflow-hidden lg:bg-slate-800 lg:p-40">
      <Ilustration/>
      <SignUp/>
    </div>
  )
}