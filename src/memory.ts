import { ChatOpenAI } from "langchain/chat_models/openai";
import { ConversationChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";
import { trace } from "langsmith";
import { OPENAI_API_KEY } from "./utils";

async function main() {
  const model = new ChatOpenAI({
    modelName: "gpt-4",
    temperature: 0.7,
    openAIApiKey: OPENAI_API_KEY,
  });

  const memory = new BufferMemory();
  const conversation = new ConversationChain({ llm: model, memory });

  await trace(conversation, { input: "Hello, I am preparing for exams." });
  const res = await trace(conversation, { input: "What did I just say?" });

  console.log("Memory Output:", res.response);
}

main();
