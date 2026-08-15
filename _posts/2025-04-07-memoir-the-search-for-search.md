---
layout: post
title: "Memoir: The Search for Search"
date: 2025-04-07
tags: [memoir, ai, search]
summary: A first hackathon, a curious search problem, and the path from a loose idea to Ask CNA.
---

### Chapter 1: The Email That Started It All

It all started with an email landing in my inbox in October 2024, just after lunch in the middle of a hectic work week. Our lead product manager of news and entertainment lifestyle properties, Anil Nair, wrote: "As part of our next phase of growth, the Digital leadership team has identified 10 key strategic initiatives to be worked on in the next 12 to 18 months. These initiatives will be worked on by cross-functional teams from across the digital group. I have been tasked to lead a project on 'Solving consumer problems on our products by using AI technologies'. Broadly, we need to identify, flesh out and strategize."

Fast forward through tons of brainstorming sessions with the team, we actively contributed to this strategic and cross-functional AI initiative. We collaborated on identifying and defining top consumer pain points and solution approaches, resulting in clear, strategic project proposals across key themes: Personalization, Redefining Search, and Gamification. We called it Project Matrix (yes, a classic name – what else would you call an AI project?).

Our presentation to the CTO at the end of November 2024 went well. The next steps were to prioritize from the list of broad features we had identified:

1. Decide what to build first – for example, should we start with a digital valet for personalization?
2. Prioritize capabilities that could benefit multiple features – like building blocks that would enhance both search and personalization.

---

## Chapter 2: The Spark of Curiosity

The presentation garnered attention, but then regular work continued. I secretly wished we could circle back to one of those themes. I was particularly fascinated with the search concept. Having worked closely on that aspect, I somehow wanted to pursue the idea further.

I started diving into online resources about RAGs, how search engines work, how LLMs function, how to build AI-enabled search, and how to make LLMs work with proprietary data. These questions kept burning in my mind. I spent evenings reading blogs, watching and following along videos, and experimenting with code snippets to understand the underlying concepts better. Each new concept unlocked five more questions, and I couldn't get enough of it. It was a constant learning curve, connecting dots between vector databases, embeddings, semantic search techniques, ranking algorithms, and so much more.

---

## Chapter 3: The Hackathon Opportunity

And then, another email landed in my inbox in early February: "Digital Hackathon Week - Register Now!"

It said: "This is your chance to get involved in some exciting problem-solving! Whether you're into brainstorming fresh ideas, tackling challenges, or working together to create innovative solutions - this is the perfect opportunity to shine."

Bam! I was crystal clear – let's go for it. At the same time, I had butterflies in my stomach. It wasn't going to be easy, especially since this would be my first hackathon experience. I regrouped with some of my colleagues from Project Matrix – Vikas and Saurabh – and then checked with Vaidee, Santosh, and Satheesh to see if they were curious about joining the hackathon.

I brought my data expertise. Vikas and Saurabh contributed their full-stack development experience. Vaidee offered his creativity skills. Santosh and Satheesh served as strategic mentors. And just like that, our team was set – that's all we needed.

---

## Chapter 4: The Research Phase

We had our initial discussion by the end of February about which problem statement to pick, and we were sorted. No need to overthink – we were too lazy for that! We picked the theme "Redefining Search" from Project Matrix.

That kicked my motivation into high gear to get back to my research. Week after week, I immersed myself in YouTube videos, Hugging Face documentation, and other online resources. Vector DBs, embeddings, semantic relevance, ranking algorithms, sentence transformers, RAGs – these were some of the trending keywords dominating my search history and browser bookmarks.

I connected the bits and pieces to make sense of how we could stitch everything together to achieve our solution. Thanks to the folks at OpenAI and Anthropic (just to name a few) for bringing this LLM era to reality. It felt like having an SME ready to brainstorm with. I gathered so much information that I could have practically written a research paper!

---

## Chapter 5: Building the Foundation

As a data guy, I started by figuring out how to get the data to feed our hungry LLM. As you might guess, web scraping was the answer. I discussed with the team about first scraping and building a corpus of articles so we could demo questions related to them. However, we didn't want to limit our system to only understanding those specific articles. We wanted to showcase diverse question handling during the demo.

So, I thought of a simple workaround: extracting keywords from user queries and then searching CNA based on those keywords to fetch relevant articles. With the relevant articles in hand, we generated embeddings – essentially turning text into numerical representations that computers can understand and compare. We stored these in a Vector DB, and to keep things fast and simple, we utilized an open-source library to avoid introducing any costs.

In fact, during our initial discussions, we clearly decided not to add any expenses and to keep everything open source and practical. Thanks to Hugging Face's phenomenal documentation for getting us started with embeddings! We settled on using SBERT (Sentence transformers). Again, it was open source, so our bill remained a beautiful $0.00.

With the plethora of LLMs available, our choice went to Gemini, thanks to its generous rate limits – enough for showcasing a decent MVP without breaking the bank.

---

## Chapter 6: The Prototype Takes Shape

After 2-3 weeks of stitching things together and building a POC with a decent UI (thanks to Streamlit for its phenomenal speed in helping us design an impressive interface), I showcased our progress to the team about a week before the hackathon was set to start. The results looked promising!

With the hackathon approaching quickly, we had to prioritize: should we optimize the backend LLM synthesis part or focus on strategizing how to showcase our work during the pitch? We decided to focus on integrating our solution seamlessly into the CNA news product so that the judges could easily connect with it. We finalized this plan on Friday evening, March 21st (with the hackathon starting on Monday, March 24th).

The weekend flew by in a blur. Part of me wished Monday would come later since it was judgment week, but another part was excited to show what we'd built.

---

## Chapter 7: Hackathon Kickoff

Monday kicked off with our design thinking workshop about understanding how to identify a problem statement, ideate, create a pitch, and prototype an idea. It was actually an engaging experience – they had us pick a random word and object, then gave us 5 minutes to think of something that could help society.

Our word was "Invisibility" and the object was a box with a pair of sunglasses. Our team quickly came up with an idea to create glasses for visually impaired people, using AI, lidar sensors, and bone conduction to help them see. We called it VisionX. It was an interesting and instantly creative pitch. There were fascinating ideas from other teams too – it was great to see so much creativity in such a short timeframe.

The day was all about going back to basics – A4 sheets, markers, pens, highlighters, and sticky notes. Our real plan? Play it cool. Not in a sneaky way - just keep our search idea under wraps, mock up a problem statement, and ideate like we meant it. We didn’t want to spill the beans before our CNA prototype was ready. Smart, right?

---

## Chapter 8: Getting Our Hands Dirty

After a power-packed Monday, Tuesday was technically the first day to get our hands dirty. The usual morning routine: up at 6, get ready, take the MRT while checking ChatGPT, and then start coding. Vikas and Saurabh had made great progress designing a seamless UI for the search experience on CNA. By the end of Tuesday, we felt confident about our progress.

As the clock kept ticking, we started refining the UI and creating a separate page for the reimagined search experience. That's when we thought – why not integrate it directly into the existing search page? Saurabh began researching how to set up a local mock of the CNA site so we could insert our search UI. After an hour of hearing the jet engine sound from his MacBook (so much CPU load from setting up all those modules), we aborted the takeoff and decided to tackle it with fresh minds on Wednesday.

---

## Chapter 9: The Presentation Prep

Wednesday arrived, and my Tuesday night dreams had shifted from FAISS indexes and ranking algorithms to designs, Figma, and PowerPoint. We needed to prepare our pitch deck and rehearse the demo. Vikas and Saurabh were fully focused on finding a workaround for showcasing the UI, while I, being typically reluctant to stitch together PowerPoint slides, was searching for shortcuts. And then it hit me – Gamma was the answer!

I dumped the idea, architecture, design, and details onto a page and fed it into Claude to generate slide content. These prompts went to Gamma for slide generation. Gamma is simply elegant – the quality of the slides was fantastic, though it would have been great to have animation capabilities.

While I was in the midst of deck preparation, Vikas had a breakthrough with injecting the search UI into CNA's production domain. He discovered some clever workarounds that functioned beautifully. By 5 PM, our prototype was ready for the demo, as was the first draft of our deck. Our brains were experiencing a severe processing crisis, so we hit the sleep button on our laptops and called it a day.

---

## Chapter 10: Judgment Day

Thursday, March 27th - Hackathon Day. Up at 5:30 (a miracle I don’t repeat), I used my 45-minute commute to feed ChatGPT my slides and get a pitch script. By the time I had my ID card on and entered the campus, my script was ready. I blocked a meeting room and started pre-reading and preparing the tone of my pitch – figuring out what to say and how to say it.

Saurabh joined me, and we practiced our pitch together. Vikas arrived with his polished demo, and we did several run-throughs to fit everything into our allotted 7 minutes. We noticed we had excellent synchronization among us: Vikas handling the demo, Saurabh and I on the meeting room stage. And then, like true software engineers thinking about redundancy and high availability, we decided to have backup plans for our deck and demo as well. We replicated everything on all three of our laptops – better safe than sorry!

It was almost 10:45 AM by then, and we headed to the pitch arena (the same place where I had done my tech jam a couple of months earlier – the familiarity was somewhat comforting). That's when we hit a snag: Vikas's laptop wouldn't connect to the screen. Thankfully, we had our redundancy plan! We tried with my laptop, and it worked. 

A chit-pick decided the pitch order, and guess what? We were first. My stomach did flips, but I was secretly glad - wrap it up early, then chill. I was in the middle of rapid mental rehearsals, trying to memorize my hook and transition lines. And then, it was our turn.

---

## Chapter 11: The Pitch

I headed straight onto the stage – had a quick moment where my mind went blank, but I managed to recover quickly. In no time, I launched into our story, with Saurabh and Vikas handling the demo excellently. We asked some really interesting and varied questions to demonstrate "Ask CNA," our intuitive, context-aware search experience that we had built into CNA:

- "What are some latest developments in renewable energy and climate change?"
- "Tell me more about Microsoft's latest breakthrough in Quantum Computing."
- "Tell me about the largest human gathering Mahakumbh recently happened in India. What is its significance?"
- "Who will win Singapore General Elections 2025?"

That last one got laughs - AI stayed neutral, saying it can’t predict but dished out how parties were prepping. The demo was well-received. Then, the tech bit: "What’s behind Ask CNA?" We explained: "When you ask a question, Ask CNA doesn't just look for keywords. It goes deeper." We explained how Ask CNA uses semantic embeddings to break down the meaning of words, not just matching them literally. Then, it searches through the vector database of CNA content (scraped in real-time) to pull out the most relevant articles. The system ranks these articles based on semantic relevance and similarity. From there, it processes this information through Large Language Models, ensuring that what users get is not just factual but trusted, insightful, and comprehensive.

And we pulled it off! Thanks to Vikas and Saurabh for the incredible synchronization we had.

---

## Chapter 12: The Judges' Response

Judges loved it. Hai Zhou and Anil had sharp feedback - guardrails for hallucinations (one bad screenshot could tank us), and why just news, not entertainment like podcasts or OTT? Prashant pushed on next steps - metrics, agentic capabilities? Solid questions, big props - we felt good.

The other pitches soon began, and some were really impressive – especially Jing Jing's, with a slick presentation likely made in Figma, featuring great design elements and elegant animations, pitching a news app for kids.

Lunch was classic Singaporean:  boiled vegetables, bee hoon, vegetarian fried rice, spring rolls,  curry puffs. We still had three teams pending for their pitches after lunch. We had some discussions with Nachi (CNA's product manager), who was indeed happy as most of his work had apparently been done already! We discussed practicalities in terms of cost – tokens the LLM would use for embeddings, synthesizing user queries, etc., as they had envisioned during their roadmap planning.

---

## Chapter 13: The Announcement

Soon, the final pitches wrapped up, and the moment everyone had been eagerly awaiting arrived. The first award, Crowd Favorite, was handed to Jing Jing’s team for their clever News for Kids app - a well-deserved nod to their charm and creativity.

Next came the 2nd Runner-Up: News Mate, crafted by Raghu and his crew. Their "Hey CNA" assistant, designed for busy folks on the move, brought a slick CNA companion to life - perfect for those who need news in a snap.

Then, the 1st Runner-Up was announced, and guess who stole the spotlight again? Jing Jing’s team! Two awards in their pocket.

Finally, it was time for the big reveal: the winner. Leah, our lively MC, turned to the crowd with a grin, teasing, “So, who do you think it is?” The room buzzed as chants rippled through - “Team 7!” “Ask CNA!” - and my heart skipped a beat. That was us.

And then it hit: we’d won the first Digital Hackathon at Mediacorp! Team Nio! Cheers! After countless hours of brainstorming, ideating, researching, coding, building, and pitching, we’d pulled it off. What a moment to experience! Hard work pays off, they say, and right then, I felt every ounce of that truth sink in.

We went up on stage for the formal ceremony, and Anil shared some kind words:

"When we looked at this, I think we looked at 2 key factors: Is this relevant? Is this practical? I think it scored pretty high. And, The prototype helped. It was great, I've been looking at different kind of questions that we asked. It really demonstrated that we're as close to production as possible. This is not going to take too long, and you guys have already done it. And, I think to me a true test of a hackathon is how close are we to actually ship. So, great work - you've done half of our work already (chuckling)"

---

## **Epilogue**

At the heart of it, hackathons aren’t about the prizes - they’re about the challenge, the learning, and most importantly, the connections forged along the way. The late-night debugging, endless Slack messages, the rush for a working prototype, prepping the pitch - these are the moments that truly matter.

Hackathons remind us that the best ideas come from diverse minds collaborating towards a shared vision - and that’s the real win.🏆 🚀
