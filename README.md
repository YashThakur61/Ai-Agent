# Build a TypeScript LangChain AI Assistant

## 📌 Overview
This project demonstrates how to build an AI assistant in **TypeScript** using **LangChain**.  
It covers:
- Model connection and setup  
- Prompt flow with chains  
- Memory handling for context-aware conversations  
- Agents for tool usage and decision-making  
- Debugging and tracing with **LangSmith**

The example app acts as a **Study Helper**, answering questions, remembering context, and optionally using external tools (like search) to enrich responses.

---

## 🚀 Features
- **LLM Integration**: Connects to OpenAI models via LangChain.  
- **Chains**: Structured prompt flows for predictable outputs.  
- **Memory**: Maintains conversation history with `BufferMemory`.  
- **Agents**: Dynamically decide which tools to call.  
- **LangSmith Debugging**: Trace execution, inspect prompts, and debug failures.

---

## 🛠️ Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Satyamkumar55-tech/ts-langchain-assistant.git
   cd ts-langchain-assistant
