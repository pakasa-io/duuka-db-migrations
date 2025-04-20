const { execute } = require('@evershop/postgres-query-builder');

module.exports = exports = async (connection) => {
  await addDefaultShippingMethods(connection)
};

function addDefaultShippingMethods(connection) {
  sql = `
  insert into public.shipping_method ( uuid, name)
  values  (DEFAULT, 'Same Day'),
          (DEFAULT, 'Tomorrow'),
          (DEFAULT, 'Two Days'),
          (DEFAULT, 'As early as possible');
  `

  return execute(connection, sql);
}
