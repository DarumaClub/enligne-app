import { useEffect, useState } from "react";

function App() {
  const [ping, setPing] = useState("...");

  useEffect(() => {
    fetch("http://194.163.45.122:3000/ping")
      .then((res) => res.json())
      .then((data) => setPing(data.message))
      .catch((err) => setPing("Erreur API ❌"));
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Hello Brahim 👋</h1>
      <p className="mt-4 text-lg text-green-700">Réponse API : {ping}</p>
    </div>
  );
}

export default App;
