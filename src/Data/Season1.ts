import Album from '../Interfaces/Album';

const Season1: Album[] = [
    {
        Title: "Silent Alarm",
        Artist: "Block Party",
        Date: new Date("8-9-24"),
        Submitter: "Matt",
        FavoriteTracks: [{
            Title: "This Modern Love",
            Submitters: ["Matt", "Jordan"],
            SpotifyUrl: "2PAhcPwab2sJz340QHtunD",
            Number: 7
        },
        {
            Title: "She's Hearing Voices",
            Submitters: ["Stauffer"],
            SpotifyUrl: "5eZayur1Lv8N0RLKaMUW3b",
            Number: 6
        }, {
            Title: "Like Eating Glass",
            Submitters: ["Peter"],
            SpotifyUrl: "0K3Xm2MeSXKbvydIJfTpuN",
            Number: 1
        }, {
            Title: "The Pioneers",
            Submitters: ["Mike"],
            SpotifyUrl: "5KX3uj0E1TdvNfrognZhHJ",
            Number: 8
        },
        {
            Title: "Positive Tension",
            Submitters: ["Amanda"],
            SpotifyUrl: "5VPGr86ujVuIB04sapIZux",
            Number: 3
        }],
        LeastFavoritTracks: [],
        ImageURl: "https://i.scdn.co/image/ab67616d0000b273029f1f3a1a118dc326687c34",
        ThemeColor: "#595252",
    },
    {
        Title: "Internet Arms",
        Artist: "Diane Coffee",
        Date: new Date("10-26-24"),
        Submitter: "Stauffer",
        FavoriteTracks: [{
            Title: "Like a Child Dose",
            Submitters: ["Matt"],
            SpotifyUrl: "2bneIgbhPVewKlWHCKxb50",
            Number: 2
        },
        {
            Title: "Not Ready to Go",
            Submitters: ["Stauffer"],
            SpotifyUrl: "6TMXUFy1zNN5JqNhoM0Odw",
            Number: 1
        }, {
            Title: "Internet Arms",
            Submitters: ["Jordan"],
            SpotifyUrl: "5pQFCYBvBhBQOhin4hiwml",
            Number: 6
        },
        {
            Title: "Work It",
            Submitters: ["Amanda", "Peter"],
            SpotifyUrl: "0GwMjFAuEtiG1LrBomuPa0",
            Number: 9
        }, {
            Title: "Doubt",
            Submitters: ["Mike"],
            SpotifyUrl: "51M9JmOO24WK2JhQvKn34f",
            Number: 8
        }],
        LeastFavoritTracks: [],
        ImageURl: "https://i.scdn.co/image/ab67616d0000b2731dd760490d0e54d81d27ed45",
        ThemeColor: "#005f2f",
    },
    {
        Title: "Fetch the Bolt Cutters",
        Artist: "Fiona Apple",
        Date: new Date("12-15-24"),
        Submitter: "Jordan",
        FavoriteTracks: [
            {
                Title: "Shameika",
                Submitters: ["Matt", "Stauffer"],
                SpotifyUrl: "2pDKE8Q40TDGPl1O11DKKn",
                Number: 2
            },
            {
                Title: "I Want You to Love Me",
                Submitters: ["Jordan", "Peter"],
                SpotifyUrl: "73SBAGI4fPFm4VkB3NjXq8",
                Number: 1
            }, {
                Title: "Ladies",
                Submitters: ["Mike"],
                SpotifyUrl: "0jH0IsCBGackT3RmHBbSUI",
                Number: 8
            }, {
                Title: "Under the Table",
                Submitters: ["Amanda"],
                SpotifyUrl: "12WhIX6MvI93bS3wPSStSY",
                Number: 4
            }
        ],
        LeastFavoritTracks: [],
        ImageURl: "https://i.scdn.co/image/ab67616d0000b273841292c1316c4bf85447bcd9",
        ThemeColor: "#402038",
        InvertInfoIcon: true
    },
    {
        Title: "Soon it Will be Cold Enough",
        Artist: "Emancipator",
        Date: new Date("1-19-25"),
        Submitter: "Peter",
        FavoriteTracks: [{
            Title: "Maps",
            Submitters: ["Matt"],
            SpotifyUrl: "3lDjsSqcbZ110eJkUfFm4m",
            Number: 13
        },
        {
            Title: "Lionheart",
            Submitters: ["Stauffer"],
            SpotifyUrl: "1MfZ0TFSbzeWtZSZWlScxz",
            Number: 1
        }, {
            Title: "First Snow",
            Submitters: ["Peter"],
            SpotifyUrl: "4hGXwJZJASH1U7JGKnhJEg",
            Number: 9
        }, {
            Title: "Smoke Signals",
            Submitters: ["Amanda", "Mike"],
            SpotifyUrl: "0L6QEgCNAZx9SIHmflTyZx",
            Number: 7
        }],
        LeastFavoritTracks: [],
        ImageURl: "https://i.scdn.co/image/ab67616d0000b273c2f076b3cbdac1b5cf3901f3",
        ThemeColor: "#535353"
    },
    {
        Title: "Masana Temples",
        Artist: "Kikagaku Moyo",
        Date: new Date("2-23-25"),
        Submitter: "Mike",
        FavoriteTracks: [{
            Title: "Gatherings",
            Submitters: ['Matt', 'Mike', 'Peter', 'Stauffer'],
            SpotifyUrl: "5npBZxim12CKui1b7GPawB",
            Number: 9
        }, {
            Title: "Nana",
            Submitters: ["Amanda"],
            SpotifyUrl: "0thTo7umyVGvfnaQmQUuZX",
            Number: 6
        }],
        LeastFavoritTracks: [],
        ImageURl: "https://i.scdn.co/image/ab67616d0000b273a765313b610423c0f13aa59e",
        ThemeColor: "#96281a"
    },
    {
        Title: "All Born Screaming",
        Artist: "St. Vincent",
        Date: new Date("3-25-25"),
        Submitter: "Amanda",
        FavoriteTracks: [{
            Title: "So Many Planets",
            Submitters: ["Matt"],
            SpotifyUrl: "0wOn9dfWEuILjkjmpkrmDk",
            Number: 9
        }, {
            Title: "Broken Man",
            Submitters: ["Stauffer"],
            SpotifyUrl: "1kgLXgHrXecZyRCDROfAPb",
            Number: 73
        }, {
            Title: "The Power's out",
            Submitters: ["Amanda", "Jordan"],
            SpotifyUrl: "3LLpaB6tOUeSZRAkHBUEPU",
            Number: 7
        }, {
            Title: "Sweetest Fruit",
            Submitters: ["Peter"],
            SpotifyUrl: "3IW8BlrMcCCy5JAiL6GmQ3",
            Number: 8
        }],
        LeastFavoritTracks: [],
        ImageURl: "https://i.scdn.co/image/ab67616d0000b273902e9fffc3787dd4fe7678e7",
        ThemeColor: "#6c4d00",
        InvertInfoIcon: true
    }
];

export default Season1;
