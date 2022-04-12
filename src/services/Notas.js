import { db } from './SQLite';

export const criarTabela = () => {
  db.transaction((transaction) => {
    transaction.executeSql(
      'CREATE TABLE IF NOT EXISTS ' +
        'Notas ' +
        '(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, categoria TEXT, texto TEXT);'
    );
  });
};

export const adicionarNota = async (nota) => {
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        'INSERT INTO Notas (titulo, categoria, texto) VALUES (?, ?, ?);',
        [nota.titulo, nota.categoria, nota.texto],
        () => {
          resolve('Nota adicionada com sucesso!');
        }
      );
    });
  });
};

export const buscarNotas = async (nota) => {
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        'SELECT * FROM Notas;',
        [],
        (transaction, resultado) => {
          resolve(resultado.rows._array);
        }
      );
    });
  });
};

export const atualizarNota = async (nota) => {
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        'UPDATE Notas SET titulo = ?, categoria = ?, texto = ? WHERE id = ?;',
        [nota.titulo, nota.categoria, nota.texto, nota.id],
        () => {
          resolve('Nota atualizada com sucesso!');
        }
      );
    });
  });
};
