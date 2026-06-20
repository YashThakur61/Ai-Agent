import { ChatOpenAI } from "langchain/chat_models/openai";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { SerpAPI } from "langchain/tools";
import { trace } from "langsmith";
import { OPENAI_API_KEY, SERPAPI_API_KEY } from "./utils";

async function main() {
  const model = new ChatOpenAI({
    modelName: "gpt-4",
    temperature: 0.7,
    openAIApiKey: OPENAI_API_KEY,
  });

  const tools = SERPAPI_API_KEY
    ? [new SerpAPI(SERPAPI_API_KEY)]
    : [];

  const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "zero-shot-react-description",
    verbose: true,
  });

  const res = await trace(executor, {
    input: "Find the latest news about LangChain.",
  });

  console.log("Agent Output:", res.output);
}

main();
