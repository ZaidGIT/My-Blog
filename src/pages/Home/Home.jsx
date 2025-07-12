import React from "react";
import Navbar from "../../components/Navbar";
import "./home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="my_posts">
        <h1>My Posts :</h1>
      </div>

      <div className="content-container">
        <div className="title">
          <h2>Enginuity</h2>
          <span className="date">Tue, Apr 1, 2025</span>
          <p className="content">
            Enginuity is a next-gen platform connecting engineers with jobs &
            projects while enabling companies to find the right technical
            talent. Whether you're a developer, mechanical engineer, or IoT
            expert, Enginuity helps match you with the perfect opportunity. We
            streamline the entire matching process, saving time for both talent
            and teams...{" "}
          </p>
        </div>

        <div className="title">
          <h2>Real Time People Counting</h2>
          <span className="date">Mon, Sep 16, 2024</span>
          <p className="content">
            A real-time people counting system powered by computer vision. It
            tracks individuals in video streams using centroid tracking,
            vertical line crossing detection, and confidence scoring. Built with
            Python and OpenCV, the system is scalable for crowd monitoring,
            security, and occupancy management. Easily integrable with existing
            CCTV setups, it delivers actionable insights with minimal hardware
            requirements...{" "}
          </p>
        </div>

        <div className="title">
          <h2>Text To Image generation</h2>
          <span className="date">Sun, Sep 8, 2024</span>
          <p className="content">
            Stable Diffusion Image Generation Generate high-quality images from
            text prompts with ease using the Stable Diffusion model. This
            project features a streamlined setup with Hugging Face’s Diffusers
            and Transformers libraries, enabling fast and flexible AI-powered
            image creation and resizing...{" "}
          </p>
        </div>

        <div className="title">
          <h2>Exploring Text-to-Image Generation</h2>
          <span className="date">Sun, Sep 8, 2024</span>
          <p className="content">
            This research investigates various methods for text-to-image
            generation, starting with GAN-based approaches like CLIP+GAN,
            StackGAN, and AttnGAN. Using the MS COCO dataset, we evaluated each
            model’s ability to generate semantically and visually coherent
            images. We explored the integration of NLP and CV techniques to
            improve prompt understanding and image quality. After testing
            multiple methods, we selected the pretrained Stable Diffusion v1.4
            model with a U-Net backbone for its superior performance and
            reliability...{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
