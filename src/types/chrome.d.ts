// src/types/chrome.d.ts
/// <reference types="chrome"/>

declare namespace chrome {
  export = chrome;
}

// If you're still getting errors, you might need these additional declarations
interface Window {
  chrome: typeof chrome;
}