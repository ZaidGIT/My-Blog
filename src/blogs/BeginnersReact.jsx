import React from 'react'
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import "../assets/common styles/blogs.css";

const BeginnersReact = () => {

    const hasShownToast = React.useRef(false);
  
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
      <motion.div className="blog-title" >
        <h1>
          React.js: The Why and How for Beginners
        </h1>
      </motion.div>
        
    </div>
  )
}

export default BeginnersReact
