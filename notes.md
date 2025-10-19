# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 54.81.96.130
Launching my AMI I initially put it on a private subnet. Even though it had a public IP address and the security group was right, I wasn't able to connect to it.

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

This was easy. I was careful to use the correct structural elements such as header, footer, main, nav, and form. The links between the three views work great using the `a` element.

The part I didn't like was the duplication of the header and footer code. This is messy, but it will get cleaned up when I get to React.

## CSS

This took a couple hours to get it how I wanted. It was important to make it responsive and Bootstrap helped with that. It looks great on all kinds of screen sizes.

Bootstrap seems a bit like magic. It styles things nicely, but is very opinionated. You either do, or you do not. There doesn't seem to be much in between.

I did like the navbar it made it super easy to build a responsive header.

```html
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```

## Introduction: 

- Git provides two valuable functions. First, it allows you to track versions of files in a directory. Second, it allows you to clone all of those versions to a different location, usually to a different computer. We are going to focus on tracking versions in this instruction and cover cloning repositories when we talk later about GitHub.
What is Git?

- Distributed version control system.

Two core functions:
  - Track versions of files in a directory (local repo).
  - Clone/version history to other locations/computers (covered later with GitHub).

- Initialize a repo: git init → creates hidden .git directory (stores all versions).

Basic Workflow: 
  - Create file: echo hello world > hello.txt
  - Check status: git status (shows untracked files)
  - Stage files: git add . (the . stages all untracked/changed files)
  - Commit staged changes: git commit -m "message"
  - Staging purpose: choose which files will be included in the next commit.


How commits work:
  - Commits are snapshots of staged files at commit time — think of them as “time machine” states for the whole directory (for staged files).
  - Committing often is good practice: helps recovery, collaboration, and shows progress.

Diffing changes:
  - Compare commits or revisions: git diff <commitA> <commitB>
  - Common shorthand: git diff HEAD HEAD~1 (compare current HEAD with previous commit)
  - Output shows removed (-) and added (+) lines.

Branches:
  - Create branch: git branch <branch-name>
  - Switch to branch: git checkout <branch-name>
  - Merge branch into current branch: git merge <branch-name>
  - Branching allows work on features in isolation and later merging; unused branches can simply be left unmerged.

Quick command reference:
  - git --version — check Git installed
  - git init — initialize repo
  - git status — show repo status
  - git add . — stage all changes
  - git commit -m "msg" — commit staged changes
  - git commit -am "msg" — stage tracked changes + commit
  - git log — view commit history
  - git diff <a> <b> — show differences
  - git branch <name> — create branch
  - git checkout <name|sha> — switch branch or checkout commit
  - git merge <branch> — merge another branch into current


Workflow:
  - git pull – Get latest version from GitHub.
  - Edit and save files locally.
  - git add . – Stage your changes.
  - git commit -m "meaningful message" – Commit changes.
  - git push – Upload commits to GitHub.  

- Pull (git pull) to sync your local version with GitHub changes.

Fetch vs Pull:
  - git fetch: Retrieves info about changes (does not modify local files).
  - git pull: Retrieves and merges the changes into your working directory.

Pull Requests (PRs)
  - Used to propose changes to a repository.
  Workflow:
    - Fork or clone a repo.
    - Make changes and commit.
    - Push to your fork.
    - Create a pull request to suggest merging your changes.

Value of Commit History:
  - Backup – Easily recover if your computer fails.
  - Portfolio – Show your coding work to employers.
  - Proof of Work – Demonstrates consistent authorship and progress.
  - Exploration – Use branches to test new ideas safely.
  - Experience – Learn the industry-standard tool for version control.

Best Practices for Development:
  - Pull latest code (git pull).
  - Implement and test small, cohesive code changes.
  - Commit and push frequently.
  - Repeat regularly — consistency is key.
  - Aim for multiple commits per workday.

| Command   | Description                  |
| --------- | ---------------------------- |
| `echo`    | Output text or variables     |
| `cd`      | Change directory             |
| `mkdir`   | Create a new directory       |
| `rmdir`   | Remove an empty directory    |
| `rm`      | Remove files                 |
| `mv`      | Move or rename files         |
| `cp`      | Copy files                   |
| `ls`      | List files                   |
| `curl`    | Command-line web client      |
| `grep`    | Search text using regex      |
| `find`    | Locate files                 |
| `top`     | Show running processes       |
| `df`      | Show disk usage              |
| `cat`     | Print file contents          |
| `less`    | View files interactively     |
| `wc`      | Count words/lines in a file  |
| `ps`      | Show running processes       |
| `kill`    | Stop a process               |
| `sudo`    | Run as administrator         |
| `ssh`     | Secure remote shell          |
| `scp`     | Secure file transfer         |
| `history` | Show command history         |
| `ping`    | Check if a site is reachable |
| `tracert` | Trace route to a host        |
| `dig`     | Display DNS info             |
| `man`     | View command manual          |


## The Internet
  Origins:
    - 1960s–70s: ARPANET created by the U.S. Department of Defense.
    - Goal: share information between universities.
    - Designed to survive nuclear attack via redundant network paths.
    - 1980s: National Science Foundation expands the network.
    - 1990s: Internet becomes publicly accessible → consumer explosion.
    - 2000s: Rapid growth with smartphones and connected devices.

  Governance:
    - IETF – Defines technical communication standards.
    - ICANN – Manages IP address space & DNS (Internet “address book”).
    - 2016: Control transitioned to a global nonprofit community.

## HTML (HyperText Markup Language)
  Inventor:
    - Tim Berners-Lee (CERN, 1980–1990).
  Purpose:
    - Share research documents via hyperlinks over ARPANET.

  Key Points:
    - Built on ideas from SGML (Standard Generalized Markup Language).
    - 1990: First web server built on a NeXT computer.
    - 1996: HTML specification given to W3C (World Wide Web Consortium).
    - Evolution: 18 original tags → 100+ in modern HTML.

## HTTP and URL
  - Developed by Tim Berners-Lee alongside HTML.
  - Purpose: Define how web documents are addressed and transmitted.

## CSS (Cascading Style Sheets)
- Inventor: Håkon Wium Lie (1994, CERN).

Purpose
  - Separate content (HTML) from visual design.
  - Prevent browsers from defining all visual styles.

Standardization
  - 1996: Became an official standard.
  - Early browser wars caused compatibility issues → fixed by CSS 2.1.

## JavaScript
- Creator: Brendan Eich (1995, Netscape).

- Purpose: Add interactivity and dynamic behavior to web pages.

Standardization
  - 1996: Handed to ECMA International → officially ECMAScript.
  - 2009: Major vendors align with ECMAScript 5.
  - 2015: ES6 introduces modern features (classes, modules, etc.).
  - Later versions named by release year (ES2016, ES2017, …).

## JavaScript Beyond the Browser
Node.js (2009)
  - Ryan Dahl – allows JS to run on servers.
  - Expanded JavaScript’s role to full-stack development.

Other Milestones
  - 2013: JSON standardized.
  - 2012: TypeScript introduced.
  - Transpilers: Enable other languages to compile into JavaScript.

## Stack
- A technology stack is the collection of technologies used to create and deliver a web application.
- Called a stack because the technologies are layered, each depending on the one below.

| Layer                         | Description                                                | Examples                             |
| ----------------------------- | ---------------------------------------------------------- | ------------------------------------ |
| **Web Framework (Top Layer)** | User-facing application logic and UI                       | React, Angular, Vue, Svelte          |
| **Web Server**                | Delivers the app to users and handles HTTP requests        | Caddy, Nginx, Apache                 |
| **Web Services / Backend**    | Provides APIs for authentication, data, and business logic | Node.js, Express                     |
| **Backend Services**          | Support systems for persistence, caching, and monitoring   | Databases, Logging, Monitoring tools |
| **Hosting / Infrastructure**  | Where the app runs                                         | AWS, Google Cloud, Azure             |

Example Tech Stack (Course Setup)
  - Frontend: React (web framework)
  - Web Server: Caddy
  - Hosting: AWS
  - Backend Runtime: Node.js
  - Database: MongoDB (hosted on MongoDB Atlas)

IP Addresses
  - Every device on the Internet must have an IP address (e.g., 128.187.16.184 for BYU).
  - IP = Internet Protocol address → unique numerical identifier for a device.

Domain Names
  - Humans prefer domain names (e.g., byu.edu) instead of numeric IPs.
  - The Domain Name System (DNS) translates domain names → IP addresses.

Routing and Connections
  - To connect, devices find a dynamic route across multiple hops in the network.
  - Each hop represents a router or network device forwarding data closer to its destination.
  - Once a route is found, data flows via the transport and application layers.

| Layer           | Example                | Purpose                                                |
| --------------- | ---------------------- | ------------------------------------------------------ |
| **Application** | HTTP, HTTPS, SMTP, FTP | Provides user-facing services (web, email, etc.)       |
| **Transport**   | TCP, UDP               | Breaks data into packets and ensures reliable delivery |
| **Internet**    | IP                     | Handles addressing and routing between devices         |
| **Link**        | Ethernet, WiFi, Fiber  | Deals with the physical transmission of data           |

## EC2

☁️ What is EC2?
  - Elastic Compute Cloud (EC2) = AWS’s virtual servers.
  - Lets you rent a web server without needing your own physical machine.
  - Servers are hosted in data centers (e.g., Virginia, Ohio, Dublin, Tokyo).
  - Each “instance” is a small computer that you can start, stop, or delete anytime.

🧱 Why Use EC2?
- Avoids using your personal laptop as a public server.
Provides:
  - Constant uptime.
  - Security isolation.
  - Scalable power (upgrade/downgrade easily).
  - Cheap, disposable servers for experiments.

⚙️ Steps to Create an EC2 Instance
1. Log into AWS Console.
2. Set region → US East (N. Virginia) - us-east-1.
3. Go to EC2 service → “Launch instance”.
4. Name the instance (e.g., ethan-web-v1).
5. Select AMI (custom class image):
ami-094c4a0be0b642a24 (or ami-018f3a022e128a6b2 for backup).
  - Includes: Ubuntu, Node.js, NVM, Caddy, and PM2.
6. Choose instance type → t3.micro, t3.nano, or t2.micro.
7. Create or select key pair (.pem file)
  - Needed for SSH access.
  - Store safely — never upload to GitHub.
8. Configure security group:
  - Allow SSH (22), HTTP (80), and HTTPS (443).
9. (Optional) For T3 instances, set Credit specification → Unlimited.
10. Launch instance.
After launch:
  - Wait until it shows “Running”.
  - Copy your public IP address (e.g., 3.22.63.37).
  - Visit http://[IP address] in a browser — you should see a default page.

🌐 Elastic IP (Permanent Address)
- Each restart gives a new IP address, unless you:
  1. Keep the server running, or
  2. Assign an Elastic IP (EIP) — keeps same address permanently.
💡 Notes:
  - First EIP is free while attached to a running instance.
  - Costs $0.005/hr if the instance is stopped.
  - To assign: EC2 Console → “Elastic IPs” → “Allocate” → “Associate with instance”.

## Domain
🧩 What Is a Domain Name?
  - A domain name is a human-readable address for an IP (e.g., google.com → 142.250.190.14).
  - Domain names are registered in a Domain Name Registry.
  - They follow a naming structure:
      subdomain.domain.tld
      e.g., blog.cs260.click
  
| Part                       | Example                          | Meaning                    |
| -------------------------- | -------------------------------- | -------------------------- |
| **Top-Level Domain (TLD)** | `.com`, `.edu`, `.org`, `.click` | Category/type of domain    |
| **Second-Level Domain**    | `byu`, `google`, `cs260`         | Registered main name       |
| **Subdomain**              | `travel`, `finance`, `blog`      | Optional, created by owner |

👤 Whois – Domain Ownership Info
  - Use whois to find registration info:
    - i.e. whois byu.edu
  Displays:
  - Registrant: Owner (e.g., BYU)
  - Admin Contact: For domain management
  - Tech Contact: For technical issues
  - Dates: Created, updated, and expiration

🌍 DNS – Domain Name System
  - The DNS maps domain names → IP addresses.
🧱 Record Types
  - Record	Meaning	Example
    1. A Record	Maps domain → IP	byu.edu → 128.187.16.184
    2. CNAME Record	Maps domain → another domain	byu.com → byu.edu
🧭 How Lookup Works
  - Browser checks local cache.
  - If not found → queries a DNS server.
  - DNS server checks its cache or asks an authoritative name server.
  - Returns IP address or an unknown domain error.
🕒 TTL (Time to Live):
  - Defines how long DNS info is cached (can range from 5 minutes to several days).

🧠 Summary
| Concept          | Description                                 |
| ---------------- | ------------------------------------------- |
| **Domain name**  | Human-readable identifier for an IP         |
| **DNS**          | System that maps domains to IPs             |
| **A Record**     | Domain → IP                                 |
| **CNAME Record** | Domain → Domain                             |
| **TTL**          | Time before DNS cache refresh               |
| **Whois**        | Command to see ownership info               |
| **ICANN**        | Governs domain standards                    |
| **Route 53**     | AWS service for domain registration and DNS |

## AWS Route 53 – Notes
  🔑 Purpose
    - IP addresses are not user-friendly or secure (HTTPS requires a domain).
    - Route 53: AWS service for:
    - Purchasing/leasing domain names.
    - Hosting domains on DNS servers.
    - Managing DNS records (A, CNAME, etc.).

## Caddy – Notes
🔹 What is Caddy?
  - A web server built with Go.
  - Automatically handles TLS/HTTPS certificates via LetsEncrypt.
  - Can serve static files or act as a reverse proxy to route requests to internal services.
  For this course:
    - Hosts static HTML/CSS/JS files.
    - Routes subdomain requests (e.g., simon.yourdomain) to Node.js services.
    - Handles HTTPS automatically.

| File / Directory | Purpose                                                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `~/Caddyfile`    | Main configuration file: defines routing of requests, static file paths, and reverse proxy rules. Usually preconfigured; rarely need to modify manually.                  |
| `~/public_html`  | Directory for static files served by Caddy. Linked to `/usr/share/caddy` as defined in `Caddyfile`. Example: `http://yourdomain/index.html` → `~/public_html/index.html`. |

Proxy Comparison Table:
| Feature           | Forward Proxy           | Reverse Proxy            |
| ----------------- | ----------------------- | ------------------------ |
| Placement         | In front of clients     | In front of servers      |
| Who it hides      | Client                  | Server                   |
| Common use        | Anonymity, filtering    | Load balancing, security |
| Awareness         | Client knows it         | Client unaware           |
| Request direction | Client → Proxy → Server | Client → Proxy → Server  |

- Key Insight: Both handle requests/responses; "reverse" refers to proxying the server instead of the client.
