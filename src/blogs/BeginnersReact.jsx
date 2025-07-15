import React from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import "../assets/common styles/blogs.css";
import { FiCopy, FiCheck } from "react-icons/fi";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const ViteCode = `npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev`;

const BeginnersReact = () => {
  const hasShownToast = React.useRef(false);
  const [copied, setCopied] = React.useState(false);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // React.useEffect(() => {
  //   if (!hasShownToast.current) {
  //     toast("Last updated: July 15, 2025 at 11:30 UTC", {
  //       icon: "🕒",
  //       duration: 2000,
  //       style: {
  //         border: "1px solid var(--color-primary)",
  //         color: "var(--color-toast-text)",
  //         background: "var(--color-toast-bg)",
  //         fontSize: "0.95rem",
  //       },
  //     });
  //     hasShownToast.current = true;
  //   }
  // }, []);

  return (
    <div className="blog-container">
      <motion.div className="blog-title" {...fadeInUp}>
        <h1>React.js: The Why and How for Beginners</h1>
      </motion.div>

      <motion.div className="article" {...fadeInUp}>
        <h4>
          Over 42% of developers globally use React (Stack Overflow Developer
          Survey 2023).
        </h4>

        <motion.div className="blog-content" {...fadeInUp}>
          <p>
            React.js is a powerful JavaScript library for building user
            interfaces, especially single-page applications. It allows
            developers to create large web applications that can change data
            without reloading the page.
          </p>
          <br />
          <p>
            There are lot of theoretical posts and videos about React.js, but I
            used to get bored reading/watching them. I always felt the need to
            have a practical approach to learning React.js.
          </p>
          <br />
          <p>
            This article will cover practical tips and techniques for getting
            started with React.js, including setting up your development
            environment, understanding components, and managing state
            effectively.
          </p>
          <br />
        </motion.div>

        <motion.div className="headings" {...fadeInUp}>
          <h2>01. Creating a React App</h2>
        </motion.div>
        <motion.div className="code-block" {...fadeInUp}>
          <p>
            1. Using{" "}
            <a
              href="https://vite.dev/guide/"
              target="_blank"
              rel="noopener noreferrer"
              className="vite-link"
            >
              Vite
            </a>{" "}
            (Fast & Modern – Recommended):
          </p>

          <div className="code-wrapper">
            <button
              className="copy-icon"
              onClick={() => handleCopy(ViteCode)}
              aria-label="Copy"
            >
              {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
            </button>
            <pre>
              <code>{ViteCode}</code>
            </pre>
          </div>

          {/* MUI Accordion inserted below */}
          <Accordion
            sx={{
              mt: 2,
              transition: "box-shadow 0.2s",
              "&:hover": {
                boxShadow: 6,
                backgroundColor: "none",
              },
            }}
          >
            <AccordionSummary
              style={{
                backgroundColor: "var(--color-bg)",
                color: "var(--color-content)",
              }}
              expandIcon={
                <ExpandMoreIcon style={{ color: "var(--color-content)" }} />
              }
            >
              <Typography fontWeight={500}>Pros: </Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{
                backgroundColor: "var(--color-bg)",
                color: "var(--color-content)",
              }}
            >
              <motion.div>
                <ul
                  style={{
                    paddingLeft: "1.2rem",
                    margin: 0,
                    listStyleType: "none",
                    marginLeft: "-1.2rem",
                  }}
                >
                  {[
                    "⚡ Ultra-fast dev server with native ESM",
                    "📦 Out-of-the-box support for React and TS",
                    "🛠️ Instant hot module replacement (HMR)",
                    "📁 Minimal config, fast startup",
                    "🚀 Production builds powered by Rollup",
                  ].map((text, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {text}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AccordionDetails>
          </Accordion>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BeginnersReact;
