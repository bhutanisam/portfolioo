
// ==================================
// 1. MOBILE NAVIGATION
// ==================================

const menuBtn = document.querySelector("#menuBtn");
const navLinks = document.querySelector("#navLinks");

menuBtn.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");

  menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close menu after clicking a navigation link

navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});


// ==================================
// 2. EXPANDABLE PHOTO GALLERY
// ==================================

const photos = document.querySelectorAll(".photo");
const modal = document.querySelector("#photoModal");
const modalImage = document.querySelector("#modalImage");
const modalCaption = document.querySelector("#modalCaption");
const closeBtn = document.querySelector("#closeModal");

// Add a click event to every photo

photos.forEach(function (photo) {

  photo.addEventListener("click", function () {

    // Find the image inside the clicked button
    const image = photo.querySelector("img");

    // Clear the previous modal content
    modalImage.replaceChildren();

    if (image) {
      // If a real photograph exists, display it
      const enlargedImage = image.cloneNode(true);
      modalImage.appendChild(enlargedImage);
    } else {
      // Otherwise, display the placeholder
      modalImage.textContent = photo.textContent.trim();
    }

    // Read the caption from the HTML data attribute
    modalCaption.textContent = photo.dataset.caption;

    // Open the popup
    modal.showModal();

  });

});

// Close when X is clicked

closeBtn.addEventListener("click", function () {
  modal.close();
});

// Close when the dark backdrop is clicked

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.close();
  }
});


// ==================================
// 3. RANDOM CREATIVE PROMPTS
// ==================================

const ideas = [
  "I love the color green. Not the vibrant kind but the sage types.",
  "My favorite flowers are Sunflowers and peonies.",
  "I have 7 dogs living in my house right now. I love animals, and they love me too!",
  "I am a very Punjabi Kudi. So if i ever mix languages, try to understand my gallan",
  "I am fluent in Hindi English Punjabi and French. yes its flex but I feel very underskilled.",
  "I am a beach person. I love the water more than anything, and my wavy hair in the salty water.",
  "I value human connections over anything. Sure money is the most important but human connections get you the comfort!",
  "I am a disney kid since birth, grew up watching all the movies on CD (i feel old) My favorite is Descendants!"
];

const ideaBtn = document.querySelector("#ideaBtn");
const ideaOutput = document.querySelector("#ideaOutput");

ideaBtn.addEventListener("click", function () {

  // Generate a random index
  const randomIndex = Math.floor(Math.random() * ideas.length);

  // Display the selected idea
  ideaOutput.textContent = ideas[randomIndex];

});
