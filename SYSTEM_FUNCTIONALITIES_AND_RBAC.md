# System Functionalities & RBAC Specification
## DigiNorth: A Unified Technology & Innovation Ecosystem Platform

---

### Table of Contents
1. [System Functionalities (13 Core Modules)](#system-functionalities)
2. [User Roles & Account Responsibilities](#user-roles--account-responsibilities)
3. [Operational Environments](#operational-environments)
4. [User Categories & CRUD Permission Model](#user-categories--crud-permission-model)
5. [Important Permission Rules](#important-permission-rules)
6. [Role-Based Access Control (RBAC) Matrices (Modules 1–13)](#role-based-access-control-rbac-matrices)

---

## System Functionalities

### 1. Community Operations and Engagement
- Member onboarding and persona routing (Explorer, Learner, Builder, Mentor, Partner)
- Friday Community Meetups and knowledge-sharing sessions
- Saturday Starter Circle beginner workshops
- Northern regional tech hub and guild channel coordination
- Discussion forums, knowledge exchange, and builder networking
- Community-wide announcements and event notifications

### 2. Academy and Curriculum Management
- Track and curriculum authoring (Software, AI/Data, Cyber/Cloud, Product Design)
- Project-based learning modules and practical coding assignments
- Code review assignment and mentor feedback management
- Learner progress, attendance, and competency tracking
- Capstone project submission and verification
- Capability-based certificate issuance and digital credentialing

### 3. BuildLab and Venture Incubation
- Regional problem discovery and challenge statement repository
- Multidisciplinary squad formation (Engineers, Designers, PMs, Researchers)
- Sprint milestone tracking (Discovery, Research, Prototype, MVP, Launch)
- User interview records and field research validation
- Prototype usability testing and user feedback capture
- Venture readiness assessment and incubation pathway progression

### 4. Project Registry and Public Build Records
- Public build catalogue and project profile management
- Source repository integration (GitHub/GitLab) and commit tracking
- Artifact and deliverable repository (PRDs, wireframes, demo URLs, APIs)
- Contributor attribution and role verification
- Project lifecycle stage transitions (Discovery, Prototype, MVP, Production)
- Contributor recruitment callouts (“Open for UI/UX”, “Open for Backend”)

### 5. Hackathon and Sprint Operations
- Hackathon registration and builder eligibility screening
- Idea pitch and team composition validation
- 5-day lock-in sprint milestones and daily check-ins
- Live judging, rubric evaluation, and multi-criteria scoring
- Real-time leaderboard and winner determination
- Prize disbursement and post-hackathon grant tracking

### 6. Insights, Research, and Technical Publishing
- Technical research papers and editorial articles publishing
- Regional tech ecosystem data indexing and quarterly reports
- Multi-sector domain taxonomy (AI, Defense Tech, Cybersecurity, Cloud, Quantum)
- Audio briefings, podcasts, and video masterclass embeds
- Technical guide curation and open-source documentation
- Citation, peer review, and editorial sign-off workflows

### 7. Mentorship and Expert Advisory
- Mentor profile vetting, domain tagging, and availability configuration
- 1-on-1 and squad advisory session scheduling
- Office hours and specialized technical masterclasses
- Technical review assignment for code, architecture, and business models
- Advisory feedback logging and recommendation tracking
- Mentorship engagement analytics and impact monitoring

### 8. Central Command Centre
- Centralised ecosystem activity and cohort monitoring
- Cross-engine operational oversight (Community, Academy, BuildLab)
- Regional hub performance and chapter participation tracking
- Resource and grant allocation monitoring
- Operational health metrics and incident response
- Centralised executive reporting and ecosystem analytics

### 9. User, Identity, and Role Management
- Multi-persona user profile management
- Role-based access control (RBAC) and permission delegation
- Track lead, chapter lead, and operational personnel permissions
- Partner organisation and institutional tenant accounts
- Identity verification and builder screening
- User activity audit and session tracking

### 10. Data Management and Reporting
- Cohort performance and learning metrics storage
- Project submission and research repository
- Hackathon evaluation data archive
- Talent capability index and portfolio records
- System-wide data export (CSV, PDF, JSON)
- Centralised ecosystem data bank and longitudinal impact tracking

### 11. Alerts and Notifications
- Sprint milestone and submission deadline alerts
- Code review and feedback ready notifications
- Application status and admission notifications
- Community event and lock-in schedule reminders
- System security and unauthorized access alerts
- Sponsor digest and partner activity updates

### 12. Partner, Sponsor, and Hub Integration
- Anchor partner integration (Digi02 Tech Systems, Nethawk Solutions)
- Challenge sponsorship and corporate track configuration
- Cloud credits, compute, and hardware grant provisioning
- Academic institution and university chapter integration
- Co-branded showcase and demo day configuration
- Partner API webhooks and integration services

### 13. Security, Governance, and Audit Management
- Secure authentication (Multi-Factor Authentication, SSO, OAuth)
- Granular operational access control and authorization
- Append-only activity logs and operational audit trails
- Intellectual property protection and contributor agreement tracking
- Data privacy and regional compliance enforcement
- Integrity monitoring, plagiarism, and duplicate submission detection

---

## DigiNorth User Roles & Account Responsibilities
### Who Uses the Platform and What They Do

| Role / Account Type | Primary Responsibilities within DigiNorth |
| :--- | :--- |
| **Builder / Learner Account** | Enrolls in Academy learning tracks, attends Friday and Saturday community meetups, forms multidisciplinary squads in BuildLab, builds and pushes project deliverables, participates in hackathons, receives code reviews and mentor feedback, and showcases verified proof of work. Access is focused on assigned learning tracks, squad projects, personal portfolio, and peer community collaboration spaces. |
| **Administrator Account** | Oversees the overall DigiNorth platform, manages user accounts and access permissions, configures learning tracks and cohort admissions, supervises hackathon judging and prize allocations, monitors system operations, conducts security audits, and maintains platform-wide configurations. This user has platform-level oversight and administrative governance privileges. |
| **Mentor / Expert Account** | Conducts code reviews, architectural critiques, and product assessments. Holds office hours and 1-on-1 advisory sessions, evaluates capstones and hackathon submissions, authors technical guides, and guides squads on technical feasibility. Access is focused on assigned mentees, review queues, judging rubrics, and technical publication tools. |
| **Organisation Account** | Represents an organisation registered on DigiNorth, including anchor corporate partners (Digi02 Tech Systems, Nethawk Solutions), regional tech hubs, university chapters, and institutional sponsors. Manages its organizational profile, sponsored innovation challenges, hardware/cloud grant allocations, and local cohort personnel. Access is restricted to the organisation's own challenges, grants, local hub members, and sponsored tracks. |

---

## Operational Environments
DigiNorth operates across two primary environments:

1. **DigiNorth Command Center (DN_CC)**: Handles account management, organisational administration, user permissions, cohort admissions, curriculum governance, venture incubation oversight, and ecosystem reporting.
2. **DigiNorth Builder Studio & Workspace (DN_BSW)**: Handles community engagement, practical learning modules, multidisciplinary squad collaboration, code/prototype repositories, hackathon war-rooms, and project submissions.

---

## User Categories & CRUD Permission Model

### User Categories
The following user categories are recognized in the DigiNorth access model:

| Code | User Role | Description |
| :---: | :--- | :--- |
| **BLD** | Builder / Learner Account | Engages in learning tracks, squad collaboration, project development, hackathon sprints, and peer community forums within their active enrollments and assignments. |
| **ADM** | Platform Administrator Account | Administers DigiNorth platform accounts, permissions, cohort admissions, curriculum standards, ecosystem integrations, records, and system-wide oversight. Administrative access does not automatically authorise live code merges or judging votes. |
| **MTR** | Mentor / Technical Expert Account | Provides specialized technical mentorship, performs code and architectural reviews, evaluates hackathon submissions, holds office hours, and contributes expert research. |
| **ORG** | Organisation Account | Represents an organisation tenant (corporate anchor, regional hub, or university chapter). Manages its own personnel, local builders, sponsored tracks, grants, and organisation-level settings. |

### CRUD Permission Legend
CRUD permissions apply to records and configuration items:

| Code | Permission | Description |
| :---: | :--- | :--- |
| **C** | Create | Create a new record, entry, project draft, proposal, or configuration item. |
| **R** | Read | View or retrieve existing records, submissions, metrics, curriculum, or reports. |
| **U** | Update | Modify an existing record, project specification, sprint milestone, or configuration. |
| **D** | Delete | Remove a record where retention, academic accreditation, legal, and operational policies permit. |
| **O** | Operate / Execute | Perform an authorised live operational action, such as project submission, code merge, judging score submission, capstone sign-off, or grant disbursement. O is separate from CRUD. |
| **—** | No Access | No default permission for the functionality. |

> **Permission combinations:** Letters are combined to show independent permissions. For example, **CRU** means Create, Read and Update; **CRUD** means all four record permissions; **RO** means Read and Operate. A permission not shown is not granted.

---

## Important Permission Rules

1. **CRUD permissions are independent.** Read does not automatically grant Create, Update or Delete.
2. **O is a separate operational privilege.** Project submission, live hackathon judging, capstone graduation certification, code deployment, and grant allocation privileges must be explicitly assigned to an appropriately authorised user.
3. **Platform Administrator oversight does not automatically grant live squad builder authority.** Administrative functions, squad-level code authorship, and independent judging evaluations must remain separate.
4. **Builder access is limited to assigned squads, enrolled courses, registered hackathon teams, and personal records.** Organisation-wide or platform-wide administrative access is not implied.
5. **Organisation permissions are tenant-scoped.** An Organisation account may manage only its own personnel, local builders, sponsored challenges, and institutional records unless explicit cross-organisation access is approved.
6. **Mentor and Partner access is limited to assigned scopes.** Partner access is restricted to sponsored challenges, talent matching, and approved showcases. Access to private builder IP, unreleased code repositories, or peer partners' records requires explicit authorisation.
7. **Delete does not mean unrestricted physical erasure.** Academic records, capstone evaluations, project submission histories, code audits, and hackathon scores must follow retention, archival, accreditation, and legal policies.
8. **Activity logs, evaluation scorecards, and operational audit trails should be append-only.** Standard users may view permitted logs but must not update or delete them.
9. **Data export permission does not bypass the access restrictions on the underlying records.** Exports must preserve the same organisation and assignment scope.
10. **An asterisk (\*) marks scope-limited access,** such as access to an account holder's own squad, assigned review cohort, enrolled learning track, or local partner chapter.
11. **All permissions are subject to authentication,** role assignment, identity screening, squad membership, track prerequisites, code of conduct compliance, and applicable partnership agreements.

---

## Role-Based Access Control (RBAC) Matrices

### 1. Community Operations and Engagement
| Functionality | BLD | ADM | MTR | ORG |
| :--- | :---: | :---: | :---: | :---: |
| Member onboarding and pathway routing | CRU* | CRUD | R | CRU* |
| Friday Meetups & Starter Circle scheduling | R | CRUD | R | CRU* |
| Regional hub and guild channel coordination | R* | CRUD | R* | CRU* |
| Discussion forums and builder networking | CRU | CRUD | CRU | CRU* |
| Community announcements and broadcasts | R | CRUD | R | CRU* |
| Multi-chapter and local hub management | — | CRUD | — | CRU* |

### 2. Academy and Curriculum Management
| Functionality | BLD | ADM | MTR | ORG |
| :--- | :---: | :---: | :---: | :---: |
| Track and curriculum authoring | — | CRUD | CRU* | R* |
| Project-based learning and assignment workflows | RO* | CRUD | CRU* | R* |
| Code review assignment and peer feedback loops | CR* | CRUD | CRU* | R* |
| Learner progress and competency tracking | R* | CRUD | RU* | R* |
| Capstone project submission and verification | CR* | CRUD | RO* | R* |
| Certificate of capability and credentialing | R* | CRUD | RO* | R* |

### 3. BuildLab and Venture Incubation
| Functionality | BLD | ADM | MTR | ORG |
| :--- | :---: | :---: | :---: | :---: |
| Regional problem and challenge repository | CR* | CRUD | CRU* | CRU* |
| Multidisciplinary squad formation and team matching | CRU* | CRUD | R* | CRU* |
| Sprint milestone and progress tracking | CRU* | CRUD | RU* | R* |
| Field research and user validation recording | CRU* | CRUD | R* | R* |
| Prototype user-testing and feedback capture | CRU* | CRUD | RU* | R* |
| Venture readiness scoring and incubation pathway | R* | CRUD | RO* | R* |

### 4. Project Registry and Public Build Records
| Functionality | BLD | ADM | MTR | ORG |
| :--- | :---: | :---: | :---: | :---: |
| Public project profile and catalogue | CRU* | CRUD | R | CRU* |
| Source repository integration (GitHub/GitLab) | RO* | CRUD | R* | R* |
| Technical deliverable and artifact storage | CRU* | CRUD | R* | R* |
| Contributor attribution and role verification | CR* | CRUD | RU* | RU* |
| Project stage lifecycle management | RO* | CRUD | RO* | RU* |
| Open contribution callouts and recruitment | CRU* | CRUD | R* | CRU* |

### 5. Hackathon and Sprint Operations
| Functionality | BLD | ADM | MTR | ORG |
| :--- | :---: | :---: | :---: | :---: |
| Hackathon registration and screening | CR* | CRUD | R* | CRU* |
| Team formation and idea submission | CRU* | CRUD | R* | R* |
| Lock-in sprint check-ins and milestones | RO* | CRUD | RO* | R* |
| Live judging, rubric evaluation, and scoring | — | CRUD | O* | R* |
| Leaderboard and winner determination | R | CRUD | RO* | R |
| Prize disbursement and post-hackathon grants | R* | CRUD | — | RO* |

### 6. Insights, Research, and Technical Publishing
| Functionality | BLD | ADM | MTR | ORG |
| :--- | :---: | :---: | :---: | :---: |
| Research paper and editorial publishing | CR* | CRUD | CRU* | CRU* |
| Regional tech ecosystem data indexing | R | CRUD | RU* | RU* |
| Multi-sector domain taxonomy management | R | CRUD | R* | R |
| Multimedia and podcast briefing integration | R | CRUD | CRU* | CRU* |
| Technical guide curation and documentation | CR* | CRUD | CRU* | CRU* |
| Citation, peer review, and editorial sign-off | — | CRUD | RO* | — |

### 7. Mentorship and Expert Advisory
| Functionality | BLD | ADM | MTR | ORG |
| :--- | :---: | :---: | :---: | :---: |
| Mentor onboarding and domain vetting | — | CRUD | CRU* | R* |
| 1-on-1 and squad advisory session scheduling | RO* | CRUD | RO* | R* |
| Office hours and group masterclass management | R* | CRUD | CRU* | CRU* |
| Reviewer assignment for code and architecture | R* | CRUD | RO* | R* |
| Advisory feedback logging and tracking | R* | CRUD | CRU* | R* |
| Mentorship impact and engagement analytics | — | CRUD | R* | R* |

### 8. Central Command Centre
| Functionality | BLD | ADM | MTR | ORG |
| :--- | :---: | :---: | :---: | :---: |
| Centralised ecosystem activity monitoring | — | CRUD | R* | R* |
| Cross-engine operational oversight | — | CRUD | — | R* |
| Regional hub performance tracking | — | CRUD | — | R* |
| Resource and grant allocation monitoring | — | CRUD | — | R* |
| Operational health metrics and incident alerts | — | CRUD | — | R* |
| Centralised executive reporting | — | CRUD | — | CRU* |

### 9. User, Identity, and Role Management
| Functionality | BLD | ADM | MTR | ORG |
| :--- | :---: | :---: | :---: | :---: |
| User and organisation profile management | RU* | CRUD | RU* | CRU* |
| Role-based access control and permissions | — | CRUD | — | R* |
| Personnel hierarchy and track lead permissions | — | CRUD | — | RU* |
| Hub and institutional tenant administration | — | CRUD | — | CRU* |
| Account verification and identity screening | RU* | CRUD | RU* | RU* |
| User activity audit and session tracking | — | CRUD | — | R* |

### 10. Data Management and Reporting
| Functionality | BLD | ADM | MTR | ORG |
| :--- | :---: | :---: | :---: | :---: |
| Cohort performance and learning metrics | R* | CRUD | R* | R* |
| Project submission and research repository | CRU* | CRUD | R* | R* |
| Hackathon evaluation data archive | R* | CRUD | R* | R* |
| Talent capability index and portfolio records | CRU* | CRUD | R* | R* |
| System-wide data export (CSV, PDF, JSON) | R* | CRUD | R* | CRU* |
| Centralised ecosystem data bank | — | CRUD | R* | R* |

### 11. Alerts and Notifications
| Functionality | BLD | ADM | MTR | ORG |
| :--- | :---: | :---: | :---: | :---: |
| Sprint milestone and deadline alerts | R* | CRUD | R* | R* |
| Code review and feedback ready notifications | R* | CRUD | R* | R* |
| Application status and admission notifications | R* | CRUD | R* | R* |
| Community event and lock-in reminders | R | CRUD | R | CRU* |
| System security and anomalous access alerts | R* | CRUD | R* | R* |
| Sponsor digest and partner activity updates | — | CRUD | R* | R* |

### 12. Partner, Sponsor, and Hub Integration
| Functionality | BLD | ADM | MTR | ORG |
| :--- | :---: | :---: | :---: | :---: |
| Anchor partner portal configuration | — | CRUD | — | CRU* |
| Challenge sponsorship and corporate tracks | R | CRUD | R* | CRU* |
| Cloud credits, compute, and hardware grants | R* | CRUD | — | RO* |
| Academic institution and university chapters | — | CRUD | — | CRU* |
| Co-branded showcase and demo day configuration | R | CRUD | R* | CRU* |
| Partner API webhooks and data integration | — | CRUD | — | CRU* |

### 13. Security, Governance, and Audit Management
| Functionality | BLD | ADM | MTR | ORG |
| :--- | :---: | :---: | :---: | :---: |
| Secure authentication (MFA, SSO, OAuth) | RO* | CRUD | RO* | RO* |
| Granular operational access control | — | CRUD | — | R* |
| Append-only logs and operational audit trails | — | CRUD | — | R* |
| Intellectual property and contributor agreements | RO* | CRUD | RO* | RO* |
| Data privacy and compliance enforcement | R* | CRUD | R* | R* |
| Integrity monitoring and anti-plagiarism checks | — | CRUD | RO* | R* |

---

*Document generated for DigiNorth Ecosystem Platform.*
