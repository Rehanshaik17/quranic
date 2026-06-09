import { Link } from 'react-router-dom';
import { STORIES_DATA, EXTRA_STORIES } from '../data';

const ALL_STORIES = [...STORIES_DATA, ...EXTRA_STORIES];

export default function Stories() {
  return (
    <section style={{ background: 'var(--dark2)', minHeight: '100vh', paddingTop: '100px', paddingBottom: '5rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
      <div className="section-inner">
        <div className="section-title reveal visible">
          <h2>Quranic <span>Stories</span></h2>
          <div className="divider"></div>
          <p>Learn profound lessons from the Quran through beautiful stories and visuals</p>
        </div>
        
        <div className="stories-grid reveal visible">
          {ALL_STORIES.map((s, i) => (
            <div key={i} className="story-card">
              <img src={s.image} alt={s.title} className="story-img" />
              <div className="story-content">
                <h3 style={{ marginBottom: '0.25rem' }}>{s.title}</h3>
                <h4 style={{ fontFamily: "'Noto Nastaliq Urdu', serif", direction: 'rtl', color: 'var(--gold2)', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'normal' }}>
                  {s.titleUrdu}
                </h4>
                
                <p className="story-text" style={{ marginBottom: '0.5rem', color: 'var(--text)' }}>{s.text}</p>
                <p className="story-text" style={{ fontFamily: "'Noto Nastaliq Urdu', serif", direction: 'rtl', color: 'var(--text2)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  {s.textUrdu}
                </p>
                
                <div style={{ borderTop: '1px solid var(--border2)', paddingTop: '1.5rem', marginTop: '1.5rem' }}>
                  <h4 style={{ color: 'var(--gold)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
                    Word Breakdown
                  </h4>
                  <div className="story-words" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {s.words.map((w, j) => (
                      <div key={j} className="s-word" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                        <span style={{ fontFamily: "'Amiri', serif", fontSize: '1.4rem', color: 'var(--gold2)', marginBottom: '4px' }}>{w.ar}</span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text)' }}>{w.en}</span>
                        <span style={{ fontFamily: "'Noto Nastaliq Urdu', serif", fontSize: '0.8rem', color: 'var(--text3)', marginTop: '2px' }}>{w.ur}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#quiz" className="btn-outline" style={{ padding: '0.8rem 2rem', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>Next: Take the Quiz ➔</a>
        </div>
      </div>
    </section>
  );
}
