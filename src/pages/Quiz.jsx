import { useState, useEffect } from 'react';
import { VOCAB } from '../data';

export default function Quiz({ quizScore, setQuizScore }) {
  const [currentQuizWord, setCurrentQuizWord] = useState(null);
  const [options, setOptions] = useState([]);
  const [quizStreak, setQuizStreak] = useState(0);
  const [quizTotal, setQuizTotal] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [feedback, setFeedback] = useState(null); // { isCorrect: boolean, text: string, html: JSX }
  const [selectedWordEn, setSelectedWordEn] = useState(null);

  const nextQuiz = () => {
    setQuizAnswered(false);
    setFeedback(null);
    setSelectedWordEn(null);
    
    // Pick random word
    let pool = VOCAB;
    if (currentQuizWord) {
      pool = VOCAB.filter(w => w !== currentQuizWord);
    }
    const targetWord = pool[Math.floor(Math.random() * pool.length)];
    setCurrentQuizWord(targetWord);
    
    // Generate 4 options
    let opts = [targetWord];
    const shuffled = [...VOCAB].sort(() => Math.random() - 0.5);
    for (const w of shuffled) {
      if (w !== targetWord && opts.length < 4) opts.push(w);
    }
    opts.sort(() => Math.random() - 0.5);
    setOptions(opts);
  };

  useEffect(() => {
    nextQuiz();
  }, []);

  const handleAnswer = (opt) => {
    if (quizAnswered) return;
    setQuizAnswered(true);
    setSelectedWordEn(opt.en);
    setQuizTotal(prev => prev + 1);
    
    const isCorrect = opt === currentQuizWord;
    
    if (isCorrect) {
      setQuizScore(prev => prev + 1);
      setQuizStreak(prev => prev + 1);
      setFeedback({
        isCorrect: true,
        html: <span style={{ color: 'var(--green)' }}>✓ Correct! {currentQuizWord.ar} = {currentQuizWord.en} — {currentQuizWord.ur}</span>
      });
    } else {
      setQuizStreak(0);
      setFeedback({
        isCorrect: false,
        html: <span style={{ color: 'var(--red)' }}>✗ Correct answer: {currentQuizWord.en} — {currentQuizWord.ur}</span>
      });
    }
  };

  if (!currentQuizWord) return null;

  return (
    <section className="quiz-section" style={{ minHeight: '100vh', paddingTop: '100px' }}>
      <div className="section-inner">
        <div className="section-title reveal visible">
          <h2>Test Your <span>Knowledge</span></h2>
          <div className="divider"></div>
          <p>Quick vocabulary quiz — can you match the Arabic word to its meaning?</p>
        </div>
        
        <div className="quiz-wrap reveal visible">
          <div className="quiz-card">
            <div className="quiz-arabic">{currentQuizWord.ar}</div>
            <div className="quiz-prompt">What does this word mean?</div>
            
            <div className="quiz-options">
              {options.map((opt, i) => {
                let btnClass = "quiz-opt";
                if (quizAnswered) {
                  if (opt === currentQuizWord) btnClass += " correct";
                  else if (opt.en === selectedWordEn) btnClass += " wrong";
                }
                
                return (
                  <button 
                    key={i} 
                    className={btnClass} 
                    disabled={quizAnswered}
                    onClick={() => handleAnswer(opt)}
                  >
                    <strong>{opt.en}</strong><br/>
                    <small style={{ fontFamily: "'Noto Nastaliq Urdu', serif", direction: 'rtl' }}>{opt.ur}</small>
                  </button>
                );
              })}
            </div>
            
            <div className="quiz-feedback" style={{ minHeight: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', padding: '0.5rem' }}>
              {feedback?.html}
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div className="quiz-score">{quizScore}</div>
              <div className="quiz-score-label">Correct</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="quiz-score" style={{ color: 'var(--teal)' }}>{quizStreak}🔥</div>
              <div className="quiz-score-label">Streak</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="quiz-score" style={{ color: 'var(--text3)' }}>{quizTotal}</div>
              <div className="quiz-score-label">Total</div>
            </div>
          </div>
          
          <button className="btn-primary" onClick={nextQuiz}>Next Word →</button>
        </div>
      </div>
    </section>
  );
}
