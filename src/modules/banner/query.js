

const ADD = `
    insert into banner (image)
        values ($1)
    returning *
`

const GET = `
    select * from banner
`

const DELETE = `
    delete from banner where banner_id = $1
    returning *
`

module.exports = {
    ADD,
    GET,
    DELETE
}