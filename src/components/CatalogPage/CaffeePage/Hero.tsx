import React from 'react'

export default function Hero() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Extreme Hero Section</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        @keyframes neon-pulse {\n            0%, 100% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #00ffff, 0 0 35px #00ffff, 0 0 40px #00ffff, 0 0 50px #00ffff, 0 0 75px #00ffff; }\n            50% { text-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 7px #fff, 0 0 10px #00ffff, 0 0 17px #00ffff, 0 0 20px #00ffff, 0 0 25px #00ffff, 0 0 37px #00ffff; }\n        }\n\n        .neon-text {\n            animation: neon-pulse 1.5s infinite alternate;\n        }\n\n        .bg-animated {\n            background: linear-gradient(-45deg, #000000, #1a1a1a, #000033, #003366);\n            background-size: 400% 400%;\n            animation: gradient 15s ease infinite;\n        }\n\n        @keyframes gradient {\n            0% { background-position: 0% 50%; }\n            50% { background-position: 100% 50%; }\n            100% { background-position: 0% 50%; }\n        }\n\n        .glitch {\n            position: relative;\n        }\n\n        .glitch::before,\n        .glitch::after {\n            content: attr(data-text);\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n        }\n\n        .glitch::before {\n            left: 2px;\n            text-shadow: -2px 0 #ff00de;\n            clip: rect(24px, 550px, 90px, 0);\n            animation: glitch-anim 3s infinite linear alternate-reverse;\n        }\n\n        .glitch::after {\n            left: -2px;\n            text-shadow: -2px 0 #00ffff;\n            clip: rect(85px, 550px, 140px, 0);\n            animation: glitch-anim 2s infinite linear alternate-reverse;\n        }\n\n        @keyframes glitch-anim {\n            0% { clip: rect(39px, 9999px, 71px, 0); }\n            5% { clip: rect(76px, 9999px, 53px, 0); }\n            10% { clip: rect(42px, 9999px, 16px, 0); }\n            15% { clip: rect(94px, 9999px, 33px, 0); }\n            20% { clip: rect(3px, 9999px, 5px, 0); }\n            25% { clip: rect(21px, 9999px, 100px, 0); }\n            30% { clip: rect(79px, 9999px, 82px, 0); }\n            35% { clip: rect(56px, 9999px, 18px, 0); }\n            40% { clip: rect(6px, 9999px, 38px, 0); }\n            45% { clip: rect(65px, 9999px, 91px, 0); }\n            50% { clip: rect(31px, 9999px, 56px, 0); }\n            55% { clip: rect(88px, 9999px, 71px, 0); }\n            60% { clip: rect(13px, 9999px, 43px, 0); }\n            65% { clip: rect(50px, 9999px, 9px, 0); }\n            70% { clip: rect(27px, 9999px, 68px, 0); }\n            75% { clip: rect(85px, 9999px, 25px, 0); }\n            80% { clip: rect(44px, 9999px, 93px, 0); }\n            85% { clip: rect(19px, 9999px, 39px, 0); }\n            90% { clip: rect(71px, 9999px, 86px, 0); }\n            95% { clip: rect(2px, 9999px, 62px, 0); }\n            100% { clip: rect(54px, 9999px, 47px, 0); }\n        }\n\n        .hover-3d {\n            transition: transform 0.3s;\n        }\n\n        .hover-3d:hover {\n            transform: perspective(1000px) rotateX(10deg) rotateY(-10deg) rotateZ(2deg);\n        }\n\n        .particle {\n            position: absolute;\n            border-radius: 50%;\n        }\n\n        @keyframes float-up {\n            to {\n                transform: translateY(-100vh) rotate(360deg);\n                opacity: 0;\n            }\n        }\n    "
    }}
  />
  <div id="particles" />
  <div className="text-center z-10">
    <h1
      className="text-6xl font-bold mb-4 text-white neon-text glitch hover-3d"
      data-text="CYBERSPACE"
    >
      Coffee Lover
    </h1>
    <p className="text-xl text-cyan-300 mb-8">
      Tast of Coffee can make your good day
    </p>
    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-110 inline-block">
      <i className="fas fa-rocket mr-2" />
      Get In Touch
    </button>
  </div>
</>

  )
}
