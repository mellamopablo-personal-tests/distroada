CREATE TABLE distros
(
  id               SERIAL       NOT NULL
    CONSTRAINT distros_pkey
    PRIMARY KEY,
  name             VARCHAR(255) NOT NULL,
  home_url         VARCHAR,
  mailinglists_url VARCHAR,
  user_forums_url  VARCHAR,
  bug_tracker_url  VARCHAR
);
CREATE UNIQUE INDEX distros_id_uindex
  ON distros (id);
CREATE UNIQUE INDEX distros_name_uindex
  ON distros (name);