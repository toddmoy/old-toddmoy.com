---
page_title: Simplifying Checkout
client: GrubMarket
project: Checkout
tagline: Simplifying Checkout
description: How I streamlined checkout for an online farmers market retailer.
keywords:
---

---

GrubMarket is to local produce what Etsy is to handmade crafts. The startup enables customers to shop for groceries from local farmers and artisans.

After hearing feedback that their checkout was cumbersome and unintuitive, they asked Viget to streamline this experience.

As the UX lead, I simplified the checkout experience by rethinking the page architecture and reducing the amount of decisions and input needed.

---

<h2>Responsibilities</h2>

<div class="case-story__content__2-col">
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

## Highlights

###Cart Organization

Originally, items in a user's shopping cart were grouped by vendor. By drawing attention to information that was not critical, this decision made it hard to tell _when_ and _how_ your groceries would arrive. My solution was to reorganize the content around shipments.

<figure>
  <figcaption>Wireframe of the checkout screen.</figcaption>
  <img src="/work/grubmarket-checkout/assets/checkout.png" />
</figure>

<figure>
  <figcaption>Wireframe of the change delivery method dropdown menu.</figcaption>
  <img src="/work/grubmarket-checkout/assets/checkout-dropdown.png" alt="wireframe of the change delivery method dropdown menu" />
</figure>

<figure>
  <figcaption>###</figcaption>
  <img src="/work/grubmarket-checkout/assets/checkout-dropdown-states.png" alt="" />
</figure>


---

### Smart Defaults

Grubmarket offers free delivery within the areas it serves. Users appreciate this option, particularly over more expensive U.S. mail or less-convenient self-pickup. Making this the default choice was a no-brainer.

More challenging was the shipping date. Vendors choose which days an item can be shipped. This creates a unique problem: sometimes the items in a user's cart _cannot_ be shipped together on the same day.

Looking at past orders and speaking with stakeholders, I found that users optimize for the fewest number of deliveries that can occur as soon as possible. So, the default experience matches this insight with items automatically grouped into shipments that will arrive soonest:

* **Shipment 1 : Monday**
  * Item A
  * Item B
* **Shipment 2 : Tuesday**
  * Item C

Users can adjust shipments as they see fit.

---

### Consolidate Steps

As I simplified the content organization, it struck me that the screens could be combined into one without substantially increasing the mental burden on the user. And after the user has ordered once, personal details and payment info can be prepopulated on subsequent visits.

---

## Additional Artifacts

### Availability Matrix

|           | Su  | Mo  | Tu  | We  | Th  | Fr  | Sa  |
|---------- |---- |---- |---- |---- |---- |---- |---- |
| Grapes    |     | ✔   | ✔   | ✔   | ✔   | ✔   |     |
| Kimchi    |     | ✔   |     | ✔   |     | ✔   |     |
| Bread     |     |     | ✔   |     | ✔   |     | ✔   |
| ...       | ... | ... | ... | ... | ... | ... | ... |

Vendors can choose delivery days for each item. These days don't always line up neatly in a user's order and, as a result, deliveries may be split across multiple days. To see how this business rule affected users, I needed to quickly see what scenarios were possible.

An availability table, like the example above, gave me the tool needed to assemble and reuse these scenarios. Choosing a random set of items from this table let me create hypothetical shopping carts, thereby allowing me to stress-test my design.

---

## Credits

| ------ | ----- |
| <strong>Agency</strong> | Viget |
| <strong>Visual Design</strong> | Tom Osborne |
| <strong>Project Management</strong> | Amanda Ruehlen |
