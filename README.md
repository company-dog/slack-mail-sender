## 認証

```
firebase login

firebase logout
```

```
firebase init functions
```

## config の設定

```
firebase functions:config:set gmail.email="xxxxxxs@***.***.com" gmail.password="*********" gmail.username="永倉" to.email="xxxxx@hogehoge.com"
```

```ts
// 以下のように取得することができる
const email = functions.config().gmail.email;
const password = functions.config().gmail.password;
```

## デプロイ

```
# 関数だけデプロイ
firebase deploy --only functions
```

## プロジェクト系

```
# プロジェクトの初期化
firebase init functions
```

```
# プロジェクトを作る
firebase projects:create

# プロジェクト一覧の確認
firebase projects:list

# プロジェクトの切り替え
firebase use [プロジェクト名]
```
