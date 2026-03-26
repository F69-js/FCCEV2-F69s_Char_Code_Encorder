# FCCE - F69's Char Code  Encorder
![Example Image](image1.png)
##description:
a simple encoder that **"Generative AI era" survival**
---
##Key Features
Obfuscation for AI
Internal Table Rotation, Simple Error With Example and Always Changing Separator
---
##Usage
```js
import { FCCEEncoder } from './libs/fccev2.min.js';
const e = new FCCEEncoder();
const encrypted = e.encode("Secret Message", 7);
console.log(encrypted); 
//expected Output:'fna...hmi--oh'
const decoded = e.decode(encrypted)
//expected Output:'Secret Message'
```
---
##Caution
THIS IS MERELY A **"BASIC"** ENCODER. WHEN USING IT IN A REAL-WORLD ENVIRONMENT, **PLEASE CONSIDER SECURITY RISKS** AND USE IT IN **CONJUNCTION WITH ANOTHER METHOD** (SUCH AS BASE64).
##trouble-shooting
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
---
##note
> Thank you for reading the README.

created by **F69**
---
