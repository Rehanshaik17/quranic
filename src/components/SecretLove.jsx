import React, { useState, useEffect } from 'react';
import './SecretLove.css';

const QUOTES = [
  {
    urdu1: "تمہاری یاد کے سائے میں زندگی ہے میری،",
    urdu2: "یہ کیسا عشق ہے کہ تم بن ہر خوشی ہے ادھوری۔",
    english: "\"My life exists in the shadow of your memories, What kind of love is this, that without you every joy is incomplete.\""
  },
  {
    urdu1: "تیری دھڑکن ہی زندگی کا قصہ ہے میرا،",
    urdu2: "تو زندگی کا ایک اہم حصہ ہے میرا۔",
    english: "\"Your heartbeat is the story of my life, You are an essential part of my life.\""
  },
  {
    urdu1: "صرف تم ہی تم ہو میری نگاہوں میں،",
    urdu2: "تیری محبت کے سوا اور کچھ نہیں میری دعاؤں میں۔",
    english: "\"There is only you and you in my eyes, There is nothing but your love in my prayers.\""
  },
  {
    urdu1: "چاند کی روشنی بھی تیرے سامنے پھیکی ہے،",
    urdu2: "یہ مسکراہٹ تیری میری جینے کی وجہ ہے۔",
    english: "\"Even the moonlight fades before you, This smile of yours is the reason I live.\""
  },
  {
    urdu1: "تیرے عشق میں اس قدر ڈوب گئے ہیں ہم،",
    urdu2: "کہ اب تو خود کو بھی ڈھونڈنا مشکل لگتا ہے۔",
    english: "\"I have drowned so deep in your love, That now it seems difficult to even find myself.\""
  }
];

export default function SecretLove() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [password, setPassword] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fadeQuote, setFadeQuote] = useState(false);

  useEffect(() => {
    if (!unlocked) return;
    
    const interval = setInterval(() => {
      // Fade out
      setFadeQuote(true);
      
      setTimeout(() => {
        // Change quote while faded out
        setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
        // Fade back in
        setFadeQuote(false);
      }, 800); // Wait for fade out animation
      
    }, 10000); // Every 10 seconds
    
    return () => clearInterval(interval);
  }, [unlocked]);

  const handleSecretClick = () => {
    setShowPrompt(true);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const correctPassword = import.meta.env.VITE_SECRET_PASSWORD;
    
    if (password === correctPassword) {
      setUnlocked(true);
      setShowPrompt(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <>
      {/* Secret trigger button */}
      <span 
        className="secret-trigger" 
        onClick={handleSecretClick}
        title="Secret"
      >
        ❤️
      </span>

      {/* Password Prompt Modal */}
      {showPrompt && !unlocked && (
        <div className="secret-modal-overlay">
          <div className={`secret-modal ${error ? 'shake' : ''}`}>
            <h3>Enter Secret Password 🔒</h3>
            <form onSubmit={handlePasswordSubmit}>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password..."
                autoFocus
              />
              <button type="submit">Unlock</button>
            </form>
            <button className="close-btn" onClick={() => setShowPrompt(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Unlocked Love Screen */}
      {unlocked && (
        <div className="love-screen">
          <button className="close-love-btn" onClick={() => setUnlocked(false)}>×</button>
          
          <div className="floating-hearts">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="heart" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 3}s`,
                transform: `scale(${Math.random() * 1.5 + 0.5})`
              }}>❤️</div>
            ))}
          </div>

          <div className="love-content">
            <h1 className="bounce-text">
              {import.meta.env.VITE_SECRET_MESSAGE}
            </h1>
            
            <div className="pulse-emoji" style={{ marginBottom: '1.5rem' }}>🥺</div>

            <div className={`urdu-sher-card ${fadeQuote ? 'faded' : ''}`}>
              <p className="urdu-text">{QUOTES[quoteIndex].urdu1}</p>
              <p className="urdu-text">{QUOTES[quoteIndex].urdu2}</p>
              <div className="sher-divider"></div>
              <p className="english-trans">{QUOTES[quoteIndex].english}</p>
            </div>
            
            <div className="pulse-emoji">💞🌹🥰</div>
          </div>
        </div>
      )}
    </>
  );
}
