#  Ai Chatbot

chatbot specifically focused on question answering over the (https://w3schools.com/).





Built with [LangChain](https://github.com/langchain-ai/langchain/), [FastAPI](https://fastapi.tiangolo.com/), and [Next.js](https://nextjs.org).


## ✅ Running locally



- Rename src/.env.dist to src/.env and add your OpenAI API key.

- Run  ```docker-compose up --build```

 ##### `ingest.py` to ingest  developers docs and contents data into the pgVector vectorstore.
 The ingesting process will be run automatically when the container starts.(don't need to do it manually)


## 📚 Technical description

There are two components: ingestion and question-answering.

Ingestion has the following steps:

1. Pull html from developer.com site.
2. Load html with LangChain's [RecursiveURLLoader](https://python.langchain.com/docs/integrations/document_loaders/recursive_url_loader) and [SitemapLoader](https://python.langchain.com/docs/integrations/document_loaders/sitemap)
3. Split documents with LangChain's [RecursiveCharacterTextSplitter](https://api.python.langchain.com/en/latest/text_splitter/langchain.text_splitter.RecursiveCharacterTextSplitter.html)
4. Create a vectorstore of embeddings, using LangChain's [pgVector-Postgres vectorstore](https://python.langchain.com/docs/integrations/vectorstores/pgvector) (with OpenAI's embeddings).

Question-Answering has the following steps:

1. Given the chat history and new user input, determine what a standalone question would be using GPT-4.
2. Given that standalone question, look up relevant documents from the vectorstore.
3. Pass the standalone question and relevant documents to the model to generate and stream the final answer.


## 💻 Running with Docker
```docker-compose up --build```

## BackEnd:
``` docker build -t public-chatbot-be .```<br>
``` docker run -p 8080:8080 public-chatbot-be```

## FrontEnd :
``` docker build -t public-chatbot-fe .```<br>
``` docker run -p 3000:3000 public-chatbot-fe```



# Architecture 🗾
comming soon..
