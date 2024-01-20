export const springy = [
  0, 0.0701, 0.2329, 0.4308, 0.6245, 0.7906, 0.9184, 1.0065, 1.059, 1.0833,
  1.0872, 1.0783, 1.0628, 1.0453, 1.0288, 1.015, 1.0048, 0.9979, 0.994, 0.9925,
  0.9925, 0.9935, 0.9949, 0.9964, 0.9978, 0.999, 0.9998,
];

export const onFrames = (animate) => {
  const { animatingProperties: props, frames } = animate;
  if (frames === undefined || props === undefined) {
    return frames;
  }
  return [
    frames[0],
    ...springy.map((v) => {
      const frame = {};
      const x = props.left ? `translateX(${props.left * (1 - v)}px)` : '';
      const y = props.top ? `translateY(${props.top * (1 - v)}px)` : '';
      const sx = props.width
        ? `scaleX(${props.width + (1 - props.width) * v})`
        : '';
      const sy = props.height
        ? `scaleY(${props.height + (1 - props.height) * v})`
        : '';
      frame.transform = `${x} ${y} ${sx} ${sy}`;
      return frame;
    }),
    frames[1],
  ];
};

export const data = [
  {
    id: 0,
    title: 'Darkco',
    description: 'Dark Modern Website Themes',
    content:
      'Develope your modern website with darkco flatfile CMS - inclue with backend admin panel , SEO plugins , and Documentation Darkco Project',
    video: 'hOdQ0PCspW4',
  },
  {
    id: 1,
    title: 'Artos',
    description: 'Astro JS Multipurpose',
    content:
      'Get start with Artos a Multipurpose themes template for Astro JS, complete features Static Page, Dynamic Page, Blog Page, Gallery Page, Image Gallery, Video , and more..',
    video: 'aFYEr4mjuCM',
  },
  {
    id: 2,
    title: 'Docus',
    description: 'Astro JS Starlight',
    content:
      'Lets develop your documentation website project with docus, Astro JS starlight with complete features, Landing Page Area, Documentation Page, Blog Article Post, and more..',
    video: 'yJigjNqGpi8',
  },
  {
    id: 3,
    title: 'TextX',
    description: 'Minimalist Clean Blog',
    content:
      'Text-X PRO Version is a minimalist blog themes template with clean design UI, include with backend admin panel , support SEO plugins, and more features.',
    video: 'ML0554sYNgI',
  },
  {
    id: 4,
    title: 'NextX',
    description: 'All in one web and mobile UI',
    content:
      'Develope your booking website project for rent car limousine services, or for hotel,restaurant with Next-X Prtoject , All in one Desktop and Mobile UI design.',
    video: 'fROYzJ22bVE',
  },
  {
    id: 21,
    title: 'NGX',
    description: 'Angular Project for booking website',
    content:
      'Built your booking website project with NGX angular themes template, integration with booking form , JSON data , Backend admin with Headless Git Based CMS.',
    video: 'jhaTLQ5taXw',
  },
  {
    id: 22,
    title: 'BluC',
    description: 'A Flatfile Ionic Mobile Web CMS',
    content:
      'If you want to focus on mobile version, so use this project is the best soltuion, develope with Ionic mobile framework integrate flatfile cms backend admin.',
    video: 'S0rdBKYl7lM',
  },
  {
    id: 23,
    title: 'TBlog',
    description: 'Tailwind Blog Flatfile CMS.',
    content:
      'Get Start Now with tailwind blog cms project, include with backend admin panel , make easy for you for update your website design and content post.',
    video: 'AkqI6zRN2Gw',
  },
  {
    id: 24,
    title: 'DXShop',
    description: 'A Laravel Project POS Web App.',
    content:
      'All in one website integration with point of sale application for your store, develope with Laravel the PHP artisan, Frontend and Backend ready.',
    video: 'MuIIkU_MqaM',
  },
  {
    id: 5,
    title: 'CPro',
    description: 'Company Profile Website Template',
    content:
      'Build your company profile site with Luxury and attractive design,with this project. We can use the static site generator Eleventy, Jekyll or Astro JS or Flatifle CMS.',
    video: 'mDs8BirlC5o',
  },
  {
    id: 6,
    title: 'Mr.Shoes',
    description: 'Shoes store website themes',
    content:
      'If you need to develop a modern shoe website, you can use this project, and you can choose your favorite technology to implement it, Headless CMS or Flatfile CMS.',
    video: 'BWpSHiOjIZo',
  },
  {
    id: 7,
    title: 'Barber',
    description: 'Clean Minimalist Barber Website',
    content:
      'Develop your modern barber shop with us, we can use your favorite framework to build your modern barbershop website, react, next js, gatsby js, svelte or angular.',
    video: '9hIJzVtdfxo',
  },
  {
    id: 8,
    title: 'Cute',
    description: 'Cute website design for you.',
    content:
      'Its time to design a website with a cute appearance, more attractive and unique to use in your website project.We can use Flatfile CMS or Static Site Generator.',
    video: 'JZYnB03dPRE',
  },
  {
    id: 9,
    title: 'Salon',
    description: 'Salon SPA Website application',
    content:
      'Perfect your website creation for your salon and spa by using this salon spa web app, the backend and frontend are ready to use. Integration with booking form.',
    video: 'kIV2DEjHwKg',
  },
  {
    id: 10,
    title: 'Resto',
    description: 'Restaurant Content Management System',
    content:
      'Its easy and fast to create a restaurant website project using RESTO CMS to support your culinary business ,Includes an admin backend to speed up your website updates.',
    video: 'brVNEB0NanE',
  },
  {
    id: 11,
    title: 'WA Shop',
    description: 'Whatsapp online shop store',
    content:
      'Be quick in handling customer orders by using a direct ordering scheme on WhatsApp, with this concept making it easier for customers to order from the website and go directly to your WhatsApp.',
    video: 'wuvIR7W34M4',
  },
  {
    id: 12,
    title: 'Android',
    description: 'Build bundle android application',
    content:
      'If you want to develop an Android app, we can help you, we can use Android JAVA, React Native, Ionic, Flutter and other mobile framework technologies.',
    video: 'hvzjFQ7nvoQ',
  },
  {
    id: 13,
    title: 'QRCode',
    description: 'QR Code mobile website app',
    content:
      'If you need a mobile web QR Code, then we can help you, and we can also create themes with various technologies according to your favorite web technology or CMS.',
    video: 'raK-nmqsInY',
  },
  {
    id: 14,
    title: 'House',
    description: 'Property Sell and Rent Website',
    content:
      'Developing a property website using Python Django, for the needs of selling and renting property with complete features makes it easier for you to develop a property website.',
    video: 'KGD1xZrPb8Y',
  },
  {
    id: 15,
    title: 'School',
    description: 'Deploy school website with modern tech',
    content:
      'From now on, use modern technology such as Svelte Kit, React Js, Angular, Next Js, Gatsby Js integrated with Headless CMS, making it easier to update your school website. ',
    video: 'hLjAOcPVz0w',
  },
  {
    id: 16,
    title: 'CMS',
    description: 'Integration your frontend project with CMS',
    content:
      'If you have a frontend project, and need a content management system, then we can help you develop a backend CMS with Healdess CMS to make it easier for you to update your website.',
    video: '2FlUKl7D84w',
  },
];
