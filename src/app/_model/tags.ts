
/// <reference types="node" />
import * as fs from 'fs';
// import { promises as fsPromises } from 'fs';

// async function readSvgFile(path: string): Promise<string> {
//     try {
//         return await fsPromises.readFile(path, 'utf-8');
//     } catch (error) {
//         console.error(`Error reading SVG file at ${path}:`, error);
//         return '';  // Provide a default value or handle the error accordingly
//     }
// }
export class Tags{
    
    static readonly Angular =new Tags('Angular','red','/Portfolio/src/assets/Angular.svg')
    static readonly TypeScript =new Tags('TypeScript','blue','../assets/github.svg')
    static readonly React =new Tags('React','blue','/Portfolio/src/assets/Angular.svg')
    static readonly JavaScript =new Tags('JavaScript','yellow','/Portfolio/src/assets/Angular.svg')
    static readonly HTML =new Tags('HTML','orange','/Portfolio/src/assets/Angular.svg')
    static readonly CSS =new Tags('CSS','blue','/Portfolio/src/assets/Angular.svg')
    static readonly BootStrap =new Tags('BootStrap','voilet','/Portfolio/src/assets/Angular.svg')
    static readonly MaterialUI =new Tags('MaterialUI','blue','/Portfolio/src/assets/Angular.svg')
    static readonly MongoDB =new Tags('MongoDB','darkgreen','/Portfolio/src/assets/Angular.svg')
    static readonly MYSQL =new Tags('MYSQL','orange','/Portfolio/src/assets/Angular.svg')
    static readonly Node =new Tags('Node','green','/Portfolio/src/assets/Angular.svg')
    static readonly Express =new Tags('Express','black','/Portfolio/src/assets/Angular.svg')


  

    constructor(private readonly key:String,public readonly color:string,private readonly svgPath: string){

    }
    get svg(): string {
        return fs.readFileSync(this.svgPath, 'utf-8');
    }

    toString(){
        return this.key;
    }
}