import React from 'react';

export const RagChatbotCaseStudy = (
  <>
    <h1>RAG Chatbot: Context-Aware College Assistant</h1>

    <p>
      This case study explores the development of an intelligent query resolver developed for academic institutions. By utilizing advanced Retrieval-Augmented Generation (RAG) pipelines, the chatbot extracts, sanitizes, and presents context-grounded information to students, faculty, and visitors directly from institutional web archives and PDF records.
    </p>

    <h2>The Challenge</h2>
    <p>
      Academic databases and institutional portals contain scattered documents (circulars, course catalogs, exam timetables) making it difficult for users to resolve routine queries instantly, placing a heavy load on support desks.
    </p>

    <h2>The Solution</h2>
    <p>
      We implemented a Langchain-driven ingestion engine that indexes documents into vector spaces. Coupled with local Ollama LLMs and integrated with a Django-based admin panel, it supports real-time source citations and system dashboard management.
    </p>

    <h2>Key Technical Components</h2>
    <ul>
      <li><strong>Vector Ingestion Pipeline:</strong> Dynamic indexing of PDF schedules and HTML scraping scripts.</li>
      <li><strong>Context-Grounded Generation:</strong> Prompt layouts structured to prevent LLM hallucinations.</li>
      <li><strong>Admin Dashboard:</strong> Diagnostic panel to audit queries and fine-tune ingestion indices.</li>
      <li><strong>Source Citation:</strong> Highlights exact file pathways and text contexts used to build answers.</li>
    </ul>

    <blockquote>
      <p>
        "Moving search queries from standard indexing to vector semantic search reduced repetitive student support tickets by 60% within the initial semester of pilot execution."
      </p>
    </blockquote>
  </>
);
