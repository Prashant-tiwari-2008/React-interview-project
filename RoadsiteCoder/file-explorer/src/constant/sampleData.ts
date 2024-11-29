import { Folder } from "../components/folderStr";

export const explorer :Folder  = {
    id: "1",
    name: "root",
    isFolder: true,
    items: [
        {
            id: "2",
            name: "public",
            isFolder: true,
            items: [
                {
                    id: "3",
                    name: "index.html",
                    isFolder: false,
                    items: [],
                },
                {
                    id: "4",
                    name: "public child-2",
                    isFolder: false,
                    items: [],
                },
            ]
        },
        {
            id: "5",
            name: "Src",
            isFolder: true,
            items: [
                {
                    id: "6",
                    name: "Component",
                    isFolder: true,
                    items: [
                        {
                            id : "7",
                            name : "app",
                            isFolder : false,
                            items : []
                        }
                    ],
                },
                {
                    id: "4",
                    name: "main.js",
                    isFolder: false,
                    items: [],
                },
            ]
        }
    ]

}