import { Pool, Client } from 'pg'

export const pool = new Pool({
  host: process.env.DB_HOST,
  user: 'admin',
  password: 'admin',
  port: 5432,
  database: 'technical',
})

async function connectDataBase() {
  const client = new Client({
    host: process.env.DB_HOST,
    user: 'admin',
    password: 'admin',
    database: 'technical',
    port: 5432,
  })

  try {
    await client.connect()
    const result = await client.query('SELECT NOW()')
    console.log('CONECTED --->', result.rows[0])
  } catch (error) {
    console.error('Error al conectar o consultar la base de datos:', error)
    process.exit(1)
  } finally {
    await client.end()
  }
}

connectDataBase()
