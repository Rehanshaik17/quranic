import React, { useState, useEffect } from 'react';
import './SecretSorry.css';

const QUOTES = [
  {
    urdu1: "مجھے معاف کر دو، میری جان،",
    urdu2: "تمہارے بغیر میرا دل اداس ہے۔",
    english: "\"Please forgive me, my love. My heart is sad without you.\""
  },
  {
    urdu1: "میری غلطی تھی، میں مانتا ہوں،",
    urdu2: "تمہاری مسکراہٹ کے بغیر سب سونا ہے۔",
    english: "\"It was my mistake, I admit it. Everything is empty without your smile.\""
  },
  {
    urdu1: "تمہاری آنکھوں میں آنسو نہیں دیکھ سکتا،",
    urdu2: "مجھے میری نادانی کی معافی دے دو۔",
    english: "\"I can't see tears in your eyes, please forgive me for my foolishness.\""
  },
  {
    urdu1: "میں شرمندہ ہوں اپنے کیے پر،",
    urdu2: "کیا تم مجھے ایک اور موقع دے سکتے ہو؟",
    english: "\"I am ashamed of what I did, can you give me another chance?\""
  },
  {
    urdu1: "تمہاری محبت میری زندگی ہے،",
    urdu2: "مجھے معاف کر کے واپس آ جاؤ۔",
    english: "\"Your love is my life, forgive me and come back.\""
  }
];

export default function SecretSorry() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [password, setPassword] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fadeQuote, setFadeQuote] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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
      setShowPrompt(false);
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setUnlocked(true);
      }, 3000);
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <>
      {/* Secret trigger button */}
      <span 
        className="secret-sorry-trigger" 
        onClick={handleSecretClick}
        title="I am sorry"
      >
        🥺
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

      {/* Loading Animation */}
      {isAnimating && (
        <div className="futuristic-loader">
          <div className="merging-hearts">
            <div className="left-half"></div>
            <div className="right-half"></div>
          </div>
          <div className="flash-overlay"></div>
        </div>
      )}

      {/* Unlocked Sorry Screen */}
      {unlocked && (
        <div className="sorry-screen">
          <button className="close-love-btn" onClick={() => setUnlocked(false)}>×</button>
          
          <div className="rain-container">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="raindrop" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 1 + 0.5}s`
              }}></div>
            ))}
          </div>

          <div className="sorry-content">
            <h1 className="float-text">
              I am so sorry...
            </h1>
            
            <div className="pulse-emoji" style={{ marginBottom: '1.5rem' }}>🥺💔</div>

            <div className={`urdu-sher-card ${fadeQuote ? 'faded' : ''}`}>
              <p className="urdu-text">{QUOTES[quoteIndex].urdu1}</p>
              <p className="urdu-text">{QUOTES[quoteIndex].urdu2}</p>
              <div className="sher-divider"></div>
              <p className="english-trans">{QUOTES[quoteIndex].english}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
