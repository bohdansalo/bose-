document.querySelectorAll(".question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isVisible = answer.style.display === "block";
    document
      .querySelectorAll(".answer")
      .forEach((a) => (a.style.display = "none")); // Hide other answers
    answer.style.display = isVisible ? "none" : "block"; // Toggle current answer
  });
});
