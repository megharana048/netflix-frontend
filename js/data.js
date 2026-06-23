const pageHeroImages = {
    home: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1600&q=80",
    tvShows: "https://images.unsplash.com/photo-1513149739851-50f01dfcbd9a?w=1600&q=80",
    movies: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=1600&q=80",
    games: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&q=80",
    newPopular: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1600&q=80",
    myList: "https://images.unsplash.com/photo-1522120691032-0f0a2a4cf3f9?w=1600&q=80"
};

const pageCategories = {
    home: [
        {
            title: "Trending Now",
            images: [
                "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=400&q=80",
                "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80",
                "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&q=80",
                "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80",
                "https://images.unsplash.com/photo-1512138664757-360e0a51449a?w=400&q=80"
            ]
        },
        {
            title: "Top Rated",
            images: [
                "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&q=80",
                "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&q=80",
                "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400&q=80",
                "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=400&q=80",
                "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&q=80"
            ]
        },
        {
            title: "Popular on Netflix",
            images: [
                "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400&q=80",
                "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=400&q=80",
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80",
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
            ]
        }
    ],
    tvShows: [
        {
            title: "Must-Watch Series",
            images: [
                "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=400&q=80",
                "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&q=80",
                "https://images.unsplash.com/photo-1528870907615-8c1c03e5335b?w=400&q=80",
                "https://images.unsplash.com/photo-1515865636961-9f2a3358ba60?w=400&q=80",
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80"
            ]
        },
        {
            title: "Drama Series",
            images: [
                "https://images.unsplash.com/photo-1485841890310-6a055c88698a?w=400&q=80",
                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80",
                "https://images.unsplash.com/photo-1515513426156-7f2385d35012?w=400&q=80",
                "https://images.unsplash.com/photo-1495231916356-a86217efff12?w=400&q=80",
                "https://images.unsplash.com/photo-1512758017271-2ec8f74f2ce2?w=400&q=80"
            ]
        }
    ],
    movies: [
        {
            title: "New Releases",
            images: [
                "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&q=80",
                "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&q=80",
                "https://images.unsplash.com/photo-1512427691650-2f9c79dfdc7c?w=400&q=80",
                "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&q=80",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80"
            ]
        },
        {
            title: "Comedy Movies",
            images: [
                "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&q=80",
                "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80",
                "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&q=80",
                "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&q=80",
                "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80"
            ]
        }
    ],
    games: [
        {
            title: "Featured Games",
            images: [
                "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80",
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
                "https://images.unsplash.com/photo-1511515123893-b7b23935c5d2?w=400&q=80",
                "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=400&q=80",
                "https://images.unsplash.com/photo-1524103702480-6b4a2a76b134?w=400&q=80"
            ]
        },
        {
            title: "Action & Adventure",
            images: [
                "https://images.unsplash.com/photo-1494516644918-f5e5f4f4be10?w=400&q=80",
                "https://images.unsplash.com/photo-1490673363988-39f287a52057?w=400&q=80",
                "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&q=80",
                "https://images.unsplash.com/photo-1555746670-436c5f76c6bc?w=400&q=80",
                "https://images.unsplash.com/photo-1532444458207-03f8f2e4cb38?w=400&q=80"
            ]
        }
    ],
    newPopular: [
        {
            title: "Just Added",
            images: [
                "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=400&q=80",
                "https://images.unsplash.com/photo-1495555687391-7f8a9520703a?w=400&q=80",
                "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=400&q=80",
                "https://images.unsplash.com/photo-1498146831523-75c3d0d1cba5?w=400&q=80",
                "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80"
            ]
        },
        {
            title: "Trending Now",
            images: [
                "https://images.unsplash.com/photo-1526318472351-bc8cfef8a0d9?w=400&q=80",
                "https://images.unsplash.com/photo-1502078475482-4c9d5db3f5d7?w=400&q=80",
                "https://images.unsplash.com/photo-1513451713350-dee890297c4a?w=400&q=80",
                "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&q=80",
                "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=400&q=80"
            ]
        }
    ],
    myList: [
        {
            title: "Continue Watching",
            images: [
                "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=80",
                "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80",
                "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80",
                "https://images.unsplash.com/photo-1542204165-4ee4c4f7b3c4?w=400&q=80",
                "https://images.unsplash.com/photo-1517502166878-35c93a0072bb?w=400&q=80"
            ]
        },
        {
            title: "Recommended for You",
            images: [
                "https://images.unsplash.com/photo-1472437774355-71ab6752b434?w=400&q=80",
                "https://images.unsplash.com/photo-1498575207490-5f9c00d10e6a?w=400&q=80",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
                "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80",
                "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&q=80"
            ]
        }
    ]
};

const movieCategories = pageCategories.home;

window.pageHeroImages = pageHeroImages;
window.pageCategories = pageCategories;
window.movieCategories = movieCategories;
