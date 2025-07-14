import React from "react";
import "../assets/common styles/blogs.css";
import { FiExternalLink } from "react-icons/fi";

const AiAsADeveloper = () => {
  return (
    <div className="blog-container">
      <div className="blog-title">
        <h1>
          How to Start Building with AI as a Developer: Coding Smarter: Using AI
          as Your Developer Sidekick
        </h1>
      </div>
      <div className="blog-content">
        <p>
          <span
            style={{
              fontSize: "1.1rem",
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            Tired of Googling the same error 100 times?
          </span>{" "}
          Imagine having an AI pair programmer that can help you find solutions
          faster, understand complex code, and even write code snippets for you.
        </p>
        <p>
          I was once in your shoes, spending hours searching for answers on
          Stack Overflow and GitHub. Until 2 years ago[2022], then I discovered
          the power of AI tools and everything changed.
        </p>
        <br />
        <p>
          As the saying goes, "AI will take your jobs", but I believe
          <span
            style={{
              fontSize: "1.1rem",
              fontStyle: "italic",
              fontWeight: "bold",
              color: "var(--color-primary)",
            }}
          >
            "AI won’t replace developers, but developers using AI will replace
            those who don’t"
          </span>
        </p>

        <div className="personal">
          <p>
            I have been using{" "}
            <a
              href="https://github.com/features/copilot"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Copilot
            </a>{" "}
            for the past 2 years, and it has become an indispensable part of my
            development workflow. It helps me write code faster, understand new
            technologies, and even learn new programming languages.
          </p>
          <p>
            What's best about Github copilot is; it is free for students and
            open source contributors. Github provides extra resources and
            benefits for students, including free access to Copilot. Students
            can sign up for{" "}
            <a
              href="https://education.github.com/pack"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Student Developer Pack
            </a>{" "}
            to get these benefits.
          </p>
        </div>

        <div className="alternatives">
          <p>
            As github copilot is not free for all users, and the SDP (Student
            Developer Pack) is only available for students, here are some
            alternatives developers can consider:
          </p>
          <ul>
            <li>
              <strong>Cursor AI</strong>: A free AI code completion tool that
              supports multiple programming languages and is designed to help
              developers write code faster.
              <a
                href="https://www.cursor.sh"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginLeft: "6px",
                  color: "var(--color-primary)",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                Download here <FiExternalLink style={{ marginLeft: "4px" }} />
              </a>
            </li>
            <li>
              <strong>WindSurf</strong> (also known as <strong>Codeium</strong>
              ): An AI code completion tool that supports multiple programming
              languages with multiple files at once.
              <a
                href="https://www.codeium.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginLeft: "6px",
                  color: "var(--color-primary)",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                Download here <FiExternalLink style={{ marginLeft: "4px" }} />
              </a>
            </li>
            <li>
              <strong>Tabnine</strong>: Also a free AI code completion tool with
              assistive features that will help you write code faster.
              <a
                href="https://www.tabnine.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginLeft: "6px",
                  color: "var(--color-primary)",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                Download here <FiExternalLink style={{ marginLeft: "4px" }} />
              </a>
            </li>
          </ul>
        </div>

        <div className="blog-mid">
          <h3>Here are some AI tools I personally used and recommend:</h3>
          <ul>
            <li>
              <strong>ChatGPT:</strong> A powerful AI assistant great for
              explaining code, fixing bugs, writing documentation, and
              generating ideas.
            </li>
            <li>
              <strong>GitHub Copilot:</strong> Acts like an AI pair programmer —
              it predicts entire functions or logic blocks as you type, helping
              speed up development.
            </li>
            <li>
              <strong>Replit Ghostwriter:</strong> Built into the Replit IDE, it
              offers AI-powered autocompletion, debugging, and code explanation
              inside your browser.
            </li>
            <li>
              <strong>Cursor (AI IDE):</strong> A modern developer environment
              with built-in ChatGPT, context-aware inline help, and AI-powered
              refactoring.
              <a
                href="https://www.cursor.sh"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginLeft: "6px",
                  color: "var(--color-primary)",
                  textDecoration: "none",
                }}
              >
                Visit site ↗
              </a>
            </li>
            <li>
              <strong>WindSurf</strong> (also known as <strong>Codeium</strong>
              ): A lightweight AI code completion tool that works in most IDEs
              and supports multiple languages.
              <a
                href="https://www.codeium.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginLeft: "6px",
                  color: "var(--color-primary)",
                  textDecoration: "none",
                }}
              >
                Download here ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AiAsADeveloper;
