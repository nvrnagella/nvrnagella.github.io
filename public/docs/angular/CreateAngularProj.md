# Angular Project Creation & Setup — Complete Reference Guide (Angular 21)

> This document is a structured beginner-to-intermediate reference for creating and running an Angular project using Angular 21.
> You can use this later as revision notes, interview preparation, or project setup documentation.

---

# Table of Contents

1. Introduction to Angular
2. What is Node.js?
3. What is npm?
4. What is Angular CLI?
5. Angular Versioning System
6. Installing Node.js
7. Using NVM (Node Version Manager)
8. Installing Angular CLI
9. Creating a New Angular Project
10. Understanding Angular Setup Questions
11. Running Angular Application
12. Important Angular Commands
13. Angular Project Folder Structure
14. Development Workflow
15. Common Errors & Fixes
16. Best Practices
17. Full Setup Flow Diagram
18. Interview Questions & Answers
19. Final Summary

---

# 1. Introduction to Angular

## What is Angular?

Angular is a **frontend framework** developed by Google for building:

* Single Page Applications (SPA)
* Enterprise applications
* Dynamic web applications

Angular uses:

* TypeScript
* Components
* Services
* Dependency Injection
* Routing
* Reactive Programming

---

# 2. What is Node.js?

## Definition

Node.js is a JavaScript runtime environment that allows JavaScript to run outside the browser.

Angular requires Node.js because Angular tools run using Node.

---

## Why Angular Needs Node.js

Angular uses Node.js for:

| Purpose            | Description               |
| ------------------ | ------------------------- |
| Development Server | Runs Angular app locally  |
| npm                | Installs packages         |
| Angular CLI        | Executes Angular commands |
| Build Process      | Compiles Angular code     |

---

## Check Installed Node Version

```bash
node --version
```

Example:

```bash
v22.17.0
```

---

# 3. What is npm?

## Definition

npm = Node Package Manager

It comes automatically with Node.js.

Used for:

* Installing libraries
* Managing dependencies
* Running scripts

---

## Check npm Version

```bash
npm --version
```

Example:

```bash
10.9.2
```

---

# 4. What is Angular CLI?

## Definition

Angular CLI = Command Line Interface

It is the official tool used to:

* Create Angular projects
* Generate components
* Run application
* Build production code
* Execute Angular commands

---

## CLI Command Prefix

Angular commands start with:

```bash
ng
```

Examples:

```bash
ng new
ng serve
ng build
ng generate
```

---

# 5. Angular Versioning System

Angular releases:

| Release Type  | Meaning        |
| ------------- | -------------- |
| Major Release | Every 6 months |
| Minor Release | New features   |
| Patch Release | Bug fixes      |

---

## Important Note

Major versions may contain:

* Breaking changes
* Different setup process
* New features
* Deprecated features

Example:

* Angular 18
* Angular 19
* Angular 20
* Angular 21

---

# 6. Installing Node.js

## Official Website

[Node.js Official Website](https://nodejs.org?utm_source=chatgpt.com)

---

## Recommended Versions for Angular 21

Recommended:

* Node 20.19+
* Node 22.x preferred

---

## Installation Steps

### Windows

1. Download installer
2. Run setup
3. Click Next
4. Finish installation

---

## Verify Installation

```bash
node --version
npm --version
```

---

# 7. Using NVM (Node Version Manager)

## What is NVM?

NVM helps manage multiple Node versions.

Useful because:

* Different projects use different Node versions
* Easy switching between versions

---

# Why NVM is Recommended

Without NVM:

❌ Reinstall Node again and again

With NVM:

✅ Switch versions instantly

---

## Example Commands

### Install Version

```bash
nvm install 22
```

### Use Version

```bash
nvm use 22
```

### Check Installed Versions

```bash
nvm list
```

---

# 8. Installing Angular CLI

## Install Latest Angular CLI

```bash
npm install -g @angular/cli
```

---

## Install Specific Version

```bash
npm install -g @angular/cli@21
```

---

## Explanation

| Part         | Meaning             |
| ------------ | ------------------- |
| npm          | Package manager     |
| install      | Install package     |
| -g           | Global installation |
| @angular/cli | Angular CLI package |

---

## Verify Angular CLI

```bash
ng version
```

Example Output:

```bash
Angular CLI: 21.0.4
```

---

# 9. Creating a New Angular Project

## Command

```bash
ng new client
```

---

## Meaning

| Part   | Purpose        |
| ------ | -------------- |
| ng     | Angular CLI    |
| new    | Create project |
| client | Project name   |

---

## Result

Angular creates:

```text
client/
```

Containing all Angular application files.

---

# 10. Understanding Angular Setup Questions

When running:

```bash
ng new client
```

Angular asks configuration questions.

---

# Question 1 — Stylesheet Format

## Instructor Selected

```text
Tailwind CSS
```

---

## What is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework.

It helps create UI quickly using predefined classes.

---

## Why Tailwind?

Benefits:

* Faster styling
* Less CSS writing
* Responsive design easier
* Cleaner UI development

---

## Example

Instead of writing:

```css
.button {
  background: blue;
  padding: 10px;
}
```

Tailwind:

```html
<button class="bg-blue-500 p-2">
  Save
</button>
```

---

# Question 2 — SSR (Server Side Rendering)

## Instructor Selected

```text
No
```

---

# What is SSR?

SSR = Server Side Rendering

HTML is generated on server before reaching browser.

---

# Why He Selected NO

Because architecture is:

| Frontend | Backend  |
| -------- | -------- |
| Angular  | .NET API |

Angular will behave as client-side SPA.

SSR unnecessary for this project.

---

## When SSR is Useful

SSR useful for:

* SEO-heavy applications
* Faster first-page load
* Public websites

Examples:

* Blogs
* E-commerce
* Marketing websites

---

# Question 3 — AI Assistance

Instructor selected:

```text
None
```

Reason:

* Training purpose
* Manual coding learning
* Better understanding

---

# 11. Running Angular Application

## Step 1 — Move Into Project

```bash
cd client
```

---

## Step 2 — Run Angular Server

```bash
ng serve
```

---

# What Happens Internally?

Angular:

1. Compiles TypeScript
2. Starts development server
3. Watches file changes
4. Reloads browser automatically

---

## Default URL

```text
http://localhost:4200
```

---

# Meaning of localhost

| Part      | Meaning              |
| --------- | -------------------- |
| localhost | Your own computer    |
| 4200      | Angular default port |

---

# Successful Startup

If browser shows Angular welcome page:

✅ Angular installed correctly
✅ Project created correctly
✅ Development server running correctly

---

# 12. Important Angular Commands

| Command                    | Purpose               |
| -------------------------- | --------------------- |
| ng new app-name            | Create project        |
| ng serve                   | Run project           |
| ng build                   | Build production code |
| ng generate component home | Create component      |
| ng version                 | Check Angular version |
| ng test                    | Run tests             |

---

# 13. Angular Project Folder Structure

After project creation:

```text
client/
│
├── src/
├── node_modules/
├── angular.json
├── package.json
├── tsconfig.json
```

---

# Important Folders

| Folder/File   | Purpose                  |
| ------------- | ------------------------ |
| src           | Application source code  |
| node_modules  | Installed packages       |
| package.json  | Dependencies list        |
| angular.json  | Angular configuration    |
| tsconfig.json | TypeScript configuration |

---

# 14. Development Workflow

Typical Angular workflow:

```text
Create Project
      ↓
Create Components
      ↓
Write HTML
      ↓
Write TypeScript Logic
      ↓
Add Styling
      ↓
Run ng serve
      ↓
Test Application
```

---

# 15. Common Errors & Fixes

# Error 1

```text
'ng' is not recognized
```

## Cause

Angular CLI not installed.

## Fix

```bash
npm install -g @angular/cli
```

---

# Error 2

```text
Node version not supported
```

## Cause

Old Node version.

## Fix

Install supported Node version.

---

# Error 3

```text
Port 4200 already in use
```

## Fix

Run different port:

```bash
ng serve --port 4300
```

---

# Error 4

```text
npm command not found
```

## Cause

Node.js not installed correctly.

## Fix

Reinstall Node.js.

---

# 16. Best Practices

## Recommended

✅ Use LTS Node version
✅ Use NVM
✅ Use Angular CLI
✅ Keep Angular updated
✅ Use Tailwind for modern UI
✅ Learn manually before AI tools

---

## Avoid

❌ Mixing Angular versions randomly
❌ Using unsupported Node versions
❌ Editing generated config files unnecessarily

---

# 17. Complete Setup Flow Diagram

```text
Install Node.js
        ↓
Verify Node + npm
        ↓
Install Angular CLI
        ↓
Verify ng version
        ↓
Create Angular Project
        ↓
Select Tailwind CSS
        ↓
Disable SSR
        ↓
Open Project in VS Code
        ↓
Run ng serve
        ↓
Open localhost:4200
        ↓
Angular Application Running
```

---

# 18. Interview Questions & Answers

---

## Q1. Why Angular needs Node.js?

Angular tools and development server run using Node.js.

---

## Q2. What is Angular CLI?

CLI tool used to create, run, build, and manage Angular applications.

---

## Q3. Difference between npm and Node.js?

| Node.js             | npm             |
| ------------------- | --------------- |
| Runtime environment | Package manager |

---

## Q4. What is ng serve?

Runs Angular development server locally.

---

## Q5. What is Tailwind CSS?

Utility-first CSS framework for faster UI development.

---

## Q6. What is SSR?

Server Side Rendering — rendering HTML on server before sending to browser.

---

# 19. Final Summary

## Complete Setup Commands

```bash
# Check Node
node --version

# Check npm
npm --version

# Install Angular CLI
npm install -g @angular/cli@21

# Verify Angular
ng version

# Create Angular App
ng new client

# Move into project
cd client

# Run Angular App
ng serve
```
