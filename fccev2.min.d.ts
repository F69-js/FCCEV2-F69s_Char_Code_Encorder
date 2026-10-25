declare class FCCEEncoder{
    readonly version:number;
    l:string;
    staticl:string;
    c:number;
    FCCEEncoderError:any;
    getKey(input:string): string;
    encode(input: string, key: number): string;
    decode(inputr: string): string;
}
declare const fcce: FCCEEncoder;
export default fcce;
