---
layout: post
title: "The distance between a demo and a system"
date: 2026-08-09
summary: "AI demos reward possibility. Production systems are judged by everything that happens after possibility."
tags: [ai engineering, software]
---

An AI demo answers a generous question: *can this work?* A production system has to answer several less generous ones.

What happens when retrieval returns nothing? Which claims came from trusted data, and which came from the model? Can we trace an answer back to the request that produced it? Does the fallback fail quietly, honestly, and usefully?

The model is important, but it is rarely the whole system. The harder engineering lives in the boundaries around it: input contracts, retrieval, permissions, observability, evaluation, and deterministic checks for the facts that must not drift.

My preferred approach is to separate the layers early:

1. Calculate facts in code when they can be calculated.
2. Give the model compact, trusted context.
3. Validate the output against what the application is allowed to claim.
4. Keep a useful fallback that does not depend on generation succeeding.

This makes the architecture less magical. That is a feature. Reliability often begins when we can describe exactly where the magic ends.

