module.exports = {
  handleSequelizeUpsertResult: created => created?'created':'updated'
}