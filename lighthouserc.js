module.exports = {
  ci: {
    collect: {
      url: [
        "http://localhost:7000",
      ],
      numberOfRuns: 1,
      startServerCommand: "light-server -s . -p 7000"
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
