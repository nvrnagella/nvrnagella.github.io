# Inhouse Manual Tester Experience

## 1️⃣ Explain your current project in 2–3 minutes

**Expected Answer:**

> “I am working on a web-based application where the frontend is built using Angular and the backend is developed using .NET, with SQL Server as the database.
> 
> 
> The application supports end users through a browser, and the main modules include login, user management, core business features, and reporting.
> 
> As a tester, I am involved from requirement analysis till release. I write test cases, execute functional and regression testing, log defects in JIRA, validate fixes, and participate in sprint activities. I also validate backend data using SQL queries and perform cross-browser testing before release.”
> 

👉 **What you’re checking:**

- Clear flow
- Knows architecture
- Knows own role

---

## 2️⃣ How do you start testing a new feature?

**Expected Answer:**

> “First, I understand the requirement clearly by going through the requirement document or user story and clarifying doubts with the BA or developer.
> 
> 
> Then I identify test scenarios including positive, negative, and edge cases.
> 
> After that, I prepare test cases, review them if required, and once the build is available, I execute test cases, log defects, and retest fixes. I also think about regression impact on existing features.”
> 

👉 **Strong signal:** Mentions **understanding → scenarios → execution → regression**

---

## 3️⃣ How do you ensure test coverage?

**Expected Answer:**

> “I ensure test coverage by mapping test cases to requirements using an RTM or checklist.
> 
> 
> I cover functional flows, negative scenarios, boundary conditions, and edge cases.
> 
> I also consider regression impact, integration points, and past defect areas to make sure nothing is missed.”
> 

👉 **Red flag if missing:** No mention of negative / edge / regression

---

## 4️⃣ What types of testing do you perform regularly?

**Expected Answer:**

> “I regularly perform functional testing, regression testing, integration testing, system testing, and sanity testing.
> 
> 
> Apart from that, I also do cross-browser testing, basic database testing, and exploratory testing when needed.”
> 

👉 **Good sign:** Mentions **what + when**, not just names

---

## 5️⃣ Explain a critical bug you found

**Expected Answer:**

> “In one release, I found a critical issue where the payment was marked successful in the UI, but the transaction details were not saved correctly in the database.
> 
> 
> This could have caused financial mismatch. I logged the bug with proper steps, logs, and SQL validation evidence. The issue was fixed before production release.”
> 

👉 **What you’re checking:**

- Business impact
- Backend awareness
- Ownership

---

## 6️⃣ What makes a test case good?

**Expected Answer:**

> “A good test case is clear, simple, and easy to understand.
> 
> 
> It should have proper preconditions, steps, test data, and expected results.
> 
> It should be reusable, cover validations clearly, and be written so that anyone can execute it without confusion.”
> 

👉 **Strong sign:** Focus on **clarity + expected result**

---

## 7️⃣ How do you handle requirement changes?

**Expected Answer:**

> “When requirements change, I first understand the updated requirement and identify impacted test cases.
> 
> 
> I update existing test cases or add new ones as needed and execute focused regression testing to ensure changes have not broken existing functionality.”
> 

👉 **Red flag if says:** “We re-test everything” or “developer handles it”

---

## 8️⃣ Difference between smoke, sanity, and regression — with examples

**Expected Answer:**

> “Smoke testing is done on a new build to check whether basic functionality is working and the build is stable for testing.
> 
> 
> Sanity testing is done after a small change or bug fix to verify that the specific functionality works fine.
> 
> Regression testing is done to ensure that new changes have not affected existing functionality, usually before release.”
> 

👉 **Must include:** Purpose + timing

---

## 9️⃣ How do you log a defect?

**Expected Answer:**

> “I log a defect with clear title, detailed steps to reproduce, expected and actual results, severity, priority, screenshots or logs, and environment details.
> 
> 
> I make sure the bug is reproducible and easy for developers to understand.”
> 

👉 **Professional tester answer = structured + evidence**

---

## 🔟 Severity vs Priority — explain with real example

**Expected Answer:**

> “Severity indicates how critical the defect is from a technical perspective, while priority indicates how urgently it needs to be fixed from a business perspective.
> 
> 
> For example, a spelling mistake on the home page has low severity but high priority.
> 
> A system crash in a rarely used module has high severity but low priority.”
> 

👉 **Instant reject if confused**

## 1️⃣1️⃣ What do you do if a developer rejects your bug?

**Expected Answer:**

> “First, I recheck the issue to confirm it is reproducible.
> 
> 
> If it is valid, I explain the issue clearly to the developer with proper steps, screenshots, logs, and reference to the requirement.
> 
> If there is still disagreement, I involve the BA or lead for clarification instead of arguing.
> 
> The goal is to resolve the issue, not to prove who is right.”
> 

👉 **Strong signals:**

- Revalidation
- Evidence-based discussion
- Professional escalation

---

## 1️⃣2️⃣ How do you test negative scenarios?

**Expected Answer:**

> “I identify negative scenarios by understanding validations, business rules, and system limits.
> 
> 
> I test invalid inputs, blank fields, incorrect formats, boundary values, and unexpected user actions.
> 
> Negative testing helps ensure the system handles errors gracefully and does not break.”
> 

👉 **Red flag:** Only mentions “wrong input” without examples

---

## 1️⃣3️⃣ What is regression testing and how do you choose cases?

**Expected Answer:**

> “Regression testing ensures that new changes have not affected existing functionality.
> 
> 
> I select regression test cases based on impacted modules, critical business flows, frequently used features, and areas where defects occurred earlier.
> 
> I do not run all test cases every time—only the most relevant and high-risk ones.”
> 

👉 **Strong signal:** Risk-based thinking

---

## 1️⃣4️⃣ How do you test without complete requirements?

**Expected Answer:**

> “When requirements are incomplete, I first clarify doubts with the BA or developer.
> 
> 
> Based on existing system behavior and similar features, I create assumptions and test scenarios.
> 
> I also perform exploratory testing and update test cases once requirements are finalized.”
> 

👉 **Red flag:** “I wait until requirements are clear”

---

## 1️⃣5️⃣ What is exploratory testing and when do you use it?

**Expected Answer:**

> “Exploratory testing is a hands-on testing approach where test design and execution happen together.
> 
> 
> I use it when requirements are unclear, time is limited, or to discover hidden issues that scripted test cases may miss.
> 
> It is based on experience and understanding of the application.”
> 

👉 **Important:** Must say it’s **planned exploration**, not random

---

## 1️⃣6️⃣ How do you test an end-to-end flow?

**Expected Answer:**

> “I start from the user entry point and test the complete flow across multiple modules.
> 
> 
> I verify UI behavior, backend processing, database updates, integrations, and final outcomes.
> 
> I also test negative paths and ensure data consistency across the system.”
> 

👉 **Strong signal:** Mentions **UI + backend + DB**

---

## 1️⃣7️⃣ How do you validate backend data?

**Expected Answer:**

> “I validate backend data by checking database entries using SQL queries and verifying API responses when applicable.
> 
> 
> I ensure that data saved from the UI matches what is stored in the database and that updates and deletions work correctly.”
> 

👉 **Red flag:** “I only check UI”

---

## 1️⃣8️⃣ What non-functional issues have you tested?

**Expected Answer:**

> “I have tested non-functional aspects like performance under load, cross-browser compatibility, usability issues, basic security validations, and data handling.
> 
> 
> Even as a manual tester, I check response times, UI behavior under stress, and error handling.”
> 

👉 **Strong signal:** Awareness beyond functionality

---

## 1️⃣9️⃣ Have you ever missed a bug? What did you learn?

**Expected Answer:**

> “Yes, I have missed a bug earlier due to limited test coverage.
> 
> 
> After that, I improved my test case design, added more edge cases, and included regression checks to avoid similar issues in future.
> 
> It helped me become more careful and systematic.”
> 

👉 **🚩 Red flag:** “No, I never missed any bug”

---

## 2️⃣0️⃣ When do you say a build is ready for release?

**Expected Answer:**

> “A build is ready for release when all critical and high-priority defects are fixed, key business flows are tested, regression testing is completed, and there are no major risks.
> 
> 
> I also ensure test reports are shared and stakeholders are informed before sign-off.”
> 

👉 **Strong signal:** Risk awareness + communication

SQL also ask

Here are **minimal but strong SQL questions** to assess a **2-year experienced Manual Tester**.

These focus on **real-time project usage**, not just theory.

---

# ✅ SQL Questions for 2-Year Manual Tester

## 🔹 Section 1: Core Knowledge (Must Answer)

1. What is the difference between **INNER JOIN and LEFT JOIN**?
2. What is the difference between **WHERE and HAVING**?
3. How do you find duplicate records in a table?
4. How do you fetch the second highest salary?
5. What is indexing? Why is it used?
6. What is the difference between DELETE and TRUNCATE?

---

## 🔹 Section 2: Real-Time Scenario Based (Very Important)

1. After user registration, how will you validate data in the database?
2. How will you verify that profile update is correctly reflected in DB?
3. Given:
    - `users(id, name, email)`
    - `orders(id, user_id, amount)`
    
    Write a query to:
    
    - Get users who have not placed any order.
    - Count total orders per user.
4. A bug says:
    
    “Total order amount showing in UI is incorrect.”
    
    How will you verify it using SQL?
    
5. How do you validate data between API response and database?
6. If a table has millions of records and query is slow, what will you do?

---

## 🔹 Section 3: Practical Query Writing (Hands-On)

Ask candidate to write queries for:

- Find duplicate emails
- Fetch records created in last 7 days
- Get top 5 highest salaries
- Count total records in a table
- Fetch records between two dates

---

# 🎯 What You Should Check in Interview

For 2-year candidate, verify:

- Can write basic SELECT queries confidently
- Understand JOIN clearly
- Can validate backend data for UI testing
- Knows how to debug data mismatch issues
- Has actually used SQL in project

---