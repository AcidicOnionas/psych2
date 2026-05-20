"use client";

import { useState } from "react";

type AnswerType = "A" | "B" | "C" | "D";

type Answer = {
  text: string;
  type: AnswerType;
};

type Question = {
  scenario: string;
  answers: Answer[];
};

type Scores = Record<AnswerType, number>;

const questions: Question[] = [
  {
    scenario:
      "You enter an abandoned mansion. At the end of the hallway is a locked door. What do you do?",
    answers: [
      { text: "Break the door open immediately.", type: "A" },
      { text: "Search carefully for a key.", type: "B" },
      { text: "Wait and listen before acting.", type: "C" },
      { text: "Turn around and leave.", type: "D" },
    ],
  },
  {
    scenario:
      "You find a mirror that shows a distorted version of yourself. What is your reaction?",
    answers: [
      { text: "Smash the mirror.", type: "A" },
      { text: "Study it carefully.", type: "B" },
      { text: "Ignore it and keep walking.", type: "C" },
      { text: "Cover it and avoid looking at it.", type: "D" },
    ],
  },
  {
    scenario:
      "A mysterious stranger offers you a box containing 'the truth.' What do you do?",
    answers: [
      { text: "Open it immediately.", type: "A" },
      { text: "Ask questions first.", type: "B" },
      { text: "Refuse politely.", type: "C" },
      { text: "Hide the box somewhere safe.", type: "D" },
    ],
  },
  {
    scenario:
      "You hear footsteps behind you in the dark. What is your first response?",
    answers: [
      { text: "Run toward the sound.", type: "A" },
      { text: "Stay calm and think.", type: "B" },
      { text: "Freeze completely.", type: "C" },
      { text: "Escape quietly.", type: "D" },
    ],
  },
  {
    scenario:
      "You discover a hidden room filled with old memories. What do you do?",
    answers: [
      { text: "Explore everything without hesitation.", type: "A" },
      { text: "Organize the room carefully.", type: "B" },
      { text: "Leave quickly.", type: "C" },
      { text: "Destroy the memories.", type: "D" },
    ],
  },
  {
    scenario:
      "At the end of the mansion, you find a final exit. What do you choose?",
    answers: [
      { text: "Walk through confidently.", type: "A" },
      { text: "Pause and think first.", type: "B" },
      { text: "Wait for someone else.", type: "C" },
      { text: "Turn back into the mansion.", type: "D" },
    ],
  },
  {
    scenario:
      "You discover a staircase descending deep underground. What do you do?",
    answers: [
      { text: "Walk away immediately.", type: "D" },
      { text: "Descend carefully step by step.", type: "B" },
      { text: "Rush down without hesitation.", type: "A" },
      { text: "Pause because something feels wrong.", type: "C" },
    ],
  },
  
  {
    scenario:
      "A shadowy figure asks you to reveal your greatest fear. How do you respond?",
    answers: [
      { text: "Change the subject entirely.", type: "D" },
      { text: "Analyze why they are asking.", type: "B" },
      { text: "Admit the fear honestly.", type: "C" },
      { text: "Laugh and challenge the figure.", type: "A" },
    ],
  },
  
  {
    scenario:
      "You find a journal describing events from your own life that you never remember experiencing.",
    answers: [
      { text: "Read every page immediately.", type: "A" },
      { text: "Study it carefully for patterns.", type: "B" },
      { text: "Feel uneasy and stop reading.", type: "C" },
      { text: "Hide the journal somewhere safe.", type: "D" },
    ],
  },
  
  {
    scenario:
      "A door suddenly appears in the middle of a forest with your name written on it.",
    answers: [
      { text: "Open it instantly.", type: "A" },
      { text: "Inspect the surroundings first.", type: "B" },
      { text: "Hesitate and wait.", type: "C" },
      { text: "Avoid the door entirely.", type: "D" },
    ],
  },
  {
    scenario:
      "You are told you may ask one question and receive a completely truthful answer. What do you do?",
    answers: [
      { text: "Ask about your future success.", type: "A" },
      { text: "Ask a carefully logical question.", type: "B" },
      { text: "Worry about the consequences of knowing.", type: "C" },
      { text: "Refuse to ask anything.", type: "D" },
    ],
  },
  
  {
    scenario:
      "You hear a child crying somewhere nearby, but you cannot see where the sound is coming from.",
    answers: [
      { text: "Run toward the sound immediately.", type: "A" },
      { text: "Search cautiously and logically.", type: "B" },
      { text: "Freeze and listen carefully.", type: "C" },
      { text: "Pretend you never heard it.", type: "D" },
    ],
  },
];

const results: Record<AnswerType, { title: string; description: string }> = {
  A: {
    title: "Id-Dominant Personality",
    description:
      "Your responses suggest strong influence from the id, the part of personality driven by instinct, emotion, desire, and immediate gratification. In Freudian theory, this may show an impulsive or excitement-seeking side of the unconscious mind. You may be drawn toward bold action before fully considering consequences.",
  },
  B: {
    title: "Ego-Dominant Personality",
    description:
      "Your responses indicate a strong ego. According to Freud, the ego balances emotional impulses with logic and reality. This result suggests that you often try to stay rational, solve problems carefully, and make decisions based on realistic consequences.",
  },
  C: {
    title: "Anxiety-Oriented Personality",
    description:
      "Your responses suggest heightened caution, hesitation, or internal anxiety. From a Freudian perspective, unconscious fears or conflicts may influence restraint and overthinking. This does not mean weakness; it suggests that your mind may prioritize safety and emotional control.",
  },
  D: {
    title: "Defense Mechanism Dominance",
    description:
      "Your responses suggest reliance on defense mechanisms such as repression, denial, avoidance, or displacement. Freud believed these unconscious strategies protect people from emotional discomfort or conflict. This result suggests that your mind may prefer distance from uncomfortable thoughts or memories.",
  },
};

const initialScores: Scores = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
};

export default function ProjectionQuiz() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Scores>(initialScores);
  const [finished, setFinished] = useState(false);

  function selectAnswer(type: AnswerType) {
    setScores((previousScores) => ({
      ...previousScores,
      [type]: previousScores[type] + 1,
    }));

    if (currentQuestion + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentQuestion((previousQuestion) => previousQuestion + 1);
    }
  }

  function restartTest() {
    setStarted(false);
    setCurrentQuestion(0);
    setScores(initialScores);
    setFinished(false);
  }

  function getHighestScoreType(): AnswerType {
    const types: AnswerType[] = ["A", "B", "C", "D"];

    return types.reduce((highest, current) =>
      scores[current] > scores[highest] ? current : highest
    );
  }

  if (!started) {
    return (
      <main className="page">
        <section className="card">
          <h1>The Shadow Mind Projection Test</h1>
          <p className="subtitle">A Freudian Projection Personality Assessment</p>

          <div className="explanation">
            <p>
              <strong>What is a projection test?</strong>
            </p>
            <p>
              Projection tests are personality assessments designed to uncover
              unconscious thoughts, emotions, and conflicts by analyzing how
              people respond to ambiguous situations. Sigmund Freud believed
              that hidden desires, anxieties, and defense mechanisms influence
              behavior without people fully realizing it.
            </p>
            <p>
              This original test presents a symbolic story. Your choices will be
              interpreted using Freudian personality concepts such as the id,
              ego, anxiety, repression, and defense mechanisms.
            </p>
          </div>

          <button className="centerButton" onClick={() => setStarted(true)}>
            Begin Test
          </button>
        </section>
      </main>
    );
  }

  if (finished) {
    const totalAnswers = Object.values(scores).reduce((sum, score) => sum + score, 0);

    const sortedTypes = (["A", "B", "C", "D"] as AnswerType[]).sort(
      (first, second) => scores[second] - scores[first]
    );

    const highestType = sortedTypes[0];
    const secondType = sortedTypes[1];

    const result = results[highestType];
    const secondaryResult = results[secondType];

    const highestPercent = Math.round((scores[highestType] / totalAnswers) * 100);
    const secondPercent = Math.round((scores[secondType] / totalAnswers) * 100);

    return (
      <main className="page">
        <section className="card">
          <h1>Your Result</h1>
          <h2>Primary Leaning: {result.title}</h2>

            <div className="resultBox">
              <p>
                Your responses suggest that you are <strong>leaning most strongly toward</strong>{" "}
                {result.title.toLowerCase()}, rather than fitting perfectly into one fixed
                category. This was your strongest pattern, appearing in about{" "}
                <strong>{highestPercent}%</strong> of your choices.
              </p>

              <p>{result.description}</p>

              <p>
                Your secondary tendency leans toward{" "}
                <strong>{secondaryResult.title.toLowerCase()}</strong>, which appeared in about{" "}
                <strong>{secondPercent}%</strong> of your choices. This suggests your personality
                profile is mixed, which fits Freud’s idea that behavior often comes from
                competing unconscious forces rather than one simple trait.
              </p>
            </div>

          <div className="scoreList">
            <strong>Response Pattern:</strong>
            <br />
            A / Id-Driven Choices: {scores.A}
            <br />
            B / Ego-Driven Choices: {scores.B}
            <br />
            C / Anxiety-Oriented Choices: {scores.C}
            <br />
            D / Defense Mechanism Choices: {scores.D}
          </div>

          <p className="smallNote">
            Note: This test is inspired by Freudian projection tests and
            psychodynamic personality theory. Like many historical projection
            tests, it is subjective and not considered a fully scientific or
            reliable modern personality assessment.
          </p>

          <button className="centerButton" onClick={restartTest}>
            Retake Test
          </button>
        </section>
      </main>
    );
  }

  const question = questions[currentQuestion];

  return (
    <main className="page">
      <section className="card">
        <div className="questionNumber">
          Question {currentQuestion + 1} of {questions.length}
        </div>

        <div className="scenario">{question.scenario}</div>

        <div className="answers">
          {question.answers.map((answer, index) => (
            <button
              key={answer.text}
              className="answerButton"
              onClick={() => selectAnswer(answer.type)}
            >
              {String.fromCharCode(65 + index)}. {answer.text}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
