import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="hero" id="top">
        <div className="bismillah-hero">بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ</div>
        <h1>Understand the <span>Quran</span><br/>Word by Word</h1>
        <p className="hero-sub">You can read Arabic — now learn what every word means</p>
        <p className="hero-urdu">آپ عربی پڑھ سکتے ہیں — اب ہر لفظ کا مطلب سیکھیں</p>
        <div className="hero-badges">
          <span className="badge">🇵🇰 Urdu Meanings</span>
          <span className="badge">🇬🇧 English Meanings</span>
          <span className="badge">📖 Word by Word</span>
          <span className="badge">🌱 Beginner → Advanced</span>
          <span className="badge">30 Day Course</span>
          <span className="badge">500+ Core Words</span>
        </div>
        <div className="hero-btns">
          <a href="#vocab" className="btn-primary">Start Learning →</a>
          <a href="#plan" className="btn-outline">View 30-Day Plan</a>
        </div>
        <div className="scroll-hint">
          <span className="scroll-arrow"></span>scroll
        </div>
      </section>

      <section className="progress-section" id="levels">
        <div className="section-inner">
          <div className="section-title reveal visible">
            <h2>Your Learning <span>Journey</span></h2>
            <div className="divider"></div>
            <p>From your first word to understanding 60% of the Quran</p>
          </div>
          <div className="levels-grid reveal visible">
            <Link to="/vocab" className="level-card active" style={{textDecoration:'none', color:'inherit'}}>
              <div className="level-icon">🌱</div>
              <div className="level-num">1</div>
              <div className="level-name">Foundations</div>
              <div className="level-desc">Allah, Rabb, Rahman — core names & pronouns (50 words)</div>
              <span className="level-badge">START</span>
            </Link>
            <Link to="/verses" className="level-card" style={{textDecoration:'none', color:'inherit'}}>
              <div className="level-icon">📖</div>
              <div className="level-num">2</div>
              <div className="level-name">Al-Fatiha</div>
              <div className="level-desc">Master the opening chapter — 29 unique words</div>
            </Link>
            <Link to="/courses" className="level-card" style={{textDecoration:'none', color:'inherit'}}>
              <div className="level-icon">🔤</div>
              <div className="level-num">3</div>
              <div className="level-name">Short Surahs</div>
              <div className="level-desc">Ikhlas, Falaq, Nas, Kawthar — daily prayer surahs</div>
            </Link>
            <Link to="/vocab" className="level-card" style={{textDecoration:'none', color:'inherit'}}>
              <div className="level-icon">⚡</div>
              <div className="level-num">4</div>
              <div className="level-name">High Frequency</div>
              <div className="level-desc">Top 100 most-used Quranic words = 50% comprehension</div>
            </Link>
            <Link to="/courses" className="level-card" style={{textDecoration:'none', color:'inherit'}}>
              <div className="level-icon">🏛️</div>
              <div className="level-num">5</div>
              <div className="level-name">Core Surahs</div>
              <div className="level-desc">Baqarah key verses, Yaseen, Ar-Rahman</div>
            </Link>
            <Link to="/grammar" className="level-card" style={{textDecoration:'none', color:'inherit'}}>
              <div className="level-icon">🌟</div>
              <div className="level-num">6</div>
              <div className="level-name">Advanced</div>
              <div className="level-desc">Verb roots, grammar patterns — 60%+ comprehension</div>
              <span className="level-badge" style={{background:'var(--gold2)',color:'var(--dark)'}}>GOAL</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
