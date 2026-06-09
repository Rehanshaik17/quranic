import { useState } from 'react';
import { ALPHABET } from '../data';

export default function AlphabetPage() {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [showPositions, setShowPositions] = useState(false);

  return (
    <section style={{ background: 'var(--dark)', minHeight: '100vh', paddingTop: '100px', paddingBottom: '5rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
      <div className="section-inner">
        <div className="section-title reveal visible">
          <h2>Arabic <span>Alphabet</span></h2>
          <div className="divider"></div>
          <p>Master the 28 letters — the foundation of reading Arabic and the Quran</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <button 
            className={`filter-btn ${!showPositions ? 'active' : ''}`} 
            onClick={() => setShowPositions(false)}
          >
            Letter Cards
          </button>
          <button 
            className={`filter-btn ${showPositions ? 'active' : ''}`} 
            onClick={() => setShowPositions(true)}
          >
            Position Forms
          </button>
        </div>

        {!showPositions ? (
          <div className="alphabet-grid reveal visible">
            {ALPHABET.map((l, i) => (
              <div
                key={i}
                className={`alphabet-card ${selectedLetter === i ? 'selected' : ''}`}
                onClick={() => setSelectedLetter(selectedLetter === i ? null : i)}
              >
                <div className="alpha-letter">{l.letter}</div>
                <div className="alpha-name">{l.name}</div>
                <div className="alpha-tr">{l.tr}</div>
                {selectedLetter === i && (
                  <div className="alpha-detail">
                    <div className="alpha-example">
                      <span style={{ fontFamily: "'Amiri', serif", fontSize: '1.3rem', color: 'var(--gold2)' }}>{l.example.ar}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text)' }}>{l.example.en}</span>
                      <span style={{ fontFamily: "'Noto Nastaliq Urdu', serif", fontSize: '0.8rem', color: 'var(--text3)' }}>{l.example.ur}</span>
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--teal)', marginTop: '6px' }}>
                      {l.type === 'sun' ? '☀️ Sun letter' : '🌙 Moon letter'}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="positions-table-wrap reveal visible">
            <table>
              <thead>
                <tr>
                  <th>Letter</th>
                  <th>Name</th>
                  <th>Isolated</th>
                  <th>Initial</th>
                  <th>Medial</th>
                  <th>Final</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                {ALPHABET.map((l, i) => (
                  <tr key={i}>
                    <td className="arabic-cell" style={{ fontSize: '1.8rem' }}>{l.letter}</td>
                    <td>{l.name} <span style={{ color: 'var(--text3)', fontSize: '0.75rem' }}>({l.tr})</span></td>
                    <td className="arabic-cell" style={{ fontSize: '1.4rem' }}>{l.position.isolated}</td>
                    <td className="arabic-cell" style={{ fontSize: '1.4rem' }}>{l.position.initial}</td>
                    <td className="arabic-cell" style={{ fontSize: '1.4rem' }}>{l.position.medial}</td>
                    <td className="arabic-cell" style={{ fontSize: '1.4rem' }}>{l.position.final}</td>
                    <td>
                      <span style={{ fontFamily: "'Amiri', serif", color: 'var(--gold2)' }}>{l.example.ar}</span>
                      <br/>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text3)' }}>{l.example.en}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#vocab" className="btn-outline" style={{ padding: '0.8rem 2rem', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>Next: Learn Vocabulary ➔</a>
        </div>
      </div>
    </section>
  );
}
