export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectStat {
  value: number;
  suffix: string;
  label: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
  icon: 'dashboard' | 'ai' | 'auth' | 'chat' | 'video' | 'search' | 'community' | 'security' | 'database';
}

export interface ProjectSlide {
  title: string;
  description: string;
  category: string;
  tag: string;
  image: string; // path relative to /public e.g. /images/talent-nexus/dashboard.png
}

export interface Project {
  slug: string;
  isFlagship: boolean;
  name: string;
  oneLiner: string;
  role: string;
  timeline: string;
  techSummary: string[];
  primaryAchievement: string;
  githubUrl: string;
  liveUrl: string;

  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];

  stats: ProjectStat[];
  slides: ProjectSlide[];
  features: ProjectFeature[];
  highlights: string[];

  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    infrastructure: string[];
    tooling: string[];
  };

  metrics?: ProjectMetric[];

  narrative: {
    problem: string;
    goals: string[];
    architecture: {
      frontend: string;
      backend: string;
      database: string;
    };
    decisions: Array<{
      choice: string;
      reason: string;
      tradeoff: string;
    }>;
    performance: string;
    security: string;
    challenges: string;
    results: string[];
    lessonsLearned: string;
  };
}

export const projects: Project[] = [
  {
    slug: "zashly",
    isFlagship: true,
    name: "Zashly",
    oneLiner: "A real-time social platform with group chat, direct messaging, video calling, and ephemeral stories. Built with Socket.IO for messaging and Stream Video SDK for WebRTC calls.",
    role: "Full-Stack Software Engineer",
    timeline: "2024",
    techSummary: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO", "WebRTC", "Zustand", "JWT"],
    primaryAchievement: "Integrated Socket.IO for bidirectional messaging and Stream Video SDK for WebRTC peer-to-peer video calls within a unified React client.",
    githubUrl: "https://github.com/zaid-husain/Zashly",
    liveUrl: "https://zashly.vercel.app/",
    seoTitle: "Zashly — Real-Time Chat Platform by Zaid Husain | Case Study",
    seoDescription: "Explore Zashly, a real-time chat and social networking platform built by Zaid Husain using the MERN stack, Socket.IO, and WebRTC.",
    seoKeywords: ["Zashly", "Zaid Husain Zashly", "Real-Time Chat Platform", "MERN Stack Chat App", "WebRTC Application", "Socket.IO React"],

    stats: [
      { value: 4, suffix: "", label: "Core Features" },
      { value: 3, suffix: "", label: "MongoDB Collections" },
      { value: 140, suffix: "+", label: "Git Commits" },
      { value: 2, suffix: "", label: "Realtime Protocols" }
    ],

    slides: [
      {
        title: "Group Chat",
        description: "Users create group channels and send messages in real time. Socket.IO emits events to all room members. Unread counts update on new messages.",
        category: "Messaging",
        tag: "Socket.IO",
        image: "/images/zashly/group-chat.png"
      },
      {
        title: "Video & Voice Calls",
        description: "One-click video call initiated through Stream Video SDK. Peer connection is negotiated via WebRTC. Supports mute, camera toggle, and call end.",
        category: "Video Calling",
        tag: "WebRTC / Stream",
        image: "/images/zashly/group-chat.png"
      },
      {
        title: "Stories",
        description: "Users post 24-hour ephemeral stories. A cron-like TTL on the MongoDB document automatically marks stories as expired after 24 hours.",
        category: "Stories",
        tag: "Ephemeral Media",
        image: "/images/zashly/group-chat.png"
      },
      {
        title: "Online Presence",
        description: "When a user connects, their socket ID is stored. The presence list updates for all connected clients when anyone joins or leaves.",
        category: "Presence",
        tag: "Realtime State",
        image: "/images/zashly/group-chat.png"
      }
    ],

    features: [
      {
        title: "Real-time Chat",
        description: "Socket.IO room-based messaging. Messages are saved to MongoDB and emitted to all room members simultaneously.",
        icon: "chat"
      },
      {
        title: "Video Calling",
        description: "Stream Video SDK manages WebRTC signaling, ICE candidates, and TURN server relay. The client just calls joinCall() and renders the video feed.",
        icon: "video"
      },
      {
        title: "Ephemeral Stories",
        description: "Stories have a createdAt timestamp. On fetch, expired stories are filtered out server-side. No separate deletion job needed.",
        icon: "community"
      },
      {
        title: "Online Presence",
        description: "Socket.IO disconnect events update a shared presence map. Connected clients receive an updated online-users list on any change.",
        icon: "security"
      }
    ],

    highlights: [
      "Used Socket.IO rooms to scope chat events — a message emit only reaches users in that room, not all connected clients",
      "Integrated Stream Video SDK to handle WebRTC complexity (STUN/TURN, ICE negotiation) rather than implementing signaling from scratch",
      "Stored messages in MongoDB with a conversationId index so history queries fetch only the relevant thread",
      "Managed global socket state in Zustand so any component can access the connection without prop drilling",
      "Added cleanup in useEffect to remove socket listeners on component unmount and prevent duplicate event handlers"
    ],

    techStack: {
      frontend: ["React", "Zustand", "Tailwind CSS", "Stream Video React SDK"],
      backend: ["Node.js", "Express.js", "Socket.IO", "JWT"],
      database: ["MongoDB", "Mongoose"],
      infrastructure: ["Vercel (client)", "Render (server)"],
      tooling: ["Git", "Postman"]
    },

    metrics: [
      { label: "Messaging", value: "Socket.IO Rooms" },
      { label: "Video", value: "Stream SDK (WebRTC)" },
      { label: "State", value: "Zustand" }
    ],

    narrative: {
      problem: "Building a chat app is straightforward. Building one with video calls, stories, and real-time presence — all sharing the same React client and backend — requires careful separation of concerns between Socket.IO events, REST API calls, and the Stream Video SDK lifecycle.",
      goals: [
        "Implement room-based Socket.IO messaging with persistent history in MongoDB.",
        "Integrate Stream Video SDK for peer video calls without managing raw WebRTC signaling manually.",
        "Track online presence across all connected clients using socket connection/disconnection events."
      ],
      architecture: {
        frontend: "React with Zustand for global socket state. Stream Video SDK's React hooks manage the call UI. Tailwind CSS for responsive layout.",
        backend: "Node.js + Express for REST endpoints. A separate Socket.IO server instance runs alongside Express, sharing the same HTTP server. JWT validates socket connection at handshake.",
        database: "MongoDB with three main collections: users, messages (indexed on conversationId), and stories (filtered by createdAt TTL)."
      },
      decisions: [
        {
          choice: "Stream Video SDK over raw WebRTC",
          reason: "Implementing WebRTC from scratch means managing SDP offers, ICE candidates, TURN server configuration, and reconnection logic. Stream handles all of this and provides tested React hooks.",
          tradeoff: "Introduces a third-party dependency and requires a Stream account with API keys. Adds ongoing cost if scaled to many concurrent calls."
        },
        {
          choice: "Zustand for socket state",
          reason: "The socket connection is created once but needs to be accessible from the chat list, message thread, and presence indicator — all in different parts of the component tree. Zustand avoids prop drilling and Context re-render issues.",
          tradeoff: "Requires discipline to keep socket slice separate from UI state to avoid accidental re-renders on every socket event."
        }
      ],
      performance: "Socket.IO rooms ensure events are only broadcast to relevant users, not all connected clients. Message history uses MongoDB's conversationId index for efficient fetch.",
      security: "JWT token is validated during Socket.IO handshake before the connection is accepted. Unauthenticated socket connections are rejected at the server.",
      challenges: "Managing the lifecycle of Stream Video SDK alongside Socket.IO — ensuring call state cleanup on disconnect and preventing stale socket listeners from firing after component unmount.",
      results: [
        "Working platform with group chat, direct messaging, video calls, stories, and online presence — all functional in the same session.",
        "Socket listeners are properly cleaned up in useEffect return functions — no duplicate messages on re-render.",
        "Video call flow (invite → join → end → cleanup) works end-to-end using Stream's SDK."
      ],
      lessonsLearned: "When integrating two real-time systems (Socket.IO + WebRTC SDK), isolate each one in its own state slice and define clear ownership. Letting them share state leads to race conditions that are extremely hard to debug."
    }
  },
  {
    slug: "zashio",
    isFlagship: false,
    name: "Zashio",
    oneLiner: "An AI-powered campus placement and recruitment platform. Students apply to jobs, recruiters manage pipelines, and admins oversee the full hiring workflow — all behind role-based access control.",
    role: "Full-Stack Software Engineer",
    timeline: "2024",
    techSummary: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Supabase", "Tailwind CSS", "JWT"],
    primaryAchievement: "Built multi-role authentication with JWT and Supabase Row-Level Security, separating Student, Recruiter, and Admin data at the database layer.",
    githubUrl: "https://github.com/zaid-husain/Zashio",
    liveUrl: "https://zashio.vercel.app/",
    seoTitle: "Zashio — AI Recruitment Platform by Zaid Husain | Case Study",
    seoDescription: "Explore Zashio, an AI-powered campus placement and recruitment platform built by Zaid Husain using PostgreSQL, Supabase, React and Node.js.",
    seoKeywords: ["Zashio", "Zaid Husain Zashio", "AI Recruitment Platform", "Campus Placement Platform", "Supabase React Next", "PostgreSQL Node.js"],

    stats: [
      { value: 3, suffix: "", label: "User Roles (RBAC)" },
      { value: 5, suffix: "+", label: "API Route Groups" },
      { value: 120, suffix: "+", label: "Git Commits" },
      { value: 4, suffix: "", label: "Core DB Entities" }
    ],

    slides: [
      {
        title: "Recruiter Dashboard",
        description: "Recruiters view all job postings they created, browse applicants per job, and update application statuses. Data is scoped to their account via Supabase RLS.",
        category: "Recruiter View",
        tag: "Dashboard",
        image: "/images/talent-nexus/recruiter-dashboard.png"
      },
      {
        title: "Student Application Portal",
        description: "Students browse active job listings, submit applications, and track their status. Each student only sees their own submissions.",
        category: "Student View",
        tag: "Application Flow",
        image: "/images/talent-nexus/recruiter-dashboard1.png"
      },
      {
        title: "Admin Control Panel",
        description: "Admins manage all users, companies, and job postings. They can promote or revoke recruiter access and view the full application log.",
        category: "Admin View",
        tag: "Control Panel",
        image: "/images/talent-nexus/2.png"
      },
      {
        title: "Role-Based Auth Flow",
        description: "JWT tokens carry the user role. Route guards on both client and server check the role before rendering any view or processing any request.",
        category: "Security",
        tag: "Auth / RBAC",
        image: "/images/talent-nexus/recruiter-dashboard.png"
      }
    ],

    features: [
      {
        title: "Three Separate Dashboards",
        description: "Student, Recruiter, and Admin each get a completely separate interface. React Router guards prevent cross-role page access.",
        icon: "dashboard"
      },
      {
        title: "Supabase Row-Level Security",
        description: "Database-level policies enforce that recruiters only query their own jobs and applicants — not a client-side filter, enforced at Postgres.",
        icon: "auth"
      },
      {
        title: "Job Application Workflow",
        description: "Students apply to jobs, recruiters move applicants through stages (Applied → Shortlisted → Rejected). Status changes persist to the DB.",
        icon: "ai"
      },
      {
        title: "JWT Auth with Refresh",
        description: "Stateless JWT authentication. Refresh tokens are handled server-side to maintain sessions without forcing re-logins on tab refresh.",
        icon: "security"
      }
    ],

    highlights: [
      "Implemented JWT authentication with role claims (student / recruiter / admin) checked on every protected route",
      "Configured Supabase Row-Level Security policies so each recruiter's query is automatically scoped to their company",
      "Designed a normalized PostgreSQL schema: Users, Companies, Jobs, Applications — with foreign key constraints",
      "Built React Router v6 protected routes that redirect based on JWT role without exposing other dashboards",
      "Validated all API inputs with express-validator to prevent malformed data reaching the database"
    ],

    techStack: {
      frontend: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router v6"],
      backend: ["Node.js", "Express.js", "JWT", "express-validator"],
      database: ["PostgreSQL", "Supabase", "Supabase RLS"],
      infrastructure: ["Vercel"],
      tooling: ["Git", "Postman", "ESLint"]
    },

    metrics: [
      { label: "Auth", value: "JWT + Supabase Auth" },
      { label: "Database", value: "PostgreSQL (Relational)" },
      { label: "Access Control", value: "Row-Level Security" }
    ],

    narrative: {
      problem: "Campus placement offices manage hundreds of student applications manually — spreadsheets, email threads, and no unified tracking system. Students have no visibility into their application status and recruiters have no structured way to compare candidates.",
      goals: [
        "Build separate, purpose-built interfaces for Students, Recruiters, and Admins without exposing each other's data.",
        "Enforce access control at both the API and database layer — not just in the UI.",
        "Give recruiters a simple workflow to post jobs, review applicants, and update statuses."
      ],
      architecture: {
        frontend: "Vite + React with TypeScript. Protected routes using React Router v6. Each role gets its own route tree. Tailwind CSS for layout.",
        backend: "Node.js + Express REST API. Middleware validates JWT on every protected endpoint and extracts the role from the token payload before processing.",
        database: "PostgreSQL on Supabase. Four core tables: users, companies, jobs, applications. Supabase RLS policies ensure database-level isolation per user."
      },
      decisions: [
        {
          choice: "PostgreSQL over MongoDB",
          reason: "The data has clear relationships: a job belongs to a company, an application links a student to a job. Relational constraints prevent orphaned records and make queries straightforward with JOINs.",
          tradeoff: "Requires migration management and a fixed schema, which slows down early iteration compared to a document store."
        },
        {
          choice: "Supabase RLS over API-level filtering",
          reason: "If authorization logic lives only in the API layer, a bug could expose another recruiter's applicants. RLS enforces it at the database — even a direct DB connection respects the policy.",
          tradeoff: "RLS policies can be difficult to debug and require learning Supabase's policy syntax carefully."
        }
      ],
      performance: "Vite's code splitting keeps the initial bundle lean. Each role's dashboard is a separate route chunk, so a student's session never loads recruiter-specific code.",
      security: "Passwords hashed with bcrypt. JWT contains role and userId — verified server-side on every request. Supabase RLS adds a second enforcement layer at the database.",
      challenges: "Getting RLS policies to work correctly with the JWT claims required careful configuration of Supabase's auth hooks and testing with multiple concurrent sessions.",
      results: [
        "Working platform with three fully separated role experiences and complete job-application workflow.",
        "Zero cross-role data leakage — verified by logging in as different users and inspecting API responses.",
        "Clean schema design that could be extended with more entities (interviews, feedback) without restructuring."
      ],
      lessonsLearned: "Authorization belongs at the data layer, not just the UI. Building RLS early meant I never had to audit the API for data leaks — the database simply refused unauthorized queries."
    }
  },
  {
    slug: "zashub",
    isFlagship: false,
    name: "Zashub",
    oneLiner: "A community and neighborhood platform built with the MERN stack. Users discover businesses, browse events, and business owners can register their listing through an authenticated form.",
    role: "Full-Stack Software Engineer",
    timeline: "2024",
    techSummary: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "JWT", "React Router"],
    primaryAchievement: "Built a full MERN application with authenticated business listing submission, category-based filtering, and a responsive layout optimized for mobile use.",
    githubUrl: "https://github.com/zaid-husain/Zashub",
    liveUrl: "https://zashub.vercel.app/",
    seoTitle: "Zashub — Community Platform by Zaid Husain | Case Study",
    seoDescription: "Explore Zashub, a community and neighborhood platform built by Zaid Husain using the MERN stack, offering business directories and events.",
    seoKeywords: ["Zashub", "Zaid Husain Zashub", "Community Platform", "MERN Stack Community App", "Local Business Directory", "Neighborhood Platform React"],

    stats: [
      { value: 3, suffix: "", label: "User-Facing Modules" },
      { value: 2, suffix: "", label: "MongoDB Collections" },
      { value: 85, suffix: "+", label: "Git Commits" },
      { value: 100, suffix: "%", label: "Mobile Responsive" }
    ],

    slides: [
      {
        title: "Business Directory",
        description: "A browsable list of local businesses fetched from MongoDB. Users filter by category using query parameters sent to the Express API.",
        category: "Discovery",
        tag: "Business Listings",
        image: "/images/home-town-hub/directory.png"
      },
      {
        title: "Community Events Board",
        description: "Local events displayed in chronological order. Event data is stored as a separate MongoDB collection and served via a dedicated API route.",
        category: "Community",
        tag: "Events",
        image: "/images/home-town-hub/directory.png"
      },
      {
        title: "Category Search & Filter",
        description: "Client sends a category query param to the Express API. Mongoose applies a regex filter on the category field and returns matching businesses.",
        category: "Search",
        tag: "API Query",
        image: "/images/home-town-hub/directory.png"
      },
      {
        title: "Business Registration",
        description: "Authenticated owners submit a form that POSTs to the API. The server validates the payload, checks the JWT, and saves to MongoDB.",
        category: "Owner Flow",
        tag: "Auth + Form",
        image: "/images/home-town-hub/directory.png"
      }
    ],

    features: [
      {
        title: "Business Directory",
        description: "Fetches all listings from MongoDB on page load. Category filter sends a GET request with query params — no client-side filtering needed.",
        icon: "search"
      },
      {
        title: "Events Board",
        description: "Separate MongoDB collection for events. Sorted by date ascending so upcoming events appear first.",
        icon: "community"
      },
      {
        title: "Category Filter",
        description: "Mongoose regex query on the category field returns partial matches. Useful when businesses list multiple comma-separated categories.",
        icon: "database"
      },
      {
        title: "Owner Registration",
        description: "Protected POST route validates the JWT, checks required fields, then writes the listing to MongoDB. Owners can update their own listing only.",
        icon: "auth"
      }
    ],

    highlights: [
      "Built REST API with Express.js — separate route files for businesses, events, and auth to keep the codebase organized",
      "Used Mongoose schema validation to enforce required fields before any write reaches MongoDB",
      "Implemented JWT-protected POST routes so only authenticated owners can create or update their listings",
      "Category filter uses a Mongoose regex query on the server so filtering works across partial and case-insensitive matches",
      "Responsive layout built with Tailwind CSS — tested on mobile, tablet, and desktop breakpoints"
    ],

    techStack: {
      frontend: ["React", "Tailwind CSS", "React Router v6", "Context API"],
      backend: ["Node.js", "Express.js", "JWT", "express-validator"],
      database: ["MongoDB", "Mongoose"],
      infrastructure: ["Vercel (client)", "Render (API server)"],
      tooling: ["Git", "Postman"]
    },

    metrics: [
      { label: "Architecture", value: "MERN Stack" },
      { label: "Auth", value: "JWT Bearer Token" },
      { label: "Database", value: "MongoDB + Mongoose" }
    ],

    narrative: {
      problem: "Most small local businesses in a neighborhood have no digital presence. Residents rely on word of mouth to find services. There's no single place to discover businesses, see upcoming events, or register a new listing.",
      goals: [
        "Build a simple, browsable business directory backed by a real API and database.",
        "Allow authenticated business owners to submit and manage their own listings.",
        "Keep the UI fast and mobile-friendly since most local users browse on phones."
      ],
      architecture: {
        frontend: "React SPA with React Router v6. Context API holds the auth state (token + user). Tailwind CSS for responsive layout across all screen sizes.",
        backend: "Express.js with separate route modules: /api/businesses, /api/events, /api/auth. express-validator validates POST body before DB write.",
        database: "MongoDB with two main collections: businesses and events. Mongoose schemas enforce field types and required fields at the ORM level."
      },
      decisions: [
        {
          choice: "MongoDB for listings data",
          reason: "Business listings don't have complex relationships — each document can store all the business info (name, category, hours, contact) in one place. A document store is a natural fit.",
          tradeoff: "No enforced referential integrity. If a user account is deleted, their business listings remain orphaned in the collection."
        },
        {
          choice: "Server-side regex filter instead of client-side filter",
          reason: "With a large number of listings, returning everything to the client and filtering in JavaScript would be wasteful. The API accepts a category query param and filters at the database level.",
          tradeoff: "Regex queries on unindexed fields perform a full collection scan. Adding an index on the category field would be the next step for scalability."
        }
      ],
      performance: "The client only fetches listings matching the current filter, not the full dataset. This keeps the API response payload small on mobile connections.",
      security: "JWT validated on all write routes (POST, PATCH). Owners can only modify listings where the ownerId matches their token userId — enforced in the route handler.",
      challenges: "Handling the case where a business updates their category — the category field is a string, so old data with different casing wouldn't match the filter. Solved with case-insensitive regex.",
      results: [
        "End-to-end working application: users browse and search, owners register listings, events display correctly.",
        "Mobile-responsive layout that works on small screens without layout breakage.",
        "Clean route structure in Express that is easy to extend with more resource types."
      ],
      lessonsLearned: "Server-side filtering is always preferable to loading everything and filtering on the client. Even for small datasets, it's the right habit and the architecture that scales."
    }
  }
];
