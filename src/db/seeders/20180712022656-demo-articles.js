'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles', [
      {
        title: 'First Article',
        text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada aliquam diam sed consectetur. Nulla viverra porta nisl, non viverra orci condimentum sed. Suspendisse sem nulla, rutrum quis vulputate in, finibus et arcu. Aliquam erat volutpat. Donec fringilla pellentesque lorem, quis tristique lacus varius condimentum. Suspendisse potenti. Sed ac diam ut risus auctor pharetra. Phasellus nec suscipit ante.

        Phasellus leo sapien, accumsan consectetur gravida sed, malesuada a magna. Suspendisse tristique suscipit tincidunt. Suspendisse porttitor accumsan sem, a pulvinar ipsum hendrerit vitae. Proin sapien est, sollicitudin non mauris sit amet, eleifend pulvinar purus. Vestibulum ut nulla consequat, pulvinar dolor id, rutrum quam. Morbi dapibus vel lorem nec aliquet. Morbi viverra eleifend purus nec ultrices. Quisque quis faucibus augue. Quisque venenatis arcu at ligula fermentum, id accumsan quam molestie. Vivamus elementum fringilla elit, eget faucibus purus interdum sit amet. Sed dapibus vehicula tortor, ac venenatis justo sodales in. Proin placerat arcu auctor orci placerat aliquam. Fusce ut est tempor, porta massa sed, malesuada nibh. Donec tristique, eros vitae convallis varius, nisi erat euismod nibh, venenatis porttitor nibh sem ac mi.

        Pellentesque congue dapibus ipsum a tristique. Nam non mattis lectus. Donec non sem augue. Praesent non auctor dui. Pellentesque suscipit sollicitudin lectus volutpat rhoncus. Nam dapibus eget massa quis ullamcorper. Proin nibh augue, lacinia id dictum non, luctus a metus. Sed laoreet dictum ultricies. Donec nec tincidunt dolor, vitae rhoncus nunc. Praesent semper ex neque, nec suscipit elit luctus vel. Integer pharetra lorem magna, et posuere odio sollicitudin vel. Proin eu vulputate turpis. In pharetra leo pulvinar dictum gravida. Donec malesuada quam sit amet quam ornare ullamcorper. Vestibulum ut diam nec nunc faucibus rutrum. `,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Test Article',
        text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada aliquam diam sed consectetur. Nulla viverra porta nisl, non viverra orci condimentum sed. Suspendisse sem nulla, rutrum quis vulputate in, finibus et arcu. Aliquam erat volutpat. Donec fringilla pellentesque lorem, quis tristique lacus varius condimentum. Suspendisse potenti. Sed ac diam ut risus auctor pharetra. Phasellus nec suscipit ante.

        Phasellus leo sapien, accumsan consectetur gravida sed, malesuada a magna. Suspendisse tristique suscipit tincidunt. Suspendisse porttitor accumsan sem, a pulvinar ipsum hendrerit vitae. Proin sapien est, sollicitudin non mauris sit amet, eleifend pulvinar purus. Vestibulum ut nulla consequat, pulvinar dolor id, rutrum quam. Morbi dapibus vel lorem nec aliquet. Morbi viverra eleifend purus nec ultrices. Quisque quis faucibus augue. Quisque venenatis arcu at ligula fermentum, id accumsan quam molestie. Vivamus elementum fringilla elit, eget faucibus purus interdum sit amet. Sed dapibus vehicula tortor, ac venenatis justo sodales in. Proin placerat arcu auctor orci placerat aliquam. Fusce ut est tempor, porta massa sed, malesuada nibh. Donec tristique, eros vitae convallis varius, nisi erat euismod nibh, venenatis porttitor nibh sem ac mi.

        Pellentesque congue dapibus ipsum a tristique. Nam non mattis lectus. Donec non sem augue. Praesent non auctor dui. Pellentesque suscipit sollicitudin lectus volutpat rhoncus. Nam dapibus eget massa quis ullamcorper. Proin nibh augue, lacinia id dictum non, luctus a metus. Sed laoreet dictum ultricies. Donec nec tincidunt dolor, vitae rhoncus nunc. Praesent semper ex neque, nec suscipit elit luctus vel. Integer pharetra lorem magna, et posuere odio sollicitudin vel. Proin eu vulputate turpis. In pharetra leo pulvinar dictum gravida. Donec malesuada quam sit amet quam ornare ullamcorper. Vestibulum ut diam nec nunc faucibus rutrum. `,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Test Article 2',
        text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada aliquam diam sed consectetur. Nulla viverra porta nisl, non viverra orci condimentum sed. Suspendisse sem nulla, rutrum quis vulputate in, finibus et arcu. Aliquam erat volutpat. Donec fringilla pellentesque lorem, quis tristique lacus varius condimentum. Suspendisse potenti. Sed ac diam ut risus auctor pharetra. Phasellus nec suscipit ante.

        Phasellus leo sapien, accumsan consectetur gravida sed, malesuada a magna. Suspendisse tristique suscipit tincidunt. Suspendisse porttitor accumsan sem, a pulvinar ipsum hendrerit vitae. Proin sapien est, sollicitudin non mauris sit amet, eleifend pulvinar purus. Vestibulum ut nulla consequat, pulvinar dolor id, rutrum quam. Morbi dapibus vel lorem nec aliquet. Morbi viverra eleifend purus nec ultrices. Quisque quis faucibus augue. Quisque venenatis arcu at ligula fermentum, id accumsan quam molestie. Vivamus elementum fringilla elit, eget faucibus purus interdum sit amet. Sed dapibus vehicula tortor, ac venenatis justo sodales in. Proin placerat arcu auctor orci placerat aliquam. Fusce ut est tempor, porta massa sed, malesuada nibh. Donec tristique, eros vitae convallis varius, nisi erat euismod nibh, venenatis porttitor nibh sem ac mi.

        Pellentesque congue dapibus ipsum a tristique. Nam non mattis lectus. Donec non sem augue. Praesent non auctor dui. Pellentesque suscipit sollicitudin lectus volutpat rhoncus. Nam dapibus eget massa quis ullamcorper. Proin nibh augue, lacinia id dictum non, luctus a metus. Sed laoreet dictum ultricies. Donec nec tincidunt dolor, vitae rhoncus nunc. Praesent semper ex neque, nec suscipit elit luctus vel. Integer pharetra lorem magna, et posuere odio sollicitudin vel. Proin eu vulputate turpis. In pharetra leo pulvinar dictum gravida. Donec malesuada quam sit amet quam ornare ullamcorper. Vestibulum ut diam nec nunc faucibus rutrum. `,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Test Article 3',
        text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada aliquam diam sed consectetur. Nulla viverra porta nisl, non viverra orci condimentum sed. Suspendisse sem nulla, rutrum quis vulputate in, finibus et arcu. Aliquam erat volutpat. Donec fringilla pellentesque lorem, quis tristique lacus varius condimentum. Suspendisse potenti. Sed ac diam ut risus auctor pharetra. Phasellus nec suscipit ante.`,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Test Article 4',
        text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada aliquam diam sed consectetur. Nulla viverra porta nisl, non viverra orci condimentum sed. Suspendisse sem nulla, rutrum quis vulputate in, finibus et arcu. Aliquam erat volutpat. Donec fringilla pellentesque lorem, quis tristique lacus varius condimentum. Suspendisse potenti. Sed ac diam ut risus auctor pharetra. Phasellus nec suscipit ante.`,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Test Article 5',
        text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada aliquam diam sed consectetur. Nulla viverra porta nisl, non viverra orci condimentum sed. Suspendisse sem nulla, rutrum quis vulputate in, finibus et arcu. Aliquam erat volutpat. Donec fringilla pellentesque lorem, quis tristique lacus varius condimentum. Suspendisse potenti. Sed ac diam ut risus auctor pharetra. Phasellus nec suscipit ante.`,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Test Article 6',
        text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada aliquam diam sed consectetur. Nulla viverra porta nisl, non viverra orci condimentum sed. Suspendisse sem nulla, rutrum quis vulputate in, finibus et arcu. Aliquam erat volutpat. Donec fringilla pellentesque lorem, quis tristique lacus varius condimentum. Suspendisse potenti. Sed ac diam ut risus auctor pharetra. Phasellus nec suscipit ante.`,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Test Article 7',
        text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada aliquam diam sed consectetur. Nulla viverra porta nisl, non viverra orci condimentum sed. Suspendisse sem nulla, rutrum quis vulputate in, finibus et arcu. Aliquam erat volutpat. Donec fringilla pellentesque lorem, quis tristique lacus varius condimentum. Suspendisse potenti. Sed ac diam ut risus auctor pharetra. Phasellus nec suscipit ante.`,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Test Article 8',
        text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada aliquam diam sed consectetur. Nulla viverra porta nisl, non viverra orci condimentum sed. Suspendisse sem nulla, rutrum quis vulputate in, finibus et arcu. Aliquam erat volutpat. Donec fringilla pellentesque lorem, quis tristique lacus varius condimentum. Suspendisse potenti. Sed ac diam ut risus auctor pharetra. Phasellus nec suscipit ante.`,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Test Article 9',
        text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada aliquam diam sed consectetur. Nulla viverra porta nisl, non viverra orci condimentum sed. Suspendisse sem nulla, rutrum quis vulputate in, finibus et arcu. Aliquam erat volutpat. Donec fringilla pellentesque lorem, quis tristique lacus varius condimentum. Suspendisse potenti. Sed ac diam ut risus auctor pharetra. Phasellus nec suscipit ante.`,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Test Article 10',
        text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada aliquam diam sed consectetur. Nulla viverra porta nisl, non viverra orci condimentum sed. Suspendisse sem nulla, rutrum quis vulputate in, finibus et arcu. Aliquam erat volutpat. Donec fringilla pellentesque lorem, quis tristique lacus varius condimentum. Suspendisse potenti. Sed ac diam ut risus auctor pharetra. Phasellus nec suscipit ante.`,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Test Article 11',
        text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada aliquam diam sed consectetur. Nulla viverra porta nisl, non viverra orci condimentum sed. Suspendisse sem nulla, rutrum quis vulputate in, finibus et arcu. Aliquam erat volutpat. Donec fringilla pellentesque lorem, quis tristique lacus varius condimentum. Suspendisse potenti. Sed ac diam ut risus auctor pharetra. Phasellus nec suscipit ante.`,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Test Article 12',
        text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada aliquam diam sed consectetur. Nulla viverra porta nisl, non viverra orci condimentum sed. Suspendisse sem nulla, rutrum quis vulputate in, finibus et arcu. Aliquam erat volutpat. Donec fringilla pellentesque lorem, quis tristique lacus varius condimentum. Suspendisse potenti. Sed ac diam ut risus auctor pharetra. Phasellus nec suscipit ante.`,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Test Article 13',
        text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada aliquam diam sed consectetur. Nulla viverra porta nisl, non viverra orci condimentum sed. Suspendisse sem nulla, rutrum quis vulputate in, finibus et arcu. Aliquam erat volutpat. Donec fringilla pellentesque lorem, quis tristique lacus varius condimentum. Suspendisse potenti. Sed ac diam ut risus auctor pharetra. Phasellus nec suscipit ante.`,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Test Article 14',
        text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada aliquam diam sed consectetur. Nulla viverra porta nisl, non viverra orci condimentum sed. Suspendisse sem nulla, rutrum quis vulputate in, finibus et arcu. Aliquam erat volutpat. Donec fringilla pellentesque lorem, quis tristique lacus varius condimentum. Suspendisse potenti. Sed ac diam ut risus auctor pharetra. Phasellus nec suscipit ante.`,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Test Article 15',
        text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada aliquam diam sed consectetur. Nulla viverra porta nisl, non viverra orci condimentum sed. Suspendisse sem nulla, rutrum quis vulputate in, finibus et arcu. Aliquam erat volutpat. Donec fringilla pellentesque lorem, quis tristique lacus varius condimentum. Suspendisse potenti. Sed ac diam ut risus auctor pharetra. Phasellus nec suscipit ante.`,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Test Article 16',
        text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada aliquam diam sed consectetur. Nulla viverra porta nisl, non viverra orci condimentum sed. Suspendisse sem nulla, rutrum quis vulputate in, finibus et arcu. Aliquam erat volutpat. Donec fringilla pellentesque lorem, quis tristique lacus varius condimentum. Suspendisse potenti. Sed ac diam ut risus auctor pharetra. Phasellus nec suscipit ante.`,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Test Article 17',
        text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada aliquam diam sed consectetur. Nulla viverra porta nisl, non viverra orci condimentum sed. Suspendisse sem nulla, rutrum quis vulputate in, finibus et arcu. Aliquam erat volutpat. Donec fringilla pellentesque lorem, quis tristique lacus varius condimentum. Suspendisse potenti. Sed ac diam ut risus auctor pharetra. Phasellus nec suscipit ante.`,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Test Article 18',
        text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada aliquam diam sed consectetur. Nulla viverra porta nisl, non viverra orci condimentum sed. Suspendisse sem nulla, rutrum quis vulputate in, finibus et arcu. Aliquam erat volutpat. Donec fringilla pellentesque lorem, quis tristique lacus varius condimentum. Suspendisse potenti. Sed ac diam ut risus auctor pharetra. Phasellus nec suscipit ante.`,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Test Article 19',
        text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada aliquam diam sed consectetur. Nulla viverra porta nisl, non viverra orci condimentum sed. Suspendisse sem nulla, rutrum quis vulputate in, finibus et arcu. Aliquam erat volutpat. Donec fringilla pellentesque lorem, quis tristique lacus varius condimentum. Suspendisse potenti. Sed ac diam ut risus auctor pharetra. Phasellus nec suscipit ante.`,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Test Article 20',
        text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada aliquam diam sed consectetur. Nulla viverra porta nisl, non viverra orci condimentum sed. Suspendisse sem nulla, rutrum quis vulputate in, finibus et arcu. Aliquam erat volutpat. Donec fringilla pellentesque lorem, quis tristique lacus varius condimentum. Suspendisse potenti. Sed ac diam ut risus auctor pharetra. Phasellus nec suscipit ante.`,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Alice's Article",
        text: `Lorem ipsum dolor sit amet.`,
        UserId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Bob's Article",
        text: `This is my article.`,
        UserId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {});
  },
};
