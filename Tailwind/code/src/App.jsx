function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <nav className="bg-white shadow p-4 flex flex-col md:flex-row gap-4 md:gap-8">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Features</a>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </nav>

      {/* HERO SECTION */}
      <section className="p-8 text-center">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Tailwind CSS Basics
        </h2>

        <div className="mt-6 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            className="w-64 rounded-lg shadow-lg transform transition hover:scale-105"
          />
        </div>
      </section>

      {/* BUTTON */}
      <div className="text-center my-6">
        <button className="px-6 py-2 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
          Click Me
        </button>
      </div>

      {/* LIST */}
      <ul className="list-disc list-inside pl-5 max-w-md mx-auto hover:text-blue-600">
        <li>Tailwind Utilities</li>
        <li>Responsive Design</li>
        <li>Hover Effects</li>
      </ul>

      {/* FEATURES GRID */}
      <section className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white p-4 rounded shadow">
            <img
              src="https://via.placeholder.com/300"
              className="rounded mb-3"
            />
            <h3 className="font-bold text-lg">Feature {item}</h3>
            <p className="text-sm text-gray-600">
              This is a sample feature card styled with Tailwind.
            </p>
            <button className="mt-3 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
              Learn More
            </button>
          </div>
        ))}
      </section>

      {/* TABLE */}
      <div className="overflow-x-auto p-6">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {["A", "B", "C", "D"].map((row, i) => (
              <tr
                key={i}
                className={`${i % 2 === 0 ? "bg-white" : "bg-gray-100"} hover:bg-gray-200`}
              >
                <td className="border p-2">User {row}</td>
                <td className="border p-2">Member</td>
                <td className="border p-2">Active</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FORM */}
      <section className="p-8 max-w-md mx-auto">
        <h3 className="font-bold text-xl mb-4">Contact Us</h3>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </section>

    </div>
  );
}

export default App;
