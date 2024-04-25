import { Tags } from "./tags";

export interface Projrct{
    id:number;
    name:string;
    summary:string;
    projectLink:string;
    description:string;
    pictures:string[];
    tags:Tags[]

}