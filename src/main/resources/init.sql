create database if not exists dm default char set utf8 collate utf8_general_ci;

use dm;

create table admin
(
    id          varchar(32)                         not null
        primary key,
    create_time timestamp default CURRENT_TIMESTAMP not null,
    update_time timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    valid       varchar(1)                          null,
    version     int                                 null,
    name        varchar(32)                         not null,
    password    varchar(32)                         not null,
    constraint UK_5cca88c6i17ttuegcvdkgehah
        unique (name)
);

create table building
(
    id                   varchar(32)                         not null
        primary key,
    create_time          timestamp default CURRENT_TIMESTAMP not null,
    update_time          timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    valid                varchar(1)                          null,
    version              int                                 null,
    dormitory_manager_id varchar(32)                         null,
    location             varchar(128)                        not null,
    name                 varchar(64)                         not null,
    constraint UK_oyx9p4qp0ot5mw2vdn1qgax00
        unique (name)
);

create table dormitory
(
    id           varchar(32)                         not null
        primary key,
    create_time  timestamp default CURRENT_TIMESTAMP not null,
    update_time  timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    valid        varchar(1)                          null,
    version      int                                 null,
    building_id  varchar(32)                         null,
    floor        varchar(32)                         not null,
    lived_number int                                 null,
    max_number   int                                 not null,
    sn           varchar(32)                         not null,
    constraint UK_a6os0dike7isf1gh2gw2fuqkx
        unique (sn)
);

create table live
(
    id           varchar(32)                         not null
        primary key,
    create_time  timestamp default CURRENT_TIMESTAMP not null,
    update_time  timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    valid        varchar(1)                          null,
    version      int                                 null,
    dormitory_id varchar(32)                         not null,
    live_date    timestamp                           not null,
    student_id   varchar(32)                         not null,
    lived_number int                                 null
);

create table student
(
    id          varchar(32)                         not null
        primary key,
    create_time timestamp default CURRENT_TIMESTAMP not null,
    update_time timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    valid       varchar(1)                          null,
    version     int                                 null,
    name        varchar(16)                         not null,
    password    varchar(32)                         null,
    sex         varchar(4)                          not null,
    sn          varchar(32)                         not null,
    contact     varchar(32)                         null,
    constraint UK_djcbk1s9vb3fxo2ft5f1fgic2
        unique (sn)
);

INSERT INTO admin (id, create_time, update_time, valid, version, name, password) VALUES ('admin_id_1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', 0, 'admin', 'admin');

INSERT INTO building (id, create_time, update_time, valid, version, location, name) VALUES ('hygiene_id_1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', 1, '89', '18舍1218');
INSERT INTO building (id, create_time, update_time, valid, version, location, name) VALUES ('hygiene_id_2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', 1, '95', '18舍1219');

INSERT INTO dormitory (id, create_time, update_time, valid, version, building_id, floor, lived_number, max_number, sn) VALUES ('dormitory_id_1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', 0, 'hygiene_id_1', '1', 1, 4, '18舍1218');
INSERT INTO dormitory (id, create_time, update_time, valid, version, building_id, floor, lived_number, max_number, sn) VALUES ('dormitory_id_2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', 0, 'hygiene_id_2', '1', 1, 4, '18舍1219');

INSERT INTO live (id, create_time, update_time, valid, version, dormitory_id, live_date, student_id, lived_number) VALUES ('live_id_1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', 4, 'dormitory_id_2', CURRENT_TIMESTAMP, 'student_id_1', '1');
INSERT INTO live (id, create_time, update_time, valid, version, dormitory_id, live_date, student_id, lived_number) VALUES ('live_id_2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', 1, 'dormitory_id_1', CURRENT_TIMESTAMP, 'student_id_2', '1');

INSERT INTO student (id, create_time, update_time, valid, version, name, password, sex, sn, contact) VALUES ('student_id_1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', 0, '杨润东', '111111', '男', '2106060123', '13336548564');
INSERT INTO student (id, create_time, update_time, valid, version, name, password, sex, sn, contact) VALUES ('student_id_2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', 0, '陶雨阳', '111111', '女', '2106060126', '12345678902');
