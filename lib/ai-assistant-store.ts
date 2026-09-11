'use client';

import { useSyncExternalStore } from 'react';

type Listener = () => void;

interface AIAssistantState {
  isOpen: boolean;
  initialQuery: string;
}

let state: AIAssistantState = {
  isOpen: false,
  initialQuery: '',
};

const listeners = new Set<Listener>();

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

export const aiAssistantStore = {
  getState(): AIAssistantState {
    return state;
  },
  openAssistant(query = '') {
    state = { isOpen: true, initialQuery: query };
    emitChange();
  },
  closeAssistant() {
    state = { ...state, isOpen: false, initialQuery: '' };
    emitChange();
  },
  toggleAssistant() {
    state = { ...state, isOpen: !state.isOpen };
    emitChange();
  },
  setInitialQuery(query: string) {
    state = { ...state, initialQuery: query };
    emitChange();
  },
  subscribe(listener: Listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
};

export function useAIAssistantStore() {
  const currentState = useSyncExternalStore(
    aiAssistantStore.subscribe,
    aiAssistantStore.getState,
    () => ({ isOpen: false, initialQuery: '' }) // SSR safe snapshot
  );

  return {
    ...currentState,
    openAssistant: aiAssistantStore.openAssistant,
    closeAssistant: aiAssistantStore.closeAssistant,
    toggleAssistant: aiAssistantStore.toggleAssistant,
    setInitialQuery: aiAssistantStore.setInitialQuery,
  };
}
