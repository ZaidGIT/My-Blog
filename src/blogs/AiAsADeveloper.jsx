import React from "react";
import "../assets/common styles/blogs.css";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import aiBot from "../assets/icons/img/aiBot.svg";
import toast from "react-hot-toast";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const AiAsADeveloper = () => {
  const hasShownToast = React.useRef(false);

  React.useEffect(() => {
    if (!hasShownToast.current) {
      toast("Last updated: July 15, 2025 at 11:30 UTC", {
        icon: "🕒",
        duration: 2000,
        style: {
          border: "1px solid var(--color-primary)",
          color: "var(--color-toast-text)",
          background: "var(--color-toast-bg)",
          fontSize: "0.95rem",
        },
      });
      hasShownToast.current = true;
    }
  }, []);

  return (
    <div className="blog-container">
      <motion.div className="blog-title" {...fadeInUp}>
        <h1>
          How to Start Building with AI as a Developer: Coding Smarter; Using AI
          as Your Developer Sidekick
        </h1>
      </motion.div>

      <motion.div className="article">

      <motion.div className="tldr-box" {...fadeInUp}>
        <strong>TL;DR:</strong> AI tools like GitHub Copilot, ChatGPT, and
        Cursor can help developers code faster, learn quicker, and debug
        smarter. Here's how to use them effectively.
      </motion.div>

      <motion.div className="blog-content" {...fadeInUp}>
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
        <p style={{ fontSize: "1.1rem" }}>
          As the saying goes, "AI will take your jobs," but I believe
          <span
            style={{
              fontStyle: "italic",
              fontWeight: "bold",
              color: "var(--color-primary)",
              marginLeft: "6px",
            }}
          >
            “AI won’t replace developers, but developers using AI will replace
            those who don’t.”
          </span>
        </p>
      </motion.div>

      <motion.div className="personal" {...fadeInUp}>
        <img src={aiBot} alt="AI coding assistant" className="section-image" />
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
          What's best about Github copilot is; it is free for students and open
          source contributors. Github provides extra resources and benefits for
          students, including free access to Copilot. Students can sign up for{" "}
          <a
            href="https://education.github.com/pack"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Student Developer Pack
          </a>{" "}
          to get these benefits.
        </p>
      </motion.div>

      <motion.div className="alternatives" {...fadeInUp}>
        <p>
          As github copilot is not free for all users, and the SDP (Student
          Developer Pack) is only available for students, here are some
          alternatives developers can consider:
        </p>
        <ul>
          {[
            {
              name: "Cursor AI",
              description:
                "A free AI code completion tool that supports multiple programming languages and is designed to help developers write code faster.",
              link: "https://www.cursor.sh",
            },
            {
              name: "WindSurf (also known as Codeium)",
              description:
                "An AI code completion tool that supports multiple programming languages with multiple files at once.",
              link: "https://www.codeium.com",
            },
            {
              name: "Tabnine",
              description:
                "Also a free AI code completion tool with assistive features that will help you write code faster.",
              link: "https://www.tabnine.com",
            },
          ].map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <strong>{item.name}:</strong> {item.description}
              <a
                href={item.link}
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
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div className="blog-mid" {...fadeInUp}>
        <h3>Here are some AI tools I personally used and recommend:</h3>
        <ul>
          {[
            {
              name: "ChatGPT",
              description:
                "A powerful AI assistant great for explaining code, fixing bugs, writing documentation, and generating ideas.",
            },
            {
              name: "GitHub Copilot",
              description:
                "Acts like an AI pair programmer — it predicts entire functions or logic blocks as you type, helping speed up development.",
            },
            {
              name: "Replit Ghostwriter",
              description:
                "Built into the Replit IDE, it offers AI-powered autocompletion, debugging, and code explanation inside your browser.",
            },
            {
              name: "Cursor (AI IDE)",
              description:
                "A modern developer environment with built-in ChatGPT, context-aware inline help, and AI-powered refactoring.",
              link: "https://www.cursor.sh",
              linkLabel: "Visit site ↗",
            },
            {
              name: "WindSurf (also known as Codeium)",
              description:
                "A lightweight AI code completion tool that works in most IDEs and supports multiple languages.",
              link: "https://www.codeium.com",
              linkLabel: "Download here ↗",
            },
          ].map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <strong>{item.name}:</strong> {item.description}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginLeft: "6px",
                    color: "var(--color-primary)",
                    textDecoration: "none",
                  }}
                >
                  {item.linkLabel}
                </a>
              )}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      </motion.div>

    </div>
  );
};

export default AiAsADeveloper;
