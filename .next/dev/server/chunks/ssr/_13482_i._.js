module.exports = [
"[project]/components/ProjectionQuiz.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectionQuiz
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const questions = [
    {
        scenario: "You enter an abandoned mansion. At the end of the hallway is a locked door. What do you do?",
        answers: [
            {
                text: "Break the door open immediately.",
                type: "A"
            },
            {
                text: "Search carefully for a key.",
                type: "B"
            },
            {
                text: "Wait and listen before acting.",
                type: "C"
            },
            {
                text: "Turn around and leave.",
                type: "D"
            }
        ]
    },
    {
        scenario: "You find a mirror that shows a distorted version of yourself. What is your reaction?",
        answers: [
            {
                text: "Smash the mirror.",
                type: "A"
            },
            {
                text: "Study it carefully.",
                type: "B"
            },
            {
                text: "Ignore it and keep walking.",
                type: "C"
            },
            {
                text: "Cover it and avoid looking at it.",
                type: "D"
            }
        ]
    },
    {
        scenario: "A mysterious stranger offers you a box containing 'the truth.' What do you do?",
        answers: [
            {
                text: "Open it immediately.",
                type: "A"
            },
            {
                text: "Ask questions first.",
                type: "B"
            },
            {
                text: "Refuse politely.",
                type: "C"
            },
            {
                text: "Hide the box somewhere safe.",
                type: "D"
            }
        ]
    },
    {
        scenario: "You hear footsteps behind you in the dark. What is your first response?",
        answers: [
            {
                text: "Run toward the sound.",
                type: "A"
            },
            {
                text: "Stay calm and think.",
                type: "B"
            },
            {
                text: "Freeze completely.",
                type: "C"
            },
            {
                text: "Escape quietly.",
                type: "D"
            }
        ]
    },
    {
        scenario: "You discover a hidden room filled with old memories. What do you do?",
        answers: [
            {
                text: "Explore everything without hesitation.",
                type: "A"
            },
            {
                text: "Organize the room carefully.",
                type: "B"
            },
            {
                text: "Leave quickly.",
                type: "C"
            },
            {
                text: "Destroy the memories.",
                type: "D"
            }
        ]
    },
    {
        scenario: "At the end of the mansion, you find a final exit. What do you choose?",
        answers: [
            {
                text: "Walk through confidently.",
                type: "A"
            },
            {
                text: "Pause and think first.",
                type: "B"
            },
            {
                text: "Wait for someone else.",
                type: "C"
            },
            {
                text: "Turn back into the mansion.",
                type: "D"
            }
        ]
    },
    {
        scenario: "You discover a staircase descending deep underground. What do you do?",
        answers: [
            {
                text: "Walk away immediately.",
                type: "D"
            },
            {
                text: "Descend carefully step by step.",
                type: "B"
            },
            {
                text: "Rush down without hesitation.",
                type: "A"
            },
            {
                text: "Pause because something feels wrong.",
                type: "C"
            }
        ]
    },
    {
        scenario: "A shadowy figure asks you to reveal your greatest fear. How do you respond?",
        answers: [
            {
                text: "Change the subject entirely.",
                type: "D"
            },
            {
                text: "Analyze why they are asking.",
                type: "B"
            },
            {
                text: "Admit the fear honestly.",
                type: "C"
            },
            {
                text: "Laugh and challenge the figure.",
                type: "A"
            }
        ]
    },
    {
        scenario: "You find a journal describing events from your own life that you never remember experiencing.",
        answers: [
            {
                text: "Read every page immediately.",
                type: "A"
            },
            {
                text: "Study it carefully for patterns.",
                type: "B"
            },
            {
                text: "Feel uneasy and stop reading.",
                type: "C"
            },
            {
                text: "Hide the journal somewhere safe.",
                type: "D"
            }
        ]
    },
    {
        scenario: "A door suddenly appears in the middle of a forest with your name written on it.",
        answers: [
            {
                text: "Open it instantly.",
                type: "A"
            },
            {
                text: "Inspect the surroundings first.",
                type: "B"
            },
            {
                text: "Hesitate and wait.",
                type: "C"
            },
            {
                text: "Avoid the door entirely.",
                type: "D"
            }
        ]
    },
    {
        scenario: "You are told you may ask one question and receive a completely truthful answer. What do you do?",
        answers: [
            {
                text: "Ask about your future success.",
                type: "A"
            },
            {
                text: "Ask a carefully logical question.",
                type: "B"
            },
            {
                text: "Worry about the consequences of knowing.",
                type: "C"
            },
            {
                text: "Refuse to ask anything.",
                type: "D"
            }
        ]
    },
    {
        scenario: "You hear a child crying somewhere nearby, but you cannot see where the sound is coming from.",
        answers: [
            {
                text: "Run toward the sound immediately.",
                type: "A"
            },
            {
                text: "Search cautiously and logically.",
                type: "B"
            },
            {
                text: "Freeze and listen carefully.",
                type: "C"
            },
            {
                text: "Pretend you never heard it.",
                type: "D"
            }
        ]
    }
];
const results = {
    A: {
        title: "Id-Dominant Personality",
        description: "Your responses suggest strong influence from the id, the part of personality driven by instinct, emotion, desire, and immediate gratification. In Freudian theory, this may show an impulsive or excitement-seeking side of the unconscious mind. You may be drawn toward bold action before fully considering consequences."
    },
    B: {
        title: "Ego-Dominant Personality",
        description: "Your responses indicate a strong ego. According to Freud, the ego balances emotional impulses with logic and reality. This result suggests that you often try to stay rational, solve problems carefully, and make decisions based on realistic consequences."
    },
    C: {
        title: "Anxiety-Oriented Personality",
        description: "Your responses suggest heightened caution, hesitation, or internal anxiety. From a Freudian perspective, unconscious fears or conflicts may influence restraint and overthinking. This does not mean weakness; it suggests that your mind may prioritize safety and emotional control."
    },
    D: {
        title: "Defense Mechanism Dominance",
        description: "Your responses suggest reliance on defense mechanisms such as repression, denial, avoidance, or displacement. Freud believed these unconscious strategies protect people from emotional discomfort or conflict. This result suggests that your mind may prefer distance from uncomfortable thoughts or memories."
    }
};
const initialScores = {
    A: 0,
    B: 0,
    C: 0,
    D: 0
};
function ProjectionQuiz() {
    const [started, setStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentQuestion, setCurrentQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [scores, setScores] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialScores);
    const [finished, setFinished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    function selectAnswer(type) {
        setScores((previousScores)=>({
                ...previousScores,
                [type]: previousScores[type] + 1
            }));
        if (currentQuestion + 1 >= questions.length) {
            setFinished(true);
        } else {
            setCurrentQuestion((previousQuestion)=>previousQuestion + 1);
        }
    }
    function restartTest() {
        setStarted(false);
        setCurrentQuestion(0);
        setScores(initialScores);
        setFinished(false);
    }
    function getHighestScoreType() {
        const types = [
            "A",
            "B",
            "C",
            "D"
        ];
        return types.reduce((highest, current)=>scores[current] > scores[highest] ? current : highest);
    }
    if (!started) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "page",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "The Shadow Mind Projection Test"
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectionQuiz.tsx",
                        lineNumber: 214,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "subtitle",
                        children: "A Freudian Projection Personality Assessment"
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectionQuiz.tsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "explanation",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "What is a projection test?"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectionQuiz.tsx",
                                    lineNumber: 219,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectionQuiz.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Projection tests are personality assessments designed to uncover unconscious thoughts, emotions, and conflicts by analyzing how people respond to ambiguous situations. Sigmund Freud believed that hidden desires, anxieties, and defense mechanisms influence behavior without people fully realizing it."
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectionQuiz.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "This original test presents a symbolic story. Your choices will be interpreted using Freudian personality concepts such as the id, ego, anxiety, repression, and defense mechanisms."
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectionQuiz.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProjectionQuiz.tsx",
                        lineNumber: 217,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "centerButton",
                        onClick: ()=>setStarted(true),
                        children: "Begin Test"
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectionQuiz.tsx",
                        lineNumber: 235,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProjectionQuiz.tsx",
                lineNumber: 213,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ProjectionQuiz.tsx",
            lineNumber: 212,
            columnNumber: 7
        }, this);
    }
    if (finished) {
        const totalAnswers = Object.values(scores).reduce((sum, score)=>sum + score, 0);
        const sortedTypes = [
            "A",
            "B",
            "C",
            "D"
        ].sort((first, second)=>scores[second] - scores[first]);
        const highestType = sortedTypes[0];
        const secondType = sortedTypes[1];
        const result = results[highestType];
        const secondaryResult = results[secondType];
        const highestPercent = Math.round(scores[highestType] / totalAnswers * 100);
        const secondPercent = Math.round(scores[secondType] / totalAnswers * 100);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "page",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Your Result"
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectionQuiz.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: [
                            "Primary Leaning: ",
                            result.title
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProjectionQuiz.tsx",
                        lineNumber: 263,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "resultBox",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Your responses suggest that you are ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "leaning most strongly toward"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProjectionQuiz.tsx",
                                        lineNumber: 267,
                                        columnNumber: 53
                                    }, this),
                                    " ",
                                    result.title.toLowerCase(),
                                    ", rather than fitting perfectly into one fixed category. This was your strongest pattern, appearing in about",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            highestPercent,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProjectionQuiz.tsx",
                                        lineNumber: 270,
                                        columnNumber: 17
                                    }, this),
                                    " of your choices."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProjectionQuiz.tsx",
                                lineNumber: 266,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: result.description
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectionQuiz.tsx",
                                lineNumber: 273,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Your secondary tendency leans toward",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: secondaryResult.title.toLowerCase()
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProjectionQuiz.tsx",
                                        lineNumber: 277,
                                        columnNumber: 17
                                    }, this),
                                    ", which appeared in about",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            secondPercent,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProjectionQuiz.tsx",
                                        lineNumber: 278,
                                        columnNumber: 17
                                    }, this),
                                    " of your choices. This suggests your personality profile is mixed, which fits Freud’s idea that behavior often comes from competing unconscious forces rather than one simple trait."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProjectionQuiz.tsx",
                                lineNumber: 275,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProjectionQuiz.tsx",
                        lineNumber: 265,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "scoreList",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Response Pattern:"
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectionQuiz.tsx",
                                lineNumber: 285,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/ProjectionQuiz.tsx",
                                lineNumber: 286,
                                columnNumber: 13
                            }, this),
                            "A / Id-Driven Choices: ",
                            scores.A,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/ProjectionQuiz.tsx",
                                lineNumber: 288,
                                columnNumber: 13
                            }, this),
                            "B / Ego-Driven Choices: ",
                            scores.B,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/ProjectionQuiz.tsx",
                                lineNumber: 290,
                                columnNumber: 13
                            }, this),
                            "C / Anxiety-Oriented Choices: ",
                            scores.C,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/ProjectionQuiz.tsx",
                                lineNumber: 292,
                                columnNumber: 13
                            }, this),
                            "D / Defense Mechanism Choices: ",
                            scores.D
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProjectionQuiz.tsx",
                        lineNumber: 284,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "smallNote",
                        children: "Note: This test is inspired by Freudian projection tests and psychodynamic personality theory. Like many historical projection tests, it is subjective and not considered a fully scientific or reliable modern personality assessment."
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectionQuiz.tsx",
                        lineNumber: 296,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "centerButton",
                        onClick: restartTest,
                        children: "Retake Test"
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectionQuiz.tsx",
                        lineNumber: 303,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProjectionQuiz.tsx",
                lineNumber: 261,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ProjectionQuiz.tsx",
            lineNumber: 260,
            columnNumber: 7
        }, this);
    }
    const question = questions[currentQuestion];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "page",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "questionNumber",
                    children: [
                        "Question ",
                        currentQuestion + 1,
                        " of ",
                        questions.length
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProjectionQuiz.tsx",
                    lineNumber: 316,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "scenario",
                    children: question.scenario
                }, void 0, false, {
                    fileName: "[project]/components/ProjectionQuiz.tsx",
                    lineNumber: 320,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "answers",
                    children: question.answers.map((answer, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "answerButton",
                            onClick: ()=>selectAnswer(answer.type),
                            children: [
                                String.fromCharCode(65 + index),
                                ". ",
                                answer.text
                            ]
                        }, answer.text, true, {
                            fileName: "[project]/components/ProjectionQuiz.tsx",
                            lineNumber: 324,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/ProjectionQuiz.tsx",
                    lineNumber: 322,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProjectionQuiz.tsx",
            lineNumber: 315,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ProjectionQuiz.tsx",
        lineNumber: 314,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_13482_i._.js.map