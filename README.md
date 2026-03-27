# FCCE - F69's Char Code  Encorder
![Example Image](image1.png)
---
## description:
a simple encoder that **"Generative AI era" survival**
---
## Key Features
Obfuscation for AI
- Internal Table Rotation
  -  Because the internal table rotates, the AI ​​needs to identify the key before it can decipher the code.
- Simple Error With Example 
  - There is an error that provides a clear example.
-  Always Changing Separator
  - Constantly changing the separator using a special method dramatically increases the difficulty for the AI.
---
## Usage
### 1:Install**(npm only)**
```
npm i fcce-v2
```
### 2:Import
**Use Local File**
```js
import { FCCEEncoder } from './libs/fccev2.min.js';
```
**Use npm(Commonjs)**
```js
const { FCCEEncoder } = require('fcce-v2');
```
**Use npm(ESModule)**
```js
import { FCCEEncoder } from 'fcce-v2'
```
### 3:Example Code
```js
const e = new FCCEEncoder();
const encrypted = e.encode("Secret Message", 7);
console.log(encrypted); 
//expected Output:'fna...hmi--oh'
const decoded = e.decode(encrypted)
//expected Output:'Secret Message'
```
---
## Caution
THIS IS MERELY A **"BASIC"** ENCODER. WHEN USING IT IN A REAL-WORLD ENVIRONMENT, **PLEASE CONSIDER SECURITY RISKS** AND USE IT IN **CONJUNCTION WITH ANOTHER METHOD** (SUCH AS BASE64).
---
## trouble-shooting
- An error occurs when I try to encode it.
  - =>is your Error `FCCEEncoderError: failed decode FCCE:Input is Empty.`?
  - =>if your Error code is It,Please Check Input Argument With below Check Code.
```js
console.log(String(input))/*test Code.
/*Test code:If the result is "[object object]", or something similar, Input is Object(argument zero of `FCCEEncoder.decode` must not be object.*/
//let result = e.decode(input) //Error Point Leave it commented out.
```
- decode function returns garbled value
  - =>The encoded string may be corrupted. Perhaps: Remember that the **encoded string** goes here.
## Fun fact
-# Did you know that this code was created solely as a hobby by its author, and reached this level of quality just for that purpose?
---
## note
> Thank you for reading the README.

created by **F69**
