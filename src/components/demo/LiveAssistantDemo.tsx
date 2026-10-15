import React, { useState } from 'react';
import { Send, CheckCheck, RefreshCw, Database } from 'lucide-react';
import { ChatMessage, LeadRecord } from '../../types';

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'm1',
    sender: 'lead',
    text: 'Hi there, saw your listing for the 2-bed apartment in Downtown Dubai. Is it still available?',
    time: '11:02 PM',
  },
  {
    id: 'm2',
    sender: 'assistant',
    text: 'Hello! 👋 Yes, the Downtown 2-bedroom on floor 34 is currently available. I can arrange a private viewing for you tomorrow.',
    time: '11:02 PM',
  },
  {
    id: 'm3',
    sender: 'assistant',
    text: 'To ensure this matches what you are looking for, what is your anticipated purchase budget for this property?',
    time: '11:03 PM',
  },
];

const INITIAL_RECORD: LeadRecord = {
  id: 'LD-9284',
  name: 'Rashid Al-Maktoum (Inquirer)',
  phone: '+971 50 ••• ••••',
  propertyInterest: 'Downtown Dubai 2-Bed Luxury Apt',
  budget: 'Pending qualification',
  preferredArea: 'Downtown Dubai',
  timeline: 'Awaiting answer',
  timestamp: '11:02 PM',
  channel: 'WhatsApp',
  status: 'Syncing',
};

export const LiveAssistantDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [record, setRecord] = useState<LeadRecord>(INITIAL_RECORD);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [step, setStep] = useState(0);

  const QUICK_PROMPTS = [
    { label: 'Budget: AED 3.8M cash', text: 'Our budget is up to AED 3,800,000 all-inclusive.', field: 'budget', val: 'AED 3.8M' },
    { label: 'Area: Downtown or Business Bay', text: 'We prefer Downtown Dubai or Business Bay.', field: 'area', val: 'Downtown / Business Bay' },
    { label: 'Timeline: Within 30 days', text: 'Looking to complete and get keys within 30 days.', field: 'timeline', val: 'Within 30 Days' },
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'lead',
      text,
      time: '11:04 PM',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      let replyText = '';
      let updatedRecord = { ...record };

      if (step === 0) {
        replyText = 'Excellent budget range. Which specific areas or views are your priority? (e.g. Burj Khalifa view, high floor?)';
        updatedRecord.budget = 'AED 3.8M';
        setStep(1);
      } else if (step === 1) {
        replyText = 'Noted on Downtown / Business Bay. And what is your expected timeline for completing the purchase?';
        updatedRecord.preferredArea = 'Downtown / Business Bay';
        setStep(2);
      } else {
        replyText = 'Perfect. All specifications are saved and passed to Senior Consultant Tariq. He will follow up at 9:00 AM with matching listings.';
        updatedRecord.timeline = 'Within 30 Days';
        updatedRecord.status = 'Qualified';
        setStep(3);
      }

      const botMsg: ChatMessage = {
        id: `b-${Date.now()}`,
        sender: 'assistant',
        text: replyText,
        time: '11:05 PM',
      };

      setMessages((prev) => [...prev, botMsg]);
      setRecord(updatedRecord);
      setIsTyping(false);
    }, 800);
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
    setRecord(INITIAL_RECORD);
    setStep(0);
    setInputText('');
  };

  return (
    <div className="w-full bg-black border border-white/30 text-white p-4 sm:p-6 space-y-6">
      {/* Top Bar with Mandatory Label */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/20 gap-2">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-white" />
          <span className="font-pixel text-sm uppercase tracking-widest text-white/90">
            SIMULATED ASSISTANT WORKSPACE
          </span>
          <span className="font-pixel text-xs bg-white/10 px-2 py-0.5 text-white/70">
            DEMO, SAMPLE DATA
          </span>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors cursor-pointer self-start sm:self-auto"
        >
          <RefreshCw className="w-3 h-3" />
          <span className="uppercase tracking-wider">Reset</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Chat Window */}
        <div className="lg:col-span-6 border border-white/20 bg-[#0B0B0B] flex flex-col h-[480px]">
          {/* Header */}
          <div className="px-4 py-3 border-b border-white/20 flex items-center justify-between bg-black">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 border border-white/40 flex items-center justify-center text-xs font-mono">
                VT
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold text-white">
                Apex Properties (WhatsApp)
              </span>
            </div>
            <span className="font-pixel text-xs text-white/50">11:05 PM</span>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs">
            {messages.map((m) => {
              const isLead = m.sender === 'lead';
              return (
                <div key={m.id} className={`flex ${isLead ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] p-3 ${
                      isLead
                        ? 'bg-white/15 text-white border border-white/30'
                        : 'bg-black text-white/90 border border-white/15'
                    }`}
                  >
                    <p className="leading-relaxed">{m.text}</p>
                    <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-white/40 font-pixel">
                      <span>{m.time}</span>
                      {isLead && <CheckCheck className="w-3 h-3 text-white/60" />}
                    </div>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="text-[11px] font-pixel text-white/50 animate-pulse">
                Assistant typing reply...
              </div>
            )}
          </div>

          {/* Quick Prompts */}
          <div className="p-2 border-t border-white/15 bg-black flex flex-wrap gap-1.5">
            <span className="font-pixel text-[11px] text-white/50 w-full">Quick lead answers:</span>
            {QUICK_PROMPTS.map((qp, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSend(qp.text)}
                className="text-xs bg-white/5 hover:bg-white/15 border border-white/20 px-2 py-1 text-white/80 transition-colors cursor-pointer"
              >
                {qp.label}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-2 border-t border-white/20 bg-black flex gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type inquiry as property buyer..."
              className="flex-1 bg-transparent border border-white/20 px-3 py-1.5 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-white/60"
            />
            <button
              type="submit"
              className="px-3 py-1.5 bg-white text-black hover:bg-white/90 text-xs font-semibold uppercase tracking-wider cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Right: Live CRM Lead Record Panel */}
        <div className="lg:col-span-6 border border-white/20 bg-[#0B0B0B] p-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/20">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-white" />
                <span className="text-xs uppercase tracking-widest font-semibold text-white">
                  LIVE LEAD RECORD (CRM / SHEET)
                </span>
              </div>
              <span className="font-pixel text-xs text-white/60 border border-white/20 px-2 py-0.5">
                STATUS: {record.status.toUpperCase()}
              </span>
            </div>

            <p className="text-xs text-white/80 leading-relaxed">
              Extracted automatically from unstructured natural chat without form fatigue:
            </p>

            <div className="space-y-2 font-mono text-xs border border-white/15 p-4 bg-black">
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-white/50">LEAD ID:</span>
                <span className="text-white">{record.id}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-white/50">CHANNEL:</span>
                <span className="text-white">{record.channel}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-white/50">TIME:</span>
                <span className="text-white">{record.timestamp}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-white/50">PROPERTY:</span>
                <span className="text-white">{record.propertyInterest}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-white/50">BUDGET:</span>
                <span className={record.budget.includes('3.8M') ? 'text-white font-bold' : 'text-white/40'}>
                  {record.budget}
                </span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-white/50">PREFERRED AREA:</span>
                <span className="text-white">{record.preferredArea}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">TIMELINE:</span>
                <span className={record.timeline.includes('30') ? 'text-white font-bold' : 'text-white/40'}>
                  {record.timeline}
                </span>
              </div>
            </div>

            <div className="p-3 border border-white/15 bg-black text-xs text-white/80 space-y-1">
              <span className="font-pixel uppercase text-white/60 text-[11px] block">
                Morning Agent Action:
              </span>
              <p>
                {record.status === 'Qualified'
                  ? 'Lead verified with budget and urgency. Queued for immediate 9:00 AM phone call by senior broker.'
                  : 'Awaiting remaining buyer preferences before generating morning dispatch card.'}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/15 text-[11px] font-pixel text-white/50 flex justify-between">
            <span>INTEGRATES WITH GOOGLE SHEETS & HUBSPOT</span>
            <span>PILOT READY</span>
          </div>
        </div>
      </div>
    </div>
  );
};
