CREATE TABLE distros
(
  id              SERIAL       NOT NULL
    CONSTRAINT distros_pkey
    PRIMARY KEY,
  name            VARCHAR(255) NOT NULL,
  homeurl         VARCHAR,
  mailinglistsurl VARCHAR,
  userforums      VARCHAR,
  bugtracker      VARCHAR
);
CREATE UNIQUE INDEX distros_id_uindex
  ON distros (id);
CREATE UNIQUE INDEX distros_name_uindex
  ON distros (name);