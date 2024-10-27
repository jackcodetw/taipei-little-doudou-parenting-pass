import { migrateDatabase } from '../../utils/database'

export default defineTask({
  async run() {
    await migrateDatabase()
    return { result: 'ok' }
  },
})
