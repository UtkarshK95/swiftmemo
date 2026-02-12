import { Note } from "../types/note";

const isChrome = typeof chrome !== "undefined" && !!chrome.storage;

const syncStore = isChrome ? chrome.storage.sync : null;
const localStore = isChrome ? chrome.storage.local : null;

export const loadNotes = (setNotes: (n: Note[]) => void) => {
  if (!isChrome) return;

  syncStore!.get(["swiftmemo_notes"], (syncResult) => {
    const syncNotes = syncResult.swiftmemo_notes as Note[] | undefined;

    if (syncNotes && syncNotes.length) {
      setNotes(syncNotes);
    } else {
      localStore!.get(["swiftmemo_notes"], (localResult) => {
        setNotes((localResult.swiftmemo_notes as Note[]) || []);
      });
    }
  });
};

export const saveNotesToStorage = (notes: Note[]) => {
  if (!isChrome) return;

  syncStore!.set({ swiftmemo_notes: notes }, () => {
    if (chrome.runtime.lastError) {
      localStore!.set({ swiftmemo_notes: notes });
    }
  });
};

export const subscribeToSync = (setNotes: (n: Note[]) => void) => {
  if (!isChrome) return () => {};

  const listener = (
    changes: { [key: string]: chrome.storage.StorageChange },
    area: string,
  ) => {
    if (area === "sync" && changes.swiftmemo_notes) {
      setNotes((changes.swiftmemo_notes.newValue as Note[]) || []);
    }
  };

  chrome.storage.onChanged.addListener(listener);
  return () => chrome.storage.onChanged.removeListener(listener);
};
