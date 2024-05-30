create database if not exists dm default char set utf8 collate utf8_general_ci;

use dm;

create table admin
(
    id          varchar(32)                         not null
        primary key,
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

create table dormitory_manager
(
    id          varchar(32)                         not null
        primary key,
    valid       varchar(1)                          null,
    version     int                                 null,
    name        varchar(32)                         not null,
    password    varchar(32)                         null,
    sex         varchar(4)                          not null,
    sn          varchar(32)                         not null,
    constraint UK_6xasm96t41pqnctqrvan7w7hk
        unique (sn)
);

create table live
(
    id           varchar(32)                         not null
        primary key,
    valid        varchar(1)                          null,
    version      int                                 null,
    dormitory_id varchar(32)                         not null,
    live_date    timestamp                           not null,
    student_id   varchar(32)                         not null
);

create table student
(
    id          varchar(32)                         not null
        primary key,
    create_time timestamp default CURRENT_TIMESTAMP not null,
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

INSERT INTO admin (id, valid, version, name, password) VALUES ('ff808081793a4d0701793a4e0a0a0009', '1', 0, 'admin', 'admin');

INSERT INTO building (id, valid, version, dormitory_manager_id, location, name) VALUES ('ff808081793a4d0701793a4e0a0a0000', '1', 1, 'ff808081793ac6fb01793ac7e0c90001', '北京市海淀区松鼠街二段188号', '18舍1218');
INSERT INTO building (id, valid, version, dormitory_manager_id, location, name) VALUES ('ff808081793a4d0701793a4f70410001', '1', 1, 'ff808081793ac6fb01793ac7b1e30000', '北京市海淀区松鼠街二段188号', '18舍1219');

INSERT INTO dormitory (id, valid, version, building_id, floor, lived_number, max_number, sn) VALUES ('ff808081793a55e601793a56c1f40001', '1', 0, 'ff808081793a4d0701793a4f70410001', '1', 1, 4, '18舍1219');
INSERT INTO dormitory (id, valid, version, building_id, floor, lived_number, max_number, sn) VALUES ('ff808081793ac6fb01793ac895b10002', '1', 0, 'ff808081793a4d0701793a4f70410001', '1', 1, 4, '18舍1218');

INSERT INTO dormitory_manager (id, valid, version, name, password, sex, sn) VALUES ('ff808081793ac6fb01793ac7b1e30000', '1', 2, '89', '111111', '男', 'SG0001');
INSERT INTO dormitory_manager (id, valid, version, name, password, sex, sn) VALUES ('ff808081793ac6fb01793ac7e0c90001', '1', 0, '95', '111111', '女', 'SG0002');

INSERT INTO live (id, valid, version, dormitory_id, live_date, student_id) VALUES ('ff808081793ab08a01793ab0f40a0000', '1', 4, 'ff808081793ac6fb01793ac895b10002', '1', '402883e4793a407601793a4b3ce40001');
INSERT INTO live (id, valid, version, dormitory_id, live_date, student_id) VALUES ('ff808081793ab08a01793ab127ea0001', '1', 1, 'ff808081793a55e601793a56c1f40001', '1', 'ff808081793a50de01793a5361ad0000');

INSERT INTO student (id, create_time, valid, version, name, password, sex, sn, contact) VALUES ('402883e4793a407601793a4b3ce40001', '1', '1', 0, '杨润东', '111111', '男', 'S123455', '13330654511');
INSERT INTO student (id, create_time, valid, version, name, password, sex, sn, contact) VALUES ('ff808081793a50de01793a5361ad0000', '1', '1', 0, '陶雨阳', '111111', '女', 'S123457', '15562245451');
