import { useState, useMemo, useCallback } from 'react';
import { VOCAB } from '../data';

export default function Flashcards() {
  const [deck, setDeck] = useState(() => [...VOCAB].sort(() => Math.random() - 0.5));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(0);
  const [learning, setLearning] = useState(0);

  const card = deck[currentIndex];
  const total = deck.length;

  const handleFlip = () => setFlipped(!flipped);

  const handleKnow = useCallback(() => {
    setKnown(prev => prev + 1);
    setFlipped(false);
    if (currentIndex < total - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, total]);

  const handleLearning = useCallback(() => {
    setLearning(prev => prev + 1);
    setFlipped(false);
    // Move the card to the end of the deck for review
    setDeck(prev => {
      const newDeck = [...prev];
      const [card] = newDeck.splice(currentIndex, 1);
      newDeck.push(card);
      return newDeck;
    });
  }, [currentIndex]);

  const handleShuffle = () => {
    setDeck([...VOCAB].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setFlipped(false);
    setKnown(0);
    setLearning(0);
  };

  if (!card) return null;

  const progressPct = Math.round(((known + learning) / total) * 100);

  return (
    <section style={{ background: 'var(--dark2)', minHeight: '100vh', paddingTop: '100px', paddingBottom: '5rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
      <div className="section-inner">
        <div className="section-title reveal visible">
          <h2>Vocab <span>Flashcards</span></h2>
          <div className="divider"></div>
          <p>Tap the card to flip it. Mark words you know or need to review.</p>
        </div>

        <div className="flashcard-stats reveal visible">
          <div className="fc-stat">
            <div className="fc-stat-num" style={{ color: 'var(--green)' }}>{known}</div>
            <div className="fc-stat-label">Known ✓</div>
          </div>
          <div className="fc-stat">
            <div className="fc-stat-num" style={{ color: 'var(--gold)' }}>{learning}</div>
            <div className="fc-stat-label">Learning 📖</div>
          </div>
          <div className="fc-stat">
            <div className="fc-stat-num" style={{ color: 'var(--text3)' }}>{total - known - learning}</div>
            <div className="fc-stat-label">Remaining</div>
          </div>
        </div>

        <div style={{ maxWidth: '500px', margin: '0 auto 1.5rem' }}>
          <div className="progress-bar-wrap">
            <div className="progress-bar" style={{ width: `${progressPct}%` }}></div>
          </div>
          <div className="progress-text">Card {currentIndex + 1} of {total}</div>
        </div>

        <div className="flashcard-container reveal visible" onClick={handleFlip}>
          <div className={`flashcard ${flipped ? 'flipped' : ''}`}>
            <div className="flashcard-front">
              <div className="fc-arabic">{card.ar}</div>
              <div className="fc-hint">Tap to reveal</div>
              <span className="cat-tag" style={{ marginTop: '1rem' }}>{card.cat}</span>
            </div>
            <div className="flashcard-back">
              <div className="fc-transliteration">{card.tr}</div>
              <div className="fc-english">{card.en}</div>
              <div className="fc-urdu">{card.ur}</div>
              <div className="fc-freq">
                <div className="freq-bar" style={{ width: '100px', margin: '0.5rem auto 0' }}>
                  <div className="freq-fill" style={{ width: `${card.freq}%` }}></div>
                </div>
                <span style={{ fontSize: '0.7rem', color: 'var(--text3)' }}>{card.freq}% frequency</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flashcard-actions reveal visible">
          <button className="fc-btn fc-btn-learning" onClick={handleLearning}>
            📖 Still Learning
          </button>
          <button className="fc-btn fc-btn-know" onClick={handleKnow}>
            ✓ I Know This
          </button>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="btn-outline" onClick={handleShuffle} style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
            🔀 Shuffle & Restart
          </button>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#quiz" className="btn-outline" style={{ padding: '0.8rem 2rem', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>Next: Take the Quiz ➔</a>
        </div>
      </div>
    </section>
  );
}
