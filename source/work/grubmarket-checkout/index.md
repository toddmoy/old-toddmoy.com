---
page_title: Simplifying & Streamlining
client: GrubMarket
project: Checkout
description: How I streamlined checkout for an online farmers market retailer.
keywords:
---

<div class="case-story__hero">
  <img src="/assets/placeholder-hero.svg" data-src="assets/hero.png" alt="cover image" />
</div>

GrubMarket is to local produce what Etsy is to handmade crafts. This online farmers market enables customers to shop for groceries, which it then delivers for free.

After hearing feedback that their checkout was cumbersome and unintuitive, they asked Viget to streamline this experience.

As the UX lead, I simplified the checkout experience by rethinking the page architecture and reducing the amount of decisions and input needed.

---

<h2>Key Responsibilities</h2>

<div class="main-content__2-col">
  <ul>
    <li>Experience Audit</li>
    <li>Technical Research</li>
    <li>Competitive Research</li>
    <li>Interface Design</li>
    <li>Prototyping</li>
    <li>Usability Testing</li>
  </ul>
</div>

---

## Research

Starting off the project, I conducted an experience audit to understand the checkout experience. Though we didn't have resources for usability testing, the site's consumer-focus allowed me to run "hallway tests" using coworkers and friends.

This research confirmed that there were problems with the way information was organized and presented. Moreover, I found that the system was forcing more decisions than necessary, leading to fatigue.

---

## Design

My first step was to understand where I could reduce complexity. The current experience was divided into four screens: Billing Address, Shipping Information, Order review, and Stripe Payment Modal.

**Shipping Information Screen**

The second screen---shipping information---was the biggest offender. Items in the user's cart were grouped by vendor, then by shipping method.

<figure>
  <figcaption>Prior shipping section.</figcaption>
  <img src="/assets/placeholder-800.svg" data-src="assets/prior-shipping.png" alt="prior shipping screen" />
</figure>

During checkout, however, users care less about _who is selling them something_ than they do about _when they're going to get it_ and _how much will it cost_.

Removing vendor as the first "group by" criteria reduced duplicative information and dramatically shortened the page. It also drew attention to what mattered.

Next target: shipping options. For each grouping on the page, the user was presented with four choices:

1. Grubmarket Delivery (free, but you have to choose a delivery date)
1. US Mail (variable price)
1. Courier (variable price)
1. Self-pickup (free, but inconvenient)

Based on order analytics, people nearly always chose Grubmarket Delivery. In addition, Grubmarket wanted to drive more users to choose that option.

So, the new design preselects GrubMarket Delivery and deemphasizes the other options. It also preselects the earliest available delivery date. By using smart defaults, users who had to make two decisions before now need to make none.

<figure>
  <figcaption>Revised shipping section.</figcaption>
  <img src="/assets/placeholder-800.svg" data-src="assets/new-shipping.png" alt="new shipping screen" />
</figure>

<figure class="full-bleed">
  <figcaption>Users can still change their delivery date and method using a custom dropdown.</figcaption>
  <img src="/assets/placeholder-2000.svg" data-src="assets/checkout-dropdown-states.png" alt="checkout dropdown states" />
</figure>

**Order Review Screen**

With the shipping screen shortened, I turned my attention to the order review screen. Curiously, there were a few billing-oriented fields on this screen: gift card and coupon code, in particular. Plus, once you clicked "Submit your Order", you were presented with the Stripe modal.

The other screen maintained a lot of billing-oriented information too. Could these be combined?

It turns out yes, they can. What's more, the revised product listing performs the same job as the order review listing. By merging these screens together, I was down to two screens.

Applying progressive disclosure to less commonly visited fields--delivery instructions, for example--allowed me to further reduce the visual weight.

**Billing Information Screen**

The next logical step, you might have guessed, was to merge the billing information with the other screen. It was a natural fit.

---

## Result

The new design consolidates four screens into one, with no loss of functionality. Returning users can check out with a single click.

<figure>
  <figcaption>Prior design (left) and new design (right)</figcaption>
  <img src="/assets/placeholder-800.svg" data-src="assets/consolidation.png" alt="Comparison of old and new checkout designs" />
</figure>

<figure>
  <figcaption>Wireframe of the checkout screen. <br />Personal details and billing information are pre-populated after the first order.</figcaption>
  <img src="/assets/placeholder-800.svg" data-src="/work/grubmarket-checkout/assets/checkout.png" />
</figure>

---

## Takeaways

Three things I learned while doing this project:

1. Make smart choices on behalf of your users. Correspondingly, enable them to interact _less_.
1. Ruthlessly question prior decisions. In this case, the strained architecture was the result of many pivots and changes---not intent or malice.
1. Use whatever means possible to get insights from users. Simple hallway tests are a great first step.
