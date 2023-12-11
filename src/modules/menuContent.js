import burger from '../assets/img/menu/bisonBurger.png';
import chicken from '../assets/img/menu/chickenSaladMango.png';
import lasagna from '../assets/img/menu/lasagna.png';
import pizza from '../assets/img/menu/meatLoversPizza.png';
import sauce from '../assets/img/menu/pricklyPearPorkSauce.png';
import tostada from '../assets/img/menu/purpleCornTostada.png';

export let menuContents = [
    {
        content: {
            title: 'Our Specials',
            paragraph: `Indulge in our Special Menu, where each dish is a masterpiece of
            flavor and creativity. From the heartiness of a Bison Burger to
            the exotic flair of Curried Chicken Salad with Mango, experience
            a culinary journey that delights and surprises with every bite.`,
        },
        cardGroup: {
            listItemOne: {
                info: {
                    name: 'Lasagna',
                    price: '56€',
                    itemParagraph: `A classic favorite, our lasagna layers tender pasta with
                    rich meat sauce and creamy béchamel, topped with golden,
                    bubbling cheese for a comforting and indulgent meal.`,
                },
                picture: {
                    mobileImage: {
                        media: '(max-width: 600px)',
                        srcset: lasagna,
                    },
                    tabletImage: {
                        media: '(max-width: 601px)',
                        srcset: lasagna,
                    },
                    img: {
                        loading: 'lazy',
                        decoding: 'async',
                        src: lasagna,
                        alt: 'people',
                        width: '160',
                        height: '160',
                    },
                },
            },
            listItemTwo: {
                info: {
                    name: 'Bison Burger',
                    price: '56€',
                    itemParagraph: `This hearty burger features a juicy bison patty topped
                    with fresh vegetables and melted cheese, served in a
                    rustic bun for a robust and satisfying experience.`,
                },
                picture: {
                    mobileImage: {
                        media: '(max-width: 600px)',
                        srcset: burger,
                    },
                    tabletImage: {
                        media: '(max-width: 601px)',
                        srcset: burger,
                    },
                    img: {
                        loading: 'lazy',
                        decoding: 'async',
                        src: burger,
                        alt: 'people',
                        width: '160',
                        height: '160',
                    },
                },
            },
            listItemThree: {
                info: {
                    name: 'Curried Chicken Salad with Mango',
                    price: '56€',
                    itemParagraph: `A refreshing mix of tender curried chicken and sweet
                    mango slices, tossed with vibrant greens for a light yet
                    flavorful salad.`,
                },
                picture: {
                    mobileImage: {
                        media: '(max-width: 600px)',
                        srcset: chicken,
                    },
                    tabletImage: {
                        media: '(max-width: 601px)',
                        srcset: chicken,
                    },
                    img: {
                        loading: 'lazy',
                        decoding: 'async',
                        src: chicken,
                        alt: 'people',
                        width: '160',
                        height: '160',
                    },
                },
            },
            listItemFour: {
                info: {
                    name: `Meat Lovers' Sheet Pan Pizza`,
                    price: '56€',
                    itemParagraph: `Loaded with an assortment of meats like pepperoni,
                    sausage, and bacon, this pizza offers a carnivore's
                    delight with every crispy, cheesy bite.`,
                },
                picture: {
                    mobileImage: {
                        media: '(max-width: 600px)',
                        srcset: pizza,
                    },
                    tabletImage: {
                        media: '(max-width: 601px)',
                        srcset: pizza,
                    },
                    img: {
                        loading: 'lazy',
                        decoding: 'async',
                        src: pizza,
                        alt: 'people',
                        width: '160',
                        height: '160',
                    },
                },
            },
            listItemFive: {
                info: {
                    name: `Purple Corn Tostada`,
                    price: '56€',
                    itemParagraph: `A feast for the eyes and the palate, this tostada uses a
                    unique purple corn shell, piled high with seasoned meats
                    and fresh toppings for a crunchy, savory treat.`,
                },
                picture: {
                    mobileImage: {
                        media: '(max-width: 600px)',
                        srcset: tostada,
                    },
                    tabletImage: {
                        media: '(max-width: 601px)',
                        srcset: tostada,
                    },
                    img: {
                        loading: 'lazy',
                        decoding: 'async',
                        src: tostada,
                        alt: 'people',
                        width: '160',
                        height: '160',
                    },
                },
            },
            listItemSix: {
                info: {
                    name: `Prickly Pear Pork Sauce`,
                    price: '56€',
                    itemParagraph: `An innovative fusion, this sauce blends the sweetness of
                    prickly pear with rich pork, creating a perfect
                    complement to enhance any gourmet dish.`,
                },
                picture: {
                    mobileImage: {
                        media: '(max-width: 600px)',
                        srcset: sauce,
                    },
                    tabletImage: {
                        media: '(max-width: 601px)',
                        srcset: sauce,
                    },
                    img: {
                        loading: 'lazy',
                        decoding: 'async',
                        src: sauce,
                        alt: 'people',
                        width: '160',
                        height: '160',
                    },
                },
            },
        },
    },
];
