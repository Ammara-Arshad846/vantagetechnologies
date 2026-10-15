export interface LeadRecord {
  id: string;
  name: string;
  phone: string;
  propertyInterest: string;
  budget: string;
  preferredArea: string;
  timeline: string;
  timestamp: string;
  channel: 'WhatsApp' | 'Website Widget';
  status: 'Qualified' | 'Follow-up Scheduled' | 'Syncing';
}

export interface ChatMessage {
  id: string;
  sender: 'lead' | 'assistant';
  text: string;
  time: string;
  extractedField?: {
    label: string;
    value: string;
  };
}

export interface ServiceDetail {
  id: string;
  title: string;
  flagshipConnection: string;
  description: string;
  deliverables: string[];
  tools: string[];
}
