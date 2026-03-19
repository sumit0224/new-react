import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [dark, setDark] = useState(true);
  const [note, setNote] = useState("");
  const [search, setSearch] = useState("")
  const [editId, setEditId] = useState(null);
  const [notes, setNotes] = useState(() => {
    let data = localStorage.getItem("notes")
    if (data) {
      return JSON.parse(data)
    } else {
      return []
    }
  });
  const [filtered, setFiltered] = useState([])
  const inpRef = useRef(null)


  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(filtered))
    inpRef.current?.focus()
  }, [notes])



  const addAndUpdate = useCallback(() => {
    if (!note.trim()) return;

    if (editId) {
      // UPDATE

      setNotes((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, text: note } : item
        )
      );
      setEditId(null);
    } else {
      // ADD
      const data = { id: Date.now(), text: note };
      setNotes((prev) => [data, ...prev]);
    }

    setNote("");
  }, [note, editId]);

  useEffect(() => {
    setFiltered(
      notes.filter((item) => {
        return item.text.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, notes])

  const deleteNote = useCallback((id) => {
    setFiltered(
      filtered.filter((item) => {
        return item.id != id
      })
    )
  })


  return (
    <main
      className={`w-full min-h-screen ${dark ? "bg-zinc-900 text-white" : "bg-gray-100 text-black"
        } flex justify-center items-center p-5 transition-all`}
    >
      <div
        className={`w-full max-w-md rounded-2xl shadow-lg p-6 ${dark ? "bg-zinc-800" : "bg-white"
          }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">📝 Notes</h1>
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 rounded-lg bg-indigo-500 text-white text-sm"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>

        {/* Search */}
        <input
          type="text"
        
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search notes..."
          className="w-full mb-4 p-2 rounded-lg border outline-none text-black"
        />

        {/* Add Note */}
        <div className="flex gap-2 mb-4">
          <input
            value={note}
            ref={inpRef}
            onChange={(e) => setNote(e.target.value)}
            type="text"
            placeholder="Enter your note..."
            className="flex-1 p-2 rounded-lg border outline-none text-black"
          />
          <button
            onClick={() => {

              addAndUpdate(note)
            }}

            className="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            {editId ? "UPDATE" : "ADD"}
          </button>
        </div>

        {/* Notes List */}
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {filtered.length === 0 ? (
            <p className="text-sm opacity-60">No notes yet...</p>
          ) : (
            filtered.map((n, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg flex justify-between px-3 ${dark ? "bg-zinc-700" : "bg-gray-200"
                  }`}
              >
                {n.text}
                <div className="flex gap-3">
                  <button onClick={() => {
                    inpRef.current?.focus()
                    setEditId(n.id)
                    setNote(n.text)
                  }} className="px-2 py-1 bg-blue-300/30 border-white rounded-sm">✏️</button>
                  <button onClick={() => deleteNote(n.id)} className="px-2 py-1 bg-white/30 border-white rounded-sm">❌</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default App;