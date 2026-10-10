/* =====================================================================
   STUDENT PORTFOLIO INFORMATION — EDIT THIS FILE ONLY
   ---------------------------------------------------------------------
   Keep the words inside quotation marks. Do not delete commas or brackets.
   Put your own images in the assets folder using the filenames below.
   Keep index.html, style.css, script.js and student-guide.js unchanged.
   ===================================================================== */

window.PORTFOLIO_DATA = {
  // 1. YOUR NAME AND PROFESSION
  fullName: "Abdul Karim",
  shortName: "Karim",
  profession: "Video Editor", // e.g. Video Editor, Graphic Designer
  pageTitle: "Karim— Portfolio",
  availability: "Available for new projects",

  // 2. THE FIRST THING PEOPLE SEE
  headlineLine1: "Turning Ideas Into",
  headlineLine2: "Content That Gets Watched",
  introduction: "I turn raw footage into high-retention videos that look sharp, feel intentional, and keep your audience watching.",
  primaryButton: "View My Work ↗",
  secondaryButton: "Start a Project ↗",

  // 3. YOUR PROFILE PHOTO (replace the file but keep the same filename)
  profilePhoto: "assets/profile.jpg",

  // 4. YOUR EXPERIENCE — use honest numbers
  stats: [
    { value: "10+", labelLine1: "PROJECTS", labelLine2: "COMPLETED" },
    { value: "2+", labelLine1: "YEARS", labelLine2: "EXPERIENCE" },
    { value: "4+", labelLine1: "Software", labelLine2: "SKILLS" }
  ],

  // 5. ABOUT YOU
  aboutEyebrow: "A LITTLE BIT ABOUT ME",
  aboutHeading: "The Creative Behind the Work",
  aboutDescription: "Introduce yourself, describe your creative approach, and explain the kind of projects you enjoy working on.",

  // 6. YOUR SKILLS — add or remove items as needed
  skills: [
    "Adobe Premiere Pro",
    "Adobe After Effects",
    "Adobe Audition",
    "Motion Graphics"
  ],

  // 7. FEATURED VIDEO — use a YouTube video ID, not the whole URL
  // Example: for youtube.com/watch?v=AbCd1234, the ID is AbCd1234
  featuredVideoId: "BbwOD26x-74",
  showcaseEyebrow: "FEATURED PROJECT",
  showcaseHeadingLine1: "See the Work",
  showcaseHeadingLine2: "Feel the Difference",
  showcaseDescription: "Add one sentence about the featured project.",

  // 8. RECENT PROJECTS — keep the image filenames as written or update both
  // the filename here and the actual file in assets.
  projects: [
    { title: "Project One", category: "Video Editing", thumbnail: "assets/thumbnail1.jpg", videoId: "aNI2jv7lBPQ" },
    { title: "Project Two", category: "Short-form Video", thumbnail: "assets/thumbnail2.jpg", videoId: "CEJXqm2eiJ0" },
    { title: "Project Three", category: "Creative Project", thumbnail: "assets/thumbnail3.jpg", videoId: "YOUR_VIDEO_ID_3" },
    { title: "Project Four", category: "Motion Graphics", thumbnail: "assets/thumbnail4.jpg", videoId: "YOUR_VIDEO_ID_4" },
    { title: "Project Five", category: "Social Content", thumbnail: "assets/thumbnail5.jpg", videoId: "YOUR_VIDEO_ID_5" }
  ],

  // 9. LONG-FORM PROJECTS
  longFormProjects: [
    { title: "Long-form Project 01", category: "YouTube Video", thumbnail: "assets/videothumbnail1.jpg", videoId: "plN7JMbadRg" },
    { title: "Long-form Project 02", category: "YouTube Video", thumbnail: "assets/videothumbnail2.jpg", videoId: "YOUR_LONG_VIDEO_ID_2" },
    { title: "Long-form Project 03", category: "Storytelling Edit", thumbnail: "assets/videothumbnail3.jpg", videoId: "YOUR_LONG_VIDEO_ID_3" },
    { title: "Long-form Project 04", category: "Cinematic Edit", thumbnail: "assets/videothumbnail4.jpg", videoId: "YOUR_LONG_VIDEO_ID_4" }
  ],

  // 10. SERVICES — descriptions can be changed to suit your profession
  servicesHeadingLine1: "Creative Services",
  servicesHeadingLine2: "Made for Your Goals",
  servicesDescription: "Describe how your skills can help clients or collaborators.",
  services: [
    { title: "Video Editing", description: "Engaging edits shaped around story, timing, and audience." },
    { title: "Short-form Content", description: "Vertical videos made for Reels, Shorts, and social platforms." },
    { title: "Motion Graphics", description: "Animated titles, transitions, and visual elements." },
    { title: "Commercial Content", description: "Clear, polished videos for brands and products." },
    { title: "Creative Planning", description: "A thoughtful approach from idea to final delivery." },
    { title: "Social Media Content", description: "Content adapted to the platform and its audience." }
  ],

  // 11. CONTACT INFORMATION — replace every example with your own details
  contactHeadingLine1: "Let’s Create Something",
  contactHeadingLine2: "Great Together.",
  contactDescription: "Have a project in mind? Send me a message and tell me what you are planning.",
  email: "fardinars.cit.bd@gmail.com",
  phoneDisplay: "+880 1756949302",
  whatsappNumber: "8801756949302", // digits only, include country code
  socials: {
    facebook: "https://www.facebook.com/mohammad.fardin.al.rubaiyat",
    youtube: "https://youtube.com/@yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    instagram: "https://instagram.com/yourusername"
  }
};

/* APPLY THE INFORMATION ABOVE — students do not need to edit below this line. */
(function applyPortfolioData() {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;
  const one = (selector, root = document) => root.querySelector(selector);
  const all = (selector, root = document) => [...root.querySelectorAll(selector)];
  const setText = (selector, value, root = document) => {
    const element = one(selector, root);
    if (element && value !== undefined && value !== null) element.textContent = value;
  };
  const safe = (value) => String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  const videoIdFrom = value => {
    const raw = String(value || "").trim();
    if (!raw || raw.startsWith("YOUR_")) return "";
    const match = raw.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{6,})/) || raw.match(/^([\w-]{6,})$/);
    return match ? match[1] : "";
  };

  document.title = data.pageTitle || `${data.shortName || data.fullName} — Portfolio`;
  const meta = one('meta[name="description"]');
  if (meta) meta.content = `${data.fullName || "Student"} — ${data.profession || "Creative Portfolio"}`;
  setText(".logo", data.shortName || data.fullName);
  setText(".availability span:last-child", data.availability);
  const hero = one(".hero h1");
  if (hero) hero.innerHTML = `${safe(data.headlineLine1)}<br><span>${safe(data.headlineLine2)}</span>`;
  setText(".hero-description", data.introduction);
  setText(".btn-primary", data.primaryButton);
  setText(".btn-secondary", data.secondaryButton);
  const photo = one(".profile-image");
  if (photo) { photo.src = data.profilePhoto || "assets/profile.jpg"; photo.alt = `${data.fullName || "Student"} profile photo`; }
  setText(".editor-badge", data.profession);
  setText(".editor-name", data.fullName);

  all(".stat-card").forEach((card, index) => {
    const stat = (data.stats || [])[index];
    if (!stat) return;
    setText("strong", stat.value, card);
    const label = one("span", card);
    if (label) label.innerHTML = `${safe(stat.labelLine1)}<br>${safe(stat.labelLine2)}`;
  });

  setText(".about-card .eyebrow", data.aboutEyebrow);
  setText(".about-card h2", data.aboutHeading);
  setText(".about-card p", data.aboutDescription);
  const skillRow = one(".tag-row");
  if (skillRow) skillRow.innerHTML = (data.skills || []).map(skill => `<span>${safe(skill)}</span>`).join("");

  const showcaseHeading = one("#showcase .section-heading h2");
  if (showcaseHeading) showcaseHeading.innerHTML = `${safe(data.showcaseHeadingLine1)}<br><span>${safe(data.showcaseHeadingLine2)}</span>`;
  setText("#showcase .section-heading .eyebrow", data.showcaseEyebrow);
  setText("#showcase .section-heading p", data.showcaseDescription);
  const featuredId = videoIdFrom(data.featuredVideoId);
  const featuredImage = one("#showcase .video-thumbnail");
  if (featuredImage && featuredId) featuredImage.src = `https://img.youtube.com/vi/${featuredId}/hqdefault.jpg`;
  if (featuredImage && !featuredId) featuredImage.alt = "Add a YouTube video ID in student-info.js";

  all(".reel-card").forEach((card, index) => {
    const project = (data.projects || [])[index];
    if (!project) return;
    setText(".reel-info h3", project.title, card);
    setText(".reel-info p", project.category, card);
    const img = one(".reel-thumbnail", card);
    if (img) { img.src = project.thumbnail; img.alt = `${project.title} thumbnail`; }
    const play = one(".reel-play", card);
    const id = videoIdFrom(project.videoId);
    if (play && id) {
      play.setAttribute("data-reel-video", id);
      play.setAttribute("aria-label", `Play ${project.title}`);
      if (play.tagName === "A") play.href = `https://www.youtube.com/watch?v=${id}`;
    } else if (play) {
      play.removeAttribute("data-reel-video");
      play.setAttribute("aria-label", `Add a video ID for ${project.title} in student-info.js`);
    }
  });

  all(".longform-card").forEach((card, index) => {
    const project = (data.longFormProjects || [])[index];
    if (!project) return;
    setText(".longform-info h3", project.title, card);
    setText(".longform-info p", project.category, card);
    const img = one(".longform-thumbnail", card);
    if (img) { img.src = project.thumbnail; img.alt = `${project.title} thumbnail`; }
    const play = one(".longform-play", card);
    const id = videoIdFrom(project.videoId);
    if (play && id) {
      play.setAttribute("data-longform-video", id);
      play.setAttribute("aria-label", `Play ${project.title}`);
    } else if (play) {
      play.removeAttribute("data-longform-video");
      play.setAttribute("aria-label", `Add a video ID for ${project.title} in student-info.js`);
    }
  });

  const serviceHeading = one(".services-heading h2");
  if (serviceHeading) serviceHeading.innerHTML = `${safe(data.servicesHeadingLine1)} <span>${safe(data.servicesHeadingLine2)}</span>`;
  setText(".services-heading p", data.servicesDescription);
  all(".service-card").forEach((card, index) => {
    const service = (data.services || [])[index];
    if (!service) return;
    setText("h3", service.title, card);
    setText("p", service.description, card);
  });

  const contactHeading = one(".contact-card h2");
  if (contactHeading) contactHeading.innerHTML = `${safe(data.contactHeadingLine1)}<br><span>${safe(data.contactHeadingLine2)}</span>`;
  setText(".contact-card > p", data.contactDescription);
  const emailLink = all(".contact-link")[0];
  if (emailLink) { emailLink.href = `mailto:${data.email || ""}`; const bold = one("b", emailLink); if (bold) bold.textContent = data.email || ""; }
  const whatsappLink = all(".contact-link")[1];
  if (whatsappLink) {
    const digits = String(data.whatsappNumber || "").replace(/\D/g, "");
    whatsappLink.href = digits ? `https://wa.me/${digits}` : "#contact";
    const bold = one("b", whatsappLink); if (bold) bold.textContent = data.phoneDisplay || "";
  }
  Object.entries(data.socials || {}).forEach(([network, url]) => {
    const link = one(`.socials a[aria-label="${network.charAt(0).toUpperCase() + network.slice(1)}"]`);
    if (link && url) { link.href = url; link.target = "_blank"; link.rel = "noopener noreferrer"; }
  });
  const footer = one(".footer-inner > span");
  if (footer) footer.innerHTML = `© <span id="year"></span> ${safe(data.fullName || "Your Name")}. All rights reserved.`;
})();
