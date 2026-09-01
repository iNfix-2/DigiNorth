"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  Sparkles, 
  Search, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Cpu, 
  ShieldCheck, 
  Radio, 
  Atom, 
  Server, 
  Zap, 
  X, 
  Share2, 
  Play, 
  Headphones, 
  Flame, 
  TrendingUp,
  Filter,
  Check
} from "lucide-react";

export default function InsightsPage() {
  const [selectedTopic, setSelectedTopic] = useState("All Topics");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState(null);
  const [trendingSlide, setTrendingSlide] = useState(0);
  const [copiedId, setCopiedId] = useState(null);

  const topics = [
    { name: "All Topics", slug: "all", icon: Sparkles },
    { name: "Artificial Intelligence", slug: "ai", icon: Cpu },
    { name: "Defense Tech", slug: "defense", icon: Radio },
    { name: "Cybersecurity", slug: "cybersecurity", icon: ShieldCheck },
    { name: "Cloud & Infrastructure", slug: "cloud", icon: Server },
    { name: "Quantum Computing", slug: "quantum", icon: Atom },
    { name: "Data & Edge", slug: "data", icon: Zap },
  ];

  const allArticles = [
    // ==========================================
    // ARTIFICIAL INTELLIGENCE
    // ==========================================
    {
      id: "dot-advisor-ai-procurement",
      topic: "Artificial Intelligence",
      chips: [
        { label: "Video", type: "media", icon: Play },
        { label: "AI GovCast", type: "category" }
      ],
      duration: "11m watch",
      title: "DOT Advisor: Federal Contracting & Enterprise Sourcing Must Adapt to Keep Pace With Frontier AI",
      excerpt: "AI capabilities are advancing faster than traditional multi-year procurement cycles, making modular contracting, algorithmic disclosure, and adaptive unit pricing increasingly critical.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
      date: "01 Sep 2026",
      author: "Neil Chaudhry & DigiNorth Intelligence",
      content: `
### Accelerating Enterprise & Defense AI Procurement
Artificial intelligence is evolving exponentially compared to traditional procurement and software deployment cycles. In this briefing, leaders discuss how agencies and enterprise labs are shifting to agile modular delivery frameworks.

#### Key Strategic Pillars:
1. **Modular AI Contracts**: Breaking multi-year monolithic IT contracts into 90-day iterative capability deployments.
2. **Model Transparency & Disclosure**: Mandatory disclosure of foundational model training data, alignment protocols, and data residency guarantees.
3. **Adaptive Unit Economics**: Moving away from static software seat licenses to compute-indexed pricing based on GPU utilization.

> *"If procurement cycles take 24 months, you will deploy technology that is already three architectural generations obsolete."*
      `,
    },
    {
      id: "pentagon-genai-mil-expansion",
      topic: "Artificial Intelligence",
      chips: [
        { label: "Frontier AI", type: "category" },
        { label: "Defense", type: "category" }
      ],
      duration: "5m read",
      title: "Pentagon GenAI.mil Expands: OpenAI ChatGPT and Starshield Grok Integrated for Tactical Defense Workloads",
      excerpt: "The Department of Defense broadens its enterprise generative AI stack, deploying specialized multi-model LLM nodes across secure operational networks.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      date: "31 Aug 2026",
      author: "DefenseScoop Analysis",
      content: `
### Multi-Model Defense Intelligence
The expansion of GenAI.mil allows defense personnel to select task-specific frontier models—from structured data synthesis with Gemini to tactical reconnaissance code generation with specialized Grok and ChatGPT weights.
      `,
    },
    {
      id: "nist-ai-devsecops",
      topic: "Artificial Intelligence",
      chips: [
        { label: "CyberCast", type: "category" },
        { label: "Podcast", type: "media", icon: Headphones }
      ],
      duration: "4m watch",
      title: "NIST Explores Autonomous AI Agents’ Role in Next-Gen DevSecOps",
      excerpt: "Michael Ogata discusses NIST’s latest DevSecOps research, the growing role of autonomous coding agents, and the need for new approaches to continuous workload attestation.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
      date: "30 Aug 2026",
      author: "Michael Ogata (NIST)",
      content: `
### Autonomous AI in DevSecOps Pipelines
As autonomous software agents begin generating, testing, and modifying production codebases, traditional perimeter and static code analysis tools are insufficient.

NIST researchers are defining new guidelines for zero-trust authorization where AI agents are treated as non-human identities with dynamic, verifiable permissions.
      `,
    },
    {
      id: "sovereign-ai-africa-model",
      topic: "Artificial Intelligence",
      chips: [
        { label: "Sovereign AI", type: "category" },
        { label: "Foundation Models", type: "category" }
      ],
      duration: "5m read",
      title: "The Sovereign AI Imperative: Why African Nations Are Building Indigenous Foundation Pipelines",
      excerpt: "From 100MW hyperscale clusters in Nigeria to local language foundational models, the continent is shifting from consuming foreign APIs to engineering sovereign intelligence.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
      date: "29 Aug 2026",
      author: "DigiNorth Intelligence Desk",
      content: `
### African Foundation Model Architectures
Developing multi-modal foundation models trained on indigenous languages (Hausa, Yoruba, Igbo, Fulfulde) ensures that high-stakes judicial, educational, and agronomic decisions reflect local context without offshore telemetry leaks.
      `,
    },
    {
      id: "agentforce-dod-il5",
      topic: "Artificial Intelligence",
      chips: [
        { label: "Agentic AI", type: "category" },
        { label: "Enterprise", type: "category" }
      ],
      duration: "3m read",
      title: "Salesforce Agentforce 360 Authorized for DOD Impact Level 5 Enterprise Workloads",
      excerpt: "Marking a major milestone in autonomous enterprise execution, agentic AI workflows are deployed to coordinate high-security national defense operations.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      date: "26 Aug 2026",
      author: "Enterprise Cloud Review",
      content: `
### Autonomous Workflows at Impact Level 5
DOD authorization enables autonomous agents to resolve personnel logistics, equipment readiness tracking, and supply chain scheduling across mission-critical networks.
      `,
    },
    {
      id: "agentic-ai-swarms-engineering",
      topic: "Artificial Intelligence",
      chips: [
        { label: "Multi-Agent AI", type: "category" },
        { label: "Architecture", type: "category" }
      ],
      duration: "4m read",
      title: "Agentic AI in Production: The Rise of Multi-Agent Engineering Swarms & Autonomous CI/CD",
      excerpt: "How autonomous coding agents, multi-agent planners, and self-healing CI/CD pipelines are redefining full-stack engineering and QA verification in 2026.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
      date: "23 Aug 2026",
      author: "BuildLab Engineering Group",
      content: `
### Multi-Agent Autonomous Swarms
Engineering teams are deploying swarms of specialized subagents where one agent plans architecture, another writes code, a third benchmarks unit tests, and a fourth audits accessibility.
      `,
    },

    // ==========================================
    // DEFENSE TECH
    // ==========================================
    {
      id: "pentagon-ai-arsenal-supercomputing",
      topic: "Defense Tech",
      chips: [
        { label: "Supercomputing", type: "category" },
        { label: "Defense AI", type: "category" }
      ],
      duration: "5m read",
      title: "DOD Requests $30 Billion for 'AI Arsenal' Supercomputing Infrastructure Initiative",
      excerpt: "The Department of War moves away from fragmented computing clusters toward an integrated, sovereign supercomputing infrastructure for tactical and strategic battlefield AI.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
      date: "28 Aug 2026",
      author: "DefenseScoop & Strategic Analysis",
      content: `
### Unified Supercomputing for Strategic Defense
The $30 billion AI Arsenal initiative consolidates decentralized GPU clusters into sovereign high-performance computing centers capable of training trillion-parameter multi-modal models for real-time situational awareness and electronic warfare.
      `,
    },
    {
      id: "dicon-nitda-defence-futures",
      topic: "Defense Tech",
      chips: [
        { label: "Defense Futures", type: "category" },
        { label: "Robotics", type: "category" }
      ],
      duration: "6m read",
      title: "DICON & NITDA Launch Defence Futures Lab in Kaduna for Indigenous Drone Swarms",
      excerpt: "The transition from traditional ordnance to sensor-fused drones, real-time battlefield edge compute, and the newly established Defence Futures Lab in Northern Nigeria.",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80",
      date: "27 Aug 2026",
      author: "Tactical Systems Research Group",
      content: `
### Indigenous Defense Technology in Kaduna
DICON and NITDA are collaborating to establish the Defence Futures Lab, focusing on electronic counter-measures, ruggedized battlefield sensor meshes, and autonomous quadcopter swarms built by Nigerian software and hardware engineers.
      `,
    },
    {
      id: "intelligence-targeting-automation",
      topic: "Defense Tech",
      chips: [
        { label: "Tactical AI", type: "category" },
        { label: "Targeting", type: "category" }
      ],
      duration: "4m read",
      title: "Defense Intelligence Agencies Accelerate Sensor-to-Shooter Targeting with Multi-Agent AI",
      excerpt: "DIA and service leaders prioritize automation and cross-domain interoperability to convert massive volumes of satellite and RF telemetry into actionable targeting intelligence in milliseconds.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
      date: "25 Aug 2026",
      author: "Intelligence Review",
      content: `
### Rapid Sensor-to-Shooter Loops
By applying real-time computer vision and RF spectrum anomaly detection at the tactical edge, defense operators can identify threats and coordinate interceptors with unprecedented precision.
      `,
    },
    {
      id: "dod-classified-ai-agreements",
      topic: "Defense Tech",
      chips: [
        { label: "Classified AI", type: "category" },
        { label: "National Security", type: "category" }
      ],
      duration: "5m read",
      title: "DOD Solidifies Classified AI Deployments with NVIDIA, AWS, SpaceX & Oracle for IL6/IL7 Networks",
      excerpt: "Agreements ensure frontier model weights and high-density GPU computing clusters are physically partitioned and air-gapped within sovereign military cloud environments.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
      date: "22 Aug 2026",
      author: "Strategic Cloud Review",
      content: `
### Air-Gapped Frontier AI Deployments
Deploying frontier multi-modal models into classified defense clouds requires customized bare-metal server enclaves, zero external telemetry leakage, and strict hardware security verification.
      `,
    },
    {
      id: "fifa-world-cup-counter-drone-security",
      topic: "Defense Tech",
      chips: [
        { label: "Counter-UAS", type: "category" },
        { label: "Radar", type: "category" }
      ],
      duration: "4m read",
      title: "2026 World Cup Security: Federal Investment Surges in Counter-Drone Mitigation & Autonomous Radar",
      excerpt: "Multi-layered defense perimeters deploy automated optical tracking, directional RF jammers, and kinetic interceptors to safeguard high-density stadiums.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80",
      date: "19 Aug 2026",
      author: "Homeland Security Analysis",
      content: `
### Airspace Defense Architecture
Securing massive public events requires seamless integration of passive RF sensors, active phased-array radar, and AI-enabled optical verification to neutralize unauthorized unmanned aerial systems.
      `,
    },

    // ==========================================
    // CYBERSECURITY
    // ==========================================
    {
      id: "project-glasswing-anthropic",
      topic: "Cybersecurity",
      chips: [
        { label: "AI Defense", type: "category" },
        { label: "Zero-Day", type: "category" }
      ],
      duration: "4m read",
      title: "Project Glasswing: Frontier Reasoning Models Automate Zero-Day Vulnerability Discovery",
      excerpt: "Major cybersecurity alliances deploy frontier reasoning models like Claude Mythos to proactively decompile firmware, fuzz Linux kernels, and generate automated patches before adversaries strike.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
      date: "28 Aug 2026",
      author: "Cyber Threat Intelligence Team",
      content: `
### Proactive Vulnerability Elimination
Project Glasswing demonstrates that defensive AI models can inspect billions of lines of legacy open-source and critical infrastructure code, identifying memory corruptions and race conditions with mathematical proof assistants.
      `,
    },
    {
      id: "gold-eagle-cisa-ai",
      topic: "Cybersecurity",
      chips: [
        { label: "CISA", type: "category" },
        { label: "Incident Response", type: "category" }
      ],
      duration: "3m read",
      title: "CISA & Treasury Release 'Gold Eagle' to Triage AI-Powered Cyber Attacks at Machine Speed",
      excerpt: "The federal cybersecurity clearinghouse introduces automated threat-sharing telemetry to counter rapid-fire generative phishing and automated lateral movement exploits.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
      date: "27 Aug 2026",
      author: "CISA Threat Briefing",
      content: `
### Machine-Speed Threat Remediation
Gold Eagle connects commercial banks, critical utility providers, and defense agencies to instantly synchronize firewall rules, block malicious C2 domains, and revoke compromised cryptographic credentials in real time.
      `,
    },
    {
      id: "cyber-shield-2026-power-grid",
      topic: "Cybersecurity",
      chips: [
        { label: "Critical Infra", type: "category" },
        { label: "OT Security", type: "category" }
      ],
      duration: "5m read",
      title: "Cyber Shield 2026 Exercise Concludes: Defending Power Grids & Industrial OT from Digital Sabotage",
      excerpt: "Over 800 cyber defenders simulate state-sponsored attacks against SCADA systems, substations, and water treatment plants to harden national utility infrastructure.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80",
      date: "24 Aug 2026",
      author: "Grid Security Review",
      content: `
### Hardening Operational Technology
Unlike traditional IT environments, industrial control systems require protocol-aware deep packet inspection and hardware-enforced unidirectional data diodes to prevent malicious commands from reaching turbines and generators.
      `,
    },
    {
      id: "zero-trust-identity-cloud-security",
      topic: "Cybersecurity",
      chips: [
        { label: "Zero Trust", type: "category" },
        { label: "Cloud Security", type: "category" }
      ],
      duration: "5m read",
      title: "Zero-Trust Identity Fabric: Securing Autonomous AI Agents in Hybrid Cloud Architectures",
      excerpt: "Eliminating static perimeter defenses with continuous cryptographic workload attestation and behavioral anomaly detection across multi-cloud environments.",
      image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80",
      date: "20 Aug 2026",
      author: "Security Architecture Review",
      content: `
### Zero Trust at the Application Layer
Every API invocation, database query, and model execution must be cryptographically attested using short-lived SPIRE/SPIFFE credentials rather than persistent secret keys.
      `,
    },

    // ==========================================
    // CLOUD & INFRASTRUCTURE
    // ==========================================
    {
      id: "nigeria-100mw-hyperscale",
      topic: "Cloud & Infrastructure",
      chips: [
        { label: "Hyperscale", type: "category" },
        { label: "Data Center", type: "category" }
      ],
      duration: "4m read",
      title: "Nigeria Breaks Ground on 100MW KASI Hyperscale Facility to Power Sovereign AI Compute",
      excerpt: "Backed by the Nigeria Sovereign Investment Authority (NSIA), the high-density data campus in Lagos provides tier-4 reliability and direct fiber interlinks for regional builders.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
      date: "28 Aug 2026",
      author: "Infrastructure Intelligence Desk",
      content: `
### Powering Africa's Sovereign AI Compute
The 100MW KASI facility addresses the compute and power bottleneck in West Africa, providing dedicated high-density server halls capable of housing 40kW+ racks for GPU model training and enterprise cloud hosting.
      `,
    },
    {
      id: "smr-nuclear-cloud-power",
      topic: "Cloud & Infrastructure",
      chips: [
        { label: "Clean Energy", type: "category" },
        { label: "Nuclear SMR", type: "category" }
      ],
      duration: "6m read",
      title: "Small Modular Nuclear Reactors (SMRs) Emerge to Solve the $1 Trillion Cloud Power Bottleneck",
      excerpt: "As global cloud spend tops $1T, data center operators are pairing gigawatt AI clusters directly with dedicated clean microgrids and next-gen liquid immersion cooling.",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80",
      date: "26 Aug 2026",
      author: "Energy & Cloud Systems Review",
      content: `
### Dedicated Baseload Microgrids
Hyperscalers are signing long-term power purchase agreements with Small Modular Reactor developers to place 300MW nuclear modules directly adjacent to AI training clusters, ensuring zero carbon emissions and 99.999% uptime.
      `,
    },
    {
      id: "project-bridge-fiber-satellite",
      topic: "Cloud & Infrastructure",
      chips: [
        { label: "Fiber & Space", type: "category" },
        { label: "Connectivity", type: "category" }
      ],
      duration: "3m read",
      title: "Project BRIDGE & NIGCOMSAT-2: Scaling 90,000km of Fiber and Space Telemetry Across West Africa",
      excerpt: "Connecting Northern Nigerian innovation hubs to subsea cables and low-earth orbit satellite constellations for uninterrupted, low-latency bandwidth.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
      date: "25 Aug 2026",
      author: "Telecom & Space Research",
      content: `
### Sovereign Communications Backbone
Combining national terrestrial fiber deployment with NIGCOMSAT-2A/2B communications satellites guarantees high-reliability connectivity for regional hubs and defense assets.
      `,
    },

    // ==========================================
    // QUANTUM COMPUTING
    // ==========================================
    {
      id: "post-quantum-crypto-2030",
      topic: "Quantum Computing",
      chips: [
        { label: "Post-Quantum", type: "category" },
        { label: "PQC", type: "category" }
      ],
      duration: "5m read",
      title: "Government Mandates Post-Quantum Cryptography Migration for High-Impact Systems by 2030",
      excerpt: "The Department of War and federal agencies establish a hard timeline to replace RSA/ECC with lattice-based post-quantum encryption to neutralize the 'harvest now, decrypt later' threat.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1000&q=80",
      date: "28 Aug 2026",
      author: "Cryptographic Architecture Group",
      content: `
### Defeating 'Harvest Now, Decrypt Later'
Adversaries actively siphon encrypted state transmissions to decrypt when quantum hardware matures. The migration to lattice-based post-quantum cryptography (ML-KEM and ML-DSA) is now an operational mandate across defense and finance.
      `,
    },
    {
      id: "quantum-logical-qubits-70",
      topic: "Quantum Computing",
      chips: [
        { label: "Fault-Tolerant", type: "category" },
        { label: "Quantum Hardware", type: "category" }
      ],
      duration: "4m read",
      title: "70 Logical Qubits Milestone Accelerates Post-Quantum Implementation Timelines Worldwide",
      excerpt: "Fault-tolerant quantum error correction demonstrates practical utility, moving quantum computing from experimental physics labs into hybrid HPC architectures.",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80",
      date: "27 Aug 2026",
      author: "Quantum Science Review",
      content: `
### Scalable Logical Qubit Architecture
By linking physical superconducting and neutral atom qubits into error-corrected logical qubits, researchers achieved sustained multi-qubit gate operations that exceed the simulation capabilities of classical supercomputers.
      `,
    },
    {
      id: "pentagon-software-pqc-scout",
      topic: "Quantum Computing",
      chips: [
        { label: "Software PQC", type: "category" },
        { label: "Crypto-Agility", type: "category" }
      ],
      duration: "3m read",
      title: "Pentagon Scouts Software-Defined Cryptographic Solutions for Interim Quantum Resilience",
      excerpt: "Seeking rapid crypto-agile software overlays that can protect legacy tactical radios and embedded weapon systems without requiring complete hardware overhauls.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
      date: "24 Aug 2026",
      author: "Tactical Communications Review",
      content: `
### Crypto-Agility in Legacy Systems
Software-defined PQC libraries allow field-deployed embedded devices to dynamically negotiate post-quantum session keys over existing low-bandwidth RF links.
      `,
    },

    // ==========================================
    // DATA & EDGE
    // ==========================================
    {
      id: "offline-agritech-kaduna",
      topic: "Data & Edge",
      chips: [
        { label: "Edge Vision", type: "category" },
        { label: "Agritech", type: "category" }
      ],
      duration: "4m read",
      title: "Offline Edge Vision Models for Agricultural Yield & Crop Disease Detection in Kaduna",
      excerpt: "Field notes from BuildLab deploying lightweight quantized computer vision algorithms running on 5W solar-powered edge nodes across rural farms.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
      date: "27 Aug 2026",
      author: "BuildLab Agritech Squad",
      content: `
### Edge AI in Rural Farming Realities
BuildLab researchers in Kaduna and Zaria have deployed quantized MobileNet models on Raspberry Pi / ESP32 cameras to detect tomato blight and maize armyworm without needing cellular data.
      `,
    },
    {
      id: "sovereign-data-cloud-policy-nigeria",
      topic: "Data & Edge",
      chips: [
        { label: "Data Policy", type: "category" },
        { label: "Governance", type: "category" }
      ],
      duration: "5m read",
      title: "Nigeria's National Digital Cloud Policy Targets $750M Investment for Local Data Sovereignty",
      excerpt: "Mandating governmental and critical enterprise data residency while incentivizing private cloud operators to establish local edge availability zones.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
      date: "25 Aug 2026",
      author: "Public Policy & Data Desk",
      content: `
### Enforcing Data Sovereignty
The policy framework prevents public sector records, health data, and citizen biometrics from residing on offshore servers, spurring rapid growth in domestic cloud infrastructure.
      `,
    },
    {
      id: "decentralized-mesh-edge-sync",
      topic: "Data & Edge",
      chips: [
        { label: "Mesh Networks", type: "category" },
        { label: "Edge Compute", type: "category" }
      ],
      duration: "4m read",
      title: "Decentralized Mesh Networks: Peer-to-Peer Data Synchronization Under Intermittent Connectivity",
      excerpt: "How distributed edge nodes in Northern Nigerian research labs leverage CRDTs (Conflict-Free Replicated Data Types) for resilient multi-master data replication.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
      date: "22 Aug 2026",
      author: "BuildLab Systems Group",
      content: `
### Resilient Offline-First Data Replication
Using CRDT structures and local Wi-Fi/Bluetooth mesh radios, edge nodes allow researchers and medical workers to record field data that seamlessly reconciles when backhaul connectivity restores.
      `,
    },
  ];

  // Dynamically calculate articles for the currently selected topic
  const currentTopicArticles = useMemo(() => {
    let list = allArticles;
    if (selectedTopic !== "All Topics") {
      list = allArticles.filter((a) => a.topic === selectedTopic);
    }
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.topic.toLowerCase().includes(q) ||
          a.author.toLowerCase().includes(q)
      );
    }
    return list;
  }, [selectedTopic, searchQuery]);

  // Lead Section Structure for the Active Tab:
  // Top Story -> Center Hero
  // Next 2 Stories -> Left Column Stacked Cards
  // Remaining Stories -> Latest Grid
  const leadHero = currentTopicArticles[0] || allArticles[0];
  const leadLeft = currentTopicArticles.slice(1, 3);
  const latestGrid = currentTopicArticles.slice(3);

  // Global trending list
  const trendingList = allArticles.slice(0, 8);
  const trendingItems = trendingList.slice(trendingSlide * 4, trendingSlide * 4 + 4);

  const handleShare = (art) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedId(art.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-space">
      <Navbar />

      {/* GovCIO-style Top Breadcrumb & Page Heading */}
      <section className="pt-32 pb-6 px-4 sm:px-6 max-w-7xl mx-auto border-b border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-1 font-semibold">
              The latest in
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              {selectedTopic}
            </h1>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={`Search ${selectedTopic === "All Topics" ? "all sectors" : selectedTopic}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#38bdf8] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Category Tabs Bar (GovCIO Pattern) */}
        <div className="flex items-center gap-2 overflow-x-auto pt-6 pb-2 scrollbar-none">
          {topics.map((t, idx) => {
            const count = t.name === "All Topics" 
              ? allArticles.length 
              : allArticles.filter((a) => a.topic === t.name).length;
            const Icon = t.icon;

            return (
              <button
                key={idx}
                onClick={() => { setSelectedTopic(t.name); setSearchQuery(""); }}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  selectedTopic === t.name
                    ? "bg-[#38bdf8] text-black font-bold shadow-[0_0_15px_rgba(56,189,248,0.5)] scale-105"
                    : "bg-white/5 text-slate-300 hover:bg-white/15 hover:text-white border border-white/10"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{t.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                  selectedTopic === t.name ? "bg-black/20 text-black" : "bg-white/10 text-slate-400"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* GovCIO Asymmetric Lead Grid (Left Stacked Cards + Center Hero + Right Trending Carousel) */}
      <section className="py-10 px-4 sm:px-6 max-w-7xl mx-auto">
        {currentTopicArticles.length === 0 ? (
          <div className="text-center py-20 bg-white/[0.02] border border-white/10 rounded-3xl p-8">
            <Search className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white uppercase mb-1">No articles found</h3>
            <p className="text-xs text-slate-400 font-light mb-4">No stories matched "{searchQuery}" in {selectedTopic}.</p>
            <button
              onClick={() => { setSelectedTopic("All Topics"); setSearchQuery(""); }}
              className="px-4 py-2 rounded-xl bg-white/10 text-xs font-mono text-white hover:bg-white/20"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT COLUMN (Stacked Editorial Cards) */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              {leadLeft.length > 0 ? (
                leadLeft.map((art) => (
                  <article
                    key={art.id}
                    onClick={() => setActiveArticle(art)}
                    className="group cursor-pointer flex flex-col justify-between bg-black/60 rounded-2xl border border-white/10 p-4 hover:border-white/30 transition-all shadow-lg"
                  >
                    <div>
                      {/* Card Thumbnail Image */}
                      <div className="w-full h-40 rounded-xl overflow-hidden mb-3.5 relative bg-white/5">
                        <img
                          src={art.image}
                          alt={art.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Chips Group */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-2">
                        {art.chips?.map((chip, cIdx) => {
                          const Icon = chip.icon;
                          return (
                            <span
                              key={cIdx}
                              className={`inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                                chip.type === "media"
                                  ? "bg-white text-black"
                                  : "bg-[#0052FF]/20 text-[#38bdf8] border border-[#0052FF]/30"
                              }`}
                            >
                              {Icon && <Icon className="w-3 h-3" />}
                              <span>{chip.label}</span>
                            </span>
                          );
                        })}
                      </div>

                      {/* Headline */}
                      <h2 className="text-sm font-bold text-white uppercase leading-snug group-hover:text-[#38bdf8] transition-colors mb-2 line-clamp-2">
                        {art.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-xs text-slate-400 font-light leading-relaxed line-clamp-2 mb-3">
                        {art.excerpt}
                      </p>
                    </div>

                    {/* Duration / Read time */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-white/5">
                      <div className="flex items-center gap-1 text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-[#38bdf8]" />
                        <span>{art.duration}</span>
                      </div>
                      <span className="text-slate-500">{art.date}</span>
                    </div>
                  </article>
                ))
              ) : (
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center text-xs font-mono text-slate-500">
                  More briefings coming soon for {selectedTopic}
                </div>
              )}
            </div>

            {/* CENTER COLUMN (Featured Hero Article of this topic) */}
            <div className="lg:col-span-6 flex flex-col">
              {leadHero && (
                <article
                  onClick={() => setActiveArticle(leadHero)}
                  className="group cursor-pointer flex-1 bg-gradient-to-b from-white/[0.04] to-black rounded-3xl border border-white/15 p-6 sm:p-8 flex flex-col justify-between hover:border-[#38bdf8]/50 transition-all shadow-2xl relative overflow-hidden"
                >
                  <div>
                    {/* Hero Feature Image */}
                    <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 relative bg-white/5">
                      <img
                        src={leadHero.image}
                        alt={leadHero.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Hero Chips */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {leadHero.chips?.map((chip, cIdx) => {
                        const Icon = chip.icon;
                        return (
                          <span
                            key={cIdx}
                            className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase px-2.5 py-1 rounded ${
                              chip.type === "media"
                                ? "bg-white text-black"
                                : "bg-[#0052FF]/30 text-[#38bdf8] border border-[#0052FF]/50"
                            }`}
                          >
                            {Icon && <Icon className="w-3.5 h-3.5" />}
                            <span>{chip.label}</span>
                          </span>
                        );
                      })}
                    </div>

                    {/* Hero Headline */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-tight group-hover:text-[#93c5fd] transition-colors mb-3">
                      {leadHero.title}
                    </h2>

                    {/* Hero Excerpt */}
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                      {leadHero.excerpt}
                    </p>
                  </div>

                  {/* Bottom Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono">
                    <span className="text-slate-400">{leadHero.author}</span>
                    <div className="flex items-center gap-1.5 text-[#38bdf8] font-bold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{leadHero.duration}</span>
                    </div>
                  </div>
                </article>
              )}
            </div>

            {/* RIGHT COLUMN (Trending Carousel Feed) */}
            <div className="lg:col-span-3 flex flex-col">
              <div className="rounded-2xl border border-white/10 bg-black/80 p-5 shadow-xl flex-1 flex flex-col justify-between">
                
                {/* Header with Module Label & Arrows */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#38bdf8] text-black text-xs font-mono font-bold uppercase tracking-wider">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Trending</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setTrendingSlide((prev) => (prev === 0 ? 1 : 0))}
                      aria-label="Previous trending slide"
                      className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setTrendingSlide((prev) => (prev === 1 ? 0 : 1))}
                      aria-label="Next trending slide"
                      className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Trending Stories List */}
                <ul className="space-y-4 flex-1">
                  {trendingItems.map((item, idx) => (
                    <li
                      key={item.id}
                      onClick={() => setActiveArticle(item)}
                      className="group cursor-pointer pb-3.5 border-b border-white/5 last:border-none"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono text-slate-500">0{idx + 1 + trendingSlide * 4}</span>
                        <span className="text-[10px] font-mono text-[#38bdf8] uppercase font-bold">{item.topic}</span>
                      </div>

                      <h3 className="text-xs sm:text-sm font-bold text-white uppercase leading-snug group-hover:text-[#38bdf8] transition-colors mb-1.5 line-clamp-2">
                        {item.title}
                      </h3>

                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                        <span>{item.duration}</span>
                        <span className="text-slate-400 bg-white/5 px-1.5 py-0.5 rounded">{item.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Slide Dots */}
                <div className="flex items-center justify-center gap-1.5 pt-3 border-t border-white/10 mt-4">
                  <span className={`w-2 h-2 rounded-full transition-all ${trendingSlide === 0 ? "bg-[#38bdf8] w-4" : "bg-white/30"}`} />
                  <span className={`w-2 h-2 rounded-full transition-all ${trendingSlide === 1 ? "bg-[#38bdf8] w-4" : "bg-white/30"}`} />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* GovCIO-style "LATEST" Sector Wire Grid */}
      <section className="py-14 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-white text-black text-xs font-mono font-bold uppercase tracking-wider">
              Latest
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              {selectedTopic === "All Topics" ? "All Sector Reports" : `${selectedTopic} Wire`} ({latestGrid.length})
            </h2>
          </div>

          <span className="text-xs font-mono text-slate-400">
            {selectedTopic} · Verified Intelligence Briefings
          </span>
        </div>

        {/* 3 Column Grid */}
        {latestGrid.length === 0 ? (
          <div className="py-12 text-center bg-white/[0.02] rounded-2xl border border-white/10 text-xs font-mono text-slate-500">
            Showing all {currentTopicArticles.length} featured items in lead showcase above.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestGrid.map((art) => (
              <article
                key={art.id}
                onClick={() => setActiveArticle(art)}
                className="group cursor-pointer bg-black/70 border border-white/10 rounded-2xl p-5 hover:border-white/30 hover:-translate-y-1 transition-all shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="w-full h-44 rounded-xl overflow-hidden mb-4 relative bg-white/5">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                    {art.chips?.map((chip, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-[#0052FF]/20 text-[#38bdf8] border border-[#0052FF]/30"
                      >
                        {chip.label}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white uppercase leading-snug group-hover:text-[#38bdf8] transition-colors mb-2 line-clamp-2">
                    {art.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-slate-400 font-light leading-relaxed line-clamp-3 mb-4">
                    {art.excerpt}
                  </p>
                </div>

                {/* Meta */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{art.date}</span>
                  <span className="text-[#38bdf8] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Read Analysis <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-black border border-white/20 rounded-3xl shadow-2xl overflow-y-auto p-6 sm:p-10 text-white scrollbar-thin">
            {/* Close */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-[#0052FF]/20 text-[#38bdf8] border border-[#0052FF]/30 font-bold">
                  {activeArticle.topic}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {activeArticle.date || "01 Sep 2026"} · {activeArticle.duration || "4m read"}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4 leading-tight">
                {activeArticle.title}
              </h2>

              {activeArticle.excerpt && (
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  {activeArticle.excerpt}
                </p>
              )}
            </div>

            {/* Author */}
            <div className="py-4 border-y border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 mb-8">
              <div>
                <span className="text-white font-bold block">{activeArticle.author || "DigiNorth Intelligence"}</span>
                <span className="text-[10px] text-slate-500">Editorial & Systems Research</span>
              </div>

              <button
                onClick={() => handleShare(activeArticle)}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 flex items-center gap-1.5"
              >
                {copiedId === activeArticle.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share Link</span>
                  </>
                )}
              </button>
            </div>

            {/* Content */}
            <div className="text-slate-300 text-sm sm:text-base leading-relaxed font-light space-y-4">
              <div className="whitespace-pre-line">
                {activeArticle.content || `
### Strategic Executive Briefing
This briefing highlights frontier technical architecture, sovereign deployment requirements, and implementation benchmarks across national security and enterprise digital infrastructure.

#### Tactical Insights:
1. **Infrastructure Integration**: Upgrading legacy computational layers with high-density GPU accelerators and liquid cooling.
2. **Deterministic Security Protocols**: Continuous workload attestation and zero-trust perimeter verification.
3. **Decentralized Regional Execution**: Training and deploying localized models across edge hardware clusters.
                `}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-400">
                DigiNorth Intelligence · GovCIO Media Pattern
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="button-enchanced is-primary !py-2.5 !px-6 text-xs font-bold uppercase tracking-wider"
              >
                Close Report
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Newsletter & Submission Section */}
      <section className="py-24 px-6 bg-white/[0.02] border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] block mb-3 font-semibold">
            Intelligence Dispatch
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase mb-6 leading-tight">
            Stay Ahead of Frontier AI, Defense Tech, and <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#0052FF]">
              Sovereign Infrastructure.
            </span>
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Get curated briefings, research papers, and technology analysis delivered directly to your engineering team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/join" className="button-enchanced is-primary !py-3.5 !px-8 text-xs font-bold uppercase tracking-wider">
              <span>Subscribe to Intelligence</span>
            </Link>
            <Link href="/projects" className="button-enchanced is-outline text-xs font-medium text-slate-300 hover:text-white">
              Explore BuildLab Prototypes
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
