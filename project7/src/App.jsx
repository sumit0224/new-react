import React, { useEffect, useState, useRef } from "react";
import Draggable from "react-draggable";

const App = () => {
  const [dark, setDark] = useState(() => {
    return JSON.parse(localStorage.getItem("dark")) ?? true;
  });
  const [note, setNote] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);
  const [notes, setNotes] = useState(() => {
    const data = localStorage.getItem("notes");
    return data ? JSON.parse(data) : [];
  });

  const inputRef = useRef(null);

  // Save notes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Save theme
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);

  // Focus input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const addOrUpdate = () => {
    if (!note.trim()) return;

    if (editId) {
      setNotes((prev) =>
        prev.map((n) =>
          n.id === editId ? { ...n, text: note } : n
        )
      );
      setEditId(null);
    } else {
      setNotes((prev) => [
        { id: Date.now(), text: note },
        ...prev,
      ]);
    }

    setNote("");
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const filteredNotes = notes.filter((n) =>
    n.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={`min-h-screen transition-all p-5 ${
        dark ? "bg-zinc-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">🗒️ Sticky Notes</h1>
          <button
            onClick={() => setDark(!dark)}
            className="px-4 py-2 rounded-lg bg-indigo-500 text-white"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* INPUT */}
        <div className="flex gap-2 mb-4">
          <input
            ref={inputRef}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Write a note..."
            className="flex-1 p-3 rounded-lg border text-black"
          />
          <button
            onClick={addOrUpdate}
            className="px-5 py-2 bg-green-500 text-white rounded-lg"
          >
            {editId ? "Update" : "Add"}
          </button>
        </div>

        {/* SEARCH */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search..."
          className="w-full mb-6 p-3 rounded-lg border text-black"
        />

        {/* NOTES GRID */}
        {filteredNotes.length === 0 ? (
          <p className="opacity-60">No notes found...</p>
        ) : (
          <div className="flex flex-wrap gap-4">
            {filteredNotes.map((n) => (
              <Draggable key={n.id} >
                <div
                  className={`w-60 p-4 rounded-xl shadow-lg cursor-move ${
                    dark ? "bg-yellow-200 text-black" : "bg-yellow-100"
                  }`}
                >
                  <p className="break-words">{n.text}</p>

                  {/* ACTIONS */}
                  <div className="flex justify-end gap-2 mt-3">
                    <button
                      onClick={() => {
                        setEditId(n.id);
                        setNote(n.text);
                        inputRef.current?.focus();
                      }}
                      className="text-sm px-2 py-1 bg-blue-500 text-white rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteNote(n.id)}
                      className="text-sm px-2 py-1 bg-red-500 text-white rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </Draggable>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;