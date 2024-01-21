import "../App.css";
import React from "react";
import ReactGA from "react-ga4";

// ReactGA.initialize("G-9R3P45G92P");
ReactGA.initialize("G-9R3P45G92P", {
  gaOptions: { cookieFlags: "samesite=none;secure" },
});
const Home = () => {
  const questRef = {
    0: "What brings you here today?",
    1: "There's something I want to learn",
    2: "I'm not sure what to learn",
    3: "I need to be compliant",
    4: "I want to learn with or from others",
    5: "Surprise me!",
    10: "Use the search bar above to find specific learning ‎ ‎ ⤴",
    11: "Resume learning you've started",
    20: "Learning that's been curated for my division",
    21: "Learning that's been made for the wider organisation",
    200: "A Career Toolkit",
    201: "A Learning Path",
    210: "A Learning Programme",
    211: "A Learning Path",
    40: "Mentoring",
    41: "Guilds",
    42: "Shadowing",
    50: "Did you know",
  };

  const questions = {
    0: {
      questionText: "What brings you here today?",
      answerOptions: [
        { answerText: "There's something I want to learn!", id: 1 },
        { answerText: "I'm not sure what to learn", id: 2 },
        { answerText: "I need to be compliant", id: 3 },
        { answerText: "I want to learn with or from others", id: 4 },
        { answerText: "Surprise me!", id: 5 },
      ],
    },
    1: {
      questionText: "Great!",
      answerOptions: [
        { answerText: "Use the search bar above to find specific learning ‎ ‎ ⤴", id: 10 },
        { answerText: "Resume learning you've started", id: 11 },
      ],
    },
    2: {
      questionText: "What interests you more?",
      answerOptions: [
        { answerText: "Learning that's been curated for my division", id: 20 },
        { answerText: "Learning that's been made for the wider organisation", id: 21 },
      ],
    },
    20: {
      questionText: "Consider these divisional learning options:",
      answerOptions: [
        {
          title: "A Career Toolkit",
          answerText:
            "Use a Career Toolkit to get a hollisitc overview of the culture, roles and capabilities in your division",
          id: 200,
        },
        {
          title: "A Learning Path",
          answerText:
            "Be guided through a sequence of digital learning activities curated for a particular role or capability",
          id: 201,
        },
      ],
    },
    21: {
      questionText: "Consider these group wide learning options:",
      answerOptions: [
        {
          title: "A Learning Programme",
          answerText: "Join an internally run course with a structured curriculum",
          id: 210,
        },
        {
          title: "A Learning Path",
          answerText:
            "Be guided through a sequence of digital learning activities curated for a particular role or capability",
          id: 211,
        },
      ],
    },
    4: {
      questionText: "Try Learning with others",
      answerOptions: [
        {
          title: "Mentoring",
          answerText:
            "Gain growth and development through the experienced advice and support of a mentor.",
          id: 40,
        },
        {
          title: "Guilds",
          answerText:
            "Find people with a common interest and share knowledge, news, questions and ideas in an open informal setting.",
          id: 41,
        },
        {
          title: "Shadowing",
          answerText: "Learn what it is like to perform a particular job at a workplace.",
          id: 42,
        },
      ],
    },
    5: {
      questionText: "Did you know",
      answerOptions: [
        {
          answerText:
            "Mentoring - a learning relationship, involving the sharing of skills, knowledge, and expertise between a mentor and mentee through developmental conversations, experience sharing, and role modelling",
          id: 50,
        },
      ],
    },
  };

  const randFacts = [
    "Emotions influence our ability to learn - Our ability to learn is affected by a number of things, one of them being how we feel. Research has shown that our emotions affect everything from how we perceive information, how we pay attention, how we remember information and how we solve problems. Feeling stressed, anxious, fearful or ashamed are the worst emotional states for learning. The limbic system is activated by these emotions. When the limbic system is activated it interferes with how memory is generated. This is why it is very important to create a safe and stress-free online learning environment. If you are relaxed it will help you learn and retain information better.",
    "Social interaction is good for learning - Some prefer to quietly learn by themselves whereas others may learn better when it is done through social interaction. Collaborating with othera usually leads to much better learning outcomes. Brain imaging studies have shown that when information is presented by other people in a multi-sensory way, neuroimages show a number of neural networks functioning together simultaneously. Research has also reflected that we learn information effectively through social cues such as recalling the words of others and by emulating their actions.",
    "More information doesn’t always mean more learning - When processing information, the brain has to do work to understand. Because of this you should not try and take on large amounts of information in one go. The point at which a person’s brain becomes overwhelmed by new information is referred to as “cognitive overload”, by brain scientists. When there is too much new information all at once, it results in cognitive overload and will ultimately reduce learning.",
    "Making mistakes are an essential part of learning - the science of learning shows us that making mistakes is an essential part of learning. For example, the first time we get on a bike we don’t all learn to ride right away, we get better by practicing. Making mistakes is essential to the learning process and it also applies to academic learning.",
    "The brain requires novelty - When you are bored you have reduced attention span and willpower. Some feel that by being repetitive with learning you will grasp concepts easier, after all “practice makes perfect”. It actually turns out what the brain really craves is novelty. Novelty is the state of being exposed to new ideas, experiences, and things. When we are in this state it releases dopamine, a neurochemical, that is part of the pleasure center in our brains. Dopamine actually plays a huge role in the motivation for learning. When the receptors are activated when we are learning, it gives us a rewarding feeling. Practicing new things we have learned will definitely help us be progressive, but doing that same practice in new ways can help us improve learning outcomes and success. ",
    "Learning happens best through teaching others - Teaching others something you have learned is one of the most effective study methods. In fact there is a highly effective study technique designed on this principle, called the Feynman Technique. This technique proposes when learning a new skill or studying for an exam, learners write about their topic as if they were teaching someone else, even a child. The concept of figuring out how to explain something complex, briefly using non-jargon language helps consolidate the learning that is already there and it will help identify any knowledge gaps. ",
    "Our brain functions on the “use it or lose it” principle - Our brains are constantly building and reconditioning neural pathways. The pathways that are used the most usually get well-established and stronger. The pathways that are not used get built over. This is the reason a language you have learned isn’t as fluid when you do not use it or why it may take you a while to work out a math equation you have not done in a while. When it comes to the brain, the saying “if you don’t use it, you lose it”, definitely applies. A good concept to utilize is spaced repetition. The idea to space out learning and repeat something just before you would have forgotten it, is a great way to optimize learning and remembering.",
    "Learning is good, even if it isn't work related - it can give you new perspectives, connect you with others, help you feel more fulfilled and keep your brain active and healthy. For example the brain regions and networks involved in learning a language become stronger, adaptable, and quicker to respond, which can help improve other tasks, mental skills, and areas of life unrelated to direct communication or language learning. ",
  ];

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [previousQuestion, setPreviousQuestion] = React.useState(0);
  const [showResult, setShowResult] = React.useState(false);
  const handleAnswerButtonClick = (id, fwd) => {
    if (fwd) {
      // console.log(questRef[id]);
      ReactGA.event({
        category: "Home",
        action: "Option Clicked",
        label: questRef[id],
      });
    }

    if (id === 10) {
      // window.open(
      //   "https://lorprod.workzonehr.cfapps.eu10.hana.ondemand.com/site#workzone-home&/home",
      //   "_blank"
      // );
      return;
    } else if (id === 11) {
      window.open(
        "https://lorprod.workzonehr.cfapps.eu10.hana.ondemand.com/site#workzone-home&/home/OxmTm55GFKpeL42rMoug7K",
        "_blank"
      );
      return;
    } else if (id === 200) {
      window.open(
        "https://laingorourke.sharepoint.com/sites/igms-eu/employeeservices/Pages/Career_Toolkits.aspx",
        "_blank"
      );
      return;
    } else if (id === 201 || id === 211) {
      window.open(
        "https://lorprod.workzonehr.cfapps.eu10.hana.ondemand.com/site#workzone-home&/home/qBZlw44idy7nUB6QISvVHv",
        "_blank"
      );
      return;
    } else if (id === 210) {
      window.open(
        "https://lorprod.workzonehr.cfapps.eu10.hana.ondemand.com/site#workzone-home&/home",
        "_blank"
      );
      return;
    } else if (id === 3) {
      window.open(
        "https://lorprod.workzonehr.cfapps.eu10.hana.ondemand.com/site#workzone-home&/home/OxmTm55GFKpeL42rMoug7K",
        "_blank"
      );
      return;
    } else if (id === 40 || id === 42) {
      window.open(
        "https://lorprod.workzonehr.cfapps.eu10.hana.ondemand.com/site#workzone-home&/home/PjgTl8els37jjJhkt4MjUq",
        "_blank"
      );
      return;
    } else if (id === 41) {
      window.open(
        "https://lorprod.workzonehr.cfapps.eu10.hana.ondemand.com/site#workzone-home&/home/PE8Rb2BDPHFILlJ42XOfUH",
        "_blank"
      );
      return;
    }
    setPreviousQuestion(currentQuestion);
    setCurrentQuestion(id);

    if (id === 5) {
      setShowResult(true);
    } else {
      setShowResult(false);
    }
    // console.log(currentQuestion, previousQuestion);
  };

  const getRandFact = () => {
    // choose a random number between 0 and 8
    let randNum = Math.floor(Math.random() * 8);
    return randFacts[randNum];
  };

  return (
    <>
      <div className="question-section">
        <div className="question-count">
          <span>{questions[currentQuestion].questionText}</span>
        </div>
      </div>
      {showResult ? (
        <div className="score-section">{getRandFact()}</div>
      ) : (
        <div className="buttons">
          {questions[currentQuestion].answerOptions.map((answerOption) => (
            <button
              key={answerOption.id}
              className={answerOption.id == 10 ? "noPointer" : ""}
              onClick={() => handleAnswerButtonClick(answerOption.id, true)}
            >
              <div className="qTitle">{answerOption.title ? answerOption.title : ""}</div>
              {answerOption.answerText}
            </button>
          ))}
        </div>
      )}
      <button
        className={
          currentQuestion === 0
            ? " hvr-bounce-to-top bounceBtn disabledBtn"
            : "hvr-bounce-to-top bounceBtn"
        }
        onClick={() => handleAnswerButtonClick(Math.floor(currentQuestion / 10), false)}
      >
        Back
      </button>
    </>
  );
};

export default Home;
