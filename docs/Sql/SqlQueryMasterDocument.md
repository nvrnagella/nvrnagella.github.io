# 3. SQL QUERY MASTER DOCUMENT

**(Complete SELECT Statement & Clauses – With Data, Rules & Outputs)**

---

## 1️⃣ Introduction – What is an SQL Query?

## 🔹 Core Idea

- Data in real-world applications is stored in **tables**
- Tables exist inside a **database**
- A database can contain **many tables**, each serving a specific purpose
    
    (for example: customers, orders, products, employees)
    

Businesses and applications constantly ask questions such as:

- How many customers do we have?
- What is the total score by country?
- Who are the top customers?
- What are the most recent orders?

To answer these questions, we **write SQL queries**.

👉 An **SQL query** is simply a **question written in SQL language** that asks the database to return data.

---

## 🔹 What Actually Happens When You Run a Query

1. You write an SQL query (for example, a `SELECT` statement)
2. The database engine:
    - Reads your query
    - Understands what data you are asking for
3. The database:
    - Fetches the required data from tables
    - Processes it (filtering, sorting, grouping if needed)
4. The database returns a **result set** (output) to you

📌 This result set exists **only temporarily** and does not change the stored data.

---

## 🔹 Important Rules About SQL Queries

### ✔️ SELECT Queries Are Read-Only

- `SELECT` queries are used **only to retrieve data**
- They do **not modify** the database

### ❌ SELECT Queries DO NOT:

- Insert new rows
- Update existing rows
- Delete rows
- Change table structure (columns, datatypes, constraints)

✔️ `SELECT` is strictly for **reading data**

---

## 🔹 Why This Is Important

- You can safely run `SELECT` queries on production databases
- You won’t accidentally break or change data
- This is why analysts, testers, and developers heavily rely on `SELECT`

📌 Data modification is done using **other SQL commands**, not covered here:

- `INSERT`
- `UPDATE`
- `DELETE`
- `CREATE`
- `ALTER`
- `DROP`

(These belong to **DML** and **DDL**, which come later.)

---

## 🔹 SQL as a Communication Language

Think of SQL like this:

- You → ask a question using SQL
- Database → answers using data

You are **not browsing data manually**

You are **asking precise questions** and letting the database do the work.

---

## 🔹 Key Takeaways (Lock This In 🔐)

- Data → stored in tables
- Tables → stored in databases
- SQL → language used to talk to databases
- SQL query → a question written in SQL
- `SELECT` → used only to read data
- Running a `SELECT` query is **safe and non-destructive**

---

## 2️⃣ Our Database Setup (VERY IMPORTANT)

We will use **ONLY TWO TABLES** for the entire document.

---

## 📌 Table 1: `customers`

| customer_id | first_name | country | score |
| --- | --- | --- | --- |
| 1 | Maria | Germany | 350 |
| 2 | John | USA | 900 |
| 3 | George | UK | 750 |
| 4 | Martin | Germany | 500 |
| 5 | Peter | USA | 0 |

---

## 📌 Table 2: `orders`

| order_id | customer_id | order_date | amount |
| --- | --- | --- | --- |
| 101 | 1 | 2023-01-10 | 250 |
| 102 | 2 | 2023-02-15 | 450 |
| 103 | 2 | 2023-03-01 | 300 |
| 104 | 3 | 2023-03-20 | 150 |

### 🔹 Relationship Between Tables (IMPORTANT)

- `customers.customer_id` is the **primary key**
- `orders.customer_id` is a **foreign key**
- This means:
    - One customer can have **many orders**
    - Each order belongs to **one customer**

📌 This relationship will become very important when learning **JOINs** later.

---

### 🔹 Data Type Assumptions (Implicit but Important)

Although not explicitly defined, we assume:

| Column | Data Type |
| --- | --- |
| customer_id | Integer |
| order_id | Integer |
| first_name | String (VARCHAR) |
| country | String (VARCHAR) |
| score | Integer |
| order_date | Date |
| amount | Numeric |

📌 These assumptions explain:

- Why strings need **single quotes**
- Why numbers do **not**
- Why dates can be sorted

---

## 3️⃣ SQL Query Clauses – Overview

An SQL `SELECT` query is made up of **multiple clauses**.

Each clause has a **specific responsibility**, and together they allow you to precisely control:

- Which data you see
- How much data you see
- How the data is filtered, grouped, and sorted

---

## 🔹 List of SQL SELECT Clauses

| Clause | Purpose |
| --- | --- |
| SELECT | Choose which columns appear in the result |
| FROM | Specify the table where data comes from |
| WHERE | Filter rows before aggregation |
| GROUP BY | Combine rows with the same values |
| HAVING | Filter data after aggregation |
| ORDER BY | Sort the final result |
| DISTINCT | Remove duplicate rows |
| TOP | Limit the number of rows returned |

---

## 🔹 Mandatory vs Optional Clauses

### ✔️ Mandatory Clauses

- `SELECT`
- `FROM`

Without these, a query **cannot run**.

### ✔️ Optional Clauses

- `WHERE`
- `GROUP BY`
- `HAVING`
- `ORDER BY`
- `DISTINCT`
- `TOP`

These are used **only when needed**, depending on the question.

---

## 🔹 How These Clauses Work Together

- `SELECT` → controls **columns**
- `FROM` → controls **data source**
- `WHERE` → filters **rows**
- `GROUP BY` → combines rows into groups
- `HAVING` → filters **groups**
- `ORDER BY` → sorts results
- `DISTINCT` → removes duplicate rows
- `TOP` → restricts number of rows

📌 Some clauses **depend on others**:

- `HAVING` **requires** `GROUP BY`
- `GROUP BY` is usually used with **aggregate functions**
- `TOP` is most meaningful when used with `ORDER BY`

---

## 🔹 Important Concept: Row Filtering vs Column Filtering

- **Column filtering** → done by `SELECT`
- **Row filtering (before grouping)** → done by `WHERE`
- **Row filtering (after grouping)** → done by `HAVING`

This distinction is **critical** and causes most SQL confusion if misunderstood.

---

## 🔹 Coding Order vs Logical Responsibility (Preview)

Although queries are **written** starting with `SELECT`,

they are **executed** in a different internal order by SQL.

📌 This will be covered in detail later, but remember:

> The order you write clauses is NOT the order SQL runs them
> 

---

## 🔐 Key Takeaways (Lock This Section)

- SQL queries are built from **clauses**
- Each clause has **one clear responsibility**
- Not all clauses are required every time
- Some clauses **depend on others**
- Understanding clause roles is more important than memorizing syntax

---

## 4️⃣ SELECT & FROM

## 🔹 Purpose of SELECT and FROM

- `SELECT` → defines **which columns** should appear in the result
- `FROM` → defines **which table** the data comes from

Every SQL query that retrieves data **must include both**.

---

## 🔹 Basic Syntax

```sql
SELECT column_name(s)
FROM table_name;
```

---

## 🔹 Example: Retrieve All Customers

```sql
SELECT*
FROM customers;
```

### 🔹 What `SELECT *` Means

- (asterisk) means **all columns**
- SQL returns:
    - Every column in the table
    - Every row in the table

📌 In our `customers` table, this returns:

- 5 rows
- 4 columns (`customer_id`, `first_name`, `country`, `score`)

---

## 🔹 Result Explanation (Conceptual)

| customer_id | first_name | country | score |
| --- | --- | --- | --- |
| 1 | Maria | Germany | 350 |
| 2 | John | USA | 900 |
| 3 | George | UK | 750 |
| 4 | Martin | Germany | 500 |
| 5 | Peter | USA | 0 |
- **Row count** = number of records (customers)
- **Column count** = structure of the table

---

## 🔹 Execution Order (VERY IMPORTANT)

Although we **write** the query like this:

```sql
SELECT*
FROM customers;
```

SQL **executes it in this order**:

1. `FROM`
    - SQL locates the `customers` table
    - Fetches all rows and columns into memory
2. `SELECT`
    - Decides which columns to keep (* = all)

📌 **Execution order ≠ writing order**

This concept becomes critical when `WHERE`, `GROUP BY`, and `HAVING` are added later.

---

## 🔹 Important Rules About FROM

- The table name must:
    - Exist in the database
    - Be spelled correctly
- If the table does not exist, SQL throws an error

Example error scenario:

```sql
SELECT*
FROM customer;-- wrong table name
```

❌ Error: table does not exist

---

## 🔹 Best Practices (Very Important)

### ⚠️ Avoid `SELECT *` in real projects

Reasons:

- Returns unnecessary data
- Slower performance on large tables
- Breaks queries if table structure changes

✔️ Prefer explicit column names:

```sql
SELECT customer_id, first_name, country, score
FROM customers;
```

---

## 🔹 Formatting & Readability (Professional Habit)

Good:

```sql
SELECT*
FROM customers;
```

Better:

```sql
SELECT
    customer_id,
    first_name,
    country,
    score
FROM customers;
```

📌 SQL ignores formatting, but **humans don’t**.

---

## 🔹 Key Takeaways (Lock This 🔐)

- `SELECT` chooses **columns**
- `FROM` chooses **data source**
- Both are **mandatory**
- `FROM` executes before `SELECT`
- `SELECT *` means all columns
- Avoid `SELECT *` in production
- Correct table names are mandatory

---

## 5️⃣ Selecting Specific Columns

## 🔹 Purpose

Selecting specific columns allows you to:

- Retrieve **only the data you need**
- Reduce unnecessary output
- Improve readability and performance

Instead of selecting all columns using `*`, you explicitly list the required columns.

---

## 🔹 Basic Syntax

```sql
SELECT column1, column2, column3
FROM table_name;
```

Each column name is separated by a **comma**.

---

## 🔹 Example: Selecting Specific Customer Columns

```sql
SELECT
    first_name,
    country,
    score
FROM customers;
```

---

## 🔹 Output Explanation

| first_name | country | score |
| --- | --- | --- |
| Maria | Germany | 350 |
| John | USA | 900 |
| George | UK | 750 |
| Martin | Germany | 500 |
| Peter | USA | 0 |

### What Happened?

- SQL fetched **all rows** from `customers`
- Columns **not listed** (`customer_id`) were removed
- Only the specified columns appear in the result

📌 This is called **column filtering**

---

## 🔹 Column Filtering vs Row Filtering (IMPORTANT)

- **Column filtering** → done by `SELECT`
    - Controls **which columns** appear
- **Row filtering** → done by `WHERE`
    - Controls **which rows** appear

👉 `SELECT` never removes rows

👉 `WHERE` never removes columns

This distinction is **critical**.

---

## 🔹 Column Order Rule

The order of columns in the result is **exactly the order written in SELECT**.

Example:

```sql
SELECT country, score, first_name
FROM customers;
```

Output order:

1. country
2. score
3. first_name

📌 Table column order does **not** matter here.

---

## 🔹 Common Mistakes (Very Important)

### ❌ Trailing Comma

```sql
SELECT first_name, country, score,
FROM customers;
```

➡️ Error: SQL expects another column after the comma.

---

### ❌ Using Columns That Don’t Exist

```sql
SELECT firstname
FROM customers;
```

➡️ Error: column does not exist.

---

### ❌ Assuming SELECT Filters Rows

```sql
SELECT score
FROM customers;
```

➡️ This still returns **all rows**, not filtered data.

---

## 🔹 Best Practices (Professional SQL)

✔️ Always select only required columns

✔️ Avoid `SELECT *` in production

✔️ Use multi-line formatting for readability

✔️ Keep column order meaningful

Example (recommended):

```sql
SELECT
    first_name,
    country,
    score
FROM customers;
```

---

## 🔹 Key Takeaways (Lock This 🔐)

- Use `SELECT` to choose columns
- List columns explicitly instead of *
- Columns not listed are excluded from output
- Column order = SELECT order
- No trailing comma after last column
- `SELECT` filters columns, not rows

---

## 6️⃣ WHERE – Filtering Rows

## 🔹 What WHERE Does

The `WHERE` clause is used to **filter rows** based on a condition.

- Rows that **satisfy** the condition → kept
- Rows that **do not satisfy** the condition → removed

📌 `WHERE` works on **row-level data**, not columns.

---

## 🔹 Basic Syntax

```sql
SELECT column_name(s)
FROM table_name
WHERE condition;
```

---

## 🔹 How WHERE Works Internally (VERY IMPORTANT)

1. SQL reads **one row at a time**
2. The condition in `WHERE` is evaluated
3. If the condition is `TRUE` → row stays
4. If the condition is `FALSE` → row is removed

👉 This happens **before** grouping or aggregation.

---

## 🔹 Example 1: Customers with Score Not Equal to 0

```sql
SELECT*
FROM customers
WHERE score<>0;
```

### 🔹 Explanation

- `<>` means **not equal**
- Peter has `score = 0`
- His row is removed from the result

📌 Remaining rows: Maria, John, George, Martin

---

## 🔹 Example 2: Customers from Germany

```sql
SELECT*
FROM customers
WHERE country='Germany';
```

### 🔹 Output

| first_name | country | score |
| --- | --- | --- |
| Maria | Germany | 350 |
| Martin | Germany | 500 |

---

## 🔹 Comparison Operators in WHERE

| Operator | Meaning |
| --- | --- |
| = | Equal |
| <> | Not equal |
| > | Greater than |
| < | Less than |
| >= | Greater than or equal |
| <= | Less than or equal |

### Example

```sql
SELECT*
FROM customers
WHERE score > 500;
```

---

## 🔹 Logical Operators (Combining Conditions)

### AND – All conditions must be true

```sql
SELECT*
FROM customers
WHERE country='Germany'
AND score > 400;
```

### OR – At least one condition must be true

```sql
SELECT*
FROM customers
WHERE country='Germany'
OR country='USA';
```

### NOT – Negates a condition

```sql
SELECT*
FROM customers
WHERE NOT country='USA';
```

---

## 🔹 Data Type Rules (CRITICAL)

- **Strings** → must be in **single quotes**
    
    ```sql
    country='Germany'
    ```
    
- **Numbers** → no quotes
    
    ```sql
    score>500
    ```
    

❌ Wrong:

```sql
WHERE score='500'
```

---

## 🔹 WHERE Runs Before Aggregation

📌 `WHERE` is applied **before**:

- `GROUP BY`
- `HAVING`
- Aggregate functions (`SUM`, `AVG`, etc.)

❌ This is NOT allowed:

```sql
WHERE AVG(score) > 500;
```

✔️ Aggregated filters must use `HAVING` (covered later).

---

## 🔹 WHERE Filters Rows, NOT Columns

❗ Very common confusion:

```sql
SELECT score
FROM customers;
```

➡️ This **does not filter rows**

➡️ It only hides other columns

Row filtering always requires `WHERE`.

---

## 🔹 Handling NULL Values (IMPORTANT RULE)

- `NULL` means **unknown / missing**
- You **cannot** compare NULL using `=` or `<>`

❌ Wrong:

```sql
WHERE score=NULL;
```

✔️ Correct:

```sql
WHERE score IS NULL;
WHERE score IS NOT NULL;
```

(Even if not shown in this dataset, this rule is critical.)

---

## 🔹 Common Mistakes (Avoid These)

❌ Forgetting quotes for strings

❌ Using aggregate functions in WHERE

❌ Expecting WHERE to filter columns

❌ Comparing NULL incorrectly

❌ Misspelling column names

---

## 🔹 Key Takeaways (Lock This 🔐)

- `WHERE` filters **rows**
- Conditions are checked **row by row**
- Uses comparison & logical operators
- Runs **before aggregation**
- Cannot use aggregate functions
- Strings need quotes, numbers don’t
- NULL needs special handling

---

## 7️⃣ ORDER BY – Sorting Data

## 🔹 Purpose

The `ORDER BY` clause is used to **sort rows** in the result set.

- It does **not** change the data in the table
- It only changes the **order of rows in the output**

📌 Sorting always applies to the **final result set**.

---

## 🔹 Basic Syntax

```sql
SELECT column_name(s)
FROM table_name
ORDERBY column_nameASC|DESC;
```

---

## 🔹 Sorting Direction

- `ASC` → Ascending order (lowest → highest)
- `DESC` → Descending order (highest → lowest)

📌 If no direction is specified, SQL uses `ASC` by default.

---

## 🔹 Example 1: Highest Score First

```sql
SELECT*
FROM customers
ORDERBY scoreDESC;
```

### 🔹 Output (Conceptual Order)

John (900) → George (750) → Martin (500) → Maria (350) → Peter (0)

---

## 🔹 Example 2: Lowest Score First

```sql
SELECT*
FROM customers
ORDERBY scoreASC;
```

### 🔹 Output (Conceptual Order)

Peter (0) → Maria (350) → Martin (500) → George (750) → John (900)

---

## 🔹 ORDER BY Execution Logic (IMPORTANT)

ORDER BY is executed **after**:

1. `FROM`
2. `WHERE`
3. `GROUP BY`
4. `HAVING`
5. `SELECT`

📌 This means:

- Rows are first filtered
- Then grouped (if needed)
- Then selected
- **Finally sorted**

ORDER BY always works on the **already prepared result set**.

---

## 🔹 Sorting Text vs Numbers

### Numeric Sorting

```sql
ORDERBY scoreASC;
```

- Sorted by numeric value

### Text Sorting

```sql
ORDERBY countryASC;
```

- Sorted alphabetically (A → Z)

📌 Sorting is based on database collation rules

(case sensitivity depends on the database configuration).

---

## 🔹 ORDER BY with Multiple Columns (Nested Sorting)

### 🔹 Why Nested Sorting Is Needed

If the first column contains **duplicate values**, the order inside those duplicates is undefined unless you specify another column.

---

### ✅ Example: Sort by Country, then by Highest Score

```sql
SELECT*
FROM customers
ORDERBY countryASC, scoreDESC;
```

### 🔹 How SQL Sorts This

1. Sorts by `country` alphabetically
2. For customers in the same country:
    - Sorts by `score` from highest to lowest

📌 This produces **clean and predictable results**.

---

## 🔹 Column Order Matters in ORDER BY

```sql
ORDERBY country, score;
```

is **not the same as**:

```sql
ORDERBY score, country;
```

- The **first column has priority**
- Additional columns refine the sorting

---

## 🔹 ORDER BY with TOP (VERY IMPORTANT)

`TOP` is applied **after sorting**.

### Example: Top 3 Customers by Score

```sql
SELECT TOP3*
FROM customers
ORDERBY scoreDESC;
```

📌 Without `ORDER BY`, `TOP` results are meaningless.

---

## 🔹 ORDER BY Using Column Position (Not Recommended)

```sql
SELECT first_name, country, score
FROM customers
ORDERBY3DESC;
```

- `3` refers to the **third column in SELECT**
- This works, but is:
    - Hard to read
    - Error-prone if column order changes

❌ Avoid in real projects

✔️ Use column names instead

---

## 🔹 Common Mistakes (Avoid These)

❌ Expecting ORDER BY to change table data

❌ Forgetting ASC/DESC and assuming behavior

❌ Using ORDER BY before WHERE

❌ Sorting without understanding execution order

❌ Using column positions blindly

---

## 🔹 Key Takeaways (Lock This 🔐)

- `ORDER BY` sorts **rows**, not columns
- Default sorting is `ASC`
- Always specify `ASC` or `DESC`
- Sorting happens **after WHERE and GROUP BY**
- Use nested sorting when duplicates exist
- Combine ORDER BY with TOP for meaningful results

---

## 8️⃣ ORDER BY with Multiple Columns (Nested Sorting)

### 🔹 Concept

Nested sorting means sorting the result set **by more than one column**, in a specific priority order.

- The **first column** has the highest priority
- The **second column** is used only when the first column has **repeated values**
- Additional columns further refine the sorting

---

### ✅ Query Example

```sql
SELECT*
FROM customers
ORDERBY countryASC, scoreDESC;
```

---

### 🔹 How SQL Executes This (Step-by-Step)

1. SQL first sorts **all rows by `country` in ascending order**
2. For rows where `country` has the **same value**, SQL then:
    - Sorts those rows by `score` in descending order

📌 The second column is applied **only within groups formed by the first column**.

---

### 🔹 Concrete Example Using Our Data

Customers table (simplified):

| first_name | country | score |
| --- | --- | --- |
| Maria | Germany | 350 |
| Martin | Germany | 500 |
| John | USA | 900 |
| Peter | USA | 0 |
| George | UK | 750 |

After `ORDER BY country ASC, score DESC`:

| country | first_name | score |
| --- | --- | --- |
| Germany | Martin | 500 |
| Germany | Maria | 350 |
| UK | George | 750 |
| USA | John | 900 |
| USA | Peter | 0 |

---

### 🔹 Why Nested Sorting Is Needed

If you sort **only by country**:

```sql
ORDERBY countryASC;
```

SQL guarantees:

- All Germany rows come together
- All USA rows come together

But SQL does **NOT guarantee** the order *within* Germany or USA.

👉 Without a second column:

- The internal order is **undefined**
- It may change between executions or databases

Nested sorting removes this ambiguity.

---

### 🔹 Important Clarification (VERY IMPORTANT)

> “Nested sorting is useful only when duplicates exist”
> 

✅ Correct meaning:

- **Duplicates in the *first ORDER BY column***

❌ Incorrect interpretation:

- That nested sorting is invalid or useless otherwise

📌 If the first column has **unique values**, the second column:

- Will not change the result
- But it is still syntactically valid

---

### 🔹 Column Priority Rule (CRITICAL)

```sql
ORDERBY country, score
```

is **NOT the same as**:

```sql
ORDERBY score, country
```

- The **leftmost column always has priority**
- Additional columns only refine ordering within ties

---

### 🔹 Best Practices

✔️ Use nested sorting when:

- The primary sort column has repeated values
- You want predictable, stable results

✔️ Always think in terms of:

> Primary sort → Secondary refinement
> 

---

### 🔹 Key Takeaways (Lock This 🔐)

- Nested sorting means sorting by **multiple columns**
- Sorting happens left to right
- Second column applies only when first column has duplicates
- Without nested sorting, internal order may be undefined
- Nested sorting ensures **clean, deterministic results**

---

## 9️⃣ GROUP BY – Aggregation

## 🔹 What GROUP BY Does (Core Concept)

`GROUP BY` **combines multiple rows into a single row** based on shared values in one or more columns, and allows you to apply **aggregate functions** to each group.

👉 In simple words:

> GROUP BY answers questions like
> 
> 
> **“For each X, calculate Y”**
> 

Examples:

- For each **country**, calculate total score
- For each **customer**, count number of orders
- For each **country**, find average score

---

## 🔹 Mental Model (VERY IMPORTANT)

Think of GROUP BY like this:

1. SQL looks at the column(s) in `GROUP BY`
2. It finds **rows with the same value**
3. It **groups them together**
4. It produces **one output row per group**
5. Aggregate functions summarize data **inside each group**

📌 GROUP BY always **reduces the number of rows** (unless groups are unique).

---

## 🔹 Common Aggregate Functions

| Function | Purpose |
| --- | --- |
| `SUM()` | Adds values |
| `COUNT()` | Counts rows |
| `AVG()` | Calculates average |
| `MIN()` | Finds smallest value |
| `MAX()` | Finds largest value |

---

## 🔹 Example: Total Score per Country

### ✅ Query

```sql
SELECT
    country,
SUM(score)AS total_score
FROM customers
GROUPBY country;
```

### 🔹 Output

| country | total_score |
| --- | --- |
| Germany | 850 |
| USA | 900 |
| UK | 750 |

---

## 🔹 How SQL Executes This (Step-by-Step)

1. SQL reads all rows from `customers`
2. Groups rows by `country`
    - Germany → 2 rows
    - USA → 2 rows
    - UK → 1 row
3. Applies `SUM(score)` within each group
4. Returns **one row per country**

👉 Original rows: **5**

👉 Result rows: **3**

---

## 🔹 VERY IMPORTANT RULE (NON-NEGOTIABLE 🚨)

Every column in the `SELECT` clause must:

- ✅ Be inside an **aggregate function**
- **OR**
- ✅ Appear in the `GROUP BY` clause

---

### ❌ This Query FAILS

```sql
SELECT country, first_name,SUM(score)
FROM customers
GROUPBY country;
```

### ❌ Why It Fails

- `first_name`:
    - Is NOT aggregated
    - Is NOT in GROUP BY
- SQL does not know **which first_name** to show for a country

---

### ✅ Valid Fix Option 1: Remove the column

```sql
SELECT country,SUM(score)
FROM customers
GROUPBY country;
```

---

### ✅ Valid Fix Option 2: Add it to GROUP BY

```sql
SELECT country, first_name,SUM(score)
FROM customers
GROUPBY country, first_name;
```

📌 This changes the grouping level and therefore the result.

---

## 🔹 GROUP BY with Multiple Columns

```sql
SELECT country, first_name,SUM(score)
FROM customers
GROUPBY country, first_name;
```

### 🔹 What Happens Now

- SQL groups by **(country + first_name)**
- Each unique combination becomes one group
- Output rows increase accordingly

👉 More GROUP BY columns = **more granular results**

---

## 🔹 COUNT Variations (Important Detail)

### COUNT(*)

Counts **rows**

```sql
COUNT(*)
```

### COUNT(column)

Counts **non-NULL values** in that column

```sql
COUNT(score)
```

📌 This difference matters when NULLs exist.

---

## 🔹 GROUP BY vs SELECT (Common Confusion)

- `SELECT` → controls **what is displayed**
- `GROUP BY` → controls **how rows are combined**

You **cannot** “display extra columns” unless SQL knows how to aggregate them.

---

## 🔹 GROUP BY + WHERE (Preview)

- `WHERE` filters **rows before grouping**
- `GROUP BY` aggregates the remaining rows

```sql
SELECT country,SUM(score)
FROM customers
WHERE score>0
GROUPBY country;
```

(This is fully covered in HAVING section later.)

---

## 🔹 Common Mistakes (Avoid These)

❌ Selecting non-grouped, non-aggregated columns

❌ Expecting GROUP BY to sort results

❌ Forgetting that GROUP BY reduces rows

❌ Confusing grouping with filtering

❌ Using GROUP BY without aggregates (rare, but confusing)

---

## 🔹 Key Takeaways (Lock This 🔐)

- GROUP BY combines rows with same values
- One output row per group
- Aggregate functions summarize data
- Every SELECT column must be aggregated or grouped
- GROUP BY changes the **shape** of the result
- More GROUP BY columns = more detail

---

## 🔟 HAVING – Filtering Aggregated Data

## 🔹 Purpose of HAVING

The `HAVING` clause is used to **filter aggregated results**.

👉 In simple terms:

- `WHERE` filters **rows**
- `HAVING` filters **groups**

📌 `HAVING` is applied **after `GROUP BY` and aggregation**.

---

## 🔹 Basic Syntax

```sql
SELECT group_column, AGG_FUNCTION(column)
FROM table_name
GROUPBY group_column
HAVING AGG_FUNCTION(column)condition;
```

---

## 🔹 Example: Countries with Total Score Greater Than 800

### ✅ Query

```sql
SELECT
    country,
SUM(score)AS total_score
FROM customers
GROUPBY country
HAVINGSUM(score)>800;
```

### 🔹 Output (Conceptual)

| country | total_score |
| --- | --- |
| Germany | 850 |
| USA | 900 |

UK is excluded because its total score (750) does not meet the condition.

---

## 🔹 How SQL Executes HAVING (Step-by-Step)

1. `FROM` → read all rows
2. `GROUP BY` → group rows by country
3. Aggregate functions calculate values (`SUM(score)`)
4. `HAVING` → filter **grouped results**
5. Final result is returned

👉 HAVING **never sees raw rows**, only aggregated data.

---

## 🔹 WHERE vs HAVING (Golden Rule 🔥)

| Clause | Filters | When |
| --- | --- | --- |
| WHERE | Individual rows | Before GROUP BY |
| HAVING | Aggregated groups | After GROUP BY |

---

### ❌ Why WHERE Cannot Replace HAVING

This is **invalid SQL**:

```sql
WHERESUM(score)>800;
```

❌ Reason:

- Aggregates do **not exist yet** when WHERE runs

✔️ Correct approach:

```sql
HAVINGSUM(score)>800;
```

---

## 🔹 WHERE + HAVING Together (VERY IMPORTANT)

You can use **both** in the same query.

### Example:

Find countries where:

- Only customers with score ≠ 0 are considered
- Total score > 800

```sql
SELECT country,SUM(score)AS total_score
FROM customers
WHERE score<>0
GROUPBY country
HAVINGSUM(score)>800;
```

### 🔹 Execution Order

1. WHERE → filters rows
2. GROUP BY → aggregates remaining rows
3. HAVING → filters aggregated results

---

## 🔹 Multiple Conditions in HAVING

```sql
HAVING
SUM(score)>800
ANDCOUNT(*)>=2;
```

📌 HAVING supports:

- AND
- OR
- NOT

Just like WHERE — but on **aggregates**.

---

## 🔹 HAVING Without GROUP BY (Edge Case)

```sql
SELECTSUM(score)
FROM customers
HAVINGSUM(score)>2000;
```

✔️ This is valid SQL.

📌 Explanation:

- Entire table is treated as **one group**
- HAVING filters that single aggregated result

⚠️ Rarely used, but important to know.

---

## 🔹 Common Mistakes (Avoid These)

❌ Using HAVING without aggregation

❌ Using aggregate functions in WHERE

❌ Thinking HAVING filters rows

❌ Forgetting GROUP BY when selecting non-aggregated columns

❌ Confusing WHERE and HAVING roles

---

## 🔹 Key Takeaways (Lock This 🔐)

- HAVING filters **aggregated data**
- Runs **after GROUP BY**
- Works only with aggregate functions
- WHERE filters rows, HAVING filters groups
- WHERE + HAVING together = powerful queries
- Understanding execution order is critical

---

## 1️⃣1️⃣ WHERE + GROUP BY + HAVING (REAL SCENARIO)

This section demonstrates how **WHERE, GROUP BY, and HAVING work together** in a single real-world query.

---

## 🔹 Task

Find the **average score per country**,

considering **only customers with score ≠ 0**,

and return **only countries with an average score greater than 430**.

This task contains:

- A **row-level condition**
- An **aggregation**
- A **group-level condition**

---

## 🔹 Step-by-Step Breakdown of the Task

### Condition 1

> Only customers with score ≠ 0
> 
- This condition applies to **individual rows**
- Therefore, it must be handled using **WHERE**

---

### Condition 2

> Only countries with average score > 430
> 
- This condition applies to **aggregated values**
- Therefore, it must be handled using **HAVING**

---

## ✅ Correct Query

```sql
SELECT
    country,
AVG(score)AS avg_score
FROM customers
WHERE score<>0
GROUPBY country
HAVINGAVG(score)>430;
```

---

## 🔹 How SQL Executes This Query (CRITICAL)

SQL does **not** execute the query from top to bottom as written.

### Actual Execution Order

1. **FROM**
    - Reads all rows from `customers`
2. **WHERE**
    - Removes rows where `score = 0`
    - Peter is excluded here
3. **GROUP BY**
    - Groups remaining rows by `country`
4. **Aggregate Calculation**
    - `AVG(score)` is calculated per country
5. **HAVING**
    - Removes countries where `AVG(score) ≤ 430`
6. **SELECT**
    - Displays `country` and calculated `avg_score`

---

## 🔹 Intermediate Results (Very Important)

### After WHERE

| country | score |
| --- | --- |
| Germany | 350 |
| Germany | 500 |
| USA | 900 |
| UK | 750 |

---

### After GROUP BY + AVG

| country | avg_score |
| --- | --- |
| Germany | 425 |
| USA | 900 |
| UK | 750 |

---

### After HAVING (avg_score > 430)

| country | avg_score |
| --- | --- |
| USA | 900 |
| UK | 750 |

Germany is removed because its average score (425) does not meet the condition.

---

## 🔹 Why WHERE and HAVING Cannot Be Swapped

### ❌ This Is INVALID

```sql
WHEREAVG(score)>430;
```

❌ Reason:

- Aggregates do not exist during WHERE execution

---

### ❌ This Is LOGICALLY WRONG

```sql
HAVING score<>0;
```

❌ Reason:

- HAVING works on groups, not individual rows

---

## 🔹 Important Rule About Aliases (Often Missed)

You **cannot reliably use column aliases in HAVING**:

❌ Risky / not portable:

```sql
HAVING avg_score>430;
```

✔️ Correct & safe:

```sql
HAVINGAVG(score)>430;
```

(Some databases allow aliases, but **do not rely on it**.)

---

## 🔹 Key Takeaways (Lock This 🔐)

- WHERE filters **rows before aggregation**
- GROUP BY aggregates filtered rows
- HAVING filters **aggregated results**
- WHERE + GROUP BY + HAVING together enable complex analysis
- Execution order explains *why this query works*
- This pattern appears **very frequently in real projects and interviews**

---

## 1️⃣2️⃣ DISTINCT – Removing Duplicates

## 🔹 Purpose of DISTINCT

The `DISTINCT` keyword is used to **remove duplicate rows** from a result set.

👉 In simple terms:

> DISTINCT ensures that each returned row is unique
> 

📌 DISTINCT affects **only the query result**,

it does **not change the data stored in the table**.

---

## 🔹 Basic Syntax

```sql
SELECTDISTINCT column_name
FROM table_name;
```

`DISTINCT` is written **immediately after SELECT**.

---

## 🔹 Example: Unique List of Countries

### ✅ Query

```sql
SELECTDISTINCT country
FROM customers;
```

### 🔹 Output

country

---

Germany

---

USA

---

UK

---

Even though Germany and USA appear multiple times in the table,

each value appears **only once** in the result.

---

## 🔹 How DISTINCT Works Internally (IMPORTANT)

1. SQL reads all rows from the table
2. SQL selects the requested column(s)
3. SQL compares rows **one by one**
4. Duplicate rows are removed
5. Only unique rows remain

📌 DISTINCT is applied **after SELECT**,

but **before ORDER BY**.

---

## 🔹 DISTINCT Works on Entire Rows (CRITICAL RULE)

When using DISTINCT with multiple columns, SQL checks the **entire row**, not individual columns.

### Example

```sql
SELECTDISTINCT country, score
FROM customers;
```

This removes duplicates **only if both country AND score are the same**.

📌 If country is the same but score differs → rows are **not duplicates**.

---

## 🔹 DISTINCT vs GROUP BY (VERY IMPORTANT)

This is one of the most common SQL confusions.

### DISTINCT

- Removes duplicate rows
- No aggregation
- Simpler syntax
- Used for **unique lists**

```sql
SELECTDISTINCT country
FROM customers;
```

---

### GROUP BY

- Groups rows
- Used with aggregate functions
- More powerful
- Used for **summaries**

```sql
SELECT country,COUNT(*)
FROM customers
GROUPBY country;
```

👉 **Rule of thumb**:

- Want unique values → `DISTINCT`
- Want calculations per group → `GROUP BY`

---

## 🔹 DISTINCT with ORDER BY

```sql
SELECTDISTINCT country
FROM customers
ORDERBY countryASC;
```

📌 ORDER BY is applied **after DISTINCT**,

so sorting happens on already-unique rows.

---

## 🔹 DISTINCT Does NOT Filter Columns or Rows by Condition

❌ DISTINCT does **not** replace WHERE

❌ DISTINCT does **not** filter by logic

❌ DISTINCT does **not** aggregate data

It only removes **exact duplicates**.

---

## ⚠️ Performance & Best Practices (VERY IMPORTANT)

### ❌ Avoid DISTINCT When Not Needed

```sql
SELECTDISTINCT customer_id
FROM customers;
```

❌ Useless:

- `customer_id` is already unique
- SQL still performs duplicate checks
- Wastes resources

---

### ⚠️ Why DISTINCT Is Expensive

- SQL must:
    - Compare rows
    - Sort or hash data internally
- Cost increases with:
    - Large tables
    - Many columns
    - Wide data types (strings)

📌 Use DISTINCT **only when duplicates truly exist**.

---

## 🔹 Common Mistakes (Avoid These)

❌ Using DISTINCT to hide bad joins

❌ Using DISTINCT instead of fixing WHERE conditions

❌ Assuming DISTINCT changes table data

❌ Believing DISTINCT removes partial duplicates

---

## 🔹 Key Takeaways (Lock This 🔐)

- DISTINCT removes duplicate **rows**
- Applied after SELECT, before ORDER BY
- Works on full row combinations
- Does not modify table data
- DISTINCT ≠ GROUP BY
- Use DISTINCT sparingly and intentionally

---

## 1️⃣3️⃣ TOP – Limiting Rows

### 🔹 Purpose of TOP

The `TOP` keyword is used to **limit the number of rows returned** in the result set.

👉 In simple terms:

> TOP says: “Give me only the first N rows from the final result.”
> 

📌 `TOP` does **not** filter data based on conditions

📌 It simply **cuts the result set** after all other processing

---

### 🔹 Basic Syntax (SQL Server)

```sql
SELECT TOP N column_name(s)
FROM table_name;
```

- `N` = number of rows to return
- `TOP` is written **immediately after SELECT**

---

### 🔹 Example 1: Top 3 Customers by Highest Score

```sql
SELECT TOP3*
FROM customers
ORDERBY scoreDESC;
```

### 🔹 Explanation

1. All customers are retrieved
2. Results are sorted by `score` (highest → lowest)
3. SQL keeps only the **first 3 rows**

📌 This gives the **top-performing customers**

---

### 🔹 Example 2: Lowest 2 Customers by Score

```sql
SELECT TOP2*
FROM customers
ORDERBY scoreASC;
```

### 🔹 Explanation

- Sorting is reversed
- Lowest scores come first
- TOP 2 keeps the two lowest-scoring customers

---

### 🔹 Example 3: Most Recent Orders

```sql
SELECT TOP2*
FROM orders
ORDERBY order_dateDESC;
```

### 🔹 Explanation

- Newest dates come first
- TOP keeps only the latest 2 orders

---

### 🔹 Execution Order of TOP (CRITICAL 🔥)

Although written near the beginning, `TOP` is executed **last**.

### Actual Execution Order

1. FROM
2. WHERE
3. GROUP BY
4. HAVING
5. SELECT
6. ORDER BY
7. **TOP**

📌 This is why TOP always works on the **final, fully processed result**.

---

### 🔹 TOP Without ORDER BY (VERY IMPORTANT ⚠️)

```sql
SELECT TOP3*
FROM customers;
```

❌ This query is **valid SQL**, but:

- The “top 3” rows are **arbitrary**
- Order depends on:
    - Physical storage
    - Execution plan
    - Database engine

👉 **Never rely on TOP without ORDER BY**

---

### 🔹 TOP vs WHERE (Common Confusion)

### WHERE

- Filters rows based on **conditions**
- Logical filtering

```sql
WHERE score>500;
```

### TOP

- Limits rows based on **row position**
- Positional filtering

```sql
TOP3;
```

📌 WHERE decides **which rows qualify**

📌 TOP decides **how many rows to keep**

---

### 🔹 TOP With GROUP BY (Preview Example)

```sql
SELECT TOP2 country,SUM(score)AS total_score
FROM customers
GROUPBY country
ORDERBY total_scoreDESC;
```

📌 SQL:

- Aggregates data first
- Sorts aggregated result
- Then applies TOP

---

### 🔹 TOP WITH TIES (Edge Case – Optional Knowledge)

```sql
SELECT TOP2WITH TIES*
FROM customers
ORDERBY scoreDESC;
```

- Returns more than 2 rows **if scores are tied**
- Keeps all rows that match the last value

⚠️ Use carefully; result size may grow.

---

### 🔹 TOP vs LIMIT (Database Difference)

| Database | Keyword |
| --- | --- |
| SQL Server | TOP |
| MySQL | LIMIT |
| PostgreSQL | LIMIT |
| Oracle | FETCH FIRST |

📌 Concept is the same, syntax differs.

---

### 🔹 Common Mistakes (Avoid These)

❌ Using TOP without ORDER BY

❌ Assuming TOP filters by value

❌ Expecting consistent results without sorting

❌ Forgetting TOP runs last

❌ Confusing TOP with WHERE

---

### 🔹 Key Takeaways (Lock This 🔐)

- TOP limits **number of rows**, not values
- Always use TOP with ORDER BY
- TOP is applied **last**
- Without ORDER BY, results are unpredictable
- TOP is ideal for:
    - Top-N analysis
    - Recent records
    - Summary reports

---

## 1️⃣4️⃣ Coding Order vs Execution Order (CRITICAL)

This section explains **why SQL behaves the way it does**,

and understanding this will remove **90% of SQL confusion**.

---

### 🔹 Why There Are Two Orders

SQL has **two different orders**:

1. **Coding Order**
    
    → The order you must *write* clauses in your query
    
2. **Execution Order**
    
    → The order in which SQL *actually processes* your query internally
    

These two orders are **NOT the same**.

---

### ✍️ Coding Order (Must Be Followed Exactly)

This is the **only valid order** when writing a SELECT query:

```
SELECT
DISTINCT
TOP
FROM
WHERE
GROUP BY
HAVING
ORDER BY
```

📌 If you violate this order, SQL throws a **syntax error**.

Example ❌:

```sql
WHERE score>500
SELECT*
FROM customers;
```

---

### ⚙️ Execution Order (How SQL Actually Works)

Internally, SQL processes your query in the following order:

```
FROM
WHERE
GROUP BY
HAVING
SELECT
ORDER BY
TOP
```

📌 This order explains **why SQL behaves the way it does**.

---

### 🔹 Step-by-Step Execution Pipeline (VERY IMPORTANT)

Let’s walk through what SQL does at each step.

---

### 1️⃣ FROM – Build the Initial Dataset

- SQL locates the table(s)
- Reads all rows and columns
- Creates a **working dataset**

👉 At this point, SQL knows *nothing* about SELECT, WHERE, or ORDER BY.

---

### 2️⃣ WHERE – Filter Rows (Before Aggregation)

- SQL evaluates conditions **row by row**
- Rows failing the condition are removed

👉 Aggregates **do not exist yet**

This explains why:

```sql
WHEREAVG(score)>500;-- ❌ invalid
```

---

### 3️⃣ GROUP BY – Combine Rows

- Rows with the same group values are merged
- One output row per group is created

👉 Row count usually **decreases here**

---

### 4️⃣ HAVING – Filter Groups (After Aggregation)

- SQL evaluates conditions on **aggregated results**
- Groups failing the condition are removed

👉 HAVING never sees raw rows

---

### 5️⃣ SELECT – Choose Columns

- SQL decides which columns to display
- Expressions and aggregates are finalized
- Column aliases are created **here**

📌 This explains why:

- Aliases cannot be used in WHERE
- Aggregates must appear after GROUP BY

---

### 6️⃣ ORDER BY – Sort the Result

- SQL sorts the final result set
- Sorting happens **after SELECT**
- Aliases *can* be used here

---

### 7️⃣ TOP – Cut the Result

- SQL keeps only the first N rows
- Everything after row N is discarded

👉 TOP always works on the **final output**

---

### 🔥 Why This Explains Common SQL Confusion

### ❌ “Why can’t I use aggregate functions in WHERE?”

Because WHERE runs **before aggregation**

---

### ❌ “Why does HAVING work but WHERE doesn’t?”

Because HAVING runs **after aggregation**

---

### ❌ “Why can’t I use column aliases in WHERE?”

Because aliases are created in **SELECT**, which runs later

---

### ❌ “Why does TOP change results if I remove ORDER BY?”

Because TOP is applied **after sorting**, and without ORDER BY the order is undefined

---

### 🔹 Mental Model (Best Way to Remember)

Think of SQL as a **data processing pipeline**:

```
Table
  ↓
FROM
  ↓
WHERE
  ↓
GROUPBY
  ↓
HAVING
  ↓
SELECT
  ↓
ORDERBY
  ↓
TOP
  ↓
FinalResult
```

Each step works on the **output of the previous step**.

---

### 🔒 Key Takeaways (LOCK THIS 🔐)

- SQL has **two orders**: writing vs execution
- Coding order prevents syntax errors
- Execution order explains behavior
- WHERE ≠ HAVING because they run at different times
- SELECT is written first but executed late
- TOP is always the **last operation**
- Understanding this makes SQL predictable

---