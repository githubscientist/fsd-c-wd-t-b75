# DSA Revision & Interview Preparation

[x] Revision of core concepts   
[x] Interview coding patterns 
[x] Problem-solving strategies  
[x] Mock coding discussion 
[x] Coding optimization techniques
[x] Complexity analysis revision           

Interviews:

Product based companies vs Service based companies

- Product based companies build their own products
- examples: Google, Microsoft, Apple, Facebook, etc
- Interview Process:
    1. Round 1: Computer Science fundamentals
    2. Round 2 to Round N: Coding rounds and interviews with team leads or managers
    3. Round N+1: System Design
    4. Round N+2: Product Development
    5. Round N+3: Technical Interview
    6. Round N+4: HR Interview
- Package: approx 4 LPA - 36 LPA

- Service based companies provide services to clients
- examples: TCS, Infosys, Wipro, Accenture, etc
- Interview Process:
    1. Round 1: Quantitative Aptitude / logical reasoning / verbal reasoning
    2. Round 2: Technical Interview
    3. Round 3: HR Interview
- Package: approx 3 LPA - 10 LPA

# DBMS Fundamentals & MySQL Basics

[x] Introduction to DBMS
[x] Relational vs Non-Relational Databases
[x] Database architecture basics
[x] MySQL installation & setup
[ ] Tables, rows & columns
[ ] Creating databases & tables

Database is a collection of data
    - data can be in the form of either:
        - Structured data (organized in tables, rows, and columns)
        - Unstructured data (text, images, videos, etc)

Relational databases store structured data in tables with predefined schemas, while non-relational databases can store unstructured or semi-structured data(examples: MongoDB, Cassandra, etc)

Memory:
    1. Primary Memory 
        - Volatile memory (RAM) - Random Access Memory
        - Volatile memory loses its content when the power is turned off
    2. Secondary Memory
        - Non-volatile memory (HDD, SSD) - Hard Disk Drive, Solid State Drive, Pen drives, SD cards, etc
        - Non-volatile memory retains its content even when the power is turned off

Databases uses secondary storage to persist data, ensuring that the data remains available even after the system is powered off.

Data stored in the database is organized in the form of files.
    - Each file contains a collection of related data, typically corresponding to a table in a relational database.
    - Files are managed (Read, Write, Update, Delete) by the database management system (DBMS) to ensure data integrity and efficient access.

Database Management System(DBMS):
    - A software system that enables users to define, create, maintain, and control access to databases.
    - Examples: MySQL, PostgreSQL, Oracle, SQL Server, MongoDB, Cassandra, SQLite, MariaDB, Elasticsearch, etc.
    - Responsibilities:
        - Data definition: Defining the structure of the database, including tables, columns, and relationships.
        - Data manipulation: Inserting, updating, deleting, and querying data.
        - Data security: Controlling access to the database and ensuring data privacy.
        - Data integrity: Enforcing rules to maintain the accuracy and consistency of data.
        - Backup and recovery: Ensuring data is backed up and can be restored in case of failure.

Database Architecture
    - It follows a layered architecture, typically including:
        1. Presentation Layer: The user interface that interacts with the end-users.
        2. Application Layer: The business logic and application processing.
        3. Data Layer: The database and storage management, where the DBMS operates.
        4. Physical Layer: The actual physical storage of data on hardware devices like HDDs and SSDs.
    - Every DBMS provides a client server architecture, where the client interacts with the database through the DBMS, and the server manages the actual data storage and processing.

API: (Application Programming Interface)

To speak with the database servers, we need an API (Application Programming Interface) that allows our application to send queries and receive responses from the database. (Software clients)

We use languages like SQL (Structured Query Language) to interact with relational databases, and various query languages or APIs provided by non-relational databases (e.g., MongoDB's query language) to perform operations on the data.

Relational Vs Non-Relational Databases

Relational Databases:
    - Use structured schema with tables, rows, and columns.
    - Data is accessed using SQL.
    - Examples: MySQL, PostgreSQL, Oracle, SQL Server.

Non-Relational Databases:
    - Use flexible schema, often document, key-value, column-family, or graph-based.
    - Data is accessed using various query languages or APIs.
    - Examples: MongoDB, Cassandra, Redis, Neo4j.

SQL (Structured Query Language):

- The instructions will be in the form of SQL statements or queries that the database understands.
- We have sublanguages within SQL, such as:
    - DDL (Data Definition Language)
        - CREATE, ALTER, DROP statements.
    - DML (Data Manipulation Language)
        - INSERT, UPDATE, DELETE statements.
    - DQL (Data Query Language)
        - SELECT statements.
    - DCL (Data Control Language)
        - GRANT, REVOKE statements.
    - DTL (Data Transaction Language)
        - COMMIT, ROLLBACK, SAVEPOINT statements.

Schema: 
    - The structure that defines how data is organized in the database.
    - Includes tables, columns, data types, relationships, and constraints.
    - Helps ensure data integrity and consistency.

Day32:

[x] Select Queries
[x] WHERE, ORDER BY CLAUSES
[x] INSERT, UPDATE, DELETE operations
[x] Primary key & Foreign key constraints
[x] Joins Fundamentals
[x] Transactions & ACID Properties

From SQL Client:

```sql
\connect root@localhost
\sql
```

Queries:

To list the databases:

```sql
SHOW DATABASES;
```

Create Database:

```sql
CREATE DATABASE database_name;
```

Example:

```sql
CREATE DATABASE company_db;
```

To See the currently selected database:

```sql
SELECT DATABASE();
```

To select the database to use:

```sql
USE database_name;
```

Example:

```sql
USE company_db;
```

To drop a database:

```sql
DROP DATABASE database_name;
```

Example:

```sql
DROP DATABASE ecommerce;
```

To view the tables:

```sql
show tables;
```

To create a new table:

```sql
create table table_name (
    column1 datatype constraints,
    column2 datatype constraints,
    ...
);
```

Example:

```sql
create table departments ( department_id int, department_name varchar(50), location varchar(50) );
```

```sql
INSERT INTO departments
VALUES
(1, 'Engineering', 'Chennai'),
(2, 'HR', 'Coimbatore'),
(3, 'Finance', 'Bangalore'),
(4, 'Sales', 'Hyderabad');
```


Constraints:

Constraints are rules applied to columns in a table to enforce data integrity and consistency. Examples include PRIMARY KEY, FOREIGN KEY, UNIQUE, and NOT NULL constraints.

UNIQUE: Ensures that all values in a column are unique across the table.

NOT NULL: Ensures that a column cannot have a NULL value.

PRIMARY KEY: Uniquely identifies each record in a table. A primary key column cannot have NULL values and must contain unique values.

FOREIGN KEY: Establishes a link between the data in two tables, enforcing referential integrity.

Transactions & ACID Properties:

Transactions in SQL are sequences of one or more SQL statements that are executed as a single unit of work. 

ACID Properties:
    - Atomicity: Ensures that all operations within a transaction are completed successfully. If any operation fails, the entire transaction is rolled back.
    - Consistency: Ensures that a transaction brings the database from one valid state to another, maintaining database invariants.
    - Isolation: Ensures that the operations of one transaction are isolated from the operations of other transactions.
    - Durability: Ensures that once a transaction is committed, its changes are permanent, even in the case of a system failure.

[x] Introduction to MongoDB
[x] Collections & documents
[x] MongoDB environment setup
[x] find() queries
[x] CRUD operations

MongoDB:

- MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, allowing for dynamic schemas and scalability.

Collections:
- Collections in MongoDB are analogous to tables in relational databases. They store groups of documents.

Documents:
- Documents in MongoDB are analogous to rows in relational databases. They are JSON-like objects that contain data in key-value pairs.

```json
db.departments.insertOne({
    department_id: 1,
    department_name: "Engineering",
    location: "Chennai"
});

db.departments.insertMany([
    {
        department_id: 2,
        department_name: "HR",
        location: "Coimbatore"
    },
    {
        department_id: 3,
        department_name: "Finance",
        location: "Bangalore"
    },
    {
        department_id: 4,
        department_name: "Sales",
        location: "Hyderabad"
    }
]);

first argument: query criteria (filter)
second argument: projection (fields to include or exclude)

db.departments.find({}, {
    department_name: 1,
    location: 1
});

db.departments.find({}, {
    department_id: 0
});

this is incorrect.

db.departments.find({}, {
    department_name: 1,
    location: 1,
    department_id: 0
});

but there is an exception.

db.departments.find({}, {
    department_name: 1,
    location: 1,
    _id: 0
});


select * from departments where location = 'Coimbatore';

db.departments.find({
    location: "Coimbatore"
});

select department_name from departments where location = 'Coimbatore';

db.departments.find({
    location: "Coimbatore"
}, {
    department_name: 1
});

db.departments.updateOne(
    {
        department_id: 1
    }, 
    {
        $set: {
            location: "Coimbatore"
        }
    }
);

db.departments.updateMany(
    {
        location: "Coimbatore"
    },
    {
        $set: {
            location: "Chennai"
        }
    }
);

db.departments.updateOne(
    {
        location: "Chennai"
    },
    {
        $set: {
            location: "Coimbatore"
        }
    }
);

db.departments.deleteOne(
    {
        department_id: 4
    }
);

db.createCollection("employees");

db.employees.insertMany([
    {
        employee_id: 101,
        employee_name: "Arun",
        email: "arun@gmail.com",
        salary: 65000.00,
        age: 28,
        city: "Chennai",
        department_id: 1,
        joining_date: "2023-01-15"
    },
    {
        employee_id: 102,
        employee_name: "Priya",
        email: "priya@gmail.com",
        salary: 75000.00,
        age: 30,
        city: "Coimbatore",
        department_id: 1,
        joining_date: "2022-06-10"
    },
    {
        employee_id: 103,
        employee_name: "Karthik",
        email: "karthik@gmail.com",
        salary: 45000.00,
        age: 25,
        city: "Madurai",
        department_id: 2,
        joining_date: "2024-02-20"
    },
    {
        employee_id: 104,
        employee_name: "Meena",
        email: "meena@gmail.com",
        salary: 55000.00,
        age: 32,
        city: "Bangalore",
        department_id: 3,
        joining_date: "2021-10-05"
    },
    {
        employee_id: 105,
        employee_name: "Vijay",
        email: "vijay@gmail.com",
        salary: 40000.00,
        age: 27,
        city: "Chennai",
        department_id: 4,
        joining_date: "2023-08-11"
    },
    {
        employee_id: 106,
        employee_name: "Divya",
        email: "divya@gmail.com",
        salary: 80000.00,
        age: 35,
        city: "Coimbatore",
        department_id: 1,
        joining_date: "2020-04-15"
    },
    {
        employee_id: 107,
        employee_name: "Rahul",
        email: "rahul@gmail.com",
        salary: 50000.00,
        age: 29,
        city: "Hyderabad",
        department_id: 4,
        joining_date: "2022-12-01"
    },
    {
        employee_id: 108,
        employee_name: "Sneha",
        email: "sneha@gmail.com",
        salary: 60000.00,
        age: 26,
        city: "Chennai",
        department_id: null,
        joining_date: "2024-05-12"
    }
]);

// to list all the employees
db.employees.find();

// to list all the employees in Chennai
db.employees.find({ city: "Chennai" });

lt -> less than
gt -> greater than
eq -> equal to
ne -> not equal to
lte -> less than or equal to
gte -> greater than or equal to

db.employees.find({
    age: {
        $gte: 30
    }
});

db.employees.find({
    $and: [
        {
            age: {
                $gte: 30
            },
            city: "Coimbatore"
        }
    ]
});

// to sort products by price in descending order
db.products.find().sort({ price: -1, name: 1 });

```

Indexing Concepts:

Without index, MongoDB must perform a collection scan (COLLSCAN) to find the matching documents, which can be slow for large collections.

With an index on the queried fields, MongoDB can quickly locate the matching documents using the index, which significantly improves query performance.

[x] HTML document structure
[x] Tags & elements
[x] Headings, paragraphs & formatting tags
[x] Forms & input elements
[x] Lists, tables & semantic tags
[x] Audio, video & iframe integration

HTML:
Hyper Text Markup Language

- It is used to create webpages.
- webpages have content structured using web page elements such as headings, paragraphs, lists, tables, and multimedia content.

<!DOCTYPE html>
To tell the browser that the document is an HTML5 document.

<html>
To define the root of an HTML document.

semantic tags:

They define the structure and meaning of the content within an HTML document, making it easier for browsers and search engines to understand the content.

Examples of semantic tags include:
- `<header>`: Defines the header section of a document or a section.
- `<nav>`: Defines a container for navigation links.
- `<main>`: Specifies the main content of a document.
- `<article>`: Represents an independent piece of content.
- `<section>`: Defines a section in a document.
- `<aside>`: Represents content that is tangentially related to the main content.
- `<footer>`: Defines the footer section of a document or a section.