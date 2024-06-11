export const implementations = [
  {
    id: 'https://github.com/janeirodigital/sai-js/tree/main/examples/vuejectron',
    type: ['Application', 'Implementation'],
    name: 'Vujectron',
    programmingLanguage: 'wikidata:Q978185',
    framework: 'https://vuejs.org/',
    maintainer: [
      'https://elf-pavlik.hackers4peace.net',
    ],
    contributor: [
      'https://elf-pavlik.hackers4peace.net',
    ],
    dependency: [
      'https://www.npmjs.com/package/@ldo/solid',
      'https://www.npmjs.com/package/@janeirodigital/interop-application',
      'https://www.npmjs.com/package/@solid-notifications/discovery',
      'https://www.npmjs.com/package/@inrupt/solid-client-authn-core',
    ],
    implements: [
      'https://solidproject.org/TR/notifications-protocol#receiver',
      'https://solid.github.io/notifications/streaming-http-channel-2023#channel',
    ]
  },
  {
    id: 'https://github.com/janeirodigital/sai-js/tree/main/examples/plenary',
    type: ['Application', 'Implementation'],
    name: 'Plenary',
    programmingLanguage: 'wikidata:Q978185',
    framework: 'https://vuejs.org/',
    maintainer: [
      'https://elf-pavlik.hackers4peace.net',
    ],
    contributor: [
      'https://elf-pavlik.hackers4peace.net',
    ],
    dependency: [
      'https://www.npmjs.com/package/@ldo/solid',
      'https://www.npmjs.com/package/@janeirodigital/interop-application',
      'https://www.npmjs.com/package/@inrupt/solid-client-authn-core',
    ]
  },
  {
    id: 'https://www.npmjs.com/package/@ldo/solid',
    type: ['Module', 'Implementation'],
    name: '@ldo/solid',
    programmingLanguage: 'wikidata:Q978185',
    maintainer: [
      'https://github.com/jaxoncreed',
    ],
    contributor: [
      'https://github.com/jaxoncreed',
    ],
    implements: [
      'https://solidproject.org/TR/protocol#client',
    ]
  },
  {
    id: 'https://www.npmjs.com/package/@janeirodigital/interop-application',
    type: ['Module', 'Implementation'],
    name: '@janeirodigital/interop-application',
    programmingLanguage: 'wikidata:Q978185',
    maintainer: [
      'https://elf-pavlik.hackers4peace.net',
    ],
    contributor: [
      'https://elf-pavlik.hackers4peace.net',
      'https://samurex.hackers4peace.net',
    ],
    implements: [
      'https://solid.github.io/data-interoperability-panel/specification/#application',
    ]
  },
  {
    id: 'https://www.npmjs.com/package/@janeirodigital/interop-authorization-agent',
    type: ['Module', 'Implementation'],
    name: '@janeirodigital/interop-authorization-agent',
    programmingLanguage: 'wikidata:Q978185',
    maintainer: [
      'https://elf-pavlik.hackers4peace.net',
    ],
    contributor: [
      'https://elf-pavlik.hackers4peace.net',
      'https://samurex.hackers4peace.net',
    ],
    implements: [
      'https://solid.github.io/data-interoperability-panel/specification/#authorization-agent',
    ]
  },
  {
    id: 'https://github.com/janeirodigital/sai-js/tree/main/packages/service',
    type: ['Service', 'Implementation'],
    name: 'SAI Authorization Agent',
    programmingLanguage: 'wikidata:Q978185',
    maintainer: [
      'https://elf-pavlik.hackers4peace.net',
    ],
    contributor: [
      'https://elf-pavlik.hackers4peace.net',
      'https://samurex.hackers4peace.net',
    ],
    dependency: [
      'https://www.npmjs.com/package/@janeirodigital/interop-authorization-agent',
      'https://www.npmjs.com/package/@inrupt/solid-client-authn-core',
      'https://www.npmjs.com/package/@solid-notifications/discovery',
      'https://www.npmjs.com/package/@solid-notifications/subscription',
    ],
    implements: [
      'https://solidproject.org/TR/notifications-protocol#receiver',
      'https://solid.github.io/notifications/webhook-channel-2023#channel',
    ]
  },
  {
    id: 'https://www.npmjs.com/package/@solid-notifications/discovery',
    type: ['Module', 'Implementation'],
    name: '@solid-notifications/discovery',
    programmingLanguage: 'wikidata:Q978185',
    maintainer: [
      'https://github.com/jaxoncreed',
      'https://elf-pavlik.hackers4peace.net',
      'https://github.com/woutslabbinck',
    ],
    contributor: [
      'https://github.com/jaxoncreed',
      'https://elf-pavlik.hackers4peace.net',
      'https://github.com/woutslabbinck',
    ],
    implements: [
      'https://solidproject.org/TR/notifications-protocol#discovery-client',
    ]
  },
  {
    id: 'https://www.npmjs.com/package/@solid-notifications/subscription',
    type: ['Module', 'Implementation'],
    name: '@solid-notifications/subscription',
    programmingLanguage: 'wikidata:Q978185',
    maintainer: [
      'https://github.com/jaxoncreed',
      'https://elf-pavlik.hackers4peace.net',
      'https://github.com/woutslabbinck',
    ],
    contributor: [
      'https://github.com/jaxoncreed',
      'https://elf-pavlik.hackers4peace.net',
      'https://github.com/woutslabbinck',
    ],
    implements: [
      'https://solidproject.org/TR/notifications-protocol#subscription-client',
    ]
  },
  {
    id: 'https://www.npmjs.com/package/@inrupt/solid-client-authn-core',
    type: ['Module', 'Implementation'],
    name: '@inrupt/solid-client-authn-core',
    programmingLanguage: 'wikidata:Q978185',
    maintainer: [
      'https://github.com/NSeydoux',
    ],
    contributor: [
      'https://github.com/NSeydoux',
    ],
    implements: [
      'https://solidproject.org/TR/oidc#client',
    ]
  },
  {
    id: 'https://github.com/inrupt/solid-client-java',
    type: ['Module', 'Implementation'],
    name: 'Solid Client Java',
    programmingLanguage: 'wikidata:Q251',
    maintainer: [
      'https://people.apache.org/~acoburn/#i',
    ],
    contributor: [
      'https://people.apache.org/~acoburn/#i',
    ],
    implements: [
      'https://solidproject.org/TR/protocol#client',
      'https://solidproject.org/TR/oidc#client',
    ]
  },
  {
    id: 'https://github.com/CarrettiPro/keycloak-solid',
    type: ['Service', 'Implementation'],
    name: 'Keycloak OIDC Provider',
    programmingLanguage: 'wikidata:Q251',
    maintainer: [
      'https://github.com/dteleguin',
    ],
    contributor: [
      'https://github.com/dteleguin',
    ],
    implements: [
      'https://solidproject.org/TR/oidc#provider',
    ]
  },
  {
    id: 'https://github.com/CommunitySolidServer/CommunitySolidServer/tree/main/src/identity',
    type: ['Service', 'Implementation'],
    name: 'CSS OIDC Provider',
    programmingLanguage: 'wikidata:Q978185',
    maintainer: [
      'https://github.com/joachimvh',
    ],
    contributor: [
      'https://github.com/joachimvh',
    ],
    implements: [
      'https://solidproject.org/TR/oidc#provider',
    ]
  },
  {
    id: 'https://github.com/CommunitySolidServer/CommunitySolidServer/tree/main/src/http',
    type: ['Service', 'Implementation'],
    name: 'CSS Solid Storage',
    programmingLanguage: 'wikidata:Q978185',
    maintainer: [
      'https://github.com/joachimvh',
    ],
    contributor: [
      'https://github.com/joachimvh',
    ],
    implements: [
      'https://solidproject.org/TR/protocol#server',
      'https://solidproject.org/TR/notifications-protocol#resource-server',
    ]
  },
  {
    id: 'https://github.com/SolidLabResearch/user-managed-access/',
    type: ['Service', 'Implementation'],
    name: 'CSS UMA Authorization Server',
    programmingLanguage: 'wikidata:Q978185',
    maintainer: [
      'https://github.com/termontwouter',
    ],
    contributor: [
      'https://github.com/termontwouter',
    ],
    implements: [
    ]
  },
  {
    id: 'https://github.com/CommunitySolidServer/CommunitySolidServer/blob/main/src/server/notifications/NotificationEmitter.ts',
    type: ['Service', 'Implementation'],
    name: 'CSS Solid Notifications - Notifications Sender',
    programmingLanguage: 'wikidata:Q978185',
    maintainer: [
      'https://github.com/joachimvh',
    ],
    contributor: [
      'https://github.com/joachimvh',
      'https://elf-pavlik.hackers4peace.net',
    ],
    implements: [
      'https://solidproject.org/TR/notifications-protocol#sender',
      'https://solid.github.io/notifications/streaming-http-channel-2023#channel',
      'https://solid.github.io/notifications/webhook-channel-2023#channel',
    ]
  },
  {
    id: 'https://github.com/CommunitySolidServer/CommunitySolidServer/blob/main/src/server/notifications/NotificationSubscriber.ts',
    type: ['Service', 'Implementation'],
    name: 'CSS Solid Notifications - Subscription Server',
    programmingLanguage: 'wikidata:Q978185',
    maintainer: [
      'https://github.com/joachimvh',
    ],
    contributor: [
      'https://github.com/joachimvh',
    ],
    implements: [
      'https://solidproject.org/TR/notifications-protocol#subscription-server',
      'https://solid.github.io/notifications/webhook-channel-2023#channel',
    ]
  },
]
