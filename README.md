# PDFTalk

**PDFTalk** is a web application that allows users to upload and interact with PDF documents in a conversational way. Powered by LangChain, Clerk, and a variety of AI/embedding services, users can upload PDFs and ask questions about the document, receiving AI-powered responses. The platform supports both PDF viewing and chat-only modes.

## Features

- **Upload and Chat with PDFs**: Users can upload PDFs and interact with them through a conversational interface powered by AI.
- **Real-Time PDF Parsing**: Extract text from PDFs and generate embeddings to facilitate natural language queries.
- **Chat-Only and PDF + Chat Modes**: Users can switch between chat-only and PDF + chat modes.
- **User Authentication**: Seamless authentication using Clerk, supporting both sign-up and login.
- **Vector Search**: Efficient document search using MongoDB for vector storage.
- **Responsive Design**: Works seamlessly across mobile and desktop devices.
- **Styled with Tailwind CSS**: Fast and scalable UI design using TailwindCSS.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API routes, Prisma ORM, LangChain, MongoDB, PostgreSQL
- **AI/Embedding**: LangChain.js, Together AI inference, Pinecone embeddings, M2 Bert model for vector search
- **PDF Parsing**: `react-pdf-viewer` for PDF rendering, `pdf-parse` for extracting text
- **Authentication**: Clerk for user management and authentication
- **Storage**: Bytescale for PDF storage, MongoDB Atlas for vector storage
- **Hosting**: Vercel for deployment

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/seeker53/PDFTalk.git
   cd PDFTalk
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables in the `.env` file:

   ```bash
    TOGETHER_AI_API_KEY=your_together_ai_api_key

    NEXT_PUBLIC_BYTESCALE_API_KEY=your_bytescale_api_key

    NEXT_PUBLIC_VECTORSTORE="pinecone"  # or "mongodb"

    PINECONE_API_KEY=your_pinecone_api_key
    PINECONE_INDEX_NAME=your_pinecone_index_name
    
    MONGODB_ATLAS_URI=your_mongodb_atlas_uri
    MONGODB_ATLAS_DB_NAME=your_mongodb_atlas_db_name
    MONGODB_ATLAS_COLLECTION_NAME=your_mongodb_atlas_collection_name
    MONGODB_ATLAS_INDEX_NAME=your_mongodb_atlas_index_name

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

    POSTGRES_URL=your_postgres_url
    POSTGRES_URL_NON_POOLING=your_non_pooling_postgres_url
    POSTGRES_PRISMA_URL=your_postgres_prisma_url

    LANGCHAIN_TRACING_V2=true  # set to true if using LangChain's tracing service
    LANGCHAIN_API_KEY=your_langchain_api_key
    LANGCHAIN_SESSION=pdftochat  # set your LangChain session name

   ```

4. Generate Prisma client:

   ```bash
   npm run prisma:generate
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

## Deployment

To deploy the app on Vercel, follow these steps:

1. Ensure the necessary environment variables are set up on Vercel.
2. Set up the Prisma client to generate before the build:

   ```bash
   npm run vercel-build
   ```

3. Deploy the app using Vercel's dashboard or CLI.

## Usage

Once the application is up and running:

1. **Sign Up / Log In**: Create an account or log in via Clerk.
2. **Upload PDFs**: Upload a PDF to begin chatting with the document.
3. **Switch Modes**: Toggle between `PDF + Chat` and `Chat-Only` modes using the provided switch.
4. **Ask Questions**: Ask questions about the document in the chat interface.

## Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the app for production.
- **`npm run start`**: Start the production server.
- **`npm run format`**: Format the code using Prettier.
- **`npm run prisma:generate`**: Generate Prisma client.
- **`npm run evals`**: Run evaluation scripts for performance testing.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributions

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/seeker53/PDFTalk/issues) for open tickets.
