// ==UserScript==
// @name        ChatGPT Submit with Ctrl+Enter
// @namespace   Violentmonkey Scripts
// @match       *://chatgpt.com/*
// @grant       none
// @version     0.1
// @author      -
// @description Change Enter key behavior to Ctrl+Enter for submitting
// ==/UserScript==

(function() {
  'use strict';

  document.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' && !event.ctrlKey) {
          event.stopPropagation();
      } else if (event.key === 'Enter' && event.ctrlKey) {
          // Trigger the submit action here
          const submitButton = document.querySelector('button[type="submit"]');
          if (submitButton) {
              submitButton.click();
          }
      }
  }, true);
})();