import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send } from 'lucide-react';

export const InteractiveTerminal = () => {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Fusintech Kernel System v5.0.0-release' },
    { type: 'system', text: 'Type "help" to display available system utilities.' }
  ]);
  const [input, setInput] = useState('');
  const [matrixMode, setMatrixMode] = useState(false);
  const logsRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    if (logsRef.current) {
      logsRef.current.scrollTop = logsRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    let response = [];

    if (trimmed === '') return;

    // Log the input command
    response.push({ type: 'input', text: `guest@fusintech_os:~$ ${cmd}` });

    switch (trimmed) {
      case 'help':
        response.push(
          { type: 'output', text: 'Available System Utilities:' },
          { type: 'output', text: '  about        - View identity biometric parameters' },
          { type: 'output', text: '  skills       - Display core technological parameters' },
          { type: 'output', text: '  projects     - Query active system project builds' },
          { type: 'output', text: '  hack         - Initialize local kernel diagnostics sweep' },
          { type: 'output', text: '  clear        - Flush terminal console display' }
        );
        break;
      case 'about':
        response.push(
          { type: 'output', text: '--- BIOMETRIC LOGS: BINEESH S ---' },
          { type: 'output', text: 'Role: Founder & CEO of Fusintech (EdTech Innovation Platform).' },
          { type: 'output', text: 'Domain Specialty: 4.0 Technologies, AI, Python Development, Ethical Hacking.' },
          { type: 'output', text: 'Bio: Aspiring Full-Stack Architect with a focus on self-learning and rapid execution.' }
        );
        break;
      case 'skills':
        response.push(
          { type: 'output', text: '--- TECHNOLOGICAL STACK POWER LEVEL ---' },
          { type: 'output', text: '  Python        [████████████████████] 100% (Expert)' },
          { type: 'output', text: '  Cybersecurity [██████████████████] 90%  (Ethical Hacking)' },
          { type: 'output', text: '  AI / ML       [████████████████] 80%  (TensorFlow/Models)' },
          { type: 'output', text: '  Full-Stack JS [██████████████] 70%  (React/Django)' }
        );
        break;
      case 'projects':
        response.push(
          { type: 'output', text: '--- ACTIVE REPOSITORIES CHECKPOINT ---' },
          { type: 'output', text: '  1. Rag Chatbot     - Intelligent OSINT/docs query agent.' },
          { type: 'output', text: '  2. RecipeRave      - Django social-sharing culinary workspace.' },
          { type: 'output', text: '  3. MobileInfoga    - Telethon carrier parser.' },
          { type: 'output', text: '  4. OpenSS7 Clone   - Technical structure rebuild.' }
        );
        break;
      case 'hack':
        setMatrixMode(true);
        response.push({ type: 'success', text: 'Sweep protocol loaded. matrix sweep running...' });
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        response.push({ type: 'error', text: `Command not found: "${cmd}". Type "help" for available utilities.` });
    }

    setHistory((prev) => [...prev, ...response]);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  useEffect(() => {
    if (matrixMode) {
      const timer = setTimeout(() => {
        setMatrixMode(false);
        setHistory((prev) => [
          ...prev,
          { type: 'system', text: 'Diagnostics sweep completed. Node state: STABLE.' }
        ]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [matrixMode]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div 
      className={`os-terminal-card os-window-frame ${matrixMode ? 'matrix-active' : ''}`}
      onClick={focusInput}
    >
      <div className="os-window-header">
        <div className="os-control-dots">
          <span className="os-dot red"></span>
          <span className="os-dot yellow"></span>
          <span className="os-dot green"></span>
        </div>
        <div className="os-window-title">FUSINTECH_SYS_SHELL</div>
        <Terminal size={14} className="text-secondary" />
      </div>

      <div className="os-terminal-body font-mono">
        {matrixMode ? (
          <div className="matrix-rain">
            <div className="rain-col">0101101011010</div>
            <div className="rain-col">1101011000101</div>
            <div className="rain-col">0011010101101</div>
            <div className="rain-col">1011011010100</div>
            <div className="rain-col">0110010101011</div>
            <div className="rain-col">1010101101010</div>
          </div>
        ) : (
          <>
            <div ref={logsRef} className="terminal-logs">
              {history.map((log, idx) => (
                <div key={idx} className={`terminal-line ${log.type}`}>
                  {log.text}
                </div>
              ))}
            </div>

            <div className="terminal-input-prompt mt-2">
              <span className="prompt-label">guest@fusintech_os:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="terminal-input"
                autoComplete="off"
                spellCheck="false"
                aria-label="OS terminal prompt input"
              />
              <button 
                onClick={() => handleCommand(input)}
                className="terminal-send-btn"
                aria-label="Send command"
              >
                <Send size={12} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default InteractiveTerminal;
