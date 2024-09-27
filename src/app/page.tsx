import HomePage from "./home/page";

export default function Home() {
  const host = process.env.DB_HOST;
  return (
    <main className="">
      <HomePage />
    </main>
  );
}
