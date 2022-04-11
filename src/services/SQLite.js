import * as SQLite from 'expo-sqlite';

const abrirConexao = () => {
  const database = SQLite.openDatabase('db.db');
  return database;
};

export const db = abrirConexao();
