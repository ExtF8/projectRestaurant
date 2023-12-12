export let contactsContents = [
    {
        contents: {
            title: 'Our Contacts',
            topper: 'We got food!',
            paragraph: 'Some clever text about reserving table via phone or email',
        },
        cardGroup: {
            phone: {
                info: {
                    header: 'Phone',
                    phoneNrOne: '+1 (555) 456 7899',
                    phoneNrTwo: '+1 (555) 456 7889',
                    href: `tel:555-456-7899`,
                },
                picture: {
                    img: {
                        src: 'https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/phone-grey.svg',
                        alt: 'icon',
                        width: '35',
                        height: '40',
                        loading: 'lazy',
                        decoding: 'async',
                        // aria-hidden: "true",
                    },
                },
            },
            email: {
                info: {
                    header: 'Email',
                    email: 'info@email.com',
                    href: `mailto:Info@email.com`
                },
                picture: {
                    img: {
                        src: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-email.svg',
                        alt: 'icon',
                        width: '40',
                        height: '35',
                        loading: 'lazy',
                        decoding: 'async',
                        // aria-hidden: "true",
                    },
                },
            },
            address: {
                info: {
                    header: 'Address',
                    address: `123 Fake St, STE 100 Somewhere, FL 9875`,
                    href: 'https://www.google.com/maps'
                },
                picture: {
                    img: {
                        src: 'https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/pin-grey.svg',
                        alt: 'icon',
                        width: '40',
                        height: '40',
                        loading: 'lazy',
                        decoding: 'async',
                        // aria-hidden: "true",
                    },
                },
            },
            hours: {
                info: {
                    header: 'Open Hours',
                    days: 'Monday To Saturday',
                    hours: '9:00 - 22:30',
                },
                picture: {
                    img: {
                        src: 'https://csimg.nyc3.digitaloceanspaces.com/Contact-Page/clock-grey.svg',
                        alt: 'icon',
                        width: '40',
                        height: '40',
                        loading: 'lazy',
                        decoding: 'async',
                        // aria-hidden: "true",
                    },
                },
            },
        },
    },
];
