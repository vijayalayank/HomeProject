import { useState, useEffect } from "react";
import style from "./Blessing.module.css"

function BlessingsWall() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [blessings, setBlessings] = useState(() => {
    // Load from localStorage on first render
    const saved = localStorage.getItem("blessings");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("blessings", JSON.stringify(blessings));
  }, [blessings]);
  const handleAddBlessing = () => {
    if (!name.trim() || !message.trim()) return;

    const newBlessing = {
      id: Date.now(),
      name,
      message,
      time: new Date().toISOString()
    };

    setBlessings([newBlessing, ...blessings]);
    setName("");
    setMessage("");
  };
  const formatTime = (isoString) => {
    const date = new Date(isoString);
    const diff = Math.floor((Date.now() - date.getTime()) / 1000);

    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    return date.toLocaleDateString();
  };
  return (
    <div className={style.main}>
      <h1>🙏 Blessings Wall 🙏</h1>

      <div className={style.formCard}>
        <h2>✨ Share Your Blessings ✨</h2>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Share your blessings..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleAddBlessing} className={style.addblessing}>✨ Add Blessing ✨</button>
      </div>

      <div className={style.blessingsList}>
        {blessings.map((b) => (
          <div key={b.id} className={style.blessingCard}>
            <strong>🙏 </strong>
           <div className={style.overall}>
             <div><p className={style.name}>{b.name} </p> <i>• {formatTime(b.time)} </i> </div>
            <div>
                <p>{b.message}</p>
            </div>
           </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlessingsWall;
