import React from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import "../assets/common styles/blogs.css";
import { FiCopy, FiCheck } from "react-icons/fi";
import ReactLogo from "../assets/effects/ReactLogo.gif";
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

  React.useEffect(() => {
    if (!hasShownToast.current) {
      toast("Last updated: July 16, 2025 at 11:34:16 UTC", {
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

        <motion.div className="" {...fadeInUp}>
          <strong>Prerequisites:</strong>
          <br />
          <p>
            Basic understanding of HTML, CSS, and JavaScript, with familiarity
            with ES6 features like arrow functions, destructuring, and modules.
          </p>
          <br />
        </motion.div>

        <motion.div className="headings" {...fadeInUp}>
          <h2>01. Creating a React App</h2>
        </motion.div>
        <p>
          To create a new React app, you can use either Vite or Create React
          App.
        </p>
        <p>
          <div
            style={{
              paddingTop: "10px",
              // paddingBottom: "20px",
              paddingLeft: "9px",
            }}
          >
            Vite Installation{" "}
            <a href="https://vite.dev/guide/#scaffolding-your-first-vite-project">
              here
            </a>
            <br />
            Create React App Installation{" "}
            <a href="https://reactjs.org/docs/create-a-new-react-app.html">
              here
            </a>
          </div>
        </p>

        <motion.div className="headings" {...fadeInUp}>
          <h2>02. Understanding Components</h2>
        </motion.div>
        <p>
          Components are the building blocks of a React application. They can be
          functional or class-based, but functional components are more common
          in modern React development.
        </p>
        <p>Here's a simple functional component:</p>
        <div
          className="code-block"
          style={{
            border: "1px solid var(--color-border)",
            borderRadius: "8px",
            margin: "12px 0",
          }}
        >
          <pre>
            <code>
              {`const MyComponent = () => {
  return <h1>Hello, World!</h1>;
  };`}
            </code>
          </pre>
        </div>
        <p>
          Refer here for more on{" "}
          <a href="https://reactjs.org/docs/components-and-props.html">
            Components and Props
          </a>
        </p>
        <motion.div className="headings" {...fadeInUp}>
          <h2>03. Managing State</h2>
        </motion.div>
        <p>
          Refer here for{" "}
          <a href="https://reactjs.org/docs/state-and-lifecycle.html">
            State and Lifecycle
          </a>
        </p>

        <motion.div
          className="tldr-box"
          style={{
            margin: "20px 0",
          }}
          {...fadeInUp}
        >
          <strong>Personal Note:</strong>
          <p>
            It takes time to get comfortable with React's concepts, and me
            personally I struggled with understanding state management and
            component lifecycle.
          </p>
        </motion.div>

        <motion.div className="download-box" {...fadeInUp}>
          <h3>
            <a href="/public/React_learning_Plan.pdf" download>
              Click here
            </a>{" "}
            to download basic to amateur React.js practical tasks and exercises.
          </h3>
        </motion.div>
        <img
          src={ReactLogo}
          alt="React Logo"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "60px",
            opacity: 0.6,
            zIndex: 1000,
            pointerEvents: "none",
          }}
        />
      </motion.div>
    </div>
  );
};

export default BeginnersReact;
