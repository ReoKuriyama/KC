# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
5.0

* System dependencies

* Configuration

* Database creation
 ####messages

  | column | type | option |
|:-----------|:----------- |:-----|
| body       |   text      |      |
| image      |   string    |      |
| group_id   |   integer   | n, f |
| user_id    |   integer   | n, f |

 ####users

  | column | type | option |
|:-----------|:----------- |:-----|
| name       |   string   | n, i  |
| profile_image |   string   |       |
| age        |   integer  |       |
| gender     |   integer  |       |
| email      |   string   | n     |
| password   |   string   | n     |


 ####groups

  | column | type | option |
|:---------|:----------- |:-----|
| name     |   string    | n  i |

 ####member

  | column | type | option |
|:-----------|:----------- |:-----|
| group_id   |   integer   | n, f |
| user_id    |   integer   | n, f |

 ####tags

  | column | type | option |
|:-----------|:----------- |:-----|
| name       |   string    | n  i |

 ####tag_manage

  | column | type | option |
|:-----------|:----------- |:-----|
| tag_id     |   integer   | n, f |
| user_id    |   integer   | n, f |

 n = null: false
 i = index
 f = foreign_key: true


* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
