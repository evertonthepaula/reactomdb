import Api from '../http/index';

function find({
  id = '',
  title = '',
  type = '',
  year = '',
  plot = 'full',
  dataType = 'json',
}) {
  return Api(
    `?${id ? `i=${id}&` : ''}${title ? `t=${title}&` : ''}${
      type ? `type=${type}&` : ''
    }${year ? `y=${year}&` : ''}plot=${plot}&r=${dataType}`
  );
}

function search({
  title = '',
  type = '',
  year = '',
  dataType = 'json',
  page = 1,
}) {
  return Api(
    `?${title ? `s=${title}&` : ''}${type ? `type=${type}&` : ''}${
      year ? `y=${year}&` : ''
    }page=${page}&r=${dataType}`
  );
}

export default {
  find,
  search,
};
