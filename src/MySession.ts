import {Session} from 'redux-orm'
import Schema from './Schema'

type MySession = Session<Schema>

export default MySession