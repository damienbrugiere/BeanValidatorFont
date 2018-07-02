import { $ } from "protractor";

export class MenuList {
    name: string;
    icon: string;
    link: string;
    constructor(name:string, icon:string, link:string){
        this.icon= icon;
        this.name = name;
        this.link = link;
    }
}
