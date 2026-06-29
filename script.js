const projects = [
  {
    id: "fixed-wing-evtol",
    title: "Fixed-Wing eVTOL UAV",
    category: "Bachelor Thesis / UAV Prototype",
    summary: "Fixed-wing eVTOL concept developed under student-budget constraints, combining aircraft design, prototyping, and flight-control integration.",
    meta: ["eVTOL", "Airframe", "Pixhawk", "Composites"],
    thumbnail: "fixedWing",
    note: "Public-safe case study: replace the stylized diagram with your own render/photo when ready.",
    components: [
      {
        id: "wing",
        number: "01",
        title: "Wing & Aerodynamic Surfaces",
        summary: "Designed the primary lifting surfaces and structural layout while balancing aerodynamic performance, student-budget manufacturing constraints, and integration of propulsion and control elements.",
        skills: ["SolidWorks", "Aerodynamics", "Airframe Design", "CFRP"],
        note: "Use this area to add wing loading, span, airfoil choice, or public-safe aerodynamic assumptions."
      },
      {
        id: "fuselage",
        number: "02",
        title: "Fuselage & Payload Integration",
        summary: "Packaged avionics, battery, payload, and mechanical interfaces into a lightweight, manufacturable airframe architecture suitable for prototype development.",
        skills: ["CAD Packaging", "Manufacturing", "Additive Manufacturing", "Systems Integration"],
        note: "Good place to show exploded CAD views or simplified layout diagrams."
      },
      {
        id: "propulsion",
        number: "03",
        title: "Distributed Propulsion",
        summary: "Integrated propulsion modules into the aircraft concept, considering hover/transition requirements, mounting stiffness, wiring, and serviceability.",
        skills: ["eVTOL Layout", "Propulsion", "Mounting", "Prototype Testing"],
        note: "Add hover thrust margin and endurance estimates if available."
      },
      {
        id: "flight-controller",
        number: "04",
        title: "Pixhawk Flight-Control Integration",
        summary: "Worked with Pixhawk-style autopilot architecture for sensor input, actuator command generation, ground-control connectivity, and prototype flight-control experimentation.",
        skills: ["Pixhawk", "ArduPilot", "MAVLink", "GCS"],
        note: "Add logs, mission screenshots, or GCS setup once you have public-safe material."
      }
    ],
    diagram: "fixedWing"
  },
  {
    id: "multicopter-fdd",
    title: "Over-Actuated Multicopter FDD",
    category: "Master Semester Thesis",
    summary: "Observer-based actuator fault detection for multicopters using residual generation and model-based estimation.",
    meta: ["FDD", "EKF/UKF", "Simulink", "Observers"],
    thumbnail: "multicopter",
    note: "Strong thesis showcase: add residual plots, detection-time tables, and observer architecture screenshots.",
    components: [
      {
        id: "plant",
        number: "01",
        title: "Multicopter Plant Model",
        summary: "Modelled rigid-body multicopter dynamics, actuator effectiveness, rotor thrust/drag mapping, and fault-injection scenarios for nominal and degraded flight conditions.",
        skills: ["Dynamics", "MATLAB", "Simulink", "Fault Injection"],
        note: "Include plant block diagram and parameter table for maximum credibility."
      },
      {
        id: "observer",
        number: "02",
        title: "Observer Bank",
        summary: "Implemented and compared Luenberger, Thau, Extended Kalman Filter, and Unscented Kalman Filter observers for analytical redundancy and state estimation under faults.",
        skills: ["Luenberger", "Thau", "EKF", "UKF"],
        note: "Show observer comparison with detection time, false alarms, and robustness."
      },
      {
        id: "residual",
        number: "03",
        title: "Residual Generation & Thresholds",
        summary: "Generated residuals between measured and estimated states to detect partial or complete loss of actuator effectiveness with threshold-based detection logic.",
        skills: ["Residuals", "Thresholds", "Actuator Faults", "Robustness"],
        note: "Add plots of residual crossing thresholds for different fault magnitudes."
      },
      {
        id: "allocation",
        number: "04",
        title: "Control Allocation",
        summary: "Represented how actuator commands map to forces and moments, enabling analysis of over-actuated configurations and degraded actuator scenarios.",
        skills: ["Allocation Matrix", "Control", "Actuators", "Fault Tolerance"],
        note: "Add allocation matrix visualization for hexacopter/octocopter configurations."
      }
    ],
    diagram: "multicopter"
  },
  {
    id: "gnss-denied-uav",
    title: "GNSS-Denied Autonomous UAV",
    category: "ROS2 / Autonomy Project",
    summary: "Autonomous UAV stack for GPS-denied exploration with mapping, perception, state estimation, and mission logic.",
    meta: ["ROS2", "OctoMap", "EKF", "Unity"],
    thumbnail: "autonomy",
    note: "Add a short demo video or GIF from RViz/Unity to make this page stand out.",
    components: [
      {
        id: "state-machine",
        number: "01",
        title: "Mission State Machine",
        summary: "Implemented mission logic for IDLE, TAKEOFF, environment entry, autonomous navigation, object handling, and return-to-home style behavior.",
        skills: ["ROS2", "C++", "State Machine", "Mission Logic"],
        note: "A state diagram here would make this section immediately understandable."
      },
      {
        id: "mapping",
        number: "02",
        title: "3D Mapping & Exploration",
        summary: "Used real-time occupancy mapping concepts and frontier-based exploration to navigate unknown GNSS-denied environments.",
        skills: ["OctoMap", "Frontier Exploration", "RViz", "PCL"],
        note: "Include map screenshots from RViz if you have them."
      },
      {
        id: "estimation",
        number: "03",
        title: "State Estimation",
        summary: "Applied EKF-based filtering to recover useful state estimates from noisy and drifting onboard sensing without relying on absolute GNSS position.",
        skills: ["EKF", "Sensor Fusion", "Odometry", "Estimation"],
        note: "Add estimated vs. measured trajectories for a strong research-style presentation."
      },
      {
        id: "perception",
        number: "04",
        title: "Perception & Object Detection",
        summary: "Integrated computer-vision and depth information for object detection, tracking, and environment interpretation inside the autonomy loop.",
        skills: ["OpenCV", "Depth", "Object Detection", "Tracking"],
        note: "Show sample detections and explain failure cases honestly."
      }
    ],
    diagram: "autonomy"
  },
  {
    id: "aircraft-structures",
    title: "Aircraft Structural Design",
    category: "Professional Aerospace Experience",
    summary: "Public-safe summary of structural design, composite integration, and cross-functional aircraft development experience.",
    meta: ["CATIA V5", "CFRP", "GD&T", "Structures"],
    thumbnail: "structures",
    note: "For proprietary aircraft work, use abstract diagrams only. Do not upload internal CAD, drawings, dimensions, or test data.",
    components: [
      {
        id: "surface",
        number: "01",
        title: "External Aerodynamic Surfaces",
        summary: "Worked on aircraft structural assemblies where surface quality, geometric control, and integration with aerodynamic requirements were central to the design process.",
        skills: ["CATIA V5", "Surface Design", "Aerospace Structures", "Integration"],
        note: "Keep this section public-safe and skill-focused."
      },
      {
        id: "composite",
        number: "02",
        title: "Composite Structure Integration",
        summary: "Supported CFRP/GFRP-oriented design thinking, considering manufacturability, interfaces, stiffness, weight, and assembly constraints.",
        skills: ["CFRP", "GFRP", "Manufacturing", "Assembly"],
        note: "Use generic laminate/structure visuals instead of company drawings."
      },
      {
        id: "gdnt",
        number: "03",
        title: "GD&T and Engineering Drawings",
        summary: "Worked with tolerance-aware design documentation and cross-functional coordination between design, stress, manufacturing, and integration stakeholders.",
        skills: ["GD&T", "Drawings", "Tolerancing", "Manufacturing"],
        note: "Add a public-safe sample drawing you create yourself."
      },
      {
        id: "interface",
        number: "04",
        title: "Interface Management",
        summary: "Coordinated structural interfaces and packaging constraints across adjacent aircraft systems, focusing on clean handover to downstream engineering teams.",
        skills: ["Systems Engineering", "Interfaces", "Design Review", "Configuration"],
        note: "This demonstrates maturity beyond CAD modelling."
      }
    ],
    diagram: "structures"
  }
];

const projectRail = document.getElementById("projectRail");
const activeCategory = document.getElementById("activeCategory");
const activeTitle = document.getElementById("activeTitle");
const activeMeta = document.getElementById("activeMeta");
const aircraftCanvas = document.getElementById("aircraftCanvas");
const componentNumber = document.getElementById("componentNumber");
const componentTitle = document.getElementById("componentTitle");
const componentSummary = document.getElementById("componentSummary");
const componentSkills = document.getElementById("componentSkills");
const componentNote = document.getElementById("componentNote");
const canvasMode = document.getElementById("canvasMode");

let activeProject = projects[0];
let activeComponent = projects[0].components[0];

function thumbSvg(type) {
  const base = `fill="rgba(56, 189, 248, 0.12)" stroke="rgba(125, 211, 252, 0.75)" stroke-width="2"`;
  if (type === "multicopter") {
    return `<svg viewBox="0 0 320 140"><circle cx="72" cy="42" r="24" fill="none" stroke="#22d3ee" stroke-width="2"/><circle cx="248" cy="42" r="24" fill="none" stroke="#22d3ee" stroke-width="2"/><circle cx="72" cy="100" r="24" fill="none" stroke="#22d3ee" stroke-width="2"/><circle cx="248" cy="100" r="24" fill="none" stroke="#22d3ee" stroke-width="2"/><path d="M72 42 L160 70 L248 42 M72 100 L160 70 L248 100" ${base}/><rect x="132" y="48" width="56" height="44" rx="10" ${base}/><text x="24" y="126" fill="#b8eaff" font-family="JetBrains Mono" font-size="11">OBSERVER FDD</text></svg>`;
  }
  if (type === "autonomy") {
    return `<svg viewBox="0 0 320 140"><path d="M42 102 C72 42 126 28 166 72 C196 32 254 46 282 96" fill="none" stroke="#38bdf8" stroke-width="3"/><path d="M64 102 L256 102" stroke="rgba(125,211,252,.35)"/><circle cx="96" cy="80" r="8" fill="#22d3ee"/><circle cx="166" cy="72" r="8" fill="#a78bfa"/><circle cx="226" cy="78" r="8" fill="#34d399"/><path d="M126 42 L160 56 L126 70 L92 56Z" ${base}/><text x="24" y="126" fill="#b8eaff" font-family="JetBrains Mono" font-size="11">GNSS-DENIED AUTONOMY</text></svg>`;
  }
  if (type === "structures") {
    return `<svg viewBox="0 0 320 140"><path d="M44 76 L158 32 L282 74 L160 90Z" ${base}/><path d="M88 88 L158 106 L236 90" fill="none" stroke="#22d3ee" stroke-width="2"/><path d="M158 32 L160 106" stroke="rgba(224,242,254,.6)"/><text x="24" y="126" fill="#b8eaff" font-family="JetBrains Mono" font-size="11">STRUCTURAL INTEGRATION</text></svg>`;
  }
  return `<svg viewBox="0 0 320 140"><path d="M28 72 L146 48 L164 22 L184 22 L176 56 L292 72 L176 88 L184 118 L164 118 L146 96Z" ${base}/><circle cx="84" cy="68" r="19" fill="none" stroke="#22d3ee" stroke-width="2"/><circle cx="238" cy="68" r="19" fill="none" stroke="#22d3ee" stroke-width="2"/><text x="24" y="126" fill="#b8eaff" font-family="JetBrains Mono" font-size="11">FIXED-WING EVTOL</text></svg>`;
}

function renderRail() {
  projectRail.innerHTML = projects.map((project, index) => `
    <button class="project-card ${project.id === activeProject.id ? "active" : ""}" data-project="${project.id}" aria-label="Open ${project.title}">
      <div class="project-thumb">${thumbSvg(project.thumbnail)}</div>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
      <div class="mini-tags">${project.meta.slice(0, 3).map(tag => `<span>${tag}</span>`).join("")}</div>
    </button>
  `).join("");

  projectRail.querySelectorAll(".project-card").forEach(button => {
    button.addEventListener("click", () => {
      const selected = projects.find(project => project.id === button.dataset.project);
      setActiveProject(selected);
    });
  });
}

function setActiveProject(project) {
  activeProject = project;
  activeComponent = project.components[0];
  renderRail();
  renderProject();
}

function setActiveComponent(componentId) {
  const component = activeProject.components.find(item => item.id === componentId);
  activeComponent = component;
  renderComponent();
  aircraftCanvas.querySelectorAll(".aircraft-part").forEach(el => {
    el.classList.toggle("active", el.dataset.component === componentId);
  });
}

function renderProject() {
  activeCategory.textContent = activeProject.category;
  activeTitle.textContent = activeProject.title;
  activeMeta.innerHTML = activeProject.meta.map(item => `<span>${item}</span>`).join("");
  canvasMode.textContent = activeProject.diagram.replace(/([A-Z])/g, " $1").replace(/^./, c => c.toUpperCase());
  aircraftCanvas.innerHTML = diagramSvg(activeProject.diagram);
  aircraftCanvas.querySelectorAll(".aircraft-part").forEach(part => {
    part.addEventListener("click", () => setActiveComponent(part.dataset.component));
    part.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setActiveComponent(part.dataset.component);
      }
    });
  });
  renderComponent();
}

function renderComponent() {
  componentNumber.textContent = activeComponent.number;
  componentTitle.textContent = activeComponent.title;
  componentSummary.textContent = activeComponent.summary;
  componentSkills.innerHTML = activeComponent.skills.map(skill => `<span>${skill}</span>`).join("");
  componentNote.textContent = activeComponent.note || activeProject.note;
}

function partGroup(id, label, shape, x, y) {
  const isActive = activeComponent && activeComponent.id === id ? "active" : "";
  return `<g class="aircraft-part ${isActive}" data-component="${id}" tabindex="0" role="button" aria-label="${label}">${shape}<circle class="hotspot-dot" cx="${x}" cy="${y}" r="8"/><text class="hotspot-label" x="${x + 14}" y="${y + 5}">${label}</text></g>`;
}

function diagramSvg(type) {
  if (type === "multicopter") {
    return `<svg viewBox="0 0 760 560" aria-hidden="true">
      <defs><filter id="softGlow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <circle cx="172" cy="146" r="58" class="rotor-ring"/><circle cx="588" cy="146" r="58" class="rotor-ring"/><circle cx="172" cy="414" r="58" class="rotor-ring"/><circle cx="588" cy="414" r="58" class="rotor-ring"/>
      <path class="aircraft-outline" d="M172 146 L380 280 L588 146 M172 414 L380 280 L588 414 M380 112 V448"/>
      <rect class="aircraft-outline" x="312" y="212" width="136" height="136" rx="26"/>
      ${partGroup("plant", "Plant", `<rect class="part-shape" x="320" y="220" width="120" height="120" rx="22"/>`, 380, 280)}
      ${partGroup("observer", "Observer", `<path class="part-shape" d="M248 70 L512 70 L490 126 L270 126Z"/>`, 330, 98)}
      ${partGroup("residual", "Residuals", `<path class="part-shape" d="M250 434 L512 434 L490 490 L270 490Z"/>`, 332, 462)}
      ${partGroup("allocation", "Allocation", `<path class="part-shape" d="M95 250 H665 V310 H95Z"/>`, 548, 280)}
    </svg>`;
  }

  if (type === "autonomy") {
    return `<svg viewBox="0 0 760 560" aria-hidden="true">
      <path class="aircraft-outline" d="M92 402 C130 220 270 122 394 250 C496 92 652 186 680 392" fill="none"/>
      <path d="M110 430 H670" stroke="rgba(125,211,252,.26)" stroke-width="2"/>
      <circle cx="172" cy="330" r="12" fill="#22d3ee"/><circle cx="296" cy="214" r="12" fill="#a78bfa"/><circle cx="438" cy="242" r="12" fill="#34d399"/><circle cx="586" cy="262" r="12" fill="#fbbf24"/>
      <path class="aircraft-outline" d="M300 116 L384 150 L300 184 L216 150Z"/>
      <path class="aircraft-outline" d="M384 150 L478 188"/>
      <circle cx="216" cy="150" r="32" class="rotor-ring"/><circle cx="478" cy="188" r="32" class="rotor-ring"/>
      ${partGroup("state-machine", "FSM", `<rect class="part-shape" x="96" y="86" width="190" height="70" rx="18"/>`, 136, 120)}
      ${partGroup("mapping", "Mapping", `<path class="part-shape" d="M98 372 C140 292 222 268 298 338 C360 390 432 358 488 300 C560 230 640 268 670 372 V440 H98Z"/>`, 238, 384)}
      ${partGroup("estimation", "EKF", `<rect class="part-shape" x="500" y="88" width="164" height="70" rx="18"/>`, 530, 122)}
      ${partGroup("perception", "Vision", `<rect class="part-shape" x="474" y="354" width="174" height="70" rx="18"/>`, 520, 388)}
    </svg>`;
  }

  if (type === "structures") {
    return `<svg viewBox="0 0 760 560" aria-hidden="true">
      <path class="aircraft-outline" d="M78 284 L378 126 L682 274 L382 332Z"/>
      <path class="aircraft-outline" d="M186 330 L382 414 L570 334"/>
      <path class="aircraft-outline" d="M378 126 L382 414"/>
      <path class="aircraft-outline" d="M256 240 L506 240"/>
      ${partGroup("surface", "Surface", `<path class="part-shape" d="M78 284 L378 126 L682 274 L382 332Z"/>`, 420, 208)}
      ${partGroup("composite", "Composite", `<path class="part-shape" d="M186 330 L382 414 L570 334 L382 332Z"/>`, 328, 372)}
      ${partGroup("gdnt", "GD&T", `<rect class="part-shape" x="88" y="92" width="188" height="82" rx="18"/>`, 122, 132)}
      ${partGroup("interface", "Interface", `<rect class="part-shape" x="514" y="372" width="174" height="82" rx="18"/>`, 544, 412)}
    </svg>`;
  }

  return `<svg viewBox="0 0 760 560" aria-hidden="true">
    <defs><filter id="airGlow"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
    <path class="aircraft-outline" d="M78 282 L330 214 L370 98 L414 98 L394 232 L684 282 L394 332 L414 462 L370 462 L330 350Z"/>
    <circle cx="156" cy="270" r="48" class="rotor-ring"/><circle cx="602" cy="270" r="48" class="rotor-ring"/><circle cx="352" cy="112" r="38" class="rotor-ring"/><circle cx="352" cy="448" r="38" class="rotor-ring"/>
    ${partGroup("wing", "Wing", `<path class="part-shape" d="M78 282 L330 214 L394 232 L684 282 L394 332 L330 350Z"/>`, 236, 252)}
    ${partGroup("fuselage", "Fuselage", `<path class="part-shape" d="M326 178 C364 128 410 128 448 178 L420 386 C402 426 362 426 344 386Z"/>`, 382, 284)}
    ${partGroup("propulsion", "Propulsion", `<path class="part-shape" d="M120 218 H192 V322 H120Z M566 218 H638 V322 H566Z"/>`, 585, 224)}
    ${partGroup("flight-controller", "Avionics", `<rect class="part-shape" x="334" y="258" width="96" height="58" rx="14"/>`, 395, 288)}
  </svg>`;
}

function setupReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

function setupNav() {
  const header = document.getElementById("siteHeader");
  const menuButton = document.getElementById("menuButton");
  const nav = document.querySelector(".nav");

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
  });

  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

function setupCursorGlow() {
  const glow = document.getElementById("cursorGlow");
  if (!window.matchMedia("(pointer: fine)").matches) {
    glow.style.display = "none";
    return;
  }
  window.addEventListener("mousemove", event => {
    glow.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
  });
}

function init() {
  document.getElementById("year").textContent = new Date().getFullYear();
  renderRail();
  renderProject();
  setupReveal();
  setupNav();
  setupCursorGlow();
}

init();
