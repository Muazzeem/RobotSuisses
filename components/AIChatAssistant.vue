<template>
  <section class="ai-chat-section">
    <div class="container">
      <div class="ai-chat-grid">
        <div class="ai-chat-info">
          <h2 class="ai-chat-title">RAG AI Chat Assistant</h2>
          <p class="ai-chat-subtitle">Ask RobotSuisse AI</p>

          <div class="ai-features">
            <h3 class="features-heading">Get instant, intelligent assistance with:</h3>
            <ul class="features-list">
              <li>Answer frequently asked questions</li>
              <li>Personalized robot recommendations</li>
              <li>Technical specifications and comparisons</li>
              <li>Lead qualification and expert connections</li>
            </ul>
          </div>

          <button class="btn-try-ai">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            Try AI Assistant Now
          </button>
        </div>

        <div class="ai-chat-demo">
          <div class="chat-window">
            <div class="chat-messages">
              <div class="message user-message">
                <div class="message-avatar user-avatar">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div class="message-bubble user-bubble">
                  I need a robot for warehouse automation. What do you recommend?
                </div>
              </div>

              <div class="message bot-message">
                <div class="message-avatar bot-avatar">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 7h-3.18C13.4 7.84 11.3 7 9 7c-2.3 0-4.4.84-5.82 2H0v2h3v8h2v-8h2v8h2v-4c0-1.66 1.34-3 3-3h2c1.66 0 3 1.34 3 3v4h2v-8h2v8h2v-8h3V9z"/>
                  </svg>
                </div>
                <div class="message-bubble bot-bubble">
                  Based on your warehouse size and requirements, I recommend the LogiBot Warehouse series. It offers heavy lifting capabilities and fleet coordination. Would you like to see detailed specifications?
                </div>
                <button class="delete-btn" aria-label="Delete message">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                  </svg>
                </button>
              </div>
            </div>

            <div class="chat-input-container">
              <input
                type="text"
                class="chat-input"
                placeholder="Ask anything"
                readonly
              />
              <div class="input-actions">
                <button class="input-btn" aria-label="Attach file">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </button>
                <button class="input-btn" aria-label="Voice input">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 1a3 3 0 003 3v8a3 3 0 01-6 0V4a3 3 0 013-3z"/>
                    <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8"/>
                  </svg>
                </button>
                <button class="input-btn send-btn" aria-label="Send message">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 19V5M5 12l7-7 7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.ai-chat-section {
  padding: 6rem 0;
  background: #f9fafb;
}

.ai-chat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.ai-chat-info {
  padding-right: 2rem;
}

.ai-chat-title {
  font-size: 2.75rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.ai-chat-subtitle {
  font-size: 1.25rem;
  color: #6b7280;
  margin-bottom: 2.5rem;
}

.ai-features {
  margin-bottom: 2.5rem;
}

.features-heading {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features-list li {
  padding-left: 2rem;
  margin-bottom: 1rem;
  color: #4b5563;
  font-size: 1rem;
  line-height: 1.6;
  position: relative;
}

.features-list li::before {
  content: '•';
  position: absolute;
  left: 0.5rem;
  color: #ef4444;
  font-size: 1.5rem;
  line-height: 1;
}

.btn-try-ai {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.2);
}

.btn-try-ai:hover {
  background: #dc2626;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(239, 68, 68, 0.3);
}

.btn-try-ai svg {
  width: 20px;
  height: 20px;
}

.ai-chat-demo {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.chat-window {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.chat-messages {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-height: 300px;
}

.message {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

.message-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.user-avatar {
  background: #e5e7eb;
  color: #6b7280;
}

.bot-avatar {
  background: #ef4444;
  color: white;
}

.message-bubble {
  padding: 1rem 1.25rem;
  border-radius: 16px;
  font-size: 0.95rem;
  line-height: 1.6;
  max-width: 80%;
}

.user-message {
  flex-direction: row-reverse;
}

.user-bubble {
  background: #f3f4f6;
  color: #1a1a1a;
  border-top-right-radius: 4px;
}

.bot-message {
  position: relative;
}

.bot-bubble {
  background: #ef4444;
  color: white;
  border-top-left-radius: 4px;
}

.delete-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.2s;
}

.bot-message:hover .delete-btn {
  opacity: 1;
}

.delete-btn:hover {
  background: #fee2e2;
}

.delete-btn svg {
  color: #ef4444;
}

.chat-input-container {
  position: relative;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: border-color 0.2s;
}

.chat-input-container:focus-within {
  border-color: #ef4444;
}

.chat-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 0.95rem;
  color: #1a1a1a;
}

.chat-input::placeholder {
  color: #9ca3af;
}

.input-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.input-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  color: #6b7280;
}

.input-btn:hover {
  background: #f3f4f6;
}

.send-btn {
  background: #ef4444;
  color: white;
}

.send-btn:hover {
  background: #dc2626;
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  .ai-chat-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .ai-chat-info {
    padding-right: 0;
    text-align: center;
  }

  .ai-chat-title {
    font-size: 2.25rem;
  }

  .btn-try-ai {
    display: inline-flex;
  }

  .features-list {
    text-align: left;
  }
}

@media (max-width: 768px) {
  .ai-chat-section {
    padding: 4rem 0;
  }

  .ai-chat-title {
    font-size: 1.875rem;
  }

  .ai-chat-subtitle {
    font-size: 1rem;
  }

  .features-heading {
    font-size: 1.125rem;
  }

  .ai-chat-demo {
    padding: 1.5rem;
  }

  .message-bubble {
    max-width: 85%;
    font-size: 0.875rem;
  }

  .chat-messages {
    min-height: 250px;
  }
}
</style>
