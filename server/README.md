[setting typeorm](https://medium.com/@giuseppepace_505/graphql-apollo-server-express-typeorm-a67cf96c3bf8)

TYPEORM INSTALLING
==================
enable migrations
```
sudo npm i -g typeorm
npm install -g ts-node typescript
```

USAGE
=====

```
yarn install
yarn start
```

MIGRATIONS
=================
[migrations guide](https://medium.com/nuances-of-programming/%D0%BF%D0%BE%D0%BD%D1%8F%D1%82%D0%B8%D0%B5-%D0%BE-%D0%BC%D0%B8%D0%B3%D1%80%D0%B0%D1%86%D0%B8%D1%8F%D1%85-%D0%B2-typeorm-9a6a40ddd76e)

creation
```
ts-node ./node_modules/.bin/typeorm migration:generate -n someMigrationName
```
