/**
 * @typedef {{name:string,url:string}} Person
 * @typedef {{x:number,y:number}} AspectRatio
 * @typedef {{imgUrl:string,title:string,people?:Person[],aspectRatio?:AspectRatio}} GalleryImage
 */

/**
 * @type {GalleryImage[]}
 */
const galleryImages = [
    {
        imgUrl: "bafkreihir4esid7jflbudurembl5nylsa7ybotzvrykybazmysisg7dbii.jpg",
        title: "Just two bearcats enjoying a lil bug :3",
        people: [
            {
                name: "wewa",
                url: "https://www.instagram.com/therealwewa",
            },
            {
                name: "Kipper",
                url: "https://www.instagram.com/bluerhapsodyy",
            },
        ],
        aspectRatio: {
            x: 6,
            y: 4,
        },
    },
    {
        imgUrl: "bafkreifyegaaaipxjwm5nqxkr4unwruheuijbmwohyrkva5pem4zpdoaay.jpg",
        title: "She likes her new shark sweater",
    },
    {
        imgUrl: "bafkreihgrhwjc7doem4w7beocbwhdqdjlinwuvcr2bhrgf7exioulu5v4i.jpg",
        title: "Drew my friend JulianDough in a fit i saw on Pinterest 🥰🥰",
        people: [
            {
                name: "Julian",
                url: "https://juliandoes.art",
            },
        ],
    },
    {
        imgUrl: "bafkreifwrabag55fbqarsybpkhsdvcifly6fbwdvq5kbe2f4evuadyyoaq.jpg",
        title: "YCH on a hill at dusk",
        aspectRatio: {
            x: 4,
            y: 2,
        },
    },
    {
        imgUrl: "bafkreiapdb3wx2qx7j2mjjkrikvs22zpuj3mwyvx3mekvsaiyhfnlqpxh4.jpg",
        title: "fan art of Moss :3 mossy dude fr",
        people: [
            {
                name: "Moss",
                url: "https://bsky.app/profile/mossisdead.bsky.social",
            },
        ],
    },
    {
        imgUrl: "bafkreihtdpeeqj7fq5se7nswr2wsrevvlc34iznqtamjisbk6i2re6ao4i.jpg",
        title: "A caniform drawing reference I made",
    },
    {
        imgUrl: "Untitled209_20210812015109.png",
        title: "Lilith",
    },
];
