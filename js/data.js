const pageHeroImages = {
    home: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=1600&q=80",
    tvShows: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=1600&q=80",
    movies: "https://images.unsplash.com/photo-1506957411917-a2411b19b657?w=1600&q=80",
    games: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1600&q=80",
    newPopular: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&q=80",
    myList: "https://images.unsplash.com/photo-1571847382328-deba0a881589?w=1600&q=80"
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
                "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=400&q=80",
                "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&q=80",
                "https://images.unsplash.com/photo-1542204165-4ee4c4f7b3c4?w=400&q=80",
                "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80",
                "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=400&q=80"
            ]
        },
        {
            title: "Drama Series",
            images: [
                "https://images.unsplash.com/photo-1491841573178-8af01f1e99df?w=400&q=80",
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&q=80",
                "https://images.unsplash.com/photo-1557683316-973673baf926?w=400&q=80",
                "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=400&q=80",
                "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=400&q=80"
            ]
        }
    ],
    movies: [
        {
            title: "New Releases",
            images: [
                "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=400&q=80",
                "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&q=80",
                "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=400&q=80",
                "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?w=400&q=80",
                "https://images.unsplash.com/photo-1512138664757-360e0a51449a?w=400&q=80"
            ]
        },
        {
            title: "Comedy Movies",
            images: [
                "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&q=80",
                "https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=400&q=80",
                "https://images.unsplash.com/photo-1543584756-8f40a802e14f?w=400&q=80",
                "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&q=80",
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80"
            ]
        }
    ],
    games: [
        {
            title: "Featured Games",
            images: [
                "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80",
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&q=80",
                "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&q=80",
                "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=400&q=80",
                "https://images.unsplash.com/photo-1491841573178-8af01f1e99df?w=400&q=80"
            ]
        },
        {
            title: "Action & Adventure",
            images: [
                "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80",
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
                "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=400&q=80",
                "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80",
                "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=400&q=80"
            ]
        }
    ],
    newPopular: [
        {
            title: "Just Added",
            images: [
                "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&q=80",
                "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=400&q=80",
                "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80",
                "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&q=80",
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80"
            ]
        },
        {
            title: "Trending Now",
            images: [
                "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
                "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=400&q=80",
                "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400&q=80",
                "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=400&q=80"
            ]
        }
    ],
    myList: [
        {
            title: "Continue Watching",
            images: [
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&q=80",
                "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&q=80",
                "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=400&q=80",
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80",
                "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80"
            ]
        },
        {
            title: "Recommended for You",
            images: [
                "https://images.unsplash.com/photo-1541534401786-9ec5e784f549?w=400&q=80",
                "https://images.unsplash.com/photo-1557683316-973673baf926?w=400&q=80",
                "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80",
                "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=400&q=80",
                "https://images.unsplash.com/photo-1512138664757-360e0a51449a?w=400&q=80"
            ]
        }
    ]
};

const movieCategories = pageCategories.home;
