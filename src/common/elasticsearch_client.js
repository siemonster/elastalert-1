import elasticsearch from 'elasticsearch';
import config from './config';

export function getClient() {
  var client = new elasticsearch.Client({
    hosts: [ `${config.get('protocol')}://${config.get('auth')}@${config.get('es_host')}:${config.get('es_port')}`]
  });
  return client;
}
