/*@license FCCEEncorder-production V2
 *@license fccev2.d.ts
 *F69's Scriptng License
 *copyright(c) 2026 F69_Scripting. All Rights Reserved.
 *DISCLAIMER
 *There is no guarantee that this code is error-free, bug-free, always works properly, will not be subject to specification changes or service outages, is legal, or can be used with various entities. 
 *This code is provided "AS IS". By using this library, you agree to the license.
 *if you copy this program, add content 'this code is COPY OF FCCEV2"  below  'fccev2_license.txt' and add "copyright(c) [YEAR(do not use "'YY". please use "YYYY")] [NAME]' in copyright section(don't include placeholder(text between "[" and "]"))
 */
declare class FCCEEncoder{
    readonly version:number;
    l:string;
    staticl:string;
    c:number;
    FCCEEncoderError:any;
    getkey(input:string): any[];
    encode(input:string,key:number): any[];
    decode(inputr:string): any[];
}
declare const fcce: FCCEEncoder;
export default fcce;