import { Link } from 'react-router-dom';
import { GRAMMAR } from '../data';

export default function Grammar() {
  return (
    <section className="grammar-section" style={{ minHeight: '100vh', paddingTop: '100px' }}>
      <div className="section-inner">
        <div className="section-title reveal visible">
          <h2>Quranic Arabic <span>Grammar</span></h2>
          <div className="divider"></div>
          <p>Key patterns that repeat throughout the Quran — once you know these, sentences unlock</p>
        </div>
        
        <div className="grammar-grid reveal visible">
          {GRAMMAR.map((g, i) => (
            <div key={i} className="grammar-card">
              <h3>{g.title}</h3>
              <p>{g.text}</p>
              <div className="grammar-example">
                {g.ar.split('\n').map((l, j) => (
                  <div key={j} style={{ fontFamily: "'Amiri', serif", fontSize: '1.1rem', direction: 'rtl', color: 'var(--gold2)', marginBottom: '2px' }}>
                    {l}
                  </div>
                ))}
                <span className="g-english">{g.en}</span>
                <span className="g-urdu">{g.ur}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#roots" className="btn-outline" style={{ padding: '0.8rem 2rem', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>Next: Learn Root Words ➔</a>
        </div>
      </div>
    </section>
  );
}
