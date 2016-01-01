---
page_title: Next Gen Ad Targeting
client: Reveal Mobile Insights
project: App Design
description:
keywords:
---

Reveal Mobile Insights allows app publishers to monetize their apps through targeted ads. After establishing a proof-of-concept MVP, they sought out Viget to improve the user experience, including designing additional features so that they could go to market.

I led the UX design for this engagement.

---

## Key Responsibilities

<div class="main-content__2-col">
  <ul>
    <li>Interface Design</li>
    <li>Prototyping</li>
  </ul>
</div>

---

## Screen Designs

There were a lot of ideas for what the new UI could do, so it was important to figure out what was really important. After a kickoff brainstorming session with the client team, I took the notes back and began to sketch.

At first, it wasn't clear what the direction should be, so I wanted a medium that let me iterate fast. Annotated rough sketches delivered without much polish did the trick.

We started with the Dashboard because it was the least defined.

<figure>
  <figcaption>Early sketch of the dashboard.</figcaption>
  <img src="/assets/placeholder-800.svg" data-src="assets/sketch.png" alt="Sketch" />
</figure>

That worked well and, after a bit of polish, I moved directly into wireframes and Invision prototypes.

The Dashboard is the homepage of the application. It lets publishers quickly see how many impressions their apps are delivering either now or historically. In addition, they can see how many impressions they're delivering to certain types of users.

<figure>
  <figcaption>Dashboard view. </figcaption>
  <img src="/assets/placeholder-800.svg" data-src="assets/dashboard.png" alt="Search" />
</figure>

They can also quickly compare any period to a prior date range. We kept this experience simple: once the "compare" checkbox is enabled, a dropdown menu with _previous period_ and _previous year_ options is displayed

The in-page graphs needed to adapt as well. Given that this mode is comparison-focused, the charts focus on the +/- change between periods.

<figure>
  <figcaption>Dashboard in a comparison state..</figcaption>
  <img src="/assets/placeholder-800.svg" data-src="assets/dashboard-comparison.png" alt="Dashboard with comparison range" />
</figure>

The most important part of the app is the Audience Builder.

Publishers can sell ad inventory to very specific types of users--which we call Audiences. Audiences are built by choosing one or more attributes that define them, such as income, gender, location, or political affiliation.

<figure>
  <figcaption>Audience builder.</figcaption>
  <img src="/assets/placeholder-800.svg" data-src="assets/audience-edit.png" alt="Audience builder" />
</figure>

Publishers are focused on hitting a certain number of impressions. At the same time, they want to serve impressions to the right people. So it's a push-and-pull between having enough users and having ideal users.

The UI improves this experience in two ways. First, whenever any item attribute is selected or deselected, the Estimated Impressions counter at the top of the page will update in real-time. This sticks in place as they scroll, ensuring it's always visible.  

Second, when hovering over any attribute, the result of adding the attribute is shown. This allows them to see how much smaller the impression count will be, if they were to add the attribute.

Both features make the process of _sculpting the audience_ much smoother.

Users can also string together groups of attributes. Simple boolean grouping is allowed.

<figure>
  <figcaption>Audience grouping.</figcaption>
  <img src="/assets/placeholder-800.svg" data-src="assets/audience-grouping-1.png" alt="Audience grouping" />
</figure>

Only one level of grouping is allowed. To enable this in the UI, users can only choose one comparison operator--`and` or `or`-- but not both. Changing the radio button at the top changes the ones below.

<figure>
  <figcaption>Boolean comparison controls.</figcaption>
  <img src="/assets/placeholder-800.svg" data-src="assets/audience-grouping-2.png" alt="Boolean comparison controls" />
</figure>

---

## Credits

<dl>
  <dt>Agency</dt> <dd><a href="//viget.com">Viget</a></dd>
  <dt>UX Design</dt> <dd>Todd Moy</dd>
  <dt>Visual Design</dt> <dd><a href="//peytoncrump.com/">Peyton Crump</a></dd>
  <dt>Front-end Development</dt> <dd>Nate Hunzaker, Solomon Hawk</dd>
  <dt>Project Management</dt> <dd><a href="//beneckerson.com">Ben Eckerson</a></dd>
</dl>
