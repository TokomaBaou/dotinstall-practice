import "./styles.css";

document.getElementById("app").innerHTML = `
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>My Site</title>
  <style>
    img {
      border-radius: 50%;
    }
    section {
      border-width: 1px;
      border-color: gray;
      border-style: solid;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 8px;
      background-image:url(background.png)
    }
    body {
      text-align: center;
    }
  </style>
</head>
<body>
  <section>
    <img src="icon.png" alt="太郎のアイコン画像です">
    <h1>山田太郎</h1>
    <p>UI/UXデザイナー見習いです。日々の勉強、がんばっています。</p>
  </section>
  <footer>(c) dotinstall.com</footer>
</body>
</html>
`;
