---
page_title: Digitizing a Paper Process
client: Hobsons
project: App Review
description: Modernizing the College Application Review Process
keywords:
---

<div class="case-story__hero">
  <img src="/assets/placeholder-hero.svg" data-src="assets/hero.png" alt="cover image" />
</div>

Hobsons provides university admissions departments the tools to accept and manage applications submitted by prospective students.

Historically, admissions officers received applications, then distributed printouts to faculty reviewers. Reviewers recorded their evaluations and returned the applications.

Besides being paper intensive, the process was messy. Admissions officers had no insight into progress and had to hunt down reviewers, nag them, reassign applicants, and so on. Once they got the information back, they had the arduous task of manually entering the evaluations.

Clearly there had to be a better way. That's when Hobsons contacted Viget to envision and build AppReview.

On this project, I led the product vision, design, and testing.

---

<h2>Key Responsibilities</h2>

<div class="main-content__2-col">
  <ul>
    <li>Product Design</li>
    <li>User Research</li>
    <li>Information Architecture</li>
    <li>Interaction Design</li>
    <li>Prototyping</li>
    <li>Usability Testing</li>
  </ul>
</div>

---

## Research

Starting out, I needed to understand how universities managed their review process. So, I interviewed admissions officers and faculty to understand their customs. During these sessions, I observed them conduct mock reviews. This helped me understand the strategies they used for dealing with a large, complex task.

<figure class="full-bleed">
  <figcaption>I used a mental model to organize and present my findings. Later, we used this to plan features to support their needs.</figcaption>
  <img src="/assets/placeholder-2000.svg" data-src="assets/mental-model.png" alt="Mental Model Diagram" />
</figure>

Each school had a unique review process. To ensure AppReview supported them, I worked with admissions officers to distill the common activities and roles. Later, this helped us prioritize features that were universally needed---and not waste resources building for edge cases.

<figure>
  <figcaption>I used a sequence diagram to show how people collaborated on a review.</figcaption>
  <img src="/assets/placeholder-800.svg" data-src="assets/sequence-diagram.png" alt="Sequence diagram" />
</figure>

This research culminated in a project vision document, which recapped the research, described how AppReview could work, and offered prioritization suggestions for features.

<figure>
  <figcaption>A concept model helped describe the core components the application needed to support.</figcaption>
  <img src="/assets/placeholder-800.svg" data-src="assets/concept-model.png" alt="Concept Model" />
</figure>

---

## Design

To kickoff the design phase, I brought the client team together to sketch out ideas. This exercise helped us develop a shared understanding of the product and its concepts. This worked well and I used the same approach throughout the project.

<figure>
  <figcaption>An early sketch of the inbox and the application views.</figcaption>
  <img src="/assets/placeholder-800.svg" data-src="assets/sketch.png" alt="sketch" />
</figure>

<figure>
  <figcaption>Because I was remote, I used a dedicated camera so that I could sketch live with the client.</figcaption>
  <img src="/assets/placeholder-800.svg" data-src="assets/remote-sketching.png" alt="todd with a webcam that's pointing at his sketch" />
</figure>

With a common vision in place, I turned my attention on identifying the flows and views that the application would need. This established scope and allowed us to accurately estimate effort.

<figure>
  <figcaption>Our functional sprints mapped to sections of the application.</figcaption>
  <img src="/assets/placeholder-800.svg" data-src="assets/sitemap.png" alt="sitemap" />
</figure>

Section by section, I wireframed the necessary views. Each week I held a work share, where I presented what had been completed. Critically, this was attended by their product, development, and QA teams. This kept everyone in the loop and helped us course-correct when needed. Outside of these, we had ad-hoc video conferences and Basecamp discussions.

Some notable screens from this process:

<figure>
  <figcaption>The inbox was the hub of the user experience.</figcaption>
  <img src="/assets/placeholder-800.svg" data-src="assets/wireframe-inbox.png" alt="Inbox wireframe" />
</figure>

<figure>
  <figcaption>The application detail was where reviewers could access an applicant's information and make their evaluation.</figcaption>
  <img src="/assets/placeholder-800.svg" data-src="assets/wireframe-application.png" alt="Application detail wireframe" />
</figure>

<figure>
  <figcaption>Admins assign faculty reviewers to applicants. <br />In reviews that occur sequentially, they can define the order of reviews.</figcaption>
  <img src="/assets/placeholder-800.svg" data-src="assets/wireframe-assign-reviewers.png" alt="Assign reviewers wireframe" />
</figure>

<figure>
  <figcaption>Admins can customize how the applicant's information appears, along with the questions they ask of reviewers.</figcaption>
  <img src="/assets/placeholder-800.svg" data-src="assets/wireframe-customize-review.png" alt="Customize the review wireframe" />
</figure>

<figure>
  <figcaption>Microinteractions&mdash;like the states for editing questions&mdash;were described in detail.</figcaption>
  <img src="/assets/placeholder-800.svg" data-src="assets/wireframe-microinteractions.png" alt="Wireframe of question editing states" />
</figure>

It's worth noting that I don't always annotate wireframes in this way. On more agile projects, frequent communication can substitute for this level of detail. But because this was a handoff project, I felt it necessary to capture and relay the information that wasn't immediately evident in the UI.

---

## Testing

About midway through the design phase, we had enough screens to test the core functionality of the app. I set up an online clickable prototype and ran moderated, task-based usability tests using WebEx. The client team participated as silent observers. After each test, we held a brief recap where we discussed our observations.

<figure>
  <figcaption>Trello allowed each of us to record observations into a shared space.<br />Together, we'd review them, assign severity, and define fixes.</figcaption>
  <img src="/assets/placeholder-800.svg" data-src="assets/trello.png" alt="Screenshot of a Trello card" />
</figure>

Based on the testing, we refined the interface and got to a solid first release. Our visual designer comped the screens and created a style guide; our Front-end Developer built the screens out. Hobsons took these assets and engineered the application.  

---

## Takeaways

Every project teaches me something and this one was no different. Three things this project taught me were:

1. Watch what people do. Features like _starring_, _foldering_, and _private notes_ were a direct response to seeing how people reviewed applications. No one asked for these features outright, but they appreciated them.
1. Plan frequent, recurring work shares. This helps gets people engaged, helps course-correct when necessary, and keeps project momentum high.
1. Get concrete. Sketching live with the client team allowed us to explore ideas quickly, with less room for misinterpretation.


---

## Credits

<dl>
  <dt>Agency</dt> <dd><a href="//viget.com">Viget</a></dd>
  <dt>UX Design</dt> <dd>Todd Moy</dd>
  <dt>Visual Design</dt> <dd><a href="//marksteinruck.com">Mark Steinruck</a></dd>
  <dt>Front-end Development</dt> <dd>Jeremy Frank</dd>
  <dt>Project Management</dt> <dd><a href="//kevinpowers.com">Kevin Powers</a></dd>
</dl>
