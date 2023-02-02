const bootstrap = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>`;

const header = `
  ${bootstrap}
  <title>Team Display</title>
</head>`;

const bodyTop = `<body class="min-vh-100 d-flex flex-column align-items-center justify-content-center bg-dark">
    <section class="w-100 d-flex flex-row flex-wrap justify-content-around">`;


module.exports = { bootstrap,
        header,
        bodyTop,
  };