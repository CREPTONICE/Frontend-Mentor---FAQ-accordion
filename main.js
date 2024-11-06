document.addEventListener("DOMContentLoaded", () => {
  // Initialize all answers and icons
  document.querySelectorAll(".answers").forEach((answer) => {
    answer.style.display = "none"; // Hide all answers initially
  });
  document.querySelectorAll(".questions button .icon-open").forEach((svg) => {
    svg.style.display = "none"; // Hide all open icons initially
  });
  document.querySelectorAll(".questions button .icon-closed").forEach((svg) => {
    svg.style.display = "block"; // Show all closed icons initially
  });

  document.querySelectorAll(".questions button").forEach((button) => {
    button.addEventListener("click", () => {
      // Find the corresponding answer and SVG icons
      const container = button.closest(".container");
      const answer = container.querySelector(".answers");
      const iconOpen = button.querySelector(".icon-open");
      const iconClosed = button.querySelector(".icon-closed");

      // Toggle the visibility of the selected answer and icons
      if (answer.style.display === "block") {
        // If the answer is already open, close it and return to the closed icon
        answer.style.display = "none"; // Close the answer
        iconOpen.style.display = "none"; // Hide the open icon
        iconClosed.style.display = "block"; // Show the closed icon
      } else {
        // Close all answers and reset all SVG icons
        document.querySelectorAll(".answers").forEach((answer) => {
          answer.style.display = "none";
        });
        document
          .querySelectorAll(".questions button .icon-open")
          .forEach((svg) => {
            svg.style.display = "none"; // Hide all open icons
          });
        document
          .querySelectorAll(".questions button .icon-closed")
          .forEach((svg) => {
            svg.style.display = "block"; // Show all closed icons
          });

        // Open the current answer and display the open icon
        answer.style.display = "block"; // Open the answer
        iconOpen.style.display = "block"; // Show the open icon
        iconClosed.style.display = "none"; // Hide the closed icon
      }
    });
  });
});

document.querySelectorAll(".questions button").forEach((button) => {
  button.addEventListener("click", () => {
    // Close all answers and reset all SVG icons
    document.querySelectorAll(".answers").forEach((answer) => {
      answer.classList.remove("open"); // Close all answers
    });
    document.querySelectorAll(".questions button .icon-open").forEach((svg) => {
      svg.classList.remove("show"); // Hide all open icons
    });
    document
      .querySelectorAll(".questions button .icon-closed")
      .forEach((svg) => {
        svg.classList.add("show"); // Show all closed icons
      });

    // Find the corresponding answer and SVG icons for the clicked question
    const container = button.closest(".container");
    const answer = container.querySelector(".answers");
    const iconOpen = button.querySelector(".icon-open");
    const iconClosed = button.querySelector(".icon-closed");

    // Check if the answer is already open
    if (answer.classList.contains("open")) {
      // Close the answer
      answer.classList.remove("open");
      iconOpen.classList.remove("show"); // Hide the open icon
      iconClosed.classList.add("show"); // Show the closed icon
    } else {
      // Open the answer
      answer.classList.add("open");
      iconOpen.classList.add("show"); // Show the open icon
      iconClosed.classList.remove("show"); // Hide the closed icon
    }
  });
});
