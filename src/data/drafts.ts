export const drafts = [
  {
    id: 'https://solidproject.org/TR/oidc',
    type: [ 'Specification', 'Draft' ],
    name: 'Solid-OIDC',
    editor: [
      'https://people.apache.org/~acoburn/#i',
      'https://elf-pavlik.hackers4peace.net',
    ],
    author: [
      'https://people.apache.org/~acoburn/#i',
      'https://elf-pavlik.hackers4peace.net',
    ],
    specifies: [
      'https://solidproject.org/TR/oidc#client',
      'https://solidproject.org/TR/oidc#provider',
    ]
  },
  {
    id: 'https://solidproject.org/TR/oidc-primer',
    type: [ 'Primer', 'Draft' ],
    name: 'Solid-OIDC Primer',
    editor: [
      'https://people.apache.org/~acoburn/#i',
      'https://github.com/jaxoncreed',
      'https://elf-pavlik.hackers4peace.net',
      'https://github.com/matthieubosquet',
    ],
    author: [
      'https://people.apache.org/~acoburn/#i',
      'https://github.com/jaxoncreed',
      'https://elf-pavlik.hackers4peace.net',
      'https://github.com/matthieubosquet',
    ],
    explains: 'https://solidproject.org/TR/oidc',
  },
  {
    id: 'https://solidproject.org/TR/oidc#client',
    type: [ 'ProductClass' ],
    name: 'Solid-OIDC Client',
  },
  {
    id: 'https://solidproject.org/TR/oidc#provider',
    type: [ 'ProductClass' ],
    name: 'Solid-OIDC Provider',
  },
  {
    id: 'https://solid.github.io/data-interoperability-panel/specification/',
    type: [ 'Specification', 'Draft' ],
    name: 'Solid Application Interoperability',
    editor: [
      'https://github.com/justinwb',
      'https://elf-pavlik.hackers4peace.net',
      'https://github.com/ericprud',
    ],
    author: [
      'https://github.com/justinwb',
      'https://elf-pavlik.hackers4peace.net',
      'https://github.com/ericprud',
    ],
    specifies: [
      'https://solid.github.io/data-interoperability-panel/specification/#application',
      'https://solid.github.io/data-interoperability-panel/specification/#authorization-agent',
    ]
  },
  {
    id: 'https://solid.github.io/data-interoperability-panel/specification/#application',
    type: [ 'ProductClass' ],
    name: 'SAI Application',
  },
  {
    id: 'https://solid.github.io/data-interoperability-panel/specification/#authorization-agent',
    type: [ 'ProductClass' ],
    name: 'SAI Authorization Agent',
  },
  {
    id: 'https://solid.github.io/data-interoperability-panel/primer/application.html',
    type: [ 'Primer', 'Draft' ],
    name: 'Solid Application Interoperability - Application Primer',
    editor: [
      'https://elf-pavlik.hackers4peace.net',
    ],
    author: [
      'https://elf-pavlik.hackers4peace.net',
    ],
    explains: 'https://solid.github.io/data-interoperability-panel/specification/',
  },
  {
    id: 'https://solid.github.io/data-interoperability-panel/primer/authorization-agent.html',
    type: [ 'Primer', 'Draft' ],
    name: 'Solid Application Interoperability - Authorization Agent Primer',
    editor: [
      'https://elf-pavlik.hackers4peace.net',
    ],
    author: [
      'https://elf-pavlik.hackers4peace.net',
    ],
    explains: 'https://solid.github.io/data-interoperability-panel/specification/',
  },
  {
    id: 'https://solidproject.org/TR/notifications-protocol',
    type: [ 'Specification', 'Draft' ],
    name: 'Solid Notifications Protocol',
    editor: [
      'https://csarven.ca/#i'
    ],
    author: [
      'https://people.apache.org/~acoburn/#i',
      'https://csarven.ca/#i',
      'https://cxres.pages.dev/',
      'https://elf-pavlik.hackers4peace.net',
    ],
    specifies: [
      'https://solidproject.org/TR/notifications-protocol#discovery-client',
      'https://solidproject.org/TR/notifications-protocol#resource-server',
      'https://solidproject.org/TR/notifications-protocol#subscription-client',
      'https://solidproject.org/TR/notifications-protocol#subscription-server',
      'https://solidproject.org/TR/notifications-protocol#sender',
      'https://solidproject.org/TR/notifications-protocol#receiver',
    ],
  },
  {
    id: 'https://solidproject.org/TR/notifications-protocol#discovery-client',
    type: [ 'ProductClass' ],
    name: 'Solid Notifications - Discovery Client',
  },
  {
    id: 'https://solidproject.org/TR/notifications-protocol#resource-server',
    type: [ 'ProductClass' ],
    name: 'Solid Notifications - Resource Server',
  },
  {
    id: 'https://solidproject.org/TR/notifications-protocol#subscription-client',
    type: [ 'ProductClass' ],
    name: 'Solid Notifications - Subscription Client',
  },
  {
    id: 'https://solidproject.org/TR/notifications-protocol#subscription-server',
    type: [ 'ProductClass' ],
    name: 'Solid Notifications - Subscription Server',
  },
  {
    id: 'https://solidproject.org/TR/notifications-protocol#sender',
    type: [ 'ProductClass' ],
    name: 'Solid Notifications - Notification Sender',
  },
  {
    id: 'https://solidproject.org/TR/notifications-protocol#receiver',
    type: [ 'ProductClass' ],
    name: 'Solid Notifications - Notification Receiver',
  },
  {
    id: 'https://solid.github.io/security-considerations/',
    type: [ 'Primer', 'Draft' ],
    name: 'Solid Security Considerations',
    editor: [
      'https://elf-pavlik.hackers4peace.net',
    ],
    author: [
      'https://elf-pavlik.hackers4peace.net',
    ],
  },
  {
    id: 'https://solid.github.io/notifications/streaming-http-channel-2023',
    type: [ 'Specification', 'Draft' ],
    name: 'StreamingHTTPChannel2023',
    editor: [
      'https://elf-pavlik.hackers4peace.net',
    ],
    author: [
      'https://elf-pavlik.hackers4peace.net',
    ],
    specifies: [
      'https://solid.github.io/notifications/streaming-http-channel-2023#channel',
    ],
  },
  {
    id: 'https://solid.github.io/notifications/streaming-http-channel-2023#channel',
    type: [ 'ProductClass' ],
    name: 'StreamingHTTPChannel2023',
  },
  {
    id: 'https://solid.github.io/notifications/webhook-channel-2023',
    type: [ 'Specification', 'Draft' ],
    name: 'WebhookChannel2023',
    editor: [
      'https://elf-pavlik.hackers4peace.net',
    ],
    author: [
      'https://elf-pavlik.hackers4peace.net',
    ],
    specifies: [
      'https://solid.github.io/notifications/webhook-channel-2023#channel',
    ],
  },
  {
    id: 'https://solid.github.io/notifications/webhook-channel-2023#channel',
    type: [ 'ProductClass' ],
    name: 'WebhookChannel2023',
  },
  {
    id: 'https://solid.github.io/solid-prep/protocol/',
    type: [ 'Specification', 'Draft' ],
    name: 'Solid-PREP',
    editor: [
      'https://cxres.pages.dev/',
      'https://elf-pavlik.hackers4peace.net',
    ],
    author: [
      'https://cxres.pages.dev/',
      'https://elf-pavlik.hackers4peace.net',
    ],
  },
  {
    id: 'https://solidproject.org/TR/protocol',
    type: [ 'Specification', 'Draft' ],
    name: 'Solid Protocol',
    editor: [
      'https://csarven.ca/#i'
    ],
    author: [
    ],
    specifies: [
      'https://solidproject.org/TR/protocol#server',
      'https://solidproject.org/TR/protocol#client',
    ],
  },
  {
    id: 'https://solidproject.org/TR/protocol#server',
    type: [ 'ProductClass' ],
    name: 'Solid Protocol Storage Server',
  },
  {
    id: 'https://solidproject.org/TR/protocol#client',
    type: [ 'ProductClass' ],
    name: 'Solid Protocol Storage Client',
  },
  {
    id: 'https://solidproject.org/TR/acp',
    type: [ 'Specification', 'Draft' ],
    name: 'Access Control Policy',
    editor: [
      'https://github.com/matthieubosquet',
    ],
    author: [
    ],
    specifies: [
      'https://solidproject.org/TR/acp#resource-server',
      'https://solidproject.org/TR/acp#acp-server',
    ],
  },
  {
    id: 'https://solidproject.org/TR/acp#resource-server',
    type: [ 'ProductClass' ],
    name: 'ACP Resource Server',
  },
  {
    id: 'https://solidproject.org/TR/acp#acp-server',
    type: [ 'ProductClass' ],
    name: 'ACP Server',
  },
  {
    id: 'https://solidproject.org/TR/wac',
    type: [ 'Specification', 'Draft' ],
    name: 'Web Access Control',
    editor: [
      'https://csarven.ca/#i',
    ],
    author: [
      'https://csarven.ca/#i',
      'https://www.w3.org/People/Berners-Lee/card#i',
      'https://bblfish.net/profile/card#me',
    ],
    specifies: [
      'https://solidproject.org/TR/wac#resource-server',
    ],
  },
  {
    id: 'https://solidproject.org/TR/wac#resource-server',
    type: [ 'ProductClass' ],
    name: 'WAC Resource Server',
  },
  {
    id: 'https://solid.github.io/webid-profile/',
    type: [ 'Specification', 'Draft' ],
    name: 'Solid WebID Profile',
    editor: [
      'https://virginiabalseiro.com/#me',
      'https://jeff-zucker.solidcommunity.net/profile/card#me',
      'https://csarven.ca/#i',
    ],
    author: [
      'https://virginiabalseiro.com/#me',
      'https://timea.solidcommunity.net/profile/card#me',
      'https://jeff-zucker.solidcommunity.net/profile/card#me',
      'https://csarven.ca/#i',
      'https://www.w3.org/People/Berners-Lee/card#i',
    ],
    specifies: [
    ],
  },
  {
    id: 'https://solid.github.io/type-indexes/',
    type: [ 'Specification', 'Draft' ],
    name: 'Solid Type Indexes',
    editor: [
      'https://timea.solidcommunity.net/profile/card#me',
    ],
    author: [
      'https://timea.solidcommunity.net/profile/card#me',
      'https://virginiabalseiro.com/#me',
      'https://csarven.ca/#i',
      'https://www.w3.org/People/Berners-Lee/card#i',
    ],
    specifies: [
    ],
  },
  {
    id: 'https://shapetrees.org/TR/specification/',
    type: [ 'Specification', 'Draft' ],
    name: 'Shape Trees',
    editor: [
      'https://github.com/justinwb',
      'https://github.com/ericprud',
    ],
    author: [
      'https://github.com/justinwb',
      'https://github.com/ericprud',
    ],
    specifies: [
      'https://shapetrees.org/TR/specification/#resource-server',
    ],
  },
  {
    id: 'https://shapetrees.org/TR/specification/#resource-server',
    type: [ 'ProductClass' ],
    name: 'Shape Trees Resource Server',
  },
]
