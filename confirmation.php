<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/main.css">
  <title>My Portfolio</title>
</head>
<body>
  <section id="confirmation">
    <h1 class="title">お問い合わせ内容</h1>
    <p class="coment">各項目に間違いが無ければ送信ボタンを押してください。</p>
    <form action="form.html" method="POST">
      <table class="contactform">
        <tr>
          <th>性:</th>
          <td><input type="text" name="firstName" value="<?php echo $_POST["firstName"];?>"></td>
        </tr>
        <tr>
          <th>名:</th>
          <td><input type="text" name="lastName" value="<?php echo $_POST["lastName"]; ?>"></td>
        </tr>
        <tr>
          <th>メールアドレス:</th>
          <td><input type="text" name="address" value="<?php echo $_POST["address"]; ?>"></td>
        </tr>
        <tr>
          <th valin="top">お問い合わせ:</th>
          <td><textarea name="contact" cols="40" rows="10"><?php echo $_POST["contact"]; ?></textarea></td>
        </tr>
      </table>
      <div class="contactform_btn">
        <input type="submit" value="送信" class="submit">
        <a href="index.html">戻る</a>
      </div>
    </form>
  </section>
</body>
</html>