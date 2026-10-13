export type Q = { q: string; options: string[]; answer: number; tip: string };
export type Resource = { title: string; url: string; type: "video" | "article" };
export type Lesson = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  intro: string;
  practice: string;
  resources: Resource[];
  questions: Q[];
};
export type Stage = { id: string; name: string; range: string; lessons: Lesson[] };

export const STAGES: Stage[] = [
  {
    id: "first",
    name: "Before baby arrives",
    range: "Before birth",
    lessons: [
      {
        id: "first-lesson",
        title: "Welcome home",
        emoji: "🏡",
        minutes: 10,
        intro:
          "Prepare a few essentials and a support plan, rather than a perfect home. Safe sleep, transport, feeding support and a way to ask for help matter more than gadgets.",
        practice:
          "Together: talk about one change you could make today. Choose a small, realistic action and decide who will take it.",
        resources: [
          {
            title: "CDC · Safe sleep",
            url: "https://www.youtube.com/watch?v=09kNXxYB_Ko",
            type: "video",
          },
        ],
        questions: [
          {
            q: "What should you arrange before bringing baby home?",
            options: [
              "A safe sleep space and correctly fitted car seat",
              "A room full of toys",
              "A strict feeding timetable",
            ],
            answer: 0,
            tip: "A separate, firm, flat sleep surface and a suitable rear-facing car seat are essentials. Follow the seat manufacturer’s fitting instructions and ask a qualified fitter if unsure.",
          },
          {
            q: "What makes a realistic first-week plan?",
            options: [
              "Expect one parent to do everything",
              "Schedule lots of visitors",
              "Share tasks and accept practical help",
            ],
            answer: 2,
            tip: "Recovery and newborn care both take energy. Agree who can handle meals, household tasks and appointments; protect rest and say no to visits when needed.",
          },
          {
            q: "Which information should be easy to find?",
            options: [
              "A list of every possible milestone",
              "Care-team contacts and local emergency number",
              "Only social media tips",
            ],
            answer: 1,
            tip: "Save your maternity and pediatric care contacts. Know how to reach urgent care locally, so you can seek help promptly without searching while worried.",
          },
          {
            q: "How should you approach feeding preparation?",
            options: [
              "Learn feeding cues and where to get support",
              "Buy one product guaranteed to solve feeding",
              "Assume feeding never needs help",
            ],
            answer: 0,
            tip: "Breastfeeding, expressed milk and formula feeding can all involve a learning curve. Identify reliable feeding support and learn safe preparation if formula may be used.",
          },
          {
            q: "A visitor offers to help. What is most useful?",
            options: [
              "Waking baby for photos",
              "Giving unsolicited medical advice",
              "A meal or household task you actually need",
            ],
            answer: 2,
            tip: "Concrete help can make recovery easier. Tell your support network what is useful and set boundaries around visits, handwashing and anyone who feels unwell.",
          },
          {
            q: "What if your expectations change after birth?",
            options: [
              "Ignore your own recovery",
              "Adapt the plan with support",
              "Treat it as a failure",
            ],
            answer: 1,
            tip: "A plan is a starting point, not a test. Your baby’s needs and your recovery may change; ask your care team for guidance and make realistic adjustments.",
          },
        ],
      },
    ],
  },
  {
    id: "w1",
    name: "The very first days",
    range: "Week 1",
    lessons: [
      {
        id: "sleep",
        title: "Safe sleep",
        emoji: "🌙",
        minutes: 10,
        intro:
          "Newborn sleep is fragmented. Focus on making every sleep safe, not getting your baby to sleep through the night. These safety habits apply beyond this week.",
        practice:
          "Together: talk about one change you could make today. Choose a small, realistic action and decide who will take it.",
        resources: [
          {
            title: "CDC · Safe sleep",
            url: "https://www.youtube.com/watch?v=09kNXxYB_Ko",
            type: "video",
          },
        ],
        questions: [
          {
            q: "What is the safest position to start each sleep?",
            options: ["On the back", "On the tummy", "On the side"],
            answer: 0,
            tip: "Place your baby on their back for every sleep, including naps. Side and tummy positions are not safe alternatives. Tummy time is for awake, supervised play.",
          },
          {
            q: "What belongs on the sleep surface?",
            options: [
              "Pillows and a duvet",
              "A soft toy and bumper",
              "Only a fitted sheet on a firm, flat mattress",
            ],
            answer: 2,
            tip: "Keep the sleep space clear of pillows, toys, loose bedding and bumpers. Soft items and inclined surfaces can obstruct breathing; use a surface designed for infant sleep.",
          },
          {
            q: "Where should baby sleep in the early weeks?",
            options: [
              "In an adult bed under a duvet",
              "In your room, on their own sleep surface",
              "On the sofa with a parent",
            ],
            answer: 1,
            tip: "Room sharing without bed sharing is the safer option, especially during the first six months. Sofas and armchairs are particularly dangerous places to fall asleep with a baby.",
          },
          {
            q: "Baby falls asleep in the car seat at home. What next?",
            options: [
              "Move them to a firm, flat sleep surface",
              "Leave them there all night",
              "Prop the seat on a bed",
            ],
            answer: 0,
            tip: "Car seats are for travel, not routine sleep. When the journey ends, transfer your baby to a suitable sleep surface as soon as practical.",
          },
          {
            q: "How can you help avoid overheating?",
            options: [
              "Add extra blankets whenever hands feel cool",
              "Keep a hat on indoors for sleep",
              "Use appropriate light layers and check their chest",
            ],
            answer: 2,
            tip: "Hands can feel cool even when a baby is comfortable. Check their chest or back; sweating or a hot chest can indicate too much warmth. Follow local safe-sleep temperature guidance.",
          },
          {
            q: "You feel yourself dozing while holding baby. What is safest?",
            options: [
              "Put a pillow around them",
              "Put baby in their own safe sleep space",
              "Stay on the sofa and hold tighter",
            ],
            answer: 1,
            tip: "Exhaustion is normal and can make accidental sleep more likely. Put baby down safely and ask your partner for support; never sleep with baby on a sofa or armchair.",
          },
        ],
      },
    ],
  },
  {
    id: "w2",
    name: "Finding your rhythm",
    range: "Week 2",
    lessons: [
      {
        id: "feeding",
        title: "Feeding cues",
        emoji: "🍼",
        minutes: 10,
        intro:
          "Responsive feeding starts with noticing your baby, not the clock alone. Your care team can help assess latch, growth and any individual feeding plan.",
        practice:
          "Together: talk about one change you could make today. Choose a small, realistic action and decide who will take it.",
        resources: [
          {
            title: "UNICEF · Breastfeeding master class",
            url: "https://www.youtube.com/watch?v=mTm9zvz5-Dc",
            type: "video",
          },
        ],
        questions: [
          {
            q: "Which is an early hunger cue?",
            options: [
              "Rooting and bringing hands to mouth",
              "A regular yawn only",
              "A wet diaper only",
            ],
            answer: 0,
            tip: "Turning toward touch near the mouth and hand-to-mouth movements can be early feeding cues. Crying is a later cue; soothing first may help an upset baby feed.",
          },
          {
            q: "How should you respond to early hunger cues?",
            options: [
              "Wait for a fixed meal time",
              "Offer water instead of milk",
              "Offer a feed rather than wait for crying",
            ],
            answer: 2,
            tip: "Newborns need frequent milk feeds. Responding early supports feeding; follow a clinician’s plan if your baby needs scheduled waking or extra monitoring.",
          },
          {
            q: "What does cluster feeding mean?",
            options: [
              "Proof milk is always insufficient",
              "Several feeds close together",
              "A reason to stop all feeds",
            ],
            answer: 1,
            tip: "Frequent feeding periods are common, particularly with breastfeeding. They do not alone prove low milk supply; assess weight, wet diapers and feeding effectiveness with support.",
          },
          {
            q: "After the first week, what can help assess milk intake?",
            options: [
              "Wet diapers, weight and feeding together",
              "Only how long baby sleeps",
              "Only breast size",
            ],
            answer: 0,
            tip: "Around six or more heavy wet diapers a day is a useful sign after the early days, but it is not the whole picture. Seek advice about fewer wet diapers, poor growth or difficulty feeding.",
          },
          {
            q: "Painful breastfeeding that persists should lead to…",
            options: [
              "Simply enduring it",
              "Skipping feeds without a plan",
              "Prompt feeding support",
            ],
            answer: 2,
            tip: "Persistent pain, damaged nipples or ineffective feeds deserve skilled support. A latch assessment can help, and your care team can check other causes.",
          },
          {
            q: "Baby is unusually sleepy and hard to feed. What now?",
            options: [
              "Wait several days",
              "Contact a healthcare professional promptly",
              "Assume long sleep is always good",
            ],
            answer: 1,
            tip: "Unusual sleepiness, poor feeding or reduced wet diapers can be warning signs. Seek timely assessment, especially for a newborn; get emergency help if baby is difficult to wake or struggling to breathe.",
          },
        ],
      },
    ],
  },
  {
    id: "w3",
    name: "Gentle daily care",
    range: "Week 3",
    lessons: [
      {
        id: "bath",
        title: "Bathing & cord",
        emoji: "🛁",
        minutes: 10,
        intro:
          "Baths do not need to be daily. Prepare everything within reach, keep baby warm and stay beside them throughout. Local cord-care advice may differ; follow your care team.",
        practice:
          "Together: talk about one change you could make today. Choose a small, realistic action and decide who will take it.",
        resources: [
          {
            title: "NHS · Bathing your baby",
            url: "https://www.youtube.com/watch?v=_9rg-DEkBQQ",
            type: "video",
          },
        ],
        questions: [
          {
            q: "How should you prepare for a bath?",
            options: [
              "Have supplies ready before putting baby in",
              "Go get a towel while baby waits",
              "Fill the bath very deep",
            ],
            answer: 0,
            tip: "Put the towel and supplies within reach first. If you must leave, take baby with you; never rely on a bath seat, sibling or shallow water to keep baby safe.",
          },
          {
            q: "What should bath water feel like?",
            options: ["Hot enough to steam", "Ice cold", "Warm, not hot"],
            answer: 2,
            tip: "Mix the water well and test it with your elbow or wrist, or use a suitable thermometer. Around body temperature is appropriate; keep hot taps out of reach.",
          },
          {
            q: "How long may baby be left alone in water?",
            options: ["Until they start moving", "Never, even briefly", "A few seconds"],
            answer: 1,
            tip: "Drowning can happen quickly and silently in very shallow water. Keep baby within reach and actively supervised the entire time.",
          },
          {
            q: "How do you care for the cord stump?",
            options: [
              "Keep it clean and dry; let it detach naturally",
              "Pull it off when loose",
              "Apply products without advice",
            ],
            answer: 0,
            tip: "Keep the stump clean and dry and fold the diaper below it when practical. Do not pull it off or use antiseptics unless your clinician recommends them.",
          },
          {
            q: "Which cord change needs medical advice?",
            options: [
              "The stump drying",
              "The stump changing color as it dries",
              "Spreading redness, pus or a bad smell",
            ],
            answer: 2,
            tip: "Spreading redness, discharge, swelling or a foul smell may indicate infection. Seek medical advice promptly, especially if baby also has a fever or seems unwell.",
          },
          {
            q: "How often does a newborn need a full bath?",
            options: [
              "At least three times a day",
              "A few times a week may be enough",
              "After every feed",
            ],
            answer: 1,
            tip: "Gentle cleaning of the face, neck folds and diaper area between baths is often enough. Frequent bathing or harsh products can dry delicate skin.",
          },
        ],
      },
    ],
  },
  {
    id: "w4",
    name: "A calmer team",
    range: "Week 4",
    lessons: [
      {
        id: "w4-lesson",
        title: "Soothing & support",
        emoji: "💛",
        minutes: 10,
        intro:
          "Crying can be intense even when you are doing your best. Use a calm check-and-soothe routine, and build a plan for moments when either parent feels overwhelmed.",
        practice:
          "Together: talk about one change you could make today. Choose a small, realistic action and decide who will take it.",
        resources: [
          {
            title: "NHS · Babies cry, you can cope",
            url: "https://healthforunder5s.co.uk/leicestershire/local-advice-and-events/advice/icon-babies-cry-you-can-cope-video/",
            type: "video",
          },
        ],
        questions: [
          {
            q: "What should you check when baby cries?",
            options: [
              "Hunger, diaper, temperature and comfort",
              "Whether they are trying to manipulate you",
              "Whether they need punishment",
            ],
            answer: 0,
            tip: "Crying communicates a need but can also continue after basic needs are met. Try feeding, a diaper change or gentle comfort; you do not have to identify a perfect solution every time.",
          },
          {
            q: "What is a gentle soothing option?",
            options: [
              "Shake them to stop crying",
              "Use loud startling sounds",
              "Hold, rock gently or speak softly",
            ],
            answer: 2,
            tip: "Calm holding, soft speech and gentle movement may help. Some babies settle with less stimulation; try one approach at a time and never shake a baby.",
          },
          {
            q: "You are overwhelmed by crying. What can you do?",
            options: [
              "Leave them on a sofa",
              "Put baby safely in their crib and take a short break",
              "Keep holding them while losing control",
            ],
            answer: 1,
            tip: "If you are close to losing control, place baby on their back in an empty safe crib, step away briefly and ask for help. Return to check them after calming down.",
          },
          {
            q: "What helps partners during difficult evenings?",
            options: [
              "Agree on handoffs before frustration builds",
              "Keep score of every mistake",
              "Avoid discussing rest",
            ],
            answer: 0,
            tip: "A clear handoff phrase and shared tasks can reduce stress. Each parent needs food, rest and support; ask trusted people for practical help when available.",
          },
          {
            q: "Which crying pattern needs urgent assessment?",
            options: [
              "A brief cry before a feed",
              "Occasional fussiness",
              "A new unusual cry with illness or difficulty waking",
            ],
            answer: 2,
            tip: "Seek medical advice if crying is unusual, persistent or comes with fever, poor feeding or reduced responsiveness. Breathing difficulty or inability to wake needs emergency help.",
          },
          {
            q: "Persistent distress or anxiety in a parent deserves…",
            options: [
              "A reminder to try harder",
              "Support from a healthcare professional",
              "Silence to avoid burdening anyone",
            ],
            answer: 1,
            tip: "Postnatal mental health difficulties can affect either parent and are treatable. Reach out early; thoughts of harm or immediate danger need urgent help.",
          },
        ],
      },
    ],
  },
  {
    id: "w56",
    name: "Noticing each other",
    range: "Weeks 5–6",
    lessons: [
      {
        id: "w56-lesson",
        title: "Tummy time & connection",
        emoji: "🧸",
        minutes: 10,
        intro:
          "Brief, supervised play builds connection and strength. These weeks are a guide for learning, not a deadline for skills. Babies develop at different rates.",
        practice:
          "Together: talk about one change you could make today. Choose a small, realistic action and decide who will take it.",
        resources: [
          {
            title: "CDC · Development in action",
            url: "https://www.cdc.gov/act-early/milestones-in-action/2-months.html",
            type: "video",
          },
        ],
        questions: [
          {
            q: "When is tummy time appropriate?",
            options: [
              "When baby is awake and actively supervised",
              "During overnight sleep",
              "Unattended in the crib",
            ],
            answer: 0,
            tip: "Tummy time is awake play only. Back sleeping remains the rule; stay close, watch baby’s face and stop if they become tired or upset.",
          },
          {
            q: "How should you begin tummy time?",
            options: [
              "One very long session immediately",
              "Only once baby can crawl",
              "Short sessions, gradually increasing as tolerated",
            ],
            answer: 2,
            tip: "A few short attempts are often easier than a long session. You can try chest-to-chest while fully awake and alert; follow individual advice for premature or medically complex babies.",
          },
          {
            q: "What is a good way to connect?",
            options: [
              "Keep all interactions silent",
              "Respond to sounds and facial expressions",
              "Show fast videos",
            ],
            answer: 1,
            tip: "Face-to-face talking, singing and responding to sounds give baby a rich learning experience. Pause to let them respond, even with a look or small sound.",
          },
          {
            q: "Baby turns away during play. What might help?",
            options: [
              "Offer a pause and less stimulation",
              "Keep increasing the noise",
              "Assume they dislike you",
            ],
            answer: 0,
            tip: "Looking away or fussing can signal a need for a break. Try a quieter moment; noticing these signals helps make play responsive rather than overwhelming.",
          },
          {
            q: "Which toy is suitable for early play?",
            options: [
              "A bead necklace",
              "A toy with accessible button batteries",
              "An age-appropriate object without small loose parts",
            ],
            answer: 2,
            tip: "Choose safe, simple objects and check for loose pieces or batteries. Your face and voice are already interesting; expensive equipment is not essential.",
          },
          {
            q: "You are concerned about development. What next?",
            options: [
              "Compare only with social media",
              "Discuss observations with your care team",
              "Wait until a fixed week has passed",
            ],
            answer: 1,
            tip: "Weekly learning ranges are not milestone deadlines. Share concerns, including loss of previously gained skills, with a healthcare professional rather than waiting.",
          },
        ],
      },
    ],
  },
  {
    id: "w78",
    name: "Everyday confidence",
    range: "Weeks 7–8",
    lessons: [
      {
        id: "w78-lesson",
        title: "Bottle feeding safely",
        emoji: "🫧",
        minutes: 10,
        intro:
          "Responsive bottle feeding means safe preparation and respecting your baby’s cues. Formula is not sterile; follow local health guidance as well as the product instructions.",
        practice:
          "Together: talk about one change you could make today. Choose a small, realistic action and decide who will take it.",
        resources: [
          {
            title: "NHS · Infant feeding videos",
            url: "https://www.nhsgrampian.org/your-health/healthy-living/breastfeeding/infant-feeding-videos/",
            type: "video",
          },
        ],
        questions: [
          {
            q: "How should you measure formula?",
            options: [
              "Use the exact water and powder amounts instructed",
              "Add extra powder for fullness",
              "Dilute it to make it last",
            ],
            answer: 0,
            tip: "Too much or too little powder can harm your baby. Use the scoop provided and exact proportions; follow local guidance on water temperature and preparation.",
          },
          {
            q: "Why is hygiene important?",
            options: [
              "Formula powder is always sterile",
              "Only the bottle color matters",
              "Powdered formula can contain harmful bacteria",
            ],
            answer: 2,
            tip: "Wash hands and use cleaned, appropriately sterilized feeding equipment. Follow your local health authority’s guidance on preparing powdered formula safely.",
          },
          {
            q: "How should you hold baby for a bottle feed?",
            options: [
              "Alone in a car seat",
              "Semi-upright, supported, with pauses",
              "Flat with the bottle propped",
            ],
            answer: 1,
            tip: "Hold baby and the bottle, allowing pauses and watching cues. Never prop a bottle or leave baby to feed unattended; this increases choking risk.",
          },
          {
            q: "Baby turns away and stops sucking. What next?",
            options: [
              "Pause and respect fullness cues",
              "Insist on finishing the bottle",
              "Add more powder",
            ],
            answer: 0,
            tip: "Do not force a baby to finish a bottle. Turning away, relaxed hands or stopping sucking may signal fullness; responsive feeding respects appetite.",
          },
          {
            q: "What should happen to milk left after a feed?",
            options: [
              "Save it for tomorrow",
              "Keep reheating it",
              "Discard it according to safe-use guidance",
            ],
            answer: 2,
            tip: "Milk exposed to baby’s mouth can grow bacteria. Follow local storage and discard timing; do not save partially consumed formula for another feed.",
          },
          {
            q: "Which is safest for warming a feed?",
            options: [
              "Judge by the bottle’s outside alone",
              "Avoid microwaving and test the temperature",
              "Microwave until very hot",
            ],
            answer: 1,
            tip: "Microwaves can create hot spots that burn the mouth. A feed need not be warm; if warmed safely, test before offering and follow storage guidance.",
          },
        ],
      },
    ],
  },
  {
    id: "w912",
    name: "Growing awareness",
    range: "Weeks 9–12",
    lessons: [
      {
        id: "health",
        title: "Health & getting help",
        emoji: "🌡️",
        minutes: 10,
        intro:
          "Learn warning signs before you need them. This is general education, not a diagnosis or first-aid certification. Your own care team knows your baby’s medical history.",
        practice:
          "Together: talk about one change you could make today. Choose a small, realistic action and decide who will take it.",
        resources: [
          {
            title: "CDC · Development in action",
            url: "https://www.cdc.gov/act-early/milestones-in-action/2-months.html",
            type: "video",
          },
        ],
        questions: [
          {
            q: "A baby under 12 weeks has a temperature of 38°C or higher. What now?",
            options: ["Seek urgent medical assessment", "Wait a few days", "Give honey"],
            answer: 0,
            tip: "Fever of 38°C / 100.4°F or higher in a baby younger than three months needs urgent assessment. Seek local urgent care advice rather than waiting for it to resolve.",
          },
          {
            q: "Which sign calls for emergency help?",
            options: [
              "A normal sneeze",
              "Brief hiccups",
              "Blue lips or severe breathing difficulty",
            ],
            answer: 2,
            tip: "Severe breathing difficulty, blue or gray color, unresponsiveness or a seizure needs emergency help. Call your local emergency number immediately.",
          },
          {
            q: "What should you do about reduced wet diapers and poor feeding?",
            options: [
              "Give water without advice",
              "Seek prompt medical advice",
              "Ignore them if baby is quiet",
            ],
            answer: 1,
            tip: "Reduced urine and poor feeding can signal dehydration or illness. Young babies can worsen quickly; contact a healthcare professional promptly.",
          },
          {
            q: "What helps you describe a concern?",
            options: [
              "Note symptoms, temperature, feeds and diapers",
              "Only say baby seems different",
              "Wait to collect a week of data",
            ],
            answer: 0,
            tip: "Simple observations help the care team assess urgency. Do not delay seeking help to gather perfect notes; trust your concern if something feels wrong.",
          },
          {
            q: "How should you plan vaccinations?",
            options: [
              "Use the same schedule in every country",
              "Skip them without discussing it",
              "Follow the local schedule with your care team",
            ],
            answer: 2,
            tip: "Schedules vary by location and medical needs. Your care team can advise on routine appointments, side effects and when to seek help.",
          },
          {
            q: "What is the best preparation for choking or CPR?",
            options: [
              "Copy an unverified social clip",
              "Take a certified infant first-aid course",
              "Rely only on this quiz",
            ],
            answer: 1,
            tip: "First-aid actions depend on age and the situation. Get hands-on training from a recognized provider; during an emergency call for help and follow dispatcher instructions.",
          },
        ],
      },
    ],
  },
  {
    id: "w1316",
    name: "New discoveries",
    range: "Weeks 13–16",
    lessons: [
      {
        id: "w1316-lesson",
        title: "Rolling & play",
        emoji: "🎈",
        minutes: 10,
        intro:
          "As movement develops, your supervision and sleep habits need to keep up. Do not assume a baby cannot roll just because they have not done so before.",
        practice:
          "Together: talk about one change you could make today. Choose a small, realistic action and decide who will take it.",
        resources: [
          {
            title: "CDC · Development in action",
            url: "https://www.cdc.gov/act-early/milestones-in-action/2-months.html",
            type: "video",
          },
        ],
        questions: [
          {
            q: "Where is a safe place for supervised floor play?",
            options: [
              "A clear floor area with safe toys",
              "The edge of a bed",
              "An unattended changing table",
            ],
            answer: 0,
            tip: "A safe floor area prevents falls from raised surfaces. Keep small objects, cords and pets away, and stay present during play.",
          },
          {
            q: "When should swaddling stop?",
            options: [
              "Only at a fixed birthday",
              "Once rolling has happened many times",
              "At the first signs of attempting to roll",
            ],
            answer: 2,
            tip: "Stop swaddling when baby shows signs of trying to roll, which may be earlier than expected. Use non-weighted sleep clothing appropriate for temperature.",
          },
          {
            q: "What position starts every sleep even after rolling begins?",
            options: ["Propped on the side", "On the back", "On the tummy"],
            answer: 1,
            tip: "Continue placing baby on their back. If they can independently roll both ways, follow safe-sleep guidance and keep the space clear; never use positioners.",
          },
          {
            q: "What makes play responsive?",
            options: [
              "Follow interest and allow breaks",
              "Practice one movement until baby cries",
              "Compare every session with another baby",
            ],
            answer: 0,
            tip: "Offer opportunities without pressure. Watch baby’s cues and stop when tired; movement skills vary and concerns can be discussed with your clinician.",
          },
          {
            q: "Can you leave baby on a changing table briefly?",
            options: [
              "Yes if they have never rolled",
              "Yes with a pillow barrier",
              "No, keep a hand on baby and supplies nearby",
            ],
            answer: 2,
            tip: "New movements can happen unexpectedly. Never leave baby unattended on a raised surface; change on a safe floor surface if that is easier.",
          },
          {
            q: "Baby is not doing a skill seen online. What should you do?",
            options: [
              "Assume exact weekly deadlines",
              "Use reliable milestone guidance and discuss concerns",
              "Force the skill",
            ],
            answer: 1,
            tip: "Social videos are not developmental screening. Skills emerge over a range, but loss of skills or your concern deserves a conversation with your care team.",
          },
        ],
      },
    ],
  },
  {
    id: "w1720",
    name: "Making room for rest",
    range: "Weeks 17–20",
    lessons: [
      {
        id: "w1720-lesson",
        title: "Sleep routines",
        emoji: "🌛",
        minutes: 10,
        intro:
          "Predictable cues can help evenings feel calmer, but infant sleep still varies. Safe sleep matters at every nap and night, whatever routine you choose.",
        practice:
          "Together: talk about one change you could make today. Choose a small, realistic action and decide who will take it.",
        resources: [
          {
            title: "CDC · Safe sleep",
            url: "https://www.youtube.com/watch?v=09kNXxYB_Ko",
            type: "video",
          },
        ],
        questions: [
          {
            q: "What is a useful bedtime cue?",
            options: [
              "A calm, repeatable sequence",
              "Keeping baby awake all day",
              "Loud screens before sleep",
            ],
            answer: 0,
            tip: "A short sequence such as a feed, gentle care and a song can signal rest. Keep expectations flexible and adjust to your baby’s cues.",
          },
          {
            q: "Baby wakes at night. What can that mean?",
            options: [
              "Proof you are failing",
              "A reason to stop responding",
              "A need for feeding, comfort or support",
            ],
            answer: 2,
            tip: "Night waking is common and varies by baby. Some still need night feeds; discuss any changes with your clinician, especially if growth or intake is a concern.",
          },
          {
            q: "How should naps be made safe?",
            options: [
              "Add a pillow for comfort",
              "Use the same safe-sleep setup as night",
              "Use a sofa because naps are short",
            ],
            answer: 1,
            tip: "Naps need a firm, flat, clear sleep surface and back placement too. Short duration does not make unsafe sleep surfaces safer.",
          },
          {
            q: "What should you do with a rigid online sleep promise?",
            options: [
              "Treat it cautiously and consider baby’s needs",
              "Follow it regardless of feeding",
              "Assume every baby is the same",
            ],
            answer: 0,
            tip: "A method cannot guarantee sleep for every baby. Consider age, health and feeding, and seek qualified advice if a routine causes distress or compromises needs.",
          },
          {
            q: "What supports an exhausted parenting team?",
            options: [
              "Expect one person to cope alone",
              "Avoid asking anyone for help",
              "Share practical tasks and protect rest",
            ],
            answer: 2,
            tip: "Divide tasks in ways that fit feeding and recovery. Even if feeds cannot be equally shared, diaper changes, meals and settling support can reduce the load.",
          },
          {
            q: "Which sleep product should you avoid?",
            options: [
              "A correctly fitted sheet",
              "Weighted infant sleep products",
              "A suitable clear crib",
            ],
            answer: 1,
            tip: "Weighted blankets, weighted swaddles and positioners are not recommended for infant sleep. Choose a safe sleep surface rather than products promising deeper sleep.",
          },
        ],
      },
    ],
  },
  {
    id: "w2126",
    name: "Ready for first tastes",
    range: "Weeks 21–26",
    lessons: [
      {
        id: "solids",
        title: "Starting solids",
        emoji: "🥕",
        minutes: 10,
        intro:
          "Most babies are ready around six months, not at an exact week. Milk remains important. Talk with your care team about readiness, allergens or additional medical needs.",
        practice:
          "Together: talk about one change you could make today. Choose a small, realistic action and decide who will take it.",
        resources: [
          {
            title: "UNICEF · Your baby’s first foods",
            url: "https://www.unicef.org/lac/en/parenting-lac/food-nutrition/babys-first-foods-video",
            type: "video",
          },
        ],
        questions: [
          {
            q: "What guides starting solids?",
            options: [
              "Around six months plus readiness signs",
              "A fixed week regardless of readiness",
              "Interest in an adult’s plate alone",
            ],
            answer: 0,
            tip: "Look for the ability to stay upright with good head control, coordinate food to the mouth and swallow rather than push food out. Ask your care team if unsure.",
          },
          {
            q: "How should baby sit for food?",
            options: [
              "Reclined while moving",
              "Alone with snacks",
              "Upright and supported with supervision",
            ],
            answer: 2,
            tip: "An upright supported seat and close supervision reduce risk. Avoid feeding while lying down or on the move, and match texture to your baby’s abilities.",
          },
          {
            q: "Which food must be avoided before 52 weeks?",
            options: ["Iron-rich baby food", "Honey", "Soft mashed vegetables"],
            answer: 1,
            tip: "Do not give honey before one year because it can cause infant botulism. This includes honey added to food; other foods also need age-appropriate preparation.",
          },
          {
            q: "What remains important when solids begin?",
            options: [
              "Breast milk or infant formula",
              "Replacing all milk immediately",
              "Sugary drinks",
            ],
            answer: 0,
            tip: "Early solids complement milk rather than replace all feeds. Offer varied, nutritious foods including iron-rich choices while continuing appropriate milk feeds.",
          },
          {
            q: "How should common allergens be introduced?",
            options: [
              "Always delay all allergens for years",
              "Offer whole nuts",
              "In safe forms with appropriate guidance",
            ],
            answer: 2,
            tip: "Introduce allergens in age-appropriate forms; whole nuts are a choking hazard. Get individualized advice for severe eczema, known allergies or other concerns.",
          },
          {
            q: "Baby pushes a new food away. What helps?",
            options: [
              "Punish refusal",
              "Low-pressure repeated opportunities",
              "Force another spoonful",
            ],
            answer: 1,
            tip: "Learning tastes takes time. Offer small amounts without pressure, respect fullness cues and let baby explore safely. Ask for advice if feeding or growth is difficult.",
          },
        ],
      },
    ],
  },
  {
    id: "w2732",
    name: "A safer little world",
    range: "Weeks 27–32",
    lessons: [
      {
        id: "babyproof",
        title: "Babyproofing",
        emoji: "🔌",
        minutes: 10,
        intro:
          "Prepare before movement increases. Babyproofing supports supervision; it does not replace it. Recheck the space as your baby learns new ways to reach and climb.",
        practice:
          "Together: talk about one change you could make today. Choose a small, realistic action and decide who will take it.",
        resources: [
          {
            title: "CDC · Development in action",
            url: "https://www.cdc.gov/act-early/milestones-in-action/2-months.html",
            type: "video",
          },
        ],
        questions: [
          {
            q: "When should you babyproof?",
            options: [
              "Before increased mobility",
              "After the first accident",
              "Only once walking starts",
            ],
            answer: 0,
            tip: "Crawling and reaching can appear unexpectedly. Inspect the home from floor level now and revisit it as skills change.",
          },
          {
            q: "Where do medicines and cleaning products belong?",
            options: ["In a low unlocked cupboard", "On a counter edge", "Locked out of reach"],
            answer: 2,
            tip: "Use locked storage out of reach and keep products in original packaging. Do not rely on child-resistant caps alone; they are not childproof.",
          },
          {
            q: "How should heavy furniture be secured?",
            options: [
              "Trust its weight",
              "Anchor it according to manufacturer guidance",
              "Put toys on top to stabilize it",
            ],
            answer: 1,
            tip: "Furniture and televisions can tip when pulled or climbed. Use appropriate anchors and avoid tempting objects on top; check local installation advice.",
          },
          {
            q: "What should happen to button batteries?",
            options: [
              "Keep them securely inaccessible",
              "Treat them like ordinary toys",
              "Wait for symptoms after swallowing",
            ],
            answer: 0,
            tip: "Button batteries can cause severe injury. Secure compartments and keep loose batteries away; suspected swallowing needs immediate emergency advice, even without symptoms.",
          },
          {
            q: "What is the best approach near stairs?",
            options: [
              "A loose chair across the opening",
              "Teach baby once and trust them",
              "Suitable gates plus supervision",
            ],
            answer: 2,
            tip: "Use gates suited to the location and properly installed. At the top of stairs, follow guidance on hardware-mounted gates; keep supervising.",
          },
          {
            q: "How long should a child travel rear-facing?",
            options: [
              "Only a few weeks",
              "Until the seat’s rear-facing size limits are reached",
              "Turn them forward as soon as they sit",
            ],
            answer: 1,
            tip: "Rear-facing protects the head and neck. Follow the seat’s height and weight limits and local laws, choosing an appropriate seat rather than changing direction at an arbitrary age.",
          },
        ],
      },
    ],
  },
  {
    id: "w3340",
    name: "Conversations begin",
    range: "Weeks 33–40",
    lessons: [
      {
        id: "play",
        title: "Talking & reading",
        emoji: "📚",
        minutes: 10,
        intro:
          "Everyday back-and-forth interaction is valuable. You do not need special flashcards: noticing, naming and responding create meaningful opportunities to learn.",
        practice:
          "Together: talk about one change you could make today. Choose a small, realistic action and decide who will take it.",
        resources: [
          {
            title: "CDC · Development in action",
            url: "https://www.cdc.gov/act-early/milestones-in-action/2-months.html",
            type: "video",
          },
        ],
        questions: [
          {
            q: "What supports language learning?",
            options: [
              "Talking, reading and responding",
              "Background television all day",
              "Avoiding interaction",
            ],
            answer: 0,
            tip: "Responsive interaction gives language meaning. Narrate ordinary moments, name what baby notices and pause to allow a response.",
          },
          {
            q: "Baby babbles. How can you respond?",
            options: [
              "Demand a full word",
              "Ignore sounds until speech starts",
              "Copy a sound and take turns",
            ],
            answer: 2,
            tip: "A conversation can begin before words. Responding to babbles encourages turn-taking and connection without pressure to perform.",
          },
          {
            q: "What kind of reading works well?",
            options: [
              "Silent independent reading only",
              "Short, enjoyable shared sessions",
              "Finishing every page despite crying",
            ],
            answer: 1,
            tip: "Point at pictures, name things and let baby engage safely. A few happy minutes count; stop when baby loses interest.",
          },
          {
            q: "Should a multilingual family stop using home languages?",
            options: [
              "No, use languages you know comfortably",
              "Yes, only one language is allowed",
              "Only use television translations",
            ],
            answer: 0,
            tip: "Warm, fluent interaction in your home languages supports connection and learning. Discuss speech concerns with a qualified professional rather than dropping a language out of fear.",
          },
          {
            q: "What about screens for young babies?",
            options: [
              "Use videos instead of all interaction",
              "Leave autoplay running",
              "Prioritize real interaction; video calls can be shared",
            ],
            answer: 2,
            tip: "For very young children, prioritize in-person play and interaction. Supported video calls are different from passive viewing; follow local pediatric guidance.",
          },
          {
            q: "What warrants a developmental conversation?",
            options: [
              "Pausing between babbles",
              "Loss of sounds or other previously gained skills",
              "Enjoying the same book again",
            ],
            answer: 1,
            tip: "Loss of skills or concerns about hearing, communication or interaction should be shared with your care team. Early advice is more useful than waiting for a strict weekly deadline.",
          },
        ],
      },
    ],
  },
  {
    id: "w4152",
    name: "Brave little explorers",
    range: "Weeks 41–52",
    lessons: [
      {
        id: "w4152-lesson",
        title: "Separation & exploration",
        emoji: "🧩",
        minutes: 10,
        intro:
          "As babies explore, they may also seek you more strongly. Your calm presence and predictable returns support them while keeping new movement safe.",
        practice:
          "Together: talk about one change you could make today. Choose a small, realistic action and decide who will take it.",
        resources: [
          {
            title: "CDC · Development in action",
            url: "https://www.cdc.gov/act-early/milestones-in-action/2-months.html",
            type: "video",
          },
        ],
        questions: [
          {
            q: "Baby protests when you leave. What may be happening?",
            options: [
              "Common separation anxiety",
              "Intentional misbehavior",
              "Proof of poor attachment",
            ],
            answer: 0,
            tip: "Separation anxiety can be a normal developmental experience. Offer reassurance and consider hunger, tiredness or unfamiliar surroundings too.",
          },
          {
            q: "What helps a goodbye?",
            options: [
              "Sneaking away every time",
              "Threatening not to return",
              "A short, predictable goodbye",
            ],
            answer: 2,
            tip: "A calm routine and familiar caregiver can help. Avoid promising an exact return your child cannot understand; reconnect warmly when you return.",
          },
          {
            q: "How can you encourage safe exploration?",
            options: [
              "Keep baby still all day",
              "Offer a safe space and stay nearby",
              "Remove supervision entirely",
            ],
            answer: 1,
            tip: "Movement and exploration support learning. Provide safe opportunities and a secure base, with supervision around water, stairs and hazards.",
          },
          {
            q: "What is a safe choice for early movement practice?",
            options: [
              "Floor play and stable appropriate support",
              "A wheeled baby walker",
              "An unattended raised surface",
            ],
            answer: 0,
            tip: "Avoid wheeled baby walkers because of injury risk. Safe floor play gives opportunities to build skills without forcing walking.",
          },
          {
            q: "How should you offer finger foods?",
            options: [
              "Whole grapes and hard nuts",
              "Snacks while lying down",
              "Soft, appropriately shaped pieces with supervision",
            ],
            answer: 2,
            tip: "Adapt foods to your child’s chewing and swallowing abilities. Avoid hard, round foods; seek reliable food-preparation guidance and stay present.",
          },
          {
            q: "Another baby walks earlier. What should you remember?",
            options: [
              "Practice until your child cries",
              "Development varies; discuss your own concerns",
              "Every baby must walk in the same week",
            ],
            answer: 1,
            tip: "Comparison is not a screening tool. Use reliable developmental guidance and talk with your clinician if worried or if skills are lost.",
          },
        ],
      },
    ],
  },
  {
    id: "w5364",
    name: "Big feelings, little bodies",
    range: "Weeks 53–64",
    lessons: [
      {
        id: "tantrums",
        title: "Tantrums",
        emoji: "🌋",
        minutes: 10,
        intro:
          "Toddlers are learning to manage emotions with limited language and self-control. Calm limits and connection help more than expecting adult-level reasoning.",
        practice:
          "Together: talk about one change you could make today. Choose a small, realistic action and decide who will take it.",
        resources: [
          {
            title: "NHS · Understanding tantrums",
            url: "https://wyhealthiertogether.nhs.uk/parentscarers/your-childs-development/tantrums",
            type: "video",
          },
        ],
        questions: [
          {
            q: "During a tantrum, what comes first?",
            options: [
              "Keep your child safe and stay calm",
              "Yell louder",
              "Explain a long lecture",
            ],
            answer: 0,
            tip: "Move hazards away, stay near and use a calm voice. A very upset toddler may not process reasoning until they settle.",
          },
          {
            q: "How can you name a feeling?",
            options: [
              "Stop being bad",
              "You have nothing to cry about",
              "You’re upset that playtime ended",
            ],
            answer: 2,
            tip: "Simple emotion words can help your child connect feelings with language. Acknowledge the feeling without changing a necessary safety limit.",
          },
          {
            q: "Which strategy can prevent some struggles?",
            options: ["Give unlimited options", "Offer two acceptable simple choices", "Skip naps"],
            answer: 1,
            tip: "Small choices support autonomy: red cup or blue cup. Predictable meals, rest and transitions can reduce stress, but cannot prevent every tantrum.",
          },
          {
            q: "Your child hits. How should you respond?",
            options: [
              "Calmly block harm and set a clear limit",
              "Hit back",
              "Ignore immediate danger",
            ],
            answer: 0,
            tip: "Keep everyone safe and say a brief clear limit, such as I won’t let you hit. Once calm, model a safer way to express the feeling.",
          },
          {
            q: "When is teaching easiest?",
            options: ["At the loudest moment", "Only as punishment", "After your child has calmed"],
            answer: 2,
            tip: "Regulation comes before reasoning. Later, reconnect and practice an alternative using a few simple words or play.",
          },
          {
            q: "Frequent severe behavior is worrying you. What next?",
            options: ["Never tell anyone", "Ask for professional support", "Assume you caused it"],
            answer: 1,
            tip: "Seek advice if behavior is persistent, dangerous, unusually intense or concerns you. Support can look at sleep, communication, health and family stress.",
          },
        ],
      },
    ],
  },
  {
    id: "w6578",
    name: "Small routines, big changes",
    range: "Weeks 65–78",
    lessons: [
      {
        id: "w6578-lesson",
        title: "Food & boundaries",
        emoji: "🥣",
        minutes: 10,
        intro:
          "Toddlers can be inconsistent eaters. Predictable meals, safe food preparation and calm boundaries support independence without forcing food.",
        practice:
          "Together: talk about one change you could make today. Choose a small, realistic action and decide who will take it.",
        resources: [
          {
            title: "UNICEF · Your baby’s first foods",
            url: "https://www.unicef.org/lac/en/parenting-lac/food-nutrition/babys-first-foods-video",
            type: "video",
          },
        ],
        questions: [
          {
            q: "What is a helpful meal approach?",
            options: [
              "Regular meals and snacks without pressure",
              "Force the plate to be finished",
              "Use threats",
            ],
            answer: 0,
            tip: "Adults offer suitable foods at predictable times; children’s appetites vary. Keep meals calm and discuss growth or nutrition concerns with a professional.",
          },
          {
            q: "How should whole grapes be prepared?",
            options: ["Served whole", "Only cut across in half", "Quartered lengthwise"],
            answer: 2,
            tip: "Round foods can block the airway. Quarter grapes lengthwise and adjust other foods for safe texture and size; supervise while your child sits to eat.",
          },
          {
            q: "Should whole nuts be offered to a young toddler?",
            options: [
              "Yes while running",
              "No, use age-appropriate safe forms",
              "Yes if they have teeth",
            ],
            answer: 1,
            tip: "Whole nuts are a choking risk for young children. Nut butters need suitable thin spreading or mixing; allergy advice may also be needed.",
          },
          {
            q: "How can you set a clear boundary?",
            options: [
              "Use a short, calm and consistent limit",
              "Change rules every minute",
              "Give a long explanation during distress",
            ],
            answer: 0,
            tip: "Short, understandable limits and predictable follow-through help learning. Offer an acceptable alternative and keep expectations suited to development.",
          },
          {
            q: "What helps with a new food?",
            options: [
              "Sneaking it in as a punishment",
              "Never offering it again",
              "Repeated low-pressure exposure",
            ],
            answer: 2,
            tip: "It may take many opportunities to become familiar with a food. Small servings and seeing trusted adults eat it can help, without bribery or pressure.",
          },
          {
            q: "Mealtimes are consistently painful or growth is concerning. What next?",
            options: [
              "Assume it is always a phase",
              "Ask your care team for assessment",
              "Force bigger portions",
            ],
            answer: 1,
            tip: "Feeding difficulty can have several causes. Seek help for pain, coughing or choking during meals, limited intake or concerns about growth.",
          },
        ],
      },
    ],
  },
  {
    id: "w79104",
    name: "Independence at their pace",
    range: "Weeks 79–104",
    lessons: [
      {
        id: "potty",
        title: "Potty readiness",
        emoji: "🚽",
        minutes: 10,
        intro:
          "Toilet learning depends on readiness, not a particular week. Keep it low-pressure, and remember daytime and nighttime dryness are different skills.",
        practice:
          "Together: talk about one change you could make today. Choose a small, realistic action and decide who will take it.",
        resources: [
          {
            title: "NHS · Understanding tantrums",
            url: "https://wyhealthiertogether.nhs.uk/parentscarers/your-childs-development/tantrums",
            type: "video",
          },
        ],
        questions: [
          {
            q: "What suggests readiness to try toilet learning?",
            options: [
              "Interest, some dry periods and simple instructions",
              "Reaching one exact week",
              "Walking alone",
            ],
            answer: 0,
            tip: "Look for a combination of signals such as noticing wetness, staying dry for stretches, interest and ability to follow simple directions. Age alone does not establish readiness.",
          },
          {
            q: "How should you introduce the potty?",
            options: ["Force long sits", "Use shame", "Calmly and without pressure"],
            answer: 2,
            tip: "Offer a familiar potty and a relaxed routine. Brief optional practice can help; stop and reassess if your child is distressed.",
          },
          {
            q: "What should you do after an accident?",
            options: ["Compare with another child", "Stay neutral and help clean up", "Punish"],
            answer: 1,
            tip: "Accidents are part of learning. Calm cleanup and reassurance preserve trust; avoid making accidents a moral issue.",
          },
          {
            q: "Does daytime dryness guarantee dry nights?",
            options: [
              "No, nighttime dryness can come later",
              "Yes, immediately",
              "Only if rewarded enough",
            ],
            answer: 0,
            tip: "Nighttime bladder control develops separately. Protective bedding and patience can help; ask for advice if you have concerns rather than punishing wet nights.",
          },
          {
            q: "Painful stools or withholding should prompt…",
            options: ["More punishment", "Ignoring the pain", "Medical advice about constipation"],
            answer: 2,
            tip: "Constipation can make toilet learning frightening. Seek advice early, especially with pain, blood or persistent withholding; follow an individual treatment plan.",
          },
          {
            q: "Your child strongly resists training. What helps?",
            options: [
              "Keep them seated for an hour",
              "Pause and revisit readiness later",
              "Increase pressure",
            ],
            answer: 1,
            tip: "A break can reduce stress and restore confidence. Keep the potty familiar without pressure and consider professional advice if difficulties persist.",
          },
        ],
      },
    ],
  },
  {
    id: "w105156",
    name: "Growing together",
    range: "Weeks 105–156",
    lessons: [
      {
        id: "w105156-lesson",
        title: "Play, feelings & teamwork",
        emoji: "🌱",
        minutes: 10,
        intro:
          "Play lets children practice communication, cooperation and emotions. Your parenting team can grow too: review what is working and share the load fairly.",
        practice:
          "Together: talk about one change you could make today. Choose a small, realistic action and decide who will take it.",
        resources: [
          {
            title: "NHS · Understanding tantrums",
            url: "https://wyhealthiertogether.nhs.uk/parentscarers/your-childs-development/tantrums",
            type: "video",
          },
        ],
        questions: [
          {
            q: "What is a useful way to support pretend play?",
            options: [
              "Follow the child’s lead and join in",
              "Correct every detail",
              "Replace all play with drills",
            ],
            answer: 0,
            tip: "Pretend play offers opportunities for language and social learning. Join a simple story, take turns and let your child contribute ideas.",
          },
          {
            q: "How can you help a child take turns?",
            options: [
              "Expect perfect sharing immediately",
              "Remove every toy permanently",
              "Model and practice short turns",
            ],
            answer: 2,
            tip: "Turn-taking develops gradually. Practice with simple games, name whose turn it is and provide support; big feelings about sharing are common.",
          },
          {
            q: "What helps partners stay aligned?",
            options: [
              "Keep all expectations unspoken",
              "Discuss a few consistent limits when calm",
              "Argue through the child",
            ],
            answer: 1,
            tip: "Agree on core safety and behavior expectations, then review them together. Differences can be discussed privately without making the child responsible for them.",
          },
          {
            q: "How can you support a child’s feelings?",
            options: ["Name emotions and model calming", "Ban all crying", "Demand instant calm"],
            answer: 0,
            tip: "You can acknowledge a feeling while keeping a boundary. Model breathing, taking a break or asking for help without expecting perfect self-control.",
          },
          {
            q: "What should happen to learning as your child grows?",
            options: [
              "Follow exact weekly deadlines",
              "Assume all children learn identically",
              "Adapt to their needs and seek advice when concerned",
            ],
            answer: 2,
            tip: "Weekly sections organize topics, not diagnose development. Keep noticing your child and discuss concerns or loss of skills with your healthcare professional.",
          },
          {
            q: "What is a realistic goal for your parenting team?",
            options: [
              "Compare scores to decide the better parent",
              "Keep learning and repair after difficult moments",
              "Never make a mistake",
            ],
            answer: 1,
            tip: "Shared learning is about support, not competition. Apologizing, reconnecting and adjusting routines helps model healthy relationships for your child.",
          },
        ],
      },
    ],
  },
];

export const ALL_LESSONS = STAGES.flatMap((stage) => stage.lessons);
