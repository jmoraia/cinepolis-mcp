import Image from "next/image";
import MoviesPage from "./components/Pages/MoviesPage";

export default function Home() {
  return (
    <div>
      <main>
        <h1>Hello world!</h1>
        <p>This is a description</p>
      </main>
      <MoviesPage />
    </div>
  );
}
