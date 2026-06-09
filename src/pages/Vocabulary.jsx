import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { VOCAB } from '../data';

export default function Vocabulary() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVocab = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return VOCAB.filter(w => {
      const matchCat = activeCategory === 'all' || w.cat === activeCategory;
      const matchQ = !q || w.ar.includes(q) || w.tr.toLowerCase().includes(q) || w.en.toLowerCase().includes(q) || w.ur.includes(q);
      return matchCat && matchQ;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="vocab-section" style={{ minHeight: '100vh', paddingTop: '100px' }}>
      <div className="section-inner">
        <div className="section-title reveal visible">
          <h2>Core Quranic <span>Vocabulary</span></h2>
          <div className="divider"></div>
          <p>The most frequently used words in the Quran — learn these and understand more than half of what you read</p>
        </div>
        <div className="reveal visible">
          <input 
            type="text" 
            className="search-box" 
            placeholder="🔍  Search Arabic, English or Urdu..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="filter-bar">
            {['all', 'Allah', 'pronoun', 'verb', 'noun', 'particle', 'dua', 'jannah'].map(cat => (
              <button 
                key={cat} 
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'all' ? 'All' : 
                 cat === 'Allah' ? 'Allah & Names' : 
                 cat === 'dua' ? 'Duas & Prayer' : 
                 cat === 'jannah' ? 'Jannah/Jahannam' : 
                 cat.charAt(0).toUpperCase() + cat.slice(1) + 's'}
              </button>
            ))}
          </div>
          <div className="vocab-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Arabic</th>
                  <th>Transliteration</th>
                  <th>English</th>
                  <th>Urdu</th>
                  <th>Category</th>
                  <th>Frequency</th>
                </tr>
              </thead>
              <tbody>
                {filteredVocab.map((w, i) => (
                  <tr key={i}>
                    <td style={{ color: 'var(--text3)', fontSize: '0.8rem' }}>{i + 1}</td>
                    <td className="arabic-cell">{w.ar}</td>
                    <td style={{ fontSize: '0.85rem', color: 'var(--text3)' }}>{w.tr}</td>
                    <td className="english-cell">{w.en}</td>
                    <td className="urdu-cell">{w.ur}</td>
                    <td><span className="cat-tag">{w.cat}</span></td>
                    <td style={{ minWidth: '80px' }}>
                      <div className="freq-bar"><div className="freq-fill" style={{ width: `${w.freq}%` }}></div></div>
                      <span className="count-label">{w.freq}%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="#verses" className="btn-outline" style={{ padding: '0.8rem 2rem', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>Next: Explore Verses ➔</a>
          </div>
        </div>
      </div>
    </section>
  );
}
