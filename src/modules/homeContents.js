let homeContents = [
    {
        content: {
            topper: 'Do you like food?',
            title: 'Accessible Food That Anyone Can Eat',
            paragraph: `Immerse yourself in the tantalizing world of gourmet dining at
        "Savor's Catch", a vibrant and electrifying restaurant brand
        crafted specifically for those who relish the thrill of culinary
        excellence. For avid food enthusiasts who feel their taste buds
        awaken at the first hint of exquisite flavors, "Savor's Catch"
        embodies the essence of that exhilarating moment when a
        perfectly prepared dish and a discerning diner engage in a
        delightful interplay of taste and craftsmanship.`,
        },
        imageLeft: {
            mobileImage: {
                media: '(max-width: 600px)',
                srcset: '74d0a0d0d5ba4c16fab5.png',
            },
            tabletImage: {
                media: '(max-width: 601px)',
                srcset: '74d0a0d0d5ba4c16fab5.png',
            },
            img: {
                loading: 'lazy',
                decoding: 'async',
                src: '74d0a0d0d5ba4c16fab5.png',
                alt: 'people',
                width: '608',
                height: '406',
            },
        },
        imageRight: {
            mobileImage: {
                media: '(max-width: 600px)',
                srcset: '7aae6a15ce7d1a7a24e7.png',
            },
            tabletImage: {
                media: '(max-width: 601px)',
                srcset: '7aae6a15ce7d1a7a24e7.png',
            },
            img: {
                loading: 'lazy',
                decoding: 'async',
                src: '7aae6a15ce7d1a7a24e7.png',
                alt: 'people',
                width: '608',
                height: '662',
            },
        },
        stats: {
            firstStat: {
                num: '99%',
                text: 'Positive customer reviews'
            },
            secondStat: {
                num: '10',
                text: `Dish 'Try Again' Special`
            },
            thirdStat: {
                num: '24/7',
                text: 'Online reservation and inquiry service'
            }
        }
    },
];

export { homeContents };
