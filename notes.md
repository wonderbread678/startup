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

