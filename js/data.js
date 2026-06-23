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
            title: "Action Movies",
            images: [
                "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80",
                "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?w=400&q=80",
                "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=400&q=80",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
                "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80"
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
        },
        {
            title: "New Releases",
            images: [
                "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=400&q=80",
                "https://images.unsplash.com/photo-1512427691650-2f9c79dfdc7c?w=400&q=80",
                "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&q=80",
                "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&q=80",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80"
            ]
        }
    ],
    tvShows: [
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
            title: "Action Movies",
            images: [
                "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80",
                "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?w=400&q=80",
                "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=400&q=80",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
                "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80"
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
        },
        {
            title: "New Releases",
            images: [
                "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=400&q=80",
                "https://images.unsplash.com/photo-1512427691650-2f9c79dfdc7c?w=400&q=80",
                "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&q=80",
                "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&q=80",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80"
            ]
        }
    ],
    movies: [
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
            title: "Action Movies",
            images: [
                "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80",
                "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?w=400&q=80",
                "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=400&q=80",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
                "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80"
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
        },
        {
            title: "New Releases",
            images: [
                "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=400&q=80",
                "https://images.unsplash.com/photo-1512427691650-2f9c79dfdc7c?w=400&q=80",
                "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&q=80",
                "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&q=80",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80"
            ]
        }
    ],
    games: [
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
            title: "Action Movies",
            images: [
                "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80",
                "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?w=400&q=80",
                "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=400&q=80",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
                "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80"
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
        },
        {
            title: "New Releases",
            images: [
                "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=400&q=80",
                "https://images.unsplash.com/photo-1512427691650-2f9c79dfdc7c?w=400&q=80",
                "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&q=80",
                "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&q=80",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80"
            ]
        }
    ],
    newPopular: [
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
            title: "Action Movies",
            images: [
                "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80",
                "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?w=400&q=80",
                "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=400&q=80",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
                "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80"
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
        },
        {
            title: "New Releases",
            images: [
                "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=400&q=80",
                "https://images.unsplash.com/photo-1512427691650-2f9c79dfdc7c?w=400&q=80",
                "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&q=80",
                "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&q=80",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80"
            ]
        }
    ],
    myList: [
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
            title: "Action Movies",
            images: [
                "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80",
                "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?w=400&q=80",
                "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=400&q=80",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
                "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80"
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
        },
        {
            title: "New Releases",
            images: [
                "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=400&q=80",
                "https://images.unsplash.com/photo-1512427691650-2f9c79dfdc7c?w=400&q=80",
                "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&q=80",
                "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&q=80",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80"
            ]
        }
    ]
};

const movieCategories = pageCategories.home;

window.pageHeroImages = pageHeroImages;
window.pageCategories = pageCategories;
window.movieCategories = movieCategories;
