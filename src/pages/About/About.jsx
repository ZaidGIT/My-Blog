import React, { useEffect, useState } from 'react';
import './about.css';

const quotes = [
  {
    arabic: "ازرع الخير أينما كنت",
    translation: "Sow goodness wherever you are."
  },
  {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Verily, with hardship there is relief."
  },
  {
    arabic: "كن نورًا حيثما حللت",
    translation: "Be a light wherever you go."
  },
  {
    arabic: "وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ",
    translation: "Perhaps you dislike a thing and it is good for you."
  },
  {
    arabic: "كُن جميلاً ترى الوجود جميلاً",
    translation: "Be beautiful, and you will see beauty in existence."
  },
  {
    arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    translation: "Indeed, Allah is with the patient."
  },
  {
    arabic: "تفاءلوا بالخير تجدوه",
    translation: "Be optimistic about good, and you will find it."
  },
  {
    arabic: "الخير في ما اختاره الله",
    translation: "Goodness lies in what Allah has chosen."
  },
  {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Verily, with hardship comes ease."
  },
  {
    arabic: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
    translation: "And say: My Lord, increase me in knowledge."
  },
  {
    arabic: "الرضا مفتاح السعادة",
    translation: "Contentment is the key to happiness."
  },
  {
    arabic: "لا تيأس وإن طال البلاء",
    translation: "Do not despair, even if the trial lasts long."
  },
  {
    arabic: "يَهْدِي مَن يَشَاءُ",
    translation: "He guides whom He wills."
  },
  {
    arabic: "قَدْ جَعَلَ اللَّهُ لِكُلِّ شَيْءٍ قَدْرًا",
    translation: "Allah has set a measure for all things."
  }
];


const About = () => {
  const [selectedQuote, setSelectedQuote] = useState(null);

  useEffect(() => {
    // Randomly pick one quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setSelectedQuote(quotes[randomIndex]);
  }, []);

  return (
    <div className="about-container">
      <div className="about-heading">
        <h1>About</h1>
      </div>
      {selectedQuote && (
        <div className="about-quote">
          <div className="quote-text">
            <h1>{selectedQuote.arabic}</h1>
            <p>{selectedQuote.translation}</p>
          </div>
        </div>
      )}
      <div className="about-links">
  <p>You can find me via:</p>
  <div className="links-list">
    <div className="link-row">
      <span>LinkedIn</span>
      <a href="https://www.linkedin.com/in/zaid-madari-87635726a/" target="_blank" rel="noopener noreferrer">@Zaid</a>
      <span className="separator">|</span>
      <span>GitHub</span>
      <a href="https://github.com/ZaidGIT" target="_blank" rel="noopener noreferrer">@Zaid</a>
    </div>
    <div className="link-row">
      <span>Twitter</span>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">@Zaid</a>
      <span className="separator">|</span>
      <span>Instagram</span>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">@Zaid</a>
    </div>
  </div>
  <p className="email-invite">
    Feel free to drop me an email at
  <a href="mailto:izaid.dev@gmail.com" className="inline-email">izaid.dev@gmail.com</a>
</p>

</div>

    </div>
  );
};

export default About;
