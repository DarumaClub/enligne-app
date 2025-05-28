function App() {
  const [message, setMessage] = React.useState('⏳ Chargement...');

  React.useEffect(() => {
    fetch('http://194.163.45.122/ping')
      .then((res) => res.json())
      .then((data) => setMessage(`Réponse API : ${data.message}`))
      .catch(() => setMessage('Réponse API : Erreur API ❌'));
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Hello Brahim 👋</h1>
      <p className="text-xl text-gray-800">{message}</p>
    </div>
  );
}

export default App;
