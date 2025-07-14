import "./home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Navbar from "../../components/Navbar";

const Home = () => {

  const navigate = useNavigate();

  const posts = [
    {
      title: "How to Start Building with AI as a Developer",
      date: "Mon, Jan 20, 2025",
      content: `Building with AI starts by understanding how models learn from data. At the core, you're working with algorithms that identify patterns and make predictions—whether it's classifying images, generating text, or analyzing trends. As a developer, the first practical step is to get comfortable with Python and libraries like NumPy, Pandas, and Scikit-learn. From there, frameworks like TensorFlow and PyTorch provide the tools to train and deploy models efficiently. This article outlines the foundational concepts, tools, and workflows developers need to build real-world AI applications, with a focus on clarity, reproducibility, and best practices in modern development environments.`,
      href: '/ai-as-a-developer'
    },
    {
      title: "Beginner's Guide to React.js",
      date: "Fri, Nov 15, 2024",
      content: `Getting started with React can feel overwhelming, but it doesn’t have to be. This beginner-friendly guide breaks down the core concepts—like components, props, and state—into simple, real-world examples that make sense. Whether you're just starting out with web development or switching from another framework, this article will help you build a solid foundation in React and start creating interactive, modern user interfaces with confidence.`,
      href: '/beginners-react'
    },

    {
      title: "Exploring Text-to-Image Generation",
      date: "Sun, Sep 8, 2024",
      content: `This article is based on a collaborative research project conducted by a team of four, exploring the rapidly advancing field of text-to-image generation. Motivated by the intersection of natural language processing and computer vision, the study investigates how textual descriptions can be transformed into coherent visual representations. By analyzing a range of models—from early GAN-based approaches to state-of-the-art diffusion methods—we aimed to understand the strengths and limitations of each technique. What follows is a detailed breakdown of our findings, insights, and the reasoning behind our final model selection.`,
    },
    {
      title: "My macOS Configuration",
      date: "Thu, Oct 24, 2024",
      content: `This article explores a thoughtfully curated macOS configuration aimed at maximizing productivity and comfort. It covers essential applications, system preferences, and workflow enhancements commonly used in development, design, and daily tasks. From the preferred terminal and text editors to productivity tools and customization techniques, the setup is designed to streamline work and create an efficient, distraction-free environment on macOS.`,
    },
    {
      title: "Using GraphQL with React",
      date: "Wed, Oct 16, 2024",
      content: `In today’s web development landscape, managing data efficiently is crucial—and that's where GraphQL comes in. Unlike traditional REST APIs, GraphQL gives you the power to request exactly the data you need, reducing over-fetching and improving performance. When combined with React, it creates a seamless experience for building modern, data-driven UIs. In this post, we’ll explore how to integrate GraphQL into your React applications, why it’s gaining popularity, and how it compares to REST in real-world scenarios.`,
    },
    {
      title:
        "Choosing the Right Python Framework for Machine Learning: Pros and Cons",
      date: "Mon, Nov 4, 2024",
      content: `When it comes to machine learning in Python, the choice of framework can significantly impact your project’s success. With a plethora of options available, each with its own strengths and weaknesses, selecting the right one is crucial. This article delves into the most popular Python frameworks for machine learning, examining their pros and cons to help you make an informed decision. Whether you’re a beginner or an experienced developer, understanding these frameworks will guide you in choosing the best tool for your specific needs.`,
    },
    {
      title: "Common Struggles When Transitioning to Mobile Development",
      date: "Wed, Dec 11, 2024",
      content: `Building mobile applications—whether for Android, iOS, or cross-platform—is exciting, but the shift isn’t always smooth. For many developers, especially those coming from web or desktop backgrounds, mobile development introduces a whole new set of challenges. From dealing with different screen sizes, performance constraints, and platform-specific guidelines to learning new frameworks like React Native, Flutter, or SwiftUI—there’s a lot to adapt to. This article explores the common hurdles beginners face when stepping into mobile app development, and how to navigate them with clarity and confidence.`,
    },
    // projects
    {
      title: "Enginuity",
      date: "Tue, Apr 1, 2025",
      content: `Enginuity is a purpose-built platform crafted to redefine how engineers connect with real-world opportunities. Designed with intelligent matchmaking at its core, it supports professionals across disciplines—be it software, mechanical, or emerging tech—by simplifying the search for meaningful work. While specific features and mechanics are intentionally kept under wraps, the project’s broader aim is to streamline collaboration between technical talent and organizations, creating a smarter, faster, and more focused approach to engineering careers and innovation.`,
    },
    {
      title: "Real Time People Counting",
      date: "Mon, Sep 16, 2024",
      content: `Monitoring foot traffic in real time has become increasingly important across industries—from retail and events to security and space management. This project tackles that challenge with a computer vision–based people counting system that uses centroid tracking and line-crossing detection to identify and count individuals in video streams. Developed using Python and OpenCV, it’s designed to be both efficient and hardware-friendly, making it a practical solution for integrating with existing CCTV infrastructure and delivering useful crowd analytics with minimal setup.`,
    },
    {
      title: "Text To Image generation",
      date: "Sun, Sep 8, 2024",
      content: `Turning text into visuals has always been a fascinating idea, and this project brings that concept to life using Stable Diffusion. With a clean integration of Hugging Face’s Diffusers and Transformers libraries, the focus was on building a setup that’s both simple to use and powerful under the hood. The result is a flexible image generation tool capable of producing detailed visuals from just a few words—ideal for experimentation, creativity, or rapid prototyping.`,
    },
    // projects
  ];

  const POSTS_PER_PAGE = 8;
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(posts.length / POSTS_PER_PAGE);

  const paginatedPosts = posts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < pageCount) setPage(page + 1);
  };

  return (
    <>
      <div className="home-container">
        <div className="my_posts">
          <h1>My Posts :</h1>
        </div>

      <div className="content-container">
        {paginatedPosts.map((post, index) => (
          <div 
          onClick={() => {
            navigate(post.href);
          }}
          className="title" key={index}>
            <h2>{post.title}</h2>
            <span className="date">{post.date}</span>
            <p className="content">
              {post.content.length > 380
                ? `${post.content.slice(0, 380)}...`
                : post.content}
            </p>
          </div>
        ))}

        <Stack direction="row" spacing={2}>
          {page > 1 && (
            <IconButton
              onClick={handlePrev}
              sx={{
                color: "var(--color-primary)",
                fontSize: "0.875rem", // controls text size
                "&:hover": {
                  color: "var(--color-secondary)",
                },
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
              <span style={{ marginLeft: 4 }}>Prev</span>
            </IconButton>
          )}

          {page < pageCount && (
            <IconButton
              onClick={handleNext}
              sx={{
                color: "var(--color-primary)",
                fontSize: "0.875rem",
                "&:hover": {
                  color: "var(--color-secondary)",
                },
              }}
            >
              <span style={{ marginRight: 4 }}>Next</span>
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          )}
        </Stack>
      </div>
    </div>
    </>
  );
};

export default Home;
