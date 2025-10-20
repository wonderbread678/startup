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

## HTTPS, TLS, and Web Certificates
  🔐 Why HTTPS?
    - HTTP = non-secure; browsers warn ⚠ Not Secure.
    - HTTP transmits plain text, so anyone on the network can intercept sensitive data.
    - HTTPS encrypts traffic using TLS to protect privacy and integrity.
    - Modern web apps and HTTP/3 require HTTPS.
  
  2. TLS (Transport Layer Security)
    - Provides encryption for web communication.
    - Uses handshake to negotiate a shared secret between client and server.
    - Handshake includes:
      1. Client hello
      2. Server hello
      3. Certificate exchange
      4. Key verification
    - Example using curl:
      - curl -v -s https://byu.edu > /dev/null
    - Confirms:
      1. TLS version (e.g., TLSv1.3)
      2. Certificate details (domain, issuer, validity)
      3. Successful handshake

  3. Web Certificates
    - Issued by trusted Certificate Authorities (CAs).
    - Verifies that a domain is owned by the requester.
    - Historically expensive and needed per domain/subdomain.
    - Let's Encrypt revolutionized this:
      1. Free certificates.
      2. Automatic renewal using ACME protocol.
      3. Dynamically generates certificates for domain ownership verification.
    - Certificate Verification Steps (via ACME/Let's Encrypt):
      1. Caddy requests a certificate for a domain.
      2. Let's Encrypt verifies domain ownership (temporary signed response on domain).
      3. Certificate is issued and served by Caddy.

## 🌐 HyperText Markup Language (HTML)
  - HTML is the foundational language of the web, used to structure content on web pages and web applications.
    - Original purpose: Publishing static documents.
    - Modern use: Single-page apps (SPA) or multi-page apps (MPA).
  - HTML defines content and structure, while CSS styles it and JavaScript makes it interactive.

  | Element   | Purpose            |
| --------- | ------------------ |
| `html`    | Page container     |
| `head`    | Metadata           |
| `title`   | Page title         |
| `body`    | Content            |
| `main`    | Main content       |
| `header`  | Section header     |
| `footer`  | Section footer     |
| `nav`     | Navigation         |
| `section` | Content section    |
| `aside`   | Related content    |
| `div`     | Block container    |
| `span`    | Inline container   |
| `h1`–`h9` | Headings           |
| `p`       | Paragraph          |
| `a`       | Anchor/link        |
| `img`     | Image              |
| `table`   | Table structure    |
| `form`    | User input form    |
| `input`   | Input field        |
| `audio`   | Audio content      |
| `video`   | Video content      |
| `iframe`  | Embedded HTML page |
| `svg`     | Vector graphics    |
| `dialog`  | Interactive pop-up |

Special Characters:
| Character | Entity      |
| --------- | ----------- |
| `&`       | `&amp;`     |
| `<`       | `&lt;`      |
| `>`       | `&gt;`      |
| `"`       | `&quot;`    |
| `'`       | `&apos;`    |
| 😀        | `&#128512;` |

HTML versions
| Year | Version | Notable Features                  |
| ---- | ------- | --------------------------------- |
| 1990 | HTML1   | Basic formatting                  |
| 1995 | HTML2   | Tables, internationalization      |
| 1997 | HTML3   | CSS, frames, MathML               |
| 1999 | HTML4   | External CSS                      |
| 2014 | HTML5   | Semantic tags, media, forms, APIs |

- Webservers erve index.html by default


Input Element Types:
| Type           | Purpose                  |
| -------------- | ------------------------ |
| text           | Single line text         |
| password       | Hidden text              |
| email          | Email address            |
| tel            | Phone number             |
| url            | Website URL              |
| number         | Numeric input            |
| checkbox       | Multiple selection       |
| radio          | Single selection         |
| range          | Slider for numeric range |
| date           | Year, month, day         |
| datetime-local | Date and time            |
| color          | Color picker             |
| file           | File upload              |
| submit         | Form submission button   |

Common attributes
| Attribute | Purpose                                  |
| --------- | ---------------------------------------- |
| name      | Name of the input (used in submission)   |
| value     | Initial or selected value                |
| required  | User must fill this input to submit form |
| disabled  | Prevents user interaction                |


- Best practices
  1. Give clear labels for all inputs (<label>).
  2. Use placeholder text for hints.
  3. Provide early feedback for invalid entries.
  4. Group related inputs using <fieldset> for clarity.

Different Medias:
| Element        | Purpose                  | Key Attributes                                                          | Example                                                                                                                          |
| -------------- | ------------------------ | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **`<img>`**    | Display an image         | `src` (URL), `alt` (description), `width`, `height`                     | `<img src="images/photo.jpg" alt="A mountain" width="300" />`                                                                    |
| **`<audio>`**  | Play an audio file       | `src`, `controls`, `autoplay`, `loop`                                   | `<audio src="audio.mp3" controls autoplay></audio>`                                                                              |
| **`<video>`**  | Play a video file        | `src`, `controls`, `autoplay`, `loop`, `width`, `height`, `crossorigin` | `<video src="video.mp4" controls width="400"></video>`                                                                           |
| **`<svg>`**    | Inline vector graphics   | `viewBox`, `width`, `height`, `stroke`, `fill`                          | `<svg viewBox="0 0 300 200"><circle cx="150" cy="100" r="50" fill="red"/></svg>`                                                 |
| **`<canvas>`** | Drawing graphics with JS | `id`, `width`, `height`, `style`                                        | `<canvas id="c" width="300" height="200"></canvas>`<br>`<script>ctx = c.getContext('2d'); ctx.fillRect(50,50,100,100);</script>` |

## CSS

| Concept                     | Description                                                                     | Example                                                        |
| --------------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **Rule / Ruleset**          | Defines styles for selected elements                                            | `p { color: navy; font-size: 2em; }`                           |
| **Selector**                | Targets HTML elements to style                                                  | `p` targets all `<p>` elements                                 |
| **Declaration**             | Property-value pair applied to elements                                         | `color: red;`                                                  |
| **Inline CSS**              | Styles applied directly in an element’s `style` attribute                       | `<p style="color:green">Text</p>`                              |
| **Internal CSS**            | Styles defined within a `<style>` element in the HTML `<head>`                  | `<style>p { color: green; }</style>`                           |
| **External CSS**            | Styles defined in an external `.css` file, linked via `<link>`                  | `<link rel="stylesheet" href="styles.css">`                    |
| **Cascading / Inheritance** | Styles from higher DOM nodes can be overridden by more specific rules           | `body { color: red; } p { color: green; }`                     |
| **Box Model**               | Every element is a rectangular box: `content` → `padding` → `border` → `margin` | `div { padding: 10px; border: 2px solid black; margin: 5px; }` |
| **Box-sizing**              | Determines how width/height are calculated                                      | `box-sizing: border-box;`                                      |
| **CSS Versions**            | CSS1 → CSS2 → CSS2.1 → CSS3 (modularized for modern features)                   | CSS3 adds animations, flexbox, grid, media queries             |


CSS Selectors:
| Selector Type                | Syntax / Example            | Meaning / Use                                                           | Notes / Special Cases                                      |
| ---------------------------- | --------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------- |
| **Element**                  | `body { ... }`              | Selects all elements of the given tag name.                             | Wildcard `*` selects all elements.                         |
| **Class**                    | `.summary { ... }`          | Selects all elements with the given class.                              | Can be combined with element: `p.summary`                  |
| **ID**                       | `#physics { ... }`          | Selects a single element with the unique ID.                            | ID must be unique on the page.                             |
| **Attribute**                | `[class='summary'] { ... }` | Selects elements with a specific attribute (and optionally a value).    | Wildcards: `*=` contains, `^=` starts with, `$=` ends with |
| **Descendant combinator**    | `section h2 { ... }`        | Selects elements that are descendants of another element.               | Space between selectors.                                   |
| **Child combinator**         | `section > p { ... }`       | Selects elements that are **direct children** of another element.       | Only immediate children.                                   |
| **General sibling**          | `h2 ~ p { ... }`            | Selects elements that are siblings of a given element.                  | Any sibling after the element.                             |
| **Adjacent sibling**         | `h2 + p { ... }`            | Selects the element immediately after a given element.                  | Only the **next** sibling.                                 |
| **Pseudo-class**             | `section:hover { ... }`     | Selects elements based on state or position (hover, first-child, etc.). | Example: `:first-child`, `:nth-child()`, `:visited`        |
| **Combined element + class** | `p.summary { ... }`         | Selects elements with a specific tag **and** class.                     | Higher specificity than just class.                        |
| **Combined element + ID**    | `section#physics { ... }`   | Selects an element with a specific tag **and** ID.                      | Very high specificity.                                     |
| **Wildcard selector**        | `* { ... }`                 | Selects **all elements** in the document.                               | Often used to reset or normalize styles.                   |


CSS Properties:
| Property         | Values / Example                                  | Description / Use                                |
| ---------------- | ------------------------------------------------- | ------------------------------------------------ |
| background-color | color (`red`)                                     | Fills the background of the element              |
| border           | color width style (`#fad solid medium`)           | Sets border using shorthand; can omit values     |
| border-radius    | unit (`50%`)                                      | Rounds corners of element                        |
| box-shadow       | x-offset y-offset blur color (`2px 2px 2px gray`) | Adds shadow to element                           |
| columns          | number (`3`)                                      | Number of text columns                           |
| column-rule      | color width style (`solid thin black`)            | Sets border between columns                      |
| color            | color (`rgb(128,0,0)`)                            | Text color                                       |
| cursor           | type (`grab`)                                     | Cursor when hovering over element                |
| display          | type (`none`)                                     | Layout style (block, inline, none, etc.)         |
| filter           | function (`grayscale(30%)`)                       | Visual filter                                    |
| float            | direction (`left`/`right`)                        | Moves element to side                            |
| flex             |                                                   | Enables flex layout                              |
| font             | family size style (`Arial 1.2em bold`)            | Sets font using shorthand                        |
| grid             |                                                   | Enables CSS grid layout                          |
| height           | unit (`.25em`)                                    | Element height                                   |
| margin           | unit (`5px 5px 0 0`)                              | Margin around element                            |
| max-width/height | unit (`20%`)                                      | Maximum width or height                          |
| min-width/height | unit (`10vh`)                                     | Minimum width or height                          |
| opacity          | number (`0.9`)                                    | Transparency                                     |
| overflow         | visible/hidden/scroll/auto                        | Content overflow behavior                        |
| position         | static/relative/absolute/sticky                   | Element positioning                              |
| padding          | unit (`1em 2em`)                                  | Inner spacing                                    |
| left             | unit (`10rem`)                                    | Horizontal position for positioned elements      |
| top              | unit (`50px`)                                     | Vertical position for positioned elements        |
| text-align       | start/end/center/justify                          | Text alignment                                   |
| transform        | function (`rotate(0.5turn)`)                      | Apply transformations (rotate, scale, translate) |
| width            | unit (`25vmin`)                                   | Element width                                    |
| z-index          | number (`100`)                                    | Stacking order                                   |

CSS Units:
| Unit | Description                              |
| ---- | ---------------------------------------- |
| px   | Pixels                                   |
| pt   | Points (1/72 inch)                       |
| in   | Inches                                   |
| cm   | Centimeters                              |
| %    | Percentage of parent element             |
| em   | Relative to parent element font size     |
| rem  | Relative to root element font size       |
| ex   | Relative to x-height of font             |
| vw   | Percentage of viewport width             |
| vh   | Percentage of viewport height            |
| vmin | Percentage of smaller viewport dimension |
| vmax | Percentage of larger viewport dimension  |

CSS color methods:

| Method       | Example                   | Description                                                    |
| ------------ | ------------------------- | -------------------------------------------------------------- |
| Keyword      | `red`                     | Predefined color names (white, darkblue, cornflowerblue, etc.) |
| Hex          | `#00FFAA22` or `#0FA2`    | RGB in hexadecimal; optional alpha                             |
| RGB function | `rgb(128, 255, 128, 0.5)` | Red, green, blue values (0–255 or %) + optional alpha          |
| HSL          | `hsl(180, 30%, 90%, 0.5)` | Hue (0–360°), saturation %, lightness %, optional alpha        |

CSS fonts:
| Concept       | Description                                                                  | Example                                                                                                                       |
| ------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `font-family` | Defines an ordered list of fonts to use; the first available font is applied | `font-family: Arial, sans-serif;`                                                                                             |
| Font Families | Four major types:                                                            |                                                                                                                               |
| - Serif       | Fonts with small strokes at ends of characters                               | Times New Roman                                                                                                               |
| - Sans-serif  | Fonts without strokes                                                        | Arial, Helvetica                                                                                                              |
| - Fixed       | Monospaced fonts where all characters are the same width                     | Courier New                                                                                                                   |
| - Symbol      | Fonts for non-language characters (arrows, emojis, icons)                    | Wingdings                                                                                                                     |
| `@font-face`  | Loads a custom font provided with your application                           | `css @font-face { font-family: 'Quicksand'; src: url('https://cs260.click/fonts/quicksand.ttf'); }`                           |
| Google Fonts  | Load fonts from a provider; avoids hosting font files yourself               | `css @import url('https://fonts.googleapis.com/css2?family=Rubik+Microbe&display=swap'); p { font-family: 'Rubik Microbe'; }` |

# CSS Animation Notes

📖 **Reference**: [MDN CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

## CSS animations make web pages feel alive by animating properties over time using **keyframes**.

---

## Basic Animation Setup

1. Select the element.
2. Apply the `animation-name` to refer to a `@keyframes` rule.
3. Define `animation-duration` (time the animation lasts).

```css
p {
  text-align: center;
  font-size: 20vh;

  animation-name: demo;
  animation-duration: 3s;
}

Properties for Animation
| Property                  | Description                          | Example       |
| ------------------------- | ------------------------------------ | ------------- |
| animation-name            | Name of the keyframes rule           | `demo`        |
| animation-duration        | Duration of animation                | `3s`          |
| animation-delay           | Delay before animation starts        | `1s`          |
| animation-iteration-count | Number of times animation repeats    | `infinite`    |
| animation-direction       | Direction of animation sequence      | `alternate`   |
| animation-timing-function | Speed curve of the animation         | `ease-in-out` |
| animation-fill-mode       | Style applied before/after animation | `forwards`    |

## CSS Debugging Notes

📖 **Reference**: [MDN Debugging CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS)

CSS can be tricky; sometimes pages do not render as expected. Use browser developer tools to inspect elements, visualize layout, and debug styles.

---

## Steps to Debug CSS

1. **Open developer tools**  
   - In Chrome, right-click on the element → `Inspect`.
   - Shows **Elements** tab and **Styles** pane.
   - Hovering over elements highlights padding, borders, margins.

2. **Use a simple example**  
   HTML (`index.html`):

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <link rel="stylesheet" type="text/css" href="index.css" />
     </head>
     <body>
       <p>Center text in centered element</p>
     </body>
   </html>

Common CSS issues:
| Problem                         | Cause                                     | Debug Tip                                       | Fix                                      |
| ------------------------------- | ----------------------------------------- | ----------------------------------------------- | ---------------------------------------- |
| Padding not showing             | Default margins collapse                  | Inspect element → check box model               | Set `margin: 0` on elements              |
| Text not centered when resizing | Flex container width changes or alignment | Inspect `align-items` & `justify-content`       | Ensure flex properties remain consistent |
| Borders/padding not as expected | Box-sizing defaults to `content-box`      | Inspect box model                               | Use `box-sizing: border-box`             |
| Overlapping elements            | Positioning or float issues               | Inspect computed `position`, `float`, `z-index` | Adjust `position`, `z-index`, or `float` |

## CSS Repsonsive Design

Display Property
| Value  | Meaning                                                       |
| ------ | ------------------------------------------------------------- |
| none   | Element exists but not rendered                               |
| block  | Width fills parent, starts on a new line (`div`, `p` default) |
| inline | Width fits content, no line break (`span`, `b` default)       |
| flex   | Children displayed in flexible layout                         |
| grid   | Children displayed in grid layout                             |

- Prevents mobile browsers from auto-scaling desktop-optimized pages
  - <meta name="viewport" content="width=device-width,initial-scale=1" />

| Feature           | Description                                                         | Example / Syntax                                                                  | Notes / Tips                                                               |
| ----------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **Display**       | Controls how an element and its children are rendered               | `.block { display: block; }` <br> `.flex { display: flex; flex-direction: row; }` | Common values: `none`, `block`, `inline`, `flex`, `grid`                   |
| **Viewport meta** | Prevents mobile browsers from auto-scaling desktop pages            | `<meta name="viewport" content="width=device-width,initial-scale=1" />`           | Always include in `<head>` for responsive sites                            |
| **Float**         | Moves element left or right, allowing text to wrap around           | `aside { float: right; padding: 3em; margin: 0.5em; border: thin solid black; }`  | Values: `left`, `right`, `none`                                            |
| **Media queries** | Apply CSS rules dynamically based on device size or orientation     | `@media (orientation: portrait) { div { transform: rotate(270deg); } }`           | Combine conditions with `and`, `not`, `only`; use `max-width`, `min-width` |
| **Hide on media** | Make elements disappear on certain device sizes or orientations     | `@media (orientation: portrait) { aside { display: none; } }`                     | Useful for responsive UI adjustments                                       |
| **Flexbox**       | 1D responsive layout system for arranging children in row or column | `.flex { display: flex; flex-direction: row; }`                                   | Automatically adjusts items to available space                             |
| **Grid**          | 2D responsive layout system for rows and columns                    | `.grid { display: grid; grid-template-columns: 1fr 1fr; }`                        | Great for structured layouts                                               |

## Grids

| Feature / Property        | Description                                                                             | Example / Syntax                                                | Notes / Tips                                                               |
| ------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **Display grid**          | Turns container into a grid layout, making all children grid items                      | `.container { display: grid; }`                                 | Required to activate grid layout                                           |
| **grid-template-columns** | Defines the number and size of columns                                                  | `grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));` | `repeat()` fills container with as many columns as fit, `fr` is fractional |
| **grid-auto-rows**        | Sets the height for automatically generated rows                                        | `grid-auto-rows: 300px;`                                        | Applies to rows not explicitly sized                                       |
| **grid-gap / gap**        | Sets spacing between grid items                                                         | `grid-gap: 1em;`                                                | Can also use `row-gap` and `column-gap` separately                         |
| **Responsive columns**    | Use `minmax()` and `auto-fill`/`auto-fit` to make columns responsive to container width | `minmax(300px, 1fr)`                                            | `minmax(min, max)` ensures a minimum width while stretching to fit         |
| **Grid items**            | Child elements automatically become grid items                                          | `.card { ... }`                                                 | Can be individually styled or positioned using grid properties             |

## CSS Flexbox

| Feature / Property       | Description                                                              | Example / Syntax                                                      | Notes / Tips                                                                         |
| ------------------------ | ------------------------------------------------------------------------ | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **Display flex**         | Turns a container into a flex layout. All children become flex items     | `body { display: flex; }`                                             | Required to activate flexbox                                                         |
| **flex-direction**       | Defines the main axis of children (row or column)                        | `flex-direction: column;`                                             | `row` is default; `column` stacks items vertically                                   |
| **flex**                 | Defines growth, shrink, and basis of a flex item                         | `flex: 1` or `flex: 0 80px`                                           | Format: `flex-grow flex-shrink flex-basis`; fractional units allow responsive sizing |
| **header / footer flex** | Fixed size containers that do not grow                                   | `header { flex: 0 80px; }`                                            | Basis sets height; zero grow prevents stretching                                     |
| **main flex**            | Flexible container to fill remaining space                               | `main { flex: 1; display: flex; flex-direction: row; }`               | Nested flex container allows layout of children                                      |
| **child flex ratio**     | Controls proportional allocation of space between child elements         | `section:nth-child(1) { flex: 1; } section:nth-child(2) { flex: 3; }` | 1:3 ratio ensures responsive space distribution                                      |
| **Media queries**        | Adjust flex properties or visibility based on screen size or orientation | `@media (orientation: portrait) { main { flex-direction: column; } }` | Allows stacking or hiding elements depending on viewport                             |
| **Hide elements**        | Remove header/footer for small screen heights                            | `@media (max-height: 700px) { header, footer { display: none; } }`    | Ensures content fills viewport without overlapping                                   |

## CSS Frameworks

| Framework             | Description                                                                                                           | Usage / Example                                                                                          | Notes / Tips                                                                                  |
| --------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **Tailwind CSS**      | Utility-first CSS framework. Styles are applied directly in HTML classes.                                             | `<div class="pt-6 md:p-8 text-center md:text-left space-y-4">...</div>`                                  | Small, composable classes; highly customizable; good for rapid prototyping.                   |
| **Bootstrap**         | Popular component-based CSS framework with a large community. Includes responsive grid, utilities, and JS components. | `<button class="btn btn-primary">Bootstrap</button>`                                                     | CDN or NPM integration; includes JS for interactive components; widely used and standardized. |
| **Bootstrap CDN**     | Include Bootstrap via HTML `<link>` tag from a content delivery network.                                              | `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">` | Quick integration without local installation.                                                 |
| **Bootstrap JS**      | Optional JS bundle for interactive components like carousel, modals, dropdowns.                                       | `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>`   | Include at the end of `<body>` for proper loading.                                            |
| **Bootstrap via NPM** | Download Bootstrap locally to include in your project                                                                 | `npm install bootstrap@5.3.3`                                                                            | Useful for modern JS frameworks and bundlers (React, Vue, etc.).                              |
| **Tailwind UI**       | Component library built on Tailwind for pre-made UI elements                                                          | `<div class="w-24 h-24 md:w-48 md:h-auto ...">...</div>`                                                 | Speeds up building consistent, responsive UI; complements Tailwind CSS.                       |

## JavaScript

| Topic                    | Description                                                                         | Example / Notes                                               |
| ------------------------ | ----------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **Language**             | ECMAScript (JS), weakly typed, interpreter-based, widely used in browsers & servers | Runs in any browser or Node.js runtime                        |
| **Versions**             | Evolution of JS features over time                                                  | See table below                                               |
| **Basic syntax**         | Statements, semicolons, curly braces, functions                                     | `'Hello' + ' ' + 'world';` <br> `console.log('Hello world');` |
| **Functions**            | Defined with `function` keyword                                                     | `function join(a, b) { return a + ' ' + b; }`                 |
| **Comments**             | Line (`//`) and block (`/* ... */`)                                                 | `// line comment` <br> `/* block comment */`                  |
| **Code playgrounds**     | Tools to test JS                                                                    | CodePen or browser console (`F12` → Console)                  |
| **String concatenation** | Combine strings with `+` operator                                                   | `'Hello' + ' ' + 'world'` → `Hello world`                     |
| **Debugging**            | Use `console.log()` to inspect values                                               | `console.log(join('Hello','world'));`                         |

How JavaScript can be added to HTML

| Method                     | Description                                                                         | Example                                                        |
| -------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **Script block**           | JavaScript included directly in HTML within a `<script>` element                    | `<script>function sayGoodbye() { alert("Goodbye"); }</script>` |
| **External code**          | JavaScript stored in a separate `.js` file and referenced using the `src` attribute | `<script src="index.js"></script>`                             |
| **Inline event attribute** | JavaScript written directly inside an HTML element attribute to respond to an event | `<button onclick="alert('Hello')">Click me</button>`           |

## Node.Js
| Topic                    | Description                                                                            | Example / Command                                            |
| ------------------------ | -------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| **What is Node.js**      | JavaScript runtime outside of the browser; uses V8 engine                              | `node index.js`                                              |
| **Installing Node**      | Download LTS version from [nodejs.org](https://nodejs.org/en/download/package-manager) | Prebuilt installer for your OS                               |
| **Check Node version**   | Verify Node installation                                                               | `node -v`                                                    |
| **Run single line JS**   | Execute inline JS without a file                                                       | `node -e "console.log(1+1)"`                                 |
| **Interactive mode**     | Start Node REPL for testing code                                                       | `node` then type `> 1+1`                                     |
| **Run project files**    | Execute JS file                                                                        | `node index.js`                                              |
| **NPM init**             | Initialize project for packages                                                        | `npm init -y`                                                |
| **package.json**         | Metadata, scripts, dependencies                                                        | `"scripts": { "dev": "node index.js" }`                      |
| **Install package**      | Add external library                                                                   | `npm install give-me-a-joke`                                 |
| **Uninstall package**    | Remove external library                                                                | `npm uninstall give-me-a-joke`                               |
| **Require package**      | Include package in JS file                                                             | `const giveMeAJoke = require('give-me-a-joke');`             |
| **Use package**          | Call package functions                                                                 | `giveMeAJoke.getRandomDadJoke((joke) => console.log(joke));` |
| **Important files**      | `package.json`, `package-lock.json`, `node_modules`                                    | `node_modules` should be in `.gitignore`                     |
| **Alternative runtimes** | Deno and Bun are Node.js alternatives                                                  | [Deno](https://deno.land/), [Bun](https://bun.sh/)           |


1) Metadata about your project such as its name and the default entry JavaScript file, 2) commands (scripts) that you can execute to do things like run, test, or distribute your code, and 3) packages that this project depends upon.

## Web Frameworks

| Framework   | File Format / Structure                                                   | Key Concept                                                    | Example Hello World                                                                                                                                                                                                                                                      |
| ----------- | ------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Vue**     | Single File Component (SFC) combining `<template>`, `<script>`, `<style>` | Reactive `data()` properties, declarative binding `{{ }}`      | `html <template><p>Hello {{ name }}!</p></template> <script>export default { data() { return { name: 'world' } } }</script> <style>p { color: green; }</style> `                                                                                                         |
| **Svelte**  | Single File Component; requires transpiler                                | Reactive variables with `{ }` syntax, no runtime virtual DOM   | `html <script>let name = 'world';</script> <style>p { color: green; }</style> <p>Hello {name}!</p> `                                                                                                                                                                     |
| **React**   | JSX + external CSS                                                        | Components as functions or classes; HTML-like syntax inside JS | `jsx import 'hello.css'; const Hello = () => { let name = 'world'; return <p>Hello {name}</p>; }; ` CSS: `css p { color: green; } `                                                                                                                                      |
| **Angular** | Separate files: JS/TS, HTML, CSS; grouped as a component                  | Uses `@Component` decorator; strong separation of concerns     | **JS/TS:** `ts @Component({ selector:'app-hello-world', templateUrl:'./hello-world.component.html', styleUrls:['./hello-world.component.css'] }) export class HelloWorldComponent { name = 'world'; } ` **HTML:** `<p>hello {{name}}</p>` **CSS:** `p { color: green; }` |

Key Takeaways
  - Single File Components (Vue, Svelte): Combine JS, HTML, CSS → simpler to manage small components.
  - JSX (React): Mix JS and HTML; CSS handled externally → flexible, widely used.
  - Angular: TypeScript-based, strongly structured → good for large-scale projects.
  - Reactivity: All frameworks allow updating the view automatically when data changes, but the syntax differs:
    1. Vue: {{ variable }}
    2. Svelte: {variable}
    3. React: {variable}
    4. Angular: {{ variable }}

| Component           | Purpose                                                                                        |
| ------------------- | ---------------------------------------------------------------------------------------------- |
| **Code repository** | Stores code in a shared, versioned location (e.g., GitHub)                                     |
| **Linter**          | Detects non-idiomatic or problematic code usage                                                |
| **Prettier**        | Formats code automatically according to a consistent standard                                  |
| **Transpiler**      | Converts code into another format (e.g., JSX → JS, TypeScript → JS, SCSS → CSS)                |
| **Polyfill**        | Adds backward-compatible code for older browsers that lack modern standard support             |
| **Bundler**         | Packages multiple files/modules into optimized bundles for the browser (e.g., Rollup, Webpack) |
| **Minifier**        | Reduces file size by removing whitespace and shortening variable names                         |
| **Testing**         | Automates code verification at multiple levels (unit, integration, end-to-end)                 |
| **Deployment**      | Automates packaging and delivery of code to production                                         |

## Vite
  - Vite is a modern development tool that simplifies creating web applications by handling:
    1. JSX/TS support
    2. Bundling
    3. Minification
    4. Polyfills
    5. Fast debugging with hot reload
  - It allows you to quickly start React (or other framework) projects using a CLI.

  | Directory / File | Purpose                                                         |
| ---------------- | --------------------------------------------------------------- |
| `index.html`     | Main HTML page with `#root` for React injection                 |
| `package.json`   | NPM dependencies and scripts (maps `npm run dev` to start Vite) |
| `vite.config.js` | Vite configuration (React support)                              |
| `src/main.jsx`   | Entry point; loads the `App` component                          |
| `src/App.jsx`    | Top-level React component                                       |
| `src/index.css`  | Global CSS                                                      |
| `src/App.css`    | Component-specific CSS                                          |
| `src/assets`     | Images, logos (e.g., `react.svg`)                               |
| `public`         | Static assets (e.g., `vite.svg`)                                |

How Vite works
  - Browser loads index.html → contains #root element.
  - main.jsx mounts React App component into #root.
  - React component (App.jsx) executes → generates HTML/CSS/JS.

  For our sakes, building something in Vite will save the output in a dist/ directory, ready for deployment

React — Git-friendly Notes
One-line summary
  - React is a component-based UI library for building reactive web interfaces using JSX, state, and event-driven re-renders.

Key resources
  - MDN React Introduction Tutorial — quick primer
  - React Quick Start (react.dev) — official learning path

Origins / context
  - Created by Jordan Walke at Facebook (2011). First used in Facebook news feed and Instagram. Open-sourced and widely adopted.
  - Notable quote: “The best drug is getting little things done that have been weighing on you. Instant high.” — Jordan Walke (Twitter)

Concepts (short)
  - JSX: JavaScript + HTML-like syntax compiled to React.createElement(...).
  - Components: Functions or classes that return JSX and encapsulate UI + behavior.
  - State: useState (or class state) holds component-local values; updating state triggers re-render.
  - Events: JSX uses camelCase handlers (e.g., onClick={handleClick}).
  - Render target: ReactDOM.createRoot(el).render(<App />) mounts app to DOM.
  - Build tools: Vite or Babel commonly used to transform JSX.

Minimal Quickstart (commands)
{mkdir reactDemo && cd reactDemo
npm init -y
npm install vite@latest -D
npm install react react-dom
npx vite
# open http://localhost:5173}

Minimal file layout (recommended)
  - index.html — root <div id="root"></div> + <script type="module" src="/index.jsx"></script>
  - index.jsx — main React entry (imports React, ReactDOM, defines App, mounts)
  - package.json, node_modules/, dev tooling (Vite)

Minimal index.jsx (concept)
  - create App component
  - use ReactDOM.createRoot(document.getElementById('root')).render(<App />)

Why this matters
  - Small state changes produce targeted DOM updates (efficient re-rendering).
  - Composition with components improves maintainability and testability.

Common pitfalls / tips
  - Remember JSX differences: className vs class, inline style is an object.
  - Ensure type="module" when importing .jsx from index.html.
  - Use createRoot (React 18+) for concurrent features.
  - Keep state minimal and lift it up when multiple components share it.
  - Use dev server hot-reload (Vite) for fast iteration.

- State is component-owned, mutable data tracked by React.
  - useState returns [value, setter].
  - Changing the state triggers a re-render

## JavaScript Console — Git-friendly Notes
Overview:
  - The JavaScript console object provides tools for debugging and inspecting your program during runtime.
  - It is not the same as the system terminal — it’s specific to the browser or JS runtime environment (like Node.js).

Use console to:
  - Log messages and variables
  - Style and format output
  - Track performance via timers
  - Count function or loop executions
📖 Reference: MDN JavaScript Console

1️⃣ Logging output
Basic
console.log('hello');
// OUTPUT: hello

String formatting
  - Use %s for string substitution (similar to printf).

console.log('hello %s', 'world');
// OUTPUT: hello world

CSS styling
  - Style logs visually in supported consoles (browser dev tools).

console.log('%c JavaScript Demo', 'font-size:1.5em; color:green;');
// OUTPUT: JavaScript Demo (large green text)

2️⃣ Timers
  - Measure elapsed time between two points in code.

console.time('demo time');
for (let i = 0; i < 10000000; i++) {}
console.timeEnd('demo time');
// OUTPUT: demo time: 12.74 ms

Tips:
  - Label must match between time() and timeEnd().
  - Great for benchmarking or identifying performance bottlenecks.

3️⃣ Counters

- Track how many times code executes under a specific label.

console.count('a');
// OUTPUT: a: 1
console.count('a');
// OUTPUT: a: 2
console.count('b');
// OUTPUT: b: 1


Useful for:
  - Debugging recursion
  - Tracking function calls
  - Loop iteration diagnostics

