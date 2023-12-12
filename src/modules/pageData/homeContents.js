import homePageLeft from '../../assets/img/homePageLeft.png';
import homePageRight from '../../assets/img/homePageRight.png';

export let homeContents = [
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
                srcset: homePageLeft,
            },
            tabletImage: {
                media: '(max-width: 601px)',
                srcset: homePageLeft,
            },
            img: {
                loading: 'lazy',
                decoding: 'async',
                src: homePageLeft,
                alt: 'people',
                width: '608',
                height: '406',
            },
        },
        imageRight: {
            mobileImage: {
                media: '(max-width: 600px)',
                srcset: homePageRight,
            },
            tabletImage: {
                media: '(max-width: 601px)',
                srcset: homePageRight,
            },
            img: {
                loading: 'lazy',
                decoding: 'async',
                src: homePageRight,
                alt: 'people',
                width: '608',
                height: '662',
            },
        },
        stats: {
            firstStat: {
                num: '99%',
                text: 'Positive customer reviews',
            },
            secondStat: {
                num: '10',
                text: `Dish 'Try Again' Special`,
            },
            thirdStat: {
                num: '24/7',
                text: 'Online reservation and inquiry service',
            },
        },
    },
];
