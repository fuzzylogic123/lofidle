import { getLofidleIndex } from "../lib/functions.js";

let answers = [
    {
        song_name: "Numb",
        lofi_artist: "Mount Eminest, holydope, Gletscher",
        lofi_preview_url: "https://p.scdn.co/mp3-preview/4548e29dc527884af70b98c67da0237d6a2829fe?cid=774b29d4f13844c495f206cafdad9c86",
        original_preview_url: "https://p.scdn.co/mp3-preview/48dac3dd8990fbd832a4d138f9e871b85b77dd51?cid=774b29d4f13844c495f206cafdad9c86",
        original_artist: "Linkin Park",
        images: [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273b4ad7ebaf4575f120eb3f193",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02b4ad7ebaf4575f120eb3f193",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851b4ad7ebaf4575f120eb3f193",
                "width": 64
            }
        ],
    },
    {
        song_name: "Umbrella",
        lofi_artist: "Slowzy",
        lofi_preview_url: "https://p.scdn.co/mp3-preview/92f12f885a2ac5d8b18475546f155f526021de36?cid=774b29d4f13844c495f206cafdad9c86",
        original_preview_url: "https://p.scdn.co/mp3-preview/8a7ef4e1b0fd8502092bcfd95a7db71371066285?cid=774b29d4f13844c495f206cafdad9c86",
        original_artist: "Rihanna, JAY-Z",
        images: [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273c10fafad6a659f2802b32421",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02c10fafad6a659f2802b32421",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851c10fafad6a659f2802b32421",
                "width": 64
            }
        ],
    },
    {
        song_name: "Smells Like Teen Spirit",
        lofi_artist: "Slowzy",
        lofi_preview_url: "https://p.scdn.co/mp3-preview/b552c695d1cfcbd0a923f192f958656f3509b0e0?cid=774b29d4f13844c495f206cafdad9c86",
        original_preview_url: "https://p.scdn.co/mp3-preview/9781673a70278effbced98841341a2321e846a62?cid=774b29d4f13844c495f206cafdad9c86",
        original_artist: "Nirvana",
        images: [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273fbc71c99f9c1296c56dd51b6",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02fbc71c99f9c1296c56dd51b6",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851fbc71c99f9c1296c56dd51b6",
                "width": 64
            }
        ],
    },
    {
        song_name: "teenage dirtbag",
        lofi_artist: "NSW Kenny",
        lofi_preview_url: "https://p.scdn.co/mp3-preview/47f1d053721f5166cd8b44c93e693b3b3731dbd0?cid=774b29d4f13844c495f206cafdad9c86",
        original_preview_url: "https://p.scdn.co/mp3-preview/a75d3f2610fe8c77b1b2df349c729b7bfeb322c5?cid=774b29d4f13844c495f206cafdad9c86",
        original_artist: "Wheatus",
        images: [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2732dcab535e36e69ef25239dda",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e022dcab535e36e69ef25239dda",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048512dcab535e36e69ef25239dda",
                "width": 64
            }
        ],
    },
    {
        song_name: "good 4 u",
        lofi_artist: "Bat Bilger",
        lofi_preview_url: "https://p.scdn.co/mp3-preview/8e137ff9fa24ce4e4a4f72029713b6bae84708f9?cid=774b29d4f13844c495f206cafdad9c86",
        original_preview_url: "https://p.scdn.co/mp3-preview/3849f6e821a9f55bc736e53791b8d88938e3034e?cid=774b29d4f13844c495f206cafdad9c86",
        original_artist: "Olivia Rodrigo",
        images: [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02a91c10fe9472d9bd89802e5a",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851a91c10fe9472d9bd89802e5a",
                "width": 64
            }
        ],
    },
    {
        song_name: "Watermelon Sugar",
        lofi_artist: "ohlos",
        lofi_preview_url: "https://p.scdn.co/mp3-preview/e586321d23512697fed7a1508f48ab19f674aa6c?cid=774b29d4f13844c495f206cafdad9c86",
        original_preview_url: "https://p.scdn.co/mp3-preview/30ce118419ec9be28ebf5cf932981ac80055807b?cid=774b29d4f13844c495f206cafdad9c86",
        original_artist: "Harry Styles",
        images: [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27377fdcfda6535601aff081b6a",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0277fdcfda6535601aff081b6a",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485177fdcfda6535601aff081b6a",
                "width": 64
            }
        ],
    },
    {
        song_name: "Say You Won't Let Go",
        lofi_artist: "Pacific",
        lofi_preview_url: "https://p.scdn.co/mp3-preview/40a804e18666e563d2207103859fb66eb34183fe?cid=774b29d4f13844c495f206cafdad9c86",
        original_preview_url: "https://p.scdn.co/mp3-preview/9480af44f6c7c9c8edd70d87aa74cbff5532f8ba?cid=774b29d4f13844c495f206cafdad9c86",
        original_artist: "James Arthur",
        images: [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27320beb61f61fcbeb33b10a9ab",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0220beb61f61fcbeb33b10a9ab",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485120beb61f61fcbeb33b10a9ab",
                "width": 64
            }
        ],
    },
    {
        song_name: "Pumped Up Kicks",
        lofi_artist: "Closed on Sunday, King | Divine",
        lofi_preview_url: "https://p.scdn.co/mp3-preview/736581c815030ca48901b8a26cd319b98f9dbaba?cid=774b29d4f13844c495f206cafdad9c86",
        original_preview_url: "https://p.scdn.co/mp3-preview/1bc2c0a7e77201e3ed8131f58a7d5799333486c4?cid=774b29d4f13844c495f206cafdad9c86",
        original_artist: "Foster The People",
        images: [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273121d5f92cf90576907dfb1e5",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02121d5f92cf90576907dfb1e5",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851121d5f92cf90576907dfb1e5",
                "width": 64
            }
        ],
    },
    {
        song_name: "Bad Habits",
        lofi_artist: "Slowzy",
        lofi_preview_url: "https://p.scdn.co/mp3-preview/ee1d3af9f4c97e472bb28051339347ff011957ca?cid=774b29d4f13844c495f206cafdad9c86",
        original_preview_url: "https://p.scdn.co/mp3-preview/043f28a973add316f01a36a68f870f588d1dbb8e?cid=774b29d4f13844c495f206cafdad9c86",
        original_artist: "Ed Sheeran",
        images: [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273ef24c3fdbf856340d55cfeb2",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ef24c3fdbf856340d55cfeb2",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851ef24c3fdbf856340d55cfeb2",
                "width": 64
            }
        ],
    },
    {
        song_name: "when the party's over",
        lofi_artist: "lokash",
        lofi_preview_url: "https://p.scdn.co/mp3-preview/3a79387d44d8e7453cf55fd64a6b9f32aba1e8b0?cid=774b29d4f13844c495f206cafdad9c86",
        original_preview_url: "https://p.scdn.co/mp3-preview/a27bad8ea53961e2cdd0ce8eb2a0b8db7b9abbc6?cid=774b29d4f13844c495f206cafdad9c86",
        original_artist: "Billie Eilish",
        images: [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27350a3147b4edd7701a876c6ce",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0250a3147b4edd7701a876c6ce",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485150a3147b4edd7701a876c6ce",
                "width": 64
            }
        ],
    },
    {
        song_name: "Habits (Stay High)",
        lofi_artist: "Miro Mas",
        lofi_preview_url: "https://p.scdn.co/mp3-preview/773f2cc8fe7e2d5cfc60828e73495bf6941ad735?cid=774b29d4f13844c495f206cafdad9c86",
        original_preview_url: "https://p.scdn.co/mp3-preview/7788f2b9c10df943daf5d9e007b410bb7a295eb1?cid=774b29d4f13844c495f206cafdad9c86",
        original_artist: "Tove Lo",
        images: [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27370cd79659edf4d5fec0840b8",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0270cd79659edf4d5fec0840b8",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485170cd79659edf4d5fec0840b8",
                "width": 64
            }
        ],
    },
    {
        song_name: "Riptide",
        lofi_artist: "Lofi Fruits Music, Chill Fruits Music",
        lofi_preview_url: "https://p.scdn.co/mp3-preview/3a820a38b52c7b6cca680b5e9e3e8a1a9baf2d96?cid=774b29d4f13844c495f206cafdad9c86",
        original_preview_url: "https://p.scdn.co/mp3-preview/b1d0206b89c0aa303bb00cc99ee0a7cfe53cbbe1?cid=774b29d4f13844c495f206cafdad9c86",
        original_artist: "Vance Joy",
        images: [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273d3dec4ae5b0234ab749b4b44",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02d3dec4ae5b0234ab749b4b44",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851d3dec4ae5b0234ab749b4b44",
                "width": 64
            }
        ]
    }
]

function getLofidle() {
    const index = getLofidleIndex();
    return answers[index]
}


export {
    getLofidle
}