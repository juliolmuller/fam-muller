export interface User {
  id: string;
  name: string;
  fullName: string;
}

export interface TimelineEventAttachment {
  id: string;
  name: string;
  type: 'image' | 'link' | 'pdf' | 'video';
  url: string;
}

export interface TimelineEvent {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date | null;
  description: string | null;
  attachments: TimelineEventAttachment[];
  markedPeople: User[];
}

const genRandomId = () => Math.random().toString(36).split('.')[1];

const mockedUsers: User[] = [
  {
    id: genRandomId(),
    name: 'Shirley',
    fullName: 'Shirley Marvin',
  },
  {
    id: genRandomId(),
    name: 'Elisa',
    fullName: 'Elisa Koelpin',
  },
  {
    id: genRandomId(),
    name: 'Percy',
    fullName: 'Percy Turcotte',
  },
  {
    id: genRandomId(),
    name: 'Irvin',
    fullName: 'Irvin Boehm DVM',
  },
  {
    id: genRandomId(),
    name: 'Alberto',
    fullName: 'Alberto Sporer',
  },
  {
    id: genRandomId(),
    name: 'Marcos',
    fullName: 'Marcos Schaefer',
  },
  {
    id: genRandomId(),
    name: 'Salvatore',
    fullName: 'Salvatore Rolfson',
  },
  {
    id: genRandomId(),
    name: 'Cora',
    fullName: 'Cora Zboncak',
  },
  {
    id: genRandomId(),
    name: 'Erma',
    fullName: 'Erma Murphy',
  },
  {
    id: genRandomId(),
    name: 'Keith',
    fullName: 'Keith Kreiger',
  },
];

const getRandomUsers = (count = 1) => {
  const usersSet = new Set<User>();
  const totalUsers = mockedUsers.length;

  while (usersSet.size < count) {
    const randomNumber = Math.random();
    const randomIndex = Math.round(randomNumber * totalUsers);

    usersSet.add(mockedUsers[randomIndex]);
  }

  return [...usersSet];
};

const getRandomPhotos = (count = 1): TimelineEventAttachment[] => {
  return Array(count)
    .fill(null)
    .map(() => ({
      id: genRandomId(),
      name: 'photo',
      type: 'image',
      url: `https://picsum.photos/seed/${genRandomId()}/200`,
    }));
};

export const mockedEvents: TimelineEvent[] = [
  {
    id: genRandomId(),
    name: 'Esse é um evento',
    description:
      'Corporis exercitationem ex rerum eos sunt ex. Explicabo nisi libero. Aut distinctio unde aut voluptas. Enim fuga reprehenderit rerum repudiandae quia voluptatem.',
    startDate: new Date(1899, 5, 20),
    endDate: null,
    markedPeople: getRandomUsers(2),
    attachments: getRandomPhotos(5),
  },
  {
    id: genRandomId(),
    name: 'Outro Evento',
    description:
      'Ipsa est nihil laboriosam nihil. Dolorum quia velit nisi dolores harum molestiae sit. Vero omnis consectetur. Quo enim velit. Doloribus aut quaerat magnam.',
    startDate: new Date(1914, 8, 13),
    endDate: null,
    markedPeople: getRandomUsers(),
    attachments: getRandomPhotos(12),
  },
  {
    id: genRandomId(),
    name: 'Evento do Século',
    description:
      'Voluptas deleniti et et sed modi quo. Quibusdam adipisci occaecati ipsum excepturi quod voluptates vel necessitatibus. Officia voluptatibus qui aut illo placeat. Quis architecto voluptas ducimus sint ut harum. Explicabo et vitae consequuntur non ducimus nihil corporis sit. Earum placeat qui aut sit quia animi nulla.',
    startDate: new Date(1918, 2, 15),
    endDate: null,
    markedPeople: getRandomUsers(),
    attachments: getRandomPhotos(20),
  },
  {
    id: genRandomId(),
    name: 'Que sucesso esse momento!',
    description:
      'Sunt impedit voluptatum eum facere eum ea qui id est. Rem nisi quis veniam dolore consequatur voluptatem ea. Est minus sed aut autem sit dolores perspiciatis eum. At et cum. Quis natus sequi. Eum libero est autem eum ut culpa doloribus.',
    startDate: new Date(1918, 2, 15),
    endDate: new Date(1918, 2, 16),
    markedPeople: getRandomUsers(2),
    attachments: [],
  },
  {
    id: genRandomId(),
    name: 'E nasce uma estrela!',
    description:
      'Odit neque expedita quo est eius voluptatibus vitae ad. Laboriosam quia et voluptatem. Occaecati reiciendis est ab placeat minima.',
    startDate: new Date(1966, 2, 26),
    endDate: null,
    markedPeople: getRandomUsers(3),
    attachments: getRandomPhotos(4),
  },
  {
    id: genRandomId(),
    name: 'Coisa de loco!',
    description:
      'Aspernatur mollitia minima et ab unde qui praesentium ipsa. Sit explicabo autem. Eveniet qui aut dicta molestias ipsa ut et nemo. Laborum sit non soluta vero deleniti non at vitae. Eos commodi repudiandae. Dicta ab dolor.',
    startDate: new Date(1967, 4, 23),
    endDate: null,
    markedPeople: getRandomUsers(6),
    attachments: getRandomPhotos(6),
  },
];
