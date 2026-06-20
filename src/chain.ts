import { ChatOpenAI } from "langchain/chat_models/openai";
import { LLMChain } from "langchain/chains";
import { PromptTemplate } from "langchain/prompts";
import { trace } from "langsmith";
import { OPENAI_API_KEY } from "./utils";

async function main() {
  const model = new ChatOpenAI({
    modelName: "gpt-4",
    temperature: 0.7,
    openAIApiKey: OPENAI_API_KEY,
  });

  const template = `You are a helpful study assistant.
Answer the following question clearly: {question}`;

  const prompt = new PromptTemplate({
    inputVariables: ["question"],
    template,
  });

  const chain = new LLMChain({ llm: model, prompt });

  const res = await trace(chain, { question: "Explain recursion in simple terms." });
  console.log("Chain Output:", res.text);
}

main();
