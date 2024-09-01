import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const words = ["Hello, Babe!", "I love you more", "This is a for you"];
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleType = () => {
      const currentWordIndex = loopNum % words.length;
      const fullWord = words[currentWordIndex];

      setCurrentWord(isDeleting ? fullWord.substring(0, charIndex - 1) : fullWord.substring(0, charIndex + 1));
      setCharIndex(charIndex + (isDeleting ? -1 : 1));

      if (!isDeleting && charIndex === fullWord.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingSpeed = isDeleting ? 50 : 150;
    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, loopNum, words]);

  return (
    <div className='w-1/2 m-auto bg-pink-500'>
      <span id="typewriter" className='text-5xl font-bold text-center'>{currentWord}</span>
      <span className="cursor">|</span>
    </div>
  );
};

export default Typewriter;
