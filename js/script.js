const clickableSkills = () => {
  const skills = document.querySelectorAll(".skill-card");
  const skillInfos = document.querySelectorAll(".skill-info");
  console.log("clickableSkills started")

  skills.forEach((skill) => {
    skill.addEventListener("click", (event) => {
      // event.preventDefault();

      const info_id = `${event.currentTarget.getAttribute("id").slice(0, -5)}info`;
      const info = document.getElementById(info_id);

      const active_skill = document.querySelector(".skill-card.active");
      const active_info = document.querySelector(".skill-info.active");

      active_skill.classList.remove("active");
      active_info.classList.remove("active");
      event.currentTarget.classList.add("active");
      info.classList.add("active");
    });
  });
}

window.addEventListener('load', (event) => {
  console.log("onload")
  clickableSkills();
});
