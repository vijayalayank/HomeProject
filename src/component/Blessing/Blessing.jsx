import React, { useState, useEffect } from "react";
import style from "./Blessing.module.css";

function BlessingsWall() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [blessings, setBlessings] = useState([]);

  // 🧠 Load blessings from LocalStorage on first render
  useEffect(() => {
    const savedBlessings = JSON.parse(localStorage.getItem("blessings")) || [];
    setBlessings(savedBlessings);
  }, []);

  // 💾 Save blessings to LocalStorage whenever updated
  useEffect(() => {
    localStorage.setItem("blessings", JSON.stringify(blessings));
  }, [blessings]);

  // ✨ Add new blessing
  const handleAddBlessing = () => {
    if (!name.trim() || !message.trim()) {
      alert("Please enter both name and message 🙏");
      return;
    }

    const newBlessing = {
      id: Date.now(),
      name,
      message,
      timePosted: new Date().toISOString(),
      displayTime: new Date().toLocaleString(),
      emoji: "💖",
    };

    setBlessings([newBlessing, ...blessings]);
    setName("");
    setMessage("");
  };

  // 🕓 Format “time ago”
  const formatTime = (isoString) => {
    const date = new Date(isoString);
    const diff = Math.floor((Date.now() - date.getTime()) / 1000);
    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hrs ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className={style.main}>
      <h1>🙏 Blessings Wall 🙏</h1>

      <div className={style.formCard}>
        <h2>✨ Share Your Blessing ✨</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Your Blessing Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleAddBlessing} className={style.addblessing}>
          💫 Add Blessing
        </button>
      </div>

      <div className={style.blessingsList}>
        {blessings.length === 0 ? (
          <p>No blessings yet. Be the first to bless! 🌸</p>
        ) : (
          blessings.map((b) => (
            <div key={b.id} className={style.blessingCard}>
              <strong>{b.emoji} </strong>
              <div className={style.overall}>
                <div>
                  <p className={style.name}>{b.name}</p>
                  <i>• {formatTime(b.timePosted)}</i>
                </div>
                <div>
                  <p>{b.message}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BlessingsWall;
