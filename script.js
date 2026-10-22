(() => {
  const openButton = document.getElementById("openInvitation");
  const replayButton = document.getElementById("replayInvitation");
  const invitation = document.getElementById("invitation");

  function openInvitation() {
    document.body.classList.add("opened");
    invitation.setAttribute("aria-hidden", "false");
    openButton.setAttribute("aria-expanded", "true");
    window.setTimeout(() => {
      invitation.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 650);
  }

  function replayInvitation() {
    document.body.classList.remove("opened");
    invitation.setAttribute("aria-hidden", "true");
    openButton.setAttribute("aria-expanded", "false");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  openButton.addEventListener("click", openInvitation);
  replayButton.addEventListener("click", replayInvitation);
})();
