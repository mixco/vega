export interface Menu {
   id: number;
   title: string;
   submenu: [any];
}
export interface Home {
   subtitle: string;
   title: string;
   submenu: Content[];
}
export interface Content {
   content: string;
   title: string;
}
export interface Tab {
    link: string;
    text: string;
    img: string;
    icon: string;
    pid: number;
}
