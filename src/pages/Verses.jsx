import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { VERSES, EXTRA_VERSES } from '../data';

const ALL_VERSES = [...VERSES, ...EXTRA_VERSES];

export default function Verses() {
  const [activeTab, setActiveTab] = useState(0);
  const [highlightedWord, setHighlightedWord] = useState(null);
  const [showExample, setShowExample] = useState(false);

  const v = ALL_VERSES[activeTab];

  return (
    <section className="verses-section" style={{ minHeight: '100vh', paddingTop: '100px' }}>
      <div className="section-inner">
        <div className="section-title reveal visible">
          <h2>Verse <span>Breakdown</span> — Word by Word</h2>
          <div className="divider"></div>
          <p>Click each word to see its full meaning. Tap "Breakdown with Example" for deeper understanding.</p>
        </div>
        
        <div className="verse-tabs reveal visible">
          {ALL_VERSES.map((verse, i) => (
            <button 
              key={i} 
              className={`verse-tab ${activeTab === i ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(i);
                setHighlightedWord(null);
                setShowExample(false);
              }}
            >
              {verse.tab}
            </button>
          ))}
        </div>

        <div className="reveal visible">
          <div className="verse-card">
            <div className="verse-header">
              <span className="verse-ref">{v.surah} — {v.ref}</span>
              <span className="verse-level">Level: {v.level}</span>
            </div>
            <div className="verse-arabic">{v.arabic}</div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text3)', marginBottom: '0.75rem', textAlign: 'right' }}>
              ↑ Click each word below to highlight
            </p>
            <div className="word-row">
              {v.words.map((w, i) => (
                <div 
                  key={i} 
                  className={`word-chip ${highlightedWord === i ? 'highlight' : ''}`}
                  onClick={() => setHighlightedWord(highlightedWord === i ? null : i)}
                >
                  <span className="w-arabic">{w.ar}</span>
                  <span className="w-english">{w.en}</span>
                  <span className="w-urdu">{w.ur}</span>
                </div>
              ))}
            </div>
            
            <div className="translations">
              <div className="trans-box">
                <div className="lang">🇬🇧 English</div>
                <div className="trans-text">{v.english}</div>
              </div>
              <div className="trans-box">
                <div className="lang">🇵🇰 Urdu</div>
                <div className="trans-urdu">{v.urdu}</div>
              </div>
            </div>
            
            <button className="example-btn" onClick={() => setShowExample(!showExample)}>
              {showExample ? '🔍 Hide Breakdown ▴' : '🔍 Breakdown with Example ▾'}
            </button>
            
            <div className={`example-panel ${showExample ? 'open' : ''}`}>
              <h4>Deep Breakdown</h4>
              {v.examples.map((e, i) => (
                <div key={i} className="example-item">
                  <span className="ex-arabic">{e.ar}</span>
                  <span className="ex-english">{e.en}</span>
                  <span className="ex-urdu">{e.ur}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#grammar" className="btn-outline" style={{ padding: '0.8rem 2rem', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>Next: Learn Grammar ➔</a>
        </div>

      </div>
    </section>
  );
}
