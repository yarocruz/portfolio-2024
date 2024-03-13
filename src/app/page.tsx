import Nav from "./components/nav";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <Nav />
      <Footer /> 
    </main>
  );
}
