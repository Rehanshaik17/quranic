import { useState, useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import Home from './pages/Home';
import Vocabulary from './pages/Vocabulary';
import Verses from './pages/Verses';
import Grammar from './pages/Grammar';
import Roots from './pages/Roots';
import Courses from './pages/Courses';
import Stories from './pages/Stories';
import Quiz from './pages/Quiz';
import Splash3D from './components/Splash3D';
import AlphabetPage from './pages/Alphabet';
import Flashcards from './pages/Flashcards';
import SecretLove from './components/SecretLove';
import SecretSorry from './components/SecretSorry';

function App() {
  const [userName, setUserName] = useLocalStorage('userName', '');
  const [showSplash, setShowSplash] = useState(!userName);
  const [navVisible, setNavVisible] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setNavVisible(window.scrollY > 100);
      
      // Also handle reveal animations on scroll
      document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuActive(false);

  // If splash is showing, render only the splash screen
  if (showSplash) {
    return (
      <Splash3D 
        onComplete={(name) => {
          setUserName(name);
          setShowSplash(false);
        }} 
      />
    );
  }

  return (
    <>
      {/* NAV */}
      <nav id="mainNav" className={navVisible ? 'visible' : ''}>
        <div className="nav-logo">
          {userName ? `Welcome, ${userName}` : 'القرآن الكريم'}
        </div>
        
        <button className="menu-toggle" onClick={() => setMenuActive(!menuActive)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"></path></svg>
        </button>

        <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
          <li><a href="#alphabet" onClick={closeMenu}>Alphabet</a></li>
          <li><a href="#vocab" onClick={closeMenu}>Vocabulary</a></li>
          <li><a href="#flashcards" onClick={closeMenu}>Flashcards</a></li>
          <li><a href="#verses" onClick={closeMenu}>Verses</a></li>
          <li><a href="#grammar" onClick={closeMenu}>Grammar</a></li>
          <li><a href="#roots" onClick={closeMenu}>Roots</a></li>
          <li><a href="#plan" onClick={closeMenu}>Courses</a></li>
          <li><a href="#stories" onClick={closeMenu}>Stories</a></li>
          <li><a href="#quiz" onClick={closeMenu}>Quiz</a></li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ background: 'var(--gold)', color: '#fff', padding: '4px 12px', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.85rem', marginLeft: '0.5rem' }}>
              Score: {quizScore}
            </div>
          </li>
        </ul>
      </nav>

      <Home />
      
      <div id="alphabet"><AlphabetPage /></div>
      <div id="vocab"><Vocabulary /></div>
      <div id="flashcards"><Flashcards /></div>
      <div id="verses"><Verses /></div>
      <div id="grammar"><Grammar /></div>
      <div id="roots"><Roots /></div>
      <div id="plan"><Courses /></div>
      <div id="stories"><Stories /></div>
      <div id="quiz"><Quiz quizScore={quizScore} setQuizScore={setQuizScore} /></div>

      {/* FAB */}
      <a href="#plan" id="fab" className="btn-primary" style={{
        position:'fixed', bottom:'2rem', right:'2rem', zIndex:99, display: navVisible ? 'block' : 'none', 
        padding:'1rem 1.5rem', borderRadius:'50px', boxShadow:'0 10px 20px rgba(0,0,0,0.3)', 
        fontSize:'1rem', fontWeight:600, border:'2px solid var(--gold2)', animation:'pulse 2s infinite',
        textDecoration: 'none'
      }}>
        🚀 Continue Course
      </a>

      {/* FOOTER */}
      <footer>
        <div className="section-inner">
          <div className="footer-arabic">وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ</div>
          <p>"My success is not but through Allah" (Quran 11:88)</p>
          <div className="divider"></div>
          <p>Created for the sake of learning the Book of Allah.</p>
          <div style={{ marginTop: '1.5rem' }}>
            <SecretLove />
            <SecretSorry />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
