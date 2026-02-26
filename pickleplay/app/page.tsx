

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Welcome to PicklePlay!</h1>
      <p className="mt-4 text-lg text-gray-600">Your one-stop destination for all things pickleball.</p>
      <div className="mt-8 flex space-x-4">
        <a href="/login" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Login</a>
        <a href="/register" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Sign up</a>
      </div>
    </div>
  );
}
