---
title: Bind Parameters
sidebar_position: 60
---
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

SQL and C8QL support the usage of bind parameters, thus allowing to separate the query text from literal values used in the query. It is good practice to separate the query text from the literal values because this will prevent (malicious) injection of keywords and other collection names into an existing query. This injection would be dangerous because it may change the meaning of an existing query.

Using bind parameters, the meaning of an existing query cannot be changed. Bind parameters can be used everywhere in a query where literals can be used.

The syntax for bind parameters is `@name` where `@` signifies that this is a bind parameter and `name` is the actual parameter name. Parameter names must start with any of the letters `a` to `z` (upper or lower case) or a digit (`0` to `9`), and can be followed by any letter, digit or the underscore symbol.

:::note
If you are using SQL bind variables, variable name can only contain numbers. For example `$1`, `$2`, `$3` etc.
When using bind variables with SQL, collection name can't be one of bind variables. For example `SELECT * FROM $1` is not supported.
:::

In the web interface, there is a pane next to the query editor where the bind parameters can be entered.

<Tabs groupId="modify-single">
<TabItem value="c8ql" label="C8QL">

```js
FOR u IN users
  FILTER u.id == @id && u.name == @name
  RETURN u
```

</TabItem>
<TabItem value="sql" label="SQL">

```sql
SELECT * FROM users WHERE id = $1 AND name = $2
```

</TabItem>
</Tabs>

If you are using our API or SDK, the bind parameter values need to be passed along with the query when it is executed, but not as part of the query text itself. 


<Tabs groupId="modify-single">
<TabItem value="c8ql" label="C8QL">

```json
{
  "query": "FOR u IN users FILTER u.id == @id && u.name == @name RETURN u",
  "bindVars": {
    "id": 123,
    "name": "John Smith"
  }
}
```

</TabItem>
<TabItem value="sql" label="SQL">

```json
{
  "query": "SELECT * FROM users WHERE id = $1 AND name = $2",
  "bindVars": {
    "id": 123,
    "name": "John Smith"
  }
}
```

</TabItem>
</Tabs>

Bind parameters that are declared in the query must also be passed a parameter value, or the query will fail. Specifying parameters that are not declared in the query will result in an error too.

Bind variables represent a value like a string, and must not be put in quotes in the C8QL code:


<Tabs groupId="modify-single">
<TabItem value="c8ql" label="C8QL">

```js
FILTER u.name == "@name" // wrong
FILTER u.name == @name   // correct
```

</TabItem>
<TabItem value="sql" label="SQL">

```sql
SELECT * FROM users WHERE id = "$1" AND name = "$2" -- wrong
SELECT * FROM users WHERE id = $id AND name = $name -- wrong
SELECT * FROM users WHERE id = $1 AND name = $2 -- right
```

</TabItem>
</Tabs>

If you need to do string processing (concatenation, etc.) in the query, you need to use [C8QL string functions](c8ql/functions/string.md) to do so:

```js
FOR u IN users
  FILTER u.id == CONCAT('prefix', @id, 'suffix') && u.name == @name
  RETURN u
```

Bind parameters can be used for both, the dot notation as well as the square bracket notation for sub-attribute access. They can also be chained:

```js
LET doc = { foo: { bar: "baz" } }

RETURN doc.@attr.@subattr
// or
RETURN doc[@attr][@subattr]
```

```json
{
  "attr": "foo",
  "subattr": "bar"
}
```

Both variants in above example return `[ "baz" ]` as query result.

The whole attribute path, for highly nested data in particular, can also be specified using the dot notation and a single bind parameter, by passing an array of strings as parameter value. The elements of the array represent the attribute keys of the path:

```js
LET doc = { a: { b: { c: 1 } } }
RETURN doc.@attr
```

```json
{ "attr": [ "a", "b", "c" ] }
```

The example query returns `[ 1 ]` as result. Note that `{ "attr": "a.b.c" }` would return the value of an attribute called _a.b.c_, not the value of attribute _c_ with the parents _a_ and _b_ as `[ "a", "b", "c" ]` would.

A special type of bind parameter exists for injecting collection names. This type of bind parameter has a name prefixed with an additional _@_ symbol (thus when using the bind parameter in a query, two *@* symbols must be used).

```js
FOR u IN @@collection
  FILTER u.active == true
  RETURN u
```

```json
{ "@collection": "myCollection" }
```

Keywords can't be replaced by bind-values; i.e. `FOR`, `FILTER`, `IN`, `INBOUND` or function calls.
