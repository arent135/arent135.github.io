import React, { useState, useEffect, useRef } from 'react';
import { DEFAULT_COMMANDS } from '../data/portfolioData';

interface TerminalWindowProps {
  onOpenContact: () => void;
  onOpenProjects: () => void;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({ onOpenContact, onOpenProjects }) => {
  const [typedText, setTypedText] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; result?: string[] }>>([
    { cmd: 'WELCOME', result: ['Feel free to navigate my portfolio by entering commands into the terminal. Type "help" for a list of commands.'] }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isInteractive, setIsInteractive] = useState(true);

  // Auto typing state
  const commandIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isInteractive) return;

    function type() {
      const currentCommand = DEFAULT_COMMANDS[commandIndexRef.current];

      if (isDeletingRef.current) {
        setTypedText(currentCommand.substring(0, charIndexRef.current - 1));
        charIndexRef.current--;
      } else {
        setTypedText(currentCommand.substring(0, charIndexRef.current + 1));
        charIndexRef.current++;
      }

      if (!isDeletingRef.current && charIndexRef.current === currentCommand.length) {
        isDeletingRef.current = true;
        timeoutRef.current = setTimeout(type, 2500);
      } else if (isDeletingRef.current && charIndexRef.current === 0) {
        isDeletingRef.current = false;
        
        // Add to history
        setHistory(prev => [
          { cmd: currentCommand, result: getMockOutput(currentCommand) },
          ...prev.slice(0, 5)
        ]);

        commandIndexRef.current = (commandIndexRef.current + 1) % DEFAULT_COMMANDS.length;
        timeoutRef.current = setTimeout(type, 800);
      } else {
        timeoutRef.current = setTimeout(type, isDeletingRef.current ? 30 : 60);
      }
    }

    timeoutRef.current = setTimeout(type, 1000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isInteractive]);

  const getMockOutput = (cmd: string): string[] => {
    const trimmed = cmd.trim().toLowerCase();
    if (trimmed.includes('install')) {
      return ['+ secure-systems@3.9.0', 'added 14 packages in 0.8s'];
    }
    if (trimmed.includes('build')) {
      return ['Building target binaries...', '✔ System optimizations applied [24ms]'];
    }
    if (trimmed.includes('ls')) {
      return ['drwxr-xr-x  ai-recycling-assistant', 'drwxr-xr-x  ctf-writeups-archive', 'drwxr-xr-x  pulseguard-zkp'];
    }
    if (trimmed.includes('profile')) {
      return ['{ "name": "Alex", "degree": "BS CS", "gpa": "3.9", "focus": "Security & AI" }'];
    }
    if (trimmed.includes('grep')) {
      return ['./brain/philosophy.md: "Secure-by-design, scalable by architecture."'];
    }
    return ['Command executed successfully.'];
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const executeCommand = (cmd: string) => {
    if (!cmd.trim()) return;

    
    setInputVal('');
    setIsInteractive(true);

    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    if (cmd === 'help') {
      setHistory(prev => [
        ...prev,
        {
          cmd,
          result: [
            'Available commands:',
            '  whoami     - Display developer identity',
            '  github     - Open GitHub profile',
            '  linkedin   - Open LinkedIn profile',
            '  projects   - View selected projects list',
            '  contact    - Launch contact interface',
            '  clear      - Clear terminal history',
          ]
        }
      ]);
      return;
    }

    if (cmd === 'whoami') {
      setHistory(prev => [
        ...prev,
        { cmd, result: ['Alex // Computer Science Student with an interest in Cybersecurity & AI', 'GPA: 4.0/4.0 | Case Western Reserve University'] }
      ]);
      return;
    }

    if (cmd === 'github') {
      window.open('https://github.com/arent135', '_blank');
      setHistory(prev => [
        ...prev,
        { cmd, result: ['Opening GitHub profile...'] }
      ]);
      
      return;
    }

    if (cmd === 'linkedin') {
      window.open('https://www.linkedin.com/in/alexanderbrenteria/', '_blank');
      setHistory(prev => [
        ...prev,
        { cmd, result: ['Opening LinkedIn profile...'] }
      ]);
      return;
    }

    

    if (cmd === 'projects') {
      onOpenProjects();
      setHistory(prev => [
        ...prev,
        { cmd, result: ['Scrolling to #projects...', '1. AI Recycling Assistant', '2. CTF Writeups Archive', '3. PulseGuard Identity Tool'] }
      ]);
      return;
    }

    if (cmd === 'contact') {
      onOpenContact();
      setHistory(prev => [
        { cmd, result: ['Launching contact modal window...'] },
        ...prev
      ]);
      return;
    }

    if (cmd === 'auto') {
      setIsInteractive(false);
      charIndexRef.current = 0;
      isDeletingRef.current = false;
      return;
    }

    setHistory(prev => [
      { cmd, result: getMockOutput(cmd) },
      ...prev
    ]);
  };

  const executeQuickCmd = (cmd: string) => {
    executeCommand(cmd);
    //getMockOutput(cmd); // Pre-fetch mock output for quick commands
    //handleCommandSubmit(new Event('submit') as unknown as React.FormEvent);
  };

  return (
    <div className="glass-panel rounded-lg shadow-2xl overflow-hidden border border-[#3c4b35]/30">
      {/* Top Bar */}
      <div className="bg-[#2a2f2a]/50 px-5 py-3 flex justify-between items-center border-b border-[#3c4b35]/30">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10 hover:bg-red-500/50 transition-colors"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white/10 hover:bg-yellow-500/50 transition-colors"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white/10 hover:bg-green-500/50 transition-colors"></div>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-xs text-[#baccb0]">terminal</span>
          <span className="font-code text-[10px] text-[#baccb0] tracking-widest uppercase opacity-80">Terminal — node</span>
        </div>
        {/* <button 
          onClick={() => setIsInteractive(!isInteractive)}
          className="font-code text-[9px] px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-[#baccb0] transition-colors"
          title="Toggle manual terminal typing"
        >
          {!isInteractive ? 'AUTO-MODE' : 'INTERACTIVE'}
        </button> */}
      </div>

      {/* Terminal Display */}
      <div className="p-6 h-80 font-code text-[#baccb0]/90 space-y-3 overflow-y-auto flex flex-col-reverse custom-scrollbar">
        {/* Interactive Prompt Form */}
        <form onSubmit={handleCommandSubmit} className="pt-2">
          <div className="flex items-center gap-2">
            <span className="text-[#baccb0]/60 font-bold">$</span>
            {isInteractive ? (
              <input 
                type="text" 
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type command (e.g. 'help', 'whoami', 'projects')..."
                className="bg-transparent border-none outline-none font-code text-xs text-[#dae6d0] w-full placeholder-[#baccb0]/30"
                autoFocus
              />
            ) : (
              <div className="flex items-center">
                <span className="terminal-cursor text-xs text-[#dae6d0]">{typedText}</span>
              </div>
            )}
          </div>
        </form>

        {/* History Items */}
        <div className="space-y-3 text-[12px] opacity-90 font-light">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-[#dae6d0]">
                <span className="text-[#baccb0]/50">❯</span>
                <span className="font-medium">{item.cmd}</span>
              </div>
              {item.result && item.result.map((line, lIdx) => (
                <div key={lIdx} className="pl-5 text-[#baccb0]/70 text-[11px]">
                  {line}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Action Preset Chips */}
      <div className="px-5 py-2.5 bg-[#121412]/80 border-t border-[#3c4b35]/20 flex flex-wrap gap-2 items-center">
        <span className="font-code text-[10px] text-[#baccb0]/50 mr-1">QUICK:</span>
        {['whoami', 'projects', 'github', 'linkedin', 'help', 'clear'].map(cmd => (
          <button
            key={cmd}
            onClick={() => executeQuickCmd(cmd)}
            className="font-code text-[10px] px-2 py-0.5 rounded bg-white/5 hover:bg-[#baccb0]/20 text-[#baccb0] transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
};
