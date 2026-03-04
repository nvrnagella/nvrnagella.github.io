# full stack bengaluru mini version

---

# 30-MINUTE TECHNICAL VALIDATION – QUESTION LIST

4 + years

## Time Split (for you to manage)

- Core Backend (.NET + OOP): ~10 min
- Frontend (Angular): ~6 min
- Data + APIs: ~6 min
- DevOps + Agile + Support: ~5 min
- Soft Skills: ~3 min

---

## 1. C# & OOP Concepts (MANDATORY – 3 QUESTIONS)

## Q1. Explain OOP principles and tell me **where you applied them in your last project**

### Expected Answer (Strong Candidate)

“OOP is based on four main principles: **Encapsulation, Abstraction, Inheritance, and Polymorphism**.

- **Encapsulation**:
    
    I encapsulate data by using private fields and exposing them through properties or methods.
    
    In my last project, business logic was encapsulated inside service classes so that controllers only handled request/response logic.
    
- **Abstraction**:
    
    I use abstraction to hide implementation details and expose only required behavior using interfaces or abstract classes.
    
    For example, I created an interface like `IPaymentService` so that the application didn’t depend on a specific payment provider.
    
- **Inheritance**:
    
    I use inheritance when there is a clear “is-a” relationship.
    
    For example, a `BaseEntity` class with common properties like `CreatedDate`, `UpdatedDate`, inherited by domain entities.
    
- **Polymorphism**:
    
    I implement polymorphism by using interfaces and method overriding.
    
    Different implementations of the same interface were injected at runtime depending on the business requirement.”
    

✅ **What you should listen for**

- Mentions **all 4 principles**
- Gives **real project examples**
- Talks about **services, controllers, interfaces**

❌ **Red flag**

- Only textbook definitions
- No project usage

---

## Q2. Difference between **abstract class and interface** — when did you choose one over the other?

### Expected Answer (Strong Candidate)

“An **interface** defines a contract but does not provide implementation (except default methods in newer C# versions).

An **abstract class** can have both abstract and non-abstract methods with implementation.

Key differences:

- A class can implement **multiple interfaces** but inherit only **one abstract class**
- Interfaces are used to define **capability**, abstract classes represent **base behavior**
- Interfaces support loose coupling and dependency injection better

**When I choose interface**:

- When I want loose coupling
- When multiple implementations are expected
- For services like repositories, logging, payment gateways

**When I choose abstract class**:

- When there is shared base logic
- When I want to provide default behavior
- For base classes like `BaseController` or `BaseService`”

✅ **What you should listen for**

- Mentions **multiple inheritance limitation**
- Mentions **real decision-making**
- Talks about **loose coupling**

❌ **Red flag**

- Says “abstract class is faster”
- No clarity on usage

---

## Q3. How do you implement **dependency injection** in C# applications?

### Expected Answer (Strong Candidate)

“Dependency Injection is used to achieve **loose coupling** and improve **testability**.

In .NET Core, DI is built-in.

I register dependencies in `Program.cs` or `Startup.cs` using the service container.

Example:

- `AddTransient` for lightweight, stateless services
- `AddScoped` for request-based lifecycle (commonly used for repositories)
- `AddSingleton` for shared services like logging or caching

I inject dependencies through **constructor injection**, which is the preferred approach.

Example use case:

- Controllers depend on interfaces like `IUserService`
- At runtime, the concrete implementation is injected by the DI container

This helps with unit testing because I can easily mock dependencies.”

✅ **What you should listen for**

- Mentions **AddTransient / AddScoped / AddSingleton**
- Mentions **constructor injection**
- Mentions **testability and loose coupling**

❌ **Red flag**

- Talks about `new` keyword everywhere
- No understanding of service lifetimes

---

## 2. .NET Framework & .NET Core (MANDATORY – 2 QUESTIONS)

## Q1. Difference between **.NET Framework and .NET Core** — what are you currently using and why?

“.NET Framework is the older, Windows-only platform mainly used for legacy applications like Web Forms, WCF, and older ASP.NET MVC applications.

.NET Core (now unified as .NET) is **cross-platform**, **open-source**, and **performance-optimized**. It supports Windows, Linux, and macOS and is designed for modern, cloud-native, microservices-based applications.

Key differences:

- **Platform**:
    
    .NET Framework → Windows only
    
    .NET Core → Cross-platform
    
- **Performance**:
    
    .NET Core has better performance due to Kestrel, optimized runtime, and async support
    
- **Deployment**:
    
    .NET Core supports **self-contained deployment** and side-by-side versioning
    
- **Cloud readiness**:
    
    .NET Core is better suited for containers, CI/CD, and cloud environments
    
- **Future support**:
    
    Microsoft actively enhances .NET (Core); .NET Framework is mostly in maintenance mode
    

Currently, I am using **.NET Core / .NET 6+** because it aligns with modern architecture, cloud deployment, CI/CD pipelines, and provides better performance and scalability.”

✅ **What you should listen for**

- Mentions **cross-platform**
- Mentions **performance & cloud readiness**
- Says **.NET Core / modern .NET** confidently
- Knows Framework is **legacy/maintenance**

❌ **Red flags**

- Says “both are same”
- Still prefers .NET Framework for new apps
- No cloud or deployment understanding

---

## Q2. Explain **middleware pipeline** in .NET Core with a real use case

“In .NET Core, middleware is software that handles HTTP requests and responses in a **pipeline**.

Each middleware component can:

- Process the request
- Pass it to the next middleware
- Or short-circuit the pipeline

The middleware pipeline is configured in `Program.cs` using `app.Use`, `app.Run`, and `app.Map`.

Common middleware examples:

- Authentication
- Authorization
- Logging
- Exception handling
- CORS

**Real use case**:

In one of my projects, we implemented:

- A **global exception-handling middleware** to catch unhandled exceptions
- Log the error details
- Return a standardized error response to the client

The request flow was:

Request → Logging → Authentication → Authorization → Custom Exception Middleware → Controller → Response

This approach helped keep controllers clean and centralized cross-cutting concerns like logging and security.”

✅ **What you should listen for**

- Mentions **request–response pipeline**
- Explains **Use / Run / Map**
- Gives **real project example**
- Mentions **cross-cutting concerns**

❌ **Red flags**

- Only says “middleware is filters”
- Cannot explain request flow
- No real example

---

## 3. Angular (MANDATORY – KEY SKILL – 3 QUESTIONS)

## Q1. Explain **Angular architecture** and component lifecycle

“Angular follows a **component-based architecture**.

The main building blocks are:

- **Modules**: Used to group related components, services, pipes, and directives. The root module is `AppModule`.
- **Components**: The core UI building blocks. Each component has a TypeScript class, HTML template, and CSS.
- **Templates**: Define the UI using HTML with Angular directives.
- **Services**: Used for business logic, data access, and reusable functionality.
- **Dependency Injection**: Used to inject services into components.
- **Directives & Pipes**: Directives modify DOM behavior; pipes transform data for display.

**Component lifecycle** refers to the sequence of events Angular goes through when creating and destroying a component.

Important lifecycle hooks:

- `ngOnChanges` – Called when input properties change
- `ngOnInit` – Called once after component initialization (used for API calls)
- `ngDoCheck` – Custom change detection
- `ngAfterViewInit` – Called after view initialization
- `ngOnDestroy` – Used for cleanup like unsubscribing observables

In real projects, I mostly use:

- `ngOnInit` for API calls
- `ngOnDestroy` to unsubscribe from observables and avoid memory leaks”

✅ **What you should listen for**

- Mentions **component-based architecture**
- Knows **modules, components, services**
- Explains **lifecycle hooks with usage**
- Mentions **real use cases**

❌ **Red flags**

- Only says “Angular is MVC”
- Cannot explain lifecycle hooks
- No real usage examples

---

## Q2. How do **services and dependency injection** work in Angular?

“Services in Angular are used to handle **business logic**, **API communication**, and **shared data** across components.

A service is usually created using `@Injectable()` and provided via:

- `providedIn: 'root'` for singleton services
- Or registered in a module or component providers array

Angular has a built-in **dependency injection system** that creates and manages service instances.

How it works:

- Components declare dependencies in their constructor
- Angular injects the required service instance at runtime

Example use case:

- I create a service to handle HTTP calls using `HttpClient`
- Components call service methods instead of directly calling APIs
- This keeps components lightweight and reusable

Benefits:

- Loose coupling
- Better maintainability
- Easy unit testing using mocks”

✅ **What you should listen for**

- Mentions **@Injectable**
- Mentions **providedIn: 'root'**
- Explains **constructor injection**
- Mentions **reusability and testability**

❌ **Red flags**

- API calls inside components
- No understanding of DI
- Says “services are optional”

---

## Q3. How do you handle **routing, guards, and authentication** in Angular apps?

“Angular uses the **Angular Router** for client-side navigation.

**Routing**:

- Routes are defined in `app-routing.module.ts`
- Each route maps a path to a component
- Lazy loading is used for feature modules to improve performance

**Guards**:

- Guards are used to control access to routes
- Common guards:
    - `CanActivate` – to allow or block route access
    - `CanDeactivate` – to prevent navigation away
- Guards are mainly used for authentication and authorization

**Authentication**:

- Authentication is usually handled using **JWT**
- After login, the token is stored securely (usually in memory or session storage)
- An HTTP interceptor attaches the JWT token to outgoing API requests
- Guards check whether the user is authenticated before allowing route access

Real example:

- Public routes like login are accessible without authentication
- Protected routes are guarded using `CanActivate`
- Unauthorized users are redirected to the login page”

✅ **What you should listen for**

- Mentions **RouterModule**
- Mentions **guards (CanActivate)**
- Mentions **JWT + interceptor**
- Explains **real flow**

❌ **Red flags**

- No guards usage
- Token handling unclear
- No interceptor knowledge

---

## 4. Web Services & APIs (MANDATORY – 2 QUESTIONS)

## Q1. How do you design a **RESTful API** and secure it?

“When I design a RESTful API, I follow standard REST principles to make the API **scalable, maintainable, and secure**.

**RESTful API design principles:**

- Use **HTTP verbs** correctly:
    - `GET` for fetching data
    - `POST` for creating resources
    - `PUT / PATCH` for updating resources
    - `DELETE` for removing resources
- Use **resource-based URLs**, not action-based
    
    Example:
    
    `/api/users` instead of `/api/getUsers`
    
- Keep APIs **stateless** — each request contains all required information
- Use proper **HTTP status codes**:
    - 200 OK, 201 Created
    - 400 Bad Request
    - 401 Unauthorized
    - 403 Forbidden
    - 500 Internal Server Error
- Version APIs using URL or header (example: `/api/v1/orders`)

**Security approach:**

- Use **JWT-based authentication**
- Enforce **HTTPS** for all API communication
- Implement **role-based authorization** using policies or roles
- Validate request inputs to prevent SQL Injection and XSS
- Use **global exception handling** to avoid exposing internal details
- Apply **CORS policies** to restrict allowed origins
- Use **rate limiting / throttling** if needed

In real projects, I usually implement authentication using JWT, authorization using roles or policies, and handle security concerns through middleware.”

✅ **What you should listen for**

- REST principles (verbs, stateless, resource-based URLs)
- HTTP status codes
- Mentions **JWT, HTTPS, CORS**
- Talks about **authorization, validation**

❌ **Red flags**

- Says REST is just “Web API”
- No security explanation
- Uses POST for everything

---

## Q2. Explain **JWT authentication flow** between Angular and .NET API

“The JWT authentication flow between Angular and a .NET API works as follows:

1. **User Login**
    - User enters credentials in the Angular application
    - Angular sends a login request to the .NET API
2. **Token Generation**
    - The .NET API validates user credentials
    - If valid, the API generates a **JWT token** containing:
        - User ID
        - Roles / claims
        - Expiration time
    - The token is signed using a secret key
3. **Token Storage**
    - Angular receives the JWT token
    - The token is stored securely (commonly in memory or session storage)
4. **Authenticated Requests**
    - Angular uses an **HTTP interceptor**
    - The interceptor attaches the JWT token to every API request in the `Authorization` header:
        
        ```
        Authorization: Bearer <token>
        ```
        
5. **Token Validation**
    - The .NET API validates the token on every request
    - It checks:
        - Signature
        - Expiration
        - Claims and roles
6. **Authorization**
    - Based on roles or policies, the API allows or denies access to endpoints
7. **Token Expiry Handling**
    - If the token expires, Angular redirects the user to login
    - Optionally, refresh tokens are used to generate a new access token

This approach is stateless, scalable, and suitable for modern web applications.”

✅ **What you should listen for**

- Step-by-step flow
- Mentions **token generation, interceptor**
- Mentions **Authorization header**
- Mentions **claims, expiry**
- Explains **stateless nature**

❌ **Red flags**

- Cannot explain token flow
- Confuses JWT with session
- No interceptor knowledge

---

## 5. Database (SQL + NoSQL) (MANDATORY – 2 QUESTIONS)

## Q1. How do you **optimize a slow SQL query** in production?

“When I face a slow SQL query in production, I follow a **systematic approach** instead of randomly tuning.

**Step 1: Identify the problem**

- First, I identify the slow query using:
    - Query execution time
    - Application logs
    - Database monitoring tools
- I check whether the issue is **query-specific** or due to **high load**

**Step 2: Analyze the execution plan**

- I analyze the **execution plan** to understand:
    - Table scans vs index seeks
    - Join methods
    - Costly operations
- This helps me identify bottlenecks like missing indexes or inefficient joins

**Step 3: Index optimization**

- Add or optimize **indexes** on:
    - Columns used in `WHERE`, `JOIN`, `ORDER BY`, and `GROUP BY`
- Remove unused or duplicate indexes
- Avoid over-indexing because it impacts insert/update performance

**Step 4: Query optimization**

- Rewrite the query if needed:
    - Avoid `SELECT *`
    - Reduce unnecessary joins
    - Use proper filtering conditions
- Break complex queries into smaller ones if required

**Step 5: Check data volume and design**

- Review table size and data growth
- Consider **normalization or denormalization** based on use case
- Use pagination instead of loading large result sets

**Step 6: Production safety**

- Always test changes in lower environments
- Apply changes during non-peak hours
- Monitor performance after deployment

In real projects, I’ve optimized queries by adding proper indexes and rewriting queries based on execution plans, which significantly improved response time.”

✅ **What you should listen for**

- Mentions **execution plan**
- Talks about **indexes**
- Mentions **query rewrite**
- Shows **production awareness**
- Uses a **step-by-step approach**

❌ **Red flags**

- Says “add index” only
- No execution plan knowledge
- No production caution

---

## Q2. When do you choose **NoSQL (MongoDB/DynamoDB)** over SQL? Explain with an example

“I choose NoSQL over SQL when the application requirements need **high scalability, flexibility, or performance** that relational databases are not ideal for.

**Key scenarios where NoSQL fits better:**

- When the data schema is **flexible or frequently changing**
- When the application needs **horizontal scalability**
- When handling **large volumes of unstructured or semi-structured data**
- When low-latency and high-throughput are required
- When joins are expensive or not needed

**MongoDB example:**

- I choose MongoDB for applications with:
    - Document-based data
    - Nested or hierarchical structures
- Example:
    - User profile data where each user has different attributes
    - Storing JSON documents directly without rigid schema
- MongoDB allows faster development due to schema flexibility

**DynamoDB example:**

- I choose DynamoDB for:
    - Highly scalable, serverless applications on AWS
    - Predictable performance with millisecond latency
- Example:
    - Storing session data or application logs
    - High-read/write workloads without managing infrastructure

**SQL vs NoSQL decision:**

- If strong consistency, complex joins, and transactions are required → SQL
- If scalability, flexibility, and performance are more important → NoSQL

In real projects, I’ve used SQL for transactional systems and NoSQL for high-volume or flexible data storage use cases.”

✅ **What you should listen for**

- Clear **decision criteria**
- Mentions **schema flexibility & scalability**
- Gives **real examples**
- Understands **SQL vs NoSQL trade-offs**

❌ **Red flags**

- Says “NoSQL is faster always”
- No real example
- Cannot differentiate MongoDB vs DynamoDB

---

## 6. CI/CD, DevOps & Agile (MANDATORY – 2 QUESTIONS)

## Q1. Explain a **CI/CD pipeline** you worked on from code commit to deployment

“In my project, we implemented a **CI/CD pipeline** to automate build, test, and deployment, ensuring faster and reliable releases.

**CI/CD flow from code commit to deployment:**

1. **Code Commit**
    - Developers commit code to a version control system like **Git** (GitHub / Azure DevOps / GitLab)
    - We follow branching strategies such as **feature branches** and **pull requests**
2. **Continuous Integration (CI)**
    - Once code is pushed, the CI pipeline is triggered automatically
    - The pipeline performs:
        - Code checkout
        - Restore dependencies
        - Build the application
        - Run unit tests
        - Static code analysis (if configured)
    - If the build or tests fail, the pipeline stops and notifies the team
3. **Artifact Creation**
    - After a successful build, build artifacts are created
    - Artifacts are versioned and stored in an artifact repository
4. **Continuous Deployment (CD)**
    - The deployment pipeline picks up the artifact
    - Environment-specific configurations are applied
    - The application is deployed to:
        - Development → QA → UAT → Production (based on approvals)
5. **Deployment Strategy**
    - We use strategies like:
        - Rolling deployment
        - Blue-green deployment (if required)
    - Rollback is supported in case of deployment failure
6. **Post-Deployment**
    - Smoke tests are executed
    - Application logs and monitoring tools are checked
    - Any issues are immediately addressed

This pipeline reduced manual errors, ensured consistent deployments, and improved release confidence.”

✅ **What you should listen for**

- Clear **end-to-end flow**
- Mentions **build, test, artifact, deploy**
- Talks about **branching & pull requests**
- Mentions **rollback or deployment strategy**
- Shows **real-world experience**

❌ **Red flags**

- Only says “we use Jenkins”
- Cannot explain steps
- No testing or rollback mentioned

---

## Q2. How do you work in **Agile**? What is your role during sprint planning and delivery?

“I have worked in **Agile Scrum methodology**, where development is done in **iterations called sprints**, usually 2–3 weeks long.

**Sprint Planning:**

- I participate in sprint planning meetings
- I review user stories from the product backlog
- I help estimate tasks using story points
- I clarify requirements with the Product Owner
- I identify dependencies and risks early

**During the Sprint:**

- I pick up user stories assigned to me
- I follow coding standards and best practices
- I update progress daily in **daily stand-up meetings**
- I collaborate closely with QA and other team members
- I raise blockers immediately to avoid delays

**Sprint Review & Retrospective:**

- I demonstrate completed features during sprint review
- I participate in retrospectives to discuss:
    - What went well
    - What didn’t go well
    - Action items for improvement

**My Role:**

- Deliver quality code within sprint commitments
- Ensure stories meet the **Definition of Done**
- Support testing and bug fixes
- Contribute to continuous improvement

This Agile approach helps ensure transparency, faster feedback, and continuous delivery of value.”

✅ **What you should listen for**

- Mentions **Scrum ceremonies**
- Mentions **story points & estimation**
- Talks about **collaboration and ownership**
- Mentions **Definition of Done**
- Shows **team-oriented mindset**

❌ **Red flags**

- Thinks Agile is only daily calls
- No understanding of sprint planning
- Passive role, no ownership

---

## 7. Application Support & Production Issues (MANDATORY – 1 QUESTION)

## Q1. Tell me about a **critical production issue** you handled — how did you identify, fix, and prevent it?

“In one of my projects, we faced a **critical production issue** where the application response time suddenly became very slow and some users started getting timeout errors.

**Step 1: Issue Identification**

- The issue was reported by business users and monitoring alerts
- I immediately checked:
    - Application logs
    - Server CPU and memory usage
    - Database performance metrics
- I noticed increased API response times and high database load

**Step 2: Root Cause Analysis**

- I analyzed logs and identified that a specific API was taking too long to respond
- Using database execution plans, I found a **slow SQL query** that was triggered frequently
- The query was missing a proper index and was doing a full table scan on a large table

**Step 3: Fix**

- As an immediate fix:
    - I optimized the query
    - Added the required index
- We tested the fix in a lower environment
- Deployed the fix during a low-traffic window
- After deployment, the response time improved significantly

**Step 4: Verification**

- I monitored logs and application metrics post-deployment
- Confirmed that:
    - Error rate reduced
    - Response time returned to normal
    - No new issues were introduced

**Step 5: Prevention**

- Added:
    - Better logging and monitoring alerts
    - Performance tests for critical APIs
- Conducted a root cause analysis (RCA) and documented it
- Shared learnings with the team
- Ensured code reviews included performance checks going forward

This approach helped not only resolve the issue quickly but also prevent similar issues in the future.”

---

## What You Should Listen For (Evaluator Checklist)

✅ Clear **step-by-step approach**

✅ Mentions **logs, monitoring, metrics**

✅ Explains **root cause**, not just fix

✅ Talks about **production safety**

✅ Mentions **prevention / RCA**

✅ Shows **ownership and calm handling**

---

## Red Flags (Immediate Concern)

❌ Says “Ops team fixed it”

❌ No logs or monitoring mentioned

❌ Only talks about restarting servers

❌ No prevention or learning

❌ No real example

---

## 8. System Design & Business Understanding (MANDATORY – 1 QUESTION)

## Q1. How do you convert **business requirements into technical design**? Give a real example

“When I receive business requirements, I focus first on **understanding the business problem**, not the technology.

**Step 1: Understand the Business Requirement**

- I start by discussing with business stakeholders to understand:
    - What problem they are trying to solve
    - Who the users are
    - What success looks like from a business perspective
- I clarify functional and non-functional requirements like:
    - Performance
    - Security
    - Scalability
    - Compliance

**Step 2: Break Down Requirements**

- I break high-level requirements into:
    - Functional requirements (features, workflows)
    - Non-functional requirements (performance, availability, security)
- I identify dependencies, risks, and constraints early

**Step 3: Define System Scope & Architecture**

- I define the overall architecture:
    - Frontend (Angular)
    - Backend (.NET / .NET Core APIs)
    - Database (SQL / NoSQL)
    - Integrations with external systems
- I decide whether the system should be monolithic or modular/microservices based on scale and complexity

**Step 4: Create Technical Design**

- I create:
    - High-level architecture diagrams
    - Data flow diagrams
    - API contracts
- I define:
    - Database schema
    - API endpoints
    - Security model (authentication, authorization)
    - Error handling and logging approach

**Step 5: Review & Validate**

- I review the design with:
    - Business stakeholders to confirm requirements are met
    - Technical team to validate feasibility and best practices
- I incorporate feedback before development starts

**Real Example:**

“In one project, the business wanted to improve customer order tracking.

- Business requirement:
    
    Customers should see real-time order status and get notifications.
    
- Technical solution:
    - Angular frontend for UI
    - .NET Core REST APIs for order management
    - SQL database for transactional order data
    - NoSQL (MongoDB) for tracking events
    - JWT-based authentication
    - CI/CD pipeline for deployments
- I ensured performance by:
    - Indexing frequently queried data
    - Caching order status responses
- I ensured scalability by:
    - Designing APIs stateless
    - Using asynchronous processing for notifications

This approach ensured the solution met business needs, was scalable, and easy to maintain.”

---

## What You Should Listen For (Evaluator Checklist)

✅ Starts from **business problem**, not tech

✅ Breaks requirements into **functional & non-functional**

✅ Talks about **architecture decisions**

✅ Mentions **security, scalability, performance**

✅ Gives a **real project example**

✅ Shows **structured thinking**

---

## Red Flags

❌ Jumps straight to coding

❌ No interaction with business users

❌ No mention of non-functional requirements

❌ Cannot give a real example

❌ Talks only in theory

---

## 9. Soft Skills & Leadership (MANDATORY – 1 QUESTION)

## Q1. How do you communicate **technical issues to non-technical stakeholders**?

“When communicating technical issues to non-technical stakeholders, my focus is on **clarity, impact, and solutions**, not technical depth.

**Step 1: Understand the Audience**

- I first understand who I’m speaking to — business users, managers, or executives
- I avoid technical jargon and use simple, business-friendly language

**Step 2: Explain the Issue in Business Terms**

- Instead of explaining the technical root cause in detail, I explain:
    - What the issue is
    - How it impacts the business (users, revenue, timelines)
- Example:
    - Instead of saying *‘database deadlock’*, I say
        
        *‘the system is taking longer to process customer requests during peak usage’*
        

**Step 3: Be Transparent and Calm**

- I clearly communicate:
    - Severity of the issue
    - Whether it is temporary or long-term
- I stay calm and factual, especially during production incidents

**Step 4: Present Options and Recommendations**

- I explain possible solutions in simple terms
- I clearly recommend the best option along with:
    - Expected effort
    - Time required
    - Risks involved

**Step 5: Set Expectations**

- I communicate timelines honestly
- If there are dependencies or risks, I clearly call them out
- I provide regular updates until the issue is resolved

**Step 6: Follow Up**

- After resolution, I share:
    - What was fixed
    - What preventive measures were taken
- This builds trust and confidence with stakeholders

This approach ensures stakeholders feel informed, confident, and aligned, even during critical issues.”

---

## What You Should Listen For (Evaluator Checklist)

✅ Business-focused language

✅ Mentions **impact, not just cause**

✅ Calm and structured communication

✅ Transparency and expectation setting

✅ Ownership and follow-up

✅ Trust-building mindset

---

## Red Flags

❌ Uses heavy technical jargon

❌ Blames others or systems

❌ Hides issues or gives false timelines

❌ No follow-up or prevention mindset

❌ Poor communication ownership

---

# OPTIONAL / ADDED ADVANTAGE (Ask only if time permits or candidate claims experience)

## AWS (OPTIONAL – 1 QUICK QUESTION)

## Q1. Which **AWS services** have you used, and how did you deploy your .NET app?

“I have used multiple AWS services depending on the project requirements.

**Common AWS services I’ve worked with:**

- **EC2** – for hosting .NET applications on virtual servers
- **Elastic Load Balancer (ALB)** – to distribute traffic across instances
- **Auto Scaling** – to handle variable load
- **RDS (SQL Server / Aurora)** – for relational databases
- **S3** – for file storage, static content, and logs
- **IAM** – for managing roles, policies, and secure access
- **CloudWatch** – for monitoring logs, metrics, and alarms
- **DynamoDB** – for NoSQL use cases (where applicable)

**Deployment approach for .NET application:**

- The .NET application is built through a **CI/CD pipeline**
- Build artifacts are generated and packaged
- The application is deployed to:
    - **EC2 instances** (IIS-hosted .NET app), or
    - **Container-based deployment** (Docker + ECS), or
    - **Serverless** (Lambda for smaller services, if applicable)
- Environment-specific configurations are handled via:
    - App settings
    - AWS Parameter Store or Secrets Manager
- Load balancer routes traffic to healthy instances
- CloudWatch is used to monitor application health and logs

**Security & reliability:**

- IAM roles are used instead of hard-coded credentials
- HTTPS is enforced
- Logs and metrics are monitored post-deployment

This setup ensures scalability, security, and reliable deployments.”

---

### What You Should Listen For

✅ Names **real AWS services**

✅ Explains **deployment flow**, not just services

✅ Mentions **CI/CD + monitoring**

✅ Understands **security (IAM, HTTPS)**

---

### Red Flags

❌ Says “I know AWS” but cannot name services

❌ Only mentions EC2 without deployment flow

❌ No CI/CD or monitoring awareness

## GoJS (OPTIONAL – 1 QUICK QUESTION)

## Q2. Have you used **GoJS**? For what kind of diagrams?

“Yes, I have used **GoJS** for building **interactive, diagram-based visualizations** in web applications.

**Types of diagrams I’ve worked with in GoJS:**

- Flowcharts
- Process workflows
- Organizational charts
- Network or dependency diagrams
- System or architecture diagrams

**Typical use case:**

- Users can visually design or view workflows
- Nodes represent entities or steps
- Links represent relationships or transitions
- Drag-and-drop, zooming, and selection are enabled

**How it’s usually implemented:**

- GoJS is integrated into an Angular or JavaScript-based frontend
- Diagram data is maintained as JSON
- Data is loaded from backend APIs and persisted back to the database
- Custom node templates are used for better UX

**Performance considerations:**

- Use virtualized rendering for large diagrams
- Optimize node templates
- Load data incrementally for complex diagrams

GoJS is mainly used when applications need rich, interactive diagramming capabilities beyond basic charting.”

---

### What You Should Listen For

✅ Knows **what GoJS is actually used for**

✅ Mentions **diagram types**

✅ Talks about **JSON-based data model**

✅ Mentions **integration with frontend**

---

### Red Flags

❌ Thinks GoJS is a charting library

❌ Cannot name a single diagram type

❌ No real usage example

---

---