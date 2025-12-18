import { StorySegment, HistoryItem } from '../types';

export const CHAPTER_IMAGE = "https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=1536,f=jpeg,q=85/posts/images/699751645688397825/78866d0b-fbcd-4361-8101-9e38a61df36c.jpg";

const SCRIPT_NODES: Record<string, StorySegment> = {
  'start': { 
    id: 'start', 
    speaker: "系統", 
    text: "Chapter 8 準備就緒。\n請在 services/chapter8.ts 中開始編輯您的劇本。", 
    backgroundImage: CHAPTER_IMAGE,
    nextId: "end" 
  },
  'end': { 
    id: 'end',
    speaker: "系統", 
    text: "本章節尚未完成。", 
    choices: [
      { id: "restart", text: "重新開始", action: "start" }
    ]
  }
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const startNewStory = async (theme?: string): Promise<StorySegment> => {
  await delay(300);
  return SCRIPT_NODES['start'];
};

export const continueStory = async (history: HistoryItem[], userAction: string): Promise<StorySegment> => {
  await delay(100);
  const nextNode = SCRIPT_NODES[userAction];
  if (!nextNode) {
    if (userAction === 'start') return SCRIPT_NODES['start'];
    return {
      id: 'error',
      speaker: 'System',
      text: 'Error: Scene not found.',
      choices: [{ id: 'reset', text: 'Reset', action: 'start' }]
    };
  }
  return nextNode;
};

export const getNodeById = async (id: string): Promise<StorySegment | null> => {
    return SCRIPT_NODES[id] || null;
};