function contactUs() {
    alert("Thank you for reaching out! Please call us or visit during our working hours.");
}
let currentIndex = 0;

function moveSlide(direction) {
  const slider = document.querySelector('.slider');
  const totalSlides = document.querySelectorAll('.slide').length;

  currentIndex += direction;

  // Loop around
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto slide every 3 seconds
setInterval(() => {
  moveSlide(1);
}, 3000);


let isOriginal = true;

function toggleText() {
    const reviewText = document.getElementById('review-text');
    const reviewAuthor = document.getElementById('review-author');
    const button = document.getElementById('toggle-button');

    if (isOriginal) {
        reviewText.textContent = "This farm produces the freshest vegetables I’ve ever tasted. It’s a game changer!";
        reviewAuthor.textContent = "- JOHN SMITH";
        button.textContent = "Back to Original";
    } else {
        reviewText.textContent = "I believe it’s the organic foods and quality of the natural ingredients that help me feel this great.";
        reviewAuthor.textContent = "- KATE JONSON";
        button.textContent = "Change Review";
    }

    isOriginal = !isOriginal;
}
// const slider = document.querySelector('.logo-slider');

// // Pause the animation on mouseover
// slider.addEventListener('mouseover', () => {
//     slider.style.animationPlayState = 'paused';
// });

// // Resume the animation on mouseleave
// slider.addEventListener('mouseleave', () => {
//     slider.style.animationPlayState = 'running';
// });
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.unique-slider-track');
    const images = Array.from(track.children);
    const imageWidth = images[0].getBoundingClientRect().width;
    let index = 0;

    function moveSlider() {
        index++;
        if (index >= images.length) {
            index = 0;
            track.style.transition = 'none';
            track.style.transform = `translateX(0)`;
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    track.style.transition = 'transform 0.3s ease';
                    track.style.transform = `translateX(${-imageWidth * index}px)`;
                });
            });
        } else {
            track.style.transform = `translateX(${-imageWidth * index}px)`;
        }
    }

    setInterval(moveSlider, 3000); // Adjust the interval as needed
});
// ------------------------------------
 

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitButton').addEventListener('click', submitForm);
  
    function submitForm() {
      // Collect form data
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value || null;
      const purpose = document.getElementById("purpose").value || "General";
      const message = document.getElementById("message").value;
  
      // Validate form fields (You can add more validation if needed)
      if (!name || !email || !message) {
          alert("Please fill in all required fields.");
          return;
      }
  
      // Construct the data object
      const data = {
        name: name,
        email: email,
        mobile: phone,
        message: message,
        purpose: purpose
      };
  
      // API Request
      fetch("http://localhost:5000/api/inquiries", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
      })
      .then((response) => {
          if (response.ok) {
              return response.json();
          } else {
              throw new Error("Failed to submit inquiry");
          }
      })
      .then((result) => {
          alert("Inquiry submitted successfully!");
          console.log(result);
          // Optionally, reset the form after submission
          document.getElementById("contactForm").reset();
      })
      .catch((error) => {
          console.error("Error:", error);
          alert("Error submitting inquiry");
      });
    }
  });
  