import knex from 'knex';
import bookshelf from 'bookshelf';
import knexconfig from '../knexfile';

export default bookshelf(knex(knexconfig.development));
