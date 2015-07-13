---
page_title: How to Train an Algorithm
client: Content Analyst
project: Definer
description: How to Train an Algorithm
keywords:
---

<div class="case-story__hero">
  <img src="/assets/placeholder-hero.svg" data-src="assets/hero.png" alt="cover image" />
</div>

Content Analyst builds machine-learning software that automatically categorizes documents into conceptual topics defined by the user.

They contacted Viget to help envision and build a tool that would allow end users—patent examiners and intelligence analysts, for example—to train the software without the need for an information retrieval expert.

On this project, I led the product vision, design, and testing.
---

<h2>Key Responsibilities</h2>

<div class="main-content__2-col">
  <ul>
    <li>Product Design</li>
    <li>Information Architecture</li>
    <li>Interaction Design</li>
    <li>Prototyping</li>
    <li>Usability Testing</li>
  </ul>
</div>

---

## Design

**Highlight-to-Teach**

We explored different ways to teach Definer what was important. The metaphor of "highlighting" seemed very learnable.

<figure>
  <figcaption>Early sketch of the highlight-to-teach interface</figcaption>
  <img src="assets/sketch.png" alt="early sketch of the user interface" />
</figure>

**An interface that teaches**

A modal orientation introduced new terms and concepts that would be used throughout the application.
This ran when the application was launched until the user dismissed it.

<figure class="full-bleed">
  <figcaption>Modal walkthrough states.</figcaption>
  <img src="/assets/placeholder-2000.svg" data-src="assets/modal-walkthrough.png" alt="Modal walkthrough." />
</figure>

**Guiding the user**

Some steps are essential to execute in a specific order. Here, I used sequential tooltips to walk the user through this experience.

Though similar to a wizard, this offers one additional benefit: the UI can be explained during the setup process.

**Just-in-time tips**

On document detail pages, it’s important that users highlight text to teach the system.
If we detect the user has not highlighted any content, subtle prompts instruct the user to do so.

<figure>
  <figcaption>Tip color is intentionally passive and peaceful.</figcaption>
  <img src="/assets/placeholder-800.svg" data-src="assets/contextual-tips.png" alt="Contextual tips." />
</figure>
