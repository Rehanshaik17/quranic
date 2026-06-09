import { Link } from 'react-router-dom';
import { ROOTS } from '../data';

export default function Roots() {
  return (
    <section style={{ background: 'var(--dark)', minHeight: '100vh', paddingTop: '100px', paddingBottom: '5rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
      <div className="section-inner">
        <div className="section-title reveal visible">
          <h2>Most Important <span>Root Words</span></h2>
          <div className="divider"></div>
          <p>Arabic words come from 3-letter roots. Know the root = understand hundreds of words</p>
        </div>
        
        <div className="roots-grid reveal visible">
          {ROOTS.map((r, i) => (
            <div key={i} className="root-card">
              <div className="root-arabic">{r.ar}</div>
              <div className="root-meaning">{r.en}</div>
              <span className="root-urdu">{r.ur}</span>
              <div className="root-count">{r.count} in Quran</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text3)', marginTop: '4px', direction: 'rtl', fontFamily: "'Amiri', serif" }}>
                {r.words}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#plan" className="btn-outline" style={{ padding: '0.8rem 2rem', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>Next: Continue Course ➔</a>
        </div>
      </div>
    </section>
  );
}
