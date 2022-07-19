
const GETNEWS =    `
    select 
        *
    from news
    where status = 'active' and case
                                    when $1 > 0 then news_id = $1
                                    else true
                                end
`

const ADDNEWS =  `
    insert into news (news_image, title, description) values
    ($1, $2, $3) returning *
`

module.exports = {
    GETNEWS, ADDNEWS
}