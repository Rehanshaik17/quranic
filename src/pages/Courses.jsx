import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { COURSES_DATA } from '../data';

export default function Courses() {
  const [currentCourseId, setCurrentCourseId] = useState(() => {
    return parseInt(localStorage.getItem('currentCourseId') || '1');
  });
  
  const [courseProgress, setCourseProgress] = useState(() => {
    const saved = localStorage.getItem('courseProgress');
    if (saved) return JSON.parse(saved);
    
    // Migrate old completedDays if it exists
    const oldCompleted = localStorage.getItem('completedDays');
    if (oldCompleted) {
      const parsedOld = JSON.parse(oldCompleted);
      localStorage.removeItem('completedDays');
      return { 1: parsedOld };
    }
    return {};
  });

  const [activeWeek, setActiveWeek] = useState(1);
  const [modalDay, setModalDay] = useState(null);

  // Initialize course progress if it doesn't exist
  useEffect(() => {
    if (!courseProgress[currentCourseId]) {
      setCourseProgress(prev => {
        const newProgress = { ...prev, [currentCourseId]: [] };
        localStorage.setItem('courseProgress', JSON.stringify(newProgress));
        return newProgress;
      });
    } else {
      localStorage.setItem('courseProgress', JSON.stringify(courseProgress));
    }
  }, [currentCourseId, courseProgress]);

  const currentCourseData = COURSES_DATA.find(c => c.id === currentCourseId) || COURSES_DATA[0];
  const unlockedCourses = Object.keys(courseProgress).map(Number);
  if (!unlockedCourses.includes(currentCourseId)) unlockedCourses.push(currentCourseId);
  const completed = courseProgress[currentCourseId] || [];
  const totalDays = currentCourseData.days.length;
  const progressPct = Math.round((completed.length / totalDays) * 100) || 0;
  const isCourseComplete = completed.length === totalDays;

  const toggleDay = (e, dayNum) => {
    e.stopPropagation();
    let newCompleted = [...completed];
    if (newCompleted.includes(dayNum)) {
      newCompleted = newCompleted.filter(d => d !== dayNum);
    } else {
      newCompleted.push(dayNum);
    }
    setCourseProgress(prev => ({
      ...prev,
      [currentCourseId]: newCompleted
    }));
  };

  const unlockNextCourse = () => {
    if (currentCourseId < 10) {
      const nextId = currentCourseId + 1;
      setCurrentCourseId(nextId);
      localStorage.setItem('currentCourseId', nextId.toString());
      setActiveWeek(1);
    }
  };

  const daysToShow = currentCourseData.days.filter(d => d.week === activeWeek);

  return (
    <section className="plan-section" style={{ minHeight: '100vh', paddingTop: '100px' }}>
      <div className="section-inner">
        <div className="section-title reveal visible">
          <h2>30-Day Learning Plan</h2>
          <div className="divider"></div>
          <p>{currentCourseData.title} - {currentCourseData.desc}</p>
          
          {unlockedCourses.length > 1 && (
            <div id="courseDropdownContainer" style={{ marginTop: '1.5rem' }}>
              <select 
                value={currentCourseId}
                onChange={(e) => {
                  setCurrentCourseId(parseInt(e.target.value));
                  setActiveWeek(1);
                }}
                style={{
                  padding: '0.5rem 1rem', borderRadius: '8px', background: 'var(--dark3)', 
                  color: 'var(--text)', border: '1px solid var(--border)', fontFamily: 'inherit', 
                  fontSize: '0.95rem', cursor: 'pointer'
                }}
              >
                {unlockedCourses.map(id => (
                  <option key={id} value={id}>
                    {COURSES_DATA.find(x => x.id === id)?.title}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="reveal visible">
          <div className="weeks-tabs">
            {[1, 2, 3, 4].map(week => (
              <button 
                key={week}
                className={`week-tab ${activeWeek === week ? 'active' : ''}`}
                onClick={() => setActiveWeek(week)}
              >
                Week {week}
              </button>
            ))}
          </div>

          <div id="daysContainer">
            {daysToShow.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text3)' }}>
                No tasks for this week.
              </div>
            ) : (
              <div className="days-grid">
                {daysToShow.map(d => (
                  <div 
                    key={d.day} 
                    className={`day-card ${completed.includes(d.day) ? 'done' : ''}`}
                    onClick={() => setModalDay(d.day)}
                  >
                    <div 
                      className={`day-check ${completed.includes(d.day) ? 'checked' : ''}`}
                      onClick={(e) => toggleDay(e, d.day)}
                    >
                      {completed.includes(d.day) ? '✓' : ''}
                    </div>
                    <div className="day-num">Task {d.day}</div>
                    <div className="day-title">{d.title}</div>
                    <div style={{ fontFamily: "'Amiri', serif", fontSize: '1.1rem', color: 'var(--gold2)', margin: '4px 0', direction: 'rtl' }}>
                      {d.arabic}
                    </div>
                    <div className="day-words">{d.words}</div>
                    <div style={{ fontFamily: "'Noto Nastaliq Urdu', serif", fontSize: '0.75rem', color: 'var(--text3)', direction: 'rtl', marginTop: '4px' }}>
                      {d.urdu}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{ maxWidth: '500px', margin: '2rem auto 0', textAlign: 'center' }}>
            <div className="progress-bar-wrap">
              <div className="progress-bar" style={{ width: `${progressPct}%` }}></div>
            </div>
            <div className="progress-text" style={{ marginBottom: '1rem' }}>
              {completed.length} / {totalDays} tasks completed in Course {currentCourseId}
              {isCourseComplete && currentCourseId === 10 && " — ALL 10 COURSES COMPLETED! 🎓🏆"}
            </div>
            
            {isCourseComplete && currentCourseId < 10 && (
              <button 
                className="btn-primary" 
                style={{ width: '100%', marginTop: '1rem', fontSize: '1.1rem', padding: '0.8rem', background: 'var(--gold2)', color: 'var(--dark)', animation: 'pulse 2s infinite' }}
                onClick={unlockNextCourse}
              >
                ✨ Unlock Next Course ✨
              </button>
            )}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="#stories" className="btn-outline" style={{ padding: '0.8rem 2rem', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>Next: Read Stories ➔</a>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {modalDay && (() => {
        const d = currentCourseData.days.find(x => x.day === modalDay);
        return (
          <div className="day-detail open" onClick={(e) => { if (e.target.className.includes('day-detail')) setModalDay(null) }}>
            <div className="day-modal">
              <div className="modal-close" onClick={() => setModalDay(null)}>×</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <span style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>
                  Task {d.day}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text3)' }}>Week {d.week}</span>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', marginBottom: '0.25rem' }}>{d.title}</h2>
              <div className="modal-day-arabic">{d.arabic}</div>
              <div style={{ fontFamily: "'Noto Nastaliq Urdu', serif", direction: 'rtl', color: 'var(--text2)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                {d.urdu}
              </div>
              
              <h3 style={{ fontSize: '0.9rem', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                Today's Tasks
              </h3>
              <ul className="task-list">
                {d.task.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
              
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button 
                  className="btn-primary" 
                  onClick={(e) => { toggleDay(e, d.day); setModalDay(null); }}
                  style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
                >
                  {completed.includes(d.day) ? 'Mark Incomplete' : 'Mark Complete ✓'}
                </button>
                <button className="btn-outline" onClick={() => setModalDay(null)} style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>
                  Close
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
}
