import ChartPanel from "./components/Chart/ChartPanel";
export default function Home() {
  return (
    <main className="flex p-6">
      <div className="chart w-full grid grid-cols-3 gap-8 transition-transform">
        <ChartPanel />
      </div>
    </main>
  );
}
