import { db } from './SQLite';

const criarTabela = () => {
  db.transaction((transaction) => {
    transaction.executeSql(
      'CREATE TABLE IF NOT EXISTS ' +
        'Notas ' +
        '(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, categoria TEXT, texto TEXT);'
    );
  });
};
