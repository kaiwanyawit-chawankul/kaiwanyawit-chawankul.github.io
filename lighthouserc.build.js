module.exports = {
  ci: {
    collect: {
      url: [
        "https://kaiwanyawit-chawankul.github.io/",
      ],
      numberOfRuns: 1,
      staticDistDir: "/"
    },
    assert: {
      preset: "lighthouse:recommended",
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://peaceful-earth-32428.herokuapp.com/',
      token: 'LHCI_TOKEN', // could also use LHCI_TOKEN variable instead
    },
  },
};
