# ~~ Form AutoComp ~~

[UPDATE 1.0.8] Added .getInputsTypes() method to get Input Names and Input Types 

# Form Autocom uses :

  - Scrape Website HTML Form
  - Find SRCF protections on Forms
  - Prefill Website Form For POST registration requests
  - Get Forms Input Names

# Form autocomp.createCompletion() Exemple
(This example is using directly a body. You can send a full HTML website page and the form will be detected)
```javascript
var autocomp = require("form_autocomp")
var body = `
    <form action="/requests/register.php" method="POST">
    <input type="text"  id="name">
    <input type="email" id="email">
    <input type="text" id="firstname">
    <input type="text" name="LastName">
    <input type="text" name="LastName">
    <input type="submit" value="Subscribe!">
    </form>` 
console.log(autocomp.createCompletion(body))
```
RESULT EXAMPLE :
```javascript
{
   errors: { error: 'false' },
    prefilled: {
    redirectFormUrl: '/requests/register.php',
    name: 'Correa',
    email: 'Aj6ozSykg5@laposte.fr',
    firstname: 'Bauer',
    lastname: 'Serenity'
  }
}
```



# Form autocomp.getInputsTypes() Exemple
```javascript
var autocomp = require("form_autocomp")
var body = `
    <form action="/requests/register.php" method="POST">
    <input type="text"  id="name">
    <input type="email" id="email">
    <input type="text" id="firstname">
    <input type="password" id="password">
    <input type="text" name="LastName">
    <input type="submit" value="Subscribe!">
    </form>` 
console.log(autocomp.getInputsTypes(body))
```
RESULT EXAMPLE :
```javascript
{
   errors: { error: 'false' },
    prefilled: {
    name: 'text',
    email: 'email',
    firstname: 'text',
    password: 'password',
    LastName: 'text'
  }
}
```



# Using Returned Example [Using request module]
```javascript
var request = require("request");
var datas = autocomp.createCompletion(html_body);
request.post({ 
url: datas.redirectFormUrl,    
form: datas.prefilled 
}, function(error, response, body) {});
```



# Form AutoComp Exemple [SENDING INVALID HTML VALUES]
```javascript
var autocomp = require("form_autocomp")
var body = `
<label for="lastname">Enter your LastName: >
<input type="submit" value="Subscribe!">
</form>`
    
console.log(autocomp.createCompletion(body))
```
RESULT EXAMPLE :
```javascript
{ 
   errors: {
   error: true, 
   message: 'no body found' 
  } 
}
````
